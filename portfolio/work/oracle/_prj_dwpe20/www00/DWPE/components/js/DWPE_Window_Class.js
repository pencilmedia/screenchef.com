/*DWPE_Window_Class.js*/


/*defines a class for managing windows (layers)*/
function DWPE_Window_Class()
{
	this.zCount=999;
	this.windows=new Array();
	
	this.groups={};	
	this.precedingGroup=null;
	this.mostRecentGroup=null;
	this.shadowWidth=16;
	this.shadowHeight=16;
	
	return this;
}
/*make a globally available instance of window to 
  gain access to its helper functions from inside any subclass*/
var DWPE_Window=new DWPE_Window_Class();



//get a window object and place it on top of all windows
DWPE_Window_Class.prototype.addWindow=function(_callee,id,_type,_group)
{
	//enforce defaults
	var callee=(!_callee)?$("body"):_callee;
	var type=(!_type)?"menu":_type;
	var group=(_group==null)?this.mostRecentGroup:_group;
	
	var windowWidth=$(window).width();
	var windowHeight=$(document).height();
	
	
	//prepare the window group if it doesn't exist
	var $mask=this.makeModalMask(group,$('body'),callee);
	
	
	
	//get callee location info
	var location=callee.offset();
	
	
	//manufacture a window object and append it to our mask
	
	//acquire the group's highest z-index
	var z=$mask.attr("zCount");
	
	var w;
	switch(type)
	{
		case 'dialog':
		case 'overflow-menu':
			//make window
			w=$(DWPE_Window_Class.addShadowFrame(id,"<ul id='"+id+"-body' class='DWPE_window_overflow'></ul>"));
			
				
			
			//position window TR
			w.css({	'zIndex':z++,
			'left':location.left + callee.width(),
			'top':location.top
			});
			break;
	
		case 'menu':
		default:
			//make window
			w=$(DWPE_Window_Class.addShadowFrame(id,"<ul id='"+id+"-body' class='DWPE_Window_Body Menu'></ul>"));
			//position window BL
			w.css({	'zIndex':z++,
			'left':location.left,
			'top':location.top+callee.height()
			});										
			break;									
	}												
	$mask.append(w);
	
	//add the window object to the window group
	this.groups[group].push(w);
	
	
	
	
	//increment the group zCount on mask		
	$mask.attr("zCount",z);		

	return w;
}




DWPE_Window_Class.prototype.makeModalMask=function(group,$parent,callee)
{

	var $mask;
	
	
	
	if( !this.groups[group] )
	{	this.groups[group]=new Array();	
		
		//store mask as first element of this window group
		$mask=$("<div class='mask'></div>");
		$parent.append($mask);
		this.groups[group].push($mask);
		
		//store callee on mask for use in cleanup operations
		$mask.data("callee",callee);
		
		//Get the screen height and width  
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
      
       
       
       
       
       //Set height and width of mask to fill up the whole screen  
       $mask.css({	'z-index':DWPE_WindowFactory.getNextZ(),
	   				'top':0,
					'left':0,
					'width':maskWidth,
					'height':maskHeight});
		
		//set the close window behavior on the mask
		$mask.click(
				function(){
					DWPE_Window.closeWindowGroup(group);
				});
		
		//initialize z-order count for all windows that will attach to this group	
		$mask.attr("zCount",0);		
		
		this.precedingGroup=this.mostRecentGroup;
		this.mostRecentGroup=group;
	}
	else
	{	$mask=this.groups[group][0];	}
	
	
	
	return $mask;



}



DWPE_Window_Class.addShadowFrame=function(id,body)
{
	var frame="<div class='DWPE_window'>"+body+"</div>";
	
		return frame;		
}


//remove a window group from the display
DWPE_Window_Class.prototype.closeWindowGroup=function(group)
{
	var win=this.groups[group];
	
	if(!win) return;
	
	//reset mostRecentGroup to the preceding group
	this.mostRecentGroup=win.precedingGroup|"window";
	
	
	/* mask is index 0 and holds the object id of callee; 
	call cleanup on callee */
	var mask=win[0];
	if(  mask && mask.data("callee") )
	{
		mask.data("callee").trigger("cleanup");
	}
	
	//remove all windows from this group
	while(win.length>0)
	{
		var w=win.pop();
		w.detach();
		
	}
	
	//set group to null, preparing it for GC
	this.groups[group]=null;
	
	

}


//remove a window object from the display
DWPE_Window_Class.prototype.removeWindow=function()
{

	var w=this.windows.pop();
		w.remove();
		this.zCount--;

}

//remove all window objects from the display
DWPE_Window_Class.prototype.removeAllWindows=function()
{

	while(this.windows.length>0)
	{
		this.removeWindow();
	}
}



/*Begin Class Methods*/
DWPE_Window_Class.anchorTo=function(pos,$object,$window)
{
	var location=$object.offset();
	
	
	var windowWidth=$(window).width();
	var windowHeight=$(window).height();
	
	var left=0,top=0;
	var shadowWidth=shadowHeight=16;
	
	switch(pos)
	{
		case 'tr': //anchor window to  top right of object
		default:
			
			//if we cross the right edge, paint left
			var left=location.left+$object.width();
			if(left+$window.width() > windowWidth*.9 )
				left=location.left-$window.width()+shadowWidth;
			
			//if we cross the bottom edge, paint up
			var top=location.top;
			if(top+$window.height() > windowHeight *.9)
				top=location.top+$object.height()-$window.height()+shadowHeight;
			
			break;			
	
	
	}
	
	$window.css({	
				'left':left,
				'top':top
				});	

}















