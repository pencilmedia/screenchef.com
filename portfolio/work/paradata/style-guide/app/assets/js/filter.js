 /* ===================================================
  * App.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var filter = {};

 filter = {
     init: function() {
         filter.comparison();
         filter.advancedSearch();
         filter.addDimensionMeasure();
         filter.filterPills();
     },
     // FILTERS
     ////////////////////////
     comparison: function() {
         // Toggle Comparison Filter
        $("#comparison-filter").on("click", function() {
            // If checked
            //show the hidden div
            $("#comparison-one").toggleClass('flex-show').toggleClass('flex-hide');
        });
     },
     // ADVANCED SEARCH
     ///////////////
     advancedSearch: function() {
        $('[data-toggle="toggle-advanced"]').on("click", function() {
            $('#advanced-filter').toggleClass('hide-flex');
            $('#basic-filter').toggleClass('hide-flex');
        });
     },
     // ADVANCED SEARCH
     ///////////////
     addDimensionMeasure: function() {
        $('#add-filter').on('click', function (e) {
            $("#dm-list").select2("open");
            e.stopPropagation();
        })
     },
     // FILTER PILLS
     ///////////////
     filterPills: function() {
        // Tooltips
        $('.filter-pills li a').tooltip({
            animation: true,
            trigger: 'hover focus',
            placement: 'bottom',
            title: 'Filter Tooltip'
        });
     }
};
 $(filter.init);

