<? 
	//<popup>525,550</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Manage Views","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Manage Views","Programs","","Save","Cancel");
		$ui->addMessage("info","Rename views by typing in a new name. Remove views by selecting the remove checkbox next to the desired view.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic left_space">
			<dl class="field_list column_one" style="width: 60%;">
				<dt><label>Name</label></dt>
				<dd>
					<input id="first_field" type="text" value="All Content" class="long_width" tabindex="1" />
				</dd>
				<dd>
					<input type="text" value="Important Content" class="long_width" tabindex="3" />
				</dd>
				<dd>
					<input type="text" value="All Deliverables" class="long_width" tabindex="5" />
				</dd>
				<dd>
					<input type="text" value="Pending Deliverables" class="long_width" tabindex="7" />
				</dd>
				<dd>
					<input type="text" value="Completed Deliverables" class="long_width" tabindex="9" />
				</dd>
				<dd>
					<input type="text" value="Completed Deliverables" class="long_width" tabindex="11" />
				</dd>
				<dd>
					<input type="text" value="Completed Deliverables" class="long_width" tabindex="13" />
				</dd>
			</dl>
			<dl class="field_list column_two">
				<dt><label>Remove</label></dt>
				<dd>
					<input id="check1" type="checkbox" class="form_selectors" tabindex="2" />
				</dd>
				<dd>
					<input id="check2" type="checkbox" class="form_selectors" tabindex="4" />
				</dd>
				<dd>
					<input id="check3" type="checkbox" class="form_selectors" tabindex="6" />
				</dd>
				<dd>
					<input id="check4" type="checkbox" class="form_selectors" tabindex="8" />
				</dd>
				<dd>
					<input id="check5" type="checkbox" class="form_selectors" tabindex="10" />
				</dd>
				<dd>
					<input id="check6" type="checkbox" class="form_selectors" tabindex="12" />
				</dd>
				<dd>
					<input id="check7 " type="checkbox" class="form_selectors" tabindex="14" />
				</dd>
			</dl>
		</fieldset>
	</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>