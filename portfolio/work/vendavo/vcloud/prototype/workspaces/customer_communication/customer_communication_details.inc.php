<aside class="rt-pane slideOutPanel">
	<section>
		<!-- ****************************** -->
		<!-- CUSTOMER COMMUNICATION DETAILS -->
		<!-- ****************************** -->
 		<article class="account-details" data-id="schedule">
			<h1>Scheduled Maintenance Communication</h1> 
			<form class="edit-form" action="#">

			<h2>Planned Downtime</h2> 
			<dl class="info-unit"> 
				<dd>
					<label>Start Date</label>
				</dd>
				<dd>
					<input required name="date" class="datepicker" type="text" value="01-01-2014" />
					<input required name="time" class="timepicker" type="text" />
				</dd> 
			</dl> 
			<dl class="info-unit"> 
				<dd> 
					<label>Approximate Down Time</label>
				</dd>
				<dd>
					<input class="hours" required name="hours" type="number" value="1" min="0" /><span>hrs</span>
					<input class="hours" required name="minutes" type="number" max="59" min="0" value="0" /><span>min</span>
				</dd> 
			</dl>

			<h2>Sign In Banner</h2>
			<dl> 
				<dd> 
					<input required name="banner_subject" type="text" value="Upcoming System Maintenance" autofocus maxlength="255" /> 
				</dd> 
			</dl> 
			<dl> 
				<dd> 
					<textarea class="email-message" rows="5" placeholder="We will be doing some planned maintenance on the Vendavo Cloud Solution"></textarea>
				</dd> 
			</dl> 

			<h2>Email Notification To Administrators</h2>
			<dl>
				<dd>
					<label class="checkbox"><input type="checkbox">Send email notifications</label>
				</dd>
				<dd>
					<input required name="banner_subject" type="text" value="Upcoming System Maintenance" autofocus maxlength="255" /> 
				</dd>
			</dl>
			<dl>
				<dd>
					<textarea class="email-message" rows="5" placeholder="We will be doing some planned maintenance on the Vendavo Cloud Solution"></textarea>
				</dd>
			</dl>
			<dl>
				<dd class="list-actions"> 
					<button id="save" class="btn btn-primary proto-action-save-customer" type="button"> 
						Schedule
					</button> 
					<button id="cancel" class="btn close-contextual-pane" type="button"> 
						Cancel
					</button> 
				</dd> 
			</dl>

			</form>
		</article>
		<!-- ****************************** -->
		<!-- EDIT COMMUNICATION DETAILS -->
		<!-- ****************************** -->
		<article class="account-details communication" data-id="1">
			<div class="pull-right">
				<button class="btn close-contextual-pane" type="button"><i class="fa fa-times"></i></button>
			</div>

			<h1>Maintenance Communication</h1>
			<div class="alert alert-block alert-error fade in">
				<h4><i class="fa fa-warning"></i>
					Communication Cancelled
				</h4>
				<p>
					This communication has been cancelled and will no longer send any notifications or present an upcoming maintenance banner on the sign in page.
				</p>
				<p>
					<button type="button" class="btn btn-primary">Re-activate Communication</button>
				</p>
			</div>

			<h2>Sign In Banner</h2> 
			<dl> 
				<dd>Upcoming System Maintenance</dd>
				<dd>We will be doing some planned maintenance on the Vendavo Cloud Solution from January 10th at 6:30 AM to 9:30 AM of the same day.</dd>
				<dd>The banner will be posted 24 hrs before scheduled downtime.</dd>
			</dl> 

			<h2>Email Notification To Administrators</h2>
			<dl> 
				<dd>Upcoming System Maintenance 1/10/2013 6:30 AM to 1/10/2013 9:30 AM</dd> 
				<dd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dd>
				<dd>The notification will be sent 14 days and reminder will be sent 24 hrs before downtime.</dd>
			</dl>

		</article>

		<article class="account-details communication" data-id="2">
			<div class="pull-right">
				<button class="btn close-contextual-pane" type="button"><i class="fa fa-times"></i></button>
			</div>

			<h1>Maintenance Communication</h1>
			<div class="alert alert-block alert-success fade in">
				<h4><i class="fa fa-check"></i>
					Communication Scheduled
				</h4>
				<p>
					This communication has been cancelled and will no longer send any notifications or present an upcoming maintenance banner on the sign in page.
				</p>
				<p>
					<button type="button" class="btn btn-danger">Cancel Communications</button>
					<button type="button" class="btn">Modify Communications</button>
				</p>
			</div>

			<h2>Sign In Banner</h2> 
			<dl> 
				<dd>Upcoming System Maintenance</dd>
				<dd>We will be doing some planned maintenance on the Vendavo Cloud Solution from January 10th at 6:30 AM to 9:30 AM of the same day.</dd>
				<dd>The banner will be posted 24 hrs before scheduled downtime.</dd>
			</dl> 

			<h2>Email Notification To Administrators</h2>
			<dl> 
				<dd>Upcoming System Maintenance 1/10/2013 6:30 AM to 1/10/2013 9:30 AM</dd> 
				<dd>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</dd>
				<dd>The notification will be sent 14 days and reminder will be sent 24 hrs before downtime.</dd>
			</dl>

		</article>

	</section>
</aside>

