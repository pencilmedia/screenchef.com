 /* ===================================================
  * Proto.js - Proto Only
  * =================================================== */

 // GLOBAL VARIABLES
 var proto = {};
 proto = {
     // INIT PLUGINS
     ///////////////
     init: function() {
        proto.showPageHead();
        proto.addAccount();
     },
     // SHOW PAGE HEAD NAV - proto only - not for production
     ///////////////
     showPageHead: function() {
        var pageHeader = $('.app-shell header');
        var pageClassName = $('body').attr('data-id');
        // Which Page Head shows
        $(".app-shell header[data-id=" + pageClassName + "]").show();
     },
     // CUSTOMER ACCOUNT
     ///////////////
     addAccount: function() {
         $('#addCustomer').on('click', function() {
             BootstrapDialog.show({
                 onshown: function() {
                     // Init Plugins here 
                     $('[data-plugin="select2"]').select2();
                 },
                 title: 'Add Customer Account',
                 message: $('<section></section>').load('dialogs/add_account.html'),
                 buttons: [{
                     label: 'Cancel',
                     action: function(dialogRef) {
                         dialogRef.close();
                     }
                 }, {
                     label: 'Add Customer Account',
                     cssClass: 'btn-primary',
                     action: function() {
                         alert('Account Added');
                     }
                 }],
                 closable: false,
                 draggable: true
             });
         });
     },
     deleteAccount: function() {
         $('#deleteAccount').on('click', function() {
             BootstrapDialog.show({
                 title: 'Delete Account Confirmation',
                 message: 'Are you sure you would like to delete this customer account?',
                 buttons: [{
                     label: 'Cancel',
                     action: function(dialogItself) {
                         dialogItself.close();
                     }
                 }, {
                     label: 'Delete This Account',
                     cssClass: 'btn-danger',
                     action: function(dialogItself) {
                        dialogItself.setMessage('This customer account has been deleted.');
                        setTimeout(function() {
                           dialogItself.close();
                        }, 2000);
                     }
                 }]
             });
         });
     },
     paneContent: function(showID) {
        // Show proper account ID
        $('.contextual-content > section').hide();
        $('.contextual-content > section[data-id="' + showID + '"]').show();  
        // Bind Edit Button
        $('#account-edit').on('click', function() {
            $('.contextual-content > section').hide();
            $('.contextual-content > .edit-section').show();
            // Reinit select2 plugin
            $('.contextual-content [data-plugin="select2"]').select2();
        });
     },
     // SLAT BEHAVIORS
     //////////////////
     slatList: function() {
        $('.listings dd > a').on('click', function() {
            var whichSlat = $(this).attr('data-id');
            // Remove highlighted row
            $('.listings dd > a').removeClass('active');
            // Highlight clicked row
            $(this).addClass('active');
            // Open Contextual Pane
            app.openContextual();
            // Show Contextual Pane Content
            proto.paneContent(whichSlat);
            // Bind delete button
            proto.deleteAccount();
        });
     }
 };
 $(proto.init);