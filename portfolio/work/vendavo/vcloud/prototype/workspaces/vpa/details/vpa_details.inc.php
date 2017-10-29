<div class="app midas details"><!-- Needed to sync with development -->
	<header>
		<h1>&nbsp;</h1>
		<article class="page-tools back">
			<div class="btn-group">
				<a <?php echo 'href="' . $ROOT . '"' ?> class="btn" title="Return to the Opportunity List"><i class="fa fa-angle-left"></i><span>LIST</span></a>
			</div>
		</article>
		<article class="page-tools page-actions">
			<div class="btn-group">
				<a href="#" class="btn butcon mark-action" title="Mark This" data-toggle="tooltip" data-original-title="Mark This" data-placement="bottom"><i class="fa fa-star-o"></i></a>
				<a href="#" class="btn butcon hide-action" title="Not Interested" data-toggle="tooltip" data-original-title="Not Interested" data-placement="bottom"><i class="fa fa-minus-circle"></i></a>
				<a href="#" class="btn butcon share-action" title="Share This" data-toggle="tooltip" data-original-title="Share This" data-placement="bottom"><i class="icon-share"></i></a>
				<em>|</em>
				<a href="../../../common_services/user_assistance/data/Page_Level_Help_IDB.html" id="learn-more-opportunity" class="btn butcon learn-more" target="_blank" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');return false;" title="Learn More" data-toggle="tooltip" data-original-title="Learn More" data-placement="bottom"><i class="icon-learn-more"></i></a>
			</div>
		</article>
	</header>
	<section>
		<article class="colonnade summary">
			<div class="lt-column summary-chart">
				<img <?php echo 'src="' . $ROOT . 'assets/img/chart_opportunity_value.png"' ?> alt="$454,000 Opportunity" />
			</div>
			<div class="rt-column summary-details">
				<h2><span>High Cost of Goods Sold</span></h2>
				<p class="segment"><label><a href="#" class="jargon" data-toggle="popover" data-placement="bottom" data-content="The transactions in an opportunity can be further characterized by the segments to which the transactions belong. Segments are dimensions like elements in the Product Hierarchy or Geographical Regions. Segments provide more information about an opportunity by helping target the area of your business where margin leakage is found." data-original-title="Segment">Customer Sold-To</a></label><span>0001059057-CPFK CO LTD</span></p>
				<p class="segment"><label>Product Level 2</label><span>50603SOLLLMATR-Automotive-Solar Llumar ATR</span></p>
				<p>We analyzed transactions from <span>January 2013</span> through <span>October 2013</span> and found an opportunity to improve your profit margin by <span>$454k</span> annually. Currently, your net sales for this segment are <span>$2.4m</span> with a margin of <span>$890k</span>. This opportunity will give you an additional <span>51%</span> margin.</p>
			</div>
		</article>
		<article class="root-cause-analysis">
			<h2>Root Cause Analysis</h2>
			<div class="row">
				<div class="col-sm-8 col-md-8">
					<h5 class="root-cause-nav">
						<button id="root-cause-btn-left" class="butcon"><i class="fa fa-angle-left"></i></button>
						<span>Delta Percentage from <a href="#" class="jargon" data-toggle="popover" data-placement="bottom" data-container="body" data-content="Vendavo Profit Advisor generates floors for key price points, like Pocket Margin, and root cause price adjustments, like Customer Discounts. The floors are conservatively set and help us identify low risk opportunities. Each product has unique floors for the price point and price adjustments. When multiple products are viewed in the same chart, we normalize the floors and plot the transactions as the difference in percent from the floors." data-original-title="Segment">Floor</a> &mdash; Cost of Goods and Pocket Margin&nbsp;<a <?php echo 'href="' . $ROOT . 'common_services/user_assistance/scatter_chart_help.html"' ?> target="_blank" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');return false;" class="butcon"><i class="info fa fa-question-circle"></i></a></span>
						<button id="root-cause-btn-right" class="butcon"><i class="fa fa-angle-right"></i></button>
					</h5>
					<div id="details-chart" class="root-cause-chart" style="min-width:600px; margin:0 auto;"></div>
					<!-- HIGHCHARTS TOOLTIP -->
					<div id="details-tooltip-small" class="popover left">
					    <dl>
					      <dt>Opportunity</dt>
					      <dd>$313k</dd>
					      <dd></dd>
					      <dt>Customer</dt>
					      <dd>ACME Inc.</dd>
					    </dl>
					</div>
					<!-- HIGHCHARTS POPOVER -->
					<div id="details-tooltip" class="popover">
					    <ul class='statbox dual'>
						    <li>
						        <h3>29%</h3>
						        <span>Above Margin Floor</span>
						    </li>
						    <li>
						        <h3>31%</h3>
						        <span>Above Cost of Goods Floor</span>
						    </li>
						</ul>
					    <dl class='transaction-list'>
					      <dt>Product</dt>
					      <dd>10330594-CP,WF,ATR_,15,CH_,SR,HPR,015,60,0100,AL</dd>
					      <dd><button class='btn' title='View by this product' data-original-title='View by this product' data-placement='right'><i class='fa fa-zoom-in'></i></button></dd>
					      <dt>Customer</dt>
					      <dd>ACME Inc.</dd>
					      <dt>Geography</dt>
					      <dd>KR</dd>
					      <dt>Date</dt>
					      <dd>October 1, 2012</dd>
					    </dl>
					    <dl class='transaction-list lt-column'>
					      <dt>Net Sales</dt>
					      <dd>$411k</dd>
					    </dl>
					    <dl class='transaction-list rt-column'>
					      <dt>Opportunity</dt>
					      <dd>$313k</dd>
					    </dl>
					    <!-- <div class='popover-actions'><button class='btn proto-close-popover'><i class='fa fa-minus-circle'>&nbsp;Exclude</i></button></div> -->
					</div>
				</div>
				<div class="col-sm-4 col-md-4">
					<select class="root-cause-sel">
						<option selected="selected">View by Product</option>
						<optgroup label="----------"></optgroup>
							<option>10330594-CP</option>
							<option>10330594-CP</option>
							<option>10330594-CP</option>
					</select>
					<h3>Legend</h3>
					<ul class="nav root-cause-legend">
						<li><i class="fa fa-circle bad-bad"></i>Bad Cost of Goods Sold, Bad Margin <span>(16 / 24)</span></li>
						<li><i class="fa fa-circle bad-good"></i>Bad Cost of Goods Sold, Good Margin <span>(0 / 73)</span></li>
						<li><i class="fa fa-circle good-bad"></i>Good Cost of Goods Sold, Bad Margin <span>(0 / 73)</span></li>
						<li class="hidden"><i class="fa fa-circle good-good"></i>Good Cost of Goods Sold, Good Margin <span>(0 / 502)</span></li>
					</ul>
					<form>
						<dl>
							<dd><label class="checkbox"><input type="checkbox" checked="checked">Show <a href="#" class="jargon" data-id="proto-comparitive-transactions" data-toggle="popover" data-placement="bottom" data-content="Comparative Transactions are transactions for the same products, but they are outside the defined opportunity segment. They are displayed as faded shapes in the chart." data-original-title="Comparative Transactions">comparative transactions</a></label></dd>
						</dl>
					</form>
				</div>
			</div>
		</article>
		<article class="full-width">
			<ul class="nav nav-tabs sub-level">
			  <li class="active"><a href="#contributor-products" data-toggle="tab">Products &bull;<span>3</span></a></li>
			  <li><a href="#contributor-customers" data-toggle="tab">Customers &bull;<span>2</span></a></li>
			  <li><a href="#contributor-reps" data-toggle="tab">Sales Reps &bull;<span>1</span></a></li>
			  <li><a href="#contributor-channels" data-toggle="tab">Channels &bull;<span>1</span></a></li>
			  <li><a href="#contributor-geography" data-toggle="tab">Geography &bull;<span>1</span></a></li>
			  <li><a href="#contributor-transactions" data-toggle="tab">Transactions &bull;<span>10</span></a></li>
			</ul>
			<div class="tab-content contributors">
			  <div class="tab-pane active" id="contributor-products">
			  	<!-- INCLUDE: PRODUCTS TABLE -->
    				<?php include("table-products.inc.php"); ?>
			  </div>
			  <div class="tab-pane" id="contributor-customers">
			  	<!-- INCLUDE: CUSTOMERS TABLE -->
        		<?php include("table-customers.inc.php"); ?>
        	  </div>
			  <div class="tab-pane" id="contributor-reps">
			  	<p style="margin: 40px 0 20px 60px;">View Products, Customers or Transactions Tab to see table examples.</p>
        	  </div>
			  <div class="tab-pane" id="contributor-channels">
			  	<p style="margin: 40px 0 20px 60px;">View Products, Customers or Transactions Tab to see table examples.</p>
        	  </div>
			  <div class="tab-pane" id="contributor-geography">
			  	<p style="margin: 40px 0 20px 60px;">View Products, Customers or Transactions Tab to see table examples.</p>
        	  </div>
			  <div class="tab-pane" id="contributor-transactions">
        		<?php include("table-transactions.inc.php"); ?>
        	  </div>
			</div>
		</article>
	</section>
      <!-- Footer -->
      <?php include("footer.inc.php"); ?>
</div>