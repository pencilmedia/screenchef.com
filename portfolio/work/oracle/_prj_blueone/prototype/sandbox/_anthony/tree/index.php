<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
	<title>jQuery treeView</title>
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" href="treeview.css" />
	<link rel="stylesheet" href="left_pane.css" />
	<script src="global/js/jquery/jquery.js" type="text/javascript"></script>
	<script src="global/js/jquery/plugins/jquery.treeview.min.js" type="text/javascript"></script>
	<script src="index.php.js" type="text/javascript"></script>
</head>
<body>
<div class="left_pane">
    <!-- *************************************************************** -->
    <!--	LEFT PANE TOP												 -->
    <!-- *************************************************************** -->
	<div id="left_pane_top" class="left_pane_top">
        <div title="Collapse" class="leftPaneHeader">
            <div class="left_pane_collapse">&nbsp;</div>
        </div>
    </div>
    <!-- *************************************************************** -->
    <!--	LEFT PANE ACTION BUTTONS									 -->
    <!-- *************************************************************** -->
    <div class="action_buttons_container">
        <a href="#" class="button"><span><em class="iconic mdi">&nbsp;</em></span></a>
        <a href="#" class="button"><span><em class="iconic2 preferences">&nbsp;</em><em class="iconic3 divet">&nbsp;</em></span></a>
        <a href="#" class="button"><span><em class="iconic2 help">&nbsp;</em><em class="iconic3 divet">&nbsp;</em></span></a>
        <a href="#" class="button"><span><em class="iconic logout">&nbsp;</em></span></a>
    </div>		
	<div id="container_folders" class="left_pane_container">
        <div class="header selected"><em class="file_folder"></em> <a href="#">Folders</a></div>
        <!-- *************************************************************** -->
        <!--	PERSONAL SEARCHES											 -->
        <!-- *************************************************************** -->
        <div>
            <div class="toggle_buttons_container">
                <a href="#" title="Collapse All" class="collapse_all first">&nbsp;</a>
                <a href="#" title="Expand All" class="expand_all">&nbsp;</a>
                <a href="#" title="Edit" class="edit">&nbsp;</a>
            </div>    
            <ul id="search_tree" class="filetree">
                <li class="open"><span class="folder search title">Searches</span>
                    <ul>
                        <!-- *************************************************** -->
                        <!--	Sub-folder										 -->
                        <!-- *************************************************** -->
                        <li class="closed"><span class="folder">Personal Searches</span>
                            <ul>
                                <li><span class="file"><a href="#">My Documents</a></span></li>
                                <li><span class="file"><a href="#">Changes Pending My Approval</a></span></li>
                                <li><span class="file"><a href="#">2006 Travel Laptop Items</a></span></li>
                            </ul>
                        </li>
                        <!-- *************************************************** -->
                        <!--	Sub-folder										 -->
                        <!-- *************************************************** -->
                        <li class="closed"><span class="folder">Global Searches</span>
                            <ul>
                                <li><span class="file"><a href="#">Changes Submitted</a></span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- *************************************************************** -->
        <!--	BOOKMARKS													 -->
        <!-- *************************************************************** -->
        <div>
            <div class="toggle_buttons_container">
                <a href="#" title="Collapse All" class="collapse_all first">&nbsp;</a>
                <a href="#" title="Expand All" class="expand_all">&nbsp;</a>
                <a href="#" title="Edit" class="edit">&nbsp;</a>
            </div>
            <ul id="bookmarks_tree" class="filetree">
                <li class="open"><span class="folder bookmark title">Bookmarks</span>
                    <ul>
                        <!-- *************************************************** -->
                        <!--	Sub-folder										 -->
                        <!-- *************************************************** -->
                        <li class="closed"><span class="folder">Object Page Layouts</span>
                            <ul>
                                <!-- ******************************************* -->
                                <!--	Sub-sub-folder							 -->
                                <!-- ******************************************* -->
                                <li class="closed"><span class="folder">Form</span>
                                    <ul id="folder21">
                                        <li><span class="file">Form 2.1.1</span></li>
                                        <li><span class="file">Form 2.1.2</span></li>
                                    </ul>
                                </li>
                                <!-- ******************************************* -->
                                <!--	Sub-sub-folder							 -->
                                <!-- ******************************************* -->
                                <li class="closed"><span class="folder">Table</span>
                                    <ul>
                                        <li><span class="file">File 2.2.1</span></li>
                                        <li><span class="file">File 2.2.2</span></li>
                                    </ul>
                                </li>
                                <li><span class="file"><a href="#">Workflow</a></span></li>
                            </ul>
                        </li>
                        <!-- *************************************************** -->
                        <!--	Sub-folder										 -->
                        <!-- *************************************************** -->
                        <li class="closed"><span class="folder">Messaging Strip (DMS)</span>
                            <ul>
                                <li><span class="file"><a href="#">My Documents</a></span></li>
                                <li><span class="file"><a href="#">Changes Pending My Approval</a></span></li>
                                <li><span class="file"><a href="#">2006 Travel Laptop Items</a></span></li>
                            </ul>
                        </li>
                        <!-- *************************************************** -->
                        <!--	Sub-folder										 -->
                        <!-- *************************************************** -->
                        <li class="closed"><span class="folder">Multiple Window Demo</span>
                            <ul>
                                <li><span class="file"><a href="#">My Documents</a></span></li>
                                <li><span class="file"><a href="#">Changes Pending My Approval</a></span></li>
                                <li><span class="file"><a href="#">2006 Travel Laptop Items</a></span></li>
                            </ul>
                        </li>
                        <!-- *************************************************** -->
                        <!--	Sub-folder										 -->
                        <!-- *************************************************** -->
                        <li class="closed"><span class="folder">Objects</span>
                            <ul>
                                <li><span class="file"><a href="#">My Documents</a></span></li>
                                <li><span class="file"><a href="#">Changes Pending My Approval</a></span></li>
                                <li><span class="file"><a href="#">2006 Travel Laptop Items</a></span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- *************************************************************** -->
        <!--	HISTORY														 -->
        <!-- *************************************************************** -->
        <div>
            <div class="toggle_buttons_container">
                <a href="#" title="Collapse All" class="collapse_all first">&nbsp;</a>
                <a href="#" title="Expand All" class="expand_all">&nbsp;</a>
                <a href="#" title="Edit" class="edit">&nbsp;</a>
            </div>
            <ul id="history_tree" class="filetree">
                <li class="Open"><span class="folder history title">History</span>
                    <ul>
                        <li><span class="file"><a href="#">Form UI Contols</a></span></li>
                        <li><span class="file"><a href="#">Quickview Demo</a></span></li>
                        <li><span class="file"><a href="#">Summary Widgets</a></span></li>
                        <li><span class="file"><a href="#">YUI Summary Widgets</a></span></li>
                        <li><span class="file"><a href="#">Summary Widgets Layout</a></span></li>
                        <li><span class="file"><a href="#">Dashboard</a></span></li>
                        <li><span class="file"><a href="#">Thumbnail Layout</a></span></li>
                        <li><span class="file"><a href="#">Thumbnail Layout Table</a></span></li>
                        <li><span class="file"><a href="#">POC 2 Col Layout Top</a></span></li>
                        <li><span class="file"><a href="#">Edit Table</a></span></li>
                        <li><span class="file"><a href="#">Alert Window List</a></span></li>
                        <li><span class="file"><a href="#">Multi Button Controls I</a></span></li>
                        <li><span class="file"><a href="#">Multi Button Controls II</a></span></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
	<div id="container_reports" class="left_pane_container">
        <div class="header"><em class="report"></em> <a href="#">Reports</a></div>
        <div>
            <div class="toggle_buttons_container">
                <a href="#" title="Collapse All" class="collapse_all">&nbsp;</a>
                <a href="#" title="Expand All" class="expand_all">&nbsp;</a>
                <a href="#" title="Edit" class="edit">&nbsp;</a>
            </div>
        </div>
	</div>
	<div id="container_navigator" class="left_pane_container">
        <div class="header"><em class="program"></em> <a href="#">Navigator</a></div>
        <div>
            <div class="toggle_buttons_container">
                <a href="#" title="Collapse All" class="collapse_all">&nbsp;</a>
                <a href="#" title="Expand All" class="expand_all">&nbsp;</a>
                <a href="#" title="Edit" class="edit">&nbsp;</a>
            </div>
        </div>
	</div>
</div>
</body>
</html>