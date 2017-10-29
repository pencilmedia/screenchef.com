<html xmlns:ux="*">
<head>
	<title>Editable Tree Pattern</title>
	<meta name="generator" content="BBEdit 9.3" />
	

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	

	<style>
	
		DIV.editable-tree-container
		{
			overflow:hidden;
		
		}
		
		DIV.editable-tree-panel
		{
			overflow:auto;
			border:1px solid #000;
			background:#fff;
			padding:5px 0px;
			display:block;
			height:150px
		}
		
		UL.editable-tree,
		UL.editable-tree UL
		
		{
			
			position:relative;
			margin:0px;
			padding:0px;
			z-index:0;
			white-space:nowrap;
			display:inline-block;
			border:none;
			display:block;
			
		}
		
		
		
		UL.editable-tree LI
		{
			list-style-image:none;
			list-style-position:outside;
			list-style-type:none;
			margin:0px; 
			padding:0px;
			_border:1px solid transparent;
			border-width:1px 0px;
			display:block;
			background:#fff;
		}
		
	
		UL.editable-tree LI>A
		{
			display:inline-block;
			min-width:50px;
			cursor:pointer;
			color:#000;
		}
		
		UL.editable-tree LI.hover>A
		{
			background:#c1e4e6;
			
		}
		
		
		UL.editable-tree LI.selected>A
		{
			background:#7dc8cb;
		}
		
		
		
		/*Nested LIs*/
		UL.editable-tree LI LI
		{
			padding-left:10px;
		}
		
		TABLE.editable-tree-prop-sheet
		{
			display:block;
			padding:10px;
			border:1px solid #666666;
			border-width:0px 1px 1px 1px;
		}
		
		
		
	
	</style>
	
	
</head>
<body style="padding:15px">

<h2>Development Pattern: Editable Tree</h2>
<p>Roy Selig (3-18-2010) </p>
<p>
This tree is for use on component test pages where editable lists (flat or hierarchical) are needed.  
In the case of flat list management, we can hide the indent and outdent controls by not passing 'hierarchical'
on the edtiable-tree-panel class attribute.
</p>

<p>
	This control is in testing. It will ultimately become the replacement for the simple list manager we now have on
	test pages.  For now, please don't use this on your component pages.
</p>

<div class="editable-tree-container" style="width:250px;">
	<div id="test-tree" class='editable-tree-panel hierarchical' title="Tabs" fld="items"></div>
</div>

<input id="serialize-btn" type="button" value="Get Serialized Tree">

<script type="text/javascript">


	$(
	
	function()
	{


		
		
		
		
		
		
		
		function makeEditableTree($tree)
			{
				//tree functions
				
				//var $tree=$(this);
				
				//var $tree=$("<div class='editable-tree-panel'></div>");
				//	$tree.data('tree-data',$tree_container.data('tree-data'));
				//	$tree.data('properties-sheet-template',$tree_container.data('properties-sheet-template'));
				//	$tree.data('default-object',$tree_container.data('default-object'));
						
				
				//$tree_container.append($tree);
				
				var $prop_sheet=$("<form></form>");
					$tree.after($prop_sheet);
					$tree.data("prop-sheet",$prop_sheet);
					
				
				$tree.html(generateTree($tree));
				
				
				
				
				var selectionDown=function()
							{
							
								var $old_item=$tree.data('selected');
								
								//save form values from the old selected item
								$tree.trigger('update-selected-item');
								
								//change old item state to not selected
								$old_item.removeClass('selected');
								
								$tree.data('selected',$());
								
								
								
								//$tree.data('prop-sheet').find(":input").fadeOut(50);
								
							
							
							};
				var selectionUp=function()
							{
								//set the new item as the selected item
								var $new_item=$(this);					
									$tree.data('selected',$new_item);
									
								//change new item state to selected
								$new_item.addClass('selected');
								
								//present the new form
								displaySelectedItemPropertySheet($tree);
								
								
								//$tree.data('prop-sheet').find(":input").fadeIn(500);
								
								//place focus on the selected item
								$new_item.find(">A").focus();
								
							
							};
				
				
				$tree.find('UL.editable-tree LI')
					 .live( "mouseenter",
					 		function()
					 		{	
					 			$(this).addClass('hover');
					 		})
					 .live( "mouseleave",
					 		function()
					 		{	
					 			$(this).removeClass('hover');
					 		})		
					 .live(	"mousedown",selectionDown)
					 .live( "mouseup",selectionUp)
					 .live(	"keydown",selectionDown)
					 .live( "keyup",selectionUp)
					 .addClass('node');	
					 
				$tree.find('.editable-tree-controls')
					 .live('click',
					 	
					 	function()
					 	{
					 		var $control=$(this);
					 		if($control.hasClass('expand-node'))
					 		{
					 			$control.next().next().slideDown(500);
					 			$control.removeClass('expand-node');
					 			$control.addClass('collapse-node');
					 		} 
					 		else if($control.hasClass('collapse-node'))
					 		{
					 			$control.next().next().slideUp(500);
					 			$control.removeClass('collapse-node');
					 			$control.addClass('expand-node');
					 		}
					 		
					 	}
					 	
					 )
				
				
				//move up
				var $btn_up=$('<span class="editable-tree-controls up-node" type="image" title="up"/>')
						
					$btn_up.bind(	'click',
									function()
									{
										var $selected=$tree.data('selected');
										
										//do we have a previous sibling
										var $sibling=$selected.prev();
										
										//we are first, we don't have a previous sibling
										if(!$sibling || $sibling.length==0)
										{
											//does our parent LI have a previous sibling?
											$sibling = $selected.parent().closest("LI");
											
										} 
										
										if($sibling && $sibling.length>0)
										{
											$sibling.before($selected);
										} 
										
										
									}
								);//end bind click	
				
				//move down
				var $btn_down=$('<span class="editable-tree-controls down-node" type="image" title="down"/>')
						
					$btn_down.bind(	'click',
									function()
									{
										var $selected=$tree.data('selected');
										
										//do we have a next sibling
										var $sibling=$selected.next();
										
										//we are last, we don't have a next sibling
										if(!$sibling || $sibling.length==0)
										{
											//does our parent LI have a next sibling?
											$sibling = $selected.parent().closest("LI");
											
										} 
										
										if($sibling && $sibling.length>0)
										{
											$sibling.after($selected);
										} 
										
										
										
									}
								);//end bind click	
				
				//move top
				
				
				
				//move bottom
				
				//add
				var $btn_add=$('<span class="editable-tree-controls add-node" type="image" title="add"/>')
						
					$btn_add.bind(	'click',
									function()
									{
										/*we presume that a default object
											has been previously placed on $tree and includes a label
											which we can use for the display text*/
										
										var obj=$tree.data('default-object');
										
										//create node
										var $node=$("<li><SPAN class='editable-tree-controls blank-node'/><A HREF='javascript:void(0)'>"+obj.label+"</A><ul></ul></li>");
											$node.data('obj',obj);
										
										//get selected
										var $selected=$tree.data('selected');
										
										
										//do we have a prev sibling to fall under
										var $prv=$selected.prev();
										
										if($selected && $selected.length>0) //add it after the selected node
										{
											
											$selected.after($node);
											$selected.trigger('mousedown');
											
											
										
										}
										
										else //add it at first position 
										{
											
											$tree.find(">UL").append($node);
										}
										
										
										
										//make it the selected node
										$node.trigger('mouseup');
										
										
												  
											
										
									}
								);//end bind click	
				
				
				//delete
				var $btn_delete=$('<span class="editable-tree-controls delete-node" type="image" title="delete"/>')
						
					$btn_delete.bind(	'click',
										function()
										{
											var $selected=$tree.data('selected');
											
											
											
											
											var $UL=$selected.parent();
											
											//do we have a prv/nxt sibling to select after deletion?
											var $new_selection=$selected.prev("LI");
											
											if(!$new_selection || $new_selection.length==0)
											{
												$new_selection=$selected.next("LI");
											}
											
											if(!$new_selection || $new_selection.length==0)
											{
												  													
												$new_selection=$selected.parent().closest("LI");
											}
											
											
											//we have a node to select after deletion
											if($new_selection && $new_selection.length>0)
											{	
												$selected.trigger('mousedown');
											
												$new_selection.trigger("mouseup");
												
												$selected.remove();
												
											}
											else //no nodes in tree, so no selected node
											{	
												$selected.trigger('mousedown');
												$selected.remove();
											}	
											
											/*if we don't have any children in our UL
												  after deletion our parent should not show expand/collapse controls*/
												
											if($UL.children().length==0)
												showExpandCollapseControls($UL.closest("LI"),0);
												  
											
											
											
											
										}
									);//end bind click	
				
				
				//indent
				var $btn_indent=$('<span class="editable-tree-controls indent-node" type="image" title="indent"/>')
						
					$btn_indent.bind(	'click',
										function()
										{
											var $selected=$tree.data('selected');
											
											//do we have a prev sibling to fall under
											var $sibling=$selected.prev();
											
											
											
											if(!$sibling || $sibling.length==0) return;
											
											
											//get our sibling's UL
											var $UL=$sibling.find(">UL");
											
											
											$UL.append($selected);
											 
											
											showExpandCollapseControls($sibling,1);
											
										}
									);//end bind click	
			
				//outdent
				var $btn_outdent=$('<span  class="editable-tree-controls outdent-node" type="image" title="outdent"/>')
						
					$btn_outdent.bind(	'click',
										function()
										{
											var $selected=$tree.data('selected');
											
											//our parent becomes our previous sibling
											var $sibling=$selected.parent().closest("LI");
											
											if($sibling && $sibling.length>0)
												$sibling.after($selected);
											
											if($sibling.find('>UL>LI').length==0)
												showExpandCollapseControls($sibling,0);
											
											
											
										}
									);//end bind click
				
				
				var $controls=$("<DIV></DIV");
				
				var $hidden_field=$("<input id='"+$tree.attr('fld')+"' subtype='tree-data' class='tree-data' type='hidden'>");
				$hidden_field.data('serialize',function(){ return getSerializedTree($tree); });
				
				var $title=$('<span>'+$tree.attr('title')+'</span>');
				$controls.append($title);
				
				if( $tree.hasClass('hierarchical') )
				{			 	$controls.append($btn_outdent)
							 	.append($btn_indent)
							 	.append($("<b>&nbsp;&nbsp;</b>"));
				}
				
				
							 $controls
							 	.append($btn_add)
							 	.append($btn_delete)
							 	.append($("<b>&nbsp;&nbsp;</b>"))
							 	.append($btn_up)
							 	.append($btn_down)
							 	.append($("<b>&nbsp;</b>"))
							 	.append($hidden_field);
							 	
				$controls.insertBefore($tree);			 	
							 	
	
				
				
				//$tree.data('selected',$first_item);
				
				
				initializeItemPropertySheet($tree);
				
				//select the first item in the list by default
				var $first_item=$tree.find(">UL>LI:first-child");

				//console.log($first_item);

				$first_item.trigger('mouseup');
	
	
		
			}//end mkeEditableTree
		
		
		function displaySelectedItemPropertySheet($tree)
		{
			var $form=$tree.data('prop-sheet');
			
				
				$form[0].reset();
				
			var $fields=$form.find(":input");
			var values=$tree.data('selected').data('obj');
			
			if(!values) return;
			$fields.each(
				function()
				{
					var $fld=$(this);
					var propName=$fld.attr('id').replace(/item__/,"");
					
					var value=values[propName];
					if(value)
						$fld.val(value);
				}
			
			)
			
		}

		function initializeItemPropertySheet($tree)
		{
		
			
			//$tree.data('prop-sheet').empty();
			
			var args=$tree.data('properties-sheet-template');
			
			var markup="";
			
			
			markup+='<table cellpadding="2" cellspacing="0" class="editable-tree-prop-sheet">';
			if(args.length==0)
				markup+="<tr><td>No property sheet exists for this item type.</td></tr>";
			else
			{
				for(var argName in args)
				{
					var arg=args[argName];
				
					
					markup+="<tr>";
						
					
					switch(arg.type)
					{
						
						case 'chooser':
						
							var options=arg.value.split("&");
							
							markup+="<td class='label'>"+arg.name+"</td>";
							markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";
							
							for(var i in options)
							{
								var option=options[i].split("=");
								markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";
							}
									
							markup+='</select></td>';
							break;	
						
						case 'hidden':
							markup+='<input type="hidden" id="item__'+arg.id+ '"'+ 
										' value="' + arg.value +  '"'+
										'ignore_property="1">';
							break;
						case 'text':
						default:
							markup+="<td class='label'>"+arg.name+"</td>";
							markup+='<td><input type="text" id="item__'+arg.id+ '"'+
										' value="' + arg.value +  '"'+
										'ignore_property="1"></td>';
							break;
					}
					
					markup+="</tr>";
				}
			}	
			markup+="</table>";						
						
			//insert markup inside our properties sheet container			
			$tree.data('prop-sheet').html(markup);
			
		
			/*
				when a value in a field on our list changes,
				collect all field values and post them on the
				selected item's .data("obj") variable
				
				
			*/	
			
			/*store a handle to the prop-sheets fields*/
			var $fields=$tree.data('prop-sheet').find(":input");		
			
			
			/*create a custom event that collects form values and places them on item.data('obj')*/
			$tree.bind('update-selected-item',
			
				function()
				{
						
					var args={};
					$fields.each(
					
						function()
						{
							var $fld=$(this);
							
							/*strip off the 'item__' prefix 
							   from the fld id to form the property name*/
							var propName=$fld.attr("id").replace(/item__/,"");					
							args[propName]=$fld.val();
							

						}
					
					);
					
					
					var $selected=$tree.data('selected');
					
					if(!$selected || $selected.length==0) return;
					
						$selected.data("obj",args);
						
					var label=args.label;
						label=(label.length==0)?"[Label Needed]":label;
					$selected.find(">A").text(label);
					
				}
					
			);
			
			$fields.bind( 'keyup',
							function(){$tree.trigger('update-selected-item');})
				   .bind( 'change',
							function(){$tree.trigger('update-selected-item');});
		
		
		
		}
		
		
		function getSerializedTree($tree)
		{
			
			var $nodes = $tree.find(">UL>LI");
			
			var a=new Array();
			
			$nodes.each
			(
			
				function()
				{
					var $node=$(this);
					a.push(getSerializedTreeNode($node));
				}
			
			);
			
			return a;
		}
		
		
		
		function getSerializedTreeNode($node)
		{
			
			var args=$node.data('obj');
			
			var $nodes=$node.find(">UL>LI");
				if($nodes.length>0)
				{
					args.children=new Array();
					$nodes.each(
						function()
						{
							var $node=$(this);
							args.children.push( getSerializedTreeNode( $node )   );
						}
					)
				}
			
			return args;
			
		}
		
		
		
		function generateTree($tree)
		{
			var data=$tree.data('tree-data');
			var $container=$("<ul class='editable-tree'></ul>");
			$tree.html($container);
			
				$(data).each(
				
					function()
					{
						var args=this;
						$container.append(generateTreeNode(args));
						
						
					}
				
				);
		
		
		}
		
		function generateTreeNode(args)
		{
			var $LI=$("<LI><span class='editable-tree-controls'/><A href='javascript:void(0)'>"+args.label+"</A><UL></UL></LI>");
				
			var $control=$LI.find(">SPAN");
				
			if(args.children && args.children.length>0)
				{
					
					$control.addClass('collapse-node');
					
					var $container=$LI.find(">UL");
					
					
					$(args.children).each(
				
						function()
						{
							var args=this;
							$container.append(generateTreeNode(args));
							
							
						}
					);
				}
			else
				{
					$control.addClass('blank-node');
				}
				
				
			args.children=null;	
			$LI.data('obj',args);
				
			return $LI;	
		}
		
		
		function showExpandCollapseControls($node, state)
		{
			if(state==1)
			{
				$node.find(">SPAN.editable-tree-controls").removeClass('blank-node').addClass('collapse-node');
													
			}
			else
			{
				$node.find(">SPAN.editable-tree-controls").removeClass('collapse-node').addClass('blank-node');
													
			}
		}
		
		
		
		
		$("#test-tree").data(  "default-object", DWPE_PanelFactory.getDefaultArgsListForType("TabPanel") );
		$("#test-tree").data(  "properties-sheet-template",	
								DWPE_PanelFactory.getPropertySheetFields('TabPanel'));
		
		
		var numberOfTabsToDisplay =12;
		var data=new Array();
		for (i=1;i<=numberOfTabsToDisplay;i++)
		{
			myItem=DWPE_PanelFactory.getDefaultArgsListForType("TabPanel");
			myItem.label="Inline Tab " + i;
			myItem.icon="none";
			myItem.closureButton="1";
			
			if(i%4==0)
			{	myItem.content = "http://www.oracle.com";
				myItem.icon="add";
				myItem.label="External Tab " + i;
				myItem.closureButton="1";
			}
			
			
			data.push(myItem);
		}
		
		
		$("#test-tree").data('tree-data',data);
		
		makeEditableTree( $("#test-tree") );
		
		$("#serialize-btn").click(
			function(){ var x= $(":input.tree-data").data('serialize')() ; console.log(x);	}
		)
		

	});


	
	
	
	
	

</script>










</body>
</html>
