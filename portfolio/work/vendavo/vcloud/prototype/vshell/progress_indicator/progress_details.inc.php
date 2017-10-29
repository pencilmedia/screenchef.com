<aside class="rt-pane slideOutPanel">
	<div class="alert alert-block alert-error fade in">
    		<button type="button" class="close" data-dismiss="alert">×</button>
    		<strong><i class="fa fa-exclamation-circle"></i>Global Error Message</strong> Please fix some global errors.
  	</div>
	<!-- **************** -->
	<!-- PROGRESS INDICATOR -->
	<!-- **************** -->
	<div class="modeless hide" role="dialog" aria-hidden="true">
		<div class="progress-spinner">
			<i class="fa fa-spinner fa-spin"></i>
			<p>Loading&hellip;</p>
		</div>
	</div>
	<section>
		<article class="proto-details">
			<div class="confirmation">User Info Saved</div>
			<form>
				<h1>Edit Details</h1>
				<dl>
					<dd><label>Company</label><input type="text" value="ACME Co." autofocus required /></dd>
					<dd><label>Address</label><input type="text" name="address" value="555 Mountain View Rd." required /></dd>
					<dd><label>City, State, Zip Code</label><input type="text" name="city" value="Sunnyvale, CA 99999 USA" required /></dd>
					<dd class="list-actions">
						<button type="button" class="btn btn-primary" id="proto-activate-progress">Save</button>
						<button class="btn close-contextual-pane" type="button">Cancel</button>
					</dd>
				</dl>
			</form>
		</article>
	</section>
</aside>

