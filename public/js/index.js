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

const changeToCat = e => {
  let $selectedEl = e.target;
  $($selectedEl).addClass("em-scream_cat");
};

const changeFromCat = e => {
  let $selectedEl = e.target;
  $($selectedEl).removeClass("em-scream_cat");
};

const sectionActiveMargin = 250;
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
  $("i").hover(changeToCat, changeFromCat);

  setInterval(() => {
    updateImg();
  }, 5000);

  setActiveSection($(window).scrollTop());
  //Parallaxing

  $(window).scroll(function() {
    const pos = $(window).scrollTop();

    if (pos > 220) {
      $("header").slideDown();
    } else {
      $("header").slideUp();
    }

    setActiveSection(pos);

    // $("#aboutmockup").css("margin-right", pos - $("#about").offset().top);
    $("#carousel-text").css("opacity", 1 - pos / 300);
    $(".carousel-image").css("top", pos / 3 + "px");
  });
});
