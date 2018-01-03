<header class="navbar-fixed-top">
	<h1>Deal Attributes</h1>
	<button class="butcon pull-right close-pane"><i class="fa fa-times"></i></button>
</header>
<article class="edit-form">
	<form action="#">
		<fieldset>
			<dl>
				<dt>Agreement Information</dt>
				<dd>
					<label>Marketing Level 0</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>Polyurethanes</option>
						<option value="">Polymers</option>
					</select>
				</dd>
				<dd>
					<label>Sales Org</label>
					<input type="text" placeholder="Required" value="BMS AG - BY20">
				</dd>
				<dd>
					<label>Price Type</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>Fixed</option>
						<option value="">Variable</option>
					</select>
				</dd>
				<dd>
					<label>Pricing Level</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>Ship To</option>
						<option value="">Sold To</option>
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
		</fieldset>
		<fieldset>
			<dl>
				<dt>Customer Information</dt>
				<dd>
					<label>Group Customer</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>Group Customer - City - 9999</option>
						<option value="">Group Customer - City - 888</option>
					</select>
				</dd>
				<dd>
					<label>Sold To</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>Sold To - City - 1111</option>
						<option value="">Sold To - City - 2222</option>
					</select>
				</dd>
				<dd>
					<label>Ship To</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="">California</option>
					</select>
				</dd>
				<dd class="error">
					<label>Customer of Sold To</label>
					<input type="text" placeholder="Required" value="Required">
					<p class="validation-errors">This is a required field.</p>
				</dd>
				<dd>
					<label>Default Currency</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>Euro</option>
						<option value="">USD</option>
					</select>
				</dd>
				<dd>
					<label>Pricing Unit</label>
					<select name="" required>
						<option value="" disabled>Required</option>
						<option value="" selected>1,000 KG</option>
					</select>
				</dd>
			</dl>
		</fieldset>
		<fieldset>
			<h1>Owner Information</h1>
			<dl>
				<dt></dt>
				<dd>
					<label>Owner</label>
					<input type="text" value="Andrea Silva" placeholder="Required">
				</dd>
				<dd>
					<label>Sales Support</label>
					<input type="text" value="Jan Stanto" placeholder="Required">
				</dd>
				<dd>
					<label>Creator</label>
					<input type="text" value="Jan Stanto" readonly>
				</dd>
			</dl>
		</fieldset>
		<fieldset>
			<h1>Notes</h1>
			<dl>
				<dt></dt>
				<dd>
					<textarea class='auto-expand' rows='1' data-min-rows='1' placeholder='Add notes'></textarea>
				</dd>
			</dl>
		</fieldset>
		<fieldset>
			<h1>Description</h1>
			<dl>
				<dt></dt>
				<dd>
					<textarea class='auto-expand' rows='1' data-min-rows='1' placeholder='Add a description'></textarea>
				</dd>
			</dl>
		</fieldset>
	</form>
</article>