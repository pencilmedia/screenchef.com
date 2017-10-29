<?php

/*
 * Build the DWPE make file for images
 *
 */
function process_image_directory($directory)
{
    try
    {
        /*** loop through the files in directory ***/
        foreach(new recursiveIteratorIterator( new recursiveDirectoryIterator($directory)) as $file)
        {
          
          if(	   strpos($file,'.png')!=strlen($file)-4  
          		&& strpos($file,'.gif')!=strlen($file)-4   
          		&& strpos($file,'.jpg')!=strlen($file)-4  
          		
          		)
          	continue;
          
          	$src=str_replace("/DWPE2-WebSite (Local)/DWPE/components/images/","",$file);
            
            echo "<file source='configuration/shared/dwpe2_run_time/core/images/".$src."' destination='$"."dreamweaver/configuration/shared/dwpe2_run_time/core/images/".$src."'></file>\r\n";
		
            
        }
       
    }
    catch(Exception $e)
    {
        return false;
    }
}


function process_js_directory($directory)
{
    try
    {
        /*** loop through the files in directory ***/
        foreach(new recursiveIteratorIterator( new recursiveDirectoryIterator($directory)) as $file)
        {
          
          if(	   strpos($file,'.js')!=strlen($file)-3  )
          	continue;
          
          	$src=str_replace("/DWPE2-WebSite (Local)/DWPE/components/js/","",$file);
            
            echo "<file source='configuration/shared/dwpe2_design_time/js/".$src."' destination='$"."dreamweaver/configuration/shared/dwpe2_design_time/js/".$src."'></file>\r\n";
		
            
        }
       
    }
    catch(Exception $e)
    {
        return false;
    }
}


$dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/images/";
process_image_directory($dir);
//$dir=$_SERVER['DOCUMENT_ROOT']."/DWPE/components/js/";
//process_js_directory($dir);


?>