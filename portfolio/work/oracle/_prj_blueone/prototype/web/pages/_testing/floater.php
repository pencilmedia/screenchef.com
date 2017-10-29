<!doctype html public "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<head>
<title>Floater</title>
	<link rel="stylesheet" type="text/css" href="/kb_phase_1/prototype/web/global/css/floater.css">
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/yui/dragdrop/dragdrop-min.js" ></script>
	<script type="text/javascript" src="/kb_phase_1/prototype/web/global/js/floater.js" ></script>
</head>
<body>
<p><a href="#" id="show_floater">Show Floater</a></p>
<form name="form1" action="javscript:;">
	<div id="floater_window">
		<div id="floater_handlebar"><a href="#" id="close_floater">X</a></div>
		<div id="floater_filter">Filter: <input type="text" id="floater_search_text" class="search" name="search" autocomplete="off" value="Test"/></div>
		<div id="floater_results_div"><ul id="floater_results_list"></ul></div>  
		<div id='floater_resize_handle'>&nbsp;</div>
	</div>     
</form>
</body>
</html>