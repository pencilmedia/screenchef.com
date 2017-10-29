<!--
	********************************************************************
	These Progress Indicators must reside within the #car_content div 
    and must be progrmatically positioned.
    
    Styles are located in activity_indicator.css
    ********************************************************************
-->
<div id="progress_indicator_mask" class="progress_indicator_mask"></div>
<span id="progress_indicator_action" class="progress_indicator action">Meaningful text goes here...</span>
<span id="progress_indicator_table" class="progress_indicator table">Loading</span>
<div id="Header" class="header">
<!--************************************
    HEADER
*************************************-->
<div class="header_wrapper">
	<div class="breadcrumb_wrapper">
        <ul class="breadcrumbs">
        	<li><a href="#">Search Results</a> &raquo;</li>
	        <li>D05024</li>
		</ul>
	</div>
	<div class="column_one layout">
		<h2>D05024</h2>
			<p>
            	<strong>Standard Operating Procedure</strong> &bull; Facility Certification<br />
                Progress Indicators: 
		        <a onclick="pi_in_table_attachments.pi_global()" href="#">Global</a> &bull;
		        <a onclick="pi_in_table_attachments.pi_action()" href="#">Action</a> &bull;
		        <a onclick="pi_in_table_attachments.pi_table()" href="#">Table</a>
            </p>
	</div>
	<div class="column_two">
		<h2>Preliminary</h2>
		<p>Unincorporated</p>
	</div>
</div>

    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <label>Site:</label>
            <select name="">
                <option value="">All</option>
                <option value="">Value 1</option>
                <option value="">Value 2</option>
            </select>
            <label>Rev:</label>
            <select name="">
                <option value="">Introductory</option>
                <option value="">Value 1</option>
                <option value="">Value 2</option>
            </select> 
            <a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>

    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History</span></a></li>

    </ul>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
<!-- BEGIN: Object Content -->
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
                <a href="#" class="button"><span>Edit</span></a>
            </p>
        </div>



        <!--************************************
            TABLE ACTIONS
       	<a class="button" href="#"><span>Advanced</span></a>
		<a class="button" href="#"><span>Clear</span></a>

		<a onclick="callFormatResults();" class="button" href="#"><span>Format</span></a>
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Remove</span></a>
               		<span class="btn_divide"></span>
                    <a href="#" class="button"><span>Get</span></a>
                    <a href="#" class="button" id="toggle_menu_0"><span>View<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
               		<span class="btn_divide"></span>
                    <a href="#" class="button"><span>Check-out</span></a>
                    <a href="#" class="button"><span>Cancel Check-out</span></a>
                    <a href="#" class="button"><span>Check-in</span></a>
               		<span class="btn_divide"></span>
                    <a href="#" class="button" id="toggle_menu_1"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
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
            TABLE HANDLE PINNED
        *************************************-->
        <!--************************************
            TABLE HANDLE
        *************************************-->
        <div class="scrollHeaderDiv">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th class="handle">&nbsp;</th>
                    <th class="w15"><img src="global/images/tables/icn_status_checked_out.png" alt="text" /></th>
                    <th class="resize">&nbsp;</th>
                    <th class="w15"><img src="global/images/tables/icn_status_redlined.png" alt="text" /></th>
                    <th class="resize">&nbsp;</th>
                    <th>Filename</th>
                    <th class="resize">&nbsp;</th>
                    <th>File Description</th>
                    <th class="resize">&nbsp;</th>
                    <th>File Size</th>
                    <th class="resize">&nbsp;</th>
                    <th>File Type</th>
                    <th class="resize">&nbsp;</th>
                    <th>Folder Number</th>
                    <th class="resize">&nbsp;</th>
                    <th class="resize">&nbsp;</th>
                </tr>
            </table>
      </div>
        <div class="scrollTableDiv">
            <table class="attachments" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td><img src="global/images/tables/object-file.png" alt="file" style="float: left;" />1300-facility_cert_en.doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>English</td>
                    <td class="resize">&nbsp;</td>
                    <td>27,648</td>
                    <td class="resize">&nbsp;</td>
                    <td>doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>FOLDER00141</td>
                    <td class="resize">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td><img src="global/images/tables/object-file.png" alt="file" style="float: left;" />1300-facility_cert_es.doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>Spanish</td>
                    <td class="resize">&nbsp;</td>
                    <td>27,648</td>
                    <td class="resize">&nbsp;</td>
                    <td>doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>FOLDER00142</td>
                    <td class="resize">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td><img src="global/images/tables/object-file.png" alt="file" style="float: left;" />1300-facility_cert_fr.doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>French</td>
                    <td class="resize">&nbsp;</td>
                    <td>27,648</td>
                    <td class="resize">&nbsp;</td>
                    <td>doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>FOLDER00143</td>
                    <td class="resize">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td><img src="global/images/tables/object-file.png" alt="file" style="float: left;" />1300-facility_cert_de.doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>German</td>
                    <td class="resize">&nbsp;</td>
                    <td>27,648</td>
                    <td class="resize">&nbsp;</td>
                    <td>doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>FOLDER00144</td>
                    <td class="resize">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><img src="global/images/icn_status_dot_gray.png" alt="text" /></td>
                    <td class="resize">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                    <td><img src="global/images/tables/object-file.png" alt="file" style="float: left;" />1300-facility_cert_uk.doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>English (UK)</td>
                    <td class="resize">&nbsp;</td>
                    <td>27,648</td>
                    <td class="resize">&nbsp;</td>
                    <td>doc</td>
                    <td class="resize">&nbsp;</td>
                    <td>FOLDER00145</td>
                    <td class="resize">&nbsp;</td>
                    <td class="resize">&nbsp;</td>
                </tr>
            </table>
      </div>
	 <? include($_SERVER['DOCUMENT_ROOT'] . "/includes/layouts/tables/table_footer.php"); ?>
      <div class="bom_demo_table_filler" id="bomTableFiller"></div>

<!-- END: Object Content -->
	</div>
</div>