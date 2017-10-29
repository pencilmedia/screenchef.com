<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/framework.css" />
    <link rel="stylesheet" type="text/css" href="add_modify_partners.php.css" />	
	<script type="text/javascript" src="global/js/jquery/jquery-1.2.6.min.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="widget_filters.php.js"></script>
	<title>Widget Filters</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Dashboard Configuration</h2>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Please select your filter configuration items.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">

        <fieldset class="dynamic">
            
			<dl class="side_by_side selector_list">
                <dt>Program Type:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="a1" type="radio" name="ag" class="form_selectors" checked /> <label for="a1">All</label> &nbsp;
                    <input id="a2" type="radio" name="ag" class="form_selectors" /> <label for="a2">Selected</label>
               	</dd>
                <!-- MULTI SELECT LIST -->
                <dt class="place_holder">&nbsp;</dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_a" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_a" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>
			
            <dl class="side_by_side selector_list">
                <dt>Vertical:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="b1" type="radio" name="bg" class="form_selectors" checked /> <label for="b1">All</label> &nbsp;
                    <input id="b2" type="radio" name="bg" class="form_selectors" /> <label for="b2">Selected</label>
               	</dd>
                <!-- MULTI SELECT LIST -->
                <dt class="place_holder">&nbsp;</dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_b" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_b" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>			

            <dl class="side_by_side selector_list">
                <dt>Launch Year:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="c1" type="radio" name="cg" class="form_selectors" checked /> <label for="c1">All</label> &nbsp;
                    <input id="c2" type="radio" name="cg" class="form_selectors" /> <label for="c2">Selected</label>
               	</dd>
                <!-- MULTI SELECT LIST -->
                <dt class="place_holder">&nbsp;</dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_c" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_c" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>			


            <dl class="side_by_side selector_list">
                <dt>Region:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="d1" type="radio" name="dg" class="form_selectors" checked /> <label for="d1">All</label> &nbsp;
                    <input id="d2" type="radio" name="dg" class="form_selectors" /> <label for="d2">Selected</label>
               	</dd>
                <!-- MULTI SELECT LIST -->
                <dt class="place_holder">&nbsp;</dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_d" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_d" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>			

            <dl class="side_by_side selector_list">
                <dt>Division:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="e1" type="radio" name="eg" class="form_selectors" checked /> <label for="e1">All</label> &nbsp;
                    <input id="e2" type="radio" name="eg" class="form_selectors" /> <label for="e2">Selected</label>
               	</dd>
                <!-- MULTI SELECT LIST -->
                <dt class="place_holder">&nbsp;</dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_e" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_e" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>			

            <dl class="side_by_side selector_list">
                <dt>Program Priority:</dt>
                <dd class="radio_with_bottom_margin">
                	<input id="f1" type="radio" name="fg" class="form_selectors" checked /> <label for="f1">All</label> &nbsp;
                    <input id="f2" type="radio" name="fg" class="form_selectors" /> <label for="f2">Selected</label>
               	</dd>
                <!-- MULTI SELECT LIST -->
                <dt class="place_holder">&nbsp;</dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_f" autocomplete="off" disabled="disabled" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_f" class="button disabled"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>			

		</fieldset>


	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">&nbsp;</div>
     	<div class="column_three">
    	    <a href="#" id="cmdCancel" class="button"><span><em class="save_dialog">&nbsp;</em>Apply</span></a>
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>