const http = require('http');
const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && (req.url === '/' || req.url === '/process-logo.html')) {
        const html = `
<!DOCTYPE html>
<html>
<head><title>Process AWEN Logo</title></head>
<body>
<h2>Processing AWEN Logo...</h2>
<canvas id="c"></canvas>
<script>
async function process() {
    const img = new Image();
    img.src = '/awen-logo.jpg';
    await new Promise(r => img.onload = r);

    const W = img.naturalWidth;
    const H = img.naturalHeight;

    // 1. Draw original to canvas to analyze pixels
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, W, H);
    const d = imgData.data;

    // Find bounding box of logo content (where pixel is significantly different from white 255,255,255)
    let minX = W, maxX = 0, minY = H, maxY = 0;
    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            const idx = (y * W + x) * 4;
            const r = d[idx], g = d[idx+1], b = d[idx+2];
            // If brightness is lower than 245 or color is red
            if (r < 240 || g < 240 || b < 240) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }

    console.log('Detected Logo BBox:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });

    // Function to create transparent image with clean alpha matting
    function makeTransparent(sourceCanvas, sx, sy, sw, sh, pad = 12) {
        const outCanvas = document.createElement('canvas');
        outCanvas.width = sw + pad * 2;
        outCanvas.height = sh + pad * 2;
        const outCtx = outCanvas.getContext('2d');

        // Initialize with white so no rgba(0,0,0,0) uninitialized pixels
        outCtx.fillStyle = '#ffffff';
        outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);

        // Draw cropped section with pad
        outCtx.drawImage(sourceCanvas, sx, sy, sw, sh, pad, pad, sw, sh);
        const outData = outCtx.getImageData(0, 0, outCanvas.width, outCanvas.height);
        const od = outData.data;

        // Convert white background to alpha cleanly
        for (let i = 0; i < od.length; i += 4) {
            const r = od[i], g = od[i+1], b = od[i+2];
            
            const dr = 255 - r;
            const dg = 255 - g;
            const db = 255 - b;
            const maxDiff = Math.max(dr, dg, db);

            // Anything close to white is background
            if (maxDiff < 38) {
                od[i+3] = 0;
            } else {
                // Smooth anti-aliased edge
                const alpha = Math.min(255, Math.max(0, Math.round(((maxDiff - 38) / 90) * 255)));
                od[i+3] = alpha;
            }
        }
        outCtx.putImageData(outData, 0, 0);
        return outCanvas;
    }

    // 1. Stacked Full Logo (tight crop)
    const stackedCanvas = makeTransparent(canvas, minX, minY, (maxX - minX), (maxY - minY), 12);
    const stackedDataUrl = stackedCanvas.toDataURL('image/png');

    // 2. Find emblem vs text split
    // In our image, emblem is the top part ('A' shape), text is "AWEN" and subtitle
    // Let's find horizontal blank line between emblem and "AWEN"
    let emblemMaxY = minY;
    for (let y = minY; y <= maxY; y++) {
        let hasContent = false;
        for (let x = minX; x <= maxX; x++) {
            const idx = (y * W + x) * 4;
            if (d[idx] < 240 || d[idx+1] < 240 || d[idx+2] < 240) {
                hasContent = true;
                break;
            }
        }
        // In the gap between emblem and AWEN (around y=430-470)
        if (!hasContent && y > minY + 200 && y < maxY - 100) {
            emblemMaxY = y;
            break;
        }
    }

    console.log('Emblem split at y =', emblemMaxY);

    // BBox of emblem
    let embMinX = W, embMaxX = 0, embMinY = minY, embMaxY_actual = minY;
    for (let y = minY; y <= emblemMaxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            const idx = (y * W + x) * 4;
            if (d[idx] < 240 || d[idx+1] < 240 || d[idx+2] < 240) {
                if (x < embMinX) embMinX = x;
                if (x > embMaxX) embMaxX = x;
                if (y > embMaxY_actual) embMaxY_actual = y;
            }
        }
    }
    const embW = embMaxX - embMinX;
    const embH = embMaxY_actual - embMinY;

    // BBox of text part
    let textMinX = W, textMaxX = 0, textMinY = H, textMaxY = 0;
    for (let y = emblemMaxY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            const idx = (y * W + x) * 4;
            if (d[idx] < 240 || d[idx+1] < 240 || d[idx+2] < 240) {
                if (x < textMinX) textMinX = x;
                if (x > textMaxX) textMaxX = x;
                if (y < textMinY) textMinY = y;
                if (y > textMaxY) textMaxY = y;
            }
        }
    }
    const textW = textMaxX - textMinX;
    const textH = textMaxY - textMinY;

    // 2. Emblem only
    const emblemCanvas = makeTransparent(canvas, embMinX, embMinY, embW, embH, 10);
    const emblemDataUrl = emblemCanvas.toDataURL('image/png');

    // 3. Text only
    const textCanvas = makeTransparent(canvas, textMinX, textMinY, textW, textH, 10);

    // 4. Horizontal composition (Emblem on Left, Text on Right)
    const horizCanvas = document.createElement('canvas');
    const targetH = 140; // High resolution height
    const embRatio = (embW + 20) / (embH + 20);
    const horizEmbW = Math.round(targetH * embRatio);
    
    // Scale text to align nicely with emblem
    const textScale = (targetH * 0.78) / (textH + 20);
    const horizTextW = Math.round((textW + 20) * textScale);
    const horizTextH = Math.round((textH + 20) * textScale);
    const gap = 32;

    horizCanvas.width = horizEmbW + gap + horizTextW + 24;
    horizCanvas.height = targetH + 24;
    const hctx = horizCanvas.getContext('2d');
    hctx.clearRect(0, 0, horizCanvas.width, horizCanvas.height);
    
    // Draw scaled emblem
    hctx.drawImage(emblemCanvas, 12, 12, horizEmbW, targetH);
    // Draw scaled text (vertically centered)
    const textOffsetY = Math.round(12 + (targetH - horizTextH) / 2);
    hctx.drawImage(textCanvas, 12 + horizEmbW + gap, textOffsetY, horizTextW, horizTextH);

    const horizDataUrl = horizCanvas.toDataURL('image/png');

    // Send results back to node server
    await fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            stacked: stackedDataUrl,
            emblem: emblemDataUrl,
            horizontal: horizDataUrl,
            stats: {
                minX, maxX, minY, maxY,
                embMinX, embMaxX, embMinY, embMaxY_actual,
                textMinX, textMaxX, textMinY, textMaxY
            }
        })
    });

    document.body.innerHTML = '<h2>Done processing! Check console and files.</h2>' +
        '<div style="background:#f4f4f4; padding:20px; display:flex; gap:30px; align-items:center;">' +
        '<div><h4>Stacked:</h4><img src="' + stackedDataUrl + '" height="120"></div>' +
        '<div><h4>Horizontal:</h4><img src="' + horizDataUrl + '" height="60"></div>' +
        '<div><h4>Emblem:</h4><img src="' + emblemDataUrl + '" height="80"></div>' +
        '</div>';
}
process();
</script>
</body>
</html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
        return;
    }

    if (req.method === 'GET' && req.url === '/awen-logo.jpg') {
        const imgPath = path.join(baseDir, 'awen-logo.jpg');
        const img = fs.readFileSync(imgPath);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(img);
        return;
    }

    if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const data = JSON.parse(body);
            
            // Save stacked PNG
            const stackedBase64 = data.stacked.replace(/^data:image\/png;base64,/, '');
            fs.writeFileSync(path.join(baseDir, 'awen-logo-transparent.png'), Buffer.from(stackedBase64, 'base64'));

            // Save emblem PNG
            const emblemBase64 = data.emblem.replace(/^data:image\/png;base64,/, '');
            fs.writeFileSync(path.join(baseDir, 'awen-emblem-transparent.png'), Buffer.from(emblemBase64, 'base64'));

            // Save horizontal PNG
            const horizBase64 = data.horizontal.replace(/^data:image\/png;base64,/, '');
            fs.writeFileSync(path.join(baseDir, 'awen-logo-horizontal.png'), Buffer.from(horizBase64, 'base64'));

            fs.writeFileSync(path.join(baseDir, 'logo-stats.json'), JSON.stringify(data.stats, null, 2));

            console.log('Saved transparent PNGs successfully!');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
            
            setTimeout(() => {
                server.close();
                process.exit(0);
            }, 500);
        });
        return;
    }

    res.writeHead(404);
    res.end('Not found');
});

server.listen(4570, () => {
    console.log('Server running on http://localhost:4570');
});
