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
		<h1>Switcher Explorations :: Week 2</h1>
		<p class="posted">Posted: April 13, 2006 &nbsp;&bull;&nbsp; Owners: <a href="mailto:Donna.Driscoll@agile.com">Donna Driscoll</a>  &amp; <a href="mailto:Joel.Nave@agile.com">Joel Nave</a>  &nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
	
		<h6>Switcher in the style of the Mac OS dock (further refined)</h6>
		<p>
			In this variation, the user is able to drag a shortcut to their frequently performed 
			use cases/tasks to the Switcher (represented by the gray circles).  The user can drag an
			unlimited number of use cases into the Switcher, however only a set number of 
			use cases can appear in the Switcher at one time, in this case five.  The same rule applies
			to the window manager to the right.  Additional Switcher items can be access via a pop up
			div.
		</p>
		<p><img src="images/swt_mac_dock_v2.png"></p>
		<p class="heading">Some open questions:</p>
		<ul>
			<li>
				What would be most useful to represent in the switcher items? Currently open
				windows and use cases are represented in this variation, but what about bookmarks
				to saved states of windows?  Frequently performed workflows?
			</li>
			<li>
				How many items are likely to be represented in each cateogry?  10?  15?	
			</lI>
		</ul>
		<h6>Switcher in the style of the Mac OS dock with iTunes controls</h6>
		<p>
			In this variation, inspired by iTunes, the user navigates through their use cases and 
			window manager by either using the arrow buttons or clicking on the gray dots.  Clicking
			the gray dots increments the set by five items at a time.  As an enhanced behavior,
			the user could target the area with their cursor and drag the icon set to the left or
			right to find the item they are looking for.
		</p>	
		<p><img src="images/swt_itunes.png"></p>
	</div>	
</div>




<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>