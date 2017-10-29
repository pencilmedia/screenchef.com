<html>
<head>
<meta http-equiv="Content-Type" content="text/html; utf-8" />
	<title>Dashboard POC</title>
	<link rel="stylesheet" type="text/css" href="dashboard.php.css" />
   	<link id="dcss" rel="stylesheet" type="text/css" href="#" />

	<script src="global/js/jquery/jquery.js" type="text/javascript"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.interface.js"></script>
	<script type="text/javascript" src="dashboard.php.js"></script>
</head>
<body>
<p>
    <strong>Dashboard POC &bull; </strong>
    <a href="#" id="collapse">collapse all</a> | 
    <a href="#" id="expand">expand all</a> |
	<a href="#" id="add">add widget</a><br />
	(up to 10 widgets may be added)
</p>
<!-- *********************************************** -->
<!--	LEFT CONTENT
<!-- *********************************************** -->

<div id="main" class="groupWrapper main">
    <div class="groupItem" id="x1">
        <div class="itemHeader" style="-moz-user-select: none;">
            <a class="closeEl expanded" href="#">&nbsp;</a>
            Demo I
            <a class="cmdA" href="#">&nbsp;</a>
            <a class="cmdB" href="#">&nbsp;</a>
        </div>
        <div class="itemContent">
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
            </ul>
        </div>
    </div>
</div>
<!-- *********************************************** -->
<!--	RIGHT CONTENT
<!-- *********************************************** -->
<div id="side" class="groupWrapper  widgets">
    <div class="groupItem" id="x2">
        <div class="itemHeader" style="-moz-user-select: none;">
            <a class="closeEl expanded" href="#">&nbsp;</a>
        	Demo II
            <a class="cmdA" href="#">&nbsp;</a>
            <a class="cmdB" href="#">&nbsp;</a>
        </div>
        <div class="itemContent">
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
            </ul>
        </div>
    </div>
    <div class="groupItem" id="x3">
        <div class="itemHeader" style="-moz-user-select: none;">
            <a class="closeEl expanded" href="#">&nbsp;</a>
        	Demo III
            <a class="cmdA" href="#">&nbsp;</a>
            <a class="cmdB" href="#">&nbsp;</a>
        </div>
        <div class="itemContent">
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
            </ul>
        </div>
    </div>	
    <div class="groupItem" id="x4">
        <div class="itemHeader" style="-moz-user-select: none;">
            <a class="closeEl expanded" href="#">&nbsp;</a>
        	Demo IV
            <a class="cmdA" href="#">&nbsp;</a>
            <a class="cmdB" href="#">&nbsp;</a>
        </div>
        <div class="itemContent">
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>