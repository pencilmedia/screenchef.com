<!-- VSN-b navbar -->
<header class="navbar-fixed-top" role="navigation">
	<!-- Show Sidebar Menu Button -->
	<span class="sidebar-action">
		<button class="butcon" data-toggle="tooltip" data-title="Show Sidebar" data-placement="right"><i class="fa fa-bars"></i></button>
		<h1>All Deals</h1>
	</span>
	<!-- Drill Back Button -->
     <button class="butcon back" data-toggle="tooltip" data-title="Back to List" data-placement="right"><i class="fa fa-chevron-left"></i></button>
	<!-- Create Actions Button Set -->
	<div class="create-actions dropdown pull-right">
		<button class="butcon" data-toggle="dropdown"><i class="fa fa-plus"></i></button>
		<ul class="dropdown-menu" role="menu">
			<li><a href="#/" data-show-contextual="create-quote">New Spot Quote</a></li>
			<li><a href="#/" data-show-contextual="create-agreement">New Price Agreement</a></li>
		</ul>
	</div>
    <!-- Deal Actions Button Set -->
     <div class="deal-actions dropdown pull-right">
     	<button class="btn">Submit</button>
		<button class="butcon" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
		<ul class="dropdown-menu" role="menu">
			<li><a href="#/">Share</a></li>
			<li><a href="#/" class="deal-copy">Copy</a></li>
			<li><a href="#deal-delete-modal" data-toggle="modal">Delete</a></li>
			<li><a href="#/" id="toggleStatusMsg">Toggle Status Message</a></li>
		</ul>
     </div>
     <!-- Price Lookup Button Set -->
     <div class="price-lookup-actions dropdown pull-right">
     	<button class="btn">View in Deal</button>
		<button class="butcon" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
		<ul class="dropdown-menu" role="menu">
			<li><a href="#">Share</a></li>
		</ul>
     </div>
</header>
