<?
require "rad/classes/DirectoryItems.php";
	
	$message = "";
	$canDelete = false;
	
	function readURL($url = "")
	{
		$file 			= "";
		$filepointer 	= fopen($url,"r");
		if($filepointer)
		{
			while(!feof($filepointer))
			{
				$buffer = fgets($filepointer, 4096);
				$file .= $buffer;
			}
			fclose($filepointer);
		} else {
			die("Could not read URL.");
		}
		return $file;
	}
	
	function generatePages($input_directory, $user="")
	{
		$file_list 		= "";
		$user 			= $user . "_";
		$output_path 	= "generated/base";
		$di 			= & new DirectoryItems($input_directory, 'php');
		foreach ($di->getFileArray() as $key => $value)
		{
			$generated_file_name = str_replace(".php", ".htm", $value);
			$generated_file_name = strtolower($user) . $generated_file_name;
			$file = fopen($output_path . "/" . $generated_file_name, 'w', 1);
			$file_content = readURL( "http://127.0.0.1/kb_phase_1/prototype/web/" . $input_directory . "/" . $value );
			$file_list .= "<p><a href=\"http://127.0.0.1/kb_phase_1/prototype/web/generated/base/" . $generated_file_name . "\"</a>$generated_file_name</a></p>";
			fwrite($file, $file_content); 
			fclose($file);
		}
		// Let's return a list of the newly generated pages.
		return $file_list;
	}

	function deletePages($user="")
	{
		$user 			= strtolower($user . "_");
		$output_path 	= "generated/base";
		$file_list 		= "";
		$di 			= & new DirectoryItems("generated/base", 'htm');

		foreach ($di->getFileArray() as $key => $value)
		{
			if(strstr($value,$user))
				unlink("generated/base/" . $value);
		}
	}

	if ( strlen( $_REQUEST["user"]) > 1 )
	{
		if ( isset($_POST["generate"]))
		{
			// Generate Dialogs
			$dialog_files = "<h4>Dialog Files</h4>";
			$dialog_files .= generatePages("pages/dialogs",$_REQUEST["user"]);
			// Generate Layouts
			$layout_files = "<h4>Layout Files</h4>";
			$layout_files .= generatePages("pages/layouts",$_REQUEST["user"]);
			$message = "<strong>The following files were genrated and placed in the generated/base directory with \"" . strtolower($_REQUEST["user"]) . "_\" prefix:</strong>";
			$canDelete = true;
		} else {
			deletePages($_REQUEST["user"]);
			$message = "Files deleted.";
		}
	}
?>
<html>
<head>
	<title>UX Page Generator</title>
	<link rel="stylesheet" type="text/css" href="rad/framework/css/index_home.css" />
	<style>
		body	{ margin-bottom: 20px; }
		h2 		{ margin-bottom: 20px;}
		h4		{ margin-right: 60px; }
		form 	{ margin-bottom: 10px; }
		p 		{ margin-bottom: 5px; }
	</style>
</head>
<body>
<h2>UX Page Generator</h2>
<form method="post" action="<?= $_SERVER["PHP_SELF"]?>">
	<p>
		<select name="user">
			<option value="">Select User</option>
			<optgroup label="Agile">
				<option value="agile" <? if ($_REQUEST["user"]=="agile") echo "selected=\"selected\""; ?> >Agile</option>
			</optgroup>
			<optgroup label="Users">
				<option value="aherasimchuk" <? if ($_REQUEST["user"]=="aherasimchuk") echo "selected=\"selected\""; ?> >Andrei</option>
				<option value="blistwon" <? if ($_REQUEST["user"]=="blistwon") echo "selected=\"selected\""; ?> >Ben</option>
				<option value="amoquette" <? if ($_REQUEST["user"]=="amoquette") echo "selected=\"selected\""; ?> >Anthony</option>
				<option value="jnave" <? if ($_REQUEST["user"]=="jnave") echo "selected=\"selected\""; ?> >Joel</option>
				<option value="myoshikawa" <? if ($_REQUEST["user"]=="myoshikawa") echo "selected=\"selected\""; ?> >Michele</option>
				<option value="rgarcia" <? if ($_REQUEST["user"]=="rgarcia") echo "selected=\"selected\""; ?> >Ralph</option>
				<option value="taltieri" <? if ($_REQUEST["user"]=="taltieri") echo "selected=\"selected\""; ?> >Tiffany</option>
				<option value="ugajendar" <? if ($_REQUEST["user"]=="ugajendar") echo "selected=\"selected\""; ?> >Uday</option>	
			</optgroup>
		</select>
		<input type="submit" name="generate" value="Generate Files">
		
		<? if ( $canDelete ) { ?>
		<input type="submit" name="delete" value="Delete Generated Files">
		<? } ?>
	</p>
</form>
<?
	if ( strlen( $_REQUEST["user"]) > 1 )
	{
		echo "<p><strong>$message</strong></p>";
		echo $dialog_files;
		echo $layout_files;
	}
?>
</body>
</html>