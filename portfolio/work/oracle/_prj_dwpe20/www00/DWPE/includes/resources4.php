	<title><?php echo($component_title); ?></title>
	
	<!--jQuery Goodness-->
	<link type="text/css" href="/DWPE/_jquery/css/ui-darkness/jquery-ui-1.7.2.custom.css" rel="Stylesheet" />	
	<script type="text/javascript" src="/DWPE/_jquery/js/jquery-1.4.2.js"></script>
	<script type="text/javascript" src="/DWPE/_jquery/js/jquery-ui-1.7.2.custom.min.js"></script>
	
	<!--JQuery Plugins-->
	<script type="text/javascript" src="/DWPE/_jquery/plugins/jquery.ba-resize.js"></script>
	

	<!--Component Inspector Goodness-->
	<script src="/DWPE/DWPE_ProjectHome/component_inspector.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/DWPE/DWPE_ProjectHome/component-testbed.css"/>
	
	
	<?php
	
	
	
		
	
		
		$build_num=10555;
		
		
	
		/*Component definitions: order is important*/
		$components=array();
		$components[0]=array(	"name" => "DWPE Base Class",
								"key"  => "DWPE_Base_CLass",
								"css"  => "/DWPE/components/css/DWPE_Base.css",
								"js"   => "/DWPE/components/js/DWPE_Base_Class.js",
								"owner"=> "Roy Selig"		);
								
		$components[1]=array(	"name" => "DWPE Utilities",
								"key"  => "",
								"css"  => "",
								"js"   => "/DWPE/components/js/DWPE_Utilities.js",
								"owner"=> "Roy Selig"		);				
								
		$components[2]=array(	"name" => "DWPE UI Shell",
								"key"  => "DWPE_UI_Shell",
								"css"  => "/DWPE/components/css/DWPE_UIShell.css",
								"js"   => "",
								"owner"=> "Roy Selig"		);	
								
								
							
							
		
		
		
		
		
		
	
	
	
		
		/* Begin DWPE 2.0 JS Library: order is important! */
		$scripts=array();
		$scripts[0]="/DWPE/components/js/DWPE_Base_Class.js";
		$scripts[1]="/DWPE/components/js/DWPE_Utilities.js";
		$scripts[2]="/DWPE/components/js/DWPE_ObjectFactory_Class.js";
		$scripts[3]="/DWPE/components/js/DWPE_Window_Class.js";
		$scripts[4]="/DWPE/components/js/DWPE_ButtonFactory_Class.js";
		$scripts[5]="/DWPE/components/js/DWPE_Toolbar_Class.js";
		$scripts[6]="/DWPE/components/js/DWPE_PanelFactory_Class.js";
		$scripts[7]="/DWPE/components/js/DWPE_Accordion.js";
		$scripts[8]="/DWPE/components/js/DWPE_Splitter.js";
		$scripts[9]="/DWPE/components/js/DWPE_Tabset.js";
		$scripts[10]="/DWPE/components/js/DWPE_SampleData.js";
		$scripts[11]="/DWPE/components/js/DWPE_PageHeader.js";
		$scripts[12]="/DWPE/components/js/DWPE_SubHeader.js";
		$scripts[13]="/DWPE/components/js/DWPE_SubSubHeader.js";
		$scripts[14]="/DWPE/components/js/DWPE_FormFactory_Class.js";
		
	
		
		$scripts_len=count($scripts);
		
		/* Begin DWPE 2.0 CSS Library: order is important! */
		$css=array();
		$css[0]="/DWPE/components/css/DWPE_Base.css";
		$css[1]="/DWPE/components/css/DWPE_UIShell.css";
		$css[2]="/DWPE/components/css/DWPE_Window.css";
		$css[3]="/DWPE/components/css/DWPE_ButtonFactory.css";
		$css[4]="/DWPE/components/css/DWPE_Toolbar.css";
		$css[5]="/DWPE/components/css/DWPE_Tabs.css";
		$css[6]="/DWPE/components/css/DWPE_PanelFactory.css";
		$css[7]="/DWPE/components/css/DWPE_FormFactory.css";
		
		$css_len=count($css);
		
		for($i=0;$i<$scripts_len;$i++)
		{
			echo('<script src="'.$scripts[$i].'?'.$build_num.'" type="text/javascript"></script>');
			
		}
		
		for($i=0;$i<$css_len;$i++)
		{
			echo '<link rel="stylesheet" href="'.$css[$i].'?'.$build_num.'"/>';
			
		}
	
	
	
	?>

	<script type="text/javascript">
		$(
			function()
			{
				$("#build_num").html('[Drop <?php echo $build_num?>]');	
			}
		);	
	</script>
	