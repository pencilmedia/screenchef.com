var OPEN_PANE_WIDTH = 82;
var CLOSED_PANE_WIDTH = (100 - OPEN_PANE_WIDTH) / 2;
var CURRENT_PANE, LEFT_PANE_LOADED, CENTER_PANE_LOADED, RIGHT_PANE_LOADED;

uxd = {
	init: function(){
		$('button.two').click(uxd.openRight);
		$('button.one').click(uxd.openLeft);	
		$('#ct_pane,button.three').click(uxd.openCenter);
		$('.uxd_logo').click(uxd.reset);
		$('#ct_pane *').hide();
		$('.show_result').click(uxd.showResults);

		uxd.onResize();
	},
	
	openLeft : function()
	{
		if ( CURRENT_PANE == "left" ) return;
	
		// Content URL
		var content_url = './assets/identify_need.html';
		
		$('#ct_pane *').hide();
		$('#lt_pane').css({ "width": OPEN_PANE_WIDTH+"%", opacity: "0.95"}).removeClass('cursor').addClass('shadow');
		$('#ct_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.7"}).addClass('cursor');
		$('#rt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('.page_tag').show().css({"width": CLOSED_PANE_WIDTH+"%", "left":OPEN_PANE_WIDTH+"%"});
		$('.page_tag h2').text('Identify Need');
		$('.page_tag').animate({"height":"25px"});

		//Content Wrappers
		$('.content_wrapper').hide(); 
		$('#lt_pane .content_wrapper').show();
		
		if ( !LEFT_PANE_LOADED )
			$('#lt_pane .content_wrapper').load(content_url, uxd.leftPaneInit);

		$('button,.pane_title').hide();
		$('.pane_title.right').show();

		$('#rt_pane').click(uxd.openRight);
		$('#lt_pane').unbind('click');
		$('.page_tag').unbind('hover');
		
		CURRENT_PANE = "left";
		LEFT_PANE_LOADED = true;
	},
	
	leftPaneInit : function()
	{
		$('.in_nav li').click( uxd.doLeftPanelNavigation );
		$('.pane section').hide();
		$('section#in_users_section').show();
	},
	
	doLeftPanelNavigation : function()
	{
		var objID = $(this).attr('id');
		
		$('.pane section').hide();
		
		$('#in_' + objID + '_section').show();
		
		$('.pane nav ul li').removeClass('selected');
		$(this).addClass('selected');
		
		console.log ( objID );
		return false;
	},
	
	openCenter : function()
	{
		if ( CURRENT_PANE == "center" ) return;
		
		// Content URL
		var content_url = './assets/about.html';

		$('#lt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('#ct_pane').css({ "width": OPEN_PANE_WIDTH+"%", opacity: "0.95"}).css( {"display":""}).removeClass('cursor');
		$('#rt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('.page_tag').show().css({"width":OPEN_PANE_WIDTH+"%", "left":CLOSED_PANE_WIDTH+"%"});
		$('.page_tag h2').text('About UX Direct');
		
		// Content Wrappers
		$('.content_wrapper').hide(); 
		$('#ct_pane .content_wrapper').show();
		
		if (!CENTER_PANE_LOADED)
			$('#ct_pane .content_wrapper').load(content_url); 
		

		$('button,.pane_title').hide();
		$('#ct_pane *,.pane_title').show();

		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').click(uxd.openRight);
		
		$('.page_tag').hover(function(){
			$(this).animate({"height":"250px"});
		},
		function(){
			$(this).animate({"height":"25px"});
		});	

		CURRENT_PANE = "center";
		CENTER_PANE_LOADED = true;

	},
		
	openRight : function()
	{
		if ( CURRENT_PANE == "right" ) return;
	
		// Content URL
		var content_url = './assets/place_holder.html';
		$('#ct_pane *').hide();
		$('#lt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('#ct_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.7"}).addClass('cursor');
		$('#rt_pane').css({ "width": OPEN_PANE_WIDTH+"%", opacity: "0.95"}).removeClass('cursor').addClass('shadow');
		$('.page_tag').show().css({"width":CLOSED_PANE_WIDTH+"%", "left":CLOSED_PANE_WIDTH+"%"});
		$('.page_tag h2').text('Design Experience');
		$('.page_tag').animate({"height":"25px"});
		
		//Content Wrappers
		$('.content_wrapper').hide(); 
		$('#rt_pane .content_wrapper').show();
 		
 		if ( !RIGHT_PANE_LOADED)
 			$('#rt_pane .content_wrapper').load(content_url);
		
		$('button, .pane_title').hide();
		$('.pane_title.left').show();

		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').unbind('click');
		$('.page_tag').unbind('hover');
		
		CURRENT_PANE = "right";
		RIGHT_PANE_LOADED = true;
	},
		
	reset : function()
	{
		$('#ct_pane *').hide();
		$('#lt_pane').css({ "width": "60%", opacity: "0.9"});
		$('#ct_pane').css({ "width": "0%", opacity: "0.9"});
		$('#rt_pane').css({ "width": "40%", opacity: "0.9"});
		$('.page_tag, .pane_title, .content_wrapper').hide();
		$('#lt_pane,#rt_pane').unbind('click').removeClass('cursor').removeClass('shadow');
		$('button').show();
	},
	
	onResize : function()
	{
		$('.pane').height( $(window).height() - $('header').height() );
		$('.content_wrapper').height( $('.pane').height() - 63 );
	},
	showResults : function()
	{
		
		$('.page_tag').animate({"height":"250px"});
		setTimeout( function(){$('.page_tag h2').text('Check List Analysis');$('.page_tag').unbind('hover');} ,500)
	}
};

$(uxd.init);
$(window).resize(uxd.onResize);