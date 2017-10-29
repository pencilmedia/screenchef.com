<?php
		session_start();
		$component_title="DWPE Train Class";
		$component_key="DWPE_Train_Class";
		$owner="Anthony Moquette";
		$specs=array();
	
		$specs[0]=array( "label" => "Train Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/train.html");
		$specs[1]=array( "label" => "Train Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/train_new.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
</head>

<body>
	<!-- *************************************************	-->
	<!-- TEST PLAN											-->
	<!-- *************************************************	-->
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_Train_Class/test_plan.php'?>
	<!-- *************************************************	-->
	<!-- PROPERTY SHEET										-->
	<!-- *************************************************	-->
	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_PanelFactory_Class"/>
        <input type="hidden" id="type" value="train"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Component Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">

					 <tr>
						<td class='label'>State</td>
						<td>
							<select id="train_state">
                                <option value="" selected="1">Normal</option>
                                <option value="disabled">Disabled</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Process<td>
							<select id="train_process">
                                <option value="" selected="1">Sequential</option>
                                <option value="non-sequential" >Non-Sequential</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Position</td>
						<td>
							<select id="train_position">
                                <option value="" selected="1">On Top</option>
                                <option value="bottom">On Bottom</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Parent Train URL</td>
                        <td><input type="text" id="train_parent_url" value=""/>
                            <span class="fld-help">(e.g. http://oracle.com)</span>
                        </td>
					</tr>
					 <tr>
						<td class='label'>Button Bar</td>
						<td>
							<select id="train_buttonbar" onChange="toggleBarButtons()">
                                <option value="" selected="1">No</option>
                                <option value="button-bar">Yes</option>
							</select>
						</td>
					</tr>
					 <tr class="train_form_bar_buttons">
						<td class='label'>Submit Command *</td>
						<td>
                            <input type="text" class="action-box" id="cmdTrainButtonSubmit"/>
						</td>
					</tr>

					 <tr class="train_form_bar_buttons">
						<td class='label'>Finish Command *</td>
						<td>
                            <input type="text" class="action-box" id="cmdTrainButtonFinish"/>
						</td>
					</tr>
					 <tr class="train_form_bar_buttons">
						<td class='label'>Save Command *</td>
						<td>
                            <input type="text" class="action-box" id="cmdTrainButtonSave"/>
						</td>
					</tr>
					 <tr class="train_form_bar_buttons">
						<td class='label'>Exit Command *</td>
						<td>
                            <input type="text" class="action-box" id="cmdTrainButtonExit"/>
						</td>
					</tr>
					 <tr class="train_form_bar_buttons">
						<td class='label'>Cancel Command *</td>
						<td>
                            <input type="text" class="action-box" id="cmdTrainButtonCancel"/><br/>
                            <span class="fld-help"><strong>* Note:</strong><br/><strong>javascript::</strong>alert('hi') or<br/> <strong>url::</strong>http://oracle.com.<br/>Button will <strong>NOT</strong> be displayed unless a command is specified.</span>
						</td>
					</tr>


         <!--
		 		<tr>
        	<td align="right">Height</td>
            <td>
            	<input id="height" type="text" value="100" style='width:50%' />
            	<span class="fld-help">(% | px | auto)</span>
            </td>
        </tr>

         <tr>
        	<td align="right">Tab&nbsp;Removal</td>
            <td>
            	<select id="allow_tab_close">
                	<option value="allow-tab-close" selected="selected">Enable</option>
                    <option value=" ">Disable</option>
              	</select>
          	</td>
       	</tr>
        -->
		<!--
        <tr>
        	<td align="right">Toolbar</td>
            <td>
            	<select id="toolbar">
                	<option value="none" selected="selected">None</option>
                    <option value="sample-toolbar-short">Short Toolbar</option>
                    <option value="sample-toolbar-long">Long Toolbar</option>
              	</select>
          	</td>
       	</tr>
		-->
   </table>
            
			<!--div>Tabs</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%">
					<tr>
						<td>
							<select id="items"  size="5" subtype="list" 
								class="object-list"
								listController="DWPE_PanelFactory"
								onAdd_AddType="TabPanel"
								style="width:100%;min-width:180px;height:100px">
							</select>
						
						</td>
					</tr>
					<tr>	
						<td>
						
							<div id="items-property-sheet"></div>
							<script type="text/javascript">
								//onready initialize our list
								$(function()
									{
										DWPE_PanelFactory.initEditableObjectList("items");
									}
								);
							</script>
							
						</td>
					</tr>
				</table-->
			
				<div class="editable-tree-container" style="width:250px;">
					<div id="test-tree" class='editable-tree-panel'  title="Steps" fld="items"></div>
				</div>

				
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_PanelFactory.generateTrainsetMarkup( collectArguments() ) );
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
