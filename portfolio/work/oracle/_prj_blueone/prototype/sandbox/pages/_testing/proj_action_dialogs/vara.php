<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="create_new_sourcing_project_a.php.js"></script>
	<title>Create New...</title>
	<style>
		fieldset.two_columns { min-width:650px;}
		fieldset.two_columns div { width: 45%; float: left; mind-width: 400px;}
		dd.checkbox { padding-top: 5px; }
		.action_dialog.create_new dl.side_by_side_mixed dd,
		.action_dialog.create_new dl.side_by_side_mixed dt
		{
			margin-bottom: 3px;
		}
	</style>
</head>
<body class="action_dialog create_new">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create New</h2>
                <p>Sourcing Projects</p>
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

		<fieldset class="dynamic two_columns">
        	<div>
                <dl class="side_by_side_mixed">
                    <!-- Required Select -->
                    <dt><label for="first_field">Name:</label></dt>
                    <dd>
                        <input type="text" class="long_width" />
                    </dd>
                    <!-- Required Select -->
                    <dt><label for="req_sel_00">Type:</label></dt>
                    <dd>
                        <select id="req_sel_00" class="long_width">
                            <option value="">Opt 1</option>
                            <option value="">Opt 2</option>
                        </select>
                    </dd>
    
                    <!-- Required Select -->
                    <dt><label for="req_sel_00">Apply To:</label></dt>
                    <dd>
                        <select id="req_sel_00" class="long_width">
                            <option value="">Opt 1</option>
                            <option value="">Opt 2</option>
                        </select>
                    </dd>
                </dl>
            </div>
        	<div>
                <dl class="side_by_side_mixed">
                    <!-- Description Text Area -->
                    <dt><label for="desc_00">Description:</label></dt>
                    <dd class="large_textbox">
                        <textarea id="desc_00" class="long_width"></textarea>
                    </dd>
    
    
                    <!-- Required Select -->
                    <dt><label for="req_sel_00x">Default View:</label></dt>
                    <dd class="checkbox">
                        <input type="checkbox" id="req_sel_00x"/>
                    </dd>
                </dl>
          	</div>
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
