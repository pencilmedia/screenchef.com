<h1>@@usersTitle</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officia qui mollitia nulla asperiores, maxime sapiente! Earum explicabo itaque, nobis perspiciatis deleniti voluptas quam magni necessitatibus quibusdam, vero consequatur eligendi!</p>

<!-- trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-user">
Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade in paradata-modal" id="add-user" tabindex="-1" role="dialog" aria-labelledby="add-userLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="add-userLabel">Add New User</h4>
			</div>
			<div class="modal-body">
				<div class="drillcard">
			            <div class="frontside animate25s slideInLeft" style="display: block;">
			            	<div class="alert alert-warning">
			            		<p><i class="fa fa-exclamation-triangle"></i>Removing User Management from yourself, removes your ability to create and manage users and will result in you being logged out.</p>
			            	</div>
						<fieldset>
							<legend>User Information</legend>
							<form>
								<div class="form-group">
									<label for="paradata-username">Email (Username)</label>
									<input type="email" class="form-control" id="paradata-username" placeholder="Email">
								</div>
								<div class="form-group">
									<label for="paradata-first-name">First Name</label>
									<input type="text" class="form-control" id="paradata-first-name" placeholder="First Name">
								</div>
								<div class="form-group">
									<label for="paradata-last-name">Last Name</label>
									<input type="text" class="form-control" id="paradata-last-name" placeholder="Last Name">
								</div>
								<div class="form-group">
									<label for="paradata-telephone">Telephone</label>
									<input type="tel" class="form-control" id="paradata-telephone" placeholder="123-456-7890">
								</div>
							</form>
						</fieldset>
			            </div>
			            <div class="backside animate25s slideOutRight" style="display: none;">
						<fieldset>
							<legend>Application &amp; Roles</legend>
							<form>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> BOM Advantage</label>
									</dt>
									<dd class="application-role">
										<label><input type="checkbox"> Role A</label>
									</dd>
									<dd class="application-role">
										<label><input type="checkbox"> Role B</label>
									</dd>
									<dd class="application-role">
										<label><input type="checkbox"> Role C</label>
									</dd>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> Catalog Optimizer</label>
									</dt>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> New Material Request</label>
									</dt>
									<dd class="application-role">
										<label><input type="checkbox"> Approver</label>
									</dd>
									<dd class="application-role">
										<label><input type="checkbox"> Data Analyst</label>
									</dd>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> Price Guardian</label>
									</dt>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> User Administrator</label>
									</dt>
								</dl>
							</form>
						</fieldset>
			            </div>
			        </div>
			</div>
			<div class="modal-footer" data-id="add-user-info">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" data-step="account-step">Next</button>
			</div>
			<div class="modal-footer" data-id="add-this-user">
				<div class="colonnade dual">
					<div class="lt-column">
						<button type="button" class="btn btn-default" data-step="account-step"><i class="fa fa-chevron-left"></i>Back</button>
						<label><input type="checkbox"> Send Invite</label>
					</div>
					<div class="rt-column">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary">Add New User</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/*Proto only - Ignore - Don't include this class in the html on dev */ 
	.proto-example-dialog {
		position: relative;
		top: auto;
		right: auto;
		bottom: auto;
		left: auto;
		z-index: 1;
		display: block;
	}
</style>

<h2>Example Modal</h2>
<div class="modal fade in paradata-modal proto-example-dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">Add New User</h4>
			</div>
			<div class="modal-body">
				<div class="drillcard">
			            <div class="frontside animate25s slideInLeft" style="display: block;">
						<fieldset>
							<legend>User Information</legend>
							<form>
								<div class="form-group">
									<label for="paradata-username">Email (Username)</label>
									<input type="email" class="form-control" id="paradata-username" placeholder="Email">
								</div>
								<div class="form-group">
									<label for="paradata-first-name">First Name</label>
									<input type="text" class="form-control" id="paradata-first-name" placeholder="First Name">
								</div>
								<div class="form-group">
									<label for="paradata-last-name">Last Name</label>
									<input type="text" class="form-control" id="paradata-last-name" placeholder="Last Name">
								</div>
								<div class="form-group">
									<label for="paradata-telephone">Telephone</label>
									<input type="tel" class="form-control" id="paradata-telephone" placeholder="123-456-7890">
								</div>
							</form>
						</fieldset>
			            </div>
			            <div class="backside animate25s slideOutRight" style="display: none;">
						<fieldset>
							<legend>Application &amp; Roles</legend>
							<form>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> BOM Advantage</label>
									</dt>
									<dd class="application-role">
										<label><input type="checkbox"> Role A</label>
									</dd>
									<dd class="application-role">
										<label><input type="checkbox"> Role B</label>
									</dd>
									<dd class="application-role">
										<label><input type="checkbox"> Role C</label>
									</dd>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> Catalog Optimizer</label>
									</dt>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> New Material Request</label>
									</dt>
									<dd class="application-role">
										<label><input type="checkbox"> Approver</label>
									</dd>
									<dd class="application-role">
										<label><input type="checkbox"> Data Analyst</label>
									</dd>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> Price Guardian</label>
									</dt>
								</dl>
								<dl class="application-list">
									<dt class="application">
										<label><input type="checkbox"> User Administrator</label>
									</dt>
								</dl>
							</form>
						</fieldset>
			            </div>
			        </div>
			</div>
			<div class="modal-footer" data-id="add-user-info">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" data-step="account-step">Next</button>
			</div>
			<div class="modal-footer" data-id="add-this-user">
				<div class="colonnade dual">
					<div class="lt-column">
						<button type="button" class="btn btn-default" data-step="account-step"><i class="fa fa-chevron-left"></i>Back</button>
						<label><input type="checkbox"> Send Invite</label>
					</div>
					<div class="rt-column">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary">Add New User</button>
					</div>
				</div>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->