 /* ===================================================
  * global.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var global = {};

 global = {
     init: function() {
         global.initPlugins();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init FastClick Plugin
             FastClick.attach(document.body);
         });
     },
};
 $(global.init);

