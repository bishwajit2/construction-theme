(function ($) {
  "use strict";

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
        { breakpoint: 768, settings: { dots: false, arrows: false } },
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
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
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
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 320,
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
    arrows: false,
    draggable: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 320,
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

  // counter section activation
  $(".single-counter .counter").counterUp({
    delay: 10,
    time: 2000,
    offset: 95,
  });

  // 2nd Circle progress bar
  function animateElements() {
    $(".progressbar").each(function () {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();
      let percent = $(this).find(".circle").attr("data-percent");
      let percentage = parseInt(percent, 10) / parseInt(100, 10);
      let animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 175,
            thickness: 3,
            emptyFill: "rgba(0, 0, 0, 0.02)",
            fill: {
              color: "rgb(255, 94, 21)",
            },
            animation: {
              duration: 2000,
              easing: "circleProgressEasing",
            },
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("div")
                .html((stepValue * 100).toFixed(0) + "<span>%</span>");
            }
          )
          .stop();
      }
    });
  }
  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);

  // Magnific popup youtube video
  $(
    ".about-link .video-play-btn, .video-section .video-play-btn"
  ).magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",

          id: "v=",

          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1",
        },

        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },
      },

      srcAction: "iframe_src",
    },
  });

  // AOS init
  AOS.init({
    once: true,
    animatedClassName: "animated",
  });
})(jQuery);
