<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str58'];
	$header_text_1 = $strings['str59'];

?>

<!-- BEGIN MAIN CONTENT here -->

<div id="parts" class="save_bom_as" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($GEN_PATH . "/mod_header.php"); ?>
	</div>
	
	<div dojoType="ContentPane" layoutAlign="client">
		<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_form.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
		<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_action_0.php"); ?>
	</div>
		
</div>

<!-- END MAIN CONTENT here -->
