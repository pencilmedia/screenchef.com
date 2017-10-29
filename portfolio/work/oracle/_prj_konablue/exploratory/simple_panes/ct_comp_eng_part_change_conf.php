<div id="content">
	
	<div id="basic_content">
		<h3>Change ABC</h3>
		<form>
		<table id="msg_form" cellpadding="0" cellspacing="0" border="0";>
			<tr>
				<td class="label">Name:</td>
				<td>Change ABC</td>
			</tr>
			<tr>
				<td class="label">Label 2:</td>
				<td>Data</td>
			</tr>
			<tr>
				<td class="label">Label 3:</td>
				<td>Data</td>
			</tr>
			<tr>
				<td class="label">Label 4:</td>
				<td>Data</td>
			</tr>
		</table>
		</form>
	</div>

</div>

<ul id="context_items" style="display:none;">
	<li><a href="#" onclick="ct_file = 'ct_comp_eng_part_affected_items.php'; goPage(); return false;">View Affected Items</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">View Relationships</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">View Attachments</a></li>
</ul>
<script type="text/javascript">
	invo.event.addEvent(window, "load", function () { addContextItems('ut_parts_context', 'context_items'); } , false);
</script>