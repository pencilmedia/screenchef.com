<?php
		session_start();
		$component_title="DWPE Accordion Class";
		$component_key="DWPE_Accordion_Class";
		$owner="Roy Selig";
		$specs=array();
	
	
		$specs[0]=array( "label" => "Accordion Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/accordion.html");
		$specs[1]=array( "label" => "Accordion Visuals",
		 				  "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/accordion.html");
	
	/*
						
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
	
		<h3>Accordion Testing</h3>
		
		<p>While spec calls for accordion to have overflow, a poll of UX product managers finds that it is 
		    little used in Fusion.  So we will not implement it in the DWPE rendition of accordion.  Consequently,
		    you can create an accordion that has so many panes, or so many panes that are set as inflexible, that
		    the accordion breaks. In accordance with guidelines DWPE leaves this up to the prototyper to resolve,
		    either by reducing number of panes to 5 or fewer and/or by avoiding use of inflexible panes.
		    Please don't file bugs against such issues.
		</p>
		
		<p>
			When an accordion header includes a toolbar the area that the title and toolbar share is split evenly between
			the two elements (when the pane is expanded).  On resize, if there is space contention, we will clip the right 
			edge of the title to accommodate the toolbar. Please don't file bugs against this issue. If you think we should give more than
			50% to title or toolbar, please file a suggestion and provide a rationale.
		</p>
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample accordion has been set up for you there. 
            It has 5 panes. Each pane has size set to 1, meaning space is evenly distributed to all open panels.
            	<ul>
					<li>Open and close each pane. </li>
					<li>Ensure that the expand and collapse behavior is as you'd expect.</li>
					<li>Ensure space is evenly distributed across open panes.</li>
					<li>Verify that when closing pane 4 its toolbar disappears.</li>
					<li>Resize your window.  Verify that on panes having toolbars, toolbars resize and show overflow as expected.</li>
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Set the Size of pane 1 to '0'. In Fusion, this is the definition of an inflexible pane. 
					    It demands as much room as its content needs to display without scrolling. 
					    Guidelines advise against its use, but there are use cases for it so we support.</li>
					<li>Commit your changes</li>
					<li>Verify that pane 1 receives as much height as it needs to paint without scrollbars and that
					    the remaining space is evenly distributed across the other flexible panes.</li>
					
					<hr>
					<li>Delete panes 3, 4 and 5.</li>
					<li>Set the Size of pane 1 to '2'</li>
					<li>Commit your changes</li>
					<li>Verify that pane 1 receives twice as much space as pane 2.</li>
					
					
					
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
		<input type="hidden" id="type" value="accordion"/>
		
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		
		
		
		
		<tr>
			<td>
				
				<!--div>Accordion Panes</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0">
					<tr>
						<td>
							<select id="items"  size="5" subtype="list" 
								class="object-list"
								listController="DWPE_PanelFactory"
								onAdd_AddType="AccordionPanel"
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
					<div id="editable-tree" class='editable-tree-panel'  title="Accordion Panes" fld="items"></div>
				</div>
				
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_PanelFactory.generateAccordionMarkup( collectArguments() ) );
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



</body>
</html>
