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
	for (var i=0; i<1000; i++) {
		var row = document.createElement("tr");
		var c1 = document.createElement("td");
		c1.className = "c1";
		var s1 = document.createTextNode("foo");
		c1.appendChild(s1);
		var c2 = document.createElement("td");
		c2.className = "c2";
		var s2 = document.createTextNode("foo");
		c2.appendChild(s2);
		var c3 = document.createElement("td");
		c3.className = "c3";
		var s3 = document.createTextNode("foo");
		c3.appendChild(s3);
		row.appendChild(c1);
		row.appendChild(c2);
		row.appendChild(c3);
		tbody.appendChild(row);
	}
	var t2 = new Date();
	// --------------------------------------------------------------------------------
	
	
	var t3 = new Date();
	document.getElementById("myDiv").appendChild(table);
	var t4 = new Date();
	
	var output = "";
	output += '<br/><br/>';
	output += 'Table creation with no cloneNode + className took:<br/>';
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