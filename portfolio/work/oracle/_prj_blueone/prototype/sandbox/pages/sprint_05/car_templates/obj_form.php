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
		<div class="column_two extended">
			<h2>Status / Lifecycle</h2>
			<p>[varies by object] This column has a special class on it to extend it all the way right...</p>
            <div class="quickLinks">
            	<span><a href="#">Test One</a></span>
                <span><a href="#">Test asdf</a></span>
                <span><a href="#">Test nre</a></span>
                <span><a href="#">Test fsdg</a></span>
                <span><a href="#">Test OneTwoThrees</a></span>
            	<span><a href="#">Test alligator</a></span>
                <span><a href="#">Test biglongwordnowhereandnow</a></span>
                <span><a href="#">Test wwr</a></span>
                <span><a href="#">Test One</a></span>
                <span><a href="#">Test One</a></span>
            </div>
		</div>
        <!--
        <div class="column_three">
            <ul class="rating">
                <li class="traffic_red">Overall Status</li>
                <li class="traffic_green">Schedule Status</li>
                <li class="traffic_yellow">Cost Status</li>
                <li class="traffic_red">Resources Status</li>
                <li class="traffic_grey">Quality Status</li>
            </ul>
        </div>
        -->
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
    <div class="tabs_container skin_default">
        <ul class="tabs">
            <li class="first_tab selected"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>History</span></a></li>
        </ul>
    </div>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form">
            <dl class="side_by_side_text">
                <dt>Auto Number:</dt>
                    <dd>Text</dd>
                <dt>Type Menu:</dt>
                    <dd>Text</dd>
                <dt>Text:</dt>
                    <dd>Value</dd>
                <dt>Quickview Demo:</dt>
                    <dd><a href="#" class="quickview" title="Infopop Demo">Demo Infopop</a></dd>
                <dt>Quickview Demo 2:</dt>
                    <dd><a href="#" class="quickview2" title="Infopop Demo2">Demo Infopop 2</a></dd>
                <!--<dt>Infopop Demo:</dt>
                    <dd><a href="#" class="preview" title="Infopop Demo">Demo Infopop Two</a></dd>-->
                <dt>Text Input:</dt>
                    <dd>Text</dd>
                <dt>Textarea:</dt>
                    <dd>This is example text in a multi-line text field. The content of this field may take up more space than the input.  In that case, the input would have a vertical scrollbar.</dd>
                <dt>Text Link:</dt>
                    <dd>&nbsp;</dd>
                <dt>Text Link 2:</dt>
                    <dd>&nbsp;</dd>
                <dt>Menu Text:</dt>
                    <dd>&nbsp;</dd>
            </dl>
                        
            <h3 id="toggle_content" class="header_close" onclick="toggleContent('toggleContent');return false;" style="cursor: pointer">Page 2</h3>
            <dl id="toggleContent" class="side_by_side_text">
                <dt>Menu:</dt>
                    <dd>List Value</dd>
                <dt>Multi-Select Menu:</dt>
                    <dd>Value 1; Value 2</dd>
                <dt>Text:</dt>
                    <dd>Text typed in here</dd>
            </dl>                      
        </div>
    </div>
</div>