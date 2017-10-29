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
            Label:
            <select name="">
                <option value="">Values</option>
                <option value="">selection</option>
            </select>
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Object Action</span></a>
            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Action 2</span></a>
            <a href="#" class="button"><span>Menu<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab selected"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History</span></a></li>
    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_thumbnail/thumbnail_edit.php', 'loadThumbnailForm()');" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container thumb">
            <fieldset class="lt_column">
            <dl class="side_by_side_text">
              <dt><label>Number:</label></dt>
                  <dd>Text</dd>
              <dt><label>Type:</label></dt>
                  <dd>Sourcing Project, Assembly</dd>
              <dt><label>Text:</label></dt>
                  <dd>Text</dd>
              <dt><label>Multi-text:</label></dt>
                  <dd>This is example text in a multi-line text field.  The content of this field may take up more space than the input.  In that case, the input would have a vertical scrollbar.</dd>
              <dt><label>Text Link:</label></dt>
                  <dd><a href="">Text Link</a></dd>
              <dt><label>Menu Text:</label></dt>
                  <dd>Option 1, Option 2, Option 3</dd>
              <dt><label>Text:</label></dt>
                  <dd>Text</dd>
              <dt><label>Text:</label></dt>
                  <dd>Text</dd>
            </dl>
            </fieldset>
            <div class="rt_column">
            	<div class="thumbnail">
                    <div id="thumb_1" title="View More Images" class="launch_viewer">
        				<img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" />
                    </div>
                    <div id="thumb_2" title="View More Images" class="launch_viewer hide_thumb">
                        <img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" />
                    </div>
                	<div id="thumb_3" title="View More Images" class="launch_viewer hide_thumb">
            			<img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" />
                    </div>
                    <div class="thumb_options">
                        <a id="cmdBack" class="button" href="#"><span><em class="iconic back">&nbsp;</em>&nbsp;</span></a>
                        <span id="thumb_set">1 of 3</span>
                        <a id="cmdNext" class="button" href="#"><span><em class="iconic forward">&nbsp;</em>&nbsp;</span></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container obj_form">
        <h3>Page 2</h3>    
            <dl class="side_by_side_text">
                <dt>Type:</dt>
                    <dd>Sourcing Project</dd>
                <dt>Number:</dt>
                    <dd>123456</dd>
                <dt>Text:</dt>
                    <dd>Value</dd>
                <dt>Multi-text:</dt>
                    <dd>
                        This is example text in a multi-line text field. The content of this field may take up more 
                        space than the input. In that case, the input would have a vertical scrollbar.
                    </dd> 
                <dt>Text Link:</dt>
                    <dd><a href="#">User Link</a></dd> 
                <dt>Drop Down List:</dt>
                    <dd>Option 1</dd>
            </dl>
        </div>
    </div>
</div>
<!--************************************
   THUMBNAIL PALETTE
*************************************-->
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
        <img src="../../../global/images/thumbnail_iMac_fullsize1.png" alt="PNG Placeholder" />
        <p>Filename.jpg</p>
    	<p class="set"><input type="checkbox" id="default" /><label for="default">Set as default</label></p>
    </div>
    <div id="thumb_tile" class="rt_column nodrag">
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
