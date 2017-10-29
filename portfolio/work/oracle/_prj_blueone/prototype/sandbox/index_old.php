<? require "rad/framework/inc/index_home.inc"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Agile Web Sandbox</title>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="/rad/framework/js/index_home.js"></script>
	<link rel="stylesheet" type="text/css" href="/rad/framework/css/index_home.css" />
</head>
<body>
<img src="global/images/logo_blueone_sml.png" id="logo" alt="blueONE" align="right" />

<div id="toc" style="display: none;"> <!-- ENABLE WHEN THE PAGE GETS LONGER -->
	<h4>Jump to</h4>
	<p><a href="#current_sprint">Current Sprint</a> | <a href="#completed_sprint">Completed Prototypes</a> | <a href="#archive">Archive</a></p>
</div>
   
<div id="current_sprint">
    <h2>Concept Car</h2>
    <div class="columns">
        <div class="lt_column">
            <ul>
                <li class="concept_car"><a href="#" onclick="launch_dialog('car.php?page=pages/sprint_05/car_templates/obj_form.php',1024,768);return false;" title="File: car.php?page=pages/sprint_05/car_templates/obj_form.php">Launch Car</a></li>
                <li>&nbsp;</li>
            </ul>
        </div>
        <div class="rt_column">
            <p>* Bold links are <strong>current</strong> sprint tasks.</p>
        </div>    
    </div>
    <h2>UI Elements</h2>
    <div class="columns">
        <div class="lt_column">
            <ul>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_infopop/infopop.php',800,600);return false;" title="Info Pop">Info Pop</a></li>
                <li class="current_sprint"><a href="#" onclick="launch('pages/_testing/proj_progress_indicator/progressIndicator.php');return false;" title="Action Dialog Progress Indicator">Action Dialog Progress Indicator</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_contents_attachments.php',1024,768);return false;">Page & Palette Activity Indicator</a></li>
                <li><a href="#" onclick="launch('pages/_empty_base_palette/default.php');return false;" title="Palette Class &amp; Skinning Demo">Empty Palette</a></li>
            </ul>
        </div>
        <div class="rt_column">
        
        </div>    
    </div>
    <h2>UI Controls</h2>
    <h3>Buttons, Tabs, Menus</h3>
    <div class="columns">
        <div class="lt_column">
			<ul>
            	<li><a href="#" onclick="launch('pages/sprint_01/buttons.php');return false;">Buttons &amp; Tabs</a></li>
            </ul>
        </div>
        <div class="rt_column">
        
        </div>    
    </div>
    <h3>Select Controls</h3>
    <div class="columns">
        <div class="lt_column">
	    <ul>
                <li><a href="#" onclick="launch_dialog('car.php?page=pages/sprint_05/car_templates/obj_form.php',1024,768);return false;" title="File: car.php?page=pages/sprint_05/car_templates/obj_form.php">Filter Select Edit Frame POC</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_aliasing/index.php', 525,300);return false">Aliasing</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/anyall/anyall.php',800,600);return false;">Any/All Dialog</a> <a href="#" onclick="launch_notes('notes/anyall.xml',640,480);return false;"><img src="notes/engine/notes.gif" title="Notes" class="xml_notes"/></a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_mscl_tree/index.php',525,300);return false;" title="File: car.php?page=pages/sprint_06/complete_form/complete_form_read.php">Tooltips 1</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_mus/index.php',1024,768);return false;" title="File: car.php?page=pages/sprint_06/complete_form/complete_form_read.php">Tooltips 2</a></li>
            	<li><a href="#" onclick="launch_dialog('pages/_testing/proj_cascade_list/index.php',1024,768);return false;" title="Cascade List">Cascade List</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_sss/singleSelectSearch.php',1024,768);return false;" title="Single Select Search">Single Select Search</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_mscl_tree/index.php',1024,768);return false;" title="File: pages/_testing/proj_mscl_tree/index.php">Multi Select Cascade List</a></li>
            </ul>
        </div>
        <div class="rt_column">
	    <ul>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('/pages/_testing/proj_shuttle_control/shuttle_lock.php',1024,768);return false;" title="">Shuttle Control Lock Design</a></li>
                <li><a href="#" onclick="launch_dialog('/pages/_testing/proj_shuttle/index.php',1024,768);return false;" title="">Shuttle Control</a></li>
                <li><a href="#" onclick="launch_dialog('pages/sprint_06/complete_form/js_msl/multi_select_list.php',1024,768);return false;" title="File: pages/explorations/multi_select_list.php">Multi Select List</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_pill_anim/singleSelectSearch.php',1024,768);return false;" title="Single Select Search">New Pill Animation</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_pill_anim/single_pill/singleSelectSearch.php',1024,768);return false;" title="Single Select Pill Animation">Single Select Pill Animation</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_pill_anim/multiple_pills/index.php',1024,768);return false;" title="Multi-Select Pill Animation">Multi-Select Pill Animation</a></li>
                <li><a href="#" onclick="launch_dialog('/pages/_testing/proj_mss/index.php',1024,768);return false;" title="">Multi-Select Search</a></li>
                <li><a href="#" onclick="launch_dialog('/pages/_testing/proj_mus/index.php',1024,768);return false;" title="">Multi-Select User Search</a></li>
            </ul>
        </div>    
    </div>
    <h2>Components</h2>
    <h3>Table</h3>
    <div class="columns">
        <div class="lt_column">
            <ul>
            	<li><a href="#" onclick="launch_dialog('pages/_testing/proj_coqsoft_table/agile_table.html',1024,768);return false;" title="File: pages/_testing/proj_coqsoft_table/agile_table.html">Table Prototype</a></li>
            </ul>
        </div>
        <div class="rt_column">
        
        </div>    
    </div>    
    <h3>Messaging</h3>
    <div class="columns">
        <div class="lt_column">
            <ul>
                <li><a href="#" onclick="launch('pages/sprint_04/dms/dms_help.php');return false;" title="">Help Only</a></li>
                <li><a href="#" onclick="launch('pages/sprint_04/dms/dms_help_fyi.php');return false;" title="">Help and FYI</a></li>
                <li><a href="#" onclick="launch('pages/sprint_04/dms/dms_help_error.php');return false;" title="">Help and Error</a></li>
                <li><a href="#" onclick="launch('pages/sprint_04/dms/dms_help_warning.php');return false;" title="">Help and Warning</a></li>
                <li><a href="#" onclick="launch('pages/sprint_04/dms/dms_help_warning_error.php');return false;" title="">Help and Warning/Error</a></li>
            </ul>
        </div>
        <div class="rt_column">
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_table_issue/table_add_issue.php',800,600);return false;" title="File: pages/_testing/proj_table_issue/table_add_issue.php">Table - Add Issue</a></li>
                <!--<li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_table_issue/table_inline_issue.php',800,600);return false;" title="File: pages/_testing/proj_table_issue/table_inline_issue.php">Table - Inline Issue</a></li>-->
                <li><a href="#" onclick="launch_dialog('pages/sprint_04/dms/popHelp.php',525,300);return false;" title="File: pages/_testing/popHelp.php">DMS - Help Pop-up</a></li>
                <li><a href="#" onclick="launch_dialog('pages/sprint_04/dms/popError.php',525,300);return false;" title="File: pages/_testing/popError.php">DMS - Error Pop-up</a></li>
                <li><a href="#" onclick="launch_dialog('pages/sprint_04/dms/popWarning.php',525,300);return false;" title="File: pages/_testing/popWarning.php">DMS - Warning Pop-up</a></li>
                <li><a href="#" onclick="launch_dialog('pages/sprint_04/dms/popFyi.php',525,300);return false;" title="File: pages/_testing/popFyi.php">DMS - FYI Pop-up</a></li>
                <li><a href="#" onclick="launch_dialog('pages/sprint_04/dms/popCombined.php',525,300);return false;" title="File: pages/_testing/popCombined.php">DMS - Combined Pop-up</a></li>
            </ul>
        </div>    
    </div>    
    <h3>Dialogs</h3>
    <div class="columns">
        <div class="lt_column">
            <h4>Home Page</h4>
            <ul>
                <li class="current_sprint"><a href="#" onclick="launch('pages/dialogs/notifications/index.php',560,400);return false;">Notification</a></li>
            </ul>

            <h4>Generic</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/save_as.php',525,475);return false;">Action Dialog</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/wizard.php',850,650);return false;" title="Wizard">Wizard</a></li>
            </ul>

            <h4>Common</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/bookmarks.php',560,400);return false;" title="Bookmarks">Bookmarks</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/common_download.php',300,225);return false;" title="Bookmarks">Common Download Dialog</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/copy_url_to_clipboard.php',560,300);return false;" title="">Copy URL to Clipboard</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/import_wizard.php',850,575);return false;">Import</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/export_wizard.php',850,575);return false;">Export</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/print.php',560,445);return false;" title="">Print</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/print_small.php',460,245);return false;" title="">Print (small)</a></li>
                <li><a href="#" onclick="window.open('pages/_testing/proj_action_dialogs/print_preview.php','PrintPreview', 'menubar=no,location=no,status=no,width=850,height=560,toolbar=no,resizable=yes,scrollbars=yes');">Print Preview</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/save_as.php',560,450);return false;" title="">Save As</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/send.php',560,400);return false;" title="Send">Send</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/share.php',660,400);return false;" title="Share">Share</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/subscriptions.php',560,450);return false;" title="">Subscriptions</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/save_as_w_attachments.php',560,550);return false;" title="">Save As (w/ attachments)</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/save_search_as.php',560,550);return false;" title="">Save Search As</a></li>
            </ul>
        
            <h4>Activities</h4>
            <ul>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_dependency_rule/dependency_rule.php',800,600);return false;" title="">Add Dependency Rule</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_add_discussion.php',560,450);return false;">Add Discussion</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_action_item.php',560,470);return false;">Create Action Item</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_images.php',525,300);return false;" title="Add Images">Add Images</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_team_members.php',560,440);return false;">Add Team Members</a></li>
                
                
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/change_parent.php',560,300);return false;">Change Parent</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/compare_baselines.php',700,520);return false;">Compare Baselines</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_baseline.php',550,370);return false;">Create Baseline</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_new_activities.php',570,595);return false;" title="">Create New Activities</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_news.php',550,370);return false;">Create News</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/delegate.php',660,400);return false;">Delegate</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/move_schedule_dates.php',560,400);return false;">Move Schedule Dates</a></li>

                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_contents_attachments.php',1024,768);return false;">PPM Summary Contents Attachment</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_discussion_reply.php',560,400);return false;">PPM Summary Discussion Reply</a></li>
                
                
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/resource_utilization.php',680,670);return false;">Resource Utilization Report</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_send_message.php',560,400);return false;">Send Message (Summary Page)</a></li>
				<li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/substitute_resource.php',560,400);return false;">Substitute Resource</a></li>
				<li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/timesheet_report.php',980,670);return false;">Timesheet Report</a></li>
            </ul>

            <h4>Attachments / File Folder</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_files.php',700,400);return false;" title="Add Files">Add Files</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_urls.php',700,400);return false;" title="Add URLs">Add URLs</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/attach_files.php',660,400);return false;">Attach Files</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/design_structure_where_used.php',1024,768);return false;">Design Structure Where Used</a></li>
                
                 <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/replace_attached_files.php',660,520);return false;">Replace Attached Files</a></li>
                 <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/replace_attached_version.php',660,520);return false;">Replace Attached Version</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/mass_update_wizard.php',850,650);return false;">Mass Update Wizard</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/prompt_adv_file_upload.php',525,300);return false;" title="Prompt File Upload">Prompt File Upload</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/remove_as_attachment.php',660,400);return false;">Remove as Attachment</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/prompt_replace_file.php',800,600);return false;" title="">Replace File</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/table_edit_frame.php',800,600);return false;" title="">Replace File Folder Files</a></li>
            </ul>
			<h4>Declarations</h4>
    	    <ul>        
        	    <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_declaration.php',560,400);return false;">Create Declaration (from item)</a></li>
        	    <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/import_ipc_axml.php',850,575);return false;">Import IPC XML</a></li>
        	    <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/import_axml.php',850,575);return false;">Import aXML</a></li>
        	    <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/signoff_statement.php',560,350);return false;">Signoff Statement</a></li>
	        </ul>


			<h4>Discussion</h4>
    	    <ul>        
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_discussion.php',560,450);return false;">Create Discussion</a></li>
        	    <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/reply_to_discussion.php',560,400);return false;">Reply to Discussion</a></li>
	        </ul>

        </div>

        <div class="rt_column">

            <h4>Items</h4>
            <ul>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/resolve_checksum.php',525,450);return false;" title="Resolve Checksum">Resolve Checksum</a></li>              
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/bom_multilevel_expand.php',525,300);return false;" title="BOM Multilevel Expand">BOM Multilevel Expand</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_new_parts.php',550,450);return false;" title="">Create New Parts</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/find.php',525,300);return false;" title="BOM Multilevel Expand">Find</a></li>
            </ul>

            <h4>Price / PCO</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_new_published_prices.php',550,590);return false;" title="">Create New Published Prices</a></li>
        	    <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/set_effective_date.php',460,250);return false;">Set Effective Date</a></li>
            </ul>


            <h4>Reports</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/view_schedule_details.php',525,425);return false;" title="View Schedule Details">View Report Properties</a></li>
            </ul>

            <h4>RFQ / Response</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/export_responses.php',525,300);return false;" title="Export Responses">Export Responses</a></li>
            </ul>


            <h4>Sourcing Project</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_modify_partners.php',660,400);return false;" title="Add/Modify Partners">Add / Modify Partners</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/calculate_quantities.php',465,130);return false;" title="">Calculate Quantities</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_new_sourcing_project_a.php',560,490);return false;" title="">Create New Sourcing Project A</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_new_sourcing_project_b.php',560,570);return false;" title="">Create New Sourcing Project B</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_request_for_quote.php',850,650);return false;" title="">Create Request for Quote</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/publish_to_item_master.php',560,680);return false;" title="">Publish to Item Master</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/set_target_price.php',560,500);return false;" title="Send">Set Target Price</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/update_aml_from_item_master.php',550,330);return false;" title="">Update AML from Item Master</a></li>
            </ul>
            
            <h4>Supplier</h4>
            <ul>
            <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_manufacturer_offering.php',550,450);return false;">Add Manufacturer Offering</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_routing_rule.php',560,300);return false;">Add Routing Rule</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/define_routing_specs.php',550,400);return false;">Define Routing Specifications</a></li>
            </ul>

            <h4>User</h4>
            <ul>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/create_escalation.php',560,300);return false;">Create Escalation</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/reset_password.php',560,300);return false;">Change Password</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/reset_user_account.php',560,300);return false;">Reset User Password</a></li>
			</ul>
            
            <h4>Workflow</h4>
            <ul>   
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/add_approvers_and_observers.php',560,500);return false;">Add Approvers and Observers</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/approve.php',675,660);return false;" title="Approve">Approve</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/audit_released_results.php',525,375);return false;">Audit Released Results</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/audit_status_results.php',525,375);return false;">Audit Status Results</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/aml_bulk_change_wizard.php',850,650);return false;">AML Bulk Change</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/bulk_change_wizard.php',850,650);return false;">BOM Bulk Change</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/change_status.php',560,700);return false;" title="">Change Status</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/comment.php',560,470);return false;" title="Comment">Comment</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/reject.php',675,660);return false;" title="Reject">Reject</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/remove_approvers_and_observers.php',560,500);return false;">Remove Approvers and Observers</a></li>
                <li><a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/view_workflows.php',660,420);return false;">View Workflows</a></li>
            </ul>
            <h4>Dashboard &amp; Widgets</h4>
            <ul>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('_anthony/dashboard/dashboard.php',800,600);return false;" title="Wizard">Dashboard POC</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('_anthony/dashboard/dashboard_themes.php',800,600);return false;" title="Wizard">Dashboard w/Themes</a></li>
            </ul>
        </div>    
    </div>    
    <h2>Layout Patterns</h2>
    <h3>Non-object</h3>
    <div class="columns">
        <div class="lt_column">
            <ul>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('_anthony/panes/2panes.php',800,600);return false;" title="Wizard">Bi-Pane Layout</a></li>
                <li class="current_sprint"><a href="#" onclick="launch_dialog('_anthony/panes/3panes.php',800,600);return false;" title="Wizard">Tri-Pane Layout</a></li>
            </ul>
        </div>
        <div class="rt_column">
        
        </div>    
    </div>    
    <h3>Object</h3>
    <div class="columns">
        <div class="lt_column">
			<ul>
            	<li><a href="#" onclick="launch_dialog('car.php?page=pages/sprint_05/car_templates/obj_table_tab.php',1024,768);return false;" title="File: car.php?page=pages/sprint_05/car_templates/obj_table_tab.php#">Subtabs</a></li>
			</ul>
        </div>
        <div class="rt_column">
			<ul>
                <li><a href="#" onclick="launch('pages/sprint_01/object_header.php');return false;">Object Header</a></li>
            </ul>
        </div>    
    </div> 
    <h2>Interactions</h2>   
    <h3>Search</h3>
    <div class="columns">
        <div class="lt_column">
      		<ul>
            	<li>&nbsp;</li>
            </ul>  
        </div>
        <div class="rt_column">
        
        </div>    
    </div>    

    <h2>Archive</h2>
    <div class="columns">
        <h3>Action Dialogs</h3>
        <div class="lt_column"> 
            <h4>Product Cost Managment (pcm)</h4>
            <ul><? echo getAgileForms("pages/dialogs","pcm") ?></ul>
        </div> 
        <div class="rt_column">
    
        </div>
    </div>
</body>
</html>