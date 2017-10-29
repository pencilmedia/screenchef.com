<div id="test-plan">
		<h3>Menu Beta Testing: 7/14</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-menu.png" title='Dreamweaver Menu Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page. Set the CSS class of the body tag to 'SecondaryRegion'.</li>
				<li>From the DWPE2 Insert Bar, click the menu icon <img src="../DWPE_Extension/images/dwpe-icon-menu.png" valign="middle">.  The Menu dialog should appear.</li>
				<li>On the Items tab add 7 items. Name them uniquely. </li>
				<li>Name the 3rd item 'Radio Items'. Add four child items to the 3rd item.</li>
				<li>Set the type of the 3rd child element to separator. Set the type of the other child items to radio.</li>
				<li>Name the 5th item 'Toggle Items'. Add four child items to the 5th item. Set each child item to be of type toggle. Set a keyboard accelerator for the 4th element.</li>
				<li>Click OK to commit your changes.</li>
				<li>In the design pane, at your insertion point,  you should see a menu placeholder appear.</li>
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
		
		
		<h3>Menu Testing</h3>

		<p>This page tests core menu look and behavior.  We will conduct other tests for menubar and context menus, this test examines core behavior only.</p>
		
		<p>Tear off menus were given a low priority by UX product teams and will not be implemented in DWPE 2.0.</p>
		
		
		
		<ol>
		 <li>Visit the <b>Preview Area</b>.  A sample menu has been set up for you there. 
            	<ul>
					
					<li>Rollover each top-level menu item and ensure that menus don't appear.</li>
					<li>Click a top-level menu item. Does its menu now appear?</li>
					<li>Now roll your mouse over other top-level menu items. Do menus appear on rollover, without requiring a click first?</li>
					
					
					<li>Open the menu for Menu Item 1. Roll your mouse over its menu items.  Is highlight, expand and collapse applied correctly?</li>
					
					<li>After clicking a menu item are menus dismissed correctly?</li>
					<li>Find and click Radio Group Menu Item 1.3. Is the bullet removed from item 1.2 and correctly placed on item 1.3?  Is the state of these menu items maintained over successive menu calls?</li>
					
					<li>Find and click Toggle Menu Item 2.8 repeatedly. Is the check removed and added from item 2.8 correctly?  Is the state of this menu item maintained over successive menu calls?</li>
					<li>Find and open the submenu for menu item 3.1.  Is the number of menu items shown in this submenu limited to 14 (per usage guideline)?  Do the menu scroll arrows shown on this submenu behave correctly?
					
					<li>Find and click menu item 4.7.  Does a javascript alert dialog appear?  When you dismiss this alert, is the menu dismissed correctly?</li>
					
					<li>Find and click menu item 2.9.  Does the browser navigate to oracle.com?</li>
					
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