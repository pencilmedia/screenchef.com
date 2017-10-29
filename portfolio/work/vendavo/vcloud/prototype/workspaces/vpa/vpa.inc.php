<div class="alert alert-block alert-warning opportunity-removed">
	<button type="button" class="close" data-dismiss="alert">×</button>
	<strong><i class="fa fa-warning-o"></i></strong> Since you've said you aren't interested in that opportunity, we removed it from your list.&nbsp;<a href="#" class="unhide-opportunity">Bring it back.</a>
</div>
<section class="app w_column midas"><!-- Needed to sync with development -->
	<header>
		<h1><?php echo marginOppsTitle ?></h1>
		<article class="page-tools page-actions">
			<!-- Responsive containers revealed at 768px -->
			<div class="btn-group sidebar-responsive">
				<button class="butcon view-favorites" data-toggle="tooltip" data-original-title="Nothing is marked for later" data-placement="bottom"><i class="fa fa-star-o"></i></button>
				<button id="save-search-responsive" class="butcon" role="button" data-toggle="tooltip" data-original-title="Saved Searches" data-placement="bottom"><i class="fa fa-save"></i></button>
				<button id="annulus-responsive" class="butcon" role="button" data-toggle="tooltip" data-original-title="Root Cause Analysis" data-placement="bottom"><i class="icon-graph-wheel"></i></button>
				<button id="other-perspectives-responsive" class="butcon" role="button" data-toggle="tooltip" data-original-title="Other Perspectives" data-placement="bottom"><i class="icon-perspective-switcher"></i></button>
			</div>
	          <?php include("history_switcher.inc.php"); ?>
			<!--a href="#" class="btn parameters"><i class="fa fa-cog"></i></a-->
		</article>
	</header>
	<section class="content">
		<form class="form-inline">
			<fieldset name="advisor-search" class="advisor-search">
				<select id="advisor-search" data-placeholder="Type to search" name="arr[]" class="search-query" multiple="" tabindex="-1" data-fetchmulti="groups" autofocus>
				   <option value="Low Margin">Low Margin</option>
				</select>
				<button class="btn clear-search" type="button" title="Clear the field"><i class="fa fa-times-circle"></i></button>
				<button class="btn save-search disabled" type="button" title="Save this search" disabled="disabled"><i class="fa fa-save"></i></button>
			</fieldset>
		</form>
		<!--<ul class="nav nav-tabs">
			<li class="active"><a href="#opportunity-list" data-toggle="tab">Opportunities</a></li>
			<li><a href="#watch-list" data-toggle="tab">Watch List</a></li>
		</ul>/ TAB NAV -->
		<div class="tab-content opportunities">
			<!-- OPPORTUNITIES TAB -->
			<div class="tab-pane active" id="opportunity-list">
		    	<?php 
		    		include("opportunity_list.inc.php");
		    		// this list includes special no results/list messages include("opportunity_list_limited.inc.php");
		    	?>
			</div>
			<!-- WATCHLIST TAB
			<div class="tab-pane" id="watch-list">
		    	<?php //include("watch_list.inc.php"); ?>
			</div> -->
		</div>
	</section>
	<aside>
		<article id="saved-searches">
			<h2>Saved Searches <button class="proto-edit-pills disabled"><i class="fa fa-pencil"></i></button></h2>
			<div class="saved-search">
				<button class="btn btn-default view-favorites" data-toggle="tooltip" data-original-title="Nothing is marked for later" data-placement="top"><i class="fa fa-star"></i></button>
				<ul class="pill-list">
					<!-- NOTE: ADD THIS WHEN THERE ARE NO PILLS, css should take care of positioning::: 
					li class="label info-msg" data-toggle="tooltip" data-original-title="Annual Product Margin Profit" data-placement="top"><span>You have no saved searches.</span></li
					-->
					<li class="label label-info" data-toggle="tooltip" data-original-title="Annual Product Margin Profit" data-placement="top"><span>Annual Product Margin Profit</span><i class="fa fa-times"></i></li>
					<li class="label label-info" data-toggle="tooltip" data-original-title="Long Value Example ;kxjkljkldjjksdasdfsfasdfasdfasdfasdNBMNBMNBM,NBMNMB,MNB,MNBM,NBM,NBMNB,MBM,NBMNBB" data-placement="top"><span>Long Value Example ;kxjkljkldjjksdasdfsfasdfasdfasdfasdNBMNBMNBM,NBMNMB,MNB,MNBM,NBM,NBMNB,MBM,NBMNBB</span><i class="fa fa-times"></i></li>
				</ul>
			</div>
		</article>
		<article>
			<h2>Opportunity Breakdown</h2>
			<p>Total <?php echo marginOppsTitle ?> of $14.2m which represents a 1.81% return on Net Sales of $81m.</p>
		</article>
		<article id="chart-container" class="chart-container">
			<div id="donut"></div>
			<div id="annulus"><a href="#" class="btn-transparent btn"><span>$14.2m</span></a></div>
		</article>
		<article class="observations">
			<h2>Other Perspectives<a href="javascript: return false" class="view-all" data-toggle="popover">View All</a></h2>
			<ul class="aside-list favorites-list">
				<li>
					<a href="details_perspective/">
				          <h2>
				          	<span>$260k</span>
				          	<span class="bar-chart"><span style="width: 80%"></span></span>
				          </h2>
				          <span>Opportunity for <strong>Slow Moving Products</strong> due to <span class="root-cause">High Freight Costs</span></span>
				          <i class="fa fa-star"></i>
					</a>
				</li>
			      <li>
			        <a href="#">
			          <h2>
			            <span>$204k</span>
			            <span class="bar-chart"><span style="width: 45%"></span></span>
			          </h2>
			          <span>Opportunity for <strong>Fast Growing Products</strong> due to <span class="root-cause">Net Price Adjustments</span></span>
			          <i class="fa fa-star"></i>
			        </a>
			      </li>
				<li>
					<a href="#">
				          <h2>
				          	<span>$198k</span>
				          	<span class="bar-chart"><span style="width: 45%"></span></span>
				          </h2>
				          <span>Opportunity for <strong>High Priced Products</strong> due to <span class="root-cause">Rebates</span></span>
				          <i class="fa fa-star"></i>
					</a>
				</li>
			</ul>
			<ul class="aside-list">
				<li>
					<a href="#">
						<h2>
							<span>$310k</span>
							<span class="bar-chart"><span style="width: 100%"></span></span>
						</h2>
					<span>Opportunity for <strong>Slow Moving Products</strong> due to <span class="root-cause">Negotiated Price</span></span>
					</a>
				</li>
				<li>
					<a href="#">
						<h2>
							<span>$287k</span>
							<span class="bar-chart"><span style="width: 90%"></span></span>
						</h2>
					<span>Opportunity for <strong>Small Order Size</strong> due to <span class="root-cause">Negotiated Price</span></span>
					</a>
				</li>
			</ul>
			
		</article>
	</aside>
</section>

<?php include("popovers_and_modals.inc.php"); ?>

