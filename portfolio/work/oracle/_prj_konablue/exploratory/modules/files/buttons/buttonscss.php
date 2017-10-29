<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Buttons: CSS File</title>	
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
	<h1>Buttons: CSS File</h1>
	<p class="posted">Posted: May 17, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
		
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="buttons.php">Buttons: XHTML Markup</a></li>
		<li><a href="buttonsjs.php">Buttons: JS File</a></li>
	</ul>


	
	<h6>Buttons: CSS File</h6>
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
	
	<hr class="clear">
	
	<p>The <span class="heading">defining class</span> <code>div.buttons</code> has no definition of its own, but is used to define the area which buttons and button related tags are found.</p>
	<p>Buttons consist of three tags - an anchor tag (<code>&lt;a></code>), a span tag (<code>&lt;span></code>) and an emphasis tag (<code>&lt;em></code>).  A bold tag (<code>&lt;b></code>) is needed if the tag has an image within it.  A horizontal rule (<code>&lt;hr></code>) is placed after all buttons that have been declared to stop objects after buttons from floating (if desired).</p>
	
	<br />
	<br />
	
	<h6>Styles: Anchor Tag</h6>
	
	<p>The anchor tag has little style definition of its own, but serves to further define a single button, where <code>div.buttons</code> can define multiple buttons.</p>
	
	<br />
	<br />
	
	<h6>Styles: Attributes applicable to <code>&lt;span>, &lt;code>, & &lt;b></code></h6>
	<pre class="enclose">
div.buttons a span, 
div.buttons a em, 
div.buttons a b {
	height: 21px;
	display: block;
	float: left;
	font-style: normal;
	font-weight: normal;
	text-decoration: none;
	background: none;
}
	</pre>
	<p>Note: we are overloading all these elements and declaring them as block</p>
	
	<br />
	<br />
	
	<h6>Styles: Span Tag - Shaping the Button Part 1 of 2</h6>
	<pre class="enclose">
div.buttons a span {
	margin: 0px 3px 0px 0px;
	padding: 0px 0px 0px 5px;
	cursor:	pointer;
	white-space: nowrap;
}

div.buttons a:hover span,
div.buttons a.button_over span {
	background: url('../../images/btn_left_ovr.png') no-repeat top left;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.buttons a span</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Properties</td>
		</tr><tr>
			<td>cursor:	pointer;</td>
			<td>Forces cursor to be a link pointer while over the button</td>
		</tr><tr>
			<td>white-space:&nbsp;nowrap;</td>
			<td>Insures that the button will not wrap to more than one line.</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.buttons a:hover span, div.buttons a.button_over span</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>background...</td>
			<td>Displays left side of button on mouseover</td>
		</tr>
	</table>
	
	<p>The span tag can also have several classes attached to it.  The <span class="heading">iconic</span> class is one, while other possible classes are listed in the <a href="#spanclasses">B Tag section</a>.  All these classes relate to icons.</p>
	
	<a name="emiconic"></a><pre class="enclose">
div.buttons .iconic em {
	padding: 4px 0px 0px 0px;
}
	</pre>
	
	<br />
	<br />
	
	<h6>Styles: Em Tag - Shaping the Button Part 2 of 2</h6>
	<pre class="enclose">
div.buttons a em {
	margin: 0px;
	padding: 4px 8px 0px 0px;
	color: #335cad;
}

div.buttons a:hover em,
div.buttons a.button_over em {
	background: url('../../images/btn_right_ovr.png')  no-repeat top right;
	color: #fff;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.buttons a:hover em, div.buttons a.button_over em</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>background...</td>
			<td>Displays right side of button on mouseover</td>
		</tr>
	</table>
	
	Note: In the <a href="#emiconic">Span Tag section</a>, defining span with the class <code>iconic</code> will affect the em tag.
	
	<br />
	<br />
	
	<h6>Styles: B Tag - How We Place Icons</h6>
	
	<p>The b tag plays a big role in terms of icons.  If you would like to add an icon, you would do so here, using the list.  Please keep the list in alphabetical order</p>
	
	<p><span class="heading">Note:</span> The list below is not complete.  It is meant to demonstrate the form of the list</p>
	
	<a name="spanclasses"></a><pre class="enclose">
div.buttons .apply b {background: url('../../images/icn_apply.png') no-repeat;}
div.buttons .book b {background: url('../../images/icn_book.png') no-repeat;}
div.buttons .calendar b {background: url('../../images/icn_calendar.png') no-repeat;}
div.buttons .cancel b {background: url('../../images/icn_cancel.png') no-repeat;}
div.buttons .chat b {background: url('../../images/icn_exclaim_ble.png') no-repeat;}
div.buttons .check b {background: url('../../images/icn_check.png') no-repeat;}
div.buttons .check_circle b {background: url('../../images/icn_check_circle.png') no-repeat;}
div.buttons .clipboard b {background: url('../../images/icn_clipboard.png') no-repeat;}
div.buttons .cog b {background: url('../../images/icn_cog.png') no-repeat;}
div.buttons .delete b {background: url('../../images/icn_delete.png') no-repeat;}


div.buttons a b {
	margin: -2px 0px 0px 0px;
	width: 21px;
}
	</pre>
	
	
	<br />
	<br />
	
	<h6>Styles: HR Tag - How We Stop the Float</h6>
	
	<pre class="enclose">
div.buttons hr {
	clear: both;
	line-height: 0;
	height: 0;
	visibility: hidden;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.buttons hr</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Properties</td>
		</tr><tr>
			<td>clear:&nbsp;both;</td>
			<td>Clears the float so that the next object after it will not float.  If you do want the following object to float, you may omit this.</td>
		</tr><tr>
			<td>visibility:&nbsp;hidden;</td>
			<td>Hides the actual hr.  The hr is only acting to break the float.</td>
		</tr>
	</table>

	
	
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