<!--
*******************************************
	This page is work-in-progress
    containing inline styles which
    should be removed once finalized.
    A.
*******************************************
-->
<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
        <div class="breadcrumb_wrapper">
            <ul class="breadcrumbs">
                <li><a href="#">Breadcrumb</a> &raquo; Search Results</li>
            </ul>
        </div>
	</div>
</div>
<div style="padding:15px 0 0 10px;">
	<span style="background: url('/global/images/treeview/icn_action_expand.png') no-repeat 0 -2px; padding-left:15px;"></span>
	<span style="font-size: 14px; margin-right: 10px;">Search for</span>
    <select style="width:150px; margin-right:5px;">
    	<option>Items</option>
    </select>
    <select style="width:150px; margin-right:5px;">
    	<option>&nbsp;</option>
    </select>
    <input type="text" style=" margin-right:5px;" value="Lego Jeep" />
    <a class="button" href="#" onclick="handleSearchButtonClick(); return false;"><span><em class="iconic quick_search">&nbsp;</em></span></a>
</div>
<div id="PaneContent" style="overflow-y: hidden;">
	<div class="Object">
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        <div class="view_controls">
            <h4>Search Results</h4>
        </div>
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Navigator</span></a>
                    <a href="#" class="button"><span>Print</span></a>
                    <a href="#" class="button"><span>Filter</span></a>
                    <a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em></span></a>
                </p>
            </div>
            <div class="column_three">
                <p class="pagination">&nbsp;</p>
            </div>
        </div>
        <!--************************************
            TABLE HANDLE PINNED
        *************************************-->
        <div id="search_table_div" class="scrollTreeDiv unique_pages_search_results">
            <table id="searchDemoTable" cellpadding="0" cellspacing="0" class="table_handle ecoDemoTable" onclick="this.focus();" tabindex="-1">
            	<thead>
                    <tr>
                        <th class="handle">&nbsp;</th>
                        <th>Type</th>
                        <th class="resize">&nbsp;</th>
                        <th>Number</th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_attachments"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_manufacturers"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_pending"></th>
                        <th class="resize">&nbsp;</th>
                        <th class="col_problems"></th>
                        <th class="resize">&nbsp;</th>
                        <th>Description</th>
                        <th class="resize">&nbsp;</th>
                        <th>Lifecycle Phase</th>
                        <th class="resize">&nbsp;</th>
                        <th>Rev</th>
                        <th class="resize">&nbsp;</th>	
                    </tr>
               	</thead>
				<tbody>
            	</tbody>
            </table>
        </div>
	    <div id="bomTableFiller" class="bom_demo_table_filler"></div>
	</div>
</div>