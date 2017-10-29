<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Tabs: CSS File</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />

	<link rel="stylesheet" type="text/css" href="tabs.css" />
	<link rel="stylesheet" type="text/css" href="../../css/styles.css" />
	
	<script language="javascript" src="/prototype/html/alpha/js/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.string.js" type="text/javascript"></script>

	<script language="javascript" src="/prototype/html/alpha/js/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.event.js" type="text/javascript"></script>
	
	<script language="javascript" src="../js/modules.js" type="text/javascript"></script>
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">
	<h1>Tabs: CSS file</h1>
	<p class="posted">Posted: May 17, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a> 
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
		
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="tabs.php">Tabs: XHTML Markup</a></li>
	</ul>


	<h6>Tabs: CSS File</h6>
	<div id="tabs">
		<div class="cap_lft_nrm"></div>
		<div class="tab_mid_nrm"><a href="#">General Info</a></div>
		<div class="sep_mid_nrm"></div>
		<div class="tab_mid_nrm"><a href="#">Schedule</a></div>
		<div class="sep_lft_ovr"></div>
		<div class="tab_mid_ovr"><a href="#">Content</a></div>
		<div class="sep_rgt_ovr"></div>
		<div class="tab_mid_nrm"><a href="#">Team</a></div>
		<div class="sep_mid_nrm"></div>
		<div class="tab_mid_nrm"><a href="#">Discussions</a></div>
		<div class="sep_mid_nrm"></div>
		<div class="tab_mid_nrm"><a href="#">News</a></div>
		<div class="sep_mid_nrm"></div>
		<div class="tab_mid_nrm"><a href="#">History</a></div>
		<div class="cap_rgt_nrm"></div>
	</div>
	
	<h6>Defining ID</h6>
	<pre class="enclose">
#tabs {
	height: 25px;
	margin: 0px 0px 10px 0px;
	padding: 0px 3px 0px 3px;
	border-bottom: 1px solid #154097;
	overflow: hidden;
}
	</pre>
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">#tabs</td>
			<td>All styles within the tabs.css file are preceded with this class.  It defines not only the properties seen above, but the area in which tabs appear.</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Properties</td>
		</tr><tr>
			<td><code>overflow: hidden;</code></td>
			<td>Paired with <code>height: 25px</code>, this property will cut of anything that has a height more than 25px.</td>
		</tr><tr>
			<td><code>border-bottom: 1px solid #154097;</code></td>
			<td>These provide the bottom blue border seen on the tabs</td>
		</tr>
	</table>
	
	<h6>Pieces Involved</h6>
	
	<p>Tabs are constructed of two ends (separators) and a middle that will stretch to accomodate any word.</p>
	<p>Tabs at either end are given unique ending images.  So, there are three types of ending tabs
		<ul>
			<li>A connecting separator: the end of a tab that connects to another</li>
			<li>A leftmost cap: the left end of the tab at the leftmost position</li>
			<li>A rightmost cap: the right end of the tab at the rightmost position</li>
		</ul>
	</p>
	<p>Therefore, for a tab in the <span class="heading">normal</span> state, a tab consists of three pieces out of four - (a middle, and two out of three possible end types).</p>
	<p>A tab in the <span class="heading">active</span> state consists of three pieces as well, but out of five instead of four. This is because the connecting separator, which connects to a normal tab, in the active state needs to have a specified left and right end, rather than the generic separator connecting two normal state tabs.</p>
	
	<h6>Styles: Background Images (9)</h6>
	<pre class="enclose">
#tabs div.tab_mid_nrm    { background: url('../../images/tab_normal_middle.png') repeat-x top left; }
#tabs div.cap_lft_nrm    { background: url('../../images/tab_normal_cap_left.png') no-repeat top left; }
#tabs div.cap_rgt_nrm    { background: url('../../images/tab_normal_cap_right.png') no-repeat top left; }
#tabs div.sep_mid_nrm    { background: url('../../images/tab_normal_separator.png') no-repeat top left; }
#tabs div.tab_mid_ovr    { background: url('../../images/tab_over_middle.png') repeat-x top left; }
#tabs div.cap_lft_ovr    { background: url('../../images/tab_over_cap_left.png') no-repeat top left; }
#tabs div.cap_rgt_ovr    { background: url('../../images/tab_over_cap_right.png') no-repeat top left; }
#tabs div.sep_lft_ovr    { background: url('../../images/tab_over_separator_left.png') no-repeat top left; }
#tabs div.sep_rgt_ovr    { background: url('../../images/tab_over_separator_right.png') no-repeat top left; }
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="subhead">Class Style Definitions</td>
		</tr><tr>
			<td class="heading">div.tab_mid_nrm</td>
			<td>Class defines a tab middle in the <span class="heading">normal</span> state</td>
		</tr><tr>
			<td class="heading">div.cap_lft_nrm</td>
			<td>Class defines a left cap in the <span class="heading">normal</span> state</td>
		</tr><tr>
			<td class="heading">div.cap_rgt_nrm</td>
			<td>Class defines a right cap in the <span class="heading">normal</span> state</td>
		</tr><tr>
			<td class="heading">div.sep_mid_nrm</td>
			<td>Class defines a separator in the <span class="heading">normal</span> state</td>
		</tr><tr>
			<td class="heading">div.tab_mid_ovr</td>
			<td>Class defines a tab middle in the <span class="heading">active</span> state</td>
		</tr><tr>
			<td class="heading">div.cap_lft_ovr</td>
			<td>Class defines a left cap in the <span class="heading">active</span> state</td>
		</tr><tr>
			<td class="heading">div.cap_rgt_ovr</td>
			<td>Class defines a right cap in the <span class="heading">active</span> state</td>
		</tr><tr>
			<td class="heading">div.sep_lft_nrm</td>
			<td>Class defines a left separator in the <span class="heading">active</span> state</td>
		</tr><tr>
			<td class="heading">div.sep_rgt_nrm</td>
			<td>Class defines a right separator in the <span class="heading">active</span> state</td>
		</tr>
	</table>
	
	<h6>Styles: Attributes applicable to all seperators and caps</h6>
	<pre class="enclose">
#tabs div.cap_lft_nrm,
#tabs div.cap_rgt_nrm,
#tabs div.sep_mid_nrm,
#tabs div.cap_lft_ovr,
#tabs div.cap_rgt_ovr,
#tabs div.sep_lft_ovr,
#tabs div.sep_rgt_ovr {
	float: left;
	height: 25px;
	width: 15px;
}
	</pre>
	
	<h6>Styles: Attributes applicable to all tab middles</h6>
	<pre class="enclose">
#tabs div.tab_mid_nrm,
#tabs div.tab_mid_ovr {
	float: left;
	height: 25px;
}	

#tabs div.tab_mid_nrm a,
#tabs div.tab_mid_ovr a {
	display: block;
	font-weight: bold;
	margin: 10px 0px 0px 0px;
	text-decoration: none;
}
#tabs div.tab_mid_nrm a { color: #fff; }
#tabs div.tab_mid_ovr a { color: #000; }
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