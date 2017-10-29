<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Saved Searches</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="issues.php.js"></script>
	<style>
		.with_top_margin { padding-top: 10px !important }
	</style>
 </head>
<body class="action_dialog"> 
<p>New Palette: Styles for this palette are located in ux_palette_base.css.</p>
<p>This Palette is NOT dependant on palette_base.css.</p>
<p>&nbsp;</p>
    <div id="ux_palette" class="ux_palette">
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
              <h4 id="ux_palette_title" class="ux_palette_title">Off-Track Activites by Program</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
          	</div>
        </div>



        <div id="ux_palette_main" class="ux_palette_main">

			<p>&nbsp;</p>

			<fieldset class="dynamic with_top_margin">
				<dl class="side_by_side_mixed with_top_margin">
				
					<!-- SINGLE SELECT LIST -->
					<dt style="width:20%"><label for="ssl_00">Root Program (General Info) Equal To:</label></dt>
					<dd class="hidden with_bottom_margin">
						<div class="list_control single_list long_width">
							<input type="text" id="ssl_00" autocomplete="off" />
							<div class="auto_complete_results"></div>
							<div class="pill_container" tabindex="-1">
	
								<ul id="pillbox_00"></ul>
							</div>
						</div>
						<a href="#" id="cmd_ssl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
					</dd> 

				</dl>
			</fieldset>

        </div>

        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
                	<a href="#" id="cmdBack" class="button"><span>Run</span></a> 
					<a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
				</div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
      </div>
    </div>
	
	

	
	
</body>
</html>