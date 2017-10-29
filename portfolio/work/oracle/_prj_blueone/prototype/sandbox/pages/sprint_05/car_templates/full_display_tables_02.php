<style>
	div.scrollTableDiv { height: 135px !important;  overflow-x: auto !important; }
	div.full_table_header h3
	{
		background-color:#efefef;
		padding: 5px 10px;
		margin-bottom:0px;
	}
	div.full_table_header h4
	{
		font-size: 12px;
		padding: 0px 10px;
		border-bottom: 1px solid #ccc;
	}
	div.sub_tabs_container {margin-top:5px; }
	.full_table_display img 
	{
		margin-top: -3px;
	}
	.scrollTableDiv table th,
	.scrollTableDiv table td { padding:3px 5px; white-space: nowrap; vertical-align: top; border-right: 1px solid #ddd;}

</style>
<!--************************************
	HEADER
*************************************-->
<div id="Header" class="full_table_header">
	<h3>C00001123 &bull; Affected Items</h3>
</div>
<div class="message info" id="page_message">
	<p>Reminder: Correct object-based dependencies (or similar generic message)</p>
</div>

<div id="PaneContent" class="frame_pinned">

    <div class="Preview">
        <!--************************************
           SUBTABS
        *************************************-->

<div id="new_tabs" class="new_tabs" style="margin-top:10px;">
    <ul>
        <li><a href="#">Title Block</a></li>
        <li><a href="#">BOM</a></li>
        <li class="selected"><span>Manufacturers</span></li>
        <li><a href="#">Attachments</a></li>
    </ul>
</div>
		<!--
        <div class="sub_tabs_container skin_default">
            <ul class="sub_tabs">
                <li><a href="#"><span>Title Block</span></a></li>
                <li><a href="#"><span>BOM</span></a></li>
                <li class="indicator_gray selected"><a href="#"><span>Manufacturers<em>&nbsp;</em></span></a></li>
                <li><a href="#"><span>Attachments</span></a></li>
            </ul>
        </div>
		-->
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        <div class="view_controls full_table_display">
            <h4><a href="#"><img src="global/images/icn_action_back.png" align="absmiddle" /></a>Redlines for P0000123-000 <a href="#"><img src="global/images/icn_action_forward.png" align="absmiddle" /></a></h4>
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
        <div class="scrollTableDiv" style="height: 150px">
             <table cellpadding="0" cellspacing="0" class="table_handle">
                <thead>
					<tr>

						<th class="handle">&nbsp;</th>
						<th class="icon_cell manufacturer_part">&nbsp;</th>
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
			<div id="bomTableFiller" class="bom_demo_table_filler"/>
    </div>
</div>
       