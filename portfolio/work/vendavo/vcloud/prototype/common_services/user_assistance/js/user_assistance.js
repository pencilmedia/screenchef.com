var user_assistance = {};
user_assistance = {
    init: function() {
    	user_assistance.buttonActions();
    },
    buttonActions: function () {
        $('.expand-all').click(function () {
        	$(this).hide();
        	user_assistance.expandAll();
        });

        $('.collapse-all').click(function () {
        	$(this).hide();
        	$('.expand-all').show();
			$('.accordion-body').collapse('hide');
			$('.accordion-toggle i').attr('class','icon-angle-right');
        });

        $('.accordion-toggle').click(function () {
        	$(this).children('i').toggleClass("icon-angle-right icon-angle-down");
        });

        $('.print').click(function() {
			user_assistance.expandAll();
        	window.print();
        })
    },
    expandAll: function() {
    	$('.collapse-all').show();
		$('.accordion-body').collapse('show');
		$('.accordion-toggle i').attr('class','icon-angle-down');
    }
};
$(user_assistance.init);