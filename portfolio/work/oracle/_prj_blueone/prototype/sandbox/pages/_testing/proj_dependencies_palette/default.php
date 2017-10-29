<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Dependencies Palette</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/yui/animation/animation.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="default.php.js"></script>
 </head>
<body class="action_dialog"> 
<p>&nbsp;</p>
<h4 style="margin-left: 20px;">Dependencies Palette</h4>
    <div id="ux_palette" class="ux_palette">
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
                <h4 id="ux_palette_title" class="ux_palette_title">Dependencies &bull; Create Marketing Plan</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a> 
          	</div>
        </div>
        <div id="ux_palette_main" class="ux_palette_main with_padding">
            <h4 class="toggle bsone collapse">Dependent Upon</h4>
            <div class="toggle_bsone toggle_content">
                <table class="normal">
                    <thead>
                    	<tr>
                            <th class="icon_cell"></th>
                            <th class="icon_cell"></th>
                            <th>Activity</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Dependency Type</th>
                            <th>Buffer (days)</th>
                       	</tr>
                    </thead>
                    <tbody>
                    	<tr>
                            <td class="icon_cell"><img src="global/images/ico_status_task_complete.png" /></td>
                            <td class="icon_cell"><img src="global/images/ico_obj_dependency_external.png" /></td>
                            <td>English Key Features</td>
                            <td>02/08/2008</td>
                            <td>02/08/2008</td>
                            <td>Finish-to-Start</td>
                            <td>1</td>
                      	</tr>
                    	<tr>
                            <td class="icon_cell"><img src="global/images/ico_status_task_needs_attention.png" /></td>
                            <td class="icon_cell"><img src="global/images/ico_obj_dependency_internal.png" /></td>
                            <td>Complete RDD</td>
                            <td>02/08/2008</td>
                            <td>02/08/2008</td>
                            <td>Finish-to-Start</td>
                            <td>1</td>
                      	</tr>
                    	<tr>
                            <td class="icon_cell"><img src="global/images/ico_status_task_offtrack.png" /></td>
                            <td class="icon_cell"></td>
                            <td>Complete Another Document</td>
                            <td>02/08/2008</td>
                            <td>02/08/2008</td>
                            <td>Start-to-Finish</td>
                            <td>1</td>
                      	</tr>
                    	<tr>
                            <td class="icon_cell"><img src="global/images/ico_status_task_ontrack.png" /></td>
                            <td class="icon_cell"><img src="global/images/ico_obj_dependency_external.png" /></td>
                            <td>Someother Task</td>
                            <td>02/08/2008</td>
                            <td>02/08/2008</td>
                            <td>Finish-to-Finish</td>
                            <td>1</td>
                      	</tr>
                    </tbody>
                </table>
            </div>
            <h4 class="toggle bstwo collapse">Required For</h4>
            <div class="toggle_bstwo toggle_content">
                <table class="normal">
                    <thead>
                        <th class="icon_cell"></th>
                        <th>Activity</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Dependency Type</th>
                        <th>Buffer (days)</th>
                    </thead>
                    <tbody>
                        <td colspan="6">No data to display.</td>
                    </tbody>
                </table>         
            </div>
       	</div>

        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar" style="display:none;">
                <div class="right_column">
                    <a href="#" id="cmdNext" class="button"><span>Close</span></a>
                </div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
        </div>
 	</div>
</body>
</html>