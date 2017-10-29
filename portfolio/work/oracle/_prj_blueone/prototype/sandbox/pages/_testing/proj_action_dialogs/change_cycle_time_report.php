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
	<script type="text/javascript" src="new_widget_wizard.php.js"></script>
	<title>Wizard...</title>
</head>
<body class="action_dialog wizard muw">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Change Cycle Time Report</h2>
            </div>		
        </div>
        <div id="wizard_steps" class="wizard_steps">
            <h2 id="wStepTitle">Define Report</h2>
        </div>
        <ul class="steps">
        	<li id="1" title="Tooltip Title - Lorem ipsum..." class="sec first"><a href="#">1</a></li>
        	<li id="2" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">2</a></li>
        	<li id="3" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">3</a></li>
        	<li id="4" title="Tooltip Title - Lorem ipsum..." class="sec"><a href="#">4</a></li>
      	</ul>
        <div id="page_message" class="message info">
            <p id="step_message">Information text place holder...</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <fieldset id="step_1">
				
				
				<legend>Time Period</legend>



   	            <dl class="side_by_side_mixed with_top_margin">

                <!-- TEXT CONTROL -->

                <dt><label for="txt_field_00">From Date:</label></dt>
                <dd>
                	<input type="text" id="txt_field_00" class="short_width" value="" />
                    <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                	<span class="error_msg hidden">Error message...</span>
                </dd>         
                <dt><label for="txt_field_00">To:</label></dt>
                <dd>
                	<input type="text" id="txt_field_00" class="short_width" value="" />
                    <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                	<span class="error_msg hidden">Error message...</span>
                </dd>   
				
                    <dt><label>Time Unit:</label></dt>
                    <dd class="select_action_choices">
						<select class="medium_width" id="r_handler">
							<option value="graph">Entire Period</option>
						</select>
                    </dd>
                </dl>
            </fieldset>



            <fieldset>
				
				
				<legend>Status Change</legend>



   	            <dl class="side_by_side_mixed with_top_margin">

			
                    <dt><label>Work Files:</label></dt>
                    <dd class="select_action_choices">
						<select class="medium_width" id="r_handler">
							<option value="graph">&nbsp;</option>
						</select>
                    </dd>


                    <dt><label>From Status:</label></dt>
                    <dd class="select_action_choices">
						<select class="medium_width" id="r_handler">
							<option value="graph">&nbsp;</option>
						</select>
                    </dd>

                    <dt><label>To Status:</label></dt>
                    <dd class="select_action_choices">
						<select class="medium_width" id="r_handler">
							<option value="graph">&nbsp;</option>
						</select>
                    </dd>

                </dl>
            </fieldset>
            

            <fieldset>
				
				
				<legend>Additional Report Criteria</legend>



   	            <dl class="side_by_side_mixed with_top_margin">

			

                    <dt><label>Display Changes:</label></dt>
                    <dd class="select_action_choices">
						<select class="medium_width" id="r_handler">
							<option>Product Line</option>
						</select>
                    </dd>
				</dl>

			<dl class="side_by_side_mixed selector_list">
				<dt>Output Format:</dt>
				<dd>
					<input id="first_field" type="radio" name="s1" class="form_selectors" value="1" checked="checked" />
					<label for="first_field">Yes</label>
					<input id="first_field" type="radio" name="s1" class="form_selectors" value="1" checked="checked" />
					<label for="first_field">No</label>

				</dd>
				<dt>Exclude Empty Columns:</dt>
				<dd>
					<input id="first_field" type="radio" name="s1" class="form_selectors" value="1" checked="checked" />
					<label for="first_field">Yes</label>
					<input id="first_field" type="radio" name="s1" class="form_selectors" value="1" checked="checked" />
					<label for="first_field">No</label>

				</dd>
			</dl>

                </dl>
            </fieldset>			
			
        	<!-- ****************************** -->
			<!-- 	STEP #2						-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">
   	            <dl class="side_by_side_mixed with_bottom_margin">

					<!-- SINGLE SELECT LIST -->
					<dt  class="mixed_text"><input type="radio" name="search_type"  id="st1" checked="checked"  /></dt>
					<dd><label for="st1">Saved Search</label></dd>
					<dt>&nbsp;</dt>
					<dd>
						<div class="list_control single_list medium_width">
							<input type="text" id="ssl_00" autocomplete="off"/>
							<div class="auto_complete_results"></div>
							<div class="pill_container" tabindex="-1">
	
								<ul id="pillbox_00"></ul>
							</div>
						</div>
						<a href="#" id="cmd_ssl_00" class="button"><span><em class="view_details">&nbsp;</em></span></a>
					</dd> 
				</dl>
					
   	            <dl class="side_by_side_mixed with_bottom_margin">
	
					<!-- SINGLE SELECT LIST -->
					<dt  class="mixed_text"><input type="radio" name="search_type" id="st2" /></dt>
					<dd><label for="st2">Advanced Search</label> <a href="#" id="cmd_ssl_00" class="button"><span>Define Query</span></a></dd>
					<dt>&nbsp;</dt>
					<dd>

		   	            <dl>

							<!-- SINGLE SELECT LIST -->
							<dt class="mixed_text small">For:</dt>
							<dd class="small_text">Change</dd>
							<dt class="mixed_text small">Type:</dt>
							<dd class="small_text">Object Search</dd>
							<dt class="mixed_text small">Criteria:</dt>
							<dd class="small_text">Type is: equal to ECO and change Analyst is equal to Joe Smith</dd>
						</dl>

					</dd> 
	

                </dl>

            </div>
            
        	<!-- ****************************** -->
			<!-- 	STEP #3						-->
        	<!-- ****************************** -->
            <div id="step_3" class="step">
				<div id="table_content">
					<fieldset class="dynamic with_bottom_margin">
						<!-- Smoke and Mirrors  -->
						<!-- because we do not have this control -->
						<div>
							<div style="width:237px; display: block; float:left; font-weight:bold">Available Fields</div>
							<div style="font-weight:bold;">Fields to Display</div>
						</div>
						<img src="global/images/shuttle-2.png" />
					</fieldset>
				</div>

				<div id="graph_content">
					<fieldset class="dynamic with_bottom_margin">
						<dl class="side_by_side_mixed">
							<dt><label>Type:</label></dt>
							<dd class="mixed_text">
								<select id="as_of" class="short_width">
									<option>Polar</option>
								</select>
							</dd>
						</dl>
			
						<dl class="side_by_side_mixed">
							<dt class="mixed_text">&nbsp;</dt>
							<dd class="mixed_text"><input id="kick_baseline" type="checkbox" name="" value="" class="form_selectors" /> <label for="kick_baseline">3-D Style</label></dd>
							<dt class="mixed_text">&nbsp;</dt>
							<dd class="mixed_text">
								<input id="plan_record" type="checkbox" name="" value="" class="form_selectors" /> <label for="plan_record">Show Legend</label>
								<label for="3" class="inline_dropdown">Legend Position: <select id="as_of" class="short_width"><option>Default</option></select></label>
							</dd>
			
						</dl>
					</fieldset>
	
	
					<fieldset class="dynamic with_bottom_margin">
						<dl class="side_by_side_mixed">
							<dt><label>X-Axis:</label></dt>
							<dd class="mixed_text">
								<select id="as_of" class="medium_width">
									<option>General Info Owner</option>
								</select>
							</dd>
							<dt><label>Y-Axis:</label></dt>
							<dd class="mixed_text">
								<select id="as_of" class="medium_width">
									<option>Cover Page RFQ Number</option>
								</select>
							</dd>
						</dl>
					</fieldset>
	
					<fieldset class="dynamic with_bottom_margin">
						<dl class="side_by_side_mixed">
							<dt><label>Function:</label></dt>
							<dd class="mixed_text">
								<select id="as_of" class="medium_width">
									<option>Average</option>
								</select>
							</dd>
						</dl>
					</fieldset>
	
					<fieldset class="dynamic with_bottom_margin">
						<dl class="side_by_side_mixed">
							<dt><label>Header Label:</label></dt>
							<dd class="mixed_text">
								<input type="text" class="medium_width" />
							</dd>
	
							<dt><label>Footer Label:</label></dt>
							<dd class="mixed_text">
								<input type="text" class="medium_width" />
							</dd>
	
							<dt><label>X-Axis Label:</label></dt>
							<dd class="mixed_text">
								<input type="text" class="medium_width" />
							</dd>
	
							<dt><label>Y-Axis Label:</label></dt>
							<dd class="mixed_text">
								<input type="text" class="medium_width" />
							</dd>
						</dl>
					</fieldset>
					
				
				</div>
				
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