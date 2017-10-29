<!-- VSN-b sidebar -->
<aside class="sidebar-menu animate">
	<header>
		<h1><img <?php echo 'src="' . $ROOT . 'assets/img/logo_vendavo_opaque.png"' ?> />Deal Guide</h1>
	</header>
	<div class="content">
		<nav>
			<ul class="nav nav-stacked">
				<li <?php if ($thisPage=="approval") echo " class=\"active\""; ?>><a <?php echo 'href="' . $ROOT . 'workspace/approval/"'; ?> class="pending-approval">Pending Approval<span class="badge pull-right">3</span></a></li>
				<li class="divider"></li>
				<li <?php if ($thisPage=="deallist") echo " class=\"active\""; ?>><a <?php echo 'href="' . $ROOT . '"'; ?>>All Deals</a></li>
				<li <?php if ($thisPage=="favorites") echo " class=\"active\""; ?>><a href="#">Favorites<span class="badge pull-right">2</span></a></li>
				<li <?php if ($thisPage=="contracts") echo " class=\"active\""; ?>><a href="#">Price Agreements</a></li>
				<li <?php if ($thisPage=="quotes") echo " class=\"active\""; ?>><a href="#">Spot Quotes</a></li>
				<li <?php if ($thisPage=="expired") echo " class=\"active\""; ?>><a href="#">Expired</a></li>
				<li class="divider"></li>
				<li <?php if ($thisPage=="pricelookup") echo " class=\"active\""; ?> ><a <?php echo 'href="' . $ROOT . 'workspace/price_lookup/"'; ?> >Price Lookup</a></li>
			</ul>
		</nav>
		<footer>
			<div class="btn-group btn-group-justified footer-actions">
			  <div class="btn-group">
			    <button type="button" class="btn btn-default"><i class="icon-settings"></i><span>Settings</span></button>
			  </div>
			  <div class="btn-group">
			    <a href="authenticate.php" class="btn btn-default"><i class="icon-logout"></i><span>Sign Out</span></a>
			  </div>
			</div>
		</footer>
		
	</div>
</aside>
<div class="mask "></div>