<?
	$yuiResources   = "global/js/yui/";
	$localResources = "./";
?>
<html>
<head>
	<title>Cascade Tree - Status Implementation</title>
	
	<!-- INCLUDE YAHOO CLASSES -->
	<script type="text/javascript" src="<?=$yuiResources;?>yahoo/yahoo.js"></script> 
	<script type="text/javascript" src="<?=$yuiResources;?>event/event.js"></script> 
	<script type="text/javascript" src="<?=$yuiResources;?>dom/dom.js"></script>
	<script type="text/javascript" src="<?=$yuiResources;?>treeview/treeview.js"></script>
	

	<!-- INCLUDE YAHOO STYLES -->
	<link rel="stylesheet" href="<?=$yuiResources;?>treeview/assets/tree.css" type="text/css" />


	<!-- INCLUDE AGILE CUSTOM CLASSES -->
	<script type="text/javascript" src="<?=$localResources;?>AgileConstants.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileUtilFunctions.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileKeyReader.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileMultiSelectCascadeListTree.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileMultiSelectCascadeListNode.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>AgileMultiSelectCascadeListBuilder.js"></script>	
	

	<!-- INCLUDE AGILE CUSTOM STYLES -->
	<link rel="stylesheet" href="<?=$localResources;?>agile_tree.css" type="text/css" />
	

	<!-- INCLUDE DEMO RELATED SCRIPTS AND STYLES -->
	<script type="text/javascript" src="<?=$localResources;?>tree_demo.js"></script>
	<script type="text/javascript" src="<?=$localResources;?>tree_demo_data.js"></script>
	<link rel="stylesheet" href="<?=$localResources;?>tree_demo.css" type="text/css" />
	
    <script>
    function doScroll()
    {
    	//var statusDivs = YAHOO.util.Dom.getElementsByClassName('treeNodeStatus');
		//var containerWidth = parseInt( YAHOO.util.Dom.getStyle(YAHOO.util.Dom.get('treeContainer'), 'width') );
    }
	</script>
</head>
<body onLoad="treeInit('treeContainer', treeData);">
	<div tabindex="-1" id="treeContainer"></div>
</body>
</html>