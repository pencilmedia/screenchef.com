<!DOCTYPE html>
<html lang="en">
	<head>
		<title>UI Sortable: Layout Demo</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<meta name="title" content="UI Sortable: Layout Demo" />
		<meta name="description" content="A sortable layout created with the jQuery UI suite" />
		<link rel="shortcut icon" href="http://jquery.com/favicon.ico" />
		<link rel="icon" href="http://jquery.com/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" href="test.css" type="text/css" media="screen" />
		<script type="text/javascript" src="http://ui.jquery.com/js/jquery.js"></script>
		<script type="text/javascript" src="http://ui.jquery.com/js/ui.js"></script>
		<script type="text/javascript" src="test.php.js"></script>
	</head>
	
	<body id="uidemo">
	
		<div id="container">
			<div id="header" class="ui-sortable">
				<dl class="sort">
					<dt>Widget I</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>
			
			<div id="content" class="ui-sortable">
				<dl class="sort">
					<dt>Widget II</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>
			
			<div id="sidebar" class="ui-sortable">
				<dl class="sort">
					<dt>Widget III</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>

			<div class="clear"></div>
			
			<div id="footer" class="ui-sortable">
				<dl class="sort">
					<dt>Widget IV</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>			
			
			<div class="clear"></div>

			<div id="content2" class="ui-sortable">
				<dl class="sort">
					<dt>Widget V</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>
			
			<div id="sidebar2" class="ui-sortable">
				<dl class="sort">
					<dt>Widget VI</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>
			
			<div class="clear"></div>
			
			<div id="footer2" class="ui-sortable">
				<dl class="sort">
					<dt>Widget VII</dt>
					<dd>Lorem Ipsum...</dd>
				</dl>
			</div>
		</div>


		<!--
		<div id="trashcan" class="ui-sortable">
			<h2>Trash can</h2>
			<p>Drag modules here to delete them.</p>
		</div>
		-->
		
		
		
		<div class="clear"></div>
		<div id="overlay">
			<div id="preloader"><img src="http://ui.jquery.com/repository/real-world/layout/loader.gif" alt="" /></div>
		</div>
		
</body>
</html>