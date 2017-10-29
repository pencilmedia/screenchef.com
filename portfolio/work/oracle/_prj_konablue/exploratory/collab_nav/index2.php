
 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Collaboration Controls Exploration</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="../collab_nav/css/styles.css" />
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>



<div id="content" class="switcher">
	<div id="konablue">	
		<h1>Collaboration Controls Explorations :: Week 2</h1>
		<p class="posted">Posted: April 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Donna.Driscoll@agile.com">Donna Driscoll</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a></p>
	
		<h6>What is the purpose of the Collaboration Controls?</h6>
		<p>
			The Collab Controls were originally conceived as an alert system for users' to dos,
			notifications and discussions.  However there are several questions about what it 
			could be beyond an alert system.
		</p>
		<p>
			For example, could the Collab Control not only
			alert me of an incoming notifications requesting that I approve a change, but also
			allow me to approve a change directly?  Could I not only be reminded of my overdue
			tasks and tasks due today, but also about upcoming tasks?  Would Agile users find
			these features of the Collab Control valuable?
		</p>
		<p>
			An assumption that we've been
			making is that the Collab Controls are a means to get to the larger Collaboration 
			Content section.  What if this were not the case?  Could the Collab Controls be a
			self contained entity?
		</p>		
		<h6>Address Book - a new addition to the controls</h6>
		<p>
			From our discussion last week, we entertained the idea of providing an addition control
			for the address book, providing a means to quickly search for and then initiate an instant
			message session or send an email message.  The variations for this week include the address
			book.
		</p>	
		
		<h6>Working assumptions about what each of the controls communicates</h6>
		<p>
			To do items<br />
			Communicates items that are overdue, that are due today, and possibly items
			due in a specified time frame, such as the next 2 weeks.  The duration could be specified
			in the settings for the Collab Controls.
		</p>
		<p>
			Notifications<br />
			Communicates the number of new notifications that have come in since the
			user last checked.  Once read, notifications could be marked as read.  
		</p>
		<p>
			Discussions<br />
			Communicates discussions I've joined and that have been udpated.
		</p>
		<p>
			Address Book<br />
			Provides a means to quickly search for co-worker and initiate an instant
			message session or the ability to send an email messsage.
		</p>
		
		<h6 id="this_week">This weeks variations - interactive!</h6>
		<p>
			This week's explorations are variations on the Iconic Collaboration Control. Behaviors and
			sample content have been added to encourage discussion about the purpose of the Controls.<br />
			<img src="images/collab_nav_icon.png" />
		</p>
		<ul>
			<li>See the <a href="collab_behavior_1.php">scrolling alerts</a></li>
			<li>See the <a href="collab_behavior_2.php">fading alerts</a></li>
			<li>See the <a href="collab_behavior_3.php">popup div alerts</a></li>
		</ul>

	</div>	
</div>




<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>