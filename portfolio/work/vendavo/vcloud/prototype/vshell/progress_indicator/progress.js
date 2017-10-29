/* ===================================================
 * progress.js - Custom Prototype JavaScript
 * ===================================================
 * Copyright 2013 Vendavo, Inc.
 * ========================================================== */

/////////////////////////
//BELOW ARE PURE PROTOTYPE BEHAVIORS - NOT FOR PRODUCTION
/////////////////////////
progress = {
    init: function() {
        progress.openPanel();
    },
    openPanel: function() {
        // Open Right Panel, Init Save Button
        $("#proto-launch-pane-progress").click(function() {
            shell.openRtPanel();
        });
        $("#proto-activate-progress").bind('click', function() {
            progress.progressIndicatorConfirmation();
        });
    },
    progressIndicatorConfirmation: function() {
        $(".modeless").removeClass("hide").addClass('show');
        setTimeout(function() {
            $(".modeless .progress-spinner i").removeClass("fa fa-spinner").removeClass("fa-spin").addClass('fa fa-check')
        }, 3000);
        setTimeout(function() {
            $(".modeless .progress-spinner p").text("Completed : Example of very very long content in this progress indicator")
        }, 3000);
    }
};
$(progress.init);