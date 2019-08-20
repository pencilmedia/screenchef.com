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
         app.analysisSwitcher();
         app.workArea();
         app.addChart();
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
            $('.tab-pane.active .workarea-pane').toggleClass('slideInRight slideOutRight');

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
     },
     // Work Area
     ////////////////////////
     workArea: function() {
        // Choose
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            e.target // newly activated tab
            e.relatedTarget // previous active tab
        })
     },
     // Work Area
     ////////////////////////
     addChart: function() {
        // Filter Chart Types
        $('.chart-toggle a').on('click', function() {
            var chartList = $('.chart-list');
            var whichChart = $(this).attr('data-id');
            var chartItems = $('.visualizations .chart-list li').filter(function() { return $(this).data('id') == whichChart; });
            

            if($(this).hasClass('active')) {
                // Enable everything because an active toggle was clicked
                $(this).removeClass('active');
                chartList.removeClass('highlight');
                chartItems.removeClass('on');
            } else {
                // Remove other active toggles
                $('.chart-toggle a').removeClass('active');
                // Toggle Active State
                $(this).toggleClass('active');

                 if (!$('.chart-toggle a').hasClass('active')) {
                    // Deselect all chart toggles
                    chartList.removeClass('highlight');
                    chartItems.removeClass('on');
                } else {
                    // Toggle highlight list
                    if (chartList.hasClass('highlight')) {
                        // // Turn off toggle and select the new toggle
                        $('.chart-list li').removeClass('on');
                        // Toggle On Highlighted Chart Types
                        chartItems.toggleClass('on');
                        return;
                    } else {
                        // Turn off .highlight
                        chartList.toggleClass('highlight');
                    }
                    // Toggle On Highlighted Chart Types
                    chartItems.toggleClass('on');
                }

            }


           



        })
    }
};
 $(app.init);

