<html>
<head>

<script type="text/javascript">

function doTable() {
	// --------------------------------------------------------------------------------
	var t1 = new Date();
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	var row = document.createElement("tr");
	var cell = document.createElement("td");
	for (var i=0; i<1000; i++) {
		var r1 = row.cloneNode(false);
		var c1 = cell.cloneNode(false);
		var s1 = document.createTextNode("foo");
		c1.appendChild(s1);
		var c2 = cell.cloneNode(false);
		var s2 = document.createTextNode("foo");
		c2.appendChild(s2);
		var c3 = cell.cloneNode(false);
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
	output += 'Table creation with cloneNode took:<br/>';
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

</head>

<body onload="doTable();">

<div id="oDiv"></div>

<div id="myDiv"></div>

</body>

</html>