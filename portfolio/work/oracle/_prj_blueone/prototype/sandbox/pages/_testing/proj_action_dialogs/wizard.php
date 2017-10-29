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
	<script type="text/javascript" src="wizard.php.js"></script>
	<title>Wizard...</title>
</head>
<body class="action_dialog wizard">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Wizard Title</h2>
                <p>Object Type &bull; Identifier</p>
            </div>		
        </div>
        <div class="steps_container">
            <div id="wizard_steps" class="wizard_steps">
                <h2 id="wStepTitle">Title for Step 1 of 8</h2>
            </div>
            <ul class="steps">
                <li id="1" title="Step 1 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec first"><a href="#">1</a></li>
                <li id="2" title="Step 2 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">2</a></li>
                <li id="3" title="Step 3 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">3</a></li>
                <li id="4" title="Step 4 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">4</a></li>
                <li id="5" title="Step 5 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">5</a></li>
                <li id="6" title="Step 6 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">6</a></li>
                <li id="7" title="Step 7 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">7</a></li>
                <li id="8" title="Step 8 of 8 - Lorem ipsum goese here sdljfsldk flsdkjf sdl fsdljf sdljkf sdpou sfdljsd pruwepo fl;sdf psdoif ;sdlkjf;l sdjflsdkj flsdkjf sdlfj sdlf sdljkf sdlkjf sdlfjsd flsdkj flsdkjf sdljf ejfsldkjf sdl..." class="sec"><a href="#">8</a></li>
            </ul>
        </div>
		<!--
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        </div>
        -->
        <div id="dms" class="dms message"><p>&nbsp;</p></div>
        

	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset class="dynamic">
            	<p>Content...</p>
            	<p>Content...</p>
            	<p>Content...</p>
            	<p>Content...</p>
            	<p>Content...</p>
            	<p>Content...</p>
            	<p>Content...</p>
            </fieldset>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next <em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdFinish" class="button btn_next_group"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>