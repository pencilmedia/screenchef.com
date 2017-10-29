/*DWPE_WindowFactory_Class.js*/




/*Set the class that our class will inherit from*/
DWPE_WindowFactory_Class.prototype=new DWPE_BaseFactory_Class();

/*Set and Define our own class constructor*/
DWPE_WindowFactory_Class.constructor=DWPE_WindowFactory_Class;
DWPE_WindowFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;
function DWPE_WindowFactory_Class()
{
	this._class="DWPE_WindowFactory_Class";
	
	
	//setup live() methods
	
	//make all window containers draggable via their top titlebar, now and forever
	$(".dwpe-window-container>DIV.window>DIV.top").live('mouseover',
		function(){
				
				var $win_title=$(this);
				
				
				if (!$win_title.data("init")) 
				{
                	$win_title.data("init", true);
                	
                	var $win_container=$win_title.closest('.dwpe-window-container');
                	
                	var $win;
                	
                	
                	if($win_container.hasClass("modal"))
                	{	
                		//we are modal so the shadow layer becomes the fixed position modal layer shield
                		$win=$win_container.find(">DIV.window");
                	}
                	else
                	{	
                		//we are modeless so the shadow layer moves with our window
                		$win=$win_container;
                	}
                	
                	$win.draggable(	{
										cursor:"move",
										containment:'parent',
										handle:$win_title,
										start:function(event,ui)
										{
											//var $win=$(this);
											$win_container.css('z-index',DWPE_WindowFactory.getNextZ());
											$(":input").trigger('blur');
										},
										stop:function()
										{
											//var $win=$(this);
											//var oldZ=$win.data('oldZ');
											
										
											//$win.css('z-index',oldZ);
										}
										
									});
                }
		
				return false;
		});
		
		
	//clicking anywhere on a window container brings it to top	
	$(".dwpe-window-container").live('mousedown',
	
		function()
		{
			//bring to front
			var $win=$(this);
            $win.css('z-index',DWPE_WindowFactory.getNextZ());
            $(":input").trigger('blur');
            
            //return false;
		}
	);

	
	
	/*clicking on an element whose class includes open-window opens 
	 a window whose content comes from the specified url*/
	$(".open-window").live('mouseup',
		function(event,ui)
		{
				DWPE_WindowFactory.open(this,$(this).attr('url'));
				event.preventDefault();
				$(":input,a").trigger('blur');
				return false;
		}
	);
	
	/*clicking on an element whose class includes close-window closes 
	 the window that is parent to that element*/
	$(".close-window").live('click',
		function(event,ui)
		{
				
				var $btn=$(this);
				
				$(":input,a").trigger('blur');
				var $win=$btn.closest('.dwpe-window-container');
				$win.remove();
				
				return false;
		}
	);
	

	
	//create live() methods for menu behavior
	
	
	$(document).bind('contextmenu',function(){return false;})
	
	
	//fetch a context menu
	$(".context-menu").live('mouseup',
	
	
		function(event)
		{
			var $callee=$(this);
			if($callee.data('context-menu-open')) return;
			if(event.which===1) return true; //ignore mouse left clicks
		
			$callee.data('context-menu-open',true);
			
			var x=event.clientX+$(document).scrollLeft();
			var y=event.clientY+$(document).scrollTop();
		
			var menu_url=$callee.attr('menu');
			
			if(!$callee.data('menu'))
			{	
				$.ajax(	{	url:menu_url,
							cache:false,			//always get a fresh copy of the content 
							//async:false,			//always wait for the content to arrive
							success:function(data)
							{
								//$wait.remove();
								var $_callee=$callee;
								var $menu=DWPE_WindowFactory.initializeContextMenu(data,$callee,x,y);
									
									//we write our handler to execute once then unbind itself
									//the handler closes the window when a mouseup occurs
									var handler=function(event){$menu.hide(); $_callee.data('context-menu-open',false);  $(this).unbind(event);};
									$('body').bind('mousedown', handler );
									
								
								
							}
									
						} );
			}
			else
			{
				var $menu = $callee.data("menu");
				$('body').append($menu)
				
				//we write our handler to execute once then unbind itself
				//the handler closes the window when a mouseup occurs
				var handler=function(event){$menu.hide(); $callee.data('context-menu-open',false); $(this).unbind(event);};
				$('body').bind('mouseup', handler );
				
				$menu.css({top:y,left:x,"z-index":DWPE_WindowFactory.getNextZ() });
				$menu.show();
				
			
			}
					
					
			return false;		
			
		}
	
	);
	
	
	
	//initialize a menu on first rollover
/*	$("UX.dwpe-menu").live('mouseover',
							
							function(event,ui)
							{
								var $ux=$(this);
								
								if($ux.hasClass('context'))return;
								
								if(!$ux.data('menu-initialized'))
									DWPE_WindowFactory.initializeMenu( $ux )
								return false;
							});
*/							
	
	/*manages the click on menu items*/
	$(".dwpe-menu LI, UL.DWPE_Window_Body LI").live('click',
							
							function(event,ui)
							{
								
								var $item=$(this);
								
								var $parent=$item.closest("UL");
								
								if($item.hasClass('disabled')) return;
								
								if($item.hasClass('radio'))
								{
									/*find the parent of this LI, then find all LIs that match this LIs group*/
									$parent.find(">LI.radio[group='"+$item.attr('group')+"']").each
									(
									
										function(i)
										{
										
											var $LI=$(this);
											
											if($item[0]==$LI[0])
											{
												$LI.addClass('on');
											}
											else
											{
												$LI.removeClass('on');
											}
										
										});
								}									
								else if($item.hasClass('toggle'))
								{
									/*manages the state of check menus*/
									$item.toggleClass('on');
								}
								else if($item.hasClass('menu-scroll'))
								{
									/*manages menu scrolling*/
								
									var $parent=$item.closest("UL");
									var $items=$parent.data('menu-items');
									var numItems=$items.length;
									var first_index=$parent.data('first_index');
									var last_index=first_index+DWPE_WindowFactory.menuScrollThreshold;
									var $up=$parent.data("up");
									var $dwn=$parent.data("down");
									
								
									if($item.hasClass('up') && first_index>0) 
									{
										first_index-=1;
										last_index-=1;
									}
									else if($item.hasClass('down') && last_index<numItems) 
									{
										first_index+=1;
										last_index+=1;
									}
								
									$items.each(
										
										function(i)
										{
											if(i>=first_index && i<last_index)
												$(this).show();
											else
												$(this).hide();
										}
									
									);
									
									
									
									
									if(first_index<=0)
										$up.removeClass('enabled');
										
									else
										$up.addClass('enabled');
										
									if(last_index>=numItems-1)
										$dwn.removeClass('enabled');
									else
										$dwn.addClass('enabled');
									
									
									$parent.data('first_index',first_index);
										
									
									return false;
								
								}
								
								
								
								
								
								
								
								
								
								//perform action, if one is defined
								var cmd=$item.attr('cmd');
								
								
								if(cmd)
								{
									var action=cmd.split("::");
									switch(action[0].toLowerCase())
									{	
										case "js":
											
											var command=action[1];
										
											
											if(DWPE_Utilities.isDisabled($item)) break; //don't execute if callee is disabled
											
											
											
											try{
												$(document).data('context',$item);
												eval(command);
												}
											catch(e){alert("error in command format");}
											
											break;
										case "url":
											
											document.location=action[1];
											
											break;
										default:
											break;
									}
										
										
									
								}
								
								
								
								if(!$item.hasClass("top-level-parent"))
								{	$parent.trigger('mouseout');	
									$parent.closest('ux').data('show-menus',false);
								}
								
								
								return false;	
								
							});




	
	return this;	

}

/*Make an Instance of Window Factory that others can call on to create windows*/
DWPE_WindowFactory=new DWPE_WindowFactory_Class();


/*menuScrollThreshold: The number of menu items shown before scroll icons are presented*/
DWPE_WindowFactory_Class.prototype.menuScrollThreshold=14;



/*clicking on an element whose class includes open-window opens 
	 a window whose content comes from the specified url*/
DWPE_WindowFactory_Class.prototype.openWindow=function(btn)
{
	var $btn=$(document).data('context');
	DWPE_WindowFactory.open($btn,$btn.attr('url'));
	event.preventDefault();
	$(":input,a").trigger('blur');
	
	
	return false;
}

	
/*clicking on an element whose class includes close-window closes 
 the window that is parent to that element*/
DWPE_WindowFactory_Class.prototype.closeWindow=function()	 
{
				
	var $btn=$(document).data('context');
	$(":input,a").trigger('blur');
	var $win=$btn.closest('.dwpe-window-container');
	$win.remove();
	
	return false;
}


/*overrides DWPE_Base_Class.update()*/
DWPE_WindowFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}




DWPE_WindowFactory_Class.prototype.make=function($ux)
{
	
	
	var _class=this.getRootClass($ux.attr("class"));
	
	switch(_class)
		{
			case 'dwpe-menu':
				this.loadMenu($ux);
				break;
			case "dwpe-window-container":
				break;
		}
	
}


DWPE_WindowFactory_Class.prototype.generateMarkup=function(args)
{
	
	switch(args.type.toLowerCase())
		{
			case "info-dialog":
				return this.generateInfoDialogMarkup(args);
				break;
			case "warning-dialog":
				return this.generateWarningDialogMarkup(args);
				break;
			case "error-dialog":
				return this.generateErrorDialogMarkup(args);
				break;
			case "confirm-dialog":
				return this.generateConfirmationDialogMarkup(args);
				break;	
			case "dialog":
				return this.generateDialogMarkup(args);
				break;
			case "menu":
				return this.generateMenuMarkup(args);
				break;
			default:
				return "[undefined window or menu type]";	
				break;
		}
	
}



DWPE_WindowFactory_Class.prototype.formatMessage=function(icon,summary,detail)
{
	return "<table><tr><td>"+icon+"</td><td><b>"+summary+"</b></td></tr><tr><td></td><td>"+detail+"</td></tr></table>";

}
DWPE_WindowFactory_Class.prototype.formatInfieldHelp=function(help)
{
	return "<table><tr><td><b>"+help+"</b></td></tr></table>";

}


DWPE_WindowFactory_Class.prototype.noteWindowTemplate=function()
{

	var markup="";
	
	markup+="<ux:dialogs class='dwpe-note-window-container note-anchored'>";
	
	markup+="<div class='cone left'></div>"
	
	markup+="<div class='window note'>";

	markup+="<div class='middle WindowRegion'>";
	
	markup+="%CONTENT%";
	
	markup+="</div>";
	
	markup+="</div>";
	
	markup+="<div class='cone right'></div>"
	
	markup+="</ux:dialogs>";
	
	
	
	return markup;


}


DWPE_WindowFactory_Class.prototype.dialogTemplate=function()
{

	var markup="";
	
	markup+="<ux:dialogs class='dwpe-window-container also-resize %POSITION%  %MODE%' width='%WIDTH%' height='%HEIGHT%'>";
	
	markup+="\r\t<div class='window %TYPE% %RESIZABLE%'>";
	
	markup+="\r\t<div class='top'>";
	markup+="\r\t\t<div class='left'>";
	
	markup+="\r\t\t\t %ICON% %TITLE%";
	
	
	markup+="</div>";
	markup+="\r\t\t<div class='right'>";
	
	markup+=DWPE_Utilities.getIconMarkup('help','');
	markup+="&nbsp;"
	markup+=DWPE_Utilities.getIconMarkup('closetab','close-window');
	
	
	
	markup+="\r\t\t</div>";
	
	
	markup+="\r\t\t</div>";
	
	markup+="\r\t<div class='middle also-resize WindowRegion'>";
	
	markup+="\r\t\t\t %CONTENT%";
	
	markup+="\r\t</div>";
	
	
	markup+="\r\t<div class='bottom'>";
	
	markup+="\r\t\t<div class='left'>";
	markup+="\r\t\t</div>";
	
	markup+="\r\t\t<div class='right'>";
	
	markup+="%BUTTON-1%";
	
	markup+="%BUTTON-2%";
	
	markup+="%RESIZER%";
	
	markup+="\r\t\t</div>";
	
	
	markup+="\r\t</div>";
	markup+="\r\t</div>";
	
	markup+="\r</ux:dialogs>";
	
	
	
	return markup;


}


DWPE_WindowFactory_Class.prototype.messageListTemplate=function()
{

	var markup="";
	
	markup+="<ux:dialogs class='dwpe-window-container also-resize %POSITION%  %MODE%' width='%WIDTH%' height='%HEIGHT%'>";
	
	markup+="\r\t<div class='window %TYPE% %RESIZABLE%'>";
	
	markup+="\r\t<div class='top'>";
	markup+="\r\t\t<div class='left'>";
	
	markup+="\r\t\t\t %ICON% %TITLE%";
	
	
	markup+="</div>";
	markup+="\r\t\t<div class='right'>";
	
	markup+=DWPE_Utilities.getIconMarkup('closetab','close-window');
	
	
	
	markup+="\r\t\t</div>";
	
	
	markup+="\r\t\t</div>";
	
	markup+="\r\t<div class='middle also-resize WindowRegion'>";
	
	markup+="\r\t\t\t %CONTENT%";
	
	markup+="\r\t</div>";
	
	
	markup+="\r\t<div class='bottom'>";
	
	markup+="\r\t\t<div class='left'>";
	markup+="\r\t\t</div>";
	
	markup+="\r\t\t<div class='right'>";
	
	markup+="%BUTTON-1%";
	
	markup+="%BUTTON-2%";
	
	markup+="%RESIZER%";
	
	markup+="\r\t\t</div>";
	
	
	markup+="\r\t</div>";
	markup+="\r\t</div>";
	
	markup+="\r</ux:dialogs>";
	
	
	
	return markup;


}


DWPE_WindowFactory_Class.prototype.generateDialogMarkup=function(args)
{

	var markup=this.dialogTemplate();
	
	
		markup=
		markup.replace('%TYPE%',args.type)
			  .replace('%RESIZABLE%',args.resizable)
			  .replace('%POSITION%',args.position)
			  .replace('%TITLE%',args.title)
			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('short'))
			  .replace('%ICON%',"")
			  .replace('%WIDTH%',args.width)
			  .replace('%HEIGHT%',args.height)
			  .replace('%MODE%',args.mode);
			  
			  
	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
	
		btn.label="OK";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));
		
		
		btn.label="Cancel";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));
		

	if(args.resizable=="resizable")
		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");
	else
		markup=markup.replace('%RESIZER%',"");
		
	
	return markup;


}

DWPE_WindowFactory_Class.prototype.generateConfirmationDialogMarkup=function(args)
{

	var markup=this.messageListTemplate();
	
		markup=
		markup.replace('%TYPE%',args.type)
			  .replace('%RESIZABLE%',args.resizable)
			  .replace('%POSITION%',args.position)
			  .replace('%TITLE%', "Confirmation")
			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('confirmation-dialog'))
			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('confirm'))
			  .replace('%WIDTH%',args.width)
			  .replace('%HEIGHT%',args.height)
			  .replace('%MODE%',args.mode);
			  
			  
	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
	
		btn.label="OK";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));
		
		
		btn.label="Cancel";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-2%','');
		

	if(args.resizable=="resizable")
		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");
	else
		markup=markup.replace('%RESIZER%',"");
		
	
	return markup;


}

DWPE_WindowFactory_Class.prototype.generateInfoDialogMarkup=function(args)
{

	var markup=this.messageListTemplate();
	
		markup=
		markup.replace('%TYPE%',args.type)
			  .replace('%RESIZABLE%',args.resizable)
			  .replace('%POSITION%',args.position)
			  .replace('%TITLE%', "Info")
			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('info-dialog'))
			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('info'))
			  .replace('%WIDTH%',args.width)
			  .replace('%HEIGHT%',args.height)
			  .replace('%MODE%',args.mode);
			  
	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
	
		btn.label="OK";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));
		
		
		btn.label="Cancel";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-2%',"");
		

	if(args.resizable=="resizable")
		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");
	else
		markup=markup.replace('%RESIZER%',"");
		
	
	
	return markup;


}

DWPE_WindowFactory_Class.prototype.generateWarningDialogMarkup=function(args)
{

	var markup=this.messageListTemplate();
	
		markup=
		markup.replace('%TYPE%',args.type)
			  .replace('%RESIZABLE%',args.resizable)
			  .replace('%POSITION%',args.position)
			  .replace('%TITLE%',"Warning")
			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('warning-dialog'))
			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('warning'))
			  .replace('%WIDTH%',args.width)
			  .replace('%HEIGHT%',args.height)
			  .replace('%MODE%',args.mode);
			  
	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
	
		btn.label="Yes";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));
		
		
		btn.label="No";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));
		

	if(args.resizable=="resizable")
		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");
	else
		markup=markup.replace('%RESIZER%',"");
		
	
	
	return markup;


}

DWPE_WindowFactory_Class.prototype.generateErrorDialogMarkup=function(args)
{

	var markup=this.messageListTemplate();
	
	
		markup=
		markup.replace('%TYPE%',args.type)
			  .replace('%RESIZABLE%',args.resizable)
			  .replace('%POSITION%',args.position)
			  .replace('%TITLE%', "Error")
			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('error-dialog'))
			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('error'))
			  .replace('%WIDTH%',args.width)
			  .replace('%HEIGHT%',args.height)
			  .replace('%MODE%',args.mode);
			  
	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
	
		btn.label="OK";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));
		
		
		btn.label="Cancel";
		btn.command="js::DWPE_WindowFactory.closeWindow()";
		markup=markup.replace('%BUTTON-2%',"");
		

	if(args.resizable=="resizable")
		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");
	else
		markup=markup.replace('%RESIZER%',"");
		
	
	
	return markup;


}

DWPE_WindowFactory_Class.prototype.generateMenuMarkup=function(args)
{
	var markup = "";
	
	markup+='<ux:menus class="dwpe-menu">\r\n';
	markup+="	<ul>\r\n";  
	
	for(var i in args.items)
	{
		var item=args.items[i];
		
		markup+=this.generateMenuItemMarkup(item , level=1);	
		
	}
	markup+="	</ul>\r\n";
	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
	markup+="</ux:menus>\r\n";
	
	return markup;
}

DWPE_WindowFactory_Class.prototype.generateMenuItemMarkup=function(item,level)
{
	var markup = "";
	var indent="";
	
		for (var c=0;c<level;c++)
		{	indent+="\t";	}
	
		markup+=indent+"<li";
		
		var _class=(item.itemtype!="normal") 
		?	" "+item.itemtype+" "
		:	"";
		
		
		_class+=(item.selected) 
		?	" "+item.selected+" "
		:	"";
		
		_class+=(item.state) 
		?	" "+item.state+" "
		:	"";
		
		_class=(_class.length>0)
		?" class='"+_class+"'"
		:"";
		
		var group=(item.group) 
		?	' group="'+item.group+'"'
		:	'';
		
		var command=(item.command) 
		?	' cmd="'+item.command+'"'
		:	'';
		
		var tooltip=(item.tooltip) 
		?	' title="'+item.tooltip+'"'
		:	'';
		
		markup+=_class+group+command+tooltip+">";
		
		
		switch(item.itemtype)
		{
			case 'separator':
				markup+="<hr>"
				break;
			default:
				markup+=item.label;
				if(item.key && item.key.length>0)
					markup+="<key>"+item.key+"</key>";
				break;
				
		}
		
		
		if(item.items && item.items.length>0)
		{
			markup+="\r"+indent+"\t<ul>\r\n";  
	
			for(var i in item.items)
			{
				var child_item=item.items[i];
				
				markup+=this.generateMenuItemMarkup(child_item,level+2);	
				
			}
			markup+=indent+"\t</ul>\r\n"+indent;
		}
		
		markup+="</li>\r\n";
	
	return markup;
}







DWPE_WindowFactory_Class.prototype.z=9999;
DWPE_WindowFactory_Class.prototype.getNextZ=function()
{
	return this.z++;
}



/*open a new window with remote content*/
DWPE_WindowFactory_Class.prototype.open=function(_callee,_url)
{

	
	var $callee=$(_callee);
	var $wait=DWPE_Utilities.showWaitIcon($callee);
	
	
	$.ajax(	{	url:_url,
				cache:false,			//always get a fresh copy of the content 
				//async:false,			//always wait for the content to arrive
				success:function(data)
				{
					$wait.remove();
					DWPE_WindowFactory.processWindowMarkup(data,$callee);
				}
						
		    } );
	
}


/*open a note window*/
DWPE_WindowFactory_Class.prototype.openNoteWindow=function(_caller,type,content)
{

		
	var $caller=$(_caller);
	var note_markup=this.noteWindowTemplate();
		content=(!content || content.length==0)?"Note window message":content;
		note_markup=note_markup.replace("%CONTENT%",content);
		
		
	
	var $win=$(note_markup);
	
		//set z-order
		$win.css('z-index',DWPE_WindowFactory.getNextZ());
		
		//add to DOM
		//we attach to #preview only for testing...in production we'd attach to body
		//$("#preview").append($win);
		$("body").append($win);
		
		
		var L=0;
		var T=0;
		
		//Get screen dimensions
		var pW = ($win.parent() === $('body'))?$win.parent().width():$win.parent().outerWidth()-2;  
		var pH = ($win.parent() === $('body'))?$win.parent().height():$win.parent().outerHeight()-2;
		
		//get window dimensions
		var wW = $win.width();
		var wH = $win.height();
		
		
		//set position of note window relative to callee
		var caller_left=$caller.offset().left - $win.parent().offset().left;
		var caller_top=$caller.offset().top - $win.parent().offset().top;
		var x_pos="";
		var y_pos="";
		
		//anchor top right by default
		L=caller_left+$caller.width()+5;
		T=caller_top-wH-5;
		x_pos="right";
		y_pos="top";
		
		//no room to the right, position left of caller if possible
		if(L+wW>pW && caller_left-wW-5>0)
		{
			x_pos="left";
			L=caller_left-wW+13;
		}
		
		//no room above, position below caller if possible
		if(T<0)
		{
			y_pos="bottom";
			T=caller_top+$caller.height();
		}
		
		
		
		//add class to window to set cone orientation
		$win.addClass('cone-points-'+y_pos+'-'+x_pos);
		
		//apply window position and animate its reveal
		$win.css({left:L+"px",top:T+"px"});
		
		//process markup of $ux tags
		DWPE_ObjectFactory.processFragment($win);


		return $win;
	
	

	
}



/*gives the passed in window all of its native behaviors*/
DWPE_WindowFactory_Class.prototype.processWindowMarkup=function(markup,$callee)
{


		var $win=$(markup);
	
		var w=$win.attr("width");
		var h=$win.attr("height");
		
		if(w)	$win.find('div.window').width(w);
		if(h)	$win.find('div.middle').height(h);
			
		
	
						
		//set z-order
		$win.css('z-index',DWPE_WindowFactory.getNextZ());
		
		//add to DOM
		//we attach to #preview only for testing...in production we'd attach to body
		//$("#preview").append($win);
		$("body").append($win);
		
		
		var L=0;
		var T=0;
		
		//Get the screen height and width  
		var pW = ($win.parent() === $('body'))?$win.parent().width():$win.parent().outerWidth()-2;  
		var pH = ($win.parent() === $('body'))?$win.parent().height():$win.parent().outerHeight()-2;
		
		
		
		
		//set position
		if($win.hasClass('centered') || $win.hasClass('modal'))
		{
			 //center window
			 L=(pW-$win.width())/2;
			 T=(pH-$win.height())/2;
		} 
		else if($win.hasClass('anchored'))
		{
			//bl
			L=$callee.offset().left - $win.parent().offset().left;
			T=$callee.offset().top - $win.parent().offset().top;
			T+=$callee.height();
			
			//br
			if(L+$win.width()>pW)
				L=L+$callee.width()-$win.width();
			
			//tl or tr
			if(T+$win.height()>pH && T-$callee.height()-$win.height()>0)
				T=T-$callee.height()-$win.height();
			
			//shrink window
			
		}
		
		
		
		//enable resizable
		var $win_box=$win.find(">DIV.window");
		if($win_box.hasClass('resizable') && !$win_box.data("resize-init"))
		{
			
			$win_box.data("resize-init", true);
			$win_box.resizable({
									handles:'se',
									minWidth:225,
									minHeight:175,
									maxWidth:pW*.6,
									maxHeight:pH*.6,
									alsoResize: $win.closest('.dwpe-window-container').find('.also-resize')
								
								});
		}
		
		
		if($win.hasClass('modal'))
		{	//we are modal so the window shadow becomes the modal layer mask
			//force the mask to be as large as the parent (presumably that's the document)
			
			//Set height and width of mask to fill up the whole screen  
		   $win.css({	'width': pW,
						'height':pH});
			
		   //now find the window object inside our mask -- that will be the draggable window	
		   $win=$win.find(">DIV.window");
		   
		  
		} 
		
		
		
		//apply window position and animate its reveal
		$win.css({left:L+"px",top:T+"px"});
		
		$win.hide();
		
		$win.animate({height:'show',width:'show'},250);
		
		DWPE_ObjectFactory.processFragment($win);


		return $win;
}


DWPE_WindowFactory_Class.prototype.loadMenu=function($ux)
{
	
	if($ux.hasClass('context')) return;
	
	if($ux.data('menu-initialized')==true) return;
	
	
	
	$ux.data('menu-initialized',true);
	var menu_url=$ux.attr('url');
	
	
	
	if(menu_url)
	{
		//load menu then initialize	
		$.ajax(	{	url:menu_url,
						cache:false,			//always get a fresh copy of the content 
						//async:false,			//always wait for the content to arrive
						success:function(data)
						{
							
							var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,".dwpe-menu");
							
							$ux.html(html);
							DWPE_WindowFactory.initializeMenu($ux);
							
						},
						error:function(XMLHttpRequest, textStatus, errorThrown)
						{
							$ux.html('Could not find: "'+menu_url+'"');
						}
								
					} );
	}
	else
	{	
		//menu loaded inline, just initialize
		DWPE_WindowFactory.initializeMenu($ux);
		
		
	}
	
	
}



/*initializes a menu with all its behaviors the first time the user rolls over the element*/
DWPE_WindowFactory_Class.prototype.initializeMenu=function($ux)
{
	
	//evaluate dynamic content
	$ux.find('DIV.dynamic-content').each(
		function()
		{	
			DWPE_Utilities.exec(this);
		}
	);
	
	//find the UL inside our $ux
	var $mainmenu=$ux.find(">UL"); 
	
	
	//find the parents of all the ULs
	var $headers=$mainmenu.find("UL").parent();

	
	$headers.each(
	
		function(i)
		{ 
			var $_ux=$ux;
			
			
			
			
			//loop through each LI header
			var $item=$(this);
			
			if($item.hasClass('separator')) return;
			if($item.hasClass('disabled')) return;
			
			
			
			 //reference current LI header
			
			
			var $submenu=$item.find('ul:eq(0)')
							  .css({display:'block'});
			
			//insert before every ul a shadow div
			var $shadow=$("<div class='menu-shadow'></div>");
			$submenu.before($shadow);
			
			
			var $dim={	w:$item.outerWidth(true), 
						h:$item.outerHeight(true), 
						submenuW:$submenu.outerWidth(true), 
						submenuH:$submenu.outerHeight(true)
					};
			
			
			$submenu.data('timers', {});
			
			
			
			$item.data('dimensions',$dim);
				
			var isTopHeader=$item.parents("ul").length==1;
			
			$item.data('istopheader', isTopHeader);
			
			$submenu.css('top',isTopHeader?$dim.h:0); 
			
			$item.addClass(  isTopHeader? 
							'top-level-parent' : 
							'second-level-parent');
			
			if(isTopHeader)
			{
				//we must click to open the first top-level menu; thereafter menus are revealed via rollover
				$item.click(
					
					function()
					{
						/*we allow users to traverse menus on rollover after the first click;
							we permit this up until the next click
						*/
						
						var $__ux=$_ux;
						
						if( $_ux.data('show-menus')===undefined || $_ux.data('show-menus')==false)
						{
							$_ux.data('show-menus',true);
							
							//we write our handler to execute once then unbind itself
							var handler=function(event){$__ux.data('show-menus',false);  $(this).unbind(event);};
							$('body').bind('mousedown', handler )
							$item.trigger('mouseover');
							
						}
						else
						{
							$_ux.data('show-menus',false);
							$item.trigger('mouseout');
						}
						
					}
				
				);
			
			}	
			else
			//if we are not a top level menu then when our item is rolled over we mark it as selected			
			
			{
					$item.hover(
						function(e)
						{
							$(this).addClass('selected');
						},
						function(e)
						{
							$(this).removeClass('selected');
						}
						
					
					
					);
					
					var $parent=$item.find(">UL");
					var $children=$parent.find(">LI");
					if ($children.length>DWPE_WindowFactory.menuScrollThreshold)
					{
						var $up=$("<li class='menu-scroll up'><div></div></li>");
						$up.insertBefore($children[0]);
						
						var $down=$("<li class='menu-scroll down enabled'><div></div></li>");
						$down.insertAfter($children[$children.length-1]);
						
						$children.each(
						
						function(i)
						{
							if(i<DWPE_WindowFactory.menuScrollThreshold)
							{
								$(this).show();
							}
							else
							{
								$(this).hide();
							
							}
						}
						
						);
						
						
						$parent.data('first_index',0);
						$parent.data('menu-items',$children);
						$parent.data('up',$up);
						$parent.data('down',$down);
						
						
						
						
					}
				

			}
			
			
			
			var show_delay=200;
			var hide_delay=200;
			
			var anim_time=0;
			
			$item.hover(
				
				//enter
				function(e)
				{
					//if a top-level menu item has not been clicked yet, don't show menus
					if(!$_ux.data('show-menus')) return;
					
					//submenu to reveal
					var $_submenu=$submenu;
					var $_shadow=$shadow;
					
					
					
					$_submenu.find("LI").each(
						
						function()
						{
							if(!$(this).attr('title'))
							{	$(this).attr('title',' ');	}
						}
					)
				
					
					
					//reference header LI as DOM object
					var $_item=$item;
					
					if($_submenu.data("menu-items"))
					{
					
						$_submenu.data("menu-items").each(
					
							function(i)
							{
								
								var $menu_item=$(this);
								if(i<DWPE_WindowFactory.menuScrollThreshold)
								{
									$menu_item.show();
								}
								else
								{
									$menu_item.hide();
								
								}
							}
						
						);	
					}
					
					clearTimeout($_submenu.data('timers').hidetimer);
					
					$_submenu.data('timers').showtimer=setTimeout(
						function()
						{
							var dimensions=$_item.data("dimensions");
							var isTopHeader=$_item.data('istopheader');
							
							$_submenu.show();
							var menu_width=$_submenu.width();
							var menu_height=$_submenu.height();
							
							$_submenu.hide();
							
							var offsets=$_item.offset(); //{left:$_item.offset().left, top:$_item.offset().top};
							
							//$_item.data('offsets', offsets );
							
							var menuleft=(isTopHeader==true)? 0 : $_item.outerWidth();
							var menu_top=(isTopHeader==true)? $_item.height() : $_item.position().top;
							
							
							if( offsets.left+menuleft+dimensions.submenuW>$(window).width())   //calculate this sub menu's offsets from its parent
								menuleft=(isTopheader)? -dimensions.submenuW+dimensions.w : -dimensions.w;
							
							
							var z1=DWPE_WindowFactory.getNextZ();
							var z2=DWPE_WindowFactory.getNextZ();
							
							
							
							if ($_submenu.queue().length<1)
							{ //if 1 or less queued animations
								
								$_submenu.css({	left:menuleft+"px",
												width:menu_width+'px',
												top:menu_top+"px",
												zIndex: z2,
												visibility:'visible'})
										 .animate({width:'show',height:'show'}, anim_time,
										 
										 function(){
														$shadow.css('visibility','visible');
														$shadow.show();}
										 
										 );
								
								$_shadow.css({	left:menuleft+"px",
												width:menu_width+'px',
												top:menu_top+"px",
												zIndex: z1,
												height:menu_height+"px"});
							
							}
							
							
						}, show_delay  );
				},
				//leave
				function(e)
				{
					
					var $_submenu=$submenu
					var $_shadow=$shadow;
					
					
					
					//var header=$item.get(0);
					
					clearTimeout($submenu.data('timers').showtimer)
					
					$_submenu.data('timers').hidetimer=setTimeout
					(	function()
						{
							$_submenu.animate({width:'hide',height:'hide'},anim_time); 
							$_shadow.animate({width:'hide',height:'hide'},anim_time); 
							
							
							
					}, hide_delay );
					
					//if submenu scrolls, reset the scroll state when we leave
					$_submenu.data('first_index',0);
					if($_submenu.data('up'))
						$_submenu.data('up').removeClass('enabled');
					if($_submenu.data('down') )
						$_submenu.data('down').addClass('enabled');
					
				}
			) //end hover
		}) //end $headers.each()
	
	
	//set menu as initialized
	$ux.data('menu-initialized',true);
	
	
} //end function	
	
		


/*initializes a context menu with all its behaviors*/
DWPE_WindowFactory_Class.prototype.initializeContextMenu=function(markup,$ux,x,y)
{
	
	var $menu=$(markup);
	
	//find the parents of all the ULs
	var $headers=$menu.find("LI UL").parent();



	//position menu
	$menu.css({top:y,left:x,"z-index":DWPE_WindowFactory.getNextZ()});
	$('body').append($menu);
	

	
	
	
	
	$headers.each(
	
		function(i)
		{ 
			//var $_ux=$ux;
			
			//loop through each LI header
			var $item=$(this);
			
			if($item.hasClass('separator')) return;
			if($item.hasClass('disabled')) return;
			
			
			
			$item.css({zIndex: DWPE_WindowFactory.getNextZ()}) //reference current LI header
			
			
			var $submenu=$item.find('ul:eq(0)')
							  .css({display:'block'});
			
			//insert before every ul a shadow div
			var $shadow=$("<div class='menu-shadow'></div>");
			$submenu.before($shadow);
			
			
			
			var $dim={	w:$item.outerWidth(true), 
						h:$item.outerHeight(true), 
						submenuW:$submenu.outerWidth(true), 
						submenuH:$submenu.outerHeight(true)
					};
			
			
			$submenu.data('timers', {});
			
			
			
			$item.data('dimensions',$dim);
				
			$item.addClass('second-level-parent');
			
			
			$item.hover(
				function(e)
				{
					$(this).addClass('selected');
				},
				function(e)
				{
					$(this).removeClass('selected');
				}
				
			
			
			);
			
			var $parent=$item.find(">UL");
			var $children=$parent.find(">LI");
			if ($children.length>DWPE_WindowFactory.menuScrollThreshold)
			{
				var $up=$("<li class='menu-scroll up'><div></div></li>");
				$up.insertBefore($children[0]);
				
				var $down=$("<li class='menu-scroll down enabled'><div></div></li>");
				$down.insertAfter($children[$children.length-1]);
				
				$children.each(
				
				function(i)
				{
					if(i<DWPE_WindowFactory.menuScrollThreshold)
					{
						$(this).show();
					}
					else
					{
						$(this).hide();
					
					}
				}
				
				);
				
				
				$parent.data('first_index',0);
				$parent.data('menu-items',$children);
				$parent.data('up',$up);
				$parent.data('down',$down);
				
				
				
				
			}
		

			
			
			
			
			var show_delay=200;
			var hide_delay=200;
			
			var anim_time=0;
			
			$item.hover(
				
				//enter
				function(e)
				{
					//submenu to reveal
					var $_submenu=$submenu;
					var $_shadow=$shadow;
					
					
					
					$_submenu.find("LI").each(
						
						function()
						{
							if(!$(this).attr('title'))
							{	$(this).attr('title',' ');	}
						}
					)
				
					
					
					//reference header LI as DOM object
					var $_item=$item;
					
					if($_submenu.data("menu-items"))
					{
					
						$_submenu.data("menu-items").each(
					
							function(i)
							{
								
								var $menu_item=$(this);
								if(i<DWPE_WindowFactory.menuScrollThreshold)
								{
									$menu_item.show();
								}
								else
								{
									$menu_item.hide();
								
								}
							}
						
						);	
					}
					
					clearTimeout($_submenu.data('timers').hidetimer);
					
					$_submenu.data('timers').showtimer=setTimeout(
						function()
						{
							var dimensions=$_item.data("dimensions");
							//var isTopHeader=$_item.data('istopheader');
							
							$_submenu.show();
							var menu_width=$_submenu.width();
							var menu_height=$_submenu.height();
							
							$_submenu.hide();
							
							var offsets=$_item.offset(); //{left:$_item.offset().left, top:$_item.offset().top};
							
							//$_item.data('offsets', offsets );
							
							var menuleft= $_item.outerWidth();
							var menu_top= 0;//$_item.position().top;
							
							
							if( offsets.left+menuleft+dimensions.submenuW>$(window).width())   //calculate this sub menu's offsets from its parent
								menuleft=-dimensions.w;
							
							$_submenu.css({	left:menuleft+"px",
												width:menu_width+'px',
												top:menu_top+"px",
												visibility:'visible'}).show();
												
												
							
							$shadow.css({	visibility:'visible',
											left:menuleft+"px",
											width:menu_width+'px',
											top:menu_top+"px",
											height:menu_height+"px"}).show();
							
							
							
							
						}, show_delay  );
				},
				//leave
				function(e)
				{
					
					var $_submenu=$submenu
					var $_shadow=$shadow;
					
					
					
					//var header=$item.get(0);
					
					clearTimeout($submenu.data('timers').showtimer)
					
					$_submenu.data('timers').hidetimer=setTimeout
					(	function()
						{
							$_submenu.animate({width:'hide',height:'hide'},anim_time); 
							$_shadow.animate({width:'hide',height:'hide'},anim_time); 
							
							
							
					}, hide_delay );
					
					//if submenu scrolls, reset the scroll state when we leave
					$_submenu.data('first_index',0);
					$_submenu.data('up').removeClass('enabled');
					$_submenu.data('down').addClass('enabled');
					
				}
			) //end hover
		}) //end $headers.each()
	
	
	//set menu as initialized
	$ux.data('menu',$menu);
	
	return $menu;
	
	
	
	
} //end function	
	
		



/*deprecated...
DWPE_WindowFactory_Class.prototype.anchorTo=function(pos,$object,$window)
{
	var location=$object.offset();
	
	
	var wW=$(window).width();
	var wH=$(window).height();
	
	var left=0,top=0;
	var shadowWidth=shadowHeight=16;
	
	var L=location.left;
	var T=location.top;
	var W=$object.outerWidth(true);
	var H=$object.outerHeight(true);
	
	var R=wW-W;
	var B=wH-H;
	
	switch(pos)
	{
		case 'br': //anchor window to  bottom right of object
			left=L+W;
			top=T+H;
			break;			
	
		case 'tr': //anchor window to  top right of object
		default:
			
			//if we cross the right edge, paint left
			left=location.left+$object.width();
			if(left+$window.width() > windowWidth*.9 )
				left=location.left-$window.width()+shadowWidth;
			
			//if we cross the bottom edge, paint up
			top=location.top;
			if(top+$window.height() > windowHeight *.9)
				top=location.top+$object.height()-$window.height()+shadowHeight;
			
			break;			
	
	
	}
	
	//enforce window limits
	
	left=Math.min(left,R);
	top=Math.min(top,B);
	
	
	$window.css({	
				'left':left,
				'top':top
				});	

}

*/



/*this function stores default definitions for each type
 and returns them in JSON format */
DWPE_WindowFactory_Class.prototype.getDefaultArgsListForType=function(type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();
	
	switch(type)
	{	
	
				
		case 'menu-item':	
		
			return {	"_class":"DWPE_WindowFactory_Class",
						"type":"menu-item",
						"label":"Menu Item "+i,
						"key":"",
						"command":"",
						"itemtype":"normal"
						
					};
						
			break;
		case 'menu-separator':	
		
			return {	"_class":"DWPE_WindowFactory_Class",
						"type":"menu-item",
						"label":"----------",
						"key":"",
						"itemtype":"separator"
						
					};
						
			break;	
		
		case 'menuitem':	
		
			return '{	"label":"Item ","key":"","state":" ","tooltip":"","command":"","itemtype":"normal","selected":" ","group":""}';
		
		default:
			return {};
				
				
	}
	


}



/*this function stores default property sheet definitions for each type
 and returns them in JSON format */
DWPE_WindowFactory_Class.prototype.getPropertySheetFields=function(_type)
{

	switch(_type)
	{	
		
		case 'menu-item':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_WindowFactory"},
						{type:"hidden",id:"_type",name:"Type",value:"menu-item"},
						
						
						{type:"chooser",id:"itemtype",name:"Type",value:"normal=Normal&radio=Radio&toggle=Toggle&separator=Separator", dynamic:"dynamic"},
						{type:"chooser",id:"state",name:"State",value:" =Enabled&disabled=Disabled"},
						
						
						{type:"text",id:"label",name:"Label",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},
						{type:"text",id:"key",name:"Acc. Key",value:""},
						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},
						
						
						{type:"text",id:"group",name:"Group&nbsp;Name",value:""},
						{type:"chooser",id:"selected",name:"Selected",value:" =Not Selected&on=Selected"}
						
						
						
						
						
					
						
					];
			break;
	
				
		default:
			return [];	
			break;		
	}
	


}

