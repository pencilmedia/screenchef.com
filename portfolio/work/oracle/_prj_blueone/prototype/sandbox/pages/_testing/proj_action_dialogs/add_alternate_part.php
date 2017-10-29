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
	<script type="text/javascript" src="add_alternate_part.php.js"></script>
	<title>Add Alternate Part</title>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Add Alternate Part</h2>
                <p>RFQ Response &bull; RFQ00123</p>
            </div>		
        </div>
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
				<fieldset class="dynamic">
                    <dl class="side_by_side_mixed with_top_margin">
                    	<dt class="required"><label for="num01">Number:</label></dt>
						<dd>
                            <input  id="num01" class="auto_number_field medium_width" type="text">
                            <a href="#" id="an_menu_1" class="button" onclick="increment('ui_control_id1');return false;"><span>123</span></a>
						</dd>
                        <dt><label for="desc01">Description:</label></dt>
						<dd>   
                             <textarea id="desc01" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)"></textarea>
                        <input readonly="readonly" type="text" id="multitext_char_counter_00" class="counter" size="3" maxlength="3" value="150">
						</dd>
                        <dt class="required"><label for="manf01">Manufacturer:</label></dt>
                    <dd>
                        <div class="list_control single_list long_width" id="sss">
                            <input type="text" id="manf01" class="textbox1" autocomplete="off" />
                            <div class="auto_complete_results" id="sss_autoCompleteList"></div>
                                <div tabindex="-1" class="pill_container">
                                    <ul class="pillbox" id="sss_pillbox"></ul>
                                </div>
                        </div>
                      <a class="button" id="cmdOpenPalette" href="#"><span><em class="view_details">&nbsp;</em></span></a>
                    </dd>
                    <dt class="mixed_text"><label>Bid Decision:</label></dt>
                    <dd class="mixed_text">Bid - Alternate Part</dd>
                </dl>
				</fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">
                STEP TWO
             </div>
           </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div class="column_one">
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Enter Response<em class="arrow_next">&nbsp;</em></span></a>
    	    <a href="#" id="cmdFinish" class="button"><span><em class="approve">&nbsp;</em>Finish</span></a>
    	    <a href="#" id="cmdAdd" class="button"><span><em class="approve">&nbsp;</em>Add</span></a>
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
