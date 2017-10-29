var OPEN_PANE_WIDTH = 82;
var CLOSED_PANE_WIDTH = (100 - OPEN_PANE_WIDTH) / 2;
var CURRENT_PANE, LEFT_PANE_LOADED, CENTER_PANE_LOADED, RIGHT_PANE_LOADED, CARD_TITLE;

uxd = {
	init: function(){
		$('button.two').on("click", uxd.openRight);
		$('button.one').on("click", uxd.openLeft);	
		$('#ct_pane,button.three').on("click", uxd.openCenter);
		$('.uxd_logo').on("click", uxd.reset);
		$('.show_result').on("click", uxd.showResults);

		$('#ct_pane *').hide();

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

		$('#rt_pane').on("click", uxd.openRight);
		$('#lt_pane').off('click');
		$('.page_tag').off('hover');
		
		CURRENT_PANE = "left";
		LEFT_PANE_LOADED = true;
	},
	
	leftPaneInit : function()
	{
		$('.in_nav li').on("click", uxd.doLeftPanelNavigation );
		$('.pane section article h4 a').on("click", uxd.doToolkitlNavigation );
		$('.pane section').hide();
		$('section#in_users_section').show();
	},
	
	doLeftPanelNavigation : function()
	{
		var objID = $(this).attr('id');
		
		$('.pane section').hide();
		
		$('#in_' + objID + '_section').show();
		$('#lt_pane .content_wrapper').animate({ scrollTop: 0 }, 0);
		
		$('.pane nav ul li').removeClass('selected');
		$('.pane_title_bar').css('top','30px');
		$(this).addClass('selected');
		return false;
	},
	
	doToolkitlNavigation : function()
	{
		var content_url = './cards/in_user_checklist.html';
		CARD_TITLE = $(this).text();
		uxd.openCenter();
		$('.card_panel').show().removeClass('flip');
		//$('#ct_pane .content_wrapper').show();
		$('#ct_pane .pane_title').text( 'UXD Toolkit: ' + CARD_TITLE );
		uxd.loadCard(content_url);
		return false;	
	},
	
	loadCard : function(url)
	{
		$('#ct_pane .content_wrapper').load(url, uxd.cardInit);
	},
	
	cardInit : function()
	{
		$('#card_results,#card_back').click(function(){	
			if ( $('#card').hasClass('flip') ) {
				$('#card').removeClass('flip');
			} else {
				$('#card').addClass('flip');
			}
		});
		$('#card_title_front').text(CARD_TITLE);
		$('#card_title_back').text(CARD_TITLE + ' Result Analysis');
		uxd.onResize();
		
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

		$('#lt_pane').on("click", uxd.openLeft);
		$('#rt_pane').on("click", uxd.openRight);
		
		$('.page_tag').hover(function(){
			//$(this).animate({"height":"250px"});
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

		$('#lt_pane').on("click", uxd.openLeft);
		$('#rt_pane').off('click');
		$('.page_tag').off('hover');
		
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
		$('#lt_pane,#rt_pane').off('click').removeClass('cursor').removeClass('shadow');
		$('button').show();
	},
	
	onResize : function()
	{
		$('.pane').height( $(window).height() - $('header').height() );
		$('.content_wrapper').height( $('.pane').height() - 63 );
		$('#ct_pane .content_wrapper').height( $('#ct_pane').height() - $('#ct_pane h2').height() - $('header').height() );
		$('#card .front form').height( $('#card').height() - $('#card_title_front').height() - 70 );
	},
	showResults : function()
	{
		
		$('.page_tag').animate({"height":"250px"});
		setTimeout( function(){$('.page_tag h2').text('Check List Analysis');$('.page_tag').off('hover');} ,500)
	}
};

$(uxd.init);
$(window).on('resize', uxd.onResize);