<html>

<head>

<!--
	A big honkin style definition. I am sure lots of this is unneccesary, so
	feel free to couple only the CSS you need to go with the widget.
-->
	<style type="text/css">
		#content {
			width: 700px;
			height: 500px;
			border: 1px solid #ccc;
			position: absolute;
		}

		#basic_content {
			width: 100%;
			height: 50%;
			position: absolute;
			top: 0px;
			left: 0px;
		}

		#table_container {
			height: 50%;
			width: 100%;
			position: absolute;
			bottom: 0px;
			left: 0px;
			overflow: hidden;
		}

		
		#table_heading_container {
			width: 100%;
			position: absolute;
			left: 0px;
			background: #ccc;
			overflow: hidden;
		}
		
		#table_footing_container {
			width: 100%;
			position: absolute;
			left: 0px;
			background: #ccf;
		}
		

		.standard_table_footing {
			width: 100%;
			position: relative;
		}
		
		.standard_table_heading,
		.standard_table_content {
			position: relative;		
		}
		
		.standard_table_heading,
		.standard_table_footing {
			padding-right: 15px;
		}
		
		td, th {
			padding: 3px;
			text-align: left;
		}
		
		th {
			background: #ccc;
		}
		
		
		#table_vertical_scrollbar { 
			width: 11px; 
			height: 100%;
			position: absolute;
			top: 272px;
			left: 700px; 
		}
		#table_vertical_scrollbar_top  { float: left; }
		#table_vertical_scrollbar_bottom { float: right; }
		#table_vertical_scrollbar_center {
			margin: 0px 10px 0px 10px;
		}


		#table_horizontal_scrollbar { 
			height: 11px; 
			width: 100%;
			position: absolute;
			top: 520px;
			left: 0px; 
		}
		#table_horizontal_scrollbar_left  { float: left; }
		#table_horizontal_scrollbar_right { float: right; }
		#table_horizontal_scrollbar_center {
			margin: 0px 10px 0px 10px;
		}

		#dot1, #dot2 {
			width: 10px;
			height: 10px;
			background: url('images/sliders/proto_dot.png') no-repeat top left;
			position: relative;
			top: 0;
			left: 0;
		}
		
		.draggable {
			position: absolute;
			cursor: pointer;
		}
			
	</style>

<!-- 
	Some of the metrics, etc depend on this stuff. It is more than likely
	that we will need to build out Agile libraries, so if we can keep functions
	that deal with sizes and DOM manipulation isolated, that will make the
	process easier.
-->
	<script type="text/javascript" src="js/invo.main.js"></script>
	<script type="text/javascript" src="js/invo.lang.js"></script>
	<script type="text/javascript" src="js/invo.dom.js"></script>
	<script type="text/javascript" src="js/invo.metrics.js"></script>
	<script type="text/javascript" src="js/invo.event.js"></script>
	<script type="text/javascript" src="js/invo.dnd.js"></script>


	<script type="text/javascript">

		/*
			This is sample data. This will become whatever the eventual data
			structure is determined to be, and will come directly from the 
			server in AJAX or whatever
		*/
		var table_headings = new Array("Discussion Name", "Heading 2", "Heading 3");
		var table_data = new Array();
		table_data[0] = new Array("Discussionsdfsdfsdfsdf", "sdfsdfsdfsdfsdfsdfsd 2", "Dassdfsddssdfsdfsdfsdfsdsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfsdfsdfdsfsdfsdfsdfsdffdsfsdfsdfsdfsdfsdfaasdta 3");
		table_data[1] = new Array("Data 1", "Data 2", "asdasdasasd 3");
		table_data[2] = new Array("Data 1", "Data 2", "Data 3");
		table_data[3] = new Array("Data 1", "Data 2", "Data 3");
		table_data[4] = new Array("Data 1", "Data 2", "Data 3");
		table_data[5] = new Array("Data 1", "Data 2", "Data 3");
		table_data[6] = new Array("Data 1", "Data 2", "Data 3");
		table_data[7] = new Array("Data 1", "Data 2", "Data 3");
		table_data[8] = new Array("Data 1", "Data 2", "Data 3");
		table_data[9] = new Array("Data 1", "Data 2", "Data 3");
		table_data[10] = new Array("Data 1", "Data 2", "dsfsdfsdsdfsd 3");


		/*
			These are all transient vars used to size the table, etc.
			Ideally, these would be class member variables for a table class
		*/
		var outer_height = null;
		var footing_height = null;
		var content_height = null;
		var content_width = null;
		var table_height = null;
		var table_width = null;
		var max_table_scroll_x = null;
		var max_table_scroll_y = null;
		var heading_widths = new Array();
		
		
		/*
			These are the variables for highlighting rows and columns. These
			need to move into CSS classes.
		*/
		var row_highlight_color = "#ffc";
		var row_selected_color = "#fca";
		var row_off = "none";
		var col_off = "#ccc";
		var selected_rows = new Array();
		var selected_columns = new Array();
		

		/*
			For now, this just reads the arrays. Eventually, we can swap in
			a "real" function that fills out table sbased on whatever the
			data structure ends up looking like.
		*/
		function loadData() {
			if (table_headings) {
				var row = document.createElement("tr");
				for (var i=0; i<table_headings.length; i++) {
					var cell = document.createElement("th");
					invo.event.addEvent(row, "mouseover", function() { highlightColumn(this); } , false);
					invo.event.addEvent(row, "mouseout", function() { unhighlightColumn(this); } , false);
					invo.event.addEvent(cell, "click", function() { selectColumn(this); } , false);
					var text = document.createTextNode(table_headings[i]);
					cell.appendChild(text);
					row.appendChild(cell);
				}
			}
			document.getElementById("table_head").appendChild(row);
			
			if (table_data) {
				for (var i=0; i<table_data.length; i++) {
					var row = document.createElement("tr");
					invo.event.addEvent(row, "mouseover", function() { highlightRow(this); } , false);
					invo.event.addEvent(row, "mouseout", function() { unhighlightRow(this); } , false);
					invo.event.addEvent(row, "click", function() { selectRow(this); } , false);
					for (var j=0; j<table_data[i].length; j++) {
						var cell = document.createElement("td");
						var text = document.createTextNode(table_data[i][j]);
						cell.appendChild(text);
						row.appendChild(cell);
					}
					document.getElementById("table_body").appendChild(row);
				}
			}
			
		}
		

		/*
			This is the heavy lifter.
			
			First it loads the data so that sizes of columns, etc can be 
			computed.
			
			Then it does a bunch of size manipulation to set the header widths
			and whatnot. Ideally, that should be moved elsewhere and called
			from here at construction time.
		*/
		function initTable() {
			// Laod data
			loadData();

			// Get metrics of the containing and related elements
			outer_height = invo.metrics.getObjectHeight('table_container');
			footing_height = invo.metrics.getObjectHeight('table_footing_container');
			content_height = outer_height - footing_height;
			content_width = invo.metrics.getObjectWidth('table_container');
			
			// Get metrics of the table elements
			document.getElementById('table_content').style.width = invo.metrics.getObjectWidth('table_content') + "px";
			table_height   = invo.metrics.getObjectHeight('table_content');
			table_width    = invo.metrics.getObjectWidth('table_content');

			// Position the footer (button bar)
			document.getElementById("table_footing_container").style.bottom = "0px";
			
			// Used for calculating scrolling
			max_table_scroll_x = content_width;
			max_table_scroll_y = content_height;
			
			// "Magic" function to set widths of heading elements, then enable
			// them to scroll only in the horizontal direction
			if (document.getElementById("table_head")) {
				var children = document.getElementById("table_head").childNodes;
				if (children) {
					children = children[0].childNodes;
				}
				for (var i=0; i<children.length; i++) {
					var j = i + 1;
					if (children[j]) {
						children[i].style.width = children[j].offsetLeft - children[i].offsetLeft - 6 + "px";
					} else {
						children[i].style.width = invo.metrics.getObjectWidth('table_content') - children[i].offsetLeft - 6 + "px";
					}
					children[i].style.left = children[i].offsetLeft + "px";
				}
				for (var i=0; i<children.length; i++) {
					children[i].style.position = "absolute";
				}
				document.getElementById("table_head").style.position = "absolute";
				document.getElementById("table_head").style.top = "0px";
			}
			
			
		}
		

		/*
			Callback function to move the vert slider
		*/
		function moveVerticalSlider() {
			evt = invo.dnd.getDragEvent();
			var x = invo.event.getEventX(evt);
			var y = invo.event.getEventY(evt);
			if (y >= 272 && y <= (272 + max_table_scroll_y)) {
				invo.dnd.moveDragObject(null, true);
				if (table_height > content_height) {
					invo.metrics.setObjectTop(document.getElementById("table_content"), (0 - Math.round( ( (table_height - content_height) / content_height) * y) ) + 70); //22 is heading height
				}
			}
		}
		
		
		/*
			Callback function to move the horizontal slider
		*/
		function moveHorizontalSlider() {
			evt = invo.dnd.getDragEvent();
			var x = invo.event.getEventX(evt);
			var y = invo.event.getEventY(evt);
			if (x > 0 && x <= (700)) {
				invo.dnd.moveDragObject(true, null);
				if (table_width > content_width) {
					invo.metrics.setObjectLeft(document.getElementById("table_content"), (0 - Math.round( ( (table_width - content_width) / content_width) * x) ) );
				}
			}
		}
		

		/*
			From here down are simply decorative functions that handle the
			highlighting of elements in the table.
			
			1) They should be separated from teh functional parts that deals
			with storing rows and columns for selection that would submit data
			to the server.
			
			2) They need to be a lot more generic.
			
			3) They should be assigned as events to the rows and columns
			by the class that builds the table.
		*/
		function highlightRow(row) {
			var row_id = selected_rows.inArrayIdx(row);
			if (row_id < 0) {
				row.style.background = row_highlight_color;
			}
			row.style.cursor = "pointer";
		}
		
		function unhighlightRow(row) {
			var row_id = selected_rows.inArrayIdx(row);
			if (row_id < 0) {
				row.style.background = row_off;
			}
		}
		
		function selectRow(row) {
			if (selected_columns.length) {
				while (selected_columns.length) {
					selectColumn(selected_columns[0]);
				}
			}
			
			var row_id = selected_rows.inArrayIdx(row);
			if (row_id < 0) {
				row.style.background = row_selected_color;
				selected_rows[selected_rows.length] = row;
			} else {
				var tmp = selected_rows.splice(row_id, 1);
				unhighlightRow(row);
			}
		}
		
		function highlightColumn(heading) {
			heading.style.background = row_highlight_color;
			heading.style.cursor = "pointer";
		}
		
		function unhighlightColumn(heading) {
			heading.style.background = col_off;
		}	
		
		function selectColumn(heading) {
			if (selected_rows.length) {
				while (selected_rows.length) {
					selectRow(selected_rows[0]);
				}
			}
			
			var column_id = selected_columns.inArrayIdx(heading);
			var parent = heading.parentNode;
			var idx = null;
			for (var i=0; i<parent.childNodes.length; i++) {
				if (parent.childNodes[i] == heading) {
					idx = i;
					continue;
				}
			}
			
			if (column_id < 0) {
				use_color = row_selected_color;
				selected_columns[selected_columns.length] = heading;
			} else {
				use_color = row_off;
				var tmp = selected_columns.splice(column_id, 1);
			}

			if (document.getElementById("table_body")) {
				var children = document.getElementById("table_body").childNodes;
				if (children) {
					for (var i=0; i<children.length; i++) {
						children[i].childNodes[idx].style.background = use_color;
					}
				}
			}
		}
	</script>


</head>

<!-- Bind the onload as a document event if table class is used; not here -->
<body onload="initTable();">

<div id="content">

<!-- Other content for illustrative purposes -->
	<div id="basic_content">
		<p>Insert your major content here</p>
	</div>

<!-- The table -->
	<div id="table_container">

		<table cellpadding="0" cellspacing="0" id="table_content" class="standard_table_content" style="margin-top:22px;">
			<thead id="table_head" style="z-index: 10;"></thead>
			<tbody id="table_body" style="position:relative;"></tbody>
		</table>
		
	</div>

<!-- A basic footing (button bar) -->
	<div id="table_footing_container">
		<table cellpadding="0" cellspacing="0" class="standard_table_heading">
			<tr>
				<td>hi</td>
			</tr>
		</table>
	</div>

</div>

<!--
	These are the scrollbar containers. Eventually they will need up/down 
	arrows and whatnot, as well as being positioned within the table to make
	it look realisitc. No more of my sloppy css locations. Also, some 
	functionality to determine if they are needed would be appropriate.
-->
<div id="table_vertical_scrollbar">
	<div id="table_vertical_scrollbar_center"><div 
		id="dot1" name="dot1" 
		class="draggable" unselectable="on"
		ondragstart="invo.dnd.startDnD(event, moveVerticalSlider);"
		onmousedown="invo.dnd.startDnD(event, moveVerticalSlider);"></div>
	</div>
</div>

<div id="table_horizontal_scrollbar">
	<div id="table_horizontal_scrollbar_center"><div 
		id="dot2" name="dot2" 
		class="draggable" unselectable="on"
		ondragstart="invo.dnd.startDnD(event, moveHorizontalSlider);"
		onmousedown="invo.dnd.startDnD(event, moveHorizontalSlider);"></div>
	</div>
</div>

</body>

</html>