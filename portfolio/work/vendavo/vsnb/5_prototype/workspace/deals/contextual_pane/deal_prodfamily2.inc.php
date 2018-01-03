<header class="navbar-fixed-top">
	<h1>Line Item Details</h1>
	<button class="butcon pull-right close-pane"><i class="fa fa-times"></i></button>
</header>
<article class="edit-form">
	<p class="description">TDI T 80</p>
	<ul class="stat-box">
		<li class="scorebox"><strong>66</strong><span class="score bad">&nbsp;</span><span class="score">&nbsp;</span><span class="score">&nbsp;</span></li>
		<li><strong>&mdash;</strong><em>Approvals Levels</em></li>
		<li><strong>4</strong><em>Messages</em></li>
	</ul>
    <!-- This may return (per Joel) save but commenting for now :::: div class="competitive-chart">
        <div class="dropdown left-border competition-price" style="left: 30%;">
            <a href="#/" class="responsive-menu dropdown-toggle" data-toggle="dropdown">
            	<span>Competition Price</span>
            	<span>&#8364;1,032.98</span>
            </a>
        </div>
        <div class="chart bad">
            <span style="width: 35%;">&euro;1049.25</span>
            <div class="marker-target" style="left: 36%"></div>
        </div>
        <div class="dropdown right-border last-price" style="left: 40%;">
            <a href="#/" class="responsive-menu dropdown-toggle" data-toggle="dropdown">
            	<span>Last Price</span>
            	<span>&#8364;1,252.35</span>
            </a>
        </div>
    </div-->
	<form action="#">
		<fieldset>
            <h1>Product Hierarchy 3 Volume</h1>
			<dl>
				<dd>
					<label>Planned Volume</label>
					<input type="text" value="489 KG" placeholder="Required" aria-required="true">
				</dd>
				<dd>
					<label>Agreed Volume</label>
					<input type="text" value="500 KG" placeholder="Required" aria-required="true">
				</dd>
				<dd>
					<label>Annual Volume</label>
					<input type="text" value="1899 KG" placeholder="Required" aria-required="true">
				</dd>
				<dd>
					<label>Volume Compliance</label>
					<input type="text" value="83%" placeholder="Required" aria-required="true">
				</dd>
				<dd>
					<label>Reason Code</label>
					<input type="text" value="Demand" placeholder="Required" aria-required="true">
				</dd>
			</dl>
		</fieldset>
	</form>
</article>
<footer>
	<div class="action-group">
		<button type="button" class="btn btn-default" data-toggle="modal" data-target="#line-item-delete-modal">Delete Line Item</button>
	</div>
</footer>