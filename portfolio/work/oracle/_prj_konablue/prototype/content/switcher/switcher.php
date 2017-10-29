<script type="text/javascript" src="js/data.switcher.js"></script>
<script type="text/javascript" src="js/class.switcher.js"></script>
<link rel="stylesheet" type="text/css" href="css/switcher.css" />

<script type="text/javascript">

	function initSwitcher() {
		var switcher = new Switcher;
		switcher.create();
		switcher.createPrimaryTabs(tab_data);
		switcher.createShortcutPane(shortcut_data);
		switcher.createWindowPane(window_data);
		var sw_tgt = document.getElementById("switcher");
		sw_tgt.appendChild(switcher.getRootObject());
	}

	invo.event.addEvent(window, "load", initSwitcher, false);
	
</script>