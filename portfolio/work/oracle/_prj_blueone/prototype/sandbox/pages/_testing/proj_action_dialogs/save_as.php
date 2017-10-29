<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="save_as.php.js"></script>
	<title>Save As...</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Save Part P00034 As...</h2>
                <p>Resistor &bull; PP00034</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        </div>
	</div>


	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                
                <!-- SELECT BOX -->
                <dt class="required"><label for="req_sel_00">Type:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="resistor">Assembly</option>
                        <option value="resistor">Capacitor</option>
                        <option value="resistor">Connector</option>
                        <option value="resistor">Diode</option>
                        <option value="resistor">Fan</option>
    
                        <option value="resistor">Fuse</option>
                        <option value="resistor">Hardware</option>
                        <option value="resistor">IC</option>
                        <option value="resistor">Label</option>
                        <option value="resistor">Packaging</option>
                        <option value="resistor">Part</option>
    
                        <option value="resistor" selected="selected">Resistor</option>
                        <option value="resistor">Switch</option>
                        <option value="resistor">Transistor</option>
                        <option value="resistor">Tubing</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- AUTO NUMBER -->
                <dt class="required"><label for="autoNumber">Number:</label></dt>
                <dd>
                    <input type="text" id="autoNumber" value="100664" class="auto_number_field disabled long_width" disabled="disabled" />
                    <a href="#" id="cmdAutoNumber" class="button"><span><em class="iconic auto_number">&nbsp;</em>&nbsp;</span></a>
	                <span class="error_msg hidden">Error message...</span>
                </dd>


				<!-- DESCRIPTION TEXT AREA -->
                <dt><label for="multitext_counter">Description:</label></dt>
                <dd class="">
                    <textarea id="multitext_counter_00" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter_00" class="counter" size="3" maxlength="3" value="150">
                </dd>                

                <!-- MULTI SELECT LIST -->
                <dt><label for="msl_00">Product Lines:</label></dt>
                <dd>
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
                                
                <!-- SINGLE SELECT LIST -->
                <dt><label for="ssl_00">Delegated Owner:</label></dt>
                <dd>
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_00" autocomplete="off" value="Maguire, Paul (pmaguire)" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox"></li></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                </dd>   
               
            </dl>
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    	<input type="checkbox" id="optional" /> <label for="optional">Continue creation in wizard</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
