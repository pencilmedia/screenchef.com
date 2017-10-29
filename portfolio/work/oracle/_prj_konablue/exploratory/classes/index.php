<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Class &amp; ID Attributes as Style vs. Program Identifiers</title>
	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	<script type="text/javascript" src="js/dom.js"></script>
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

	<h1>Class &amp; ID Attributes as Style vs. Program Identifiers</h1>
	<p class="posted">Posted: March 24, 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Ben.Listwon@agile.com">Ben Listwon</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a></p>
	
	<h2>Hand Generated Sample Table</h2>
	
	<style type="text/css">
		#milestones1 th.col1 {
			width: 75px;
		}
		
		#milestones1 th.col2 {
			width: 100px;
		}
		
		#milestones1 th.col3 {
			width: 100px;
		}
	</style>
	
	<table>
		<tr valign="top">
			<td>
				<table id="milestones1" class="basic" cellpadding="0" cellspacing="0">
					<thead>
						<tr>
							<th class="col1">Name</th>
							<th class="col2">Start Date</th>
							<th class="col3">End Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Gate 1</td>
							<td>01.01.06</td>
							<td>01.31.06</td>
						</tr>
						<tr class="highlight">
							<td>Gate 2</td>
							<td>02.01.06</td>
							<td>02.28.06</td>
						</tr>
						<tr>
							<td>Gate 3</td>
							<td>03.01.06</td>
							<td>03.31.06</td>
						</tr>
					</tbody>
				</table>
			</td>
			<td>
				<h3>Notes:</h3>
				<p>
					This is what a table would look like as we prototype the look and feel.
				</p>
				<ul>
					<li>The table id is for targeting and to allow more than one milestones table</li>
					<li>Class names are used only to add style information</li>
					<li>Local class definitions allow each instance to be customized, while using
						the global css for consistent styling</li>
					<li>DOM nodes are not accessible directly, which leads to
						<ul>
							<li>Heavy overhead to access a single piece of data</li>
							<li>Prior knowledge of layout/data order</li>
						</ul>
					</li>
				</ul>
				<p>&nbsp;</p>
			</td>
		</tr>
		<tr valign="top">
			<td>
				<h3>Table HTML</h3>
				<pre class="data">
&lt;table id="milestones1" class="basic"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th class="col1"&gt;Name&lt;/th&gt;
            &lt;th class="col2"&gt;Start Date&lt;/th&gt;
            &lt;th class="col3"&gt;End Date&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Gate 1&lt;/td&gt;
            &lt;td&gt;01.01.06&lt;/td&gt;
            &lt;td&gt;01.31.06&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr class="highlight"&gt;
            &lt;td&gt;Gate 2&lt;/td&gt;
            &lt;td&gt;02.01.06&lt;/td&gt;
            &lt;td&gt;02.28.06&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Gate 3&lt;/td&gt;
            &lt;td&gt;03.01.06&lt;/td&gt;
            &lt;td&gt;03.31.06&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
				</pre>
			</td>
			<td>
				<h3>Table DOM Tree</h3>
				<pre id="tableDom1" class="data">&nbsp;</pre>
			</td>
		</tr>
		<tr valign="top">
			<td>
				<h3>Table CSS</h3>
				<pre class="data">
table.basic {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
}

table.basic th {
    font-size: 12px;
    text-align: left;
    background: #e6e6e6;
}

table.basic th,
table.basic td {
    padding: 3px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}

table.basic tr.highlight {
    background: #ccf;
}
				</pre>
			</td>
			<td>
				<h3>Local Styles</h3>
				<pre class="data">
#milestones1 th.col1 {
    width: 75px;
}

#milestones1 th.col2 {
    width: 100px;
}

#milestones1 th.col3 {
    width: 100px;
}
				</pre>
			</td>
		</tr>
	</table>
	
	
	<script type="text/javascript">
		var tgt = document.getElementById("tableDom1");
		tgt.innerHTML = parseDOM(document.getElementById("milestones1"));
	</script>
	
	
	
	
	
	<h2>Code Generated Sample Table</h2>
	
	<style type="text/css">
		#milestones2 th.col1 {
			width: 100px;
		}
		#milestones2 th.col2 {
			width: 150px;
		}
		#milestones2 th.col3 {
			width: 150px;
		}
	</style>
	
	<table>
		<tr valign="top">
			<td>
				<table id="milestones2" class="basic" cellpadding="0" cellspacing="0">
					<thead class="ms2-head">
						<tr class="ms2-head-row">
							<th class="col1 ms2-heading-name">Name</th>
							<th class="col2 ms2-heading-start-date">Start Date</th>
							<th class="col3 ms2-heading-end-date">End Date</th>
						</tr>
					</thead>
					<tbody class="ms2-body">
						<tr class="ms2-row">
							<td class="ms2-name">Gate 1</td>
							<td class="ms2-start-date">01.01.06</td>
							<td class="ms2-end-date">01.31.06</td>
						</tr>
						<tr class="highlight ms2-row">
							<td class="ms2-name">Gate 2</td>
							<td class="ms2-start-date">02.01.06</td>
							<td class="ms2-end-date">02.28.06</td>
						</tr>
						<tr class="ms2-row">
							<td class="ms2-name">Gate 3</td>
							<td class="ms2-start-date">03.01.06</td>
							<td class="ms2-end-date">03.31.06</td>
						</tr>
					</tbody>
				</table>
			</td>
			<td>
				<h3>Notes:</h3>
				<p>
					This is what the same table would look like once "componentized".
				</p>
				<ul>
					<li>The table id is for targeting and to allow more than one milestones table</li>
					<li>Class names are used for
						<ul>
							<li>Adding style information</li>
							<li>Targeting data using DOM</li>
						</ul>
					</li>
					<li>Local class definitions allow each instance to be customized, while using
						the global css for consistent styling</li>
					<li>DOM nodes are accessible via classname collections. 
						<ul>
							<li>Pros:
								<ul>
									<li>Can retrieve collections (e.g. all rows in the table)</li>
									<li>Can access data however the table is laid out</li>
									<li>No prior knowledge of layout/data order</li>
								</ul>
							</li>
							<li>Cons:
								<ul>
									<li>Because not every cell has an id, single statement access is not possible</li>
									<li>Some retrieval operations will be heavier that if ids were used</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<p>&nbsp;</p>
			</td>
		</tr>
		<tr valign="top">
			<td>
				<h3>Table HTML</h3>
				<pre class="data">
&lt;table id="milestones2" class="basic"&gt;
    &lt;thead class="ms2-head"&gt;
        &lt;tr class="ms2-head-row"&gt;
            &lt;th class="ms2-heading-name"&gt;Name&lt;/th&gt;
            &lt;th class="ms2-heading-start-date"&gt;Start Date&lt;/th&gt;
            &lt;th class="ms2-heading-end-date"&gt;End Date&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody class="ms2-body"&gt;
        &lt;tr class="ms2-row"&gt;
            &lt;td class="ms2-name"&gt;Gate 1&lt;/td&gt;
            &lt;td class="ms2-start-date"&gt;01.01.06&lt;/td&gt;
            &lt;td class="ms2-end-date"&gt;01.31.06&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr class="highlight ms2-row"&gt;
            &lt;td class="ms2-name"&gt;Gate 2&lt;/td&gt;
            &lt;td class="ms2-start-date"&gt;02.01.06&lt;/td&gt;
            &lt;td class="ms2-end-date"&gt;02.28.06&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr class="ms2-row"&gt;
            &lt;td class="ms2-name"&gt;Gate 3&lt;/td&gt;
            &lt;td class="ms2-start-date"&gt;03.01.06&lt;/td&gt;
            &lt;td class="ms2-end-date"&gt;03.31.06&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
				</pre>
			</td>
			<td>
				<h3>Table DOM Tree</h3>
				<pre id="tableDom2" class="data">&nbsp;</pre>
			</td>
		</tr>
		<tr valign="top">
			<td>
				<h3>Table CSS</h3>
				<pre class="data">
table.basic {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
}

table.basic th {
    font-size: 12px;
    text-align: left;
    background: #e6e6e6;
}

table.basic th,
table.basic td {
    padding: 3px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}

table.basic tr.highlight {
    background: #ccf;
}
				</pre>
			</td>
			<td>
				<h3>Local Styles</h3>
				<pre class="data">
#milestones2 th.col1 {
    width: 100px;
}

#milestones2 th.col2 {
    width: 150px;
}

#milestones2 th.col3 {
    width: 150px;
}
				</pre>
			</td>
		</tr>
	</table>
	
	<script type="text/javascript">
		var tgt = document.getElementById("tableDom2");
		tgt.innerHTML = parseDOM(document.getElementById("milestones2"));
	</script>

</div>
<? 
	$gContactEmail = "ben@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>