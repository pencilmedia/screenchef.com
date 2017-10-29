<?
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/defs.php");
	include_once($_SERVER['DOCUMENT_ROOT'] . "/prototype/html/beta/content/main/strings.php"); 
	
	//Defines specific strings for use in page header and sub-header (if applicable).  
	//Text is defined in strings.php (defined above)

	$status_text_0 = "<em>Files needing your approval</em>"; 
	$status_text_1 = "<em>Recent Files</em>";

?>

<!-- BEGIN MAIN CONTENT here -->

<div id="home" class="home_startpage" dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" style="width: 100%; height: 100%;">

	<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="55" sizeMin="200" layoutAlign="client">
	
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' layoutAlign="top" style="height: 45%; width: 100%;">
		
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 50px; width: 100%;">
				<? include_once($HOME_PATH . "/startpage/mod_home_startpage_status_text_0.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="100" layoutAlign="client">
				<? include_once($HOME_PATH . "/startpage/mod_home_startpage_approval_view_icon.php"); ?>
			</div>
			
		</div>
		
		<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' layoutAlign="top" style="height: 55%; width: 100%;">
			
			<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 50px; width: 100%;">
				<? include_once($HOME_PATH . "/startpage/mod_home_startpage_status_text_1.php"); ?>
			</div>
			
			<div dojoType="ContentPane" sizeShare="100" layoutAlign="client">
				<? include_once($HOME_PATH . "/startpage/mod_home_startpage_recent_view_icon.php"); ?>
			</div>
			
		</div>
			
	</div>
	
	<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="45" sizeMin="200" layoutAlign="client">
	
		<div dojoType="ContentPane" sizeShare="0" layoutAlign="top" style="height: 60px; width: 100%;">
			<? include_once($HOME_PATH . "/startpage/mod_home_startpage_input.php"); ?>
		</div>
		
		<div dojoType="LayoutContainer" sizeShare="100" layoutAlign="client">
			<? include_once($HOME_PATH . "/startpage/mod_home_startpage_table_search.php"); ?>
		</div>
		
		<div dojoType="ContentPane" sizeShare="0" layoutAlign="bottom" style="height: 175px; width: 100%">
			<? include_once($HOME_PATH . "/startpage/mod_home_startpage_stats.php"); ?>
		</div>
	</div>
	
</div>


<!-- END MAIN CONTENT here -->

<script type="text/javascript">
	attachRowEvents();
	attachTextEditEvents();
</script>
