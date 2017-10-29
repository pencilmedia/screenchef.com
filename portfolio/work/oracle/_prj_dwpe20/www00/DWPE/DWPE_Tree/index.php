<?php
		session_start();
		$component_title="DWPE Trees";
		$component_key="DWPE_trees";
		$owner="Ray Waldin, Roy Selig";
		$specs=array();
		$specs[0]=array( "label" => "Tree Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/tree.html");
		$specs[1]=array( "label" => "Tree Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/tree.html");

		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
  <script src="/DWPE/_jquery/plugins/jqaxes.js" type="text/javascript"></script>
</head>

<body>



	
	
	
	
	<?php include 'test-plan.php'?>
	

	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_TreeFactory_Class"/>
        <input type="hidden" id="type" value="tree"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>
            <div>Tree</div>
                <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">

            		<tr>
                    	<td align="right">Selection</td>
                        <td>
                        	<select id="selection">
                            	<option value="singleselect">Single select</option>
                            	<option value="multiselect">Contiguous multi-select</option>
                            	<option value="noncontiguousmultiselect" selected='selected'>Non-contiguous multi-select</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                    	<td align="right">Menu</td>
                        <td>
                        	<select id="menu">
                            	<option value="none" selected='selected'>None</option>
                            	<option value="/DWPE/DWPE_SampleContent/sample_tree_short_menu.htm">Short Menu</option>
                            	<option value="/DWPE/DWPE_SampleContent/sample_tree_long_menu.htm">Long Menu</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                    	<td align="right">Toolbar</td>
                        <td>
                        	<select id="toolbar">
                            	<option value="none" selected='selected'>None</option>
                            	<option value="sample-tree-toolbar-short">Short Toolbar</option>
                            	<option value="sample-tree-toolbar-long">Long Toolbar</option>
                            </select>
                        </td>
                    </tr>
            		<tr>
                    	<td align="right">Lazy evaluation</td>
                        <td>
                        	<input id="lazy" type="checkbox" value="true"/>
                        </td>
                    </tr>
            		<tr>
                    	<td align="right">Width</td>
                        <td>
                        	<input id="width" value="100%"/>
                        </td>
                    </tr>
            		<tr>
                    	<td align="right">Height</td>
                        <td>
                    	    <input id="height" value="100%"/>
                        </td>
                    </tr>
               </table>
				<div class="editable-tree-container" style="width:300px;">
					<div id="test-tree" class='editable-tree-panel  hierarchical'  title="Tree Items" fld="items"></div>
				</div>

				
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_TreeFactory.generateMarkup( collectArguments() ) );
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
