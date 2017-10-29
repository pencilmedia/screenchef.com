<?php 
	$local_js_dir = "/prototype/html/alpha/js"; 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; User Tasks Explorations - Week 1</title>
	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

	<h1>User Tasks Explorations - Week 1</h1>
	<p class="posted">
		Posted: April 6, 2006 &nbsp;&bull;&nbsp; Owner: <a href="mailto:Ben.Listwon@agile.com">Ben Listwon</a> &amp; <a href="mailto:Michele.Yoshikawa@agile.com">Michele Yoshikawa</a> &nbsp;&bull;&nbsp; <a href="/design/exploratory">Return to Home</a><br/>
		Week 1 | <a href="index1.php">Week 2</a>	
	</p>	


	<h2>Background &amp; Assumptions</h2>
	<ul>
		<li>We still need to determine some general test use cases to use as
			a benchmark for the functionality of the use case nav.</li>
		<li> Use cases will be determined by a user's role, the active 
			<a href="/design/exploratory/switcher/">switcher</a> choice and permissions models.</li>
	</ul>
	
	
	

	<h2 class="padded_break">Basic List</h2>
	<div class="use_case">
		<ul>
			<li><a name="link">Use Case 1</a></li>
			<li><a name="link">Use Case 2</a></li>
			<li><a name="link">Use Case 3</a></li>
			<li><a name="link">Use Case 4</a></li>
			<li><a name="link">Use Case 5</a></li>
		</ul>
	</div>
	<p>
		The simplest implementation would be to build a flat list of use cases.
	</p>
	<h3>Pros</h3>
	<ul>
		<li>Very easy to understand</li>
		<li>All uses cases are readily visible</li>
	</ul>
	<h3>Cons</h3>
	<ul>
		<li>No clear organization</li>
		<li>Long lists are unmanageable</li>
		<li>Difficult to find use case if user frequently uses one at the bottom</li>
	</ul>
	
		

	<h2 class="padded_break">Grouped Use Cases</h2>
	<div class="use_case">
		<ul>
			<li><a name="link">Group 1</a>
				<ul>
					<li><a name="link">Use Case 1</a></li>
					<li><a name="link">Use Case 2</a></li>
					<li><a name="link">Use Case 3</a></li>
					<li><a name="link">Use Case 4</a></li>
					<li><a name="link">Use Case 5</a></li>
				</ul>
			</li>
			<li><a name="link">Group 2</a></li>
			<li><a name="link">Group 3</a></li>
		</ul>
	</div>
	<p>
		An improvement on the above would be to group use cases in some way that
		would be advantageous to the user (by function, alphabetically, etc).
		These groups can then contain several use cases, and be browsed just like
		a standard tree structure.
	</p>
	<h3>Pros</h3>
	<ul>
		<li>Familiar navigation paradigm</li>
		<li>Use cases organized more intuitively</li>
		<li>Whole groups can be added/removed based on permissions, etc</li>
	</ul>
	<h3>Cons</h3>
	<ul>
		<li>Potentially harder to locate a use case</li>
	</ul>





	<h2 class="padded_break">Conveying Steps Within the Use Case</h2>
	<div class="use_case">
		<ul>
			<li><a name="link">Use Case 1</a>
				<ul>
					<li><a name="link">Step 1</a></li>
					<li><a name="link">Step 2</a></li>
					<li><a name="link">Step 3</a></li>
					<li><a name="link">Step 4</a></li>
				</ul>
			</li>
			<li><a name="link">Use Case 2</a></li>
			<li><a name="link">Use Case 3</a></li>
			<li><a name="link">Use Case 4</a></li>
			<li><a name="link">Use Case 5</a></li>
		</ul>
	</div>
	<p>
		Another concern is conveying the steps within a use case. One method 
		might be to show the steps below the use case when a user clicks to begin
		the selected use case.
	</p>
	<h3>Pros</h3>
	<ul>
		<li>Steps immediately show for the use case</li>
		<li>Very clear what will need to be done for the use case</li>
	</ul>
	<h3>Cons</h3>
	<ul>
		<li>Potentially confusing when using multi-window version of app</li>
		<li>Makes the use case tree a little more illegible</li>
	</ul>
	
	
	
	
	<h2 class="padded_break">Steps for One Use Case at a Time</h2>
	<div class="use_case">
		<ul>
			<li><a name="link">Use Case 1</a>
				<ul>
					<li><a name="link">Step 1</a></li>
					<li><a name="link">Step 2</a></li>
					<li><a name="link">Step 3</a></li>
					<li><a name="link">Step 4</a></li>
				</ul>
			</li>
		</ul>
		<p>
			<a name="link">Exit Use Case 1</a>
		</p>
	</div>
	<p>
		A way around some of the confusion of having steps appear beneath each
		use case in the tree when you click on a use case, would be to isolate
		the chosen use case once the user selects and begins.
	</p>
	<h3>Pros</h3>
	<ul>
		<li>Steps very clearly attached to the use case</li>
		<li>Very clear what will need to be done for the use case</li>
	</ul>
	<h3>Cons</h3>
	<ul>
		<li>Potentially confusing when using multi-window version of app</li>
		<li>Hides context of use case</li>
		<li>Requires formalized exit action to return to tree</li>
	</ul>
			


		
		


	<h2 class="padded_break">Putting It All Together</h2>
	<p>
		If we take some of the pros from the examples above, we might arrive at
		a solution like that below. 
	</p>
	<ul>
		<li>A user would select a section from the switcher.</li>
		<li>Then, they would be provided with contextually relevant groups of use cases.</li>
		<li>These groups could contain sub-groups or just use cases, and would be 
			navigated in a tree like fashion.</li>
		<li>Once a use case is selected, the steps to proceed can be rendered 
			in the content area, thus moving the focus of the user's attention 
			to one area for the remainder of the use case.</li>
	</ul>	
	<div class="use_case">
		<ul>
			<li><a name="link">Create</a>
				<ul>
					<li><a name="link">Part</a></li>
					<li><a name="link">Assembly</a></li>
					<li><a name="link">BOM</a></li>
				</ul>
			</li>
			<li><a name="link">Edit</a></li>
			<li><a name="link">Manage</a></li>
			<li><a name="link">Import</a></li>
			<li><a name="link">Export</a></li>
		</ul>
	</div>
	
	<div class="use_case_content_pane">
		<p>
			Create a Part<br/>
			<a name="link">Step 1</a> &gt; <a name="link">Step 2</a> &gt; <a name="link">Step 3</a> &gt; Done
		</p>
	</div>
	
	
	<h2 class="padded_break">Conclusions</h2>
	<p>
		There's still a lot of room to think about how the use case nav could work,
		and I think it is most important to see what we've come up with as an
		interaction model across the various components of the UI, in order to
		best determine how the use case nav will interact with the entire product.
	</p>

</div>

<? 
	$gContactEmail = "ben@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>



</body>
</html>