<?
$start_clk_evt = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/change_view/";
$end_clk_evt ="');";

$mfr_clk_evt = $start_clk_evt . $mfr_page . $end_clk_evt;
$att_clk_evt = $start_clk_evt . $att_page . $end_clk_evt;
?>

<div class="sub_tabs">
	<div class="tabs">
		<div class="btn_reg left">
			<div class="tab d_selected_tabs"><p class="text_only heading">BOM</p></div>
			<div class="tab"><p class="text_only heading" onclick="<? echo $mfr_clk_evt ?>">Manfacturers</p></div>
			<div class="tab_last"><p class="text_only heading" onclick="<? echo $att_clk_evt ?>">Attachments</p></div>
		</div>
	</div>
</div>
