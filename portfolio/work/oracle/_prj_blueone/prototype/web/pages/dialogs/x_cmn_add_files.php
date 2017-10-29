<? 		//<popup>700,440</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Add Files","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Add Files","Part &bull; P01250","Edit rows after editing","Save","Cancel");
		$ui->addMessage("info","Browse for files to add. For zipped files, check Unzip to add each file individually, or leave Unzip unchecked to add the zipped file as one file. Additional options include specifying the File Folder type, adding all files to a single file folder, and editing rows after adding.");
		?>
	</div>
	<div id="content" class="content">
		 <form id="form_dialogs" action="">
			<fieldset class="dynamic fixed_set">
				<dl class="field_list column_one addfiles_left">
					<dt><label>Filename</label></dt>
					<dd>
						<input id="first_field" type="file" class="browse long_width" tabindex="1" />
					</dd>
					<dd>
						<input type="file" class="browse long_width" tabindex="4" />
					</dd>
					<dd>
						<input type="file" class="browse long_width" tabindex="7" />
					</dd>
					<dd> 
						<input type="file" class="browse long_width" tabindex="10" />
					</dd>
					<dd>
						<input type="file" class="browse long_width" tabindex="13" />
					</dd>
				</dl>
		
				<dl class="field_list column_two addfiles_right">
					<dt><label>Description</label></dt>
					<dd>
						<input type="text" value="" tabindex="2" class="long_width" />
						<span><input id="check1" type="checkbox" class="form_selectors" tabindex="3" /> <label for="check1">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="5" class="long_width" />
						<span><input id="check2" type="checkbox" tabindex="6" class="form_selectors" /> <label for="check2">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="8" class="long_width" />
						<span><input id="check3" type="checkbox" tabindex="9" class="form_selectors" /> <label for="check3">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="11" class="long_width" />
						<span><input id="check4" type="checkbox" tabindex="12" class="form_selectors" /> <label for="check4">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="14" class="long_width" />
						<span><input id="check5" type="checkbox" tabindex="15" class="form_selectors" /> <label for="check5">Unzip</label></span>
					</dd>
				</dl>
			</fieldset>
		
			<fieldset class="full">
				<dl class="side_by_side">
						<dt><label>Type:</label></dt>
						<dd>
							<select tabindex="16" class="long_width">
								<option>File Folder</option>
							</select>
							<span class="single_line"><input id="check6" type="checkbox" tabindex="17" class="form_selectors" /> <label for="check6">Add all files to a single file folder</label></span>
						</dd>
				</dl>
			</fieldset>
		</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>