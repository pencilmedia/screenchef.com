<? 
	//<popup>525,325</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Define Routing Specifications View","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Define Routing Specifications","CTO &bull; CTO00021","","Save","Cancel");
		$ui->addMessage("info","Specify where, what, and in what format to send the transfer order.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
			<dt class="required" title="Destination is required"><span>*</span><label for="first_field">Destination:</label></dt>
			<dd>
				<select id="first_field" class="long_width">
					<option value="" selected="selected">Development</option>
					<option value="">Production</option>
					<option value="">Training</option>
				</select>
			</dd>
				<dt title="Filters is required"><label for="ui_control_id_45ef6871587916.52679292"><span>*</span>Filters:</label></dt>
				<dd class="large_textbox">
					<textarea id="ui_control_id_45df28b2635587.01776734" class="long_width"></textarea>
					<a href="#" ui_control_id_45df28b2635f77.71469002 class="button"><span><em class="iconic view_details">&nbsp;</em></span></a>
				</dd>
				<dt><label for="ui_control_id_45ef6871587ec7.64880430">Output Format:</label></dt>
				<dd>
					<select id="ui_control_id_45ef6871587ec7.64880430" class="medium_width">
						<option value="aXML">aXML</option>
						<option value="PDX">PDX</option>
					</select>
				</dd>
				<dt><label for="ui_control_id_45ef6871588371.92740712">Site:</label></dt>
				<dd>
					<select id="ui_control_id_45ef6871588371.92740712" class="medium_width">
						<option value="all" selected="selected">All</option>
						<option value="Austin">Austin</option>
						<option value="Boston">Boston</option>
						<option value="Milwaukee">Milwaukee</option>
						<option value="Minneapolis">Minneapolis</option>
						<option value="Nagoya">Nagoya</option>
						<option value="Sacramento">Sacramento</option>
						<option value="Saratoga">Saratoga</option>
						<option value="Stuttgart">Stuttgart</option>
						<option value="Taipei">Taipei</option>
						<option value="Xiamen">Xiamen</option>
					</select>
				</dd>
				<dt><label for="ui_control_id_45ef6871588803.01442438">Language:</label></dt>
				<dd>
					<select id="ui_control_id_45ef6871588803.01442438" class="medium_width">
						<option value="English" selected="selected">English</option>
						<option value="French">French</option>
						<option value="German">German</option>
						<option value="Japanese">Japanese</option>
						<option value="Simplified Chinese">Simplified Chinese</option>
						<option value="Traditional Chinese">Traditional Chinese</option>
					</select>
				</dd>
			</dl>
		</fieldset>
</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>