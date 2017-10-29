var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var $preview=$("#preview").css({'min-height':350,height:350,'overflow':'hidden'});
		$preview.removeClass().addClass('SecondaryRegion');
		$("#region-selector").hide();
	performanceTests=[1,2,3,4,5,6,7,8,9,10];
	
	
	var myItem;

	var $tree=$("#test-tree")
	
	$tree.data(  "default-object", DWPE_TableFactory.getDefaultArgsListForType("column") );
	$tree.data(  "properties-sheet-template",	 DWPE_TableFactory.getPropertySheetFields('column') ); 	
	
	
	$tree.data(  "manage-form-state",  function()
	{
		
		
		if($('#test-tree').data('selected').find('li').length)
			{
					$("#label-row").show()
					$("#value-row").hide();
					$("#format-row").hide();
					$("#visible-row").hide();
					$("#sort-row").hide();
					$("#align-row").show();
					$("#width-row").hide();
			}
			else
			{
					$("#label-row").show()
					$("#value-row").show();
					$("#format-row").show();
					$("#visible-row").show();
					$("#sort-row").show();
					$("#align-row").show();
					$("#width-row").show();
			}
			
	});
	
		
	var numberOfItemsToDisplay =10;
	var data=new Array();
	var values=["email","fullname","firstname","lastname","company","phone"];
	
	
	var myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Name";
		myItem.value="fullname";
		myItem.sort="none";
		//myItem.format="radiogroup";
		data.push(myItem)
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Company";
		myItem.value="company";
		myItem.sort="none";
		data.push(myItem)
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Status";
		myItem.value="status";
		myItem.width="35";
		myItem.align="center";
		myItem.sort="none";
		data.push(myItem)
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Work Phone";
		myItem.value="phone1";
		data.push(myItem)
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Mobile Phone";
		myItem.value="phone2";
		data.push(myItem);
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Email";
		myItem.value="email";
		data.push(myItem);
		
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Monthly Sales";
		myItem.value="currency";
		myItem.sort="none";
		myItem.align="right";
		data.push(myItem);
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Currency";
		myItem.value="currencycode";
		myItem.width="50";
		data.push(myItem);
		
		
		
		
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Billing Information";
		myItem.items=new Array();
		myItem.align="center";
		data.push(myItem);
		
		var subitem=DWPE_TableFactory.getDefaultArgsListForType("column");
			subitem=DWPE_TableFactory.getDefaultArgsListForType("column");
			subitem.label="Address";
			subitem.value="address";
			myItem.items.push(subitem);
			
			subitem=DWPE_TableFactory.getDefaultArgsListForType("column");
			subitem.label="City";
			subitem.value="city";
			myItem.items.push(subitem);
			
			subitem=DWPE_TableFactory.getDefaultArgsListForType("column");
			subitem.label="State";
			subitem.value="state";
			myItem.items.push(subitem);
			
			subitem=DWPE_TableFactory.getDefaultArgsListForType("column");
			subitem.label="Postal Code";
			subitem.value="zip";
			myItem.items.push(subitem);
			
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Notes";
		myItem.value="empty";
		data.push(myItem);
		
		
	
	
	
	/*
	for (i=1;i<=numberOfItemsToDisplay;i++)
	{
		myItem=DWPE_TableFactory.getDefaultArgsListForType("column");
		myItem.label="Column " + i;
		//myItem.value=values[Math.random()*values.length];
		
		
		data.push(myItem);
	}
	*/
	
	$tree.data('tree-data',data);
	
	makeEditableTree( $("#test-tree") );
		
	insert();	
	commitProperties();	
}