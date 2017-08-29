// Carousel
let currentImageIndex = 0;
$carousel = $("#carousel");
$images = $(".carousel-image");
$images.slice(1).hide();

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
  setInterval(() => {
    updateImg();
  }, 2500);

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
