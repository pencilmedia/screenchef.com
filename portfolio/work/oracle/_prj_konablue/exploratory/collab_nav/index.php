<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Collaboration Controls Exploration</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="../switcher/css/styles.css" />
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>



<div id="content" class="switcher">
	<div id="konablue">	
		<h1>Collaboration Controls Explorations</h1>
		<p class="posted">Posted: April 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Donna.Driscoll@agile.com">Donna Driscoll</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a></p>
	
		<h6>Working assumptions for the Collaboration Controls</h6>
		<ul>
			<li>
				The content of the Collaboration Controls changes infrequently for all modules 
				with the exception of PPM.
			</li>
			<li>
				The screen real estate devoted to the Collaboration Controls is extremely limited.
			</li>
		</ul>
		
		
		<h6>What are the Collaboration Controls</h6>
		<p>
			The Collaboration Controls consists of alerts for the following 3 categories:
		</p>	
		<ul>
			<li>To do items (including program
			activities, workflow and action items)</li>
			<li>Notifications</li>
			<li>Discussions</li>
		</ul>

		<h6>Iconic Collaboration Controls</h6>
		<p>
			In this variation, to do items, notifications and discussions are represented iconically.
			The number of new or unaddressed items in each category is represented beneath the icon.
			The content of each category is presented in a floating div and can be accessed
			by hovering over an icon.
		</p>	
		<p><img src="images/collab_nav_icon.png" /></p>		
		<p class="heading">Pros:</p>
		<ul>
			<li>Makes good use of the space available for Collab Controls.</li>
			<li>Additional information can be communicated through the icons, for example changing
				the state of the To Do icon when items have become overdue.
			<li>Divs can contain not only the details of each control, but also settings for which
				controls appear and the means to get to the Collab Content.</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>Not scalable if numerous controls are added.</li>
			<li>User are likley to habituate to the controls if they do not update frequently.</li>
		</ul>
		
		<h6>Scrollable List</h6>
		<p>
			In this variation, collaboration items appear in a scrollable list.
		</p>	
		<p><img src="images/collab_nav_scrollable.png" /></p>
		<p class="heading">Pros:</p>
		<ul>
			<li>Allows for content to be viewed and accessed in a constrained space.</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>Information is presented linearly, requiring the user to scroll to get to the
				information of interest to them.</li>
			<li>Users are likely to miss important items unless they actively scroll through
				the list.</li>
		</ul>
		
		<h6>Menu & Scrollable List</h6>
		<p>
			The desired collaboration category can be accessed via a menu.  The default
			selection would be to show all categories.
		</p>	
		<p><img src="images/collab_nav_menu.png" /></p>
		<p class="heading">Pros:</p>
		<ul>
			<li>Users can filter the content by the category that is of interest to them</li>
		</ul>
		<p class="heading">Cons:</p>
		<ul>
			<li>The menu effectively eats up half the available space</li>
			<li>This variation inherits the cons of the Scrollable list variation above</li>
		</ul>
	</div>	
</div>




<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>