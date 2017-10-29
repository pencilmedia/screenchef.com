<?php
		session_start();
		$component_title="DWPE Radio Button Group";
		$component_key="DWPE_RadioButtonGroup_Class";
		$owner="Roy Selig";
		$specs=array();
		$specs[0]=array( "label" => "Button Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/button.html");
		$specs[1]=array( "label" => "Button Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/buttons.html");
		$specs[2]=array( "label" => "Toolbar Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/toolbar.html");
		$specs[3]=array( "label" => "Toolbar Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/toolbar_new.html");
		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns:ux="apps-ux"

>
<head>

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>

</head>

<body>

	<div id="test-plan">
	
	
		<h3>Radio Button Group Beta Testing: 6/23</h3>
		
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Icon and Command Selection Secondary Dialogs
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the toolbar icon <img src="../DWPE_Extension/images/dwpe-icon-toolbar.png" valign="middle"> and select the "Radio Button Group" menu item.  The Radio Button Group dialog should appear.</li>
				<li>On the attributes tab enter values for label and tooltip. On the items tab add several items.</li>
				<li>Use the button beside the command field to specify a command using the Select Command secondary dialog. </li>
				<li>Use the button beside the icon field to specify an icon using the Select Icon secondary dialog.</li>
				<li>Click OK to commit your choices to the page.</li>
				<li>In design mode a component placeholder will appear at the insertion point. </li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				<li>Vary the command type and test the display at runtime. Click the component. Does the command work as expected?</li>
				<li>Vary the icon and test the display at runtime. Does the selection match what you chose in the dialog?</li>
				
			</ul>
		</li>
		
		<li>Visit the <b>Beta Feedback</b> tab and report your findings
			<ul>
				<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
				<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
				<li>Feedback is due on Tuesday, Noon PT.</li>
			</ul>
		</li> 
		</ol>
		
		
		
		
		<div style="opacity:.5">
		<hr>
		
		
		<h3>Radio Button Group Beta Testing: 6/16</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-radiobuttongroup.png" title='Dreamweaver Radio Button Group Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the toolbar icon <img src="../DWPE_Extension/images/dwpe-icon-toolbar.png" valign="middle"> and select the "Radio Button Group" menu item.  The Radio Button Group dialog should appear.</li>
				<li>On the attributes tab enter values for button style.</li>
				<li>On the items tab, add 3 items and for each item fully specify label, icon (where appropriate), tooltip and command. Make sure the state of one of the items is set to selected.</li>
				<li>Click OK to commit your changes.</li>
				<li>In design mode a component placeholder will appear at the insertion point. </li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				<li>Note that an Radio Button Group can appear inside a toolbar, or outside of one.  When appearing outside a toolbar it is considered a Command Button. That is what you are testing here.  We will test Radio Button Groups inside toolbars during the toolbar test.</li>
				<li>Note that in a future build we will provide a secondary icon lookup dialog for selecting icon keywords or passing in the url path to an icon.  For this week just use the icon keywords we suggest.</li>
				<li>Note that even though we don't show a label for this component at runtime the dialog still requires one.  This is because the label is used as the display text to represent the item in the items list.</li>
			</ul>
		</li>
		
		<li>Test Dialog Reentry:
			<ul>
				<li>In Dreamweaver design mode, find the component you just created.</li>
				<li>Click the component name.  The Property Inspector below the design pane will refresh. It will show the component name and provide an edit button. Click
				the edit button. The dialog will display the settings as they were the last time the dialog was visited for this component. </li>
				<li>Make a change to the settings, click OK and verify the change is saved onto the page properly. Verify it displays in Firefox correctly.</li>
				<li>In design mode, click the component name again. Press CTRL+C to copy the component. Place your cursor somewhere else on the page and press CTRL+V to paste it there. </li> 
				<li>Click the new component name and verify that dialog reentry works correctly on this copy.</li>
				<li>Note that the code mode still allows you to do in-place edits of the HTML. However, in-place edits are not recognized by dialog reentry.</li>
				<li>Note that components created with builds prior to this week will not support dialog reentry.</li>
			</ul>
		</li> 
		
		<li>Test Templates:
			<ul>
				<li>In Dreamweaver design mode, find the component you created in previous steps. Use the property inspector to reenter the dialog.  </li>
				<li>Choose Save as Template and give it a name. Cancel out of the dialog.</li>
				<li>Find a new place on your page to insert the component.  Use the insert bar to launch the component dialog. </li> 
				<li>Open the templates tab. Highlight the template name you saved before and press the load button. Are the settings restored from the template as you expect?</li>
				<li>Press OK. Does the dialog insert the component correctly on the page? Does the component look and behave as expected in Firefox?</li>
			</ul>
		</li> 
		
		<li>Reflect on the components you might frequently make with this dialog. Are any of them candidates for becoming templates? Use the Beta Feedback section to nominate the ones you think would be useful to a broad audience of prototypers.  Include a link to a spec or working sample if you have one.</li>
		
		<li>Open the dialog and click the '?' tab. Read the help presented there. If you feel something is missing or not covered well, enter feedback about it.</li>
		
		
		
		<li>Visit the <b>Beta Feedback</b> tab and report your findings
			<ul>
				<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
				<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
				<li>Feedback is due on Tuesday, Noon PT.</li>
			</ul>
		</li> 
		</ol>
	
	
		
		<hr>
	
	
		<h3>Radio Button Group Alpha Testing</h3>
		
		<p class="note">
		<u>Please Note</u>: The term 'Radio Button Group' as used by ADF is confusing.  Radio Button Group as used here refers to 
		a collection of buttons that are mutually exclusive and that eiher live on a toolbar or are treated as command buttons.  These 
		are <b>not</b> the radio buttons we think of in HTML forms. ADF has those as well and we'll develop them when we get to building
		form elements.
		</p>
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>Click on each button and verify that its state changes to active
						and that the other button states become inactive.
					</li>
					
					<li>
						Review button spacing and alignment. 
					</li>
					
					<li>
						Review button interaction: rollover, active, selected.
					</li>
					
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Choose a Button Style</li>
					<li>Choose a Selected Button Index</li>
					<li>Select an Item and edit its properties</li>
					<li>Add a few items</li>
					<li>Delete a few items</li>
					<li>Commit your changes</li>
					<li>Do the changes appear in the preview area as expected?</li>
					<li>Select an item.  Set it's Action to http://www.oracle.com. 
					     Set its Behavior to "Open URL in Current Page". Commit your changes. 
					     Click the button in the preview area.  Does the page open to the specified URL?
					</li>
					<li>Select an item.  Set it's Action to: alert("hellow world"). 
					     Set its Behavior to "Call Javascript". Commit your changes. 
					     Click the button in the preview area.  Does the button respond by showing a JavaScript Alert?
					</li>
					<li>
						Review the property labels.  Does the terminology used make sense to you?
					</li>
					
				</ul>
            </li>
            	
             <li>Visit the <b>Metadata</b> tab
            	<ul>
					<li>Click Run Tests, allow the test suite to complete its work.</li>
					<li>Does the resulting performance graph progress linearly? Are there any spikes? Please log feedback accordingly.</li>
					
				</ul>
            </li>
            
            <li>Visit the <b>Feedback</b> tab and report your findings
            	<ul>
					<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
					<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
					<li>Feedback is due on Monday, Noon PT.</li>
				</ul>
            </li>
		</ol>
		
		</div>
	
	</div>

	<form id="properties-sheet">

	
		<input type="hidden" id="_class" value="DWPE_ButtonFactory_Class"/>
		<input type="hidden" id="type" value="RadioButtonGroup"/>
		
		<table class="properties-table">
		
		
		<tr>
			<td class='label'>
				Button&nbsp;Style
			</td>
			<td>
				<select id="button_style">
					<option value="TextButton">Text Button</option>
					<option value="IconicButton" selected='1'>Iconic Button</option>
					<option value="IconicTextButton">Iconic Text Button</option>
				</select>
			</td>
		</tr>
	
		
		
		<tr>
			<td class="label">State</td>
			<td>
				<select id="state">
					<option value="0">Disabled</option>
					<option value="1" selected>Enabled</option>
				</select>
			</td>
		</tr>
		
		<tr>
			<td class='label'>Buttons</td>
			<td>
			
				<table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0">
					<tr>
						<td>
							<select id="items" size="5" subtype="list" style="width:130px;height:130px">
						
							</select>
						
						</td>
						<td>
						
							<div id="items-property-sheet"></div>
							<script type="text/javascript">
								//onready initialize our list
								$(function()
									{
										DWPE_ButtonFactory.initEditableObjectList("items");
									}
								);
							</script>
							
						</td>
					</tr>
				</table>
				
			</td>
		</tr>
		
		<tr>
			<td class='label'>
				Selected&nbsp;Button
			</td>
			<td>
				<input type="text" id="selected" value="0"/> <span class='fld-help'>(0=none, >0 indicates the <i>n</i>th button is selected)</span>
			</td>
		</tr>
		
		<tr>
			<td></td>
			<td>
				<p><br>
					<input class="ui-state-default ui-corner-all" type="button" value="commit" onClick="commitProperties()">
				</p>	
			</td>
		</tr>
		
		</table>
			
	</form>
		</div>
	
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>

	
	<!--ul>
				<li>@Roy:toolbar needs to consume toolbar items, align itself correctly on the page and present 
				overflow content when needed.
				
				
				
				</li>
					
			</ul-->
			 <!--end page-->	
</body>
</html>
