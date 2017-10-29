<?
$start_clk_evt = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/create_bom/";
$end_clk_evt ="');";

$fnd_clk_evt = $start_clk_evt . $fnd_page . $end_clk_evt;
$crt_clk_evt = $start_clk_evt . $crt_page . $end_clk_evt;
?>

<div class="start_top">
	<div class="tabs">
		<div class="btn_reg">
			<div class="tab"><p class="text_only heading" onclick="<? echo $fnd_clk_evt ?>">Find Part</p></div>
			<div class="tab"><p class="text_only heading" onclick="<? echo $crt_clk_evt ?>">Create Part</p></div>
			<div class="tab_last d_selected_tabs"><p class="text_only heading">Match Part</p></div>
		</div>
	</div>
</div>