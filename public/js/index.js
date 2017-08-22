// Carousel
const images = ["images/VR1.jpg", "images/VR2.jpg", "images/VR3.jpg"];

const phrases = [
  "A Revolutionary New Product",
  "Making The World A Better Place",
  "A Disruptive New Platform"
];

let currentImageIndex = 0;
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
  currentPhraseIndex++;
  if (currentPhraseIndex === phrases.length) currentPhraseIndex = 0;
  $txt = $("#carousel-text");
  $txt.fadeOut(el => {
    $txt.text(phrases[currentPhraseIndex]);
  });
  $txt.fadeIn();
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
    updateText();
  }, 5000);

  //Parallaxing

  $(window).scroll(function() {
    let pos = 2 * $(window).scrollTop();
    let theText = $("#carousel-text");
    theText.css("left", pos + "px");
  });
});
