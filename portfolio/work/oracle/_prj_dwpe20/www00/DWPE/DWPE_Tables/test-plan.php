<div id="test-plan">
		
		
		
		<h3>Table Beta Testing: 7/14</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-table.png" title='Dreamweaver Table Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page. Set the CSS class of the body tag to 'SecondaryRegion'.</li>
				<li>From the DWPE2 Insert Bar, click the table icon <img src="../DWPE_Extension/images/dwpe-icon-table.png" valign="middle">.  The Table dialog should appear.</li>
				<li>On the Items tab add 5 columns. Name them uniquely. Name the 3rd item 'Shipping Info'. Add four child items to the 3rd item. Name them Address, City, State and Postal Code.  Set the generated value for each item accordingly.</li>
				<li>On the Attributes tab set grid lines, row and column banding, row headers, number of rows and number of visible rows as you prefer.</li>
				<li>Provide a name for your table. This name helps differentiate your table from other tables on the page at design time.  The value is ignored at runtime.</li>
				<li>Click OK to commit your changes.</li>
				<li>In the design pane, at your insertion point,  you should see a table icon with name you gave your table beside it. The table bounding box should be sized at approximately the height equivalent to the number of rows you specified.</li>
				<li>Using the property inspector you may reenter the dialog and make changes to the table.</li>
				<li>You may also make changes directly to the content within the table but take care. These changes will be lost the next time you reenter the dialog and commit your changes.</li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				<hr>
				<li>Create a new file. Save it within your project's toolbar directoy.  Add a toolbar to this page.</li>
				<li>Now return to the page where you defined the table.  In the property inspector for this table click the edit button.</li>
				<li>Click the icon beside the toolbar field.  In the secondary dialog make sure your project name is showing.  This dialog shows all the toolbars you have saved into your toolbar folder for this project.  </li>
				<li>Select the toolbar your just created. You are associating a toolbar to this table.  You could have many table looking up to this one toolbar (the reuse case).</li>
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
		
		<h3>Table Testing</h3>

		
		
		<ol>
		 <li>Visit the <b>Preview Area</b>.  A sample table has been set up for you there. 
            	<ul>
					
					
					<li>The table has 50 rows of data. 9 Rows are shown at a time.  Scroll vertically. Do you see all 50? Does vertical scrolling behave as you expect?</li>
					
					<li>The table has 13 columns. Scroll horizontally to reveal the columns on the right side of the table.  Do you see all 13?
					Does horizontal scrolling behave as you expect?</li>
					
					
					<li>The Name column is sortable. Find and click this column's sort ascending button. Then find and
					click its sort descending button. Does sort behave as you expect?</li>
					
					<li>The Status column shows an icon but is still sortable. Find and click this column's sort ascending button. Then find and
					click its sort descending button. Does sort behave as you expect?</li>
					
					
					<li>QBE is enabled on this table.  From the toolbar,click the QBE icon to toggle the display of this panel. Does it behave as expected?</li>
					
					<li>In the QBE field for company type XYZ and press enter. Does the table
					filter out all but the entries that start with XYZ?</li>
					
					<li>Remove the QBE filter from Company.  Find a surname that occurs in the table and type that surname in the QBE field for Name. 
					Since we are searching a column that shows full names be sure to precede your search with a wildcard (*) to pick up any occurance
					of the surname in the column value.  Press enter.  Does the table filter results as you expect?</li>
					
					<li>Remove the QBE filter from Name.  Query the Status column for 'pending'. Since the column does not display text, the title attribute of the icon is used as the basis for search.  Does the table filter as expected?</li>
					
					
					
					<li>
						Now perform a combined query across two columns.  Are results filtered as you expect?
					</li>
					
					<li>
						Remove the QBE filters from each field.  On the last cleared field, press the enter key to return all 50 rows of data.  Does clearing the filter work as you expect?
					</li>
					
					<li>Hover over the right edge of a column.  A resize handle should appear.  Click and drag the resize handle.  Does the column resize
						as you expect? Is the horizontal scrollbar managed correctly?</li>
					
					
					<li>
						Select a row. Does it's selected highlight appear? Does the statusbar update to show 1 row selected?
					</li>
					
					
					<li>
						Assuming one row has already been selected, peform a contiguous row selection by pressing the SHIFT key and selecting a row 
						3 rows below the selected row.  Do four rows show as selected?  Does the last row you selected show with a slightly different hue (this is the active state color)?
						Does the statusbar update to show 4 rows selected?
					</li>
					
					<li>
						Select one row. Does the contiguous selection from the previous state get removed? Is highlight correctly placed on the row you clicked?
					</li>
					
					<li>
						Perform a non-contiguous selection by pressing the CTRL key and selecting several non-adjacent rows. Do the rows appear highlighted?  Is the active row color maintained correctly?
						Is the number of rows updated correctly in the status bar?
					</li>
					
					<li>
						With the non-contiguous selection still in effect from the last step, from the toolbar click the delete icon. Are the selected rows removed correctly? 
					</li>
					
					<li>
						From the menubar open View>Columns.  Review the list of columns shown as menu items. Does it correctly reflect the list of columns in the table?
						Click the Column named Company.  Is the column correctly hidden?  Open the menu again, does the column called Company show without a checkmark?
						Click that menu item again. Is the Company column visible again?
					</li>
					
					
				</ul>
            </li>
            
            
             <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Set Row Header to each of its states and commit your changes.  Does the table display as you'd expect?</li>
					<li>Set Row Banding to each of its states and commit your changes.  Does the table display as you'd expect?</li>
					<li>Set Column Banding to each of its states and commit your changes.  Does the table display as you'd expect?</li>
					<li>Set Grid Lines to each of its states and commit your changes.  Does the table display as you'd expect?</li>
					<li>Set Number of Rows to 100.  Set Number of Visible Rows to 5.  Does the table display as you'd expect?  Realize that when you set rows to show to five
						and you have too many columns to fit on screen at once, the horizontal scrollbar will appear and consume one row, effectively reducing rows shown to 4.  </li>	
				
					<li>Hide and show Menubar, Toolbar, Statusbar, QBE and Column Footer.  Do these panels appear and disappear as you expect?
					
					<li>Set totaling to Grand Totals Only and commit your changes.  The component will sum any number columns and present the grand totals in a fixed row at the bottom of the table.  Does this behave as you expect?</li>
					
					
					<li>Set totaling to Sub & Grand Totals. Set Frequency to 7. Commit your changes.  The component will subtotal any number columns every 7 rows and present grand totals in a fixed row at the bottom of the table.  Does this behave as you expect?
						If after table creation the prototyper needs to adjust rows, it is their responsibility to adjust subtotal and totals values as well.
						Note that sorting on tables that show subtotals will not work correctly.
					</li>
					
					
					<li>In the Columns editable tree, select the Name column.  Vary the format and commit your changes.  Does the value appear in the format you chose?
					<li>In the Columns editable tree, select the Company column.  Vary the generated value option and commit your changes.  Do the values displayed match the generated value type you selected? Can you suggest
					other useful values that we can generate at random to help prototypers quickly build up table content?
					<li>In the Columns editable tree, select the Email column. Add a new column.  Change the column name to 'Expenses'. Change generated value to US Currency.  Change sort to not sorted.  Change align to end.  Change width to 75. Commit your changes.  
					Does the Expenses column show up after the email column and does it properly reflect the settings you applied?  Can you search and sort on this column?</li>
					
					
					
					
					<li>In the Columns editable tree, add a new column directly below Status and call it 'Contact Info'. Set align to center.  Now make the Work Phone, Mobile Phone and Email columns children of three 'Contact Info'. Commit your changes.
						Do these columns correctly appear below the column group for 'Contact Info'?
					
					<li>In the Columns editable tree, select Company and set visibility to hidden. Commit your change. Is the Company column hidden by default?  Using the View>Columns menu can you make it visible again?
					
					
					
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