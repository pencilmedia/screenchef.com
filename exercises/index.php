<?php 
    include("../global/config.inc");
    $ROOT = '../'; // Set root for relative paths
    $thisPage="exercises"; 
    ?>
<!--[if lt IE 7 ]><html lang="en" class="no-js ie6"><![endif]-->
<!--[if IE 7 ]><html lang="en" class="no-js ie7"><![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><!DOCTYPE html class="no-js"><!--<![endif]-->

<head>
<title><?php echo exercisesTitle ?></title>
<?php include("../global/inc/head.inc.php"); ?>
</head>
<body id="exercises">
    <div id="wrapper">
    <?php include("../global/inc/nav.inc.php"); ?>
        
        <section>
            <h1>Exercises for my reference</h1>
            <h2>Because I don't want to forget.</h2>
            <style>
            </style>
            <nav>
            	<ul>
                	<li><a href="#ex_html5">HTML5 Examples</a></li>
                	<li><a href="#ex_css3">CSS3 Examples</a></li>
                	<li><a href="#ex_js">JavaScript Examples</a></li>
                </ul>
            </nav>
            
            <!--[if IE 9 ]>
            <p>For my eyes only please: <a href="ie.php">Let's get let down by Internet Explorer.</a></p>
            <!--<![endif]-->
			<?php // INCLUDE EACH file in the pgs directory
                // open this directory 
                $myDirectory = opendir("./pgs/");
                
                // get each entry
                while($entryName = readdir($myDirectory)) {
                    $dirArray[] = $entryName;
                }
                
                // close directory
                closedir($myDirectory);
                
                //	count elements in array
                $indexCount	= count($dirArray);
                //Print ("$indexCount files<br>\n");
                
                // sort 'em
                sort($dirArray);
                
                // print 'em : RECREATING THIS LINE ::::: include("pgs/page1.inc.php");
                
                // loop through the array of files and print them all
                for($index=0; $index < $indexCount; $index++) {
                    if (substr("$dirArray[$index]", 0, 1) != "."){ // don't list hidden files
                        include("pgs/$dirArray[$index]"); //print each include path
                    }
                }
            ?>
        </section>
    
    
             
    </div>
	<?php include("../global/inc/foot.inc.php"); ?>   
</body>
</html>
