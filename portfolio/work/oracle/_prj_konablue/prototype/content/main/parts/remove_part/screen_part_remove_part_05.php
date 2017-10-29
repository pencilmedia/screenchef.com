<?
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str05'];
	$header_text_1 = $strings['str06'];
	$header_class = "";
?>

<!-- BEGIN MAIN CONTENT here -->


<div id="parts" class="remove_parts" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 3px;"></div>

	<div dojoType="ContentPane" sizeShare="60" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($GEN_PATH . "/mod_header.php"); ?>
	</div>
	
	<div dojoType="SplitContainer" orientation="vertical" sizerWidth="5" activeSizing="0" layoutAlign="client">

		<div dojoType="ContentPane" sizeShare="50" style="overflow: auto;">
			<? include_once($PART_PATH . "/remove_part/mod_part_remove_part_form_filled.php"); ?>
		</div>
		
		<div dojoType="LayoutContainer" sizeShare="50" sizeMin="175">
			<? include_once($PART_PATH . "/remove_part/mod_part_remove_part_table_affected_results.php"); ?>
		</div>
	
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" style="height: 105px; width: 100%;" layoutAlign="bottom">
		<? include_once($PART_PATH . "/remove_part/mod_part_remove_part_confirmation.php"); ?>
	</div>

</div>

<!-- END MAIN CONTENT here -->
<script type="text/javascript">
	attachRowEvents();
	attachTextSwitchEvents();
</script>
