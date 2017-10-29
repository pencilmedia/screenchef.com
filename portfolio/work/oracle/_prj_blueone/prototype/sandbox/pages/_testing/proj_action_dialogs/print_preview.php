<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="print_preview.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<link rel="stylesheet" type="text/css" href="global/css/buttons.css" />
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="print_preview.php.js"></script>
	<? if ( $_REQUEST["autoprint"] == 1 ) {?>
	<link rel="stylesheet" type="text/css" href="global/css/auto_print.css" media="print" />
	<script type="text/javascript" src="print_preview_autoprint.php.js"></script>
    <? } ?>
	<title>Print Preview</title>
</head>
<body class="print_preview">
    <p id="printCommands" class="printCommands noprint">
	    <a href="#" id="cmdCancel" class="button"><span>Cancel</span></a> 
    	<a href="#" id="cmdPrint" class="button"><span>Print</span></a> 
    </p>
    
    <div id="header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one layout">
                <h2>Identifier</h2>
                <p><strong>Revision</strong> &bull; A<br />
                <strong>Object Type</strong> &bull; The description will go here.  It will wrap depending on the length.  Somewhere around here it will wrap.</p>
            </div>
            <div class="column_two">
                <h2>Status / Lifecycle</h2>
                <p>[varies by object]</p>
            </div>
        </div>
	</div>


	<div id="content" class="content" >

        <div class="dual_columns">
            <h3>Header Name (or Tab Name)</h3>
            <div class="column_01">
                <table class="plain">
                    <tr><td class="label">Number:</td><td>A123456</td></tr>
                    <tr><td class="label">List:</td><td>List Value</td></tr>
                    <tr><td class="label">Text:</td><td>Some Text</td></tr>
                    <tr><td class="label">More Text:</td><td>Some Other Text</td></tr>
                    <td class="label">Text:</td><td>This will be some more text</td></tr>
                    <td class="label">Multi-Text Multi-Text Multi-Text:</td><td>This is a multi-text field and may contain lots of additional information. How far will we stretch it across the page?  Some customers might want it to go all the way, but it is less readable that way.  More text will go here.</td></tr>
                </table>
            </div>
            <div class="column_02">
                <table class="plain">
                    <tr><td class="label">More:</td><td>Some Other Text</td></tr>
                    <tr><td class="label">Text:</td><td>This will be some more text</td></tr>
                    <tr><td class="label">Multi-Text:</td><td>This is a multi-text field and may contain lots of additional information. How far will we stretch it across the page?  Some customers might want it to go all the way, but it is less readable that way.  More text will go here.</td></tr>
                    <tr><td class="label">Date:</td><td>10/02/2006 11:50:02am PST</td></tr>
                    <td class="label">Multi-List:</td><td>Value 1; Value 2; Value 3; Add a longer Value; Value 5; Value 6</td></tr>
                    <td class="label">List:</td><td>Selected Value</td></tr>
                </table>
            </div>
        </div>

		<div class="dual_columns">
			<h3>Header Name (or Tab Name)</h3>
			<div class="column_01">
                <table class="plain">
                    <tr><td class="label">Project Phase:</td><td>First Production</td></tr>
                    <tr><td class="label">Brand:</td><td>Essensia; ACME</td></tr>
                    <tr><td class="label">Project Type:</td><td>New items</td></tr>
                    <tr><td class="label">Overall Status</td><td>On track</td></tr>
                    <td class="label">Status:</td><td>In Process</td></tr>
                </table>
			</div>
			<div class="column_02">
                <table class="plain">
                    <tr><td class="label">Project Phase:</td><td>First Production</td></tr>
                    <tr><td class="label">Brand:</td><td>Essensia; ACME</td></tr>
                    <tr><td class="label">Project Type:</td><td>New items</td></tr>
                    <tr><td class="label">Overall Status</td><td>On track</td></tr>
                    <td class="label">Status:</td><td>In Process</td></tr>
                    <td class="label">A Very Long Status Label:</td><td>In Process</td></tr>
                </table>
			</div>
		</div>


<h3 class="print_table_header">Table 1 Name (or Tab Name)</h3>
<!--************************************
	TABLE SIMPLE
*************************************-->
	<table cellspacing="0" class="print">
    	<thead>
            <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
                <th>Col 4</th>
                <th>Col 5</th>
                <th>Col 6</th>
                <th>Col 7</th>
                <th>Col 8</th>
            </tr>
		</thead>
        <tbody>
            <tr>
                <td>Here is some text for the first row.</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
                <td>Here is some text for the first row.</td>
                <td>Here is some text for the first row.</td>
                <td>text</td>
                <td>text</td>
            </tr>
            <tr>
                <td>Here is some text for the second row.</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
                <td>Here is some text for the second row.</td>
                <td>Here is some text for the second row.</td>
                <td>text</td>
                <td>text</td>
            </tr>
            <tr>
                <td>Here is some text for the third row</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
                <td>Here is some text for the third row</td>
                <td>Here is some text for the third row</td>
                <td>text</td>
                <td>text</td>
            </tr>
		</tbody>
	</table>



<h3 class="print_table_header">Table 2 Name (or Tab Name)</h3>
<!--************************************
	TABLE SIMPLE
*************************************-->
	<table cellspacing="0"  class="print">
    	<thead>
            <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
                <th>Col 4</th>
            </tr>
		</thead>
		<tbody>
            <tr>
                <td>Here is some text for the first row.</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
            </tr>
            <tr>
                <td>Here is some text for the second row.</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
            </tr>
            <tr>
                <td>Here is some text for the third row</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
            </tr>
        </tbody>
	</table>

<h3 class="print_table_header">Table 3 Name (or Tab Name)</h3>
<!--************************************
	TABLE SIMPLE
*************************************-->
	<table cellspacing="0"  class="print">
    	<thead>
            <tr class="master_header">
                <th colspan="2">&nbsp;</th>
                <th colspan="2">Sample Parent Header</th>
            </tr>
		</thead>
		<tbody>
            <tr class="faux_header">
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
                <td>Col 4</td>
            </tr>
            <tr>
                <td>Here is some text for the first row.</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
            </tr>
            <tr>
                <td>Here is some text for the second row.</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
            </tr>
            <tr>
                <td>Here is some text for the third row</td>
                <td>Identifier</td>
                <td>text</td>
                <td>text</td>
            </tr>
        </tbody>
	</table>
</div>


        		<p class="footer"><strong>Printed by:</strong>  Anthony Moquette on 01/01/2008</p>


	</div>
</body>
</html>