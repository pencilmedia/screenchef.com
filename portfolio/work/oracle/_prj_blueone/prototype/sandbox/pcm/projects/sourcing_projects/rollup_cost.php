<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="rollup_cost.php.js"></script>
    <title>Rollup Cost Report</title>
	<style>
		dl.side_by_side_mixed dd { white-space: normal; }
	</style>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Rollup Cost Report</h2>
                <p>Sourcing Project  &bull; PRJ00234</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Specify a base price scenario and the price types to use for your analysis.  Then then specify your criteria for looking up prices from the Price Repository.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form_dialogs" class="expand_bom" action="">
			<div id="d1">
				<fieldset class="dynamic">

            <dl class="side_by_side_mixed top_space">
                <dt><label for="sel_00">Base Scenario:</label></dt>
				<dd>

					<select id="sel_00" class="medium_width">
						<option value="">Scenario 1</option>
					</select>
				</dd>

                <dt class="required"><label for="msl_00">Price Types:</label></dt>

                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>

                </dd>
			</dl>

			<dl class="side_by_side_mixed selector_list">
				<dt><label for="first_field">Populate results to:</label></dt>
				<dd>
					<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" /> 
				    <label for="ui_print_levels">Only the base price scenario</label>
                    <!-- <label for="ui_print_levels">Expand <input id="first_field" name="" value="1" size="2" class="field_input_small inline_box" /> levels</label> -->
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd><input id="ui_all_levels" type="radio" name="bom" class="form_selectors" /> <label for="ui_all_levels">All price scenarios</label></dd>
			</dl>
		</fieldset>


		<fieldset>
        	<legend>Date and Quantity Criteria</legend>
			<dl class="side_by_side_mixed selector_list top_space">
				<dt><label for="first_field">Quantities:</label></dt>
				<dd>
					<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" /> 
				    <label for="ui_print_levels">Ignore Quantities</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
                	<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" />
                    <label for="ui_print_levels">Only quantities where the pricing is  +/- <input id="first_field" name="" value="10" size="2" class="field_input_small inline_box" />% of the scenario quantity.</label>
				</dd>
			</dl>

			<dl class="side_by_side_mixed selector_list top_space">
				<dt><label for="first_field">Date Ranges:</label></dt>
				<dd>
					<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" /> 
				    <label for="ui_print_levels">Ignore the date ranges</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
                	<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" />
                    <label for="ui_print_levels">Only quantities where the start and end date is +/- <input id="first_field" name="" value="30" size="2" class="field_input_small inline_box" />days of the scenario date range.</label>
				</dd>
			</dl>

			<dl class="side_by_side_mixed selector_list top_space">
				<dt><label for="first_field">Historical Quotes:</label></dt>
				<dd>
                    <label for="ui_print_levels">Only quotes which have occured within the last <input id="first_field" name="" value="30" size="2" class="field_input_small inline_box" />days.</label>
				</dd>
			</dl>
		</fieldset>


		<fieldset>
        	<legend>Breaking Ties</legend>
			<dl class="side_by_side_mixed selector_list top_space">
				<dt><label for="first_field">To break ties use:</label></dt>
				<dd>
					<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" /> 
				    <label for="ui_print_levels">Lowest price</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
                	<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" />
				    <label for="ui_print_levels">Shortest lead-time</label>
				</dd>
				<dt class="place_holder">Blank</dt>
				<dd>
                	<input id="ui_print_levels" type="radio" name="bom" value="" class="form_selectors" checked="checked" />
				    <label for="ui_print_levels">Most recent response</label>
				</dd>
			</dl>

		</fieldset>
			</div>
			<div id="d2">
				<fieldset>
        	<legend>Optional Criteria</legend>

            <dl class="side_by_side_mixed top_space">
                <dt><label for="sel_00">Ship-to Locations:</label></dt>
				<dd>

					<select id="sel_00" class="medium_width">
						<option value="">All</option>
					</select>
				</dd>

                <dt><label for="msl_00">Suppliers:</label></dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>

                </dd>

                <dt><label for="msl_00">Customers:</label></dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>

                </dd>

                <dt><label for="msl_00">Programs:</label></dt>
                <dd class="with_bottom_margin" style="margin-bottom:5pt !important;">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>

                </dd>

			</dl>


		</fieldset>

			</div>
    	</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
		<input id="optional" type="checkbox"/>
		<label for="optional">Perform action in background</label>
    </div>
    <div class="column_three">
		<a class="button" id="cmdCriteria" href="#" style="padding-right: 10px;"><span>Optional Criteria<em class="arrow_next"> </em></span></a>
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Lookup</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
