<?php
		session_start();
		$component_title="DWPE Form Layout";
		$component_key="DWPE_FormLayout";
		$owner="Roy Selig";
		$specs=array();
		
		$specs[0]=array( "label" => "Form Layout Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/formLayout.html");
		$specs[1]=array( "label" => "Form Layout Visuals",
		 				  "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/formLayout.html");
	
		/*
		$specs[0]=array( "label" => "Tabs Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/tabs.html");
		$specs[1]=array( "label" => "Tabs Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/tabs_new.html");
		*/
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
	
	<h3>Form Builder Beta Testing: 6/16/2010</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-form-builder.png" title='Dreamweaver Form Builder Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Form Builder" menu item.  The Form Builder dialog should appear.</li>
				<li>On the attributes tab enter values for number of rows and columns and for prompt position. 
				<li>Set Fields to a specific value.  You may tell the dialog to generate a form without fields, with just text fields, or with a smapling of fields.</li> 
				<li>Click OK.</li>
				<li>In design mode a table should display at the insertion point.  The table will be filled with rows and columns per your dialog choices. The rows and columns will be filled with sample prompts and field components. You can copy, paste and cut these items and use dialog reentry to tailor this form to your need.</li>
				<li>Preview the page in Firefox.  Does the form and its components render correctly? Do the controls behave correctly?</li>			
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
		<h3>Form Builder Alpha Testing</h3>

		<p>
		
			<p>
				This test page serves two purposes. With it we can observe how our form elements behave in a well-elaborated,
				multi-column form layout. We can also use it to model various form layouts, varying number of rows, columns and prompt
				styles to fit our need. 
			</p>
			
			
			
			<p>
				This test page inserts form components at random and varies their state as well. However unlikely
				some of this output is, randomization provides a quick way to validate individual component behavior.
				Even though you may think the output unlikely please don't bother to log bugs against such issues. 
			</p>
			
			
			
			<p>
				If you observe a problem with a particular form component as it is laid out in this page, please
				log a bug in that component's test page.  For example, if File Upload exhibits a problem, visit File Upload's
				test page and log your bug there.
								
			</p>
			
			
			
			<p>
				Only log a bug against this test page if you think the bug is related to form layout as described in the
				test plan below.				
			</p>
			
			<p>
				Note that we follow the Fusion way of composing forms, which is to lay out fields in columns first.
				As a consequence, when looking across columns you are not assured of vertical alignment of fields. Please
				don't log bugs against this issue. We are just following Fusion.
			</p>
			
			
		
		</p>
		
		<ol>
		 <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Modify the number of rows displayed (any number you like).</li>
					<li>Modify the number of columns dislayed (1,2,3 or 4).</li>
					<li>Commit your changes. </li>
					<li>Verify that the form displays as expected with fields appearing to the left of form components.</li>
					<hr>
					<li>Change Prompts to 'Stacked'</li>
					<li>Commit your changes. </li>
					<li>Verify that the form displays as expected with fields appearing above form components.</li>
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
        <input type="hidden" id="type" value="form-layout"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
			
					 <tr>
						<td class='label'>Rows</td>
						<td>
							<input id="rows" type="text" value="6" />
							
						</td>
					</tr>
					 <tr>
						<td class='label'>Columns</td>
						<td>
							<select id="columns">
								<option value='3' selected='1'>3</option>
								<option value='2'>2</option>
								<option value='1'>1</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Prompts</td>
						<td>
							<select id="prompts">
								<option value='not-stacked' selected='1'>Not Stacked (Right-aligned)</option>
								<option value='stacked'>Stacked (Left-aligned)</option>
							</select>
							
						</td>
					</tr>
					
					<tr>
						<td class="label">Fields</td>
						<td><select class="fld" id="fields">
								<option value='prompts-only'>Prompts with No Fields</option>
								<option selected='1' value='text-fields'>Prompts with Text Fields</option>
								<option value='sample-fields'>Prompts with Sample Fields</option>
							</select>
						</td>
					</tr>
					
			   </table>
            
			
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generateFormMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onclick="commitToPreview()">				
				</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea wrap='off' id="scratchpad" style="width:100%;height:400px;padding:5px;"  ignore_property="1"></textarea>
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
