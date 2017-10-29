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
    <script type="text/javascript" src="index.php.js"></script>
 </head>
<body class="action_dialog"> 
    <div id="ux_palette" class="ux_palette notification_dialog">
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
                <h4 id="ux_palette_title" class="ux_palette_title">Task Delegation Notification</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
            </div>
        </div>

        <div id="ux_palette_main" class="ux_palette_main">
            <dl class="side_by_side_text" style="margin-top: 20px;">
                <dt>From:</dt>
                <dd><p><a href="#">Smith, John (jsmith)</a></p></dd>
                <dt>Subject:</dt>
                <dd><p>Owner Assignment: You have been assigned ownership of an activity for Program QuickStep.</p></dd>
                <dt>Received:</dt>
                <dd><p>02/21/2008 09:00:28 PM GMT</p></dd>
                <dt>Regarding:</dt>
                <dd><p><a href="#">QuickStep</a></p></dd>
                <dt>&nbsp;</dt>
                <dd><hr /></dd>
                <dt>Message:</dt>
                <dd>
                    <p>You have been assigned ownership of an activity by Smith, John (jsmith) on 02/23/2008 09:00:00:28 PM GMT</p>
                    <p><br />Program Name: <a href="#">QuickStep</a></p>
                </dd>
            </dl>
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
</body>
</html>