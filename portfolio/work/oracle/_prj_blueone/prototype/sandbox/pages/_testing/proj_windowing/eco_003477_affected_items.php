<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
        <div class="breadcrumb_wrapper">
            <ul class="breadcrumbs">
                <li><a href="#">Breadcrumb</a> &raquo; ECO-003477</li>
            </ul>
        </div>
		<div class="column_one layout">
			<h2>ECO-003477</h2>
			<p><strong>ECO</strong> &bull; Initial release of the LJ3 Bill of Materials Items.</p>
		</div>
		<div class="column_two">
			<h2>Submitted</h2>
		</div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <a href="#" class="button"><span><em class="comment">&nbsp;</em> Comment</span></a>
            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="change_status">&nbsp;</em> Next Status</span></a>
            <a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/_testing/proj_windowing/eco_003477.php'); return false;"><span>Cover Page<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/_testing/proj_windowing/eco_003477_affected_items.php', 'runECOInit2()' ); agile.ux.demo.eco00347.init(); return false;"><span>Affected Items<em>&nbsp;</em></span></a></li>
        <li><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/sprint_05/car_templates/obj_item_workflow.php'); return false;"><span>Workflow<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Attachements<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>History</span></a></li>
    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        <div class="view_controls">
            <h4>Affected Items</h4>
            <p>
            	<label>Site:</label>
                <select name="" class="windowingDemo rightMargin">
	                <option value="">All</option>
    	            <option value="">San Jose</option>
        	        <option value="">Suzhou</option>
            	    <option value="">Bangalore</option>
                	<option value="">Guadalarara</option>
                </select>
            	<label>View:</label>
                <select name="" class="windowingDemo">
	                <option value="">Default</option>
    	            <option value="">Compliance</option>
        	        <option value="">Cost</option>
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
                    <a href="#" class="button"><span>Bulk Change<em class="dropdown">&nbsp;</em></span></a>
                    <a href="#" class="button"><span>Filter</span></a>
                    <a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em></span></a>
                </p>
            </div>
        </div>

        <!--************************************
            TABLE HANDLE SELECTED
        *************************************-->
        <div class="scrollTableDiv" style="border-bottom:1px solid #9F9F9F; overflow-y:auto;">
            <table id="affectedItemDemoTable" cellpadding="0" cellspacing="0" class="table_handle ecoDemoTable" tabindex="-1" oncontextmenu="return false;">
            	<thead>
                    <tr>
                        <th class="handle">&nbsp;</th>
                        <th class="col_redlines"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_attachments"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_manufacturers"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_pending"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_problems"></th>
                        <th class="resize">&nbsp;</th>
                        <th>Number</th>
                        <th class="resize">&nbsp;</th>
                        <th>Description</th>
                        <th class="resize">&nbsp;</th>
                        <th>Sites</th>
                        <th class="resize">&nbsp;</th>	
                        <th>Change Function</th>
                        <th class="resize">&nbsp;</th>
                        <th>Old Rev</th>
                        <th class="resize">&nbsp;</th>
                        <th>New Rev</th>
                        <th class="resize">&nbsp;</th>
                        <th>Lifecycle Phase</th>
                        <th class="resize">&nbsp;</th>
                    </tr>
               	</thead>
                <tbody>
                    <tr onclick="handleAIClick(this, null);">
                        <td class="handle">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>376S0063</td>
                        <td class="resize">&nbsp;</td>
                        <td>TRA_2N7002_DW_SOT</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td class="resize">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
	    	<div id="bomTableFiller" class="bom_demo_table_filler"></div>
        </div>
	</div>
    <!--************************************
        RESIZE BAR
    *************************************-->
	<div class="prvMoveDiv" id="previewMoveDiv"></div>
    <ul class="agile_tabs" style="margin-top: 20px;">
        <li class="first_tab selected indicator_gray"><a href="#"><span>BOM<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Manufacturers<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
    </ul>
    <div class="Preview">
    <!--************************************
        TABS
    *************************************-->
    
    <!--************************************
        VIEW CONTROLS
    *************************************-->
    <div class="view_controls">
        <h4>Redlines</h4>
        <p><label>View:</label>
            <select name="" class="windowingDemo">
                <option value="">Default</option>
                <option value="">Compliance</option>
                <option value="">Cost</option>
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
                <a href="#" class="button"><span>Filter</span></a>
                <a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em></span></a>
            </p>
        </div>
    </div>
        
    <!--************************************
        TABLE HANDLE SELECTED
    *************************************-->
    <div class="scrollTableDiv" style="border-bottom:1px solid #9F9F9F; height:auto;">
        <table id="redlineDemoTable" cellpadding="0" cellspacing="0" class="table_handle ecoDemoTable" tabindex="-1" oncontextmenu="return false;">
            <thead>
                <tr>
                    <th class="handle">&nbsp;</th>
                    <th class="col_redlines"></th>
                    <th class="resize">&nbsp;</th>
                    <th>Number</th>
                    <th class="resize">&nbsp;</th>
                    <th>Description</th>
                    <th class="resize">&nbsp;</th>
                    <th>Sites</th>
                    <th class="resize">&nbsp;</th>	
                    <th>Change Function</th>
                    <th class="resize">&nbsp;</th>
                    <th>Old Rev</th>
                    <th class="resize">&nbsp;</th>
                    <th>New Rev</th>
                    <th class="resize">&nbsp;</th>
                    <th>Lifecycle Phase</th>
                    <th class="resize">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
            

            
           	</tbody>
        </table>
    </div>

    <div id="bomTableFiller" class="bom_demo_table_filler"></div>
</div>
