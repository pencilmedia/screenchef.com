 /* ===================================================
  * App.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var app = {};

 app = {
     init: function() {
         app.initPlugins();
         // app
         app.togglePane();
         app.formsJS();
         app.filters();
         app.analysisSwitcher();
     },
     // INIT PLUGINS
     ///////////////
     initPlugins: function() {
         $(function() {
             // Init fastclick plugin
             FastClick.attach(document.body);

             // Init Select2 Component plugin
             // Single Select
             $('.select2.single-edit').select2({
                 allowClear: true
             });

             // Multi Select
             $('.select2.multi-edit').select2();

             // Popovers
             $('[data-toggle="popover"]').popover();

             // Init jquery.truncator truncation plugin
             $('.truncate').truncate({
                 max_length: 180,
                 more: 'Show More',
                 less: 'Show Less',
                 link_prefix: '&nbsp;&hellip;&nbsp;',
                 link_suffix: '&nbsp;'
             });

            // Bootstrap Datepicker
            $('.input-group.date .input-group-addon').datepicker({
                todayBtn: 'linked',
                calendarWeeks: true
            });
         });
     },
     // Highchart Dummy Chart - THROW AWAY WHEN DONE
     ////////////////////////
     renderHChartPrototypeOnly: function() {
        $('#highchart').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: ' '
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    center: ["50%", "50%"],
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                data: [
                    ['Firefox',   44.2],
                    ['IE7',       26.6],
                    ['IE6',       20],
                    ['Chrome',    3.1],
                    ['Other',    5.4]
                ]
            }]
        });
     },
     // // Work Area Pane
     // ////////////////////////
     togglePane: function() {
         // Render High Charts
         app.renderHChartPrototypeOnly();

         // Chart Pane - Toggle Open/Close
        $('[data-open-pane]').on("click", function() {
            $('.workarea-container > .tab-content > .tab-pane.active').toggleClass('pane-open');
            $('#workarea-pane').toggleClass('slideInRight slideOutRight');

            // Toggling pane reflows highchart
            $('#highchart').animate({
                width: '100%'
            }, {
                duration: 250,
                step: function() {
                    $('#highchart').highcharts().reflow();
                }
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
         // Popover for status indicator in forms
         $('.form-group .field-indicator').popover({
             trigger: 'hover',
             placement: 'right',
             container: 'body',
             content: 'You made a big mistake'
         });
     },
     // FILTERS
     ////////////////////////
     filters: function() {
         // Toggle Comparison Filter
        $("#comparison-filter").click(function() {
            // If checked
         
                //show the hidden div
                $("#comparison-one").toggleClass('flex-show').toggleClass('flex-hide');
            
        });
     },
     // Analysis Switcher
     ////////////////////////
     analysisSwitcher: function() {
        // Toggle Analysis Menu Actions
        $('#analysis-switcher').on('click', function () {
            // Toggle page actions
            $('.page-actions.dropdown-analysis-closed').toggle();
            // Toggle Analyses Actions
            $('.page-actions.dropdown-analysis-open').toggle();
        })
     }
 };
 $(app.init);

