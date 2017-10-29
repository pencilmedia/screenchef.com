<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/default.css" />
<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/testTable.css" />
<script type="text/javascript" src="../../global/js/table.js"></script>

</head>
<body onkeyup="detectTableKeys(event);" onload="browserCheck();" onresize="detectedResize();">
<!--************************************
	HEADER
*************************************-->
<div class="header_wrapper">
	<div class="column_one layout">
		<ul class="breadcrumbs">
			<li><a href="#">P00325</a> &raquo;</li>
			<li>7600 Series Router</li>
		</ul>
		<h2>7600 Series Router</h2>
		<p><strong>Program</strong> &bull; Develop new product for the September launch cycle.  this has industry leading switching rates and lower power consumption.</p>
	</div>
	<div class="column_two">
		<h2>In Progress</h2>
		<div class="progress_bar">
			<div class="progress_bar_background">
				<div class="progress_bar_inner"></div>
			</div>
		</div>
		<p><strong>21%</strong></p>
	</div>
	<div class="column_three">
		<ul class="rating">
			<li class="rating_100">Overall Status</li>
			<li class="rating_0">Schedule Status</li>
			<li class="rating_50">Cost Status</li>
			<li class="rating_100">Resources Status</li>
			<li class="rating_0">Quality Status</li>
		</ul>
	</div>
</div>

<!--************************************
	OBJECT LEVEL CONTROLS
*************************************-->
<div class="object_level_controls" style="padding: 5px 0; clear: both;">
	<form action="#">
		<a href="#" class="button"><span><em class="summary">&nbsp;</em>Summary</span></a>
		<a href="#" class="button"><span><em class="view_gannt">&nbsp;</em>Gannt</span></a>
		<a href="#" class="button"><span><em class="comment">&nbsp;</em>Comment</span></a>
		<a href="#" class="button"><span><em class="lock">&nbsp;</em>Lock</span></a>
		<a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em></span></a>
	</form>
</div>

<!--************************************
	TABS
*************************************-->
<ul class="agile_tabs">
	<li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
	<li class="indicator_gray selected"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
	<li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
	<li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
	<li class="indicator_gray"><a href="#"><span>History<em>&nbsp;</em></span></a></li>
</ul>

<!--************************************
	MESSAGES
*************************************-->
<div id="page_message" class="message info">
	<p>Lorem ipsum dolor...</p>
</div>


<!--************************************
	PAGE CONTROLS
*************************************-->
<div class="page_controls">
    <p>&nbsp;</p>

</div>

<!--************************************
	VIEW CONTROLS
*************************************-->
<div class="view_controls">
	<h4>Contents</h4>
	<p>	View:
		<select name="">
			<option value="">All Content</option>
			<option value="">selection</option>
			<option value="">selection</option>
		</select>
	</p>
</div>


<!--************************************
	TABLE ACTIONS
*************************************-->
<div class="table_actions">
	<div class="column_one no_width">
		<p>
			<a href="#" class="button"><span>Add</span></a>
			<a href="#" class="button"><span>Remove</span></a>
			<a href="#" class="button"><span>Multi-Level<em class="dropdown">&nbsp;</em></span></a>
			<a href="#" class="button"><span>Find</span></a>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="#" class="button"><span>Save</span></a>
			<a href="#" class="button"><span>Cancel</span></a>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="#" class="button"><span>Undo</span></a>
			<a href="#" class="button"><span>Redo</span></a>
		</p>
	</div>
	<div class="column_three">
		<p class="pagination">
			<p>Selected: 0 of 10</p>
		</p>
	</div>
</div>


<!--************************************
	TABLE
*************************************-->
<div style="width: 100%; overflow: auto; padding: 0; margin: 0; position:relative;" onscroll="adjustForScroll(this);" id="scrollbar">
<table>
	<thead>
		<th class="handle">&nbsp;</th>
		<th><img src="/kb_phase_1/prototype/web/global/images/icn_status_redlined.png" /></th>
		<th><img src="/kb_phase_1/prototype/web/global/images/icn_action_attachment.png" /></th>
		<th><img src="/kb_phase_1/prototype/web/global/images/icn_obj_manufacturer.png" /></th>
		<th><img src="/kb_phase_1/prototype/web/global/images/icn_obj_eng_change_order.png" /></th>
		<th><img src="/kb_phase_1/prototype/web/global/images/icn_obj_problem_report.png" /></th>
		<th>Item Number</th>
		<th>Old Item Description</th>
		<th>New Item Description</th>
		<th>Old Rev</th>
		<th>New Rev</th>
		<th>Old Lifecycle Phase</th>
		<th>New Lifecycle Phase</th>
		<th>Effective Date</th>
		<th>Mass</th>
		<th>Product Lines</th>
	</thead>
	<tbody>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="1"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="2"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="3"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="4"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="5"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="6"><div class="truncate">1232-01</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="7"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="8"><div class="truncate">180W POWER SUPPLY</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="9"><div class="truncate">A</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="10"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="11"><div class="truncate">Production</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="12"><div class="truncate">Production</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="13"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="14"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="15"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="16"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="17"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="18"><div class="truncate"></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="19"><div class="truncate"></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="20"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="21"><div class="truncate">23-8751</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="22"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="23"><div class="truncate">HYDRO-BLATOR 5F, 60 CM, IN POUCH, NON STERILE</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="24"><div class="truncate">B</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="25"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="26"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="27"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="28"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="29"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="30"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="31"><div class="truncate"></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="32"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="33"><div class="truncate"></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="34"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="35"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="36"><div class="truncate">23-8752</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="37"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="38"><div class="truncate">HYDRO-BLATOR 5F, 90 CM, IN POUCH, NON STERILE</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="39"><div class="truncate">A</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="40"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="41"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="42"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="43"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="44"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="45"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="46"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="47"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="48"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="49"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="50"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="51"><div class="truncate">23-8755</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="52"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="53"><div class="truncate">HYDRO-BLATOR 5F, 50 CM, IN POUCH, NON STERILE</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="54"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="55"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="56"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="57"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="58"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="59"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="60"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="61"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="62"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="63"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="64"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="65"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="66"><div class="truncate">250-0400</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="67"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="68"><div class="truncate">INTEL CORE DUO PROCESSOR</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="69"><div class="truncate">B</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="70"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="71"><div class="truncate">Production</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="72"><div class="truncate">Production</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="73"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="74"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="75"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="76"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="77"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="78"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="79"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="80"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="81"><div class="truncate">301-4160</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="82"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="83"><div class="truncate">IC CNTR 4 BIT SYN PSET ASCL</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="84"><div class="truncate">A</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="85"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="86"><div class="truncate">Production</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="87"><div class="truncate">Production</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="88"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="89"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="90"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="91"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="92"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="93"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="94"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="95"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="96"><div class="truncate">32-43-234-41</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="97"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="98"><div class="truncate">TEST LONG PN</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="99"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="100"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="101"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="102"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="103"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="104"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="105"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="106"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="107"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="108"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="109"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="110"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="111"><div class="truncate">32-5354</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="112"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="113"><div class="truncate">16K GATES QUICKRAM FPGA, TQFP-100, PROGRAMMED AS IR32112.CHP</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="114"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="115"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="116"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="117"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="118"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="119"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="120"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="121"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="122"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="123"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="124"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="125"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="126"><div class="truncate">32-5356</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="127"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="128"><div class="truncate">EMBEDDED LINUX PROCESSOR, PBGA-256</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="129"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="130"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="131"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="132"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="133"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="134"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="135"><div class="truncate">&nbsp;</div></td>
		</tr>
		<tr>
			<td class="handle">&nbsp;</td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="136"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="137"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="138"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="139"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable has_attachment" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="140"><div class="truncate"><img src="../../global/images/icn_status_dot_gray.png"/></div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="141"><div class="truncate">37-4503</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="142"><div class="truncate">No Privilege</div></td>
			<td onfocus="registerPopupType('popup_textarea');" onclick="selectCell(this); registerPopupType('popup_textarea');" ondblclick="callPopup();" tabindex="143"><div class="truncate">DIP SWITCH (SERIES 218), HALF PITCH, 2 POSITIONS, 218-2LPST</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="144"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_text');" onclick="selectCell(this); registerPopupType('popup_text');" ondblclick="callPopup();" tabindex="145"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" ondblclick="disabledCell();" tabindex="146"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_dropdown');" onclick="selectCell(this); registerPopupType('popup_dropdown');" ondblclick="callPopup();" tabindex="147"><div class="truncate">&nbsp;</div></td>
			<td onfocus="registerPopupType('popup_calendar_time12');" onclick="selectCell(this); registerPopupType('popup_calendar_time12');" ondblclick="callPopup();" tabindex="148"><div class="truncate">05/30/06 11:45 AM</div></td>
			<td onfocus="registerPopupType('popup_units');" onclick="selectCell(this); registerPopupType('popup_units');" ondblclick="callPopup();" tabindex="149"><div class="truncate">&nbsp;</div></td>
			<td class="noneditable" onfocus="registerPopupType('no_popup');" onclick="selectCell(this); registerPopupType('no_popup');" tabindex="150"><div class="truncate">&nbsp;</div></td>
		</tr>
	</tbody>
</table>
</div>

<!-- All the table pop up goodies -->
<div class="outer_block" id="popup_text"><div class="inner_block"><textarea class="editable">&nbsp;</textarea></div></div>
<div class="outer_block" id="popup_search"><div class="inner_block"><textarea class="editable">&nbsp;</textarea><a href="#" class="button icon view_details">&nbsp;</a></div></div>
<div class="outer_block" id="popup_addr"><div class="inner_block"><textarea class="editable">&nbsp;</textarea><a href="#" class="button icon addressbook">&nbsp;</a></div></div>
<div class="outer_block" id="popup_dropdown"><div class="inner_block"><select class="editable"><option value=""> </option><option value="Inactive">Inactive</option><option value="Obsolete">Obsolete</option><option value="Pilot">Pilot</option><option value="Production">Production</option><option value="Prototype">Prototype</option><option value="REPAIR">REPAIR</option></select></div></div>
<div class="outer_block" id="popup_textarea"><div class="inner_block"><textarea class="editable_scroll">&nbsp;</textarea></div></div>
<div class="outer_block" id="popup_calendar_basic">
	<div class="calendar_basic">
		<div class="calendar_upper">
			<input type="text" class="editable" value=""/>
		</div>
		<div class="calendar_lower" id="calendar_days_basic">
			<div class="month">
				<a href="#" class="year_prev left" title="Previous Year">&nbsp;</a>
				<a href="#" class="month_prev left" title="Previous Month">&nbsp;</a>
				<span id="month_05_06">May 2006</span>
				<a href="#" class="month_next" title="Next Month">&nbsp;</a>
				<a href="#" class="year_next" title="Next Year">&nbsp;</a>
			</div>
			<ul class="numbers days">
				<li>S</li>
				<li>M</li>
				<li>T</li>
				<li>W</li>
				<li>T</li>
				<li>F</li>
				<li>S</li>
			</ul>
			<ul class="numbers dates">
				<li class="disabled">31</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">1</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">2</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">3</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">4</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">5</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">6</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">7</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">8</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">9</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">10</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">11</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">12</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">13</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">14</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">15</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">16</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">17</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">18</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">19</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">20</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">21</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">22</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">23</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">24</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">25</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">26</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">27</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">28</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">29</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">30</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">31</li>
				<li class="disabled">1</li>
				<li class="disabled">2</li>
				<li class="disabled">3</li>
			</ul>
		</div>
	</div>
</div>
<div class="outer_block" id="popup_calendar_time12">
	<div class="calendar_time12">
		<div class="calendar_upper">
			<input type="text" class="editable" value=""/>
		</div>
		<div class="calendar_lower" id="calendar_days_time12">
			<div class="month">
				<a href="#" class="year_prev left" title="Previous Year">&nbsp;</a>
				<a href="#" class="month_prev left" title="Previous Month">&nbsp;</a>
				<span id="month_05_06">May 2006</span>
				<a href="#" class="month_next" title="Next Month">&nbsp;</a>
				<a href="#" class="year_next" title="Next Year">&nbsp;</a>
			</div>
			<ul class="numbers days">
				<li>S</li>
				<li>M</li>
				<li>T</li>
				<li>W</li>
				<li>T</li>
				<li>F</li>
				<li>S</li>
			</ul>
			<ul class="numbers dates">
				<li class="disabled">31</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);" ondblclick="commitDate(this);">1</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">2</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">3</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">4</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">5</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">6</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">7</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">8</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">9</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">10</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">11</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">12</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">13</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">14</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">15</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">16</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">17</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">18</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">19</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">20</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">21</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">22</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">23</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">24</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">25</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">26</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">27</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">28</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">29</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">30</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">31</li>
				<li class="disabled">1</li>
				<li class="disabled">2</li>
				<li class="disabled">3</li>
			</ul>
		</div>
		<div class="calendar_time">
			<p>Time: 
				<select class="time" onchange="updateHour(this);" id="hour12"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select> :
				<!--<select class="time" onchange="updateMinutes(this);" id="minutes12"><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>-->
				<select class="time" onchange="updateMinutes(this);" id="minutes12"><option value="00" selected>00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option></select>
				<select class="meridiem" onchange="updateMeridiem(this.value);" id="meridiemList"><option value="AM">AM</option><option value="PM">PM</option></select>
				PST
			</p>
		</div>
	</div>
</div>
<div class="outer_block" id="popup_calendar_time24">
	<div class="calendar_time24">
		<div class="calendar_upper">
			<input type="text" class="editable" value=""/>
		</div>
		<div class="calendar_lower" id="calendar_days_time24">
			<div class="month">
				<a href="#" class="year_prev left" title="Previous Year">&nbsp;</a>
				<a href="#" class="month_prev left" title="Previous Month">&nbsp;</a>
				<span id="month_05_06">May 2006</span>
				<a href="#" class="month_next" title="Next Month">&nbsp;</a>
				<a href="#" class="year_next" title="Next Year">&nbsp;</a>
			</div>
			<ul class="numbers days">
				<li>S</li>
				<li>M</li>
				<li>T</li>
				<li>W</li>
				<li>T</li>
				<li>F</li>
				<li>S</li>
			</ul>
			<ul class="numbers dates">
				<li class="disabled">31</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">1</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">2</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">3</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">4</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">5</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">6</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">7</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">8</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">9</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">10</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">11</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">12</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">13</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">14</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">15</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">16</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">17</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">18</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">19</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">20</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">21</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">22</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">23</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">24</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">25</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">26</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">27</li>
			</ul>
			<ul class="numbers dates">
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">28</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">29</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">30</li>
				<li onclick="selectDate(this);" ondblclick="commitDate(this);">31</li>
				<li class="disabled">1</li>
				<li class="disabled">2</li>
				<li class="disabled">3</li>
			</ul>
		</div>
		<div class="calendar_time">
			<p>Time: 
				<select class="time" onchange="updateHour(this);" id="hour24"><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option></select> :
				<select class="time" onchange="updateMinutes(this);" id="minutes24"><option value="00" selected>00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option></select>
				PST
			</p>
		</div>
	</div>
</div>
<div class="outer_block" id="popup_units"><div class="inner_block"><textarea class="editable">&nbsp;</textarea><a href="#" class="button divet" onclick="displayList(this, 'list_weights', '70');" id="list_weights_btn">&nbsp;</a></div></div>
<div id="list_weights" class="list">
	<ul>
		<li class="g" onclick="hideObj('list_weights'); replaceWeight('g');">gram (g)</li>
		<li class="kg" onclick="hideObj('list_weights'); replaceWeight('kg');">kilogram (kg)</li>
		<li class="MT" onclick="hideObj('list_weights'); replaceWeight('MT');">metric ton (MT)</li>
		<li class="mg" onclick="hideObj('list_weights'); replaceWeight('mg');">milligram (mg)</li>
		<li class="oz" onclick="hideObj('list_weights'); replaceWeight('oz');">ounce (oz)</li>
		<li class="lbs" onclick="hideObj('list_weights'); replaceWeight('lbs');">pound (lb)</li>
		<li class="t" onclick="hideObj('list_weights'); replaceWeight('t');">ton (t)</li>
	</ul>
</div>

</body>
</html>