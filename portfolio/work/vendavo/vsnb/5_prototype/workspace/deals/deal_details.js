var dealdetails = {};

dealdetails = {
	init: function() {
		// Bind Expand Parent Row Button
		dealdetails.expandRowBtn();
		// Bind Expand Form Line
		dealdetails.expandFormLine();
		// Customer Chart
		dealdetails.customerChart();
		$('#toggleStatusMsg').on("click", function() {
			$("#statusMsg").toggle();
		});
	},
	selectRow: function() {
		// Init Search Button to show search field
		dealdetails.lineSearch();
		// Select Row Highlight
		selectRow = $(".vsnb .table-wrapper .table-full tbody tr");
		selectRow.on("click", function() {
			// Enable Delete Row Button
			dealdetails.deleteLineItem();
			// Check if already have .select class, remove if does
			if(selectRow.hasClass('selected')) {
				selectRow.removeClass('selected');
			}
			if(selectRow.hasClass('hierarchy-parent')) {
				// Add .select class to row
				$(this).toggleClass('selected');
			}
			if(selectRow.hasClass('hierarchy-child')) {
				// Add .select class to row
				return false;
			}
		});
		// Show Row content in contextual pane
		global.showContextualPane();
	},
	expandRowBtn: function() {
		expandRowBtn = $('.vsnb .table-wrapper .table tbody tr td:first-child .butcon')
		expandRowBtn.on("click", function(event) {
			// Stop Row behaviors
  			event.stopPropagation();
			// Get this row
			thisRow = $(this).parent().parent();
			// Get this expander button icon
			rowBtnIcn = $(this).children('i');
			// Toggle up/down icon
			rowBtnIcn.toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
			// Expand this row
			if(thisRow.hasClass('hierarchy-parent')) {
				// Only parents get these behaviors
				if( thisRow.next('.hierarchy-child').is(':visible') ) {
					// Remove Row Class for css styling
					thisRow.removeClass('open')
					thisRow.next().removeClass('slideDownPreview').addClass('slideUpPreview');
					setTimeout(function() {
						$(".vsnb table .slideUpPreview").hide();
					}, 250);
				} else {
					// Open Row Class for css styling
					thisRow.addClass('open')
					thisRow.next().show().removeClass('slideUpPreview').addClass('slideDownPreview');
				}
			}
		});
	},
	lineSearch: function() {
		lineSearchField = $('.vsnb .table-wrapper .table th form');
		// Hide Search field
		lineSearchField.hide();
		// bind toggle search field
		$('.line-search').on("click", function() {
			lineSearchField.show();
		});
	},
	deleteLineItem: function() {
		deleteItem = $(".vsnb .table-wrapper table .delete-item");
		deleteItem.removeClass('disabled').removeAttr('disabled').fadeOut('fast').fadeIn();
		deleteItem.on("click", function() {
			$('#line-item-delete-modal').modal('show');
		});
	},
	customerChart: function() {
		var canvas = document.getElementById('metric');
		var pointsY = [40,30,35,25,40,15,30,5]

		dealdetails.drawChart(canvas, pointsY);

		canvas = document.getElementById('revenue');
		pointsY = [35,20,35,20,30,35,30,15]

		dealdetails.drawChart(canvas, pointsY);

		canvas = document.getElementById('margin');
		pointsY = [20,15,15,10,30,15,25,30]

		dealdetails.drawChart(canvas, pointsY);
	},
	drawChart: function(canvas, pointsY) {
		var context = canvas.getContext('2d');

		context.beginPath();

		var pointX = 0;
		var arrayLength = pointsY.length;
		for (var i = 0; i < arrayLength; i++) {
		    var pointY = pointsY[i];

		    if (i == 0) {
		    	context.moveTo(pointX,pointY);
		    } else {
		    	context.lineTo(pointX,pointY);
		    }

		    pointX +=40;
		}

		context.lineTo(280, 50);
		context.lineTo(0, 50);

		context.closePath();
		context.lineWidth = 5;
		context.fillStyle = '#4A90E2';
		context.fill();
	},
	expandFormLine: function() {
		var expandTrigger = $('.vsnb .edit-form form fieldset dl .w-action .expand-trigger');
		expandTrigger.on("click", function() {
			// Get this row
			var thisLine = $(this).parent();
			var thisLineDetails = $('.sub-details', thisLine);
			// Get this expander button icon
			lineBtnCaret = $('.butcon i + i', thisLine);
			// Toggle up/down icon
			lineBtnCaret.toggleClass('fa-caret-up').toggleClass('fa-caret-down');
			// Expand this line
			if( thisLineDetails.is(':visible') ) {
				// Close line if visible
				thisLineDetails.removeClass('slideDownPreview').addClass('slideUpPreview');
				setTimeout(function() {
					thisLineDetails.hide();
				}, 250);
			} else {
				// Show line if not visible
				thisLineDetails.show().removeClass('slideUpPreview').addClass('slideDownPreview');
			}
		});
	}
};
dealdetails.init();