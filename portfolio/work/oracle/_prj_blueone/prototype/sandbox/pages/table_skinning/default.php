<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Table Skinning</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="skins.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="default.php.js"></script>
	<style>
		table#colors { width:200px }
		table#colors td { text-align:center; height: 60px; width:120px;}
		table#custom td { padding: 2px;}
		#blue1 { background-color: #003366; }
		#blue2 { background-color: #336699; }
		#blue3 { background-color: #6699cc; }
		#tan1 { background-color: #999966; }
		#tan2 { background-color: #cccc99; }
		#tan3 { background-color: #ffffcc; }
		#dark1 { background-color: #333; }
		#dark2 { background-color: #666; }
		#dark3 { background-color: #ccc; }
		.skins a { color: white; }
	</style>
 </head>
<body>
	<h2>Table Theme Demo</h2>

	<table id="colors">
		<tr>
			<td id="blue1" class="skins"><a href="#" class="skins" id="003366">Oracle 1</a></td>
			<td id="blue2" class="skins"><a href="#" class="skins" id="336699">Oracle 2</a></td>
			<td id="blue3" class="skins"><a href="#" class="skins" id="6699cc">Oracle 3</a></td>
		</tr>
		<tr>
			<td id="tan1" class="skins"><a href="#" class="skins" id="999966">Oracle 4</a></td>
			<td id="tan2" class="skins"><a href="#" class="skins" id="cccc99">Oracle 5</a></td>
			<td id="tan3" class="skins"><a href="#" class="skins" id="ffffcc" style="color:#333;">Oracle 6</a></td>
		</tr>
		<tr>
			<td id="dark1" class="skins"><a href="#" class="skins" id="333">Oracle 4</a></td>
			<td id="dark2" class="skins"><a href="#" class="skins" id="666">Oracle 5</a></td>
			<td id="dark3" class="skins"><a href="#" class="skins" id="ccc" style="color:#333;">Oracle 6</a></td>
		</tr>
	</table>
	
	<p>&nbsp;</p>
		
	<table id="themed_table" class="blue1">
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
				<th>Header 3</th>
				<th>Header 4</th>
				<th>Header 5</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>									
		</tbody>
	</table>
</body>
</html>