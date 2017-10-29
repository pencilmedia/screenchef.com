<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Menus: JS File</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />

	<link rel="stylesheet" type="text/css" href="menus.css" />
	<link rel="stylesheet" type="text/css" href="../buttons/buttons.css" />
	<link rel="stylesheet" type="text/css" href="../../css/styles.css" />	
	
	
	<script language="javascript" src="/prototype/html/alpha/js/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.string.js" type="text/javascript"></script>

	<script language="javascript" src="/prototype/html/alpha/js/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.event.js" type="text/javascript"></script>
	
	<script language="javascript" src="menus.js" type="text/javascript"></script>
	<script language="javascript" src="../buttons/buttons.js" type="text/javascript"></script>
	<script language="javascript" src="../../js/modules.js" type="text/javascript"></script>
	
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

	<h1>Menus: JS File</h1>
	<p class="posted">Posted: May 8, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
		
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="menus.php">Menus: XHTML Markup</a></li>
		<li><a href="menuscss.php">Menus: CSS File</a></li>
	</ul>
	
	
	<!--
		_______________________________________________________________________
		menus are always called by the onclick function
		_______________________________________________________________________
	-->
	
	<h6>Menus: JS File</h6>
	<div class="example">
		<h5>Button Example</h5>
	
		<div class="buttons">
			<a href="#"><span class="plus" onclick="invo.widgets.menus.display_menu(this,'menu_shell','menu_add')"><em><b></b>Add</em></span></a>
		</div>
	</div>
		
	<div class="example">
		<h5>List Item Examples</h5>
		<ul>
			<li class="menu" onclick="invo.widgets.menus.display_menu(this,'menu_shell','menu_add')">list item 1</li>
			<li class="menu" onclick="invo.widgets.menus.display_menu(this,'menu_shell','menu_add')">list item 2</li>
			<li class="menu" onclick="invo.widgets.menus.display_menu(this,'menu_shell','menu_add')">list item 3</li>
		</ul>
	</div>

	<div class="example">
		<h5>Image Examples</h5>
		<img src="../../images/icn_clipboard.png" class="menu" onclick="invo.widgets.menus.display_menu(this,'menu_shell','menu_more_actions')" alt="" />
	</div>
	
	<hr class="clear"/>
	
	<p>The menus JS file consists of seven functions.  The main function <code>display_menu(trigger, targetNameStr, contentNameStr)</code>.  These functions work together to do things like position the menus, hide and show them, and also write in compatibility for Internet Explorer.</p>
	
	<br />
	<br />
	
	<a name="display_menu"></a><h6>Function: invo.widgets.menus.display_menu</h6>
	
	<p><span class="heading">Called from:</span> Object in XHTML Markup.</p>
	
	<p><span class="heading">Use:</span> This function calculates the position of the element that calls it.  After calculation, it sets the menu shell to the same position.  It then calls <a href="#changeDisplay"><code>invo.widgets.menus.changeDisplay</code></a> to change menu shell to <code>obj_display_block</code>.  After doing that, it clones the specified menu into the menu shell.  Lastly, it calls the function <a href="#handleIEMenus"><code>invo.widgets.menus.handleIEMenus</code></a> to add functionality to IE menus.</p>
	
	<pre class="enclose">
invo.widgets.menus.display_menu = function (trigger, targetNameStr, contentNameStr) {
	
	var objTop = 0;
	var objLeft = 0;
	var objHeight = 0;
	
	//getBoundingClientRect for ie
	if (trigger.getBoundingClientRect) {
		var ieObj = trigger.getBoundingClientRect();
		objLeft = ieObj.left + document.documentElement.scrollLeft;
		objTop = ieObj.top + document.documentElement.scrollTop;
		objHeight = ieObj.bottom - ieObj.top;
	} else {
		var parent = trigger;	
		while (parent.tagName.toLowerCase() != 'body') {
			objTop += parseInt(parent.offsetTop);
			if (parent.scrollTop) {
				objTop = objTop - parseInt(parent.scrollTop);
			}
			objLeft += parseInt(parent.offsetLeft);
			if (parent.scrollLeft) {
				objLeft = objLeft - parseInt(parent.scrollLeft);
			}
			parent = parent.offsetParent;
		}

		objHeight = parseInt(trigger.offsetHeight);
	}
	
	objHeight = objHeight + "px";
	
	document.getElementById(contentNameStr).style.paddingTop = objHeight;
	invo.metrics.setObjectLeft(targetNameStr, objLeft);
	invo.metrics.setObjectTop(targetNameStr, objTop);
	
	invo.widgets.menus.changeDisplay(targetNameStr);
	
	var tgtObj = document.getElementById(targetNameStr);
	var srcObj = document.getElementById(contentNameStr);
	var clonedObj = srcObj.cloneNode(true);
	
	tgtObj.innerHTML = "";
	tgtObj.appendChild(clonedObj);
	invo.widgets.menus.handleIEMenus();
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">invo.widgets.menus.display_menu = function (trigger, targetNameStr, contentNameStr)</td>
		</tr><tr>
			<td colspan="2" class="subhead">Parameters</td>
		</tr><tr>
			<td>trigger</td>
			<td>Identifies the object which the call is coming from</td>
		</tr><tr>
			<td>targetNameStr</td>
			<td>Id of the menu shell</td>
		</tr><tr>
			<td>contentNameStr</td>
			<td>Id of the chosen menu</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<a name="changeDisplay"></a><h6>Function: invo.widgets.menus.changeDisplay</h6>
	
	<p><span class="heading">Called from:</span> <a href="#display_menu"><code>invo.widgets.menus.display_menu()</code></a></p>
	
	<p><span class="heading">Use:</span> Simply changes the display from none &rarr; block and none &rarr; block depending on the current class.</p>
	
	<pre class="enclose">
invo.widgets.menus.changeDisplay = function (obj) {
	if (typeof(obj) == "string") { obj = document.getElementById(obj); }
	if (obj.className == "obj_display_none") {
		obj.className = "obj_display_block";
	} else {
		obj.className = "obj_display_none";
	}
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">invo.widgets.menus.changeDisplay = function (obj)</td>
		</tr><tr>
			<td colspan="2" class="subhead">Parameters</td>
		</tr><tr>
			<td>obj</td>
			<td>Identifies the object to use as the base.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<a name="startHide"></a><h6>Function: invo.widgets.menus.startHide</h6>
	
	<p><span class="heading">Called from:</span> onmouseout on an object in XHTML Markup.</a></p>
	
	<p><span class="heading">Use:</span> Starts a timer to call <a href="#hide"><code>invo.widgets.menus.hide</code></a></p>
	
	<pre class="enclose">
var current_obj_name = null;
var obj_hide_timer = null;

invo.widgets.menus.startHide = function (obj_name) {
	if (current_obj_name == null) {
		current_obj_name = obj_name;
	}
	obj_hide_timer = setTimeout(function() { invo.widgets.menus.hide(obj_name); }, 500);
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">invo.widgets.menus.startHide = function (obj_name)</td>
		</tr><tr>
			<td colspan="2" class="subhead">Parameters</td>
		</tr><tr>
			<td>obj_name</td>
			<td>Id of the menu shell</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<a name="cancelHide"></a><h6>Function: invo.widgets.menus.cancelHide</h6>
	
	<p><span class="heading">Called from:</span> onmouseover on an object in XHTML Markup</a></p>
	
	<p><span class="heading">Use:</span> Cancels the timer set in <a href="#startHide"><code>invo.widgets.menus.startHide</code>.</a></p>
	
	<pre class="enclose">
invo.widgets.menus.cancelHide = function (obj_name) {
	if (obj_hide_timer != null) {
		clearTimeout(obj_hide_timer);
		obj_hide_timer = null;
	}
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">invo.widgets.menus.cancelHide = function (obj_name)</td>
		</tr><tr>
			<td colspan="2" class="subhead">Parameters</td>
		</tr><tr>
			<td>obj_name</td>
			<td>Id of the menu shell</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	
	<a name="hide"></a><h6>Function: invo.widgets.menus.hide</h6>
	
	<p><span class="heading">Called from:</span> <a href="#startHide"><code>invo.widgets.menus.startHide</code></a></p>
	
	<p><span class="heading">Use:</span> Changes the display of an object to none.</a></p>
	
	<pre class="enclose">
invo.widgets.menus.hide = function (obj_name) {
	invo.widgets.menus.changeDisplay(obj_name);
	current_obj_name = null;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">invo.widgets.menus.hide = function (obj_name)</td>
		</tr><tr>
			<td colspan="2" class="subhead">Parameters</td>
		</tr><tr>
			<td>obj_name</td>
			<td>Id of the menu shell</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<a name="handleIEMenus"></a><h6>Function: invo.widgets.menus.handleIEMenus</h6>
	
	<p><span class="heading">Called from:</span> <a href="#display_menu"><code>invo.widgets.menus.display_menu</code></a></p>
	
	<p><span class="heading">Use:</span> Finds all elements of the type <code>&lt;ul></code> with the class"menu" and puts them into an array.  Calls <a href="#recurseIEMenus"><code>invo.widgets.menus.recurseIEMenus</code></a></p>
	
	<pre class="enclose">
invo.widgets.menus.handleIEMenus = function () {
	if (document.all && document.getElementById) {
		var menu_array = invo.dom.getElementsByClass("menu", document, "ul");
		for (var i=0; i&lt;menu_array.length; i++) {
			invo.widgets.menus.recurseIEMenus(menu_array[i]);
		}
	}

}
	</pre>
	
	<br />
	<br />
	
	<a name="recurseIEMenus"></a><h6>Function: invo.widgets.menus.recurseIEMenus</h6>
	
	<p><span class="heading">Called from:</span> <a href="#handleIEMenus"><code>invo.widgets.menus.handleIEMenus</code></a></p>
	
	<p><span class="heading">Use:</span> Takes an array of all elements of the type <code>&lt;ul></code> with the class"menu" from <a href="#handleIEMenus"><code>invo.widgets.menus.handleIEMenus</code></a>.  It finds their children nodes of type <code>&lt;li></code> and places the classname "over" onto them.  It then recurses down the list.</p>
	
	
	<pre class="enclose">
invo.widgets.menus.recurseIEMenus = function (obj) {
	for (var i=0; i&lt;obj.childNodes.length; i++) {
		node = obj.childNodes[i];
		if (node.nodeName.toLowerCase() == "li") {
			node.onmouseover = function() { this.className += " over"; }
			node.onmouseout  = function() { this.className = this.className.replace(" over", ""); }
		}
		if (node.hasChildNodes()) {
			for (var j=0; j&lt;node.childNodes.length; j++) {
				if (node.childNodes[j].nodeName.toLowerCase() == "ul") {
					node_new = node.childNodes[j];
					invo.widgets.menus.recurseIEMenus(node_new);
				}
			}
		}
	}
	return;
}
	</pre>
	
	
	
	
	
	<!--MENU SHELL-->
	<div id="menu_shell" class="obj_display_none" onmouseout="invo.widgets.menus.startHide(this.id);" onmouseover="invo.widgets.menus.cancelHide(this.id);"></div>
	<!--/MENU SHELL-->
	
	
	
	<div class="obj_display_none">
	<!--MENUS-->
	
	
	
	
		<!--ADD menu-->
		<div id="menu_add">
			<ul class="menu">
				<li>Create</li>
				<li>Add by Search</li>
				<li>Add Files</li>
				<li>Add URLs</li>
			</ul>
		</div>
		<!--/ADD menu -->
		
		
		
		
		
		<!--MORE ACTIONS menu-->
		<div id="menu_more_actions">
			<ul class="menu">
				<li>Bookmark</li>
				<li>Subscribe</li>
				<li><div class="line"><hr /></div></li>
				<li>Create Change</li>
				<li><div class="line"><hr /></div></li>
				<li>Add to View<span>&raquo;</span>
					<ul>
						<li>Important Content</li>
						<li><div class="line"><hr /></div></li>
						<li>Functional Specifications</li>
						<li>Marketing Requirements</li>
						<li>Meeting Minutes<span>&raquo;</span>
							<ul>
								<li>January 1st, 2006</li>
								<li>February 1st, 2006</li>
								<li>March 1st, 2006</li>
								<li>April 1st, 2006</li>
							</ul>
						</li>
						<li><div class="line"><hr /></div></li>
						<li>New View</li>
					</ul>
				</li>
				<li>Remove from View</li>
			</ul>
		</div>
		<!--/MORE ACTIONS menu-->
	
	


	 
	 <!--/MENUS-->
	 </div>
	 
</div>


<!-- All popup biz cards. Hidden by default -->

	<div id="andrei" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('andrei'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_andrei.png" alt="" /></div>

			<div class="vitals">
				<ul>
					<li><strong>Andrei Herasimchuk</strong><br />Principal, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 408-306-6422</li>
					<li><a href="mailto:Andrei.Herasimchuk@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Andrei.Herasimchuk@agile.com</a></li>
				</ul>

			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="dirk" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('dirk'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_dirk.png" alt="" /></div>
			<div class="vitals">

				<ul>
					<li><strong>Dirk Knemeyer</strong><br />Principal, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 419-297-4046</li>
					<li><a href="mailto:Dirk.Knemeyer@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Dirk.Knemeyer@agile.com</a></li>
				</ul>
			</div>

		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="ben" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('ben'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_ben.png" alt="" /></div>
			<div class="vitals">
				<ul>

					<li><strong>Ben Listwon</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 650-305-0228</li>
					<li><a href="mailto:Ben.Listwon@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Ben.Listwon@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>

	</div>
	
	<div id="donna" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('donna'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_donna.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Donna Driscoll</strong><br />Designer, Involution Studios LLC</li>

					<li>W: 408-249-0420<br />C: 650-776-6262</li>
					<li><a href="mailto:Donna.Driscoll@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Donna.Driscoll@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="tiffany" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>

		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('tiffany'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_tiffany.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Tiffany Altieri</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420</li>

					<li><a href="mailto:Tiffany.Altieri@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Tiffany.Altieri@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="joel" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">

			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('joel'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_joel.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Joel Nave</strong><br />Designer, Agile</li>
					<li>W: 408-284-3889<br />C: 408-802-0765</li>
					<li><a href="mailto:Joel.Nave@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Joel.Nave@agile.com</a></li>

				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="michele" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('michele'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_michele.png" alt="" /></div>

			<div class="vitals">
				<ul>
					<li><strong>Michele Yoshikawa</strong><br />Designer, Agile</li>
					<li>W: 408-284-3823<br />C: 408-705-7233</li>
					<li><a href="mailto:Michele.Yoshikawa@agile.com"><img src="/shared/images/icn_email.png" alt="" />Michele.Yoshikawa@agile.com</a></li>
				</ul>

			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="dave" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('dave'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_dave.png" alt="" /></div>
			<div class="vitals">

				<ul>
					<li><strong>Dave Elliott</strong><br />Designer, Agile</li>
					<li>W: 408-284-3824<br />C: 408-375-2206</li>
					<li><a href="mailto:Dave.Elliott@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Dave.Elliott@agile.com</a></li>
				</ul>
			</div>

		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="kishore" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('kishore'));" alt="" /></span>
			<div class="left"><img src="/shared/images/pho_kishore.png" alt="" /></div>
			<div class="vitals">
				<ul>

					<li><strong>Kishore Subramanian</strong><br />Principal Software Engineer, Agile</li>
					<li>W: 408-284-3820<br />C: 408-480-4388</li>
					<li><a href="mailto:Kishore.Subramanian@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Kishore.Subramanian@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>

	</div>
	
	<!-- End Biz Cards. -->

<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>