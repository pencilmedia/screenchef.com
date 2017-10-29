<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="shortcuts_cheat_sheet.php.js"></script>
    <title>Shortcuts Cheat Sheet</title>
	<style>
		html { overflow-y: scroll !important; }
		body { padding: 20px;}
		.printCommands { text-align: right; }
		h2 
		{	position: relative;
			display: inline;
			top: -20px;
			margin-bottom: 20px;
		}
		dl.side_by_side
		{
			min-width: auto;
		}
		dl.side_by_side dt
		{
			padding-top: 0;
			margin-right: 10px;
			font-weight: bold;
			width: 35%;
			white-space:nowrap;
			text-align: right;
		}
		dl.side_by_side dd
		{
			width: 60%;
			margin-bottom: 10px;
		}
		
		.dl_container
		{
			float: left;
			width: 50%;
		}
		.action_dialog fieldset.dynamic { margin-bottom: 20px; }

		@media print 
		{
			.noprint { display: none; }
			body *
			{
				background-color: #fff;
				color: #000; 
			}
			.dl_container
			{
				float:none !important;
			}
		}
	</style>
</head>
<body>
    <div class="printCommands noprint">
	    <a href="#" id="cmdCancel" class="button"><span>Cancel</span></a> 
    	<a href="#" id="cmdPrint" class="button" onclick="window.print();"><span>Print</span></a> 
    </div>		

		<h2>Shortcut Cheat Sheet</h2>
        <fieldset class="dynamic">
			<h3>General Navigation</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus forward.</dd>
					<dt>SHIFT+TAB:</dt><dd>Move focus back.</dd>
					<dt>CTRL+SHIFT + H:</dt><dd>Home.</dd>
					<dt>CTRL+SHIFT + C:</dt><dd>Create New.</dd>
					<dt>CTRL+SHIFT + S:</dt><dd>Search.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>ENTER:</dt><dd>Executes function with focus.</dd>
					<dt>ESC:</dt><dd>Cancels edits and closes ui control, returning focus to previous ui element.</dd>
					<dt>CTRL+SHIFT + Q:</dt><dd>Custom Search.</p></dd>
				</dl>
			</div>
		</fieldset>






        <fieldset class="dynamic">
			<h3>Tables</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>move focus to next EDITABLE cell.</dd>
					<dt>ARROW UP:</dt><dd>Move focus to cell above current cell.</dd>
					<dt>ARROW RIGHT:</dt><dd>Move focus to next cell on right.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection.</dd>
					<dt>SHIFT+ARROW UP:</dt><dd>Range select up.</dd>
					<dt>CTRL+A:</dt><dd>Select all.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>CTRL+SHIFT+U:</dt><dd>Fill Up.</dd>
					<dt>CTRL+C:</dt><dd>Copy row.</dd>
					<dt>CTRL+I:</dt><dd>Add new table row.</dd>

					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>ENTER:</dt><dd>Invoke cell edit mode.</dd>
					<dt>CTRL+S:</dt><dd>Save table edits and maintains focus on current cell.</dd>

					
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>SHIFT+TAB:</dt><dd>Move focus to previous EDITABLE cell.</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to cell below current cell.</dd>
					<dt>ARROW LEFT:</dt><dd>Move focus to previous cell left.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>CTRL+CLICK:</dt><dd>Non-contiguous selection toggle.</dd>  
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select down.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>CTRL+SHIFT+D:</dt><dd>Fill Down.</dd>
					<dt>CTRL+V:</dt><dd>Paste row.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>ENTER:</dt><dd>Commit cell edit and maintains focus on current cell once envoked.</dd>
					<dt>ESC:</dt><dd>Cancel cell edit and maintains focus on current cell.</dd>

					<dt>&nbsp;</dt><dd>&nbsp;</dd>
				</dl>
			</div>
		</fieldset>	


        <fieldset class="dynamic">
			<h3>Tree</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus onto tree from previous outside UI element.</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to visible tree value below current value.</dd>
					<dt>ARROW UP:</dt><dd>Move focus to visible tree value above current value.</dd>
					<dt>ARROW RIGHT:</dt><dd>Expand parent value that has focus.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>CTRL+CLICK:</dt><dd>Non-contiguous selection toggle.</dd> 
					<dt>ENTER:</dt><dd>Display link content in main window (view trees).</dd>
					<dt>CTRL+A:</dt><dd>Select all.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>SHIFT+TAB:</dt><dd>Move focus to next UI element outside tree.</dd>
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select down.</dd>
					<dt>SHIFT+ARROW UP:</dt><dd>Range select up.</dd>
					<dt>ARROW LEFT:</dt><dd>Collapse parent value that has focus.</dd>
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection.</dd>
					<dt>ENTER:</dt><dd>Add selected values to target (selectable trees).</dd>
				</dl>
			</div>
		</fieldset>	

        <fieldset class="dynamic">
			<h3>Menu</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>ARROW UP:</dt><dd>Move focus to previous menu value.</dd>
					<dt>ARROW RIGHT:</dt><dd>Displays sub-menu.</dd>
					<dt>ENTER:</dt><dd>Executes menu function with focus.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>ARROW DOWN:</dt><dd>Move focus to next menu value.</dd>
					<dt>ARROW LEFT:</dt><dd>Returns focus to parent menu.</dd>
					<dt>ESC:</dt><dd>Closes menu without executing a function.</dd>
				</dl>
			</div>
		</fieldset>	
		
        <fieldset class="dynamic">
			<h3>Date Control Calendar Pop-Up</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus ahead within control.</dd>
					<dt>SHIFT+TAB:</dt><dd>Move focus back within control.</dd>
					<dt>ENTER:</dt><dd>Executes function and commits changes; May close control.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>ESC:</dt><dd>Cancels edits and closes ui control, returning focus to previous ui element.</dd>
					<dt>T:</dt><dd>Sets focus to today's date.</dd>
					<dt>CTRL+L:</dt><dd>Launch calendar pop-up.</dd>
				</dl>
			</div>
		</fieldset>	
		
        <fieldset class="dynamic">
			<h3>Multi-Select Type-In Area</h3>
			<div class="dl_container">
				<dl class="side_by_side">

					<dt>&nbsp;</dt><dd>Auto-complete menu <strong>NOT</strong> displayed.</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to pill area.</dd>
					<dt>ENTER:</dt><dd>Validates typed-in or pasted values and maintains focus on field.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>&nbsp;</dt><dd>Auto-complete menu <strong>displayed</strong>.</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to next menu value.</dd>
					<dt>ARROW UP:</dt><dd>Move focus to previous menu value.</dd>
					<dt>ENTER:</dt><dd>Adds selected menu value as a pill.</dd>
					<dt>ESC:</dt><dd>Closes menu without selection and maintains focus on type-in area.</dd>
					<dt>CTRL+L:</dt><dd>Launch palette or calendar control.</dd>
				</dl>
			</div>
		</fieldset>
		
        <fieldset class="dynamic">
			<h3>Multi-Select Pill Area</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>ARROW RIGHT:</dt><dd>Move focus to next pill.</dd>
					<dt>ARROW LEFT:</dt><dd>Move focus to previous pill.</dd>
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection.</dd>
					<dt>CTRL+CLICK :</dt><dd>Non-contiguous selection toggle.</dd>  
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>SHIFT+ARROW UP:</dt><dd>Range select all pills left and up.</dd>  
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select all pills right and down.</dd>
					<dt>CTRL+A:</dt><dd>Select all.</dd>
					<dt>DELETE:</dt><dd>Delete selected pills.</dd>
				</dl>
			</div>
		</fieldset>			

        <fieldset class="dynamic">
			<h3>Palette Table</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus to next ui element.</dd>
					<dt>SHIFT+TAB:</dt><dd>Move focus to previous ui element.</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to row below current row.</dd>
					<dt>ARROW UP:</dt><dd>Move focus to row above current row.</dd>
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>CTRL+CLICK:</dt><dd>Non-contiguous selection toggle.</dd>  
					<dt>SHIFT+ARROW UP:</dt><dd>Range select up.</dd>
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select down.</dd>
					<dt>ENTER:</dt><dd>Add rows with focus to target.</dd>
					<dt>ESC:</dt><dd>Closes palette.</dd>
				</dl>
			</div>
		</fieldset>	
		
        <fieldset class="dynamic">
			<h3>Palette Tree</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus to next palette ui element.</dd>
					<dt>SHIFT+TAB:</dt><dd>Move focus to previous palette ui element.</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to visible tree value below current value.</dd>
					<dt>ARROW UP:</dt><dd>Move focus to visible tree value above current value.</dd>
					<dt>ARROW RIGHT:</dt><dd>Expand parent value that has focus.</dd>
					<dt>ARROW LEFT:</dt><dd>Collapse parent value that has focus.</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection.</dd>
					<dt>CTRL+CLICK:</dt><dd>Non-contiguous selection toggle.</dd>  
					<dt>SHIFT+ARROW UP:</dt><dd>Range select up.</dd>
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select down.</dd>
					<dt>CTRL+A:</dt><dd>Select all.</dd>
					<dt>ENTER:</dt><dd>Add tree values with focus to target.</dd>
				</dl>
			</div>
		</fieldset>	
		
        <fieldset class="dynamic">
			<h3>Search</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>ENTER</dt><dd>Executes search.</dd>
				</dl>
			</div>
		</fieldset>				

</body>
</html>
