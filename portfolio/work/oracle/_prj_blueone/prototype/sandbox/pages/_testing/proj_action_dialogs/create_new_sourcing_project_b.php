<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="create_new_sourcing_project_b.php.js"></script>
	<title>Create New...</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create New</h2>
                <p>Sourcing Projects</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">

		<fieldset class="dynamic">
			<dl class="side_by_side_mixed">
				<dt class="required" title="Type is required"><label for="first_field">Type:</label></dt>
				<dd>
					<select id="first_field" class="long_width">
						<option value=""></option>
						<option value="sourcing project" selected="selected">Sourcing Project</option>
					</select>
                    <span class="error_msg hidden">Error message...</span>
				</dd>
			<dt><label for="ui_control_id_45ff14b1155dc0.25480277">Number:</label></dt>
			<dd>
				<input type="text" id="autoNumber" value="100664" class="auto_number_field disabled long_width" disabled="disabled" />
				<a href="#" id="cmdAutoNumber" class="button"><span><em class="iconic auto_number">&nbsp;</em>&nbsp;</span></a>
			</dd>
				<dt class="required" title="Text is required"><label for="ui_control_id_45f08466a1dd79.07322989">Text (flex):</label></dt>
				<dd>
					<input type="text" id="ui_control_id_45f08466a1dd79.07322989" class="long_width" value="" />
                    <span class="error_msg hidden">Error message...</span>
				</dd>
			</dl>
		</fieldset>
		<fieldset>
			<legend><input id="ui_quantity_breaks" type="radio" class="form_selectors" name="select_title" checked="checked"  /><label for="ui_quantity_breaks">Quantity Breaks</label></legend>
			<dl class="side_by_side_mixed with_top_margin">
			<dt><label for="ui_number_01">Number:</label></dt>
			<dd>
				<select id="ui_number_01" class="short_width">
					<option value="1" selected="selected">1</option>
					<option value="">2</option>
					<option value="">3</option>
					<option value="">4</option>
					<option value="">5</option>
					<option value="">6</option>
				</select>
			</dd>
			</dl>
		</fieldset>
		<fieldset id="">
			<legend><input id="ui_effectivity_period" type="radio" class="form_selectors" name="select_title" /><label for="ui_effectivity_period">Effectivity Periods</label></legend>
			<dl class="side_by_side_mixed with_top_margin">
				<dt><label for="ui_number_date">Number of Date Periods:</label></dt>
				<dd>
					<select id="ui_number_date" name="" class="short_width">
						<option value="">1</option>
						<option value="">2</option>
						<option value="" selected="selected">3</option>
						<option value="">4</option>
						<option value="">5</option>
						<option value="">6</option>
						<option value="">7</option>
						<option value="">8</option>
						<option value="">9</option>
						<option value="">10</option>
						<option value="">11</option>
						<option value="">12</option>
						<option value="">13</option>
						<option value="">14</option>
						<option value="">15</option>
						<option value="">16</option>
						<option value="">17</option>
						<option value="">18</option>
						<option value="">19</option>
						<option value="">20</option>
					</select>
				</dd>
				<dt><label for="ui_period_type">Period Type:</label></dt>
				<dd>
					<select id="ui_period_type" class="short_width">
						<option value="">Monthly</option>
						<option value="">Quarterly</option>
						<option value="">Semi-Annually</option>
						<option value="">Yearly</option>
						<option value="" selected="selected">[Variable]</option>
					</select>
				</dd>
				
				<dt id="dynamic_require" class="required"><label for="ui_start_date">Start Date:</label></dt>
				<dd class="dually required">
					<!-- 1st field element and button -->
					<input type="text" id="ui_start_date" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
					<!-- 2nd field element and button -->
					<label for="ui_end_date" id="ui_end_date_label">End Date:</label>
					<input type="text" id="ui_end_date" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
					<span class="error_msg hidden">Error message...</span>
                </dd>
				<dt class="required"><label for="ui_start_date2">Start Date:</label></dt>
				<dd class="dually required">
					<!-- 1st field element and button -->
					<input type="text" id="ui_start_date2" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
					<!-- 2nd field element and button -->
					<label for="ui_end_date2">End Date:</label>
					<input type="text" id="ui_end_date2" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                    <span class="error_msg hidden">Error message...</span>
				</dd>
				<dt class="required"><label for="ui_start_date3">Start Date:</label></dt>
				<dd class="dually required">
					<!-- 1st field element and button -->
					<input type="text" id="ui_start_date3" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
					<!-- 2nd field element and button -->
					<label for="ui_end_date3">End Date:</label>
					<input type="text" id="ui_end_date3" class="short_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                    <span class="error_msg hidden">Error message...</span>
				</dd>

				<dt><label for="ui_quantity_break">Quantity Breaks per Period:</label></dt>
				<dd>
					<select id="ui_quantity_break" class="short_width" >
						<option value="" selected="selected">1</option>
						<option value="">2</option>
						<option value="">3</option>
						<option value="">4</option>
						<option value="">5</option>
						<option value="">6</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->


		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    	<input type="checkbox" id="optional" /> <label for="optional">Continue creation in wizard</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
