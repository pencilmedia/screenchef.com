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
	<script type="text/javascript" src="<?=$localResources;?>AgileGlobalTextSelectionHandler.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileEventListener.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileEventProxy.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileListenerProxy.js"></script>
	

	<!-- INCLUDE AGILE CUSTOM STYLES -->
	

	<!-- INCLUDE DEMO RELATED SCRIPTS AND STYLES -->
	<script type="text/javascript" src="<?=$localResources;?>demo/demo.js"></script>
	<link rel="stylesheet" type="text/css" href="<?=$localResources;?>demo/styles.css" />

</head>
<body onload="run()">

	<h4>General Instructions</h4>
	<ol>
		<li>There are a lot of combos that do not work yet in specific browsers (Safari and Mac FF are particularly bad). I am working ont hem now, but please make a note of them, in case I have missed any.</li>
		<li>Tabbing will not go between elements. Please manually click on an element to test it.</li>
		<li>For each row, please test the TEXTAREA and the SPAN elements.</li>
		<li>The "Key Tester" box is just to try key combos when they fail in other locations. it does not require it's own testing.</li>
		<li>Sometimes, each box has more than one trigger. Please try both.</li>
		<li>Boxes with modifiers like CTRL and ALT are particularly nasty, so please do make a note of those.</li>
		<li><strong>NOTE</strong> A successful test is one that pops up an alert with a bunch of stuff in it *once* and *only once*. Some fail because it alerts twice.</li>
	</ol>

	<div class="alternate">
		<h4>Key Tester</h4>
		<p class="instructions" id="instructionsKey">Press any key in here to see it's code.</p>
		<textarea id="testKey" tabindex="-1"></textarea>
	</div>
	
	
	<? for ($i=0; $i<40; $i++) : ?>
		<div <? if ($i%2) { echo ' class="alternate" '; } ?> >
			<h4>Row <?=$i+1;?></h4>
			<p class="instructions" id="instructions<?=$i;?>"></p>
			<textarea id="textarea<?=$i;?>" tabindex="-1">an event</textarea>
			<span id="span<?=$i;?>" tabindex="-1" onclick="this.focus();" onfocus="this.style.background='#ccf'" onblur="this.style.background='#fff'"></span>
		</div>
	<? endfor; ?>

	
</body>
</html>