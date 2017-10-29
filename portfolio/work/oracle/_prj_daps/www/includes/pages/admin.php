<div class="filter_menu_container">
	<div class="left">
        admin:
        <select id="selProject">
            <option>Project 1</option>
            <option>Project 2</option>
        </select>
   	</div>
    <div class="right">
        Department:
        <select id="selDepartment">
            <option>Department 1</option>
            <option>Department 2</option>
        </select>
	</div>
</div>
<div id="dashboard_subtabs" class="subtabs">
    <ul>
        <li><a href="#tab_admin"><span>System</span></a></li>
        <li><a href="#tab_admin"><span>Production</span></a></li>
        <li><a href="#tab_admin"><span>Users</span></a></li>
    </ul>
    <div id="tab_admin" class="subtabs_body admin">
        <div class="colonnade">
            <div class="column first" style="width:24.5%;">
                <?  include '../com/com_admin_system_left.html' ?>
            </div>
            <div class="column last" style="width:74.5%">
                <?  include '../com/com_admin_system_right.html' ?>
            </div>
        </div>
    </div>
</div>

