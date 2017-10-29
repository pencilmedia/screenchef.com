<?php
session_start();
$component_title="DWPE LOV";
$component_key="DWPE_LOV";
$owner="Anthony Moquette";
$specs=array();
$specs[0]=array( "label" => "LOV Usage",
				 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/lov.html");
$specs[1]=array( "label" => "LOV Specs",
				 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/LOVSpec.pdf");
$specs[2]=array( "label" => "LOV Visuals",
				 "url" => "http://blafstaging.us.oracle.com/blafPlus/visualDesign/LOV.html");

define('MARKUP_GENERATION_FUNCTION', 'DWPE_FormFactory.generateLOVMarkup');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	<script type="text/javascript">
        function insert()
        {
            $("#scratchpad").val( <?php echo constant('MARKUP_GENERATION_FUNCTION') ?>( collectArguments() ) ); 
        }
    </script>
</head>
<body>
	<!-- *************************************************	-->
	<!-- TEST PLAN											-->
	<!-- *************************************************	-->
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_LOV_Class/test_plan.php'?>
	<!-- *************************************************	-->
	<!-- PROPERTY SHEET										-->
	<!-- *************************************************	-->
	<form id="properties-sheet">
        <input type="hidden" id="_class" value="DWPE_FormFactory_Class"/>
        <input type="hidden" id="type" value="lov"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
			<tr>
				<td>
                    <!-- *************************************************	-->
                    <!-- PROPERTIES											-->
                    <!-- *************************************************	-->
					<div>Component Properties</div>
                    <table cellpadding="0" cellspacing="0" style="border:1px solid #999999;background:#e0e0e0; width:100%;">
                         <tr>
                            <td class="label">State</td>
                            <td>
                                <select id="state">
                                    <option value="" selected="1">Normal</option>
                                    <option value="disabled">Disabled</option>
                                    <option value="read-only">Read-Only</option>
                                    <option value="error">Error</option>
                                    <option value="warning">Warning</option>
                                </select>
                            </td>
                        </tr>  
                        <tr>
                            <td class='label'>Required</td>
                            <td>
                                <select id="required">
								<option value="" selected="1">No</option>
                                <option value="required">Yes</option>
                                </select>
                            </td>
                        </tr>
						<tr>
							<td class='label'>Default Value</td>
							<td>
								<input id="default_value" type="text" value="" />
							</td>
						</tr>

						<tr>
							<td class='label'>Help</td>
							<td>
								<input id="help" type="text" value="" />
							</td>
						</tr>
                    </table>
                    <!-- *************************************************	-->
                    <!-- TREE ITEMS											-->
                    <!-- *************************************************	-->
                    <!--
                    <div class="editable-tree-container" style="width:250px;">
                        <div id="editable-tree" class='editable-tree-panel'  title="Items" fld="items" style="height:75px;"/>
                    </div>
                    -->
                    <div style="padding:20px 0px">
                        <input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
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