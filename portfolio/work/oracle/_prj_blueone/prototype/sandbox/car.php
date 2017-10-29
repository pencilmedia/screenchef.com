<?php 
	$defaultPage = 'pages/sprint_05/car_templates/obj_form.php';
	//$defaultPage = 'pages/_testing/proj_dashboard/dashboard_mystuff.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>blueONE Prototype</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<? include("car_components/concept_car_required_styles_and_scripts.php") ?>
   	<script src="pcm/js/pcm_business_logic.js" type="text/javascript"></script>
    <link id="dcss" rel="stylesheet" type="text/css" href="#">
</head>
<body id="car">
	<div id="activity_indicator1" class="activity_indicator1"></div>
    <div id="activity_indicator2" class="activity_indicator2">Loading...</div>
    <div id="activity_indicator3" class="activity_indicator3">Loading</div>
	<div id="collapsedPane" class="collapsedPane" title="Expand" onmouseover="this.style.backgroundColor='#e9eaea';" onmouseout="this.style.backgroundColor='#d3d3d3';">          
		<div id="sidebarExpand" class="layoutExpand"></div> 
	</div>
    <?
		include("car_components/concept_car_search_menu.php");
		include("car_components/concept_car_left_pane.php");
		echo '<div id="splitbar" class="splitter"></div>' 
    ?>
	<div id="MainPane" class="MainPane">
    	<div id="TopPane" class="TopPane">
			<? include("car_components/concept_car_top_pane.php") ?>
	   	</div>
		<div id="car_content" class="BottomPane">
        	<!-- **************************************** -->
    		<!-- *	BEGIN FORM CONTENT					* -->
        	<!-- **************************************** -->
        	<!-- * The following content is necessary	* -->
        	<!-- * and will be overwritten by XHR 		* -->
        	<!-- * content.								* -->
        	<!-- **************************************** -->
			<? include($defaultPage); ?>
        	<!-- **************************************** -->
    		<!-- *	END FORM CONTENT					* -->
        	<!-- **************************************** -->
	    </div>
	</div>
</body>
</html>
