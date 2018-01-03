<!-- BEGIN: CREATE NEW CONTRACT -->
<article data-id="create-contract" class="edit-form">
	<form role="form" class="contract">
		<fieldset>
			<h2>Create New Price Agreement</h2>
			<dl>
				<dd>
					<label>Customer Sales Data</label>
					<select name="" role="combobox" aria-required="true" required autofocus>
						<option value="" disabled required>Required</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd>
					<label>Description</label>
					<textarea class='auto-expand' rows='1' data-min-rows='1' placeholder='Type a description' aria-required="false"></textarea>
				</dd>
				<dd>
					<label>Sales Org</label>
					<select name="" role="combobox" aria-required="true" required>
						<option value="" disabled required>Required</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd>
					<label>Pricing Level</label>
					<select name="" role="combobox">
						<option value="" disabled>Add Pricing Level</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd class="dual-fields">
					<label>Deal Validity Period</label>
					<span>From</span>
					<span>To</span>
					<input type="date" placeholder="mm/dd/yyyy" aria-required="false">
					<input type="date" placeholder="mm/dd/yyyy" aria-required="false">
				</dd>				
			</dl>
			<h2>Customer Information</h2>
			<dl>
				<dd>
					<label>Group Customer</label>
					<select name="" role="combobox" aria-required="true" required>
						<option value="" disabled required>Required</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd>
					<label>Sold To</label>
					<select name="" role="combobox">
						<option value="" disabled>Add Sold to</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd>
					<label>Ship To</label>
					<select name="" role="combobox">
						<option value="" disabled>Add Ship To</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd>
					<label>Customer of Sold To</label>
					<select name="" role="combobox">
						<option value="" disabled>Add Customer of Sold To</option>
						<option value="value1" role="option">Value 1</option>
						<option value="value2" role="option">Value 2</option>
						<option value="value3" role="option">Value 3</option>
					</select>
				</dd>
				<dd>
					<label>Default Currency</label>
					<select name="" role="combobox">
						<option value="" disabled>Add Default Currency</option>
						<option value="value1" role="option">EUR</option>
						<option value="value2" role="option">USD</option>
						<option value="value3" role="option">GBP</option>
					</select>
				</dd>
				<dd>
					<label>Pricing Unit</label>
					<select name="" role="combobox">
						<option value="" disabled>Add Pricing Unit</option>
						<option value="value1" role="option">EUR</option>
						<option value="value2" role="option">USD</option>
						<option value="value3" role="option">GBP</option>
					</select>
				</dd>
			</dl>
			<h2>Owner Information</h2>
			<dl>
				<dd>
					<label>Owner</label>
					<select name="" role="combobox" aria-required="true" required>
						<option value="" disabled required>Required</option>
						<option value="value1" role="option">EUR</option>
						<option value="value2" role="option">USD</option>
						<option value="value3" role="option">GBP</option>
					</select>
				</dd>
				<dd>
					<label>Sales Support</label>
					<select name="" role="combobox" aria-required="true" required>
						<option value="" disabled required>Required</option>
						<option value="value1" role="option">EUR</option>
						<option value="value2" role="option">USD</option>
						<option value="value3" role="option">GBP</option>
					</select>
				</dd>
			</dl>
			<footer>
				<button class="btn btn-primary" role="button">Create</button>
				<button class="btn btn-default" role="button">Cancel</button>
			</footer>
		</fieldset>
	</form>
</article>