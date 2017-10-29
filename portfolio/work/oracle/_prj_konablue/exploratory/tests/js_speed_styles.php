<html>
<head>

<script type="text/javascript">

function doStyles() {
	var d1 = document.getElementById("foo");
	var d2 = document.getElementById("bar");
	var d3 = document.getElementById("baz");

	var t1 = new Date();
	for (var i=0; i<1000; i++) {
		d1.className = "c1";
	}
	var t2 = new Date();

	var t3 = new Date();
	for (var i=0; i<1000; i++) {
		d2.style.background = "#ccc";
	}
	var t4 = new Date();

	var t5 = new Date();
	for (var i=0; i<1000; i++) {
		d3.setAttribute("style","background:#ccc;");
	}
	var t6 = new Date();

	var output = "";
	output += '<br/><br/>';
	output += 'div.className took:<br/>';
	output += '<pre>';
	output += '&nbsp;&nbsp;' + t2 + '<br/>';
	output += '-&nbsp;' + t1 + '<br/>';
	output += '------------------------------<br/>';
	output += '&nbsp;&nbsp;' + (t2 - t1) + '<br/>';
	
	output += '<br/><br/>';
	output += 'div.style.background took:<br/>';
	output += '<pre>';
	output += '&nbsp;&nbsp;' + t4 + '<br/>';
	output += '-&nbsp;' + t3 + '<br/>';
	output += '------------------------------<br/>';
	output += '&nbsp;&nbsp;' + (t4 - t3) + '<br/>';
	
	output += '<br/><br/>';
	output += 'div.setAttribute(background) took:<br/>';
	output += '<pre>';
	output += '&nbsp;&nbsp;' + t6 + '<br/>';
	output += '-&nbsp;' + t5 + '<br/>';
	output += '------------------------------<br/>';
	output += '&nbsp;&nbsp;' + (t6 - t5) + '<br/>';
	
	document.getElementById("oDiv").innerHTML = output;
}

</script>

<style type="text/css">
	div.c1 { background: #ccc; }
</style>

</head>

<body onload="doStyles();">

<div id="oDiv"></div>

<div id="foo">text</div>

<div id="bar">text</div>

<div id="baz">text</div>

</body>

</html>