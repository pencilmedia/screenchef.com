var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var argsListName = 'multiselectchoicelist';
	var propertySheetName = 'multiselectchoicelist'
	var numberOfOptionsToDisplay = 10;
	var itemsList=$("#items");
	var $preview=$("#preview");
	var myItem;
	var option;

	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	$('#region-selector').hide();	
	$("#editable-tree").data(  "default-object", DWPE_FormFactory.getDefaultArgsListForType(argsListName) );
	$("#editable-tree").data(  "properties-sheet-template",	DWPE_FormFactory.getPropertySheetFields(propertySheetName));
		
	var data=new Array();
	for (var i=1;i<=numberOfOptionsToDisplay;i++)
	{
		myItem=DWPE_FormFactory.getDefaultArgsListForType("mscl");
		myItem.label="Item " + i;
		data.push(myItem);
	}
	
	$("#editable-tree").data('tree-data',data);
	makeEditableTree( $("#editable-tree") );
	insert();
	commitProperties(); 
}