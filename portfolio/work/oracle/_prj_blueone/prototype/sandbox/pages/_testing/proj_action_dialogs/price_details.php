<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Price Details</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />

	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/_ux.utils.not.for.production.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="price_details.php.js"></script>
</head>
<body>

<div id="ux_palette" class="ux_palette">
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
                <h4 id="ux_palette_title" class="ux_palette_title">Item &bull; BK-630-001</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
       	  </div>
        </div>
        <!--************************************
            PALETTE MAIN
        *************************************-->
        <div id="ux_palette_main" class="ux_palette_main">
			<div id="c1" class="toggle_content">           
              <div class="view_controls">
                <p><strong>Currency:</strong> United States Dollar</p>
              </div>
                <!--************************************
                    TABLE
                *************************************-->
                <div class="price_details">
                      <table cellpadding="0" cellspacing="0">
                        <colgroup>
                            <col />
                            <col />
                            <col class="column_end" />
                            <col />
                            <col class="column_end" />
                            <col />
                            <col class="column_end" />
                            <col />
                            <col />
                        </colgroup>    
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th colspan="2">4/2/2008 - 5/10/2008</th>
                                <th colspan="2">4/2/2008 - 5/10/2008</th>
                                <th colspan="2">4/2/2008 - 5/10/2008</th>
                                <th colspan="2">4/2/2008 - 5/10/2008</th>
                            </tr>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Qty 1</th>
                                <th>Qty 2</th>
                                <th>Qty 1</th>
                                <th>Qty 2</th>
                                <th>Qty 1</th>
                                <th>Qty 2</th>
                                <th>Qty 1</th>
                                <th>Qty 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="labels">Quantity</td>
                                <td>100</td>
                                <td>200</td>
                                <td>100</td>
                                <td>200</td>
                                <td>100</td>
                                <td>200</td>
                                <td>100</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td class="labels">Target Cost</td>
                                <td>3.00</td>
                                <td>2.00</td>
                                <td>3.00</td>
                                <td>2.00</td>
                                <td>3.00</td>
                                <td>2.00</td>
                                <td>3.00</td>
                                <td>2.00</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr class="totals">
                              <td class="labels">Total</td>
                              <td>4.00</td>
                              <td>4.00</td>
                              <td>4.00</td>
                              <td>4.00</td>
                              <td>4.00</td>
                              <td>4.00</td>
                              <td>4.00</td>
                              <td>4.00</td>
                            </tr>
                            <tr class="totals">
                              <td class="labels">Material</td>
                              <td>3.00</td>
                              <td>3.00</td>
                              <td>3.00</td>
                              <td>3.00</td>
                              <td>3.00</td>
                              <td>3.00</td>
                              <td>3.00</td>
                              <td>3.00</td>
                            </tr>
                            <tr>
                              <td class="labels">Price</td>
                              <td>2.00</td>
                              <td>2.00</td>
                              <td>2.00</td>
                              <td>2.00</td>
                              <td>2.00</td>
                              <td>2.00</td>
                              <td>2.00</td>
                              <td>2.00</td>
                            </tr>
                            <tr>
                              <td class="labels">Adder 1</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                            </tr>
                            <tr>
                              <td class="labels">Adder 2</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                              <td>0.50</td>
                            </tr>
                            <tr class="totals">
                                <td class="labels">Non-Material</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>1.00</td>
                                <td>1.00</td>
                            </tr>
                             <tr>
                                <td class="labels">Assembly</td>
                                <td>0.50</td>
                                <td>0.50</td>
                                <td>0.50</td>
                                <td>0.50</td>
                                <td>0.50</td>
                                <td>0.50</td>
                                <td>0.50</td>
                                <td>0.50</td>
                            </tr>
                             <tr>
                               <td class="labels">Test</td>
                               <td>0.50</td>
                               <td>0.50</td>
                               <td>0.50</td>
                               <td>0.50</td>
                               <td>0.50</td>
                               <td>0.50</td>
                               <td>0.50</td>
                               <td>0.50</td>
                             </tr>
                             <tr>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                             </tr>
                             <tr>
                               <td class="labels">Total Extended</td>
                               <td>600.00</td>
                               <td>400.00</td>
                               <td>600.00</td>
                               <td>400.00</td>
                               <td>600.00</td>
                               <td>400.00</td>
                               <td>600.00</td>
                               <td>400.00</td>
                             </tr>
                             <tr>
                               <td class="labels">Non-Recurring Cost</td>
                               <td>20,000.00</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                               <td>&nbsp;</td>
                             </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
<!--************************************
            PALETTE BOTTOM
        *************************************-->
        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
					<a class="button" id="cmdCancel" href="#"><span><em class="cancel">&nbsp;</em>Close</span>&nbsp;</a>
                </div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
		</div>
</div>
</body>
</html>