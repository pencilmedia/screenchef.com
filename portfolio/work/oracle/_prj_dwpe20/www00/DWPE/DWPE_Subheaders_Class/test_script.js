  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{

	
	var itemsList=$("#items");
	
	$("#preview").removeClass("PrimaryRegion");
	$("#preview").addClass("SecondaryRegion");
	
	
	$("#region-selector").hide();
	
	var myItem;
	var option;
	
	myItem=DWPE_PanelFactory.getDefaultArgsListForType("SubHeader");
	myItem.label="Sample Subheader Label";
	option=	$('<option></option>').html( myItem.label );
	option.data("obj",myItem);
	itemsList.append(option);
	
	insert();
	commitProperties();
	
}
