<!-- BEGIN: CREATE NEW SPOT QUOTE -->
<header class="navbar-fixed-top">
	<button class="butcon back" data-toggle="tooltip" data-title="Back to List" data-placement="right"><i class="fa fa-chevron-left"></i></button>
	<h1>Create New Spot Quote</h1>
	<button class="butcon close-pane pull-right"><i class="fa fa-times"></i></button>
</header>
<article class="create-deal">
	<div class="edit-form">
		<form role="form" class="spot-quote">
			<fieldset>
				<dl>
					<dt>Create New Spot Quote</dt>
					<dd>
						<label>Customer Sales Data</label>
						<select name="" required>
							<option value="" disabled required>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Ship To</label>
						<select name="" required>
							<option value="" disabled required>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Description</label>
						<textarea class='auto-expand' rows='1' data-min-rows='1' placeholder='Type a description' aria-required="false"></textarea>
					</dd>
					<dd class="dual-fields">
						<label>Validity</label>
						<span>From</span>
						<span>To</span>
						<input type="date">
						<input type="date">
					</dd>
					<dd>
						<label>Currency</label>
						<input type="number" placeholder="Required">
					</dd>
					<dd>
						<label>Index Refresh Currency</label>
						<select name="" required>
							<option value="" disabled required>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Freight Method</label>
						<select name="" aria-required="false">
							<option value="" disabled required>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</dd>
					<dd>
						<label>Freight Recovery Rate</label>
						<select name="" aria-required="false">
							<option value="" disabled required>Required</option>
							<option value="value1">Value 1</option>
							<option value="value2">Value 2</option>
							<option value="value3">Value 3</option>
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
