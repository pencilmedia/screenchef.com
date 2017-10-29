<?
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str08'];
	$header_text_1 = $strings['str09'];
	$header_class = " fix_header_w";
	
	//Define pages you want inactive tabs to link to
	$whr_page = 'screen_part_replace_part_03.php';
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="parts" class="replace_parts" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 3px;">&nbsp;</div>

	<div dojoType="LayoutContainer" layoutChildPriority='left-right' layoutAlign="top" style="height: 65px; width: 100%;" class="header_wrap">

		<div dojoType="ContentPane" sizeShare="51" layoutAlign="left" style="height: 65px; width: 51%;">
			<? include_once($GEN_PATH . "/mod_header.php"); ?>
		</div>
	
		<div dojoType="ContentPane" sizeShare="50" layoutAlign="right" style="height: 65px; width: 50%;">
			<? include_once($PART_PATH . "/replace_part/mod_part_replace_part_tabs_0.php"); ?>
		</div>
	
	</div>

	<div dojoType="SplitContainer" orientation="vertical" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="50" sizeMin="200">
			<? include_once($PART_PATH . "/replace_part/mod_part_replace_part_table_find.php"); ?>
		</div>
		
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="50" sizeMin="200" >
			<? include_once($PART_PATH . "/replace_part/mod_part_replace_part_table_replace_1.php"); ?>
		</div>
		
	</div>
</div>

<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextSwitchEvents();
</script>
