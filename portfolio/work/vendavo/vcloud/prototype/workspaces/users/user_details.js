user_details = {
    init: function() {
        user_details.gridUserActions();
        user_details.gridUserTooltip();
        user_details.panelUserActions();
        user_details.showUserDeviceWiped();
        user_details.disableUserActions();
        $('.grid-container .table td[data-toggle="tooltip"]').tooltip(); // Add Tooltip when value in preview is truncated
    },
    gridUserActions: function() {
        $(".proto-user-details").on("click", function() {
            $('.manage-users .rt-pane article').hide(); // NOTE: BE CAREFUL WHAT YOUR GRABBING. CHANGED TO .manage-users .rt-pane because it was causing major bug for Midas right panel layout!!
            user_details.showUserDetails($(this));
            shell.openRtPanel();
        });
        $(".close-contextual-pane").on("click", function() {
            shell.closeRtPanel();
        });
    },
    gridUserTooltip: function() {

        $('.fa-envelope-o').tooltip({
            title: 'This user has been invited but has not yet activated.',
            placement: 'right'
        });
    },
    panelUserActions: function() {
        $("#proto-add-list").on("click", function() {
            shell.openRtPanel();
            user_details.addListUsers();
        });

        $("#proto-add-user").on("click", function() {
            shell.openRtPanel();
            user_details.addNewUser();
        });

        $('.user-add').hide();
        $('.bulk-add').hide();
        $('.proto-edit-privileges').hide();

        $('.proto-action-edit').on("click", function() {
            user_details.showUserPrivileges($(this));
        });

        $('.user-device').on("click", function() {
            $('.proto-hide-on-edit').hide();
            user_details.showUserDevice($(this));
        });

        $('.close-user-devices').on("click", function() {
            $('.user-devices').show();
            user_details.showUserDetails($(this));
        });

        $('.proto-edit-privileges .proto-action-cancel').on("click", function() {
            user_details.showUserDetails($(this));
            $('.proto-edit-privileges').hide();
        });
    },
    showUserPrivileges: function(element) {
        row_id = element.parents('article').attr('data-id');

        $('.proto-hide-on-edit').hide();
        $('article[data-id="' + row_id + '"].proto-edit-privileges').show();
    },
    showUserDetails: function(element) {
        row_id = element.attr('data-id');

        if (row_id === undefined) {
            row_id = element.parents('article').attr('data-id');
        }

        $(".user-details").hide();
        $('article[data-id="' + row_id + '"].proto-hide-on-edit').show();
    },
    showUserDevice: function(element) {
        row_id = element.attr('data-id');

        if (row_id === undefined) {
            row_id = element.parents('article').attr('data-id');
        }

        $(".user-details").hide();
        $('article[data-id="' + row_id + '"].user-devices').show();
    },
    addListUsers: function() {
        $('.user-add').hide();
        $('.user-details').hide();
        $('.bulk-add').show();
    },
    addNewUser: function() {
        $('.user-details').hide();
        $('.bulk-add').hide();
        $('.user-add').show();
    },
    disableUserActions: function() {

        $('.close-alert').on("click", function() {
            $(".alert").removeClass('in');
            setTimeout(function() {
                $(".alert").alert('close');
            }, 400);
        });

        $('.reopen-alert').on("click", function() {
            $(".alert").fadeOut();
            setTimeout(function() {
                $(".alert").fadeIn();
            }, 1000);
        });

        // Init: Cancel Button
        user_details.disableUserCancel();

        // Init: Submit Button
        user_details.disableUserSubmit();

        // Init: Bind Reset Password - Animation
        user_details.disableUserResetPassword();
    },
    disableUserResetPassword: function() {
        $('.confirmation').hide();
    },
    disableUserCancel: function() {
        $('.back button').attr('data-id', 'reset-cancel').on("click", function() {
            user_details.resetUserMenu($(this).parents('.flipcard'));
        });
    },
    disableUserSubmit: function() {
        $('#disable-submit').on("click", function() {
            $('.confirmation').removeClass('animated fadeOut'); // Resets the confirmation pill, if it has already been displayed/animated
            $('.confirmation').show();
            $('.confirmation').addClass('animated fadeIn');
            window.setTimeout(function() {
                $('.confirmation').removeClass('animated fadeIn').addClass('animated fadeOut');
            }, 4000);
            window.setTimeout(function() {
                $('.confirmation').hide();
            }, 5000);
        });
    },
    resetUserMenu: function(element) {
        // Return Menu back to Front Side
        element.removeClass('flip');
        element.removeAttr('style'); // Reverse animates the height back to the original CSS value
        element.css('min-height', '30px'); // Without this the menu collapses to height: 0 then grows (flickers)
    },
    showUserDeviceWiped: function() {

        $('#wipe-device-submit').on("click", function() {
            // Show, Spin, Show Message, Hide
            $(".modeless").removeClass("hide").addClass('show');
            setTimeout(function() {
                $(".modeless .progress-spinner i").removeClass("icon-spinner").removeClass("icon-spin").addClass('icon-ok')
            }, 3000);
            setTimeout(function() {
                $(".modeless .progress-spinner p").text("Jeremy Affeldt's iPad Successfully Wiped")
            }, 3000);
            setTimeout(function() {
                $(".modeless .progress-spinner i").addClass("icon-spinner").addClass("icon-spin").removeClass('icon-ok')
            }, 5000);
            setTimeout(function() {
                $(".modeless .progress-spinner p").text("Loading...")
            }, 5000);
            setTimeout(function() {
                $(".modeless").removeClass("show").addClass('hide')
            }, 5000);
        });
    }
};
user_details.init();