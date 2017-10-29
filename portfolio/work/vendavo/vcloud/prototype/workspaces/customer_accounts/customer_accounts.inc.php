<section class="app customers">
	<h1><?php echo customerAccountsTitle ?></h1>
	<form action="post" name="customerSearch" id="customerSearch" class="form-inline">
		<fieldset title="Search" name="fieldset" class="filter-container form-inline">
			<p>
				<label>View</label>
				<select name="views" data-fetch="staticViews">
					<option value="all">All Customer Accounts</option>
					<optgroup label="-----"></optgroup>
						<option value="invited">Invited Customer Accounts</option>
						<option value="enabled">Enabled Customer Accounts</option>
						<option value="disabled">Disabled Customer Accounts</option>
					<optgroup label="-----"></optgroup>
						<option value="trialExpiring">Trial Expiring Soon</option>
						<option value="trialExpired">Trial Expired</option>
				</select>
				<label>Filter By</label>
			</p>
			<p>
				<select data-placeholder="Enter name/account owner or select an application" name="arr[]" class="chosen-select" multiple="" tabindex="-1" id="mySelect" data-fetchmulti="groups">
		     		<optgroup name="apps" label="Applications">
						<option value="MIDAS" group="apps">Profit Opportunities</option>
						<option value="VSN" group="apps">Sales Negotiator</option>
				        <option value="VSA" group="apps">Vendavo Sales Advisor</option>
					</optgroup>
			    </select>
				<button class="btn clear-filter" type="button" title="Clear"><i class="fa fa-times-circle"></i></button>
				<input type="submit" value="Search" name="searchBtn" class="btn searchFormBtns" />
			</p>
		</fieldset>
	</form>
      <!-- Customer JQGrid -->
      <?php include("customer_accounts_grid.inc.php"); ?>
</section>