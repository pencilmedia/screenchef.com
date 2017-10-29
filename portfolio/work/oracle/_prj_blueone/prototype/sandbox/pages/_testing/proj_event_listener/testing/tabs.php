<?
	$yuiResources   = "global/js/yui/";
	$localResources = "./";
?>
<html>
<head>
	<title>Trapping Keyboard and Mouse Events</title>
	
	<!-- INCLUDE YAHOO CLASSES -->
	<script type="text/javascript" src="<?=$yuiResources;?>yahoo/yahoo.js"></script> 
	<script type="text/javascript" src="<?=$yuiResources;?>event/event.js"></script> 
	<script type="text/javascript" src="<?=$yuiResources;?>dom/dom.js"></script>
	

	<!-- INCLUDE YAHOO STYLES -->


	<!-- INCLUDE AGILE CUSTOM CLASSES -->
	<script type="text/javascript" src="<?=$localResources;?>BrowserDetect.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileConstants.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileUtilFunctions.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileGlobalEventBroadcaster.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileGlobalModifierStorage.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileGlobalTextSelectionHandler.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileEventListener.js"></script>
	

	<!-- INCLUDE AGILE CUSTOM STYLES -->
	

	<!-- INCLUDE DEMO RELATED SCRIPTS AND STYLES -->
	
	
	<script type="text/javascript">
	/*
		For reference

		agile_obj['event'] = The event that started everything.
		agile_obj['y_obj'] = Some Yahoo object (usually the trigger, sometimes empty)
		agile_obj['modifiers'] = Dictionary of modifiers at time of event
		agile_obj['source_obj'] = The triggering object (possibly different than the attachTo object)
		agile_obj['attach_obj'] = The object the event was attached to, if any
		agile_obj['keycode'] = A key code, if any
	*/
	
	
		// Our default callback
		function defaultCB(e, obj) {
			alert(e);
			alert(obj);
			var agile_obj = obj[1];
			var str = "event = " + agile_obj['event'];
			str += " y_obj = " + agile_obj['y_obj'];
			str += " modifiers = " + agile_obj['modifiers'];
			str += " source_obj = " + agile_obj['source_obj'];
			str += " attach_obj = " + agile_obj['attach_obj'];
			str += " keycode = " + agile_obj['keycode'];
			alert(str);
		}
	
	

	
		function run() {			
			
			if (typeof (window.AGILE_EVENT_BROADCASTER) == 'undefined') {
				window.AGILE_EVENT_BROADCASTER = new AgileGlobalEventBroadcaster();
			}
			
			
			function tabCB(obj) {
				var t = document.getElementById('foo');
				t.value = "tab fired";
				setTimeout("document.getElementById('foo').focus();",0);
			}
			
			function shiftTabCB(obj) {
				var t = document.getElementById('foo');
				t.value = "shift tab fired";
				setTimeout("document.getElementById('foo').focus();",0);
			}
			
			window.AGILE_EVENT_BROADCASTER.registerCallback(AgileEventConstants.EVENT_TAB, tabCB);
			window.AGILE_EVENT_BROADCASTER.registerCallback(AgileEventConstants.EVENT_SHIFT_TAB, shiftTabCB);
			
		}
	</script>
	
	<style type="text/css">
		body {
			font-size: 12px;
			font-family: sans-serif;
		}
	</style>
</head>
<body onload="run()">

	<form tabindex="-1">
		<input type="text" tabindex="-1" /><br/>
		<input type="text" tabindex="-1" /><br/>
		<input type="text" tabindex="-1" /><br/>
	</form>

	<form>
		<input type="text" id="foo" value="focus always goes to me" size="50" />
	</form>
	
	
	
</body>
</html>