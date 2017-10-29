<?
	$global_toolbar_cookie 			= isset( $_COOKIE['global_toolbar'] ) ? $_COOKIE['global_toolbar'] : '';
	$global_toolbar_text_cookie 	= isset( $_COOKIE['global_toolbar_text'] ) ? $_COOKIE['global_toolbar_text'] : '';
	$main_accent_cookie			 	= isset( $_COOKIE['main_accent'] ) ? $_COOKIE['main_accent'] : '';
	$main_accent_text_cookie 		= isset( $_COOKIE['main_accent_text'] ) ? $_COOKIE['main_accent_text'] : '';
	$highlight_cookie				= isset( $_COOKIE['highlight'] ) ? $_COOKIE['highlight'] : '';
	$highlight_text_cookie			= isset( $_COOKIE['highlight_text'] ) ? $_COOKIE['highlight_text'] : '';
	$backgrounds_cookie				= isset( $_COOKIE['backgrounds'] ) ? $_COOKIE['backgrounds'] : '';
	$backgrounds_text_cookie		= isset( $_COOKIE['backgrounds_text'] ) ? $_COOKIE['backgrounds_text'] : '';
	$borders_cookie			= isset( $_COOKIE['borders'] ) ? $_COOKIE['borders'] : '';
	//echo ($global_toolbar_text_cookie . ' ' . $main_accent_text_cookie . ' ' . $highlight_text_cookie . ' ' . $backgrounds_text_cookie );
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="global/js/color_picker.js"></script>
    <script type="text/javascript" src="specify_theme_options.php.js"></script>
	<script>var cp = new ColorPicker();</script>
    <title>Specify Theme Options</title>
	<style>
		.action_dialog select.long_width { width: 65% !important; }
	</style>
</head>
<body class="action_dialog">
 <form id="form_dialogs" action="specify_color_swatch_process.php" method="post" name="frm1">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Specify Theme Options</h2>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select the colors you would like to include in your new color palette.  For colors that will be background to text select whether text should be dark or light.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<table id="theme_table">
			<tr>
				<td colspan="4">&nbsp;</td>
			</tr>
			<tr>
				<td class="right"><label for="global_toolbar">Branding:</label></td>
				<td>
					<select id="global_toolbar_text" name="global_toolbar_text" class="long_width">
						<option>Orange - Black</option>
					</select>
					<a href="#" id="cmdApply" class="button"><span><em class="createNew">&nbsp;</em></span></a> 
					<a href="#" id="cmdApply" class="button"><span><em class="delete">&nbsp;</em></span></a> 
				</td>
			</tr>
			<tr>
				<td class="right"><label for="global_toolbar">Color Swatch:</label></td>
				<td>
					<select id="global_toolbar_text" name="global_toolbar_text" class="long_width">
						<option>Chrome</option>
					</select>
					<a href="#" id="cmdApply" class="button"><span><em class="createNew">&nbsp;</em></span></a> 
					<a href="#" id="cmdApply" class="button"><span><em class="delete">&nbsp;</em></span></a> 
					<a href="#" id="cmdApply" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
			</tr>
			<tr>
				<td class="right"><label for="global_toolbar">Style:</label></td>
				<td>
					<select id="global_toolbar_text" name="global_toolbar_text" class="long_width">
						<option>Gradient</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="right"><label for="global_toolbar">Icon Motif:</label></td>
				<td>
					<select id="global_toolbar_text" name="global_toolbar_text" class="long_width">
						<option>Hight Tech</option>
					</select>
				</td>
			</tr>
		</table>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
	<div class="column_one">
   		<a href="#" id="cmdApply" class="button"><span>Preview</span></a> 
	</div>
    <div class="column_three">
        <a href="#" id="cmdApply" class="button"><span><em class="save_dialog">&nbsp;</em>Apply</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</form>
<script>cp.writeDiv()</script>
</body>
</html>
