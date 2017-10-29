<script type="text/javascript">
	var table_headings = new Array("RFI", "RFI Details", "Status", "Column4");
	var table_data = new Array();
	table_data[0]  = new Array("RFI 1", "Lorem ipsum dolor sit amet", "Overdue", "Data");
	table_data[1]  = new Array("RFI 2", "Etiam leo purus, varius ut", "Pending", "Data");
	table_data[2]  = new Array("RFI 3", "In nec libero", "Pending", "Data");
	table_data[3]  = new Array("RFI 4", "Pellentesque tempor", "Overdue", "Data");
</script>

<div id="content">
	
	<div id="basic_content">
		<h3>Selected Contact: Ben Listwon</h3>
		<p>
			Role: Supplier<br/>
			Group: Parts Co.<br/>
		</p>
	</div>

	<div id="table_container">

		<table cellpadding="0" cellspacing="0" id="table_content" class="standard_table_content">
			<thead id="table_head" style="z-index: 10;"></thead>
			<tbody id="table_body" style="position:relative;"></tbody>
		</table>
		
	</div>

	<div id="table_footing_container">
		<table cellpadding="0" cellspacing="0" class="standard_table_heading">
			<tr>
				<td><a href="#" onclick="ct_file = 'ct_comp_eng_rfi_form.php'; goPage(); return false;">Expedite</a></td>
				<td><a href="#">Close</a></td>
				<td><a href="#">Discuss</a></td>
			</tr>
		</table>
	</div>

</div>

<ul id="context_items" style="display:none;">
	<li><a href="#" onclick="ct_file = 'ct_comp_eng_route_doc_comment.php'; goPage(); return false;">View RFIs</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">View PSRs</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Escalate approval</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Send alert</a></li>
</ul>
<script type="text/javascript">
	loadData();
	
	function tempHighlight() {
		tbody = document.getElementById('table_body');
		children = tbody.childNodes;
		children[0].style.backgroundColor = "#ccf";
		children[3].style.backgroundColor = "#ccf";
	}
	invo.event.addEvent(window, "load", tempHighlight, false);
	invo.event.addEvent(window, "load", function () { addContextItems('ut_documents_context', 'context_items'); } , false);
</script>