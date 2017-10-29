<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above) 
	$header_text_0 = $strings['str48'];
	$header_text_1 = $strings['str49'];
	$header_class = " fix_header_w"; 
	
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="docs" class="docs_startpage" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($GEN_PATH . "/mod_header.php"); ?>
	</div>

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 30px; width: 100%">
		<? include_once($DOC_PATH . "/find_docs/mod_doc_find_docs_status_text_0.php"); ?>
	</div>
	
	<div dojoType="LayoutContainer" layoutChildPriority='top-bottom'  sizeShare="100" layoutAlign="client">
		<? include_once($DOC_PATH . "/find_docs/mod_doc_find_docs_table_find_empty.php"); ?>
	</div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
		<? include_once($GEN_PATH . "/mod_action.php"); ?>
	</div>
</div>
<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextSwitchEvents();
</script>

