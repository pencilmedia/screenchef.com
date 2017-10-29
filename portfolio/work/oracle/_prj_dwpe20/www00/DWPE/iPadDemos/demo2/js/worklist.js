	

/*Set the class that our class will inherit from*/
var worklist_class=function(){return this;}
worklist_class.prototype=new lane_class();

/*Set and Define our own class constructor*/
worklist_class.constructor=worklist_class;
worklist_class.prototype._super=lane_class.prototype;


worklist_class.prototype.items=new Array();
worklist_class.prototype.template_landscape=''+
'<div class="worklist-item">'+
'	<div class="title %STATUS-LEVEL%">%TYPE%</div>'+
'	<div class="body">'+
'		<table>'+
'			<tr valign="top"><td><div class="worklist-icon  %STATUS-LEVEL%"></div></td>'+
'				<td><div class="msg">%TITLE%</div>'+
'			        <div class="timestamp">%TIMESTAMP%</div>'+
'			</td></tr>'+
'		</table>'+				
'	</div>'+
'	<div class="actions">%ACTIONS%</div>'+
'</div>';

worklist_class.prototype.template_portrait=''+
'<div class="worklist-item">'+
'	<div class="statusbar %STATUS-LEVEL%"></div>'+
'	<div class="body-portrait">'+
'		<table width="100%" cellpadding="5">'+
'			<tr valign="top"><td><div class="worklist-icon  %STATUS-LEVEL%"></div></td>'+
'				<td><div class="msg">%TITLE%</div></td>'+
'				<td><div class="sender">%SENDER%</div></td>'+
'			    <td><div class="timestamp">%TIMESTAMP%</div></td>'+
'			    <td><div class="actions">%ACTIONS%</div></td>'+
'           </tr>  '+
'		</table>'+				
'	</div>'+
'</div>';



worklist_class.prototype.action_template="<input type='button' value='%ACTION%' cmd='alert(\"%ACTION%\")'/>";
worklist_class.prototype.render=function(orientation)
{
	var html="";
	var now=new Date().getTime();
	
	
		this.name="worklist";	
	html+=this.getSortControls(orientation);
	
	
	for(var i=0;i<this.items.length;i++)
	{
		var item=this.items[i];
		
		var status_level=item.type.replace(/ /gi,"-");
		
		var icon="icon";
		var actions="";
		for(var j=0;j<item.actions.length;j++)
		{	var btn=this.action_template.replace(/%ACTION%/gi,item.actions[j]);	
				actions+=btn;
		}
		
		var time=now+(item.timestamp*60*1000);
		var timestamp=this.formatDateTime(time);
			
		var template;	
			if(orientation=="landscape")
			{
				template=this.template_landscape;
			}
			else
			{
				template=this.template_portrait;
			}
			
			html+=template
							.replace(/%TYPE%/gi, item.type)
							.replace(/%STATUS-LEVEL%/gi, status_level)
							.replace(/%ICON%/gi, icon)
							.replace(/%TITLE%/gi, item.title)
							.replace(/%SENDER%/gi, item.sender)
							.replace(/%TIMESTAMP%/gi, timestamp)
							.replace(/%ACTIONS%/gi, actions);
							
						
	}
	
	return html;
}


worklist_class.prototype.title="Work<br>List";


var worklist=new worklist_class();

worklist.items.push(	{	
					type:"Assigned",
					title:"Requisition Approval for Terry Green 58,536.42",
					sender:"Terry Green",
					timestamp:-11,
					actions:[	"Approve","Deny","Open"		]
					
						}
					);
				
worklist.items.push(	{	
					type:"Information Requested",
					title:"Receipt Confirmation for Terry Luca PO 73259",
					sender:"Buyer",
				
					timestamp:-27,
					
				actions:[	"Delete","Open"		],
				}	);
				
worklist.items.push(	{	
					type:"Escalated",
					title:"Job Offer Response for Jamie Miller US4234",
					sender:"HR Offers",
					timestamp:-30,
					actions:[	"Approve","Deny","Open"		],
					
				}	);
				
worklist.items.push(	{	
					type:"Assigned",
					title:"Vacation Request for Samuel Nielsen 7/21 - 7/27 7 Days",
					sender:"Samuel Nielsen",
					timestamp:-44,
					actions:[	"Approve","Deny","Open"		],
					
				}	);

worklist.items.push(	{	
					type:"Assigned",
					title:"Requisition Approval for Mindy Crawford 663.00 USD",
					sender:"Mindy Crawford",
					timestamp:-100,
					actions:[	"Approve","Deny","Open"		],
					
				}	);
				
worklist.items.push(	{	
					type:"Information Requested",
					title:"Requisition Approval for Joe Smith 91,022.10 INR",
					sender:"Joe Smith",
					timestamp:-127,
					actions:[	"Delete","Open"		],
					
				}	);
				
worklist.items.push(	{	
					type:"Escalated",
					title:"Expense Approval For Claudia Mendez 5,699.00 USD",
					sender:"Pat Thomas",
					timestamp:-130,
					actions:[	"Approve","Deny","Open"		],
					
				}	);


worklist.items.push(	{	
					type:"Assigned",
					title:"Purchase Order Receipt Confirmation PO 234567",
					sender:"Buyer",
					timestamp:-200,
					actions:[	"Approve","Deny","Open"		],
					
				}	);
				
worklist.items.push(	{	
					type:"Information Requested",
					title:"Job offer for Matt Williams",
					timestamp:-400,
					actions:[	"Delete","Open"		],
					sender:"HR Offers"
				}	);	
				

worklist.items.push(	{	
					type:"Assigned",
					title:"Cannot Implement Change Order 4 Requistion 3456",
					sender:"Beth Easterling",
					timestamp:-500,
					actions:[	"Approve","Deny","Open"		],
					
				}	);	
				
worklist.items.push(	{	
					type:"Assigned",
					title:"Cancellation PO 1234 Requisition 3456",
					sender:"Beth Easterling",
					timestamp:-600,
					actions:[	"Approve","Deny","Open"		],
					
				}	);
				
worklist.items.push(	{	
					type:"Assigned",
					title:"Requisition Approval for Beth Easterling 45.0 USD",
					sender:"Amber Ducket",
					timestamp:-800,
					actions:[	"Approve","Deny","Open"		],
					
				}	);		
				
worklist.items.push(	{	
					type:"Information Requested",
					title:"Purchase Order Account Verification PO 73259",
					sender:"Terry Green",
					timestamp:-900,
					actions:[	"Delete","Open"		],
					
				}	);		
				
				
worklist.items.push(	{	
					type:"Assigned",
					title:"Requisition Approval for Terry Green 69.23 USD",
					sender:"Terry Green",
					timestamp:-1000,
					actions:[	"Approve","Deny","Open"		]
				}	);				
				
worklist.sort("timestamp");		


			
				