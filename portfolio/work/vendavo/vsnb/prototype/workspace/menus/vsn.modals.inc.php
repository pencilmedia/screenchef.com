<!-- BEGIN: Modals -->
<div class="modal-overlay animate5s">
	<div class="content">
		<!-- Create New Deal -->
		<section data-id="create-deal">
	          <?php include($ROOT . "workspace/deals/create_deal/create_deal.inc.php"); ?>
	          <!-- Include: Price Lookup JavaScript -->
			<script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspace/deals/create_deal/create_deal.js"' ?>></script>
		</section>
		<!-- Create New Contract -->
		<section data-id="create-contract">
			<!-- includes to create new contract -->
	          <?php include($ROOT . "workspace/deals/create_contract/create_contract.inc.php"); ?>
		</section>
		<!-- ----------------- -->
		<!-- Pending Approvals -->
		<section data-id="pending-approval">
			<header>
				<h1>Pending Approval</h1>
				<button class="butcon close-view pull-right"><i class="fa fa-times"></i></button>
			</header>
			<article>
				<?php include("pending_approval.inc.php"); ?>
			</article>
		</section>
		<!-- Choose Customer List -->
		<section data-id="customer-menu-list">
	          <?php include($ROOT . "workspace/deals/customer_list/customer_list.inc.php"); ?>
	          <!-- Include: Price Lookup JavaScript -->
			<script type="text/javascript" <?php echo 'src="' . $ROOT . 'workspace/deals/customer_list/customer_list.js"' ?>></script>
		</section>
		<!-- Contextual Pane - Line Item Details: Statbox Messages -->
		<section data-id="stat-box-approvals" class="stat-approvals">
	          <?php include($ROOT . "workspace/deals/contextual_pane/modal_menu_content/stat_approvals.inc.php"); ?>
	  	</section>
		<!-- Contextual Pane - Line Item Details: Statbox Messages -->
		<section data-id="stat-box-messages" class="stat-messages">
	          <?php include($ROOT . "workspace/deals/contextual_pane/modal_menu_content/stat_messages.inc.php"); ?>
	  	</section>
		<!-- Contextual Pane - Line Item Details: Competitive Price Info -->
		<section data-id="comp-price-info" class="competitive-price-chart">
	          <?php include($ROOT . "workspace/deals/contextual_pane/modal_menu_content/comp_price_info.inc.php"); ?>
	  	</section>
		<!-- Contextual Pane - Line Item Details: Competitive Price Info -->
		<section data-id="last-price-info" class="competitive-price-chart">
	          <?php include($ROOT . "workspace/deals/contextual_pane/modal_menu_content/last_price_info.inc.php"); ?>
	  	</section>
	</div>
</div>

<!-- BEGIN: Delete Deal Modal Dialog -->
<div id="deal-delete-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="deleteDealLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<p>Do you really want to delete this Spot Quote?</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-danger deal-delete" data-dismiss="modal">Delete</button>
			</div>
		</div>
	</div>
</div>

<!-- BEGIN: Delete Line Item Modal Dialog -->
<div id="line-item-delete-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="deleteLineItemLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<p>Do you really want to delete this Line Item?</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
			</div>
		</div>
	</div>
</div>

<!-- BEGIN: Activity Indicator  -->
<div class="modal fade activity-indicator" tabindex="-1" role="dialog" aria-labelledby="activityIndicator" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<p></p>
				<i class="fa fa-spinner fa-spin"></i>
			</div>
		</div>
	</div>
</div>

<!-- END: VSN-b Modal Dialogs -->