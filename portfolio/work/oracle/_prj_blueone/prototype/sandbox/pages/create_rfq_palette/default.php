<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Empty Base Palette</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="default.php.js"></script>
 </head>
<body> 
<p>New Palette: Styles for this palette are located in ux_palette_base.css.</p>
<p>&nbsp;</p>
    <div id="ux_palette" class="ux_palette">
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
              <h4 id="ux_palette_title" class="ux_palette_title">Data to Share</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
          	</div>
        </div>

        <div id="ux_palette_main" class="ux_palette_main">

			

            <fieldset id="step_2" class="step dynamic action_dialog" style="margin-top: 10px;">
            	<fieldset id="step_2" class="input_lists three_columns cpf">
                    <legend>Cover Page Fields</legend>
                    <ul class="column_zero">	
                        <li><input id="chk_cpf" type="checkbox" name="" value="" class="form_selectors" /> <label for="chk_cpf">All</label></li>
                    </ul>
                    <ul class="column_one">	
                        <li><input id="chk_01" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_01">Supplier Instructions</label></li>
                        <li><input id="chk_02" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_02">Project Number</label></li>
                        <li><input id="chk_03" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_03">Program</label></li>
                        <li><input id="chk_04" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_04">Customer</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_05" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_05">MFG Site</label></li>
                        <li><input id="chk_06" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_06">Ship-To Location</label></li>
                        <li><input id="chk_07" type="checkbox" name="cpf" value="" class="form_selectors" /> <label for="chk_07">Product Lines</label></li>
                    </ul>
                </fieldset>

            	<fieldset class="input_lists three_columns aml">
                    <legend>Item and AML Fields</legend>
                    <ul class="column_zero">	
                        <li><input id="chk_aml" type="checkbox" name="" value="" class="form_selectors" /> <label for="chk_aml">All</label></li>
                    </ul>

                    <ul class="column_one">	
                        <li><input id="chk_08" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_08">Number</label></li>
                        <li><input id="chk_09" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_09">Description</label></li>
                        <li><input id="chk_10" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_10">Rev</label></li>
                        <li><input id="chk_11" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_11">Manufacturer</label></li>
                        <li><input id="chk_12" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_12">Commodity</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_13" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_13">UOM</label></li>
                        <li><input id="chk_14" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_14">AML Split %</label></li>
                        <li><input id="chk_15" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_15">Quantity</label></li>
                        <li><input id="chk_16" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_16">Target Cost</label></li>
                        <li><input id="chk_17" type="checkbox" name="aml" value="" class="form_selectors" /> <label for="chk_17">IPN Info</label></li>
                    </ul>
                </fieldset>


            	<fieldset class="input_lists three_columns oi">
                    <legend>Other Information</legend>
                    <ul class="column_zero">	
                        <li><input id="chk_oi" type="checkbox" name="" value="" class="form_selectors" /> <label for="chk_oi">All</label></li>
                    </ul>

                    <ul class="column_one">
                        <li><input id="chk_18" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_18">Content BOM View</label></li>
                        <li><input id="chk_19" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_19">Costed BOM View</label></li>
                    </ul>
                    <ul class="column_two">
                        <li><input id="chk_20" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_20">RFQ Attachments</label></li>
                        <li><input id="chk_21" type="checkbox" name="oi" value="" class="form_selectors" /> <label for="chk_21">Item and Manufacturer Part Attachments</label></li>
                    </ul>
                </fieldset>

        </div>

        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
                	<a href="#" id="cmdBack" class="button"><span>Apply</span></a> 
					<a href="#" id="cmdNext" class="button"><span>Cancel</span></a>
				</div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
      </div>
    </div>
</body>
</html>