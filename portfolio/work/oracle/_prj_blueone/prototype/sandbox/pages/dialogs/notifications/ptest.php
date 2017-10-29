<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Notifications Dialog</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
    <script type="text/javascript" src="ptest.php.js"></script>
<style>
.altered #floater_window .handlebar
{
	background-color: silver !important;
	padding: 2px 0px;
	margin: 0px;
	background: none;
}
.altered #floater_window .palette_title
{
	margin: 1px 5px;
	text-align: left;
	color: #333;
}

.altered #floater_window a.close_palette 
{
	background: transparent url(/global/images/ux_palette/palette_close.png) no-repeat scroll 0 4px;
	right: 1px;
	top 4px;
}
</style>

 </head>
<body class="action_dialog"> 

<h2>Before</h2>
<div id="floater_window" tabindex="-1" class="palette nodrag" name="" style="z-index: 9009; top:50px; left:10px; display: block; height:400px">
	<div id="floater_content_R1_2000000085_0_display" tabindex="-1" class="palette_content nodrag">
		<div id="floater_handlebar_R1_2000000085_0_display" tabindex="-1" class="handlebar">
			<a id="close_floater_R1_2000000085_0_display" tabindex="-1" href="#" onclick="return false;" title="Esc" class="close_palette">
			<span>close</span></a>
			<div id="floater_title" tabindex="-1" class="palette_title nodrag">
				<p id="palette_title" tabindex="-1" class="nodrag">Division</p>
				<div id="palette_added_notice" tabindex="-1" style="display: none;" class="palette_added_notice"/>
				</div>
			</div>
		</div>	
		<div id="floater_filter_R1_2000000085_0_display" tabindex="-1" class="palette_filter nodrag">
			<label for="floater_search_text_R1_2000000085_0_display" tabindex="-1" class="nodrag" id="filterLabel">Filter: </label>
			<input type="text" value="" autocomplete="off" name="search" class="search nodrag" id="floater_search_text_R1_2000000085_0_display"/>
		</div>
		<div id="floater_results_div_R1_2000000085_0_display" tabindex="1" class="nodrag">
			<div id="floater_results_list_R1_2000000085_0_display" tabindex="-1" class="palette_results_list nodrag" style="overflow: auto;">
			<!-- CONTENT -->         
			</div>
		</div>
		<div id="paletteMessage" tabindex="-1" style="display: none;" class="palette_message_novalue nodrag"/>
		<div id="floater_resize_handle_R1_2000000085_0_display" tabindex="-1" class="palette_resizer nodrag"> </div>
	</div>
</div>
<h2>After</h2>
<div class="altered">
<div id="floater_window" tabindex="-1" class="palette nodrag" name="" style="z-index: 9009; top:250px; left: 10px; display: block; height:400px">
	<div id="floater_content_R1_2000000085_0_display" tabindex="-1" class="palette_content nodrag">
		<div id="floater_handlebar_R1_2000000085_0_display" tabindex="-1" class="handlebar">
			<a id="close_floater_R1_2000000085_0_display" tabindex="-1" href="#" onclick="return false;" title="Esc" class="close_palette">
			<span>close</span></a>
			<div id="floater_title" tabindex="-1" class="palette_title nodrag">
				<p id="palette_title" tabindex="-1" class="nodrag">Division</p>
				<div id="palette_added_notice" tabindex="-1" style="display: none;" class="palette_added_notice"/>
				</div>
			</div>
		</div>	
		<div id="floater_filter_R1_2000000085_0_display" tabindex="-1" class="palette_filter nodrag">
			<label for="floater_search_text_R1_2000000085_0_display" tabindex="-1" class="nodrag" id="filterLabel">Filter: </label>
			<input type="text" value="" autocomplete="off" name="search" class="search nodrag" id="floater_search_text_R1_2000000085_0_display"/>
		</div>
		<div id="floater_results_div_R1_2000000085_0_display" tabindex="1" class="nodrag">
			<div id="floater_results_list_R1_2000000085_0_display" tabindex="-1" class="palette_results_list nodrag" style="overflow: auto;">
			<!-- CONTENT -->         
			</div>
		</div>
		<div id="paletteMessage" tabindex="-1" style="display: none;" class="palette_message_novalue nodrag"/>
		<div id="floater_resize_handle_R1_2000000085_0_display" tabindex="-1" class="palette_resizer nodrag"> </div>
	</div>
</div>
</div>
 


                        

	<!--
    <div id="ux_palette" class="ux_palette notification_dialog">
			<div id="ux_palette_top" class="ux_palette_top">
				<div id="ux_palette_header" class="ux_palette_header">
					<a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
					<h4 id="ux_palette_title" class="ux_palette_title">Task Delegation Notification</h4>
					<a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
				</div>
			</div>
	
			<div id="ux_palette_main" class="ux_palette_main">
	
	
	
				<!-- CONTENT -->
	
	
	
	
			</div>
	
			<div id="ux_palette_bottom" class="ux_palette_bottom">
				<div id="ux_palette_message_area" class="ux_palette_message_area"></div>
				<div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
					<div class="left_column"></div>
					<div class="right_column">
						<a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
						<a href="#" id="cmdNext" class="button left_spacer"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
						<a href="#" id="cmdDelete" class="button"><span>Delete</span></a>
						<a href="#" id="cmdClose" class="button"><span></em>Close</span></a>
					</div>
				</div>
				<div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
			</div>
    </div>
	-->
</body>
</html>