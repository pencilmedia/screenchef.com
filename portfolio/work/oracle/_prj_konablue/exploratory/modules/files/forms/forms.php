<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Forms: XHTML Markup</title>	
	
	<link rel="stylesheet" type="text/css" href="forms.css" />
	<link rel="stylesheet" type="text/css" href="../buttons/buttons.css" />
	<link rel="stylesheet" type="text/css" href="../../css/inv_simple_code.css" />
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

<h1>Widgets, Controls &amp; General Issues::Forms: XHTML Markup</h1>
	<p class="posted">Posted: May 18, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a>
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
		
	<p class="heading">Please also see:</p>
	<ul>
		<li><a href="formscss.php">Forms: CSS File</a></li>
	</ul>

	<h6>Forms: XHTML Markup</h6>
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
	
	<p class="info">The way we've chosen to line up form elements requires fixing the width.  We've chosen this route because the nature of form elements is to default to fit the content within unless direct styles are placed on the element.  We've also chosen to put any fixed width styles within the XHTML document and not in the style sheet because needs may change per form.</p>
	
	<p class="heading">Per Form Styles</p>
	
	<a name="perform"></a><pre class="enclose">
.date_input {width: 86px;}
.disabled_input {width: 116px;}
.searchbox {width: 107px;}
textarea {width: 395px;}
	</pre>
	
	<br />
	<br />
	
	<h6>Relevant Code: Form Structure</h6>
	
	<p class="heading">The Enclosing Tags</p>
	
	<p class="info">These tags will always begin any form.</p>
	
	<pre class="enclose">
&lt;div class="data_parent form_std">
	&lt;form name="">
	.
	.
	.
			
	&lt;/form>
&lt;/div>
&lt;hr />
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="data_parent&nbsp;form_std"></td>
			<td>Container for a form.</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>form_std</td>
			<td>The <span class="heading">defining class</span>.  It will help set attributes for all tags contained within.</td>
		</tr><tr>
			<td>data_parent</td>
			<td>Related to the expand and collapse icon at top, this class defines the direct contents as parents (will always be visible) of other collapsible data (declared below).</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;hr /></td>
			<td>The <code>&lt;hr&nbsp;/></code> is needed at the end of the form container.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	
	<p class="heading">Telling <code>data_parent</code> what to collapse</p>
	
	<p class="info">This div is declared within the div classed <code>data_parent</code></p>
	
	<pre class="enclose">
&lt;div class="data_details obj_display_block">
	.
	.
	.
&lt;/div>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="data_details&nbsp;obj_display_block"></td>
			<td>Container for content that is collapsible.</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>data_details</td>
			<td>Denotes collapsible content.</td>
		</tr><tr>
			<td>obj_display_block</td>
			<td>Defines the display of the content as block.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<p class="heading">Form Rows</p>
	
	<pre class="enclose">
&lt;div class="form_row">
	.
	.
	.
&lt;/div>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="form_row"></td>
			<td>Container for a form.</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>form_row</td>
			<td>Denotes a row of the form.</td>
		</tr>
	</table>
	
	<br />
	<br />

	<h6>Relevant Code: Form elements</h6>
	
	<p><span class="heading">Note:</span> <code>&lt;p></code> tags surround all elements in the form container.</p>
	
	<br />
	<br />
	
	<a name="labels"></a><p class="heading">Labels</p>
	
	<pre class="enclose">
&lt;p class="text">&lt;label for="completed">Status:&lt;/label>&lt;/p>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">&lt;p class="text"></td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>text</td>
			<td>Denotes a row title.</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td colspan="2" class="heading">&lt;label&nbsp;for="completed"></td>
		</tr><tr>
			<td colspan="2" class="subhead">For:</td>
		</tr><tr>
			<td>completed</td>
			<td>Indicates the element with the corresponding id is the one which is seleced when the title is clicked.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<p class="heading">Dropdown</p>
	
	<pre class="enclose">
&lt;p>
	&lt;select name="">
		&lt;option value="00">All&lt;/option>
		&lt;option value="01">-----&lt;/option>
		&lt;option value="02">Changes&lt;/option>
		&lt;option value="03">Customers&lt;/option>
		&lt;option value="04">Declarations&lt;/option>
		&lt;option value="05">Discussions&lt;/option>
		&lt;option value="06">File Folders&lt;/option>
		&lt;option value="07">Items&lt;/option>
		&lt;option value="08">Manufacturer Parts&lt;/option>
		&lt;option value="09">Manufacturers&lt;/option>
		&lt;option value="10">Packages&lt;/option>
	&lt;/select>
&lt;/p>
	</pre>
	
	<br />
	<br />
	
	<p class="heading">Text Input</p>

	<pre class="enclose">
&lt;p>&lt;input type="text" name="" value="" class="date_input" />&lt;/p>	
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;input&nbsp;type="text"&nbsp;...&nbsp;></td>
			<td>Text input.</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>date_input</td>
			<td>Optional class used to control the size of the element. See <a href="#perform">Per Form Styles</a>.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<p class="heading">Disabled Text Input</p>
	
	<p class="info">The is the only element that is actually a <code>&lt;p></code> tag.</p>

	<pre class="enclose">
&lt;p class="disabled disabled_input">&lt;/p>	
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;p class="disabled disabled_input">&lt;/p>	</td>
			<td>Disabled text input.</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>disabled</td>
			<td>Class styles element to look like an input.</td>
		</tr><tr>
			<td>disabled_input</td>
			<td>Optional class used to control the size of the element. See <a href="#perform">Per Form Styles</a>.</td>
		</tr>
	</table>
	
	<p class="heading">Checkboxes</p>
	
	<pre class="enclose">
&lt;p>&lt;input type="checkbox" id="completed" name="" value="" />Completed&lt;/p>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;input&nbsp;type="checkbox"&nbsp;...&nbsp;></td>
			<td>Checkbox</td>
		</tr><tr>
			<td colspan="2" class="subhead">Id:</td>
		</tr><tr>
			<td>completed</td>
			<td>Used to identify element selected by the <a href="#labels"><code>label</code></a>.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<p class="heading">Radio Inputs</p>
	
	<pre class="enclose">
&lt;p>&lt;input type="radio" id="yes" name="" value="" />Yes&lt;/p>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;input&nbsp;type="radio"&nbsp;...&nbsp;></td>
			<td>Checkbox</td>
		</tr><tr>
			<td colspan="2" class="subhead">Id:</td>
		</tr><tr>
			<td>yes</td>
			<td>Used to identify element selected by the <a href="#labels"><code>label</code></a>.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<p class="heading">Textarea</p>
	
	<pre class="enclose">
&lt;p>&lt;textarea id="comments">&lt;/textarea>&lt;/p>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;textarea&nbsp;id="comments"></td>
			<td>Checkbox</td>
		</tr><tr>
			<td colspan="2" class="subhead">Id:</td>
		</tr><tr>
			<td>comments</td>
			<td>Used to identify element selected by the <a href="#labels"><code>label</code></a>.</td>
		</tr>
	</table>
	
	<br />
	<br />
	
	<h6>Relevant Code: Buttonbar</h6>
	
	<pre class="enclose">
&lt;div class="buttonbar">
	&lt;div class="bb_right">
		&lt;div class="buttons">
			&lt;a href="#">&lt;span class="disk">&lt;em>&lt;b>&lt;/b>Save this search&lt;/em>&lt;/span>&lt;/a>
			&lt;a href="#">&lt;span class="cog">&lt;em>&lt;b>&lt;/b>Advanced search&lt;/em>&lt;/span>&lt;/a>
			&lt;hr />
		&lt;/div>
	&lt;/div>
	&lt;div class="bb_left">&lt;/div>
	&lt;div class="bb_middle">&lt;/div>
&lt;/div>
	</pre>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="buttonbar"></td>
			<td>Container for the buttonbar</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>buttonbar</td>
			<td>Styles background and gives width to the button bar</td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="bb_right"></td>
			<td>Part of the buttonbar</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>bb_right</td>
			<td>Denotes right side of the buttonbar.  All elements in here will be floated to the right by <code>bb_right</code></td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="bb_left"></td>
			<td>Part of the buttonbar</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>bb_left</td>
			<td>Denotes left side of the buttonbar.  All elements in here will be floated to the left by <code>bb_left</code></td>
		</tr>
	</table>
	
	<table class="tag" cellpadding="0" cellspacing="0">
		<tr>
			<td class="heading">&lt;div&nbsp;class="bb_middle"></td>
			<td>Part of the buttonbar</td>
		</tr><tr>
			<td colspan="2" class="subhead">Class:</td>
		</tr><tr>
			<td>bb_middle</td>
			<td>Denotes middle of the buttonbar.</td>
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