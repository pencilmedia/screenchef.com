<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="find.php.js"></script>
    <title>Find</title>
</head>
<body class="action_dialog find">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Find</h2>
                <p>Assembly &bull; 1000-34</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Specify the search criteria, column to search and BOM level.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_top_margin">
                <dt><label for="password">Find:</label></dt>
                <dd>
                    <input type="text" id="password" class="medium_width" />
                    in
                    <select class="medium_width" />
                    	<option>All Columns</option>
                    	<option>-----------</option>
                    	<option>Column 1</option>
                    	<option>Column 2</option>
                    </select>
                </dd>
				<dt class="place_holder">Blank</dt>
				<dd>
					<input id="ui_originator" type="checkbox" name="" class="form_selectors" /> <label for="ui_originator">Match case</label>
				</dd>
                
            </dl>
        </fieldset>

        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_top_margin">
                <dt><label for="password">Levels:</label></dt>
                <dd>
   					<input id="ui_levels_01" type="radio" name="levels" value="" class="form_selectors" checked="checked" /> <label for="ui_levels_01">Search</label>
                    <input type="text" id="txt_levels" class="short_width"  value="1"/> Levels
                </dd>
				<dt class="place_holder">Blank</dt>
				<dd>
   					<input id="ui_levels_02" type="radio" name="levels" value="" class="form_selectors" /> <label for="ui_levels_02">All Levels</label>
				</dd>
                
            </dl>
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Find Previous</span></a> 
        <a href="#" id="cmdNext" class="button"><span>Find Next<em class="arrow_next">&nbsp;</em></span></a>
        <a href="#" id="cmdClose" class="button btn_next_group"><span><em class="cancel">&nbsp;</em>Close</span></a>
    </div>
</div>
</body>
</html>
