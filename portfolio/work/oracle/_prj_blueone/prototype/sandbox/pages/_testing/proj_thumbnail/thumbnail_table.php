<div id="Header" class="header">
<!--************************************
    HEADER
*************************************-->
<div class="header_wrapper">
	<div class="breadcrumb_wrapper">
        <ul class="breadcrumbs">
        	<li><a href="#">Search Results</a> &raquo;</li>
	        <li>SRC-00363</li>
		</ul>
	</div>
	<div class="column_one layout">
		<h2>SRC-00363</h2>
		<p><strong>Sourcing Project</strong> &bull; Electronics Annual Quote 2007 (#1) -- Infineon, ST, Freescale, Analog Device</p>
	</div>
	<div class="column_two">
		<h2>Open</h2>
		<p>&nbsp;</p>
	</div>
</div>

    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <a href="#" class="button" id="cmdChangeStatus"><span>Change Status<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
            <a href="#" class="button" id="cmdGlobalActions"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>

    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab"><a href="#"><span>General Information<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Items<em>&nbsp;</em></span></a></li>
        <li class="selected"><a href="#"><span>AML<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Changes<em>&nbsp;</em></span></a></li>

        <li><a href="#"><span>Analysis<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>RFQs<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Discussions<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>History</span></a></li>

    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
<!-- BEGIN: Object Content -->
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        
        <div class="view_controls">
            <h4 class="aml" style="margin-top:20px;">Thumbnail Table Layout</h4>
           	<p style="text-align:right; margin:0 5px 10px 0">Quantities calcuated as of: 25.Jan.2007 07:57:20 AM CST</p>

            <p><label>View:</label>
                <select name="" style="vertical-align:middle">
                    <option value="">Personal View 1</option>
                    <option value="">Personal View 2</option>
                    <option>--------------</option>
                    <option value="">Items with Splits</option>
                    <option value="">Items not in an RFQ</option>
                    <option value="">Invalid Data</option>
                    <option value="">Supplier Proposed Alternates</option>
                    <option value="">Global View 5</option>
                </select>
                <a href="#" class="button" id="cmdViewActions"><span>View Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
            </p>
        </div>
        
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Delete</span></a>
                    <span class="btn_divide"></span>
                    <a href="#" class="button" id="cmdPrepare"><span>Prepare<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" class="button" id="cmdQuote"><span>Quote<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                    <span class="btn_divide"></span>
                    <a href="#" class="button" id="cmdMore"><span>More Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                </p>
            </div>
            <div class="column_three">
                <p>
                    <a href="#" id="toggle_list" class="button"><span><em class="iconic toggle_list">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" id="toggle_thumblist" class="button"><span><em class="iconic toggle_thumblist">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" id="toggle_thumbs" class="button"><span><em class="iconic toggle_thumbs">&nbsp;</em>&nbsp;</span></a>
                </p>
            </div>
        </div>
        <div id="thumb_list" class="scrollTableDiv aml" style="height: 140px;">
            <table class="aml" cellpadding="0" cellspacing="0">
                <tr class="header">
                    <td class="handle"></td>
                    <td class="manufacturer_part w15"></td>
                    <td>Number</td>
                    <td>Description</td>
                    <td>Rev</td>
                    <td>Quantity</td>
                    <td>Target Cost</td>
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td>25-165905-01</td>
                    <td>MAPPING PROC. PROG PLD</td>
                    <td>B</td>
                    <td>0</td>
                    <td>0.906</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td>25-123099</td>
                    <td>TRANS S NFT BSP295</td>
                    <td>A</td>
                    <td>25,000</td>
                    <td>0.26</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
            </table>
        </div>
        <div id="thumb_tablelist" class="scrollTableDiv aml" style="height: 391px; display: none;">
            <table class="aml" cellpadding="0" cellspacing="0">
                <tr class="header">
                    <td class="handle"></td>
                    <td class="manufacturer_part w15"></td>
                    <td>&nbsp;</td>
                    <td>Number</td>
                    <td>Description</td>
                    <td>Rev</td>
                    <td>Quantity</td>
                    <td>Target Cost</td>
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td><img src="../../../global/images/thumbnail_iMac_75px.png" alt="Thumbnail" class="launch_viewer" /></td>
                    <td>25-165905-01</td>
                    <td>MAPPING PROC. PROG PLD</td>
                    <td>B</td>
                    <td>0</td>
                    <td>0.906</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td><img src="../../../global/images/thumbnail_blank_75px.png" alt="Thumbnail" height="75px" /></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td><img src="../../../global/images/thumbnail_iMac_75px.png" alt="Thumbnail" class="launch_viewer" /></td>
                    <td>25-123099</td>
                    <td>TRANS S NFT BSP295</td>
                    <td>A</td>
                    <td>25,000</td>
                    <td>0.26</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td><img src="../../../global/images/thumbnail_blank_75px.png" alt="Thumbnail" height="75px" /></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td><img src="../../../global/images/thumbnail_iMac_75px.png" alt="Thumbnail" class="launch_viewer" /></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
            </table>
        </div>
        <div id="thumb_table" class="table_thumbnails" style="height: 458px; display: none;">
            	<div class="thumbnail">
            		<a href="#" id="thumb1" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac1.png" alt="Thumbnail" /></a>
                    <p id="thumb1_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Front View</p>
                </div>
                <div class="thumbnail">
            		<a href="#" id="thumb2" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac3.png" alt="Thumbnail" /></a>
                    <p id="thumb2_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Side View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb3" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac2.png" alt="Thumbnail" /></a>
                    <p id="thumb3_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac 3/4 View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb4" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac3.png" alt="Thumbnail" /></a>
                    <p id="thumb4_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Side View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb5" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac1.png" alt="Thumbnail" /></a>
                    <p id="thumb5_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Front View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb6" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac2.png" alt="Thumbnail" /></a>
                    <p id="thumb6_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Front View</p>
                </div>
        </div>

        <div class="bom_demo_table_filler" id="bomTableFiller"></div>
<!-- END: Object Content -->
	</div>
</div>
<div id="palette_enclosure"></div>
<!--************************************
   THUMBNAIL PALETTE
************************************* -->
<div id="thumbPalette" class="ux_palette thumbnail_viewer nodrag">
<div id="ux_palette_top" class="ux_palette_top">
    <div id="ux_palette_header" class="ux_palette_header">
        <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
      <h4 id="ux_palette_title" class="ux_palette_title">Thumbnail Viewer</h4>
        <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
    </div>
  <!-- Optional Top Action Bar
    <div id="ux_palette_top_action_bar" class="ux_palette_top_action_bar">
        <div class="right_column">
            <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
            <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
        </div>
        <div class="left_column">&nbsp;</div>
    </div>
    -->
</div>
<div id="ux_palette_main" class="ux_palette_main thumb_content nodrag">
    <div id="thumb_shot" class="lt_column nodrag">
        <img src="../../../global/images/thumbnail_iMac_fullsize1.png" alt="Full Size Photo" />
        <p>Filename.jpg</p>
    	<p class="set"><input type="checkbox" id="default" /><label for="default">Set as default</label></p>
    </div>
    <div class="rt_column nodrag">
        <div id="thumb_tile" class="thumb_tile nodrag">
            <ul class="sortable nodrag">
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" class="nodrag" /></li>
            </ul>
        </div>  
    </div>
</div>
<div id="ux_palette_bottom" class="ux_palette_bottom nodrag">
    <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar nodrag">
        <div class="right_column nodrag">
            <a class="button" href="#" title="Add"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
            <a class="button" href="#" title="Remove"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
            <a class="button" href="#" title="Replace"><span><em class="iconic replace">&nbsp;</em>&nbsp;</span></a>
            <span class="btn_divide">&nbsp;</span>
            <a class="button" href="#" title="Reload"><span><em class="iconic reload">&nbsp;</em>&nbsp;</span></a>
        </div>
        <div class="left_column nodrag">&nbsp;</div>
    </div>
    <div id="ux_palette_handle" class="ux_palette_handle nodrag">&nbsp;</div>
</div>
</div>
