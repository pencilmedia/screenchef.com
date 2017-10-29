/*generates markup for the splitter that gets output to scratchpad*/
DWPE_PanelFactory_Class.prototype.generateSplitterMarkup=function(args)
{
	//console.log(args);
	
	var markup="";
	
	markup+='<ux class="dwpe-'+args.orientation+'-splitter">\r\n';
	
	markup+="\r\n";
	
	
	
	for(var i in args.items)
	{
		var item=args.items[i];
		markup+='\t<div class="split-panel"';
		markup+=' size="'+item.size+'" ';
		
		if(item.state!="1")
			markup+=' state="'+item.state+'"';
		
		if(item.toggle!="one")
			markup+=' toggle="'+item.toggle+'"';
		
		if(item.content && item.content!="inline")
			markup+=' content="'+item.content+'"';
		
		
		markup+='>';
		
		
		if(!item.content || item.content=="inline")
		{	markup+="<h3>"+item.label+"</h3>";
			markup+=DWPE_Utilities.getSampleContent('short');
		}
		
		markup+='\t</div>\r\n';
		markup+="\r\n";
	
	}
	
		
	markup+="\r\n";
	markup+='</ux>';
	
	return markup;
	
	
}


/*initialize splitter with splitter look and behavior*/
DWPE_PanelFactory_Class.prototype.initializeSplitter=function($ux)
{

		//if we have a unique id, use it, otherwise make one
		var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();
		$ux.attr("id",id);
		

		var horizontal=$ux.hasClass("dwpe-horizontal-splitter");
		var orientation=(horizontal)?"horizontal":"vertical";
		var axis=(horizontal)?"x":"y";
		var sizeName=(horizontal)?"width":"height";
		var edgeName=(horizontal)?"left":"top";
		
		
		
		
		
		var splitters=new Array();
		var i=0;
		
		
		$panels=$ux.find(">DIV.split-panel");
		
		/*setup splitters and expanders between panels*/
		$panels.each(
		
			function()
			{
				var tmp;
				var $panel_one=$(this);
				var $panel_two=$panel_one.next();
				
					
					//record state into data
					tmp=$panel_one.attr("state");
					tmp=(tmp=="0")?"0":"1";		//if no state, assume state=1 (open)
					$panel_one.data("state", tmp);  //move panel state attr into jquery data object
					
					tmp=$panel_two.attr("state");
					tmp=(tmp=="0")?"0":"1";		//if no state, assume state=1 (open)
					$panel_two.data("state", tmp);  //move panel state attr into jquery data object
					
					//record size into data
					tmp=$panel_one.attr("size");
					tmp=(tmp)?tmp:"200";		//if no size assume fixed size of 200
					$panel_one.data("size", tmp);  //move panel state attr into jquery data object
					
					tmp=$panel_two.attr("size");
					tmp=(tmp)?tmp:"200";		//if no size assume fixed size of 200
					$panel_two.data("size", tmp);  //move panel state attr into jquery data object
					
					
					//record toggle into data
					tmp=$panel_one.attr("toggle");
					tmp=(tmp=="two")?tmp:"one";		//if no size assume fixed size of 200
					$panel_one.data("toggle", tmp);  //move panel state attr into jquery data object
				
					/*
					tmp=$panel_two.attr("toggle");
					tmp=(tmp=="two")?tmp:"one";		//if no size assume fixed size of 200
					$panel_two.data("toggle", tmp);  //move panel state attr into jquery data object
					*/
				
					
				if($panel_one.attr("content") && $panel_one.attr("content")!="inline")
				{
					
					$panel_one=$panel_one.append("<iframe width='100%' height='100%' src='"+$panel_one.attr("content")+"' frameborder='0' allowtransparency='false'></iframe>")
				}	
					
				
				if($panel_two.length>0)
				{
				
					
					
					
					
					
				
					var toggle_pane=$panel_one.data("toggle");
					
					var state=orientation;
					
					
					if(toggle_pane=="one")
						state+=($panel_one.data("state")=="0")?"-expand":"-collapse";
					else
						state+=($panel_two.data("state")=="0")?"-expand":"-collapse";
					
						state+="-"+toggle_pane;
				
					var $splitter=$("<div class='"+orientation+"-split-bar "+state+"'><div class='panel-expander'></div></div>");
					var $expander=$splitter.find(".panel-expander");
					
					$panel_one.after($splitter);
					
					
					
					$splitter.mouseover(function(){$(this).addClass("split-hover");});
					$splitter.mouseout(function(){$(this).removeClass("split-hover");});
					var splitPos;
					
					
					$splitter.draggable(
						{
							"axis":axis,
							zIndex:1,
							addClasses:false,
							iframeFix:true,
							cancel:".expander",
							start:function()
							{
								//calculate & set containment x,y coords
								
								
								var $handle=$(this);
								
								$handle.css("z-index",999999); //set the z-order high to paint over iframe content
								
								$expander.hide();
								
								splitPos=$splitter.css(edgeName);
								
								
								
								
							},
							drag:function(event,ui)
							{},
							
							
							stop:function(event,ui)
							{
								
									var movedBy=(horizontal)?ui.position.left:ui.position.top;
								
								var s1=(horizontal)?$panel_one.width():$panel_one.height();
								var s2=(horizontal)?$panel_two.width():$panel_two.height();
							
								
								if($panel_one.data("toggle")=="one") //expand & collapse panel one
								{
								
									if(s1+movedBy<=15)
									{
										$splitter.removeClass(orientation+'-collapse-one');
										$splitter.addClass(orientation+'-expand-one');
										movedBy=-s1;
										
										$panel_one.addClass('split-panel-collapsed');
										$panel_one.data("state","0");
									
									}
									else
									{
										if(s1+movedBy>s1+s2) //don't let a drag exceed the bounds of the two panels combined
											movedBy=s2;
									
										$splitter.removeClass(orientation+'-expand-one');
										$splitter.addClass(orientation+'-collapse-one');
										
										$panel_one.removeClass('split-panel-collapsed');
										$panel_one.data("state","1");
									}
									
								
									
								}
								else //expand & collapse panel two
								{
								
								
									if(s2-movedBy<=15)
									{
										$splitter.removeClass(orientation+'-collapse-two');
										$splitter.addClass(orientation+'-expand-two');
										movedBy=s2;
										$panel_two.data("state","0");
										$panel_two.addClass('split-panel-collapsed');
										
									
									}
									else
									{
									
										if(-movedBy>s1) //don't let a drag exceed the bounds of the first panel
										{	movedBy=-s1;
										}	
										
										$splitter.removeClass(orientation+'-expand-two');
										$splitter.addClass(orientation+'-collapse-two');
										$panel_two.removeClass('split-panel-collapsed');
										$panel_two.data("state","1");
									}
									
									
								}
								
								
								var panel_one_size=s1+movedBy;
								var panel_two_size=s2-movedBy;
								
								$panel_one.data("oldSize",panel_one_size);
								$panel_two.data("oldSize",panel_two_size);
								
								$panel_one.data("size",panel_one_size+"px");
								$panel_two.data("size",panel_two_size+"px");
								
								
								
								if(horizontal)
								{	
									$panel_one.width(panel_one_size);
									$panel_two.width(panel_two_size);
								}
								else
								{
									$panel_one.height(panel_one_size);
									$panel_two.height(panel_two_size);
								}
								
								//return splitter to its starting position
								$splitter.css(edgeName,splitPos);		
								
								
								//show expander
								$expander.show();
								
								//prompt all components that adjustments due to resize may be in order
								DWPE_Utilities.triggerComponentResize(); //should eventually pass in parent, so we can test containment before processing
							}
						}
					);
					
					
					
					$expander.click(
						function(event,ui)
						{
							var d=250;
							event.preventDefault();
							event.stopPropagation();
							
							DWPE_Utilities.triggerResize();
							
							var s1=(horizontal)?$panel_one.outerWidth(true):$panel_one.outerHeight(true);
							var s2=(horizontal)?$panel_two.outerWidth(true):$panel_two.outerHeight(true);
								
								
							var panel_one_args={};
							var panel_two_args={};
									
							
							if($panel_one.data("toggle")=="one") //expand & collapse the first panel
							{
								
								
								
								if($panel_one.data("state") =="1")
								{	
									//collapse panel one
									$panel_one.data("oldSize",s1);
									$panel_one.data("state","0");
									
									panel_one_args[sizeName]="0px";
									//$panel_one.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									
									//if($panel_two.data("sizing")=="relative")
									//{	
										panel_two_args[sizeName]=(s1+s2)+"px"; //give all size to panel 2
									//	$panel_two.animate(args,d);
									//}
									
									//console.log("p1 collapse p2 expand: ",panel_one_args[sizeName],panel_two_args[sizeName]);
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-collapse-one');
									$splitter.addClass(orientation+'-expand-one');
									//$splitter.css(edgeName,2);
									
									$panel_one.addClass('split-panel-collapsed');
								}
								else
								{	
									//expand panel one
									s1=$panel_one.data("oldSize");
									$panel_one.data("state","1");
									
									panel_one_args[sizeName]=s1+"px";
									//$panel_one.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									//if($panel_two.data("sizing")=="relative")
									//{
										panel_two_args[sizeName]=(s2-s1)+"px"; //take size of panel 1 away from panel 2
									//	$panel_two.animate(args,d);
									//}
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-expand-one');
									$splitter.addClass(orientation+'-collapse-one');
									//$splitter.css(edgeName,-1);
									
									$panel_one.removeClass('split-panel-collapsed');
									
								
								}
							}
							else //expand & collapse the second panel
							{
								
							
								if($panel_two.data("state") =="1")
								{	
									//collapse panel two
									$panel_two.data("oldSize",s2);
									$panel_two.data("state","0");
									
									panel_two_args[sizeName]="0px";
									//$panel_two.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									//if($panel_one.data("sizing")=="relative")
									//{
										panel_one_args[sizeName]=(s1+s2)+"px"; //give all size to panel 1
									//	$panel_one.animate(args,d);
									//}	
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-collapse-two');
									$splitter.addClass(orientation+'-expand-two');
									
									$panel_two.addClass('split-panel-collapsed');
									
									//$splitter.css(edgeName,2);
								}
								else
								{	
									//expand panel two
									s2=$panel_two.data("oldSize");
									$panel_two.data("state","1");
									
									panel_two_args[sizeName]=s2+"px";
									//$panel_two.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									//if($panel_one.data("sizing")=="relative")
									//{
										panel_one_args[sizeName]=(s1-s2)+"px"; //take size of panel 2 away from panel 1
									//	$panel_one.animate(args,d);
									//}
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-expand-two');
									$splitter.addClass(orientation+'-collapse-two');
									//$splitter.css(edgename,-1);
									
									$panel_two.removeClass('split-panel-collapsed');
									
								
								}
							
							
							}
							
							//animate panel expand/collapse
							$panel_one.animate(panel_one_args,d);//,DWPE_Utilities.triggerResize);
							$panel_two.animate(panel_two_args,d,DWPE_Utilities.triggerResize);
									
							
							//prompt all components that adjustments due to resize may be in order
							//DWPE_Utilities.triggerComponentResize();
							
								
						}
					);
					
					
				
				}
				
			}
		
		);
	
	

		$(window).bind('resize',function()
		//$(window).bind('dwpe-component-resize',function()
		{
		
		/*-----
		
			now apply size to each panel based on current size of parent
			and the size requested by the panel
			
			------*/
		var d=250;  //animation duration
		var fixed=[];
		var relative=[];
		var horizontal=$ux.hasClass("dwpe-horizontal-splitter");
		var stretchTo;
		
		
		//console.log("resize: ", $ux.attr("id"));
		
		
		
		
		//fit splitter to parent container
		//$ux.hide();
		$ux.parent().css("overflow","hidden");
		
		var ww=$ux.parent().width();
		var hh=$ux.parent().height();
		
		/*fudge factor to ensure last collapsed pane splitbar is not clipped by right edge
			probably due to parent border not being counted properly
			needs analysis & rework*/
		if(horizontal)
		{	ww-=4;	}
		else
		{	hh-=4;	}
		
		$ux.width(ww);
		$ux.height(hh);
			
		//$ux.show();
		
		
		
		
		var avail_size;
		if(horizontal)
		{
			avail_size=ww;
			stretchTo=hh;
			
		}	
		else
		{	
			avail_size=hh;
			stretchTo=ww;
		
		}
		
		var total_size=avail_size;
		
		/*organize panels into fixed and relative sized*/
		$panels.each(
		
			function()
			{
				var $panel=$(this);
				var w=$panel.data("size")+"";
				
				if(w.indexOf("%")>-1)
				{
					relative.push($panel);
					$panel.data("sizing","relative");
				}
				else
				{	
					fixed.push($panel)
					$panel.data("sizing","fixed");
				}
			}
		);
		
		
		//console.log("as>split-bar ",avail_size);

		
		/*subtract the size of splitters from the total*/
		$ux.find(">DIV."+orientation+"-split-bar").each
		(	function()
			{
				var $s=$(this);
				if(horizontal)
				{	
					avail_size-=$s.outerWidth(true);
					$s.height(stretchTo);
				}	
				else
				{
					avail_size-=$s.outerHeight(true);
					$s.width(stretchTo);
				}
				
			
			}
		
		);
		
		//console.log("as ",avail_size);

		
		/*give fixed panels first shot at avail_size*/
		$(fixed).each
		(
			function()
			{
					var $panel=$(this);
					
					var state=$panel.data("state");
					
					
					var s=0;
					
					if(state=="1") //only calculate width if panel is open
					{	s=parseInt($panel.data("size"));	}
					

					if(horizontal)
					{	
						$panel.width(s);
						s=$panel.outerWidth(true);
						$panel.height(stretchTo);
					}	
					else
					{
						$panel.height(s);
						s=$panel.outerHeight(true);
						$panel.width(stretchTo);
					}
					avail_size-=s;
					//console.log($ux.attr("id"),avail_size);	
			}
		);
	
		/*give relative panels a shot at avail_size */
		var total_size_for_relative=avail_size;
		$(relative).each
		(
			function()
			{
					var $panel=$(this);
					
					var state=$panel.data("state");
					
					
					var s=0;
					
					if(state=="1") //only calculate width if panel is open
					{	s=$panel.data("size");
						s=parseInt(s)/100;   //convert percent to float
						s=parseInt(total_size_for_relative*s);
					}
					
					//$panel.data("sizing","fixed");
					//$panel.attr("size",s);  //we are now a fixed size panel	
					
					if(horizontal)
					{	
						$panel.width(s);
						s=$panel.outerWidth(true);
						$panel.height(stretchTo);
					}	
					else
					{
						$panel.height(s);
						s=$panel.outerHeight(true);
						$panel.width(stretchTo);
					}
					
					//console.log("as ",avail_size);
					avail_size-=s;
					
					
			}
		);
		
		
		/*give to/take from the last open panel the remaining size (avail_size can be negative) */
		var $last_panel=null;
		$panels.each(
			function()
			{
				var $panel=$(this);
					
				//don't count collapsed panels
				var state=$panel.data("state");
				if(state=="1")
					$last_panel=$panel;
				
				
			}
		);
		
		//console.log(avail_size);
		
		if($last_panel)// && avail_size>0)
		{
			if(horizontal)
			{	
				var s=$last_panel.outerWidth() +avail_size;
				$last_panel.width(s);
				//$last_panel.animate({width:s},d);
				
			}	
			else
			{
				var s=$last_panel.outerHeight() +avail_size;
				$last_panel.height(s);
				//$last_panel.animate({height:s},d);
					
			}
		}
		
		
		

	});
	
	DWPE_Utilities.triggerResize();
	
	
	
}
