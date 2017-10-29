<div id="Header" class="header">
	<!--************************************
		HEADER
	*************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
			<ul class="breadcrumbs">
				<li><a href="#">Breadcrumb</a> &raquo;</li>
				<li>Breadcrumb</li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>Dashboard Configuration</h2>
			<p><strong>Program</strong> &bull; Dashboard Configuration</p>
		</div>
		<div class="column_two">
			<h2>In Process</h2>
			<p>[varies by object]</p>
		</div>
		<div class="column_three">
			<ul class="rating">
				<li class="traffic_red">Overall Status</li>
				<li class="traffic_green">Schedule Status</li>
				<li class="traffic_yellow">Cost Status</li>
				<li class="traffic_red">Resources Status</li>
				<li class="traffic_grey">Quality Status</li>
			</ul>
		</div>
	</div>
	 <!--************************************
		OBJECT LEVEL CONTROLS
	*************************************-->
	<div class="object_level_controls">
		<a href="#" class="button" id="cmdSave"><span>Save Configuration</span></a>
		<a href="#" class="button" id="cmdCancel"><span>Cancel</span></a>
	</div>
	</div>
</div>
<div id="PaneContent">
<div class="message info" id="dms">
    <p class="text"><span class="asterisk">*</span> Instructions place holder...</p>
</div>
		<form id="form1" name="form1" action="#" style="padding: 10px;">
        <fieldset class="dynamic">
			<ul class="widget_personalization left">
				<li id="i01" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w01" style="border:none" />
					<span class="x1"><a hef="#" id="cmdEdit_01">Edit</a></span>
					<span id="w01_text">Summary</span>
                    <span class="text_box"><input type="text" class="text_box" id="text_01" value="Summary" /></span>
					<div class="w_controller" id="w01_config_content">
						<img src="global/images/shuttle-2.png" />
					</div>
				</li>
				<li id="i02" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w02" />
					<span class="x1"><a hef="#" id="cmdEdit_02">Edit</a></span>
					<span id="w02_text">Upcoming Activities and Action Items</span>
                    <span class="text_box"><input type="text" class="text_box" id="text_02" value="Upcoming Activities and Action Items" /></span>
				</li>
				<li id="i03" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w03" />
					<span class="x1">
						<a hef="#" id="cmdEdit_03">Edit</a> 
					</span>
					<span id="w03_text" class="widget_title">Recent Discussion</span>
                    <span id="w03_box" class="text_box"><input type="text" class="text_box" id="text_03" value="Recent Discussion" /></span>
				</li>
			</ul>
			<ul class="widget_personalization right">
				<li id="i04" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w04" />
					<span class="x1"><a hef="#" id="cmdEdit_04">Edit</a></span>
					<span id="w04_text">Gate</span>
                    <span id="w04_box" class="text_box"><input type="text" class="text_box" id="text_04" value="Gate" /></span>
				</li>

				<li id="i05" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w05" />
					<span class="x1"><a hef="#" id="cmdEdit_05">Edit</a></span>
					<span id="w05_text">Content</span>
                    <span id="w05_box" class="text_box"><input type="text" class="text_box" id="text_05" value="Content" /></span>
				</li>
				<li id="i06" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w06" />
					<span class="x1"><a hef="#" id="cmdEdit_06">Edit</a></span>
					<span id="w06_text">News</span>
                    <span id="w06_box" class="text_box"><input type="text" class="text_box" id="text_06" value="News" /></span>
				</li>
				<li id="i07" class="groupItem selected">
					<div class="drag_handle">&nbsp;</div>
					<input type="checkbox" class="checkbox" checked="checked" id="w07" />
					<span class="x1"><a hef="#" id="cmdEdit_07">Edit</a></span>
					<span id="w07_text">Team Contact Info</span>
                    <span id="w07_box" class="text_box"><input type="text" class="text_box" id="text_07" value="Team Contact Info" /></span>
				</li>
			</ul>
        </fieldset>
		</form>

</div>
