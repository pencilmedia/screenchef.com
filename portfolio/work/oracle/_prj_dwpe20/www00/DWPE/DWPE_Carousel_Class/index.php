<?php
		session_start();
		$component_title="DWPE Carousel";
		$component_key="DWPE_Carousel";
		$owner="Medha Singri";
		$specs=array();

		$specs[0]=array( "label" => "Carousel Usage",
						 "url" => "http://blafstaging.us.oracle.com/blafSite/guidelines4/carousel.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	<!-- <script type="text/javascript">
	//hide alignment based on layout selection
	function display_layout(pThis)
	{
		var val = pThis.options[pThis.selectedIndex].value;
		if(val == "horizontal"){
			document.getElementById('object_alignment_vertical').disabled = true;
			document.getElementById('object_alignment_horizontal').disabled = false;
		}
		else{
			document.getElementById('object_alignment_horizontal').disabled = true;
			document.getElementById('object_alignment_vertical').disabled = false;
		}
	}
	</script>-->
</head>

<body>
	
	<div id="test-plan">
		<h3>Carousel Testing</h3>
		<ol>
		<li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>
						Review focus objeect, object title, peripheral objects, filter bar, slider component, object properties container and drop zone.
					</li>
					<li>
						Review styling, spacing and alignment. 
					</li>										
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
           
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Verify if objects draws correctly in the preview area.</li>
					<li>Select/deselect different filter bar components. Verify if they behave as expected.</li>
					<li>Verify if disabling carousel behaves as expected.</li>
					<li>Align the objects from available selection (top, middle, bottom).</li>
					<li>Select/deselect object properties container and drop zone. Verify if they behave as expected.</li>					
					<li>Select/deselect slider. Verify objects behaviour.</li>
					<li>Select/deselect custom toolbar and navigation bar. Verify the behaviour.</li>
					<li>Enter the object number to be set as focus object. Verify if focus and peripheral objects behave properly after the change.</li>
					<li>Each object can be of the kind:
						<ul>
							<li>Image</li>
							<li>URL</li>
							<li>JavaScript</li>
						</ul>
						Make a select in the item's property sheet at the bottom. Commit changes and verify if they behave as expected.
					</li>                 
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
		
        
        <input type="hidden" id="_class" value="DWPE_Carousel_Class"/>
        <input type="hidden" id="type" value="carousel"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Carousel Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					<!-- <tr>
						<td class='label'>Layout</td>
						<td>
							<select id="layout" onChange="display_layout(this);">
                                <option value="horizontal" selected="1">Horizontal</option>
                                <option value="vertical">Vertical</option>
							</select>
						</td>
					</tr> -->
					<tr>
						<td class='label'>Filter Bar: Menubar</td>
						<td>
							<select id="filterbar_menubar">
                                <option value="filterbar-menubar-yes" selected="1">Yes</option>
                                <option value="filterbar-menubar-no">No</option>
							</select>
						</td>
					</tr>	
					<tr>
						<td class='label'>Filter Bar: Toolbar</td>
						<td>
							<select id="filterbar_toolbar">
                                <option value="filterbar-toolbar-yes" selected="1">Yes</option>
                                <option value="filterbar-toolbar-no">No</option>
							</select>
						</td>
					</tr>									
					<tr>
						<td class='label'>State</td>
						<td>
							<select id="carousel_state">
                                <option value="enabled" selected="1">Enabled</option>
                                <option value="disabled">Disabled</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Objects Alignment</td>
						<td>
							<select id="object_alignment_horizontal">
                                <option value="halign-top">Top</option>
                                <option value="halign-middle" selected="1">Middle</option>
                                <option value="halign-bottom">Bottom</option>
							</select>
						</td>
					</tr>
					<!-- <tr>
						<td class='label'>Vertical Objects Alignment</td>
						<td>
							<select id="object_alignment_vertical">
                                <option value="valign-right">Right</option>
                                <option value="valign-middle" selected="1">Middle</option>
                                <option value="valign-bottom">Left</option>
							</select>
						</td>
					</tr> -->
					<tr>
						<td class='label'>Object Properties Container</td>
						<td>
							<select id="carousel_properties_container">
                                <option value="properties-container-yes" selected="1">Yes</option>
                                <option value="properties-container-no">No</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class='label'>Drop Zone</td>
						<td>
							<select id="carousel_drop_zone">
                                <option value="drop-zone-yes" selected="selected">Yes</option>
                                <option value="drop-zone-no">No</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class='label'>Slider</td>
						<td>
							<select id="carousel_slider">
								<option value="carousel-slider-yes" selected="1">Yes</option>								
								<option value="carousel-slider-no">No</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class='label'>Custom Action Toolbar</td>
						<td>
							<select id="carousel_custom_toolbar">
								<option value="custom-toolbar-yes" selected="1">Yes</option>								
								<option value="custom-toolbar-no">No</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class='label'>Multipage Document<br>Navigation Bar</td>
						<td>
							<select id="carousel_navigation_bar">
								<option value="navigation-bar-yes" selected="1">Yes</option>								
								<option value="navigation-bar-no">No</option>
							</select>
						</td>
					</tr>	
					<tr>
						<td class='label'>Focus Object: Page</td>
						<td>
							<input id="focus_object_number" type="text" style="width:25px" value="1"/>
						</td>
					</tr>
			   </table>	
			   
			   <div class="editable-tree-container" style="width:250px;">
							<div id="editable-tree" class='editable-tree-panel'  title="Items" fld="items"></div>
				</div>
			
			
				<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					
				<div style="padding:20px 0px">
					<script type="text/javascript">
						
						//disable/enable object layout options
						//document.getElementById('object_alignment_vertical').disabled = true;
						//document.getElementById('object_alignment_horizontal').disabled = false;
						
						function insert()
						{
							$("#scratchpad").val( DWPE_Carousel.generateCarouselMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">				
					</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea id="scratchpad" wrap='off' style="width:100%;height:400px;padding:5px;"  ignore_property="1"></textarea>
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
