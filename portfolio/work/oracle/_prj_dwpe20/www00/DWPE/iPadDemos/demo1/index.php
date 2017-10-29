<html>
<head>
	<title>iPad Demo 1</title>
	<script src="/DWPE/_jquery/js/jquery-1.4.2.min.js?11320" type="text/javascript"></script> 
	<script src="/DWPE/_jquery/js/jquery-ui-1.7.2.custom.min.js?11320" type="text/javascript"></script> 
	<link rel="stylesheet" href="/DWPE/_jquery/css/ui-darkness/jquery-ui-1.7.2.custom.css?11320">
	
	
	
	<meta name="viewport" content="initial-scale=1.0 , user-scalable=no, width=device-width" />
	
	
	<script>
	
		
	
	</script>
	
	<script>
	
		
	
		var startX,
			startTouchX,
			startY,
			startTime,
			curX,
			curY,
			$target,
			touch;
			
		var laneStartPosition,
			touchStartPosition;	
			
		function touchStart(event)
		{
			var e=event.originalEvent;
				event.preventDefault();
			
			$target=$(this);
			
			touch=e.targetTouches[0];
			
			
			laneStartPosition=$target.position().left;
			touchStartPosition=touch.pageX;
			
			//console.log("start"+laneStartPosition)
			//console.log(touchStartPosition)
			
			
			startX = laneStartPosition+touchStartPosition;
			
			startTime=new Date().getTime();
			
			return false;
		}
		
		
		function touchMove(event)
		{
			var e=event.originalEvent;
				event.preventDefault();
			
				
			var curX = laneStartPosition+(touch.pageX-touchStartPosition);
			
			
			//var currLanePosition=$target.position().left;
			//console.log(currLanePosition)
			
			$target.css({left:curX+"px"});
			return false;
			
		}
		
		
		function touchEnd(event)
		{
			
			endTime=new Date().getTime();
			
			var touchTime=endTime-startTime;
			
			var velocity=100/touchTime;
			
			var distance=Math.abs(touch.pageX-touchStartPosition);
			
			var currLanePosition=$target.position().left;
			
			var dir=(touch.pageX>touchStartPosition)?1:-1;
			
			var card_width=$target.attr('card_width');
			
			var throwX=currLanePosition+(distance*dir*velocity);
			
			//throwX=parseInt(throwX / card_width)*card_width;
			
			
			throwX=(throwX>0)?0:throwX;
			throwX=(throwX<-$target.width()+1024)?-$target.width()+card_width*3:throwX;
			
				
			$target.animate({left:throwX+"px"});
			
			return false;
		}
		
		function touchCancel(event)
		{
			return false;
		}
		
		
		function jog_start()
		{
			var e=event.originalEvent;
				event.preventDefault();
			
			$target=$(this);
			
			touch=e.targetTouches[0];
			
			startY=touch.pageY;
		}
		
		function jog_end()
		{
		
		/*
			var e=event.originalEvent;
				event.preventDefault();
			
			$target=$(this);
			
			touch=e.targetTouches[0];
			
			endY=touch.pageY;
			
			if(endY-startY>10) return; */
			
			var $tr=$(this).closest('tr');
			var $lane=$tr.find('#'+$tr.attr('lane'));
				
			var card_width=$lane.attr('card_width');
				
				
			var x=$lane.position().left;
				x-=card_width;
			
			
			//x=(x>0)?0:x;
			x=(x<-$lane.width()+card_width*2)?0:x;
			
			$lane.animate({left:x+"px"});
				
		}
	
	
	
	
		$(
			function()
			{
			
				$(".swim-lane>img").live("touchstart",touchStart)
								   .live("touchmove",touchMove)
								   .live("touchend",touchEnd)
				                   .live("touchcancel",touchCancel);
				
				$(".swim-lane>img").each(
				
					function()
					{
						var $content=$(this);
						var h=$content.height();
						
						$content.closest("div").height(h);
					}
				
				)
				
				$(".swim-lane-header").live("touchend",jog_end)
			
			
			}
		
		)
	
	</script>
	
	
	<style>
		
		BODY{font-family:helvetica;margin:0px;padding:0px;}
		
		.swim-lane
		{
			display:block;
			position:relative;
			overflow:hidden;
			width:100%
		}
		
		.pool
		{
			position:relative;
			width:100%;
			background-color:#f0f0f0;
		}
		
		.pool>TBODY>TR
		{
			vertical-align:top;
			
		}
		
		.swim-lane>img
		{
			position:absolute;
			
		}
		
		.swim-lane-header
		{
			position:relative;
			color:#999;
			text-align:right;
			
			font-weight:bold;
			font-size:14px;
			border-right:5px solid #999;
			width:100px;
		}
		
		.swim-lane-title
		{
			position:relative;
			margin:20px 5px 20px 0px;
				
		}
		
		.swim-lane-row
		{
			position:relative;

			border-bottom:2px solid #999;
		}
		
		.swim-lane-title>h3
		{
			font-size:18px;
			font-weight:bold;
			color:#0000cc;
			
			margin:0;
		}
		
	</style>
</head>
<body>


<table cellpadding="0" cellspacing="0" class="pool" border="0">

	<tr lane="lane-1">
		<td class='swim-lane-header'> 
			<div class="swim-lane-title">
				<h3>Work List</h3> 14
			</div>
		</td>
		<td  class="swim-lane-row">	
		<div class="swim-lane" >
			
			<img id="lane-1"  src="images/worklist_strip.png" card_width="248" height="196">
		
		</div>
		</td>
	</tr>
	<tr lane="lane-2">
		<td class='swim-lane-header'> 
			<div class="swim-lane-title">
				<h3>Watch List</h3> 7
			</div>
		</td><td  class="swim-lane-row">		
		<div class="swim-lane">
			
			<img id="lane-2"  src="images/watchlist_strip.png"  card_width="235" height="161">
		
		</div>
	</tr>
	<tr lane="lane-3">
		<td class='swim-lane-header'> 
			<div class="swim-lane-title">
				<h3>Activities List</h3> 
			</div>
		</td>
		<td  class="swim-lane-row">	
		<div class="swim-lane" >
			
			<img id="lane-3"  src="images/activity_strip.png"  card_width="329" height="191">
		
		</div>
	</tr>
	<tr lane="lane-4">
		<td class='swim-lane-header'> 
			<div class="swim-lane-title">
				<h3>Connect List</h3> 7
			</div>
		</td><td  class="swim-lane-row">		
			<div class="swim-lane">
				
				<img id="lane-4"  src="images/connections_strip.png" card_width="184"  height="212">
			
			</div>
		</td>
	</tr>
</table>


</body>
</html>
