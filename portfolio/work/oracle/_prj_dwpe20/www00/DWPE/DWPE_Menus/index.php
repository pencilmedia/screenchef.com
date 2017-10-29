<?php
		session_start();
		$component_title="DWPE Menus";
		$component_key="DWPE_menus";
		$owner="Roy Selig";
		$specs=array();
		$specs[0]=array( "label" => "Menu Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/menu.html");
		$specs[1]=array( "label" => "Menu Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/menu.html");

		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	
	
	
	
	<?php include 'test-plan.php'?>
	

	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_WindowFactory_Class"/>
        <input type="hidden" id="type" value="menu"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

				<div class="editable-tree-container" style="width:300px;">
					<div id="test-tree" class='editable-tree-panel  hierarchical'  title="Menu Items" fld="items"></div>
				</div>

				
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_WindowFactory.generateMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">				
				</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea id="scratchpad" style="width:100%;height:400px;padding:5px;"  ignore_property="1"></textarea>
			</td>
			
		</tr>
		
		
	
		
		<tr>
			<td colspan='1'></td>
			
			<td align="right">
				
			
			</td>
			
			
		</tr>
		
		</table>
			
	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>



</body>
</html>
