<div class="app data-upload">
	<header>
		<h1>Previously Analysed Files</h1>
		<article class="page-tools">
			<button class="btn close-data-page">Close</button>
		</article>
	</header>

  	<section>
		<div class="grid-container">
			<div id="actionheader" class="row grid-actions">
				<div class="col-xs-6">
					<a class="btn btn-default" href="#delete-all-data-modal" data-toggle="modal">Clear all Data</a>
				</div>
				<div class="col-xs-6">
					<div class="table-count">2 Files</div>
				</div>
			</div>
			<table class="table table-striped table-hover" cellspacing="0" cellpadding="0" border="0">
				<thead>
			        <tr>
			        	<th></th>
						<th>File</th>
						<th>Uploader</th>
						<th>Upload Date</th>
						<th>Transactions Uploaded</th>
						<th>Errors</th>
						<th class="link-file">Error File</th>
			        </tr>
				</thead>
				<tbody>
					<tr class="data-upload-details-open" data-id="2">
						<td></td>
						<td>Price_data_jan_2013.csv</td>
						<td>Automated</td>
						<td>February 12, 2013</td>
						<td>1,254</td>
						<td>0</td>
						<td class="link-file">-</td>
					</tr>
					<tr>
						<td></td>
						<td>Price_data_dec_2013.csv</td>
						<td>Jeremy Affeldt</td>
						<td>January 10, 2013</td>
						<td>2,355</td>
						<td>323</td>
						<td class="link-file"><a href="#"><i class="fa fa-file-alt"></i></a></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="pagination-container">
			<ul class="pagination">
				<li class="disabled"><a href="#"><i class="fa fa-caret-left"></i></a></li>
				<li class="active"><a href="#"><span>1</span></a></li>
				<li><a href="#"><span>2</span></a></li>
				<li><a href="#"><span>3</span></a></li>
				<li><a href="#"><span>4</span></a></li>
				<li><a href="#"><span>5</span></a></li>
				<li><a href="#"><span>6</span></a></li>
				<li><a href="#"><span>7</span></a></li>
				<li><a href="#"><span>8</span></a></li>
				<li><a href="#"><span>9</span></a></li>
				<li><a href="#"><span>10</span></a></li>
				<li><a href="#"><i class="fa fa-caret-right"></i></a></li>
			</ul>
		</div>

	<!-- No Data Label -->
	<!-- <div class="placeholder-text"><h3>No Files Have Been Analyzed</h3></div> -->
	</section>
</div>

<!-- Modal -->
<div id="delete-all-data-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3>Delete All Data</h3>
			</div>
			<div class="modal-body">
				<p>Deleting all data will remove all files from this list and the related information from the rest of the system. This will affect everyone else that is using the Vendavo Cloud Solution.</p>
				<p>Are you sure you would like to continue with deleting all data?</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-danger">Delete All Data</button>
				<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
			</div>
		</div>
	</div>
</div>
