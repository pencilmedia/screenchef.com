<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <title>Add Files</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add Files</h2>
                <p>Part &bull; P01250</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Browse for files to add. Zipped files can be unzipped and added as individual files by checking the Unzip option.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		 <form id="form_dialogs" class="add_files" action="">
			<fieldset class="dynamic fixed_set">
				<dl class="field_list column_one">
					<dt><label>Filename</label></dt>
					<dd>
						<input type="file" id="first_field" class="browse long_width" tabindex="1" />
					</dd>
					<dd>
						<input type="file" class="browse long_width" tabindex="4" />
					</dd>
					<dd>
						<input type="file" class="browse long_width" tabindex="7" />
					</dd>
					<dd> 
						<input type="file" class="browse long_width" tabindex="10" />
					</dd>
					<dd>
						<input type="file" class="browse long_width" tabindex="13" />
					</dd>
				</dl>
		
				<dl class="field_list column_two">
					<dt><label>Description</label></dt>
					<dd>
						<input type="text" value="" tabindex="2" class="long_width" />
						<span><input id="check1" type="checkbox" class="form_selectors" tabindex="3" /> <label for="check1">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="5" class="long_width" />
						<span><input id="check2" type="checkbox" tabindex="6" class="form_selectors" /> <label for="check2">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="8" class="long_width" />
						<span><input id="check3" type="checkbox" tabindex="9" class="form_selectors" /> <label for="check3">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="11" class="long_width" />
						<span><input id="check4" type="checkbox" tabindex="12" class="form_selectors" /> <label for="check4">Unzip</label></span>
					</dd>
					<dd>
						<input type="text" value="" tabindex="14" class="long_width" />
						<span><input id="check5" type="checkbox" tabindex="15" class="form_selectors" /> <label for="check5">Unzip</label></span>
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
							<span class="single_line"><input id="check6" type="checkbox" tabindex="17" class="form_selectors" /> <label for="check6">Add all files to a single file folder</label></span>
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
