<?php
session_start();
$component_title="DWPE Date-Time Picker";
$component_key="DWPE_DateTimePicker";
$owner="Anthony Moquette";
$specs=array();
$specs[0]=array( "label" => "Date-Time Picker Usage",
				 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/dateTimePicker.html");
$specs[1]=array( "label" => "Date-Time Picker Specs",
				 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/dateTimePickerSpec.pdf");
$specs[2]=array( "label" => "Date and Time Picker Visuals",
				 "url" => "http://blafstaging.us.oracle.com/blafPlus/visualDesign/dateTimePicker.html");

define('MARKUP_GENERATION_FUNCTION', 'DWPE_FormFactory.generateDateTimePickerMarkup');
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
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_DateTimePicker_Class/test_plan.php'?>
	<!-- *************************************************	-->
	<!-- PROPERTY SHEET										-->
	<!-- *************************************************	-->
	<form id="properties-sheet">
        <input type="hidden" id="_class" value="DWPE_FormFactory_Class"/>
        <input type="hidden" id="type" value="datetimepicker"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
			<tr>
				<td>
                    <!-- *************************************************	-->
                    <!-- PROPERTIES											-->
                    <!-- *************************************************	-->
					<div>Component Properties</div>
                    <table cellpadding="0" cellspacing="0" style="border:1px solid #999999;background:#e0e0e0; width:100%;">
                         <tr>
                            <td class="label">Listbox State</td>
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
                            <td class='label'>Default Date</td>
                            <td>
                                <select id="default_date">
								<option value="">None</option>
                                <option value="past">Past</option>
                                <option value="today" selected="1">Today</option>
                                <option value="future">Future</option>
                                </select>
                            </td>
                        </tr>
						<tr>
							<td class='label'>Display Time</td>
							<td>
                                <select id="display_time">
								<option value="" selected="1">No</option>
                                <option value="yes">Yes</option>
                                </select>
							</td>
						</tr>					
                       
                        <tr>
                            <td class='label'>Time Zone</td>
                            <td>
                                <select id="time_zone">
                                    <option value="" selected="1">Not Displayed</option>
                                    <option value="-12">(UTC -12:00) Eniwetok</option>
                                    <option value="-11">(UTC -11:00) Samoa</option>
                                    <option value="-10">(UTC -10:00) Hawaii</option>
                                    <option value="-9">(UTC -9:00) Alaska</option>
                                    <option value="-8">(UTC -8:00) US Pacific Time</option>
                                    <option value="-7">(UTC -7:00) US Mountain Time</option>
                                    <option value="-6">(UTC -6:00) US Central Time</option>
                                    <option value="-5">(UTC -5:00) US Eastern Time</option>
                                    <option value="-4">(UTC -4:00) US Atlantic Time</option>
                                    <option value="-3">(UTC -3:00) Brazil</option>
                                    <option value="-2">(UTC -2:00) Mid-Atlantic</option>
                                    <option value="-1">(UTC -1:00 hour) Azores</option>
                                    <option value="0">(UTC) London</option>
                                    <option value="+1">(UTC +1:00 hour) Paris</option>
                                    <option value="+2">(UTC +2:00) South Africa</option>
                                    <option value="+3">(UTC +3:00) Baghdad</option>
                                    <option value="+4">(UTC +4:00) Abu Dhabi</option>
                                    <option value="+5">(UTC +5:00) Ekaterinburg</option>
                                    <option value="+6">(UTC +6:00) Almaty</option>
                                    <option value="+7">(UTC +7:00) Bangkok</option>
                                    <option value="+8">(UTC +8:00) Beijing</option>
                                    <option value="+9">(UTC +9:00) Tokyo</option>
                                    <option value="+10">(UTC +10:00) Eastern Australia</option>
                                    <option value="+11">(UTC +11:00) Magadan</option>
                                    <option value="+12">(UTC +12:00) Auckland</option>
                                </select>
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