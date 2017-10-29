<?php 
	$local_js_dir = "/prototype/html/alpha/js"; 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; User Tasks Explorations - Week 2</title>
	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

	<h1>User Tasks Explorations - Week 2</h1>
	<p class="posted">
		Posted: April 13, 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Ben.Listwon@agile.com">Ben Listwon</a> &amp; <a href="mailto:Michele.Yoshikawa@agile.com">Michele Yoshikawa</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a><br/>
		<a href="index.php">Week 1</a> | Week 2
	</p>


	<h2>Background &amp; Assumptions</h2>
	<p>
		After a great round of feedback from Week 1, we made a few key decisions.
	</p>
	<ul>
		<li>We still need to determine some general test user tasks to use as
			a benchmark for the functionality of the user tasks nav. (See below 
			for early brainstorms on this)</li>
		<li> Use cases will be determined by
			<ul>
				<li>a user's role</li>
				<li>the active <a href="/design/exploratory/switcher/">switcher</a> choice</li>
				<li>permissions models</li>
			</ul>
		</li>
		<li>User tasks may operate by
			<ul>
				<li>Placing the user on a single task page</li>
				<li>Providing a list of unordered sub-tasks</li>
				<li>Providing a ordered, step-based workflow</li>
			</ul>
		</li>
	</ul>
	
	
	

	<h2 class="padded_break">User Tasks By Product</h2>
	<p>
		Michelle has prepared this quick list of some potential User Tasks.
	</p>
	<h4>PC</h4>
	<ul>
		<li>Create Item</li>
		<li>Create BOM</li>
		<li>Add Items to BOM</li>
		<li>Add Manufacturer Parts</li>
		<li>Add Sites</li>
		<li>Create Change</li>
		<li>Add Affected Items</li>
		<li>Add Approvers/Observers</li>
		<li>Redline BOM</li>
		<li>Route Change</li>
		<li>Approve Change</li>
		<li>Add Attachments (Files)</li>
		<li>Checkout File</li>
		<li>Checkin File</li>
		<li>Get/Download File</li>
		<li>Open File</li>
		<li>View File (in Viewer)</li>
		<li>BOM Bulk Change</li>
		<li>Mass Update</li>
		<li>Route a Document</li>
		<li>New Part Creation Process</li>
	</ul>
	<h4>PG&C</h4>
	<ul>
		<li>Create Declaration</li>
		<li>Add Parts (Items, Mfr Parts, Part Groups)</li>
		<li>Route Declaration</li>
		<li>Respond to Declaration</li>
		<li>Add Suppliers</li>
		<li>Create Specification</li>
		<li>Add Substances</li>
		<li>Create Part Groups</li>
	</ul>
	
	
	<h2 class="padded_break">User Tasks By Switcher Area</h2>
	<p>
		Michelle also synthesized this list of potential User Tasks that Brian 
		Cipresse and Dries D'hooghe thought up.
	</p>
	<h4>Projects</h4>
	<ul>
		<li>Find parts or products used in this project (PC)</li>
		<li>Complete open change order open tasks (PC)</li>
		<li>Evaluate compliance of an assembly (preliminary or not) or a list of parts (PG&C)</li>
		<li>Clean up a non-compliant BOM by performing a what if analysis (trying out part replacements) (PG&C)</li>
		<li>Track the progress of a cleaning up a BOM or part list for compliance (open CARs, open MCOs, open ECOs, open Declarations, non-compliant parts, parts with exemptions) (PG&C)</li>
	</ul>
	<h4>Products</h4>
	<ul>
		<li>Retrieve and view product information (PC)</li>
		<li>Create and modify product structure (BOM) (PC)</li>
		<li>Create, link or update various product (BOM) views (as-designed, as-manufactured, as-shipped, as-maintained) (PC)</li>
		<li>Request, approve or participate in product change process (PC)</li>
		<li>Look-up the shipping product compliance parameters (product compliance status, product recyclability parameters, countries the product can be sold in, labeling, packaging options, technology export restrictions) (PG&C)</li>
		<li>Generate a product compliance certificate for customers and countries (PG&C)</li>
		<li>Store and retrieve product recycling information (location of battery, break-down instructions, test certificates) (PG&C)</li>
		<li>View high risk components in a product (PCM)</li>
	</ul>
	<h4>Parts</h4>
	<ul>
		<li>Retrieve and view part information (PC)</li>
		<li>Update part information (descriptions, add AML, add quality info, etc.) (PC)</li>
		<li>Request, approve, or participate in part change process (PC)</li>
		<li>Define and maintain manufacturer parts (PC)</li>
		<li>Run compliance searches (find all non-compliant parts) (PG&C)</li>
		<li>Show open declarations/CARs/Changes against parts (items and mfr parts) in a BOM (PG&C)</li>
		<li>Create a list of parts (PG&C)</li>
	</ul>
	<h4>Documents</h4>
	<ul>
		<li>Attach files to parts and documents (PC)</li>
		<li>Store, track and manage files and file versions (PC)</li>
		<li>Share and access files with self, group or others (PC)</li>
		<li>Invoke batch operations on groups of files (get, print, export, checkout, markup, view, send) (PC)</li>
		<li>Create documentation packages (PG&C)</li>
		<li>Collaborate on documents with an ad hoc group of people (PG&C)</li>
	</ul>
	<h4>Contacts</h4>
	<ul>
		<li>Define Manufacturers (PC)</li>
		<li>Define and maintain change analyst lists (PC)</li>
		<li>Define and maintain component engineer lists (PC)</li>
		<li>Define and maintain sign-off groups (suppliers, electrical engineering, mechanical engineering, etc.) (PC)</li>
		<li>Define and maintain user or group site-control (PC)</li>
		<li>Manage my address book (PG&C)</li>
		<li>Create and manage suppliers (PG&C)</li>
		<li>Create and manage manufacturers (PG&C)</li>
		<li>Create and manage customers (PG&C)</li>
	</ul>

	
	<h2 class="padded_break">Next Steps</h2>
	<p>
		Need to get cracking on visual treatment for this!
	</p>

</div>

<? 
	$gContactEmail = "ben@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>



</body>
</html>