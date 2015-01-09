<!DOCTYPE html>
<?php include("global/config.inc"); ?>
<!DOCTYPE html>
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("global/inc/head.inc.php"); ?>
</head>
<body>
    <div id="wrapper">
    <?php include("global/inc/nav.inc.php"); ?>
        
        <section>
        	<h1>Sample MySQL Database</h1>
        </section>
    
        <div id="db">
        <?php
        //Connect To Database
        $hostname='p50mysql43.secureserver.net';
        $username='screenchef';
        $password='Summer30';
        $dbname='screenchef';
        $usertable='testTable';
        $yourfield = 'FirstName';
        
        mysql_connect($hostname,$username, $password) OR DIE ('Unable to connect to database! Please try again later.');
        mysql_select_db($dbname);
        
        $query = 'SELECT * FROM $usertable';
        $result = mysql_query($query);
        if($result) {
            while($row = mysql_fetch_array($result)){
                $name = $row['$yourfield'];
                echo 'Name: '.$name;
            }
        }
        ?>
        <?php
            // Request the FirstNames
            $firstName = @mysql_query('SELECT FirstName FROM testTable');
            if (!$firstName) {
             exit('<p>Error performing query: ' . mysql_error() . '</p>');
            }
            
            // Request the LastNames
            $lastName = @mysql_query('SELECT LastName FROM testTable');
            if (!$lastName) {
             exit('<p>Error performing query: ' . mysql_error() . '</p>');
            }
            
            // Request the Ages
            $howOld = @mysql_query('SELECT Age FROM testTable');
            if (!$howOld) {
             exit('<p>Error performing query: ' . mysql_error() . '</p>');
            }
        
            // Display the text of each FirstName in a paragraph
            while ($row = mysql_fetch_array($firstName)) {
             echo '<p>First Name:' . $row['FirstName'] . '</p>';
            }
        
            // Display the text of each LastName in a paragraph
            while ($row2 = mysql_fetch_array($lastName)) {
             echo '<p>Last Name:' . $row2['LastName'] . '</p>';
            }
            
            // Display the interger of each Age in a paragraph
            while ($row3 = mysql_fetch_array($howOld)) {
             echo '<p>Age:' . $row3['Age'] . '</p>';
            }		
        ?>
        </div>
        
	<?php include("global/inc/foot.inc.php"); ?>        
    </div>
</body>
</html>
