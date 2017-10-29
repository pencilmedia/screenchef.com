<?php
		session_start();
		$component_title="DWPE Tables";
		$component_key="DWPE_Tables";
		$owner="Roy Selig";
		$specs=array();
		$specs[0]=array( "label" => "Table Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/table.html");
		$specs[1]=array( "label" => "Table Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/table.html");

		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	
	
	
	
	<?php include 'test-plan.php'?>
	

	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_TableFactory_Class"/>
        <input type="hidden" id="type" value="table-read-only"/>
		
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td style='height:100%'>
				<table  style="border:1px solid #999999;background:#e0e0e0; width:100%;height:100%">
					<tr>
						<td class='label'>Mode</td>
						<td><select id="type">
								<option value='read-only' selected='1'>Read Only</option>
								<option value='direct-edit' _selected='1'>Direct Edit</option>
								<option value='click-to-edit' _selected='1'>Click-To-Edit</option>
							</select>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Row&nbsp;Header</td>
						<td><select id="row_header">
								<option value='none' selected='1'>None</option>
								<option value='visible' _selected='1'>Visible</option>
								<option value='numbered' selected='1'>Numbered</option>
							</select>
						</td>
					</tr>
					
					
					<tr>
						<td class='label'>Row&nbsp;Banding</td>
						<td><select id="row_banding">
								<option value=''>None</option>
								<option value='row-band-even' selected='1'>Even Rows</option>
								<option value='row-band-odd'>Odd Rows</option>
								
							</select>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Column&nbsp;Banding</td>
						<td><select id="column_banding">
								<option value=' ' selected='1'>None</option>
								<option value='col-band-even'>Even Columns</option>
								<option value='col-band-odd'>Odd Columns</option>
								
							</select>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Grid Lines</td>
						<td><select id="grid_lines">
								<option value=' ' selected='1'>Vertical & Horizontal</option>
								<option value='gridlines-v'>Vertical Only</option>
								<option value='gridlines-h'>Horizontal Only</option>
								
								
							</select>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Number&nbsp;of&nbsp;Rows</td>
						<td><input id="num_rows" type="text" value="50"/>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Number&nbsp;of&nbsp;Visible&nbsp;Rows</td>
						<td><input id="num_visible_rows" type="text" value="10"/>
						</td>
					</tr>
					
					
					<tr>
						<td class='label'>Totaling</td>
						<td><select id="totaling" style='width:75px;'>
								<option value='none' selected='1'>None</option>
								<option value='sub-grand' _selected='1'>Sub & Grand Totals</option>
								<option value='grand' _selected='1'>Grand Total Only</option>
							</select>
							Frequency:
							<input id="totaling_frequency" value="5" type="text" style='width:20px;'>
						</td>
					</tr>
					
					
					 <tr>
						<td class='label'>Menubar</td>
						<td>
							<select id="menubar">
								<option value="none">None</option>
								<option value="table-toolbar" selected="1">Table Menubar</option>
							</select>
						</td>
					</tr>
					
					 <tr>
						<td class='label'>Toolbar</td>
						<td>
							<select id="toolbar">
								<option value="none">None</option>
								<option value="table-toolbar" selected="1">Table Toolbar</option>
							</select>
						</td>
					</tr>
					
					
					<tr>
						<td class='label'>QBE</td>
						<td><select id="qbe">
								<option value='show' selected='1'>Visible</option>
								<option value='hide' _selected='1'>Hidden</option>
							</select>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Column&nbsp;Footer</td>
						<td><select id="column_footer">
								<option value='visible' _selected='1'>Visible</option>
								<option value='hidden' selected='1'>Hidden</option>
							</select>
						</td>
					</tr>
					
					
					<tr>
						<td class='label'>Statusbar</td>
						<td><select id="statusbar">
								<option value='visible' selected='1'>Visible</option>
								<option value='hidden' _selected='1'>Hidden</option>
							</select>
						</td>
					</tr>
					
					
					
				</table>


			</td>
			<td>


				<div class="editable-tree-container" style="width:100%;">
					<div id="test-tree" class='editable-tree-panel  hierarchical'  title="Columns" fld="items"></div>
				</div>

				
			
				
			
			
			</td>
			
			
			
		</tr>
		
		<tr>
			<td colspan='2'>
				<div style="padding:0px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_TableFactory.generateMarkup( collectArguments() ) );
						}
					</script>
				</div>
			</td>
		</tr>
		
		
	
		
		<tr>
			<td style="width:100%;height:200px" colspan="2">
				<div align="right" style="float:right">
					<a href='#preview'><input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()"></a>				
				</div>
				
				
				
				<div align="left">Generated Markup</div>
				
				<textarea id="scratchpad" style="width:100%;height:100%;padding:5px;"  ignore_property="1"></textarea>
			</td>
			
			
		</tr>
		
		</table>
			
	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>



</body>
</html>
