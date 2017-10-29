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
	<title>Create Criteria</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Criteria</h2>
                <p>&nbsp;</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Create a new criteria definition to use for automated flows such as transferring sign-off authority or transferring content.</p>
        </div>
	</div>


	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                    <dt class="required"><label for="textbox1">Name:</label></dt>
                    <dd>
                        <input type="text" class="medium_width" />
                    </dd>
                        <dt><label for="desc01">Description:</label></dt>
						<dd>   
                             <textarea id="desc01" wrap="physical" cols="20" rows="3" class="medium_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)"></textarea>
                        <input readonly="readonly" type="text" id="multitext_char_counter_00" class="counter" size="3" maxlength="3" value="150">
						</dd>
                        <dt><label for="type1">Type:</label></dt>
                        <dd>				
                            <select id="type1" class="medium_width">
                                <option value="Option 1">Changes</option>
                            </select>
                        </dd>
            </dl>
        </fieldset>
        
        
			<div class="search_options">
				<!--************************************
				   EDIT FILTER TABLE
				*************************************-->
				<div id="advanced_search_table_content" class="advanced_search_table_content">
                        <div class="advanced_search_labels">
                            <div class="advanced_search_paren">
                                (
                            </div>
                            <div class="advanced_search_paren_img">
                                &nbsp;
                            </div>
                            <div class="advanced_search_attributes">
                                Attribute
                            </div>
                            <div class="advanced_search_operator">
                                Operator
                            </div>
                            <div class="advanced_search_value">
                                Value
                            </div>
                            <div class="advanced_search_paren_img">
                                &nbsp;
                            </div>
                            <div class="advanced_search_paren">
                                )
                            </div>
                            <div class="advanced_search_join">
                                Join
                            </div>
                        </div>
                        <div class="advanced_search_options" style="min-width: 720px;">
						<div class="advanced_search_icon">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_value">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
                    <div class="search_attachment_option">
                        <label class=""><input class="checkbox" type="checkbox" /> Match case for values</label>
                    </div> 
					</div>
				</div>
			</div>
        
        
        
        
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    	&nbsp;
    </div>
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
