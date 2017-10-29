<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<link rel="stylesheet" type="text/css" href="global/css/default.css" />
<link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
<title>Save Search As</title>
</head>
<body class="action_dialog">
<div id="wrapper_action_dialog_header" class="header">
  <!--************************************
            HEADER
        *************************************-->
  <div class="header_wrapper">
    <div class="column_one">
      <h2>Save Search As</h2>
      <p><!--Resistor &bull; P00034--></p>
    </div>
  </div>
  <!--************************************
            MESSAGES
        *************************************-->
  <div id="page_message" class="message info">
    <p>Enter the search name and specify the folder to save it to.</p>
  </div>
</div>
<div id="wrapper_action_dialog_content" class="content">
  <form id="form1" name="form1" action="#">
    <fieldset class="dynamic">
    <dl class="side_by_side_mixed">
      <!-- TEXT CONTROL -->
      <dt class="required">
        <label for="txt_field_00">Search Name:</label>
      </dt>
      <dd>
        <input type="text" id="txt_field_00" class="long_width" />
        <span class="error_msg hidden">Error message...</span> </dd>
      <!-- FOLDER CONTROL -->
      <dt>
        <label for="folder_00">Select Folder:</label>
      </dt>
      <dd class="">
        <textarea id="folder_00" class="long_width folder"></textarea>
      </dd>
      <dt>
        <label>&nbsp;</label>
      </dt>
      <dd class="command"> <a href="#" id="cmd_new_folder_00" class="button"><span>New Folder</span></a> </dd>
    </dl>
    </fieldset>
  </form>
</div>
<!--************************************
	FOOTER
*************************************-->
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    	<input type="checkbox" id="optional" /> <label for="optional">Create shortcut reference to the existing search</label>
    </div>
  <div class="column_three"> <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a> </div>
</div>
</body>
</html>
