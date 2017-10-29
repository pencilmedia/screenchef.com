<?php
		session_start();
		$component_title="DWPE Text Field";
		$component_key="DWPE_TextBox";
		$owner="Anthony Moquette";
		$specs=array();

		$specs[0]=array( "label" => "Text Field & Area Usage",
						 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/textBox.html");
		$specs[1]=array( "label" => "Text Field Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/textBox.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<div id="test-plan">
	
		<h3>Text Field Beta Testing: 6/2/2010</h3>
		
		<ol>
		<li>Test Dialog Reentry:
			<ul>
				<li>In Dreamweaver design mode, place your cursor where you want to put the component. From the DWPE Insert Bar launch the component dialog, set values and press the OK button.</li>
				<li>The dialog will insert HTML at the insertion point you indicated.  In design mode the component name will appear where the component will render on the page.</li>
				<li>Click this component name.  The Property Inspector below the design pane will refresh. It will show the component name and provide an edit button. Click
				the edit button. The dialog will display the settings as they were the last time the dialog was visited for this component. </li>
				<li>Make a change to the settings, click OK and verify the change is saved onto the page properly.</li>
				<li>In design mode, click the component name again. Press CTRL+C to copy the component. Place your cursor somewhere else on the page and press CTRL+V to paste it there. </li> 
				<li>Click the new component name and verify that dialog reentry works correctly on this copy.</li>
				<li>Note that the code mode still allows you to do in-place edits of the HTML. However, in-place edits are not recognized by dialog reentry.</li>
				<li>Note that components created with builds prior to this week will not support dialog reentry.</li>
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
		
		
		<div style='opacity:.5'>
		
		<h3>Text Field Beta Testing: 5/26/2010</h3>

		<p>
		<img src="../DWPE_Extension/images/dwpe-dialog-text-field.png" title='Dreamweaver Text Field Dialog'>
		<p>&nbsp;</p>
		</p>

				
		<ol>
            
            
            <li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Text Field" menu item.  The Text Field Dialog should appear.
            	<ul>
					<li>Modify the text field text</li>
					<li>Select OK. </li>
					<li>Verify that DW design mode shows a text field control with the text you specified.</li>
					<li>Preview in Browser (CTRL+F12). Verify that Firefox shows a textarea control with the content you specified.</li>
					<li>Using the Dreamweaver tag breadcrumb, locate the ux tag that corresponds to the textarea.  Press delete to remove the
					    component from the page. </li>
				</ul>
					    
			</li>
			<li>Following the procedure above test each attribute for text field. Make sure textarea shows correctly in Dreamweaver design mode and in Firefox.
				The attributes you should test are:
			
			<ul>
					<li>Text</li>
					<li>Alignment</li>
					
            		<li>State</li>
            		<li>Required</li>
            		<li>Help</li>
            		
            </ul>
            </li>
            
            <li>By default, text field sizes to fit the width of its container. Let's test this. 
            	Add a table to the page (you could add the code by hand or use the Insert bar 'Layout' toolbar).  
            	Make the table width equal to 50%. 
            	Using the Dreamweaver tag breadcrumb, highlight the ux tag that corresponds to the text field.
            	Cut the tag and paste it into the table cell your created earlier.  
            	In Design mode and in Firefox does the textarea size to fit its container?  
            </li>
            
            <li>Visit the <b>Beta Feedback</b> tab and report your findings
            	<ul>
					<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
					<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
					<li>Feedback is due on Tuesday, Noon PT.</li>
				</ul>
            </li>                

		</ol>
		
		<hr>
		
		
		
		
		<h3>Text Field Alpha Testing</h3>
		<p class="note">
		<u>Note!</u> Testing of the individual Text Field Only (sans-label).
		</p>		
		<ol>
            
            
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Verfy the Text Field draws correctly in the preview area.</li>
					<li>Modify the Text Field text.</li>
					<li>Commit your changes. </li>
					<li>Verify new text is displayed.</li>
					<li>Select 'Disabled' State and commit, verify component Disabled state is displayed, conponent should not allow changes.</li>
					<li>Select 'Read-Only' State and commit, verify component Read-Only state is displayed, conponent should not allow changes.</li>
					<li>Select 'Error' State and commit, verify component Error state is displayed.</li>
					<li>Select 'Warning' State and commit, verify component Warning state is displayed.</li>
                    <li>Resize the component by using an inline style attribute (e.g. style='width:50%')  Verify it sizes as expected upon resize.</li>
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
        <input type="hidden" id="type" value="textbox"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
			
					<tr>
						<td class='label'>Text</td>
						<td>
							<input id="text" type="text" value="My Text" />
							
						</td>
					</tr>
					<tr>
						<td class='label'>Alignment</td>
						<td>

							<select id="alignment">
								<option value=" " selected="1">Left</option>
                                <option value="right">Right</option>
							</select>
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
