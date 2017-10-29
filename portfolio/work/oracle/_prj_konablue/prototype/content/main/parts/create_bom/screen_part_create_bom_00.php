<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str26'];
	$header_text_1 = $strings['str27'];
	
	//Define pages you want inactive tabs to link to
	$crt_page = 'screen_part_create_bom_create.php';
	$mch_page = 'screen_part_create_bom_match_0.php';

?>

<!-- BEGIN MAIN CONTENT here -->

<div id="parts" class="create_bom" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($GEN_PATH . "/mod_header.php"); ?>
	</div>
	
	<div dojoType="ContentPane" layoutAlign="client">
		<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_form.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
		<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_action_0.php"); ?>
	</div>
		
</div>

<!-- END MAIN CONTENT here -->
