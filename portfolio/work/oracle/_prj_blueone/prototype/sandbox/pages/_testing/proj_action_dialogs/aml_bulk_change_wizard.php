<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/tooltip.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="aml_bulk_change_wizard.php.js"></script>
	<title>AML Bulk Change</title>
</head>
<body class="action_dialog wizard muw">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Manufacturer Part Bulk Change</h2>
                <p>ECO &bull; C00021</p>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Select Bulk Change Option</h2>
        </div>
        <ul class="steps">
        	<li id="1" title="Tooltip Title - Lorem ipsum..." class="sec first"><a href="#">1</a></li>
        	<li id="2" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">2</a></li>
        	<li id="3" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">3</a></li>
        	<li id="4" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">4</a></li>
      	</ul>
        <div id="page_message" class="message info">
            <p id="step_message">Select to replace or remove a Manufacturer Part from an item.</p>
        </div>

            <div class="view_controls">
                <h4 id="view_control_title">Apply To</h4>
            </div>
            <div class="table_actions">
                <div class="column_one no_width">
                    <p id="ac1">
                        <a href="#" id="cmdAdd" class="button"><span>Add</span></a> 
                        <a href="#" id="cmdRemove" class="button"><span>Remove</span></a>
                    </p>
                </div>
            </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <fieldset id="step_1" class="dynamic step">
                <p><input id="r1" type="radio" name="action" class="r_handler"  checked="checked" /> <label for="r1">Replace a Manufacturer Part on Multiple Items</label></p>
                <p><input id="r2" type="radio" name="action" class="r_handler" /> <label for="r2">Remove a Manufacturer Part from multiple Items</label></p>
                <p><input id="r3" type="radio" name="action" class="r_handler" /> <label for="r3">Find Items related to a Manufacturer Part and add them as Affected Items</label></p>
            </fieldset>
            
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">
            <!-- STEP 2a -->
            <fieldset id="step_2_a" class="dynamic">
            <dl class="side_by_side_mixed">
                <dt title="Item to Remove" class="required"><label for="textbox2">Manufacturer Part to Remove:</label></dt>
                <dd class="required">
                    <div id="sss2" class="list_control single_list medium_width">
                        <input type="text" id="textbox2" class="textbox2" autocomplete="off" />
                        <div id="autoCompleteList2" class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox2" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette2" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                </dd>
                <dt title="Item to Replace" class="required"><label for="textbox2">Replacement Manufacturer Part:</label></dt>
                <dd class="required">
                    <div id="sss2" class="list_control single_list medium_width">
                        <input type="text" id="textbox2" class="textbox2" autocomplete="off" />
                        <div id="autoCompleteList2" class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox2" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette2" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                  <a href="#" id="cmdOpenPalette2" class="button"><span><em class="createNew">&nbsp;</em></span></a>
                </dd>
            </dl>
            </fieldset>
            
            <!-- STEP 2b -->            
            <fieldset id="step_2_b" class="dynamic">
            <dl class="side_by_side_mixed">
                <dt title="Item to Remove" class="required"><label for="textbox2">Manufacturer Part to Remove:</label></dt>
                <dd class="required">
                    <div id="sss2" class="list_control single_list medium_width">
                        <input type="text" id="textbox2" class="textbox2" autocomplete="off" />
                        <div id="autoCompleteList2" class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox2" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette2" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>
            </fieldset>
            
            <!-- STEP 2c -->
            <fieldset id="step_2_c" class="dynamic">
            <dl class="side_by_side_mixed">
                <dt title="Item Number" class="required"><label for="textbox1" >Manufacturer Part:</label></dt>
                <dd class="required">
                    <div id="sss3" class="list_control single_list medium_width">
                        <input type="text" id="textbox3" class="textbox3" autocomplete="off" />
                        <div id="autoCompleteList3" class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox3" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette3" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>
            </fieldset>
            
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
                <!--************************************
                    STEP 3a: TABLE ACTIONS
                *************************************-->
              <table id="table_step_3_a" class="rbr" cellpadding="0" cellspacing="0">
                    <tr class="header">
                        <td class="handle"></td>
                        <td class="w60">&nbsp;</td>
                        <td>Number</td>
                        <td>Description</td>
                        <td>Sites</td>
                        <td class="w100">Qty</td>
                        <td>Find Numb</td>
                        <td>BOM Notes</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="w60">
                            <span class="level_02">
                                <em class="part">&nbsp;</em>
                            </span>
                        </td>
                        <td>3435-01</td>
                        <td>Power Supply</td>
                        <td>&nbsp;</td>
                        <td>4</td>
                        <td>10</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="w60">
                            <span class="level_02">
                                <em class="part">&nbsp;</em>
                            </span>
                        </td>
                        <td>3435-03</td>
                        <td>Power Supply</td>
                        <td>San Jose</td>
                        <td>1</td>
                        <td>430</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="w60">
                            <span class="level_02">
                                <em class="part">&nbsp;</em>
                            </span>
                        </td>
                        <td>4445-01</td>
                        <td>Power Supply</td>
                        <td>&nbsp;</td>
                        <td>2</td>
                        <td>80</td>
                        <td>&nbsp;</td>
                    </tr>

                </table>
                <!--************************************
                    STEP 3b: TABLE ACTIONS
                *************************************-->
                <table id="table_step_3_b" class="rbr" cellpadding="0" cellspacing="0">
                    <tr class="header">
                        <td class="handle"></td>
                        <td class="w60">&nbsp;</td>
                        <td>Number</td>
                        <td>Description</td>
                        <td>Sites</td>
                        <td class="w100">Qty</td>
                        <td>Find Numb</td>
                        <td>BOM Notes</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="w60">
                            <span class="level_02">
                                <em class="bom">&nbsp;</em>
                            </span>
                        </td>
                        <td>3435-01</td>
                        <td>Power Supply</td>
                        <td>&nbsp;</td>
                        <td>4</td>
                        <td>10</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="w60">
                            <span class="level_02">
                                <em class="bom">&nbsp;</em>
                            </span>
                        </td>
                        <td>3435-03</td>
                        <td>Power Supply</td>
                        <td>San Jose</td>
                        <td>1</td>
                        <td>430</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="w60">
                            <span class="level_02">
                                <em class="bom">&nbsp;</em>
                            </span>
                        </td>
                        <td>4445-01</td>
                        <td>Power Supply</td>
                        <td>&nbsp;</td>
                        <td>2</td>
                        <td>80</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #4 					-->
        	<!-- ****************************** -->
            
			<!-- ****************************** -->
			<!-- 	STEP #5						-->
        	<!-- ****************************** -->
            <div id="step_5" class="step">
            trash
            </div>

        	<!-- ****************************** -->
			<!-- 	STEP #6						-->
        	<!-- ****************************** -->
            <fieldset id="step_6" class="dynamic step">
            <dl class="side_by_side_mixed">
                <dt title="Item Number" class="required"><label for="textbox4">Item Number:</label></dt>
                <dd class="required">
                    <div id="sss4" class="list_control single_list medium_width">
                        <input type="text" id="textbox4" class="textbox4" autocomplete="off" />
                        <div id="autoCompleteList4" class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox4" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>
            </fieldset>



		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next <em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdFinish" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
