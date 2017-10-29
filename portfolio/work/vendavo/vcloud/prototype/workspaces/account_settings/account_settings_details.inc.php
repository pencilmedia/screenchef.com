<aside class="rt-pane slideOutPanel">
	<section>
		<article class="settings-edit">
			<h2>General Settings</h2>
			<form class="edit-form" action="#">
				<dl>
					<dd><label>Cloud User Time-out</label>				
						<select>
							<option selected="selected">5 minutes</option>
							<option>10 minutes</option>
							<option>15 minutes</option>
							<option>20 minutes</option>
							<option>30 minutes</option>
						</select>
					</dd>
					<dd><label>Mobile User Time-out</label>
						<select>
							<option selected="selected">3 minutes</option>
							<option>5 minutes</option>
							<option>10 minutes</option>
							<option>15 minutes</option>
						</select>
					</dd>
					<dd><label>Support URL</label><input type="text" value="http://www.vendavo.com/support" /></dd>
					<dd><label>Support E-mail</label><input type="text" value="support@vendavo.com" /></dd>
					<dd>
						<label>PMM Server URL</label>
						<input type="text" value="https://sfdcdemo81.vif.vendavo.com/vendavo/rest" />
					</dd>
					<dd>
						<label>PMM Instance Identifier</label>
						<input type="text" class="disabled" value="VSN-DA-Xv3nLFCT(3yHzM8z6MST" disabled />
					</dd>
					<dd>
						<label>White Listed IP Addresses</label>
						<input type="text" value="209.49.68.2, 166.250.34.165, 10.40.20.253, 10.40.20.75, 10.40.20.248" />
					</dd>
					<dd><label>Base Currency</label>
						<select>
							<option selected="selected">United States Dollar (USD)</option>
							<option>Czech Crown (CZK)</option>
						</select>
					</dd>
					<dd class="list-actions">
						<button class="btn btn-primary" type="button">Save</button>
						<button class="btn close-contextual-pane" type="button">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>
		<article class="sharing-edit">
			<h2>Sharing</h2>
			<form class="edit-form" action="#">
				<dl>
					<dd>
						<label class="checkbox"><input id="share-grant" type="checkbox">Allow sharing of opportunities with users who don’t have the View Opportunities privilege.</label>
						<span class="field-description">If allowed, the recipients of shared opportunities automatically get access to see all opportunities.</span>
					</dd>
					<dd>
						<label class="checkbox"><input id="share-non-users" type="checkbox">Allow sharing of opportunities with non-users whose emails belong to approved domains using the Whitelist.</label>
						<span class="field-description">Sharing doesn't grant the recipients automatic access. It does, however, allow them to preview information about the opportunity via email and includes the email address of the Customer Account Owner if the recipients want an account.</span>
					</dd>
					<dd class="checkbox-level error">
						<label>Whitelist</label>
						<select id="sharing-select" data-placeholder="Add whitelist domain" name="arr[]" class="chosen-select form-control search-query" multiple="" tabindex="-1" data-fetchmulti="groups" autofocus>
							<option selected>vendavo.com</option>
						</select>
						<span type="message">Try again using the name@example.com format</span>
						<span class="field-description">The domain of the Customer Account Owner has been added to the Whitelist by default.</span>
					</dd>
					<dd class="list-actions">
						<button class="btn btn-primary" type="button">Save</button>
						<button class="btn close-contextual-pane" type="button">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>
	</section>
</aside>