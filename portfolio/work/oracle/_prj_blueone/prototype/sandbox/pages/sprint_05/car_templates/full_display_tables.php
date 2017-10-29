<style>
	.scrollTableDiv { overflow-x: auto !important; }
	.scrollTableDiv table td,
	.scrollTableDiv table th { padding:3px 5px; white-space: nowrap; vertical-align: top; border-right: 1px solid #ddd;}
</style>
<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">P00325</a> &raquo;</li>
		        <li>C000734</li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>C000734</h2>
			<p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
		</div>
	
		<div class="column_two">
			<h2>CCB</h2>
			<p>Sub-Status</p>
		</div>
		</div>
	
	    <!--************************************
	        OBJECT LEVEL CONTROLS
	    *************************************-->
		<div class="object_level_controls">
	        <form action="#">
	            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Approve</span></a>
	            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Reject</span></a>
	            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Comment</span></a>
	            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Next Status</span></a>
	            <a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
	        </form>
		</div>
	</div>

    <!--************************************
        TABS
    *************************************-->
    <div class="tabs_container skin_default">
        <ul class="tabs">
            <li class="first_tab"><a href="#"><span>Cover Page<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray selected"><a href="#"><span>Affected Items<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Workflow<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>History</span></a></li>
    
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
            <h4>Affected Items</h4>
            <p><label>View:</label>
                <select name="">
                    <option value="">All Content</option>
                    <option value="">selection</option>
                    <option value="">selection</option>
                </select>
	            <a href="#" class="button"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a>

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
		            <a href="#" class="button"><span>Bulk Change<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
				
		            <a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
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
        <div class="scrollTableDiv">
            <table cellpadding="0" cellspacing="0" class="table_handle">
                <thead>
					<tr>

						<th class="handle">&nbsp;</th>
						<th class="icon_cell eng_change_order">&nbsp;</th>
						<th class="w15">&nbsp;</th>
						<th>Number</th>
						<th>Old Description</th>
						<th>Description</th>
						<th>Sites</th>
						<th>Change Function</th>
						<th>Old Revision</th>
					</tr>
				</thead>
				<tbody>
        
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="icon_cell eng_change_order">&nbsp;</td>
                    <td class="icon_cell part">&nbsp;</td>
                    <td><a href="#">P000123</a></td>
                    <td>This is a really cool part, but this is the old description.</td>
                    <td>This is the new description for this part.</td>
                    <td>Common</td>
                    <td>&nbsp;</td>
        			<td>A</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="icon_cell eng_change_order">&nbsp;</td>
                    <td class="icon_cell part">&nbsp;</td>
                    <td><a href="#">P000124</a></td>
                    <td>Here is another cool part with old description...</td>
                    <td>Another new description</td>
                    <td>Common</td>
                    <td>&nbsp;</td>
        			<td>A</td>        
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="icon_cell eng_change_order">&nbsp;</td>
                    <td class="icon_cell bom">&nbsp;</td>
                    <td><a href="#">A000223</a></td>
                    <td>This assembly brings all cool things together.</td>
                    <td>Active</td>
                    <td>Common</td>
                    <td>&nbsp;</td>
        			<td>A</td>
                </tr>

        		</tbody>
            </table>
        </div>

		<table class="table_footer">
			<tbody>
				<tr>
					<td class="status"><strong>1</strong> of <strong>7</strong> rows selected.</td>
					<td class="filter_text">Filter is on</td>
					<td class="filter_icon on"/>
					<td class="filter_pop"/>
				</tr>
			</tbody>
		</table>
    </div>
    <!--************************************
        RESIZE BAR
    *************************************-->
    <div class="prvMoveDiv" id="previewMoveDiv"></div>
    <div class="Preview">
        <!--************************************
           SUBTABS
        *************************************-->
        <div class="sub_tabs_container skin_default">
            <ul class="sub_tabs">
                <li><a href="#"><span>Title Block</span></a></li>
                <li><a href="#"><span>BOM</span></a></li>
                <li class="indicator_gray selected"><a href="#"><span>Manufacturers<em>&nbsp;</em></span></a></li>
                <li><a href="#"><span>Attachments</span></a></li>
            </ul>
        </div>
	<?php include("dms/dms.php"); ?>
        
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        <div class="view_controls">
            <h4>Manufacturers</h4>
            <p><label>View:</label>
                <select name="">
                    <option value="">All Content</option>
                    <option value="">selection</option>
                    <option value="">selection</option>
                </select>
	            <a href="#" class="button"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
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
                    <a href="#" class="button"><span>Undo Redlines</span></a>
		            <a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
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
        <div class="scrollTableDiv" style="height: 135px">
             <table cellpadding="0" cellspacing="0" class="table_handle">
                <thead>
					<tr>

						<th class="handle">&nbsp;</th>
						<th class="icon_cell eng_change_order">&nbsp;</th>
						<th class="w15">&nbsp;</th>
						<th>Manufacturer</th>
						<th>Part Number</th>
						<th>Description</th>
						<th>Lifecycle Status</th>
						<th>Preferred Status</th>
						<th>Sites</th>
					</tr>
				</thead>
				<tbody>
        
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="icon_cell manufacturer_part">&nbsp;</td>
                    <td>Motorola</td>
                    <td>22-3345AD</td>
                    <td>Description for newly added part.</td>
                    <td>Active</td>
                    <td>Approved</td>
					<td>Common</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="icon_cell manufacturer_part">&nbsp;</td>
                    <td>Texas Instruments</td>
                    <td>45-8847AZ</td>
                    <td>
						Redlined description for this part<br />
						<span class="redlined">This is the original description.</span>
					</td>
                    <td>Active</td>
                    <td>
						Preferred<br />
						<span  class="redlined">Approved</span>
					</td>
					<td>Common</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="icon_cell manufacturer_part">&nbsp;</td>
                    <td><span class="redlined">AMD</span></td>
                    <td><span class="redlined">483-3303-B</td>
                    <td><span class="redlined">This part is being removed.</span></td>
                    <td><span class="redlined">Obsolete</span></td>
                    <td><span class="redlined">Approved</span></td>
					<td><span class="redlined">Common</span></td>
                </tr>

                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="icon_cell manufacturer_part">&nbsp;</td>
                    <td>Microchip</td>
                    <td>1005-78AB</td>
                    <td>This one we will leave alone.</td>
                    <td>Active</td>
                    <td>Open</td>
					<td>Common</td>
                </tr>
		
        		</tbody>
            </table>
        </div>
		<table class="table_footer">
			<tbody>
				<tr>
					<td class="status"><strong>1</strong> of <strong>7</strong> rows selected.</td>
					<td class="filter_text">Filter is on</td>
					<td class="filter_icon on"/>
					<td class="filter_pop"/>
				</tr>
			</tbody>
		</table>
		
		<div class="bom_demo_table_filler" id="bomTableFiller"></div>
    </div>
</div>
       