<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">Breadcrumb</a> &raquo;</li>
		        <li>Breadcrumb</li>
			</ul>
		</div>
		<div class="column_one wp70">
			<h2>Home</h2>
				<p>Welcome back, Test administrator.</p>
		</div>
	</div>
</div>
<!--************************************
        TABS
    *************************************-->
<div class="tabs_container skin_default special_case">
	<ul class="tabs">
		<li class="first_tab selected"><a href="#" ><span>Dashboard<em>&nbsp;</em></span></a>
			<ul>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_mystuff.php',function() { dashboard.init(); });"><span>My Stuff<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_executive.php',function() { dashboard.init(); });"><span>Executive<em>&nbsp;</em></span></a></li>
				<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_programs.php',function() { dashboard.init(); });"><span>Programs<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_resources.php',function() { dashboard.init(); });"><span>Resources<em>&nbsp;</em></span></a></li>
				<li class="selected"><a href="#"><span>Financials<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_custom.php',function() { dashboard.init(); });"><span>Custom<em>&nbsp;</em></span></a></li>
			</ul>
		</li>
		<li class="indicator_gray"><a href="#"><span>Notifications<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#"><span>Workflow Routings<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/assigment.php',function() { });"><span>Assignments<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/timesheet.php',function() { });"><span>Timesheet</span></a></li>
	</ul>
</div>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls">&nbsp;</p>
    </div>
</div>
<div style ="border-top: none;" id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form widgets">       
			<div id="main" class="groupWrapper side_by_side with_bottom">
				<div class="groupItem" id="container_01">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Labor Cost Chart</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_01" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_content">
                            <div style="overflow: hidden;">
								<img style="width:100%; height: 288px;" src="../../../global/images/financial_chart1.jpg"/>
							</div>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>
			<div id="side" class="groupWrapper side_by_side with_bottom">
				<div class="groupItem" id="container_02">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Fixed Cost Chart</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_02" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_content">
                            <div style="overflow: hidden;">
								<img style="width:100%; height: 288px;" src="../../../global/images/financial_chart2.jpg" usemap="#Map"/>
								<map name="Map" id="Map"><area shape="rect" coords="0,0,300,30" href="#" /></map>
							</div>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>
			<div id="bottom" class="groupWrapper bottom">
				<div class="groupItem" id="container_03">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Capital Expense Chart</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_03" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_content">
                            <div style="overflow: hidden;">
								<img style="width:100%; height: 288px;" src="../../../global/images/financial_chart3.jpg" usemap="#Map"/>
								<map name="Map" id="Map"><area shape="rect" coords="0,0,300,30" href="#" /></map>
							</div>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>
        </div>
    </div>
</div>