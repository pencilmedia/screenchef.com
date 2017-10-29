<?php
		session_start();
		$component_title="DWPE MultiSelectListBox";
		$component_key="DWPE_MultiSelectListBox";
		$owner="Medha Singri";
		$specs=array();

		$specs[0]=array( "label" => "Multi-select Listbox Usage",
						 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/listBoxMulti.html");
		$specs[1]=array( "label" => "Multi-select Listbox Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/multiListBox.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<div id="test-plan">
		
		<h3>Multi-Select List Box Beta Testing</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-multiselectlistbox.png" title='Dreamweaver Multi-Select List Box Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Multi-Select List Box" menu item.  The Multi-Select List Box dialog should appear.</li>
				<li>On the attributes tab enter values for  state, required,width, height,help, etc.  On the Items tab add a few items. Click OK.</li>
				<li>In design mode a multiselectlistbox placeholder will appear at the insertion point. </li>
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
		<h3>Spin Box Alpha Testing</h3>
	
	
		<h3>Multi Select List Box Alpha Testing</h3>
		<p class="note">
		<u>Note!</u> Testing of the individual Multi-select list box only (sans-label).
		</p>		
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
					<li>Verify if selcting "required" stores that information in generated markup's div.</li>
					<li>Verify if Select All "hide" removes it from the preview after commit.</li>
					<li>Modify listbox width and height.</li>
					<li>Verify if adding listbox help behaves as required after commit.</li>
					<li>Modify checkbox value parametes(value, system value, tooltip). Item state changes for individual checkboxes. Choose item type to generate a separator or checkbox.</li>								
					<li>Select 'Disabled' State of the listbox and commit, verify component Disabled state is displayed, conponent should not allow changes.</li>
					<li>Select 'Read-Only' State of the listbox and commit, verify if value of selected checkboxes are displayed. Also verify if label contains a semi-colon, it should be prepended by a \ in the read-only state.</li>
					<li>Select 'Error' State of the listbox and commit, verify component Error state is displayed.</li>
					<li>Select 'Warning' State of the listbox and commit, verify component Warning state is displayed.</li>
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
        <input type="hidden" id="type" value="multiselectlistbox"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Multi-select Listbox Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
															
					 <tr>
						<td class='label'>Listbox State</td>
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
						<td class='label'>Select All</td>
						<td>
							<select id="checkboxall">
								<option value="all-required" selected="1">Show</option>								
								<option value="all-notrequired">Hide</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class='label'>Select All Tooltip</td>
						<td>
							<input type="text" id="selectalltooltip"/>
						</td>
					</tr>
					<tr>
						<td class='label'>Listbox width</td>
						<td><input type="text" id="listboxwidth" style="width:50px"/><span style="vertical-align:top">&nbsp;&nbsp;(% or px)</span></td>
					</tr>
					<tr>
						<td class='label'>Listbox height</td>
						<td><input type="text" id="listboxheight" style="width:50px"/><span style="vertical-align:top">&nbsp;&nbsp;(% or px)</span></td>
					</tr>
					<tr>
						<td class='label'>Listbox Help</td>
						<td><input type="text" id="listboxhelp"/></td>
					</tr>
			   </table>	
			   
			   <div class="editable-tree-container" style="width:250px;">
							<div id="editable-tree" class='editable-tree-panel'  title="Items" fld="items"></div>
						</div>
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generateMultiSelectListBoxMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">				
					</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea id="scratchpad" wrap='off' style="width:100%;height:523px;padding:5px;"  ignore_property="1"></textarea>
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
