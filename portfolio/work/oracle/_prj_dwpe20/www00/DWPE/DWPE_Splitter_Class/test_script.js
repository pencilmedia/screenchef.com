  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{


	var itemsList=$("#items");
	
	var $preview=$("#preview");
	
	$preview.css("padding","0px");
	
	$preview.css("min-height","500px");
	$preview.css("max-height","500px");
	
	
	performanceTests=[1,2,3,4,5];
	

	
	
	$("#editable-tree").data(  "default-object", DWPE_PanelFactory.getDefaultArgsListForType("SplitterPanel") );
	$("#editable-tree").data(  "properties-sheet-template",	
								DWPE_PanelFactory.getPropertySheetFields('SplitterPanel'));
		
		
	var myItem;
	var data=new Array();
	
	myItem=DWPE_PanelFactory.getDefaultArgsListForType("SplitterPanel");
	myItem.label="Pane 1";
	myItem.size="200";
	myItem.toggle="one";
	data.push(myItem);
	
	
	myItem=DWPE_PanelFactory.getDefaultArgsListForType("SplitterPanel");
	myItem.label="Pane 2";
	myItem.size="100%";
	myItem.toggle="two";
	data.push(myItem);
	
	
	myItem=DWPE_PanelFactory.getDefaultArgsListForType("SplitterPanel");
	myItem.label="Pane 3";
	myItem.size="200";
	data.push(myItem);
	
	
	$("#editable-tree").data('tree-data',data);
	
	makeEditableTree( $("#editable-tree") );
	
	
	
	insert();
	commitProperties();
}
