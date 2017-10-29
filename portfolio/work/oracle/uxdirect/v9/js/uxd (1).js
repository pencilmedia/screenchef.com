
$(document).ready(function() {
	// Open Left Pane
	$('#identify').click(function() {
		if ( $('#lt_pane').hasClass('ltPaneClose') ) {
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneContentOpen');
			$('.rtPaneClose').removeClass('rtPaneClose').addClass('rtPaneOpen');
		}
		if ( $('#lt_pane').hasClass('ltPaneOpen') ) {
			$('.ltPaneOpen').removeClass('ltPaneOpen').addClass('ltPaneContentOpen');
			$('.rtPaneContentOpen').removeClass('rtPaneContentOpen').addClass('rtPaneOpen');
		}
	});
	// Open Right Pane
	$('#experiences').click(function() {
		if ( $('#rt_pane').hasClass('rtPaneClose') ) {
			$('.rtPaneClose').removeClass('rtPaneClose').addClass('rtPaneContentOpen');
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneOpen');
		}
		if ( $('#rt_pane').hasClass('rtPaneOpen') ) {
			$('.rtPaneOpen').removeClass('rtPaneOpen').addClass('rtPaneContentOpen');
			$('.ltPaneContentOpen').removeClass('ltPaneContentOpen').addClass('ltPaneOpen');
		}
	});
	
	// Open Both Panes
	$('#resources').click(function() {
		if ( $('#rt_pane').hasClass('rtPaneClose') ) {
			$('.rtPaneClose').removeClass('rtPaneClose').addClass('rtPaneOpen');
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneOpen');
		}
		if ( $('#rt_pane').hasClass('rtPaneOpen') ) {
			$('.rtPaneOpen').removeClass('rtPaneOpen').addClass('rtPaneOpen');
			$('.ltPaneContentOpen').removeClass('ltPaneContentOpen').addClass('ltPaneOpen');
		}
		if ( $('#rt_pane').hasClass('rtPaneContentOpen') ) {
			$('.rtPaneContentOpen').removeClass('rtPaneContentOpen').addClass('rtPaneOpen');
			$('.ltPaneClose').removeClass('ltPaneClose').addClass('ltPaneOpen');
		}
		
	});
	
});