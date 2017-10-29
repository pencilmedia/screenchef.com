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
	<script type="text/javascript" src="replace_attached_files.php.js"></script>
	<title>Replace Attached Files</title>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Replace Attached Files</h2>
                <p>File Folder &bull; Language Translations</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p id="step_message">Help text...</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        	<!-- ****************************** -->
			<!-- 	STEP #1						-->
        	<!-- ****************************** -->
            <div id="step_1" class="step">
				<fieldset id="list_selector_01" class="input_lists three_columns_checkbox">
                	<legend>To Replace:</legend>
                    <dl class="side_by_side_mixed with_top_margin">
                        <dt>File Folder Version:</dt>
						<dd>
							<select id="select_01" name="list_selector_01" tabindex="16" class="medium_width">
                            	<option>Latest (4)</option>
								<option>4</option>
                                <option>2</option>
							</select>
						</dd>
                        <dt>Files</dt>
						<dd >   
                        	<ul class="column_zero">	
                                <li><input id="list_01_chk_00" type="checkbox" name="list_selector_01" value="" class="form_selectors" /> <label for="list_01_chk_00" >All</label></li>
                            </ul>
                        	<ul class="column_one">	
                                <li><input id="list_01_chk_01" type="checkbox" name="list_selector_01" value="" class="form_selectors" /> 
                                	<label for="list_01_chk_01">english.txt</label></li>
                                <li><input id="list_01_chk_02" type="checkbox" name="list_selector_01" value="" class="form_selectors" /> 
                                	<label for="list_01_chk_02">spanish.txt</label></li>
                    		</ul>
                            <ul class="column_two">
                                <li><input id="list_01_chk_03" type="checkbox" name="list_selector_01" value="" class="form_selectors" /> 
                                	<label for="list_01_chk_03">french.txt</label></li>
                                <li><input id="list_01_chk_04" type="checkbox" name="list_selector_01" value="" class="form_selectors" /> 
                                	<label for="list_01_chk_04">template.dot</label></li>
                            </ul>
						</dd>
                    </dl>
				</fieldset>
                <fieldset id="list_selector_02" class="input_lists three_columns_checkbox">
                <legend>Replace With:</legend>
                    <dl class="side_by_side_mixed with_top_margin">
                    	<dt><label for="cp_01">Replacement File Folder:</label></dt>
                		<dd>
                            <div class="list_control single_list long_width">
                                <input type="text" id="cp_01" autocomplete="off" />
                                <div class="auto_complete_results"></div>
                                <div class="pill_container" tabindex="-1">
                                    <ul class="pillbox" id="pillbox00">
                                    	<li id="pill01" ><span >FF0031</span><div id="pill_ellip">.</div>
<a id="currentPillAnchor" href="#" tabindex="-1"><span>x</span></a></li>
									</ul>
                                </div>
                    		</div>
                    		<a href="#" id="cmd_cp_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                		</dd>  
                        <dt >File Folder Version:</dt>
						<dd>
							<select name="list_selector_02" id="select_02" tabindex="16" class="medium_width">
                            	<option>Latest (2)</option>
								<option>2</option>
                                <option>1</option>
							</select>
						</dd>
                        <dt>Files</dt>
						<dd>   
                        	<ul class="column_zero">	
                                <li><input id="list_02_chk_00" type="checkbox" name="list_selector_02" value="" class="form_selectors"  /> <label for="list_02_chk_00" >All</label></li>
                            </ul>
                        	<ul class="column_one">	
                                <li><input id="list_02_chk_01" type="checkbox" name="list_selector_02" value="" class="form_selectors" /> 
                                	<label for="list02_chk_01">english.txt</label></li>
                                <li><input id="list_02_chk_02" type="checkbox" name="list_selector_02" value="" class="form_selectors" /> 
                                	<label for="list_02_chk_02">spanish.txt</label></li>
                    		</ul>
                            <ul class="column_two">
                                <li><input id="list_02_chk_03" type="checkbox" name="list_selector_02" value="" class="form_selectors" /> 
                                	<label for="list_02_chk_03">french.txt</label></li>
                                <li><input id="list_02_chk_04" type="checkbox" name="list_selector_02" value="" class="form_selectors" /> 
                                	<label for="list_02_chk_04">template.dot</label></li>
                            </ul>
						</dd>
                    </dl>
				</fieldset>
            </div>
        	<!-- ****************************** -->
			<!-- 	STEP #2 					-->
        	<!-- ****************************** -->
            <div id="step_2" class="step">
              		<!--************************************
                        TABLE ACTIONS
                    *************************************-->
                    <table class="rbr" cellpadding="0" cellspacing="0">
                        <tr class="header">
                            <td class="handle"></td>
                            <td>column1</td>
                            <td>column2</td>
                            <td>column3</td>
                        </tr>
                        <tr>
                        	<td class="handle"></td>
                            <td>lorem</td>
                            <td>epsum</td>
                            <td>sim</td>
                        </tr>
                         <tr>
                        	<td class="handle"></td>
                            <td>lorem</td>
                            <td>epsum</td>
                            <td>sim</td>
                        </tr>
                    </table>
                    <div class="blank_table_space"/> 
             </div>
           </div>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
	    <div class="column_one">
	    </div>
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Continue<em class="arrow_next">&nbsp;</em></span></a>
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>
