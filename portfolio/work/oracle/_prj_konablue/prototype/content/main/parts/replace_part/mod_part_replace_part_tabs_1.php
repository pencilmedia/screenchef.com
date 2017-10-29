<?
$start_clk_evt = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/replace_part/";
$end_clk_evt ="');";

$sch_clk_evt = $start_clk_evt . $sch_page . $end_clk_evt;
?>

<div class="start_top">
	<div class="tabs">
		<div class="btn_reg left">
			<div class="tab"><p class="text_only heading" onclick="<? echo $sch_clk_evt ?>">Search for</p></div>
			<div class="tab_last d_selected_tabs"><p class="text_only heading">Where Used</p></div>
		</div>
	</div>
</div>
