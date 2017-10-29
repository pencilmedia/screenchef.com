<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
    <script type="text/javascript" src="rollup_specification_selection.php.js"></script>
	<title>Open Declaration Request</title>
</head>
<body class="action_dialog">
<div class="prompt_shadow">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Processing Request...</h4>
                <p style="width: 100%;">Where is the progress indicator for this?</p>
            </fieldset>
        </form>
    </div>
</div>


	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Open Declaration Request</h2>
                <p>ACME Manufacturing</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Below is a list of Declaration Requests that have been sent to you.  Select the Declaration Request tha tyou would like to respond to.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content without_top_padding">

                <table class="rbr" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="handle"></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Due Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td class="handle"></td>
                            <td>DJ-1005</td>
                            <td>JGPSSI Round 4</td>
                            <td>Open to Supplier</td>
                            <td>07/08/2008</td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td>DJ-1004</td>
                            <td>JGPSSI Round 3</td>
                            <td>Open to Supplier</td>
                            <td>07/10/2008</td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td>DJ-1006</td>
                            <td>JGPSSI Round 2</td>
                            <td>Open to Supplier</td>
                            <td>08/10/2008</td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td>DJ-1007</td>
                            <td>JGPSSI Round 1</td>
                            <td>Open to Supplier</td>
                            <td>08/15/2008</td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td>DC-0988</td>
                            <td>China RoHS</td>
                            <td>Open to Supplier</td>
                            <td>09/01/2008</td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td>DCW0001</td>
                            <td>WEEE for all Assemblies</td>
                            <td>Open to Supplier</td>
                            <td>09/15/2008</td>
                        </tr>
                  	</tbody>
                </table>



		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
		</fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdOk" class="button"><span><em class="save_dialog">&nbsp;</em>Open</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
