<?
	$global_toolbar_cookie 				= isset( $_COOKIE['global_toolbar'] ) ? $_COOKIE['global_toolbar'] : '';
	$global_toolbar_text_cookie 		= isset( $_COOKIE['global_toolbar_text'] ) ? $_COOKIE['global_toolbar_text'] : '';
	$dialog_title_bar_cookie			= isset( $_COOKIE['dialog_title_bar'] ) ? $_COOKIE['dialog_title_bar'] : '';
	$dialog_title_bar_text_cookie		= isset( $_COOKIE['dialog_title_bar_text'] ) ? $_COOKIE['dialog_title_bar_text'] : '';
	$widget_title_bar_cookie			= isset( $_COOKIE['widget_title_bar'] ) ? $_COOKIE['widget_title_bar'] : '';
	$widget_title_bar_text_cookie		= isset( $_COOKIE['widget_title_bar_text'] ) ? $_COOKIE['widget_title_bar_text'] : '';
	$selected_controls_cookie			= isset( $_COOKIE['selected_controls'] ) ? $_COOKIE['selected_controls'] : '';
	$selected_controls_text_cookie		= isset( $_COOKIE['selected_controls_text'] ) ? $_COOKIE['selected_controls_text'] : '';
	$non_selected_controls_cookie		= isset( $_COOKIE['non_selected_controls'] ) ? $_COOKIE['non_selected_controls'] : '';
	$non_selected_controls_text_cookie	= isset( $_COOKIE['non_selected_controls_text'] ) ? $_COOKIE['non_selected_controls_text'] : '';
	$control_highlights_cookie			= isset( $_COOKIE['control_highlights'] ) ? $_COOKIE['control_highlights'] : '';
	$control_highlights_text_cookie		= isset( $_COOKIE['control_highlights_text'] ) ? $_COOKIE['control_highlights_text'] : '';
	$message_area_cookie				= isset( $_COOKIE['message_area'] ) ? $_COOKIE['message_area'] : '';
	$message_area_text_cookie			= isset( $_COOKIE['message_area_text'] ) ? $_COOKIE['message_area_text'] : '';
	$backgrounds_cookie					= isset( $_COOKIE['backgrounds'] ) ? $_COOKIE['backgrounds'] : '';
	$backgrounds_text_cookie			= isset( $_COOKIE['backgrounds_text'] ) ? $_COOKIE['backgrounds_text'] : '';
	$borders_cookie						= isset( $_COOKIE['borders'] ) ? $_COOKIE['borders'] : '';

	//echo ($global_toolbar_text_cookie . ' ' . $main_accent_text_cookie . ' ' . $control_highlights_text_cookie . ' ' . $backgrounds_text_cookie );
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
    <script type="text/javascript" src="specify_color_swatch.php.js"></script>
	<script>var cp = new ColorPicker();</script>
    <title>Specify Color Swatch</title>
	<style>
		#global_toolbar_sample
		{
			background-color: <? echo $global_toolbar_cookie ?>;
			color: <? echo $global_toolbar_text_cookie ?>;
		}
		#dialog_title_bar_sample
		{
			background-color: <? echo $dialog_title_bar_cookie ?>;
			color: <? echo $dialog_title_bar_text_cookie ?>;
		}
		#widget_title_bar_sample
		{
			background-color: <? echo $widget_title_bar_cookie ?>;
			color: <? echo $widget_title_bar_text_cookie ?>;
		}
		#selected_controls_sample
		{
			background-color: <? echo $selected_controls_cookie ?>;
			color: <? echo $selected_controls_text_cookie ?>;
		}
		#non_selected_controls_sample
		{
			background-color: <? echo $non_selected_controls_cookie ?>;
			color: <? echo $non_selected_controls_text_cookie ?>;
		}
		#control_highlights_sample
		{
			background-color: <? echo $control_highlights_cookie ?>;
			color: <? echo $control_highlights_text_cookie ?>;
		}
		#message_area_sample
		{
			background-color: <? echo $message_area_cookie ?>;
			color: <? echo $message_area_text_cookie ?>;
		}
		#backgrounds_sample
		{
			background-color: <? echo $backgrounds_cookie ?>;
			color: <? echo $backgrounds_text_cookie ?>;
		}
		#borders_sample
		{
			background-color: <? echo $borders_cookie ?>;
		}
		#colorPickerSelectedColorValue { background-color: #fff; }
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
                <h2>Specify Color Swatch</h2>
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
				<td class="right"><label for="theme_name">Name:</label></td>
				<td colspan="3"><input type="text" id="theme_name" name="theme_name"/></td>
			</tr>
			<tr id="canned_row">
				<td class="right"><label for="theme_name">Canned Themes:</label></td>
				<td colspan="3">
					<select style="width:130px" id="canned_themes" name="canned_themes">
						<option value=""></option>
						<!--
						<option value="blue_one">blueONE</option>
						-->
						<option value="blue_steel">Blue Steel</option>
						<option value="corporate">Corporate</option>
						<option value="iron_man">Iron Man</option>
						<option value="olive">Olive</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="4">&nbsp;</td>
			</tr>
			<tr class="strong">
				<td>&nbsp;</td>
				<td>Background</td>
				<td>Text Color</td>
				<td>Sample</td>
			</tr>
			<!-- ** GLOBAL TOOL BAR ** -->
			<tr>
				<td class="right"><label for="global_toolbar">Global Toolbar:</label></td>
				<td>
					<input type="text" id="global_toolbar" name="global_toolbar" class="background_value" value="<? echo $global_toolbar_cookie; ?>" />
					<a href="#" onclick="cp.select(document.forms[0].global_toolbar,'pick');return false;" name="pick" id="pick" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="global_toolbar_text" name="global_toolbar_text" class="background_text">
						<option value="#333" <? if ($global_toolbar_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($global_toolbar_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="global_toolbar_sample">Text</span>
				</td>
			</tr>
			<!-- ** DIALOG TITLE BAR ** -->
			<tr>
				<td class="right"><label for="dialog_title_bar">Dialog Bars:</label></td>
				<td>
					<input type="text" id="dialog_title_bar" name="dialog_title_bar" class="background_value" value="<? echo $dialog_title_bar_cookie; ?>"/>
					<a href="#" onclick="cp.select(document.forms[0].dialog_title_bar,'pick6');return false;" name="pick6" id="pick6" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="dialog_title_bar_text" name="dialog_title_bar_text" class="background_text">
						<option value="#333" <? if ($dialog_title_bar_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($dialog_title_bar_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="dialog_title_bar_sample">Text</span>
				</td>
			</tr>
			<!-- ** WIDGET TITLE BAR ** -->
			<tr>
				<td class="right"><label for="widget_title_bar">Widget Title Bar:</label></td>
				<td>
					<input type="text" id="widget_title_bar" name="widget_title_bar" class="background_value" value="<? echo $widget_title_bar_cookie; ?>"/>
					<a href="#" onclick="cp.select(document.forms[0].widget_title_bar,'pick8');return false;" name="pick8" id="pick8" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="widget_title_bar_text" name="widget_title_bar_text" class="background_text">
						<option value="#333" <? if ($widget_title_bar_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($widget_title_bar_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="widget_title_bar_sample">Text</span>
				</td>
			</tr>

			<tr>
				<td colspan="4">&nbsp;</td>
			</tr>

			<!-- ** SELECTED CONTROLS ** -->
			<tr>
				<td class="right"><label for="selected_controls">Selected Controls:</label></td>
				<td>
					<input type="text" id="selected_controls" name="selected_controls" class="background_value" value="<? echo $selected_controls_cookie; ?>"/>
					<a href="#" onclick="cp.select(document.forms[0].selected_controls,'pick9');return false;" name="pick9" id="pick9" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="selected_controls_text" name="selected_controls_text" class="background_text">
						<option value="#333" <? if ($selected_controls_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($selected_controls_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="selected_controls_sample">Text</span>
				</td>
			</tr>

			<!-- ** NON-SELECTED CONTROLS ** -->
			<tr>
				<td class="right"><label for="non_selected_controls">Non-Selected Controls:</label></td>
				<td>
					<input type="text" id="non_selected_controls" name="non_selected_controls" class="background_value" value="<? echo $non_selected_controls_cookie; ?>"/>
					<a href="#" onclick="cp.select(document.forms[0].non_selected_controls,'pick12');return false;" name="pick12" id="pick12" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="non_selected_controls_text" name="non_selected_controls_text" class="background_text">
						<option value="#333" <? if ($non_selected_controls_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($non_selected_controls_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="non_selected_controls_sample">Text</span>
				</td>
			</tr>
			
			<!-- ** CONTROL HIGHLIGHTS ** -->
           
			<tr>
				<td class="right"><label for="control_highlights">Control Highlight:</label></td>
				<td>
					<input type="text" id="control_highlights" name="control_highlights" class="background_value" value="<? echo $control_highlights_cookie; ?>" />
					<a href="#" onclick="cp.select(document.forms[0].control_highlights,'pick3');return false;" name="pick3" id="pick3" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="control_highlights_text" name="control_highlights_text" class="background_text">
						<option value="#333" <? if ($control_highlights_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($control_highlights_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="control_highlights_sample">Text</span>
				</td>
			</tr>

			<tr><td colspan="4">&nbsp;</td></tr>

			<!-- ** MESSAGE AREA ** -->
			<tr>
				<td class="right"><label for="message_area">Message Area:</label></td>
				<td>
					<input type="text" id="message_area" name="message_area" class="background_value" value="<? echo $message_area_cookie; ?>"/>
					<a href="#" onclick="cp.select(document.forms[0].message_area,'pick10');return false;" name="pick10" id="pick10" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="message_area_text" name="message_area_text" class="background_text">
						<option value="#333" <? if ($message_area_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($message_area_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="message_area_sample">Text</span>
				</td>
			</tr>
			
			<!-- ** BACKGROUND ** -->
			<tr>
				<td class="right"><label for="backgrounds">Backgrounds:</label></td>
				<td>
					<input type="text" id="backgrounds" name="backgrounds" class="background_value"  value="<? echo $backgrounds_cookie; ?>" />
					<a href="#" onclick="cp.select(document.forms[0].backgrounds,'pick4');return false;" name="pick4" id="pick4" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>
					<select id="backgrounds_text" name="backgrounds_text" class="background_text">
						<option value="#333" <? if ($backgrounds_text_cookie == '#333') echo 'selected="selected"' ?>>Dark</option>
						<option value="#fff" <? if ($backgrounds_text_cookie == '#fff') echo 'selected="selected"' ?>>Light</option>
					</select>
				</td>
				<td>
					<span class="sample" id="backgrounds_sample">Text</span>
				</td>
			</tr>	

			<!-- ** BORDERS ** -->
			<tr>
				<td class="right"><label for="borders">Slider Separator:</label></td>
				<td>
					<input type="text" id="borders" name="borders" class="background_value" value="<? echo $borders_cookie; ?>"/>
					<a href="#" onclick="cp.select(document.forms[0].borders,'pick5');return false;" name="pick5" id="pick5" class="button"><span><em class="edit">&nbsp;</em></span></a> 
				</td>
				<td>&nbsp;</td>
				<td>
					<span class="sample" id="borders_sample">Text</span>
				</td>
			</tr>


		</table>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
	<div class="column_one">
   		<input type="checkbox" id="optional" name="clear_theme" value="ON" /> <label for="optional">Remove theme</label>
		&nbsp;
		&nbsp;
   		<input type="checkbox" id="gradient" name="gradient" value="ON" <? if (isset ( $_COOKIE['gradient'] )){echo 'checked="checked"';} ?> /> <label for="gradient">Gradient</label>
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
