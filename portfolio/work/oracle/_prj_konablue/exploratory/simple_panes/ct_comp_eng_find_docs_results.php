<script type="text/javascript">
	var table_headings = new Array("Document Name", "Document Owner", "Published Date", "Status");
	var table_data = new Array();
	table_data[0]  = new Array("My Document 1", "Joel Nave", "05/05/2006", "Pending");
	table_data[1]  = new Array("My Document 2", "Joel Nave", "05/05/2006", "Pending");
	table_data[2]  = new Array("My Document 3", "Joel Nave", "05/05/2006", "Pending");
	table_data[3]  = new Array("My Document 4", "Joel Nave", "05/05/2006", "Pending");
	table_data[4]  = new Array("My Document 5", "Joel Nave", "05/05/2006", "Pending");
	table_data[5]  = new Array("My Document 6", "Joel Nave", "05/05/2006", "Pending");
	table_data[6]  = new Array("My Document 7", "Joel Nave", "05/05/2006", "Pending");
	table_data[7]  = new Array("My Document 8", "Joel Nave", "05/05/2006", "Pending");
	table_data[8]  = new Array("My Document 9", "Joel Nave", "05/05/2006", "Pending");
	table_data[9]  = new Array("My Document 10", "Joel Nave", "05/05/2006", "Pending");
	table_data[10] = new Array("My Document 11", "Joel Nave", "05/05/2006", "Pending");
</script>

<div id="content">
	
	<div id="basic_content">
		<h3>Selected Document: Document 5</h3>
		<p>
			Document Owner: Joel Nave<br/>
			Published On: 05/05/2006
		</p>
		<p>
			<a href="#" onclick="ct_file = 'ct_comp_eng_route_doc_comment.php'; goPage(); return false;">Route for Comment</a><br/>
			If not yet submitted: <a href="#" onclick="ct_file = 'ct_comp_eng_route_doc_approval.php'; goPage(); return false;">Submit a change</a><br/>
			If workflow is in state ABC: <a href="#">Change State to XYZ</a><br/>
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
				<td><a href="#">Action 1</a></td>
			</tr>
		</table>
	</div>

</div>

<ul id="context_items" style="display:none;">
	<li><a href="#" onclick="ct_file = 'ct_comp_eng_route_doc_comment.php'; goPage(); return false;">Route for comment</a></li>
	<li><a href="#" onclick="ct_file = 'ct_comp_eng_route_doc_approval.php'; goPage(); return false;">Submit a change</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Reject document</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Select who to notify</a></li>
	<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Enter comments</a></li>
</ul>

<script type="text/javascript">
	loadData();
	
	function tempHighlight() {
		tbody = document.getElementById('table_body');
		children = tbody.childNodes;
		children[4].style.backgroundColor = "#ccf";
	}
	invo.event.addEvent(window, "load", tempHighlight, false);
	invo.event.addEvent(window, "load", function () { addContextItems('ut_documents_context', 'context_items'); } , false);
</script>