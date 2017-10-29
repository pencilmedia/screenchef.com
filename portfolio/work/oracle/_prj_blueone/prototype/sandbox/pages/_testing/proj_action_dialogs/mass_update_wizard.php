<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/tooltip.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="mass_update_wizard.php.js"></script>
	<title>Wizard...</title>
</head>
<body class="action_dialog wizard muw">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Mass Update Wizard</h2>
                <p>Sourcing Project &bull; PRJ00502</p>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Select Action</h2>
        </div>
        <ul class="steps">
        	<li id="1" title="Tooltip Title - Lorem ipsum..." class="sec first"><a href="#">1</a></li>
        	<li id="2" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">2</a></li>
        	<li id="3" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">3</a></li>
        	<li id="4" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">4</a></li>
			<!--
        	<li id="5" title="Select Suppliers - Choose which partners and suppliers to disseminate the RFQ." class="sec"><a href="#">5</a></li>
        	<li id="6" title="Select Price Scenarios - Set the RFQ Number and then fill in the RFQ attribute information." class="sec"><a href="#">6</a></li>
        	<li id="7" title="Add Attachments - Optionally, add attachments to RFQ using the Add action on the Attachments table below." class="sec"><a href="#">7</a></li>
           	-->
      	</ul>
        <div id="page_message" class="message info">
            <p id="step_message">Lorem ipsum...</p>
        </div>

            <div class="view_controls">
                <h4 id="view_control_title">Apply To</h4>
            </div>
            <div class="table_actions">
                <div class="column_one no_width">
                    <p id="ac1">
                        Version
                        <select style="margin-right: 10px;">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <input type="checkbox"  id="all_files" /> <label for="all_files">All Files</label>
                    </p>
                    <p id="ac2">
                        <a href="#" id="cmdAdd" class="button"><span>Add</span></a>
                        <a href="#" id="cmdRemove" class="button"><span>Remove</span></a>
                    </p>
                </div>
            </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <fieldset id="step_1" class="dynamic step">
   	            <dl class="side_by_side_mixed">

                    <!-- Auto Number -->
                    <dt><label>Select Action:</label></dt>
                    <dd class="select_action_choices">
                    	<p><input id="r1" type="radio" name="action" class="r_handler"  checked="checked"/> <label for="r1">Add Files</label></p>
                    	<p><input id="r2" type="radio" name="action" class="r_handler" /> <label for="r2">Replace File</label></p>
                    	<p><input id="r3" type="radio" name="action" class="r_handler" /> <label for="r3">Replace Versions</label></p>
                    	<p><input id="r4" type="radio" name="action" class="r_handler" /> <label for="r4">Remove the File</label></p>
                    </dd>
                </dl>
            </fieldset>
            
        	<!-- ****************************** -->
			<!-- 	STEP #2						-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">

                <table class="rbr" cellpadding="0" cellspacing="0">
                    <tr class="header">
                        <td class="handle"></td>
                        <td>File Name</td>
                        <td>Description</td>
                        <td>File Size</td>
                        <td>File Type</td>
                        <td>File Path</td>
                        <td>Last View Date</td>
                        <td>Document Text</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td>Test.txt</td>
                        <td>&nbsp;</td>
                        <td>4KB</td>
                        <td>txt</td>
                        <td>&nbsp;</td>
                        <td>09/21/2007 08:35:45 AM</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>

            </div>
            
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
                <!--************************************
                    TABLE ACTIONS
                *************************************-->
                <!--************************************
                    TABLE ACTIONS
                *************************************-->
                <table id="table_step_3_a" class="rbr" cellpadding="0" cellspacing="0">
                    <tr class="header">
                        <td class="handle"></td>
                        <td class="obj_part">&nbsp;</td>
                        <td class="obj_manufacturer">&nbsp;</td>
                        <td>Description</td>
                        <td>Status</td>
                        <td>Revision</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td class="gray_selected">&nbsp;</td>
                        <td class="gray_selected">&nbsp;</td>
                        <td>SPRING STYLUS - SLV</td>
                        <td>Prelimanary</td>
                        <td style="padding:2px;">
                        	<select>
                                <option>(?) C00070</option>
                                <option>(?) C00071</option>
                                <option>(?) C00072</option>
                                <option>(?) C00073</option>
	                        </select>                        
                        </td>
                    </tr>
                </table>


                <table id="table_step_3_b" class="rbr" cellpadding="0" cellspacing="0">
                    <tr class="header">
                        <td class="handle"></td>
                        <td>Type</td>
                        <td>Number / Name</td>
                        <td>Rev</td>
                        <td>Description</td>
                        <td>Lifecycle / Status</td>
                    </tr>
                    <tr>
                        <td class="handle"></td>
                        <td>Part</td>
                        <td>P00002</td>
                        <td>Introductory</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </div>

        	<!-- ****************************** -->
			<!-- 	STEP #4						-->
        	<!-- ****************************** -->
            <fieldset id="step_4" class="dynamic step">
   	            <p><strong>Step 4</strong></h4>
    		</fieldset>        

		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdFinish" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
