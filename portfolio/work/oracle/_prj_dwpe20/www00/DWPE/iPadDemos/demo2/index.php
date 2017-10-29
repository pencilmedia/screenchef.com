<html>
<head>
	<title>iPad Demo 2</title>
	<script src="../../_jquery/js/jquery-1.4.2.min.js?11320" type="text/javascript"></script> 
	<script src="../../_jquery/js/jquery-ui-1.7.2.custom.min.js?11320" type="text/javascript"></script> 
	<link rel="stylesheet" href="../../_jquery/css/ui-darkness/jquery-ui-1.7.2.custom.css?11320">
	
	<script src="js/lane.js"></script>
	<link rel="stylesheet" href="css/lane.css">
	
	
	<script src="js/worklist.js"></script>
	<link rel="stylesheet" href="css/worklist.css">
	
	<script src="js/watchlist.js"></script>
	<link rel="stylesheet" href="css/watchlist.css">
	
	<script src="js/connections.js"></script>
	<link rel="stylesheet" href="css/connections.css">
	
	<script src="js/activity-stream.js"></script>
	<link rel="stylesheet" href="css/activity-stream.css">
	
	
	<script src="js/pool.js"></script>
	<link rel="stylesheet" href="css/pool.css">
	
	<meta name="viewport" content="initial-scale=1.0 , minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" />
	<link rel="stylesheet" media="all and (orientation:portrait)"  href="css/portrait.css">
	<link rel="stylesheet" media="all and (orientation:landscape)" href="css/landscape.css">

	
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
			
			$target=$(this);
			
			touch=e.targetTouches[0];
			
			
			laneStartPosition=$target.position().left;
			touchStartPosition=touch.pageX;
			
			//console.log("start"+laneStartPosition)
			//console.log(touchStartPosition)
			
			
			startX = laneStartPosition+touchStartPosition;
			
			startTime=new Date().getTime();
			
			
			if($("body").hasClass('portrait')) return;
			
			
			//apply focus
			$(".swim-lane").removeClass("focus");
			$target.closest('.swim-lane').addClass('focus')
			
			//event.preventDefault();
			
			
			return false;
		}
		
		
		function touchMove(event)
		{
			if($("body").hasClass('portrait')) return;
			
			var e=event.originalEvent;
			//	event.preventDefault();
			
				
			var curX = laneStartPosition+(touch.pageX-touchStartPosition);
			
			
			//var currLanePosition=$target.position().left;
			//console.log(currLanePosition)
			
			$target.css({left:curX+"px"});
			return false;
			
		}
		
		
		function touchEnd(event)
		{
			
			
			var distance=Math.abs(touch.pageX-touchStartPosition);
			
			
			if(Math.abs(distance)<10 && event.target.tagName.toLowerCase()=="input")
			{
				var $btn=$(event.target);
				var cmd=	$btn.attr("cmd")
					
					if(cmd) eval(cmd);
					
				return;
			}
			
			if($("body").hasClass('portrait')) return;
			
			
			endTime=new Date().getTime();
			
			var touchTime=endTime-startTime;
			
			var velocity=250/touchTime;
			
			
			var currLanePosition=$target.position().left;
			
			var dir=(touch.pageX>touchStartPosition)?1:-1;
			
			//var card_width=$target.closest('.item-container').find(">div:eq[0]");
			//var card_count=$target.closest('.item-container').find(">div").length;
			
			//console.log(card_width);
			//console.log(card_count);
			var lane_width=$target.closest('.item-container').width()
			
			//var lane_width=card_count*card_width;
			
			var throwX=currLanePosition+(distance*dir*velocity);
			
			throwX=(throwX>0)?0:throwX;
			throwX=(throwX<-lane_width+800)?-lane_width+800:throwX;
			
				
			$target.animate({left:throwX+"px"});
			
			return false;
		}
		
		function touchCancel(event)
		{
			return false;
		}
		
		
		function jog_start(event)
		{
			if($("body").hasClass('portrait')) return;
			
			var e=event.originalEvent;
				//event.preventDefault();
			
			$target=$(this);
			
			touch=e.targetTouches[0];
			
			startY=touch.pageY;
		}
		
		function jog_end(event)
		{
		
		
			if($("body").hasClass('portrait')) return;
			
			var $tr=$(this).closest('tr');
			var $lane=$($tr.find('#'+$tr.attr('lane')));
			
			
			
			var distance=Math.abs(touch.pageY-startY);
				if(distance>10) return;
			
			var card_index=	( $lane.data("card-index") ) ? $lane.data("card-index") :0;
				
			var children=$lane.find(">div");
				
				card_index++;
				card_index=(card_index>children.length-2)?0:card_index;
			
				$lane.data('card-index',card_index);
				
			var x=-$(children[card_index]).position().left;
			
			
			
			//x=(x>0)?0:x;
			//x=(x<-$lane.width()+card_width*2)?0:x;
			
			$lane.animate({left:x+"px"},1000,'swing');
				
		}
	
	
	
		//initialize
		var $orientation_detector=null;
		var last_orientation=null;
		$(
			function()
			{
			
				
			
				$(".swim-lane>DIV").live("touchstart",touchStart)
								   .live("touchmove",touchMove)
								   .live("touchend",touchEnd)
				                   .live("touchcancel",touchCancel);
				
				$(".item-container>DIV").each(
				
					function()
					{
						var $content=$(this);
						var h=$content.height();
						 	h+=	parseInt( $content.css("margin-top") ) + 
						 		parseInt( $content.css("margin-bottom") ) ;

						var w=$content.width();
						 	w+=	parseInt( $content.css("margin-left") );
						 
						 
						
						$content.closest(".swim-lane").height(h)
													  .data("card_width",w);
						
					}
				
				)
				
				$(".swim-lane-header").live("touchstart",jog_start);
				$(".swim-lane-header").live("touchend",jog_end);
				
				
				$orientation_detector=$("#orientation-detector");
				
				
				var poll_orientation = function() 
				{
					var orientation=($orientation_detector.width()==0)?"portrait":"landscape";
					  
					 if(last_orientation!=orientation)
					 {
					 	$('body').removeClass().addClass(orientation)
					 	pool.render($("#dynamic-pool"),orientation);
					 	last_orientation=orientation;
					 	
					 }
				  
				};
				
				
				poll_orientation();
				setInterval(poll_orientation, 10);
				
				
				
			
			
			}
		
		)
	
	</script>
	

</head>
<body>

<div id="dynamic-pool"></div>
<div id="orientation-detector"></div>

</body>
</html>
