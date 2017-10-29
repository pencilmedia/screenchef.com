<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Buttons: JS File</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />

	<link rel="stylesheet" type="text/css" href="../../css/styles.css" />
	<link rel="stylesheet" type="text/css" href="buttons.css" />
	
	<script language="javascript" src="/prototype/html/alpha/js/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.string.js" type="text/javascript"></script>

	<script language="javascript" src="/prototype/html/alpha/js/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.event.js" type="text/javascript"></script>
	
	<script language="javascript" src="../menus/menus.js" type="text/javascript"></script>
	<script language="javascript" src="buttons.js" type="text/javascript"></script>
	<script language="javascript" src="../../js/modules.js" type="text/javascript"></script>
	

</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">
	<h1>Buttons: JS File</h1>
	<p class="posted">Posted: May 8, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>

	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="buttons.php">Buttons: XHTML Markup</a></li>
		<li><a href="buttonscss.php">Buttons: CSS File</a></li>
	</ul>

	
	<h6>Buttons: JS File</h6>
	<div class="example">
	
		<!-- BUTTON WITH ICON AND TEXT-->
		
		<h5>Button with Icon & Text</h5>
		<div class="buttons">
			<a href="#"><span class="plus"><em><b></b>Add</em></span></a>
		</div>	
		
	</div>
	
	
	
	<div class="example">
	
		<!-- BUTTON WITH TEXT-->
			
		<h5>Button with Text</h5>
		<div class="buttons">
			<a href="#"><span><em>Remove</em></span></a>
		</div>	
	
	</div>
	
	
	
	<div class="example">
	
		<!-- BUTTON WITH ICON-->
		
		<h5>Button with Icon</h5>
		<div class="buttons">
			<a href="#"><span class="plus iconic"><em><b></b></em></span></a>
		</div>	
	
	</div>
	
	
	<div class="example">
	
		<!-- MULTI-BUTTON LAYOUT -->
		
		<!--Many buttons can be contained in one buttons div-->
	
		<h5>Multi-Button Layout</h5>
		<div class="buttons">
			<a href="#"><span class="plus"><em><b></b>Add</em></span></a>
			<a href="#"><span><em>Remove</em></span></a>
			<a href="#"><span class="plus iconic"><em><b></b></em></span></a>
		</div>		
	
	</div>
	
	<hr class="clear" />
	
	<p>The buttons JS file is short.  This is primarily because the only help the buttons need is in Internet Explorer, and then only on hover.</p>
	
	<h6>Function: handleWinButtons()</h6>
	
	<p><span class="heading">Called from:</span> modules.js when the page loads</p>
	
	<p><span class="heading">Use:</span> Places a class <code>button_over</code> on all anchor tags in a <code>buttons</code> classed div.</a></p>
	
	<pre class="enclose">
invo.widgets.buttons.handleWinButtons = function () {
	if (document.all && document.getElementById) {
		var buttons = invo.dom.getElementsByClass("buttons", null, "div");
	
		if (buttons && buttons.length) {
			for (var i=0; i&lt;buttons.length; i++) {
				var children = buttons[i].childNodes;
				for (var j=0; j&lt;children.length; j++){
					if (children[j].tagName && ((children[j].tagName).toLowerCase() == "a")){
						children[j].onmouseover = function() { this.className += " button_over"; }
						children[j].onmouseout  = function() { this.className = this.className.replace(" button_over", ""); }
					}
				}
			}
		}
	}
}
	</pre>

	
	
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