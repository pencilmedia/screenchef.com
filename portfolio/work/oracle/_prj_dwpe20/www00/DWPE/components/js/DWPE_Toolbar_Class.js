/*DWPE_Toolbar_Class.js*/





/*Set the class that our class will inherit from*/
DWPE_Toolbar_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_Toolbar_Class.constructor=DWPE_Toolbar_Class;
DWPE_Toolbar_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_Toolbar_Class()
{
	
	
	this.id=this.getID();
	this._class="DWPE_Toolbar_Class";
	
	//define defaults
	this.label="DWPE_Toolbar";
	this.width="100%";
	this.alignment="L";
	this.items=new Array();
	
	
	
	$(".dwpe-link").live(	'mousedown',
								function(event)
								{
									
									var $item=$(this);
									
									 //don't execute if callee is disabled
									if(DWPE_Utilities.isDisabled($item)) return false;
	
									
									var cmd=$item.attr('cmd');
									
									DWPE_Utilities.performCommand($item,cmd);
									
									return false;	
								
							});
	
	$(".dwpe-button").live(	'mousedown',
								function(event)
								{
									
									
									
									var $item=$(this);
									
									
									 //don't execute if callee is disabled
									if(DWPE_Utilities.isDisabled($item)) return false;
	
									
									var cmd=$item.attr('cmd');
									
									
									//handle radio button group and toggle button case
									var parent_btn=$item.closest('.dwpe-button.RadioButtonGroup,.dwpe-button.ToggleButton')
									if(parent_btn)
									{
										DWPE_Toolbar_Class.toggle(event, parent_btn[0]);
										
									}
									
									//handle inline selector case
									if( $item.hasClass('InlineSelector')
										||
									    $item.hasClass('InlineSelectorSplit'))
									{	
										var cancel_cmd=DWPE_Toolbar_Class.showInlineSelectorMenu(event, $item[0]);
										if(cancel_cmd) cmd=null;
									}
									
									DWPE_Utilities.performCommand($item,cmd);
									
									return false;	
								
							});
	
	
	return this;	

}

//Make an instance of the class that we can access in code
DWPE_Toolbar = new DWPE_Toolbar_Class()

/*define the functions we wish to override from base*/


//define how we will display to screen
DWPE_Toolbar_Class.prototype.update=function()
{
	//build up markup
	var markup="<ux:toolbars class='dwpe-toolbar'>";
	markup+="<ul>";

	
	/*construction style #2: factory driven*/
	var len=this.properties.items.length;
	for(var index=0;index<len;index++)
	{
		var myItemArgs=this.properties.items[index]; //JSON
		
		markup+=DWPE_ButtonFactory.make(myItemArgs,"toolbar-item"); //creates the markup based on the _class argument that is passed in
		
	}
	
	
	markup+="<li class='dwpe-overflow-btn aft'></li>";
	
	
	markup+="</ul>";
	var resizable=(this.properties.resizable=="0")?" style='display:none' ":"";
	markup+="<div class='dwpe-toolbar-resize' "+resizable+" ></div>";
	markup+="</ux:toolbars>";
	
	this.markup=markup;
	

}


DWPE_Toolbar_Class.prototype.render=function()
{

	this._super.render.call(this);
	
	
	
	var $ux=this.parent;
		$ux.attr('id',DWPE_Utilities.getUniqueId());
		$ux.addClass("dwpe-toolbar");
		var w=(this.properties.width)?this.properties.width:"100%";
		$ux.data('size',w);
	
	
	var $overflow_btn=$ux.find("UX.dwpe-overflow-btn.aft:first");
	
	/*setup overflow control event handlers*/
	$overflow_btn.click(
		
		function(e)
		{	DWPE_Toolbar_Class.handleOverflowClick($ux);	}
	
	);
	
	
	/*setup resize control*/
	if(this.properties.resizable=="1")
	{
		$resizer=$ux.find(".dwpe-toolbar-resize:first");
		$resizer.draggable(
			{
				//containment:'parent',
				axis:'x',
				start:function(event,ui){},
				stop:function(event,ui)
				{
					var delta=ui.position.left;
					var newWidth=$ux.width()+delta;
					//$ux.css("width",newWidth+"px");
					$ux.data("size",newWidth+"px");
					
					ui.helper.css({"left":"0px", "top":"0px"});
					DWPE_Toolbar_Class.manageToolbarOverflow($ux);
				}
				
				
			}
		);
	}
	



	
	


						
	/*setup dwpe resize event handler*/
	$(window).bind('dwpe-component-resize',
						function(e,parentID)
						{	
							//if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)
								DWPE_Toolbar_Class.manageToolbarOverflow($ux);
							
						});
						
						
						
						
	
	
	
	/*manage toolbar overflow*/
	DWPE_Toolbar_Class.manageToolbarOverflow($ux);

}






DWPE_Toolbar_Class.prototype.generateMarkup=function(args)
{
	//build up markup
	var markup="<ux:toolbars class='dwpe-toolbar'";
	
	if(args.url)
		markup+=" url='"+args.url+"'";
	
		markup+=">";
	
	if(!args.url)
	{
		markup+="<ul>";
	
		
		/*construction style #2: factory driven*/
		var len=args.items.length;
		for(var index=0;index<len;index++)
		{
			var myItemArgs=args.items[index]; //JSON
				if(myItemArgs["itemtype"]) 
					myItemArgs.type=myItemArgs.itemtype;
			
			markup+=DWPE_ButtonFactory.make(myItemArgs,"toolbar-item"); //creates the markup based on the _class argument that is passed in
			
		}
		
		
		markup+="<li class='dwpe-overflow-btn aft'></li>";
		
		
		markup+="\n</ul>";
		var resizable=(args.resizable=="0")?" style='display:none' ":"";
		markup+="\n<div class='dwpe-toolbar-resize' "+resizable+" ></div>";
		
		markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
	
	} //end if
	
	markup+="</ux:toolbars>";
	
	return markup;
	

}


/*post processing*/
DWPE_Toolbar_Class.prototype.make=function($ux)
{


	if($ux.data('toolbar-initialized')==true) return;
	
	$ux.data('toolbar-initialized',true);
	var toolbar_url=$ux.attr('url');
	
	
	
	if(toolbar_url)
	{
		//load toolbar then initialize	
		$.ajax(	{	url:toolbar_url,
						cache:false,			//always get a fresh copy of the content 
						//async:false,			//always wait for the content to arrive
						success:function(data)
						{
							
							var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,".dwpe-toolbar");
							
							//$object.html()is the content inside the toolbar ux tag which we drop inside our toolbar's $ux tag
							
							$ux.html(html);
							DWPE_Toolbar.initializeToolbar($ux);
							
						},
						error:function(XMLHttpRequest, textStatus, errorThrown)
						{
							$ux.html('Could not find: "'+toolbar_url+'"');
						}							
					} );
	}
	else
	{	
		//toolbar loaded inline, just initialize
		DWPE_Toolbar.initializeToolbar($ux);
		
		
	}
	
}	

DWPE_Toolbar_Class.prototype.initializeToolbar=function($ux)
{
	
	$ux.data('toolbar-initialized',true);
	
	$ux.attr('id',DWPE_Utilities.getUniqueId());
	var w=($ux.attr("width"))?$ux.attr("width"):"100%";
		$ux.data('size',w);
	
	
	var $overflow_btn=$ux.find("LI.dwpe-overflow-btn.aft:first");
	
	/*setup overflow control event handlers*/
	$overflow_btn.click(
		
		function(e)
		{	DWPE_Toolbar_Class.handleOverflowClick($ux);	}
	
	);
	
	
	/*setup resize control*/
	if(this.properties.resizable=="1")
	{
		$resizer=$ux.find(".dwpe-toolbar-resize:first");
		$resizer.draggable(
			{
				//containment:'parent',
				axis:'x',
				start:function(event,ui){},
				stop:function(event,ui)
				{
					var delta=ui.position.left;
					var newWidth=$ux.width()+delta;
					//$ux.css("width",newWidth+"px");
					$ux.data("size",newWidth+"px");
					
					ui.helper.css({"left":"0px", "top":"0px"});
					DWPE_Toolbar_Class.manageToolbarOverflow($ux);
				}
				
				
			}
		);
	}
	



	
	


						
	/*setup dwpe resize event handler*/
	$(window).bind('dwpe-component-resize',
						function(e,parentID)
						{	
							//if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)
								DWPE_Toolbar_Class.manageToolbarOverflow($ux);
							
						});
						
						
						
						
	
	
	
	/*manage toolbar overflow*/
	DWPE_Toolbar_Class.manageToolbarOverflow($ux);


}




/*--------------------------*/
/*      Class Methods       */
/*--------------------------*/

//hide all the buttons after the fold
DWPE_Toolbar_Class.manageToolbarOverflow=function($ux)
{
	
	/*if the overflow menu is open, close it*/
	DWPE_Window.closeWindowGroup($ux.attr('id')+"-overflow");


	//get handles to key elements
	//var $ux=$("#"+toolbarID);
	//var $toolbar=$("#"+toolbarID+"-toolbar");
	//var $toolbar_body=$("#"+toolbarID+"-toolbar-body");
	var $overflow_btn=$ux.find(">UL>LI.dwpe-overflow-btn.aft:first");
		$overflow_btn.show(); //show it so we can measure it
	
	
	//determine our parent's size
	var pW=$ux.parent().width();
	
	
	//determine how much size we can take and apply it to our container
	var size=$ux.data('size');
		size=(size)?size:"100%";
	
		if(size.indexOf('%')>-1)
		{
			size=(parseInt(size)/100)*pW;
		}
		else
		{
			size=parseInt(size);
		}
	$ux.width(size);
	
	
	//get a handle to all of our buttons
	var $buttons=$ux.find(">UL>LI.dwpe-button");
	
	//hide all buttons so we can do a fair test of when our width exceeds our bounds	
	$buttons.hide();
	
	//initialize our current width
	var w=0;
		w+=$overflow_btn.outerWidth(true);
		w+=2; //add a fudge factor
	

	//console.log($ux,pW,w,size);	
	
	//iterate over our buttons showing only as many as will fit in the visible display
	var overflown=false;
	$buttons.each(
	
		function(i)
		{
			
			
			var $button=$(this);
			
			//show the button so we can measure it
			$button.show();
		
			//add the width of this tab to our total width
			w+=$button.outerWidth(true);
	
			
			
			if(w>size) 		 		//we are out of bounds so hide it again and set the overflown flag
			{
				$button.hide();
				overflown=true;
			}
			
		}
	
	);
	
	//hide our overflow control if it isn't needed 
	if(overflown==false)
	{
		$overflow_btn.hide();
		
	}
	
	
	
}



DWPE_Toolbar_Class.handleOverflowClick=function($ux)
{

	//get handles to key controls
	//var $toolbar=$("#"+toolbarID+"-toolbar");
	//var $toolbar_body=$("#"+toolbarID+"-toolbar-body");
	var $overflow_btn=$ux.find("LI.dwpe-overflow-btn.aft:first");
	
			
	//make a overflow menu object
	var menu_id=$ux.attr('id')+"-overflow";
	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);
	var $menu_body=$("#"+menu_id+"-body");
	
	/*determine the outlier buttons and append them to an overflow menu body */
	$ux.find(">UL>LI.dwpe-button:hidden").each
	(
		function()
		{
			var $button=$(this);
			
			//clone the button, show it and append it to the overflow menu body
			var $c=$button.clone(true);
			
			if($c.hasClass("Separator")==false) //we don't show separators in overflow menus
			{	$c.show();
				$c.css('display','block'); //force it to block to paint vertically within the menu
			}
			$menu_body.append($c);
					
		}
	);

	
	//set the state of the overflow-control to active	
	$overflow_btn.addClass("active");
	
	//position the window relative to the overflow control
	DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);
	
	//when the user has selected a button move all the buttons back into the toolbar
	/*window class calls the 'cleanup' method just before the window group will be dismissed giving us a chance to move our clones*/
	$overflow_btn.bind(		
		"cleanup",
		function(e)
			{
			
				/*we remove from toolbar all the buttons that have been cloned into the overflow;
					we do this because the original items may not carry the latest state info 
					(toggle/radio/selector)*/
				$ux.find(">UL>LI.dwpe-button:hidden").each
				(
					function(j)
					{
						$(this).remove();
					}
				);

				/*we add back to toolbar all the buttons that had been cloned into the overflow
					but we hide them, as they were originally hidden when we opened this menu
					because they carry the latest state info */
				
				$toolbar_body=$ux.find(">UL");
				$menu_body.find(">LI").each
				(
					function(j)
					{	var $o=$(this);
						
						$o.hide();
						 
						
						$toolbar_body.append($o);
						
					}
				);
				
				//set the state of the overflow-control to normal and ensure it appears last
				$overflow_btn.removeClass("active");
				$toolbar_body.append($overflow_btn);
			}
		);
	
		
				

}













DWPE_Toolbar_Class.toggle=function(event,_group)
{
	
	/* this function is called as part of an event bubble from
		a click on the radio button group item 
		
		*/
	var group=$(_group);
	
	if(DWPE_Utilities.isDisabled(group)) return;
	
	
	/*the click occurs on content inside the LI tag, so we have
	 to walk up the node tree to find the encompassing LI
	 that represents our button*/
	var target=$(event.originalTarget);
	
	
	if(target.tagName!="LI")
	{
		target=target.closest("UX,LI");
	}
	
	/* now we compare our target button to all buttons in the group
		if we find our target, we add the "Active" class, otherwise we remove it (should it exist)
	*/ 
		group.find("LI").each(
		function(i)
		{	
			var $o=$(this);
			//we use $o[0]==target[0] so that we may compare node to node
			if($o[0]==target[0]) $o.toggleClass("Button_Active");
			else $o.removeClass("Button_Active");
		}
	)
	
}




DWPE_Toolbar_Class.showInlineSelectorMenu=function(event,callee)
{
	var $e=$(event);
	
	if(DWPE_Utilities.isDisabled(callee)) return;
	
	var $callee=$(callee);
	var drop_down_width=17;
	
	//console.log($(event.originalTarget));
	
	//var xFromRightEdge=($callee.offset().left+$callee.width()-event.clientX);
	//console.log($callee.offset().left,$callee.width(),event.clientX);
	
	
	if(	$callee.hasClass("InlineSelectorSplit") && 
			$(event.originalTarget).hasClass("arw")
		||
		
		$callee.hasClass("InlineSelector")  
		
			)
	{
		//show menu
		event.stopPropagation();
		var menu_id=$callee.attr("id")+"-menu";
		var group=null; //append to the last group
		var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);
		var $overflowMenuBody=$("#"+menu_id+"-body");
			
			$overflowMenuBody.html($callee.find(".inline-selector-menu").html());
			$overflowMenuBody.css("min-width",$callee.width())
			//$overflowMenuBody.append("<li>New</li><li>Edit</li><li>Open</li><li>Save</li><li>Save As</li><li>Delete</li>");
		
		return true;
		
	}	
	
	return false;
		
	
}