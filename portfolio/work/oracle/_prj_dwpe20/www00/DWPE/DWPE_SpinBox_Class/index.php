<?php
		session_start();
		$component_title="DWPE Spin Box";
		$component_key="DWPE_SpinBox";
		$owner="Anthony Moquette";
		$specs=array();

		$specs[0]=array( "label" => "Spin Box Usage",
						 "url" => "http://blafstaging.us.oracle.com/blafSite/index.html?/blafSite/guidelines4/spinBox.html");
		$specs[1]=array( "label" => "Spin Box Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/spinBox.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>
	<div id="test-plan">
	
		<h3>Spin Box Beta Testing: 6/30</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-spinbox.png" title='Dreamweaver Spin Box Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Spin Box" menu item.  The Spin Box dialog should appear.</li>
				<li>On the attributes tab enter values for default, min, max, increment, number padding, state, required and help. Click OK.</li>
				<li>In design mode a spinbox placeholder will appear at the insertion point. </li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>			
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
	
	
		<div style="opacity:.5">
		<h3>Spin Box Alpha Testing</h3>
		<p class="note">
		<u>Note!</u> Testing of the individual Spin Box Only (sans-label).
		</p>		
		<ol>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Verfy the Spin Box draws correctly in the preview area.</li>
					<li>Click the up button, verify the value is incremented by the increment value.</li>
                    <li>Click the down button, verify the value is decremented by the increment value.</li>
                    <li>Coninue incrementing, verify the value does not exceed the Max value.</li>
                    <li>Continue decrementing, verify the value does not exceed the its Min value.</li>
                    
                    <li>Select and set a default value between the control's Min and Max range, and commit your changes.</li>
					<li>Verify new value is displayed.</li>
                    <li>Click the up/down arrow and verify the value is incrementded/decremented correctly from the set default value.</li>
                    
                    <li>Select and change the Max value to a larger number than Min value, verify when incrementing the value does not exceed the newly set Max value.</li>
                    <li>Select and change the Min value to a smaller number than Max value, verify when decrementing the value does not fall below the newly set Min value.</li>

					<li>Select and change the increment value.  Verify the increment and decrement values change according to the newly set increment value.</li>
                    
                    <li>Change the Number Padding value and commit.  Verify that values are prefixed with a zero to the length of the specified padding.</li>
                    
                    
                                     
					<li>Select 'Disabled' State and commit, verify component Disabled state is displayed, conponent should not allow changes.</li>
					<li>Select 'Read-Only' State and commit, verify component Read-Only state is displayed, conponent should not allow changes.</li>
					<li>Select 'Error' State and commit, verify component Error state is displayed.</li>
					<li>Select 'Warning' State and commit, verify component Warning state is displayed.</li>
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
        <input type="hidden" id="_class" value="DWPE_FormFactory_Class"/>
        <input type="hidden" id="type" value="spinbox"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
			
					<tr>
						<td class='label'>Default</td>
						<td>
							<input id="default_value" type="text" value="0" />
						</td>
					</tr>
					<tr>
						<td class='label'>Min</td>
						<td>
							<input id="min_value" type="text" value="-5" />
						</td>
					</tr>
					<tr>
						<td class='label'>Max</td>
						<td>
							<input id="max_value" type="text" value="5" />
						</td>
					</tr>
					<tr>
						<td class='label'>Increment</td>
						<td>
							<input id="increment" type="text" value="1" />
						</td>
					</tr>

					 <tr>
						<td class='label'>Leading Zeros</td>
						<td>
							<input id="number_length" value="0" />
						</td>
					</tr>
					 <tr>
						<td class='label'>State</td>
						<td>
							<select id="state">
                                <option value=" " selected="1">Normal</option>
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
						<td class='label'>Help</td>
						<td>
							<input id="help" type="text" value="" />
						</td>
					</tr>
					
			   </table>
            
			
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generateMarkup( collectArguments() ) );
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
