/*generates markup for the tabs that gets output to scratchpad*/
DWPE_PanelFactory.generateTabsetMarkup=function(args)
{
	var markup = "";
	
	markup+='<ux:tabs class="dwpe-tabset '+args.tab_style + ' ' + args.allow_tab_close +'" height="' + args.height +'"';
	
	markup+=" name='"+((args.name)?args.name:"Tabs")+"'";
		
	markup+=">\r\n";

	markup += DWPE_PanelFactory_Class.generateTabMarkup(args);
	
	if(args.toolbar.length>0 && args.toolbar!="none")			
		markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'></ux:toolbars>\r\n";
	
	markup += DWPE_PanelFactory_Class.generateTabPanelMarkup(args);	
	
	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
	
	markup+="</ux:tabs>\r\n";
	
	

	
	return markup;
}

DWPE_PanelFactory_Class.generateTabMarkup = function(args)
{
	markup = "";
	markup+="	<ul class='dwpe-tabs'>\r\n";   
	for(var i in args.items)
	{
		var item=args.items[i];
		
		
		
		var disabled=(item.state=='0')?"class='disabled'":"";
		markup+="\t\t\<li "+disabled+">";
		
		/* Icon */
		if(item.icon.length>0 && item.icon !='none')
			markup+=DWPE_Utilities.getIconMarkup(item.icon) + " ";
		
		markup+= item.label;
		
		/* Close Button */
		/* Anthony:
		  1. Spec says close buttons are only supposed to show on tab rollover.  
		  2. Showing close buttons is an option of the tabset. Default is false. make
		     a variable for this and store it as an attribute on the ux tag only when
		     the user's choice is set to true (not the default).
		  3. Rather than putting in a close button on every tab, cluttering the markup,
		     please run a test in your initialize function to see if the close feature 
		     is in effect on this tabset and add the markup then, for example, at the point 
		     where you add the dwpe-tab className.
		  4. Please avoide the term closure in function and css names. Use close instead. 
		     The term 'closure' has a special meaning in JavaScript and I don't want scripters to confuse 
		     the close feature with that JavaScript term. Please update your code.
		 */
		
		//if(item.closureButton != 0)
		//	markup+= " <span class='closure'>"+DWPE_Utilities.getIconMarkup('error')+"</span>";
		
		
		markup+="</li>\r\n";
	}
	markup+="	</ul>\r\n";
	return markup;
}

DWPE_PanelFactory_Class.generateTabPanelMarkup = function(args)
{
	markup="";
	markup+="\t<div class='dwpe-tab-panels'>\r\n";
	for(var i in args.items)
	{
		var item=args.items[i];

		//if( item.content == "inline" )
		//{
		//	markup+="\t\t<div>\r\n<h3>" + 
		//	                 item.label + "</h3>" + DWPE_Utilities.getSampleContent('medium	') + "\r\n\t\t</div>\r\n";
		//} else {
			/* We'll check for content attribute later in DWPE_PanelFactory_Class.showTabPanel */
			markup+="\t\t<div url='"+ item.content +"'></div>\r\n";
		//}
	}
	markup+="\t</div>\r\n";
	return markup;
}


/*initializes a tabset with tab style and behavior*/
DWPE_PanelFactory_Class.prototype.initializeTabset=function($ux)
{
	//if we have a unique id, use it, otherwise make one
	var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();
	$ux.attr("id",id);
	
	
	
	//save our preferred size into $ux data object
	var size="100%";
	$ux.data('size',size);
	
	
	//pick up the default tab, if not defined, assign first tab
	var default_tab=$ux.attr("default_tab");
		default_tab=(default_tab)?default_tab:0;
	
	$ux.data("current-tab",-1);
	
	
	$ux.data('allow-tab-close', $ux.hasClass('allow-tab-close') );
	
	//create a  container to hold our tabs and toolbar on one line with resize awareness
	var $container=$("<div class='tabs-container'>"+
						"<div class='left'></div>"+
						"<div class='right'></div>"+
					"</div>");

	//place tabs to the left
	var $tabs=$ux.find(">UL.dwpe-tabs:first");
	$container.find(">DIV.left").append($tabs);
	
	//place toolbar to the right
	var $toolbar=$ux.find(">.dwpe-toolbar");
	if($toolbar && $toolbar.length>0)
	{	$container.find(">DIV.right").append($toolbar);	}
	else //no toolbar so give left all the width it can have
	{
		$container.find(">DIV.right").width("1%");
		$container.find(">DIV.left").width("99%");
	}
	
	//acquire a handle to all the tab LIs in the tabset
	var $tabs=$container.find('UL.dwpe-tabs>LI'); 
	
	//give each LI that this tabset owns its tab class
	$tabs.each(
	
		function(i)
			{
					var $tab=$(this);
					$tab.addClass("dwpe-tab normal");	
					$tab.attr('id',id+"-tab-"+i);
					$tab.data('index',i);
					$tab.click(
						
						function(){	DWPE_PanelFactory_Class.showTabPanel($ux,i);	}
						
					);
			}
	)
	
	$ux.data('num-of-tabs',$tabs.length);
	
	//add our tab container inside $ux
	if ( $ux.hasClass('bottom')  )             //tabs at bottom only
	{
		$container.addClass('bottom');
		$ux.append($container);
		// Since we're a bottom tabs, hide the toolbar
		/*Anthony, do we really hide toolbar if tabs are only on bottom?*/
		
		$container.find(">DIV.right").css('visibility','hidden');
		
		//add the overflow controls
		var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');
		$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);
		
		var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');
		$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);
		
		//bind an overflow handler to our overflow controls
		$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});
		$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});
		
	}
	else if ($ux.hasClass('both'))          //tabs top and bottom
	{
		//top
		$container.addClass('top');
		$ux.prepend($container);
		
		//add the overflow controls
		
		
		
		//top
		var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');
		$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);
		
		var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');
		$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);
		
		//bind an overflow handler to our overflow controls
		$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});
		$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});
		
		
		
		//bottom
		var $bottom=$container.clone(true);
		$bottom.removeClass('top');
		$bottom.addClass('bottom');
		$ux.append($bottom);
		$bottom.find(">DIV.right").css('visibility','hidden');
		
		//get handles to the overflow controls that bottom already has thanks to cloning container
		var  $overflow_btn_fore2= $bottom.find('LI.fore');
		var  $overflow_btn_aft2 = $bottom.find('LI.aft');
		
		//remove the old handlers
		$overflow_btn_fore2.unbind();
		$overflow_btn_aft2.unbind();
		
		
		//bind an overflow handler to our overflow controls
		$overflow_btn_fore2.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore2);});
		$overflow_btn_aft2.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft2);});
		
		
		//udpate the bottom tab ids to have -btm (used to manage selected state top & bottom)
		$bottom.find('UL.dwpe-tabs>LI').each(
			function()
			{
				var $tab=$(this);
				var id=$tab.attr('id');
					id+='-btm'
					$tab.attr('id',id);
			}
		);
		
		
	}
	else 									//tabs top only
	{
		$ux.addClass('top'); //force top class just in case user didn't specify it
		$container.addClass('top');
		$ux.prepend($container);
		
		
		//add the overflow controls
		var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');
		$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);
		
		var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');
		$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);
		
		//bind an overflow handler to our overflow controls
		$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});
		$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});
		
		
		
		
	} 
	
	

	
	//set the first tab, used in overflow calculations
	$ux.data('first-tab',0);
	
	//set the last tab, used in overflow calculations
	$ux.data('last-tab',$tabs.length-1);
	
	
	//acquire a handle to all the panels in the tabset
	//var $tab_panels=$ux.find('>DIV.dwpe-tab-panels>DIV'); 
	var $tab_panels=$ux.find('DIV.dwpe-tab-panels>DIV'); 
	
	//give each tab panel that this tabset owns its panel class
	$tab_panels.each(
	
		function(i)
			{
					
					var $tab_panel=$(this);
					$tab_panel.attr('id',id+"-tabpanel-"+i)
							  .css('height', $ux.attr('height'));
			
					if(i==default_tab)  //by default, first panel is shown
					{	
						
					}
			}
	);
	
	//enforce the default tab by showing it
	DWPE_PanelFactory_Class.showTabPanel($ux,default_tab);
	
	
	//force window to call on our tabset to manage overflow when a window resize occurs
	$(window).bind('resize',function(e,parentID){	
											//if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)
												DWPE_PanelFactory_Class.manageTabOverflow($ux);
											})
	//$(window).bind('dwpe-component-resize',function(){DWPE_PanelFactory_Class.manageTabOverflow($ux);})
	
	//force tabs to evaluate for overflow once so that tabs layout correctly on load
	DWPE_PanelFactory_Class.manageTabOverflow($ux);

}

/*Close tab removes the tab and related panel from the DOM*/
DWPE_PanelFactory_Class.closeTabPanel = function($ux)
{
	var current_tab_index=$ux.data("current-tab");
	
	if(current_tab_index==null) return;  //we only close the open tab panel
	
	
	var id= $ux.attr("id");
	
	var $tab_top=$("#"+id+"-tab-"+current_tab_index);
	var $tab_panel=$("#"+id+"-tabpanel-"+current_tab_index);
	var $tab_btm=$("#"+id+"-tab-"+current_tab_index+"-btm");
	
	var $tab=($tab_top.length==0)?$tab_btm:$tab_top;
	
	var old_tab_index=$tab.data('index');
	
	
	//find the nearest sibling tab
	var $prv=$tab.prev(".dwpe-tab");
	var $nxt=$tab.next(".dwpe-tab");
	var $sibling=($nxt.length==0)?$prv:$nxt;
		
	//do nothing more if we can't locate a sibling 
	if($sibling.length==0  ) return;
	
	//remove the old tab's tab and panel objects
	$tab_top.remove();
	$tab_panel.remove();
	$tab_btm.remove();
	
	
	$ux.data('first-tab' ,$sibling.data('tab-index')	);
	
	//reindex our tabs
	var count=0;
	$ux.find(">DIV.top LI.dwpe-tab").each(function(i){$(this).data('tab-index',i);count++});
	if(count==0)
		$ux.find(">DIV.bottom LI.dwpe-tab").each(function(i){$(this).data('tab-index',i); count++});
	else
		$ux.find(">DIV.bottom LI.dwpe-tab").each(function(i){$(this).data('tab-index',i); });
		
	//update tab count
	$ux.data('num-of-tabs',count);
	$ux.data('first-tab' ,$sibling.data('tab-index')	);
	
	
	//move focus to the sibling tab panel we found
	
	DWPE_PanelFactory_Class.showTabPanel($ux,$sibling.data('index'));
	
	
	
	
	

	
	//last, give our tabset a chance to manage overflow
	DWPE_PanelFactory_Class.manageTabOverflow($ux);
	
}


/*shows the panel that has been passed in*/
DWPE_PanelFactory_Class.showTabPanel = function($ux,tab_index)
{
	
	var current_tab=$ux.data("current-tab");
	if(tab_index==current_tab) return; //don't show a tab that's already shown
	
	
	
	var id= $ux.attr("id");
	
	var $new_tab_top=$("#"+id+"-tab-"+tab_index);
	var $new_tab_btm=$("#"+id+"-tab-"+tab_index+"-btm");
	var $new_panel=$ux.find("#"+id+"-tabpanel-"+tab_index);
	
	if(DWPE_Utilities.isDisabled($new_tab_top) )return; //don't show a tab that is disabled
	
	//iframes can cause flashes when hiding tab panel, so hide them first
	var $old_panel=$("#"+id+"-tabpanel-"+current_tab);
	if($old_panel.length>0)
		$old_panel.find(">IFRAME").hide();
	
	if($new_panel.length>0)
	{	
		$ux.data("current-tab",tab_index);
		
		
		$new_tab_top.addClass('selected');
		$new_tab_top.removeClass('normal');
		$new_tab_btm.addClass('selected');
		$new_tab_btm.removeClass('normal');
		
		
		
		if($ux.data('allow-tab-close')==true && $ux.data('num-of-tabs')>1)
		{
			var $close=$(DWPE_Utilities.getIconMarkup('closetab'));
				$close.addClass('close');
				$close.click(function(e){e.stopPropagation(); DWPE_PanelFactory_Class.closeTabPanel($ux);} );
				$new_tab_top.append($close);
				$new_tab_btm.append($close.clone(true));

		}
		
		
		$new_panel.show();
		
		//now that we've shown our panel, give it a chance to lay itself out.
		$(window).trigger('resize');
		
		/*	Dynamic loading of iframe 
			The iframe is loaded on the first call only
			subsequent calls will only display the iframe content 	*/
		
		
		
		var content=$new_panel.attr('url');
		
		
			
		if ( content && content.length>0)
		{	if($new_panel.find(">iframe").length==0 )
			{
				$new_panel.html( "<iframe src='"+ content +"' frameborder='0' allowtransparency='false'/>"  );
			}
			$new_panel.find(">IFRAME").show();
		}
		else //no content url specified so present dummy content
		{
			$new_panel.html( DWPE_Utilities.getSampleContent('medium'))
		}
	}
	
	
	if(current_tab!=null)
	{
		//unhighlight the old tab
		
		$old_panel.hide();
		var $tab_top=$("#"+id+"-tab-"+current_tab).removeClass('selected');
			$tab_top.addClass('normal');
		var $tab_btm=$("#"+id+"-tab-"+current_tab+"-btm").removeClass('selected');
			$tab_btm.addClass('normal');
			
		//remove the close button if we can find item
		$tab_top.find('DIV.close').remove();
		$tab_btm.find('DIV.close').remove();
		
	}
	
	
}

DWPE_PanelFactory_Class.manageTabOverflow = function($ux)
{
	
	//if an overflow menu is open, close it
	DWPE_Window.closeWindowGroup("tabset-overflow");

	//note that our tabs container could be on top, bottom or both
	
	//add our container inside $ux
	if ( $ux.hasClass('top')  )             //tabs at top only
	{
		DWPE_PanelFactory_Class._manageTabOverflow($ux,'top');
	} 
	else if ($ux.hasClass('both'))          //tabs top and bottom
	{
		DWPE_PanelFactory_Class._manageTabOverflow($ux,'top');
		DWPE_PanelFactory_Class._manageTabOverflow($ux,'bottom');
		
	}
	else 									//tabs bottom only
	{
		DWPE_PanelFactory_Class._manageTabOverflow($ux,'bottom');
	}
	
}

DWPE_PanelFactory_Class._manageTabOverflow = function($ux,position)
{

	var selected_tab=$ux.data('current-tab');

	//determine if scrollbars are in effect
	var pH=$ux.parent().innerHeight();
	var pSH=$ux.parent().attr("scrollHeight");
	var scrollbar_width=(pSH>pH)?DWPE_Utilities.getScrollbarWidth():0;
	
	//console.log(sH,h);
	
	//determine our parent's size
	var pW=$ux.parent().width()-scrollbar_width;
	
	//determine how much size we can take and apply it to our container
	var size=$ux.data('size');
	
	if(size==null) return;
	
		if(size.indexOf('%')>-1)
		{
			size=(parseInt(size)/100)*pW;
		}
		else
		{
			size=parseInt(size);
		}
	$ux.width(size);
	
	
	
	//now find the size we can allocate to tabs
	var avail_size=$ux.find(">DIV.tabs-container."+position+">DIV.left").width();
	
	
	//console.log(size,avail_size)
	
	
	/*if we take up more room than our parent offers (w>size)
	  we have triggered an overflow condition*/
	 
	
	
	//undhide our overflow button so it can be counted in scrollWidth calculations
	
	
	
	
	var $overflow_fore=$ux.find(">DIV.tabs-container."+position+" LI.fore").show();
	var $overflow_aft=$ux.find(">DIV.tabs-container."+position+" LI.aft").show();
	
			
	var overflown=false;
	
	//set width to the width of our overflow controls, to ensure they have room to paint if we need them
	var w=$overflow_fore.outerWidth(true);
	    w+=$overflow_aft.outerWidth(true);
		//w+=100; //add a fudge factor
	
	//console.log(w);
	
	//get static values for first and last tab
	var first_tab=$ux.data("first-tab");
	var last_tab=$ux.data("last-tab");
	

	//grab our tabs, we do it each time to catch tabs that may have arrived dynamically
	var $tabs=$ux.find(">DIV.tabs-container."+position+">DIV.left>UL.dwpe-tabs>LI.dwpe-tab");
	var $last=null;
	
	//set all our tabs to hidden so we can fairly test if we are within bounds
	$tabs.hide();
	$tabs.each(
	
		function(i)
		{
			if(i>=first_tab) 		 		
			{
			
				var $tab=$(this);
				//store the i value as the tab's index, used later if the tab is clicked in an overflow menu
				$tab.data('tab-index',i);
				
				//show the tab so we can measure it
				$tab.removeClass('last');
				$tab.show();
				
				
				
				//add the width of this tab to our total width
				w+=$tab.outerWidth(true);
				
				if(w>avail_size) 		 		//we are out of bounds so hide it again and set the overflown flag
				{
					
					/*check to make sure our selected tab is visible
					sometimes when its the last tab in the visible set before its selected it can
					get knocked off the visible set after overflow calculations are performed	
					this check ensures we always show our visible tab
					*/
				
					if(i!=selected_tab)
					{
						$tab.hide();
						overflown=true;
					}
				}
				else					//we are still in bounds and record this tab position as last tab, because it may be
				{
					last_tab=i;
					$last=$tab;
				}
				
				
				
			}
			
			
		}
	
	);
	
	//store off first and last tabs, in case they have just changed
	$ux.data("first-tab",first_tab);
	$ux.data("last-tab",last_tab);
	
	//set the last visible tab as last (tiertiary)
	if($last)$last.addClass('last');
	
	
	
	//console.log(w,pW,size)
	
	//manage the display of the overflow controls
	if(first_tab>0)
		$overflow_fore.show();
	else
		$overflow_fore.hide();
		
	if(last_tab<$tabs.length-1)
		$overflow_aft.show();
	else
		$overflow_aft.hide();

}


DWPE_PanelFactory_Class.handleTabOverflowClick = function($ux,$overflow_btn)
{
	
	var type=($overflow_btn.hasClass('fore'))?"fore":"aft";
	
	
	//make a overflow menu object
	var menu_id="tabset-overflow";
	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);
	var $menu_body=$("#"+menu_id+"-body");
	
	
	//get static values for first and last tab
	var first_tab=$ux.data("first-tab");
	var last_tab=$ux.data("last-tab");
	
	/*determine the outlier tabs and append them to an overflow menu body */
	$ux.find("UL.dwpe-tabs:first>LI.dwpe-tab:hidden").each
	(
		function()
		{
			var $tab=$(this);
			var tab_index=$tab.data("tab-index");
			
			if(type=='fore' && tab_index>first_tab) return;
			else if(type=='aft' && tab_index<last_tab) return;
			
			
			
			//clone the tab, show it and append it to the overflow menu body
			var $c=$tab.clone(true);
			$c.show();
			$c.css('display','block'); //force it to block to paint vertically within the menu
			$menu_body.append($c);
			
			//remove icons from menu itemss
			$c.find("span.icons").remove();
			
			//bind a click event to the item which sets this tab as the firt tab
			
			if($c.hasClass('disabled')==false)
			{	$c.click(
			
					function()
					{
						
						
						$ux.data("first-tab",$tab.data('tab-index'));
					
					
						//now that we have presumably changed tab first position, force tabs to re-layout
						DWPE_PanelFactory_Class.manageTabOverflow($ux);
					}
				
				);
			}				
					
		}
	);

	
	
	//set the state of the overflow-control to active	
	$overflow_btn.addClass("active");
	
	//position the window relative to the overflow control
	DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);
	
	/*window class calls this method after the user has made a selection and just before the window 
	 group will be dismissed*/
	$overflow_btn.bind(		
		"cleanup",
		function(e)
			{
				//set the state of the overflow-control to normal	
				$overflow_btn.removeClass('active');
			}
		);
	
	
	
	
}


