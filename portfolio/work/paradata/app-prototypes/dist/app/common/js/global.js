 /* ===================================================
  * Global.js - Reusable Components
  * =================================================== */

 var global = {};

 global = {
     init: function() {
        global.drillComponent();
     },
     drillComponent: function() {
        // DRILL IN / OUT
        $('.drillcard .drill-in, .drillcard .drill-out, [data-step="account-step"]').on('click', function(e) {
               // Enable Animation - NOTE: including animate25s in the HTML causes auto animation on menu load
               $('.drillcard .frontside, .drillcard .backside').removeClass('no-animate').addClass('animate25s');
               // Frontside - Toggle Drill In/Out
               $('.drillcard .frontside').toggleClass('slideOutLeft slideInLeft');
               // Backside - Toggle Drill In/Out
               $('.drillcard .backside').toggleClass('slideInRight slideOutRight');
               // Toggle Show/Hide after animation
               setTimeout(function() {
                    $('.drillcard .frontside, .drillcard .backside').toggle();
               }, 300);
               // Keep dropdown menu open
               e.stopPropagation();
               // Reset to frontside when menu closed
               $('.dropdown.with-drill').on('hidden.bs.dropdown', function(e) {
                    // Reset menu
                    global.resetDrillComponent();
                    // reset bootstrap bind
                    $(this).off('hidden.bs.dropdown');
               });
        });
     },
     resetDrillComponent: function() {
          // Reset Frontside
          $('.drillcard .frontside').removeClass('animate25s slideOutLeft').addClass('no-animate slideInLeft');
          // Reset Backside
          $('.drillcard .backside').removeClass('animate25s slideInRight').addClass('no-animate slideOutRight');
          // Reset Show / Hide
          $('.drillcard .frontside, .drillcard .backside').toggle();
     }
 };
 $(global.init);