customer_communication = {
	init: function() {
		customer_communication.scheduledMaintenance();
		customer_communication.closeMaintenanceDetails();

        $('.datepicker').datepicker();
        $('.timepicker').timepicker();
	},
	scheduledMaintenance: function() {
        $('#scheduledMaintenance').click(function() {
        	customer_communication.showMaintenanceDetails($(this));
            shell.openRtPanel();
        });
        $('table tr').click(function() {
        	customer_communication.showMaintenanceDetails($(this));
            shell.openRtPanel();
        });
	},
    showMaintenanceDetails: function(element) {
        row_id = element.attr('data-id');

        $('.account-details').hide();
        $('article.account-details[data-id="' + row_id + '"]').show();      
    },
    closeMaintenanceDetails: function() {
		$('.close-contextual-pane').click(function () {
			shell.closeRtPanel();
		});
    }
};
customer_communication.init();