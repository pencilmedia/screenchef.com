<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="global/css/multi_list.css">
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="index.php.js"></script>
  
	<title>Test Find</title>
    <style>
		.action_dialog .header_wrapper { height: 25px; }
		.action_dialog div.content { padding-top: 0px;}
		div.finder
		{
			background-color: #efefef;
			padding:10px;
			border-bottom: 1px solid silver;
		}
		div.finder select,
		div.finder input		{
			margin: 0 10px;
		}
		div.finder img.close
		{
			border:1px solid silver;
			padding:5px;
			position:absolute;
			right:10px;
			cursor: pointer;
		}

    </style>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <a class="button" id="cmdOptions"><span>Go To</span></a>
                <a class="button" id="cmdDisplayLevels"><span>Display Levels</span></a>
                <span class="btn_divide">&nbsp;</span>
                <a class="button"><span>Print</span></a>
                <a class="button"><span>Export</span></a>
            </div>		
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">


    	<div class="finder">
        	<strong>Go To:</strong>
            <input type="text" />
            in
            <select>
            	<option>All Columns</option>
            </select>
            within level
            <select>
            	<option>All</option>
            </select>
			<span class="btn_divide">&nbsp;</span>
            <a class="button"><span>Previous</span></a>
            <a class="button"><span>Next</span></a>
            <img id="cmdCloseFinder" src="global/images/ux_palette/palette_close.png" class="close" title="Close"  onmouseover="this.style.backgroundColor='#f5f5f5'" onmouseout="this.style.backgroundColor=''"/>
        </div>
    
	</div>

<!--************************************
	FOOTER
*************************************-->    


<div class="prompt_mask" style="z-index:9001"></div>
<div class="prompt_shadow add_rule" style="z-index:9002; width:260px;">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Select Levels to Display</h4>

                <div class="prompt_content">
					<p>

                        Levels:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </p>
                </div>
            </fieldset>

            <div class="prompt_footer">
                <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Continue</span></a> 
                <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
            </div>
		</form>
    </div>
</div>


</body>
</html>
