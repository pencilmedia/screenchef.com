<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; Switcher Preliminary Ideas</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<style type="text/css">
	table.data {margin: 20px 0 0 0;}
	table.data th {background: #e6e6e6; white-space: nowrap; padding: 5px 10px 5px 5px; text-align: right;}
	table.data th.lefty {text-align: left;}
	table.data td {width: 50px; padding: 5px 10px 5px 5px; text-align: right;}
	table.data td.test {width: 300px; text-align: left;}
	table.data td.testresult {width: 250px; text-align: left; padding: 0 0 0 2em;}
	table.data .coldiv {border-left: 1px solid #666;}
</style>

<div id="content">
	<div id="konablue">	
		<h1>Some Simple JS Tests</h1>
		<p class="posted">Posted: May 30, 2006 &nbsp;&bull;&nbsp; Owners: <a href="mailto:Ben.Listwon@agile.com">Ben listwon</a> &nbsp;&bull;&nbsp;  <a href="/design/exploratory">Return to Home</a></p>
	
		<p>
			More comments to come, but the results tend to speak for themselves. All tests are run over 1000 iterations
			of whatever object they are affecting. Results shown are in milliseconds and represent the rough averages 
			of 10 runs per test.
		</p>
		<p>
			NOTE: I am a little wary of the exact numbers on the PC given the frequency with which I saw certain values
			(such as 31, 32, 47, etc). It may be that the JS date is not precise enough, or that the Windows clock is
			not accessible fast enough or something. The numbers are ballpark therefore, but do reinforce trends about
			certain conclusions.
		</p>
		
		<table class="data" cellpadding="0" cellspacing="0">
			<tr>
				<th class="lefty">Test</th>
				<th class="coldiv">Eval</th>
				<th>Loop w/Write</th>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_array.php">Array Eval Test</a></td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">16ms</td><td>47ms</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">15ms</td><td>46ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">91ms</td><td>140ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">90ms</td><td>100ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">32ms</td><td>5ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">140ms</td><td>10ms</td>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_object.php">Object Eval Test</a></td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">31ms</td><td>32ms</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">30ms</td><td>32ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">118ms</td><td>141ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">100ms</td><td>65ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">69ms</td><td>14ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">170ms</td><td>40ms</td>
			</tr>
		</table>
		<table class="data" cellpadding="0" cellspacing="0">
			<tr>
				<th class="lefty">Test</th>
				<th class="coldiv">Create</th>
				<th>Write/Append</th>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_table_no_dom.php">Table Creation - No DOM</a> (not viable, but for comparison)</td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">90ms</td><td>58ms</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">16ms</td><td>109ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">11ms</td><td>324ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">7ms</td><td>170ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">39ms</td><td>16ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">97ms</td><td>75ms</td>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_table_dom1.php">Table Creation - DOM w/o cloneNode</a></td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">906ms</td><td>31ms</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">328ms</td><td>63ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">1127ms</td><td>183ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">500ms</td><td>85ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">300ms</td><td>7ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">380ms</td><td>23ms</td>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_table_dom1-1.php">Table Creation - DOM w/o cloneNode + className</a></td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">969ms</td><td>32ms</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">360ms</td><td>78ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">1268ms</td><td>238ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">602ms</td><td>117ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">731ms</td><td>10ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">630ms</td><td>27ms</td>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_table_dom2.php">Table Creation - DOM with cloneNode</a></td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">891ms</td><td>31ms</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">281ms</td><td>62ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">979ms</td><td>183ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">429ms</td><td>87ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">431ms</td><td>8ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">400ms</td><td>25ms</td>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_table_dom2-1.php">Table Creation - DOM with cloneNode + className</a></td>
				<td class="coldiv" colspan="2">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">906ms</td><td>46ms</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">282ms</td><td>78ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (Intel)</td>
				<td class="coldiv">1032ms</td><td>236ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">470ms</td><td>117ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (Intel)</td>
				<td class="coldiv">659ms</td><td>8ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">540ms</td><td>27ms</td>
			</tr>
		</table>
		<table class="data" cellpadding="0" cellspacing="0">
			<tr>
				<th class="lefty">Test</th>
				<th class="coldiv">className</th>
				<th>style</th>
				<th>setAttrib</th>
			</tr>
			<tr>
				<td class="test"><a href="/design/exploratory/tests/js_speed_styles.php">Setting Styles</a></td>
				<td class="coldiv" colspan="3">&nbsp;</td>
			</tr>
			<tr>
				<td class="testresult">PC IE</td>
				<td class="coldiv">32ms</td><td>62ms</td><td>N/A</td>
			</tr>
			<tr>
				<td class="testresult">PC FireFox</td>
				<td class="coldiv">16ms</td><td>31ms</td><td>46ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac FireFox (PPC)</td>
				<td class="coldiv">28ms</td><td>86ms</td><td>150ms</td>
			</tr>
			<tr>
				<td class="testresult">Mac Safari (PPC)</td>
				<td class="coldiv">13ms</td><td>69ms</td><td>45ms</td>
			</tr>
		</table>

	</div>	
</div>




<? 
	$gContactEmail = "ben@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>