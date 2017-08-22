// Carousel
const images = ["images/VR1.jpg", "images/VR2.jpg", "images/VR3.jpg"];

const phrases = ["A Revolutionary New Product", "Making The World A Better Place", "A Disruptive New Platform"];

let currentImageIndex = 0;
let currentPhraseIndex = 0;
$carousel = $("#carousel");

const updateImg = () => {
  currentImageIndex++;
  if (currentImageIndex === images.length) currentImageIndex = 0;

  currentPhraseIndex++;
  if (currentPhraseIndex === phrases.length) currentPhraseIndex = 0;

  $image = $("#carousel-image");
  $txt = $("#carousel-text");

  $carousel.fadeOut(el => {
    $image.attr("src", images[currentImageIndex]);
    $txt.text(phrases[currentPhraseIndex]);
  });
  $carousel.fadeIn();
};

const changeToCat = e => {
  let $selectedEl = e.target;
  $($selectedEl).addClass("em-scream_cat");
};

const changeFromCat = e => {
  let $selectedEl = e.target;
  $($selectedEl).removeClass("em-scream_cat");
};

$(() => {
  $("i").hover(changeToCat, changeFromCat);

  setInterval(() => {
    updateImg();
  }, 5000);

  //Parallaxing

  $(window).scroll(function() {
    const pos = $(window).scrollTop();

    $("#carousel-text").css("opacity", 1 - pos / 500);
    $("#carousel-image").css("margin-top", pos / 2 + "px");
  });
});
