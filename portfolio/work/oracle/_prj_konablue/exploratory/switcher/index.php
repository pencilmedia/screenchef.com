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
		<h1>Switcher Explorations</h1>
		<p class="posted">Posted: March 2006 &nbsp;&bull;&nbsp; Owners: <a href="mailto:Donna.Driscoll@agile.com">Donna Driscoll</a>  &amp; <a href="mailto:Joel.Nave@agile.com">Joel Nave</a>  &nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
	
		<h6>Working assumptions for the Switcher</h6>
		<p>
			The following assumptions are being made to allow progress to occur on the Switcher. They can be
			revisited as the project progresses and can be modified as needed.
		<p/>
		<ul>
			<li>
				The user controls the Switcher by clicking on a module in the Switcher.  Niether the system
				nor any other action by the user switches a module.
			</li>
			<li>
				The purpose of the Switcher is to switch the view of the content in the currently selected window.
				It does not spawn content in a separate window.
			</li>
		</ul>
		
		
		<h6>Switcher in the style of the Mac OS dock</h6>
		<p>
			In this variation, the currently selected module is emphasized (via bolding and a graphic).
			In advanced mode, the currently open windows are represented iconically to the right of the pipe.
			Clicking on an icon brings that window into focus.  In basic mode, the icons would not appear
			and clicking on a module would refresh the content area.
		</p>	
		<p><img src="images/swt_mac_dock.png" /></p>
		<p><img src="images/mac_dock.png" /></p>	
		<p class="heading">Pros:</p>
		<ul>
			<li>Quickly access open windows.</li>
			<li>All modules presented simulateously.</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>May not scale well if numerous modules are added.</li>
			<li>Can become unmanageable if numerous windows are open.</li>
		</ul>
		
		<h6>Switcher in the style of the Mac OS System Preferences</h6>
		<p>
			In this variation, modules are represented with an icon and label.  Clicking on a module
			presents its submenu.  The Show All button presents all of the modules.  History can be
			retraces via the navigation buttons.
		</p>		
		<p><img src="images/swt_mac_sys_prefs.png" /></p>
		<p><img src="images/mac_sys_prefs.png" /></p>
		<p><img src="images/mac_sys_prefs_spotlight.png" /></p>
		<p class="heading">Pros:</p>
		<ul>
			<li>Scales well.</li>
			<li>Convenient to switch between default view (All) and module specific views.</li>
		</ul>
		<p class="heading">Cons:</p>
		
		<h6>Switcher with Amazon's menu behavior</h6>
		<p>
			Submenus of the modules are contained in a floating div and are accessed by hovering over
			the module.
		</p>		
		<p><img src="images/swt_amazon_div.png" /></p>
		<p><img src="images/amazon.png" /></p>	
		<p class="heading">Pros:</p>
		<ul>
			<li>Scales well as submenu items are added.</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>As in Amazon's case, may become unweildy if numerous submenu items are added.</li>
		</ul>		
		
		<h6>Basic menu and submenu type Switcher</h6>
		<p>The menu can be tabs or links or buttons.</p>		
		<p><img src="images/swt_basic.png" /></p>
		<p class="heading">Pros:</p>
		<ul>
			<li>All modules and the submenu of the default module are displayed simulatenously.</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>May not scale well is numerous modules and submenus are added.</li>
		</ul>
		
		<h6>Drop down menu type Swticher</h6>
		<p>
			Modules are accessed via a drop down menu.  Submenus for the selected module are presented
			to the right of the drop down menu.
		</p>		
		<p><img src="images/swt_dropdown_menu.png" /></p>	
		<p class="heading">Pros:</p>
		<ul>
			<li>Scales well, as numerous modules can be added without affecting screen real estate.</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>The modules are not presented simulateously.</li>
		</ul>
	</div>	
</div>




<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>