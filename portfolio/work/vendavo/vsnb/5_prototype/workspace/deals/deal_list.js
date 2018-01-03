var deallist = {};

deallist = {
	init: function() {
		deallist.listActions();
		deallist.deleteDeal();
		deallist.copyDeal();
	},
	listActions: function() {
		// Deal List: DrillIn to Details
		$('.vsnb .deal-listings .deal-list dd > a').on("click", function() {
			// Close Pinned Sidebar Menu
			global.closeSidebarMenu();
			// Init Deal Details 
			dealdetails.selectRow();
			// Drill into details
			global.listDrillIn($(this)); // Pass which drill list (this)
			// Show DrillOut Button
			global.showDrillOutBtn();
			// Show Details Page
			global.showDetailsPage($(this));
			// Bind reopening of sidebar menu
			$('.active-drillin > .navbar-fixed-top.drill-out .butcon.back').bind("click", function() {
				// Open Pinned Sidebar Menu
				global.openSidebarMenu();
			});
		});
	},
	deleteDeal: function() {
		$(".deal-delete").on("click", function() {
			$(".activity-indicator").modal('show');
			$(".activity-indicator p").text('Deleting Spot Quote...');
			setTimeout(function() {
				$(".activity-indicator").modal('hide');
				global.listDrillOut();
				global.hideDrillOutBtn();
				global.openSidebarMenu();
				$('.alert-delete').eq(Math.floor(Math.random() * 2)).show();
			}, 4000);
		});
	},
	copyDeal: function() {
		$(".deal-copy").on("click", function() {
			$(".activity-indicator").modal('show');
			$(".activity-indicator p").text('Copying Spot Quote...');
			setTimeout(function() {
				$(".activity-indicator").modal('hide');
				setTimeout(function() {
					$('.alert-copy').eq(0).fadeIn();
				}, 700);
			}, 4000);
		});
	}
};
deallist.init();