<?
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str24'];
	$header_text_1 = $strings['str25'];
	$status_text = "There are <em>6 DOCUMENTS</em> with changes that require your approval.";
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="docs" class="appr_doc" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="height: 100%; width: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($GEN_PATH . "/mod_header.php"); ?>
	</div>
	
	<div dojoType="LayoutContainer" sizeShare="0" layoutAlign="client">
		<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_table_list_complete.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
		<? include_once($GEN_PATH . "/mod_action.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom">
		<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_confirmation.php"); ?>
	</div>
	
</div>

<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextEditEvents();
</script>
