<form action="register" method="get">
	<div class="alert alert-error fade in">
		<strong><i class="icon-exclamation-sign"></i></strong>
		<span class="errMsg"> Please resolve 1 issue below.</span>
	</div>
	<fieldset>
		<legend>Free 30 Day Trial</legend>
			<dl class="info-unit">
				<dd>Please fill in all fields</dd>
				<dd>
				 	<input type="text" name="fullname" placeholder="Full Name" id="inputName" autofocus required />
				 	<i class="icon-ok"></i>
			 	</dd>
				<dd>
				 	<input type="text" name="jobtitle" placeholder="Job Title" id="inputJobtitle" required />
				 	<i class="icon-ok"></i>
			 	</dd>
				<dd class="error">
				 	<input type="text" name="email" placeholder="Business Email" id="inputEmail" required />
				 	<i class="icon-exclamation-sign"></i>
				 	<span class="help-block">Your username is incorrect.</span>
			 	</dd>
			</dl>
			<hr />
			<dl>
				<dd>
				 	<input type="text" name="company" placeholder="Company" id="inputCompany" required />
				 	<i class="icon-ok"></i>
			 	</dd>
				<dd>
					<select name="employees" id="inputEmployees" required>
						<option selected>Number of Employees</option>
						<option>1-25</option>
						<option>26-100</option>
						<option>101-500</option>
						<option>500-1000</option>
						<option>1000+</option>
					</select>
				 	<i class="icon-ok"></i>
			 	</dd>
				<dd>
				 	<input type="text" name="postalcode" placeholder="Postal Code" id="inputPostalCode" required />
				 	<i class="icon-ok"></i>
				</dd>
				<dd class="error">
				 	<label class="checkbox"><input type="checkbox" unchecked>&nbsp;I have read and accept the <a href="#">Terms of Service</a></label>
			 	</dd>
			 	<dd class="list-actions">
				 	<button type="button" class="btn btn-primary" id="proto-register" data-loading-text="Creating Account...">Start Free Trial</button>
				</dd>
		 	</dl>
	</fieldset>
</form>