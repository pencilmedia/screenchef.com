<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="print.php.js"></script>
	<title>Print</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Print Optionsxxxxx</h2>
                <p>Assembly &bull; P000234</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Select print options.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset>
				<legend>Tabs</legend>
				<dl class="side_by_side_mixed chk_group with_top_margin">
					<dt><label for="first_field">Print:</label></dt>
					<dd>
                    	<input type="radio" id="first_field" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="all tabs" checked="checked" />
                        <label for="first_field">All tabs</label>
                    </dd>
					<dt class="place_holder">blank</dt>
					<dd>
                    	<input type="radio" id="ui_control_id_45de2486c3bc79.50706018" name="ui_control_id_45de2486c17801.50750058" class="form_selectors form_selectors" value="<strong>title block</strong> tab only" />
                    	<label for="ui_control_id_45de2486c3bc79.50706018"><strong>Title Block</strong> tab only</label>
                    </dd>
				</dl>
			</fieldset>
            <fieldset>
                <legend>BOM</legend>
                <dl class="side_by_side_mixed chk_group with_top_margin">
                    <dt><label for="ui_print_levels">Levels:</label></dt>
                    <dd>
                        <input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" onclick="enable_print_number()" /> 
                        <label for="ui_print_levels">Print <input id="ui_print_number" name="" value="1" size="2" class="field_input_small inline_box" style="border:1px solid #ccc !important;" /> levels</label>
                    </dd>
                    <dt class="place_holder">Blank</dt>
                    <dd>
                        <input id="ui_all_levels" type="radio" name="bom" value="" class="form_selectors" onclick="disable_print_number()" /> 
                        <label for="ui_all_levels">All levels</label>
                    </dd>
                    <dt class="place_holder top_space_large">Blank</dt>		
                    <dd class="top_space">
                        <input id="ui_manufacturers" type="checkbox" class="form_selectors" /> 
                        <label for="ui_manufacturers">Include Manufacturers</label>
                    </dd>	
                </dl>
            </fieldset>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">
	        <a href="#" id="cmdPrintPreview" class="button"><span>Print Preview</span></a> 
        </div>
    	<div class="column_three">
	        <a href="#" id="cmdPrint" class="button"><span><em class="save_dialog">&nbsp;</em>Print</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>