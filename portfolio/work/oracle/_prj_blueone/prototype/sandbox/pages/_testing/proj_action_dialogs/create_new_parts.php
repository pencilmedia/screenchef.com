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
	<script type="text/javascript" src="create_new_parts.php.js"></script>
	<title>Create New...</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create New</h2>
                <p>Parts</p>
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


                <!-- Required Select -->
                <dt class="required"><label for="first_field">Type:</label></dt>
                <dd>
                    <select id="first_field" class="long_width">
                        <option value="" selected="selected"></option>
                        <option value="">Assembly</option>
                        <option value="">Capacitor</option>
                        <option value="">Connector</option>
                        <option value="">Diode</option>
                        <option value="">Fan</option>
                        <option value="">Fuse</option>
                        <option value="">Hardware</option>
                        <option value="">IC</option>
                        <option value="">Label</option>
                        <option value="">Packaging</option>
                        <option value="">Part</option>
                        <option value="">Resistor</option>
                        <option value="">Switch</option>
                        <option value="">Transistor</option>
                        <option value="">Tubing</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>




                <!-- TEXT CONTROL -->
                <dt class="required hidden"><label for="txt_field_00">Number:</label></dt>
                <dd class="hidden">
                	<input type="text" id="txt_field_00" class="long_width" />
                	<span class="error_msg hidden">Error message...</span>
                </dd>

				<!-- Description Text Area -->

                <!-- TEXT CONTROL -->
                <dt class="required hidden"><label for="multitext_counter">Description:</label></dt>
                <dd class="hidden">
                    <textarea id="multitext_counter_00" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter_00" class="counter" size="3" maxlength="3" value="150">
                </dd>                


                <!-- TEXT CONTROL -->
                <dt class="required hidden"><label for="multitext_counter">Size:</label></dt>
                <dd class="hidden">
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>                

                <!-- SINGLE SELECT LIST -->
                <dt class="required hidden"><label for="ssl_00">Controller (flex):</label></dt>
                <dd class="hidden">
                    <div class="list_control single_list long_width">
                        <input type="text" id="ssl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
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
