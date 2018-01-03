var vsnb = {};

// Global Vars
var vsnbPopover = $(".vsnb [data-toggle='popover']");
var vsnbTooltip = $(".vsnb [data-toggle='tooltip']");

vsnb = {
	init: function() {
		vsnb.initTipsAndPops();
	},
	initTipsAndPops: function() {
		// Init BS3 popovers
		vsnbPopover.popover({
			container: 'body'
		});
		// Init BS3 tooltips
		vsnbTooltip.tooltip({
			container: 'body'
		});
		// Init Pending Approval Popover
		//TURNED OFF FOR NOW -- vsnb.pendingApprovalPopover();
		// Init Auto closing Popover
		//vsnb.closePopovers();
	},
	pendingApprovalPopover: function() {

		// TODO: HOW CAN WE MAKE THIS SCALABLE/REUSABLE
		// does not switch event handler when resize window. need to figure that out.


		// POPOVER - Pending Approval
		// change pending approval dialog depending on viewport
		$(".vsnb.wideViewport .pending-approval").popover({
			trigger: 'click',
			html: true,
			placement: 'bottom',
			title: 'Pending Approval',
			content: function() {
				return $('#pending-approval-popover').html();
			}
		});
		$(".vsnb.slimViewport .pending-approval").on("click", function() {
			global.openModalView($(this));
		});
	}
};
vsnb.init();