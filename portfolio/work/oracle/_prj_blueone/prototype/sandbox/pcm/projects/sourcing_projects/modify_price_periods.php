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
	<title>Modify Price Periods</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Modify Price Periods</h2>
                <p>Sourcing Project &bull; PRJ00234</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>The Current Price Period will display as the default in Analysis and Response views.  If you set a price period as required, then suppliers will not be able to submit response without entering information for that period.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset>
        	<legend>Specify the Current Period</legend>
            <dl class="side_by_side_mixed with_top_margin">
                <!-- SELECT CONTROL -->
                <dt><label for="req_sel_00">Price Period:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="">09/01/2006 - 11/29/2006</option>
                        <option value="">12/01/2006 - 02/28/2007</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
			</dl>
		</fieldset>
        <fieldset style="padding:10px;">
        	<legend>All Price Periods</legend>
			<style>
				table.pcm_pp th,
				table.pcm_pp td
				{
					padding: 5px;
				}
				table.pcm_pp td input
				{
					vertical-align: inherit;
				}
				.nowrap
				{
					white-space:nowrap;
				}
			</style>
			<table class="pcm_pp">
            	<thead>
                	<tr>
                    	<th>Start Date</th>
                    	<th>End Date</th>
                    	<th>Response Required</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                	<tr>
                    	<td>09/01/2006</td>
                        <td>11/29/2006</td>
                        <td class="center"><input type="checkbox" id="chk01"  checked="checked"/></td>
                        <td>
	                        <a class="button" href="#"><span><em class="iconic remove">&nbsp;</em></span></a>
                        </td>
                    </tr>
                	<tr>
                    	<td>12/01/2006</td>
                        <td>02/28/2007</td>
                        <td class="center"><input type="checkbox" id="chk02" checked="checked" /></td>
                        <td>
	                        <a class="button" href="#"><span><em class="iconic remove">&nbsp;</em></span></a>
                        </td>
                    </tr>
                	<tr>
                    	<td>
                        	<input type="text" id="txt_field_00" class="medium_width" value="03/01/2007" />
							<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
						</td>
                    	<td>
                        	<input type="text" id="txt_field_00" class="medium_width" value="05/30/2007" />
							<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
						</td>
                        <td class="center"><input type="checkbox" id="chk02" /></td>
                        <td class="nowrap">
	                        <a class="button" href="#"><span><em class="iconic remove">&nbsp;</em></span></a>
	                        <a class="button" href="#"><span><em class="iconic add">&nbsp;</em></span></a>
                        </td>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Publish</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
