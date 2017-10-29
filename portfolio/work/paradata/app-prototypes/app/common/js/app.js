 /* ===================================================
  * App.js - App Specific
  * =================================================== */

 // GLOBAL VARIABLES
 var app = {};
 app = {
     init: function() {
         app.initPlugins();
         app.appShell();
         app.appNavigation();
         app.toggleSearch();
         app.modalWizard();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         // Init fastclick plugin
         FastClick.attach(document.body);
         // Tooltips
         $('[data-toggle="tooltip"]').tooltip();
         // Popovers
         $('[data-toggle="popover"]').popover({
             trigger: 'focus'
         });
         // Select2 
         $('[data-plugin="select2"]').select2();
         // Toggle Switch - bootstrap-switch plugin
         $('[data-plugin="toggle-switch"]').bootstrapSwitch();
         // Add paradata-modal class to each dialog opened
         $('[data-toggle="modal"]').on('click', function () {
            $('.modal-dialog').addClass('paradata-modal');
            $('.paradata-modal [data-step="account-step"]').unbind(); // because already call modalWizard() in init for prototype
            // Rebind functions
            app.modalWizard();
            global.drillComponent();
         });
     },
     closeAppNavigation: function() {
         if (appSwitcherMenu.is(':visible')) {
             // Close Menu
             appSwitcherMenu.removeClass('fadeInDownBig').addClass('fadeOutUpBig');
             setTimeout(function() {
                 appSwitcherMenu.hide();
             }, 500);
         }
     },
     /////
     // NAVIGATION BEHAVIORS
     appNavigation: function() {
         // App Switcher
         appSwitcherMenu = $('.app-switcher-menu');
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
             event.stopPropagation();
         });
         // Close menu on scroll of content
         $('.app-shell').scroll(function() {
             app.closeAppNavigation();
         });
         // Click anywhere close App Switcher menu
         $(document).on("click", function(event) {
             app.closeAppNavigation();
         });
     },
     // APP SHELL - Bind events/init slats
     ///////////////
     appShell: function() {
        // Open Contextual Pane
        $('.open-contextual').on('click', function() {
            app.openContextual();
        });
         // Close Contextual Pane
        $('.close-contextual').on('click', function() {
            app.closeContextual();
        });
        // init Slats
        proto.slatList();
     },
     // OPEN/CLOSE CONTEXTUAL PANE
     ///////////////
     openContextual: function() {
        vWidth = $(document).width();
        // Show contextual pane actions bar
        $('.contextual-pane .contextual-actions').removeClass('hidden');
        if(vWidth > 1200) {
            // Don't animate if pane is already shown (> 1200)
            return;
        } else {
            // Open panel
            $('.contextual-pane').show().removeClass('fadeOutRightBig').addClass('fadeInRightBig pane-open');
        }
     },
     closeContextual: function() {
        // Remove slat highlight
        $('.listings dd > a').removeClass('active');
        // Hide contextual pane actions 
        $('.contextual-pane .contextual-actions').addClass('hidden');
        // and show no selected pane content (message)
        proto.paneContent('1');
        // Close panel
        $('.contextual-pane').removeClass('fadeInRightBig pane-open').addClass('fadeOutRightBig');
        // Delay hiding pane for animation to complete and reset classes to prevent bug
        setTimeout(function() { 
            $('.contextual-pane').removeAttr('style').removeClass('fadeOutRightBig').addClass('fadeInRightBig');
        }, 500);
     },
     // SEARCH BOX TOGGLE
     ///////////////
     toggleSearch: function() {
        $('[data-toggle="toggle-search"]').on('click', function() {
            $(this).parent().toggleClass('toggle-search');
        });
     },
     // MODAL WIZARD
     ///////////////
     modalWizard: function() {
        $('.paradata-modal [data-step="account-step"]').on('click', function() {
            // Delay hiding pane for animation to complete
            setTimeout(function() {
                // Footer Actions
                $('.modal-dialog .modal-footer').toggle();
            }, 250);
        });
     }
 };
 $(app.init);