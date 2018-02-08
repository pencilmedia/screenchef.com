 /* ===================================================
  * Navigation.js - Global Navigation
  * =================================================== */
(function() {
 var global_nav = {};

 var appSwitcherTrigger = document.getElementById('paradata-app-switcher-trigger');
 var appSwitcher = document.getElementById('paradata-app-switcher-menu');
 var courtesyMenuTrigger = document.getElementById('paradata-courtesy-menu-trigger');
 var courtesyMenu = document.getElementById('paradata-courtesy-menu');

 global_nav = {
     init: function() {
         global_nav.appSwitcher();
         global_nav.initCourtesyMenu();
     },
     // BEGIN: App Switcher
     /////
     closeAppSwitcher: function() {
         console.log('close app switchewr');
         appSwitcher.classList.remove("paradata-fadeInDownBig");
         appSwitcher.classList.add("paradata-fadeOutUpBig");
         setTimeout(function() { // Delay hiding Switcher (animation)
             appSwitcher.style.display = 'none';
         }, 500);
         appSwitcherTrigger.blur();// blur buttons
     },
     toggleAppSwitcher: function(event) {
         switcherMenuIsVisible = appSwitcher.offsetHeight;
         if (switcherMenuIsVisible > 0) {
             window.clearTimout();// in case clicked again before animation plays through
             // Close the Switcher
             global_nav.closeAppSwitcher();
         } else {
             // Open the Switcher
             appSwitcher.style.display = 'block'; // Show Switcher
             appSwitcher.classList.remove("paradata-fadeOutUpBig");
             appSwitcher.classList.add("paradata-fadeInDownBig");
         }
         event.stopPropagation();
     },
     appSwitcher: function() {
         // Bind Switcher toggle
         /////
         appSwitcherTrigger.addEventListener("click", global_nav.toggleAppSwitcher);
         // Close Switcher on scroll of content
         /////
         window.onscroll = function() {
             // close menus
             global_nav.closeAppSwitcher();
             global_nav.closeCourtesyMenu();
         }
         // Click anywhere close Switcher
         /////
         document.addEventListener("click", function(event) {
             global_nav.closeAppSwitcher();
             global_nav.closeCourtesyMenu(event);
         });
     },
     // BEGIN: Courtesy Menu
     /////
     closeCourtesyMenu: function(event) {
         courtesyMenuTrigger.classList.remove('active');
         courtesyMenuTrigger.blur();// blur button
         document.removeEventListener("click", function(event) {
             global_nav.closeCourtesyMenu();
         });
         event.stopPropagation();
     },
     openCourtesyMenu: function(event) {
         courtesyMenuTrigger.classList.add('active');
         event.stopPropagation();
     },
     initCourtesyMenu: function() {
         courtesyMenuTrigger.addEventListener("click", global_nav.openCourtesyMenu);
     }
 };
 global_nav.init();
}());