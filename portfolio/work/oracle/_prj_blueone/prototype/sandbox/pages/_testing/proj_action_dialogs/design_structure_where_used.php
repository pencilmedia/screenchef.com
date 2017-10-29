<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Design Structure Where Used</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="design_structure_where_used.php.js"></script>
<style>
.actionless_table { border-top:1px solid #ddd !important }
.ux_palette_main { padding: 0 15px; }
.collapse.toggler { margin: 0 0 3px 0; }
.ux_palette.design_structure { min-width: 580px; }
.ux_palette.design_structure table { margin-bottom: 10px;}
</style>
</head>
<body class="action_dialog">
<p>&nbsp;</p>
<p>Almost done, need icons.</p>

    <div id="ux_palette" class="ux_palette design_structure">
        <!--************************************
            PALETTE TOP
        *************************************-->
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
                <h4 id="ux_palette_title" class="ux_palette_title">Number: DESIGN00006 Version: 3</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
          	</div>
        </div>
        <!--************************************
            PALETTE MAIN
        *************************************-->
        <div id="ux_palette_main" class="ux_palette_main">
            <form id="form1" name="form1" action="#">
            <fieldset class="dynamic">
                <dl class="side_by_side_text" style="margin-top:15px;">
                    <dt class="mixed_text">Version:</dt>
	                    <dd>
                        	<select>
                            	<option>1</option>
                            	<option selected="selected">2</option>
                            	<option>3</option>
                           	</select>
                        </dd>
                    <dt>Description:</dt>
	                    <dd></dd>
                    <dt>Last Modified Date:</dt>
	                    <dd>05/09/2008 10:56:32 AM PDT</dd>
                    <dt>Checkout Status:</dt>
	                    <dd>Checked Out</dd>
                    <dt>Checkout Date:</dt>
	                    <dd>05/09/2008 10:56:32 AM PDT</dd>
                    <dt>Create Date:</dt>
	                    <dd>05/09/2008 10:33:27 AM PDT</dd>
                </dl>
            </fieldset>
            </form>  
        
            <h4 id="F01" class="collapse toggler"> Files</h4>
            <div id="F01_content">
                <!--************************************
                    TABLE ACTIONS
                *************************************-->
                <div class="table_actions">
                    <div class="column_one no_width">
                        <p>
                            <a href="#" class="button"><span>View</span></a>
                            <a href="#" class="button"><span>Get</span></a>
                        </p>
                    </div>
                    <div class="column_three">	</div>
                </div>
                <!--************************************
                    TABLE HANDLE PINNED
                *************************************-->
                <!--************************************
                    TABLE HANDLE
                *************************************-->
                <table class="linear">
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>File Description</th>
                            <th>File Size</th>
                            <th>File Type</th>
                            <th>File Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background-color: #e4eeff">
                            <td><a href="#">Bernd.doc</a></td>
                            <td></td>
                            <td>27,323</td>
                            <td>doc</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a href="#">pspbrwse.jbf</a></td>
                            <td></td>
                            <td>31,110</td>
                            <td>jbf</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 id="F02" class="collapse toggler"> Where Used as an Attachment</h4>
            <div id="F02_content">
                    <table class="linear">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Number/Name</th>
                                <th>Rev</th>
                                <th>Description</th>
                                <th>Lifecyle/Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="5">There is no data to display</td>
                            </tr>
                        </tbody>
                    </table>

            </div>

            <h4 id="F03" class="collapse toggler"> Where Used on Designs</h4>
            <div id="F03_content">
                <table class="linear">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Description</th>
                            <th>Version</th>
                            <th class="icon_cell icn_obj_status_attachment">&nbsp;</th>
                            <th class="icon_cell">x</th>
                            <th class="icon_cell icn_action_approve">x</th>
                            <th>Label</th>
                           	<th>Component Type</th>
                            <th>Checkin User</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#">M00024</a></td>
                            <td>test</td>
                            <td>[2]</td>
                            <td>x</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a href="#">M00024</a></td>
                            <td>test</td>
                            <td>[5]</td>
                            <td>x</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                      	</tr>
                    </tbody>
                </table>
            </div>
                
        </div>
        <!--************************************
            PALETTE BOTTOM
        *************************************-->
        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <!--
            <div class="table_status_bar">
                <table class="table_footer">
                    <tbody>
                        <tr>
                            <td class="status"><strong>1</strong> of <strong>7</strong> rows selected.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            -->
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
					<a href="#" id="cmdOpen" class="button"><span><em class="save_dialog"> </em>Open</span></a>
					<a class="button" id="cmdCancel" href="#"><span><em class="cancel"> </em>Cancel</span></a>
                </div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
		</div>
    </div>
</body>
</html>