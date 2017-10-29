<aside class="rt-pane slideOutPanel">
	<div class="modeless hide" role="dialog" aria-hidden="true">
		<div class="progress-spinner"> <i class="fa fa-spinner fa-spin"></i>
			<p>Loading&hellip;</p>
		</div>
	</div>
	<section>
		<!-- ******** -->	
		<!-- ADD USER -->	
		<!-- ******** -->	
		<article class="user-add">
			<h1>Add New User</h1>
			<h2>User Information</h2>
			<form name="createForm" id="createForm" class="edit-form">
				<dl>
	                <dd>
	                    <label>Email Address</label>
	                    <input type="text" value="" placeholder="name@example.com" maxlength="128">
	                </dd>
	                <dd>
	                    <label>First Name</label>
	                    <input type="text" value="" maxlength="25">
	                </dd>
	                <dd>
	                    <label>Last Name</label>
	                    <input type="text" value="" maxlength="25">
	               </dd>
	                <dd>
	                    <label>Company</label>
	                    <input type="text" name="account" value="Trial_Acct_24" readonly="">
	                </dd>
	                <dd>
	                    <label>Title <span class="optional">(optional)</span></label>
	                    <input type="text" value="" maxlength="50">
	                </dd>
	                <dd>
                        <label>User Name</label>
                        <input type="text" value="" maxlength="128" placeholder="name@example.com">
	                </dd>
	                <dd>
	                    <label>Phone <span class="optional">(optional)</span></label>
	                    <input type="text" value="" maxlength="20">
	                </dd>
				</dl> 
				<h2>Privileges</h2>
				<dl class="info-unit">
					<dd class="no-trunc">
						<select data-placeholder="Enter/select privileges" class="chosen-select" multiple>
							<option value=""></option>
						</select>
					</dd>
					<dd class="list-actions">
	    				<button class="btn btn-primary disabled" disabled="disabled">Add User</button>
						<button class="btn close-contextual-pane">Cancel</button>
					</dd>	
				</dl>
			</form>
		</article>

		<!-- ***************** -->	
		<!-- ADD LIST OF USERS -->	
		<!-- ***************** -->	
		<article class="bulk-add">
			<h1>Add List of Users</h1>
			<form class="edit-form" action="#">
				<div onclick="$('input[id=file]').click();" class="upload-prompt-box">
					<button class="btn" type="button" role="button">
						<span >Drop Data File Here (.csv)</span>
						<span >or click to select a file</span>
					</button>
				</div>
				<p class="instructions"> <strong>Expected format:</strong>
					First Name, Last Name, Title, Email, Username, Phone
				</p>
				<ul class="instructions">
					<li>Username must be in email format (e.g. name@company.com). We recommend using the user's email address as their username.</li>
					<li>Title and Phone are optional and can be left blank.</li>
				</ul>
				<h2>Privileges</h2>
				<dl class="info-unit">
					<dd class="no-trunc">
						<select data-placeholder="Type to assign privileges" class="chosen-select" multiple>
							<option value=""></option>
						</select>
					</dd>
					<dd class="list-actions">
						<button class="btn btn-primary">Add Users</button>
						<button class="btn close-contextual-pane">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>

		<!-- Jeremy Affeldt -->	

		<!-- ************* -->	
		<!-- USERS DETAILS -->	
		<!-- ************* -->	
		<article class="user-details proto-hide-on-edit" data-id="2">
			<div id="alert-locked-user" class="alert alert-block alert-error fade in">
				<h4> <i class="fa fa-lock"></i>User Account is Locked.</h4>
				<p>Jeremy Affeldt's account has been locked due to successive failed login attempts.</p>
				<p><button type="button" class="btn close-alert" data-dismiss="alert">Unlock User Account</button></p>
			</div>
			<div class="confirmation">Email Sent</div>

			<div class="dropdown pull-right">
				<button class="btn" type="button" data-toggle="dropdown">Actions <span class="caret"></span></button>
				<button class="btn close-contextual-pane" type="button">
					<i class="fa fa-times"></i>
				</button>

				<div class="dropdown-menu flipcard">
					<ul class="front">
						<li>
							<a href="#" id="tracking-info">Tracking Information</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="resend-vsn-invitation">Resend VSN for iPad Invitation</a>
						</li>
						<li>
							<a href="#" class="flip-trigger" data-id="reset-password">Reset Password</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="disable-user">Disable</a>
						</li>
					</ul>
					<ul class="back">
						<li>Send the user an email with a link to reset their password.</li>
						<li class="divider"></li>
						<li>
							<button class="btn" data-id="reset-cancel">Cancel</button>
						</li>
						<li>
							<button class="btn btn-primary" id="disable-submit">Send Email</button>
						</li>
					</ul>
				</div>
			</div>

			<h1>&nbsp;</h1>
			<!-- Intentionally preserved for future heading titles -->	
			<dl class="info-unit with-photo">
				<dd>
					<img alt="user" <?php echo 'src="' . $ROOT . 'assets/img/placeholder_user.png"' ?>>
				</dd>
				<dd class="edit">
					<button class="btn">
						<i class="fa fa-pencil"></i>
					</button>
				</dd>
				<dd>
					<h1>Jeremy Affeldt</h1>
				</dd>
				<dd>ACME Manufacturing</dd>
				<dd>Sales Representative</dd>
				<dd>jaffeldt</dd>
				<dd>
					<a href="#">jeremy@acme.com</a>
				</dd>
				<dd>415.555.5555</dd>
			</dl>

			<ul class="statbox">
				<li class="stats stats-border">
					<h3 class="data">158</h3>
					<span class="data-tag">Sessions</span>
				</li>
				<li class="stats stats-border">
					<h3 class="data">2:15pm</h3>
					<span class="data-tag">Last Session</span>
				</li>
				<li class="stats">
					<h3 class="data">3</h3>
					<span class="data-tag">Devices</span>
				</li>
			</ul>

			<h2>
				Privileges
				<button class="proto-action-edit">
					<i class="fa fa-pencil"></i>
				</button>
			</h2>
			<ul id="privilegeList" class="label-list">
				<li>
					<span class="label label-info">View Opportunities</span>
				</li>
				<li>
					<span class="label label-info">View Users</span>
				</li>
				<li>
					<span class="label label-info">Negotiate Deals</span>
				</li>
			</ul>

			<h2>Devices</h2>
			<dl class="drop-list">
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-trash-o"></i>
						<h5>Jeremy Affeldt's iPad</h5>
						<p class="subtitle">Last session: February 5, 2013</p>
					</a>

					<div class="dropdown-menu flipcard pull-right">
						<ul class="front-with-buttons">
							<li>
								Wiping this device will erase all Vendavo related account information from it.
							</li>
							<li class="divider"></li>
							<li>
								<button class="btn btn-danger remove-row" id="wipe-device-submit">Wipe Device</button>
							</li>
							<li>
								<button class="btn" data-id="reset-cancel">Cancel</button>
							</li>
						</ul>
					</div>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-trash-o"></i>
						<h5>Jeremy Affeldt's iPad II</h5>
						<p class="subtitle">Last session: January 11, 2013</p>
					</a>

					<div class="dropdown-menu flipcard pull-right">
						<ul class="front-with-buttons">
							<li>
								Wiping this device will erase all Vendavo related account information from it.
							</li>
							<li class="divider"></li>
							<li>
								<button class="btn btn-danger remove-row" id="wipe-device-submit">Wipe Device</button>
							</li>
							<li>
								<button class="btn" data-id="reset-cancel">Cancel</button>
							</li>
						</ul>
					</div>
				</dd>
			</dl>
		</article>

		<!-- ****************** -->	
		<!-- EDIT USERS DETAILS -->	
		<!-- ****************** -->	
		<article class="user-details proto-edit-privileges" data-id="2">
			<h1>Manage Jeremy Affeldt's Privileges</h1>
			<section>
				<form class="proto-edit-form edit-form">
					<!-- NOTE: class proto-edit-form is for prototype smoke & mirrors -->	

					<dl>
						<dd>
							<label>Name</label>
							<div class="chosen-container chosen-container-multi chosen-container-active" style="width:100%;">
								<ul class="chosen-choices">
									<li class="search-choice">
										<span>View Opportunities</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="3"></a>
									</li>
									<li class="search-choice">
										<span>View Users</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="2"></a>
									</li>
									<li class="search-choice">
										<span>Negotiate Deals</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="4"></a>
									</li>
								</ul>
							</div>
						</dd>
						<dd>
							<p>
								Based on privileges assigned, the following invitations will be sent:
							</p>
						</dd>
						<dd>
							<label class="checkbox">
								<input type="checkbox" checked="checked">iPad VSN Application</label>
						</dd>
						<dd class="list-actions">
							<button class="btn btn-primary">Apply</button>
							<button class="btn proto-action-cancel">Cancel</button>
						</dd>
					</dl>
				</form>
			</section>
		</article>

		<!-- Samatha Sajja -->	

		<!-- ************* -->	
		<!-- USERS DETAILS -->	
		<!-- ************* -->	
		<article class="user-details proto-hide-on-edit" data-id="5">
			<div class="confirmation">Email Sent</div>

			<div class="dropdown pull-right">
				<button class="btn detail-actions" data-toggle="dropdown" role="button" type="button">
					Actions
					<span class="caret"></span>
				</button>
				<button class="btn close-contextual-pane" type="button">
					<i class="fa fa-times"></i>
				</button>

				<div class="dropdown-menu flipcard">
					<ul class="front">
						<li>
							<a href="#" id="tracking-info">Tracking Information</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="resend-vsn-invitation">Resend VSN for iPad Invitation</a>
						</li>
						<li>
							<a href="#" class="flip-trigger" data-id="reset-password">Reset Password</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="disable-user">Disable</a>
						</li>
					</ul>
					<ul class="back">
						<li>Send the user an email with a link to reset their password.</li>
						<li class="divider"></li>
						<li>
							<button class="btn" data-id="reset-cancel">Cancel</button>
						</li>
						<li>
							<button class="btn btn-primary" id="disable-submit">Send Email</button>
						</li>
					</ul>
				</div>
			</div>
			<h1>&nbsp;</h1>
			<!-- Intentionally preserved for future heading titles -->	
			<dl class="info-unit with-photo">
				<dd>
					<img alt="user" <?php echo 'src="' . $ROOT . 'assets/img/placeholder_user.png"' ?>>
				<dd class="edit">
					<button>
						<i class="fa fa-pencil"></i>
					</button>
				</dd>
				<dd>
					<h1>Samatha Sajja</h1>
				</dd>
				<dd>ACME Manufacturing</dd>
				<dd>Sales Representative</dd>
				<dd>ssajja</dd>
				<dd>
					<a href="#">ssajja@vendavo.com</a>
				</dd>
				<dd>415.555.5555</dd>
			</dl>

			<ul class="statbox">
				<li class="stats stats-border">
					<h3 class="data">158</h3>
					<span class="data-tag">Sessions</span>
				</li>
				<li class="stats stats-border">
					<h3 class="data">2:15pm</h3>
					<span class="data-tag">Last Session</span>
				</li>
				<li class="stats">
					<h3 class="data">3</h3>
					<span class="data-tag">Devices</span>
				</li>
			</ul>

			<h2>
				Privileges
				<button class="proto-action-edit">
					<i class="fa fa-pencil"></i>
				</button>
			</h2>
			<ul id="privilegeList" class="label-list">
				<li>
					<span class="label label-info">View Opportunities</span>
				</li>
				<li>
					<span class="label label-info">View Users</span>
				</li>
				<li>
					<span class="label label-info">Negotiate Deals</span>
				</li>
			</ul>

			<h2>Devices</h2>
			<dl class="drop-list">
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-trash-o"></i>
						<h5>Samatha Sajja's iPad</h5>
						<p class="subtitle">Last session: February 5, 2013</p>
					</a>

					<div class="dropdown-menu flipcard pull-right">
						<ul class="front-with-buttons">
							<li>
								Wiping this device will erase all Vendavo related account information from it.
							</li>
							<li class="divider"></li>
							<li>
								<button class="btn btn-danger remove-row" id="wipe-device-submit">Wipe Device</button>
							</li>
							<li>
								<button class="btn" data-id="reset-cancel">Cancel</button>
							</li>
						</ul>
					</div>
				</dd>
				<dd class="dropdown">
					<a class="dropdown-toggle row" data-toggle="dropdown" href="#">
						<i class="fa fa-trash-o"></i>
						<h5>Samatha's iPhone</h5>
						<p class="subtitle">Last session: January 11, 2013</p>
					</a>

					<div class="dropdown-menu flipcard pull-right">
						<ul class="front-with-buttons">
							<li>
								Wiping this device will erase all Vendavo related account information from it.
							</li>
							<li class="divider"></li>
							<li>
								<button class="btn btn-danger remove-row" id="wipe-device-submit">Wipe Device</button>
							</li>
							<li>
								<button class="btn" data-id="reset-cancel">Cancel</button>
							</li>
						</ul>
					</div>
				</dd>
			</dl>

		</article>

		<!-- ****************** -->	
		<!-- EDIT USERS DETAILS -->	
		<!-- ****************** -->	
		<article class="user-details proto-edit-privileges" data-id="5">
			<h1>Manage Samatha Sajja's Privileges</h1>
			<section>
				<form class="proto-edit-form edit-form">
					<!-- NOTE: class proto-edit-form is for prototype smoke & mirrors -->	

					<dl class="info-unit">
						<dd>
							<label>Name</label>
							<div class="chosen-container chosen-container-multi chosen-container-active" style="width:100%;">
								<ul class="chosen-choices">
									<li class="search-choice">
										<span>View Opportunities</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="3"></a>
									</li>
									<li class="search-choice">
										<span>View Users</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="2"></a>
									</li>
									<li class="search-choice">
										<span>Negotiate Deals</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="4"></a>
									</li>
								</ul>
							</div>
						</dd>
						<dd>
							<p>
								Based on privileges assigned, the following invitations will be sent:
							</p>
						</dd>
						<dd>
							<label class="checkbox">
								<input type="checkbox" checked="checked">iPad VSN Application</label>
						</dd>
						<dd class="list-actions">
							<button class="btn btn-primary" data-toggle="dropdown" role="button" type="button">Apply</button>
							<button class="btn proto-action-cancel" data-toggle="dropdown" role="button" type="button">Cancel</button>
						</dd>
					</dl>
				</form>
			</section>
		</article>

		<!-- Pavel Simek -->	

		<!-- ************* -->	
		<!-- USERS DETAILS -->	
		<!-- ************* -->	
		<article class="user-details proto-hide-on-edit" data-id="10">

			<div id="alert-invitation" class="alert alert-block alert-warning fade in">
				<h4><i class="fa fa-envelope-alt"></i>User has not yet Activated VSN for iPad.</h4>
				<p>
					Pavel Simek has not yet activated the VSN for iPad application.
				</p>
				<p>
					<button type="button" class="btn reopen-alert">Resend Invitation</button>
				</p>
			</div>
			<div class="confirmation">Email Sent</div>

			<div class="dropdown pull-right">
				<button class="btn detail-actions" data-toggle="dropdown" role="button" type="button">
					Actions
					<span class="caret"></span>
				</button>
				<button class="btn close-contextual-pane" type="button">
					<i class="fa fa-times"></i>
				</button>

				<div class="dropdown-menu flipcard">
					<ul class="front">
						<li>
							<a href="#" id="tracking-info">Tracking Information</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="resend-vsn-invitation">Resend VSN for iPad Invitation</a>
						</li>
						<li>
							<a href="#" data-id="reset-password">Reset Password</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="disable-user">Disable</a>
						</li>
					</ul>
					<ul class="back">
						<li>Send the user an email with a link to reset their password.</li>
						<li class="divider"></li>
						<li>
							<button class="btn" data-id="reset-cancel">Cancel</button>
						</li>
						<li>
							<button class="btn btn-primary" id="disable-submit">Send Email</button>
						</li>
					</ul>
				</div>
			</div>
			<h1>&nbsp;</h1>
			<!-- Intentionally preserved for future heading titles -->	
			<dl class="info-unit with-photo">
				<dd>
					<img alt="user" <?php echo 'src="' . $ROOT . 'assets/img/placeholder_user.png"' ?>>
				</dd>
				<dd class="edit">
					<button>
						<i class="fa fa-pencil"></i>
					</button>
				</dd>
				<dd>
					<h1>Pavel Simek</h1>
				</dd>
				<dd>Vendavo Engeneering</dd>
				<dd>Code Representative</dd>
				<dd>psimek</dd>
				<dd>
					<a href="#">psimek@vendavo.com</a>
				</dd>
				<dd>333.333.4444</dd>
			</dl>

			<ul class="statbox">
				<li class="stats stats-border">
					<h3 class="data">0</h3>
					<span class="data-tag">Sessions</span>
				</li>
				<li class="stats stats-border">
					<h3 class="data">0:00</h3>
					<span class="data-tag">Last Session</span>
				</li>
				<li class="stats">
					<h3 class="data">0</h3>
					<span class="data-tag">Devices</span>
				</li>
			</ul>

			<h2>
				Privileges
				<button class="proto-action-edit">
					<i class="fa fa-pencil"></i>
				</button>
			</h2>
			<ul id="privilegeList" class="label-list">
				<li>
					<span class="label label-info">Negotiate Deals</span>
				</li>
			</ul>

			<h2>Devices</h2>
			<dl class="drill-list"></dl>

		</article>

		<!-- ****************** -->	
		<!-- EDIT USERS DETAILS -->	
		<!-- ****************** -->	
		<article class="user-details proto-edit-privileges" data-id="10">
			<h1>Manage Pavel Simek's Privileges</h1>
			<section>
				<form class="proto-edit-form edit-form">
					<!-- NOTE: class proto-edit-form is for prototype smoke & mirrors -->	

					<dl class="info-unit">
						<dd>
							<label>Name</label>
							<div class="chosen-container chosen-container-multi chosen-container-active" style="width:100%;">
								<ul class="chosen-choices">
									<li class="search-choice">
										<span>Negotiate Deals</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="4"></a>
									</li>
								</ul>
							</div>
						</dd>
						<dd>
							<p>
								Based on privileges assigned, the following invitations will be sent:
							</p>
						</dd>
						<dd>
							<label class="checkbox">
								<input type="checkbox" checked="checked">iPad VSN Application</label>
						</dd>
						<dd class="list-actions">
							<button class="btn btn-primary" data-toggle="dropdown" role="button" type="button">Apply</button>
							<button class="btn proto-action-cancel" data-toggle="dropdown" role="button" type="button">Cancel</button>
						</dd>
					</dl>
				</form>
			</section>
		</article>

		<!-- Michal Skvor -->	

		<!-- ************* -->	
		<!-- USERS DETAILS -->	
		<!-- ************* -->	
		<article class="user-details proto-hide-on-edit" data-id="11">

			<div id="alert-invitation" class="alert alert-block alert-warning fade in">
				<h4><i class="fa fa-envelope-alt"></i>Invitation of VSN for iPad has expired.</h4>
				<p>
					Michal Skvor's invitation to VSN for iPad has expired. They will not be able to install and activate without a new invitation.
				</p>
				<p>
					<button type="button" class="btn reopen-alert">Resend Invitation</button>
				</p>
			</div>
			<div class="confirmation">Email Sent</div>

			<div class="dropdown pull-right">
				<button class="btn detail-actions" data-toggle="dropdown" role="button" type="button">
					Actions
					<span class="caret"></span>
				</button>
				<button class="btn close-contextual-pane" type="button">
					<i class="fa fa-times"></i>
				</button>

				<div class="dropdown-menu flipcard">
					<ul class="front">
						<li>
							<a href="#" id="tracking-info">Tracking Information</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="resend-vsn-invitation">Resend VSN for iPad Invitation</a>
						</li>
						<li>
							<a href="#" data-id="reset-password">Reset Password</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#" id="disable-user">Disable</a>
						</li>
					</ul>
					<ul class="back">
						<li>Send the user an email with a link to reset their password.</li>
						<li class="divider"></li>
						<li>
							<button class="btn" data-id="reset-cancel">Cancel</button>
						</li>
						<li>
							<button class="btn btn-primary" id="disable-submit">Send Email</button>
						</li>
					</ul>
				</div>
			</div>
			<h1>&nbsp;</h1>
			<dl class="info-unit with-photo">
				<dd>
					<img alt="user" <?php echo 'src="' . $ROOT . 'assets/img/placeholder_user.png"' ?>>
				<dd class="edit">
					<button>
						<i class="fa fa-pencil"></i>
					</button>
				</dd>
				<dd>
					<h1>Michal Skvor</h1>
				</dd>
				<dd>Vendavo Engeneering</dd>
				<dd>Code Representative</dd>
				<dd>mskvor</dd>
				<dd>
					<a href="#">mskvor@vendavo.com</a>
				</dd>
				<dd>333.333.4444</dd>
			</dl>

			<ul class="statbox">
				<li class="stats stats-border">
					<h3 class="data">0</h3>
					<span class="data-tag">Sessions</span>
				</li>
				<li class="stats stats-border">
					<h3 class="data">0:00</h3>
					<span class="data-tag">Last Session</span>
				</li>
				<li class="stats">
					<h3 class="data">0</h3>
					<span class="data-tag">Devices</span>
				</li>
			</ul>

			<h2>
				Privileges
				<button class="proto-action-edit">
					<i class="fa fa-pencil"></i>
				</button>
			</h2>
			<ul id="privilegeList" class="label-list">
				<li>
					<span class="label label-info">Negotiate Deals</span>
				</li>
			</ul>

			<h2>Devices</h2>
			<dl class="drill-list"></dl>

		</article>

		<!-- ****************** -->	
		<!-- EDIT USERS DETAILS -->	
		<!-- ****************** -->	
		<article class="user-details proto-edit-privileges" data-id="11">
			<h1>Manage Michal Skvor's Privileges</h1>
			<section>
				<form class="proto-edit-form edit-form">

					<dl class="info-unit">
						<dd>
							<label>Name</label>
							<div class="chosen-container chosen-container-multi chosen-container-active" style="width:100%;">
								<ul class="chosen-choices">
									<li class="search-choice">
										<span>Negotiate Deals</span>
										<a href="javascript:void(0)" class="search-choice-close" rel="4"></a>
									</li>
								</ul>
							</div>
						</dd>
						<dd>
							<p>
								Based on privileges assigned, the following invitations will be sent:
							</p>
						</dd>
						<dd>
							<label class="checkbox">
								<input type="checkbox" checked="checked">iPad VSN Application</label>
						</dd>
						<dd class="list-actions">
							<button class="btn btn-primary" data-toggle="dropdown" role="button" type="button">Apply</button>
							<button class="btn proto-action-cancel" data-toggle="dropdown" role="button" type="button">Cancel</button>
						</dd>
					</dl>
				</form>
			</section>
		</article>
	</section>
</aside>