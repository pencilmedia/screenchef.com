<?php	
		
		
		$msg_failure=0;
		$msg_success=1;
		
		
		session_start();
		
		
		
		if(!isset($_SESSION["SESS_ID"])) 
		{
			echo 2;
			exit();
		}
		
		
		//init connection variables 	
		$user = "root";
		$password = "DWPE";
		$host = "localhost"; 
		
		
		
		//collect form values
	   $post_id  = $_REQUEST['msg_id'];
	   $user_id = $_SESSION['SESS_ID'];
	   $tags =  $_REQUEST['tags'];
	   
	   //split tags and store in array
	   $tag_array = explode(",", $tags);
	   $array_length = count($tag_array);

	   //start connection
	   $conn = mysql_connect($host, $user, $password) or die('Failed to connect to server: ' . mysql_error());
	  
	   $db = mysql_select_db("myDB");
	  if(!$db) 
	  {
			echo 3;
		
			exit();
	  }	 
	  
	  $tags=addslashes($tags);
	  $query = "UPDATE `myDB`.`feedback` 
	  				SET `tags`='$tags'
	  				WHERE `feedback`.`post_id`=$post_id";
	
	
	  $result = mysql_query($query);
		 
	 
	 if($result) 
	 {			
		  
		   
		//for all tags entered
		for($i = 0; $i < $array_length; $i++)
		{	
		
			//check if tag exsists in table	 	
			$query_compare = "select id from tag where tags = '".$tag_array[$i]."'";	
			$query_compare_result = mysql_query($query_compare);	

			if($query_compare_result)
			{
				$tag_id = mysql_result($query_compare_result,0);

				//found tag in the table
				if($tag_id){			
					$query_feedback_tag = "insert into feedback_tag(feedback_id, tag_id) values ('$post_id','$tag_id')";
					$insert_feedback_tag = mysql_query($query_feedback_tag);
					if(!$insert_feedback_tag)
						$_SESSION['ERRMSG_ARR'] ='Insert into feedback_tag failed' . mysql_error();
				
				}//end of if

				//didnt find the tag
				else
				{
					if($tag_array[$i]!=''){			
						$query_tag = "insert into tag (tags) values ('$tag_array[$i]')";
						$insert_tag = mysql_query($query_tag);
						if(!$insert_tag)
							$_SESSION['ERRMSG_ARR'] ='Insert into tag failed' . mysql_error();
				
						$insert_tag_id = mysql_insert_id();
						$query_feedback_tag = "insert into feedback_tag(feedback_id, tag_id) values ('$post_id','$insert_tag_id')";
						$insert_feedback_tag = mysql_query($query_feedback_tag);
						if(!$insert_feedback_tag)
							$_SESSION['ERRMSG_ARR'] ='Insert into feedback_tag failed' . mysql_error();			
					}//end of if						
				}//end of else 
			}//end of if
			
			else
			{	
				$_SESSION['ERRMSG_ARR'] ='Select tag_if failed' . mysql_error();
			}
			
		
		 }//end of for loop			

		//return 
		echo $msg_success;
		
	 }
	 else
	 {
		echo 4;
	 }
	 
	 mysql_close($conn);
	 
  
  
?>
  