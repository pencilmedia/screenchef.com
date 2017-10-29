customer_user_details = {
    init: function() {
        customer_user_details.gridCustomerUserActions();

        $('html').click(function(e) {
            $('.admin-info').popover('hide');
        });

        $('.admin-info').popover({
            trigger: 'manual',
            title: 'User Administrators',
            placement: 'left',
            content: '<table cellspacing="0" cellpadding="3" border="0"><tr><td>Bob Baker</td><td>bbaker@3m.com</td></tr><tr><td>Sally Green</td><td>sgreen@3m.com</td></tr><tr><td>Tom Smith</td><td>tsmith@3m.com</td></tr></table>'
        }).click(function(e) {
            $(this).popover('toggle');
            e.stopPropagation();
        });

    },
    gridCustomerUserActions: function() {
        $(".proto-customer-user-details").click(function() {
            shell.openRtPanel();
        });
        $(".close-contextual-pane").on("click", function() {
            shell.closeRtPanel();
        });
    }
};
customer_user_details.init();