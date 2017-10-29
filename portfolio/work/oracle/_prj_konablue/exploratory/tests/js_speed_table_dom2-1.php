<html>
<head>

<script type="text/javascript">

function doTable() {
	// --------------------------------------------------------------------------------
	var t1 = new Date();
	var table = document.createElement("table");
	table.className = "myTable";
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	var row = document.createElement("tr");
	var cell1 = document.createElement("td");
	cell1.className = "c1";
	var cell2 = document.createElement("td");
	cell2.className = "c2";
	var cell3 = document.createElement("td");
	cell3.className = "c3";
	for (var i=0; i<1000; i++) {
		var r1 = row.cloneNode(false);
		var c1 = cell1.cloneNode(false);
		var s1 = document.createTextNode("foo");
		c1.appendChild(s1);
		var c2 = cell2.cloneNode(false);
		var s2 = document.createTextNode("foo");
		c2.appendChild(s2);
		var c3 = cell3.cloneNode(false);
		var s3 = document.createTextNode("foo");
		c3.appendChild(s3);
		r1.appendChild(c1);
		r1.appendChild(c2);
		r1.appendChild(c3);
		tbody.appendChild(r1);
	}
	var t2 = new Date();
	// --------------------------------------------------------------------------------

	var t3 = new Date();
	document.getElementById("myDiv").appendChild(table);
	var t4 = new Date();
	
	var output = "";
	output += '<br/><br/>';
	output += 'Table creation with cloneNode + className took:<br/>';
	output += '<pre>';
	output += '&nbsp;&nbsp;' + t2 + '<br/>';
	output += '-&nbsp;' + t1 + '<br/>';
	output += '------------------------------<br/>';
	output += '&nbsp;&nbsp;' + (t2 - t1) + '<br/>';
	
	output += '<br/><br/>';
	output += 'Table append to div took:<br/>';
	output += '<pre>';
	output += '&nbsp;&nbsp;' + t4 + '<br/>';
	output += '-&nbsp;' + t3 + '<br/>';
	output += '------------------------------<br/>';
	output += '&nbsp;&nbsp;' + (t4 - t3) + '<br/>';
	
	document.getElementById("oDiv").innerHTML = output;

}
</script>

<style type="text/css">
	table.myTable { border: 1px solid #666; }
	td.c1 { background: #ccc; }
	td.c2 { background: #aaa; }
	td.c3 { background: #888; }
</style>

</head>

<body onload="doTable();">

<div id="oDiv"></div>

<div id="myDiv"></div>

</body>

</html>