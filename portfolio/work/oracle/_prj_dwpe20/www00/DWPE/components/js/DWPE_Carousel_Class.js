/*DWPE_Carousel_Class.js*/

/*Set the class that our class will inherit from*/
DWPE_Carousel_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_Carousel_Class.constructor=DWPE_Carousel_Class;
DWPE_Carousel_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_Carousel_Class()
{
	this._class="DWPE_Carousel_Class";
	return this;	

}

/*Make an Instance of Carousel*/
DWPE_Carousel=new DWPE_Carousel_Class();


/*overrides DWPE_Base_Class.update()*/
DWPE_Carousel_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}


DWPE_Carousel_Class.prototype.setDefaultValue=function(name,value)
{
	if(!this.properties[name]) this.properties[name]=value;
}

DWPE_Carousel_Class.prototype.generateMarkup=function(args)
{
	switch(args.type.toLowerCase())
	{
		case 'carousel':
			return this.generateCarouselMarkup(args);
			break;
			
		default:
		    return;
			break;
	}
}

DWPE_Carousel_Class.prototype.make=function($ux)
{
	
	var _class=$ux.attr("class").toLowerCase();
				_class=_class.split(" ");
				_class=_class[0]; //pick off the first value in the css class and use it to make our class
	switch(_class)
	{
		case "dwpe-carousel":
			this.initializeCarousel($ux);
			break;
	}
}

var currentPage = new Array(); //keeps track of current page in the focus object
var count; //store carousel item count
var childCount = new Array();
var childLabel = new Array();
var childType = new Array();
var childContent = new Array();
var object_label = new Array(); //to store object labels
var pageContent = new Array();
var contentType = new Array();

DWPE_Carousel_Class.prototype.generateCarouselMarkup=function(args)
{
	count = args.items.length;
	var markup="";
	markup+='<ux class="dwpe-carousel '+args.carousel_state+'">';
	
	markup+='\r\t<div class="filterbar">';
	
	if(args.filterbar_menubar == "filterbar-menubar-yes")
		markup+='\r\t\t<div class="menubar"></div>';
	
	if(args.filterbar_toolbar == "filterbar-toolbar-yes")
		markup+='\r\t\t<ux class="dwpe-toolbar" data="sample-toolbar-long"/>';
	
	markup+='\r\t</div>';
	
	markup+='<div class="dragcontainer">';
	
	markup+='\r\t<div id="draggable_object" class="carousel-objects-container">';
	
	for(var i in args.items)
	{			
		var item=args.items[i];		
		markup+='\r\t\t<div id="object'+i+'" class="carousel-object">';	
		
		if(args.carousel_custom_toolbar == "custom-toolbar-yes")
			markup+='\r\t\t\t<div class="carousel-custom-toolbar"/>';

		markup+='\r\t\t\t<div id="'+i+'" class="pagecontent ui-widget-content">';
					
		if(item.page_content == "img"){
			var url = '/DWPE/components/images/carousel/object-content-'+item.page_content_image+'.png';
			markup+='<div class="objectimg" style="background-image:url('+url+')"/>';	
			pageContent[i]=item.page_content_image;
			contentType[i]="img";
		}
		else{
			
			var cmd = item.page_content_url;
			if(cmd){
				var action = cmd.split("::");
				switch(action[0].toLowerCase())
				{	
					case "javascript":
						markup+='<div class="objectjs"><script>'+action[1]+'</script></div>';
						pageContent[i]=action[1];
						contentType[i]="js";
						break;
					
					case "url":
						markup+='<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>';
						pageContent[i]=action[1];
						contentType[i]="url";
						break;
						
					default:
						break;
				}
			}
		}			
		markup+='</div>';
		 
		//markup+='<div id="droppable" class="ui-widget-content drop-objects"/>';
		
		if(args.carousel_navigation_bar == "navigation-bar-yes")
			markup+='\r\t\t\t<div id="carnavbar'+i+'" class="carousel-navigation-bar"/>';		
			
		childCount[i] = item.items.length;
		
		//markup for child items
		if(item.items[i]){
			markup+='\r\t\t\t\t<ul id="object'+i+'">';
			var k;				
			for(var j in item.items)
			{
				var childItem = item.items[j];
				childLabel[i+''+j] = childItem.label;
				childType[i+''+j] = childItem.page_content;//alert(i+' '+j+' '+childType[i+''+j]);
				if(childType[i+''+j] == "img")					
					childContent[i+''+j] = childItem.page_content_image;
				else
					childContent[i+''+j] = childItem.page_content_url;					

				//markup+='\r\t\t\t\t\t<li><div class="carousel-child-object">'+childItem.label+'</div></li>';
				markup+='\r\t\t\t\t\t<li>'+childItem.label+'</li>';
			}
			
			markup+='\r\t\t\t\t</ul>';
		}
								
		markup+='\r\t\t</div>';
		object_label[i]=item.label;
		 	
	}
	
	markup+='\r\t</div>';
	
	markup+='\r\t<div class="'+args.object_alignment_horizontal+'"/>';
	
	markup+='\r\t<div class="object-title" id="objectlabel"/>';	
	
	if(args.carousel_slider == "carousel-slider-yes")
	{
		//if(args.layout == "horizontal")
			markup+='\r\t<div class="carousel-slider-hor"></div>';
		//else
			//markup+='\r\t<div class="carousel-slider-ver '+args.object_alignment_vertical+'"></div>';
	}
	
	if(args.carousel_properties_container == "properties-container-yes" || args.carousel_drop_zone == "drop-zone-yes")
		markup+='\r\t<div class="properties-dropzone-container">';
		
	if(args.carousel_properties_container == "properties-container-yes")
		markup+='\r\t\t<div class="carousel-object-properties">'+DWPE_Utilities.getLoremIpsum()+'</div>';
		
	if(args.carousel_drop_zone == "drop-zone-yes"){
		markup+='\r\t\t<div id="droppable1" class="ui-widget-content carousel-drop-zone"><div class="innerBox"/><div id="dropText1" class="drop-text">Drop Zone</div></div>';
		markup+='\r\t\t<div id="droppable2" class="ui-widget-content carousel-drop-zone"><div class="innerBox"/><div id="dropText2" class="drop-text">Drop Zone</div></div>';
		markup+='\r\t\t<div id="droppable3" class="ui-widget-content carousel-drop-zone"><div class="innerBox"/><div id="dropText3" class="drop-text">Drop Zone</div></div>';
	}
	
	if(args.carousel_properties_container == "properties-container-yes" || args.carousel_drop_zone == "drop-zone-yes")
		markup+='\r\t</div>';
	
	markup+='</div>';
	
	markup+='\r</ux>';
	return markup;
}

DWPE_Carousel_Class.prototype.initializeCarousel=function($ux)
{	
	var state = $('SELECT#carousel_state').val();
	
	//appending horizontal slider
	if( state == "enabled" )
		$ux.find('DIV.carousel-slider-hor').append('<div class="carousel-spin-left" title="Spin carousel to the previous item"/><div id="containment-wrapper" class="carousel-spin-bar"><div id="draggable" class="carousel-spin-marker ui-widget-content" title="Carousel spin thumb"/></div><div class="carousel-spin-right" title="Spin carousel to the next item"/>');		
	
	if( state == "disabled")
		$ux.find('DIV.carousel-slider-hor').append('<div class="carousel-spin-left-d" title="Spin carousel to the previous item"/><div id="containment-wrapper" class="carousel-spin-bar-d"><div id="draggable" class="carousel-spin-marker-d ui-widget-content" title="Carousel spin thumb"/></div><div class="carousel-spin-right-d" title="Spin carousel to the next item"/>');
	
	if(state == "enabled")
		var spinbar_width = $('.carousel-spin-bar').width();		
	else
		var spinbar_width = $('.carousel-spin-bar-d').width();
		
	//var total = Math.round((spinbar_width) / count);
	var total = Math.round((spinbar_width) / count);
	
	var halign = $('SELECT#object_alignment_horizontal').val();
	
	if(count > 50)
		var outof = '';
	else
		var outof = ' of '+count;
	
	//append object set number
	$ux.find('DIV.carousel-slider-hor').append('<br><br><div id="setnumber" class="object-set-number"/><br><br>');
		
	//to obtain object set number's initial position if slider exists
	var object_setposition;
	if( $ux.find('DIV.carousel-slider-hor'))
		object_setposition = $('DIV.object-set-number').position();
				 
	var focus_object = ($('INPUT#focus_object_number').val()) - 1;
	
	//appending navigation bar	
	for(i=0;i<count;i++){
		currentPage[i] = 0;
		var totalFocusChild = childCount[i] + 1;			
		$ux.find('DIV#carnavbar'+i).append(DWPE_Utilities.getIconMarkup("previous")+'<span id="navigationbar'+i+'"><span id="navtext'+i+'"/></span>'+DWPE_Utilities.getIconMarkup("next"));
		document.getElementById('navtext'+i).innerHTML = " Page 1 of " + totalFocusChild + " "; 
	}
			
	//object title
	function object_title(focus_object){
		document.getElementById('objectlabel').innerHTML = object_label[focus_object];
	}
	
	//focus object
	function focus_object_fn(focus_object){		
		$ux.find('DIV#object'+focus_object).css({"left":"40%",
												"right":"40%",
												"z-index":"3000",
												"vertical-align":"middle",
												"top":"10%",
												"background-color":"white",
												"display":"block"});
		
		$ux.find('UL#object'+focus_object+'>LI').css("display","none");
		
		/*$ux.find('UL#object'+focus_object+'>LI>DIV.carousel-child-object').css({"left":"0%",
												"right":"0%",
												"z-index":"2999",
												"vertical-align":"middle",
												"top":"0%",
												"background-color":"white"});*/		
	}
				
	$ux.find('DIV.carousel-navigation-bar').click(function(){
														   $(this).css("opacity","1");
														   });
	
	//peripheral objects on right of focus object
	function periperal_right(focus_object){
		var j = 1;
		//for(var i=focus_object;i<count;i++, j++){		
		for(var i=focus_object; i < focus_object + 4 ;i++, j++){ //to restrict loading all pages beyong the page size
			var index = 2999 - i;
			var left_indent = 40 + (j * 10);
			switch(halign){
				case "halign-middle": var peripheral_top = 10 + (j * 5);			
									var peripheral_height = 55 - (j * 10);
									break;
									
				case "halign-top": var peripheral_top = 10;			
									var peripheral_height = 55 - (j * 5);
									break;
									
				case "halign-bottom": var peripheral_top = 10 + (j * 5);			
									var peripheral_height = 55 - peripheral_top + 10;
									break;
									
				default:
					break;
			}
			$ux.find('DIV#object'+i).next().css({"left":left_indent+"%",
											"z-index":index,
											"top":peripheral_top+"%",
											"height":peripheral_height+"%",
											"background-color":"white",
											"display":"block"});
							
			$ux.find('UL#object'+i+'>LI').css("display","none");
		}
	}
	
	//peripheral objects on left of focus object
	function peripheral_left(focus_object){
		var j;
		for(var i=focus_object, j=1; i>=0; i--, j++){
			var left_index = 2999 - j;
			var left_indent = 40 - ( j * 10);
			switch(halign){
				case "halign-middle": var peripheral_top = 10 + (j * 5);			
									var peripheral_height = 55 - (j * 10);
									break;
									
				case "halign-top": var peripheral_top = 10;			
									var peripheral_height = 55 - (j * 5);
									break;
									
				case "halign-bottom": var peripheral_top = 10 + (j * 5);			
									var peripheral_height = 55 - peripheral_top + 10;
									break;
									
				default:
					break;
			}
			
			$ux.find('DIV#object'+i).prev().css({"left":left_indent+"%",
											"z-index":left_index,
											"top":peripheral_top+"%",
											"height":peripheral_height+"%",
											"background-color":"white",
											"display":"block"});
			
			$ux.find('UL#object'+i+'>LI').css("display","none");
		}
	}
	
	//display custom toolbar and navigation bar only for focus object	
	 function focus_toolbar_navigation(id_number) { 
		for(var i=0;i<count;i++)
		{						
			if (id_number != i)
			{
				$ux.find('DIV#object'+i+'>DIV.carousel-custom-toolbar').css("display","none");							
				$ux.find('DIV#object'+i+'>DIV.carousel-navigation-bar').css("display","none");				
			}						
		}	
		$ux.find('DIV#object'+id_number+'>DIV.carousel-custom-toolbar').css("display","block");
		$ux.find('DIV#object'+id_number+'>DIV.carousel-navigation-bar').css("display","block");
	}
	
	//on document load, custom toolbar and navigation bar only in focus object	
	focus_toolbar_navigation(focus_object);	 
	
	focus_object_fn(focus_object);
	periperal_right(focus_object);
	peripheral_left(focus_object);
	object_title(focus_object);	
		
	total_focus = total * focus_object;
	if(object_setposition != null){
	var set_left_focus = Math.round(object_setposition.left + total_focus);
	//var set_left_focus =(object_setposition.left + total_focus);
	$ux.find('DIV.object-set-number').css("left",set_left_focus+"px");	
	
	if(state == "enabled")
		$ux.find('DIV.carousel-spin-marker').css("left",total_focus+"px");	
	else
		$ux.find('DIV.carousel-spin-marker-d').css("left",total_focus+"px");	
		
	document.getElementById('setnumber').innerHTML= focus_object + 1+outof;
	}
		
	//handling menu bar elements 	
	var $menu = $ux.find('DIV.menubar');		
	
	$menu.append('<ux class="dwpe-menu"><ul><li>Object<ul><li>Object 1</li><li>Object 2</li><li>object 3</li></ul></li></ul></ux>');
	
	$ux.find('DIV.menubar>UX.dwpe-menu').click(function()
			{		
				var $callee=$(this);
				var menu_id=$callee.attr("id")+"-menu";
				var group=null; //append to the last group
				var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);
				var $overflowMenuBody=$("#"+menu_id+"-body");
				$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li><li>Option 3</li>");
		});	
	
	//custom toolbar	
	$ux.find('DIV.carousel-custom-toolbar').append('<ux class="dwpe-menu"><ul><li>Menu<ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul></li></ul></ux>');
	
	$ux.find('DIV.carousel-custom-toolbar>UX.dwpe-menu').click(function()
	{		
		$('DIV.carousel-custom-toolbar').css("opacity","1");
		var $callee=$(this);
		var menu_id=$callee.attr("id")+"-menu";
		var group=null; //append to the last group
		var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);
		var $overflowMenuBody=$("#"+menu_id+"-body");
		$overflowMenuBody.append("<li>Menu 1</li><li>Menu 2</li><li>Menu 3</li>");
	});	
		
	//menubar and toolbar container
	var $menutool_container=$("<div class='menu-tool-container'>"+
						"<div class='left'></div>"+
						"<div class='center'></div>"+
						"<div class='right'></div>"+
					"</div>");
		
	//place menubar to the left	of menu tool container
	$menutool_container.find(">DIV.left").append($menu);
	
	//place toolbar to the right of menu tool container
	var $toolbar=$ux.find("UX.dwpe-toolbar");	
	
	if($menu && $menu.length >0){
		$menutool_container.find(">DIV.center").append($toolbar);
	}
	else{
		$menutool_container.find(">DIV.left").append($toolbar);
		$menutool_container.find(">DIV.left").css('width','68%');
		$menutool_container.find(">DIV.center").css('width','0%');
		$menutool_container.find(">DIV.right").css('width','32%');
	}
	
	//append search component
	$menutool_container.find(">DIV.right").append('Filter <ux class="dwpe-singleselectchoicelist"><select class="dwpe-singleselectchoicelist"><option>Attribute 1</option><option>Attribute 2</option><option>Attribute 3</option></select></ux>&nbsp;<input class="dwpe-textbox"/>&nbsp;'+DWPE_Utilities.getIconMarkup("search"));
	
	//drop zone navigators
	//$ux.find('DIV.carousel-drop-zone').append('<div class="dropnav-left">'+DWPE_Utilities.getIconMarkup("previous")+'</div><div class="dropContent"/><br><div class="dropnav-right">'+DWPE_Utilities.getIconMarkup("next")+'</div>');
	
	//append filter bar
	$ux.find('DIV.filterbar').append($menutool_container);		
	
  if( state == "enabled"){
	  
	//handle for drag
	$(function(){			  
			   $("#draggable").draggable({ 
								containment: '#containment-wrapper', 
								scroll: false,
								axis: 'x', 
								grid: [total, 0], 
								drag: function(event, ui) { 
										var marker_position = ui.position.left; 										
										var set_left = Math.round(object_setposition.left + marker_position);
										//var set_left = (object_setposition.left + marker_position);
										$ux.find('DIV.object-set-number').css("left",set_left+"px");										
										var calc = Math.ceil(marker_position / total); //object or item number in the list to be displayed as object set number
										document.getElementById('setnumber').innerHTML= calc + 1 + outof;
										
										focus_object_fn(calc);
										$ux.find('DIV#object'+calc).css("height","55%");	
										object_title(calc);
										periperal_right(calc);
										peripheral_left(calc);						
										focus_toolbar_navigation(calc);	 									
								} 								
						});				   			
			   });
	
	//objects click event
	$('DIV.carousel-object').click(function(){
										var id = $(this).attr('id');
										var id_number = id.charAt(6);
										var display = id_number + 1;
										//currentPage = 0;
										
										//focus object
										$ux.find('DIV#object'+id_number).animate({"left":"40%",
												"right":"40%",
												"top":"10%",
												"height":"55%",																		
												"vertical-align":"middle",
												"display":"block"																		
												}, 1500).css({"background":"white","z-index":"3000"});
										
										//object title
										object_title(id_number);
										
										//peripheral objects on right of focus object
										var j=1;
										//for(var i=id_number;i<count;i++, j++){
										for(var i=id_number;i<count;i++, j++){
											var index = 2999 - i;
											var left_indent = 40 + (j * 10);
											switch(halign){
												case "halign-middle": var peripheral_top = 10 + (j * 5);			
																	var peripheral_height = 55 - (j * 10);
																	break;
									
												case "halign-top": var peripheral_top = 10;			
																var peripheral_height = 55 - (j * 5);
																break;
									
												case "halign-bottom": var peripheral_top = 10 + (j * 5);			
																	var peripheral_height = 55 - peripheral_top + 10;
																	break;
									
												default:
													break;
											}
											
											if(peripheral_height > 1)
												$ux.find('DIV#object'+i).next().animate({"left":left_indent+"%",																				
																					"top":peripheral_top+"%",
																					"height":peripheral_height+"%",
																					"display":"block"
																					},1500).css({"z-index":index,"background":"white"});																
										
										}
										
										//peripheral objects on left of focus object
										j=1;	
										for(var i=id_number;i>=0;i--,j++){
											var left_index = 2999 - j;
											var left_indent = 40 - ( j * 10);
											switch(halign){
												case "halign-middle": var peripheral_top = 10 + (j * 5);			
																	var peripheral_height = 55 - (j * 10);
																	break;
									
												case "halign-top": var peripheral_top = 10;			
																var peripheral_height = 55 - (j * 5);
																break;
									
												case "halign-bottom": var peripheral_top = 10 + (j * 5);			
																	var peripheral_height = 55 - peripheral_top + 10;
																	break;
									
												default:
													break;
											}
											if(peripheral_height > 1)
												$ux.find('DIV#object'+i).prev().animate({"left":left_indent+"%",																				
																					"top":peripheral_top+"%",
																					"height":peripheral_height+"%",
																					"display":"block"
																					},1500).css({"z-index":left_index,"background":"white"});
										}
										
										//custom toolbar and navigation bar only in focus object	
										focus_toolbar_navigation(id_number);
										
										//update the spin marker and object set number if slider is available
										if(object_setposition != null){
											total_focus = total * id_number;
											var set_left_focus = Math.round(object_setposition.left + total_focus);										
											//var set_left_focus = (object_setposition.left + total_focus);										
											$ux.find('DIV.object-set-number').css("left",set_left_focus+"px");	
											$ux.find('DIV.carousel-spin-marker').css("left",total_focus+"px");	
											var dis = parseInt(id_number); //id_number was extracted as a char and needs to be converted to a number in order to do math calc on it
											document.getElementById('setnumber').innerHTML = dis + 1 + outof;
										}									
										
										//var child = childCount[id_number] + 1; 
										//document.getElementById('navigationbar'+id_number).innerHTML = "click Page 1 of "+child+" ";										
									});
	
	//right spin click event
	$('DIV.carousel-spin-right').click(function(){
											   var marker_position = $('DIV.carousel-spin-marker').position();
											   var setnumber_position = $('DIV.object-set-number').position();
											   var pos = marker_position.left + total;
											   var num_pos = setnumber_position.left + total;
											   var val = getFocusObjectNumber()+1;
											   if(val < count ){
												   $ux.find('DIV.carousel-spin-marker').css("left",pos+"px");
											   		$ux.find('DIV.object-set-number').css("left",num_pos+"px");	
													document.getElementById('setnumber').innerHTML = val+1+outof;
												   focus_object_fn(val);
												   $ux.find('DIV#object'+val).css("height","55%");
													object_title(val);
													periperal_right(val);
													peripheral_left(val);
													focus_toolbar_navigation(val);													
												}											   
											   
											  });
	
	//left spin click event
	$('DIV.carousel-spin-left').click(function(){											  
											   var marker_position = $('DIV.carousel-spin-marker').position();
											   var setnumber_position = $('DIV.object-set-number').position();
											   var pos = marker_position.left - total;
											   var num_pos = setnumber_position.left - total;
											   var val_setnum = getFocusObjectNumber()-1;
											   if( marker_position.left > 0 ){
												   $ux.find('DIV.carousel-spin-marker').css("left",pos+"px");
											   		$ux.find('DIV.object-set-number').css("left",num_pos+"px");	
													document.getElementById('setnumber').innerHTML = val_setnum +1+outof;
												   focus_object_fn(val_setnum);
												   $ux.find('DIV#object'+val_setnum).css("height","55%");
												   object_title(val_setnum);
													periperal_right(val_setnum);
													peripheral_left(val_setnum);
													focus_toolbar_navigation(val_setnum);
												}											   
											   
											  });	
	
	//droppable	
	var isDrop = $('SELECT#carousel_drop_zone').val();
	if( isDrop == "drop-zone-yes"){
		$(".pagecontent").draggable({ helper: 'clone'});
		
		$("#droppable1").droppable({accept:'.pagecontent',
      						  drop: function(event, ui) {
								  				var id = ui.draggable.attr('id');
												var dropID = $(this).attr('id');
												var isObject = $ux.find('DIV#objectDrop');
												if(isObject == false)
													dropContentSelect(id, dropID);												
												else{
													$('DIV#'+dropID+'>DIV.innerBox>DIV#objectDrop').remove();
													dropContentSelect(id, dropID);												
												}
												
												
								 }
   							 });	
		$("#droppable2").droppable({accept:'.pagecontent',
      						  drop: function(event, ui) {
								  				var id = ui.draggable.attr('id');
												var dropID = $(this).attr('id');
												var isObject = $ux.find('DIV#objectDrop');
												if(isObject == false)
													dropContentSelect(id, dropID);												
												else{
													$('DIV#'+dropID+'>DIV.innerBox>DIV#objectDrop').remove();
													dropContentSelect(id, dropID);												
												}
												
								 }
   							 });	
		$("#droppable3").droppable({accept:'.pagecontent',
      						  drop: function(event, ui) {
								  				var id = ui.draggable.attr('id');
												var dropID = $(this).attr('id');
												var isObject = $ux.find('DIV#objectDrop');
												if(isObject == false)
													dropContentSelect(id, dropID);												
												else{
													$('DIV#'+dropID+'>DIV.innerBox>DIV#objectDrop').remove();
													dropContentSelect(id, dropID);												
												}
													
								 }
   							 });	
	}
	else{
		$("#draggable_object").draggable("disabled");
		$("#droppable").droppable({disabled:true});
	}		
	
	function dropContentSelect(id, dropID){	
		var num = dropID.charAt(9);
		switch(contentType[id])
		{
			case "img":
						var url = '/DWPE/components/images/carousel/object-content-'+pageContent[id]+'.png';
						//$('#droppable>DIV.dropContent').append('<div class="dropobject object'+dropCount+'" style="background-image:url('+url+')"/>');	
						$('#'+dropID+'>DIV.innerBox').append('<div id="objectDrop" class="dropobject" style="background-image:url('+url+')"/>');																																	  						document.getElementById('dropText'+num).innerHTML = object_label[id];	
						break;
			
			case "js":
						$('#'+dropID+'>DIV.innerBox').append('<div id="objectDrop" class="dropobject"><script>'+pageContent[id]+'</script></div>');	
						document.getElementById('dropText'+num).innerHTML = object_label[id];
						break;
			
			case "url":
						$('#'+dropID+'>DIV.innerBox').append('<div id="objectDrop" class="dropobject"><object type="text/html" data="'+pageContent[id]+'"/></div>');	
						document.getElementById('dropText'+num).innerHTML = object_label[id];
						break;
						
			default:
					break;
		}
	}
		
	//adjusting object set number position on window resizing
	/*if(object_setposition != null){
		$(window).resize(function(){					
								var barPosition = $('DIV.carousel-spin-bar').position();
								var barLength = $('DIV.carousel-spin-bar').width();
								var setNumber = $('DIV.carousel-spin-marker').offset();
							
								//var total = Math.round(barLength / count);
								var total = (barLength / count);
								var focusObject = getFocusObjectNumber();
								var setLeft = focusObject * total;
								//set_number = Math.round(barPosition.left + (total * focusObject));								
								set_number = (barPosition.left + (total * focusObject));
								$ux.find('DIV.object-set-number').css("left",set_number+"px");							
								$ux.find('DIV.carousel-spin-marker').css("left",setLeft+"px");								
								document.getElementById('setnumber').innerHTML= focusObject + 1 + outof;
							});
	}*/
	
	//navigate right click handle
	$ux.find('DIV.carousel-navigation-bar>SPAN.ico-next').click(function(){
				 var focusObject = getFocusObjectNumber();	
				 var totalChild = childCount[focusObject] + 1; 
				 if($ux.hasClass('DIV#'+focusObject+'>DIV.objectimg') == false)
				 	$ux.find('DIV#'+focusObject).append('<div class="objectimg"/>');
				 if((currentPage[focusObject]+1) < totalChild){					 
						var childPage = currentPage[focusObject];
						if(childType[focusObject+''+childPage] == "img"){
							$ux.find('DIV.objectjs').hide();
							$ux.find('DIV.objecturl').hide();
							$ux.find('DIV#'+focusObject+'>DIV.objectimg').show().css("background-image","url(/DWPE/components/images/carousel/object-content-"+childContent[focusObject+""+childPage]+".png)");
						}
						else{
							var cmd = childContent[focusObject+''+childPage];
							if(cmd){
								var action = cmd.split("::");
								switch(action[0].toLowerCase())
								{	
									case "javascript":
										$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();
										$ux.find('DIV.objecturl').hide();
										$ux.find('DIV#'+focusObject).append('<div class="objectjs"><script>'+action[1]+'</script></div>');
										break;
		
									case "url":
										$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();
										$ux.find('DIV.objectjs').hide();
										$ux.find('DIV#'+focusObject).append('<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>');
										break;
		
									default:
										break;
								}
							}
						}	
						currentPage[focusObject]++;
						var num = currentPage[focusObject] + 1;			
						document.getElementById('navigationbar'+focusObject).innerHTML = " Page "+ num +" of "+totalChild+" ";
						
					}//end of if
					
			});
	
	//navigate left click handle
	$ux.find('DIV.carousel-navigation-bar>SPAN.ico-previous').click(function(){
				 var focusObject = getFocusObjectNumber();	
				 var totalChild = childCount[focusObject] + 1;
				 if(currentPage[focusObject] == 1){
					 	var type = contentType[focusObject];
						if(type == "img"){
							$ux.find('DIV.objectjs').hide();
							$ux.find('DIV.objecturl').hide();
							$ux.find('DIV#'+focusObject+'>DIV.objectimg').show().css("background-image","url(/DWPE/components/images/carousel/object-content-"+pageContent[focusObject]+".png)");
						}
						else{
							var cmd = pageContent[focusObject];
							if(cmd){
								var action = cmd.split("::");
								switch(action[0].toLowerCase())
								{	
									case "javascript":
										$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();
										$ux.find('DIV.objecturl').hide();
										$ux.find('DIV#'+focusObject).append('<div class="objectjs"><script>'+action[1]+'</script></div>');
										break;
		
									case "url":
										$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();
										$ux.find('DIV.objectjs').hide();
										$ux.find('DIV#'+focusObject).append('<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>');
										break;
		
									default:
										break;
								}
							}
						}
				 }
				 if(currentPage[focusObject] > 0){					 
					var childPage = currentPage[focusObject] - 2;
					if(childType[focusObject+''+childPage] == "img"){
						$ux.find('DIV.objectjs').hide();
						$ux.find('DIV.objecturl').hide();
						$ux.find('DIV#'+focusObject+'>DIV.objectimg').show();
						$ux.find('DIV#'+focusObject+'>DIV.objectimg').css("background-image","url(/DWPE/components/images/carousel/object-content-"+childContent[focusObject+""+childPage]+".png)");
					}
					else{
						var cmd = childContent[focusObject+''+childPage];
						if(cmd){
							var action = cmd.split("::");
							switch(action[0].toLowerCase())
							{	
								case "javascript":
									$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();
									$ux.find('DIV.objecturl').hide();
									$ux.find('DIV#'+focusObject).append('<div class="objectjs"><script>'+action[1]+'</script></div>');
									break;
	
								case "url":
									$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();
									$ux.find('DIV.objectjs').hide();
									$ux.find('DIV#'+focusObject).append('<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>');
									break;
	
								default:
									break;
							}
						}
					}
						
					currentPage[focusObject]--;
					var num = currentPage[focusObject]+1;
					document.getElementById('navigationbar'+focusObject).innerHTML = " Page "+ num +" of "+totalChild+" ";
				}//end of if
	
			});
	
																		
	}//end of enabled state loop	
	
	//determine focus object number
	function getFocusObjectNumber(){
		for(var i=0;i<count;i++)
		{
			if(($('DIV#object'+i).css("z-index")) == 3000)
				return i;
		}
	}	
	
}

/*this function stores default definitions for carousel type
 and returns in JSON format */
DWPE_Carousel_Class.prototype.getDefaultArgsListForType=function(type)
{
	switch(type.toLowerCase())
	{				
			case 'carousel':
					return {	"_class":"DWPE_Carousel_Class",
								"type":"carousel",	
								"label":"Object",
								//"layout":"horizontal",			
								"filterbar_menubar":"filterbar-menubar-yes",
								"filterbar_toolbar":"filterbar-toolbar-yes",
								"carousel_state":"enabled",
								"object_alignment_horizontal":"halign-middle",
								//"object_alignment_vertical":"valign-middle",		
								"object_properties_container":"properties-container-yes",
								"carousel_drop_zone":"drop-zone-yes",
								"carousel_slider":"carousel-slider-yes",
								"carousel_custom_toolbar":"custom-toolbar-yes",
								"carousel_navigation_bar":"navigation-bar-yes",
								"page_content":"img",
								"page_content_image":"img1",
								"items":[{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 1","value":"", "type":"Content Type", "page_content":"img","value":"","type":"Command","page_content_image":"img2", "value":""},
								{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 2","value":"", "type":"Content Type", "page_content":"img","value":"","type":"Command","page_content_image":"img3", "value":""},
								{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 3","value":"", "type":"Content Type", "page_content":"img","value":"","type":"Command","page_content_image":"img4", "value":""},
								{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 4","value":"", "type":"Content Type", "page_content":"img","value":"","type":"Command","page_content_image":"img5", "value":""},
								{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 5","value":"", "type":"Content Type", "page_content":"img","value":"","type":"Command","page_content_image":"img6", "value":""}]
							};	 
							break;
				
			default:
					return {};
					break;
	}
}



/*this function stores default property sheet definitions for carousel and returns them in JSON format */
DWPE_Carousel_Class.prototype.getPropertySheetFields=function(_type)
{
	switch(_type)	
	{							
		case 'carousel':
				return	[				
						{type:"text",id:"label",name:"Value",value:""},
						{type:"chooser",id:"page_content",name:"Content Type",value:'img=Image&url=URL / Javascript'},
						{type:"text",id:"page_content_url",name:"Command",value:"", help:"(javascript::alert('hi') or url::http://my.oracle.com)"},
						{type:"chooser",id:"page_content_image",name:"Image",value:"img1=Image 1&img2=Image 2&img3=Image 3&img4=Image 4&img5=Image 5&img6=Image 6&img7=Image 7"}						
						];			
				break;
				
		default:
			return[];
			break;
	}
}

