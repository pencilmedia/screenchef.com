<?php
		session_start();
		$component_title="DWPE Subsubheaders Class";
		$component_key="DWPE_Subsubheaders_Class";
		$owner="Medha Singri";
		$specs=array();
		$specs[0]=array( "label" => "Sub-subheaders Specification",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/headers.html");
						 
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
		<h3>Sub-subheaders Testing</h3>
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>
						Review icons, spacing and alignment. 
					</li>
					<li>
						Review text styling and alignment.
					</li>
					<li>
						Review tooltips.
					</li>
					<li>
						Review disclosure icon functionality.
					</li>					
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Modify the title.</li>					
					<li>Modify the static help text.</li>
					<li>Select a toolbar.</li>
					<li>Specify an icon (ie: person).</li>
					<li>Select collapsed state.</li>
					<li>Commit your changes. </li>
					<li>Add content to the subheaders panel and click the Update Preview button.</li>
					<li>Did the component behave as expected?</li>
					
					<li>
						Review the property labels.  Does the terminology used make sense to you?
					</li>
					
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
	
	
	


	
	<form id="properties-sheet">
	
	<input type="hidden" id="_class" value="DWPE_PanelFactory_Class"/>
	<input type="hidden" id="type" value="subsubheader"/>
	
	<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>	
	    <tr>
		  <td> 
		  	<div>Sub-subheader</div>			
		  	<table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0">
		
			<tr>
				<td>Title</td>
				<td>
					<input id="label" type="text" maxlength="80" value="Sub-subheader Title"/> 
				</td>
			</tr>
					
			<tr>
				<td>Help&nbsp;Text</td>
				<td>
					<textarea id="helptext" type="text" rows="2" cols="17">Static help text</textarea>
				</td>
				<td>
					<input type="hidden" id="content" value="page-content"/>
				</td>
			</tr>
			<tr>
				<td>Toolbar</td>
				<td>
					<select id="toolbar">						
						<option value="sample-toolbar-short" selected="selected">Short Toolbar</option>
						<option value="sample-toolbar-long">Long Toolbar</option>
						<option value="none">None</option>
					</select>
				</td>
			</tr>
			
			<tr>
				<td>State</td>
				<td>
					<select id="disclosure">											
						<option value="expanded" selected="selected">Expanded</option>
						<option value="collapsed">Collapsed</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>Content Switcher</td>
				<td>
					<select id="choicelist">											
						<option value="choicelist-no" selected="selected">No</option>
						<option value="choicelist-yes">Yes</option>
					</select>
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<div style="padding:20px 0px">
						<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
						<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_PanelFactory.generateSubsubheaderMarkup( collectArguments() ) );
						}
						</script>
					</div>		
				</td>
			</tr>
			</table>
		 </td>
         <td width="100%">
			<div align="right" style="float:right">
				<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">
			</div>
			<div align="left">Generated Markup</div>
				<textarea id="scratchpad" style="width:100%;height:400px;padding:5px;" ignore_property="1"></textarea>
		 </td>
		 </tr>
		</table>
			
	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>

					
				
		<!--ul>
		<li>@Roy: 
			This is the base button class. Initially, Icon button and Text Icon Button should inherit 
			from this class. This will make a good test of my framework and OOP model.
			We must try to keep inheritance shallow though, for performance reasons.  So
			ultimately we may want to model all Text,Icon and Text Icon buttons in one class
			and simply fork the render code based on the style the user has selected.
		</li>
		<li>@Roy: 
			I'm thinking that button has two ways to render itself.  As a button or as a menu item.
			In this way we can keep the definition in one class and just switch the render mode
			when the button has been scooted into the overflow area.
		</li>
		<li>@Roy: 
			Currently the update method does several HTML node manipulations which when scaled will cost
			us in terms of performance.  So we should quickly move to node construction using string
			concatenation, committing all changes as one string inserted into the DOM all at once.
		</li>
		
		
		<li>@Roy: Add qty field and timer to metadata section to enable scaling and performance testing</li>
		<li>@Roy: update() compiles HTML string, render() posts HTML string to screen</li>
		
			
			
	</ul-->

</body>
</html>
