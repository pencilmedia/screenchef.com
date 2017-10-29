/*generates markup for the page header that gets output to scratchpad*/
DWPE_PanelFactory_Class.prototype.generatePageheaderMarkup=function(args)
{
	
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
		
	var markup="";	
	markup+='<ux:panels class="dwpe-header">';
	//markup+='\r\t<div class="dwpe-subheader-panel" style="display:block">';
	
	//if(args.icon)
	//	markup+='\r\t\t'+DWPE_Utilities.getIconMarkup(args.icon);	
	
	markup+='\r\t\t<div class="dwpe-pageheader-label">\r\t\t\t'+args.label+'\r\t\t</div>';	
	
	if(args.choicelist == "choicelist-yes")
		markup+='\r\t\t<span class="choicelist"></span>';
		
	if(args.toolbar.length>0 && args.toolbar!="none")			
		markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args:{}--></ux:toolbars>\r\n";
					
	
	markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top' width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";		
	
	markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';
	markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();
	markup+='\r\t\t</div>';
	//markup+='\r\t</div>\n';

	markup+='</ux:panels>';
	
	return markup;
}

/*initializes an header with header style and behavior*/
DWPE_PanelFactory_Class.prototype.initializePageheader=function($ux)
{	
	var markup="";
	
	markup+='<span class="dwpe-header-title"></span>';
	
	//title
	var $title=$ux.find('>DIV.dwpe-pageheader-label');
	markup+=$title.text();
		
	
	markup+='<span class="after-header-title"></span>';
	
	$title.html(markup);
	
	//choice-list	
	var markup2 ="";
	var $choice = $ux.find('SPAN.choicelist');
	if($choice && $choice.length >0)
	 	markup2+='<span title="Content Switcher" class="choice-list"></span>';
	
	//help
	markup2+='<span title="Definition text">'+DWPE_Utilities.getIconMarkup("help")+'</span>';
	
	//recompose title	
	$title.append(markup2);
	
	//get handle to the disclosure icon
	
	//if icon exists insert it after disclosure icon
	var $icon=$ux.find('>SPAN.icons');
	if( $icon && $icon.length>0  ) //header icon
		$title.prepend($icon);
		
		
	
	//create a  container to hold our title and toolbar on one line with resize awareness
	var $container=$("<div class='title-container'>"+
						"<div class='left'></div>"+
						"<div class='right'></div>"+
					"</div>");

	//place title to the left
	$container.find(">DIV.left").append($title);
	
	//place toolbar to the right
	var $toolbar=$ux.find(">.dwpe-toolbar");
	if($toolbar && $toolbar.length>0)
	{	$container.find(">DIV.right").append($toolbar);	}
	else //no toolbar so give left all the width it can have
	{
		$container.find(">DIV.right").width("1%");
		$container.find(">DIV.left").width("99%");
	}
	
	
	//insert container inside $ux, above everything else
	$ux.prepend($container);
	
	
	//single select choice list on-click event
	$title.find('>SPAN.choice-list').click(function()
			{		
				var $callee=$(this);
				var menu_id=$callee.attr("id")+"-menu";
				var group=null; //append to the last group
				var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);
				var $overflowMenuBody=$("#"+menu_id+"-body");
				$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");
			});	

	
	
														
}