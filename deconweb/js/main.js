/*------------------------------------------------------------------
* Project:        StarCross
* Author:         CN-InfoTech
* URL:            hthttps://themeforest.net/user/cn-infotech
* Created:        08/30/2018
-------------------------------------------------------------------
 */

"use strict";

/*======== Doucument Ready Function =========*/
jQuery(document).ready(function() {
  //CACHE JQUERY OBJECTS
  var $window = $(window);

  $window.on("load", function() {
    $("#status").fadeOut();
    $("#preloader")
      .delay(350)
      .fadeOut("slow");
    $("body")
      .delay(350)
      .css({ overflow: "visible" });
    /* Init Wow Js */
    new WOW().init();

    /*========= Masonry Grid Script ==========*/

    $(".grid-masonry").masonry({
      // options...
      itemSelector: ".grid-item",
      columnWidth: ".grid-item"
    });

    /*========== End Masonry Grid ==========*/

    /* Preloader */

    $("#status").fadeOut();
    $("#preloader")
      .delay(350)
      .fadeOut("slow");

    /* END of Preloader */
  });

  /*======= jQuery navbar on scroll =========*/

  $window.on("scroll", function() {
    if (
      $(".navbar-default")
        .add(".navbar-inverse")
        .offset().top > 50
    ) {
      $(".reveal-menu-home").addClass("sticky-nav");
      $(".reveal-menu-blog").addClass("sticky-nav-white");
    } else {
      $(".reveal-menu-home").removeClass("sticky-nav");
      $(".reveal-menu-blog").removeClass("sticky-nav-white");
    }
  });

  /*======= Main Slider Init =========*/

  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      }
    }
  };
  var swiper = new Swiper(".swiper-container", swiperOptions);

  /*======= Banner Resize with window size =========*/

  $window
    .on("resize", function() {
      var bodyheight = $(this).height();
      $("#mt_banner").height(bodyheight);
    })
    .resize();

  /*========= Fun and Facts Script ======== */

  try {
    $(".fun-facts_wrapper").appear(function() {
      $(".timer").countTo();
    });
  } catch (err) {
    console.log(err.message);
  }

  // back to top

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });
    // scroll body to 0px on click
    $("#back-to-top").click(function() {
      $("#back-to-top").tooltip("hide");
      $("body,html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });

    $("#back-to-top").tooltip("show");
  });

  /*======== Parallax Backgrounds =========*/

  $("#mt_banner").parallax("50%", 0);

  /*======== One Page Scrolling ======= */

  $("#navigation").onePageNav({
    currentClass: "active",
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });

  /*======== Isotope Filter Script =========*/

  var mt_personal = window.mt_personal || {},
    $win = $(window);

  mt_personal.Isotope = function() {
    // 4 column layout
    var isotopeContainer = $(".isotopeContainer");
    if (!isotopeContainer.length || !jQuery().isotope) return;
    $win.on("load", function() {
      isotopeContainer.isotope({
        itemSelector: ".isotopeSelector"
      });
      $(".mt_filter").on("click", "a", function(e) {
        $(".mt_filter ul li")
          .find(".active")
          .removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        isotopeContainer.isotope({ filter: filterValue });
        e.preventDefault();
      });
    });
  };

  mt_personal.Isotope();

  /*======== Testimonial Section =========*/

  $("#mt_testimonial .owl-carousel").owlCarousel({
    loop: false,
    margin: 24,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    dot: true,
    smartSpeed: 850,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      600: {
        items: 2,
        dots: true
      },
      1000: {
        items: 3,
        dots: true
      },
      1201: {
        items: 3,
        dots: true
      }
    }
  });

  /*======== Team Section =========*/
  $("#mt_team .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    smartSpeed: 850,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      450: {
        items: 1,
        dots: true
      },
      500: {
        items: 1,
        dots: true
      },
      600: {
        items: 2,
        dots: true
      },
      1000: {
        items: 3,
        dots: true
      },
      1201: {
        items: 3,
        dots: true
      }
    }
  });

  /*======== Portfolio Gallery =========*/

  $(".project_gallery .owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveBaseElement: window,
    responsiveClass: true,
    navText: [
      "<img src='images/arrow-left.png'>",
      "<img src='images/arrow-right.png'>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true
      },
      1201: {
        items: 1,
        nav: true
      }
    }
  });

  /*======== Fancy Box Init ========*/

  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: "70%",
    height: "70%",
    autoSize: false,
    closeClick: true,
    openEffect: "elastic",
    closeEffect: "none"
  });

  /*======== Fancy Box Gallery Init ========*/

  var FancYB = $(".fancybox");
  FancYB.fancybox({
    openEffect: "fade",
    closeEffect: "fade",
    padding: 0,
    closeBtn: true,
    helpers: {
      title: {
        type: "inside"
      },
      overlay: {
        locked: false
      },
      buttons: {}
    }
  });
  FancYB.attr("rel", "gallery");

  /*======== Contact Form ========*/

  $("#submit-btn").on("click", function(event) {
    event.preventDefault();
    $.ajax({
      dataType: "JSON",
      url: "sendmail.php",
      type: "POST",
      data: $("#contact_form").serialize(),
      beforeSend: function(xhr) {
        $(".mt_load").show();
      },
      success: function(response) {
        if (response) {
          console.log(response);
          if (response["signal"] == "ok") {
            toastr.success(response["msg"]);
            $("#msg").hide();
            $("input, textarea").val(function() {
              return this.defaultValue;
            });
          } else {
            $("#msg").show();
            $("#msg").html(
              '<div class="mt_error">' + response["msg"] + "</div>"
            );
          }
        }
      },
      error: function() {
        $("#msg").show();
        $("#msg").html(
          '<div class="mt_error">Errors occur. Please try again later.</div>'
        );
      },
      complete: function() {
        $(".mt_load").hide();
      }
    });
  });
  /*======== End Contact Form ========*/

  // Search in header.
  if ($(".search-icon").length > 0) {
    $(".search-icon").on("click", function(e) {
      e.preventDefault();
      $(".search-box-wrap").slideToggle();
    });
  }

  /*======== Slick Slider =========*/

  $(".slider-items").slick({
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  /*======== Slick Slider =========*/

  $(".slider-insta").slick({
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 10,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  $(".slider-insta1").slick({
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  //Progress bar
  jQuery(".skillbar").each(function() {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent")
        },
        6000
      );
  });
});

$(document).ready(function() {
  $(".progress .progress-bar").css("width", function() {
    return $(this).attr("aria-valuenow") + "%";
  });
});

/*======== Init Google Map =========*/

function initMap() {
  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "all",
      stylers: [{ saturation: -80 }]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ hue: "#00ffee" }, { saturation: 50 }]
    },
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ];

  // Create a map object and specify the DOM element for display.
  var latlng = new google.maps.LatLng(40.3848248, -3.6121371); // Change a map coordinate here!
  var map = new google.maps.Map(document.getElementById("map"), {
    center: latlng,
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 13
  });
}
$("#mostrarVivienda").click(function() {
    $('.casa').show();
 /* var elemento = document.getElementById("vivienda");
  elemento.style.display = "block";*/
});

$("#mostrarSanidad").click(function() {
    $('.salud').hide();
  /*var elemento = document.getElementById("salud");
  elemento.style.display = "block";*/
});

$("#mostrarEducacion").click(function() {
    $('.educa').hide();
  /*var elemento = document.getElementById("educa");
  elemento.style.display = "block";*/
});

$("#mostrarIndustria").click(function() {
    $('.indus').hide();
  /*var elemento = document.getElementById("indus");
  elemento.style.display = "block";*/
});


//function ocultaElementos(){
/*$("#mostrarTodos").click(function() {
 /* var vivienda = document.getElementById("vivienda");
  var educa = document.getElementById("educa");
  var salud = document.getElementById("salud");
  var industria = document.getElementById("indus");

  $('.educa').hide();
  $('.indus').hide();
  $('.salud').hide();
  $('.casa').hide();
  
  $("#mostrarTodos").click(function(){
    $('.educa').hide();
    $('.indus').hide();
    $('.salud').hide();
    $('.casa').hide();
  });
  
 /* if (vivienda.style.display === "block") {
    vivienda.style.display = "none";
  }
  /*if (educa.style.display === "block") {
    educa.style.display = "none";
  }
  if (salud.style.display == "block") {
    salud.style.display = "none";
  }
  if (industria.style.display == "block") {
    industria.style.display = "none";
  }
  // $('#vivienda').show(); //muestro mediante id
  //$('vivienda').show(); //muestro mediante clase
  // });
});
$(document).ready(function() {
    $("#mostrarTodos").click();
  });*/