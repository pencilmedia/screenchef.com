<div>
<section class="app customer-users">
	<h1><?php echo customerUsersTitle ?></h1>
	<form action="post" name="userSearch" id="userSearch" class="form-inline">
		<fieldset title="Search" name="fieldset" class="filter-container form-inline">
			<p>
				<label style="display:none;">View</label>
				<select style="display:none;" name="views" data-fetch="staticViews">
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
				<select data-placeholder="Search name, email or account" name="arr[]" class="chosen-select form-control" multiple="" tabindex="-1" data-fetchmulti="groups">
		     		<optgroup name="apps" label="Option Group Title">
						<option value="customer-users" group="apps">Example Value</option>
					</optgroup>
			    </select>
				<button class="btn clear-filter" type="button" title="Clear"><i class="fa fa-times-circle"></i></button>
				<input type="submit" value="Search" name="searchBtn" class="btn searchFormBtns" />
			</p>
		</fieldset>
	</form>
	<!-- User Table -->
	<?php include("customer_user_grid.inc.php"); ?>

</section>
</div>