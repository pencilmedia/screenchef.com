var test_class;
 $(document).ready(function() 
{
	runTestScript();
	$('tr.train_form_bar_buttons').hide();
});

function runTestScript()
{
	var numberOfStepsToDisplay = 10;
	var itemsList=$("#items");
	var $preview=$("#preview");
	
	performanceTests=[1,2,3,4,5,6,7,8,9,10];
	
	var myItem;
	$("#test-tree").data(  "default-object", DWPE_PanelFactory.getDefaultArgsListForType("TrainPanel") );
	$("#test-tree").data(  "properties-sheet-template",	DWPE_PanelFactory.getPropertySheetFields('TrainPanel'));

	var data=new Array();
	for (i=1;i<=numberOfStepsToDisplay;i++)
	{
		myItem=DWPE_PanelFactory.getDefaultArgsListForType("TrainPanel");
		myItem.label="Step " + i;
		myItem.icon="none";
		myItem.closureButton="0";
		data.push(myItem);
	}
	
	
	$("#test-tree").data('tree-data',data);
	
	makeEditableTree( $("#test-tree") );


	$("#preview").attr('class','TiertiaryRegion');

	insert();
	commitProperties();

}

function toggleBarButtons()
{
	$('tr.train_form_bar_buttons').toggle();
}
