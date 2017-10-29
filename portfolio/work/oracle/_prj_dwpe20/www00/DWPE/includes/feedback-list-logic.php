
<?php
	if(!isset($_SESSION)) 
	{
		session_start();
	}
	
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
    					
    					FROM `feedback`LEFT JOIN `users` 
						ON feedback.user_id=users.ID
						WHERE users.ID=users.ID ";
	
	
	
	//apply the component key
	if(isset($my_component_key) ) //delivered by the calling page
    {
    	$query.= " AND feedback.key='".$my_component_key."' ";
    }
    elseif( isset($_REQUEST["component_key"]) ) //delivered by the AJAX call to this include
    {
    	$query.= " AND feedback.key='".$_REQUEST["component_key"]."' ";
    }
    
    
    $search_mode_enabled=0;
    
    if(isset($_POST["perform_search"]))
    {	
    	
   		 $search_tags=$_POST["search_tags"];
    	 
    	 $search_mode_enabled=(strlen($search_tags)>0)?1:0;
    
    	
    	
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
    
    
    
    
    	/*
    
		//add to $query dynamically by iterating search_tags and appending OR statements
		
		//store search tags in an array
		$tag_array = explode(",", $search_tags);	   
		$array_length = count($tag_array);
		$k = 0;
	
	
	
		//for each tag
		for($i = 0; $i < $array_length; $i++)
		  {		   
			  $conn = mysql_connect($host, $user, $password) or die('Failed to connect to server: ' . mysql_error());
			  $db = mysql_select_db(myDB);
		
			  if(!$db) {
				echo("Unable to select database");
				break;
			  }	 	
			
			//remove additional whitespaces  
			$tag_array[$i] = trim($tag_array[$i]);
						  
			//get the feedback matching the tag		
			$feedback_id_query = "SELECT DISTINCT feedback_id 
										FROM feedback_tag 
										WHERE tag_id 
										IN (SELECT id	FROM tag 
														WHERE upper(tags) 
														LIKE upper('%".$tag_array[$i]."%'))";
															
			$feedback_id_result = mysql_query($feedback_id_query);	  
	
			if (!$feedback_id_result) {
				 $_SESSION['ERRMSG_ARR'] = 'Could not query:' . mysql_error();
			}
			
			//storing the id's into array   
			for($j=0; $j < mysql_num_rows($feedback_id_result); $j++) 
			{
				$row = mysql_fetch_row($feedback_id_result);
				$id[$k] = $row[0];
				$k++;		  
			} //end of for	
			 
		}//end of for	
	
		//combine the contents of array
		$id_array = implode(",",$id); 
		$query.=" and feedback.id in ($id_array)";
			
		mysql_close($conn);
		
		
		*/
    	
    }
    
   
    if(search_mode_enabled==1) //present a flat list when providing search results
		$query.=" ORDER BY  feedback.thread_id, feedback.sort_order";
	else //present a hierachical list (threaded list)

		$query.=" ORDER BY  feedback.thread_id, feedback.sort_order";
	

	

	
	
	
    //echo($query);
    
	$conn = mysql_connect($host, $user, $password) or die('Failed to connect to server: ' . mysql_error());
  
  
	$db = mysql_select_db(myDB);
	
	if(!$db) {
		echo("Unable to select database");
	 }	 
	
	
	 
	 $result = mysql_query($query);
	 
	 if($result) 
	 {
		
		$row_count=0;
		$str="";
		
		while ($row = mysql_fetch_assoc($result)) 
		{
		
			$row_count++;
			$msg=$row["msg"];
			
			$msg = str_replace("\r", "", $msg);  // Remove \r
			$msg = str_replace("\n", "<br />", $msg);  // Replace \n with <br />
			$msg = str_replace("\'", "'", $msg);  // Replace \' with ' />
			
			$tags=stripslashes($row["tags"]);
			$post_id=    $row["post_id"];
			$thread_id=  $row["thread_id"];
			$parent_id=  $row["post_id"];  //in a reply, our post_id becomes the parent_id of the reply
			$post_level= $row["post_level"];
			$sort_order= $row["sort_order"];
			
			
			
			if($search_mode_enabled) //present a flat list when providing search results
			{	
				$indent=0;
				$msg_id_notice=$sort_order;
			}
			else //present a hierachical list (threaded list)
			{
				$level="msg-level".$post_level;
				$msg_id_notice=$post_id;
			}
			
			
			if(isset($_SESSION["SESS_ID"]))
			{	$edit_tags="<a class='edittags' href='#edit-tags' msg_id='".$post_id."' tags='".$tags."'>Tags</a>:&nbsp;";
				$reply="<a href=\"javascript:void(0);replyToMessage('feedback-form',".
											"'".addslashes($tags)."',".
											$post_id.",".
											$thread_id.",".
											$parent_id.",".
											$post_level.",".
											"'".$sort_order."'".
											")\">Reply</a>&nbsp;&nbsp;&nbsp;";
			}
			else
			{	$edit_tags="Tags:&nbsp;";
				$reply="";
			}	
			
			
			
			$str.="<div class='msg-row $level'>".
					"<div class='msg-body' >".
						"<div id='msg-content-$post_id'>".
							"<strong>".$row["display_name"]."</strong>:&nbsp;".
							$msg.
						"</div>".
						"<div>".
						"<div style='font-size:11px;color:#666;float:right'>".
							$edit_tags.
							"<span id='tags-".$post_id."'>".
								$tags.
							"</span>".
						"</div>".
						"<div class='msg-timestamp' style='font-size:11px;color:#999;'>".
						$reply.
						$row["msg_timestamp"]."&nbsp;&nbsp;&nbsp;MSG:".$msg_id_notice.
						"</div>".
						"</div>".
					"</div>".
				"</div>";
		}
		
		if($search_mode_enabled==1)
			echo "<div  class='msg-row '><div class='msg-body' >Found ".$row_count." matches.</div></div>";	
		
		echo $str;
	 }
	 else
	 {
		echo "<div  class='msg-row '><div class='msg-body' >No matches found.</div></div>";	 	   
	 }
	 mysql_close($conn);
	
 ?>
 
 
 
 

<script type="text/javascript">
	
	/*Manages inline tag editing*/
	$(
		function()
		{
			/*tag link setup*/
			$("a.edittags").click
			(
				function(e)
				{
					e.preventDefault();
					
					var $myDialog=$("#edit-tags-dialog");
					
					//setup closures
					var $o=$(this);
					var msg_id=$o.attr("msg_id");
					
					var $tag_list=$("#tags-"+msg_id);
					var $tag_list_editable=$("#editable-tags");
						
					var p=$o.offset();
					var w=320;//$myDialog.width();
					var h=0;//$myDialog.height()/2;
					var pos=[	p.left-w	,	p.top-h	];
					 
					 
				
						$myDialog.dialog('destroy');
						$myDialog.dialog({
													//autoOpen:false;
													resizable: false,
													//modal: true,
													position:pos,
													
													title:"Edit Tags for Message #"+msg_id+"",
													buttons: {
														'OK': function() 
														{
															
															
															/*AJAX changes to server*/
															var dataString ="edit_tags=1";
																dataString+="&msg_id="+msg_id;
																dataString+="&tags="+$tag_list_editable.val();
															var $myDialog=$(this);
															
															$.ajax({  
																   type: "POST",  
																   url: "/DWPE/includes/edit-tags.php",  
																   data: dataString,  
																   success: function(data,status,XMLHttpRequest) 
																   {  
																   		if(data==1)//saved
																		{	
																			$tag_list.html($tag_list_editable.val());
																			$myDialog.dialog('close');
																		}
																		else//not saved
																		{
																			$myDialog.dialog('close');
																			alert('Sorry, your changes could not be saved.');
																		}
																		
																		
																		
																   },
																   error:function()
																   {
																   		$myDialog.dialog('close');
																   		alert('Sorry, your changes could not be saved.');
																   }
																 }); 
															
															
														},
														'Cancel': function() 
														{
															/*dismiss dialog*/
															$(this).dialog('close');
														} 
													},
													open:function()
													{
														$tag_list_editable.val($tag_list.html());
														$tag_list_editable.show();
													}
													
													//,show:'slide'
													
													
													
												});
				
					
					
				}
			);
			

		}
	
	);
</script> 


 
 
 
 
 
 