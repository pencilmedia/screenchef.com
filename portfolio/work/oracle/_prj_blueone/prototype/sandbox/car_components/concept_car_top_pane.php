<div class="nav_buttons">
    <a href="#" class="button"><span><em class="iconic back">&nbsp;</em>&nbsp;</span></a>
    <a href="#" class="button"><span><em class="iconic forward">&nbsp;</em>&nbsp;</span></a>
    <a href="#" class="button"><span><em class="iconic reload">&nbsp;</em>&nbsp;</span></a>
    <a href="#" class="button" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_dashboard/dashboard_mystuff.php', 'mainwin', function() { dashboard.init(); } ); return false;"><span><em class="iconic home">&nbsp;</em>&nbsp;</span></a>
</div>
<div class="create_button">
    <a href="#" id="toggle_create_menu">Create New<em class="dropdown">&nbsp;</em></a>
</div>
<div class="search_panel">
    <a href="#" id="toggle_search_menu"><em class="search_selector">&nbsp;</em><em class="divet">&nbsp;</em></a>
    <input type="text" value="" name=""/>
    <div class="search_panel_buttons">
        <a href="#" class="button" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_search/search_collapsed.php', 'mainwin', function() { onSearchPageLoad(); } ); return false;"><span><em class="iconic quick_search">&nbsp;</em>&nbsp;</span></a>
        <a href="#" class="button" onclick="javascript:window.controller_instance.dispatchLink('pages/_testing/proj_search/search_expanded.php', 'mainwin', function() { onSearchPageLoad(); } ); return false;"><span><em class="iconic parametric_search">&nbsp;</em>&nbsp;</span></a>
        <!-- <a href="#" class="button" id="cmdQLx"><span>QL</span></a> -->
    	<span id="progress_indicator_global" class="progress_indicator global">&nbsp;</span>
    </div>
</div>