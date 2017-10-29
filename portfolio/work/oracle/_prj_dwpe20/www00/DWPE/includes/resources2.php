	<title><?php echo($component_title); ?></title>
	<!--Component Inspector Goodness-->
	<?php
				
		$build_num=11376;
	

	
		/**************************************************/
		/* IMPORTANT									  */
		/* Begin DWPE 2.0 JS Library: order is important! */
		/* IMPORTANT									  */
		/**************************************************/
		$scripts=array();
		// JQUERY GOODNESS
		$scripts[0] ="/DWPE/_jquery/js/jquery-1.4.2.min.js";
		$scripts[1] ="/DWPE/_jquery/js/jquery-ui-1.7.2.custom.min.js";
		// JQUERY PLUGINS
		//$scripts[1] ="/DWPE/_jquery/plugins/jquery.ba-resize.js";
		//
		// PROJECT SCRIPT FILES
		//
		$scripts[2] ="/DWPE/components/js/DWPE_Base_Class.js";
		$scripts[3] ="/DWPE/components/js/DWPE_BaseFactory_Class.js";
		$scripts[4] ="/DWPE/components/js/DWPE_Utilities.js";
		$scripts[5] ="/DWPE/components/js/DWPE_ObjectFactory_Class.js";
		$scripts[6] ="/DWPE/components/js/DWPE_Window_Class.js";
		$scripts[7] ="/DWPE/components/js/DWPE_ButtonFactory_Class.js";
		$scripts[8] ="/DWPE/components/js/DWPE_Toolbar_Class.js";
		$scripts[9] ="/DWPE/components/js/DWPE_PanelFactory_Class.js";
		$scripts[10] ="/DWPE/components/js/DWPE_Accordion.js";
		$scripts[11] ="/DWPE/components/js/DWPE_Splitter.js";
		$scripts[12]="/DWPE/components/js/DWPE_Tabset.js";
		$scripts[13]="/DWPE/components/js/DWPE_SampleData.js";
		$scripts[14]="/DWPE/components/js/DWPE_PageHeader.js";
		$scripts[15]="/DWPE/components/js/DWPE_SubHeader.js";
		$scripts[16]="/DWPE/components/js/DWPE_SubSubHeader.js";
		$scripts[17]="/DWPE/components/js/DWPE_FormFactory_Class.js";
		$scripts[18]="/DWPE/components/js/DWPE_WindowFactory_Class.js";
		$scripts[19]="/DWPE/components/js/DWPE_TreeFactory_Class.js";
		$scripts[20]="/DWPE/components/js/DWPE_TableFactory_Class.js";
		$scripts[21]="/DWPE/components/js/DWPE_Carousel_Class.js";
		$scripts[22]="/DWPE/components/js/DWPE_Train.js";
		//the next file must always appear after all other JS includes
		$scripts[23]="/DWPE/components/js/DWPE_Initialize.js";

		/****************************************************/
		/* IMPORTANT										*/
		/* Begin DWPE 2.0 CSS Library: order is important!  */
		/****************************************************/
		$css=array();
		//
		// JQUERY GOODNESS
		//
		$css[0]="/DWPE/_jquery/css/ui-darkness/jquery-ui-1.7.2.custom.css";
		//
		// PROJECT CSS FILES
		//
		$css[1]="/DWPE/components/css/DWPE_Base.css";
		$css[2]="/DWPE/components/css/DWPE_UIShell.css";
		$css[3]="/DWPE/components/css/DWPE_Window.css";
		$css[4]="/DWPE/components/css/DWPE_ButtonFactory.css";
		$css[5]="/DWPE/components/css/DWPE_Toolbar.css";
		$css[6]="/DWPE/components/css/DWPE_Tabs.css";
		$css[7]="/DWPE/components/css/DWPE_PanelFactory.css";
		$css[8]="/DWPE/components/css/DWPE_FormFactory.css";
		$css[9]="/DWPE/components/css/DWPE_Tree.css";
		$css[10]="/DWPE/components/css/DWPE_Table.css";
		$css[11]="/DWPE/components/css/DWPE_Carousel.css";
		$css[12]="/DWPE/components/css/DWPE_Train.css";
		
		
		
		$scripts_len=count($scripts);
		$css_len=count($css);
		$js_files = '';
		$css_files ='';
		
		
		//are we running on production or development?
		if(strpos($_SERVER["SERVER_NAME"],'scout')===false)  //local development
		{
			if ( isset($_REQUEST['minified']) )
			{
				//
				// Serve localhost minified files.
				//
				$build ="/* ";
				$build.="DWPE 2 Build ".$build_num."";
				$build.=" */\r\n\r\n";
				//
				// Script Minification
				//
				$js_dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/js/";
				$js_file="dwpe-2-lib-".$build_num.".js";
				//if(file_exists($js_dir.$js_file)==false)
				//{
					$delim="";
					for($i=2;$i<$scripts_len;$i++)
					{
						$js_files .= $delim.$scripts[$i] ;
						$delim=",";
					}
					$js=$build;
					$js .= file_get_contents("http://localhost/dwpe/min/?f=".$js_files);
					
					file_put_contents($js_dir.$js_file,$js);
				//}
				echo('<script src="'.$scripts[0].'" type="text/javascript"></script>'."\r\n\t");
				echo('<script src="'.$scripts[1].'" type="text/javascript"></script>'."\r\n\t");
				echo('<script src="/DWPE/components/js/'.$js_file.'" type="text/javascript"></script>'."\r\n\t");
				echo('<script src="/DWPE/DWPE_ProjectHome/component_inspector.js" type="text/javascript"></script>'."\r\n\t");
				//
				// Style Minification
				//
				$css_dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/css/";
				$css_file="dwpe-2-lib-".$build_num.".css";
				//if(file_exists($css_dir.$css_file)==false)
				//{
					$delim="";
					for($i=0;$i<$css_len;$i++)
					{
						$css_files .= $delim.$css[$i];
						$delim=",";
					}
					$styles=$build;
					$styles .= file_get_contents("http://localhost/dwpe/min/?f=".$css_files);
					file_put_contents($css_dir.$css_file,str_replace('/DWPE/components/','../',$styles));
				//}
				echo('<link rel="stylesheet" href="/DWPE/components/css/'.$css_file.'"></link>'."\r\n\t");
				echo('<link rel="stylesheet" href="/DWPE/DWPE_ProjectHome/component-testbed.css"></link>'."\r\n\t");
				
			} 
			else if( isset($_REQUEST['stitched']) )
			{
				//
				// Serve localhost files stitched together.
				//
				
				$build ="/* ";
				$build.="DWPE 2 Build ".$build_num."";
				$build.=" */\n\n";
				
				$js_dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/js/";
				$js_file="dwpe-2-lib-".$build_num.".js";
				$delim="";
				
				$js=$build;
				
				
				for($i=2;$i<$scripts_len;$i++)
				{
					$filename = $scripts[$i] ;
					$js .= "\n\n/* ".$filename." */\n\n".file_get_contents($_SERVER["DOCUMENT_ROOT"].$filename);
				
				}
				
			
				
				file_put_contents($js_dir.$js_file,$js);
				
				echo('<script src="'.$scripts[0].'" type="text/javascript"></script>'."\r\n\t");
				echo('<script src="'.$scripts[1].'" type="text/javascript"></script>'."\r\n\t");
				echo('<script src="/DWPE/components/js/'.$js_file.'" type="text/javascript"></script>'."\r\n\t");
				echo('<script src="/DWPE/DWPE_ProjectHome/component_inspector.js" type="text/javascript"></script>'."\r\n\t");
				
				
				$css_dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/css/";
				$css_file="dwpe-2-lib-".$build_num.".css";
				
				$styles=$build;
				
				for($i=0;$i<$css_len;$i++)
				{
					$filename = $css[$i];
					$styles .= "\n\n/* ".$filename." */\n\n".file_get_contents($_SERVER["DOCUMENT_ROOT"].$filename);
				
				}
				file_put_contents($css_dir.$css_file,str_replace('/DWPE/components/','../',$styles));

				echo('<link rel="stylesheet" href="/DWPE/components/css/'.$css_file.'"></link>'."\r\n\t");
				echo('<link rel="stylesheet" href="/DWPE/DWPE_ProjectHome/component-testbed.css"></link>'."\r\n\t");
				
			} 
			
			else 
			
			{
				
				//
				// Serve non-minified files.
				//
				for($i=0;$i<$scripts_len;$i++)
				{
					echo('<script src="'.$scripts[$i].'?'.$build_num.'" type="text/javascript"></script>'."\r\n\t");
				}
				echo('<script src="/DWPE/DWPE_ProjectHome/component_inspector.js" type="text/javascript"></script>'."\r\n\t");
				
				for($i=0;$i<$css_len;$i++)
				{
					echo '<link rel="stylesheet" href="'.$css[$i].'?'.$build_num.'"></link>'."\r\n\t";
				}
				echo('<link rel="stylesheet" href="/DWPE/DWPE_ProjectHome/component-testbed.css"></link>'."\r\n\t");
				
			
			}

}
		else //production
		{
			//
			// Build Number
			//
			$build ="/* ";
			$build.="DWPE 2 Build ".$build_num."";
			$build.=" */\r\n\r\n";
			//
			// Script Minification
			//
			$js_dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/js/";
			$js_file="dwpe-2-lib-".$build_num.".js";
			if(file_exists($js_dir.$js_file)==false)
			{
				$delim="";
				for($i=2;$i<$scripts_len;$i++)
				{
					$js_files .= $delim.$scripts[$i] ;//str_replace('/DWPE/components/js/','',$scripts[$i]) . ',';
					$delim=",";
				}
				$js=$build;
				$js .= file_get_contents("http://scout.us.oracle.com/DWPE/min/?f=".$js_files);
				
				file_put_contents($js_dir.$js_file,$js);
			}
			echo('<script src="'.$scripts[0].'" type="text/javascript"></script>'."\r\n\t");
			echo('<script src="'.$scripts[1].'" type="text/javascript"></script>'."\r\n\t");
			echo('<script src="/DWPE/components/js/'.$js_file.'" type="text/javascript"></script>'."\r\n\t");
			echo('<script src="/DWPE/DWPE_ProjectHome/component_inspector.js" type="text/javascript"></script>'."\r\n\t");
			//
			// Style Minification
			//
			$css_dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/css/";
			$css_file="dwpe-2-lib-".$build_num.".css";
			if(file_exists($css_dir.$css_file)==false)
			{
				$delim="";
				for($i=0;$i<$css_len;$i++)
				{
					$css_files .= $delim.$css[$i];
					$delim=",";
				}
				$styles=$build;
				
				$styles .= file_get_contents("http://scout.us.oracle.com/DWPE/min/?f=".$css_files);
				file_put_contents($css_dir.$css_file,str_replace('/DWPE/components/','../',$styles));
				
			}
			echo('<link rel="stylesheet" href="/DWPE/components/css/'.$css_file.'"></link>'."\r\n\t");
			echo ('<link rel="stylesheet" href="/DWPE/DWPE_ProjectHome/component-testbed.css"></link>'."\r\n\t");
			
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
	
	<!--Page Level Script-->
	<script type="text/javascript" src="test_script.js"></script>
	
	