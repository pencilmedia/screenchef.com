<?php
		session_start();
		$component_title="DWPE File Upload";
		$component_key="DWPE_FileUpload";
		$owner="Medha Singri";
		$specs=array();
	
		$specs[0]=array( "label" => "File Upload Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/fileUpload.html");
		$specs[1]=array( "label" => "File Upload Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/fileUpload.html");
		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<div id="test-plan">
		
		
		
		<h3>File Upload Beta Testing</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-file-upload.png" title='Dreamweaver File Upload Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "File Upload" menu item.  The File Upload dialog should appear.</li>
				<li>On the attributes tab enter values for state, required, width and help. Click OK.</li>
				<li>In design mode a fileupload placeholder will appear at the insertion point. </li>
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
		<h3>File Upload Alpha Testing</h3>

		<p class="note">
		<u>Note!</u> Testing of the individual File Upload Only (sans-label).
		</p>		
		<ol>
		<li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>
						Review text box styling, spacing and alignment. 
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
					<li>Verify if file upload draws correctly in the preview area.</li>
					<li>Select required field.</li>					
					<li>Select 'Disabled' State and commit, verify component Disabled state is displayed, button and conponent should not allow changes.</li>
					<li>Select 'Read-Only' State and commit, verify component Read-Only state is displayed, button should not be displayed and conponent should not allow changes.</li>
					<li>Select 'Error' State and commit, verify component Error state is displayed.</li>
					<li>Select 'Warning' State and commit, verify component Warning state is displayed.</li>
					<li>Verify component styling.</li>                    
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
		
        
        <input type="hidden" id="_class" value="DWPE_FormFactory_Class"/>
        <input type="hidden" id="type" value="fileupload"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
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
						<td class='label'>Width</td>
						<td>
							<input id="width" value="177">px
						</td>
					</tr>
					
					<tr>
						<td class='label'>Help</td>
						<td>
							<input id="help" value="">
						</td>
					</tr>
					
			   </table>
            
			
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generateFileUploadMarkup( collectArguments() ) );
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
