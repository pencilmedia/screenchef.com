 /* ===================================================
  * Global.js - Custom JavaScript
  * =================================================== */

 var global = {};

 global = {
     init: function() {
         /************************/
         /* INIT GLOBAL BEHAVIORS */
         /************************/

         // Resize flipcard (dropdown) menu after flip is resolved
         global.resizeFlipcardMenus();

         /************************/
         /* INIT PRODUCT TOURS */
         /************************/
         // Init VPA Tour
         $('#courtesy-menu').on("click", function() {
             global.vpaTour();
         });

     },
     drillDownComponent: function() {
         // Init jQuery Module (Plugin) DrillDown Component
         var options = {};
         $('.drillcards .drilldown').drilldown({
             selector: '.drill-action, .drill-action-back',
             speed: 250
         });
     },
     ///// DELETE THIS AFTER DRILLDOWN IS WORKING
     ////////////
     // DRILL IN POPOVER MENUS - GLOBAL COMPONENT
     drillInComponent: function() {
         drillFrontSide = $('.popover .drillcards .front');
         drillBackSide = $('.popover .drillcards .back');
         // Show Menu Info
         if (!Modernizr.cssreflections) {
             // For IE
             $('.drillcards .back').hide();
             $('.drillcards li .menu-drillin').on("click", function(e) {
                 $('.drillcards .front').hide();
                 $('.drillcards .back').show();
                 $('.drillcards .back .popover-title').show();
                 // Animate : Resize Popover Menu
                 global.resizeMenu(drillBackSide);
                 // Drill Back to Front
                 $('.drill-back').on("click", function() {
                     $('.drillcards .front').show();
                     $('.drillcards .back').hide();
                     // Animate : Resize Popover Menu
                     global.resizeMenu(drillFrontSide);
                 });
                 e.stopPropagation();
             });
         } else {
             // For Modern Browsers
             $('.drillcards li .menu-drillin').on("click", function(e) {
                 global.drillMenuComponent($(this).attr('data-show'));
                 e.stopPropagation();
             });
         }
     },
     drillMenuComponent: function(back_id) {
         // Animate : Slide Out
         drillFrontSide.removeClass('drillOut drillOutBack').addClass('animate drillOut');
         // Animate : Slide In
         drillBackSide.show();
         drillBackSide.removeClass('drillIn drillInBack').addClass('animate drillIn');
         $('.drillcards .back .popover-title').show();
         // Animate : Resize Popover Menu
         global.resizeMenu(drillBackSide);
         // Drill Back to Front
         $('.drill-back').on("click", function(e) {
             drillFrontSide.removeClass('drillOut').addClass('drillOutBack');
             drillBackSide.removeClass('drillIn').addClass('drillInBack');
             drillBackSide.hide('fast');
             // Animate : Resize Popover Menu
             global.resizeMenu(drillFrontSide);
             e.stopPropagation();
         });
     },
     resizeMenu: function(frontOrBack) {
         drillMenu = $('.popover-content .drillcards');
         frontHeight = drillFrontSide.height();
         backHeight = drillBackSide.height();
         // Adjust height of menu
         switch (frontOrBack) {
             case drillFrontSide:
                 drillMenu.parent().parent().animate({
                     height: frontHeight + 10 + "px"
                 }, 150);
                 break;
             case drillBackSide:
                 drillMenu.parent().parent().animate({
                     height: backHeight + "px"
                 }, 150);
                 break;
         }
     },
     /////
     // MENU FLIPCARDS - GLOBAL COMPONENT
     resizeFlipcardMenus: function() {
         // Using Modernizr - IE solution for flipcard menu
         if (!Modernizr.cssreflections) {
             $('.flipcard .back').hide();
             $('.flip-trigger').click(function(e) {
                 $('.flipcard .front').hide();
                 $('.flipcard .back').show();
                 $('#reset-cancel, dd #reset-cancel, .flipcard *[data-id="reset-cancel"]').bind("click", function() {
                     $('.flipcard .front').show();
                     $('.flipcard .back').hide();
                 });
                 e.stopPropagation();
             });
         } else {
             $('.flip-trigger').click(function(e) {
                 var flipcard = $(this).parents('.flipcard');
                 flipcard.addClass('flip');
                 var menuResetHeight = 0;
                 // Adding height of every <li> element to calculate the total height of dropdown menu
                 flipcard.find('.back li').each(function() {
                     listItemHeight = $(this).outerHeight(true);
                     menuResetHeight += Math.round(listItemHeight);
                     menuResetHeight -= 5; //5px for every li item, because they are overlapping each other's margin
                 });
                 flipcard.animate({
                     height: menuResetHeight + "px"
                 }, 150);
                 e.stopPropagation();
             });
         }
     },
     vpaTour: function() {
         /* NOTE : IMPORTANT NOTE : NOTE
        jquery.slides.min.js WAS CUSTOM ADJUSTED
        In order to fix a resize bug, commented out the resize portion
        We are not using resize. Tour is set width only.
        */
         $('a[href=\'#modal-vpa-tour\']').on("click", function() {
             // Override Bootstrap Modal Dialog display:block
             // NOTE: Display:inline-block, Fixes issue with slidesJS/bootstrap modal dialog display:block/inline-block battle
             $('.vpa-tour').css({
                 "display": "inline-block"
             });
             // Init SlidesJS 
             $('#tourSlides').slidesjs({
                 width: 750,
                 height: 525,
                 navigation: false,
                 autoHeight: true,
                 pagination: {
                     active: true,
                     effect: "slide"
                 },
                 callback: {
                     loaded: function(number) {
                         // Use your browser console to view log
                         // console.log('SlidesJS: Loaded with slide #' + number);
                         // Show start slide in log
                         // $('#slidesjs-log .slidesjs-slide-number').text(number);
                     },
                     start: function(number) {
                         // Use your browser console to view log
                         // console.log('SlidesJS: Start Animation on slide #' + number);
                     },
                     complete: function(number) {
                         // Change last slide Tour Button Content
                         if (number == 4) {
                             $('.modal-footer .slidesjs-navigation').text('Got it! Take me to my opportunities.').attr('data-dismiss', 'modal');
                         } else {
                             $('.modal-footer .slidesjs-navigation').text('Next').removeAttr('data-dismiss');
                         }
                     }
                 }
             });
             // Focus on next button
             $('#tourSlides .modal-footer .slidesjs-next').focus();
         });
     },
 };
 $(global.init);