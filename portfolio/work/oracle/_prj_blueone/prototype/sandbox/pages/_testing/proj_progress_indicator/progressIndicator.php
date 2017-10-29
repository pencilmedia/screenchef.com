<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
	<link rel="stylesheet" type="text/css" href="global/css/action_dialogs.css" />	
	<link rel="stylesheet" type="text/css" href="global/css/activity_indicator.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/yui/dom/dom-min.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/autocomplete/autocomplete-min.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/datasource-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datatable/datatable-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/data.js"></script>
    <script type="text/javascript" src="global/js/yui/animation/animation-min.js"></script>
    <script type="text/javascript" src="global/js/agile_animations.js"></script>
	<script type="text/javascript" src="../cycle0.js"></script>
<title>Progress Indicator</title>

<!-- CSS -->
<style type="text/css">
#overlay
{
    width: 100%;
    height: 100%;
    z-index: 90;   
    background-color: #000;
    opacity: .01;
    filter: alpha(opacity=1);
}
#overlay[id] /* IE6 and below Can't See This */
{ 
    position:fixed;
}
.pi{}
#close
{
    position: absolute;
    top: -5px;
    right: -5px;
    cursor: pointer;
}
.box
{
	position: relative;
	top: 30% !important;
	left: 35% !important;
	border-top: 1px solid #000;
	border-left: 1px solid #000;
	border-bottom: 3px solid #000;
	border-right: 3px solid #000;
	background-color: #fff;
	font-size: 16px;
	padding: 10px;
	color: #333;
}

</style>
<!-- JavaScript -->
<script type="text/javascript" src="global/js/prototype.js"></script>
<script type="text/javascript" src="progressIndicator.js"></script>

</head>

<body class="action_dialog"> 
<div id="activity_indicator1" class="activity_indicator1"></div>
<!-- PALETTE -->
<div id="palette" class="palette nodrag">
    <div id="floater_content" class="palette_content nodrag">
        <div id="floater_handlebar" class="handlebar"></div><a href="#" id="close_floater" class="close_palette"><span>close</span></a>
        <div id="floater_title" class="palette_title nodrag">Multi-select list required (countries)
        <div id="palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
        </div>
        <div id="floater_filter" class="palette_filter nodrag">Filter: <input type="text" id="palette_query" class="search nodrag" name="search" autocomplete="off" value="Test"/></div>
        <div id="floater_results_div" class="nodrag">
            <div id="palette_results" class="palette_results_list nodrag"></div>
        </div>  
        <div id="floater_resize_handle" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div>
<div id="header" class="header">
	<!--************************************
		HEADER
	*************************************-->
	<div class="header_wrapper">
		<div class="column_one">
			<h2>Cycle 0</h2>
			<p>April 2007</p>
		</div>		
	</div>
	
	<!--************************************
		MESSAGES
	*************************************-->
	<div id="page_message" class="message info">
		<p>Click save to view errors.</p>
	</div>
</div>
<div id="content" class="content">
	<form id="form_dialogs" name="form_dialogs" action="">
		<div id="edit_mode">
<!-- REQUIRED TEXT SECTION -->
			<fieldset class="dynamic">
				<!-- REQUIRED TEXT -->
				<dl class="side_by_side">
					<dt class="required" title="Text is required">&nbsp;</dt>
					<dd>
                    	<a href="#" onclick="progressIndicatorHomePage()">Progress Indicator</a>
                    </dd>
				</dl>
				<dl class="side_by_side">
					<dt class="required" title="Text is required"><span>*</span><label for="first_field" class="_error">Text required:</label></dt>
					<dd><input type="text" id="first_field" class="medium_width" value="" /></dd>
				</dl>
				<!-- NON-EDITABLE TEXT -->
				<dl class="side_by_side_text" tabindex="-1">
					<dt>Non-editable text:</dt>
					<dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam et dui vel.</dd>
				</dl>
				<!-- DISABLED TEXT -->
				<dl class="side_by_side">
					<dt><label for="first_fielda" class="disabled">Text control disabled:</label></dt>
					<dd><input type="text" id="first_fielda" class="medium_width disabled" value="With online tools that work with the applications you use every day, .Mac makes doing amazing things online as seamless as on your Mac. Publish a website." disabled="disabled" /></dd>
				</dl>
			</fieldset>
			
			<p>&nbsp;</p>
			<p>&nbsp;</p>
			
<!-- MULTI LINE TEXT SECTION -->
			<fieldset class="dynamic">
				<!-- MULTI LINE TEXT -->
				<dl class="side_by_side">
					<dt><label for="obj2">Multi-line text:</label></dt>
					<dd class="large_textbox">
						<textarea id="obj2" name="obj2" class="medium_width"></textarea>
					</dd>
				</dl>
				<!-- NON-EDITABLE MULTI LINE TEXT -->
				<dl class="side_by_side_text"  tabindex="-1">
					<dt>Non-editable multi-line text:</dt>
					<dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam et dui vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam et dui vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam et dui vel.</dd>
				</dl>

				<!-- DISABLED MULTI LINE TEXT -->
				<dl class="side_by_side">
					<dt><label for="obj2a" class="disabled">Multi-line text control disabled:</label></dt>
					<dd class="large_textbox">
						<textarea id="obj2a" class="medium_width disabled" disabled="disabled">Four of the security bulletins released as part of Microsoft's monthly patch cycle address problems in Windows. Three are tagged "critical," Microsoft's highest severity rating, while the other is pegged "important," a notch lower. The most serious rating is for bugs that could cause a computer to be fully compromised with little, if any, user action.</textarea>
					</dd>
				</dl>
			</fieldset>		
			
			<p>&nbsp;</p>
			<p>&nbsp;</p>			
			
		
		<!-- MULTI SELECT LIST SECTION -->
			<fieldset class="dynamic">
				<!-- MULTI SELECT LIST -->
				<dl class="side_by_side">
					<dt class="required"><span>*</span><label for="multi_select_query" class="_error">Multi-select list required (countries):</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="agileautocomplete" class="agileautocomplete medium_width">
							<input id="multi_select_query" class="search_query">
							<div id="results_container" class="results_container"></div>
							<div id="selected_container" class="selected_container" tabindex="-1">
								<ul id="pill_results"></ul>
                                <div id="added_notice" class="added_notice" style="display: none;">Added</div>
						  </div>
						</div>
						<a href="#" id="cmdPalette" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
				<!-- MULTI SELECT LIST SPECIFICATIONS -->
				<dl class="side_by_side">
					<dt><label for="multi_select_query2">Multi-select list (Specifications):</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="agileautocomplete2" class="agileautocomplete medium_width">
							<input id="multi_select_query2" class="search_query">
							<div id="results_container2" class="results_container"></div>
							<div id="selected_container2" class="selected_container">
								<ul id="pill_results2">
								<li id="longpill" onclick="doLongPillSelect()" title="This is truncated text This is truncated text... Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor">This is truncated text This is truncated text&hellip;<a href="#" class="delete_button" onclick="removeLongPill()"  tabindex="-1"><span>x</span></a></li>
							  </ul>
							</div>
						</div>
						<a href="#" id="show_floaterx" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
				<!-- NON-EDITABLE MULTI SELECT LIST -->
				<dl class="side_by_side_text"  tabindex="-1">
				<dt>Non-editable multi-select list:</dt>
					<dd>
						United States; Uruguay; Uzbekistan; Vanuatu; Venezuela; Vietnam; Virgin Islands (British); Virgin Islands (U.S.); Yemen; Yugoslavia
					</dd>
				</dl>
				<!-- DISABLED MULTI SELECT LIST -->
				<dl class="side_by_side">
					<dt><label for="search_query3" class="disabled">Multi-select list disabled:</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="agileautocomplete3" class="agileautocomplete medium_width disabled">
							<input id="search_query3" class="search_query" disabled="disabled">
							<div id="results_container3" class="results_container"></div>
							<div id="selected_container3" class="selected_container"  tabindex="-1">
								<ul id="" class="disabled_pills">
									<li id="Albania">Albania <a class="delete_button" href="#"  tabindex="-1"><span>x</span></a></li>
								  <li id="us">United States <a class="delete_button" href="#"  tabindex="-1"><span>x</span></a></li>
							  </ul>								
							</div>
						</div>
						<a href="#" class="button disabled"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>	
					</dd>
				</dl>
				</fieldset>
			
			<p>&nbsp;</p>
			<p>&nbsp;</p>			
						
<!-- REQUIRED LONG DATE PICKER SECTION -->
			<fieldset class="dynamic">
				<!-- REQUIRED DATE PICKER -->
				<dl class="side_by_side">
					<dt class="required" title="Effective Date is required"><span>*</span><label for="obj3" class="_error">Long date required:</label></dt>
					<dd>
						<input type="text" id="obj3" name="obj3" class="medium_width" value="" />
						<a href="#" class="button"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
				<!-- NON-EDITABLE LONG DATE -->
				<dl class="side_by_side_text"  tabindex="-1">
					<dt>Non-editable long date:</dt>
					<dd>01/01/2007 11:30 AM PST</dd>
				</dl>
				<!-- DISABLED LONG DATE -->
				<dl class="side_by_side">
					<dt><label for="obj4" class="disabled">Short Date control disabled:</label></dt>
					<dd>
						<input type="text" id="obj4" class="medium_width disabled" value="01/01/2007 11:30 AM PST" disabled="disabled" />
						<a href="#" class="button"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>

			</fieldset>
			
			<p>&nbsp;</p>
			<p>&nbsp;</p>				
				
<!-- REQUIRED SHORT DATE PICKER SECTION -->
			<fieldset class="dynamic">
				<dl class="side_by_side">
					<dt><label for="obj3a" class="_error">Short date:</label></dt>
					<dd>
						<input type="text" id="obj3a" class="short_width" value="" />
						<a href="#" class="button"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
				<!-- NON-EDITABLE SHORT DATE -->
				<dl class="side_by_side_text"  tabindex="-1">
					<dt>Non-editable short date:</dt>
					<dd>01/01/2007</dd>
				</dl>
				<!-- DISABLED SHORT DATE -->
				<dl class="side_by_side">
					<dt><label for="obj5" class="disabled">Short Date control disabled:</label></dt>
					<dd>
						<input type="text" id="obj5" class="short_width disabled" value="01/01/2007" disabled="disabled" />
						<a href="#" class="button" disabled="disabled"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
			</fieldset>
			
			
		</div>


  <!-- PALETTE PROXY : these styles exist in action_dialog.css for the className = div.drag_tooltip  -->
		<div id="dragDiv4" style="
			width: 15px;
			height: 15px;
			visibility: hidden;
			z-index: 90000;">
			<p id="palette_tooltip" class="drag_tooltip" style="
			position:absolute;
			left:-9px;
			top:-5px;
			width: auto;
            min-width: 15px;
            padding: 2px;
			color: #000;
			background-color: #fff;
			border: 1px dotted #787878;
			font-weight: bold;
			font-size: 13px;
			text-align: center;
			line-height: 14px;
			opacity: .75;
			filter: alpha(opacity=75); width=15px; height=15px;">1</p>
		</div>

	</form>
	<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>