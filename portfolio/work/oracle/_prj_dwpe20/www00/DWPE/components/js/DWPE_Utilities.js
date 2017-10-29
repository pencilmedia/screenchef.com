/* DWPE_Utilities.js
   Stores helper functions */

DWPE_Utilities={};


//processes a command
DWPE_Utilities.performCommand=function($item,cmd)
{	

	 //don't execute if callee is disabled
	if(DWPE_Utilities.isDisabled($item)) return false;
	
	//perform action, if one is defined
	if(cmd)
	{
		
		
		var action=cmd.split("::");
		
		var param=action[1];
			
		switch(action[0].toLowerCase())
		{	
			case "js":
				
				
				try{
					$(document).data('context',$item);
					eval(param);
					}
				catch(e){alert("error in command format");}
				
				break;
			case "dialog":
				
				try{
					$(document).data('context',$item);
					DWPE_WindowFactory.open($item,param);
				
					}
				catch(e){alert("error loading dialog");}
				
				break;	
			case "new":
				
				try
				{
					window.open('',action[1],'');
				}	catch(e){alert("error loading content in new window")}
				break;
			
			case "open":
			default:
				
				try
				{
					document.location=action[1];
				}	catch(e){alert("error loading content in current window")}
				
				
				break;
		}
			
		
		
	}
	
	return false;
}

/*looks at the passed in object and
  calls the correct handler*/
DWPE_Utilities.performAction=function(o)
{
	$callee=$(o)
	if($callee.attr("cmd").indexOf("js::") == 0)
		DWPE_Utilities.exec($callee);
	else
		DWPE_Utilities.loadURL($callee);
}

/*loads a url into self or other window;
	used by toolbar & menu items	*/
DWPE_Utilities.loadURL=function(o)
{
	var $callee=$(o);
	if(DWPE_Utilities.isDisabled($callee)) return; //don't execute if callee is disabled
	
	var url=$callee.attr("cmd").split("::")[1];
	document.location=url;
	
	
}

/*evals the javascript code that callee holds in its 'cmd' attrib;
	used by toolbar & menu items	*/
DWPE_Utilities.exec=function(o)
{
	var $callee=$(o);
	if(DWPE_Utilities.isDisabled($callee)) return; //don't execute if callee is disabled
	
	var cmd=$callee.attr("cmd").split("::")[1];
		
	try{
		$(document).data('context',$callee);
		eval(cmd);
		}
	catch(e){alert("error in command format");}
}

DWPE_Utilities.getContext=function()
{
	return $(document).data('context');
}
DWPE_Utilities.isDisabled=function(o)
{	
	var $btn=$(o);
	
	
	if(	$btn.hasClass('Button_Disabled')	||
		$btn.hasClass('Disabled')	||
		$btn.hasClass('disabled')			
		)
		return true;
	else
		return false;

}

DWPE_Utilities.getUniqueId=function()
{
	return 'ux'+new Date().getTime();
}

/*Returns the actual width of scrollbars in the given browser*/
DWPE_Utilities.scrollbarWidth=null;
DWPE_Utilities.getScrollbarWidth=function()
{
	if(DWPE_Utilities.scrollbarWidth==null)
	{
		var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
		// Append our div, do our calculation and then remove it
		$('body').append(div);
		var w1 = $('div', div).innerWidth();
		div.css('overflow-y', 'scroll');
		var w2 = $('div', div).innerWidth();
		$(div).remove();
		DWPE_Utilities.scrollbarWidth=(w1 - w2);
	}
	
	return DWPE_Utilities.scrollbarWidth;
}

/*determines if the object passed in is contained by the parent having the id passed in*/
DWPE_Utilities.isObjectContainedByID=function($object,parentID)
{
	if(!parentID) return true;
	
	//console.log(parentID);
	
	var $parent=$($object.parent());
	
	//console.log(parent);
	
	while($parent.attr('id')!=parentID && $parent.attr('tag')!='body')
	{
		$parent=$($parent.parent());
	
	}
	
	if($parent.attr('id')==parentID || $parent.attr('tag')=='body')
		return true;
	else
		return false;
}


/*formatting*/
DWPE_Utilities.format=function(type,value)
{
	var fv;
	switch(type)
	{
		case 'usd':
			
			var num = isNaN(value) || value === '' || value === null  ? 0.00 : value;
    			num=parseFloat(num).toFixed(2);
    		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			{	num = num.substring(0,num.length-(4*i+3))+','+
				num.substring(num.length-(4*i+3));
			}
				num=num.replace(/,\./gi,'.');
			
			fv="$"+num+"";
			break;
		default:
			fv=value;
			break;
			
	}
	
	
	return fv;

}

/*-------------------*/
/* Icons             */
/*-------------------*/

//16x16
DWPE_Utilities.icons = {};
DWPE_Utilities.icons["blank"]       		   = {index:0,tooltip:""};

DWPE_Utilities.icons["confirm"]		           = {index:1,tooltip:""};
DWPE_Utilities.icons["error"]		           = {index:2,tooltip:""};
DWPE_Utilities.icons["info"]		           = {index:3,tooltip:""};
DWPE_Utilities.icons["warning"]		           = {index:4,tooltip:""};
DWPE_Utilities.icons["duplicate"]			   = {index:5,tooltip:"Duplicate"};
DWPE_Utilities.icons["indent"]		           = {index:6,tooltip:"Indent"};
DWPE_Utilities.icons["unindent"]			   = {index:7,tooltip:"Outdent"};

DWPE_Utilities.icons["search"]		           = {index:8,tooltip:"Search"};
DWPE_Utilities.icons["go"]		               = {index:8,tooltip:"Search"};

DWPE_Utilities.icons["moveleft"]	           = {index:9,tooltip:"Remove selected items from list"};
DWPE_Utilities.icons["previous"]	           = {index:9,tooltip:"Show the previous page"};
DWPE_Utilities.icons["moveright"]	   	       = {index:10,tooltip:"Move selected items to other list"};
DWPE_Utilities.icons["next"]	   	           = {index:10,tooltip:"Show the next page"};
DWPE_Utilities.icons["moveleftall"]	           = {index:11,tooltip:"Remove all items from list"};
DWPE_Utilities.icons["moverightall"]		   = {index:12,tooltip:"Move all items to other list"};
DWPE_Utilities.icons["movebottom"]             = {index:13,tooltip:"Move selected items to bottom of list"};
DWPE_Utilities.icons["movetop"]	               = {index:14,tooltip:"Move selected items to top of list"};
DWPE_Utilities.icons["movedown"]	           = {index:15,tooltip:"Move selected items down one in list"};
DWPE_Utilities.icons["moveup"]	               = {index:16,tooltip:"Move selected items up one in list"};
DWPE_Utilities.icons["create"]	               = {index:17,tooltip:""};
DWPE_Utilities.icons["freezecolumn"]	       = {index:18,tooltip:"Freeze Column"};
DWPE_Utilities.icons["unfreezecolumn"]	       = {index:19,tooltip:"Unfreeze Column"};
DWPE_Utilities.icons["wrap"]	               = {index:20,tooltip:"Wrap Text"};
DWPE_Utilities.icons["detach"]	               = {index:21,tooltip:"Detach Table"};
DWPE_Utilities.icons["add"]  	               = {index:22,tooltip:"Add"};
DWPE_Utilities.icons["addrow"]	               = {index:22,tooltip:"Add Row"};
DWPE_Utilities.icons["addnode"]	               = {index:22,tooltip:"Add Node"};
DWPE_Utilities.icons["addmany"]                = {index:33,tooltip:"Select and Add"};
DWPE_Utilities.icons["delete"]	               = {index:23,tooltip:"Delete"};
DWPE_Utilities.icons["remove"]	               = {index:23,tooltip:"Remove"};
DWPE_Utilities.icons["edit"]	               = {index:24,tooltip:"Edit"};
DWPE_Utilities.icons["exportexcel"]	           = {index:25,tooltip:"Export to Excel"};
DWPE_Utilities.icons["folder"]	               = {index:26,tooltip:""};
DWPE_Utilities.icons["go-up"]	               = {index:27,tooltip:"Go Up"};
DWPE_Utilities.icons["go-to-top"]	           = {index:28,tooltip:"Go to Top"};
DWPE_Utilities.icons["file"]	               = {index:29,tooltip:""};
DWPE_Utilities.icons["show-as-top"]	           = {index:30,tooltip:"Show as Top"};
DWPE_Utilities.icons["hierselector"]	       = {index:31,tooltip:"Show Hierarchy"};
DWPE_Utilities.icons["qbe"]	                   = {index:32,tooltip:"Query by Example"};
DWPE_Utilities.icons["lov"]	                   = {index:34,tooltip:"Choose..."};
DWPE_Utilities.icons["keyflex"]	               = {index:35,tooltip:""};
DWPE_Utilities.icons["details"]	               = {index:36,tooltip:""};
DWPE_Utilities.icons["date"]	               = {index:37,tooltip:"Select Date"};
DWPE_Utilities.icons["refresh"]	               = {index:38,tooltip:"Refresh"};
DWPE_Utilities.icons["uap"]	                   = {index:39,tooltip:""};
DWPE_Utilities.icons["closetab"]		= {index:252,tooltip:"Close"};
DWPE_Utilities.icons["choicelist"]		= {index:253,tooltip:""};
DWPE_Utilities.icons["help"]			= {index:254,tooltip:"Help"};
DWPE_Utilities.icons["person"]			= {index:255,tooltip:""};

//9x9 icons
DWPE_Utilities.icons["expanded-node"]	    = {index:189,tooltip:"", grid:9};
DWPE_Utilities.icons["collapsed-node"]		= {index:190,tooltip:"", grid:9};


//12x12 icons
DWPE_Utilities.icons["term-def"]	       = {index:132,tooltip:"%DEFINITION%", grid:12};
DWPE_Utilities.icons["updated-value"]	   = {index:133,tooltip:"Updated Value", grid:12};
DWPE_Utilities.icons["status-ok"]	       = {index:134,tooltip:"Ok status", grid:12};
DWPE_Utilities.icons["status-pending"]	   = {index:135,tooltip:"Pending status", grid:12};
DWPE_Utilities.icons["status-error"]	   = {index:136,tooltip:"Error status", grid:12};
DWPE_Utilities.icons["status-locked"]      = {index:137,tooltip:"Locked status", grid:12};
DWPE_Utilities.icons["status-not-started"] = {index:138,tooltip:"Not Started status", grid:12};
DWPE_Utilities.icons["status-unlocked"]	   = {index:139,tooltip:"Unlocked status", grid:12};
DWPE_Utilities.icons["status-warn"]	       = {index:140,tooltip:"Warning status", grid:12};
DWPE_Utilities.icons["prev-item"]	       = {index:141,tooltip:"Previous Item", grid:12};
DWPE_Utilities.icons["next-item"]	       = {index:142,tooltip:"Next Item", grid:12};
DWPE_Utilities.icons["requires-one"]	   = {index:144,tooltip:"At least one is required", grid:12};
DWPE_Utilities.icons["required"]		   = {index:145,tooltip:"Required", grid:12};
DWPE_Utilities.icons["not-required"]       = {index:999,tooltip:"",grid:0};





DWPE_Utilities.getIcon=function(iconName)
{
	var icon;
	try{
		icon= DWPE_Utilities.icons[ iconName.toLowerCase() ];
	} catch(e){icon={index:0};}
	
	var iconID=icon.index;
	
	var x = ((iconId % 32)  * -16 );
	var y = (parseInt(iconId / 32) * -16 );
	
	 return x+"px "+y+"px";
}

/*reverse lookup of iconName by iconIndex*/
DWPE_Utilities.getIconNameByIndex=function(iconIndex)
{
	var iconIndex;
	var iconName=null;
	
	for(var _name in DWPE_Utilities.icons)
	{
		var icon=DWPE_Utilities.icons[_name];
		if( icon.index==iconIndex)
		{	iconName=_name;
			break;	}
	}
	
	
	return (iconName)?iconName:"blank";
	
}


/*returns the key (name) for an icon, at random*/
DWPE_Utilities.getRandomIcon=function()
{
	var n=1+parseInt(Math.random()*36);
	
	var i=0;
	for(var argName in DWPE_Utilities.icons)
	{
		if(n==i++) return argName;
	}
	
	return 'blank';
}

/*returns the key (name) for an icon, at random*/
DWPE_Utilities.getRandomStatusIconMarkup=function()
{
	var n=134+parseInt(Math.random()*7);
	
	var i=0;
	var icon_name='blank'
	for(var argName in DWPE_Utilities.icons)
	{
		if(n==DWPE_Utilities.icons[argName].index) 
		{	icon_name=argName;
			break;	}
	}
	
	return DWPE_Utilities.getIconMarkup(icon_name);
}




DWPE_Utilities.getIconMarkup=function(iconName,extension,override_tooltip)
{
	/*resolve icon name to iconId
		if no iconId is found treat iconName as a background-image URL*/
	var icon=null;
	var iconId="";
	var style="";
		extension=(!extension)?"":extension;
	
	try{
		icon=DWPE_Utilities.icons[ iconName.toLowerCase() ];
		iconId= " ico-"+iconName;
	} 
	catch(e)
	{	iconId="";	}
	
	
	
	if(icon==null)
	{
		iconId=""; 
		return "<div class='icons " +iconId+ " " + extension + "' style='background-image:url("+iconName+")'></div>";
	}
	else
	{
		var tooltip=(override_tooltip && override_tooltip.length>0)?"":icon.tooltip;
	
		var markup= "<div class='icons "+iconId+ " " + extension + "' ";
			if(icon.tooltip.length>0)
				markup+=" title='"+tooltip+"' ";
			markup+="></div>";
			return markup;
	}

}



/*WARNING: comment this function before committing DWPE_Utilities to the repository
generates css for icon offsets by iconname and dumps it into console; copy this dump
to DWPE_Base.css 
$(function()
{
var str="";


for(var argName in DWPE_Utilities.icons)
{
	var icon=DWPE_Utilities.icons[argName];
	var grid=(icon.grid===undefined)?16:icon.grid;
	var i=icon.index;
	
	var x = ((i % grid)  * -grid );
	var y = (parseInt(i / grid) * -grid );

		x=isNaN(x)?0:x;
		y=isNaN(y)?0:y;
		

	
	str+=".i"+i+",.ico-"+argName+"{background-position:"+x+"px "+y+"px; width:"+grid+"px; height:"+grid+"px}\r\n";
}


console.log(str);
}); 
*/



/*shows a wait icon on top of the $callee icon -- for use when making ajax calls to retrieve content*/
DWPE_Utilities.showWaitIcon=function($callee)
{
	
	var $wait=$("<div class='wait'></div");
	var	L=$callee.offset().left - $callee.parent().offset().left;
	var	T=$callee.offset().top - $callee.parent().offset().top;
	
		$wait.css({top:T,left:L,"z-index":DWPE_WindowFactory.getNextZ()});
		$callee.parent().append($wait);
		return $wait;
}


DWPE_Utilities.makeJavascriptSafe=function(str)
{
	return str.replace(/'/g,'"');
			
}

DWPE_Utilities.get_Object_HTML_From_AJAX=function(data,type)
{
	//remove script and link tags
	data=data.replace(/<script.*?>[\s\S]*?<\/.*?script>/gi,"")
			 .replace(/<link[^>]>/gi,"");
			 
	//$html is the incoming html file which we wrap in a div so we can call jquery functions on it
	//$object is the full toolbar object with the ux tags wrapped around
	
	var $html=$("<div></div>").html(data);
		$object=$html.find(type);
		
		if($object.length>0)
			return $object.html();
		else
			return "Could not find component code!";
}


DWPE_Utilities.getSampleContent=function(length)
{
	switch(length)
	{
		case 'confirmation-dialog':
			return "The request was canceled.";
			break;
		
		case 'error-dialog':
			var str='<div><b>Messages for this page are listed below.</b></div>'+
					'<table>'+
						'<tr valign="top">'+
						'	<td rowspan="2"><a href="javascript:;">Field&nbsp;Name&nbsp;1</a></td>'+
						    '<td>'+DWPE_Utilities.getIconMarkup('error')+'</td>'+
							'<td>Text describing the <span style="color:  red; font-weight: bold;">error</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+
						'</tr>'+
						'<tr valign="top">'+
							'<td>'+DWPE_Utilities.getIconMarkup('warning')+'</td>'+
							'<td>Text describing the <span style="color:  rgb(255, 204, 51); font-weight: bold;">warning</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+
						'</tr>'+
						'<tr valign="top">'+
							'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;2</a></td>'+
							'<td>'+DWPE_Utilities.getIconMarkup('warning')+'</td>'+
							'<td>Text describing the <span style="color:   rgb(255, 204, 51); font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+
						'</tr>'+
						'<tr valign="top">'+
							'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;3</a></td>'+
							'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+
							'<td>Text describing the <span style="color:   blue; font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+
						'</tr>'+
				'</table>';
						
			return str;
			break;
		case 'warning-dialog':
			var str='You have not saved your changes. If you leave this page, then your changes will be lost. Do you want to continue?';	
						
			return str;
			break;
			
		case 'info-dialog':
			var str='<div><b>Messages for this page are listed below.</b></div>'+
				'<table>'+
						'<tr valign="top">'+
						'	<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;1</a></td>'+
						    '<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+
							'<td>Text describing the <span style="color: blue; font-weight: bold;">warning</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+
						'</tr>'+
						'<tr valign="top">'+
							'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;2</a></td>'+
							'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+
							'<td>Text describing the <span style="color:  blue; font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+
						'</tr>'+
				'</table>';	
						
			return str;
			break;	
		case 'long':
			var str="";
			for(var i=0;i<6;i++)
			{	str+=DWPE_Utilities.getLoremIpsum();	}
			return str;
			break;
		
		case 'medium':
			var str="";
			for(var i=0;i<3;i++)
			{	str+=DWPE_Utilities.getLoremIpsum();	}
			return str;
			break;
		case 'short':
		default:
			return DWPE_Utilities.getLoremIpsum();
			break;		
	
	
	}

}


DWPE_Utilities.getLoremIpsum=function()
{
	return '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem illo inventore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>';
}


DWPE_Utilities.triggerResize=function()
{
	$(window).trigger('resize');
	
}

DWPE_Utilities.componentResizeThrottle=null;
DWPE_Utilities.triggerComponentResize=function()
{
	//should eventually pass in parent, so we can test containment before each component commits to processing resize
	
	/*if we don't already have a resize reqeust in queue, create one, otherwise let the current request fire when ready;
	  this effectively throttles calls to resize to no more than once every 250 ms
	*/
	if(DWPE_Utilities.componentResizeThrottle==null)
	{	DWPE_Utilities.componentResizeThrottle=
			setTimeout
			(
				function()
				{
					$(window).trigger('dwpe-component-resize');
					DWPE_Utilities.componentResizeThrottle=null;
				},
				
				250 //ms
			);
	}
}




