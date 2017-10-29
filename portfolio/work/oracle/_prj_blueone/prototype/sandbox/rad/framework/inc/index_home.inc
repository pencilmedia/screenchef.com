<?
require "rad/classes/DirectoryItems.php";

function format($value)
{
	$value = str_replace("_"," ",$value);
	$value = str_replace(".php","", $value);
	$value = substr($value, 3);
	return $value;
}

function getAgileForms ($directory, $extension)
{
	$di = & new DirectoryItems($directory, 'php');
	$di->indexOrder();
	$list = "";
	$base_path = dirname($_SERVER['SCRIPT_FILENAME']);
	
	foreach ($di->getFileArray() as $key => $value)
	{
		if (substr($value, 0, strlen($extension)) == $extension)
		{
			$fh = fopen($base_path . "/" . $directory . "/" . $value, 'r');
			$the_data = fread($fh,100);
	
			if ( preg_match('/<popup>.*<\/popup>/i', $the_data, $result) )
			{
				$dims = explode(",", strip_tags($result[0]));
				$width = $dims[0];
				$height = $dims[1];
				
				$out_str = '<li><a href="#" onclick="launch_dialog(\'%s\', %d, %d); return false;" title="File: %s">%s</a></li>' . "\n";
				$list .= sprintf($out_str, 
									($directory . "/" . $value),
									$width,
									$height,
									($directory . "/" . $value),
									format($value)
								);
			} else {
				$out_str = '<li><a href="#" onclick="launch(\'%s\');return false;" title="File: %s">%s</a></li>' . "\n";
				$list .= sprintf($out_str, 
									($directory . "/" . $value),
									($directory . "/" . $value),
									format($value)
								);
			}
		}
	}
	return $list;
}
?>
