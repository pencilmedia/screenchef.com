<?php
	if(!isset($_SESSION)) 
	{
		session_start();
	}
	
	
	if(!isset($_REQUEST["perform_search"])) exit();
	
	$user = "root";
    $password = "DWPE";
    $host = "localhost";
    
    
    $search_tags="";     //comma delimited string of tags
	
	$query = "SELECT  	feedback.post_id AS post_id,
						feedback.thread_id AS thread_id,
						feedback.parent_id AS parent_id,
						feedback.post_level AS post_level,
						feedback.sort_order AS sort_order,
						
						feedback.msg AS msg,
						feedback.tags AS tags,
						feedback.user_id AS user_id,
						feedback.key AS msg_key,
						feedback.submitted_on AS msg_timestamp,
						
						users.name AS display_name
						
						FROM `feedback` LEFT JOIN `users` 
						ON feedback.user_id=users.ID
						WHERE users.ID=users.ID ";
	
	
	
	//apply the component key
	if(isset($my_component_key) && $my_component_key!="*") //delivered by the calling page
	{
		$query.= " AND feedback.key='".$my_component_key."' ";

	}
	elseif( isset($_REQUEST["component_key"])  && $_REQUEST["component_key"]!="*") //delivered by the AJAX call to this include
	{
		$query.= " AND feedback.key='".$_REQUEST["component_key"]."' ";

	}
	
   //echo($query);
				
    if(isset($_POST["perform_search"]) && $_POST["search_tags"] && strlen($_POST["search_tags"])>0)
    {	
    	$search_tags=$_POST["search_tags"];
    	
   
    	
		//add to $query dynamically by iterating search_tags and appending OR statements
		
		//store search tags in an array
		$tag_array = explode(",", $search_tags);	   
		$array_length = count($tag_array);
		$k = 0;
	
		 $search_tags=$_POST["search_tags"];
    	 
    	 
		      	
    	
		//add to $query dynamically by iterating search_tags and appending OR statements
		
		//store search tags in an array
		$tag_array = explode(",", $search_tags);	   
		$array_length = count($tag_array);
		$k = 0;
		
		
   		
		if($array_length>0)
		{
			
			
			//for each tag
			$unhandled_tags=array();
			for($i = 0; $i < $array_length; $i++)
			{	
				$tag = trim($tag_array[$i]);
				$handled=false;
				
				//replace me, with a where clause for your user ID3_BEST
				if($tag=="me" && isset($_SESSION["SESS_ID"]) )
				{
					$query.=" AND feedback.user_id=".$_SESSION["SESS_ID"]." ";
					$handled=true;
					
				}
				elseif($tag=="<14")
				{
					$seven_days_ago=time() - (14 * 24 * 60 * 60);
					$query.=" AND UNIX_TIMESTAMP(feedback.submitted_on)>=".$seven_days_ago;
					$handled=true;
				
				}
				elseif($tag=="<7")
				{
					$seven_days_ago=time() - (7 * 24 * 60 * 60);
					$query.=" AND UNIX_TIMESTAMP(feedback.submitted_on)>=".$seven_days_ago;
					$handled=true;
				
				}
				elseif($tag=="<1")
				{
					$one_day_ago=time() - (1 * 24 * 60 * 60);
					$query.=" AND UNIX_TIMESTAMP(feedback.submitted_on)>=".$one_day_ago;
					$handled=true;
				
				}
				
				
				
				//for those tags we don't handle, pass them on
				if($handled==false)
				{
					array_push($unhandled_tags,$tag);
				}
				
				
				
				
			}//end of for
			
			
			//if we don't have anymore tags, dont go further
			if(count($unhandled_tags)>0)
			{
				$query.=" AND (";
				$delim="";
				//for each tag
				for($i = 0; $i < count($unhandled_tags); $i++)
				{	
					$tag = trim($unhandled_tags[$i]);
					
					if($tag==-1) continue; //ignore null tags
					
					$query .= $delim." feedback.tags LIKE '%".$tag."%'";
					$delim=" OR ";
							
							
							
					
				}//end of for
				
				$query.=") ";
				}
			
		}
		
		
	
		
    }
    
    $limit_rows=500;
    $query.=" ORDER BY  feedback.key,feedback.sort_order,feedback.submitted_on ASC";
    $query.=" LIMIT 0,$limit_rows ";
				
    //echo($query);
    
	$conn = mysql_connect($host, $user, $password) or die('Failed to connect to server: ' . mysql_error());
  
  
	$db = mysql_select_db(myDB);
	
	if(!$db) {
		echo("Unable to select database");
	 }	 
	
	
	 
	 $result = mysql_query($query);
	 
	 if($result) 
	 {
		$current_group_name="";
		$str="";
		$row_count=0;
		while ($row = mysql_fetch_assoc($result)) 
		{
		
			$group_name=$row["msg_key"];
			
			if($group_name!=$current_group_name)
			{
				$current_group_name=$group_name;
				$str.= "<div class='group-header'>".$group_name."</div>";
			}
			
			
			$str.= "<div class='msg-row'><div class='msg-body'>".
					"<strong>".$row["display_name"]."</strong>&nbsp;".
					stripslashes($row["msg"])."".
					"<div>".
					"<div style='font-size:11px;color:#999;float:right'>Tags:&nbsp;".stripslashes($row["tags"])."</div>".
					"<div class='msg-timestamp' style='font-size:11px;color:#999;'>".
					//"<a href=\"javascript:void(0);replyToMessage('feedback-form','".$row["display_name"]."',".$row["msg_id"].",'".$row["tags"]."')\">Reply</a>&nbsp;&nbsp;&nbsp;".
					$row["msg_timestamp"]."&nbsp;&nbsp;&nbsp;MSG:".$row["sort_order"].
					"</div>".
					"</div>".
				"</div></div>";
			$row_count++;
		}
		
		echo "<div  class='msg-row '><div class='msg-body' >Found ".$row_count." matches.</div></div>";	
		echo $str;
		
		if($row_count>=$limit_rows)
			echo "<div class='group-header'>Results have been limited to the first 250 matches.</div>";
			
		
	 }
	 else
	 {
		Echo('No feedback found');		 	   
	 }
	 mysql_close($conn);
	
 ?>