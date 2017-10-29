<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Select File Dialog</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="submit_in_progress.php.js"></script>
</head>
<body> 
<div class="prompt_mask"></div>
<div class="pop_up">
    <div class="content">
    	<div id="msg1">
	        <h4>Please wait...</h4>
            <p class="indicator" style="text-align: center">
            	<img src="global/images/pi/loading4.gif" /><br />
    	    	While your response is processed.
            </p>
       	</div>
       	<div id="msg2">
	        <h4>Done</h4>
        	<p>The declaration has been submitted for processing.<br />
            Updates may not be immediately visible in the Agile system.</p>
			<p class="actions"><a href="#" id="cmdOk" class="button"><span>OK</span></a></p>
        </div>
    </div>
</div>
</body>
</html>