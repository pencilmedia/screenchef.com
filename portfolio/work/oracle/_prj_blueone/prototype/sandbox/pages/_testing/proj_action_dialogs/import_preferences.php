<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/tooltip.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="import_preferences.php.js"></script>
	<title>Import Preferences</title>
    <style>
		dd.checkbox  input { margin-top: 5px; }
		.action_dialog dl.side_by_side_mixed dt
		{
			margin-bottom:10px;
			margin-right:4px;
			width:35%;
		}
		.action_dialog dl.side_by_side_mixed dd
		{
			float:left;
			margin-bottom:10px;
			min-height:22px;
			width:60% !important;
		}
		
		.idd .palette_tabs
		{
			margin-top: 15px;
		}
	</style>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Import Preferences</h2>
            </div>	
        </div>
        <ul class="palette_tabs">
            <li><a href="#" id="tab_01"><span>Parsing & Validation</span></a></li>
            <li><a href="#" id="tab_02"><span>Business Rules</span></a></li>
            <li><a href="#" id="tab_03"><span>Default Types</span></a></li>
            <li><a href="#" id="tab_04"><span>Auto Number Sources</span></a></li>
        </ul>        
	</div>
	<div id="wrapper_action_dialog_content" class="content">
        <div id="step_1" class="step">
            <dl class="side_by_side_mixed with_top_margin">
                <dt><label for="chk_00">Long Transformation:</label></dt>
                <dd class="checkbox">
                	<input type="checkbox" id="chk_00" />
                </dd>

                <dt><label for="req_sel_01a">Multilist Delimiter Character:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">semicolor ( ; )</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Cascade Delimiter Character:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Vertical bar ( | )</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Whitespace Validation Action:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Reject</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Case Validation Action:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Convert</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Length Validation Action:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Reject</option>
                    </select>
                </dd>
            </dl>
        </div>
        <div id="step_2" class="step">
            <dl class="side_by_side_mixed with_top_margin">
                <dt><label for="req_sel_01a">Smart Rules Waring Validation Behavior:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Reject Objects</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Preference Designator Quantity Mismatch Behavior:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Reject</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Behavior Upon Non-Existing Objects:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Accept</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Change Mode:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Redlining</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Redline Mode Behavior:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">New/Redlined items onto the change</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">BOM &amp; AML Import Behavior:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Import assys, amls and component</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Multi Row Update Mode:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Complete Replace</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Price Quantity Break Default:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">No</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Sourcing Project Quantity Rollup:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Yes</option>
                    </select>
                </dd>

            </dl>
        </div>
        <div id="step_3" class="step">
            <dl class="side_by_side_mixed with_top_margin">

                <dt><label for="req_sel_01a">Default Item Class:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Parts</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Default Part Type:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Part</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Default Document Type:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Document</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Default Manufacturer Party Type:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Manufacturer Part</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Default Manufacturer Type:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Manufacturer</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Default Price Type:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Published Price</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Default Quote History Type:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Quote History</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Default Customer Type:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Customer</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Default prs Type:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Problem Reports</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Default PR Type:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Problem Report</option>
                    </select>
                </dd>
            </dl>
        </div>
        <div id="step_4" class="step">
            <dl class="side_by_side_mixed with_top_margin">
                <dt><label for="req_sel_01a">Contract:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Contracts Number</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Published Price:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Publish Price Number</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Target Cost:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Target Cost</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Quote History:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Quote History Number</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Customer:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Customer Number</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Broker:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Broker Number</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01a">Component Manufacturer:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Component Manufacturer Number</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Contract Manufacturer:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Contract Manufacturer Number</option>
                    </select>
                </dd>

                <dt><label for="req_sel_01a">Distributor:</label></dt>
                <dd>
                    <select id="req_sel_01a" class="medium_width">
                        <option value="">Distributor Number</option>
                    </select>
                </dd>
                <dt><label for="req_sel_01b">Manfufacturer Representative:</label></dt>
                <dd>
                    <select id="req_sel_01b" class="medium_width">
                        <option value="">Manfufacturer Rep Number</option>
                    </select>
                </dd>
            </dl>
        </div>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div class="column_one">
        	<input type="checkbox" id="optional" /> <label for="optional">Persist preference settings to be shared by other users.</label>
	    </div>
    	<div class="column_three">
    	    <a href="#" id="cmdOk" class="button"><span><em class="save">&nbsp;</em>Save</span></a>
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
