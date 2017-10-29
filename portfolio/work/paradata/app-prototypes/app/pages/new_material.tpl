<div class="alert alert-danger alert-dismissible fade in single-w-btns" role="alert">
	<p class="clearfix">
		<i class="fa fa-exclamation-triangle"></i>There are <strong>3</strong> issues to resolve and <strong>4</strong> to review before submitting for approval.
		<button type="button" class="btn btn-primary" disabled>Submit for Approval</button>
	</p>
</div>
<!-- BEGIN: PAGE HEAD -->
@@include('./../components/page_head.tpl', {"pageTitle": "Crestor 5mg 2x14 Tabs"})
<hr>
<section class="colonnade dual read-form">
	<h2 class="sr-only">Original Request Fields</h2>
	<article class="lt-column">
		<dl class="form-column">
			<dt>Material Description</dt>
			<dd>PF CRESTOR 5mg 2x14 Tabs</dd>
			<dt>Local Code</dt>
			<dd>PF 7206905TUR</dd>
			<dt>Receiving Locations</dt>
			<dd>B-1_TR01</dd>
			<dt>ERP Material Type</dt>
			<dd>FERT</dd>
			<dt>ERP Base UOM</dt>
			<dd>EA</dd>
		</dl>
	</article>
	<article class="rt-column">
		<dl class="form-column">
			<dt>Toll Principal Org</dt>
			<dd>&nbsp;</dd>
			<dt>Toll Parent Material</dt>
			<dd>&nbsp;</dd>
			<dt>Toll Product Ind</dt>
			<dd>&nbsp;</dd>
			<dt>Is Recursive</dt>
			<dd>&nbsp;</dd>
			<dt>Recursive Input MAT</dt>
			<dd>&nbsp;</dd>
		</dl>
	</article>
</section>
<section class="edit-form">
	<hr>
	<form action="#/" class="form-horizontal">
		<fieldset class="colonnade dual">
			<legend class="sr-only">Derived Fields</legend>
			<div class="lt-column">
				<dl class="form-column">
					<dt><label for="field-1" class="required">Trade Name</label></dt>
					<dd class="strikethrough comments">
						<select class="form-control" name="field-1" required>
							<option selected>CRESTOR</option>
							<option selected>Other Option</option>
						</select>
						<span class="indicators">
							<i class="fa fa-strikethrough strike"></i><i class="fa fa-comment-o comment"></i>
						</span>
					</dd>
					<dt><label for="field-2" class="required">Strength</label></dt>
					<dd class="strikethrough">
						<select class="form-control" name="field-2" required>
							<option selected>5 MG</option>
						</select>
						<span class="indicators">
							<i class="fa fa-strikethrough strike"></i></i>
						</span>
					</dd>
					<dt><label for="field-3">Brand</label></dt>
					<dd class="comments">
						<select class="form-control" name="field-3">
							<option selected>CRESTOR</option>
						</select>
						<span class="indicators">
							<i class="fa fa-comment-o comment"></i>
						</span>
					</dd>
				</dl>
			</div>
			<div class="rt-column">
				<dl class="form-column">
					<dt><label for="field-4">Generic Name</label></dt>
					<dd>
						<select class="form-control" name="field-4">
							<option selected>ROSUVASTATIN CALCIUM</option>
						</select>
						<span class="indicators">&nbsp;</span>
					</dd>
					<dt><label for="field-5" class="required">Market</label></dt>
					<dd class="has-indicator has-error">
						<select class="form-control" name="field-5" required>
							<option></option>
						</select>
						<span class="indicators">
							<i class="fa fa-exclamation-triangle"></i>
						</span>
					</dd>
					<dt><label for="field-6">Industry Sector</label></dt>
					<dd>
						<select class="form-control" name="field-6">
							<option selected>P, Pharmaceuticals</option>
						</select>
						<span class="indicators">&nbsp;</span>
					</dd>
				</dl>
			</div>
		</fieldset>
	</form>
</section>