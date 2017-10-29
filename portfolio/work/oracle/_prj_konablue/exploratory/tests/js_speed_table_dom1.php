<html>
<head>

<script type="text/javascript">

function doTable() {
	// --------------------------------------------------------------------------------
	var t1 = new Date();
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	for (var i=0; i<1000; i++) {
		var row = document.createElement("tr");
		var c1 = document.createElement("td");
		var s1 = document.createTextNode("foo");
		c1.appendChild(s1);
		var c2 = document.createElement("td");
		var s2 = document.createTextNode("foo");
		c2.appendChild(s2);
		var c3 = document.createElement("td");
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
	output += 'Table creation with no cloneNode took:<br/>';
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