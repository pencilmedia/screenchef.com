<?

	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above) 
	$header_text_0 = $strings['str41'];
	$header_text_1 = $strings['str42'];
	$header_text_2 = $strings['str43']; 
	
?>

<!-- BEGIN MAIN CONTENT here -->

<div id="docs" class="appr_doc" dojoType="LayoutContainer" style="height: 100%; width: 100%;">

	<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 2px;"></div>

	<div dojoType="LayoutContainer" sizeShare="0" layoutAlign="top" style="height: 65px; width: 100%;" class="header_wrap">
		<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_header_view.php"); ?>
	</div>

	
	
	<div dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="80" sizeMin="580" layoutAlign="client">
		
			<div dojoType="SplitContainer" orientation="vertical" sizerWidth="5" activeSizing="0" layoutAlign="client">
			
				<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="60" sizeMin="300">
			
					<div dojoType="LayoutContainer" sizeShare="100" sizeMin="100" layoutAlign="client">
					
						<div dojoType="LayoutContainer" layoutChildPriority='left-right'>
					
							<div dojoType="ContentPane" sizeShare="50" layoutAlign="left">
								<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_stats_edit.php"); ?>
							</div>
						
						</div>
						
					</div>
					
					<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
						<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_action_stats_1.php"); ?>
					</div>
				
				</div>
				
				<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="40" sizeMin="100">
					<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_table.php"); ?>
				</div>
				
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_action_view_0.php"); ?>
			</div>
			
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="20" sizeMin="200" layoutAlign="client">
		
			<div dojoType="LayoutContainer" sizeShare="20">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_switcher_0.php"); ?>
			</div>
			
			<div dojoType="LayoutContainer" sizeShare="20">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_switcher_1.php"); ?>
			</div>
			
			<div dojoType="LayoutContainer" sizeShare="20">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_switcher_2.php"); ?>
			</div>
			
			<div dojoType="LayoutContainer" sizeShare="20">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_switcher_3.php"); ?>
			</div>
			
			<div dojoType="LayoutContainer" sizeShare="20">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_switcher_4.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 31px; width: 100%;">
				<? include_once($DOC_PATH . "/appr_doc/mod_doc_appr_doc_view_change_action_view_1.php"); ?>
			</div>
			
		</div>
	
	</div>
	
</div>
<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextEditEvents();
</script>

