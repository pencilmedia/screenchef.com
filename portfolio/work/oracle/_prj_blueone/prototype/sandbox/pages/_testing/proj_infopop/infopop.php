<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Quick View</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="infopop.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/yui/animation/animation.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>

	<script type="text/javascript" src="infopop.php.js"></script>
 </head>
	<style>
		div.prompt_shadow.add_rule table
		{
			margin: 20px 0 20px 30px;
			width: 300px;
		}


		div.prompt_shadow.add_rule table td
		{
			padding: 5px;
		}

		div.prompt_shadow.add_rule table select
		{
			width: 100%;
		}
		
		.message 
		{
			clear:both;
			padding:5px 10px;
		}		
		.activity_indicator1
		{
			top: 25px !important;
			right: 25px !important;
		}
	</style>
<body class="action_dialog"> 
<div class="prompt_mask" style="z-index:9001"></div>
<div class="prompt_shadow add_rule" style="z-index:9002">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Relationship Rule</h4>
                <div class="prompt_table_container">
                <table>
                	<tr>
                    	<td>When</td>
                    	<td>
                        	<select>
                            	<option>C000328</option>
                           	</select>
                        </td>
                    	<td>is</td>
                    	<td>
                        	<select>
                            	<option>Implemented</option>
                           	</select>
                        </td>
					</tr>
                	<tr>
                    	<td>set</td>
                    	<td>
                        	<select>
                            	<option>PR34499</option>
                           	</select>
                        </td>
                    	<td>to</td>
                    	<td>
                        	<select>
                            	<option>Closed</option>
                           	</select>
                        </td>
					</tr>
                </table>
                </div>
            </fieldset>
        </form>
        <div class="prompt_footer">
                <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
                <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
        </div>
    </div>
</div>
<p>&nbsp;</p>
<h4 style="margin-left: 20px;">Info Pop</h4>
	<p style="padding-left: 20px;"><a href="#" onclick="progressIndicatorHomePage()">Progress Indicator</a></p>
    <div id="ux_palette" class="ux_palette infopop">
    	<div id="activity_indicator1" class="activity_indicator1"></div>

        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
                <h4 id="ux_palette_title" class="ux_palette_title">Part &bull; 100-10-1005C</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a> 
          	</div>
        </div>
        <div id="ux_palette_main" class="ux_palette_main">


			<div id="errorbar" class="errorbar">
				<p id="error" class="bgd">&nbsp;</p>
			   	<p class="text"><em>4 errors were found.</em></p>
			</div>


            <div style="padding:0 15px;">
            
            <dl class="side_by_side_text top_space palette_rule">
                <dt>Rule:</dt>
                <dd id="cr_1">A rule has not been specified for this relationship. <a href="#" id="add_rule">Add Rule</a></dd>
                <dd id="cr_2">When C000328 is Implemented set PR34499 to Closed. <a href="#">edit</a> | <a href="#">remove</a></dd>
            </dl>
        
			<div class="thumb">
            	<div class="lt_column">
                    <form action="#">
                        <dl class="side_by_side_mixed">
                            <dt>Rev:</dt>
                            <dd><select><option>Introductory</option></select></dd>
                            <dt class="mixed_text"><label for="">Description:</label></dt>
                            <dd class="mixed_text">500GB Serial ATA Drive</dd>
                            <dt class="mixed_text">Lifecycle Phase:</dt>
                            <dd class="mixed_text">Preliminary</dd> 
                            <dt class="mixed_text">Incorporated:</dt>
                            <dd class="mixed_text">6/21/2008 09:00:28 PM GMT</dd>             
                        </dl>
                    </form>
                </div>
                <div class="rt_column">
                	<img src="../../../global/images/thumbnail_sml_sata_drive.png" alt="Thumbnail" />                </div>
        		</div>

                <h4 class="toggle bsone collapse">Attachments</h4>
                <div class="toggle_bsone toggle_content">
               
                    <!--************************************
                        TABLE ACTIONS
                    *************************************-->
                    <div class="table_actions">
                    
                        <div class="column_one no_width">
                            <p>
                                <a href="#" class="button"><span>Add</span></a>
                                <a href="#" class="button"><span>Remove</span></a>		</p>
                        </div>
                        <div class="column_three">	</div>
                    </div>
                    <!--************************************
                        TABLE HANDLE PINNED
                    *************************************-->
                    <!--************************************
                        TABLE HANDLE
                    *************************************-->
                    <div class="scrollHeaderDiv">
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <th>&nbsp;Col 2</th>
                                <th>&nbsp;</th>
                                <th>Col 3</th>
                                <th>&nbsp;</th>
                                <th>Col 4</th>
                                <th>&nbsp;</th>
                                <th>Col 5</th>
                                <th>&nbsp;</th>
                                <th>Col 6</th>
                                <th>&nbsp;</th>
                            </tr>
                        </table>
                    </div>
                    <div class="noScrollTableDiv">
                        <table cellpadding="0" cellspacing="0">
                            <tr style="background-color: #e4eeff">
                                <td>&nbsp;Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>&nbsp;Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>&nbsp;Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                                <td>Text</td>
                                <td>&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                    
            </div>
            
            <h4 class="toggle bstwo collapse">Pending Changes</h4>
			<div class="toggle_bstwo toggle_content">
                <!--************************************
                    TABLE ACTIONS
                *************************************-->
                <div class="table_actions">
                    <div class="column_one no_width">
                        <p>
                            <a href="#" class="button"><span>Add</span></a>
                            <a href="#" class="button"><span>Remove</span></a>
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
                <div class="scrollHeaderDiv">
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <th>&nbsp;Col 2</th>
                            <th>&nbsp;</th>
                            <th>Col 3</th>
                            <th>&nbsp;</th>
                            <th>Col 4</th>
                            <th>&nbsp;</th>
                            <th>Col 5</th>
                            <th>&nbsp;</th>
                            <th>Col 6</th>
                            <th>&nbsp;</th>
                        </tr>
                    </table>
                </div>
                <div class="noScrollTableDiv">
                    <table cellpadding="0" cellspacing="0">
                        <tr style="background-color: #e4eeff">
                            <td>&nbsp;Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                            <td>Text</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            </div>
        </div>



        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
                	<a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Previous</span></a> 
					<a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
              	</div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
        </div>
    </div>
</body>
</html>