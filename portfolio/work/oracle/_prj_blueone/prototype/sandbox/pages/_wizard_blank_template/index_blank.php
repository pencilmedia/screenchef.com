<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/tooltip.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="index_blank.php.js"></script>
	<title>Blank Wizard</title>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Blank Wizard</h2>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="step_title">Title</h2>
        </div>
        <ul id="step_indicator" class="steps"></ul>
        <div id="page_message" class="message info">
            <p id="step_message">Help text...</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <div id="step_1" class="step">
				<dl class="side_by_side_mixed">
                    <dt class="required"><label for="req_sel_00">Step 1:</label></dt>
                    <dd>
                        <input type="text" class="medium_width" />
                    </dd>
                </dl>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">
				<dl class="side_by_side_mixed">
                    <dt class="required"><label for="req_sel_00">Step 2:</label></dt>
                    <dd>
                        <input type="text" class="medium_width" />
                    </dd>
                </dl>
           	</div>
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
				<dl class="side_by_side_mixed">
                    <dt class="required"><label for="req_sel_00">Step 3:</label></dt>
                    <dd>
                        <input type="text" class="medium_width" />
                    </dd>
                </dl>
           	</div>
        	<!-- ****************************** -->
			<!-- 	STEP #4						-->
        	<!-- ****************************** -->
            <div id="step_4" class="step">
				<dl class="side_by_side_mixed">
                    <dt class="required"><label for="req_sel_00">Step 4:</label></dt>
                    <dd>
                        <input type="text" class="medium_width" />
                    </dd>
                </dl>
           	</div>
        	<!-- ****************************** -->
			<!-- 	STEP #5						-->
        	<!-- ****************************** -->
            <div id="step_5" class="step">
				<dl class="side_by_side_mixed">
                    <dt class="required"><label for="req_sel_00">Step 5:</label></dt>
                    <dd>
                        <input type="text" class="medium_width" />
                    </dd>
                </dl>
           	</div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div class="column_one">
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
