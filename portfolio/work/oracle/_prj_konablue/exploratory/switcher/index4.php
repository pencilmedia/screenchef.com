<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Switcher Preliminary Ideas</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>



<div id="content" class="switcher">
	<div id="konablue">	
		<h1>Switcher Explorations :: Week 4</h1>
		<p class="posted">Posted: April 26, 2006 &nbsp;&bull;&nbsp; Owners: <a href="mailto:Donna.Driscoll@agile.com">Donna Driscoll</a>  &amp; <a href="mailto:Joel.Nave@agile.com">Joel Nave</a>  &nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
	
		<h6>Switcher Sliders</h6>
		<p>
			We begin to get a feel for the behavior of the slider in the <a href="sw_proto/sw_sliders.php">prototype</a> for this variation.<br />The following are the possible behaviors for the 
			slider. A static image of the slider is presented below for reference.
		</p>
		<p><img src="images/swt_slider.png"></p>
		<p>
			
		</p>
		<h2>Favorites area</h2>
		<p>The label at the top of the favorites area reflects the highlighted item.</p>
		<h1>Navigating to an item</h1>
		<ul>
			<li>Click on the left and right arrows</li>
			<li>Grab the dot and move it to the right or left</li>
			<li>Grab the icon strip and moving it to the right or left</li>
			<li>Click the down arrow to open a popup div containing all of the favorites</li>
		</ul>
		<h1>Adding an item</h1>
		<ul>
			<li>Drag an item into the label area</li>
			<li>Drag an item into the icon strip</li>
			<li>If the popup div is open, drag it onto the div</li>
			<li>If an item is dragged onto a folder, it becomes an item in that folder</li>
		</ul>			
		<h1>Deleting an item</h1>
		<ul>
			<li>Drag an item out of the icon strip</li>
			<li>Drag the label out of the label area</li>
			<li>If the popup div is open, drag it our of the div</li>
			<li>Right click on the item</li>
		</ul>	
		<h1>Creating a new favorites folder</h1>
		<p>Right clicking anywhere in the favorites area brings up a context menu to add a new folder.</p>
		<h1>Rearranging the order of favorites</h1>
		<ul>
			<li>Click and drag in the slider area. If the icon is dragged beyond those visible in the strip, the strip will begin to move in the direction of the drag and the icon can be dropped into the desired position.</li>
			<li>Click and drag in the popup div</li>
		</ul>
		<h2>Windows area</h2>
		<p>Shows currently open windows when the user is in advanced mode and there is more than 1 window open.  This area does not appear in basic mode.</p>	
		<h1>Navigating to an item</h1>
		<ul>
			<li>Click on left and right arrows</li>
			<li>Grab the dot and move it to the right or left</li>
			<li>Grab the icon strip and moving it to the right or left</li>
			<li>Click the down arrow to open a popup div containing all of the open windows</li>
		</ul>
		<h1>Positioning</h1>
		<p>If the mouse is released between two icons in the highlghted area, one will snap into position.</p>	
		<h1>Closing a window</h1>
		<ul>
			<li>Right click on the icon for the window</li>
			<li>Right click on the name of the window</li>
			<li>Should these methods for closing the window be supported?:
				<ul>
					<li>Drag an item out of the icon strip</li>
					<li>Drag the label out of the label area</li>
					<li>If the popup div is open, drag it out of the div</li>
				</ul>
			</li>
		</ul>
		<h1>Closing all windows</h1>
		<p>Right clicking anywhere in the windows area brings up a context menu to close all windows (with the exception of the currently active window).</p>
		<h1>Rearranging the order of windows</h1>
		<ul>
			<li>Click and drag in the slider area. If the icon is dragged beyond those visible in the strip, the strip will begin to move in the direction of the drag and the icon can be dropped into the desired position.</li>
			<li>Click and drag in the popup div</li>
		</ul>
		<h6>Switcher Dropdowns</h6>
		<p>
			See the <a href="sw_proto/sw_menus.php">prototype</a> for the menu variation of the switcher. The following are the possible behaviors for this variation. 
			A static image with the popup div for the Favorites section open is presented below for reference.
		</p>
		<p>
			<img src="images/swt_menu.png">
		</p>
		<h2>Favorites area</h2>
		<h1>Navigating to an item</h1>
		<p>Clicking the down arrow opens a popup div containing all of the favorites.</p>
		<h1>Adding an item</h1>
		<ul>
			<li>Drag an item into the favorites area</li>
			<li>If the popup div is open, drag it onto the div</li>
			<li>If an item is dragged onto a folder, it becomes an item in that folder</li>
		</ul>
		<h1>Deleting an item</h1>
		<ul>
			<li>Right click on the item in the div</li> 
			<li>Drag an item out of the div</li>
		</ul>
		<h1>Creating a new favorites folder</h1>
		<p>Right clicking in the favorites area or in the div brings up a context menu to add a new folder.</p>
		<h1>Rearranging the order of favorites</h1>
		<p>Click and drag name of the favorite in the div.</p>
		<h2>Windows area</h2>
		<p>Shows currently open windows when the user is in advanced mode and there is more than 1 window open. This area does not appear in basic mode.</p>
		<h1>Navigating to an item</h1>
		<p>Clicking the down arrow opens a popup div containing all of the open windows.</p>
		<h1>Closing a window</h1>
		<ul>
			<li>Right click on the name of the window in the div</li>
			<li>Drag the name of the window out of the div</li>
		</ul>
		<h1>Closing all windows</h1>
		<p>Right clicking anywhere in the window area brings up a context menu to close all windows (with the exception of the currently active window).</p>
		<h1>Rearranging the order of windows</h1>
		<p>Click and drag name of the window in the div.</p>
	</div>	
</div>




<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>