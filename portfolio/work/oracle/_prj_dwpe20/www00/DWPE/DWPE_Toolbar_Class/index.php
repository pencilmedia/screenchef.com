<?php
		session_start();
		$component_title="DWPE Toolbar Class";
		$component_key="DWPE_Toolbar_Class";
		$owner="Roy Selig";
		$specs=array();
		$specs[0]=array( "label" => "Toolbar Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/toolbar.html");
		$specs[1]=array( "label" => "Toolbar Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/toolbar_new.html");
		$specs[2]=array( "label" => "Button Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/button.html");
		$specs[3]=array( "label" => "Button Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/buttons.html");
		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns:ux="apps-ux"

>
<head>

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>

</head>

<body>


<div id="test-plan">
		
		<h3>Toolbar Beta Testing: 6/23</h3>
		
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Icon and Command Selection Secondary Dialogs
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the toolbar icon <img src="../DWPE_Extension/images/dwpe-icon-toolbar.png" valign="middle"> and select the "Toolbar" menu item.  The Toolbar dialog should appear.</li>
				<li>On the items tab add several items.</li>
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
		
		<h3>Toolbar Beta Testing: 6/16</h3>
		
		<p><h4>Items tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-toolbar-2.png" title='Dreamweaver Toolbar Dialog: Items Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the toolbar icon <img src="../DWPE_Extension/images/dwpe-icon-toolbar.png" valign="middle"> and select the "Toolbar" menu item.  The Toolbar dialog should appear.</li>
				<li>On the Items tab add 9 items. Make three items each for Text Button, Iconic Button and Iconic Text Button. Be sure to fully specify label, icon (where appropriate), tooltip and command for each item. Change the fourth item type to Separator.</li>
				<li>Add another item and make it a Radio Button Group.  Be sure to add child items and specify button style.</li>
				<li>Add another item and make it a Toggle Button.</li>
				<li>Add another item and make it an Inline Selector.  Be sure to add child items and specify button style.</li>
				<li>Using the arrow buttons on the items tab highlight the radio button group you've made and move it so that it appears first in the list.</li>
				<li>Click OK to commit your changes.</l>
				<li>In design mode a component placeholder will appear at the insertion point. </li>
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
	
		
		<h3>Toolbar Beta Testing: 6/9</h3>
		
		<p><h4>Items tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-toolbar.png" title='Dreamweaver Toolbar Dialog: Items Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the toolbar icon <img src="../DWPE_Extension/images/dwpe-icon-toolbar.png" valign="middle"> and select the "Toolbar" menu item.  The Toolbar dialog should appear.</li>
				<li>On the Items tab add 9 items. Make three items each for Text Button, Iconic Button and Iconic Text Button. Be sure to fully specify label, icon (where appropriate), tooltip and command for each item. Change the fourth item type to Seperator.Click OK.</li>
				<li>In design mode a component placeholder will appear at the insertion point. </li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				<li>Note that support for resize and overflow will be added in the next build.</li>
				<li>Note that additional toolbar item types such as radio button group and inline selector will be added in the next build.</li>
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
	
	
		<h3>Toolbar Alpha Testing 3/9</h3>
		<ol>
			<li>Visit the <b>Preview</b> area; a sample component has been set up for you there. 
               
               <ul>
					<li>
						Review button spacing and alignment. 
					</li>
					
					<li>
						Review button interaction: rollover, active, selected.
					</li>
					
					<li>
						Review overflow behavior.
					</li>
					
					<li>
						Resize your browser window and verify that overflow is recalculated correctly.
					</li>
					
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
		
		
	
	
	
		<h3>Toolbar Alpha Testing 2/16: Complete!</h3>
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there. 
                The elements are generated at random.  Refresh the page to see a new set of elements.
            	<ul>
					<li>
						Review button spacing and alignment. 
					</li>
					
					<li>
						Review button interaction: rollover, active, selected.
					</li>
					
					<li>
						Review overflow behavior.
					</li>
					
					
					
					
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Change the width to 40%.</li>
					<li>Change resizable to Yes.</li>
					<li>Commit your changes.</li>
					<li>Did the toolbar resize as expected?</li>
					<li>Click the overflow button. Do the items appear as expected?</li>
					<li>Click some of the buttons in the overflow area (Radio Button Group, Inline Selector, ). Do they behave as expected?</li>
					<li>Resize the toolbar to make it larger and smaller.  Click the overflow menu.  Are the correct buttons place into overflow?</li>
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
		
        
        <input type="hidden" id="_class" value="DWPE_Toolbar_Class"/>
        <input type="hidden" id="type" value="toolbar"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		
	
		
		<tr>
			<td>
				
				<table>
				
						<tr>
							<td class='label'>Resizable</td>
							<td>
								<select id="resizable">
									<option value="0" selected="1">*No</option>
									<option value="1">Yes</option>
								</select>
							</td>
						</tr>
						
						<tr>
							<td class='label'>Retrieve From</td>
							<td>
								<input id="url" type="text" value="toolbar_sample.htm"/>
							</td>
						</tr>
				
				</table>
			

				<div class="editable-tree-container" style="width:300px;">
					<div id="test-tree" class='editable-tree-panel  hierarchical'  title="Toolbar Items" fld="items"></div>
				</div>

				
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_Toolbar.generateMarkup( collectArguments() ) );
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
