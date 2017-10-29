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
    <script type="text/javascript" src="reject.php.js"></script>
    <title>Signoff Statement</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Sign-off Statement</h2>
                <p>Declaration &bull; D000123</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Please review the sign-off statement below and click continue to submit your Declaration.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic with_bottom_margin">
			<div class="signoff_statement">
                <h2>ACCEPTANCE OF TERMS</h2>
                <p>Yahoo! Inc. ("Yahoo!") welcomes you. Yahoo! provides its service to you subject to the following Terms of Service ("TOS"), which may be updated by us from time to time without notice to you. You can review the most current version of the TOS at any time at: http://info.yahoo.com/legal/us/yahoo/utos/utos-173.html . In addition, when using particular Yahoo! owned or operated services, you and Yahoo! shall be subject to any posted guidelines or rules applicable to such services, which may be posted from time to time. All such guidelines or rules (including but not limited to our Spam Policy) are hereby incorporated by reference into the TOS. Yahoo! may also offer other services that are governed by different Terms of Service. For instance, different terms apply to homesteaders on Yahoo! GeoCities or members of AT&T Yahoo! Dial or AT&T Yahoo! High Speed.</p>
                
                <h2>DESCRIPTION OF SERVICE</h2>
                <p>Yahoo! provides users with access to a rich collection of resources, including various communications tools, forums, shopping services, search services, personalized content and branded programming through its network of properties which may be accessed through any various medium or device now known or hereafter developed (the "Service"). You also understand and agree that the Service may include advertisements and that these advertisements are necessary for Yahoo! to provide the Service. You also understand and agree that the Service may include certain communications from Yahoo!, such as service announcements, administrative messages and the Yahoo! Newsletter, and that these communications are considered part of Yahoo! membership and you will not be able to opt out of receiving them. Unless explicitly stated otherwise, any new features that augment or enhance the current Service, including the release of new Yahoo! properties, shall be subject to the TOS. You understand and agree that the Service is provided "AS-IS" and that Yahoo! assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings. You are responsible for obtaining access to the Service, and that access may involve third-party fees (such as Internet service provider or airtime charges). You are responsible for those fees, including those fees associated with the display or delivery of advertisements. In addition, you must provide and are responsible for all equipment necessary to access the Service.</p>
                
                <p>Please be aware that Yahoo! has created certain areas on the Service that contain adult or mature content. You must be at least 18 years of age to access and view such areas.</p>

			</div>			
        </fieldset>
		
	
        <fieldset class="dynamic">
					<dl class="side_by_side_mixed">
                <!-- MULTI SELECT LIST -->
                <!-- COMMENTS TEXT AREA -->   

                <!-- TEXT CONTROL -->
                <dt><label for="txt_field_00">Notify List:</label></dt>
                <dd>
                	<input type="text" id="txt_field_00" class="long_width disabled" disabled="disabled" />
                	<span class="error_msg hidden">Error message...</span>
                </dd>


                <dt><label for="multitext_counter">Comments:</label></dt>

                <dd>
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>       



                <!-- TEXT CONTROL -->
                <dt class="required"><label for="txt_field_00">Password:</label></dt>
                <dd>
                	<input type="text" id="txt_field_00" class="long_width" />
                	<span class="error_msg hidden">Error message...</span>
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
    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>OK</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
