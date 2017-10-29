<div id="create_bom_details" class="details" dojoType="SplitContainer" orientation="horizontal" sizerWidth="5" activeSizing="0" layoutAlign="client">
	
	<div class="form_input section" dojoType="ContentPane" sizeShare="50" layoutAlign="client" style="height: 100%; width: 50%;">
		<p><span class="tag">Name:</span><span id="prog_display_name_target" class="prog_display_name_target">Hydro-Pressure Aspiration Unit</span></p>
		<p><span class="tag">Ref des:</span><input type="text" class="text" /></p>
		<p><span class="tag">Quantity:</span><input type="text" class="text" value="1" /></p>
		<p><span class="tag">Notes:</span><textarea></textarea></p>
	</div>
	
	<div dojoType="LayoutContainer" layoutChildPriority='top-bottom' sizeShare="50" sizeMin="175" layoutAlign="client">
	
		<div class="btn_reg right" dojoType="ContentPane" sizeShare="0" layoutAlign="right">
			<a href="#" class="remove iconic" onclick="close_1_treelert('create_bom_details')"><em></em></a>
			<br />
		</div>
	
		<div class="cad" dojoType="ContentPane" sizeShare="100" layoutAlign="client">
			<span id="prog_display_image_target" class="prog_display_image_target"><img src="../../../../images/cad_phone.png" /></span>
		</div>
		
	</div>
</div>
