<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Menus: CSS File</title>	
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

	<h1>Menus: CSS File</h1>
	<p class="posted">Posted: May 8, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
		
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="menus.php">Menus: XHTML Markup</a></li>
		<li><a href="menusjs.php">Menus: JS File</a></li>
	</ul>
	
	
	<!--
		_______________________________________________________________________
		menus are always called by the onclick function
		_______________________________________________________________________
	-->
	
	<h6>Menus: CSS File</h6>
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
	
		
	<p>Menus are tied to the <code>.menu</code> class on a certain element, <code>&lt;ul></code>.  On everything else, the class <code>.menu</code> will only modify the cursor to a pointer.</p>
	
	<p>All menus are unordered lists.  The <span class="heading">defining class</span> is therefore <code>.menu</code> when it is attached to <code>&lt;ul></code>.</p>
	
	<p><a name="display_menu"></a>Additionally, implementing menus also requires a "menu shell", which houses the menu that is cloned.  It is an id (<code>.menu_shell</code>) attached to a div.  It requires two properties: <code>position: absolute;</code> and <code>z-index: 1000;</code> - to position it above any other content.</p>
	
	
	<h6>Styles: Menu Elements</h6>
	
	<p>The nature of menus requires that styles be defined for the first level menus and then the children menus of that.  This is for a variety of reasons, one being that the child menus need to be hidden while the first-level menus are displayed.  They also require offset from the parent menu.</p>
	
	<br />
	<br />
	
	<p class="heading">All Menus</p>
	<pre class="enclose">
ul.menu, ul.menu li ul {
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100px;
}

ul.menu li:hover,
ul.menu li.over {
	background: #7398dd;
}
	</pre>
	
	<p>Note: the width of <code>100px</code> is arbitrary.  It can be redefined later in the appropriate styles.</p><br />
	
	<br />
	<br />
	
	<p class="heading">First-Level Menus</p>
	<pre class="enclose">
ul.menu {
	line-height: 18px;
	border: 1px solid #ccc;
	background: #fff;
}

ul.menu li {
	padding: 0px 0px 0px 3px;
}
	</pre>
	
	<br />
	<br />
	
	<p class="heading">Children Menus</p>
	
	<pre class="enclose">
ul.menu li ul,
ul.menu li ul li ul,
ul.menu li:hover ul li ul,
ul.menu li.over ul li ul {
	display: none;
	position: absolute;
	top: 50px;
	border: 1px solid #ccc;
	background: #fff;
	width: 130px;
	z-index: 1010;
}

ul.menu li:hover ul,
ul.menu li.over ul,
ul.menu li:hover ul li:hover ul,
ul.menu li.over ul li.over ul {
	display: block;
}

ul.menu li:hover ul,
ul.menu li.over ul {
	left: 99%;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">ul.menu li ul, ...</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Properties</td>
		</tr><tr>
			<td>width:&nbsp;130px;</td>
			<td>Redefining the width property set in the style definition for all menus.</td>
		</tr><tr>
			<td>z-index:&nbsp;1010;</td>
			<td>Position child menus above the parent (in <a href="#display_menu"><code>menu_shell</code></a>).</td>
		</tr>
	</table>
	
	 <table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">ul.menu li:hover ul, ...</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>display:&nbsp;block;</td>
			<td>Displaying children menus to display when an li is hovered over.</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">ul.menu li:hover ul, ...</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>left:&nbsp;99%;</td>
			<td>Offset children menus.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<h6>Styles: Other</h6>
	
	<pre class="enclose">
ul.menu span {
	position: absolute;
	right: 5px;
}

ul.menu hr {
	display: none;
}

ul.menu div.line {
	height: 1px;
	width: 80%;
	border-bottom: 1px solid #ccc;
	color: #ccc;
	background-color: #ccc;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">ul.menu&nbsp;span</td>
			<td>This style positions the arrow (&raquo;) which indicates a child menu.</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td><span class="heading">ul.menu&nbsp;hr</span>&nbsp;&&nbsp;<span class="heading">ul.menu&nbsp;div.line<span></td>
			<td>These styles work in conjunction to create the seperator seen between the words in menus.  Most of the work is done by the class <code>.line</code>, the <code>&lt;hr></code> is for the benefit of machine readability.</td>
		</tr>
	</table>

	
	
	
	
	
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