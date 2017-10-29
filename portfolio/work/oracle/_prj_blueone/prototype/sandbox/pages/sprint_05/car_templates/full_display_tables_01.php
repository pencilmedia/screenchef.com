<style>
	div.scrollTableDiv { height: 135px; overflow-x: auto !important;  }
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
	
	.scrollTableDiv table th,
	.scrollTableDiv table td { padding:3px 5px; white-space: nowrap; vertical-align: top; border-right: 1px solid #ddd;}

	.header_close_button
	{
		position: relative;
		float: right;
		font-size: 13px;
		padding: 2px 3px;
		color: #333;
		font-weight:bold;
		cursor: pointer;
	}
</style>	
<div id="Header" class="full_table_header">
	<h3>
            <a class="header_close_button">X</a>
            C00001123 &bull; Affected Items
	</h3>
</div>
<div class="message info" id="page_message">
	<p>Reminder: Correct object-based dependencies (or similar generic message)</p>
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
        <div class="scrollTableDiv">
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
       