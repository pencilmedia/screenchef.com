<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$menu_name = "popup_part_create_bom_3_tree";
	$menu_name_blank = "popup_part_create_bom_0";
	$header_text_0 = $strings['str61'];
	$header_text_1 = $strings['str62'];
	
	//Define pages you want inactive tabs to link to
	$crt_page = 'screen_part_create_bom_create.php';
	$mch_page = 'screen_part_create_bom_match_0.php';

?>

<!-- BEGIN MAIN CONTENT here -->

<div id="parts" class="save_bom_as" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">
	
	<div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="70" sizeMin="200" layoutAlign="client">
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
				<? include_once($GEN_PATH . "/mod_header.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 35px; width: 100%;">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_input_bar_0.php"); ?>
			</div>
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 25px; width: 100%;">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_input_search.php"); ?>
			</div>
			
			<div div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
				
				<div dojoType="ContentPane" sizeShare="30" style="height: 100%; width: 30%;">
					<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_view_tree_a_4.php"); ?>
				</div>
				
				<div dojoType="ContentPane" sizeShare="70" style="height: 100%; width: 70%;">
					<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_view_tree_b_4.php"); ?>
				</div>
				
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_action_left_1_tree_minus.php"); ?>
			</div>
			
			<div dojoType="LayoutContainer" sizeShare="0" layoutAlign="bottom" style="height: 175px; width: 100%;">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_show_details.php"); ?>
			</div>
			
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="30" sizeMin="295" layoutAlign="client">
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px; width: 100%;" class="header_wrap">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_tabs_0.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 35px; width: 100%;">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_input_bar_1.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 25px; width: 100%">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_input_blank.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="client" style="height: 100%; width: 100%">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_find_tree_empty.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($PART_PATH . "/save_bom_as/mod_part_save_bom_as_action_right_1.php"); ?>
			</div>
			
		</div>	
		
	</div>
	
</div>

<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextTreeEvents();
</script>
