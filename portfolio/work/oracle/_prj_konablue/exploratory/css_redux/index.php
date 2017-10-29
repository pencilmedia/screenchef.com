<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; CSS Redux</title>
	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<script type="text/javascript" src="js/dom.js"></script>
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

<div id="konablue">

<h1>CSS Redux</h1>
<p class="posted">Posted: February 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Ben.Listwon@agile.com">Ben Listwon</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a></p>

<h6>Overall Comparisons</h6>
<p>
	To compare these two files directly is somewhat unfair. I have not yet added 
	the actions or the tabs to my file, but I estimate they would add about 10KB
	more max, as the tabs would be handled mostly through the UL + CSS trick, and
	the majority of the actions is handled through JS.<br/>
	<br/>
	Also, I have removed excess JS and inline CSS declarations.<br/>
</p>
<ul>
	<li><a href="ppm_schedule_source_orig.html">HTML Dump Before</a> 120899 bytes</li>
	<li><a href="ppm_schedule_new_output.html">HTML Dump After</a> 52984 bytes</li>
</ul>
<p>
	A simple optimization that can even be done for 9.2.2 might be to trun on
	whitespace removal in the JSP processor. A file w/o excess whitespace is
	already a bit smaller.<br/>
</p>
<ul>
	<li><a href="ppm_schedule_source_strip_excess_ws.html">HTML Dump Before (Less Excess Whitespace)</a> 118327 bytes</li>
</ul>

<h6>HTML Comparisons</h6>
<p>
	These are the files that comprise just the table portion of the screen.<br/>
</p>
<ul>
	<li><a href="sample_row_before.html">Sample Table Row Before</a> 6985 bytes</li>
	<li><a href="sample_table_before.html">Sample Table Before</a> 42079 bytes</li>
	<li><a href="sample_row_after.html">Sample Table Row After</a> 4727 bytes</li>
	<li><a href="sample_table_after.html">Sample Table After</a> 28822 bytes</li>
</ul>
<p>
	Note that to get even better, I would rework the way the draggable columns behave,
	so that you can remove the spacer cells in the table rows and the table header. 
	This alone would result in a cost savings of 9.6KB in a 6 row table.<br/>
</p>
<ul>
	<li><a href="spacer_cell_savings.html">Spacer Cell Savings</a> 9600 bytes</li>
</ul>


<h6>CSS Comparisons</h6>
<p>
	The original CSS file is really big:<br/>
</p>
<ul>
	<li><a href="css_before.css">All CSS Before</a> 79901 bytes</li>
</ul>
<p>
	Here is a comparison of just the styles that would affect the table rows,
	page heading, etc that I have in the new sample above:<br/>
</p>
<ul>
	<li><a href="css_before_table.css">Table CSS Before</a> 6022 bytes</li>
	<li><a href="css_after_table.css">Table CSS After</a> 2080 bytes</li>
</ul>

<h6>Miscellaneous Notes</h6>
<p>
	This is a file of extra inline JS that can be isolated in linked files, which
	are added to the page dynamically, but since they are in a file can be cached.
	Any dynamic values can be extracted out and passed in at call time.<br/>
</p>
<ul>
	<li><a href="extra_scripts.js">Extra JS</a> 3598 bytes</li>
</ul>
<p>
	Finally, if all calls to javascript were optimized, say for calls from within
	table for resizing, etc., then you would save another 89 bytes per header cell
	which for the PPM table amounts to 5340 bytes (5.3KB). This can be done by moving
	things like cancelBubble into the script itself, or, as shown here, making it
	another argument, incase it is optional.<br/>
</p>
<ul>
	<li><a href="js_conversions.txt">JS Call Conversion</a></li>
</ul>
<p>
	I also created a table that is written via JS. It writes 100 rows with 30 columns
	in 10 row chunks with a fixed timeout of about 25 milliseconds between writes.
</p>
<ul>
	<li><a href="test_table_via_js.html">JS Row Insertion</a></li>
</ul>


<h6>Conclusion</h6>
<p>
	Assuming that you had just the data in the file I output, and you applied the
	various JS optimizations and column removal, you would have a file that was:<br/>
</p>
<pre>
      52984 (output file)
    -  9600 (extra cells)
    -  2670 (half the header cells remaing need JS optimization)
    = 40714
</pre>
<p>
	So you can see that even if the tabs and actions took another 20KB, that you 
	would still have a final HTML output that was half the original size.<br/>
</p>

</div>

</div>
<? 
	$gContactEmail = "ben@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>