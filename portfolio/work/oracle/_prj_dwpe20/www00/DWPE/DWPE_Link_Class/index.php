<?php
session_start();
$component_title="DWPE Link";
$component_key="DWPE_Link";
$owner="Anthony Moquette";
$specs=array();
$specs[0]=array( "label" => "Link Usage",
				 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/Link.html");
$specs[1]=array( "label" => "Link Specs",
				 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/LinkSpec.pdf");
$specs[2]=array( "label" => "Link Visuals",
				 "url" => "http://blafstaging.us.oracle.com/blafPlus/visualDesign/Link.html");


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>
<body>
	
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_Link_Class/test_plan.php'?>


	<form id="properties-sheet">
        <input type="hidden" id="_class" value="DWPE_FormFactory_Class"/>
        <input type="hidden" id="type" value="link"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
			<tr>
				<td>
                    <div>Component Properties</div>
                    <table cellpadding="0" cellspacing="0" style="border:1px solid #999999;background:#e0e0e0; width:100%;">
						<tr>
							<td class='label'>Label</td>
							<td>
								<input id="label" type="text" value="Link Text" />
							</td>
						</tr>
					 <tr>
						<td>Command</td>
						<td>
							<input id="command" type="text" value="js::alert('hi')"/> 
							<span class='fld-help'>(javascript::alert('hi') or url::http://oracle.com)</span>
						</td>
					</tr>

					 <tr>
						<td>Tooltip</td>
						<td>
							<input id="tooltip" type="text" value="I'm a tooltip"/> 
							<span class='fld-help'></span>
						</td>
                    </table>
                   
                   
                    
                    <div style="padding:20px 0px">
						<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
						<script type="text/javascript">
						
							function insert()
							{
								$("#scratchpad").val( DWPE_FormFactory.generateLinkMarkup( collectArguments() ) );
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
				<td align="right"></td>
			</tr>
		</table>
	</form>
    <!-- *************************************************	-->
    <!-- COMPONENT 360										-->
    <!-- *************************************************	-->
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>
</body>
</html>