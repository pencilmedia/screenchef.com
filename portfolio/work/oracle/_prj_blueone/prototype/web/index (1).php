<? require "rad/framework/inc/index_home.inc"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Agile Web Web</title>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="rad/framework/js/index_home.js"></script>
	
	<link rel="stylesheet" type="text/css" href="rad/framework/css/index_home.css" />
</head>
<body>
	<h1>Web</h1>
	<div class="container">
		<h4>Object Layouts (obj)</h4>
		<ul><? echo getAgileForms("pages/layouts","obj") ?></ul>
	</div>

	<div class="container">
		<h4>Common Dialogs (cmn)</h4>
		<ul><? echo getAgileForms("pages/dialogs","cmn") ?></ul>
	</div>

	<div class="container">
		<h4>Product Collaboration (pc)</h4>
		<ul><? echo getAgileForms("pages/dialogs","pc_") ?></ul>
	</div>

	<div class="container">
		<h4>Product Cost Managment (pcm)</h4>
		<ul><? echo getAgileForms("pages/dialogs","pcm") ?></ul>
	</div>

	<div class="container">
		<h4>Product Portfolio Management (ppm)</h4>
		<ul><? echo getAgileForms("pages/dialogs","ppm") ?></ul>
	</div>

	<div class="container">
		<h4>Product Quality Managment (pqm)</h4>
		<ul><? echo getAgileForms("pages/dialogs","pqm") ?></ul>	
	</div>

	<div class="container" style="clear: both; margin-top: 25px;">
		<h4>Sandbox</h4>
		<p><a href="../sandbox/" title="Sandbox Development">Go to Sandbox Development area</a></p>
	</div>

</body>
</html>