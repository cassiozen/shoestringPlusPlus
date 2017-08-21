$(() => {
  console.log("helloooo");

  // Carousel
  const images = [
    "images/VR1.jpg",
    "images/VR2.jpg",
    "images/VR3.jpg",
    "images/VR4.jpg",
    "images/VR5.jpg",
    "images/VR6.jpg"
  ];
  let currentImageIndex = 0;
  setInterval(() => {
    currentImageIndex++;
    if (currentImageIndex === images.length) currentImageIndex = 0;
    $image = $("#carousel-image");
    $image.fadeOut(el => {
      $image.attr("src", images[currentImageIndex]);
      $image.fadeIn();
    });
  }, 5000);
});
