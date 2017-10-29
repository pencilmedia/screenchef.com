/* ===================================================
 * Authenticate.js - Custom Prototype JavaScript
 * ===================================================
 * Copyright 2012 Vendavo, Inc.
 * ========================================================== */

/////////////////////////
//BELOW ARE PURE PROTOTYPE BEHAVIORS - NOT FOR PRODUCTION
/////////////////////////
authenticate = {
    init: function() {
        authenticate.signin();
        $(".form-entry .alert").hide();
        $(".form-system-down").hide();
        $(".form-recovery").hide();
        $(".form-check-email").hide();
        $(".form-security").hide();
        $(".form-reset-password").hide();
        authenticate.submitRegForm();
    },
    signin: function() {
        $(".btn-signin").hide();
        $(".btn-register").click(function() {
            authenticate.registerButtons();
        });
        $(".btn-signin").click(function() {
            authenticate.registerButtons();
        });
        $("#proto-signin").click(function() {
            authenticate.signInErrors();
        });
        $("#proto-alert-message").click(function() {
            authenticate.alertMessage();
        });
        $("#proto-form-recovery").click(function() {
            authenticate.showRecoveryForm();
        });
        $("#proto-security-answer").click(function() {
            authenticate.showSecurityForm();
        });
        $("#proto-system-down").click(function() {
            authenticate.alertScheduledMaintenance();
        });
    },
    // REGISTRATION BUTTONS
    registerButtons: function() {
        $('.btn-register').toggle();
        $('.btn-signin').toggle();
    },
    // CREATE ERROR MESSAGE - EDIT CUSTOMER INFO
    signInErrors: function() {
        usernameError = "Your username is incorrect.";
        $("input[name='username']");
        var errorSpan = document.createElement('span');
        var helpBlock = $(errorSpan).addClass('help-block');
        var errorMsg = $(helpBlock);
        $("#proto-username").addClass('error').append(errorMsg.html(usernameError));
    },
    // SHOW ALERT MESSAGE - FUTURE SYSTEM MAINTENANCE
    alertMessage: function() {
        $(".alert-block").toggle();
    },
    // SHOW ALERT MESSAGE - CURRENT SYSTEM MAINTENANCE
    alertScheduledMaintenance: function() {
        $(".form-entry").hide();
        $(".form-system-down").hide();
        $(".form-recovery").hide();
        $(".form-check-email").hide();
        $(".form-security").hide();
        $(".form-system-down").toggle();
    },
    // SHOW RECOVERY FORM - Trouble Signing in
    showRecoveryForm: function() {
        $(".form-entry").hide(); // Hide Entry Sign In Form
        $(".form-recovery").show(); // Show Recovery Form
        // Bind Security Button
        $("#proto-check-email").click(function() {
            authenticate.showCheckEmail();
        });
    },
    // SHOW RECOVERY FORM - Trouble Signing in
    showCheckEmail: function() {
        $(".form-recovery").hide(); // Hide Entry Sign In Form
        $(".form-check-email").show(); // Show Recovery Form
        // Bind Check Email Button
        $("#proto-email-sent").click(function() {
            authenticate.showSecurityForm();
        });
    },
    // SHOW SECURITY ANSWER FORM - Answer Security Question
    showSecurityForm: function() {
        $(".form-check-email").hide(); // Hide Recovery Form
        $(".form-security").show(); // Show Recovery Form
        // Bind Reset Password Button
        $("#proto-security-answer").click(function() {
            authenticate.showResetPassword();
            $("#newPassword").focus();
        });
    },
    // SHOW RESET PASSWORD
    showResetPassword: function() {
        $(".form-security").hide(); // Show Recovery Form
        $(".form-reset-password").show(); // Show Reset Password Form
        $('.form-reset-password .info-unit dd:first-child span').hide(); // Hide Password Error Message

         // Set up Password Policy Popover
         $("#newPassword").popover({animation:'true',html:'true',trigger:'manual',
            title: 'Password Policy',
            content:'<ul><li>6 or more characters</li><li>Lowercase and uppercase characters</li><li>At least one number</li></ul>'
        });
        $("#confirmPassword").focus(function() {
            // Show error message and styling
            $('.form-reset-password .info-unit dd:first-child span').show();
            $('.form-reset-password .info-unit dd:first-child').addClass('error');
            // Show Password Policy Popover
            $("#newPassword").popover('show');
        });
        // Bind Reset Password Button
        $("#proto-reset-password").click(function() {
            $("#newPassword").popover('hide');
            authenticate.showEntryForm();
        });
    },
    // SHOW EMAIL CONFIRMATION ALERT
    showEntryForm: function() {
        $(".form-reset-password").hide();
        $(".form-entry").show();
    },
    // START FREE TRIAL - REGISTRATION SUBMIT BUTTON
    submitRegForm: function() {
       $('#proto-register').click(function(){
            $(this).button('loading');
            btnspinner = "<i class='icon-refresh icon-spin'></i>";
            $(this).prepend(btnspinner);
        });
    }
};
$(authenticate.init);
