<?
	$menu_name = "popup_doc_check_in_1";
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str60'];
	$header_text_1 = $strings['str35'];
	$status_text = "You have selected <em>Gannt_spec.doc</em>";
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="docs" class="check_in" dojoType="LayoutContainer" style="height: 100%; width: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_header_0.php"); ?>
	</div>
	
	<div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="65" sizeMin="200" layoutAlign="client">
		
			
			<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_view_list_inspector.php"); ?>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_action_0.php"); ?>
			</div>
			
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="35" sizeMin="325" layoutAlign="client">
		
			<div dojoType="LayoutContainer" sizeShare="100" sizeMin="400" layoutAlign="client">
				<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_inspector_0.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_action_3.php"); ?>
			</div>
			
		</div>
		
	</div>
	
</div>

<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextEditEvents();
</script>
