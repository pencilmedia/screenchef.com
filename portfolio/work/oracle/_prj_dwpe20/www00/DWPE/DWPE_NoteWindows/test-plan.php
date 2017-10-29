<div id="test-plan">
	
	<h3>Note Window & Form Validation Testing 4/13</h3>

		<p>Per your suggestions we have added another client-side validation: phone.  This validation performs a simple test, can the value provided be reduced to at minimum a 10 digit number when 
		formatting characters such as <b>+ ( ) - </b> are removed. You may add the phone validation to a field's class attribute in the same manner described in the 3/30 test plan shown below.
		
		
		<ol>
		 <li>Visit the <b>Preview Area</b>.  A sample two-column form has been set up for you there. 
            	<ul>
					<li>Enter the Phone Number field, add a 10 digit phone number [area code + number]. Use whatever formatting you like.</li>
					<li>Leave the field. Nothing should happen.</li>
					<li>Enter the Phone Number field, add a 7 digit phone number [number without area code] and leave the field.  </li>
					<li>Does the field border change to red?</li>
					<li>Re-enter the field.  Does the error note window show correctly?</li>
					<li>Correct the problem and leave the field. Does the error condition clear?</li>
					
					
					
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
	
	<div style='color:#999'>
		<h3>Note Window & Form Validation Testing 4/6: Complete!</h3>

		<p>Per your suggestions we have added several client-side validations. They are: zip, email and pos-number.  You may add these validations in the same manner described in the 3/30 test plan shown below.</p>
		
		
		
		
		<ol>
		 <li>Visit the <b>Preview Area</b>.  A sample two-column form has been set up for you there. 
            	<ul>
					<li>Enter the Zip Code field, add a 4-digit number and leave the field.  </li>
					<li>Does the field border change to red?</li>
					<li>Re-enter the field.  Does the error note window show correctly?</li>
					<li>Correct the problem and leave the field. Does the error condition clear?</li>
					
					<hr>
					
					<li>Enter the Email field, add an email address that does not include the @ symbol and leave the field. </li>
					<li>Does the field border change to red?</li>
					<li>Re-enter the field.  Does the error note window show correctly?</li>
					<li>Correct the problem and leave the field. Does the error condition clear?</li>
					
					<hr>
					
					
					<li>Enter the Positive Number field, add a negative number and leave the field. </li>
					<li>Does the field border change to red?</li>
					<li>Re-enter the field.  Does the error note window show correctly?</li>
					<li>Correct the problem and leave the field. Does the error condition clear?</li>
					
					<hr>
					
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
	
	
	
		<h3>Note Window Testing 3/30: Complete!</h3>

		<p>
		This page tests note window look and behavior.  We model In-Field Help and Component-level Error messages which are
		two features on forms that use note windows to communicate pertinent information to the user.
		</p>
		
		<p>
			The In-Field Help Note Window appears as the user enters the field. It disappears when the user leaves the field. 
			We use in-field help notes to clarify the information that users should enter into editable fields.
		</p>
		
		<p>
			The Component-level Error Message Note Window appears when the user enters a field that has failed validation.  
			The message disappears when the user leaves the field. The message informs the user how to correct the problem. 
		</p>
		
		<p>
		As part of supporting note window we had to design a convention on form elements to supply help text.  The convention is to set a 'help' attribute on the field. 
		For example, if I add a help attribute to the text field input tag and assign it the value 'Example: In-Field Help' the text 'Example: In-Field Help Note' 
		will appear in a note window when the user enters the field.
		<p>
		<code>
			&lt;input class="dwpe-textbox  number" value="My Text" <b style='color:#cc0000'>help="Example: In-Field Help Note"</b>/&gt;
		</code>
		</p>
		
		If no help attribute is defined for a field, no note window appears. Prototypers can specify help on as many fields as they need to.
		</p>
		
		<p>
		Also as part of supporting note window, we had to design a simple client-side input validation framework.  We currently support two validations: number and required. 
		"number" tests if the value provided is numeric.  "required" tests if the field has a value specified at all.  The convention for forcing a field 
		to validate against these rules is to pass the validator's name into the CSS class of the field. For example, if I add the class 'number' 
		into the text field's input tag markup, the validator for number will run when the user exits that field. 
		</p>
		
		<p>
		<code>
			&lt;input class="dwpe-textbox  <b style='color:#cc0000'>number</b>" value="My Text" help="Example: In-Field Help Note"/&gt;
		</code>
		</p>
		
		<p>
		The framework will support a small
		set of simple validations, ones that can be run on the client without requiring business logic. if you know of a client-side validation
		that would be useful to have in a prototyping kit, post a suggestion in feedback. Bear in mind that this is a prototyping environment so
		the kinds of validations we seek would support realism in testing  prototypes in the lab.  Prototypers can create 
		validations of their own, the DWPE will maintain only the most common validations.
		
		</p>
		
		
		<p>
			Since not all fields are required to have In-Field Help notes defined, some fields in the form above don't show help notes.  Fields that don't define help are: Spinbox 2, Spinbox 5, Radiogroup 1 and Radiogroup 2.
		
		</p>
		
		
		<ol>
		 <li>Visit the <b>Preview Area</b>.  A sample two-column form has been set up for you there. 
            	<ul>
					<li>Tab into the form.  </li>
					<li>When you reached Spinbox 1, did a note window paint below and to the right of the field?</li>
					<li>Tab out of the field.</li>
					<li>Did the note window disappear?</li>
					<hr>
					<li>Tab into Spinbox 2.</li>
					<li>Did a note window paint above and to the right of the field?</li>
					<li>Type the value 'abc' and tab out of the field.</li>
					<li>Did the field border change to red to reflect a failed validation?</li>
					<li>Tab back into Spinbox 2.  Did an error note window paint above and to the 
						right of the field informing you of how to correct the problem?</li>
					<li>Enter the number 5 in the field and tab out.</li>
					<li>Did the red borders on the Spinbox 2 field go away?</li>
					<hr>
					<li>Tab into Text Field 2.  Did a note window paint above and to the right of the field?</li>
					<li>Remove the value from Text Field 2.  Tab out of the field. </li>
					<li>Did the note window disappear?</li>
					<li>Did the field border change to red to reflect a failed validation?</li>
					<li>Tab back into Text Field 2. </li>
					<li> Did an error note window paint above and to the 
						right of the field informing you of how to correct the problem?</li>
					<li>Provide a value and tab out.</li>
					<li>Did the red borders on the Text Field 2 field go away?</li>
					<hr>
					<li>Tab into Spinbox 4</li>
					<li>Remove its value and tab out.</li>
					<li>Did the field border change to red to reflect a failed validation?</li>
					<li>Tab back into Spinbox 4. </li>
					<li> Did an error note window paint above and to the 
						right of the field informing you of how to correct the problem?</li>
					<li> Did compound error messages show in a single note window: one for requires number and one for requires value?</li>
					<li>Note: we realize that a compound error message of this kind is not desirable.  We just needed a way to test compound messages.</li>
					<hr>
					<li>In your browser, move to another browser tab then return to this tab. </li>
					<li>When you returned to this browser tab, was the focus on the field correctly restored?</li>
					<li>Was the error note window correctly restored and attached to the field?</li>
					<hr>
					<li>Click the link called "Open dialog".</li>
					<li>Force errors in that dialog's form elements and verify that note windows behave as expected.</li>
					<li>Move the dialog to the right edge of the preview area and give focus to Text Field 2 in that dialog.</li>
					<li>Does the help note window paint to the left of the field with its cone pointing right, toward the field?</li>
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