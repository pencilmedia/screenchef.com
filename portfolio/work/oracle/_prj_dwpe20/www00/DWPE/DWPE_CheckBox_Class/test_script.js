var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var numberOfOptionsToDisplay =1;
	var itemsList=$("#items");
	var $preview=$("#preview");
	var myItem;
	var option;

	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	$('#region-selector').hide();	

	/*for (var i=1;i<=numberOfOptionsToDisplay;i++)
	{
		myItem=DWPE_FormFactory.getDefaultArgsListForType("checkbox");
		myItem.label="Value of the Checkbox";
		option=	$('<option></option>').html( myItem.label );
		option.data("obj",myItem);
		itemsList.append(option);
	}*/
	
	
	
	$("#editable-tree").data(  "default-object", DWPE_FormFactory.getDefaultArgsListForType("checkbox") );
	$("#editable-tree").data(  "properties-sheet-template",	
								DWPE_FormFactory.getPropertySheetFields('checkbox'));
		
	var data=new Array();

	for (var i=1;i<=numberOfOptionsToDisplay;i++)
	{
		myItem=DWPE_FormFactory.getDefaultArgsListForType("checkbox");
		myItem.label="Value of the Checkbox";
		myItem.items=""; //to eliminate the indentation of values in editable tree
		data.push(myItem);
	}
	
	
	$("#editable-tree").data('tree-data',data);
	
	makeEditableTree( $("#editable-tree") );

	insert();
	commitProperties();
}