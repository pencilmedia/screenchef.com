<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="comment.php.js"></script>
	<title>Set Target Price</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Set Target Price</h2>
                <p>Sourcing Project &bull; PRJ00502</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="dms" class="dms message"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p></div>-->
        <div id="page_message" class="message info">
            <p>Select the Base Cost that you will used to establish a Target.  The Target Price will be calculated based on the Base and the percentage specified for each price scenario.</p>
        
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <p>
            	<label for="req_sel_00">Set Target Price as a percentage of:</label>
                <select id="req_sel_00" class="medium_width">
                    <option value="">Standard Cost</option>
                </select>
            </p>
            <table class="target_price">
            	<thead>
                	<th colspan="2">Quantity</th>
                    <th>Percentage of Base Cost</th>
              	</thead>
                <tbody>
                	<tr>
                    	<td class="twenty_percent no_wrap">12/01/2006 to 02/28/2007</td>
                    	<td class="twenty_percent no_wrap"><strong>Quantity Break 1</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td></td>
                    	<td><strong>Quantity Break 2</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td>12/01/2006 to 02/28/2007 </td>
                    	<td><strong>Quantity Break 1</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td></td>
                    	<td><strong>Quantity Break 2</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td>12/01/2006 to 02/28/2007 </td>
                    	<td><strong>Quantity Break 1</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td></td>
                    	<td><strong>Quantity Break 2</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td>12/01/2006 to 02/28/2007 </td>
                    	<td><strong>Quantity Break 1</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>
                	<tr>
                    	<td></td>
                    	<td><strong>Quantity Break 2</strong></td>
                    	<td><input type="text" class="long_width" /></td>
                    </tr>                                        
                </tbody>
            </table>
                        
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>OK</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
