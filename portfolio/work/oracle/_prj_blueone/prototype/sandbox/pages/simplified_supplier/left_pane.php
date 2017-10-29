<div id="nav" class="LeftPane">

    <div id="LeftPaneTop" class="LeftPaneTop">
        <div class="leftPaneHeader"></div>
    </div>
	<div class="LeftPaneBottom">
		<div id="slideMenu" class="slideMenu">
            <div id="hmpgnav" class="slideMenuItem">
                <div class="slideMenuHeader selected"><em class="simplified_home">&nbsp;</em> <a href="#">Home</a></div>
                <div class="slideMenuBody homeNav">
                    <ul>
                        <li class="selected"><a href="#" onclick="agile.ux.xhr.get('car_content','homepage.php');">Open Requests</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','homepage.php');">Due Today</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','homepage.php');">Due Tomorrow</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','homepage.php');">Delinquent</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','homepage.php');">Inactive Requests</a></li>
                        <li class="notification"><a href="#" onclick="agile.ux.xhr.get('car_content','notifications.php');"><span>Notifications<em class="off_track">&nbsp;</em></span></a></li>
                    </ul>
                </div>
            </div>
            <div id="gennav" class="slideMenuItem" >
                <div class="slideMenuHeader selected"><em class="simplified_left_pane">&nbsp;</em> <a href="#">Response Steps</a></div>
                <div class="slideMenuBody">
                    <ul>
                        <li class="selected"><a href="#" onclick="agile.ux.xhr.get('car_content','cover_page.php');">1. View Cover Page</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','view_attachments.php');">2. View Attachments</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','view_line_items.php');">3. View Line Items</a></li>
                            <ul>
                                <li><a href="#" onclick="agile.ux.xhr.get('car_content','view_line_items.php'); javascript:launch_dialog('response_entry.php',800,600);return false;">Enter Responses</a></li>
                                <li><a href="#" onclick="javascript:launch_dialog('/pages/_testing/proj_action_dialogs/export_responses.php',525,300);return false;">Export Responses</a></li>
                                <li><a href="#" onclick="javascript:launch_dialog('import_responses.php',650,400);return false;">Import Responses</a></li>
                             </ul>
                    </ul>
                    <div class="rfq_submit_response"><a href="#" class="button" title="Submit"><span>Submit</span></a></div>
                </div>
            </div>
             <div id="decnav" class="slideMenuItem">
                <div class="slideMenuHeader selected"><em class="simplified_left_pane">&nbsp;</em> <a href="#">Response Steps</a></div>
                <div class="slideMenuBody">
                    <ul>
                   		<li><a href="#">1. View Cover Page</a></li>
                        <li><a href="#" onclick="agile.ux.xhr.get('car_content','view_attachments.php');">2. View Attachments</a></li>
                        <li>3. Provide Responses</li>
                        <ul>
                            <li><a href="#" onclick="javascript:launch_dialog('/pages/_testing/proj_action_dialogs/export_responses.php',525,300);return false;">Export IRC</a></li>
                            <li><a href="#" onclick="javascript:launch_dialog('import_responses.php',650,400);return false;">Import IRC</a></li>
                        </ul>
                    </ul>
                    <div class="dec_submit_response"><a href="#" class="button" title="Submit"><span>Submit</span></a></div>
                    <ul>
                        <li><a href="#">Print</a></li>
                        <li><a href="#">Send Comments</a></li>
                   </ul>
                </div>
            </div>
	    </div>
	</div>
</div>