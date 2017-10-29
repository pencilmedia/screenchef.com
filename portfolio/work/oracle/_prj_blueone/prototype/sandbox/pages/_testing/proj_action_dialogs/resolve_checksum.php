<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="global/css/default.css" />
<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

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
      <h2>Resolve Checksum Error</h2>
      <p>File &bull; Preferences.xsl</p>
    </div>
  </div>
  <!--************************************
            MESSAGES
        *************************************-->
  <div id="page_message" class="message info">
    <p>Please select an option below to resolve the checksum error for this file.</p>
  </div>
</div>
<div id="wrapper_action_dialog_content" class="content">
  <form id="form1" name="form1" action="#">
    <fieldset class="dynamic">
      <dl class="side_by_side_mixed selector_list less_left_margin with_top_margin">
        <dt class="place_holder">Blank</dt>
        <dd>
          <input id="deletefile" type="radio" name="attachments" class="form_selectors" checked />
          <label for="deletefile">Delete files from all vaults</label>
        </dd>
        <dt class="place_holder">Blank</dt>
        <dd>
          <input id="invalidfile" type="radio" name="attachments" class="form_selectors" />
          <label for="invalidfile">Delete file from the vaults where it is invalid</label>
          <table id="table_step_3_a" class="" cellpadding="0" cellspacing="0">
            <tbody>
              <tr class="header">
                <td>IFS Vault</td>
                <td>File Status</td>
              </tr>
              <tr>
                <td>DMF 1</td>
                <td>Valid</td>
              </tr>
              <tr>
                <td>DMF 2</td>
                <td>Invalid</td>
              </tr>
              <tr>
                <td>DMF 3</td>
                <td>Valid</td>
              </tr>
            </tbody>
          </table>
        </dd>
        <dt class="place_holder">Blank</dt>
        <dd>
          <input id="newfile" type="radio" name="attachments"  class="form_selectors" />
          <label for="newfile">Upload a new file to replace this file</label>
        </dd>
      </dl>
      <dl class="side_by_side_mixed">
        <!-- SELECT BOX -->
        <dt>
          <label for="upload">File:</label>
        </dt>
        <dd>
          <input type="file" id="upload" class="browse long_width" />
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
  <div class="column_three"><a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Resolve</span></a><a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a></div>
</div>
</body>
</html>
