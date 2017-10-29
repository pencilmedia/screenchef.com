var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var numberOfTabsToDisplay =12;
	var itemsList=$("#items");
	var $preview=$("#preview");
	
	performanceTests=[1,2,3,4,5,6,7,8,9,10];
	
	
	var myItem;
	/*
	var option;
	
	
	for (i=1;i<=numberOfTabsToDisplay;i++)
	{
		myItem=DWPE_PanelFactory.getDefaultArgsListForType("TabPanel");
		myItem.label="Inline Tab " + i;
		myItem.icon="none";
		myItem.closureButton="1";
		
		if(i%4==0)
		{	myItem.content = "http://www.oracle.com";
			myItem.icon="add";
			myItem.label="External Tab " + i;
			myItem.closureButton="1";
		}
		
		
		option=	$('<option></option>').html( myItem.label );
		option.data("obj",myItem);
		itemsList.append(option);
	}
	*/

	$("#test-tree").data(  "default-object", DWPE_PanelFactory.getDefaultArgsListForType("TabPanel") );
	$("#test-tree").data(  "properties-sheet-template",	
								DWPE_PanelFactory.getPropertySheetFields('TabPanel'));
		
		
		var numberOfTabsToDisplay =12;
		var data=new Array();
		for (i=1;i<=numberOfTabsToDisplay;i++)
		{
			myItem=DWPE_PanelFactory.getDefaultArgsListForType("TabPanel");
			myItem.label="Inline Tab " + i;
			myItem.icon="none";
			//myItem.allow_tab_close="1";
			myItem.content="";
			
			if(i%4==0)
			{	myItem.content = "http://www.oracle.com";
				myItem.icon="add";
				myItem.label="External Tab " + i;
				myItem.closureButton="1";
			}
			
			
			data.push(myItem);
		}
		
		
		$("#test-tree").data('tree-data',data);
		
		makeEditableTree( $("#test-tree") );
		
	insert();
	commitProperties();
}