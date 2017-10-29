

pool=function(){}

pool.lane_template=''+
'	<tr lane="lane-%INDEX%">'+
'		<td class="swim-lane-header">'+ 
'			<div class="swim-lane-title">'+
'				<h3>%TITLE%</h3> %LENGTH%'+
'			</div>'+
'		</td>'+
'		<td  class="swim-lane-row">'+
'		<div class="swim-lane" >'+			
'			<div  id="lane-%INDEX%" class="item-container">%CONTENT%</div>'+
'		</div>'+
'		</td>'+
'	</tr>';

pool.lanes=new Array();

pool.render=function($parent,orientation)
{
					
	var html='<table cellpadding="0" cellspacing="0" class="pool" border="0">';
	
	for(var i=0;i<pool.lanes.length;i++)
	{
		var lane=pool.lanes[i];
		
		
		var lane_html=pool.lane_template;
			lane_html=
			lane_html.replace(/%INDEX%/gi,i)
				     .replace(/%LENGTH%/,lane.items.length)
				     .replace(/%CONTENT%/,lane.render(orientation))
				     .replace(/%TITLE%/,lane.title);
	
		html+=lane_html;
	}
	
	html+="</table>";
	
	$parent.html(html);
	
	

}


$(
	function()
	{
	
		
		pool.lanes.push(worklist);	
						worklist.sort("status");
		
		pool.lanes.push(watchlist);	
						watchlist.sort("area");
						
		pool.lanes.push(activity_stream);	
						activity_stream.sort("activity-stream");				
		
		pool.lanes.push(connections);	
						connections.sort("person");
		
	
	}
)