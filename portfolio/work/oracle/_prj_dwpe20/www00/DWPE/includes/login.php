<?php

	if(!isset($_SESSION)) 
	{
		session_start();
	}

		
	//init connection variables 	
	$user = "root";
	$password = "DWPE";
	$host = "localhost"; 
	
	
	$my_component_key="test";
	//apply the component key
	if(isset($component_key) ) //delivered by the calling page
    {
    	$my_component_key=$component_key;
    }
    elseif( isset($_REQUEST["component_key"]) ) //delivered by the AJAX call to this include
    {
    	$my_component_key=$_REQUEST["component_key"];
    }


	/*we check to see if the user has pressed the login button and
	process this request when we find it in $_POST*/
	
	$_SESSION['SESS_LOGOUT_MSG'] = '';
	
	if(isset($_POST["perform_login"]))
	{

		$name=$_POST['name'];
		$pwd= $_POST['pwd']; 
		
		
		
		//Array to store validation errors
		$errmsg_arr = array();
		
		//Input Validations
		if($name == '') {
			$_SESSION['ERRMSG_ARR'] = 'Login name missing';
			
		}
			
		if($pwd == '') {
			$_SESSION['ERRMSG_ARR'] = 'Password missing';
			
		}
		
		//connect to mysql database
		$conn = mysql_connect($host, $user, $password) or die('Failed to connect to server: ' . mysql_error());
		
		
		$db = mysql_select_db("myDB");
		if(!$db) 
		{
			$_SESSION['ERRMSG_ARR'] = "Unable to select database";
		}
		
		
		//execute statement
		$query = "SELECT id, name,type 
					FROM users 
					WHERE name='$name' AND password ='".md5($_POST['pwd'])."'";
		
		$result = mysql_query($query);
		
		if($result) 
		{
			if(mysql_num_rows($result) == 1) 
			{
				//Login Successful
				session_regenerate_id();
				$member = mysql_fetch_assoc($result);
				$_SESSION['SESS_ID'] = $member['id'];
				$_SESSION['SESS_USER_NAME'] = $member['name'];
				$_SESSION['SESS_ACTION'] = '';
				$_SESSION['SESS_USERTYPE'] = $member['type'];;
							
				$page = $_SERVER['PHP_SELF']; 
				header("Refresh: 0; url=$page");			
							
			}
			else 
			{
				//Login failed
				$_SESSION['SESS_MESSAGE'] = 'Invalid user name or password. Please try again';
				$_SESSION['ERRMSG_ARR'] = '';
						
			}		
			
		}
		else 
		{
			$_SESSION['ERRMSG_ARR']="User login failed.";
		}	
		mysql_close($conn);   
		
		
	}	
	
	
?>

<?php  
		/*if the user hasn't successfully logged in above, 
		  or if they have never tried during this session, present the login form*/
		
		if(!isset($_SESSION['SESS_ID']) || (isset($_SESSION['SESS_ID']) && trim($_SESSION['SESS_ID']) == '')) 
		{
			?>
	
		
			
			<form id="site-login" action="" method="post" style="font-size:11px;line-height:0px;"> 
					Name: 	<input type="text" name="name" id="name" style="width:50px;font-size:11px;"/>&nbsp;
				Password: 	<input type="password" name="pwd" id="pwd"  style="width:50px;font-size:11px;"/>&nbsp;
							<input 	class="ui-state-default ui-corner-all" 
									type="button" value="Login" name="perform_login"
									id="login-btn"
									/>
							<input type="hidden" id="component_key" name="component_key" value="<?php echo($my_component_key)?>">		
			</form>
			<script type="text/javascript">
			
				$("#login-btn").click(function(){attemptLogin();});
				
				 function attemptLogin()
				 {
					
					var dataString ="perform_login=1";
						dataString+="&name="+$("#name").val();
						dataString+="&pwd="+$("#pwd").val();
						dataString+="&component_key="+$("#component_key").val();
						
					
					$.ajax({  
					   type: "POST",  
					   url: "/DWPE/includes/login.php",  
					   data: dataString,  
					   success: function(data,status,XMLHttpRequest) 
					   {  
						 window.location.href="<?php echo $_SERVER['PHP_SELF'].'?login'?>";
					   }  
					 }); 
				}
			</script>
			
			
		
	 
	
	<?php }
	
		else
		/*present welcome message*/
		{
	
			echo "Welcome&nbsp;".$_SESSION["SESS_USER_NAME"]."&nbsp;&nbsp;|&nbsp;&nbsp;<a href='#' id='logout-btn'>Log Out</a>";
		
		}
		?>
		
		<script type="text/javascript">
			
			
				$("#logout-btn").click(function(){attemptLogout();});
				
				 function attemptLogout()
				 {
					
					var dataString ="perform_logout=1";
						
					
					$.ajax({  
					   type: "POST",  
					   url: "/DWPE/includes/logout.php",  
					   data: dataString,  
					   success: function(data,status,XMLHttpRequest) 
					   {  
						 	window.location.href="<?php echo $_SERVER['PHP_SELF'].'?logout'?>";
					   }  
					 }); 
				}
			</script>
		
		
		
	
