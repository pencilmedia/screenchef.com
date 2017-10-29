<? 
	//<popup>525,600</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create New","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
<script type="text/javascript">
function doSave()
	{
		var msg = document.getElementById("page_message");
		var err = document.getElementsByTagName("input");

		msg.innerHTML = 'You have not filled out all the required fields.';
		msg.className = 'message error';
		
	for (var i=0; i<err.length; i++) {
	if (err[i].className.match("_error")) {
		err[i].className = 'form_error'; 
		getLabel(this);
		getTextarea(this);
		}
	}	
}

function getTextarea() {
	var errtarea = document.getElementsByTagName("textarea");
	
	for (var i=0; i<errtarea.length; i++) {
	if (errtarea[i].className.match("_error")) {
		errtarea[i].className = "form_error"; 
		}
	}	
}

function getLabel() {
	var errlabel = document.getElementsByTagName("label");
	
	for (var i=0; i<errlabel.length; i++) {
	if (errlabel[i].className.match("_error")) {
		errlabel[i].className = "form_error_label"; 
		}
	}	
}
</script>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create New","Activities","Continue creation in wizard","Save","Cancel");
		$ui->addMessage("info","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam vestibulum. Suspendisse potenti. Mauris mi leo, semper ac, sagittis ut, eleifend at, justo. Vestibulum convallis est sed elit. Aenean pretium, nisi et rhoncus dignissim, nisl nisi tincidunt quam, ut posuere metus felis et erat&hellip; <a href=\"#\" class=\"more\" onclick=\"getMessage('test2.php');\">More</a>");
		?>
	</div>
	<div id="content" class="content">
		<form id="form_dialogs" action="">
		<fieldset class="dynamic first_fieldset">
			<dl class="side_by_side">
			<dt class="required"><label for="first_field" title="Type is required">Type:</label></dt>
				<dd>
				<select id="first_field" class="accessible_menu long_width">
					<option value="" selected="selected"></option>
					<option value="phase">Phase</option>
					<option value="program">Program</option>
					<option value="tasks">Tasks</option>
				</select>
				</dd>
			</dl>
		</fieldset>
		<fieldset id="ui_toggle_01" class="dynamic with_bottom_margin">
			<dl class="side_by_side">
				<dt class="required" title="Name is required"><span>*</span><label for="ui_control_id_45e4a4021e4330.56117382" class="_error">Name:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45e4a4021e4330.56117382" class="long_width _error" value="" />
				</dd>
				<dt><label for="ui_control_id_45e74bf4214bc5.99806252" class="_error">Description:</label></dt>
				<dd class="large_textbox">
					<textarea id="ui_control_id_45e74bf4214bc5.99806252" class="long_width _error"></textarea>
				</dd>
				<dt><label for="ui_control_id_45e5d8ab66e396.01138976">Delegated Owner:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45e5d8ab66e396.01138976" class="long_width" />
					<a href="#" class="button icon addressbook">&nbsp;</a>
				</dd>
				<dt><label for="ui_duration_type">Template:</label></dt>
				<dd>
					<select id="ui_proposed" class="short_width" onchange="ui_duration_type_onchange();">
						<option value="active">Active</option>
						<option value="proposed">Proposed</option>
						<option value="template">Template</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<fieldset id="ui_toggle_02" class="last_set">
			<legend>Schedule</legend>
			<dl class="side_by_side with_top_margin with_bottom_margin">
				<dt class="required" title="Start Date is required"><span>*</span><label for="ui_control_id_45e4a674b00e53.57827954">Start Date:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45e4a674b00e53.57827954" class="short_width" value="1/19/2007" />
					<a href="#" ui_control_id_45e4a674b011c3.29158967 class="button icon calendar">&nbsp;</a>
				</dd>
				<dt id="ui_duration_dt" class="required" title="Duration is a required field"><label for="ui_duration">Duration:</label></dt>
				<dd>
					<input type="text" id="ui_duration" class="short_width" value="1" />
				</dd>
				<dt class="required" title="End Date is required"><span>*</span><label for="ui_control_id_45e4a674b01585.17913791">End Date:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45e4a674b01585.17913791" class="short_width" value="2/19/2007" />
					<a href="#" ui_control_id_45e4a674b018d2.52502575 class="button icon calendar">&nbsp;</a>
				</dd>
			</dl>
			<dl class="side_by_side">
				<dt id="ui_duration_type_dt"><label for="ui_duration_type">Duration Type:</label></dt>
				<dd>
					<select id="ui_duration_type" class="short_width" onchange="ui_duration_type_onchange(this);" >
						<option value="fixed">Fixed</option>
						<option value="effort">Effort</option>
					</select>
				</dd>
				<dt id="ui_days_effort_dt"><label for="ui_days_effort">Days Effort:</label></dt>
				<dd>
					<input type="text" id="ui_days_effort" class="short_width disabled" disabled="disabled" value="1" />
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</form>
</div>
<? $ui->printPage(); ?>