var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var numberOfOptionsToDisplay =5;
	var itemsList=$("#items");
	var $preview=$("#preview");
	
	//Adjusting css of preview area
	$preview.css('min-height','100px');	
	$preview.css('max-height','2500px');
	
	var myItem;
	var option;
	var data=new Array();
	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	$('#region-selector').hide();	
	$("#editable-tree").data(  "default-object", DWPE_Carousel.getDefaultArgsListForType("carousel") );
	$("#editable-tree").data(  "properties-sheet-template",	
								DWPE_Carousel.getPropertySheetFields('carousel'));
		
	
	$("#editable-tree").data(  "manage-form-state",  function()
	{
		var type=$("#item__page_content").val();
		
		switch(type)
			{
				case 'img':
				default:
					$("#page_content_url-row").hide();
					$("#page_content_image-row").show();
					break;	
					
				case 'url':				
					$("#page_content_image-row").hide();
					$("#page_content_url-row").show();
					break;				
			}
	});
	
	for (var i=1;i<=numberOfOptionsToDisplay;i++)
	{
		myItem=DWPE_Carousel.getDefaultArgsListForType("carousel");
		myItem.label="Object "+i;
		myItem.page_content_image = "img"+i;
		data.push(myItem);
	}
	
	
	$("#editable-tree").data('tree-data',data);
	
	makeEditableTree( $("#editable-tree") );

	insert();
	commitProperties();
}