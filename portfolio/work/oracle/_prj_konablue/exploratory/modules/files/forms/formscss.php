<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Forms: CSS File</title>	
	
	<link rel="stylesheet" type="text/css" href="forms.css" />
	<link rel="stylesheet" type="text/css" href="../buttons/buttons.css" />
	<link rel="stylesheet" type="text/css" href="../../css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="../../css/styles.css" />
	
	<script language="javascript" src="/prototype/html/alpha/js/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.string.js" type="text/javascript"></script>

	<script language="javascript" src="/prototype/html/alpha/js/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.event.js" type="text/javascript"></script>
	
	<script language="javascript" src="../menus/menus.js" type="text/javascript"></script>
	<script language="javascript" src="../buttons/buttons.js" type="text/javascript"></script>
	<script language="javascript" src="../../js/modules.js" type="text/javascript"></script>
	
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

<style type="text/css">
.date_input {width: 86px;}
.disabled_input {width: 116px;}
.searchbox {width: 107px;}
select {width: 120px;}
textarea {width: 395px;}
</style>

<h1>Widgets, Controls &amp; General Issues::Forms: CSS File</h1>
	<p class="posted">Posted: May 18, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
		
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="forms.php">Forms: XHTML Markup</a></li>
	</ul>

	<h6>Forms: CSS File</h6>
	<div class="data_parent form_std">
	<form name="">
		<div class="form_row">
			
			<p class="text"><img class="btn" src="../../images/icn_collapse.png" alt="" onclick="toggleDetails(this);" /> <label for="search_for">Search for:</label></p>
			<p>
				<select name="">
					<option value="00">All</option>
					<option value="01">-----</option>
					<option value="02">Changes</option>
					<option value="03">Customers</option>
					<option value="04">Declarations</option>
					<option value="05">Discussions</option>
					<option value="06">File Folders</option>
					<option value="07">Items</option>
					<option value="08">Manufacturer Parts</option>
					<option value="09">Manufacturers</option>
					<option value="10">Packages</option>
				</select>
			</p>
			
			<p>
				<select name="regclass" >
					<option value="">[need class names here]</option>
				</select>
			</p>		
			<p>
				<img src="../../images/icn_paperclip_check.png" alt="checkbox" />
			</p>
			<p>
				<input type="text" id="search_for" class="searchbox" value="(Search for...)" />
			</p>
		</div>
		
		<div class="data_details obj_display_block">	
			
			<div>		
				<div class="form_row">
					<p class="text"><label for="program_type">Program Type:</label></p>
					<p class="disabled disabled_input"></p>
					<p>
						<div class="buttons">
							<a href="#"><span class="iconic menu"><em><b></b></em></span></a>
							<a href="#"><span class="iconic delete"><em><b></b></em></span></a>
						</div>
					</p>
				</div>
				<div class="form_row">
					<p class="text"><label for="business_unit">Business Unit:</label></p>
					<p class="disabled disabled_input"></p>
					<p>
						<div class="buttons">
							<a href="#"><span class="iconic menu"><em><b></b></em></span></a>
							<a href="#"><span class="iconic delete"><em><b></b></em></span></a>
						</div>
					</p>
				</div>
				<div class="form_row">
					<p class="text"><label for="create_date">Create Date:</label></p>
					<p>
						<select name="search_parametric_date">
							<option value="">equal to</option>
							<option value="" selected>between</option>
							<option value="">-----</option>
							<option value="">less than</option>
							<option value="">less than or equal to</option>
							<option value="">greater than</option>
							<option value="">greater than or equal to</option>
							<option value="">-----</option>
							<option value="">not equal to</option>
							<option value="">null</option>
							<option value="">not null</option>
						</select>
					</p>
					<p><input type="text" id="create_date" name="" value="" class="date_input" /></p>
					<p>
						<div class="buttons">
							<a href="#"><span class="iconic calendar"><em><b></b></em></span></a>
						</div>
					</p>
					<p><input type="text" name="" value="" class="date_input" /></p>
					<p>
						<div class="buttons">
							<a href="#"><span class="iconic calendar"><em><b></b></em></span></a>
						</div>
					</p>
				</div>
				
				<div class="form_row">
					<p class="text"><label for="comments">Comments:</label></p>
					<p><textarea id="comments"></textarea></p>
				</div>
				<div class="form_row">
					<p class="text"><label for="completed">Status:</label></p>
					<p><input type="checkbox" id="completed" name="" value="" />Completed</p>
				</div>
				<div class="form_row">
					<p class="text"><label for="yes">Description: </label></p>
					<p><input type="radio" id="yes" name="" value="" />Yes</p>
					<p><input type="radio" name="" value="" />No</p>
				</div></div>
			
			<hr />
				
			<div class="buttonbar">
				<div class="bb_right">
					<div class="buttons">
						<a href="#"><span class="disk"><em><b></b>Save this search</em></span></a>
						<a href="#"><span class="cog"><em><b></b>Advanced search</em></span></a>
						<hr />
					</div>
				</div>
				<div class="bb_left"></div>
				<div class="bb_middle"></div>
			</div>
		
		</div>
	</form>
	</div>
	
	<br />
	<br />
	
	<h6>Defining Class</h6>
	
	<p class="info">The <span class="heading">defining class</span> for forms is <code>.form_std</code> on a certain element, <code>&lt;div></code>.</p>
	
	<pre class="enclose">
div.form_std {
	margin: 0px;
	padding: 0px;
	width: 100%;
}

div.form_std div.form_row {
	clear: both;
}

div.form_std div.form_row p.text {
	width: 120px;
	margin: 0px;
	padding: 4px 0px 0px 0px;
	font-weight: bold;
	text-align: right;
	float: left;
}

div.form_std div.form_row p {
	margin: 0px 5px 10px 5px;
	padding: 0px;
	float: left;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.form_std&nbsp;div.form_row&nbsp;p</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>float:&nbsp;left;</td>
			<td>Everything within the <code>&lt;p></code> is floated left.  This illustrates why all elements is a form are enclosed in this tag.</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.form_std&nbsp;div.form_row</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>clear:&nbsp;both;</td>
			<td>This clears the float made by the <code>&lt;p></code> tag on a per row basis.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<p class="heading">HR: Breaking the last float</p>
	
	<pre class="enclose">
hr {
	clear: both;
	height: 1px;
	visibility: hidden;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">hr</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Properties</td>
		</tr><tr>
			<td>clear:&nbsp;both;</td>
			<td>This clears the float made by the <code>&lt;p></code> tag for the entire form container.  This is necessary because the last row will not have broken the floating with another <code>form_row</code></td>
		</tr><tr>
			<td>visibility:&nbsp;hidden;</td>
			<td>Hides the <code>hr</code></td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<h6>Styles: Form Elements</h6>
	
	<pre class="enclose">
input[text],input[type=text], p.disabled, select, textarea {
	font-family: arial, sans-serif;
	font-size: 11px;
	color: #333;
	border: 1px solid #a9bad8;
	margin-top: 2px;
}

input[text], input[type=text], p.disabled, select {
	height: 16px;
}

p.disabled {
	border: 1px solid #cbcbcb;
	margin-left: 10px;
}

select {
	font-family: arial, sans-serif;
	font-size: 11px;
	color: #333;
	border: 1px solid #a9bad8;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">input[text],&nbsp;input[type=text],&nbsp;p.disabled,&nbsp;select,&nbsp;textarea</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Property</td>
		</tr><tr>
			<td>height: 16px;</td>
			<td>We have chosen only to hard code heights in css file.</code></td>
		</tr>
	</table>
	<p>Note: Thre are two input selectors in this style definition, the first for IE, the second for every other browser.</p>
	
	<br />
	<br />
	
	<h6>Styles: Buttonbar</h6>
	
	<pre class="enclose">
div.buttonbar {
	height: 30px;
	color: #333;
	background-color: #eee;
	font-size: 11px;
	font-weight: normal;
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
}

div.bb_left {
	float: left;
	margin: 5px 0px 0px 5px;
	text-align: left;
}

div.bb_middle {
	margin: 5px 0px 0px 0px;
}

div.bb_right {
	float: right;
	margin: 5px 5px 0px 0px;
	text-align: right;
}
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">div.buttonbar</td>
		</tr><tr>
			<td colspan="2" class="subhead">Highlighted Properties</td>
		</tr><tr>
			<td>overflow:&nbsp;hidden;&nbsp;&&nbsp;height:&nbsp;30px;</td>
			<td>Paired together, these properties mean that anything bigger than 30px within the <code>buttonbar</code> will be cut off.</code></td>
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