 /* ===================================================
  * App.js - Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var app = {};
 app = {
     init: function() {
        app.initPlugins();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init fastclick plugin
             FastClick.attach(document.body);

             // Popovers
             $('[data-toggle="popover"]').popover({
                trigger: 'focus'
             });

             // Tooltips
             $('[data-toggle="tooltip"]').tooltip();

         });
     }
 };
 $(app.init);