<?php $defaultPage = 'homepage.php';  ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Simplified Supplier UI Prototype</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<? include( $_SERVER['DOCUMENT_ROOT'] . "/pages/simplified_supplier/styles_and_scripts.php") ?>
    <script type="text/javascript" src="supplier.js"></script>
</head>
<body id="simple_supplier" class="simple_supplier">
    <?
		include($_SERVER['DOCUMENT_ROOT'] . "/pages/simplified_supplier/left_pane.php");
    ?>
	<div id="MainPane" class="MainPane">
    	<div id="TopPane" class="TopPane">
			<? include($_SERVER['DOCUMENT_ROOT'] . "/pages/simplified_supplier/top_pane.php") ?>
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
