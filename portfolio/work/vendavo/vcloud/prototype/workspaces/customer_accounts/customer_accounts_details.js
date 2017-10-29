customer_details = {
	init: function() {
		customer_details.gridCustomerActions();
		customer_details.panelCustomerDetailsActions();
		customer_details.editCustomerDetailsTooltip();
        customer_details.licenseBehaviors();
	},
    licenseBehaviors: function() {
        $('.dropdown-menu.with-input').click(function (e) {
            // avoid closing dropdown after a click on a input field
            if (event.target.nodeName == "INPUT") {
                e.stopPropagation();
            }
        });
        $('.datepicker').datepicker({
            format: 'dd-mm-yyyy',
            autoclose: true,
            orientation: 'auto'
        });
    },
	gridCustomerActions: function() {
        $('#addCustomerButton').click(function() {
            customer_details.showAddCustomer();
            shell.openRtPanel();
        });
        $(".proto-customer-details").click(function() {
            customer_details.showCustomerDetails($(this));
            shell.openRtPanel();
        });
        $(".close-contextual-pane").on("click", function() {
            shell.closeRtPanel();
        });
	},
    panelCustomerDetailsActions: function() {

        $('.proto-action-edit').click(function() {
            customer_details.showEditCustomerDetails($(this));
        });
        $('.proto-action-cancel').click(function() {
            $('.proto-hide-on-edit').show();
            customer_details.showCustomerDetails($(this).parents("article"));
        });
        $('.proto-action-save-customer').click(function(){
            customer_details.showCustomerActionErrors();
        });
        $('.proto-view-app-details').click(function(){
            customer_details.showAppDetails();
        });
    },
	editCustomerDetailsTooltip: function() {
        $('form .info').popover({
            trigger: 'hover',
            title: 'User Assistance',
            placement: 'top',
            content: 'Only a currently active user can be an Account Owner.'
        });
	},
    showCustomerActionErrors: function() {
        message = "Please resolve 1 issue below.";

        $("input[name='address']");
        var errorSpan = document.createElement('span');
        var errorMsg = $(errorSpan);
        $(".proto-address").addClass('error').append(errorMsg.html('Please enter a valid address.'));
        $(".createerrors").html(message).addClass("alert alert-block alert-error fade in");
    },
    showCustomerDetails: function(element) {
        row_id = element.attr('data-id');

        $(".account-details").hide();
        $(".add-cus-details").hide();
        $(".app-details").hide();
        $(".edit-cus-details").hide();
        $('article.account-details[data-id="' + row_id + '"]').show();      
    },
    showEditCustomerDetails: function(element) {
        row_id = element.parents('article').attr('data-id');
        $('.proto-hide-on-edit').hide();
        $('article.edit-cus-details[data-id="' + row_id + '"]').show();
    },
    showAppDetails: function(element) {
        $(".account-details").hide();
        $(".add-cus-details").hide();
        $(".app-details").show();
        $(".edit-cus-details").hide();
    },
    showAddCustomer: function() {
        $('article').hide();
        $('.add-cus-details').show();
    }
};
customer_details.init();