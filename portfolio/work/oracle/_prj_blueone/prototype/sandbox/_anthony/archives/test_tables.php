<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Tables</title>
<link type="text/css" rel="stylesheet" href="global/css/base.css">
<link type="text/css" rel="stylesheet" href="global/css/common.css">
<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

<script type="application/javascript">
	jQuery(document).ready(prepTables);
	function prepTables()
	{
		//jQuery('tr td:nth-child(3)').html('xxxxxxx');
		jQuery('table.with_handle thead tr').each
		( 
			function() 
			{ 
				jQuery(this).prepend('<th class="table_handle"></th>');
    		}
		)
		jQuery('table.with_handle tbody tr').each
		( 
			function() 
			{ 
				jQuery(this).prepend('<td class="table_handle"></td>');
    		}
		); 
	}
</script>
<style type="text/css">
	/* Table Styles */
	/* This is a clean version of tables to be integrated into our styles. */
	
	/*
		Default Table
		Displays table with collapsed outlines.
	*/
	table 	{ 
				width:100%; 
				border-collapse: collapse; 
				border: 1px solid #ddd;
			}
	th		{
				text-align: left;
				background-color: #f2f2f2; 
			}
	th, td	{ 
				border-right: 1px solid #ddd;
				border-bottom: 1px solid #ddd;
				padding: 2px 5px;
			}

	/*
		Linear Table
		Displays a horizontal lined table.
	*/
	table.linear_h th,
	table.linear_h td { border-right: 0; }

	/*
		Colum Table
		Displays a vertical lined table.
	*/
	table.linear_v td { border-bottom: 0; }

	/*
		Table handle styles
		Table handle styles.  Dynamically prepended to each row by a small jQuery script.
	*/
	.linear .table_handle,
	.table_handle 
	{
		background-color: #ccc;
		width:5px;
		border-right: 1px dotted #666;
		cursor: pointer;
	}
			
	/* Table Red Skin */
	.red_theme th { background-color:#AE0000; color:#fff; }
	.red_theme td { background-color:#FFE1E2 }
	.red_theme .table_handle { background-color:#83181C }
	
</style>
</head>
<body>
<h2>Default Table</h2>
<p>&lt;table&gt; (no classes applied)</p>
<table>
	<thead>
    	<tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
            <th>Col 5</th>
		</tr>
    </thead>
    <tbody>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
    </tbody>
</table>

<h2>Default Table with Handle</h2>
<p>&lt;table class="with_handle"&gt;<br />
Handle cell is dynamically applied, no mark-up necessary.</p>
<table class="with_handle">
	<thead>
    	<tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
            <th>Col 5</th>
		</tr>
    </thead>
    <tbody>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
    </tbody>
</table>

<h2>Linear H Table</h2>
<p>&lt;table class="linear_h"&gt;</p>
<table class="linear_h">
	<thead>
    	<tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
            <th>Col 5</th>
		</tr>
    </thead>
    <tbody>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
    </tbody>
</table>

<h2>Linear H Table with Handle</h2>
<p>&lt;table class="linear_h with_handle"&gt;</p>
<table class="linear_h with_handle">
	<thead>
    	<tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
            <th>Col 5</th>
		</tr>
    </thead>
    <tbody>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
    </tbody>
</table>



<h2>Linear V Table</h2>
<p>&lt;table class="linear_v"&gt;</p>
<table class="linear_v">
	<thead>
    	<tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Col 4</th>
            <th>Col 5</th>
		</tr>
    </thead>
    <tbody>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
		<tr>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        	<td>Lorem</td>
        </tr>
    </tbody>
</table>

</body>
</html>
