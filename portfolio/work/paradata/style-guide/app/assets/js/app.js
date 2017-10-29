 /* ===================================================
  * App.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var app = {};

 app = {
     init: function() {
         app.initPlugins();
         // app
         app.formsJS();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init fastclick plugin
             FastClick.attach(document.body);

             // Popovers
             $('[data-toggle="popover"]').popover();
            
             // Tooltips
             $('[data-toggle="tooltip"]').tooltip();

             // Init jquery.truncator truncation plugin
             $('.truncate').truncate({
                 max_length: 180,
                 more: 'Show More',
                 less: 'Show Less',
                 link_prefix: '&nbsp;&hellip;&nbsp;',
                 link_suffix: '&nbsp;'
             });
         });
     },
     // FORM SPECIFIC
     ////////////////////////
     formsJS: function() {
         // Focus / Select text in input field
         $('.form-control').focus(function() {
             $(this).select();
         });
         // Override the mouseup event on the input field - Prevents quick select then unselect on mouseup
         $('.form-control').mouseup(function(e) {
             e.preventDefault();
         });
         // Popover for error status indicator in forms
         $('.form-group.has-error .field-indicator').popover({
             trigger: 'hover',
             placement: 'top',
             container: 'body',
             content: 'You made a big mistake'
         });
        // Expand/Collapse Form Accordion
        $('.form-group .expand-form').on("click", function() {
            $(this).parent().toggleClass('open');
        });
     }
};
$(app.init);

