 /* ===================================================
  * global.js - Global Behaviors
  * =================================================== */

 // GLOBAL VARIABLES
 var global = {};

 global = {
     init: function() {
         global.initPlugins();
         global.initFreezeNav();
         global.smoothJump();
         global.linkBehaviors();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init FastClick Plugin
             FastClick.attach(document.body);
         });
     },
     // INIT FREEZE NAVIGATION
     ///////////////
     initFreezeNav: function() {
          var mainNav = $('.page-header');
          var itemOffset = mainNav.offset().top;

          // CHECK IF NAV IS VISIBLE
          // JQUERY FUNCTION
          $.fn.isVisible = function() {
              // Am I visible?
              // Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
              // essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
              // That is why either width or height have to be > 0.
              var rect = this[0].getBoundingClientRect();
              return (
                  (rect.height > 0 || rect.width > 0) &&
                  rect.bottom >= 0 &&
                  rect.right >= 0 &&
                  rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.left <= (window.innerWidth || document.documentElement.clientWidth)
              );
          };
          // If nav is not visible make it visible
          if ( !$('.page-header').isVisible() ) {
              mainNav.addClass('navbar-fixed animate25s fadeInDown');
          };
          // Scroll behavior: toggle freeze nav
          $(window).scroll(function(){
              var scrollToTop = $(window).scrollTop();

               // Freeze navigation
              if(scrollToTop > 0) {
                    mainNav.addClass('navbar-fixed animate25s fadeInDown');
              }
               // Unfreeze navigation
              if(scrollToTop == 0) {
                    $('.page-header.navbar-fixed').removeClass('navbar-fixed fadeInDown');
                    // window.setTimeout(function() {
                    //      mainNav.removeClass('fadeOut').addClass('zoomInUp');
                    // }, 250);
              }
          });
         global.initAnimation();
     },
     // INIT SECONDARY PAGES NAVIGATION
     ///////////////
     initAnimation: function() {
         $(document).ready(function() {
             // Remove hard coded animation classes in nav.inc.php
             $('.secondary .page-header').removeClass('animated zoomInUp');
         });
     },
     openExternalLinks: function() {
         // EXTERNAL LINK - Open external links in new window
         ////////////////////////////////////////////////////
         $('a[href^=http]').on("click", function() {
             //Not this domain - open link in window
             if (!this.href.indexOf('screenchef.com') < 0) {
                 window.open(this.href);
                 return false;
             }
         });
     },
     smoothJump: function() {
         $('a[href*="#"]:not([href="#"], a.tab)').on("click", function() {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: target.offset().top
                     }, 750);
                     return false;
                 }
             }
         });
     },
     linkBehaviors: function() {
         // EXTERNAL LINK - Open external links in new window
         ////////////////////////////////////////////////////
         $('a[href^=http]').click( function() {
             //Not this domain - open link in window
             if (this.href.indexOf('pencilmedia.com') < 0) {
                 window.open(this.href);
                 return false;
             }
         });
         // Override above behavior and open internal link in a new window - Add the class .pop to the link
         if ( $('a.pop') ) {
             $('a.pop').click( function() {
                 window.open(this.href);
                 return false;
             });
         }
     }
 };

 $(global.init);