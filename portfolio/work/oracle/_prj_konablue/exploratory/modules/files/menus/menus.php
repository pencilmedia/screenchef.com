<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Menus: XHTML Markup</title>	
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

	<h1>Menus: XHTML Markup</h1>
	<p class="posted">Posted: May 8, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
	
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="menusjs.php">Menus: JS File</a></li>
		<li><a href="menuscss.php">Menus: CSS File</a></li>
	</ul>
	
	<!--
		_______________________________________________________________________
		menus are always called by the onclick function
		_______________________________________________________________________
	-->
	
	<h6>Menus: XHTML Markup</h6>
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
	
	
	<h6>Relevant Code</h6>
	
	<p>You will need three pieces of code:</p>
	<ol>
		<li>The actual menus.  Menus will be placed in div with a class of "obj_display_none". They can be placed anywhere, but I recommend placing them at the end of your file. 
		<table class="tag" cellpadding="0" cellspacing="0">
			<tr>
				<td class="heading">&lt;div&nbsp;id="menu_..."...></td>
				<td>Container for one menu.  Id is the menu name</td>
			</tr><tr>
				<td colspan="2" class="subhead">Class:</td>
			</tr><tr>
				<td>menu</td>
				<td>Defined in menu.css, helps set attributes for all tags.</td>
			</tr>
		</table>
				
		<p class="heading">Example:</p>
		<pre class="enclose">
&lt;div class="obj_display_none">


	&lt;div id="menu_add">
		&lt;ul class="menu">
			&lt;li>Create&lt;/li>
			&lt;li>Add by Search&lt;/li>
			&lt;li>Add Files&lt;/li>
			&lt;li>Add URLs&lt;/li>
		&lt;/ul>
	&lt;/div>


 &lt;/div>
		</pre>
		</li>
		<li>Once the menus have been placed, you will need a shell:
			<table class="tag" cellpadding="0" cellspacing="0">
				<tr>
					<td class="heading">&lt;div id="menu_shell"...></td>
					<td>Empty container for menu of choice.</td>
				</tr><tr>
					<td colspan="2" class="subhead">Class:</td>
				</tr><tr>
					<td>obj_display_none</td>
					<td>Defined in styles.css.  Class sets any object's display to none.</td>
				</tr><tr>
					<td colspan="2" class="subhead">Events:</td>
				</tr><tr>
					<td>onmouseout="startHide()"</td>
					<td>JS function calls a timer to hide the menu</td>
				</tr><tr>
					<td>onmouseover="cancelHide()"</td>
					<td>JS function delays call to hide the menu</td>
				</tr>
			</table>
			<p class="heading">Example:</p>
			<pre class="enclose">
&lt;div id="menu_shell" class="obj_display_none" onmouseout="startHide(this.id);"
onmouseover="cancelHide(this.id);">&lt;/div>
			</pre>
		</li>
		<li>Now, place an onclick event on any object (it should be block):
		<table class="tag" cellpadding="0" cellspacing="0">
				<tr>
					<td class="heading">onclick="display_menu(x,y,z)"</td>
					<td>Onclick calls display_menu, which positions and displays the menu</td>
				</tr><tr>
					<td colspan="2" class="subhead">Parameters:</td>
				</tr><tr>
					<td>x</td>
					<td>Put the word "this" in for this parameter.  It will pass the id to the function</td>
				</tr><tr>
					<td>y</td>
					<td>The id of the shell made in (2)</td>
				</tr><tr>
					<td>z</td>
					<td>The id of the menu made in (1)</td>
				</tr>
			</table>
			<p class="heading">Example:</p>
			<pre class="enclose">
&lt;li class="menu" <b>onclick="display_menu(this,'menu_shell','menu_add')"</b>>list item 1&lt;/li>
			</pre>
			<span class="heading">Important</span>: you will notice the class "menu" has been put on this.  Put this class on any object you want a menu to come off of.  Don't leave home without it.
		</li>
	</ol>
	
	
	
	
	
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