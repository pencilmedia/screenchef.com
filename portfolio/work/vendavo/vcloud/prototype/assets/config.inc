<?php
	// THIS SETS THE ROOT PATH - CHANGE WHEN YOU MOVE //
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/vcloud/";
   include_once($path);
   /////////////////////////////////////////////////////

   // Browser Title Names
	define("homeTitle", "Vendavo Prototype");
	define("internalServerErrorTitle", "Internal Server Error");
	define("sysMaintenanceTitle", "System Maintenance");

	// Set the path that will be used in include files
	define("vendavoURL", "http://www.vendavo.com");
	define("mainphone", "650.493.5200");

	// Page and Nav Titles
	define("signinTitle", "Sign in to Vendavo");
	define("progressTitle", "Progress Indicator");

	define("marginOppsTitle", "Profit Opportunities");
	define("dataTitle", "Data");
	define("powerRiskTitle", "Power & Risk");
	define("usersTitle", "Users");
	define("customerAccountsTitle", "Customer Accounts");
	define("customerUsersTitle", "Customer Users");
	define("customerCommunicationTitle", "Customer Communications");
	define("listsTitle", "Price Lists");
	define("dealsTitle", "Deals");
	define("vsnTitle", "Sales Negotiator");
	define("accountTitle", "Account Profile");
	define("settingsTitle", "Account Settings");
	define("aboutTitle", "Application Versions");
	define("vsnbTitle", "Vendavo Sales Negotiator");


	// Copyright Info
	define("copyright", "&copy;" . date('Y') . " Vendavo");

?>
