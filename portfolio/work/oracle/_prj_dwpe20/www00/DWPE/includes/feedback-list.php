
<div id="feedback-search-bar">
	
	
	
	
	
	<form id="search" action="" onsubmit="performSearch();return false;" style="position:absolute;padding:0px;margin:0px;right:0px">
			
	
			Search&nbsp;
			<input type="text" id="feedback-search-tags" maxlength=50>
			<input type="hidden" id="feedback-key" name="key" value="<?php echo($my_component_key)?>" maxlength=50>
			<input class="ui-state-default ui-corner-all" type="button" value="Go" onclick="performSearch()">
	
	
	</form>
	
	<?php if(isset($_SESSION["SESS_ID"])) {?>
	<a href="#" id="toggle-form-button" type="button" onclick="toggleFeedbackForm()">Show Form</a>
	<?php }?>
</div>	
	
	<script type="text/javascript">
	
		
		
		
		function toggleFeedbackForm()
		{
			var $o=$("#toggle-form-button");
			var $f=$("#feedback-form-container");
			var $l=$("#feedback-list-container");
			if($f.height()==0)
			{
				showForm();
			}
			else
			{
				hideForm();
			}
		
		}
		function showForm()
		{
			
			var $o=$("#toggle-form-button");
			var $f=$("#feedback-form-container");
			var $b=$("#feedback-search-bar");
			var $l=$("#feedback-list-container");
			
			if($f.height()>0) return;
			
			$f.animate({height:225},500,function(){$f.css("visibility","visible");});
			$b.height(25);
			$l.animate({height:390},500,function(){$(this).css('overflow','auto')});	
			$o.text("Hide Form");
		}
		
		function hideForm()
		{
			var $o=$("#toggle-form-button");
			var $f=$("#feedback-form-container");
			var $b=$("#feedback-search-bar");
			var $l=$("#feedback-list-container");
			
			$f.animate({height:0},500,function(){$f.css("visibility","hidden");});
			$b.height(25);
			$l.animate({height:615},500,function(){$(this).css('overflow','auto')});
			$o.html("Show Form");
		}
		
		$(function(){hideForm();});
		
		function replyToMessage(	form_name,
									tags, 
									post_id, 
									thread_id, 
									parent_id, 
									post_level, 
									sort_order)
		{
			clearForm();
			showForm();
			var msg=$("#msg-content-"+post_id).text();
				msg = msg.replace(/[ \t\r\n]/g ,'&nbsp;'); //remove line breaks
			
			var limit=100;
			if(msg.length>=limit)
			{	msg = msg.substring(0, limit);      //limit to the first 100 characters
    			msg = msg.replace(/\w+$/, '');  //ensure we truncate to a whole word
    			msg += "..." //add ellipses
			}
			
			
			$("#message-label").html("Reply");
			$("#replying-to-content").html(msg);
			
			$("#"+form_name+"-tags").val(tags);
			$("#"+form_name+"-thread-id").val(thread_id);
			$("#"+form_name+"-parent-id").val(parent_id);
			$("#"+form_name+"-post-level").val(post_level);
			$("#"+form_name+"-sort-order").val(sort_order);
			
			
		}
	
		function performSearch()
		{
					var d=400;
					var $l=$("#feedback-list-container");
					$l.slideUp(d);
					
			
					var dataString ="perform_search=1";
						dataString+="&search_tags="+$("#feedback-search-tags").val();
						dataString+="&component_key="+$("#feedback-key").val();
						
					
					$.ajax({  
					   type: "POST",  
					   url: "/DWPE/includes/feedback-list-logic.php",  
					   data: dataString,  
					   success: function(data,status,XMLHttpRequest) 
					   {  $l.slideDown(d);
						 //use jQuery to post reply inside of feedback-form-container
						 $("#feedback-list-container").html(data);
					   },
					   error:function(){$l.slideDown(d);}
					   
					 });
		}
		
		
	</script>
	
	


<div id="feedback-list-container">





<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/feedback-list-logic.php'?>


 
 
</div>


