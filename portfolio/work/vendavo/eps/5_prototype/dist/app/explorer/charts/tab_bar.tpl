<!-- Work Area - Simple Table
================================================== -->
<div class="workarea">
	<div class="workarea-actions">
		<!-- Workarea Action Bar -->
		<div class="flex-colonnade">
			<div class="flex-column">
				<!-- Workarea Tabs -->
				<ul class="nav nav-pills" role="tablist">
					<li role="presentation" class="active">
						<a href="#chart-area" aria-controls="chart-area" role="tab" data-toggle="tab">Chart</a>
					</li>
					<li role="presentation">
						<a href="#table-area" aria-controls="table-area" role="tab" data-toggle="tab">Table</a>
					</li>
				</ul>
			</div>
			<div class="flex chart-title">
				<!-- Workarea Title -->
				<hgroup>
					<h2>Bar Chart</h2>
					<h3>
						Displaying
						<span class="number-of">1,143,098</span>
						transactions convertible to
						<span class="uom">each</span>
					</h3>
				</hgroup>
			</div>
			<div class="flex-column">
				<!-- Workarea Actions -->
				<div class="dropdown pull-right">
					<button class="btn btn-link"> <i class="fa fa-camera"></i>
					</button>
					<button class="btn btn-link" data-open-pane="workarea-pane"> <i class="fa fa-gear"></i>
					</button>
					<button class="btn btn-link dropdown-toggle" type="button" id="chart-menu" data-toggle="dropdown" aria-expanded="true">
						<i class="fa fa-ellipsis-v"></i>
					</button>
					<ul class="dropdown-menu" role="menu" aria-labelledby="chart-menu">
						<li role="presentation">
							<a role="menuitem" tabindex="-1" href="#">
								<i class="fa fa-download"></i>
								Export
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" tabindex="-1" href="#">
								<i class="fa fa-trash-o"></i>
								Delete Chart
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- Tab panes -->
	<div class="tab-content">
		<div role="tabpanel" class="tab-pane workspace chart-area active" id="chart-area">
			<div id="highchart" style="height:300px;"></div>
		</div>
		<div role="tabpanel" class="tab-pane workspace table-area" id="table-area">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>