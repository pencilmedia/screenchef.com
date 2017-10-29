<?php
		session_start();
		$component_title="DWPE Note Windows";
		$component_key="DWPE_NoteWindows";
		$owner="Roy Selig";
		$specs=array();
	
		
		$specs[0]=array( "label" => "Secondary Windows Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/windows.html");
		$specs[1]=array( "label" => "Secondary Windows Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/windows_new.html");
		$specs[2]=array( "label" => "Messaging Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/messaging.html");
		$specs[3]=array( "label" => "Messaging",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/messaging.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_NoteWindows/test-plan.php'?>
	

	
	
	


	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_WindowFactory_Class"/>

		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

			
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="addContentToPreview('#scratchpad')">				
					</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea wrap="off" id="scratchpad" style="width:100%;height:400px;padding:5px;"  ignore_property="1">
					
<form>
	<table  cellpadding='0' cellspacing='0' class='dwpe-form-layout'>
		<tr>
			<td >
				<table cellpadding='0' cellspacing='0' class='dwpe-form-layout-inner not-stacked'>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required ' />Spinbox 1</div></td>
						<td class='r2'><ux class="dwpe-spinbox  not-required" current="5"  min="1"  max="10"  increment="1" help="Example: 1 to 10"/></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-required '  title='Required' />Spinbox 2</div></td>
						<td class='r2'><ux class="dwpe-spinbox  required" current="5"  min="1"  max="10"  increment="1" /></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required '  title='Required' />Zip Code</div></td>
						<td class='r2'><input class="dwpe-textbox  zip not-required" value="My Text" help="Example: I'm a field that accepts 5 digit zip codes only"/></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-required ' />Email Address</div></td>
						<td class='r2'><input class="dwpe-textbox  email required" value="My Text" help="Example: I'm a field that requires an email address"/></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required ' />Positive Number</div></td>
						<td class='r2'><input class="dwpe-textbox  pos-number not-required" value="My Text" help="Example: I'm a field that accepts positive numbers only"/></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required ' />Phone Number</div></td>
						<td class='r2'><input class="dwpe-textbox  phone not-required" value="My Text" help="Example: I'm a field that accepts phone numbers only"/></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt disabled    '><span class='icons ico-required '  title='Required' />Spinbox 3</div></td>
						<td class='r2'><ux class="dwpe-spinbox disabled required" current="5"  min="1"  max="10"  increment="1" /></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-required '  title='Required' />Spinbox 4</div></td>
						<td class='r2'><ux class="dwpe-spinbox  required" current="5"  min="1"  max="10"  increment="1"help="Example: In-Field Help Note" /></td>
					</tr>
					
					<tr>
						<td></td>
						<td class='r2'><a class="open-window" href="javascript:void(0);" url="/DWPE/DWPE_SampleContent/sample_form_dialog.htm" help="I'm a note window placed upon a link">Open dialog...</a></td>
					</tr>
					
					
				</table>
			</td>
			<td >
				<table cellpadding='0' cellspacing='0' class='dwpe-form-layout-inner not-stacked'>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-required '  title='Required' />Textarea 1</div></td>
						<td class='r2'>&lt;textarea class='dwpe-textarea  required' help="Example: In-Field Help Note">Lorem ipsum dolor sit amet&lt;/textarea></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required ' />Spinbox 5</div></td>
						<td class='r2'><ux class="dwpe-spinbox  not-required" current="5"  min="1"  max="10"  increment="1" /></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt disabled    '><span class='icons ico-required '  title='Required' />Checkbox 1</div></td>
						<td class='r2'><div class="dwpe-checkbox required">
				<input id="checkbox-id0" class="check-box disabled" type="checkbox" disabled="disabled" /><label for="checkbox-id0" class="checkbox-label disabled">Value of the Checkbox</label><br/></div></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required ' />Radiogroup 1</div></td>
						<td class='r2'><a href="javascript:void(0);" class="dwpe-radiogroup not-required" help="This is help for Radiogroup 1">
				<input id="radiogroup-id0" name="radiogroup" class="radio-group " type="radio"/><label for="radiogroup-id0" class="radiogroup-label">Value of Radio group 1</label><br/>
				<input id="radiogroup-id1" name="radiogroup" class="radio-group " type="radio"/><label for="radiogroup-id1" class="radiogroup-label">Value of Radio group 2</label><br/></a></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt read-only    '>Textarea 2</div></td>
						<td class='r2'>&lt;textarea class='dwpe-textarea read-only' disabled='disabled'  help="Example: In-Field Help Note">Lorem ipsum dolor sit amet&lt;/textarea></td>
					</tr>
					<tr>
						<td><div class='dwpe-prompt     '><span class='icons ico-not-required ' />Radiogroup 2</div></td>
						<td class='r2'><div class="dwpe-radiogroup not-required">
				<input id="radiogroup-id0" name="radiogroup" class="radio-group " type="radio"/><label for="radiogroup-id0" class="radiogroup-label">Value of Radio group 1</label><br/>
				<input id="radiogroup-id1" name="radiogroup" class="radio-group " type="radio"/><label for="radiogroup-id1" class="radiogroup-label">Value of Radio group 2</label><br/></div></td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</form>
											
					</textarea>
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
