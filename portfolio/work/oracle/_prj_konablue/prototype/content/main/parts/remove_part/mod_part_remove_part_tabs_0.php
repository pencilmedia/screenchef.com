<?
$start_clk_evt = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/remove_part/";
$end_clk_evt ="');";

$whr_clk_evt = $start_clk_evt . $whr_page . $end_clk_evt;
?>

<div class="start_top">
	<div class="tabs">
		<div class="btn_reg left">
			<div class="tab d_selected_tabs"><p class="text_only heading">Search for</p></div>
			<div class="tab_last"><p class="text_only heading" onclick="<? echo $whr_clk_evt ?>">Where Used</p></div>
		</div>
	</div>
</div>

<!--<div class="start_top">
	<div class="tabs">
		<div class="btn_reg left">
			<div class="tab d_selected_tabs"><p class="text_only heading">Search for</p></div>
			<div class="tab_last"><p class="text_only heading" onclick="var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/remove_part/screen_part_remove_part_06.php');">Where Used</p></div>
		</div>
	</div>
</div>-->
