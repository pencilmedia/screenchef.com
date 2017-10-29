<?
$pge_link_start = "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/save_bom_as/";
$pge_link_end = "');";

$flr_clk_evt = $pge_link_start . $flr_page . $pge_link_end;
$nxt_clk_evt = $pge_link_start . $nxt_page . $pge_link_end;
?>

<div class="input_bar">
	<div class="btn_reg left input_bar_textbox">
		<p class="left"><input type="text" class="text search_again" name="" value=""></p>
		<p class="left"><a href="#" class="glass iconic" onclick="<? echo $flr_clk_evt ?>"><em></em></a></p>
		<p class="left">
			<a href="#" class="prev" onclick=""><em></em>Prev</a>
			<a href="#" class="next iconic" onclick="<? echo $nxt_clk_evt ?>"><span class="left">Next</span><em></em></a>
		</p>
	</div>
</div>
