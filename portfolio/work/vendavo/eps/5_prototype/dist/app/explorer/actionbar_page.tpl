<!-- Page Actionbar
================================================== -->
<header class="page-actionbar navbar-fixed-top" role="navigation">
	<div class="page-navigator dropdown pull-left">
		<button class="btn btn-link dropdown-toggle" type="button" id="analysis-switcher" data-toggle="dropdown" aria-expanded="true">Low Margin Customers<i class="fa fa-caret-down"></i></button>
		<div class="dropdown-menu dropdown-analysis colonnade two" role="menu" aria-labelledby="analysis-switcher">
			<div class="lt-column">
				<dl>
					<dt>Recent Analyses</dt>
					<dd role="presentation"><a role="menuitem" tabindex="-1" href="#">Customers with Low Margin Transactions</a></dd>
					<dd role="presentation"><a role="menuitem" tabindex="-1" href="#">Customers with Negative Margin Tranasactions</a></dd>
					<dd role="presentation"><a role="menuitem" tabindex="-1" href="#">Bottom Performing Sales Reps</a></dd>
					<dd role="presentation"><a role="menuitem" tabindex="-1" href="#">Products with Low Margin Transactions</a></dd>
				</dl>
			</div>
			<div class="rt-column">
				<dl>
					<dt>&nbsp;</dt>
					<dd role="presentation"><a role="menuitem" tabindex="-1" href="#">Customers with Low Margin Transactions</a></dd>
					<dd role="presentation"><a role="menuitem" tabindex="-1" href="#">Customers with Negative Margin Tranasactions</a></dd>
				</dl>
			</div>
		</div>
	</div>
	<div class="page-actions dropdown-analysis-closed pull-right">
		<ul class="nav navbar-nav navbar-right">
              <li><button class="btn btn-icon" type="button"><i class="fa fa-floppy-o"></i></button></li>
              <li><button class="btn btn-icon" type="button"><i class="fa fa-download"></i></button></li>
              <li class="dropdown">
                <button class="btn btn-icon dropdown-toggle" type="button" id="actionbar-share-menu" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-share-alt"></i></button>
				<ul class="dropdown-menu" role="menu" aria-labelledby="actionbar-share-menu">
					<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Copy Link to Clipboard</a></li>
					<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Email Link</a></li>
				</ul>
              </li>
              <li class="dropdown">
              	<button class="btn btn-icon dropdown-toggle" type="button" id="actionbar-menu" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-ellipsis-v"></i></button>
			<ul class="dropdown-menu" role="menu" aria-labelledby="actionbar-menu">
				<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-plus"></i>New Analysis</a></li>
				<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-copy"></i>Duplicate</a></li>
				<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-trash-o"></i>Delete Analysis</a></li>
				<li role="presentation" class="divider"></li>
				<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-file-text-o"></i>Edit Properties</a></li>
				<li role="presentation" class="divider"></li>
				<li role="presentation">
					<a role="menuitem" tabindex="-1" href="#" id="comparison-filter"><i class="fa fa-check-square-o"></i>Comparison</a>
				</li>
			</ul>
              </li>
            </ul>
	</div>
	<div class="page-actions dropdown-analysis-open pull-right">
		<button type="button" class="btn btn-link"><i class="fa fa-th-list"></i>View All</button>
		<div class="search-analysis pull-right">
			<input type="search" class="form-control" id="search-analyses" placeholder="Search Analyses">			
			<button class="btn btn-link" type="button"><i class="fa fa-search"></i></button>
		</div>		
	</div>
</header>