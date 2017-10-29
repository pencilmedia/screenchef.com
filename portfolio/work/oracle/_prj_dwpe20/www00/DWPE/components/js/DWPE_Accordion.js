
/*generates markup for the accordion that gets output to scratchpad*/
DWPE_PanelFactory_Class.prototype.generateAccordionMarkup=function(args)
{
	//console.log(args);
	
	var markup="";
	
	markup+='<ux class="dwpe-accordion">\r\n';
	
	markup+="\r\n";
	
	
	for(var i in args.items)
	{
		var item=args.items[i];
		
		var state="";
		if(item.state=="0")
			state=' class="collapsed" ';
		markup+='\t<h3 '+state+' size="'+item.size+'">';
		
		
		
		if(item.icon.length>0)
			{	markup+=DWPE_Utilities.getIconMarkup(item.icon);	}
		
		
		markup+="<span class='title'>"+item.label+"</span>";
		
		if(item.toolbar.length>0 && item.toolbar!="none")
			markup+="<ux class='dwpe-toolbar' data='"+item.toolbar+"'/>";
		
		//markup+="<ux class='dwpe-toolbar' data='sample-toolbar-long'/>";
		
		markup+='</h3>\r\n';
		
		if(  item.content===undefined || item.content == "inline")
		{	markup+='\t<div>';
			markup+=DWPE_Utilities.getSampleContent('short');	}
		else
			markup+='\t<div content="'+item.content+'">';
			
		markup+='</div>\r\n';
		markup+="\r\n";
	
	}
	
		
	markup+="\r\n";
	markup+='</ux>';
	
	return markup;
	
	
}


/*initializes an accordion with accordion style and behavior*/
DWPE_PanelFactory_Class.prototype.initializeAccordion=function($ux)
{
	var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();
	$ux.attr("id",id);
	
	
	
	var num_panes=0;
	//style pane titlebars
	$ux.find(">h3").each(
	
		function(i)
		{	
			var $h3=$(this);
			num_panes++;
			
			$h3.attr("panel",id+"-"+num_panes++);
		
			$h3.addClass("dwpe-accordion-header");	
			
			//create disclosure icon
			
			var $disc=$("<span class='dwpe-accordion-disclosure'></span>");
			if($h3.hasClass('collapsed'))
				$disc.addClass('collapsed')
				
			//create resize aware layout for title and toolbar
			var $layout=$("<div class='dwpe-accordion-header-container'><div class='left'></div><div class='right'></div></div>");

			//move icon and title into left side
			$layout.find("DIV.left")
					.append($disc)
					.append($h3.find(">SPAN"));
				
			//move toolbar into right side if it exists
			var	$toolbar=$h3.find(">ux");
				if($toolbar && $toolbar.length>0)
				{	$layout.find("DIV.right")
									.append($toolbar);
					
					//when we have a toolbar let the title be clipped when accordion is narrowed
					$layout.find("DIV.left").css('overflow','hidden');
					//$layout.find("DIV.right").css('overflow','hidden');
					
				}
			 
			$h3.append($layout);
			
			
			
			var $panel=$h3.next(); //our panel is the div that follows the H3
			
			
			//handle content via url
			var content=$panel.attr("content");
			if($panel.attr("content") && content!="inline" )
			{
				$panel.replaceWith( "<iframe class='dwpe-accordion-panel' src='"+ content +"'  frameborder='0' width='100%' allowtransparency='false'/>"  );	
				$panel=$h3.next();
			}
		
			
			if($h3.hasClass("expanded"))
				$panel.addClass("expanded");
			
			$panel.addClass("dwpe-accordion-panel");
			$panel.attr("id", id+'-'+i);
			$panel.data("panel_index",i);
		
			
		
			$disc.click(function()
								{
								
									if($disc.hasClass('collapsed'))
									{
										$disc.removeClass("collapsed");
										$h3.removeClass("collapsed");
										$panel.removeClass("collapsed");
										
										
										
									}
									else
									{
										$disc.addClass("collapsed");
										$h3.addClass("collapsed");
										$panel.addClass("collapsed");
									
									}
									
									
									DWPE_PanelFactory.manageAccordionPanels($ux,$panel);									
								});
			
			
		
		}	
			
	);
	
	
	//add overflow controls
	//$ux.prepend("<div class='accordion-overflow-control fore'></div>");
	//$ux.append("<div class='accordion-overflow-control aft'></div>");
	
	//store first and last pane info
	//$ux.data("first-pane",0);
	//$ux.data("last-pane",num_panes-1);
	
	
	
	$(window).resize(function(){DWPE_PanelFactory.manageAccordionPanels($ux,null);});
	
	//DWPE_PanelFactory.manageAccordionPanels($ux,null);	
	
	
}



DWPE_PanelFactory.manageAccordionPanels=function($ux,$p)
{
	
		//$ux is the accordion, which is passed in by the click on the disclosure icon
		//$p (optional) is the target panel, which is passed in by the click on the disclosre icon
		
		
		
		//get the overall height of accordion parent
		var h=$ux.parent().height();
		var avail_h=h;
		$ux.height(h-1);
		
		
		//console.log(h,$ux.height());
		
		
		
		//get a handle to the overflow controls
		//var $overflow_btn_fore=$a.find(">DIV.accordion-overflow-control.fore");
		//var $overflow_btn_aft=$a.find(">DIV.accordion-overflow-control.aft");
		
		
		//reduce available height by the height of the overflow buttons
		//avail_h-=$overflow_btn_fore.height();
		//avail_h-=$overflow_btn_aft.height();
		
		
		
		/*setup a panels array which will hold our sizing 
			calculations until we wish to commit them to screen*/
		var panels=new Array();
		
		var size_count=0;
		
		
		//var first_pane=$a.data('first-pane');
		//var last_pane=$a.data('last-pane');
		
		var min_panel_height=40;
					
					
		/*extract panel needs & wants*/
		$ux.find(">h3").each(
			function(pane_num)
			{
				var $h3=$(this);
				var headerH=$h3.outerHeight(true); //include borders & padding
				
				
				
				//console.log(headerH);
				avail_h-=(headerH); //subtract the height of this header from avail_h
				
				var $panel=$h3.next();  //our panel is the next sibling of $h3 
				
				var x={};
				
					//if our pane is out of bounds, don't show it at all
					//if(pane_num<first_pane || pane_num>last_pane)
					//	x.dont_show=1;
					//else
					//	x.dont_show=0;
				
					x.header=$h3;
					x.panel=$panel;
					x.size=$h3.attr("size");
					x.expanded=!$h3.hasClass("collapsed");
					
					
					if(x.expanded==true)
						size_count+=parseInt(x.size); //tallies the number of sizing units in effect 
					
					//force block state to block to take measurements
					var oldBlockState=x.panel.css("display");
					var oldH=x.panel.height();
					x.panel.height(0);
					x.panel.css('display','block');
					
					
					
					
					x.has=x.panel.outerHeight(true);         //panel height with borders and padding
					
					//find the height of its content
					
					if(x.panel.find(">IFRAME:first-child").length>0) 
						x.wants=x.panel.find(">IFRAME:first-child").height();	
					else
					{	x.wants=x.panel.attr("scrollHeight");    }
					x.wants=(x.wants<min_panel_height)?min_panel_height:x.wants;		//enforce a minimum
					x.mustHave=(x.size==0)?x.wants:min_panel_height;      //inflexibles want their content's height, others reqire a minimum
					
					//return block state to its original state
					x.panel.height(oldH);
					x.panel.css("display",oldBlockState);
					
					
					x.visited=0; //have we calculated size for this panel yet?
				
					
					
				
					panels[pane_num]=x;
				
			}
		);
		
		
		
		
		
		/*if we are expanding an inflexible panel give it first crack at available height*/
		if($p)
		{
			
				
			
			//get a handle to our panel sizing data inside panels array
			var panel_index= $p.data("panel_index") ;
			var panel=panels[panel_index];
			
			if(panel.size==0)
			{
				panel.wants=panel.mustHave;
				
				
				
				if(panel.expanded==false) 
				//this panel is closed, so it gets nothing
				{
					panel.finalHeight=0;
				}
				else if(avail_h>=panel.wants)
				//we have room to give the panel what it wants, so give it what it wants
				{					
					panel.finalHeight=panel.wants;
					avail_h-=panel.wants;
					
				}
				else if (panel.wants>avail_h && avail_h>panel.mustHave) 
				//the panel wants more room than we have to give, and we have more room to give than its minimum requirement, so give all we have
				{			
					panel.finalHeight=avail_h;
					avail_h=0;
				}
				else
				//we have nothing left to give, so mark it dont show
				{
					panel.finalHeight=0;
					panel.state=0;
					//panel.dont_show=1;
				}
				
				panel.visited=1;
			}
		}
		
		
		
		
		/*bestow on each open inflexible panel the height it wants until avail_h is depleted*/
		$(panels).each(
		
			function()
			{
				
				if(this.visited==1) return; //we have already computed this panel's height
				if(this.size!=0) return; //weed out the flexible panels
				
				
				if(this.expanded==false)
				//this panel is closed, so it gets nothing
				{	this.finalHeight=0;	}
				else if(avail_h>=this.wants)
				//we have room to give the panel what it wants, so give it what it wants
				{
					avail_h-=this.wants;
					this.finalHeight=this.wants;
				}
				else if (this.wants>avail_h && avail_h>this.mustHave) 
				//the panel wants more room than we have to give, and we have more room to give than its minimum requirement, so give all we have
				{
					this.finalHeight=avail_h;
					avail_h=0;
				}
				else
				//we have nothing left to give, so give it 0 and collapse it
				{
					this.finalHeight=0;
					this.state=0;
					//panel.dont_show=1;
				}
				
				//if(this.finalHeight==0) this.state=0;
				
				
				this.visited=1;

				
				
			}
		
		);
		
		
		var px_per_flex_unit=parseInt(avail_h/size_count); 
		
		//console.log(avail_h,size_count,px_per_flex_unit);
		
		var num_panels=panels.length;
			
	
		
		
		/*bestow on each open flexible panel the height it wants until avail_h is depleted*/
		$(panels).each(
		
			function(i)
			{
				if(this.visited==1) return; //we have already computed this panel's height
				if(this.size==0) return; //weed out the inflexible panels
			
				//if(avail_h<=0)
				//{
				//	this.dont_show=true;
				//	return;
				//}
			
				if(this.expanded==false)
				//this panel is closed, so it gets nothing
				{	this.finalHeight=0;	}
				else
				//we have room to give the panel what it wants, so give it what it wants
				{
					this.finalHeight=this.size*px_per_flex_unit;
					avail_h-=this.finalHeight;
					
				}
				
			
				this.visited=1;
				
			
			}
		
		);
	
	
		
		/*determine the last open panel*/
		var last_open_panel=-1;
		$(panels).each(
		
			function(i)
			{
				if(this.expanded==true) last_open_panel=i;
			}
		
		);
		
		
		//console.log(avail_h)
		
		/*if we have avail_h left over add it to the last open panel's height*/
		if(last_open_panel>-1)
		{
			
			panels[last_open_panel].finalHeight+=avail_h;
			
			avail_h=0;
		}
		
		
	
		/*animate panel height adjustments*/
		var d=500; //animation speed
		$(panels).each(
		
			function(i)
			{
			
				//adjust panel height and set disclosure state accordingly 
				var $disclosure=this.header.find("span.dwpe-accordion-disclosure:first-child");
				
				var _this=this;
				
				//enforce the calculated state
				//this.header.attr("state",this.state);
				//this.panel.attr("state",this.state);	
				
				
				
				
				var $p=this.panel;

				
					
				if(this.expanded==false)	
				{	
					$disclosure.addClass("collapsed");
					this.header.find("DIV.right>UX.dwpe-toolbar").css('visibility','hidden'); //hide toolbar
					
					//if($p.css("display")!="none") //if we are not already closed, close us in an animated fashion
					$p.animate({'height': this.finalHeight}, d,function(){$p.hide()});
				}	
				else
				{
					$disclosure.removeClass('collapsed');
					this.header.find("DIV.right>UX.dwpe-toolbar").css('visibility','visible'); //show toolbar
					$p.show();
					$p.animate({'height': this.finalHeight}, d);
					//$p.height(this.finalHeight);
					//$p.slideDown(d);
				}
				
				
			}
		
		);
		
		
	

}

