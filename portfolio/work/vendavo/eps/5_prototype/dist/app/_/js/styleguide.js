 /* ===================================================
  * Styleguide.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // styleguide VARIABLES
 var styleguide = {};

 styleguide = {
    init: function() {
        styleguide.pageNavigation();
    },
    // OFFSCREEN NAVIGATION
    ///////////////
    offScreenNav: function() {
        $('[data-toggle="column-offcanvas"').on("click", function() {
            $('.offcanvas .lt-column').toggleClass('active');
            $('.offcanvas .rt-column').toggleClass('active');
        });
    },
    // NAVIGATION SELECTOR
    ///////////////
    pageNavigation: function() {
        $(document).ready(function() {
            // Navigation - Selected State
            var pageID = $('body').data("id"),
            navItem = $('#styleguideNav li a');
            var currItem = $('#styleguideNav li a[data-id=' + pageID + ']');
            
            $('#styleguideNav li a[data-id=' + pageID + ']').parent().addClass('active');
            navItem.not(currItem).parent().removeClass('active');

            // Navigation - Collapse/Expand
            $('.tree-toggler').on("click", function () {
                $(this).parent().children('ul.tree').toggle(150);
                $(this).children('.fa').toggleClass('fa-caret-down fa-caret-right');
            });
        });
    }
 };
 $(styleguide.init);