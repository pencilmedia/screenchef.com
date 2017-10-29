<div id="test-plan">
	
		
		<h3>Multi-Select Choice List Beta Testing: 6/2/2010</h3>
		
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
		
		<h3>Multi-Select Choice List Beta Testing: 5/26/2010</h3>

		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-multiselectchoicelist.png" title='Dreamweaver Multi-Select Choice List Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<p><h4>Items Tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-multiselectchoicelist-2.png" title='Dreamweaver Multi-Select Choice List Dialog: Items Tab'>
		<p>&nbsp;</p>
		</p>
		
		<p><h4>Templates Tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-templates-tab.png" title='Dreamweaver Dialog: Templates Tab'>
		<p>&nbsp;</p>
		</p>


				
		<ol>
		
		<li>In Dreamweaver create a new test page. Create a table on your test page.  Place your cursor inside the table cell where you want the component to be inserted. 
			Open the Multi-Select Choice List Dialog (DWPE 2 Insert Bar > Form Icon > Multi-Select Choice List) 
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
				
				<li>Visit the Attributes tab. Set the Help field to 'Help note window'. Set Select All to 'Yes'</li>
				
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

	
	
	<p class="note"><u>Note!</u> Testing of the individual Multi-select Choice List Only (sans-label).</p>		
    <ol>
        <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            <ul>
                <li>Review listbox and checkbox styling, spacing and alignment.</li>
                <li>Review text styling and alignment.</li>										
                <li>Refer to the Specifications tab for guidance.</li>					
            </ul>
        </li>
        <li>Visit the <b>Configurable Elements</b> tab 
            <ul>
                <li>Verify if checkboxes draw correctly in the preview area.</li>
                <li>Verify if selecting "required" stores that information in generated markup's div.</li>
                <li>Verify if Select All option enables / disable the "All" List item.</li>
                <li>Modify listbox width. Verity it sizes.</li>
                <li>Verify if adding listbox help behaves as required after commit.</li>
                <li>Modify checkbox value parametes(value, system value, tooltip). Item state changes for individual checkboxes.</li>		
                <li>Select an item and set its "Seperator" property to Yes.  Verify a separator is drawn below the item.</li>
                <li>Select multiple items and verify they are displayed in the listbox separated by a semi-colon.</li>
                <li>Select Check All, verify the listbox  displays "All" instead of individual values.</li>
                <li>Select 'Disabled' State of the listbox and commit, verify component Disabled state is displayed, conponent should not allow changes.</li>
                <li>Select 'Read-Only' State of the listbox and commit, verify if value of selected checkboxes are displayed.</li>
                <li>Select 'Error' State of the listbox and commit, verify component Error state is displayed.</li>
                <li>Select 'Warning' State of the listbox and commit, verify component Warning state is displayed.</li>
                <li>Add 15 or more items, verify list items allow scrolling.</li>
                <li>From an all selected state, deselect an list item.  Verify list box value changes from "All" to a list of individual items.</li>
                <li>Place cursor in listbox and enter a name of an existing list item.  Click the down arrow and verify the list item is selected.</li>                 
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