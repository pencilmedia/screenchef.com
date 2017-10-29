<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above) 
	$header_text_0 = $strings['str54'];
	$header_text_1 = $strings['str55'];
	$sub_header_text_0 = $strings['str56'];
	
	//Define pages you want inactive tabs to link to
	$bom_page = 'screen_part_change_view_08_bom.php';
	$mfr_page = 'screen_part_change_view_08_mfr.php';
	
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="parts" class="find_parts" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($PART_PATH . "/change_view/mod_part_change_view_header_0.php"); ?>
	</div>
	
	<div dojoType="SplitContainer" orientation="vertical" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom'  sizeShare="30" sizeMin="165">
			<? include_once($PART_PATH . "/change_view/mod_part_change_view_table_08.php"); ?>
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="70" style="width: 100%;">
		
			<div dojoType="LayoutContainer" layoutChildPriority='left-right' layoutAlign="top" style="height: 50px; width: 100%;" class="header_sub_wrap">

				<div dojoType="ContentPane" sizeShare="51" layoutAlign="left" style="height: 50px; width: 51%;">
					<? include_once($GEN_PATH . "/mod_sub_header.php"); ?>
				</div>
			
				<div dojoType="ContentPane" sizeShare="50" layoutAlign="right" style="height: 50px; width: 50%;">
					<? include_once($PART_PATH . "/change_view/mod_part_change_view_tabs_2.php"); ?>
				</div>
			
			</div>
	
			<div dojoType="LayoutContainer" layoutChildPriority='top-bottom'  layoutAlign="client">
				<? include_once($PART_PATH . "/change_view/mod_part_change_view_table_att_empty.php"); ?>
			</div>
			
		</div>
		
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
		<? include_once($PART_PATH . "/change_view/mod_part_change_view_action_0.php"); ?>
	</div>
	
</div>
<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextSwitchEvents();
</script>

