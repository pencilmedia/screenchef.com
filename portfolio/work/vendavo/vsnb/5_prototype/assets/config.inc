<?php
	// THIS SETS THE ROOT PATH - CHANGE WHEN YOU MOVE //
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/vsn/";
   include_once($path);
   /////////////////////////////////////////////////////

	// Set the path that will be used in include files
	define("vendavoURL", "http://www.vendavo.com");
	define("mainphone", "650.493.5200");

	// Page and Nav Titles
	define("vsnbTitle", "Deal Guide");
	define("dealsTitle", "Deal List");
	define("lookupTitle", "Price Lookup");

	// Copyright Info
	define("copyright", "&copy;" . date('Y') . " Vendavo");

?>
