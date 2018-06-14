 /* ===================================================
  * global.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var global = {};

 global = {
     init: function() {
         global.initPlugins();
         global.getMainNav();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init FastClick Plugin
             FastClick.attach(document.body);
         });
     },
     getMainNav: function() {
        // Get list array of classNames, then split so only the current body className is listed
        var classList = $('body').attr('class').split(/\s+/);
        $.each( classList, function(index, bodyClass){
            // loop through each bodyClass and add active to all matching elements.
            $(".main-nav ul li a[data-page-id='"+ bodyClass +"']").addClass("active");
        });
     }
};
 $(global.init);

