<script type="text/javascript">
	var table_headings = new Array("User Name", "Department");
	var table_data = new Array();
	table_data[0]  = new Array("Joel Nave", "Design");
	table_data[1]  = new Array("Joel Nave", "Design");
	table_data[2]  = new Array("Joel Nave", "Design");
	table_data[3]  = new Array("Joel Nave", "Design");
	table_data[4]  = new Array("Joel Nave", "Design");
</script>

<div id="content">
	
	<div id="basic_content">
		<h3>Selected Document: Document 5</h3>
		<p>
			Document Owner: Joel Nave<br/>
			Published On: 05/05/2006
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
				<td><a href="#" onclick="ct_file = 'ct_comp_eng_route_doc_comment_2.php'; goPage(); return false;">Send to Selected Users</a></td>
			</tr>
		</table>
	</div>

</div>

<script type="text/javascript">
	loadData();
	
	function tempHighlight() {
		tbody = document.getElementById('table_body');
		children = tbody.childNodes;
		children[2].style.backgroundColor = "#ccf";
	}
	invo.event.addEvent(window, "load", tempHighlight, false);
</script>