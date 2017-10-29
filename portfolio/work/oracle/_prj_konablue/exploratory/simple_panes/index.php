<?php
	$inc_path = "./";
	$default_switcher = "sw_sliders.php";
	$default_user_task = "ut_list.php";
	$default_collab = "cn_popups.php";
	$default_content = "ct_plain.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Window Beahvior Trial</title>

	<link rel="stylesheet" type="text/css" href="css/common.css" />
	<link rel="stylesheet" type="text/css" href="css/switcher.css" />
	<link rel="stylesheet" type="text/css" href="css/usertasks.css" />
	<link rel="stylesheet" type="text/css" href="css/collab.css" />
	<link rel="stylesheet" type="text/css" href="css/content.css" />
	
	
	<script language="javascript" src="js/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="js/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="js/invo.string.js" type="text/javascript"></script>
	<script language="javascript" src="js/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="js/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="js/invo.event.js" type="text/javascript"></script>
	<script language="javascript" src="js/invo.dnd.js" type="text/javascript"></script>
	
	<script type="text/javascript">
		/*
			NOTE: This stuff needs to be here, since I write to it with PHP.
		*/
		var current_switcher = null;
		var current_user_tasks = null;
		var current_user_task_obj = null;
		
		var default_switcher_page = "<?=$default_switcher;?>";
		var default_user_task_page = "<?=$default_user_task;?>";
		var default_collab_page = "<?=$default_collab;?>";
		var default_content_page = "<?=$default_content;?>";
		
		
		var sw_file = <? echo isset($_GET['sw']) ? '"' . $_GET['sw'] . '"' : "null" ; ?>;
		var ut_file = <? echo isset($_GET['ut']) ? '"' . $_GET['ut'] . '"' : "null" ; ?>;
		var ct_file = <? echo isset($_GET['ct']) ? '"' . $_GET['ct'] . '"' : "null" ; ?>;
		var sw_curr = <? echo isset($_GET['sw_curr']) ? '"' . $_GET['sw_curr'] . '"' : "null" ; ?>;
		var ut_curr = <? echo isset($_GET['ut_curr']) ? '"' . $_GET['ut_curr'] . '"' : "null" ; ?>;
		
		
		var default_type = "parts";
		var type_names = new Array("parts", "documents", "projects", "products", "contacts");
	</script>
	
	<script type="text/javascript" src="js/main.js"></script>
	
</head>
<body onload="handleOnload();">
	<div id="container">
		<div id="box_find"></div>
		<div id="box_user_tasks">
		<?
			if (isset($_GET['ut'])) { 
				include_once($inc_path . $_GET['ut']);
			} else {
				include_once($inc_path . $default_user_task);
			}
		?>
		</div>
		<div id="box_collab_nav">
		<?
			if (isset($_GET['cn'])) { 
				include_once($inc_path . $_GET['cn']);
			} else {
				include_once($inc_path . $default_collab);
			}
		?>	
		</div>
		<div id="box_window_controls"></div>
		<div id="box_switcher">
		<?
			if (isset($_GET['sw'])) { 
				include_once($inc_path . $_GET['sw']);
			} else {
				include_once($inc_path . $default_switcher);
			}
		?>		
		</div>
		<div id="box_content">
		<?
			if (isset($_GET['ct'])) { 
				include_once($inc_path . $_GET['ct']);
			} else {
				include_once($inc_path . $default_content);
			}
		?>
		</div>
	</div>
		
	<div id="chooser">
		<h4>Switchers</h4>
		<p>
			<a href="#" onclick="sw_file = 'sw_sliders.php'; goPage(); return false;">Sliders</a><br/>
			<a href="#" onclick="sw_file = 'sw_dropdowns.php'; goPage(); return false;">Dropdowns</a><br/>
		</p>
		<h4>User Tasks by Role</h4>
		<p>
			<a href="#" onclick="ut_file = 'ut_comp_eng.php'; goPage(); return false;">Component Eng.</a><br/>
			<!--
			<a href="">Design Eng.</a><br/>
			<a href="">Manufacturing Eng.</a><br/>
			-->
			<a href="">Project Mgr.</a><br/>
			<!--
			<a href="">Compliance Mgr.</a><br/>
			<a href="">Supplier</a><br/>
			<a href="">Quality Analyst</a><br/>
			-->
			<a href="">Commodity Mgr.</a><br/>
			
		</p>
	</div>	
	
	

</body>
</html>