<?php

$str = "var data = Array(";
for ($i=0; $i<1000; $i++) {
	$str .= "Array ('foo', 'Cat', Array('www.foo.com', 'a link', 'Click Me') )";
	if ($i < 999) { $str .= ","; }
}
$str .= ");";

?>

<html>
<head>

<script type="text/javascript">
// --------------------------------------------------------------------------------
var t1 = new Date();
eval("<?=$str;?>");
var t2 = new Date();
// --------------------------------------------------------------------------------

var len = data.length;

// --------------------------------------------------------------------------------
var t3 = new Date();
for (var i=0; i<len; i++) {
	document.write(data[i][1]);
}
var t4 = new Date();
// --------------------------------------------------------------------------------

document.write ('<br/><br/>');
document.write ('Eval took:<br/>');
document.write ('<pre>');
document.write ('&nbsp;&nbsp;' + t2 + '<br/>');
document.write ('-&nbsp;' + t1 + '<br/>');
document.write ('------------------------------<br/>');
document.write ('&nbsp;&nbsp;' + (t2 - t1) + '<br/>');

document.write ('<br/><br/>');
document.write ('For loop took:<br/>');
document.write ('<pre>');
document.write ('&nbsp;&nbsp;' + t4 + '<br/>');
document.write ('-&nbsp;' + t3 + '<br/>');
document.write ('------------------------------<br/>');
document.write ('&nbsp;&nbsp;' + (t4 - t3) + '<br/>');
</script>

</head>

</html>