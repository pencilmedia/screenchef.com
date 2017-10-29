<?php
		session_start();
		$component_title="DWPE SingleSelectChoiceList";
		$component_key="DWPE_SingleSelectChoiceList";
		$owner="Anthony Moquette";
		$specs=array();

		$specs[0]=array( "label" => "Single Select Choice List Usage",
						 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/choicelist.html");
		$specs[1]=array( "label" => "Single Select Choice List Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/singleChoiceList.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<div id="test-plan">
		
		<h3>Single-Select Choice List Beta Testing: 6/2/2010</h3>
		
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
		<h3>Single-Select Choice List Beta Testing: 5/26/2010</h3>

		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-singleselectchoicelist.png" title='Dreamweaver Single-Select Choice List Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<p><h4>Items Tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-singleselectchoicelist-2.png" title='Dreamweaver Single-Select Choice List Dialog: Items Tab'>
		<p>&nbsp;</p>
		</p>
		
		<p><h4>Templates Tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-templates-tab.png" title='Dreamweaver Dialog: Templates Tab'>
		<p>&nbsp;</p>
		</p>


				
		<ol>
		
		<li>In Dreamweaver create a new test page. Create a table on your test page.  Place your cursor inside the table cell where you want the component to be inserted. 
			Open the Single-Select Choice List Dialog (DWPE 2 Insert Bar > Form Icon > Single-Select Choice List) 
			<ul>
				<li>
					Visit the Items tab. Click the + icon to add 3 items.  
				</li>
				<li>Highlight each of the 3 items and change its value.  Name them AAA, BBB and CCC respectively. 
				<li>
					For the item BBB set Selected to Yes.
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
					For the item BBB set Selected to Yes.
				</li>
				
				<li>Visit the Attributes tab. Set the Help field to 'Help note window'</li>
				
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
		
		<h3>Single-Select Choice List Alpha Testing</h3>
		<p class="note"><u>Note!</u><br/>
        	a) The Compact rendition of this component is NOT to be tested as it will be part of a future menuing component.<br />
        	b) Testing of the individual Single Select Choice List Only (sans-label).
        </p>
		<ol>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Verfy the Single Select Choice List draws correctly in the preview area.</li>
					<li>Modify the Single Select Choice List text.</li>
					<li>Commit your changes. </li>
					<li>Verify new text is displayed.</li>
                    <li>Set its Required state to 'yes' and commit.  Verify the required class is added to the select element in the Generated Markup area.</li>
                    <li>Select an Option from the Choice List Options area and apply a value to its value field and commit.  Verify the new value is displayed in the Generated Markup area.</li>
                    <li>Add a new list option, commit and verify it's added correctly.</li>
                    <li>Select a list option and remove it, commit and verify the list option is removed</li>
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
        <input type="hidden" id="type" value="singleselectchoicelist"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>List Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
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
               
               <br />

			   <div class="editable-tree-container" style="width:250px;">
							<div id="editable-tree" class='editable-tree-panel'  title="Items" fld="items"></div>
						</div>
		
			
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
