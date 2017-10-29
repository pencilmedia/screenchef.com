<?php
		session_start();
		$component_title="DWPE Splitter Class";
		$component_key="DWPE_Splitter_Class";
		$owner="Roy Selig";
		$specs=array();
	
	
		$specs[0]=array( "label" => "Splitter Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/splitterBar.html");
	
	/*
		$specs[1]=array( "label" => "Button Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/buttons.html");
		$specs[2]=array( "label" => "Toolbar Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/toolbar.html");
		$specs[3]=array( "label" => "Toolbar Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/toolbar_new.html");
	*/				
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
	
		<h3>Splitter Testing 3/9&nbsp;&nbsp;<input class='print-btn'/></h3>
		
		<ol>
           
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>From the 'Splitter Panels' list select the second panel.</li>
					<li>Set the panel's content to the following URL: http://www.oracle.com</li>
					<li>Commit changes.</li>
					<li>In the preview area, verify that the Oracle website appears in the second panel of your splitter.
					    The site may take a moment to appear.</li>
					<li>Resize splitters and verify they work as expected.</li>
						
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
	
	
		<div  style='color:#999'>
		<h3>Splitter Testing 3/2: Complete!</h3>
		
		
		<p class="note">
			<u>Known Issue</u> The right edge in horizontal splitters and the bottom edge in vertical splitters
			sometimes show an extra 4 pixels of padding. This was added to prevent clipping of the 
			toggle control when the last pane is in a collapsed state.  Researching a better solution.
			<br><br>
			
			<u>Known Issue</u> Content via URL not yet supported.			
			<br><br>
			
			<u>Not a Bug</u> The splitter panels do not include padding around content and that is by design.
			These panels can hold all types of content, some that needs to run the full width of the panel, 
			so we leave it up to the user to add padding to a panel when needed. Users will do this by adding
			an inline style attribute to the corresponding panel DIV tag (style='padding:10px').
			
		</p>
		
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>Open and close each panel by clicking on its toggle control. Did the panel behave as
					expected? Did the toggle button reflect state correctly?</li>
					
					<li>Resize each panel by dragging on its split bar. Did the panels behave as
					expected?</li>
					
					<li>Resize a panel so that it is nearly collapsed (about 15 pixels wide). Does the panel 
					auto-collapse correctly? Did the toggle button reflect state correctly?</li>
					
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Set orientation to horizontal.</li>
					<li>Using the 'Splitter Panels' list delete all existing panels by selecting each panel in the list and pressing the '-' button.
					<li>Now use the '+' to make a two panel splitter.</li>
					<li>Set the first panel to a fixed width of 250px.</li>
					<li>Set the second panel to a relative width of 100%.</li>
					<li>Commit your changes.</li>
					<li>Open and close the panels via toggle button and drag resize.</li>
					<li>Did the panels behave as expected?</li>
					
					<hr>
					<li>Using the 'Splitter Panels' list delete all existing panels by selecting each panel in the list and pressing the '-' button.
					<li>Now use the '+' to make a two panel splitter.</li>
					<li>Choose the first panel and set its toggle attribute to Second Panel.</li>
					<li>Set the state of the second panel to 0 (closed).</li>
					<li>Commit your changes.</li>
					<li>Open and close the panels via toggle button and drag resize.</li>
					<li>Did the panels behave as expected?</li>
					
					<hr>
					<li>Set orientation to vertical.</li>
					<li>Commit your changes.</li>
					<li>Open and close the panels via toggle button and drag resize.</li>
					<li>Did the panels behave as expected?</li>
					
					<hr>
					<li>Set orientation to horizontal.</li>
					<li>Using the 'Splitter Panels' list delete all existing panels by selecting each panel in the list and pressing the '-' button.
					<li>Now use the '+' to make a two panel splitter.</li>
					<li>Choose the first panel and 
						set it to a relative width of 50%.</li>
					<li>Set the second panel to a relative width of 50%.</li>
					<li>Commit your changes.</li>
					<li>Open and close the panels via toggle button and drag resize.</li>
					<li>Resize your browser window.</li>
					<li>Did the panels behave as expected?</li>
					
					
					
					
					
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
		<input type="hidden" id="type" value="splitter"/>
		
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		
		

		
		
		
		<tr>
			<td>
			
				<div>Pane&nbsp;Orientation</div>
				<select id="orientation">
				
				
					<option value='horizontal' selected='1'>Horizontal</option>
					<option value='vertical' >Vertical</option>
					
					
				</select>
				
				<br><br>				
				
			   <!--div>Panes</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0">
					<tr>
						<td>
							<select id="items"  size="5" subtype="list" 
								class="object-list"
								listController="DWPE_PanelFactory"
								onAdd_AddType="SplitterPanel"
								style="width:100%;min-width:180px;height:100px">
						
							</select>
						
						</td>
					</tr>
					<tr>	
						<td>
						
							<div id="items-property-sheet"></div>
							<script type="text/javascript">
								//onready initialize our list
								$(function()
									{
										DWPE_PanelFactory.initEditableObjectList("items");
									}
								);
							</script>
							
						</td>
					</tr>
				</table-->
				
				
				<div class="editable-tree-container" style="width:250px;">
					<div id="editable-tree" class='editable-tree-panel'  title="Splitter Panes" fld="items"></div>
				</div>
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_PanelFactory.generateSplitterMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				
				
				<div align="right" style="float:right">
						<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">
				</div>
				<div align="left">Generated Markup
				
				
					
				</div>
				
				
				
					<textarea id="scratchpad" style="width:100%;height:400px;padding:5px;" ignore_property="1"></textarea>
				
				
					
				
			
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
