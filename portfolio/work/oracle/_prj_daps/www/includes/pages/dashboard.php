<div class="filter_menu_container">
	<div class="left">
        Project:
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
        <li><a href="#tab_worklist"><span>Worklist</span></a></li>
        <li><a href="#tab_dailies"><span>Dailies</span></a></li>
        <li><a href="#tab_department"><span>Department</span></a></li>
        <li><a href="#tab_project"><span>Project</span></a></li>
    </ul>
    <div id="tab_worklist" class="subtabs_body">
        <div class="colonnade">
            <div class="column first">
                <? include '../com/com_worklist_2.html' ?>
                <? include '../com/com_worklist_3.html' ?>
            </div>
            <div class="column last">
                <? include '../com/com_worklist_4.html' ?>
            </div>
        </div>
    </div>
    <div id="tab_dailies" class="subtabs_body">
        <div class="colonnade">
            <div class="column first">
                <? include '../com/com_dailies_2.html' ?>
                <? include '../com/com_dailies_3.html' ?>
            </div>
            <div class="column last">
                <? include '../com/com_dailies_4.html' ?>
            </div>
        </div>
    </div>
    <div id="tab_department" class="subtabs_body">
        <div class="colonnade">
            <div class="column first">
                <? include '../com/com_department_1.html' ?>
            </div>
            <div class="column last">
                <? include '../com/com_department_5.html' ?>
                <? include '../com/com_department_6.html' ?>
            </div>
        </div>
    </div>
    <div id="tab_project" class="subtabs_body">
        <div class="colonnade">
            <div class="column first">
                <? include '../com/com_project_1.html' ?>
            </div>
            <div class="column last">
                <? include '../com/com_project_5.html' ?>
                <? include '../com/com_project_6.html' ?>
            </div>
        </div>
    </div>
</div>

