<? 
	//<popup>525,500</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Update Content","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Update Content","Source Projects &bull; PRJ00384","","Save","Cancel");
		$ui->addMessage("info","Select the attributes that you want to update. Updating the content may result in changed quantities. The updates will be made throughout the project, RFQs and responses.");
		?>
	</div>
	<div id="content" class="content">
	  <form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side selector_list">
				<dt><label>Content to Update:</label></dt>
						<dd><input type="radio" id="first_field" name="objects" class="form_selectors" value="all objects" checked="checked"  /><label for="first_field">All objects</label></dd>
				<dt class="place_holder">blank</dt>
						<dd><input type="radio" id="selected_objects" name="objects" class="form_selectors" value="selected objects" /><label for="selected_objects">Selected objects</label></dd>
			</dl>
		</fieldset>
		<fieldset>
			<legend><input type="checkbox" value="" id="bom" class="form_selectors" checked="checked" disabled="disabled" /> <label for="bom">BOM and AML</label></legend>
			<dl class="side_by_side selector_list">
				<? $controls->addRadio("AML Changes", "Maintain AML changes,Synchronize AML with Item Master", "", "checked","disabled") ?>
			</dl>
		</fieldset>
		<fieldset class="input_lists">
			<legend><input type="checkbox" value="" id="item_attributes" class="form_selectors" checked="checked" disabled="disabled" /> <label for="item_attributes">Item Attributes</label></legend>
		
				   <ul class="column_one">			 
					 <li><input type="checkbox" value="" id="item_description" class="form_selectors" checked="checked" disabled="disabled" /> <label for="item_description">Description</label></li>
					 <li><input type="checkbox" value="" id="commodity" class="form_selectors" checked="checked" disabled="disabled" /> <label for="commodity">Commodity</label></li>
					 <li><input type="checkbox" value="" id="standard_cost" class="form_selectors" checked="checked" disabled="disabled" /> <label for="standard_cost">Standard Cost</label></li>
				   </ul>
				   <ul class="column_two">
					 <li><input type="checkbox" value="" id="cost" class="form_selectors" checked="checked" disabled="disabled" /> <label for="cost">Cost</label></li>
					 <li><input type="checkbox" value="" id="quote_as" class="form_selectors" checked="checked" disabled="disabled" /> <label for="quote_as">Quote As</label></li>
					 <li><input type="checkbox" value="" id="item_attachments" class="form_selectors" checked="checked" disabled="disabled" /> <label for="item_attachments">Attachments</label></li>
				   </ul>
		
		</fieldset>
		<fieldset class="input_lists">
			<legend><input type="checkbox" value="" id="part_attributes" class="form_selectors" checked="checked" disabled="disabled" /> <label for="part_attributes">Manufacturer Part Attributes</label></legend>
				   <ul class="column_one">
						<li><input type="checkbox" value="" id="part_description" class="form_selectors" checked="checked" disabled="disabled" /> <label for="part_description">Description</label></li>
					</ul>
					<ul class="column_two">
						<li><input type="checkbox" value="" id="part_attachments" class="form_selectors" checked="checked" disabled="disabled" /> <label for="part_attachments">Attachments</label></li>
				   </ul>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	  </form>
	</div>
<? $ui->printPage(); ?>