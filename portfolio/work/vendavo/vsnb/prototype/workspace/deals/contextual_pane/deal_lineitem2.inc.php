<header class="navbar-fixed-top">
	<h1>Line Item Details</h1>
	<button class="butcon pull-right close-pane"><i class="fa fa-times"></i></button>
</header>
<article class="edit-form">
	<p class="description">DESMODUR T 80 0250,00 KG B13</p>
	<ul class="stat-box">
		<li class="scorebox"><strong>66</strong><span class="score bad">&nbsp;</span><span class="score">&nbsp;</span><span class="score">&nbsp;</span></li>
		<li><strong>3</strong><em>Approvals Levels</em></li>
		<li><strong>2</strong><em>Messages</em></li>
	</ul>
    <div class="competitive-chart">
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
    </div>
	<form action="#">
		<fieldset>
			<h1>Pricing</h1>
			<dl>
				<dd>
					<label>Stretch Target Price</label>
					<input type="text" placeholder="&euro;2,078.33" readonly>
				</dd>
				<dd>
					<label>Gross Price</label>
					<input type="text" placeholder="Required" value="&euro;2,065.00" aria-required="true">
				</dd>
				<dd>
					<label>Pricing Unit</label>
					<input type="text" placeholder="Required" value="1,000 KG" aria-required="true">
				</dd>
				<dd>
					<label>Direct Discount / Surcharge</label>
					<input type="text" placeholder="Required" value="" aria-required="true">
				</dd>
				<dd>
					<label>Customer Requested Price</label>
					<input type="text" placeholder="Required" value="&euro;2,030.00" aria-required="true">
				</dd>
				<dd>
					<label>VAT (Down)</label>
					<input type="text" value="&euro;2,065.00" readonly>
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