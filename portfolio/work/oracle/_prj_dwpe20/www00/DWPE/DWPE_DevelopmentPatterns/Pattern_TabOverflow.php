<html>
<head>
	<title>Tab Overflow Pattern</title>
	<meta name="generator" content="BBEdit 9.3" />
	

	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources4.php'?>
	
	<style>

		UX.dwpe-tabset
		{	position:relative;
			border:1px solid #00cc00;	
			overflow:hidden;
		}
		
		UL.dwpe-tabs
		{	
			position:relative;
			margin:0px;
			padding:0px;
			z-index:0;
			white-space:nowrap;
			display:block;
		}
		
			
		LI.dwpe-tab
		{	line-height:19px;
			list-style-image:none;
			list-style-position:outside;
			list-style-type:none;
			position:relative;
			display:inline-block;
		
			font-family: Tahoma;
			font-size: 11px;
			
			background:#d8dfe6 url(../images/button_bg_ena.png) bottom left repeat-x;
			border-color:#708ba4;
			border-style:solid;
			border-width:1px;	
		
			color: #263340;
			padding:0px 9px;
			text-decoration:none;
			white-space:nowrap;
			margin:0px 0px;
		
		}
		
		LI.dwpe-tab.selected
		{
			background:#fff;
		}
			
		LI.dwpe-overflow-btn
		{	position:relative;
			border:1px solid #cccccc;
			background:#f0f0f0;	
			display:inline-block;			}
			
		LI.dwpe-overflow-btn.active
		{
			color:#fff;
			background:#000;
		}
		
		UL.DWPE_window_overflow>LI.dwpe-tab
		{
			display:block;
			border:none;
		}
	
		DIV.dwpe-tab-panels>DIV
		{
			display:none;
			border:1px solid #0000cc;
			padding:25px;
			height:100px;
			text-align:left;
			background:#f0f0f0;
		}
		
		
	
		TABLE.dwpe_window		{position:absolute;}
		UL.dwpe_window_overflow{position:relative;background:#fff;}
	
		.nest
		{margin-left:50px;}
	</style>
	
	
</head>
<body style="padding:15px">

<h2>Development Pattern: Tab Overflow</h2>
<p>Roy Selig (3-3-2010) demonstrates how to manage right and left side overflow of tabs.
	Pattern manages tabsets without requiring tabs to carry ids beforehand, which means 
	we can support multiple tabsets on the page without id collision.  
<br>

<h3>float layout</h3>

<div style="white-space:nowrap;">
		<p style="float:left">My Long bit of text</p>
		
		<ux id='tabset-uid-1' class='dwpe-tabset' size='80%'  style="width:80%;float:right">
			<ul   class='dwpe-tabs'>
				<li>Tab 1</li>
				<li>Tab 2</li>
				<li>Tab 3</li>
				<li>Tab 4</li>
				<li>Tab 5</li>
				<li>Tab 6</li>
				<li>Tab 7</li>
				<li>Tab 8</li>
				<li>Tab 9</li>
				<li>Tab 10</li>
				<li>Tab 11</li>
				<li>Tab 12</li>
				<li>Tab 13</li>
				<li>Tab 14</li>
				<li>Tab 15</li>
				<li>Tab 16</li>
				<li>Tab 17</li>
				<li>Tab 18</li>
				<li>Tab 19</li>
				<li>Tab 20</li>
				<li>Tab 21</li>
				<li>Tab 22</li>
				<li>Tab 23</li>
				<li>Tab 24</li>
				<li>Tab 25</li>
				<li>Tab 26</li>
				<li>Tab 27</li>
				<li>Tab 28</li>
				<li>Tab 29</li>
				<li>Tab 30</li>
			</ul>
			<div class='dwpe-tab-panels'>
					<div>Tab 1 Panel</div>
					<div>Tab 2 Panel</div>
					<div>Tab 3 Panel</div>
					<div>Tab 4 Panel</div>
					<div>Tab 5 Panel</div>
					<div>Tab 6 Panel</div>
					<div>Tab 7 Panel</div>
					<div>Tab 8 Panel</div>
					<div>Tab 9 Panel</div>
					<div>Tab 10 Panel</div>
					<div>Tab 11 Panel</div>
					<div>Tab 12 Panel</div>
					<div>Tab 13 Panel</div>
					<div>Tab 14 Panel</div>
					<div>Tab 15 Panel</div>
					<div>Tab 16 Panel</div>
					<div>Tab 17 Panel</div>
					<div>Tab 18 Panel</div>
					<div>Tab 19 Panel</div>
					<div>Tab 20 Panel</div>
					<div>Tab 21 Panel</div>
					<div>Tab 22 Panel</div>
					<div>Tab 23 Panel</div>
					<div>Tab 24 Panel</div>
					<div>Tab 25 Panel</div>
					<div>Tab 26 Panel</div>
					<div>Tab 27 Panel</div>
					<div>Tab 28 Panel</div>
					<div>Tab 29 Panel</div>
					<div>Tab 30 Panel</div>
				</div>
		</ux>
	
</div>
<div style="clear:both"/>



<br><br><br><br>



<h3>table layout with divs</h3>

<div style="display:block;border:1px solid #cc0000">
	<div style="display:table-row;">
		<div style='display:table-cell'>My Long bit of text</div>
		<div style='display:table-cell;'>
			<ux id='tabset-uid-2' class='dwpe-tabset' size='80%' style='float:right;text-align:right'>
				<ul class='dwpe-tabs'>
					<li>Tab 1</li>
					<li>Tab 2</li>
					<li>Tab 3</li>
					<li>Tab 4</li>
					<li>Tab 5</li>
					<li>Tab 6</li>
					<li>Tab 7</li>
					<li>Tab 8</li>
					<li>Tab 9</li>
					<li>Tab 10</li>
					<li>Tab 11</li>
					<li>Tab 12</li>
					<li>Tab 13</li>
					<li>Tab 14</li>
					<li>Tab 15</li>
					<li>Tab 16</li>
					<li>Tab 17</li>
					<li>Tab 18</li>
					<li>Tab 19</li>
					<li>Tab 20</li>
					<li>Tab 21</li>
					<li>Tab 22</li>
					<li>Tab 23</li>
					<li>Tab 24</li>
					<li>Tab 25</li>
					<li>Tab 26</li>
					<li>Tab 27</li>
					<li>Tab 28</li>
					<li>Tab 29</li>
					<li>Tab 30</li>
				</ul>
				<div class='dwpe-tab-panels'>
					<div>Tab 1 Panel</div>
					<div>Tab 2 Panel</div>
					<div>Tab 3 Panel</div>
					<div>Tab 4 Panel</div>
					<div>Tab 5 Panel</div>
					<div>Tab 6 Panel</div>
					<div>Tab 7 Panel</div>
					<div>Tab 8 Panel</div>
					<div>Tab 9 Panel</div>
					<div>Tab 10 Panel</div>
					<div>Tab 11 Panel</div>
					<div>Tab 12 Panel</div>
					<div>Tab 13 Panel</div>
					<div>Tab 14 Panel</div>
					<div>Tab 15 Panel</div>
					<div>Tab 16 Panel</div>
					<div>Tab 17 Panel</div>
					<div>Tab 18 Panel</div>
					<div>Tab 19 Panel</div>
					<div>Tab 20 Panel</div>
					<div>Tab 21 Panel</div>
					<div>Tab 22 Panel</div>
					<div>Tab 23 Panel</div>
					<div>Tab 24 Panel</div>
					<div>Tab 25 Panel</div>
					<div>Tab 26 Panel</div>
					<div>Tab 27 Panel</div>
					<div>Tab 28 Panel</div>
					<div>Tab 29 Panel</div>
					<div>Tab 30 Panel</div>
				</div>
			</ux>
		</div>
	</div>
</div>



<br><br><br>



<h3>table layout</h3>


<table width="100%">
	<tr>
		<td>My Long bit of text</td>
		<td align="right">
			<ux id='tabset-uid-3' class='dwpe-tabset' size='80%' >
				<ul class='dwpe-tabs'>
					<li>Tab 1</li>
					<li>Tab 2</li>
					<li>Tab 3</li>
					<li>Tab 4</li>
					<li>Tab 5</li>
					<li>Tab 6</li>
					<li>Tab 7</li>
					<li>Tab 8</li>
					<li>Tab 9</li>
					<li>Tab 10</li>
					<li>Tab 11</li>
					<li>Tab 12</li>
					<li>Tab 13</li>
					<li>Tab 14</li>
					<li>Tab 15</li>
					<li>Tab 16</li>
					<li>Tab 17</li>
					<li>Tab 18</li>
					<li>Tab 19</li>
					<li>Tab 20</li>
					<li>Tab 21</li>
					<li>Tab 22</li>
					<li>Tab 23</li>
					<li>Tab 24</li>
					<li>Tab 25</li>
					<li>Tab 26</li>
					<li>Tab 27</li>
					<li>Tab 28</li>
					<li>Tab 29</li>
					<li>Tab 30</li>
				</ul>
				<div class='dwpe-tab-panels'>
					<div>Tab 1 Panel</div>
					<div>Tab 2 Panel</div>
					<div>Tab 3 Panel</div>
					<div>Tab 4 Panel</div>
					<div>Tab 5 Panel</div>
					<div>Tab 6 Panel</div>
					<div>Tab 7 Panel</div>
					<div>Tab 8 Panel</div>
					<div>Tab 9 Panel</div>
					<div>Tab 10 Panel</div>
					<div>Tab 11 Panel</div>
					<div>Tab 12 Panel</div>
					<div>Tab 13 Panel</div>
					<div>Tab 14 Panel</div>
					<div>Tab 15 Panel</div>
					<div>Tab 16 Panel</div>
					<div>Tab 17 Panel</div>
					<div>Tab 18 Panel</div>
					<div>Tab 19 Panel</div>
					<div>Tab 20 Panel</div>
					<div>Tab 21 Panel</div>
					<div>Tab 22 Panel</div>
					<div>Tab 23 Panel</div>
					<div>Tab 24 Panel</div>
					<div>Tab 25 Panel</div>
					<div>Tab 26 Panel</div>
					<div>Tab 27 Panel</div>
					<div>Tab 28 Panel</div>
					<div>Tab 29 Panel</div>
					<div>Tab 30 Panel</div>
				</div>
				
			</ux>
		</td>
		<td colspan='2'>
			
		</td>
	</tr>
</table>


<br><br><br>

<h3>Inline Layout With Nested Tabs</h3>
Tabs nested on Tab 21 > Tab 11 
<br>

<ux id='tabset-uid-4' class='dwpe-tabset' size='80%'>
	<ul class='dwpe-tabs'>
		<li>Tab 1</li>
		<li>Tab 2</li>
		<li>Tab 3</li>
		<li>Tab 4</li>
		<li>Tab 5</li>
		<li>Tab 6</li>
		<li>Tab 7</li>
		<li>Tab 8</li>
		<li>Tab 9</li>
		<li>Tab 10</li>
		<li>Tab 11</li>
		<li>Tab 12</li>
		<li>Tab 13</li>
		<li>Tab 14</li>
		<li>Tab 15</li>
		<li>Tab 16</li>
		<li>Tab 17</li>
		<li>Tab 18</li>
		<li>Tab 19</li>
		<li>Tab 20</li>
		<li>Tab 21</li>
		<li>Tab 22</li>
		<li>Tab 23</li>
		<li>Tab 24</li>
		<li>Tab 25</li>
		<li>Tab 26</li>
		<li>Tab 27</li>
		<li>Tab 28</li>
		<li>Tab 29</li>
		<li>Tab 30</li>
	</ul>
	<div class='dwpe-tab-panels'>
		<div>Tab 1 Panel</div>
		<div>Tab 2 Panel</div>
		<div>Tab 3 Panel</div>
		<div>Tab 4 Panel</div>
		<div>Tab 5 Panel</div>
		<div>Tab 6 Panel</div>
		<div>Tab 7 Panel</div>
		<div>Tab 8 Panel</div>
		<div>Tab 9 Panel</div>
		<div>Tab 10 Panel</div>
		<div>Tab 11 Panel</div>
		<div>Tab 12 Panel</div>
		<div>Tab 13 Panel</div>
		<div>Tab 14 Panel</div>
		<div>Tab 15 Panel</div>
		<div>Tab 16 Panel</div>
		<div>Tab 17 Panel</div>
		<div>Tab 18 Panel</div>
		<div>Tab 19 Panel</div>
		<div>Tab 20 Panel</div>
		<div style='position:relative;padding:5px;height:auto'>
		
		<b>Tab 21 panel</b>
			<ux id='tabset-uid-5' class='dwpe-tabset' size='100%'>
			<ul class='dwpe-tabs'>
				<li>Tab 1</li>
				<li>Tab 2</li>
				<li>Tab 3</li>
				<li>Tab 4</li>
				<li>Tab 5</li>
				<li>Tab 6</li>
				<li>Tab 7</li>
				<li>Tab 8</li>
				<li>Tab 9</li>
				<li>Tab 10</li>
				<li>Tab 11</li>
				<li>Tab 12</li>
				<li>Tab 13</li>
				<li>Tab 14</li>
				<li>Tab 15</li>
				<li>Tab 16</li>
				<li>Tab 17</li>
				<li>Tab 18</li>
				<li>Tab 19</li>
				<li>Tab 20</li>
				<li>Tab 21</li>
				<li>Tab 22</li>
				<li>Tab 23</li>
				<li>Tab 24</li>
				<li>Tab 25</li>
				<li>Tab 26</li>
				<li>Tab 27</li>
				<li>Tab 28</li>
				<li>Tab 29</li>
				<li>Tab 30</li>
			</ul>
			<div class='dwpe-tab-panels'>
				<div>Tab 1 Panel</div>
				<div>Tab 2 Panel</div>
				<div>Tab 3 Panel</div>
				<div>Tab 4 Panel</div>
				<div>Tab 5 Panel</div>
				<div>Tab 6 Panel</div>
				<div>Tab 7 Panel</div>
				<div>Tab 8 Panel</div>
				<div>Tab 9 Panel</div>
				<div>Tab 10 Panel</div>
				<div style='position:relative;padding:5px;height:auto'>
				<b>Tab 11 Panel</b>
				
							
					<ux id='tabset-uid-6' class='dwpe-tabset' level='3' size='100%'>
						<ul class='dwpe-tabs'>
							<li>Tab 1</li>
							<li>Tab 2</li>
							<li>Tab 3</li>
							<li>Tab 4</li>
							<li>Tab 5</li>
							<li>Tab 6</li>
							<li>Tab 7</li>
							<li>Tab 8</li>
							<li>Tab 9</li>
							<li>Tab 10</li>
							<li>Tab 11</li>
							<li>Tab 12</li>
							<li>Tab 13</li>
							<li>Tab 14</li>
							<li>Tab 15</li>
					
						</ul>
						<div class='dwpe-tab-panels'>
							<div>Tab 1 Panel</div>
							<div>Tab 2 Panel</div>
							<div>Tab 3 Panel</div>
							<div>Tab 4 Panel</div>
							<div>Tab 5 Panel</div>
							<div>Tab 6 Panel</div>
							<div>Tab 7 Panel</div>
							<div>Tab 8 Panel</div>
							<div>Tab 9 Panel</div>
							<div>Tab 10 Panel</div>
							<div>Tab 11 Panel</div>
							<div>Tab 12 Panel</div>
							<div>Tab 13 Panel</div>
							<div>Tab 14 Panel</div>
							<div>Tab 15 Panel</div>
					
						</div>
					</ux>
					
				
				
				
				</div>
				<div>Tab 12 Panel</div>
				<div>Tab 13 Panel</div>
				<div>Tab 14 Panel</div>
				<div>Tab 15 Panel</div>
				<div>Tab 16 Panel</div>
				<div>Tab 17 Panel</div>
				<div>Tab 18 Panel</div>
				<div>Tab 19 Panel</div>
				<div>Tab 20 Panel</div>
				<div>Tab 21 Panel</div>
				<div>Tab 22 Panel</div>
				<div>Tab 23 Panel</div>
				<div>Tab 24 Panel</div>
				<div>Tab 25 Panel</div>
				<div>Tab 26 Panel</div>
				<div>Tab 27 Panel</div>
				<div>Tab 28 Panel</div>
				<div>Tab 29 Panel</div>
				<div>Tab 30 Panel</div>
			</div>
		</ux>
				
		</div>
		<div>Tab 22 Panel</div>
		<div>Tab 23 Panel</div>
		<div>Tab 24 Panel</div>
		<div>Tab 25 Panel</div>
		<div>Tab 26 Panel</div>
		<div>Tab 27 Panel</div>
		<div>Tab 28 Panel</div>
		<div>Tab 29 Panel</div>
		<div>Tab 30 Panel</div>
	</div>
</ux>



<script type="text/javascript">

$(function(){ makeTabs()	});

function makeTabs()
{

	//find our $ux tag
	$("ux.dwpe-tabset").each(
	
		function()
		{
			
			var $ux=$(this); //make a closure so we can use it later
			var id=$ux.attr("id");
			
			//save our preferred size into $ux data object
			var size=$ux.attr('size')?$ux.attr('size'):"100%";
			$ux.data('size',size);
			
			
			//pick up the default tab, if not defined, assign first tab
			var default_tab=$ux.attr("default_tab")||0;
			
		
			
			//acquire a handle to all the tab LIs in the tabset
			var $tabs=$ux.find('>UL>LI'); 
			
			//give each LI that this tabset owns its tab class
			$tabs.each(
			
				function(i)
					{
							var $tab=$(this);
							$tab.addClass("dwpe-tab");	
							$tab.attr('id',id+"-tab-"+i);
							$tab.click(
								
								function(){showTabPanel($ux,i);}
								
							);
					}
			)
			
			//set the first tab, used in overflow calculations
			$ux.data('first-tab',0);
			
			//set the last tab, used in overflow calculations
			$ux.data('last-tab',$tabs.length-1);
			
			
			
			//acquire a handle to all the tab panel DIVs in the tabset
			var $tab_panels=$ux.find('>DIV>DIV'); 
			
			//give each panel that this tabset owns its panel class
			$tab_panels.each(
			
				function(i)
					{
							
							var $tab_panel=$(this);
							$tab_panel.attr('id',id+"-tabpanel-"+i);
					
							//by default, first panel is shown
							if(i==default_tab)
							{	$ux.data("current-panel",$tab_panel);
								
							}
					}
			)
			
			showTabPanel($ux,default_tab);
			
			
			//add the overflow controls
			var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore">&lt;&lt;</li>');
			$ux.find('>UL').prepend($overflow_btn_fore);
			
			var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft">&gt;&gt;</li>');
			$ux.find('>UL').append($overflow_btn_aft);
			
			//bind an overflow handler to our overflow controls
			$overflow_btn_fore.click(function(){handleTabOverflowClick($ux,'fore');});
			$overflow_btn_aft.click(function(){handleTabOverflowClick($ux,'aft');});
			
			//force window to call on our tabset to manage overflow when a window resize occurs
			$(window).resize(function(){manageTabOverflow($ux);})
			
			//force tabs to evaluate for overflow once so that tabs layout correctly on page load
			manageTabOverflow($ux);
		}
		
	);//end each


}

function manageTabOverflow($ux)
{
	//determine our parent's size
	var pW=$ux.parent().width();
	
	
	//determine how much size we can take and apply it to our container
	var size=$ux.data('size');
		if(size.indexOf('%')>-1)
		{
			size=(parseInt(size)/100)*pW;
		}
		else
		{
			size=parseInt(size);
		}
	$ux.width(size);
	
	

	
	
	/*if we take up more room than our parent offers (w>size)
	  we have triggered an overflow condition*/
	 
	
	
	//undhide our overflow button so it can be counted in scrollWidth calculations
	$overflow_fore=$ux.find(">UL>LI.fore").show();
	$overflow_aft=$ux.find(">UL>LI.aft").show();
	
	
		//if($ux.attr('level')=="3") 
		//console.log($ux.attr('id'),pW,size);
			
	
	//iterate our tabs and show the ones that are in bounds
	var overflown=false;
	//set width to the width of our overflow controls, to ensure they have room to paint if we need them
	var w=$overflow_fore.outerWidth(true);
	    w+=$overflow_aft.outerWidth(true);
		w+=50; //add a fudge factor
	
	
	//get static values for first and last tab
	var first_tab=$ux.data("first-tab");
	var last_tab=$ux.data("last-tab");
	
	
	
	//grab our tabs, we do it each time to catch tabs that may have arrived dynamically
	var $tabs=$ux.find(">UL>LI.dwpe-tab");
	
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
				$tab.show();
			
				//add the width of this tab to our total width
				w+=$tab.outerWidth(true);
				
				
				if(w>size) 		 		//we are out of bounds so hide it again and set the overflown flag
				{
					$tab.hide();
					overflown=true;
				}
				else					//we are still in bounds and record this tab position as last tab, because it may be
				{
					last_tab=i;
				}
			}
			
			
		}
	
	);
	
	//store off first and last tabs, in case they have just changed
	$ux.data("first-tab",first_tab);
	$ux.data("last-tab",last_tab);
	
	
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

function handleTabOverflowClick($ux,type)
{
	//get a handle to the overflow button
	var $overflow_btn=$ux.find(".dwpe-overflow-btn."+type+":first");
	
	
	
	//make a overflow menu object
	var menu_id="tabset-overflow";
	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);
	var $menu_body=$("#"+menu_id+"-body");
	
	
	//get static values for first and last tab
	var first_tab=$ux.data("first-tab");
	var last_tab=$ux.data("last-tab");
	
	/*determine the outlier tabs and append them to an overflow menu body */
	$ux.find(">UL>LI.dwpe-tab:hidden").each
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
			
			//bind a click event to the item which sets this tab as the firt tab
			$c.click(
			
				function()
				{
					$ux.data("first-tab",$tab.data('tab-index'));
				
				
					
				}
			
			);
				
					
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


function showTabPanel($ux,tab_index)
{
	var $current_panel=$ux.data("current-panel");
	var $current_tab=$ux.data("current-tab");
	
	if($current_panel && $current_panel.length>0)
	{
		$current_panel.slideUp(250);
	}
	
	if($current_tab && $current_tab.length>0)
	{
		$current_tab.removeClass('selected');
	}
	
	var id= $ux.attr("id");
	
	var $new_tab=$("#"+id+"-tab-"+tab_index);
	var $new_panel=$ux.find("#"+id+"-tabpanel-"+tab_index);
	
	if($new_panel.length>0)
	{	$ux.data("current-panel",$new_panel);
		$ux.data("current-tab",$new_tab);
		
		$new_tab.addClass('selected');
		
		$new_panel.slideDown(250, 
								function(){//now that we have presumably changed tab panels, force a resize event
									$(window).trigger('resize');}
							);
		
		
		
		
		
	}
	
}

function insert(){}

</script>

</body>
</html>
