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
	
	$("#editable-tree").data(  "default-object", DWPE_FormFactory.getDefaultArgsListForType("multiselectlistbox") );
	$("#editable-tree").data(  "properties-sheet-template",	
								DWPE_FormFactory.getPropertySheetFields('multiselectlistbox'));		
	
	$("#editable-tree").data(  "manage-form-state",  function()
	{
		var type=$("#item__itemtype").val();
		
		switch(type)
			{
				case 'separator':
					$("#label-row").hide()
					$("#value-row").hide();
					$("#tooltip-row").hide();
					$("#boxstate-row").hide();
					$("#boxchecked-row").hide();
					break;	
					
				case 'checkbox':								
					$("#label-row").show()
					$("#value-row").show();
					$("#tooltip-row").show();
					$("#boxstate-row").show();	
					$("#boxchecked-row").show();					
					break;				
				
				default:
					break;
			}
	});
	
	var data=new Array();

	for (var i=1;i<=numberOfOptionsToDisplay;i++)
	{
		myItem=DWPE_FormFactory.getDefaultArgsListForType("multiselectlistbox");
		myItem.label="Value of Checkbox";
		myItem.items=""; //to eliminate indentation in editable trees
		data.push(myItem);
	}
		
	$("#editable-tree").data('tree-data',data);
	
	makeEditableTree( $("#editable-tree") );

	insert();
	commitProperties();
}