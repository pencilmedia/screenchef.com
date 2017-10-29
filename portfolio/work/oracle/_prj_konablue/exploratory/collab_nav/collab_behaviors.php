<html>
<head>
	<title>Project Kona Blue &bull; Collaboration Controls Exploration</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="../collab_nav/css/styles.css" />
	<script language="javascript" src="script/collab_nav.js" type="text/javascript"></script>
</head>
<body>

<div id="collab1">
	<div id="mod_1">
		<div class="module">
			<p><img src="images/icn_to_do.png"></p>
			<p>3</p>
		</div>
		
		<div class="module">
			<p><img src="images/icn_notifications.png"></p>
			<p>7</p>
		</div>
		
		<div class="module">
			<p><img src="images/icn_discussions.png"></p>
			<p>1</p>	
		</div>
		
		<div class="module">
			<p><img src="images/icn_address_book.png"></p>
			<p>5</p>	
		</div>
		
		<div id="scroll_div" class="message" style="background:#fff;position:absolute;left:160px;top:0px;height:50px;width:160px;margin:10px 0 0 10px">
			<p><img src="images/icn_to_do.png"> <em>DUE TODAY</em></p>
			<p>Complete business case</p>
		</div>
	</div>
	<p style="position:absolute;left:200px;">
		<a href="#" onclick="scrollIn('scroll_div');">scroll</a>
	</p>
</div>

<div id="collab2">
	<div id="mod_2">
	
		<div class="module">
			<p><img src="images/icn_to_do.png"></p>
			<p>3</p>
		</div>
		
		<div class="module">
			<p><img src="images/icn_notifications.png"></p>
			<p>7</p>
		</div>
		
		<div class="module">
			<p><img src="images/icn_discussions.png"></p>
			<p>1</p>	
		</div>
		
		<div class="module">
			<p><img src="images/icn_address_book.png"></p>
			<p>5</p>	
		</div>
	
	
		<div id="div1" class="message" style="background:#fff;position:absolute;top:0px;left:0px;width:160px;height:50px;opacity:0;filter:alpha(opacity=0);">
			<p>
				<img src="images/icn_notifications.png" style="float:left;"> 
				From: Paul Maguire (pm)
				Received: 05:36:47 PM
			</p>
			<p>
				Product specification updated: feedback requested.	
			</p>
		</div>	
	</div>
	<p style="position:absolute;left:200px;">
		<a href="#" onclick="fadeIn('div1');">fade</a>
	</p>
</div>

<div id="collab3">
	<div id="details_1" class="hideme">
		<img src="images/popup_div.png" >
	</div>
	<div id="details_2" class="hideme">
		<img src="images/popup_div_notifications.png" >
	</div>
	<div id="details_3" class="hideme">
		<img src="images/popup_div.png" >
	</div>
	<div id="details_4" class="hideme">
		<img src="images/popup_div.png" >
	</div>
	<div id="mod_3">
		<div class="module" onmouseover="show('details_1');" onmouseout="hide('details_1');">
			<p><img src="images/icn_to_do.png"></p>
			<p>3</p>
		</div>
		
		<div class="module" onmouseover="show('details_2');" onmouseout="hide('details_2');">
			<p><img src="images/icn_notifications.png"></p>
			<p>7</p>
		</div>
		
		<div class="module" onmouseover="show('details_3');" onmouseout="hide('details_3');">
			<p><img src="images/icn_discussions.png"></p>
			<p>1</p>	
		</div>
		
		<div class="module" onmouseover="show('details_4');" onmouseout="hide('details_4');">
			<p><img src="images/icn_address_book.png"></p>
			<p>5</p>	
		</div>	
	</div>
</div>
</body>
</html>