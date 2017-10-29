 /* ===================================================
  * Global.js - Custom JavaScript
  * =================================================== */

 /***************/
 /** APP SHELL  **/
 /***************/

 var shell = {};

 shell = {
     init: function() {
         /************************/
         /* FIX HORIZONTAL DRAG SCROLL (when you mousedown on page and drag right, it prevents side scroll) */
         /************************/
         $('html, body, .wrapper').on('scroll', function() {
             $('html, body, .wrapper').scrollLeft(0);
             return false;
         });
         /************************/
         /* DISABLE BOOTSTRAP TOOLTIPS IN MOBILE DEVICES (< 1025px width devices) */
         /************************/

         if (!window.matchMedia || (window.matchMedia("(min-width: 1025px)").matches)) {
             // Init Bootstrap tooltips and popovers
             $("body [data-toggle='tooltip']").tooltip({
                 placement: 'auto',
                 container: 'body'
             });
         }
         /************************/
         /* INIT SHELL BEHAVIORS */
         /************************/

         // Init Left Pane Navigation Behaviors
         shell.appSwitcherNav();

         // Init Branding Bar Navigation Behaviors
         shell.shellNavbar();

         /*************************/
         /* INIT BUTTON BEHAVIORS */
         /*************************/
         // Activate right panel close button
         shell.closeRtPanel();

         /*************************/
         /* BUG FIXES FOR TWITTER BOOTSTRAP */
         /*************************/
         shell.bootstrapHotfix();
     },
     closeAppSwitcherNav: function() {
         if (appSwitcherMenu.is(':visible')) {
             // Reset App Switcher Button to default state
             $('#app-switcher').removeClass('active');
             // Close Menu
             appSwitcherMenu.removeClass('fadeInDownBig').addClass('fadeOutUpBig');
             setTimeout(function() {
                 appSwitcherMenu.hide();
             }, 500);
         }
     },
     /////
     // NAVIGATION BEHAVIORS
     appSwitcherNav: function() {
         // App Switcher
         appSwitcherMenu = $('.app-switcher-menu');
         appSwitcherSpan = $('#app-switcher span');
         $('#app-switcher').on("click", function(event) {
             if (appSwitcherMenu.is(':visible')) {
                 // Close Menu
                 appSwitcherMenu.removeClass('fadeInDownBig').addClass('fadeOutUpBig');
                 setTimeout(function() {
                     appSwitcherMenu.toggle();
                 }, 500);
             } else {
                 // Open Menu
                 appSwitcherMenu.toggle().addClass('fadeInDownBig').removeClass('fadeOutUpBig');
             }
             $(this).toggleClass('active');
             event.stopPropagation();
         });
         $(window).scroll(function() {
             shell.closeAppSwitcherNav();
         });
         // Global Close App Switcher Menu
         $(document).on("click", function(event) {
             shell.closeAppSwitcherNav();
         });
         // Courtesy Menu
         $('#courtesy-menu').popover({
             trigger: 'click',
             animation: true,
             placement: 'bottom',
             html: true,
             content: function() {
                 return $('#courtesy-menu-content').html();
             }
         }).on("click", function() {
             // Override Popover Positioning
             courtesyMenuPopover = $('.popover-content .courtesy-menu-content').parent().parent();
             courtesyMenuPopoverDivet = $('.popover-content .courtesy-menu-content').parent().prev().prev();
             courtesyMenuPopoverDivet.css({
                 left: 'auto',
                 right: '7px'
             });
             courtesyMenuPopover.css({
                 left: 'auto',
                 right: '5px'
             });
             // Add Drill In Component in global.js
             global.drillDownComponent();
         });
         // Close Popovers on click anywhere
         $(":not(#anything)").on('click', function(e) {
             $("#courtesy-menu").each(function() {
                 //the 'is' for buttons that trigger popups
                 //the 'has' for icons and other elements within a button that triggers a popup
                 if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                     $(this).popover('hide');
                     return;
                 }
             });
         });
     },
     shellNavbar: function() {
         $('#account-name').tooltip({
             placement: 'bottom',
             title: 'Account #CU-SIKKA-1234567890'
         });
     },
     /////
     // OPEN RIGHT PANEL - Add Class for CSS3 TRANSITION
     // @overlappingContent - boolean - right panel overlap ct-pane content
     openRtPanel: function() {
         // Get the active panes
         //var active_wspace = $('.ct-pane > .tab-pane.active');
         //var active_rtpanel = $('.ct-pane > .tab-pane.active .rt-pane');
         var active_wspace = $('.cloudshellWork');
         var active_rtpanel = $('.cloudshellWork .rt-pane');
         active_wspace.addClass('panel-open'); // Kicks Media Query CSS into gear without shifting contentTab 
         active_rtpanel.css('visibility', 'visible').show().removeClass('slideOutPanel').addClass('slideInPanel'); // Slide In Panel
     },
     /////
     // CLOSE RIGHT PANEL - Add Class for CSS3 TRANSITION
     // @overlappingContent - boolean - right panel overlap ct-pane content
     closeRtPanel: function() {
         // Get the active panes
         //var active_wspace = $('.ct-pane > .tab-pane.active');
         //var active_rtpanel = $('.ct-pane > .tab-pane.active .rt-pane');
         var active_wspace = $('.cloudshellWork');
         var active_rtpanel = $('.cloudshellWork .rt-pane');
         active_wspace.removeClass('panel-open'); // Disables the Media Query CSS
         active_rtpanel.removeClass('slideInPanel').addClass('slideOutPanel');
         setTimeout(function() {
             active_rtpanel.css('visibility', 'hidden')
         }, 1000);
     },
     /////
     // BUG FIXES FOR TWITTER BOOTSTRAP
     // HOTFIX FOR MENUS ON IPAD
     // TODO: Should be updated when bootstrap is updated
     bootstrapHotfix: function() {
         // Solves impossibility to tap on any dropdown menu on mobile devices iOS/Android in version 2.1.1.
         $('body').on('touchstart.dropdown', '.dropdown-menu', function(e) {
             e.stopPropagation();
         });
         // On iPad we don't want to close menu when trying to drill in to submenu. On desktop it is ok submenu opens on hover.
         $('.dropdown-submenu').find(">:first-child").click(function(e) {
             e.stopPropagation()
         });
     }
 };
 shell.init();