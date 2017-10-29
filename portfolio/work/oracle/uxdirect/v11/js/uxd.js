uxd = {
	init: function(){
		$('#rt_pane, button.two').click(uxd.openRight);
		$('#lt_pane, button.one').click(uxd.openLeft);	
		$('#resources, button.three,.uxd_logo').click(uxd.openAll);
		$('ul.left_nav.in a').click(uxd.inLeftNavOnClick);
		$('.toolkit_title').click(uxd.showCard );
		$('.card_closure').click(uxd.cardClosure);
		$('.toolkit_table td, #card_back').click( uxd.flipCard );
	},
	flipCard : function(e)
	{
		var card = $(this).attr('id');
		$('#card').toggle(function(){
			$('#card').addClass('flip');

		switch(card)
		{
			case "user_checklist":
				card_title = 'User Checklist';
				card_caption = 'Use our easy-to-use checklist to get to know your users:';
				card_url = 'cards/toolkit.html';
				card_class = 'in';
				break;
			case "user_profile_example":
				card_title = 'User Profile Example';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;
			case "user_profile_template":
				card_title = 'User Profile Template';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;
			case "user_needs":
				card_title = 'User Needs & Wants Template';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;
			case "user_tasks":
				card_title = 'User Task Matrix Template';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;

			case "Toolkit":
				//alert('3');
 				break;

			default:
		}
		//alert(card_title);
		$('#toolkit_title').html(card_title);

		},function(){
			$('#card').removeClass('flip');
		})
	},
	
	openLeft : function(event)
	{
		$('#lt_pane').animate({ "width": "55%", opacity: "0.9"}).css('background-color','#fff').css('border-top','10px solid red').removeClass('cursor');
		$('#rt_pane').animate({ "width": "10%", opacity: "1.0"}).addClass('cursor');
		$('.page_tag.two').animate({ "width": "15%" }).text('Identify Needs');

		$('#experiences').show().animate({"top":"-15px"});
		$('button, .card_panel').hide();
		$('.right_content_wrapper,.page_tag, .content, .pane_title').hide();
		$('.left_content_wrapper').show(250);
		$('.page_tag.two,#in_users').show(250);
		$('.pane_title.right').show();
		$('#in_users').show();
		$('#rt_pane').click(uxd.openRight);
		$('#lt_pane').unbind('click');
		$('h1').hide();
		return false;
		
		event.stopPropagation();
	},
	
	openRight : function(event)
	{
		$('#lt_pane').animate({ "width": "10%", opacity: "1.0" }).css('background-color','red').addClass('cursor');
		$('#rt_pane').animate({ "width": "55%", opacity: "0.9" }).removeClass('cursor');
		$('.page_tag.two').animate({ "width": "15%" }).text('Design Experience');
		$('.left_content_wrapper, button, .cards, .pane_title').hide();
  		$('.page_tag').hide();
		$('.right_content_wrapper').show(250);
		$('.pane_title.left').show();
		$('.page_tag.one').show(250)
		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').unbind('click');
		event.stopPropagation();
		return false;
	},

	openAll : function(event)
	{
		$('#lt_pane').animate({ "width": "10%", opacity: "0.9"}).css('background-color','red');
		$('#rt_pane').animate({ "width": "10%", opacity: "0.9"});
		$('.right_content_wrapper').hide();
		$('.right_content_wrapper,.left_content_wrapper,.page_tag').hide();
		$('#resources_content_wrapper, #resources_content_wrapper .main').show(250);
		$('.page_tag.three').show(250);
		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').click(uxd.openRight);
		$('.pane_title').show();
		$('button').hide();
		event.stopPropagation();
		return false;
	},
	reset : function(event)
	{
		$('#lt_pane').animate({ "width": "60%", opacity: "0.8" });
		$('#rt_pane').animate({ "width": "40%", opacity: "0.8" });
		$('.page_tag,.right_content_wrapper').hide();
		$('button').show();
		event.stopPropagation();
	},
	inLeftNavOnClick : function(event)
	{
		//uxd.cardClosure();
		$('ul.left_nav a').removeClass('selected');
		$(this).addClass('selected');
		$('.content').hide();
		switch(this.text)
		{
		case "Users":
  			//alert('1');
  			$('#in_content_title').text('Who are your users?');
  			$('#in_users').show();
			break;
		case "Context of Work":
			//alert('2');
  			$('#in_content_title').text('What is the context of their work?');
			$('#in_work').show();
			break;
		case "Toolkit":
			//alert('3');
  			$('#in_content_title').text('Use this toolkit to...');
			$('#in_toolkit').show();
			break;

		default:
		}
		event.stopPropagation();
		return false;
	},
	showUserCheckList : function()
	{
		$('#lt_pane').animate({ "width": "40%", opacity: "0.8" });
		$('.page_tag.two').animate({ "width": "50%" }).text('User Checklist');
		$('.user_checklist').show('fast');
		$( "#user_checklist_card" ).draggable({ handle: 'h3' });
	},
	showUserProfile : function()
	{
		$('#lt_pane').animate({ "width": "40%", opacity: "0.8" });
		$('.page_tag.two').animate({ "width": "50%" }).text('User Profile');
		$('.user_checklist').show('fast');
		$( "#user_checklist_card" ).draggable({ handle: 'h3' });
	},
	cardClosure : function()
	{
		$('.card_panel').hide();		
		$('.page_tag.two').animate({ "width": "15%" }).text('Identify Needs');
		uxd.openLeft();
		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').click(uxd.openRight);
		
		$('.content').hide();
		$('#in_toolkit').show();
	},
	
	showCard : function()
	{
		var card_title = '';
		var card_url = '';
		
		$('#lt_pane').animate({ "width": "10%", opacity: "1.0" }).css('background-color','red').addClass('cursor');
		$('.left_content_wrapper, button, .cards').hide();
  		$('.page_tag').hide();
		$('.pane_title.left').show();
		$('.page_tag.one').show(250).text('Toolkit');
		$('#lt_pane, #rt_pane').unbind('click');
		
		$('.card_panel').show().removeClass('flip');

		switch(this.id)
		{
			case "toolkit_user_checklist":
				card_title = 'Tool Kit';
				card_caption = 'Use our easy-to-use checklist to get to know your users:';
				card_url = 'cards/toolkit.html';
				card_class = 'in';
				break;
			case "toolkit_user_profile":
				card_title = 'User Profile Example';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;
			case "toolkit_user_profile_template":
				card_title = 'User Profile Template';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;
			case "toolkit_user_needs":
				card_title = 'User Needs & Wants Template';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;
			case "toolkit_user_tasks":
				card_title = 'User Tasks Matrix Template';
				card_caption = 'Card caption:';
				card_url = 'cards/blank.html';
				card_class = 'in';
 				break;

			case "Toolkit":
				//alert('3');
 				break;

			default:
		}

		//$('#card').addClass(card_class);
		//$('#card h3').text(card_title);
		//$('#card_caption').text(card_caption);
		//$('#card_content').load(card_url);
		//$('#card').show('slow');
		//$('.cards *').hide();
		//$('#card').animate({ "width": "0%", opacity:"0.0" },'jswing' );
		//$('#card').animate({ "width": "69%", opacity:"0.9" },'easeOutBounce'	 );
		
		//$('.page_tag.two').animate({ "width": "50%" }).text(card_title);
		
		return false;
		
	}
};


$(uxd.init);
