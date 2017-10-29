settings = {
	init: function() {

        $(".settings-action-edit").click(function() {
        	$(".sharing-edit").hide();
        	$(".settings-edit").show();
            shell.openRtPanel();
        });

        $(".sharing-action-edit").click(function() {
        	$(".settings-edit").hide();
        	$(".sharing-edit").show();
            shell.openRtPanel();
        });

        $(".close-contextual-pane").click(function() {
            shell.closeRtPanel();
        });

        $('#sharing-select').prop('disabled', true);
        $("#share-non-users").prop('disabled', true);
        $("#share-grant").click(function() {
            if ($('#share-grant').is(':checked')) {
                $("#share-non-users").prop('disabled', false);
            }
            else {
                $("#share-non-users").prop('checked', false);
                $("#share-non-users").prop('disabled', true);
                $('#sharing-select').prop('disabled', true).trigger("chosen:updated");
            }
        });
        $("#share-non-users").click(function() {
            $('#sharing-select').prop('disabled', !$('#sharing-select').prop('disabled')).trigger("chosen:updated");
        });
	}
};
settings.init();