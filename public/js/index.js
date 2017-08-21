$(() => {
  // Carousel
  const images = [
    "images/VR1.jpg",
    "images/VR2.jpg",
    "images/VR3.jpg",
    "images/VR4.jpg",
    "images/VR5.jpg",
    "images/VR6.jpg"
  ];

  const phrases = [
    'A Revolutionary New Product',
    'Making The World A Better Place',
    'A Disruptive New Platform',
    'Bleeding-Edge Tech'
  ];

  let currentImageIndex = 0
  let currentPhraseIndex = 0;

  const updateImg = () => {
    currentImageIndex++;
    if (currentImageIndex === images.length) currentImageIndex = 0;
    $image = $("#carousel-image");
    $image.fadeOut(el => {
      $image.attr("src", images[currentImageIndex]);
    });
    $image.fadeIn();
  };

  const updateText = () => {
    currentPhraseIndex++
    if (currentPhraseIndex=== phrases.length) currentPhraseIndex = 0;
    $txt = $("#carousel-text");
    $txt.fadeOut(el => {
      $txt.text(phrases[currentPhraseIndex]);
    });
    $txt.fadeIn();
  }

  setInterval(() => {
    updateImg();
    updateText();
  }, 5000);

});
