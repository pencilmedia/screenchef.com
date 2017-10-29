var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var numberOfOptionsToDisplay =3;
	var itemsList=$("#items");
	var $preview=$("#preview");
	var myItem;
	var option;

	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	$('#region-selector').hide();	


	$("#editable-tree").data(  "default-object", DWPE_FormFactory.getDefaultArgsListForType("singleselectchoicelist") );
	$("#editable-tree").data(  "properties-sheet-template",	 DWPE_FormFactory.getPropertySheetFields('singleselectchoicelist'));


	var data=new Array();

	for (var i=1;i<=numberOfOptionsToDisplay;i++)
	{
		myItem=DWPE_FormFactory.getDefaultArgsListForType("singleselectchoicelist");
		myItem.label="List Item";
		myItem.selected = "no";
		myItem.items=[]; //to eliminate the indentation of values in editable tree
		myItem.help=null;
		myItem.state=null;
		myItem.required=null;
		data.push(myItem);
	}
	
	
	$("#editable-tree").data('tree-data',data);
	
	makeEditableTree( $("#editable-tree") );


	insert();
	commitProperties();
}