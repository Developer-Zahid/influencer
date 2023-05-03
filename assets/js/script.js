$(function () {
    'use strict';

    // Form Validation
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
          }, false);
        });
    }, false);

    //  Fixed Header
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 110) {
            $(".header").addClass("header--fixed");
        } else {
            $(".header").removeClass("header--fixed");
        }
    });

    //  Banner slider
    $(".banner__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        speed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
    });

    //  Category/Services slider
    $(".services__slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    //  Follow on Instagram slider
    $(".follow__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 679,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    //  Partners Slider
    $(".partners__slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        centerMode: true,
        speed: 5000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 2,
                speed: 6000,
                cssEase: 'linear',
              }
            }
          ]
    });

    // scroll top
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 50);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // WoW Js
    var wow = new WOW(
      {
        offset: 2,
        mobile:false
      }
    )
    wow.init();

});
