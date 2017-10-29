var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var $preview=$("#preview").css('min-height',400);
		
	
	performanceTests=[1,2,3,4,5,6,7,8,9,10];
	
	
	var myItem;

	var $tree=$("#test-tree")
	
	$tree.data(  "default-object", DWPE_WindowFactory.getDefaultArgsListForType("menu-item") );
	$tree.data(  "properties-sheet-template",	 DWPE_WindowFactory.getPropertySheetFields('menu-item') ); 	
									
	$tree.data(  "manage-form-state",  function()
	{
		var type=$("#item__item_type").val();
		
		switch(type)
			{
				case 'radio':
				
					$("#label-row").show()
					$("#state-row").show();
					$("#key-row").show();
					$("#selected-row").show();
					$("#group-row").show();
					$("#tooltip-row").show();
					$("#cmd-row").show();
					break;
				case 'toggle':
					
					$("#label-row").show()
					$("#state-row").show();
					$("#key-row").show();
					$("#selected-row").show();
					$("#group-row").hide();
					$("#tooltip-row").show();
					$("#cmd-row").show();
				
					break;
				case 'separator':
					
					
					$("#item__label").val("----------");
					$("#label-row").hide()
					$("#state-row").hide();
					$("#key-row").hide();
					$("#selected-row").hide();
					$("#group-row").hide();
					$("#tooltip-row").hide();
					$("#cmd-row").hide();
				
					
					break;	
				case 'normal':
					$("#label-row").show()
					$("#state-row").show();
					$("#key-row").show();
					$("#selected-row").hide();
					$("#group-row").hide();
					$("#tooltip-row").show();
					$("#cmd-row").show();
					break;
				
				default:
					break;
				
			}
	});
		
	var numberOfItemsToDisplay =4;
	var data=new Array();
	for (i=1;i<=numberOfItemsToDisplay;i++)
	{
		myItem=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
		myItem.label="Menu Item " + i;
		
		
		myItem.items=new Array();
		for(var j=1;j<10;j++)
		{
			var subItem=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
				subItem.label="Menu Item " + i +"."+j;
				
				if(j==1)
				{
					subItem.items=new Array();
					for(var k=1;k<33;k++)
					{
						var subItem2=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
							subItem2.label="Menu Item " + i +"."+j +"."+k;
							subItem.items.push(subItem2);
					}
				}
				
				if(j==2)
				{
					var rule=DWPE_WindowFactory.getDefaultArgsListForType("menu-separator");
						myItem.items.push(rule);
				}
				
				if(j>=2 && j<=4)
				{
					subItem.label="Radio Item Group " + i +"."+j;
					subItem.itemtype="radio";
					subItem.selected=(j==2)?"on":"";
					subItem.group="aaa";
					
				}
				
				
				if(j==7)
				{
					subItem.cmd="javascript::alert('clicked menu item "+i+"."+j+"')";
				}
				
				if(j==8)
				{
					subItem.label="Toggle Item " + i +"."+j;
					subItem.itemtype="toggle";
					subItem.selected="on";
				}
				
				if(j==9)
				{
					subItem.cmd="url::http://www.oracle.com";
				}
				
				if(j%5==0)subItem.key="CTRL+ALT+"+j;
				
				
				
				if(j==6)
				{
					subItem.items=new Array();
					for(var k=1;k<5;k++)
					{
						var subItem2=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
							subItem2.label="Menu Item " + i +"."+j +"."+k;
							subItem2.items=new Array();
							subItem.items.push(subItem2);
							
							for(var l=1;l<6;l++)
							{
								var subItem3=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
									subItem3.label="Menu Item " + i +"."+j +"."+k+"."+l;
									subItem2.items.push(subItem3);
							}
							
							
					}
				}					
					
				
				myItem.items.push(subItem);
				
				if(j==4)
				{
					var rule=DWPE_WindowFactory.getDefaultArgsListForType("menu-separator");
						myItem.items.push(rule);
				}
				
				
		}
		
		
		
		
		data.push(myItem);
	}
	
	
	$tree.data('tree-data',data);
	
	makeEditableTree( $("#test-tree") );
		
	insert();	
	commitProperties();	
}