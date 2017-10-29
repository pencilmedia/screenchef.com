<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 **/
 
return array(
	'DWPE_JS' => array(	'//DWPE/components/js/DWPE_Base_Class.js',
					'//DWPE/components/js/DWPE_BaseFactory_Class.js',
					'//DWPE/components/js/DWPE_Utilities.js',
					'//DWPE/components/js/DWPE_ObjectFactory_Class.js',
					'//DWPE/components/js/DWPE_Window_Class.js',
					'//DWPE/components/js/DWPE_ButtonFactory_Class.js',
					'//DWPE/components/js/DWPE_Toolbar_Class.js',
					'//DWPE/components/js/DWPE_PanelFactory_Class.js',
					'//DWPE/components/js/DWPE_Accordion.js',
					'//DWPE/components/js/DWPE_Splitter.js',
					'//DWPE/components/js/DWPE_Tabset.js',
					'//DWPE/components/js/DWPE_SampleData.js',
					'//DWPE/components/js/DWPE_PageHeader.js',
					'//DWPE/components/js/DWPE_SubHeader.js',
					'//DWPE/components/js/DWPE_SubSubHeader.js',
					'//DWPE/components/js/DWPE_FormFactory_Class.js',
					'//DWPE/components/js/DWPE_WindowFactory_Class.js',
					'//DWPE/components/js/DWPE_TreeFactory_Class.js',
					'//DWPE/components/js/DWPE_TableFactory_Class.js',
					'//DWPE/components/js/DWPE_Carousel_Class.js',
					'//DWPE/components/js/DWPE_Train.js',
					'//DWPE/components/js/DWPE_Initialize.js'),


	'DWPE_CSS' => array('//DWPE/components/css/DWPE_Base.css',
					'//DWPE/components/css/DWPE_UIShell.css',
					'//DWPE/components/css/DWPE_Window.css',
					'//DWPE/components/css/DWPE_ButtonFactory.css',
					'//DWPE/components/css/DWPE_Toolbar.css',
					'//DWPE/components/css/DWPE_Tabs.css',
					'//DWPE/components/css/DWPE_PanelFactory.css',
					'//DWPE/components/css/DWPE_FormFactory.css',
					'//DWPE/components/css/DWPE_Tree.css',
					'//DWPE/components/css/DWPE_Table.css',
					'//DWPE/components/css/DWPE_Carousel.css',
					'//DWPE/components/css/DWPE_Train.css')



    // custom source example
    /*'js2' => array(
        dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
        // do NOT process this file
        new Minify_Source(array(
            'filepath' => dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
            'minifier' => create_function('$a', 'return $a;')
        ))
    ),//*/

    /*'js3' => array(
        dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
        // do NOT process this file
        new Minify_Source(array(
            'filepath' => dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
            'minifier' => array('Minify_Packer', 'minify')
        ))
    ),//*/
);