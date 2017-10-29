<?php
		session_start();
		$component_title="DWPE Headers Class";
		$component_key="DWPE_Headers_Class";
		$owner="Medha Singri";
		$specs=array();
		$specs[0]=array( "label" => "Headers Specification",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/headers.html");
						 
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
		<h3>Header Testing: 7/14</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-header.png" title='Dreamweaver Header Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page. Set the CSS class of the body tag to 'SecondaryRegion'.</li>
				<li>From the DWPE2 Insert Bar, click the panels icon <img src="../DWPE_Extension/images/dwpe-icon-panels.png" valign="middle"> and select Page Header.  The Page Header dialog should appear.</li>
				<li>Specify a title, help text and find a reference to a toolbar, if you defined one in an earlier test.</li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				<li>We place lorem ibsum content into the body of the panel.  It is expected that you will replace it with content of your choice.</li>
				<li>Note that panel borders may butt up against the window edge when previewing in Firefox. Once shell is implemented this will not be the case.</li>  
				
				<li>Note that the page header dialog does not support reentry. Templates are also not supported.</li>
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
	
		<h3>Headers Testing&nbsp;<input class='print-btn'/></h3>
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>
						Review icons spacing and alignment. 
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
					<li>Modify the label.</li>					
					<li>Modify the static help text.</li>
					<li>Select a toolbar.</li>
					<li>Select if you would like to see the header icon or not.</li>
					<li>Commit your changes.</li>
					<li>Add content to the headers page.</li>
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
	</div>
	
	
	


	
	<form id="properties-sheet">
	
	<input type="hidden" id="_class" value="DWPE_PanelFactory_Class"/>
	<input type="hidden" id="type" value="pageheader"/>
	
	<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>	
	    <tr>
		  <td> 
		  	<div>Page Header</div>			
		  	<table cellpadding='0' cellspacing='0' style="border:1px solid #999999;">
		
			
			
			<tr>
				<td>Title</td>
				<td>
					<input id="label" type="text" maxlength="80" value="Page Header Title"/> 
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
						<option value="none" selected="selected">None</option>
						<option value="sample-toolbar-short">Short Toolbar</option>
						<option value="sample-toolbar-long">Long Toolbar</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>Icon</td>
				<td>
					<input id="icon" type="text"/>						
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
							$("#scratchpad").val( DWPE_PanelFactory.generatePageheaderMarkup( collectArguments() ) );
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
