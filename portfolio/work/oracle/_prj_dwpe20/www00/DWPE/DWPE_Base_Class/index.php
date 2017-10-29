<?php
		session_start();
		$component_title="DWPE Base Class";
		$component_key="DWPE_Base_Class";
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>

	<?php
		$component_title="DWPE Base Class";
	?>

	<form id="properties-sheet">
		<p>
		Currently there are no settable properties on this class.
		</p>
		<p>
		<!--input class="ui-state-default ui-corner-all" type="button" value="Run Test Script" onclick="runTestScript()"-->
		</p>
	</form>

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>
			
			
</body>
</html>
