<?php
		session_start();
		$component_title="DWPE RadioGroup";
		$component_key="DWPE_RadioGroup";
		$owner="Medha Singri";
		$specs=array();

		$specs[0]=array( "label" => "Radio Group Usage",
						 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/radioGroup.html");
		$specs[1]=array( "label" => "Radio Group Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/radioButton.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<div id="test-plan">
	
		<h3>Radio Group Beta Testing: 6/2/2010</h3>
		
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
		
		<h3>Radio Group Beta Testing: 5/26/2010</h3>

		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-radiogroup.png" title='Dreamweaver Radio Group Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<p><h4>Items Tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-radiogroup-2.png" title='Dreamweaver Radio Group Dialog: Items Tab'>
		<p>&nbsp;</p>
		</p>
		
		<p><h4>Templates Tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-templates-tab.png" title='Dreamweaver Dialog: Templates Tab'>
		<p>&nbsp;</p>
		</p>


				
		<ol>
		
		<li>In Dreamweaver create a new test page. Create a table on your test page.  Place your cursor inside the table cell where you want the component to be inserted. 
			Open the Radio Group Dialog (DWPE 2 Insert Bar > Form Icon > Radio Group) 
			<ul>
				<li>Visit the Attributes tab. Set a Group Name. If you have more than one radio group on the page, this Group Name must be unique for selection to work properly.</li>
				
				<li>
					Visit the Items tab. Click the + icon to add 3 items.  
				</li>
				<li>Highlight each of the 3 items and change its value.  Name them AAA, BBB and CCC respectively. 
				<li>
					For the item BBB set Item State to 'Disabled'.
				</li>
				<li>
					Click OK to insert the component on the page.
				</li>
				<li>Verify that the dialog inserts code on the page where you expect it to and that the design mode shows a reasonable representation of the component.</li>  
				<li>Preview in Firefox.  Does the component display correctly.  Does the component function correctly.</li> 
				
			</ul>
		
		</li>
		
		
		<li>
			Repeat the process outlined in step 1. Vary the number of items, delete items, re-order items and change values on the attributes tab.  Confirm that 
			the output from the dialog is as you expect in both Dreamweaver and Firefox.
			
		</li>
		
		
		
		
		
	

		
		<li>In design/code mode place your cursor where you want to insert the component. 
			Open the dialog again.
			<ul>
				<li>
					Visit the Items tab. Click the + icon to add 3 items.  
				</li>
				<li>Highlight each of the 3 items and change its value.  Name them AAA, BBB and CCC respectively. 
				<li>
					For the item BBB set Item State to 'Disabled'. Set Tooltip to 'I am BBB'.
				</li>
				
				<li>Visit the Attributes tab. Set the Help field to 'Help note window'. Set Group Name to 'test_1'.</li>
				
				<li>Click the "Save as Template" button.  When prompted, name the template 'test 1'.</li>
				
				<li>Visit the Templates tab.  Confirm that the template 'test 1' appears in the list of templates. Press cancel, the dialog should close without inserting any code.</li>

				<li>Open the dialog again.  Visit the Templates tab.  Highlight the 'test 1' templates and press the Load button.  Visit the other tabs and confirm that your previous settings stored as 'test 1' are reconstituted.</li>		
				
				<li>
					Click OK to insert the component on the page.
				</li>
				<li>Verify that the dialog inserts code on the page where you expect it to and that the design mode shows a reasonable representation of the component.</li>  
				<li>Preview in Firefox.  Does the component display correctly?  Does the component function correctly?</li> 
				
			</ul>
		
		</li>
		
		<li>Templates are pretty powerful. You can make your own. And the DWPE can deliver a pre-defined set.  Reflect on the components you might frequently make with this dialog.  Use the Beta Feedback section to nominate the ones you think would be useful to a broad audience of prototypers.  Include a link to a spec or working sample if you have one.</li>
		
		<li>Open the dialog and click the '?' tab. Read the help presented there. If you feel something is missing or not covered well, enter feedback about it.</li>
		
		
		
		<li>Visit the <b>Beta Feedback</b> tab and report your findings
			<ul>
				<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
				<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
				<li>Feedback is due on Tuesday, Noon PT.</li>
			</ul>
		</li> 
		
		
		</ol>
		
	
	
		<h3>Radio Group Alpha Testing</h3>
		<p class="note">
		<u>Note!</u> Testing of the Radio Group Only (sans-label).
		</p>		
		<ol>
		<li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>
						Review radio styling, spacing and alignment. 
					</li>
					<li>
						Review text styling and alignment.
					</li>
										
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
           
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Verify if radio draws correctly in the preview area.</li>					
					<li>Enter a number to wrap after items to create layouts. Eg. enter 1 for horizontal layout.</li>
					<li>Modify radio value parametes(text, value, tooltip, state). State can be changed for each radio button.</li>
					<li>Modify required field.</li>					
					<li>Select 'Disabled' State and commit, verify component Disabled state is displayed, radio button and conponent should not allow changes.</li>
					<li>Select 'Read-Only' State and commit, verify component Read-Only state is displayed, radio button and conponent should not allow changes.</li>
					<li>Select 'Error' State and commit, verify component Error state is displayed.</li>
					<li>Select 'Warning' State and commit, verify component Warning state is displayed.</li>
					<li>Commit and verify changes.</li>                 
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
        <input type="hidden" id="type" value="radiogroup"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Radiogroup Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
											
					<tr>
						<td class='label'>Group&nbsp;Name</td>
						<td>
							<input type="text" id="group" value="radiogroup"/>
						</td>
					</tr>
					<tr>
						<td class='label'>Group State</td>
						<td>
							<select id="state">
                                <option value="enabled" selected="1">Enabled</option>
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
								<option value="required">Required</option>								
								<option value="not-required" selected="1">Not Required</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class='label'>Items Per Column</td>
						<td>
							<input type="text" id="wrap" style="width:20px" maxlength="1" value="0"/>
						</td>
					</tr>
					<tr>
						<td class='label'>Help</td>
						<td>
							<input type="text" id="help" value="0"/>
						</td>
					</tr>
					
	
			   </table>		
			 <div class="editable-tree-container" style="width:250px;">
				<div id="editable-tree" class='editable-tree-panel'  title="Items" fld="items"></div>
			 </div>
					
			<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					
			
				<div style="padding:20px 0px">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generateRadioGroupMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">				
					</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea id="scratchpad" wrap='off' style="width:100%;height:400px;padding:5px;"  ignore_property="1"></textarea>
			</td>
			
		</tr>
		
		
	
		
		
		</table>
			
	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>

					
	

</body>
</html>
