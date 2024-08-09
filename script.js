document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
  }

  prevButton.addEventListener('click', () => {
      slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
      showSlide(slideIndex);
  });

  nextButton.addEventListener('click', () => {
      slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
      showSlide(slideIndex);
  });

  showSlide(slideIndex);
});
