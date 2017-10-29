<?
class DirectoryItems
{
	private $filearray = array();
	public function getFileArray()
	{
		return $this->filearray;
	}
	
	public function __construct($directory,$extension)
	{
		$d = "";
		$trim_len = strlen($extension) * -1;
		
		if ( is_dir($directory) )
		{
			$d = opendir($directory) or die ("Couldn't open the directory.");
			while(false !== ($f=readdir($d)))
			{
				if (substr($f, $trim_len) == $extension) 
					$this->filearray[] = $f;
			}
			closedir($d);
		} else {
			// error
			die("Must pass in a directory");
		}
	}
	
	function indexOrder()
	{
		sort($this->filearray);
	}
	
	function naturalCaseInsensitiveOrder()
	{
		natcasesort($this->filearray);
	}
	
	function getCount()
	{
		return count($this->filearray);
	}
}
?>