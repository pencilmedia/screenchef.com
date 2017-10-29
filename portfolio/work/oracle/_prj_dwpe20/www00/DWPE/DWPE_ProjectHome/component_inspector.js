 /* Page Initialization */
 
 $(function() 
 	{
	   
	   if($("#component-tabs").length>0)
	   {
		   	$("#component-tabs").tabs();
			$("#properties-sheet-container").append($("#properties-sheet"));
		}
		
		
		if($("#tabs").length>0)
		{
			$("#tabs").tabs();
		}
		
		if($('#region_style').length>0)
		{	$('#region_style').change(setRegionStyle);	
			setRegionStyle();	}
			
		//setup print buttons
		
		$(".print-btn").each(
		
				function()
				{	
				
					$btn=$("<input class='ui-state-default ui-corner-all' type='button' value='Print' style='font-size:11px'>");
					
					$btn.click(	function()
						{
							$("#preview").hide();
							window.print();
							$("#preview").show();
							
						
						}
					);
					
					$(this).replaceWith($btn);
				}
		);
		
		
		$('body').css('visibility','visible');
		
		/*
		$("#preview").live('mouseover',
								function()
								{	$(this).resizable(	
									{
										delay:20,
										handles:'s'
										
									}
								
								);
								});
		
		*/
		
		
	 });




/*takes changes in prop sheets and posts the object result into the preview area*/
function commitToPreview()
{
	
	if($("#scratchpad").length>0)
	{
		commitScratchpad();  //here the object is built from the markup found in scratchpad
	}
	else
	{
		commitMetadata();   //here the object is built straight out of metadata
	}
	
}

/*
	CommitProperties: takes a handle to an html form,
	where a property name also reflects a field name on the page,
	collects the values associated with each property field,
	creates an object specified by the hidden
	field ClassObject and calls update on it.
	
	The class object is responsible for consuming the properties
	it is passed and painting the component correctly.

*/



function commitProperties()
{

	//clear the contents of our preview area
	$("#preview").empty();	

	var args=collectArguments();
	
	
	//create test object
	var test_object=eval("new "+ args._class+"()");
	
	//pass in our props
	test_object.setProperties(args);
	
	//update our metadata textarea with serialized object string
	$("#metadata").val(test_object.serialize());
	
	//request to draw our objects
	commitToPreview();
	return;
	
	

}

/*collects arguments off our property sheet and places them in a well-formed JSON object*/
function collectArguments()
{
	
	var args={};
	var f=$("#properties-sheet");
	
	
	//traverse our properties sheet for component settings
	$(":input",f).each(
	
		function(i)
		{
			var $fld=$(this);
			if($fld.attr("ignore_property")=="1") return;
			
			var name=$fld.attr("id");
			var subtype=$fld.attr("subtype");
			
			
			switch(subtype)
			{
				case "list": //gather all elements in the list box
					args[name]=new Array();
					
					$("#"+name+" option").each
					( function(i)
						{
							args[name].push( $(this).data("obj") );
						}
					)
					
					break;
				case "tree-data": //gather all elements in the tree
					
					args[name]=new Array();
					
					var items=$fld.data('serialize')(); 
					$(items).each(function(){args[name].push(this)})
					
					
					break;	
					
				case "":
				default:
					var value=$fld.val();
					if(name && value && (!$fld.is(':checkbox') || $fld.is(':checked')))
					{
						args[name]=value;
						
					}
					break;
			
			}
			
			
			
					
		}
	
	);
	
	return args;

}


/*
	Commit Scratchpad
*/
function commitScratchpad()
{

	var $preview=$("#preview");
	$preview.empty();
	
	var html=$("#scratchpad").val();
	
	/* the next line removes all formatting characters from markup 
	   to avoid extra space between tags being treated as intended whitespace;
		w/o this fix we can see extra space between divs; needs documentation for training */
	
	html=html.replace(/[\t|\r|\n]/g,"");
	
	var qty=$("#qty").val();
	
	
	/*add ux placeholder tags to the DOM;
		these tags model the output of DWPE operations
		undertaken in DW
	*/
	var markup="";
	for(var i=0;i<qty;i++)
	{
		markup+=html;
	}
	

	$preview.html(markup);
	
	DWPE_ObjectFactory.startPerformanceMonitoring();
	DWPE_ObjectFactory.processPage();  //enumerate all ux tags that haven't been processed yet

}

/* commitMetadata picks up the object metadata defined in the properties-sheet form 
	and creates n copies of the object in the preview area */

function commitMetadata()
{

	var $preview=$("#preview");
	var $script=$("#script");


	
	$preview.empty();
	$script.empty();
	
	//retrieve the metadata that will constitute our new test object
	var json_string=$("#metadata").val();
	

	
	var qty=$("#qty").val();
	
	
	/*add ux placeholder tags to the DOM;
		these tags model the output of DWPE operations
		undertaken in DW
	*/
	var tag="ux";
	//var tag="div";
	var markup="";
	var _script="";
	for(var i=0;i<qty;i++)
	{
		markup+="<"+tag+" id='ux"+i+"'>&nbsp;</"+tag+">";
		_script+="ux_data['ux"+i+"']="+json_string+";";
	}
	
	_script="<script type='text/javascript'>"+_script+"</script>";
	
	$preview.html(markup);
	$script.html(_script);
	
	DWPE_ObjectFactory.startPerformanceMonitoring();
	DWPE_ObjectFactory.processPage();  //enumerate all ux tags that haven't been processed yet

}














function updatePropertySettings(json_string)
{
	//console.log(json_string)
//	var args=JSON.parse(json_string);
	eval("var args="+json_string);	
	//console.log(args)
	
	var f=$("#properties-sheet");
	
	
	//traverse our properties sheet to update component settings
	$(":input",f).each(
	
		function(i)
		{
			var fld=$(this);
			if(fld.attr("ignore_property")=="1") return;
			
			var argName=fld.attr("id");
			var subtype=fld.attr("subtype");
			
			
			//lookup value in our args object
			var value=args[argName];
			
			//if no value was found then skip updating this field
			if(!value) return;

			
			switch(subtype)
			{
				case "list": //post all elements to the list box
					
					//clear select field
					fld.html("");
					
					//move through each item, appending an option tag to fld
					$(value).each
					( function(i)
						{
							//make an option tag
							
							$option=$("<option>"+this.label+"</option>");
							$option.data("obj",this);
							fld.append($option);
						
						
						}
					)
					
						
					
					break;
				case "":
				default:
					fld.val(value);
					break;
			
			}
			
			
			
		}
	
	);


}





/* assumes the properties-sheet form defines a drop-down for placement that contains values [Global|Primary|Secondary|Tiertiary];
	this function picks off the seleced value and sets the associated classname on the component preview area;
	this allows us to test our components against different background colors;
	See toolbar for an example
*/
function setRegionStyle()
{
	var v=$("#region_style").val();
	var c;
	switch(v)
	{
		case 'Global':
			c="GlobalRegion";
			break;
		case 'Secondary':
			c="SecondaryRegion";
			break;
		case 'Tiertiary':
			c="TiertiaryRegion";
			break;
		case 'Primary':
		default:
			c="PrimaryRegion";
			break;	
	
	
	}
	
	$("#preview").removeClass('GlobalRegion')
				 .removeClass('SecondaryRegion')
				 .removeClass('PrimaryRegion')
				 .removeClass('TiertiaryRegion')
				 .addClass(c);
	

}


/*Used in the specifications tab to launch a url in the iframe;
the calling button must have these attribute set: frame_id and url
*/
function openInIframe(o)
{
	var $o=$(o);
	
	
	var url=$o.attr("url");
	var frame_id="#"+$o.attr("frame_id");
	var $frame=$(frame_id);
	
	$frame.attr("src",url);
	
	
	
	
}

/*Used in the specifications tab to launch a url in a new window;
the calling button must have these attribute set: frame_id and url
*/
function openInNewWindow(o)
{
	var $o=$(o);
	
	var url=$o.attr("url");
	var frame_id="#"+$o.attr("frame_id");
	var $frame=$(frame_id);
	
	window.open(url,'','');
	
	var page = ($frame.contentWindow) 	? $frame.contentWindow 
										: ($frame.contentDocument.document) ? $frame.contentDocument.document 
																			: $frame.contentDocument;
	page.document.open();
	page.document.write("This content cannot be viewed inline. So we've opened it in a new tab.");
	page.document.close();

	
	
	
	
}



/*-----------------------------------*/
/* Property List Management Functions*/
/*-----------------------------------*/

/* On A Select List Box, removes the item the user
   has highlighted and highlights the preceding available item  */
function removeSelectedListItem(listID)
{
	
	//get list
	var $list=$("#"+listID);
	var i=$list.attr("selectedIndex");
	var len=$list.attr("options").length;
	
	
	//do nothing if list is empty
	if(len==0)
		return;
	
	//remove selected item
	$($list.attr("options")[i]).remove();
	
	//do nothing if list is now empty
	if(len-1<=0) 
		return;
	
	//move selectedIndex
	i=(i-1<0)?0:i-1;
	$list.attr("selectedIndex",i);
	
	//force list to update property sheet
	$list.change();
}

/* On a Select List Box adds an item to the list
	
	Note, code is ButtonFactory specific now, should be made generic later

*/
function addListItem(listID)
{

	var $list=$("#"+listID);
	var $option=$("<option></option>");
	
	var args=DWPE_ButtonFactory.getDefaultArgsListForType($("#button_style").val());
	
	//set options label
	$option.text(args.label);
	
	//set the data 'obj' variable to our args 
	$option.data("obj",args);$list.append($option);

}

/*takes the value of a field, presumably a hidden textarea, pushes it to scratchpad and 
  forces it to evaluate to the preview area */
function addContentToPreview(id)
		{
			$("#scratchpad").val($(id).val());
			commitToPreview();
		}

/*fetches the contents of a url, pushes it to scratchpad and 
  forces it to evaluate to the preview area */
function addContentURLToPreview(URL)
		{
			
			
			$.ajax({ url: URL, 
					 processData:false,
					 dataType:'html',
					 success: function(data)
					 {
       				 	$("#scratchpad").val(data);
       				 	commitToPreview();
     				 }
     			   });
			
		}






/*Editable Tree*/
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
				
				if(!$tree.data('manage-form-state'))
					$tree.data('manage-form-state',function(){/*left to the test script to define*/});
				
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
				
				
				var $controls=$("<div class='editable-tree-control-bar'></div");
				
				
				//this field gets called component inspector when the form is serialized
				var $hidden_field=$("<input id='"+$tree.attr('fld')+"' subtype='tree-data' class='tree-data' type='hidden'>");
				$hidden_field.data('serialize',function(){ return getSerializedTree($tree); });
				
				var $title=$('<span class="editable-tree-title">'+$tree.attr('title')+'</span>');
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
			
			
			if(!$tree.data('selected')) return;
			
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
			
			//show and hide fields as needed
			$tree.data('manage-form-state')();
		}

		function initializeItemPropertySheet($tree)
		{
		
			
			$tree.data('prop-sheet').html();
			
			var args=$tree.data('properties-sheet-template');
			
				args=($.isFunction(args))?args():args;
			
			var markup="";
			
			
			markup+='<table cellpadding="2" cellspacing="0" class="editable-tree-prop-sheet">';
			if(args.length==0)
				markup+="<tr><td>No property sheet exists for this item type.</td></tr>";
			else
			{
				for(var argName in args)
				{
					var arg=args[argName];
				
					
					markup+="<tr id='"+arg.id+"-row'>";
						
					
					switch(arg.type)
					{
						
						case 'rule':
							markup+='<td></td><td><hr></td>';
							break;
						case 'chooser':
						
							var options=arg.value.split("&");
							
							
							markup+="<td class='label'>"+arg.name+"</td>";
							markup+="<td><select id='item__"+arg.id+"' class='"+arg.dynamic+"' ignore_property='1'>";
							
							for(var i in options)
							{
								var option=options[i].split("=");
								markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";
							}
									
							markup+='</select>'
							if(arg.help)
								markup+='<div class="fld-help">'+arg.help+'</div>';	
							markup+='</td>';
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
										'ignore_property="1">';
							if(arg.help)
								markup+='<div class="fld-help">'+arg.help+'</div>';			
							markup+='</td>';
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
			
			
			//set values on the prop sheet
			displaySelectedItemPropertySheet($tree);
			
			
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
							function(){
							
									  	$tree.data('manage-form-state')();	
							
										$tree.trigger('update-selected-item');
							
							});
		
		
		
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
			
			args.items=new Array();
					
			var $nodes=$node.find(">UL>LI");
				if($nodes.length>0)
				{
					$nodes.each(
						function()
						{
							var $node=$(this);
							args.items.push( getSerializedTreeNode( $node )   );
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
				
			if(args.items && args.items.length>0)
				{
					
					$control.addClass('collapse-node');
					
					var $container=$LI.find(">UL");
					
					
					$(args.items).each(
				
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
				
				
			args.items=null;	
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


