<?php
define("hmpgTitle", "screenchef : Portfolio of Ralph A. Garcia");
define("portfolioTitle", "screenchef : portfolio");
define("aboutTitle", "screenchef : about");

// Set the path that will be used in include files
define("path", "http://www.screenchef.com");
define("mainphone", "408.398.1976");

// Years Experience
$date_1 = new DateTime( '2000-01-01' );
$date_2 = new DateTime( date( 'Y-m-d' ) );

$yearsExperience = $date_2->diff( $date_1 );

?>
