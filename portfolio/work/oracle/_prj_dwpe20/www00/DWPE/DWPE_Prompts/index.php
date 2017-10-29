<?php
		session_start();
		$component_title="DWPE Prompts";
		$component_key="DWPE_Prompts";
		$owner="Roy Selig";
		$specs=array();
	
		$specs[0]=array( "label" => "Form Layout Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/formLayout.html");
		$specs[1]=array( "label" => "Form Layout Visuals",
		 				  "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/formLayout.html");
	

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
		<h3>Prompt Beta Testing: 6/2/2010</h3>
		
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
		
		<h3>Prompt Beta Testing: 5/26/2010</h3>

		<p>
		<img src="../DWPE_Extension/images/dwpe-dialog-prompt.png" title='Dreamweaver Prompt Dialog'>
		<p>&nbsp;</p>
		</p>

				
		<ol>
            
            
            <li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Prompt" menu item.  The Prompt Dialog should appear.
            	<ul>
            		<li>Set 'Label' to 'Test Label'</li>
            		<li>Set 'Required' to 'No'</li>
					<li>Set 'Style' to 'Stacked'</li>
					<li>Set 'State' to 'Disabled'</li>
					<li>Click OK.</li>
					<li>Verify the new prompt is displayed dimmed, the required marker is absent, that the label is left-aligned within its container. Ensure this is the case at design (DW) and run time (Firefox).</li>
					<li>Delete the ux prompt tag from the page.</li>
				</ul>
			</li>
			
			<li>Reopen the prompt dialog.
				<ul>
					<li>Set 'Label' to 'Test Label'</li>
            		<li>Set 'Required' to 'Yes'</li>
					<li>Set 'Style' to 'Not Stacked'</li>
					<li>Commit your changes. </li>
					<li>Verify the new label is displayed with the required marker next to it and that it is right-aligned within its container. Ensure this is the case at design (DW) and run time (Firefox).</li>
				</ul>	
				
			</li>
			<li>Following the procedure above test each attribute for prompt. 
				The attributes you should test are:
				
				<ul>
						<li>Label</li>
						<li>Definition</li>
						<li>State</li>
						<li>Required</li>
						<li>Style</li>
						<li>Wrap</li>
						
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
		
		<hr>
		
		
		
		<h3>Prompt Alpha Testing</h3>
	
		<ol>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					
					<li>Set 'Required' to 'No'</li>
					<li>Set 'Style' to 'Stacked'</li>
					<li>Set 'State' to 'Disabled'</li>
					<li>Commit your changes. </li>
					<li>Verify the new label is displayed dimmed, the required marker is absent, that the label is left-aligned within its container.</li>
					<hr>
					<li>Modify the label.</li>
					<li>Set 'Required' to 'Yes'</li>
					<li>Set 'Style' to 'Not Stacked'</li>
					<li>Commit your changes. </li>
					<li>Verify the new label is displayed with the required marker next to it and that it is right-aligned within its container.</li>
					
					
					
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
        <input type="hidden" id="type" value="prompt"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

			   <div>Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
			
					 
					<tr>
						<td class='label'>Label</td>
						<td>
							<input id="label" type="text" value="My Label" />
							
						</td>
					</tr>
					
					<tr>
						<td class='label'>Definition</td>
						<td>
							<input id="definition" type="text" value=" " />
							
						</td>
					</tr>
					
					<tr>
						<td class='label'>Style</td>
						<td>
							<select id="style">
								<option value="stacked" selected="1">Stacked (left-aligned)</option>
								<option value=" " >Not Stacked (right-aligned)</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Required</td>
						<td>
							<select id="required">
								<option value="required">Required</option>
								<option value="requires-one">Requires One</option>
								<option value="not-required" selected="1">Not Required</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Wrap</td>
						<td>
							<select id="wrap">
								<option value="wrap">Yes</option>
								<option value=" " selected="1">No</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>State</td>
						<td>
							<select id="state">
								<option value="disabled">Disabled</option>
								<option value=" " selected="1">Enabled</option>
							</select>
						</td>
					</tr>
					
			   </table>
            
			
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generatePromptMarkup( collectArguments() ) );
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
