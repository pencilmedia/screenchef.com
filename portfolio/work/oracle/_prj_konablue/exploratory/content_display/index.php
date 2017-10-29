<?php 
	$local_js_dir = "/prototype/html/alpha/js"; 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Content Display Explorations</title>
	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />

	<script language="javascript" src="<?=$local_js_dir;?>/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.string.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.event.js" type="text/javascript"></script>
	
	<script language="javascript" type="text/javascript">

	function toggleDetailDisplay(obj) {
		if (obj.className && (obj.className.indexOf("obj_display_none") != -1) ) {
			obj.className = obj.className.replace("obj_display_none", "obj_display_block");
		} else if (obj.className && (obj.className.indexOf("obj_display_block") != -1) ) {
			obj.className = obj.className.replace("obj_display_block", "obj_display_none");
		}
	}

	function positionDetails(evt, popup_name) {
	
		evt = invo.event.getEvent(evt);
		var tgt = invo.event.getEventTarget(evt);
		var event_x = parseInt(invo.event.getEventX(evt));
		var event_y = parseInt(invo.event.getEventY(evt));
		var popup_obj = document.getElementById(popup_name);
		var arrow = invo.dom.getElementsByClass("pop_arrow_up", popup_obj, "div");
		
		toggleDetailDisplay(popup_obj);
		
		var popup_width = parseInt(invo.metrics.getObjectWidth(popup_obj));
		var delta_x = Math.round(popup_width / 2);
		var delta_y = -10;
		
		var shift_loc_x = event_x - delta_x;
		var shift_loc_y = event_y - delta_y;
		var screen_x = invo.metrics.getInsideWindowWidth();
		var screen_y = invo.metrics.getInsideWindowHeight();
		var padding_for_edges = 30;
		
		if (shift_loc_x < 0) { 
			shift_loc_x = padding_for_edges;
			if (arrow.length) {
				arrow[0].className = "pop_arrow_up pop_arrow_left";
			}
		} else if (shift_loc_x > (screen_x - popup_width) ) { 
			// magic number to account for potential scroll bar 
			shift_loc_x = screen_x - popup_width - padding_for_edges; 
			if (arrow.length) {
				arrow[0].className = "pop_arrow_up pop_arrow_right";
			}
		} else {
			if (arrow.length) {
				arrow[0].className = "pop_arrow_up";
			}
		}
		
		invo.metrics.shiftTo(popup_obj, shift_loc_x, shift_loc_y);
		
		return false;
	}
	
	</script>	
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

	<h1>Content Display Explorations</h1>
	<p class="posted">Posted: April 6, 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Ben.Listwon@agile.com">Ben Listwon</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a></p>
	

	<h2>Background Research</h2>
	<p>
		In addition to looking at the Agile PLM Suite, I spent some time gathering
		information online (through demos and screenshots) about other products
		in the same space (PLM), as well as those in Document Management (DMS).
		Below is a table of some basic information about the products I examined.
		My main goals were:
	</p>
	<ul>
		<li>See how each product presents content</li>
		<li>Observe the basic interaction model between actions and content</li>
		<li>Determine if there are industry conventions around content that should be respected</li>
	</ul>
	<p>
		Note that this is not a comprehensive study of these applications and their
		feature sets. I used what was available online to determine if these products
		were capable of certain activities. Some are available out-of-the-box,
		while others require deployment specific intergtation.
	</p>
	
	
	<table cellpadding="0" cellspacing="0" class="products">
		<thead>
			<tr>
				<th rowspan="2">Cat.</th>
				<th rowspan="2">Product Name</th>
				<th colspan="6" class="grid">Features</th>
				<th>&nbsp;&nbsp;&nbsp;</th>
				<th colspan="4" class="grid">Integration</th>
			</tr>
			<tr>
				<th class="grid">Web</th>
				<th class="grid">Applet</th>
				<th class="grid">Desktop</th>
				<th class="grid">XML I/O</th>
				<th class="grid">MDI</th>
				<th class="grid">SDI</th>
				<th>&nbsp;</th>
				<th class="grid">Office</th>
				<th class="grid">Project</th>
				<th class="grid">Visio</th>
				<th class="grid">CAD</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>PLM</td>
				<td><a href="#" onclick="positionDetails(event, 'matrix_one'); return false;">Matrix One</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_na.png" alt="N/A" /></td>
				<td class="grid"><img src="images/dot_na.png" alt="N/A" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
			</tr>
			<tr>
				<td>PLM</td>
				<td><a href="#" onclick="positionDetails(event, 'udros'); return false;">Udros</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
			</tr>
			<tr>
				<td>PLM</td>
				<td><a href="#" onclick="positionDetails(event, 'ugs'); return false;">UGS</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
			</tr>
			<tr>
				<td>DMS</td>
				<td><a href="#" onclick="positionDetails(event, 'captiva'); return false;">Captiva</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_na.png" alt="N/A" /></td>
			</tr>
			<tr>
				<td>DMS</td>
				<td><a href="#" onclick="positionDetails(event, 'onbase'); return false;">OnBase</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_na.png" alt="N/A" /></td>
			</tr>
			<tr>
				<td>DMS</td>
				<td><a href="#" onclick="positionDetails(event, 'sap'); return false;">SAP</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
			</tr>
			<tr>
				<td>DMS</td>
				<td><a href="#" onclick="positionDetails(event, 'vignette'); return false;">Vignette</a></td>
				<!-- Features -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td>&nbsp;</td>
				<!-- Integration -->
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_no.png" alt="No" /></td>
				<td class="grid"><img src="images/dot_yes.png" alt="Yes" /></td>
				<td class="grid"><img src="images/dot_na.png" alt="N/A" /></td>
			</tr>
		</tbody>
	</table>
	<p class="legend">
		<em>Legend</em>&nbsp;&nbsp;&nbsp;
		<img src="images/dot_yes.png" alt="Yes" /> Yes&nbsp;&nbsp;&nbsp;
		<img src="images/dot_no.png" alt="No" /> No&nbsp;&nbsp;&nbsp;
		<img src="images/dot_na.png" alt="N/A" /> Not Available
	</p>
			

	<h2 class="padded_break">Content Interaction</h2>
	<img src="images/diagram_interaction.png" class="float_right" />
	<p>
		A large part of the challenge for the display of content in the Agile
		redesign will be determining how the content interacts with the other
		components of the user interface (<a href="/design/exploratory/switcher/">switcher</a>, 
		<a href="/design/exploratory/use_case_display/">use case nav</a>, etc) and how that 
		interaction influences what is to be displayed in the content area.
	</p>
		


	<h2 class="padded_break">Actions in the Content</h2>
	<h3 class="padded_break">Still Haven't Found What You're Looking For?</h3>
	<img src="images/diagram_buttons_chaos.png" class="float_right" />
	<p>
		Currently, the actions for content lie scattered throughout the content.
		With the exception of table actions, it is difficult to find the various 
		buttons, links and menus that a user may need to act on the content.
	</p>

	<h3 class="padded_break">Provide Order to the Actions</h3>
	<img src="images/diagram_buttons_pin.png" class="float_right" />
	<p>
		A solution to this might be to pin the actions to the top or bottom of the
		content section, thereby creating one place to look for what to do next.
		We can enable/disable actions from this area based on what is selected
		below, or whatever the user is doing at the time.
	</p>



	<h2 class="padded_break">Fixed Content Areas</h2>
	<h3 class="padded_break">Too Many Choices</h3>
	<img src="images/diagram_choices.png" class="float_right" />
	<p>
		One thing we were sturggling with during the wireframe process was how
		to define the manner in which the content area would be defined, and what
		content would be available in each area we defined.
	</p>
	<p>
		The challenge was coming up with a method for defining how the content area 
		should behave in response to conditions outside of the content area (e.g. 
		what the active switcher area is, what use case is active, etc). One can
		envision an almost endless series of division of the content area, since
		there are no rules for how these divisions will occur.
	</p>
	<p>
		So, I tried to come up with a process for deciding when and how divisions 
		could occur. The idea is not to define the boxes first, but to define boxes
		in response to actions the user might take.
	</p>
	
	
	<h3 class="padded_break">Pin the Tables</h3>
	<img src="images/diagram_pin.png" class="float_right" />
	<p>
		
		The first idea is to fix the location of a table if it is present in the 
		content. Today, the tables all seem to be "floating" in space, and are
		constrained to a fixed height for some reason. If, instead, we choose to
		split the screen equally between the table and other content, then we
		have arrived at a logical reason to split the content pane.
	</p>

	<h3 class="padded_break">Allow the Split to Resize</h3>
	<img src="images/diagram_pin_drag.png" class="float_right" />
	<p>
		Once we split the pane, we can add increased utility to the user by allowing
		the user to drag the splitter. This allows the user control of how much
		of any pane they want to see to accomplish their task.
	</p>

	<h3 class="padded_break">Add New Utility</h3>
	<img src="images/diagram_inspector.png" class="float_right" />
	<p>
		Another logical split could be activated by the user. Let's say a user
		selects a row of a table and wants to see more detailed data about that
		object. They could then open an inspector pane that allows them to see
		an elaboration of data about the selcted object.
	</p>
	
	<h3 class="padded_break">Add More Utility</h3>
	<img src="images/diagram_bucket.png" class="float_right" />
	<p>
		Another addition might be to add space to allow the user to create lists
		of data for use later. In other words, we could use a pane to allow
		collection data to be created and stored to the user's collection nav.
		For example, if a user wished to add rows from a table to a generic "bucket"
		for easy access later, they could simply drag and drop to the "bucket".
	</p>


	<h2 class="padded_break">Conclusions</h2>
	<p>
		I'd like to continue to explore this way of determining the usage, placement
		and utility of creating content panes based on the activities of the user.
		A lot of this will depend on work being done for the <a href="/design/exploratory/switcher/">switcher</a>
		and the <a href="/design/exploratory/use_case_display/">use case nav</a> as well.
	</p>
</div>

<? 
	$gContactEmail = "ben@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>



<div id="matrix_one" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('matrix_one'));" alt="" /></span>
		<img src="images/matrix_one.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>

<div id="udros" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('udros'));" alt="" /></span>
		<img src="images/udros.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>

<div id="ugs" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('ugs'));" alt="" /></span>
		<img src="images/ugs.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>

<div id="captiva" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('captiva'));" alt="" /></span>
		<img src="images/captiva.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>

<div id="onbase" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('onbase'));" alt="" /></span>
		<img src="images/onbase.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>

<div id="sap" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('sap'));" alt="" /></span>
		<img src="images/sap.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>

<div id="vignette" class="popup obj_display_none">	
	<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
	<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
		<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('vignette'));" alt="" /></span>
		<img src="images/vignette.png" />
	</div></div></div>
	<div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
</div>


</body>
</html>