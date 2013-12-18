uxd = {
	init: function(){
		$('#rt_pane, button.two').click(uxd.openRight);
		$('#lt_pane, button.one').click(uxd.openLeft);	
		$('#resources, button.three,.uxd_logo').click(uxd.openAll);
		$("button").hover(
			function() {$(this).addClass("shadow");},
			function() {$(this).removeClass("shadow");}
		);
		$('ul.left_nav.in a').click(uxd.inLeftNavOnClick);
		$('#toolkit_user_checklist').click(uxd.showUserCheckList);
		$('.cards.in .card_closure').click(uxd.inCardClosure);
	},
	openRight : function(event)
	{
		$('#lt_pane').animate({ "width": "10%", opacity: "1.0" }).css('background-color','red');
		$('#rt_pane').animate({ "width": "75%", opacity: "0.9" });
		$('.page_tag.two').animate({ "width": "15%" }).text('Design Experience');
		$('.left_content_wrapper, button').hide();
  		$('#resources_content_wrapper,.page_tag,.tag_line').hide();
		$('.right_content_wrapper').show(250);
		$('.page_tag.one').show(250)
		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').unbind('click');
		event.stopPropagation();
	},
	openLeft : function(event)
	{
		$('#lt_pane').animate({ "width": "75%", opacity: "0.9"}).css('background-color','#fff').css('border-top','10px solid red');
		$('#rt_pane').animate({ "width": "10%", opacity: "1.0"});
		$('.page_tag.two').animate({ "width": "15%" }).text('Identify Needs');

		$('#experiences').show().animate({"top":"-15px"});
		$('#resources_content_wrapper, button').hide();
		$('.right_content_wrapper,.page_tag, .tag_line, .in_content').hide();
		$('.left_content_wrapper').show(250);
		$('.page_tag.two,#in_users').show(250);
		$('#in_users').show();
		$('#rt_pane').click(uxd.openRight);
		$('#lt_pane').unbind('click');
		$('h1').hide();
		
		event.stopPropagation();
	},
	openAll : function(event)
	{
		$('#lt_pane').animate({ "width": "10%", opacity: "0.9"}).css('background-color','red');
		$('#rt_pane').animate({ "width": "10%", opacity: "0.9"});
		$('.right_content_wrapper').hide();
		$('.right_content_wrapper,.left_content_wrapper,.page_tag, .tag_line').hide();
		$('#resources_content_wrapper, #resources_content_wrapper .main').show(250);
		$('.page_tag.three').show(250);
		$('#lt_pane').click(uxd.openLeft);
		$('#rt_pane').click(uxd.openRight);
		$('button').hide();
		event.stopPropagation();
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
		$('ul.left_nav a').removeClass('selected');
		$(this).addClass('selected');
		$('.in_content').hide();
		switch(this.text)
		{
		case "Users":
  			//alert('1');
  			$('#in_content_title').text('Who are your users?');
  			$('#in_users').show();
			break;
		case "Content of Work":
			//alert('2');
  			$('#in_content_title').text('What is the context of their work?');
			$('#in_work').show();
			break;
		case "Toolkit":
			//alert('3');
  			$('#in_content_title').text('Use this toolkit to help guide your projects');
			$('#in_toolkit').show();
			break;

		default:
		}
		event.stopPropagation();
	},
	showUserCheckList : function()
	{
		$('#lt_pane').animate({ "width": "40%", opacity: "0.8" });
		$('.page_tag.two').animate({ "width": "50%" }).text('User Checklist');
		$('.user_checklist').show('slow');
		$( "#user_checklist_card" ).draggable().resizable();
	},
	inCardClosure : function()
	{
		$('#user_checklist_card').hide();
		$('#lt_pane').animate({ "width": "75%",});
		$('.page_tag.two').animate({ "width": "15%" }).text('Identify Needs');
	}
};


$(uxd.init);
