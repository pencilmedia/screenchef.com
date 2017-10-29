
<section class="app manage-users">
	<h1><?php echo usersTitle ?></h1>
	<form action="post" name="userSearch" id="userSearch" class="form-inline">
		<fieldset title="Search" name="fieldset" class="filter-container form-inline">
			<p>
				<label>View</label>
				<select name="views" data-fetch="staticViews" autofocus>
					<option selected="selected">All Users</option>
					<optgroup label="----------"></optgroup>
						<option>Invited Users</option>
						<option>Enabled Users</option>
						<option>Disabled Users</option>
					<optgroup label="----------"></optgroup>
						<option>Users without Privileges</option>
						<option>Locked out Users</option>
						<option>Currently Active Users</option>
						<option>Exceeds Licensing Agreement</option>
				</select>
				<label>Filter By</label>
			</p>
			<p>
				<select data-placeholder="Enter name/account owner or select an application" name="arr[]" class="chosen-select form-control" multiple="" tabindex="-1" data-fetchmulti="groups">
					<option value=""></option>
			      	<optgroup name="apps" label="Applications">
				        <option>Midas</option>
				        <option>Sales Negotiator</option>
				        <option>Price Manager</option>
				        <option>Deal Manager</option>
				        <option>Sales Advisor</option>
			        </optgroup>
			        <optgroup label="Status">
				        <option>Active</option>
				        <option>Disabled</option>
				        <option>Pending Activation</option>
			      </optgroup>
			    </select>
				<button class="btn clear-filter" type="button" title="Clear"><i class="fa fa-times-circle"></i></button>
				<input type="submit" value="Search" name="searchBtn" class="btn searchFormBtns" />
			</p>
		</fieldset>
	</form>
	<!-- User Table -->
	<?php include("user_grid.inc.php"); ?>
	<!-- OLD User Table with Old pagination - NOTE: TODO: Remove once VSS has updated pagination on production -->
	<?php // include("old_user_grid.inc.php"); ?>

</section>