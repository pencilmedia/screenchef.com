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
	

	
		function getKC(evt) {
			if (window.event) {
				keycode   = window.event.keyCode;
			} else if (evt) {
				keycode   = evt.which;
			}
			return keycode;
		}
	

	
		function run() {			
			// Attach to test0
			var t0 = document.getElementById('test0');
			t0.onkeypress = function(event) { document.getElementById('test0').value = document.getElementById('test0').value + "  " + getKC(event) + "= "; };
			
			// Attach to test1
			var t1 = new YAHOO.util.KeyListener('test1', {keys:9, shift:true}, defaultCB);
			t1.enable();
			
			// Attach to test2
			var t2 = new AgileEventListener('test2', {keys:AgileConstants.KEY_CODE_ENTER}, defaultCB);
			t2.enable();
			t2.disableSelectionCanceling();
			
			// Attach to test3
			var t3 = new AgileEventListener('test3', {keys:AgileConstants.KEY_CODE_ENTER}, defaultCB, AgileBrowserEventConstants.KEY_UP);
			t3.enable();
			
			// Attach to test4
			var t4 = new AgileEventListener('test4', {keys:AgileConstants.KEY_CODE_ENTER, shift:true}, defaultCB);
			t4.enable();
			t4.disableSelectionCanceling();
			
			// Attach to test5
			var t5 = new AgileEventListener('test5', {keys:AgileConstants.KEY_CODE_CHAR_A, ctrl:true}, defaultCB);
			t5.enable();
			t5.disableSelectionCanceling();
			
			// Attach to test6
			var t6 = new AgileEventListener('test6', {ctrl: true}, defaultCB, null, AgileBrowserEventConstants.MOUSE_UP);
			t6.enable();

			// Attach to test7
			var t7 = new AgileEventListener('test7', {}, defaultCB, null, AgileBrowserEventConstants.MOUSE_UP);
			t7.enable();
			
			// Attach to test8
			var t8 = new AgileEventListener('test8', {}, defaultCB, null, AgileBrowserEventConstants.MOUSE_UP);
			t8.disableSelectionCanceling();
			t8.enable();

			// Attach to test7
			var t9 = new AgileEventListener('test9', {}, defaultCB, null, AgileBrowserEventConstants.MOUSE_DOUBLE_CLICK);
			t9.disableSelectionCanceling();
			t9.enable();


			if (typeof (window.AGILE_EVENT_BROADCASTER) == 'undefined') {
				window.AGILE_EVENT_BROADCASTER = new AgileGlobalEventBroadcaster();
			}
			
			
			function selectAllCB(obj) {
				alert('Agile select all event fired');
				alert(obj);
			}
			
			window.AGILE_EVENT_BROADCASTER.registerCallback(AgileEventConstants.EVENT_SELECT_ALL, selectAllCB);
			
			
			
			
			
			function testClass() {
				this.selectAllCB = function(obj) {
					alert("I heard the select all event too.");
					alert(obj);
				};
			}
			
			var tc = new testClass();
			
			window.AGILE_EVENT_BROADCASTER.registerCallback(AgileEventConstants.EVENT_SELECT_ALL, 'selectAllCB', tc);

		}
	</script>
	
	<style type="text/css">
		body {
			font-size: 12px;
			font-family: sans-serif;
		}
		textarea {
			width: 400px;
			height: 48px;
			display: block;
			margin: 0 0 20px 0;
			border: 1px solid #999;
		}
		ul.instructions {
			border: 1px solid #999;
			float: right;
			width: 170px;
			margin: 0;
			padding: 10px 10px 0 20px;
		}
		ul.instructions li {
			margin: 0 0 10px 0;
			padding: 0;
		}
	</style>
</head>
<body onload="run()">
	<ul class="instructions">
		<li>All events fire on the enter key, unless otherwise noted</li>
	</ul>

	<textarea id="test0">Press any key in here to see it's code.</textarea>
	
	<textarea id="test1">This textarea has a normal Yahoo key event</textarea>
	<textarea id="test2">This textarea has a normal Agile key event</textarea>
	<textarea id="test3">This textarea has an Agile key event that fires on key up, and also cancels text selections</textarea>
	<textarea id="test4">This textarea has an Agile key event that fires on shift + enter</textarea>
	<textarea id="test5">This textarea fires the "special" event SELECT_ALL</textarea>	

	<p>
		<a href="#" id="test6">ctrl click me</a>
	</p>

	<table>
		<tr>
			<td id="test7">
				Mouse Up ------ Remove selection ------ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</td>
		</tr>
		<tr>
			<td id="test8">
				Mouse Up ------ Normal ------ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</td>
		</tr>
		<tr>
			<td id="test9">
				Double CLick ------ Normal ------ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</td>
		</tr>
	</table>
	
</body>
</html>