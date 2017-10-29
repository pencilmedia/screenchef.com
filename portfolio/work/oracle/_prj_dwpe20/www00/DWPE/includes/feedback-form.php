<div id="feedback-form-container">
<?php

	if(!isset($_SESSION)) 
	{
		session_start();
	}


	$my_component_key="test";
		
	//apply the component key
	if(isset($component_key) ) //delivered by the calling page
	{
		$my_component_key=$component_key;
	}
	elseif( isset($_REQUEST["component_key"]) ) //delivered by the AJAX call to this include or URL query_string
	{
		$my_component_key=$_REQUEST["component_key"];
	}

	if(isset($_SESSION['SESS_ID'])) 
	{
		
	
		
		
		//init connection variables 	
		$user = "root";
		$password = "DWPE";
		$host = "localhost"; 
		
		
		
	
		/*we check to see if the user has submitted feedback and submit it if necessary*/
		if(isset($_POST["submit_feedback"]))
		{	
			
		  
		  
		  //start connection
		   $conn = mysql_connect($host, $user, $password) or die('Failed to connect to server: ' . mysql_error());
		  
		   $db = mysql_select_db("myDB");
		  if(!$db) 
		  {
				$_SESSION['ERRMSG_ARR'] ="Unable to select database";
				break;
		  }	 
		  
		  
		   
		   //collect form values
		   $msg = addslashes(  $_POST['msg'] );
		   $user_id = $_SESSION['SESS_ID'];
		   $tags = addslashes( $_POST['tags'] );
		   
		   //threaded discussion variables
		   $thread_id=$_POST["thread_id"];
		   $parent_id=$_POST["parent_id"];
		   $post_level=$_POST["post_level"];
		   $sort_order=$_POST["sort_order"];


		   //build query	
		   $query = "INSERT INTO `myDB`.`feedback` (";
		   $query.= "`user_id`,";
		   $query.= "`msg`,";
		   $query.= "`key`,";
		   $query.= "`tags`,";
		   $query.= "`thread_id`,";
		   $query.= "`parent_id`,";
		   $query.= "`post_level`,";
		   $query.= "`sort_order`";
		   $query.= ") VALUES (";
		   $query.= "'$user_id',";
		   $query.= "'$msg',";
		   $query.= "'$my_component_key',";
		   $query.= "'$tags',";
		   $query.= "$thread_id,";
		   $query.= "$parent_id,";
		   $query.= "$post_level,";
		   $query.= "'$sort_order'";
		   $query.= ")";
		   
		   //perform insertion
		   $result = mysql_query($query);
		
		
		   
		//echo $query;
			 
		 if($result) 
		 {			
			$_SESSION['SESS_ACTION'] = 'Feedback Saved';
			
			//get the most recent id, our post_id
			$post_id = mysql_insert_id(); 
			
			
			//manage thread discussion values
			
			//thread_id=0, so we are a top level post
			if($thread_id=='0')
			{
				$thread_id=$post_id;
				$parent_id=$post_id;
				$post_level=0;			//top-level
				$sort_order=$post_id;
			}
			else //we are a reply to a post
			{
				$thread_id=$_POST["thread_id"];                 //thread_id remains the value we were passed
				$parent_id=$_POST["parent_id"];                 //parent_id remains the value we were passed
				$post_level=(int)$_POST["post_level"]+1;        //post_level equals the value we were passed, plus one
				$sort_order=$_POST["sort_order"].">".$post_id;  //sort_order becomes the value we were passed, concat our $post_id
			}
			
			//formulate query to update thread info
			$query="UPDATE `myDB`.`feedback`";
			$query.=" SET ";
			$query.= "`thread_id`=$thread_id,";
			$query.= "`parent_id`=$parent_id,";
			$query.= "`post_level`=$post_level,";
			$query.= "`sort_order`='$sort_order'";
			$query.= " WHERE ";
			$query.= "`post_id`=$post_id";
			
			
			
			//update thread info
			$result = mysql_query($query);
			
			
			//echo $query;
			
			
			
			//split tags and store in array
		   $tag_array = explode(",", $tags);
		   $array_length = count($tag_array);
			
			
			   
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
		
			//return the latest list of feedback	
			 include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/feedback-list-logic.php';
			 exit();
			
		 }
		 else
		 {
			$_SESSION['ERRMSG_ARR'] ='Query Failed' . mysql_error();		 	   
		 }
		 mysql_close($conn);
			  
		 
		  
		}//end if submit-feedback
	
?>


	
		<form id="feedback-form" action="" method="POST">
		
			<script type="text/javascript">
			
				function clearForm()
				{
					$("#message-label").html("Message");
					$("#replying-to-content").empty();
					
					$("#feedback-form-thread-id").val(0);
					$("#feedback-form-parent-id").val(0);
					$("#feedback-form-post-level").val(0);
					$("#feedback-form-sort-order").val('');
					
					//clear the form
					   	  $("#feedback-form-container :input").each(
					   	  	function(){
					   	  				switch(this.type) 
					   	  				{
											case 'password':
											case 'select-multiple':
											case 'select-one':
											case 'text':
											case 'textarea':
												$(this).val('');
												break;
											case 'checkbox':
											case 'radio':
												this.checked = false;
        								}
									}
					   	  );
					   	  
					//force text to be measured   	  
					$("#feedback-form-msg").trigger('keyup');	   	  
				}
				
				
				function disableForm()
				{
				
					$("#feedback-form :input").each(
	
						function(i)
						{
							$(this).attr("disabled","disabled");
						}
					);
				
				}
				
				function enableForm()
				{
					$("#feedback-form :input").each(
	
					function(i)
					{
						$(this).removeAttr("disabled");
					}
					);
				}
				
				
				function submitFeedback()
				 {
					
					var errors=false;
					var $msg=$("#feedback-form-msg");
					var $tags=$("#feedback-form-tags");
					var $key=$("#component_key");
					
					
					var $thread_id=$("#feedback-form-thread-id");
					var $parent_id=$("#feedback-form-parent-id");
					var $post_level=$("#feedback-form-post-level");
					var $sort_order=$("#feedback-form-sort-order");
					
					
					if($msg.val().length==0)
						{	errors=true;
							$msg.addClass("fld-error");
						}
						
					if($tags.val().length==0)
						{	errors=true;
							$tags.addClass("fld-error");
						}
						
					if(errors) return;	
					
					//disable form
					disableForm();
					
					var dataString ="submit_feedback=1";
						dataString+="&msg="+escape($msg.val());
						dataString+="&tags="+escape($tags.val());
						dataString+="&component_key="+escape($key.val());
						
						dataString+="&thread_id="+$thread_id.val();
						dataString+="&parent_id="+$parent_id.val();
						dataString+="&post_level="+$post_level.val();
						dataString+="&sort_order="+escape($sort_order.val());
						
						
					
					$.ajax({  
					   type: "POST",  
					   url: "/DWPE/includes/feedback-form.php",  
					   data: dataString,  
					   success: function(data,status,XMLHttpRequest) 
					   {  
					   	 clearForm();
					   	 enableForm();
					   
						 //use jQuery to post reply inside of feedback-list-container
						 $("#feedback-list-container").html(data);
					   },
					   error:function()
					   {
					   	   enableForm();
					   
					   }
					   
					 }); 
				}
				
				
				$(function()
					{
						
						$("#feedback-form-tags").focus(
							
							function()
							{
								var $fld=$(this);
								$fld.removeClass("fld-error");
							}
						)
						
						$("#feedback-form-msg").keyup(
							
							function()
							{
								//measure text
								
								var $ta=$(this);
								$ta.removeClass("fld-error");
								
								var len=$ta.val().length;
								var max=$ta.attr("maxlength");
								var $cc=$("#char-count");
								if(len>475)
								{
									$cc.addClass("warn");
								}
								else
								{	
									
									$cc.removeClass("warn");	
								}
								
								$cc.text(len+" : "+max)
							
							}
							
						).focus(
						
							function()
							{
								
								
								var $ta=$(this);
								$ta.removeClass("fld-error");
							}
							
						)
					}
				);
				
			</script>
			
			
			<table class='properties-table' >
				
				<tr>
					<td class='label'></td>
					<td colspan='2' id='replying-to-content'></td>
				</tr>	
				
				
				<tr>
					<td class='label' id='message-label'>
						Message
					</td>
					<td colspan="2">
						<div style="position:relative">
						<textarea id="feedback-form-msg" name="msg" style="width:100%" cols="50" rows="5" maxlength="500" class="word_count"></textarea><br>
						<div id="char-count" class="char-count"></div>
						</div>
					</td>
				</tr>
				
				<tr>	
				
					<td style="width:1"  class='label'>Tags</td>
					<td style="width:150px">
					
					<?php 
							$common_tags_chooser_id="feedback-form-tags-chooser";
							$common_tags_chooser_target="feedback-form-tags";
							include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/common-tags-chooser.php';
					?>
					
					
					</td>
					<td><input class="tag-chooser-target" type="text" name="tags" id="feedback-form-tags" style="width:100%"/></td>
					
				</tr>
				
				<tr>
					<td></td>
					<td colspan="2">
						<input type="hidden" id="component_key" name="component_key" value="<?php echo($my_component_key)?>"/>
						<!--begin: threaded discusion fields-->
						<input type="hidden" id="feedback-form-thread-id"   name="thread_id"   value="0"/>
						<input type="hidden" id="feedback-form-parent-id"   name="parent_id"   value="0"/>
						<input type="hidden" id="feedback-form-post-level"  name="post_level"  value="0"/>
						<input type="hidden" id="feedback-form-sort-order"  name="sort_order"  value="0"/>
						<!--end:threaded discussion fields-->
						
						
						
						<input class="ui-state-default ui-corner-all" type="button" name="submit_feedback" value="Submit" onclick="submitFeedback()"/> 
						&nbsp;&nbsp;
						<input class="ui-state-default ui-corner-all" type="button" name="submit_feedback" value="Clear" onclick="clearForm()"/> &nbsp;
						
						<!--input type="button" value="Logout" name="Logout" onclick="window.location='http://scout.us.oracle.com/DWPE/medha/logout.php'" /-->
					</td>
				</tr>
			</table>
			
		</form>

<!--end feedback form container-->

<!--begin edit tags form-->
 <div id="edit-tags-dialog" style='display:none'>
 	<div style="padding-bottom:10px">
 	<?php 
		$common_tags_chooser_id="editable-tags-chooser";
		$common_tags_chooser_target="editable-tags";
		include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/common-tags-chooser.php';
	?>
	</div>					
 	<textarea class="tag-chooser-target" id="editable-tags" style="width:100%;height:50px"></textarea>
</div>
<!--end edit tags form-->
 
 
 
 <script type="text/javascript">
		
		$(
			function()
			{
				
				//each common tags chooser (form, popup) gets a function to handle selection
				$("SELECT.common-tags-chooser").change(
				
					function(e)
					{

						//console.log(1);
						$chooser=$(this);
						
						//console.log($chooser,$chooser.attr("related_field"));
						$target=$("#"+$chooser.attr("related_field"));
						
						//prepare all tags string for tag concatentation
						var allTags=$target.val();
						var len = allTags.length;											
						if(len>0 && allTags.charAt(len-1) != ",")
							allTags +=",";
						var tag=$chooser.val();
						
						//if this is a new tag, add the tag
						if(tag.length>1 && allTags.indexOf(tag)==-1)
						{
							$target.val(allTags+tag);
						}
						
						//clear the chooser
						$chooser.val("*");
							
					}
				
				
				)
			
			
			}
		
		
		);
		
	</script>


<?php 	}//end login check?>
</div>