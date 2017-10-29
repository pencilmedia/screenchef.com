<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <link rel="stylesheet" type="text/css" href="global/css/action_dialog_report_output.css" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	
    <script type="text/javascript" src="global/js/action_dialogs_report_output_common.js"></script>
    <script type="text/javascript" src="bookmarks.php.js"></script>
	<script type="text/javascript" src="resource_utilization.php.js"></script>
    <title>Resource Utilization Report</title>
</head>
<body class="action_dialog report_output">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
		        <a href="#" id="cmdSend" class="button"><span>Print</span></a> 
		        <a href="#" id="cmdSend" class="button"><span>Export</span></a>
                <span class="btn_divide">&nbsp;</span> 
                <a href="#" id="cmdSend" class="button"><span><em class="add">&nbsp;</em></span></a> 
                <a href="#" id="cmdSend" class="button"><span><em class="remove">&nbsp;</em></span></a> 
            </div>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<div class="title">
			<h2>Resource Utilization Report</h2>
			<p>Administrator, Test(admin)</p>
		</div>
		<div class="search_options">
			<div style="overflow: hidden; height: 150px;"  id="basic_search_table_content" class="basic_search_table_content basic">
				<div class ="two_column_side_by_side">
					<dl class ="side_by_side">
						<dt ><label for="ui_report_type">Report Type:</label></dt>
						<dd>
							<select id="ui_report_type" style="width: 55%;" class="long_width">
								<option>Resources Utilization Summary</option>
								<option>TBD</option>
							</select>
							<span class="error_msg">Error message...</span>
						</dd>
						<dt><label for="ui_start_date">Start Date:</label></dt>
						<dd>
							<input type="text" id="ui_start_date" class="short_width" value="11/19/2008" />
							<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
							<span class="error_msg">Error message...</span>
						</dd>
						<dt><label for="ui_start_date">End Date:</label></dt>
						<dd>
							<input type="text" id="ui_start_date" class="short_width" value="12/17/2008" />
							<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
							<span class="error_msg">Error message...</span>
						</dd>
						<dt><label for="ui_year">Reporting Intervals:</label></dt>
						<dd>
							<select id="ui_year" class="short_width">
								<option>Year</option>
								<option>TBD</option>
							</select>
							<span class="error_msg">Error message...</span>
						</dd>
					</dl>
				</div>
				<div class ="two_column_side_by_side">
					<dl class="side_by_side">
						<dt><label for="ui_resources">Resources:</label></dt>
						<dd> 
								<input type="text" id="ui_resources" value="" class="medium_width" />
								<span class="error_msg hidden">Error message...</span>
						</dd>
						<dt class="place_holder"></dt>
						<dd>
							<input type="checkbox" id="optional" /> <label for="optional">Include allocations from proposed Programs</label>
							<span class="error_msg">Error message...</span>
						</dd>
						<dt><label for="ui_chart_type">Chart Type:</label></dt>
						<dd>
							<select id="ui_chart_type" class="medium_width">
								<option>Bar Chart</option>
								<option>TBD</option>
							</select>
							<span class="error_msg">Error message...</span>
						</dd>                        
					</dl>
				</div>
			</div>
			<div id="search_expand_wrapper" class="search_expand_wrapper" title="Expand">
				<div id="search_expand" class="search_expand">&nbsp;</div>
				<span class="search_expand_text">Click to show report options</span>
			</div>
			<div id="search_collapse_wrapper_basic" class="search_collapse_wrapper" title="Collapse">
				<div style="min-width:0px;"class="column_one"><p>&nbsp;</p></div>
				<div id="search_collapse" class="search_collapse column_two">&nbsp;</div>
				<div style="padding:0px;" class="column_three">
					<p>
						<a href="#" class="button"><span>Refresh</span></a>
					</p>
				</div>
			</div>
			<div style="height: 493px;  width: 630px;  float: left; margin-left: 5px; margin-top: 28px;overflow-x:hidden; overflow-y: auto;">
				<img id="report00" src="../../../global/images/report_graph3.png"/>
			</div>
		</div>
    </div>

</body>
</html>