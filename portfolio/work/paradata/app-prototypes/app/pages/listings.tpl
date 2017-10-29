<!-- BEGIN: PAGE HEAD -->
@@include('./../components/page_head.tpl', {"productTitle": "@@accountsTitle"})
<!-- BEGIN: PAGE ACTIONS -->
<article class="slat-actions">
    <div class="flex-colonnade list-actions">
        <div class="flex list-filters">
            <a href="#/" class="btn btn-link active">Active</a>
            <a href="#/" class="btn btn-link">Demo</a>
            <a href="#/" class="btn btn-link">Archived</a>
        </div>
        <form class="flex-column form-inline list-search">
            <div class="input-group toggle-search">
                <span class="input-group-addon" id="list-search" data-toggle="toggle-search"><i class="fa fa-search"></i></span>
                <input type="text" class="form-control" name="searchList" placeholder="Search List" aria-describedby="list-search">
            </div>
        </form>
    </div>
</article>
<!-- BEGIN: CUSTOMER LIST -->
<dl class="listings">
	<dd>
		<a href="#/" class="flex-colonnade" data-id="2">
			<div class="flex slat-info">
				<span class="customer-logo"><img src="./common/img/customer_logos/logo_adaptec.png"></span>
				<h1>Adaptec</h1>
				<p>
					<span>John Smith</span>
					<span>408-707-1123</span>
				</p>
				<p>
					<span>BOM Advantage, Catalog Optimizer, Parts, Vendors</span>
				</p>
			</div>
			<div class="flex-column slat-activity">
				<span class="status">Active</span>
				<span class="text-muted last-login">Logged in <em>Today</em></span>
			</div>
		</a>
	</dd>
	<dd>
		<a href="#/" class="flex-colonnade" data-id="3">
			<div class="flex slat-info">
				<span class="customer-logo"><img src="./common/img/customer_logos/logo_amd.png"></span>
				<h1>Advanced Micro Devices</h1>
				<p>
					<span>Ruby Jones</span>
					<span>310-432-6958</span>
				</p>
				<p>
					<span>BOM Advantage, Parts</span>
				</p>
			</div>
			<div class="flex-column slat-activity">
				<span class="status">Active</span>
				<span class="text-muted last-login">Logged in <em>April 11, 2015</em></span>
			</div>
		</a>
	</dd>
	<dd>
		<a href="#/" class="flex-colonnade">
			<div class="flex slat-info">
				<span class="customer-logo"><img src="./common/img/customer_logos/logo_agilent.png"></span>
				<h1>Agilent Technologies</h1>
				<p>
					<span>Fred Mertz</span>
					<span>408-654-8876</span>
				</p>
				<p>
					<span>Catalog Optimizer</span>
				</p>
			</div>
			<div class="flex-column slat-activity">
				<span class="status">Active</span>
				<span class="text-muted last-login">Logged in <em>June 1, 2015</em></span>
			</div>
		</a>
	</dd>
	<dd>
		<a href="#/" class="flex-colonnade inactive">
			<div class="flex slat-info">
				<span class="customer-logo"><img src="./common/img/placeholder-logo.png" class="placeholder-logo"></span>
				<h1>Altera</h1>
				<p>
					<span>Kathy Robertson</span>
					<span>213-666-4434</span>
				</p>
				<p>
					<span>No applications</span>
				</p>
			</div>
			<div class="flex-column slat-activity">
				<span class="status">In-active</span>
				<span class="text-muted last-login">Logged in <em>February 3, 2014</em></span>
			</div>
		</a>
	</dd>
</dl>
<footer>
	<p>4 customer accounts listed</p>
</footer>