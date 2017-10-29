<html xmlns:ux="*">
<head>
	<title>Cascaded Menu Pattern</title>
	<meta name="generator" content="BBEdit 9.3" />
	

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
		
	<style>
		
		
		
UX.dwpe-menu
{
	display:inline-block;
	margin:0px;
	padding:0px;
}


.dwpe-menu>ul
/*style top-level menu containers*/
{
	margin: 0;
	padding: 0;
	list-style-type: none;
}

.dwpe-menu>ul ul
/*style menu containers*/
{
	_margin: 0;
	padding: 0;
	list-style-type: none;
	background-color:#fff;
	border:1px solid #8eb4d1;
	
}

DIV.menu-shadow
{
	position:absolute;
	background-image:url(../components/images/window-shadow.png);
	-moz-background-size:100% 100%;
	padding:0px 7px 7px 0px;
	margin:0px;
	visibility:hidden;
}

/*Top level list items*/
.dwpe-menu>ul>li
{
	position: relative;
	display: inline-block;
	padding:0px;
}

/*menu link items style*/
.dwpe-menu>ul>li li
{
	display: block;
	padding:2px 18px 2px 18px;
	margin:0px 0px; 
	color: #000000;
	text-decoration: none;
	white-space:nowrap;

}

.dwpe-menu>ul>li li>A,
.dwpe-menu>ul>li li>A:link,
.dwpe-menu>ul>li li>A:visited,
.dwpe-menu>ul>li li>A:hover    /*accelerator key container*/
{
	position:relative;
	right:0px;
	text-align:right;
	margin-left:20px;
	color:#000;
	text-decoration:none
}

/*Hover for top-level menu item*/
.dwpe-menu>ul>li:hover
{ 
	cursor:pointer;
	color:#263340;
	border-color:#3f6a9c;
	background:#7aaada url(../components/images/button_bg_ovr.png) bottom left repeat-x;
}

/*Currently active top-level menu items' LI element*/
.dwpe-menu>ul>li.selected
{ 
	color: #263340;
	border-color:#54697b;
	background:#a3a8ad url(../components/images/button_bg_dwn.png) top left repeat-x;
}

/*Currently active secondary menu items' LI element*/
.dwpe-menu ul li.selected
{ 
	/*shepherd does not style the parent menu item in secondary menus*/
	background: #b7cfe2;
}

/*Hover for secondary menu items*/
.dwpe-menu ul li:hover
{
	background: #b7cfe2; 
}
	
/*1st sub level menu; hidden to begin with*/
.dwpe-menu ul li ul
{
	position: absolute;
	left: 0;
	display: none;
	visibility: hidden;
}

/*All secondary menus align their tops to their parent */
.dwpe-menu ul li ul li ul
{
	left:0px;
	top: 0px;
}

.dwpe-menu>UL>LI.top-level-parent
{
	padding: 0px 18px 0px 5px;
	background-image:url('../components/images/menus/top-level-menu-normal.png');
	background-position: center right;
	background-repeat:no-repeat;
}

.dwpe-menu>UL>LI.top-level-parent:hover
{
	background-image:url('../components/images/menus/top-level-menu-active.png');
	
}

.dwpe-menu>UL>LI.top-level-parent.selected
{
	background-image:url('../components/images/menus/top-level-menu-selected.png');

}

.dwpe-menu UL>LI.second-level-parent
{
	background-image:url('../components/images/menus/secondary-menu-normal.png');
	background-position: center right;
	background-repeat:no-repeat;
}

.dwpe-menu LI.radio.on
{
	background-image:url('../components/images/menus/menu-radio.png');
	background-position: center left;
	background-repeat:no-repeat;
}

.dwpe-menu LI.check.on
{
	background-image:url('../components/images/menus/menu-check.png');
	background-position: center left;
	background-repeat:no-repeat;
}

.dwpe-menu LI>HR
{
	border:none;
	background:#999;
	height:1px;
}
		
	</style>
	
	
	<script type="text/javascript">
		
		$(function()
			{
			
			
				//create a live function to manage cascaded menus
				
			
						/*manages the state of radio menu groups*/
						$("UX.dwpe-menu LI.radio").live('click',
							
							function(event,ui)
							{
								
								var $item=$(this);
								
								
								/*find the parent of this LI, then find all LIs that match this LIs group*/
								$item.closest("UL").find(">LI.radio[group='"+$item.attr('group')+"']").each
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
								
							});
							
						/*manages the state of check menus*/
						$("UX.dwpe-menu LI.check").live('click',
							
							function(event,ui)
							{
								
								$(this).toggleClass('on');
								
							});	
							
						
							
						
					
						
						$("UX.dwpe-menu").each(
						
						function()
						{
							
							var $ux=$(this);
							
							//find the UL inside our $ux
							var $mainmenu=$ux.find(">UL"); 
							
							
							//find the parents of all the ULs
							var $headers=$mainmenu.find("UL").parent();
							
							
							
							
							//add hover effect
							$headers.hover(
								function(e)
								{
									$(this).addClass('selected');
								},
								function(e)
								{
									$(this).removeClass('selected');
								}
							);
							
							
							
							$headers.each(
							
								function(i){ 
									
									//loop through each LI header
									var $item=$(this).css({zIndex: DWPE_WindowFactory.getNextZ()}) //reference current LI header
									
									
									var $submenu=$item.find('ul:eq(0)')
													  .css({display:'block'});
									
									//wrap every ul in a shadow div
									var $shadow=$("<div class='menu-shadow'></div>");
									$submenu.before($shadow);
									
									
									var $dim={	w:$item.outerWidth(true), 
												h:$item.outerHeight(true), 
												submenuW:$submenu.outerWidth(true), 
												submenuH:$submenu.outerHeight(true)
											};
									
									
									
									//$submenu.css({display:'none'});
									
									$submenu.data('timers', {});
									
									
									
									$item.data('dimensions',$dim);
										
									var isTopHeader=$item.parents("ul").length==1;
									
									$item.data('istopheader', isTopHeader);
									
									$submenu.css('top',isTopHeader?$dim.h:0); 
									
									$item.addClass(  isTopHeader? 
													'top-level-parent' : 
													'second-level-parent');
									
									
									
									var show_hide_delay=400;
									var anim_time=200;
									
									$item.hover(
										
										//enter
										function(e)
										{
											//submenu to reveal
											var $_submenu=$submenu;
											var $_shadow=$shadow;
											
											
											//reference header LI as DOM object
											var $_item=$item;
											
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
													
													
													
													
													
													if ($_submenu.queue().length<1)
													{ //if 1 or less queued animations
														
														$_submenu.css({	left:menuleft+"px",
																		width:menu_width+'px',
																		top:menu_top+"px",
																		visibility:'visible'})
																 .animate({width:'show',height:'show'}, anim_time,
																 
																 function(){
																 				$shadow.css('visibility','visible');
																 				$shadow.show();}
																 
																 );
														
														$_shadow.css({	left:menuleft+"px",
																		width:menu_width+'px',
																		top:menu_top+"px",
																		height:menu_height+"px"});
													
													}
													
													
												}, show_hide_delay  );
										},
										//leave
										function(e)
										{
											var $_submenu=$submenu
											var $_shadow=$shadow;
											
											var header=$item.get(0);
											
											clearTimeout($submenu.data('timers').showtimer)
											
											$_submenu.data('timers').hidetimer=setTimeout
											(	function()
												{
													$_submenu.animate({width:'hide',height:'hide'},anim_time); 
													$_shadow.animate({width:'hide',height:'hide'},anim_time); 
													
													
											}, show_hide_delay );
										}
									) //end hover
								}) //end $headers.each()
							
							
							
						}); //end each $ux	
							
					
			
			
			}); //end function
	
	
	</script>
	
	
</head>
<body style="background:#f0f0f0;padding:15px">

<h2>Development Pattern: Cascaded menu</h2>
<p>Roy Selig (3-16-2010) </p>
<br>




<ux class='dwpe-menu'>
	
	<ul>
		<li>Objects
			  <ul>
			  <li>Sub Item 1.1</li>
			  <li>Sub Item 1.2</li>
			  <li>Sub Item 1.3<a>CTRL-K</a></li>
			  <li>Sub Item 1.4</li>
			  <li>Sub Item 1.2</li>
			  <li>Sub Item 1.3</li>
			  <li>Sub Item 1.4</li>
			  </ul>
		</li>
		<li>View
		  <ul>
			  <li>Sub Item 1.1</li>
			  <li>Sub Item 1.2</li>
			  <li>Sub Item 1.3</li>
			  <li>Sub Item 1.4</li>
			  <li>Sub Item 1.2</li>
			  <li><hr></li>
			  <li class='radio on' group="rmg1">Sub Item 1.3</li>
			  <li class='radio'    group="rmg1">Sub Item 1.4</li> 
			  <li class='radio'    group="rmg1">Sub Item 1.5</li>
			  <li><hr></li>
			  <li class='check on'>Sub Item 1.6</li>
			  <li>Sub Item 1.7</li>
			  <li>Sub Item 1.8</li>
			  <li>Sub Item 1.9</li>
			  <li>Sub Item 1.10</li>
			  <li>Sub Item 1.11</li>
		  </ul>
		</li>
		<li>Format
		  <ul>
			  <li>Sub Item 2.1</li>
			  <li>Folder 2.1
				<ul>
					<li>Sub Item 2.1.1</li>
					<li>Sub Item 2.1.2 <a>CTRL-A</a></li>
					<li>Folder 3.1.1
						<ul>
							<li>Sub Item 3.1.1.1</li>
							<li>Sub Item 3.1.1.2</li>
							<li>Sub Item 3.1.1.3</li>
							<li>Sub Item 3.1.1.4</li>
							<li>Sub Item 3.1.1.5</li>
						</ul>
					</li>
					<li>Sub Item 2.1.4</li>
				</ul>
			  </li>
		  </ul>
		</li>
	</ul>
		
</ux>





</body>
</html>
