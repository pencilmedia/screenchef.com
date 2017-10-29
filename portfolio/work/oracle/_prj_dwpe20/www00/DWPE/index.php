<?php
		session_start();
		if ( isset($_REQUEST['minified']) )
		{
			$_SESSION['minified']= $_REQUEST['minified'];
		}
		$component_key="DWPE_HomePage";	
?>	



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>DWPE 2.0 Component Sandbox</title>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>

</head>

<body>

<div id="page">
<h3>DWPE 2.0 Component Sandbox&nbsp;&nbsp;<span id="build_num"></span></h3>


<p>The component sandbox represents the first stage of DWPE 2.0 build.  In this area 
	developers publish their representations of Fusion components and Alpha testers
	view then comment on the fidelity, fit and finish of each component. 
	
	</p>



<div id="tabs">
	<ul>
		<li><a href="#tabs-0">Weekly Test Plans</a></li>
		<li><a href="#tabs-1">Component Status</a></li>
		<li><a href="#tabs-2">Schedule</a></li>
		
		<li><a href="#tabs-3">Search</a></li>
		<li><a href="#tabs-4">Contacts</a></li>
		<li><a href="#tabs-5">FAQ</a></li>
		
		
	</ul>

	<div id="tabs-0" style="padding:10px;background:#fff;overflow-y:auto;height:500px;">
		
		<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_ProjectHome/weekly_test_plans.php'?>
		
		
	</div>
	
	<div id="tabs-1"  style="padding:0px;">
		
		<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_ProjectHome/component_status.php'?>
		
	</div>
	
	<div id="tabs-2"  style="padding:0px;">
		
		<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_ProjectHome/schedule.php'?>
	
	</div>
	

	

	
	<div id="tabs-4" >
		
		
		
		<h4>The DWPE Team</h4>
		<ul>
			<li><a href="mailto:lydia.naylor@oracle.com">Lydia Naylor</a>, Project Manager.</li>
			<li><a href="mailto:roy.selig@oracle.com">Roy Selig</a>, Architect & Co-developer.</li>
			<li><a href="mailto:anthony.moquette@oracle.com">Anthony Moquette</a>, Co-developer</li>
			<li><a href="mailto:medha.singri@oracle.com">Medha Singri</a>, Co-developer</li>
		</ul>
		
		
		
		<h4>Points of contact</h4>
		<ul>
		
			<li>Direct general project questions to <a href="mailto:lydia.naylor@oracle.com">Lydia Naylor</a>.</li>
			<li>Direct questions about this site or the DWPE architecture to <a href="mailto:roy.selig@oracle.com">Roy Selig</a>.</li>
			<li>If you are having trouble logging into the site contact <a href="mailto:medha.singri@oracle.com">Medha Singri</a>.</li>
			<li>Enter questions or comments about a particular component within that component's 'Feedback' tab.</li>
		</ul>
		
		
	</div>
	
	<div id="tabs-5" style="padding:10px;background:#fff;overflow-y:auto;height:500px;">
		
		<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_ProjectHome/faq.php'?>
	
	</div>
	
	<div id="tabs-3"  style="padding:0px;">
		
		<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/DWPE_ProjectHome/component-global-search.php'?>
	
	</div>
	
	
</div>



</div> <!--end page-->













</body>
</html>
