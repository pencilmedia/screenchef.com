<!-- No <header> -->
<section class="deal-listings drill-list">
	<aside class="lt-column">
		<!-- BEGIN: PENDING APPROVAL -->
		<ul class="nav nav-pills" role="tablist">
	      <li class="active"><a href="#pending-my-approval" role="tab" data-toggle="tab">Pending My Approval<span class="badge">3</span></a></li>
	      <li><a href="#submitted-by-me" role="tab" data-toggle="tab">Submitted By Me</a></li>
	    </ul>
		<div id="myTabContent" class="tab-content">
	      <div class="tab-pane fade in active" id="pending-my-approval">
			<header class="message">
				<p>Your average approval time is <strong class="warning">2 days 3 hours</strong>. Your company average time  is <strong>7 hours</strong>.</p>
			</header>
			<section class="deal-listings">
				<!-- BEGIN: PENDING DEAL LIST -->
				<dl class="deal-list">
					<dd>
						<a href="#" data-id="2" data-show-contextual="all-metrics">
							<h1><span>ABC Chemical, Prague &dash; 2448914</span></h1>
							<h2>24 Metric Tons</h2>
							<p>
								BMS AG - BY20 / Daniella Tuttle
								<span>PA-0009999</span>
							</p>
							<p>
								<span>Draft &bull; 11/01/2014 - 02/28/2015</span>
								<span class="status warning">
									<i class="fa fa-circle-o"></i>
									<i class="fa fa-circle"></i>
									<i class="fa fa-circle"></i>
								</span>
							</p>
						</a>
					</dd>
					<dd>
						<a href="#" data-id="2" data-show-contextual="all-metrics">
							<h1><span>Sekisui Chemical Company, Suzhou &dash; 200321</span><i class="fa fa-star"></i></h1>
							<h2>4 Metric Tons</h2>
							<p>
								BMS AG - BY20 / John Smith
								<span>PA-0001214</span>
							</p>
							<p>
								<span>Draft &bull; 11/01/2014 - 02/28/2015</span>
								<span class="status bad">
									<i class="fa fa-circle-o"></i>
									<i class="fa fa-circle-o"></i>
									<i class="fa fa-circle"></i>
								</span>
							</p>
						</a>
					</dd>
					<dd>
						<a href="#" data-id="2" data-show-contextual="all-metrics">
							<h1><span>Britton Chemistry, Manchester &dash; 1124002</span></h1>
							<h2>24 Metric Tons</h2>
							<p>
								BMS AG - BY20 / Jerry Brown
								<span>PA-0004244</span>
							</p>
							<p>
								<span>Draft &bull; 11/01/2014 - 02/28/2015</span>
								<span class="status warning">
									<i class="fa fa-circle-o"></i>
									<i class="fa fa-circle"></i>
									<i class="fa fa-circle"></i>
								</span>
							</p>
						</a>
					</dd>
				</dl>
			</section>
	      </div>
	      <div class="tab-pane fade" id="submitted-by-me">
			<section class="deal-listings">
				<!-- BEGIN: PENDING DEAL LIST -->
				<dl class="deal-list">
				<dd>
					<a href="#" data-id="2" data-show-contextual="all-metrics">
						<h1><span>Britton Chemistry, Manchester &dash; 1124002</span></h1>
						<h2>24 Metric Tons</h2>
						<p>
							BMS AG - BY20 / Me
							<span>PA-0004244</span>
						</p>
						<p>
							<span>Draft &bull; 11/01/2014 - 02/28/2015</span>
							<span class="status warning">
								<i class="fa fa-circle-o"></i>
								<i class="fa fa-circle"></i>
								<i class="fa fa-circle"></i>
							</span>
						</p>
					</a>
				</dd>
				</dl>
			</section>
	      </div>
	    </div>
	</aside>
	<div class="rt-column details-pane">
	     <?php include($ROOT . "workspace/approval/approval_details.inc.php"); ?>
	</div>
</section>