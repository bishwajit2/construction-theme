(function ($) {
  "use strict";

  // Activation wow.js
  new WOW().init();

  // Hero slider activation
  function heroSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      dots: false,
      fade: true,
      arrows: true,
      pauseOnHover: false,
      prevArrow:
        '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  heroSlider();

  // Project sliding activation
  $(".project-slides").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
  });

  // Testimonial sliding activation
  $(".testimonial-slider").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
  });

  // Logo sliding activation
  $(".logo-slider").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    infinite: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          infinite: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    slidesToScroll: 1,
  });

  // ScrollUp activation
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "1000", // Distance from top before showing element (px)
    topSpeed: 2000, // Speed back to top (ms)
    animation: "slide", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
    activeOverlay: true, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // Circle progress bar
  $(function () {
    $(".const-circle").easyPieChart({
      barColor: "#FF5E15",
      scaleLength: 0,
      size: 175,
      onStep: function (from, to, percent) {
        $(this.el).find(".percent").text(Math.round(percent));
      },
    });
  });

  // counter section activation
  $(".single-counter .counter").counterUp({
    delay: 10,
    time: 2000,
    offset: 95,
  });
})(jQuery);
