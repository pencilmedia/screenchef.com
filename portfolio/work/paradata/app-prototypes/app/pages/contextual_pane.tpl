<nav class="navbar-fixed-top">
	<div class="contextual-actions clearfix hidden">
		<div class="dropdown with-drill pull-right contextual-menu">
				<button class="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">Actions <span class="caret"></span></button>
			     <div class="dropdown-menu">
			        <div class="drillcard">
			            <ul class="frontside no-animate slideInLeft">
			                <li role="presentation" class="drill-in"><a role="menuitem" tabindex="-1" href="#/">Change Status<i class="fa fa-chevron-right"></i></a></li>
			                <li class="divider"></li>
			                <li role="presentation"><a role="menuitem" tabindex="-1" href="#/" id="deleteAccount">Delete this account</a></li>
			            </ul>
			            <ul class="backside no-animate slideOutRight">
			                <li class="drilldown-back"><a href="#" class="drill-out"><i class="fa fa-chevron-left"></i>Change Status</a></li>
			                <li role="presentation"><a role="menuitem" tabindex="-1" href="#/">Active</a></li>
			                <li role="presentation"><a role="menuitem" tabindex="-1" href="#/">In-active</a></li>
			                <li role="presentation"><a role="menuitem" tabindex="-1" href="#/">Archived</a></li>
			            </ul>
			        </div>
			    </div>
			<!-- Contextual Pane Actions -->
			<button class="btn btn-link btn-icon" id="account-edit"><i class="fa fa-pencil-square-o"></i></button>
			<button class="btn btn-link btn-icon close-contextual"><i class="fa fa-times"></i></button>
		</div>
	</div>
</nav>
<div class="contextual-content">
	<section data-id="1" class="no-content">
		<p>Nothing is selected. Choose a customer account to view on the left.</p>
	</section>
	<section data-id="2">
		<article class="info-profile">
			<address>
				<span class="photo"><img src="./common/img/customer_logos/logo_adaptec.png"></span>
				<h1>Adaptec<span class="status">Active</span></h1>
				<p>3450 Central Park Ave.</p>
				<p>Santa Clara, CA 95051</p>
			</address>
			<address>
				<span class="photo"><img src="./common/img/placeholder-user.png"></span>
				<h1>John Smith</h1>
				<p><a href="#/">john.smith@adaptec.com</a></p>
				<p>408.707.1123</p>
			</address>
		</article>
		<article class="info-tags">
			<h6>Tags</h6>
			<p>
				<span class="label label-primary">Demo Account</span><span class="label label-primary">Class A</span>
			</p>
			<form>
				<div class="form-group">
					<label for="add-tag" class="sr-only">Add a Tag</label>
					<input type="text" class="form-control" id="add-tag" placeholder="Enter a Tag">
				</div>
			</form>
		</article>
		<article class="info-apps">
			<h6 class="w-edit">Applications<button class="btn btn-link btn-icon" data-toggle="modal" data-target="#add-user"><i class="fa fa-pencil-square-o"></i></button></h6>
			<ul class="info-list">
				<li><a href="">BOM Advantage <span class="item-status"><em>Licensed</em><i class="fa fa-chevron-down"></i></span></a></li>
				<li><a href="">Price Guardian <span class="item-status"><em>Not Licensed</em><i class="fa fa-chevron-down"></i></span></a></li>
				<li><a href="">Catalog Optimizer <span class="item-status"><em>Licensed</em><i class="fa fa-chevron-down"></i></span></a></li>
			</ul>
		</article>
		<article class="info-datasets">
			<h6>Datasets</h6>
			<ul class="info-list">
				<li><a href="">MFR Parts <span class="item-status"><em>Licensed</em><i class="fa fa-chevron-down"></i></span></a></li>
				<li><a href="">Vendor <span class="item-status"><em>Licensed</em><i class="fa fa-chevron-down"></i></span></a></li>
				<li><a href="">Dataset Three <span class="item-status"><em>Not Licensed</em><i class="fa fa-chevron-down"></i></span></a></li>
			</ul>
		</article>
		<article class="info-other">
			<h6>Other Information</h6>
			<ul class="info-list">
				<li><a href="">7 Users<i class="fa fa-chevron-right"></i></a></li>
				<li><a href="">Web Services<i class="fa fa-chevron-right"></i></a></li>
				<li><a href="">Configurations<i class="fa fa-chevron-right"></i></a></li>
			</ul>
		</article>
	</section>
	<section data-id="3">
		Slat 2 selected
	</section>
	<!-- Edit Section -->
	<section class="edit-section">
		@@include('./../dialogs/add_account.html')
		<footer class="navbar-fixed-bottom">
		    <button class="btn btn-default">Cancel</button>
		    <button class="btn btn-primary">Save</button>
		</footer>
	</section>
</div>
