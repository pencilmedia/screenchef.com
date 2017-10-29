<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Tables</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />

	<link rel="stylesheet" type="text/css" href="tables.css" />
	<link rel="stylesheet" type="text/css" href="../buttons/buttons.css" />
	<link rel="stylesheet" type="text/css" href="../../css/styles.css" />
	
	<script language="javascript" src="../js/modules.js" type="text/javascript"></script>
	
	<script language="javascript" src="/prototype/html/alpha/js/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="/design/exploratory/simple_panes/js/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.string.js" type="text/javascript"></script>

	<script language="javascript" src="/prototype/html/alpha/js/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.event.js" type="text/javascript"></script>
	<script language="javascript" src="/prototype/html/alpha/js/invo.dnd.js" type="text/javascript"></script>
	<script language="javascript" src="table_data.js" type="text/javascript"></script>
	<script language="javascript" src="tables.js" type="text/javascript"></script>
	<script type="text/javascript">		
		var col_off = "#7398dd";
		var selected_rows = new Array();
		var selected_columns = new Array();
	</script>

	<style type="text/css">
#table1 {height:250px;
			width:700px; 
			top:180px;
			left:60px;
			}
	

#table1 .d_00, th.d_00 {width: 20px;}
#table1 .d_01, th.d_01 {width: 20px;}
#table1 .d_02, th.d_02 {width: 120px;}
#table1 .d_03, th.d_03 {width: 190px;}
#table1 .d_04, th.d_04 {width: 80px;}
#table1 .d_05, th.d_05 {width: 70px;}
#table1 .d_06, th.d_06 {width: 16px;}
#table1 .d_07, th.d_07 {width: 100px;}
#table1 .d_08, th.d_08 {width: 60px;}

#table1 .table_container {height:230px;}
	
#table1 .table_vertical_scrollbar {top: 30px;
	left: 700px;
	}
#table1 .table_horizontal_scrollbar {top: 255px;
	left: 0px;
	}
	
/***** TODO:amh The uber table header hack to get <TH> tags to line up *****/
.d_10 {width: 1px; font-size: 1px;}
#table2 {height:200px;
			width:500px;
			top:452px;
			left:360px;
			}
#table1 .d_00 {width: 20px;}	
#table2 .d_01 {width: 20px;}
#table2 .d_02 {width: 120px;}
#table2 .d_03 {width: 190px;}
#table2 .d_04 {width: 80px;}
#table2 .d_05 {width: 70px;}
#table2 .d_06 {width: 16px;}
#table2 .d_07 {width: 100px;}
#table2 .d_08 {width: 60px;}
	
#table2 .table_container {height:180px;}

#table2 .table_vertical_scrollbar {top: 30px;
	left: 700px;
	}
#table2 .table_horizontal_scrollbar {top: 205px;
	left: 0px;
	}
	
/***** TODO:amh The uber table header hack to get <TH> tags to line up *****/
.d_10 {width: 1px; font-size: 1px;}
#table3 {height:200px;
			width:300px;
			top:160px;
			left:840px;
			}
	
#table3 .d_00 {width: 120px;}
#table3 .d_01 {width: 100px;}
#table3 .d_02 {width: 120px;}
	
#table3 .table_container {height:180px;}

#table3 .table_vertical_scrollbar {top: 30px;
	left: 300px;
	}
#table3 .table_horizontal_scrollbar {top: 205px;
	left: 0px;
	}
	
</style>
		
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">
	
	<h1>Widgets, Controls &amp; General Issues::Tables:XHTML Markup</h1>
	<p class="posted">Posted: May 19, 2006 &nbsp;&bull;&nbsp; Owners: 
		<a href="#" onclick="positionDetails(event, 'dave'); return false;">Dave Elliott</a> &amp;
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a> 
		&nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>

<!-- The tables -->
	
<div id="table1" class="table_content"></div>
	<script language="JavaScript">
	var table1=new agileTable('table1');
	table1.initTable(table1_cfg,table1_headings,table1_data);
	</script>


<div class="parts">
<div id="table2" class="table_content"></div>
	<script language="JavaScript">
	var table2=new agileTable('table2');
	table2.initTable(table1_cfg,table1_headings,table1_data);
	</script>
</div>


<div class="docs">
<div id="table3" class="table_content"></div>
	<script language="JavaScript">
	var table3=new agileTable('table3');
	table3.initTable(table3_cfg,table3_headings,table3_data);
	</script>
</div>
	


<div style="position:absolute;top:690px;">
	<h6>Tables:XHTML Markup</h6>
	
	<p class="info">Tables will be generated in the browser from data and config specs provided
	by the server in JSON constructs.  For the prototype, the JSON code will be hand-generated
	and provided in a separate JS file.</p>
	
	<p class="info">
		The XHTML simply defines a div and then calls the JS code to generate the table.
	</p>
	<pre class="enclose">
&lt;div id="table1" class="table_content">&lt;/div>
	&lt;script language="JavaScript">
	var table1=new agileTable('table1');
	table1.initTable(table1_cfg,table1_headings,table1_data);
	&lt;/script>


&lt;div class="parts">
&lt;div id="table2" class="table_content">&lt;/div>
	&lt;script language="JavaScript">
	var table2=new agileTable('table2');
	table2.initTable(table1_cfg,table1_headings,table1_data);
	</script>
&lt;/div>

	</pre>
<p class="info">
	The three arrays contain the configuration data, the column headings and the contents of the rows.
	The second example above has the table enclosed (at some antecedent level) in an element with class name "parts".
	This affects the colors of the heading, footing, and highlighted and selected rows.
</p>
	<p class="info">
		The position and size of the table and the widths of the rows are set in CSS as follows:
	</p>
	<pre class="enclose">
#table1 {height:250px;
	width:700px;
	top:150px;
	left:60px;
	}
	
#table1 .d_01, th.d_01 {width: 20px;}
#table1 .d_02, th.d_02 {width: 20px;}
#table1 .d_03, th.d_03 {width: 160px;}
#table1 .d_04, th.d_04 {width: 190px;}
#table1 .d_05, th.d_05 {width: 80px;}
#table1 .d_06, th.d_06 {width: 70px;}
#table1 .d_07, th.d_07 {width: 16px;}
#table1 .d_08, th.d_08 {width: 100px;}
#table1 .d_09, th.d_09 {width: 80px;}

#table1 .table_container {height:230px;}
	
#table1 .table_vertical_scrollbar {top: 30px;
	left: 700px;
	}
#table1 .table_horizontal_scrollbar {top: 255px;
	left: 0px;
	}

	</pre>
	<p class="info">
		To override the absolute positioning and have the tables appear in the flow of the page, use
		</p>
	<pre class="enclose">
#table1,#table2,#table3 {position:relative;top:0px;left:0px;}
		</pre>
	<p class="info">
		The data and config info are specified in JavaScript.  Here is an example:
	</p>
	<pre class="enclose">
var table1_cfg = {
	footing:"footing",
	columns:[
		{sticky:false, type:"icon", editable:false
		},
		{sticky:false, type:"icon", editable:false
		},
		{sticky:true, type:"link", editable:false
		},
		{sticky:false, type:"text", editable:false
		},
		{sticky:false, type:"text", editable:true
		},
		{sticky:false, type:"text", editable:true
		},
		{sticky:false, type:"icon", editable:false
		},
		{sticky:false, type:"link", editable:false
		},
		{sticky:false, type:"date", editable:true
		},
		{sticky:false, type:"text", editable:false
		}
		]
	};

var table1_headings = ["", "", "Name", "Description", "Rev/Ver", "Status", "", "Related to", "Due", ""];
var table1_data = [
	[
	'sundial',
	'document',
	{url:'#', text:'D003551', title:'a link'},
	'Marketing Requirements Document for the...',
	'Preliminary',
	'Draft',
	'exclaim_ble',
	{url:'#', text:'Complete Market Requirements', title:'a link'},
	'03/18/2006',
	''
	],                    
[
	'',
	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project',
	'2',
	'2',
	'exclaim_ble',
	{url:'#',text:'Complete Finite Analysis',title:'a link'},
	'03/20/2006',
	''
	],                    
[
	'',
	'eco',
	{url:'#',text:'DCO001234',title:'a link'},
	'Initial release of Functional Specification Document.  More text to show that more text can be displayed.  How much can you add.',
	'',
	'Draft',
	'exclaim_ble',
	{url:'#',text:'Approve Functional Specification',title:'a link'},
	'04/05/2006',
	''
	]
];                  

	</pre>
	<p class="info">
		Note that a column defined to contain a "link" can, in fact, have an array of links.
	</p>
</div>	
	
		
<style type="text/css">
	#debug_scrollbars {position:absolute;
						width:180px;
						border:2px solid gray;
						top:100px;
						left:820px;
						display:none;
						}
</style>	
	<div id="debug_scrollbars">
		<form name="f">
			<table>
				<tr>
					<td><b>Vertical</b></td>
					<td></td>
				</tr>
				<tr>
					<td style="text-align:right">table_height</td>
					<td><input type="text" name="o_table_height" size="4" /></td>
				</tr>
				<tr>
					<td style="text-align:right">content_height</td>
					<td><input type="text" name="o_content_height" size="4" /></td>
				</tr>
				<tr>
					<td style="text-align:right">y</td>
					<td><input type="text" name="o_y" size="4" /></td>
				</tr>
				<tr>
					<td style="text-align:right">table offset top</td>
					<td><input type="text" name="o_content_top" size="4" /></td>
				</tr>
				<tr>
					<td><b>Horizontal</b></td>
					<td></td>
				</tr>
				<tr>
					<td style="text-align:right">table_width</td>
					<td><input type="text" name="o_table_width" size="4" /></td>
				</tr>
				<tr>
					<td style="text-align:right">content_width</td>
					<td><input type="text" name="o_content_width" size="4" /></td>
				</tr>
				<tr>
					<td style="text-align:right">x</td>
					<td><input type="text" name="o_x" size="4" /></td>
				</tr>
				<tr>
					<td style="text-align:right">table offset left</td>
					<td><input type="text" name="o_content_left" size="4" /></td>
				</tr>
			</table>
		</form>
	</div>

	
	
	
	
	
	
	
	
<!-- All popup biz cards. Hidden by default -->

	<div id="andrei" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('andrei'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_andrei.png" alt="" /></div>

			<div class="vitals">
				<ul>
					<li><strong>Andrei Herasimchuk</strong><br />Principal, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 408-306-6422</li>
					<li><a href="mailto:Andrei.Herasimchuk@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Andrei.Herasimchuk@agile.com</a></li>
				</ul>

			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="dirk" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('dirk'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_dirk.png" alt="" /></div>
			<div class="vitals">

				<ul>
					<li><strong>Dirk Knemeyer</strong><br />Principal, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 419-297-4046</li>
					<li><a href="mailto:Dirk.Knemeyer@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Dirk.Knemeyer@agile.com</a></li>
				</ul>
			</div>

		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="ben" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('ben'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_ben.png" alt="" /></div>
			<div class="vitals">
				<ul>

					<li><strong>Ben Listwon</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 650-305-0228</li>
					<li><a href="mailto:Ben.Listwon@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Ben.Listwon@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>

	</div>
	
	<div id="donna" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('donna'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_donna.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Donna Driscoll</strong><br />Designer, Involution Studios LLC</li>

					<li>W: 408-249-0420<br />C: 650-776-6262</li>
					<li><a href="mailto:Donna.Driscoll@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Donna.Driscoll@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="tiffany" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>

		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('tiffany'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_tiffany.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Tiffany Altieri</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420</li>

					<li><a href="mailto:Tiffany.Altieri@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Tiffany.Altieri@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="joel" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">

			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('joel'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_joel.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Joel Nave</strong><br />Designer, Agile</li>
					<li>W: 408-284-3889<br />C: 408-802-0765</li>
					<li><a href="mailto:Joel.Nave@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Joel.Nave@agile.com</a></li>

				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="michele" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('michele'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_michele.png" alt="" /></div>

			<div class="vitals">
				<ul>
					<li><strong>Michele Yoshikawa</strong><br />Designer, Agile</li>
					<li>W: 408-284-3823<br />C: 408-705-7233</li>
					<li><a href="mailto:Michele.Yoshikawa@agile.com"><img src="/shared/../../images/icn_email.png" alt="" />Michele.Yoshikawa@agile.com</a></li>
				</ul>

			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="dave" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('dave'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_dave.png" alt="" /></div>
			<div class="vitals">

				<ul>
					<li><strong>Dave Elliott</strong><br />Designer, Agile</li>
					<li>W: 408-284-3824<br />C: 408-375-2206</li>
					<li><a href="mailto:Dave.Elliott@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Dave.Elliott@agile.com</a></li>
				</ul>
			</div>

		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="kishore" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/../../images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('kishore'));" alt="" /></span>
			<div class="left"><img src="/shared/../../images/pho_kishore.png" alt="" /></div>
			<div class="vitals">
				<ul>

					<li><strong>Kishore Subramanian</strong><br />Principal Software Engineer, Agile</li>
					<li>W: 408-284-3820<br />C: 408-480-4388</li>
					<li><a href="mailto:Kishore.Subramanian@agile.com"><img src="/shared/../../images/icn_email.png" alt="" /> Kishore.Subramanian@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>

	</div>
	
	<!-- End Biz Cards. -->


</body>
</html>