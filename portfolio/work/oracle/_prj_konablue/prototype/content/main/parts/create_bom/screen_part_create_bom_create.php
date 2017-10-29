<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$menu_name_blank = "popup_part_create_bom_0";
	$header_text_0 = $strings['str22'];
	$header_text_1 = $strings['str23'];
	
	//Define pages you want inactive tabs to link to
	$fnd_page = 'screen_part_create_bom_01_tree.php';
	$mch_page = 'screen_part_create_bom_match_0.php';

?>

<!-- BEGIN MAIN CONTENT here -->

<div id="parts" class="create_bom" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">
	
	<div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="70" sizeMin="200" layoutAlign="client">
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
				<? include_once($GEN_PATH . "/mod_header.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 35px; width: 100%;">
				<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_input_bar_0.php"); ?>
			</div>
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 25px; width: 100%;">
				<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_input_search.php"); ?>
			</div>
			
			<div div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
				
				<div dojoType="ContentPane" sizeShare="30" style="height: 100%; width: 30%;">
					<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_view_tree_a_3.php"); ?>
				</div>
				
				<div dojoType="ContentPane" sizeShare="70" style="height: 100%; width: 70%;">
					<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_view_tree_b_3.php"); ?>
				</div>
				
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_action_left_0_tree_plus.php"); ?>
			</div>
			
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="30" sizeMin="295" layoutAlign="client">
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px; width: 100%;" class="header_wrap">
				<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_tabs_1.php"); ?>
			</div>			
			
			<div dojoType="ContentPane" sizeShare="100" sizeMin="400" layoutAlign="client">
				<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_create_form.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($PART_PATH . "/create_bom/mod_part_create_bom_action_right_2.php"); ?>
			</div>
			
		</div>	
		
	</div>
	
</div>

<!-- END MAIN CONTENT here -->