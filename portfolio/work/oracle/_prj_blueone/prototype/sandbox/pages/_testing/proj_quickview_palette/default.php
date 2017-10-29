<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>QuickView Palette with Tabs</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="default.php.js"></script>
 </head>
<body class="action_dialog"> 
<p>New Palette: Styles for this palette are located in ux_palette_base.css.</p>
<p>This Palette is NOT dependant on palette_base.css.</p>
<p>&nbsp;</p>
    <div id="ux_palette" class="ux_palette">
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
              <h4 id="ux_palette_title" class="ux_palette_title">Item &bull; P000123</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
          	</div>
        </div>



        <div id="ux_palette_main" class="ux_palette_main">
			<div id="new_tabs" style="margin-top:10px;">
				<ul>
					<li><span>General Info</span></li>
					<li><a href="#">Manufacturers</a></li>
					<li><a href="#">Attachments</a></li>
				</ul>
			</div>			
			
			<!-- Old Tabs
			<ul class="palette_tabs nodrag">
				<li><a class="selected" href="#" id="sortColumnsTab"><span class="nodrag" id="sortColumnsTabspan">General Info</span></a></li>
				<li><a class="" href="#" id="formatColumnsTab"><span class="nodrag" id="formatColumnsTabspan">Manufacturers</span></a></li>
				<li><a class="" href="#" id="propertiesTab"><span class="nodrag" id="propertiesTabspan">Attachments</span></a></li>
			</ul>
			-->
			<p><!--Content Goes Here...--></p>
        </div>

        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
                	<a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
                	<a href="#" id="cmdBack" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a> 
					<a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
				</div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
      </div>
    </div>
	
	

	
	
</body>
</html>