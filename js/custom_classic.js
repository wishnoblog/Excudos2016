/*------------------------------------------------------------------
Project:        Wolfram
Author:         Yevgeny Simzikov
URL:            http://simpleqode.com/
                https://twitter.com/YevSim
                https://www.facebook.com/simpleqode
Version:        2.2.1
Created:        18/08/2014
Last change:    15/06/2016
-------------------------------------------------------------------*/

/**
 * Make navbar active 
 */

$("body").waypoint(function() {
    $(".navbar").toggleClass("navbar__initial");
    return false;
}, { offset: "-20px" });


/**
 * Change sidebar link color
 */

$("body").waypoint(function() {
    $(".sidebar__btn").toggleClass("sidebar__btn_alt");
    return false;
}, { offset: "-100%" });


/**
 * Smooth scroll to anchor
 */

$(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }

      }
    });

});