<div id="test-plan">
	<p class="note"><u>Note!</u> Testing of Horizontal and Button Bar Train only.</p>		
    <ol>
        <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            <ul>
                <li>Review Train styling, spacing and alignment.</li>
                <li>Review text styling and alignment.</li>										
                <li>Refer to the Specifications tab for guidance.</li>					
            </ul>
        </li>
        <li><strong>Component Level</strong>
            <ul>
                <li>Verify if train steps draw correctly in the preview area.</li>
                <li>Change component State to Disabled commit.  Verify the train is disabled steps unable to be selected.</li>
                <li>Change component State to Normal and Process set to Sequential.  Verify new steps are selectable only after previoius step has been visited.</li>
				<li>Verify visted steps are selectable at any time.</li>
                <li>Change component State to Normal and Process set to Non-Sequential.  Verify new steps are selectable at any time.</li>
                <li>Change the component position to "Bottom"  Verify Train displays below content.</li>
                <li>Change the component position to "Top"  Verify Train displays above content.</li>
                <li>Resize browser window.  Verify hidden steps display properly in the overflow window.</li>
                <li>Enter a URL into the Parent Train URL (e.g. http://oracle.com).  Verify the Parent Train Icons are displayed and the page loaded when the icons are clicked.</li>
                <li>Change component Button Bar propert to Yes.  Verify train is replaced with Back / Next buttons.</li>
                <li>Navigate the train selecting Back and Next.  Verify the steps are displayed as expected</li>
                <li>Enter a javascript command or URL value into the Submit Command textbox.  Verify the button is displayed and command or URL displayed when clicked.</li>
                <li>Enter a javascript command or URL value into the Finish Command textbox.  Verify the button is displayed and command or URL displayed when clicked.</li>
                <li>Enter a javascript command or URL value into the Save Command textbox.  Verify the button is displayed and command or URL displayed when clicked.</li>
                <li>Enter a javascript command or URL value into the Exit Command textbox.  Verify the button is displayed and command or URL displayed when clicked.</li>
                <li>Enter a javascript command or URL value into the Cancel Command textbox. Verify the button is displayed and command or URL displayed when clicked.</li>
             </ul>
        </li>
        <li><strong>Individual Steps</strong>
          	<ul>
            	<li>Select a Train Step and change its name and commit.  Verify the new name is displayed.</li>
            	<li>Select a Train Step and update its icon to Warning, Error, Complete or Information and commit.  Verify the warning or error icon is displayed for the selected step.</li>
            	<li>Select a Train Step and specify a URL (e.g. http://www.oracle.com) for its Content Source.  Verify the URL specified is displayed when step is selected.</li>
                <li>Change component Process to Sequential.  Select a step in the middle of train and set Sequential Override to Yes. Verify new steps are selectable only after previoius step has been visited <strong>Until</strong> the sequential override step is visited.  Once this step is visited train process should become Non-Sequential and all steps should be enabled.</li>
				<li>Tooltips default to "Step 1 of X" Select any Step and change its Tooltip property and commit.  Verify the new value is specified when hovering over the step.</li>
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