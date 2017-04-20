/*global $, jQuery, alert, console*/

$(function () {
    
    "use strict";
       
     // Start Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: "#f7600e",
        cursorwidth: "10px",
        cursorborderradius: 0,
        cursorborder: "1px solid #f7600e"
    });
    
    // End Trigger Nice Scroll Plugin
    
    // Start Change Header Height
    
    $('.header').height($(window).height());
    
    $(window).resize(function () {
        
        $('.header').height($(window).height());
       
        
    });
    
    // End Change Header Height
    
    
    // Start Scrolling Down
    
    $('.header .arrow i').click(function () {

        $('html, body').animate({

            scrollTop: $('.features').offset().top
        }, 1000);
    });

    
    $('.hire').click(function () {

        $('html, body').animate({

            scrollTop: $('.contact').offset().top
        }, 2000);
    });

    // End Scrolling Down
    
     
    // Start Show More in Our Work
    
    $('.show-more').click(function () {
       
        $('.our-work .hidden').fadeToggle(1000);
        
    });
    
    
    // End Show More in Our Work
    
    
    
    // Start Check Testimonials
    
    var rightArrow = $(".testimonial .fa-chevron-right"),
        leftArrow =  $(".testimonial .fa-chevron-left");

    
    function checkClients() {
        
        
        if ($(".client:first").hasClass("active")) {
            
            leftArrow.fadeOut();
        } else {
            
            leftArrow.fadeIn();
        }
        
        
        if ($(".client:last").hasClass("active")) {
            
            rightArrow.fadeOut();
        } else {
            
            rightArrow.fadeIn();
        }
            
        
            
     
        
    }
    
   
    checkClients();
    
    
    $('.testimonial i').click(function () {
       
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testimonial .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
            });
        } else {
            $('.testimonial .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
            
        }
    });

    
    
    // End Check Testimonials

});


   /** $(window).resize(function () {
        
        $(".intro").each(function () {
       
            $(".intro").css("paddingTop", ($(window).height() - $(".intro").height()) / 2);
        });

    }); **/
    
    
    

        


    
