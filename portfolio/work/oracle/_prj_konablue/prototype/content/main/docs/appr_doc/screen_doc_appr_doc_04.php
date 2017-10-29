<?
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)
	$header_text_0 = $strings['str24'];
	$header_text_1 = $strings['str33'];
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="docs" class="appr_doc" dojoType="LayoutContainer" layoutChildPriority='top-bottom' style="width: 100%; height: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>
	
	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 65px;width: 100%;" class="header_wrap">
		<? include_once($GEN_PATH . "/mod_header.php"); ?>
	</div>
	
	<div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeMin="600" sizeShare="80" style="height: 100%; width: 80%;">
	
			<div dojoType="ContentPane" layoutAlign="client">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_form.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_action_0.php"); ?>
			</div>
			
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeMin="185" sizeShare="20" style="height: 100%; width: 20%;">
		
			<div dojoType="ContentPane" layoutAlign="client" style="width: 185px;">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_addr.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_action_addr.php"); ?>
			</div>
			
			
		</div>
	
	</div>
	
</div>

<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextEditEvents();
</script>
