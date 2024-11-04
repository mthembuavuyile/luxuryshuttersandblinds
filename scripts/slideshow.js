let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 1) { slideIndex = slides.length; }
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Update the display immediately instead of waiting for the next automatic change
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}
