<? //<popup>500,540</popup> ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/floater.css" />
	<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/agilesuggest.css" />
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/prototype/prototype.js"></script>
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/common.js"></script>
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/action_dialogs.js"></script>
	<title>Approve Change</title>
</head>
<body class="action_dialog">
	<div id="header" class="header">
		
<!--************************************
	HEADER
*************************************-->
<div class="header_wrapper">
	<div class="column_one">
		<h2>Approve Change</h2>
		<p>Change &bull; C01701</p>
	</div>		
	<div class="column_three">
		<a href="#" class="button icon_with_text save">Approve</a> <a href="#" onclick="javascript:window.close();" class="button icon_with_text cancel">Cancel</a>
	</div>
</div>

<!--************************************
	MESSAGES
*************************************-->
<div id="page_message" class="message info">
	<p>Complete the following information to approve this change. Seperate multiple names with semicolons.</p>
</div>
	</div>
	<div id="content" class="content">
	<form id="form_dialogs" name="form_dialogs" action="">
		<div id="floater_window">
			<div id="floater_handlebar"><a href="#" id="close_floater">X</a></div>
			<div id="floater_filter">Filter: <input type="text" id="floater_search_text" class="search" name="search" autocomplete="off" value="Test"/></div>
			<div id="floater_results_div"><ul id="floater_results_list"></ul></div>  
			<div id='floater_resize_handle'>&nbsp;</div>
		</div> 
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side selector_list">
				<dt><label>Notify:</label></dt>
				<dd>
					<input id="focus" type="checkbox" class="form_selectors" /> <label for="first_field">Change Analyst</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_originator" type="checkbox" class="form_selectors" /> <label for="ui_originator">Originator</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_reviews" type="checkbox" class="form_selectors" /> <label for="ui_reviews">Reviewers</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd class="large_textbox">
					<textarea id="ui_control_id_45df28b2636be6.46150820" class="long_width"></textarea>
					<a href="#" id="show_floater" class="button icon addressbook">&nbsp;</a>
				</dd>
			</dl>
		</fieldset>		
		<fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side">
			<dt><label for="ui_control_id_45df28b2636be6.46150820">Comments:</label></dt>
			<dd class="extra_large_textbox">
				<textarea id="ui_control_id_45df28b2636be6.46150820" class="long_width"></textarea>
			
			</dd>
				<dt class="place_holder urgent_space">Blank</dt>
				<dd class="urgent_space">
						<input id="ui_chk_urgent" type="checkbox" name="" class="form_selectors" />
						<label for="ui_chk_urgent">Urgent</label>
				</dd>
			</dl>
		</fieldset>
		
		<fieldset class="dynamic">
			<dl class="side_by_side">
				<dt><label for="ui_approved_by">Approved by:</label></dt>
				<dd>
					<select id="ui_approved_by" class="long_width">
						<option value=""></option>
					</select>
				</dd>
				<dt class="required" title="Password is required"><span>*</span><label for="ui_control_id_45df28b26370b6.69388968">Password:</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45df28b26370b6.69388968" class="long_width" value=""/>
				</dd>
			</dl>
		</fieldset>
</form>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
	

	
</body>
</html>
