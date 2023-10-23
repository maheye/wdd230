document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const pictureContainers = document.querySelectorAll(
      ".slider-container .slide"
    );
    const nextButton = document.getElementById("nextSlide");
    const prevButton = document.getElementById("prevSlide");
  
    function hideAllImages() {
      pictureContainers.forEach((picture) => {
        picture.classList.remove("show");
      });
    }
  
    function showCurrentImage() {
      hideAllImages();
      pictureContainers[currentImageIndex].classList.add("show");
    }
  
    nextButton.addEventListener("click", function () {
      currentImageIndex = (currentImageIndex + 1) % pictureContainers.length;
      showCurrentImage();
    });
  
    prevButton.addEventListener("click", function () {
      currentImageIndex =
        (currentImageIndex - 1 + pictureContainers.length) %
        pictureContainers.length;
      showCurrentImage();
    });
  
    showCurrentImage();
  });