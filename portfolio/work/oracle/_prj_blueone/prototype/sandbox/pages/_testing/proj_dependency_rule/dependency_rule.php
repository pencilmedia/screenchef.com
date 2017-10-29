<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Dependency Rule</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="dependency_rule.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="dependency_rule.php.js"></script>
 </head>
<body class="action_dialog"> 
<div class="prompt_mask" style="z-index:9001"></div>
<div class="prompt_shadow add_rule" style="z-index:9002; width:376px;">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Dependency Rule</h4>
                <div class="prompt_content">
					<p>
                        Create a very, very long Marketing Plan:
                        <select>
                            <option>Predecessor</option>
                        </select>
						to Create Sales Plan
                    </p>
					<p>
                        Type:
                        <select>
                            <option>Finish-to-Start (FS)</option>
                        </select>
						&nbsp; 

                        Time Buffer:
                        <input value="10" id="time_buffer" class="time_buffer" />
                    </p>
                </div>
            </fieldset>
            <div class="prompt_footer">
                <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
                <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
            </div>
		</form>
    </div>
</div>
</body>
</html>