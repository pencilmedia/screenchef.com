<?
	$menu_name = "popup_doc_check_in_3";
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str60'];
	$header_text_1 = $strings['str36'];
	$status_text = "You currently have <em>seven</em> documents checked out.";
?>

<!-- BEGIN MAIN CONTENT here -->


<div id="docs" class="check_in" dojoType="LayoutContainer" style="height: 100%; width: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_header_0.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 35px; width: 100%;">
		<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_input_bar_0.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="client">
		<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_view_icon_confirmation.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
		<? include_once($GEN_PATH . "/mod_action.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom">
		<? include_once($DOC_PATH . "/check_in/mod_doc_check_in_confirmation.php"); ?>
	</div>
</div>
<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextEditEvents();
</script>
