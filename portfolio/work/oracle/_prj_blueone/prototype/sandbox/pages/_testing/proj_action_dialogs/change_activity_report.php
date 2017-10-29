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
	<script type="text/javascript" src="change_activity_report.php.js"></script>
	<title>Schedule Report</title>
</head>
<body class="action_dialog wizard ew">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Schedule Report</h2>
                <p>&nbsp;</p>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Schedule Report</h2>
        </div>
        <ul class="steps">
        	<li id="1" title="Tooltip Title - Lorem ipsum..." class="sec first"><a href="#">1</a></li>
        	<li id="2" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">2</a></li>
      	</ul>
        <div id="page_message" class="message info">
            <p id="step_message">Select one or more objects to export.  The "Simple Export" option will export Title Block attributes only in a format that can be modified and re-imported.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <div id="step_1" class="step">
               <fieldset class="dynamic">
                    <!--
                    <dl class="side_by_side_mixed choice_filter">
                    	<dt>&nbsp;</dt>
                        <dd><label for="opt_customize"><input type="radio" id="opt_customize" name="opt1" class="r_handler" />Create custom filter</label></dd>
                    	<dt>&nbsp;</dt>
                        <dd><label for="opt_saved_filters"><input type="radio" id="opt_saved_filters" name="opt1" class="r_handler" checked="checked" />Use predefined filter</label></dd>
                    </dl>
                    -->
                    <dl class="side_by_side_mixed">
                        <!-- SELECT CONTROL -->
                        <dt><label for="req_sel_00">Schedule:</label></dt>
                        <dd>
                            <select class="medium_width">
                                <option value="" selected="selected">Run Now</option>
                            </select>
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                        <dt>&nbsp;</dt>
                        <dd>
                            <select>
                                <option value="" selected="selected">08</option>
                            </select>
                            <select>
                                <option value="" selected="selected">00</option>
                            </select>
                            <label for="am"><input type="radio" id="am" name="time" class="r_handler" checked="checked" />am</label>
                            <label for="pm"><input type="radio" id="pm" name="time" class="r_handler" />pm</label>
							<label>on</label>
                            <input class="short_width" value="10/04/08" />
                            <a class="button" href="#"><span><em class="calendar">&nbsp;</em></span></a>
                        </dd>
                    </dl>
                    <dl class="side_by_side_mixed with_top_margin"> 
                        <dt><label for="req_sel_02">Share with Others:</label></dt>
                        <dd">
                            <div class="controlOuterContainer medium_width" id="mssContainer">
                                <input type="text" autocomplete="off" class="search_query" id="target_query"/>
                                <div style="display: none;" class="added_notice" id="mss_added_notice">Added</div>
                                <div tabindex="-1" class="selected_container" id="mss_targetContainer">
                                    <ul id="mss_pillbox"/>
                                </div>
                            </div>
                            <a class="button" id="cmdMssPallete" href="#"><span><em class="view_details"> </em></span></a>
                        </dd>
                    </dl>
                </fieldset>

            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">

            </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div id="divTableFormat" class="column_one">
    	<input id="optional" type="checkbox"> <label for="optional">Save the report after it is run</label>
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdExport" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Run</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
