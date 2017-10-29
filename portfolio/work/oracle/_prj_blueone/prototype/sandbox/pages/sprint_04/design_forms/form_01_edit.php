<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
	<div class="breadcrumb_wrapper">
        <ul class="breadcrumbs">
        	<li><a href="#">Breadcrumb</a> &raquo;</li>
	        <li>Breadcrumb</li>
		</ul>
	</div>
	<div class="column_one layout">
		<h2>Identifier</h2>
			<p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
	</div>
	<div class="column_two">
		<h2>Status / Lifecycle</h2>
		<p>[varies by object]</p>
	</div>
    	<div class="column_three">
			<ul class="rating">
                <li class="traffic_red">Overall Status</li>
                <li class="traffic_green">Schedule Status</li>
                <li class="traffic_yellow">Cost Status</li>
                <li class="traffic_red">Resources Status</li>
                <li class="traffic_grey">Quality Status</li>
			</ul>
		</div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <label>Label:</label>
            <select name="">
                <option value="">Values</option>
                <option value="">selection</option>
            </select>
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Object Action</span></a>
            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Action 2</span></a>
            <a href="#" class="button"><span>Menu<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab selected"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History</span></a></li>
    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms_error.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" class="button" onclick="doSave();"><span>Save</span></a> <a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_04/design_forms/form_01.php');" class="button"><span>Cancel</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container">
        <form id="form_dialogs" name="frm1_edit" action="">
            <fieldset>
                <dl class="side_by_side_mixed">
                    <dt>Auto Number:</dt>
                        <dd><input id="first_field" type="text" value="Text" class="long_width" /></dd>
                    <dt class="required"><span>*</span><label class="_error">Long Text:</label></dt>
                        <dd>
                        	<input type="text" value="" class="long_width" />
                            <span class="_err_msg">Required field. Please enter a valid value.</span>
                        </dd>
                    <dt><label>Medium Text:</label></dt>
                        <dd><input type="text" value="" class="medium_width" /></dd>
                    <dt><label class="_error">Short Text:</label></dt>
                        <dd>
                        	<input type="text" value="jkl;" class="short_width _error_field" />
                            <span class="_err_msg">Invalid characters</span>
                        </dd>
                    <dt><label>Text:</label></dt>
                        <dd>
                            <select class="long_width">
                                <option>Text</option>
                            </select>
                        </dd>
                    <dt class="mixed_text"><label>Single-Select User:</label></dt>
                        <dd class="mixed_text">User Link</dd><!--Not a link in edit mode-->
                    <dt class="required"><span>*</span><label class="_error">Medium Text:</label></dt>
                        <dd>
                        	<input type="text" value="" class="medium_width" />
                            <span class="_err_msg">Required field. Please enter a valid value.</span>
                        </dd>
                    <dt><label>Textarea:</label></dt>
                        <dd class="large_textbox">
                            <textarea class="long_width">This is example text in a multi-line text field.  The content of this field may take up more space than the input.  In that case, the input would have a vertical scrollbar.</textarea>
                        </dd>
                    <dt class="mixed_text"><label title="No Privilege">Text Link:</label></dt>
                        <dd class="mixed_text">
                        	<img src="../../../global/images/icn_status_no_read_priv.png" alt="No Privilege" title="No Privilege" />
                        </dd>
                    <dt class="mixed_text"><label title="No Privilege">Text Link 2:</label></dt>
                        <dd class="mixed_text">
                        	<img src="../../../global/images/icn_status_no_read_priv.png" alt="No Privilege" title="No Privilege" />
                        </dd>
                    <dt><label>Menu Text:</label></dt>
                        <dd>
                            <select class="long_width">
                                <option>Text</option>
                            </select>
                        </dd>
                </dl>
            </fieldset> 
        <h3>Long, long, long, extra long, extra long Long, long, long, extra long, extra long Long, long, long, extra long, extra long Long, long, long, extra long, extra long Header</h3>
            <fieldset>
                <dl class="side_by_side_mixed">
                    <dt><label>Menu:</label></dt>
                        <dd>
                            <input type="text" value="" class="medium_width" />
                            <a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                        </dd>
                    <dt><label>Menu Two:</label></dt>
                        <dd>
                            <input type="text" value="" class="medium_width" />
                            <a href="#" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                        </dd>
                </dl>
            </fieldset>
            </form>
    	</div>
    </div>
</div>