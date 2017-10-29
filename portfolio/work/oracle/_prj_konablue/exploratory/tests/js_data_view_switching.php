<html>

<head>

<link rel="stylesheet" type="text/css" href="./data_view_switching_assets/styles.css" />
<script type="text/javascript" src="./data_view_switching_assets/events.js"></script>
<script type="text/javascript" src="./data_view_switching_assets/data_generic.js"></script>
<script type="text/javascript" src="./data_view_switching_assets/data_viewer_class.js"></script>
<script type="text/javascript" src="./data_view_switching_assets/data_table_class.js"></script>
<script type="text/javascript" src="./data_view_switching_assets/data_items_class.js"></script>
<script type="text/javascript" src="./data_view_switching_assets/data_formatters.js"></script>

<script type="text/javascript">

	function handleOnload() {
		var tgt = document.getElementById("demo");
		var view_obj = new dataViewer();
		view_obj.setDataSource(data);
		view_obj.create();
		tgt.appendChild(view_obj.getRootObject());
		view_obj.displayAsTable();
	}

</script>

</head>

<body onload="handleOnload();">

<h2>One data set, two methods of display!</h2>
<div id="demo"></div>


</body>

</html>