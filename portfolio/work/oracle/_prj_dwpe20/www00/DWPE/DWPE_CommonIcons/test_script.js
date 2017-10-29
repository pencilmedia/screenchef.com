  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{


	var itemsList=$("#items");
	
	var $preview=$("#preview");
	
	$preview.css("padding","10px");
	
	$preview.removeClass().addClass("SecondaryRegion");
	$preview.addClass("dwpe-toolbar");  // show like we are a toolbar button
	$preview.css("display","block");	//but keep the preview area a block element
	
	
	
	
	$("#tab-metadata").hide();
	
	
	/*	make a series of buttons and place them in the preview area
		
		because they live outside of a toolbar, they take on the look
		and feel of command buttons, which is to say, they always show
		their chrome
	
	*/
	
	var markup="";
	
	//# Iconic Text Button
	var args=DWPE_ButtonFactory.getDefaultArgsListForType('IconicTextButton');
	
	markup+="<table cellspacing='8'><tr>";
	var i=1;
	for(var iconName in DWPE_Utilities.icons)
	{
		var icon=DWPE_Utilities.icons[iconName];
		
		if(iconName=="blank") continue;
		
		args.icon=iconName;
		args.label=iconName +" - "+icon.index+"";
		args.tooltip=icon.title;
		
		markup+="<td>"+DWPE_ButtonFactory.make(args)+"</td>";
		if(i++%5==0)
			markup+="</tr><tr>";

	}

	//add icon by URL test
	
	args.iconId="/DWPE/components/images/icon-by-url.png";
	args.label="Icon by URL - 9999";
	
	markup+="<td>"+DWPE_ButtonFactory.make(args)+"</td>";
		
	
	
	markup+="</tr><table>";
	

	$preview.html(markup);
	
	
}
