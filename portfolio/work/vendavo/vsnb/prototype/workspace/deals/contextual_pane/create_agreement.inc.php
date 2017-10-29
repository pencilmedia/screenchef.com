<!-- BEGIN: CREATE NEW CONTRACT -->
<header class="navbar-fixed-top">
	<button class="butcon back" data-toggle="tooltip" data-title="Back to List" data-placement="right"><i class="fa fa-chevron-left"></i></button>
	<h1>Create New Price Agreement</h1>
	<button class="butcon close-pane pull-right"><i class="fa fa-times"></i></button>
</header>
<article class="create-contract">
	<div class="edit-form">
		<form role="form" class="contract">
			<fieldset>
				<dl>
					<dt>Create New Price Agreement</dt>
					<dd>
						<label>Customer Sales Data</label>
						<select name="" required>
							<option value="" disabled>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Description</label>
						<textarea class='auto-expand' rows='1' data-min-rows='1' placeholder='Type a description'></textarea>
					</dd>
					<dd>
						<label>Sales Org</label>
						<select name="" required>
							<option value="" disabled>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Pricing Level</label>
						<select name="">
							<option value="" disabled>Add Pricing Level</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd class="dual-fields">
						<label>Deal Validity Period</label>
						<span>From</span>
						<span>To</span>
						<input type="date">
						<input type="date">
					</dd>				
				</dl>
				<dl>
					<dt>Customer Information</dt>
					<dd>
						<label>Group Customer</label>
						<select name="" required>
							<option value="" disabled>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Sold To</label>
						<select name="">
							<option value="" disabled>Add Sold to</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Ship To</label>
						<select name="">
							<option value="" disabled>Add Ship To</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Customer of Sold To</label>
						<select name="">
							<option value="" disabled>Add Customer of Sold To</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Default Currency</label>
						<select name="">
							<option value="" disabled>Add Default Currency</option>
							<option value="value1">EUR</option>
							<option value="value2">USD</option>
							<option value="value3">GBP</option>
						</select>
					</dd>
					<dd>
						<label>Pricing Unit</label>
						<select name="">
							<option value="" disabled>Add Pricing Unit</option>
							<option value="value1">EUR</option>
							<option value="value2">USD</option>
							<option value="value3">GBP</option>
						</select>
					</dd>
				</dl>
				<dl>
					<dt>Owner Information</dt>
					<dd>
						<label>Owner</label>
						<select name="" required>
							<option value="" disabled>Required</option>
							<option value="value1">EUR</option>
							<option value="value2">USD</option>
							<option value="value3">GBP</option>
						</select>
					</dd>
					<dd>
						<label>Sales Support</label>
						<select name="" required>
							<option value="" disabled>Required</option>
							<option value="value1">EUR</option>
							<option value="value2">USD</option>
							<option value="value3">GBP</option>
						</select>
					</dd>
				</dl>
				<footer>
					<button class="btn btn-default">Cancel</button>
					<button class="btn btn-primary">Create</button>
				</footer>
			</fieldset>
		</form>
	</div>
</article>
