  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{


	var itemsList=$("#items");
	
	var $preview=$("#preview");
	
	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	
	
	$preview.css("padding","0px");
	
	$preview.css("min-height","500px");
	$preview.css("max-height","500px");
	
	
	
	
	
	
	$("#editable-tree").data(  "default-object", DWPE_PanelFactory.getDefaultArgsListForType("AccordionPanel") );
	$("#editable-tree").data(  "properties-sheet-template",	
								DWPE_PanelFactory.getPropertySheetFields('AccordionPanel'));
		
		
	var numberOfTabsToDisplay =5;
	var data=new Array();
	for (i=1;i<=numberOfTabsToDisplay;i++)
	{
		
		var myItem;
		
		if(i%2==0)
		{	
			myItem=DWPE_PanelFactory.getDefaultArgsListForType("AccordionPanel2");
		}
		else
		{
			myItem=DWPE_PanelFactory.getDefaultArgsListForType("AccordionPanel");
	
		}
		
		myItem.label="Pane " +i;
		
		data.push(myItem);
	}
	
	
	$("#editable-tree").data('tree-data',data);
	
	makeEditableTree( $("#editable-tree") );


	
	insert();
	commitProperties();
}
