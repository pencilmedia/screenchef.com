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
	<script type="text/javascript" src="remove_as_attachment.php.js"></script>
	<title>Remove as Attachment</title>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <div class="header_wrapper">
            <div class="column_one">
                <h2 id="header_title">Remove as Attachment</h2>
                <p>File Folder &bull; File Folder</p>
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
                	<legend>To Remove:</legend>
                    <dl class="side_by_side_mixed with_top_margin">
                        <dt>File Folder Version:</dt>
						<dd>
							<select name="list_selector_01" id="selector_01" tabindex="16" class="medium_width">
                            	<option value="Latest">Latest (4)</option>
								<option value="4">4</option>
                                <option value="2">2</option>
                                <option value="2">All</option>
							</select>
						</dd>
                        <dt>Files:</dt>
						<dd>   
                        	<ul class="column_zero">	
                                <li><input id="chk_00" type="checkbox" name="list_selector_01" value="" class="form_selectors with_checkbox" />
                                <label for="chk_00" >All</label></li>
                            </ul>
                        	<ul class="column_one">	
                                <li><input id="chk_01" type="checkbox" name="list_selector_01" value="" class="form_selectors with_checkbox" /> 
                                	<label for="chk_01">readme.txt</label></li>
                                <li><input id="chk_02" type="checkbox" name="list_selector_01" value="" class="form_selectors with_checkbox" /> 
                                	<label for="chk_02">driver.dll</label></li>
                    		</ul>
                            <ul class="column_two">
                                <li><input id="chk_03" type="checkbox" name="list_selector_01" value="" class="form_selectors with_checkbox" /> 
                                	<label for="chk_03">user_guide.pdf</label></li>
                                <li><input id="chk_04" type="checkbox" name="list_selector_01" value="" class="form_selectors with_checkbox" /> 
                                	<label for="chk_04">report.xls</label></li>
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
