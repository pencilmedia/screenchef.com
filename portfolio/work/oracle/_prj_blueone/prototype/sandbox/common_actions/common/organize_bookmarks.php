<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="add_modify_partners.php.css" />	
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="add_modify_partners.php.js"></script>
	<title>Organize Bookmarks</title>
</head>
<body class="action_dialog record_by_record">
	<div id="wrapper_action_dialog_header" class="header" style="min-width:620px;">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Organize Bookmarks</h2>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Lorem Ipsum...</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a class="button" href="#"><span>Add</span></a>
                    <a class="button" href="#"><span>Remove</span></a>
                    <a class="button" href="#"><span>Alphabetize<em class="dropdown"> </em></span></a>
					
                    <span class="btn_divide"></span>

                    <a class="button" href="#"><span>Expand All</span></a>
                    <a class="button" href="#"><span>Collapse All</span></a>

                </p>
            </div>
            <div class="column_three">
                <!--
                <p>
                    <a class="button" href="#"><span>Save</span></a>
                    <a class="button" href="#"><span>Cancel</span></a>
                </p>
                -->
            </div>
        </div>
        <table class="rbr" cellpadding="0" cellspacing="0">
            <thead>
            	<tr>
                	<th>Name</th>
                    <th>Identifier</th>
                </tr>
            </thead>
            <tbody>
            	<tr>
                	<td></td>
                	<td></td>
            	</tr>
			</tbody>

        </table>
        
        <p>
        </p>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">
	    </div>
     	<div class="column_three">
	        <a href="#" id="cmdFinish" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>