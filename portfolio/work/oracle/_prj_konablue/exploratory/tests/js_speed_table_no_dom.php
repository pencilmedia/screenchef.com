<html>
<head>

<script type="text/javascript">

function doTable() {
	// --------------------------------------------------------------------------------
	var t1 = new Date();
	var str = "<table><tbody>";
	for (var i=0; i<1000; i++) {
		str += "<tr>";
		str += "<td>foo</td>";
		str += "<td>foo</td>";
		str += "<td>foo</td>";
		str += "</tr>";
	}
	str += "</tbody></table>";
	var t2 = new Date();
	// --------------------------------------------------------------------------------
	
	var t3 = new Date();
	document.getElementById("myDiv").innerHTML = str;
	var t4 = new Date();
	
	var output = "";
	output += '<br/><br/>';
	output += 'Table creation with str took:<br/>';
	output += '<pre>';
	output += '&nbsp;&nbsp;' + t2 + '<br/>';
	output += '-&nbsp;' + t1 + '<br/>';
	output += '------------------------------<br/>';
	output += '&nbsp;&nbsp;' + (t2 - t1) + '<br/>';
	
	output += '<br/><br/>';
	output += 'innerHTML to div took:<br/>';
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