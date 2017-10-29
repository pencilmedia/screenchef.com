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
	<title>File Load Options</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>File Load</h2>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the index file and specify upload options.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">

			<dl class="side_by_side_mixed with_top_margin">
                <dt>Index File</dt>
                <dd>
                	<input type="file" style="height:22px;"/>
                </dd>
			</dl>
          <dl class="side_by_side selector_list">
                <dt>Attribute Delimeter:</dt>
                <dd class="radio_with_bottom_margin mixed">

                	<input id="pub_mode_auth" type="radio" name="pub_mode" class="form_selectors" checked /> <label for="pub_mode_auth">Tab</label> &nbsp;
                    
                    <input id="pub_mode_red" type="radio" name="pub_mode" class="form_selectors" /> <label for="pub_mode_red">Other</label> <input type="text" size="2" />
               	</dd>
         </dl>
         
 		<dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_00">Attribute Name-Value Separator:</label></dt>
                <dd>
                	<input type="text" size="2" value="=" />
                </dd>
                <dt><label for="req_sel_00">Text Qualifier:</label></dt>
                <dd>
                	<input type="text" size="2" value="''" />
                </dd>            
                <dt><label for="req_sel_00">MuliList Delimiter:</label></dt>
                <dd>
                	<input type="text" size="2" value=";" />
                </dd>                <!-- SELECT CONTROL -->

			</dl>
      
            <dl class="side_by_side_mixed chk_group">


				<dt><label>&nbsp;</label></dt>
				<dd>
					<input id="chk1" type="checkbox" name="" class="form_selectors" /> <label for="chk1">Attach files to latest revisions when the specify revision can not be found.</label>
				</dd>
				<dt><label>&nbsp;</label></dt>
				<dd>
					<input id="chk2" type="checkbox" name="" class="form_selectors" /> <label for="chk2">Attach files to Incorporated items.</label>
				</dd>
				<dt><label>&nbsp;</label></dt>
				<dd>
					<input id="chk3" type="checkbox" name="" class="form_selectors" /> <label for="chk3">Create separate folder for each file.</label>
				</dd>

			</dl>


                <!-- MULTI SELECT LIST
                <dt><label for="msl_00">Filters</label></dt>
                <dd>
                    <div class="list_control multi_list long_width">

                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic action_list">&nbsp;</em>&nbsp;</span></a>
                </dd>

				 -->

        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Loading</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
