<div id="nav" class="LeftPane">
    <div id="LeftPaneTop" class="LeftPaneTop">
        <div id="leftPaneHeader" class="leftPaneHeader" title="Collapse">
			<img id="logo1" src="global/images/orc_logo_xsml_dark_bkg.png" style="position:relative; float:left; top:2px; left:7px;" />
            <div id="sidebarCollapse" class="layoutCollapse"></div>
        </div>
    </div>
	<div class="LeftPaneBottom">
        <div id="LeftPaneButtons" class="action_buttons">
            <a id="cmdMDIOpen" href="#" onclick="fauxMDIOpen();return false;" class="button"><span><em class="iconic mdi">&nbsp;</em>&nbsp;</span></a>
            <a id="cmdMDIClose" href="#" onclick="fauxMDIClose();return false;" style="display:none;" class="button"><span><em class="iconic mdi_close">&nbsp;</em>&nbsp;</span></a>
            <a href="#" class="button" id="cmdTools"><span><em class="iconic2 preferences">&nbsp;</em><em class="iconic3 divet">&nbsp;</em>&nbsp;</span></a>
            <a href="#" class="button"><span><em class="iconic2 help">&nbsp;</em><em class="iconic3 divet">&nbsp;</em>&nbsp;</span></a>
            <a href="#" onclick="fauxMDILogOff();return false;" class="button"><span><em class="iconic logout">&nbsp;</em>&nbsp;</span></a>
		</div>
		<div id="slideMenu" class="slideMenu">
            <div class="slideMenuItem">
                <div class="slideMenuHeader selected"><em class="file_folder">&nbsp;</em> <a href="#">Folders</a></div>
                <div class="slideMenuBody" style="height:300px;overflow:auto">
                    <div class="title first">
                    	<p>
                        	<a href"#" class="collapse_all first" title="Collapse All" onclick="collapseAllTree('searchTree');">&nbsp;</a>
                            <a href"#" class="expand_all" title="Expand All" onclick="expandAllTree('searchTree');">&nbsp;</a>
                            <a href"#" class="edit" title="Edit">&nbsp;</a>
                      	</p>
                  	</div>
                    <div id="searchTree" class="treemenu"></div>
                    <div class="title">
                    	<p>
                        	<a href="#" class="collapse_all first" title="Collapse All" onclick="collapseAllTree('bookmarkTree');">&nbsp;</a>
                            <a href="#" class="expand_all" title="Expand All" onclick="expandAllTree('bookmarkTree');">&nbsp;</a>
                            <a href="#" class="edit" title="Edit">&nbsp;</a>
                      	</p>
                   	</div>
                    <div id="bookmarkTree" class="treemenu"></div>
                    <div class="title">
                    	<p>
                        	<a href="#" class="collapse_all first" title="Collapse All" onclick="collapseAllTree('recentlyVisitedTree');">&nbsp;</a>
                        	<a href="#" class="expand_all" title="Expand All" onclick="expandAllTree('recentlyVisitedTree');">&nbsp;</a>
                            <a href="#" class="edit" title="Edit">&nbsp;</a>
                        </p>
                   	</div>
                    <div id="recentlyVisitedTree" class="treemenu"></div>
                </div>
            </div>
            <div class="slideMenuItem">
                <div id="dx2" class="slideMenuHeader"><em class="report">&nbsp;</em> <a href="#">Reports</a></div>
                <div class="slideMenuBody" style="height:0px;overflow:hidden;">
                    <div class="title first">
                    	<p>
                        	<a href="#" class="collapse_all first" title="Collapse All" onclick="collapseAllTree('reportsAnalytics');">&nbsp;</a>
                        	<a href="#" class="expand_all" title="Expand All" onclick="expandAllTree('reportsAnalytics');">&nbsp;</a>
                            <a href="#" class="edit" title="Edit">&nbsp;</a>
                        </p>
                   	</div>
                    <div id="reportsAnalytics" class="treemenu"></div>
                </div>
            </div>
            <div class="slideMenuItem">
                <div class="slideMenuHeader"><em class="navigator">&nbsp;</em> <a href="#">Navigator</a></div>
                <div class="slideMenuBody" style="height:0px;overflow:hidden">
                    <p class="lp_navigator">To display data here, click 'Show in Navigator' for Search Results, Bills of Materials, or Programs.</p>
                </div>
            </div>
	    </div>
	</div>
</div>