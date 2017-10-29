
<div id="search-bar" align="right" style="margin:0px;padding:2px;background:#cccccc;border-top:1px solid #999999">
	
	<form id="search" action="" onsubmit="performSearch();return false;" style="padding:0px;margin:0px;">
			
			Search&nbsp;On&nbsp;
			<select id="component-key">
				<option value='*'>Any Component</option>
				<option value='DWPE_Toolbar_Class'>Toolbar</option>
				<option value='DWPE_TextButton_Class'>Text Button</option>
				<option value='DWPE_IconicButton_Class'>Iconic Button</option>
				<option value='DWPE_IconicTextButton_Class'>Iconic Text Button Group</option>
				<option value='DWPE_RadioButtonGroup_Class'>Radio Button Group</option>
				<option value='DWPE_ToggleButton_Class'>Toggle Button</option>
				<option value='DWPE_InlineSelector_Class'>Inline Selector</option>
				<option value='DWPE_Accordion_Class'>Accordion</option>
				<option value='DWPE_Tabs_Class'>Tabs</option>
				
			</select>
			&nbsp;For&nbsp;
			<input type="text" id="feedback-search-tags" maxlength=50>
			<input type="hidden" id="feedback-key" name="key" value="<?php echo($component_key)?>" maxlength=50>
			
			<input class="ui-state-default ui-corner-all" type="button" value="Go" onclick="performSearch()">
	
	</form>
</div>	
	
	<script type="text/javascript">
	
		function performSearch()
		{
			
			
					var dataString ="perform_search=1";
						dataString+="&search_tags="+$("#feedback-search-tags").val();
						dataString+="&component_key="+$("#component-key").val();
						
					
					
					$.ajax({  
					   type: "POST",  
					   url: "/DWPE/DWPE_ProjectHome/component-global-search-logic.php",  
					   data: dataString,  
					   success: function(data,status,XMLHttpRequest) 
					   {  
						 //use jQuery to post reply inside of feedback-form-container
						 $("#feedback-list-container").html(data);
					   }  
					 });
		}
		
		
	</script>
	
	


<div id="feedback-list-container" style='height:500px;'>



<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_ProjectHome/component-global-search-logic.php'?>


 
 
</div>

