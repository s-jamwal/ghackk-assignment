let currentIndex=0;const slides=document.querySelectorAll(".carousel-item"),totalSlides=slides.length,carouselTrack=document.querySelector(".carousel-track");function showSlide(e){carouselTrack.style.transform=`translateX(${-(100*e)}%)`}function nextSlide(){showSlide(currentIndex=(currentIndex+1)%totalSlides)}function prevSlide(){showSlide(currentIndex=(currentIndex-1+totalSlides)%totalSlides)}showSlide(currentIndex),setInterval(nextSlide,3e3),document.querySelector(".custom-next-arrow").addEventListener("click",nextSlide),document.querySelector(".custom-prev-arrow").addEventListener("click",prevSlide);