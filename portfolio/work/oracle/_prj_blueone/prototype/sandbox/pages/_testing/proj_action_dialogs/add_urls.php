<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <title>Add URL</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add URL Links</h2>
                <p>Part &bull; P01250</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Enter URLs to add.  Preview the URL to ensure that it has been entered properly.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		 <form id="form_dialogs" class="add_urls" action="">
			<fieldset class="dynamic fixed_set">
				<dl class="field_list column_one">
					<dt><label>URL</label></dt>
					<dd>
						<input id="first_field" type="text" tabindex="1" class="medium_width" value="http://" /><a href="#" onclick="" class="button" tabindex="2"><span>Preview</span></a>
					</dd>
					<dd>
						<input type="text" tabindex="4" class="medium_width" value="http://" /><a href="#" onclick="" class="button" tabindex="5"><span>Preview</span></a>
					</dd>
					<dd>
						<input type="text" tabindex="7" class="medium_width" value="http://" /><a href="#" onclick="" class="button" tabindex="8"><span>Preview</span></a>
					</dd>
					<dd>
						<input type="text" tabindex="10" class="medium_width" value="http://" /><a href="#" onclick="" class="button" tabindex="11"><span>Preview</span></a>
					</dd>
					<dd>
						<input type="text" tabindex="13" class="medium_width" value="http://" /><a href="#" onclick="" class="button" tabindex="14"><span>Preview</span></a>
					</dd>
				</dl>
		
				<dl class="field_list column_two">
					<dt><label>Description</label></dt>
					<dd >
						<input type="text" value="" tabindex="3" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="6" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="9" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="12" class="medium_width" />
					</dd>
					<dd>
						<input type="text" value="" tabindex="15" class="medium_width" />
					</dd>
				</dl>
		
			</fieldset>
			<fieldset class="full">
				<dl class="side_by_side_mixed">
						<dt><label>Type:</label></dt>
						<dd>
							<select tabindex="16" class="medium_width">
								<option>File Folder</option>
							</select>
							<span class="single_line"><input id="check6" type="checkbox" class="form_selectors" tabindex="17" /> <label for="check6">Add all files to a single file folder</label></span>
						</dd>
				</dl>
			</fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
