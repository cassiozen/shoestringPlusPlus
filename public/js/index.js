// Carousel
let currentImageIndex = 3;
$carousel = $("#carousel");
$images = $(".carousel-image");
const updateImg = () => {
  let $img = $($images.get(currentImageIndex));
  $img.fadeOut(1000);

  currentImageIndex++;
  if (currentImageIndex === $images.length) currentImageIndex = 0;

  $img = $($images.get(currentImageIndex));
  $img.fadeIn(1000);
};

const sectionActiveMargin = 400;
function setActiveSection(pos) {
  $("section").each((idx, section) => {
    const $section = $(section);
    if (pos > $section.offset().top - sectionActiveMargin && pos < $section.offset().top + $section.height()) {
      $section.addClass("active");
    } else {
      $section.removeClass("active");
    }
    return true;
  });
}

$(() => {
  updateImg();
  setInterval(() => {
    updateImg();
  }, 5000);

  setActiveSection($(window).scrollTop());
  //Parallaxing
  let pos;

  $(window).scroll(function() {
    pos = $(window).scrollTop();
    $(".carousel-image").css("top", pos / 3 + "px");
    if (pos > 220) {
      $("header").slideDown();
    } else {
      $("header").slideUp();
    }

    setActiveSection(pos);
  });
});
