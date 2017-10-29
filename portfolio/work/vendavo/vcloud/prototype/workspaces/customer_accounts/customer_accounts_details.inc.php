<aside class="rt-pane slideOutPanel">
	<section>
		<!-- **************** -->
		<!-- CUSTOMER DETAILS -->
		<!-- **************** -->
		<article class="account-details proto-hide-on-edit" data-id="2">

			<div class="dropdown pull-right">
				<button class="btn" data-toggle="dropdown" role="button" type="button">Actions <span class="caret"></span></button>
				<button class="btn close-contextual-pane" type="button"><i class="fa fa-times"></i></button>
			
				<div class="dropdown-menu flipcard disable-customer">
					<ul class="front">
						<li><a href="#">Tracking Information</a></li>
						<li><a href="#">Reset Password</a></li>
						<li><a href="#" class="flip-trigger" id="disable-customer">Disable Customer</a></li>
					</ul>
					<ul class="back">
						<li>Disabling this customer will block all of their users from all Vendavo applications.</li>
						<li><input type="text" placeholder="Password required to disable account" value="" /></li>
						<li><button class="btn btn-danger">Disable Customer</button></li>
						<li><button class="btn" id="reset-cancel">Cancel</button></li>
					</ul>
				</div>
			</div>
			
			<h1>&nbsp;</h1>
			<h2>Company and Account Owner <button class="proto-action-edit"><i class="fa fa-pencil"></i></button></h2>
			<dl class="info-unit with-photo">
				<dd>
					<img class="device" <?php echo 'src="' . $ROOT . 'assets/img/placeholder_company.png"' ?>>
				</dd>
				<dd><h1>Agilent</h1></dd>
				<dd>Account #2840285</dd>
				<dd>&nbsp;</dd>
				<dd>555 Mountain View Rd.</dd>
				<dd>Sunnyvale, CA 99999</dd>
				<dd>U.S.A.</dd>
				<dd>&nbsp;</dd>
				<dd>Electronics Industry</dd>
				<dd>Original Equipment Manufacturer</dd>
				<dd>50,000 - 1000,000 Employees</dd>
			</dl>
			<dl class="info-unit with-photo">
				<dd>
					<img <?php echo 'src="' . $ROOT . 'assets/img/placeholder_user.png"' ?>>
				</dd>
				<dd><h1>Tom Smith</h1></dd>
				<dd>&nbsp;</dd>
				<dd><a href="#">tsmith@acme.com</a></dd>
				<dd>415.555.5555</dd>
			</dl>

			<h2>Vendavo Applications</h2>
			<dl class="drop-list">
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Price Management</h5>
						<p class="not-licensed">Not Licensed</p>
					</a>
					<div class="dropdown-menu flipcard pull-right start-license with-input">
						<ul class="front">
							<li><a href="#" class="flip-trigger">License Application</a></li>
							<li><a href="#">Start Application Trial</a></li>
						</ul>
						<ul class="back">
							<li class="input-date"><span class="text-left"><strong>License Starting</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li class="input-date"><span class="text-left"><strong>License Ending</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li><label class="checkbox"><input type="checkbox"> Check me out</label></li>
							<li><span class="text-left"><button class="btn btn-primary">License Application</button></span></li>
							<li><span class="text-left"><button class="btn" id="reset-cancel">Cancel</button></span></li>
						</ul>
					</div>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Vendavo Sales Negotiator</h5>
						<p class="licensed">Licensed: Activated January 1st, 2014; Ends December 31st, 2016</p>
					</a>
					<div class="dropdown-menu flipcard pull-right with-input">
						<ul class="front">
							<li><a href="#" class="flip-trigger">Extend License</a></li>
							<li><a href="#">Deactivate Application</a></li>
						</ul>
						<ul class="back">
							<li class="input-date"><span class="text-left"><strong>Activation Ending</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li><span class="text-left"><button class="btn btn-primary">Extend Activation</button></span></li>
							<li><span class="text-left"><button class="btn" id="reset-cancel">Cancel</button></span></li>	
						</ul>
					</div>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Vendavo Sales Negotiator</h5>
						<p class="licensed">Licensed: Activated January 1st, 2014; Ends December 31st, 2016</p>
					</a>
					<div class="dropdown-menu flipcard pull-right with-input">
						<ul class="front">
							<li><a href="#">Extend License</a></li>
							<li><a href="#" class="flip-trigger">Deactivate Application</a></li>
						</ul>
						<ul class="back">
							<li class="input-date"><span class="text-left"><strong>Deactivation Date</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li><span class="text-left"><button class="btn btn-danger">Deactivate Appplication</button></span></li>
							<li><span class="text-left"><button class="btn" id="reset-cancel">Cancel</button></span></li>	
						</ul>
					</div>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Vendavo Sales Advisor</h5>
						<p class="deactivated">Deactivated: Deactivated July 15, 2013</p>
					</a>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Price Management<span class="not-licensed"> - Pending Activation on July 1, 2014</span></h5>
						<p class="not-licensed">Not Licensed</p>
					</a>
					<div class="dropdown-menu flipcard pull-right disable-customer">
						<ul class="front">
							<li><a href="#" class="flip-trigger">Cancel Activation</a></li>
						</ul>
						<ul class="back">
							<li><span class="text-left">Cancelling this activation will prevent the customer from gaining access to it.</span></li>
							<li><button class="btn btn-danger">Cancel Activation</button></li>
							<li><button class="btn" id="reset-cancel">Cancel</button></li>
						</ul>
					</div>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Price Management<span class="not-licensed"> - Pending Deactivation on July 1, 2014</span></h5>
						<p class="licensed">Licensed: Activated January 1st, 2014; Ends December 31st, 2016</p>
					</a>
					<ul class="dropdown-menu pull-right">
						<li><a href="#">Cancel Deactivation</a></li>
					</ul>
				</dd>
				<dd class="dropdown dropup">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Vendavo Sales Adviser</h5>
						<p class="deactivated">Deactivated: Deactivated July 15, 2013</p>
					</a>
					<div class="dropdown-menu flipcard pull-right activate-app with-input">
						<ul class="front">
							<li><a href="#" class="flip-trigger">Activate Application</a></li>
						</ul>
						<ul class="back">
							<li class="input-date"><span class="text-left"><strong>License Starting</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li class="input-date"><span class="text-left"><strong>License Ending</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li><span class="text-left"><button class="btn btn-primary">Activate Appplication</button></span></li>
							<li><span class="text-left"><button class="btn" id="reset-cancel">Cancel</button></span></li>
						</ul>
					</div>
				</dd>
			</dl>
		</article>

		<!-- ************************** -->
		<!--    EDIT CUSTOMER DETAILS   -->
		<!-- ************************** -->

		<article class="edit-cus-details" data-id="2">
			<div class="createerrors"></div>
			<h1>Edit Customer Account</h1>
			<h2>Company</h2>
			<form class="edit-form" action="#">
				<dl>
					<dd><label>Company</label><input type="text" value="Agilent" autofocus required /></dd>
					<dd class="proto-address"><label>Address Line 1</label><input type="text" name="address" value="555 Mountain View Rd." /></dd>
					<dd><label>Address Line 2</label><input type="text" value="" /></dd>
					<dd><label>City</label><input type="text" value="Sunnyvale" /></dd>
					<dd><label>State / Province / Region</label><input type="text" value="CA" /></dd>
					<dd><label>Zip / Postal Code<span class="optional">(If Available)</span></label><input type="text" value="99999" /></dd>
					<dd><label>Country</label>
						<select>
							<option selected="selected">United States of America</option>
							<option>Czech Republic</option>
						</select>
					</dd>
					<dd><label>Industry</label>
						<select>
							<option selected="selected">Chemicals</option>
						</select>
					</dd>
					<dd><label>Type</label>
						<select>
							<option selected="selected">Original Equipment Manufacturer</option>
						</select>
					</dd>
					<dd><label>Number of Employees</label>
						<select>
							<option>1,000 - 5,000</option>
							<option selected="selected">5,000 - 10,000</option>
							<option>10,000 - 100,000</option>
						</select>
					</dd>
				</dl>
				<h2>Account Owner</h2>
				<dl>
					<dd><label>Account Owner<i class="info fa fa-info-sign"></i></label>
						<select>
							<option selected="selected">Tom Smith</option>
						</select>
					</dd>
				</dl>
				<dl>
					<dd class="list-actions">
						<button class="btn btn-primary proto-action-save-customer" type="button">Save</button>
						<button class="btn proto-action-cancel" type="button">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>

		<!-- **************** -->
		<!--    APP DETAILS   -->
		<!-- **************** -->
		<article class="app-details" data-id="2">
			<a id="proto-back-cus-details" class="btn-back proto-action-cancel" href="javascript:void(0);"><span>Back</span></a>
		    <div class="dropdown pull-right">
			  <button class="btn close-action" type="button"><i class="fa fa-times"></i></button>
			</div>
			<h1>&nbsp;</h1> <!-- Intentionally preserved for future heading titles -->    
			<dl class="info-unit with-photo license-details proto-readonly rt-column">
				<dd>
					<img <?php echo 'src="' . $ROOT . 'assets/img/ico_sales_negotiator_75act.png"' ?>>
				</dd>
				<dd><h4>Midas</h4></dd>
				<dd>Licensed</dd>
				<dd>Subscription Started August 24, 2012</dd>
			</dl>
			<h2>Usage Tracking <button><i class="fa fa-download-alt"></i></button></h2>
			<dl class="data-list">
				<dd><span>Tracking Data 1</span><span>Data Point 1</span></dd>
				<dd><span>Tracking Data 2</span><span>Data Point 2</span></dd>
				<dd><span>Tracking Data 3</span><span>Data Point 3</span></dd>
				<dd><span>Tracking Data 4</span><span>Data Point 4</span></dd>
				<dd><span>Tracking Data 5</span><span>Data Point 5</span></dd>
			</dl>
			<h2>Billing <button><i class="fa fa-pencil"></i></button></h2>
			<dl class="data-list">
				<dd><span>Billing Period</span><span>Annually</span></dd>
				<dd><span>Number of Users</span><span>300 of 450 allowed</span></dd>
				<dd><span>Subscription Cost Per User</span><span>$300.00</span></dd>
			</dl>
		</article>

		<!-- **************** -->
		<!-- CUSTOMER DETAILS -->
		<!-- **************** -->
		<article class="account-details proto-hide-on-edit" data-id="3">
			<div id="alert-locked-user" class="alert alert-block alert-error fade in">
				<h4><i class="fa fa-exclamation-sign"></i> Customer is Disabled</h4>
				<p>This customer account is disabled and cannot access any of their Vendavo applications. To allow this customer to use Vendavo, enable their account.</p>
				<p><button type="button" class="btn close-alert">Enable Customer</button></p>
			</div>

			<div class="dropdown pull-right">
				<button class="btn" data-toggle="dropdown" role="button" type="button">Actions <span class="caret"></span></button>
				<button class="btn close-contextual-pane" type="button"><i class="fa fa-times"></i></button>

				<div class="dropdown-menu flipcard disable-customer">
					<ul class="front">
						<li><a href="#">Tracking Information</a></li>
						<li><a href="#">Reset Password</a></li>
						<li><a href="#" class="flip-trigger" id="disable-customer">Disable Customer</a></li>
					</ul>
					<ul class="back">
						<li>Disabling this customer will block all of their users from all Vendavo applications.</li>
						<li><input type="text" placeholder="Password Required to Disable Customer" value="" /></li>
						<li><button class="btn btn-danger">Disable Customer</button></li>
						<li><button class="btn" id="reset-cancel">Cancel</button></li>
					</ul>
				</div>
			</div>

			<h2>Company and Account Owner <button class="proto-action-edit"><i class="fa fa-pencil"></i></button></h2>
			<dl class="info-unit with-photo">
				<dd>
					<img <?php echo 'src="' . $ROOT . 'assets/img/placeholder_company.png"' ?>>
				</dd>
				<dd><h1>Alcoa</h1></dd>
				<dd>Account #1938294</dd>
				<dd>&nbsp;</dd>
				<dd>555 Mountain View Rd.</dd>
				<dd>Sunnyvale, CA 99999 USA</dd>
				<dd>U.S.A.</dd>
				<dd>&nbsp;</dd>
				<dd>Electronics Industry</dd>
				<dd>Original Equipment Manufacturer</dd>
				<dd>50,000 - 1000,000 Employees</dd>
			</dl>
			<dl class="info-unit with-photo">
				<dd>
					<img <?php echo 'src="' . $ROOT . 'assets/img/placeholder_user.png"' ?>>
				</dd>
				<dd><h1>Joel Nave</h1></dd>
				<dd><a href="#">jnave@acme.com</a></dd>
				<dd>415.666.6666</dd>
			</dl>

			<h2>Vendavo Applications</h2>
			<dl class="drop-list">
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-chevron-down"></i>
						<h5>Midas</h5>
						<span class="not-licensed">Not Licensed</span>
					</a>
					<div class="dropdown-menu flipcard pull-right start-license with-input">
						<ul class="front">
							<li><a href="#" class="flip-trigger">License Application</a></li>
							<li><a href="#">Start Application Trial</a></li>
						</ul>
						<ul class="back">
							<li class="input-date"><span class="text-left"><strong>License Starting</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li class="input-date"><span class="text-left"><strong>License Ending</strong></span></li>
							<li class="input-date"><span class="text-left"><input class="datepicker" size="16" type="text" value="01-01-2015"></span></li>
							<li><span class="text-left"><button class="btn btn-primary">License Appplication</button></span></li>
							<li><span class="text-left"><button class="btn" id="reset-cancel">Cancel</button></span></li>
						</ul>
					</div>
				</dd>
			</dl>

		</article>

		<!-- ************************** -->
		<!--    EDIT CUSTOMER DETAILS   -->
		<!-- ************************** -->
		<article class="edit-cus-details" data-id="3">
			<div class="createerrors"></div>
			<h1>Edit Customer Account</h1>
			<h2>Company</h2>
			<form class="edit-form" action="#">
				<dl>
					<dd><label>Company</label><input type="text" value="Alcoa" autofocus required /></dd>
					<dd class="proto-address"><label>Address Line 1</label><input name="address" type="text" value="555 Mountain View Rd." /></dd>
					<dd><label>Address Line 2</label><input type="text" value="" /></dd>
					<dd><label>City</label><input type="text" value="Sunnyvale" /></dd>
					<dd><label>State / Province / Region</label><input type="text" value="CA" /></dd>
					<dd><label>Zip / Postal Code<span class="optional">(If Available)</span></label><input type="text" value="99999" /></dd>
					<dd><label>Country</label>
						<select>
							<option selected="selected">United States of America</option>
							<option>Czech Republic</option>
						</select>
					</dd>
					<dd><label>Industry</label>
						<select>
							<option selected="selected">Chemicals</option>
						</select>
					</dd>
					<dd><label>Type</label>
						<select>
							<option selected="selected">Original Equipment Manufacturer</option>
						</select>
					</dd>
					<dd><label>Number of Employees</label>
						<select>
							<option>1,000 - 5,000</option>
							<option selected="selected">5,000 - 10,000</option>
							<option>10,000 - 100,000</option>
						</select>
					</dd>
				</dl>
				<h2>Account Owner</h2>
				<dl>
					<dd><label>Account Owner<i class="info fa fa-info-sign"></i></label>
						<select>
							<option selected="selected">Joel Nave</option>
						</select>
					</dd>
				</dl>
				<dl>
					<dd class="list-actions">
						<button class="btn btn-primary proto-action-save-customer" type="button">Save</button>
						<button class="btn proto-action-cancel" type="button">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>

		<!-- ********************** -->
		<!--    ADD NEW CUSTOMER 	-->
		<!-- ********************** -->
		<article class="add-cus-details">
			<h1>New Customer Account</h1>
			<h2>Company</h2>
			<form class="edit-form" action="#">
				<dl>
					<dd><label>Company</label><input type="text" value="" autofocus /></dd>
					<dd><label>Address Line 1</label><input type="text" value="" /></dd>
					<dd><label>Address Line 2</label><input type="text" value="" /></dd>
					<dd><label>City</label><input type="text" value="" /></dd>
					<dd><label>State / Province / Region</label><input type="text" value="" /></dd>
					<dd><label>Zip / Postal Code<span>(If Available)</span></label><input type="text" value="" /></dd>
					<dd><label>Country</label>
						<select>
							<option selected="selected">United States of America</option>
							<option>Czech Republic</option>
						</select>
					</dd>
					<dd><label>Industry</label>
						<select>
							<option selected="selected">Chemicals</option>
						</select>
					</dd>
					<dd><label>Type</label>
						<select>
							<option selected="selected">Original Equipment Manufacturer</option>
						</select>
					</dd>
					<dd><label>Number of Employees</label>
						<select>
							<option>1,000 - 5,000</option>
							<option selected="selected">5,000 - 10,000</option>
							<option>10,000 - 100,000</option>
						</select>
					</dd>
				</dl>
				<h2>Account Owner</h2>
				<dl>
					<dd><label>First Name</label><input type="text" value="" /></dd>
					<dd><label>Last Name</label><input type="text" value="" /></dd>
					<dd><label>Title</label><input type="text" value="" /></dd>
					<dd><label>Email</label><input type="text" value="" /></dd>
					<dd><label>Phone<span class="optional">(Optional)</span></label><input type="text" value="" /></dd>
				</dl>
				<dl>
					<dd><label class="checkbox"><input type="checkbox">Invite to Free Midas Trial</label></dd>
				</dl>
				<dl>
					<dd class="list-actions">
						<button class="btn btn-primary proto-action-save-customer" type="button">Add Customer</button>
						<button class="btn close-contextual-pane" type="button">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>
	</section>
</aside>

