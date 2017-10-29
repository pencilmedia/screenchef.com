<?php
//header("Location: ./design/exploratory/index.php");
//exit;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Agile UX Demo</title>
<script>
	window.onload = function()
	{
		var msg = 	'Agile UX\n';
		msg += 		'Table Interaction\n';
		msg +=		'Contact: Brian Cipresse\n';
		msg +=		'Email: brian.cipresse@agile.com';
		alert(msg);
	}
</script>
</head>
<frameset rows="0,*" frameborder="no" border="0" framespacing="0">
  <frame src="/kb_phase_1/prototype/web/pages/_testing/testTable.php" name="ux" id="ux" />
  <frame src="/kb_phase_1/prototype/web/pages/_testing/testTable.php" name="uxdemo" scrolling="No" noresize="noresize" id="uxdemo" />
</frameset>
<noframes><body>
</body>
</noframes></html>