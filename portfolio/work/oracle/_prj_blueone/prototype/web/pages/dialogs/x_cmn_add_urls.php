<? 
	//<popup>700,440</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Add URLs","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Add URLs","Part &bull; P01250","Edit rows after editing","Save","Cancel");
		$ui->addMessage("info","Type in URLs to add them. Additional options include specifying the file folder type, adding all files to a single file folder, and editing rows after adding.");
		?>
	</div>
	<div id="content" class="content">
		 <form id="form_dialogs" action="">
			<fieldset class="dynamic fixed_set">
				<dl class="field_list column_one addurls_left">
					<dt><label>Filename</label></dt>
					<dd>
						<input id="first_field" type="text" value="" tabindex="1" class="medium_width" /><a href="#" onclick="" class="button" tabindex="2">Preview</a>
					</dd>
					<dd>
						<input type="text" value="" tabindex="4" class="medium_width" /><a href="#" onclick="" class="button" tabindex="5">Preview</a>
					</dd>
					<dd>
						<input type="text" value="" tabindex="7" class="medium_width" /><a href="#" onclick="" class="button" tabindex="8">Preview</a>
					</dd>
					<dd>
						<input type="text" value="" tabindex="10" class="medium_width" /><a href="#" onclick="" class="button" tabindex="11">Preview</a>
					</dd>
					<dd>
						<input type="text" value="" tabindex="13" class="medium_width" /><a href="#" onclick="" class="button" tabindex="14">Preview</a>
					</dd>
				</dl>
		
				<dl class="field_list column_two addurls_right">
					<dt><label>Description</label></dt>
					<dd >
						<input type="text" value="" tabindex="3" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="6" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="9" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="12" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="15" class="medium_width" />
					</dd>
				</dl>
		
			</fieldset>
			<fieldset class="full">
				<dl class="side_by_side">
						<dt><label>Type:</label></dt>
						<dd>
							<select tabindex="16" class="medium_width">
								<option>File Folder</option>
							</select>
							<span class="single_line"><input id="check6" type="checkbox" class="form_selectors" tabindex="17" /> <label for="check6">Add all files to a single file folder</label></span>
						</dd>
				</dl>
			</fieldset>
		</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>