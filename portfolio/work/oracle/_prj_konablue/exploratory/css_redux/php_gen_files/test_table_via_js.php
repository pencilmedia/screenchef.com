<html>
<head>
<script language="javascript">
var rowArray = new Array;
<? for ($i=0; $i<10; $i++) : ?>
	rowArray[<?=$i;?>] = new Array;
	<? for ($j=0; $j<30; $j++) : ?>
		rowArray[<?=$i;?>]['data<?=$j;?>'] = "<div><a href='#alink'>row=<?=$i;?> : col=<?=$j;?></a></div>";
	<? endfor; ?>
<? endfor; ?>

var theTable;
var counter = 0;
var timer;

function dumpRows2Table(idx, offset) {
	var theRows = new Array;
	for (var i=0; i<offset; i++) {
		theRows[i] = createRow(i);
	}
	for (var j=0; j<theRows.length; j++) {
		theTable.appendChild(theRows[j]);
	}
}

function createRow(idx) {
	var aRow = document.createElement("TR");
	for (var i=0; i<30; i++) {
		var tmp = document.createElement("TD");
		tmp.style.whiteSpace = "nowrap";
		tmp.innerHTML = rowArray[idx]['data' + i];
		aRow.appendChild(tmp);
	}
	return (aRow);
}

function getTable() {
	theTable = document.getElementById('demo');
}

function lazyLoad() {
	timer = setTimeout("doDump()", 10);
}

function doDump() {
	if (counter < 10) {
		dumpRows2Table((counter * 10), 10);
		counter++;
		timer = setTimeout("doDump()", 10);
	} else {
		clearTimeout(timer);
	}
}

</script>
</head>
<body onload="getTable();lazyLoad();">

<!--<a href="javascript:dumpRows2Table(0, 10);">Add rows</a>-->

<table id="demo" cellpadding="3" cellspacing="0" border="1">
	<tr>
		<? for ($i=1; $i<31; $i++) : ?>
		<th>column <?=$i;?></th>
		<? endfor; ?>
	</tr>
</table>


</body>
</html>