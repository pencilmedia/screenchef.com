<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Table Edit Frame</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="table_edit_frame.php.js"></script>
	<style>
	.ux_pallet.ppm_attachments
	{
		position:relative;
	}
	div.table_actions.none
	{
		border-bottom: 0;
		height: 0;
		padding: 0;
	}
	
	.file_input_table_container
	{
		position:absolute;
		top: 103px;
		left: 5px;
		z-index: 9001;
		padding: 5px;
		background-color:#eee;
		border: 1px solid #898989;
		display: none;
	}
	.input_file
	{
		border:hidden;
		height: 22px;
	}
	.prompt_shadow
	{
		left: -50px;
		top: 80px;
	}
	</style>
</head>
<body class="action_dialog">
<p>&nbsp;</p>
    <div id="ux_palette" class="ux_palette ppm_attachments">
    <div id="upload_mask" class="mask" style="display:none;"></div>
    <div id="upload_file" class="prompt_shadow add_rule" style="z-index:10000; display:none;">
        <div class="prompt">
            <form action="">
                <fieldset>
                    <h4>Replace File</h4>
                    <div class="prompt_content">
                        <p>
                        	<input type="file" id="file_name" class="input_file" size="50" />
                        </p>
                    </div>
                </fieldset>
                <div class="prompt_footer">
                    <a href="#" id="cmdReplace" class="button"><span><em class="save_dialog">&nbsp;</em>Replace</span></a> 
                    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>            </div>
            </form>
        </div>
    </div>
        <!--************************************
            PALETTE TOP
        *************************************-->
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
                <h4 id="ux_palette_title" class="ux_palette_title">File Folder &bull; FF000123</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
          	</div>
			<div class="ppm_attachments_header">
				<h2> Replace Old Files for Check-in</h2>
                <div class="table_actions none">
                    <div class="column_one no_width">
                        <p>&nbsp;</p>
                  	</div>
        		</div>
			</div>
        </div>
        <!--************************************
            PALETTE MAIN
        *************************************-->
        <div id="ux_palette_main" class="ux_palette_main">
			<div id="c1" class="toggle_bstwo toggle_content">
                <!--************************************
                    TABLE
                *************************************-->
                <table class="rbr" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="handle"></th>
                            <th>&nbsp;</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Size</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="handle"></td>
                            <td class="ico_cell ico_replace_file"><a href="#" id="cmd1">Replace</a></td>
                            <td class="ico_cell ico_obj_file"><a href="#" id="cmd1_file">File Example 1</a></td>
                            <td>Folder containing 1300 certifications</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td class="ico_cell ico_replace_file"><a href="#" id="cmd2">Replace</a></td>
                            <td class="ico_cell ico_obj_file"><a href="#" id="cmd2_file">File Example 2</a></td>
                            <td>File Folder containing 1300 facility certifications</td>
                            <td>27,648</td>
                            <td>doc</td>
                        </tr>
                        <tr>
                            <td class="handle"></td>
                            <td class="ico_cell ico_replace_file"><a href="#" id="cmd3">Replace</a></td>
                            <td class="ico_cell ico_obj_file"><a href="#" id="cmd3_file">File Example 3</a></td>
                            <td>English</td>
                            <td>27,648</td>
                            <td>doc</td>
                        </tr>
                         <tr>
                            <td class="handle"></td>
                            <td class="ico_cell ico_replace_file"><a href="#" id="cmd4">Replace</a></td>
                            <td class="ico_cell ico_obj_file"><a href="#" id="cmd4_file">File Example 4</a></td>
                            <td>Spanish</td>
                            <td>27,648</td>
                            <td>doc</td>
                        </tr>
                         <tr>
                            <td class="handle"></td>
                            <td class="ico_cell ico_replace_file"><a href="#" id="cmd5">Replace</a></td>
                            <td class="ico_cell ico_obj_file"><a href="#" id="cmd5_file">File Example 5</a></td>
                            <td>French</td>
                            <td>27,648</td>
                            <td>doc</td>
                        </tr>
                  	</tbody>
                </table>

            </div>
        </div>
        <!--************************************
            PALETTE BOTTOM
        *************************************-->
        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
					<a href="#" id="cmdOpen" class="button"><span><em class="save_dialog"> </em>Check-in</span></a>
					<a class="button" id="cmdCancel" href="#"><span><em class="cancel"> </em>Cancel</span></a>
                </div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
		</div>
    </div>
</body>
</html>