<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="../../global/css/default.css" />
	<script type="text/javascript" src="../../global/js/common.js"></script>
	<script type="text/javascript" src="../../global/js/action_dialog.js"></script>
	<title>Demo Page</title>
	<script type="text/javascript">
		function show(url)
		{
			newwindow=window.open(url,'name','width=525, height=600, resizable =1');
			if (window.focus) {newwindow.focus()}
		}
	</script>
	<style type="text/css">
		p { font-size: 16px; margin: 20px; }
	</style>
</head>
<body class="action_dialog">
	<p><a href="#" onclick="show('test1.php')">Test 1: Mixed Nuts</a></p>
</body>
</html>
