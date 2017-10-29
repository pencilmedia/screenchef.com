<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <title>Shortcuts Cheat Sheet</title>
	<style>
		html { overflow-y: scroll !important; min-width: 0; }
		body { padding: 20px; min-width: 20px !important;}
		
		.printCommands { text-align: right; }
		h2 
		{	position: relative;
			display: inline;
			top: -20px;
			margin-bottom: 20px;
		}
		dl.side_by_side
		{
			min-width: 20px;
		}
		dl.side_by_side dt
		{
			padding-top: 0;
			margin-right: 10px;
			font-weight: bold;
			width: 35%;
			white-space:nowrap;
			text-align: right;
			clear: left;
		}
		dl.side_by_side dd
		{
			width: 60%;
			margin-bottom: 5px;
		}
		
		.dl_container
		{
			float: left;
			width: 50%;
		}
		.action_dialog fieldset.dynamic { margin-bottom: 20px; }
		fieldset { margin-top: 20px; }

		@media print 
		{
			.noprint { display: none; }
			body *
			{
				font-size: 12px !important;
				background-color: #fff;
				color: #000; 
			}
			.dynamic
			{
				margin-top: 0px !important;
			}
			h2 { margin: 0; }
			h3 { margin:0 !important; }
		}
	</style>
</head>
<body clas="shortcuts">
    <div class="printCommands noprint">
	    <a href="#" id="cmdCancel" class="button"><span>Cancel</span></a> 
    	<a href="#" id="cmdPrint" class="button" onclick="window.print();"><span>Print</span></a> 
    </div>		

		<h2 class="noprint">Shortcut Cheat Sheet</h2>
        <fieldset class="dynamic">
			<h3>General</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus forward</dd>
					<dt>SHIFT+TAB:</dt><dd>Move focus back</dd>
					<dt>ARROW UP:</dt>
					<dd>Moves focus up</dd>
					<dt>ARROW DOWN:</dt>
					<dd>Moves focus down</dd>
					<dt>ARROW LEFT:</dt>
					<dd>Moves focus left</dd>
					<dt>ARROW RIGHT:</dt>
					<dd>Moves focus right</dd>
					<dt>SHIFT+ARROW UP:</dt><dd>Range select up</dd>
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select down</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>CTRL+A:</dt><dd>Select all</dd>
					<dt>ENTER:</dt><dd>Executes function with focus</dd>
					<dt>DEL:</dt><dd>Remove selected item(s)</dd>
					<dt>ESC:</dt><dd>Cancels, terminates or closes current action</dd>
					<dt>CTRL+SHIFT+C:</dt><dd>Create New</dd>
					<dt>CTRL+SHIFT+H:</dt><dd>Home</dd>
					<dt>CTRL+SHIFT+S:</dt><dd>Search</dd>
				  	<dt>CTRL+SHIFT+Q:</dt><dd>Custom Search</dd>
				</dl>
			</div>
		</fieldset>



        <fieldset class="dynamic">
			<h3>Tables</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move to next editable cell</dd>
					<dt>SHIFT+TAB:</dt><dd>Move to previous editable cell</dd>
					<dt>CTRL+CLICK:</dt><dd>Non-contiguous selection toggle</dd>  
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection</dd>
					<dt>ENTER:</dt><dd>Invoke cell edit mode</dd>
					<dt>ENTER:</dt><dd>Commit cell edit and maintains focus on current cell once envoked</dd>

				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>CTRL+SHIFT+U:</dt><dd>Fill Up</dd>
					<dt>CTRL+SHIFT+D:</dt><dd>Fill Down</dd>
					<dt>CTRL+C:</dt><dd>Copy row</dd>
					<dt>CTRL+I:</dt><dd>Add new table row</dd>
					<dt>CTRL+V:</dt><dd>Paste row</dd>
					<dt>CTRL+S:</dt><dd>Save table edits and maintains focus on current cell</dd>
				</dl>
			</div>
		</fieldset>	


        <fieldset class="dynamic">
			<h3>Tree</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>TAB:</dt><dd>Move focus onto tree from previous outside UI element</dd>
					<dt>SHIFT+TAB:</dt><dd>Move focus to next UI element outside tree</dd>
					<dt>ARROW LEFT:</dt><dd>Collapse parent value that has focus</dd>
					<dt>ARROW RIGHT:</dt><dd>Expand parent value that has focus</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>CTRL+CLICK:</dt><dd>Non-contiguous selection toggle</dd> 
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection</dd>
					<dt>ENTER:</dt><dd>Display link content in main window (view trees)</dd>
					<dt>ENTER:</dt><dd>Add selected values to target (selectable trees)</dd>
				</dl>
			</div>
		</fieldset>	

        <fieldset class="dynamic">
			<h3>Calendar Control</h3>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>CTRL+L:</dt><dd>Launch calendar pop-up</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>T:</dt><dd>Sets focus to today's date</dd>
				</dl>
			</div>
		</fieldset>	
		
        <fieldset class="dynamic">
			<h3>Select Controls</h3>
			<div class="dl_container">
				<dl class="side_by_side">

					<dt><strong>Type-In Area</strong></dt><dd>(Auto-complete menu NOT displayed)</dd>
					<dt>ENTER:</dt><dd>Validates typed-in or pasted values and maintains focus on field</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>ARROW DOWN:</dt><dd>Move focus to pill area</dd>
				</dl>
			</div>
		</fieldset>
        <fieldset class="dynamic">
			<div class="dl_container">
				<dl class="side_by_side">

					<dt><strong>Type-In Area</strong></dt><dd>(Auto-complete menu displayed)</dd>
					<dt>ENTER:</dt><dd>Adds selected menu value as a pill</dd>
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>CTRL+L:</dt><dd>Launch palette</dd>
				</dl>
			</div>
		</fieldset>



        <fieldset class="dynamic">
			<div class="dl_container">
				<dl class="side_by_side">

					<dt>Pill Area</dt><dd>&nbsp;</dd>
					<dt>SHIFT+CLICK:</dt><dd>Contiguous range selection</dd>
					<dt>SHIFT+ARROW UP:</dt><dd>Range select all pills left and up</dd>  
					<dt>SHIFT+ARROW DOWN:</dt><dd>Range select all pills right and down</dd>
					<dt>CTRL+CLICK :</dt><dd>Non-contiguous selection toggle</dd>  
				</dl>
			</div>
			<div class="dl_container">
				<dl class="side_by_side">
					<dt>&nbsp;</dt><dd>&nbsp;</dd>
					<dt>DELETE:</dt><dd>Delete selected pills</dd>
				</dl>
			</div>
		</fieldset>
		

        <fieldset class="dynamic">
		</fieldset>	
		
</body>
</html>
