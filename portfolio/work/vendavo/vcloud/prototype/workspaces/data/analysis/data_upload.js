data_upload = {
	init: function() {
		data_upload.templateNavigation();
	},
	templateNavigation : function () {
		$('.close-vocabulary').click (function () {
			window.location.href = "../";
		});
	}
};
data_upload.init();