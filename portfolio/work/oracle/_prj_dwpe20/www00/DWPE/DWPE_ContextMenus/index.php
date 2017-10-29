<?php
		session_start();
		$component_title="DWPE Context Menus";
		$component_key="DWPE_contextmenus";
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
	
	
	<style>
	
		.astyle,
		.bstyle,
		.cstyle
		{
			position:absolute;
			width:50px;
			height:50px;
			text-align:center;
			vertical-align:middle;
			font-size:24px;
			
		}
		
		.astyle
		{	
			top:50;
			left:50;
			background:#cc0000;
		}
		
		.bstyle
		{	
			top:150;
			left:150;
			background:#00cc00;
		}
		
		.cstyle
		{	
			top:250;
			left:250;
			background:#0000cc;
		}
		
	
	</style>
	
</head>

<body>



	
	
	
	
	<?php include 'test-plan.php'?>
	

	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_WindowFactory_Class"/>
        <input type="hidden" id="type" value="menu"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">				
				</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea id="scratchpad" style="width:100%;height:400px;padding:5px;"  ignore_property="1">
					
<div class='aStyle  context-menu' menu='/DWPE/DWPE_SampleContent/sample_context_menu.htm'>
	A
</div>

<div class='bStyle  context-menu' menu='/DWPE/DWPE_SampleContent/sample_context_menuB.htm'>
	B
</div>

<div class='cStyle  context-menu'  menu='/DWPE/DWPE_SampleContent/sample_context_menu.htm'>
	C
</div>
					
					</textarea>
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
