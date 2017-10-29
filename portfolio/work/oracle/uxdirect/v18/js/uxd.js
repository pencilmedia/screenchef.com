var OPEN_PANE_WIDTH = 82;
var CLOSED_PANE_WIDTH = (100 - OPEN_PANE_WIDTH) / 2;
var CURRENT_PANE, CARD_LAUNCHED_FROM_PANE, LEFT_PANE_LOADED, CENTER_PANE_LOADED, RIGHT_PANE_LOADED, CARD_TITLE;

uxd = {
	init: function(){
		$('button.two').on("click", uxd.openRight);
		$('button.one').on("click", uxd.openLeft);	
		$('#ct_pane,button.three').on("click", uxd.openCenter);
		$('.uxd_logo').on("click", uxd.reset);
		$('.show_result').on("click", uxd.showResults);
		uxd.onResize();
	},
	
	openLeft : function()
	{
		if ( CURRENT_PANE == "left" ) return;
	
		// Content URL
		var content_url = './pane_left.html';
		$('#lt_pane').css({ "width": OPEN_PANE_WIDTH+"%", opacity: "0.95"}).removeClass('cursor').addClass('shadow');
		$('#ct_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.7"}).addClass('cursor');
		$('#rt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('.page_tag').show().css({"width": CLOSED_PANE_WIDTH+"%", "left":OPEN_PANE_WIDTH+"%"});
		$('.page_tag h2').text('Identify Need');
		$('.page_tag').animate({"height":"25px"});

		//Content Wrappers
		$('.content_wrapper, .card').hide();
		
		$('#lt_pane .content_wrapper').show();
		
		if ( !LEFT_PANE_LOADED )
			$('#lt_pane .content_wrapper').load(content_url, uxd.leftPaneInit);

		$('button,.pane_title').hide();
		$('.pane_title.right').show();

		$('#rt_pane').on("click", uxd.openRight);
		$('#lt_pane').off('click');
		$('.page_tag').off('hover');
		
		CURRENT_PANE = "left";
		CARD_LAUNCHED_FROM_PANE = "left";
		LEFT_PANE_LOADED = true;
	},
	
	leftPaneInit : function()
	{
		$('.in_nav li').on("click", uxd.doLeftPanelNavigation );
		$('.pane section article h4 a').on("click", uxd.doToolkitlNavigation );
		$('#lt_pane section').hide();
		$('section#in_users_section').show();
	},
	
	doLeftPanelNavigation : function()
	{
		var objID = $(this).attr('id');
		
		$('#lt_pane section').hide();
		
		$('#in_' + objID + '_section').show();
		$('#lt_pane .content_wrapper').animate({ scrollTop: 0 }, 0);
		
		$('#lt_pane nav ul li').removeClass('selected');
		$('.pane_title_bar').css('top','30px');
		$(this).addClass('selected');
		return false;
	},
	
	doToolkitlNavigation : function()
	{
		var content_url = './tools/' + this.id + '.html';
		CARD_TITLE = $(this).text();
		uxd.openCenter();
		$('.card_panel').show().removeClass('flip');
		//$('#ct_pane .pane_title').text( 'UXD Toolkit: ' + CARD_TITLE );
		uxd.loadCard(content_url);
		return false;	
	},
	
	loadCard : function(url)
	{
		$('#ct_pane').load(url, uxd.cardInit);

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
		$('#card_title_back').text(CARD_TITLE + ' -  Results Summary');
		$('.card_cancel').on('click',uxd.cardClosure);
		$('#ct_pane .pane_title').hide();
		$('table.qtable input[type="radio"]').on('click',uxd.checkListClick);
		$('.back table.qtable td.qnum + td').click(uxd.cellClick);
		$('.id_card_selector').change( uxd.idCardSelectorOnClick )
		
		// Load Questions
		$('td#q1  p.c').text( uxqa.UserChecklist.q1.caption );
		$('td#q1  p.q, td#q1s  p.q, p#results_summary_selected_question').text( uxqa.UserChecklist.q1.question );
		$('td#q1  p.n').html( uxqa.UserChecklist.q1.notes );
		
		$('td#q2  p.c').text( uxqa.UserChecklist.q2.caption );
		$('td#q2  p.q, td#q2s  p.q').text( uxqa.UserChecklist.q2.question );
		$('td#q2  p.n').html( uxqa.UserChecklist.q2.notes );
		
		$('td#q3  p.c').text( uxqa.UserChecklist.q3.caption );
		$('td#q3  p.q, td#q3s  p.q').text( uxqa.UserChecklist.q3.question );
		$('td#q3  p.n').html( uxqa.UserChecklist.q3.notes );
		
		$('td#q4  p.c').text( uxqa.UserChecklist.q4.caption );
		$('td#q4  p.q, td#q4s  p.q').text( uxqa.UserChecklist.q4.question );
		$('td#q4  p.n').html( uxqa.UserChecklist.q4.notes );
		
		$('td#q5  p.c').text( uxqa.UserChecklist.q5.caption );
		$('td#q5  p.q, td#q5s  p.q').text( uxqa.UserChecklist.q5.question );
		$('td#q5  p.n').html( uxqa.UserChecklist.q5.notes );
		
		$('td#q6  p.c').text( uxqa.UserChecklist.q6.caption );
		$('td#q6  p.q, td#q6s  p.q').text( uxqa.UserChecklist.q6.question );
		$('td#q6  p.n').html( uxqa.UserChecklist.q6.notes );

		uxd.onResize();
	},
	
	checkListClick : function()
	{
		var q = $(this).attr('name');
		var a = $(this).attr('value');
		$('#'+q+'a').text( a );
	},
	
	cellClick : function()
	{
		$('.back table.qtable td.qnum + td').removeClass('selected');
		$(this).addClass('selected');
		
		$('#results_summary_selected_question').text( $(this).find('p.q').text() );
		$('#results_summary_selected_answer').text( $(this).find('strong').text() );
		
	},
	
	idCardSelectorOnClick : function()
	{
		var currentCard = $(this).val();
		var url = '';
		var card_title;
		
		switch( currentCard )
		{
			case 'ucl':
				url 		= './tools/in_user_checklist.html';
				card_title	= 'User Checklist'
				break;
			case 'upe':
				url 		= './tools/in_user_profile_example.html';
				card_title	= 'User Profile Example';
				break;
			case 'upt':
				url = './tools/in_user_profile_template.html';
				card_title	= 'User Profile Template';
				break;
			case 'unw':
				url = './tools/in_user_needs_wants_template.html';
				card_title	= 'User Needs & Wants Template';
				break;
			case 'utm':
				url = './tools/in_user_task_matrix_template.html';
				card_title = 'User Task Matrix';
				break;
			default:
				//code to be executed if n is different from case 1 and 2
		}
		
		CARD_TITLE = card_title;
		uxd.loadCard(url);
	},
	
	
	cardClosure : function()
	{
		$('#card').hide();
		CARD_LAUNCHED_FROM_PANE == 'left' ? uxd.openLeft() : uxd.openRight();
		return false;
	},
	
	openCenter : function()
	{
		if ( CURRENT_PANE == "center" ) return;
		// Content URL
		
		if ( $('#ct_pane .pane_title').length == 0 )
			$('#ct_pane').append('<h2 class="pane_title center">Learn about UX Direct</h2><div class="content_wrapper"></div>');

		
		var content_url = './pane_center.html';

		$('#lt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('#ct_pane').css({ "width": OPEN_PANE_WIDTH+"%", opacity: "0.95"}).css( {"display":""}).removeClass('cursor');
		$('#rt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('.page_tag').show().css({"width":OPEN_PANE_WIDTH+"%", "left":CLOSED_PANE_WIDTH+"%"});
		$('.page_tag h2').text('About UX Direct');
		
		// Content Wrappers
		$('.content_wrapper').hide(); 

		$('#ct_pane .content_wrapper').show();
				
		//if (!CENTER_PANE_LOADED) 
			$('#ct_pane .content_wrapper').load(content_url, uxd.centerPaneInit); 		

		$('button,.pane_title').hide();
		$('.pane_title').show();

		$('#lt_pane').on("click", uxd.openLeft);
		$('#rt_pane').on("click", uxd.openRight);
		
		$('.page_tag').hover(function(){
			//$(this).animate({"height":"250px"});
		},
		function(){
			$(this).animate({"height":"25px"});
		});	

		// The following block resets the about page
		// to the first link.
		$('#ct_pane section').hide();
		$('section#about_welcome_section').show();
		$('#ct_pane nav ul li').removeClass('selected');
		$('#about_welcome').addClass('selected');
		$('button.member').show();


		CURRENT_PANE = "center";
		CENTER_PANE_LOADED = true;
		
		uxd.onResize();
	},

	centerPaneInit : function()
	{
		$('.about_nav li').on("click", uxd.doCenterPanelNavigation );
		$('#ct_pane section').hide();
		$('section#about_welcome_section').show();
	},
	
	doCenterPanelNavigation : function()
	{
		var objID = $(this).attr('id');
		
		$('#ct_pane section').hide();
		
		$('#' + objID + '_section').show();
		$('#ct_pane .content_wrapper').animate({ scrollTop: 0 }, 0);
		
		$('#ct_pane nav ul li').removeClass('selected');
		$('.pane_title_bar').css('top','30px');
		$(this).addClass('selected');
		return false;
	},
		
		
	openRight : function()
	{
		if ( CURRENT_PANE == "right" ) return;
	
		// Content URL
		var content_url = './pane_right.html';
		$('#lt_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.9"}).addClass('cursor').addClass('shadow');
		$('#ct_pane').css({ "width": CLOSED_PANE_WIDTH+"%", opacity: "0.7"}).addClass('cursor');
		$('#rt_pane').css({ "width": OPEN_PANE_WIDTH+"%", opacity: "0.95"}).removeClass('cursor').addClass('shadow');
		$('.page_tag').show().css({"width":CLOSED_PANE_WIDTH+"%", "left":CLOSED_PANE_WIDTH+"%"});
		$('.page_tag h2').text('Design Experience');
		$('.page_tag').animate({"height":"25px"});
		
		//Content Wrappers
		$('.content_wrapper, .card').hide(); 
		$('#rt_pane .content_wrapper').show();
 		
 		if ( !RIGHT_PANE_LOADED)
 			$('#rt_pane .content_wrapper').load(content_url, uxd.rightPaneInit);
		
		$('button, .pane_title').hide();
		$('.pane_title.left').show();

		$('#lt_pane').on("click", uxd.openLeft);
		$('#rt_pane').off('click');
		$('.page_tag').off('hover');
		
		CURRENT_PANE = "right";
		CARD_LAUNCHED_FROM_PANE = "right";
		RIGHT_PANE_LOADED = true;
	},

	rightPaneInit : function()
	{
		$('.de_nav li').on("click", uxd.doRightPanelNavigation );
		$('.pane section#de_practices_section article h4 a').on("click", uxd.doToolkitlNavigation );
		$('#rt_pane section').hide();
		$('section#de_experience_section').show();
	},
	
	doRightPanelNavigation : function()
	{
		var objID = $(this).attr('id');
		
		$('#rt_pane section').hide();
		
		$('#' + objID + '_section').show();
		$('#rt_pane .content_wrapper').animate({ scrollTop: 0 }, 0);
		
		$('#rt_pane nav ul li').removeClass('selected');
		$('.pane_title_bar').css('top','30px');
		$(this).addClass('selected');
		return false;
	},
			
	reset : function()
	{
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
		$('.content_wrapper').height( $('.pane').height() - 45 );
		$('#ct_pane .content_wrapper').height( $('#ct_pane').height() - $('#ct_pane h2').height() - $('header').height() -130);
		$('#card form').height( $('#card').height() - $('.card_title').height() - 130 );
	},
	showResults : function()
	{
		
		$('.page_tag').animate({"height":"250px"});
		setTimeout( function(){$('.page_tag h2').text('Check List Analysis');$('.page_tag').off('hover');} ,500)
	}
};

$(uxd.init);
$(window).on('resize', uxd.onResize);