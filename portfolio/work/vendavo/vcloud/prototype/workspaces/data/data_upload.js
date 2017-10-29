var data_upload = {};
data_upload = {
	init: function() {
		data_upload.detailsPanelBehavior();
		data_upload.settingsBehavior();
		$(".data-upload [data-toggle='tooltip']").tooltip({
			container: 'body'
		});
	},
	showDataUploadDetails: function(element) {
		row_id = element.attr('data-id');
		if (row_id === undefined) {
			row_id = element.parents('.data-upload-details article').attr('data-id');
		}
		$(".data-upload-details article").hide();
		$('.data-upload-details article[data-id="' + row_id + '"]').show();
	},
	detailsPanelBehavior: function() {
		$(".data-upload-details .close-contextual-pane").on("click", function() {
			$('.upload-analyze-table tr').removeClass('highlighted');
			shell.closeRtPanel();
		});
		$(".upload-analyze-table tr").on("click", function() {
			$('.upload-analyze-table tr').removeClass('highlighted');
			$(this).addClass('highlighted');
			shell.openRtPanel();
			data_upload.showDataUploadDetails($(this));
		});
	},
	settingsBehavior: function() {
		$('#data-upload-modal-switcher').on("click", function() {
			$('.data-upload-modal-group').prop("disabled", !$(".data-upload-modal-group").prop("disabled"));
		});
	}
};
data_upload.init();