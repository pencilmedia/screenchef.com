 /* ===================================================
  * Styleguide.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var components = {};

 components = {
     init: function() {
         // Components
         components.breadcrumbJS();
         components.launchDialogs();
         components.dateRange();
         components.infotip();
     },
     // BREADCRUMB
     ///////////////
     breadcrumbJS: function() {
         var crumbList = $('.breadcrumb.truncated');
         var crumbLI = $('.breadcrumb.truncated').children('li');
         var crumbCount = crumbLI.length;
         if (crumbCount >= 5) {
             // Store 2nd child text
             var secondCrumbChild = $('.breadcrumb.truncated li:nth-child(2)');
             var secondCrumbChildTxt = secondCrumbChild.children('a').text();
             // Change 2nd child text to an ellipsis
             secondCrumbChild.children('a').html('&hellip;');
             // Leave last 4 children and first 2 children showing. Range is 2nd child - last child
             crumbRangeBegin = 2;
             crumbRangeEnd = crumbCount - 4;
             crumbRange = $('.breadcrumb.truncated li').slice(crumbRangeBegin, crumbRangeEnd);
             // Hide the children in the range between 2nd child and last child
             crumbRange.hide();
             // Bind toggle to 2nd child
             $('.breadcrumb.truncated li:nth-child(2) a').on("click", function() {
                 // Put back the hidden text
                 secondCrumbChild.children('a').html(secondCrumbChildTxt);
                 // Show Hidden Children
                 crumbRange.show();
                 // Hide children > 5
                 $('.breadcrumb.truncated li').slice(4).remove();
                 // Remove link from last child
                 $('.breadcrumb.truncated li:last-child a').contents().unwrap();

             });
         }
     },
     // Dialogs
     ///////////////
     launchDialogs: function() {
         // Bind Date Range Dialog
         $('[data-id="trigger-dialog"]').on('click', function() {
             components.modalDialog();
         });
     },
     // Example Modal Dialog
     ///////////////
     modalDialog: function() {
         // Date Range Dialog, Options and Content
         BootstrapDialog.show({
             title: 'Example Modal Dialog',
             message: $('<div></div>').load('dialog.html'),
             onshown: function() {
                 // Bind after dialog is shown
                 // Animation slide to offscreen navigation
                 styleguide.offScreenNav();
             },
             closable: false,
             draggable: false,
             buttons: [{
                 label: 'Cancel',
                 cssClass: 'btn-default',
                 action: function(dialogRef) {
                     dialogRef.close();
                 }
             }, {
                 label: 'OK',
                 cssClass: 'btn-primary'
             }]
         })
     },
     // Date Range
     ///////////////
     dateRange: function() {
         $('.presentation-date-range').popover({
             container: 'body',
             content: '02/02/2014 - 03/04/2014',
             placement: 'top',
             trigger: 'hover',
             animation: true
         });
         // Bind Date Range Dialog
         $('#trigger-date-range-dialog').on('click', function() {
             components.dateRangeDialog();
         });

     },
     // Date Range DIALOG
     ///////////////
     dateRangeDialog: function() {
         // Date Range Dialog, Options and Content
         BootstrapDialog.show({
             cssClass: 'date-range-dialog',
             title: 'Date Range Selection',
             message: $('<div></div>').load('dialog.html'),
             onshown: function() {
                 // Bind after dialog is shown
                 styleguide.offScreenNav();

                 // Datepicker Init
                 $('.input-group.date').datepicker({
                     todayBtn: 'linked',
                     calendarWeeks: true
                 });

                 $(".datepicker").on('click', function() {
                    $("#calendar-from").focus();
                 });

                 // Business Calendar Binds
                 $('.business-calendar-quarters').hide();
                 $('.business-calendar-months').hide();
                 $('.business-calendar-weeks').hide();

                 $("input[name$='years']").on('change', function() {
                    $("input[name$='quarters']:checked").prop('checked', false).parent().removeClass('active');
                    $('.business-calendar-quarters').show();

                    if($(this).attr('value') == '3') {
                        $("input[name$='years'][value$='5']").parent().addClass('disabled');
                    }
                 });

                 $("input[name$='quarters']").on('change', function() {
                    $("input[name$='months']:checked").prop('checked', false).parent().removeClass('active');
                    $('.business-calendar-months').show();

                    if($(this).attr('value') == '1') {
                        $("input[name$='quarters']:not([value='1']):not([value='2'])").parent().addClass('disabled');
                    }                    
                 });

                 $("input[name='months']").on('change', function() {
                     $("input[name$='weeks']:checked").prop('checked', false).parent().removeClass('active');
                     $('.business-calendar-weeks').show();

                    if($(this).attr('value') == '1') {
                        $("input[name$='months']:not([value='1']):not([value='2'])").parent().addClass('disabled');
                    }

                     var month = $("input[name$='months']:checked").attr('value');
                     switch (true) {
                        case (month < 4):
                            var quarter = 1;
                            break;
                        case (month > 3 && month < 7):
                            var quarter = 2;
                            break;
                        case (month > 6 && month < 10):
                            var quarter = 3;
                            break;
                        case (month > 9 && month < 13):
                            var quarter = 4;
                            break;
                    }

                     $("input[name$='quarters'][value='" + quarter + "']").prop('checked', true).parent().addClass('active');
                 });

                $("input[name='weeks']").on('change', function() {
                    if($(this).attr('value') == '1') {
                        $("input[name$='weeks']:not([value='1']):not([value='2'])").parent().addClass('disabled');
                    }
                });
             },
             closable: false,
             draggable: false,
             buttons: [{
                 label: 'Cancel',
                 cssClass: 'btn-default',
                 action: function(dialogRef) {
                     dialogRef.close();
                 }
             }, {
                 label: 'OK',
                 cssClass: 'btn-primary'
             }]
         })
     },
     // Tooltips, Infotips
     ///////////////
     infotip: function() {
         $('.infotip').popover({
             container: 'body',
             content: '<p>A <b>tooltip</b> is a pop-up window that concisely describes the object being pointed to, eliminating the need always to have descriptive text on screen.</p>',
             html: true,
             placement: 'top',
             trigger: 'hover',
             animation: true
         });
     }    
 };
 $(components.init);