<?
$start_clk_evt = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/create_bom/";
$end_clk_evt ="');";

$fnd_clk_evt = $start_clk_evt . $fnd_page . $end_clk_evt;
$mch_clk_evt = $start_clk_evt . $mch_page . $end_clk_evt;
?>

<div class="start_top">
	<div class="tabs">
		<div class="btn_reg">
			<div class="tab"><p class="text_only heading" onclick="<? echo $fnd_clk_evt ?>">Find Part</p></div>
			<div class="tab d_selected_tabs"><p class="text_only heading">Create Part</p></div>
			<div class="tab_last"><p class="text_only heading" onclick="<? echo $mch_clk_evt ?>">Match Part</p></div>
		</div>
	</div>
</div>