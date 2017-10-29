<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="global/css/default.css" />
<script type="text/javascript" src="global/js/jquery/jquery.js"></script>
<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
<title>9.3 Introduction Tours</title>
<style>
	dl.side_by_side_text.video_menu dt { background: url(../../../global/images/bgd_videomenu_circle.png) right top no-repeat; margin-bottom: 20px; width: 60px !important; height:30px; }
	dl.side_by_side_text.video_menu dt span { display: block; margin: 9px 15px; color: #fff; }
	dl.side_by_side_text.video_menu dd { margin-bottom: 20px; text-align: left; }
	dl.side_by_side_text.video_menu dd a { font-size: 14px; }
	dl.side_by_side_text.video_menu dd span { margin-left: 5px; }
	
	.video_player { overflow: auto; height: 380px; width: auto; margin: 10px; }
	.video_message { margin-bottom: 20px; padding: 5px; width: 98%; background-color: #dae6f6; border:1px solid #b7c8e9; }
</style>
<script language="javascript">

	function loadVideo() {
		// Load up form scripts i.e. focus field, hide errors, etc..
		loadCompleteForm();
		// Load up Thumbnail Scripts and Palette
		thumbnail.init(); /* located in pages/_testing/proj_thumnail/thumbnail.js */
		thumbTable.init();
		
		//Load up the TABS pages palettes
		agile.ux.thumb_palette.init()
	}

</script>
<script type="text/javascript" src="video.js"></script>
<script type="text/javascript" src="video_palette.js"></script>
</head>
<body class="action_dialog">
<div id="wrapper_action_dialog_header" class="header">
  <!--************************************
            HEADER
        *************************************-->
  <div class="header_wrapper">
    <div class="column_one">
      <h2>Introduction Video</h2>
      <p>&nbsp;</p>
    </div>
  </div>
</div>
<div id="wrapper_action_dialog_content" class="content">


    
</div>
<!--************************************
	FOOTER
*************************************-->
<div id="wrapper_action_dialog_footer" class="footer">
  <div class="column_one"> </div>
  <div class="column_three"><a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a> </div>
</div>


<!--************************************
   VIDEO PALETTE
*************************************-->
<div id="thumbPalette" class="ux_palette thumbnail_viewer nodrag">
<div id="ux_palette_top" class="ux_palette_top">
    <div id="ux_palette_header" class="ux_palette_header">
        <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
      <h4 id="ux_palette_title" class="ux_palette_title">9.3 introduction Tours</h4>
        <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
    </div>
  <!-- Optional Top Action Bar
    <div id="ux_palette_top_action_bar" class="ux_palette_top_action_bar">
        <div class="right_column">
            <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
            <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
        </div>
        <div class="left_column">&nbsp;</div>
    </div>
    -->
</div>
<div id="ux_palette_main" class="ux_palette_main thumb_content nodrag">
    <div class="video_player">
        <div class="video_message">
            <p>The following videos are intended to introduce you to some of the new features and changes of 9.3. They do not review all new features. Please review Help documentation for further information about Agile PLM 9.3.</p>
        </div>
        <dl class="side_by_side_text video_menu">
          <dt><span>1</span></dt>
              <dd><a href="#">Getting Around</a><span>(1:56)</span>
              	  <p>Take a quick tour of the new 9.3 layout and learn about some powerful new navigation tools.</p>
              </dd>
          <dt><span>2</span></dt>
              <dd><a href="#">Entering Data</a><span>(1:43)</span>
              	  <p>We have added some new features to make data entry more efficient. Take a quick look at these new features.</p>
              </dd>
          <dt><span>3</span></dt>
              <dd><a href="#">Working with Tables</a><span>(2:13)</span>
              	  <p>Learn about the new 9.3 table and the various ways that youcan add to the table using features like drag - drop and copy - paste. Also learn how to quickly edit table values.</p>
              </dd>
          <dt><span>4</span></dt>
              <dd><a href="#">Personalizing Tables</a><span>(1:55)</span>
              	  <p>Our new table personalization features will help you create a personal experience and allow you to more effectively work with table data.</p>
              </dd>
          <dt><span>5</span></dt>
              <dd><a href="#">Bringing it all together</a><span>(1:32)</span>
              	  <p>Our new table personalization features will help you create a personal experience and allow you to more effectively work with table data.</p>
              </dd>
        </dl>
     </div>
</div>
<div id="ux_palette_bottom" class="ux_palette_bottom nodrag">
    <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar nodrag">
        <div class="right_column nodrag">
        	<a href="#" class="button"><span>See All Tours</span></a>
        </div>
        <div class="left_column nodrag" style="display: block">
        	<p style="margin-left: 5px;">
            <label for="video_menu">View:</label>
        	<select id="video_menu" class="medium_width">
            	<option>1 - Getting Around</option>
            	<option>2 - Entering Data</option>
            	<option>3 - Working with Tables</option>
            	<option>4 - Personalizing Tables</option>
            	<option>5 - Bringing it all together</option>
            </select>
            </p>
        </div>
    </div>
    <div id="ux_palette_handle" class="ux_palette_handle nodrag">&nbsp;</div>
</div>
</div>



</body>
</html>
