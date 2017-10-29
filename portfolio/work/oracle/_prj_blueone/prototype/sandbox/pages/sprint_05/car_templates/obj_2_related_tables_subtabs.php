<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">Breadcrumb</a> &raquo;</li>
		        <li>Breadcrumb</li>
	
			</ul>
		</div>
		<div class="column_one layout">
			<h2>Identifier</h2>
				<p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
		</div>
	
		<div class="column_two">
			<h2>Status / Lifecycle</h2>
			<p>[varies by object]</p>
		</div>
	    	<div class="column_three">
				<ul class="rating">
	                <li class="traffic_red">Overall Status</li>
	                <li class="traffic_green">Schedule Status</li>
	                <li class="traffic_yellow">Cost Status</li>
	                <li class="traffic_red">Resources Status</li>
	                <li class="traffic_grey">Quality Status</li>
				</ul>
			</div>
		</div>
	
	    <!--************************************
	        OBJECT LEVEL CONTROLS
	    *************************************-->
		<div class="object_level_controls">
	        <form action="#">
	            <label>Label:</label>
	            <select name="">
	                <option value="">Values</option>
	                <option value="">selection</option>
	            </select>
	            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Object Action</span></a>
	            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Action 2</span></a>
	            <a href="#" class="button"><span>Menu<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
	        </form>
		</div>
	</div>

    <!--************************************
        TABS
    *************************************-->
<div id="new_tabs" class="new_tabs">
    <ul>
        <li><a href="#">General Info <img src="global/images/icn_status_dot_gray.png" /></a></li>
        <li><span>Another Tab</span></li>
        <li><a href="#">Relationships <img src="global/images/icn_status_dot_gray.png" /></a></li>
        <li><a href="#">Attachments <img src="global/images/icn_status_dot_gray.png" /></a></li>
        <li><a href="#">History <img src="global/images/icn_status_dot_gray.png" /></a></li>
    </ul>
</div>
	<?php include("dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
        <!-- BEGIN: content -->
<!--************************************
    PAGE CONTROLS
*************************************
<div class="page_controls">
    <p>Some text may occassionally appear here.</p>
</div>
-->
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        <div class="view_controls">
            <h4>Table Title</h4>
            <p><label>View:</label>
                <select name="">
                    <option value="">All Content</option>
                    <option value="">selection</option>
                    <option value="">selection</option>
                </select>
            </p>
        </div>
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Remove</span></a>
                    <a href="#" class="button"><span>Multi-Level<em class="dropdown">&nbsp;</em></span></a>
                    <a href="#" class="button"><span>Go-To</span></a>
                </p>
            </div>
            <div class="column_three">
                <p>
                    <a href="#" class="button"><span>Save</span></a>
                    <a href="#" class="button"><span>Cancel</span></a>
                </p>
            </div>
        </div>
        <!--************************************
            TABLE HANDLE SELECTED
        *************************************-->
        <div class="scrollHeaderDiv">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th class="handle">&nbsp;</th>
                    <th class="w15">&nbsp;</th>
                    <th class="resize">&nbsp;</th>
                    <th class="w15">&nbsp;</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 2</th>
                    <th class="resize">&nbsp;</th>
        
                    <th>Col 3</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 4</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 5</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 6</th>
        
                    <th class="resize">&nbsp;</th>
                </tr>
            </table>
        </div>
        <div class="scrollTableDiv">
            <table cellpadding="0" cellspacing="0" class="table_handle">
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
        
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="new_addition">Text</td>
                    <td class="resize">&nbsp;</td>
                    <td class="new_addition">Text</td>
                    <td class="resize">&nbsp;</td>
                    <td class="new_addition">Text</td>
        
                    <td class="resize">&nbsp;</td>
                    <td class="new_addition">Text</td>
                    <td class="resize">&nbsp;</td>
                    <td class="new_addition">Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr class="selected">
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="redline"><span>New Text</span></td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td class="redline"><span>New Text</span></td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
        
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
        
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr class="nonselect">
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr class="selected">
                    <td class="handle">&nbsp;</td>
        
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
        
            </table>
        </div>
    </div>
    <!--************************************
        RESIZE BAR
    *************************************-->
    <div class="prvMoveDiv" id="previewMoveDiv"></div>
    <div class="Preview">
        <!--************************************
           SUBTABS
        *************************************-->

        <div class="sub_tabs_container">
			<div id="new_tabs" class="new_tabs">
				<ul>
					<li><a href="#">Title Block <img src="global/images/icn_status_dot_gray.png" /></a></li>
					<li><span>BOM</span></li>
					<li><a href="#">Manufacturers<img src="global/images/icn_status_dot_gray.png" /></a></li>
					<li><a href="#">Attachments <img src="global/images/icn_status_dot_gray.png" /></a></li>
				</ul>
			</div>
        </div>
        
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        <div class="view_controls">
            <h4>Table Title</h4>
            <p><label>View:</label>
                <select name="">
                    <option value="">All Content</option>
                    <option value="">selection</option>
                    <option value="">selection</option>
                </select>
            </p>
        </div>
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Remove</span></a>
                    <a href="#" class="button"><span>Multi-Level<em class="dropdown">&nbsp;</em></span></a>
                    <a href="#" class="button"><span>Go-To</span></a>
                </p>
            </div>
            <div class="column_three">
                <p>
                    <a href="#" class="button"><span>Save</span></a>
                    <a href="#" class="button"><span>Cancel</span></a>
                </p>
            </div>
        </div>
        <!--************************************
            TABLE HANDLE SELECTED
        *************************************-->
        <div class="scrollHeaderDiv">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th class="handle">&nbsp;</th>
                    <th class="w15">&nbsp;</th>
        
                    <th class="resize">&nbsp;</th>
                    <th class="w15">&nbsp;</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 2</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 3</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 4</th>
        
                    <th class="resize">&nbsp;</th>
                    <th>Col 5</th>
                    <th class="resize">&nbsp;</th>
                    <th>Col 6</th>
                    <th class="resize">&nbsp;</th>
                </tr>
            </table>
        </div>
        <div class="scrollTableDiv" style="height: 150px">
            <table cellpadding="0" cellspacing="0" class="table_handle">
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr class="selected">
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
        
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
        
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                    <td>Text</td>
                    <td class="resize">&nbsp;</td>
                </tr>
            </table>
        </div>
    </div>
</div>
       