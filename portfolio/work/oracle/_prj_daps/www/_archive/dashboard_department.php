<div class="subtabs">
    <ul>
        <li><a href="#tab_worklist"><span>My Worklist</span></a></li>
        <li><a href="/includes/tabs/tab_dailies.html"><span>My Dailies</span></a></li>
        <li><a href="/includes/tabs/tab_department.html"><span>Department</span></a></li>
        <li><a href="/includes/tabs/tab_project.html"><span>Project</span></a></li>
    </ul>
    <div id="tab_worklist">
        <div class="colonnade">
            <div class="column first">
                <? include '../com/com_worklist_activity_stream.html' ?>
            </div>
            <div class="column last">
                <? include '../com/com_worklist_worklist.html' ?>
                <? include '../com/com_worklist_asset.html' ?>
            </div>
        </div>
    </div>
    <div id="tab_dailies"></div>
    <div id="tab_department"></div>
    <div id="tab_projects"></div>
</div>

