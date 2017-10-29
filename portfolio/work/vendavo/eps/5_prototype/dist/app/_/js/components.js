 /* ===================================================
  * Styleguide.js - Component Library (Style Guide) Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var components = {};

 components = {
    init: function() {
        // Components
        components.breadcrumbJS();
        components.dateRange();
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
            crumbRange = $('.breadcrumb.truncated li').slice( crumbRangeBegin, crumbRangeEnd );
            // Hide the children in the range between 2nd child and last child
            crumbRange.hide();
            // Bind toggle to 2nd child
            $('.breadcrumb.truncated li:nth-child(2) a').on("click", function() {
              // Put back the hidden text
              secondCrumbChild.children('a').html(secondCrumbChildTxt);
              // Show Hidden Children
              crumbRange.show();
              // Hide children > 5
              $('.breadcrumb.truncated li').slice( 4 ).remove();
              // Remove link from last child
              $('.breadcrumb.truncated li:last-child a').contents().unwrap();
             
            });
        }
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

                  $('.input-group.date').datepicker({
                      todayBtn: 'linked',
                      calendarWeeks: true
                  });
              },
              closable: false,
              draggable: false,
              buttons: [{
                  label: 'Cancel',
                  cssClass: 'btn-default',
                  action: function(dialogRef){
                      dialogRef.close();
                  }
              }, {
                  label: 'OK',
                  cssClass: 'btn-primary'
              }]
          })
    }
 };
 $(components.init);