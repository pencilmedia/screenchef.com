<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="bom_multilevel_expand.php.js"></script>
    <title>Expand BOM</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Expand BOM</h2>
                <p>Assembly &bull; 1000-32</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Specify the number of levels to expand to or check all levels.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		 <form id="form_dialogs" class="expand_bom" action="">
		<fieldset class="dynamic">
			<dl class="side_by_side_mixed selector_list top_space">
				<dt><label for="first_field">Levels:</label></dt>
				<dd>
					<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" /> 
				    <label for="ui_print_levels">Expand <input id="first_field" name="" value="1" size="2" class="field_input_small inline_box" /> levels</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd><input id="ui_all_levels" type="radio" name="bom" class="form_selectors" /> <label for="ui_all_levels">All levels</label></dd>
			</dl>
		</fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">

    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Expand</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
