<?php
		session_start();
		$component_title="DWPE UI Shell";
		$component_key="DWPE_UI_Shell";
		$owner="Roy Selig";
		$specs=array();
	
	/*
		$specs[0]=array( "label" => "Button Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/button.html");
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

		<!--h3>Shell Testing TBD</h3>
		
		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					
					
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
		</ol-->
	
	</div>
	
	
	


	
	<form id="properties-sheet">

	
		<input type="hidden" id="_class" value="DWPE_PanelFactory_Class"/>
		<input type="hidden" id="type" value="splitter"/>
		
		<!--table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		
		
		
		
		<tr>
			<td>
				
				<div>Splitter Panels</div>
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
				</table>
			
			
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
		
		</table-->
		
		
		
	<div align="right" style="float:right">
		<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">
	</div>	
	<div align="left">
	
		
		<input class="ui-state-default ui-corner-all" type="button" value="Shell 1" onClick="addContentURLToPreview('shell1.htm')">
		&nbsp;
		<input class="ui-state-default ui-corner-all" type="button" value="Shell 2" onClick="addContentURLToPreview('shell2.htm')">
		&nbsp;
		<input class="ui-state-default ui-corner-all" type="button" value="Shell 3" onClick="addContentURLToPreview('shell3.htm')">
		
	
	</div>	

	<textarea id="scratchpad" style="width:100%;height:400px;padding:5px;" ignore_property="1">


	
	</textarea>
				
				
		
		
		
			
	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>



					





</body>
</html>
