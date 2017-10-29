<? 
	//<popup>525,300</popup> 
	require_once "../../rad/classes/AgileUIFramework.php";
	$ui = new AgileUIBlocks("Create Escalation","","action_dialogs.js","class|action_dialog");
	$controls = new AgileUIControls();
?>
	<div id="header" class="header">
		<?
		$ui->addHeader("action_dialog","Create Escalation","User &bull; User 1","","Save","Cancel");
		$ui->addMessage("info","Select the escalation criteria and which users to notify, then click save.");
		?>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side">
			<dt class="required" title="Criteria is required"><span>*</span><label for="first_field">Criteria:</label></dt>
			<dd>
				<select id="first_field" class="long_width">
					<option value=""></option>
					<option value="">All Active RFQs</option>
					<option value="">All Active Sourcing Project</option>
					<option value="">All Activities</option>
					<option value="">All Administrator Reports</option>
					<option value="">All Audits</option>
					<option value="">All Automated Tranfer Orders</option>
					<option value="">All Cancelled Programs</option>
					<option value="">All Cancelled Programs I am owner of</option>
					<option value="">All Cancelled Programs, Phases, Tasks and Gates</option>
					<option value="">All Cancelled Programs, Phases, Tasks and Gates I am owner of</option>
					<option value="">All CAPAs</option>
					<option value="">All Change Orders</option>
					<option value="">All Change Orders for which I am the originator</option>
					<option value="">All Change Orders with folders checked out by me</option>
					<option value="">All Change Orders, Released or Under Review</option>
					<option value="">All Change Requests</option>
					<option value="">All Change Requests for which I am the originator</option>
					<option value="">All Changes</option>
					<option value="">All Changes for which I am the originator</option>
					<option value="">All Changes with folders checked out by me</option>
					<option value="">All Changes, Cancelled or Under Review or Held or Pending or Unassigned or Submitted</option>
					<option value="">All Closed Supplier RFQ Responses</option>
					<option value="">All Compliance Reports</option>
					<option value="">All Content Tranfer Orders</option>
					<option value="">All Custom Reports</option>
					<option value="">All Customer Complaints</option>
					<option value="">All Customers</option>
					<option value="">All Customers with folders checked out by me</option>
					<option value="">All Declarations</option>
					<option value="">All Declarations for everything</option>
					<option value="">All Declarations with folders checked by me</option>
					<option value="">All Deviations</option>
					<option value="">All Deviations for which I am the originator</option>
					<option value="">All Discussions</option>
					<option value="">All Discussions I am notified about</option>
					<option value="">All Disussions with a status</option>
					<option value="">All Disussions with a status that have folders checked out by me</option>
					<option value="">All Disussions without a status</option>
					<option value="">All Disussions without any status that have folders checked out by me</option>
					<option value="">All Documentations</option>
					<option value="">All Documentations with a lifecycle phase</option>
					<option value="">All Draft/Closed RFQs</option>
					<option value="">All Draft/Open Sourcing Projects</option>
					<option value="">All File Folders</option>
					<option value="">All File Folders checked out by me</option>
					<option value="">All Gates</option>
					<option value="">All Gates I am a team member of</option>
					<option value="">All Global User Groups</option>
				</select>
			
			</dd>
			<dt class="required" title="Notify Users is required"><span>*</span><label for="ui_control_id_45ef5f711f60e7.33360751">Notify Users:</label></dt>
			<dd class="large_textbox">
				<textarea id="ui_control_id_45ef5f711f60e7.33360751" class="long_width"></textarea>
				<a href="#" ui_control_id_45ef5f711fea71.95041537 class="button"><span><em class="iconic addressbook">&nbsp;</em></span></a>
			</dd>
			</dl>
		</fieldset>
</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
<? $ui->printPage(); ?>