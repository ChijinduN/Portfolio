(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // :: Menu Active Code
    $('#menuIcon').on('click', function () {
        $('body').toggleClass('menu-open');
    });
    $('.closeIcon').on('click', function () {
        $('body').removeClass('menu-open');
    });

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip()

    // :: Nicescroll Active Code
    if ($.fn.niceScroll) {
        $("body, textarea").niceScroll({
            cursorcolor: "#151515",
            cursorwidth: "6px",
            background: "#f0f0f0"
        });
    }

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');

        $('.hero-slides').owlCarousel({
            items: 4,
            margin: 0,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1600: {
                    items: 4
                }
            }
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        $('.testimonial-slides').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
    }

    // :: Progress Bar Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.sonar-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.sonar-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.gallery-img').magnificPopup({
            type: 'image'
        });
    }

    // :: MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equalize').matchHeight({
            byRow: true,
            property: 'height'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }



  
    
    /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  



    /*---------------------------------------------------- */
  /*	contact form
  ------------------------------------------------------ */

  /* local validation */

/*
  $('#contact-form').validate({

      
      submitHandler: function(form) {

          var sLoader = $('#submit-loader');

          $.ajax({      	

            type: "POST",
            url: "php/contact.php",
            data: $(form).serialize(),
            beforeSend: function() { 

                sLoader.fadeIn(); 

            },
            success: function(msg) {

              // Message was sent
              if (msg == 'OK') {
                  sLoader.fadeOut(); 
                 $('#message-warning').hide();
                 $('#contact-form').fadeOut();
                 $('#message-success').fadeIn();   
              }
              // There was an error
              else {
                  sLoader.fadeOut(); 
                 $('#message-warning').html(msg);
                  $('#message-warning').fadeIn();
              }

            },
            error: function() {

                sLoader.fadeOut(); 
                $('#message-warning').html("Something went wrong. Please try again.");
               $('#message-warning').fadeIn();

            }

        });     		
        }

  }); 
  */



    // Wait for the DOM to be ready
    $(document).ready(function () {

        // Target the form with the ID 'contact-form'
        $('#contact-form').submit(function (e) {
            // Prevent the form from submitting in the traditional way
            e.preventDefault();

            // Get the form data
            var formData = $(this).serialize();

            // Send the form data using AJAX
            $.ajax({
                type: 'POST',
                url: 'php/contact.php', // Adjust the path based on your file structure
                data: formData,
                success: function (response) {
                    // Handle the success response, for example, show a success message
                    if (response === 'success') {
                        alert('Form submitted successfully!');
                    } else {
                        alert('Error submitting form. Please try again later.');
                    }
                },
                error: function () {
                    // Handle the error response, for example, show an error message
                    alert('Error submitting form. Please try again later.');
                }
            });
        });
    });



})(jQuery);