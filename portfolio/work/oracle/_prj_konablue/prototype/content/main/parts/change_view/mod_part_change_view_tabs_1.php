<?
$start_clk_evt = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/change_view/";
$end_clk_evt ="');";

$bom_clk_evt = $start_clk_evt . $bom_page . $end_clk_evt;
$att_clk_evt = $start_clk_evt . $att_page . $end_clk_evt;
?>

<div class="sub_tabs">
	<div class="tabs">
		<div class="btn_reg left">
			<div class="tab" onclick="<? echo $bom_clk_evt ?>"><p class="text_only heading">BOM</p></div>
			<div class="tab d_selected_tabs"><p class="text_only heading">Manfacturers</p></div>
			<div class="tab_last"><p class="text_only heading" onclick="<? echo $att_clk_evt ?>">Attachments</p></div>
		</div>
	</div>
</div>
