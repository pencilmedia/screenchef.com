/* DWPE 2 Build 11401 */



/* /DWPE/components/js/DWPE_Base_Class.js */



/*Copyright Oracle 2005-2010*/



/*DWPE_Base_Class.js*/





/*extend the jQuery selectors to hunt for dwpe specific tags*/

jQuery.extend(jQuery.expr[':'], { 

    /////////////////////////////////////////////////////////// 

    // special UX elements 

    //  @usage: $(':dwpe') 

    dwpe: function(a) { 

    	 

    	 return (a.nodeName.toUpperCase().indexOf('UX')>-1 && a.getAttribute("class") && a.getAttribute("class").indexOf('initialized')==-1)?true:false; 

    },

    dwpe_initialized: function(a) { 

    	 

    	 return (a.nodeName.toUpperCase().indexOf('UX')>-1 && a.getAttribute("class") && a.getAttribute("class").indexOf('initialized')>-1)?true:false; 

    }

});





var EXPANDED="1";

var COLLAPSED="0";

var HIDDEN="-1";

var SELECTED="1";

var UNSELECTED="0";











function DWPE_Base_Class()

{

	//private members

	

	var _this=this;	//closure for 'this' to be used by private methods

	

	

	//priviliged members

	this._class="DWPE_Base_Class";

	this.parent=null;

	this.markup="";

	

	

	this.properties={}; //associative array

	//this.defineDWPE_Properties();

	

	//private method test

	function privateMethod()

	{

		_this.log("private method called!");

	}

	

	

	this.log=function(str)

	{	if(console) console.log(str);

		else alert(str);

	}

	

	//privileged method test

	this.privilegedMethod=function()

	{

		this.log("priveleged method called!");

		this.log("privileged method calling private method...");

		privateMethod();

	}

	

	return this;

	

}









//public method test

DWPE_Base_Class.prototype.publicMethod=function()

{

	this.log("public method called!");

	this.log("public method calling privileged method...");

	this.privilegedMethod();

}



DWPE_Base_Class.prototype.overrideMe=function()

{

	this.log("I haven't been overwritten yet!");



}





/*--------------------*/

/*Begin Public Methods*/

/*--------------------*/



/*creates a unique id for access to the component at runtime*/

DWPE_Base_Class.prototype.getID=function()

{

	return "ux"+new Date().getTime();

	

}



/*Traverses a collection of property name/value pairs 

and stores the new values on the object*/

DWPE_Base_Class.prototype.setProperties=function(args)

{

	this.properties={};

	

	for(var argName in args)

	{

	

		this.properties[argName]=args[argName];

	}

	

	

	//this.render();



}



/*responsible for reflecting the properties 

	into the displayed component*/

DWPE_Base_Class.prototype.update=function()

{

	

	this.label="This is a test";

	this.markup="<li class='DWPE_Base'>"+this.label+"</li>";

	

	//tests inheritance

	//this.container.css({background:"#cccccc", color:"#ffffff"});

	

}





/*responsible for appending the component to the screen*/

DWPE_Base_Class.prototype.render=function()

{



	this.update();

	//this.container=$(this.markup);

	//if(this.parent)this.parent.append(this.container);

	this.parent.html(this.markup);

}



/*responsible for removing the component from the screen and

	reconstituting it*/

DWPE_Base_Class.prototype.destroy=function()

{



	//this.log("destroy");

	this.container.remove();

}



/*responsible for resizing this component and call resize on its direct children*/

DWPE_Base_Class.prototype.resize=function()

{







}





/*maintains the list of properties that should be serialized 

  for this class*/

DWPE_Base_Class.prototype.defineDWPE_Properties=function()

{

	this.properties["_class"]=0;

	this.properties["label"]=0;

	

}



/*responsible for freeze-drying the component so it can be

  reconstituted later; only seralizes a specialized set of properties*/

DWPE_Base_Class.prototype.serialize=function()

{



	/*

	

	var args={};

	

	for(var propName in this.properties)

	{

		args[propName]=this.properties[propName];

	}

	

	

	

	console.log(args);

	var str = JSON.stringify(args);

	args1=JSON.parse(str);

	console.log(args1);

	console.log(args1===args);

	

//		str = str.replace(/\{/g, "\r\n{"); //format for display

//		str = str.replace(/\"(.?)\":\"(.?)\"\,/g, '\r\n\t"$1":"$2",'); //format for display

		

	

		//str = str.replace(/,/g, ",\r\n\t\t"); //format for display

	

*/





	//beautify JSON

	var args={};

	

	for(var propName in this.properties)

	{

		args[propName]=this.properties[propName];

	}



	return DWPE_Base_Class.stringifyJSON(args,0);

	

}



DWPE_Base_Class.getArgsAsString=function(args)

{

	return "<!--args_"+args.type+":"+DWPE_Base_Class.encodeJSONString(args)+"-->";

	

	//return "<!--args:"+DWPE_Base_Class.stringifyJSON(args,0,true,true)+"-->";

	

}



var attrib_name_lookup={};

attrib_name_lookup["a1"]="state";

attrib_name_lookup["b1"]="required";

attrib_name_lookup["c1"]="label";

attrib_name_lookup["d1"]="value";

attrib_name_lookup["e1"]="icon";

attrib_name_lookup["f1"]="tooltip";

attrib_name_lookup["g1"]="command";

attrib_name_lookup["h1"]="itemtype";

attrib_name_lookup["i1"]="selected";

attrib_name_lookup["j1"]="help";

attrib_name_lookup["k1"]="items";

attrib_name_lookup["l1"]="buttontype";















var attrib_code_lookup={};

attrib_code_lookup["state"]      ="a1";

attrib_code_lookup["required"]   ="b1";

attrib_code_lookup["label"]      ="c1";

attrib_code_lookup["value"]      ="d1";

attrib_code_lookup["icon"]       ="e1";

attrib_code_lookup["tooltip"]    ="f1";

attrib_code_lookup["command"]    ="g1";

attrib_code_lookup["itemtype"]   ="h1";

attrib_code_lookup["selected"]   ="i1";

attrib_code_lookup["help"]       ="j1";

attrib_code_lookup["items"]      ="k1";

attrib_code_lookup["buttontype"] ="l1";















DWPE_Base_Class.decodeJSONString=function(args_string)

{

	for(var code in attrib_name_lookup)

	{

		var re=RegExp(code+":","gi");

		args_string=args_string.replace(re,"'"+attrib_name_lookup[code]+"':");

		

		

		

	}

	

	

	

	eval("var args="+args_string);

	

	return args;

}



DWPE_Base_Class.encodeJSONString=function(args)

{

	var str="{";

	var quote="'";

	var delim="";

	

	for(var propName in args)

	{

		var obj=args[propName];

		

		if(propName=="_class") continue;

		if(propName=="type") continue;

		if(propName=="items" && obj.length==0) continue;

		

		

		propName=(attrib_code_lookup[propName])?attrib_code_lookup[propName]:quote+propName+quote;

	

		

	    //console.log(propName+" "+typeof obj);

	

	

		if(obj==null) { continue; }

			

		switch(typeof obj)

		{

			case "object": //serialize an array

			

				var localDelim="";

				var localStr=propName+':[';

				for(var i=0;i<obj.length;i++)

				{	

					localStr+=localDelim+DWPE_Base_Class.encodeJSONString( obj[i] );

					localDelim=",";

				}

				

				

				localStr+="]";

				str+=delim+localStr;

				break;

			case "number":

				str+=delim+propName+':'+obj;

				break;

			case "string":

			default:

				//obj=obj.replace(/\"/g,'\\"');//escape quotes

				obj=obj.replace(/\'/g,"\\'");//escape single quotes

				

				str+=delim+propName+':'+quote+obj+quote;

				break;

		}

		

		delim=",";

		

	}

	str+="}";

	 

	

	

	return str;

}





DWPE_Base_Class.stringifyJSON=function(args,depth,single_line,compact)

{

	var tab="\t";

	var newline="\r\n";

	var quote='"';

	

	if(single_line)

	{

		tab="";

		newline="";

	}

	

	if(compact)

	{

		quote="'";

	}

	

	

	var str="";

	var indent="";

	for(i=0;i<depth;i++){indent+=tab;}

	//var indent_child=indent+"\t";

	str+=indent+"{"+newline;

	var delim="";

	

	for(var propName in args)

	{

		var obj=args[propName];

		

		if(compact)

		{

			if(propName=="_class") continue;

			if(propName=="type") continue;

			if(propName=="items" && obj.length==0) continue;

			

			

		}

	

		

	    //console.log(propName+" "+typeof obj);

	

		switch(typeof obj)

		{

			case "object": //serialize an array

			

				if(obj==null)continue;

			

				var localDelim=tab;

				var localStr=indent+tab+quote+propName+quote+':['+newline;

				for(var index in obj)

				{

					localStr+=localDelim+indent+""+DWPE_Base_Class.stringifyJSON( obj[index], depth+1, single_line,compact );

					localDelim=","+newline+tab;

				}

				

				localStr+=newline+indent+"]";

				str+=delim+localStr;

				break;

			case "number":

				str+=delim+indent+tab+quote+propName+quote+':'+obj;

				break;

			case "string":

			default:

				//obj=obj.replace(/\"/g,'\\"');//escape quotes

				obj=obj.replace(/\'/g,"\\'");//escape single quotes

				

				str+=delim+indent+tab+quote+propName+quote+':'+quote+obj+quote;

				break;

		}

		

		delim=","+newline;

		

	}

	str+=newline+indent+tab+"}";

	 

	

	return str;

}





/*responsible for taking a serialized component and

	reconstituting it*/

DWPE_Base_Class.prototype.make=function(params)

{



	var args;

	

	if(typeof(params) == "object" )

	{	args=params; 	}

	else

	{	args=JSON.parse(params);	}

	

	//var args=eval("["+_JSON+"]")[0];

	

	

	var call="new "+args._class+"()";

	

	//this.log(call);

	

	var o=eval(call);

		o.setProperties(args);

		

	return o;

}



/*calls update() and returns the resultant markup,

	this function is typically called by the parent component

	in a composite component situation (toolbar>toolbarItem)

*/

DWPE_Base_Class.prototype.getMarkup=function()

{

	this.update();

	return this.markup;

}





















/*make a globally available instance of base to 

  gain access to its helper functions from inside any subclass*/

var DWPE=new DWPE_Base_Class();

















/*UI Shell*/



var shell={};

	shell.tabs=new Array();

	shell.appname="Fusion";

	shell.global_menu="";

	shell.global_nav="";

	shell.user="Terry Luca";

	

	

	shell.global_row_1="<div id='global-row-1'><div class='left'><img src='../../core/images/oracle_logo.png' title='Oracle' align='absmiddle'>&nbsp;%APP_NAME%</div><div class='right'>%GLOBAL_MENU%&nbsp;<b>%USER%</b></div></div>";

	shell.global_row_2="<div id='global-row-2'><div class='left'>%GLOBAL_NAV%</div><div class='right'>%GLOBAL_SEARCH%</div></div>";

	shell.global_row_3="<div id='global-row-3'><div class='left'>%TABS%</div></div>";

	shell.page_title="<div id='page-title'></div>";

	

			

			

				

	function generateUIShell(shell)

	{

		//make global tabs

		var global_tabs="";

		var splitter="";

		var tab_already_selected=false;

		//make splitter

			

				

		

		

		

		

		var global_header=shell.global_row_1+shell.global_row_2;

		

			var search="";

			if(shell.search.length>0)

			{

				var search_objects=shell.search.split(";");

				search+="<select>";

				for(var i=0;i<search_objects.length;i++)

				{

					search+="<option>"+search_objects[i]+"</option>";

				}

				search+="</select>&nbsp;";

				search+="<input type='text' value='Search...' style='text-align:left'>&nbsp;";

				search+=DWPE_Utilities.getIconMarkup('go');

				

				

			}

		

			var nav=(shell.nav)?'<ux:menus class="dwpe-menu" url="'+shell.nav+'"></ux:menus>':"";

			var user=(shell.user)?shell.user:"Terry Luca";

			var menu=(shell.menu)?'<ux:menus class="dwpe-menu" url="'+shell.menu+'"></ux:menus>':"";

			var appname=(shell.appname)?shell.appname:"Fusion";

			

			

			global_header=

			global_header.replace(/%APP_NAME%/,appname)

						 .replace(/%GLOBAL_MENU%/,menu)

						 .replace(/%GLOBAL_NAV%/,nav)

						 .replace(/%GLOBAL_SEARCH%/,search)

						 .replace(/%USER%/,user);

		

		

			

		

		if(shell.tabs && shell.tabs.length>0)

			{

				var args={}

					args.items=shell.tabs;

					args.toolbar="";

				

				var tabs=DWPE_PanelFactory.generateTabOnlyMarkup(args);

				//if(tabs.length>0)

				global_header+=shell.global_row_3.replace(/%TABS%/,tabs);

			}

			

			

		global_header+=shell.page_title;

							

			

		

		var $global=$("<div id='global-header'></div>");

		

			$body=$("body");

			$body.height("100%");

			

			$global.html(global_header);

			$body.append($global)

			

			

		

		var tab=shell.tabs[shell.selected_tab];

		updatePageTitle(tab.page_title);

		

		var args={};

			args.orientation="horizontal";

			args.items=new Array();

		

		

		var panel={};

			panel.size="200";

			panel.toggle="one";

			panel.content=tab.regional.content;

			panel.state=tab.regional.state;

			panel.style="SecondaryRegion";

			panel.id="regional-pane";

			

			args.items.push(panel);

		

		var panel={};

			panel.size="100%";

			panel.toggle="two";

			panel.content=tab.local.content;

			panel.style="SecondaryRegion";

			panel.state="1";//always open

			panel.id="local-pane";

			

			args.items.push(panel);

			

		var panel={};

			panel.size="200";

			panel.toggle="one";

			panel.content=tab.contextual.content;

			panel.style="SecondaryRegion";

			panel.state=tab.contextual.state;

			panel.id="contextual-pane";

			

			args.items.push(panel);	

			

		var splitter_html=DWPE_PanelFactory.generateSplitterMarkup(args);

			

			

		var splitter_h=$body.height()-$global.outerHeight();

			

			

		var $splitter=$("<div id='global-splitter' class='primaryRegion' style='position:relative;height:"+(splitter_h)+"px;_margin:0px 10px 10px 10px;padding:0px 8px 8px 8px;--moz-border-radius:3px'></div>");



			$body.addClass("GlobalRegion");

			$body.append($splitter);	

			$splitter.html(splitter_html);

		var $ux_splitter=$splitter.find(".dwpe-horizontal-splitter:eq(0)")

			

			

					  

			DWPE_ObjectFactory.processFragment($global);

					  

			DWPE_ObjectFactory.processFragment($splitter);

			

			$(window).bind('resize',

				function()

				{

					var splitter_h=$body.height()-$global.outerHeight();

						$splitter.height(splitter_h-39);

						//$ux_splitter.height($splitter.height());

						//$ux_splitter.width($splitter.width());

						

				}

			)

			

			}

	

	



	function updateGlobalSplitter(index)

	{

		shell.selected_tab=index;

	

		var tab=shell.tabs[shell.selected_tab];

		

		updatePageTitle(tab.page_title);

		

		updateRegional(tab.regional.content,tab.regional.state);

		

		updateLocal(tab.local.content,1);

		

		updateContextual(tab.contextual.content,tab.contextual.state);

		

	

		

		//updateSecondaryTabs(tab);

		

		

	}

	

	function updatePageTitle(url)

	{

		$("#page-title").html("");

		

		$.ajax(	{	url:url,

						cache:false,			//always get a fresh copy of the content 

						async:true,			//always wait for the content to arrive

						success:function(data)

						{

							

							var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,"");

							

							$("#page-title").html(html);

							

							var splitter_h=$('body').height()-$('#global-header').outerHeight();

							$('#global-splitter').height(splitter_h-39);

							

						},

						error:function(XMLHttpRequest, textStatus, errorThrown)

						{

							var splitter_h=$('body').height()-$('#global-header').outerHeight();

							$('#global-splitter').height(splitter_h-39);

							}							

					} );

		

	}

	

	function updateRegional(url,state)



	{



		



		var $pane=$("#regional-pane");

		var $expander=$pane.next().find(".panel-expander");



		



			switch(state*1)



			{

				case -1://hidden

					

					if($pane.data("state")=="1")

					{	$expander.trigger('click');	}

					

					$expander.hide();

					break;

				

				case 1://expanded

					$expander.show();

					

					if($pane.data("state")=="0")

					{	$expander.trigger('click');	}

					break;

				

				case 0: //collapsed

					$expander.show();

					

					if($pane.data("state")=="1")

					{	$expander.trigger('click');	}

					break;

			

			}

			

			

			if(url.length>0)

				$pane.html(updatePaneContent($pane,url));



			



	}



	



	function updateContextual(url,state)



	{



		



		var $pane=$("#contextual-pane");

		var $expander=$pane.prev().find(".panel-expander");



		

		

			switch(state*1)



			{

				case -1://hidden

					

					if($pane.data("state")=="1")

					{	$expander.trigger('click');	}

					

					$expander.hide();

					break;

				

				case 1://expanded

					$expander.show();

					

					if($pane.data("state")=="0")

					{	$expander.trigger('click');	}

					break;

				

				case 0: //collapsed

					$expander.show();

					

					if($pane.data("state")=="1")

					{	$expander.trigger('click');	}

					break;

			

			}



			if(url.length>0)

				$pane.html(updatePaneContent($pane,url));



			



			









			



			



	}

	

	function updateLocal(url)

	{

		

		var $pane=$("#local-pane");

		

			$pane.html(updatePaneContent($pane,url));

			

	}

	

	

	function updatePaneContent($pane,url)

	{

	

		$.ajax(	{	url:url,

					cache:true,			

					async:false,			

					success:function(data)

					{

						

						$pane.html(DWPE_Utilities.get_Object_HTML_From_AJAX(data,""));

						DWPE_ObjectFactory.processFragment($pane);

					},

					error:function(XMLHttpRequest, textStatus, errorThrown)

					{

						$pane.html("Could not find content");

					}							

				} );

	

	}

	

	

/* /DWPE/components/js/DWPE_BaseFactory_Class.js */

/*DWPE_BaseFactory_Class.js*/









/*Set the class that our class will inherit from*/

DWPE_BaseFactory_Class.prototype=new DWPE_Base_Class();



/*Set and Define our own class constructor*/

DWPE_BaseFactory_Class.constructor=DWPE_BaseFactory_Class;

DWPE_BaseFactory_Class.prototype._super=DWPE_Base_Class.prototype;

function DWPE_BaseFactory_Class()

{

	this._class="DWPE_BaseFactory_Class";

	

	return this;	



}



/*Make an Instance of Window Factory that others can call on to create buttons*/

DWPE_BaseFactory=new DWPE_BaseFactory_Class();









/*overrides DWPE_Base_Class.update()*/

DWPE_BaseFactory_Class.prototype.update=function()

{

	this.markup=this.make(this.properties);

}







/**/

DWPE_BaseFactory_Class.prototype.make=function($ux)

{



}





/*returns the first class in the class list*/

DWPE_BaseFactory_Class.prototype.getRootClass=function(class_string)

{

	var _class=class_string.toLowerCase();

				_class=_class.split(" ");

				_class=_class[0]; //pick off the first value in the css class and use it to make our class

	return _class;



}



/*this function stores default definitions for each object type

 and returns them in JSON format */

DWPE_BaseFactory_Class.prototype.getDefaultArgsListForType=function(type)

{



	

	

}







/*this function stores default property sheet definitions for each panel type

 and returns them in JSON format */

DWPE_BaseFactory_Class.prototype.getPropertySheetFields=function(_type)

{}





/*when we have a list that holds items containing DWPE object metadata we first

  initialize it so that we can edit the properties of those individual objects*/

DWPE_BaseFactory_Class.prototype.initEditableObjectList=function(listName)

{

	/*

		when an item in the items list is chosen, populate

		the fields in the items-table 

	*/



	var $list=$("#"+listName);

	if($list.attr("initialized")==1) return;

	

	$list.change(

		function(event)

			{

				var $select=$(this);

				var $option=$($select.attr("options")[$select.attr("selectedIndex")]);

				

				

				

				var args=$option.data("obj");

				

				

				

				//create the prop sheet

				DWPE_BaseFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);

				

				//populate the prop sheet

				for(var argName in args)

				{

					/*we prepend 'item__' to the id so as not to interfere 

					 with those same properties that the parent may define*/

					 

					$("#item__"+argName).val(args[argName]);

				}

			

			}

		);



	

	//insert the add and delete controls immediately after the list

	$(	'<p align="right" id="addRemoveListItems">'+

		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_BaseFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+

		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_BaseFactory_Class.removeSelectedListItem(\''+listName+'\')">'+

		'</p>'

	).insertAfter($list);						

	

	

	$list.attr("initialized",1);



}



/*this function builds a properties form for editing a component from 

within compound components such as toolbar*/

DWPE_BaseFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)

{

	

	var args=DWPE_BaseFactory.getPropertySheetFields(type);





	var markup="";

	

	

	markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';

	

	if(args.length==0)

		markup+="<tr><td>No property sheet exists for this item type.</td></tr>";

	else

	{

		for(var argName in args)

		{

			var arg=args[argName];

			

		

			

			markup+="<tr>";

				

			

			switch(arg.type)

			{

				case 'select':

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+

								arg.value+

							'</select></td>';

					break;

				case 'chooser':

				

					var options=arg.value.split("&");

					

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";

					

					for(var i in options)

					{

						var option=options[i].split("=");

						markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";

					}

							

					markup+='</select></td>';

					break;	

				

				case 'hidden':

					markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';

					break;

				case 'text':

				default:

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';

					break;

			}

			

			markup+="</tr>";

		}

	}	

	markup+="</table>";						

				

	//insert markup inside our properties sheet container			

	$("#"+listName+"-property-sheet").html(markup).show("slide");

	

	

	

	/*wire up our properties sheet & list*/

	

	

	

				

	/*

		when a value in a field on our list changes,

		collect all field values and post them on the

		selected item's .data("obj") variable

		

		

	*/		

			

	$("#"+listName+"-selected-item-properties :input").keyup(

	

		function()

		{

				

			var args={};

			$("#"+listName+"-selected-item-properties :input").each(

			

				function()

				{

					var $fld=$(this);

					

					/*strip off the 'item__' prefix 

					   from the fld id to form the property name*/

					var propName=$fld.attr("id").replace(/item__/,"");

					

					args[propName]=$fld.val();

					

			

				}

			

			);

			

			

			

			var $select=$("#items");

			var i=$select.attr("selectedIndex");

			if(i>-1)

			{

				$option=$( $select.attr("options")[i]);

				$option.data("obj",args);

				$option.text(args.label);

			

			}

		}	

	

	).change(

	

		function()

		{

				

			var args={};

			$("#"+listName+"-selected-item-properties :input").each(

			

				function()

				{

					var $fld=$(this);

					

					/*strip off the 'item__' prefix 

					   from the fld id to form the property name*/

					var propName=$fld.attr("id").replace(/item__/,"");

					

					args[propName]=$fld.val();

					

			

				}

			

			);

			

			

			

			var $select=$("#items");

			var i=$select.attr("selectedIndex");

			if(i>-1)

			{

				$option=$( $select.attr("options")[i]);

				$option.data("obj",args);

				$option.text(args.label);

			

			}

		}	

	

	)







}









/*---------------------------------------*/

/* Property List Management Class Methods*/

/*---------------------------------------*/



/* On A Select List Box, removes the item the user

   has highlighted and highlights the preceding available item  */

DWPE_BaseFactory_Class.removeSelectedListItem=function(listID)

{

	

	//get list

	var $list=$("#"+listID);

	var i=$list.attr("selectedIndex");

	var len=$list.attr("options").length;

	

	

	//do nothing if list is empty

	if(len==0)

		return;

	

	//remove selected item

	$($list.attr("options")[i]).remove();

	

	//do nothing if list is now empty

	if(len-1<=0) 

		return;

	

	//move selectedIndex

	i=(i-1<0)?0:i-1;

	$list.attr("selectedIndex",i);

	

	//force list to update property sheet

	$list.change();

}



/* On a Select List Box adds an item to the list

	

	Note, code is ButtonFactory specific now, should be made generic later



*/

DWPE_BaseFactory_Class.addListItem=function(listID)

{



	var $list=$("#"+listID);

	var $option=$("<option></option>");

	

	var args=DWPE_BaseFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));

	

	//set options label

	$option.text(args.label);

	

	//set the data 'obj' variable to our args 

	$option.data("obj",args);$list.append($option);



}













/* /DWPE/components/js/DWPE_Utilities.js */

/* DWPE_Utilities.js

   Stores helper functions */



DWPE_Utilities={};





//processes a command

DWPE_Utilities.performCommand=function($item,cmd)

{	



	 //don't execute if callee is disabled

	if(DWPE_Utilities.isDisabled($item)) return false;

	

	//perform action, if one is defined

	if(cmd)

	{

		

		

		var action=cmd.split("::");

		

		var param=action[1];

			

		switch(action[0].toLowerCase())

		{	

			

			case "dialog":

				

				try{

					$(document).data('context',$item);

					DWPE_WindowFactory.open($item,param);

				

					}

				catch(e){alert("error loading dialog");}

				

				break;	

			case "new":

				

				try

				{

					window.open('',action[1],'');

				}	catch(e){alert("error loading content in new window")}

				break;

			

			case "open":

				

				try

				{

					document.location=action[1];

				}	catch(e){alert("error loading content in current window")}

				

				

				break;

			case "js":

			default:

				

				try{

					$(document).data('context',$item);

					eval(param);

					}

				catch(e){alert("error in command format");}

				

				break;	

		}

			

		

		

	}

	

	return false;

}



function openDialog(url)

{

	var $item=$(document).data('context');

		$(document).data('selected-rows',null);

		$(document).data('lov-context',$item);

	

	DWPE_WindowFactory.open($item,url);

}



function openShell(url)

{

	if(url && url.length>0)

		document.location=url;

	else

		alert('Error loading shell content: "'+url+'"');

}



function openPage(url)

{

	

	if(url && url.length>0)

		document.location=url;

	else

		alert('Error loading page content: "'+url+'"');

}



function closeDialog()

{

	DWPE_WindowFactory.closeWindow();

	var $fld=$(document).data('lov-context');

	var selected_rows=$(document).data('selected-rows');

		if($fld.length>0 && selected_rows)

		{	$fld.val(selected_rows.join("; "));	}

		

		$(document).data('lov-context',null);

		$(document).data('selected-rows',null);

		

}



function cancelDialog()

{

	DWPE_WindowFactory.closeWindow();

	$(document).data('lov-context',null);

	$(document).data('selected-rows',null);

}













/*looks at the passed in object and

  calls the correct handler*/

DWPE_Utilities.performAction=function(o)

{

	$callee=$(o)

	if($callee.attr("cmd").indexOf("js::") == 0)

		DWPE_Utilities.exec($callee);

	else

		DWPE_Utilities.loadURL($callee);

}



/*loads a url into self or other window;

	used by toolbar & menu items	*/

DWPE_Utilities.loadURL=function(o)

{

	var $callee=$(o);

	if(DWPE_Utilities.isDisabled($callee)) return; //don't execute if callee is disabled

	

	var url=$callee.attr("cmd").split("::")[1];

	document.location=url;

	

	

}



/*evals the javascript code that callee holds in its 'cmd' attrib;

	used by toolbar & menu items	*/

DWPE_Utilities.exec=function(o)

{

	var $callee=$(o);

	if(DWPE_Utilities.isDisabled($callee)) return; //don't execute if callee is disabled

	

	var cmd=$callee.attr("cmd").split("::")[1];

		

	try{

		$(document).data('context',$callee);

		eval(cmd);

		}

	catch(e){alert("error in command format");}

}



DWPE_Utilities.getContext=function()

{

	return $(document).data('context');

}

DWPE_Utilities.isDisabled=function(o)

{	

	var $btn=$(o);

	

	

	if(	$btn.hasClass('Button_Disabled')	||

		$btn.hasClass('Disabled')	||

		$btn.hasClass('disabled')			

		)

		return true;

	else

		return false;



}



DWPE_Utilities.getUniqueId=function()

{

	return 'ux'+new Date().getTime();

}



/*Returns the actual width of scrollbars in the given browser*/

DWPE_Utilities.scrollbarWidth=null;

DWPE_Utilities.getScrollbarWidth=function()

{

	if(DWPE_Utilities.scrollbarWidth==null)

	{

		var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');

		// Append our div, do our calculation and then remove it

		$('body').append(div);

		var w1 = $('div', div).innerWidth();

		div.css('overflow-y', 'scroll');

		var w2 = $('div', div).innerWidth();

		$(div).remove();

		DWPE_Utilities.scrollbarWidth=(w1 - w2);

	}

	

	return DWPE_Utilities.scrollbarWidth;

}



/*determines if the object passed in is contained by the parent having the id passed in*/

DWPE_Utilities.isObjectContainedByID=function($object,parentID)

{

	if(!parentID) return true;

	

	//console.log(parentID);

	

	var $parent=$($object.parent());

	

	//console.log(parent);

	

	while($parent.attr('id')!=parentID && $parent.attr('tag')!='body')

	{

		$parent=$($parent.parent());

	

	}

	

	if($parent.attr('id')==parentID || $parent.attr('tag')=='body')

		return true;

	else

		return false;

}





/*formatting*/

DWPE_Utilities.format=function(type,value)

{

	var fv;

	switch(type)

	{

		case 'usd':

			

			var num = isNaN(value) || value === '' || value === null  ? 0.00 : value;

    			num=parseFloat(num).toFixed(2);

    		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)

			{	num = num.substring(0,num.length-(4*i+3))+','+

				num.substring(num.length-(4*i+3));

			}

				num=num.replace(/,\./gi,'.');

			

			fv="$"+num+"";

			break;

		default:

			fv=value;

			break;

			

	}

	

	

	return fv;



}



/*-------------------*/

/* Icons             */

/*-------------------*/



//16x16

DWPE_Utilities.icons = {};

DWPE_Utilities.icons["blank"]       		   = {index:0,tooltip:""};



DWPE_Utilities.icons["confirm"]		           = {index:1,tooltip:""};

DWPE_Utilities.icons["error"]		           = {index:2,tooltip:""};

DWPE_Utilities.icons["info"]		           = {index:3,tooltip:""};

DWPE_Utilities.icons["warning"]		           = {index:4,tooltip:""};

DWPE_Utilities.icons["duplicate"]			   = {index:5,tooltip:"Duplicate"};

DWPE_Utilities.icons["indent"]		           = {index:6,tooltip:"Indent"};

DWPE_Utilities.icons["unindent"]			   = {index:7,tooltip:"Outdent"};



DWPE_Utilities.icons["search"]		           = {index:8,tooltip:"Search"};

DWPE_Utilities.icons["go"]		               = {index:8,tooltip:"Search"};



DWPE_Utilities.icons["moveleft"]	           = {index:9,tooltip:"Remove selected items from list"};

DWPE_Utilities.icons["previous"]	           = {index:9,tooltip:"Show the previous page"};

DWPE_Utilities.icons["moveright"]	   	       = {index:10,tooltip:"Move selected items to other list"};

DWPE_Utilities.icons["next"]	   	           = {index:10,tooltip:"Show the next page"};

DWPE_Utilities.icons["moveleftall"]	           = {index:11,tooltip:"Remove all items from list"};

DWPE_Utilities.icons["moverightall"]		   = {index:12,tooltip:"Move all items to other list"};

DWPE_Utilities.icons["movebottom"]             = {index:13,tooltip:"Move selected items to bottom of list"};

DWPE_Utilities.icons["movetop"]	               = {index:14,tooltip:"Move selected items to top of list"};

DWPE_Utilities.icons["movedown"]	           = {index:15,tooltip:"Move selected items down one in list"};

DWPE_Utilities.icons["moveup"]	               = {index:16,tooltip:"Move selected items up one in list"};

DWPE_Utilities.icons["create"]	               = {index:17,tooltip:""};

DWPE_Utilities.icons["freezecolumn"]	       = {index:18,tooltip:"Freeze Column"};

DWPE_Utilities.icons["unfreezecolumn"]	       = {index:19,tooltip:"Unfreeze Column"};

DWPE_Utilities.icons["wrap"]	               = {index:20,tooltip:"Wrap Text"};

DWPE_Utilities.icons["detach"]	               = {index:21,tooltip:"Detach Table"};

DWPE_Utilities.icons["add"]  	               = {index:22,tooltip:"Add"};

DWPE_Utilities.icons["addrow"]	               = {index:22,tooltip:"Add Row"};

DWPE_Utilities.icons["addnode"]	               = {index:22,tooltip:"Add Node"};

DWPE_Utilities.icons["addmany"]                = {index:33,tooltip:"Select and Add"};

DWPE_Utilities.icons["delete"]	               = {index:23,tooltip:"Delete"};

DWPE_Utilities.icons["remove"]	               = {index:23,tooltip:"Remove"};

DWPE_Utilities.icons["edit"]	               = {index:24,tooltip:"Edit"};

DWPE_Utilities.icons["exportexcel"]	           = {index:25,tooltip:"Export to Excel"};

DWPE_Utilities.icons["folder"]	               = {index:26,tooltip:""};

DWPE_Utilities.icons["go-up"]	               = {index:27,tooltip:"Go Up"};

DWPE_Utilities.icons["go-to-top"]	           = {index:28,tooltip:"Go to Top"};

DWPE_Utilities.icons["file"]	               = {index:29,tooltip:""};

DWPE_Utilities.icons["show-as-top"]	           = {index:30,tooltip:"Show as Top"};

DWPE_Utilities.icons["hierselector"]	       = {index:31,tooltip:"Show Hierarchy"};

DWPE_Utilities.icons["qbe"]	                   = {index:32,tooltip:"Query by Example"};

DWPE_Utilities.icons["lov"]	                   = {index:34,tooltip:"Choose..."};

DWPE_Utilities.icons["keyflex"]	               = {index:35,tooltip:""};

DWPE_Utilities.icons["record-info"]	           = {index:36,tooltip:""};

DWPE_Utilities.icons["date"]	               = {index:37,tooltip:"Select Date"};

DWPE_Utilities.icons["refresh"]	               = {index:38,tooltip:"Refresh"};

DWPE_Utilities.icons["uap"]	                   = {index:39,tooltip:""};

DWPE_Utilities.icons["closetab"]		= {index:252,tooltip:"Close"};

DWPE_Utilities.icons["choicelist"]		= {index:253,tooltip:""};

DWPE_Utilities.icons["help"]			= {index:254,tooltip:"Help"};

DWPE_Utilities.icons["person"]			= {index:255,tooltip:""};



//9x9 icons

DWPE_Utilities.icons["expanded-node"]	    = {index:189,tooltip:"", grid:9};

DWPE_Utilities.icons["collapsed-node"]		= {index:190,tooltip:"", grid:9};





//12x12 icons

DWPE_Utilities.icons["term-def"]	       = {index:132,tooltip:"%DEFINITION%", grid:12};

DWPE_Utilities.icons["updated-value"]	   = {index:133,tooltip:"Updated Value", grid:12};

DWPE_Utilities.icons["status-ok"]	       = {index:134,tooltip:"Ok status", grid:12};

DWPE_Utilities.icons["status-pending"]	   = {index:135,tooltip:"Pending status", grid:12};

DWPE_Utilities.icons["status-error"]	   = {index:136,tooltip:"Error status", grid:12};

DWPE_Utilities.icons["status-locked"]      = {index:137,tooltip:"Locked status", grid:12};

DWPE_Utilities.icons["status-not-started"] = {index:138,tooltip:"Not Started status", grid:12};

DWPE_Utilities.icons["status-unlocked"]	   = {index:139,tooltip:"Unlocked status", grid:12};

DWPE_Utilities.icons["status-warn"]	       = {index:140,tooltip:"Warning status", grid:12};

DWPE_Utilities.icons["prev-item"]	       = {index:141,tooltip:"Previous Item", grid:12};

DWPE_Utilities.icons["next-item"]	       = {index:142,tooltip:"Next Item", grid:12};

DWPE_Utilities.icons["requires-one"]	   = {index:144,tooltip:"At least one is required", grid:12};

DWPE_Utilities.icons["required"]		   = {index:145,tooltip:"Required", grid:12};

DWPE_Utilities.icons["not-required"]       = {index:999,tooltip:"",grid:0};











DWPE_Utilities.getIcon=function(iconName)

{

	var icon;

	try{

		icon= DWPE_Utilities.icons[ iconName.toLowerCase() ];

	} catch(e){icon={index:0};}

	

	var iconID=icon.index;

	

	var x = ((iconId % 32)  * -16 );

	var y = (parseInt(iconId / 32) * -16 );

	

	 return x+"px "+y+"px";

}



/*reverse lookup of iconName by iconIndex*/

DWPE_Utilities.getIconNameByIndex=function(iconIndex)

{

	var iconIndex;

	var iconName=null;

	

	for(var _name in DWPE_Utilities.icons)

	{

		var icon=DWPE_Utilities.icons[_name];

		if( icon.index==iconIndex)

		{	iconName=_name;

			break;	}

	}

	

	

	return (iconName)?iconName:"blank";

	

}





/*returns the key (name) for an icon, at random*/

DWPE_Utilities.getRandomIcon=function()

{

	var n=1+parseInt(Math.random()*36);

	

	var i=0;

	for(var argName in DWPE_Utilities.icons)

	{

		if(n==i++) return argName;

	}

	

	return 'blank';

}



/*returns the key (name) for an icon, at random*/

DWPE_Utilities.getRandomStatusIconMarkup=function()

{

	var n=134+parseInt(Math.random()*7);

	

	var i=0;

	var icon_name='blank'

	for(var argName in DWPE_Utilities.icons)

	{

		if(n==DWPE_Utilities.icons[argName].index) 

		{	icon_name=argName;

			break;	}

	}

	

	return DWPE_Utilities.getIconMarkup(icon_name);

}









DWPE_Utilities.getIconMarkup=function(iconName,extension,override_tooltip)

{

	/*resolve icon name to iconId

		if no iconId is found treat iconName as a background-image URL*/

	var icon=null;

	var iconId="";

	var style="";

		extension=(!extension)?"":extension;

	

	try{

		icon=DWPE_Utilities.icons[ iconName.toLowerCase() ];

		iconId= " ico-"+iconName;

	} 

	catch(e)

	{	iconId="";	}

	

	

	

	if(icon==null)

	{

		iconId=""; 

		return "<div class='icons " +iconId+ " " + extension + "' style='background-image:url("+iconName+")'></div>";

	}

	else

	{

		var tooltip=(override_tooltip && override_tooltip.length>0)?"":icon.tooltip;

	

		var markup= "<div class='icons "+iconId+ " " + extension + "' ";

			if(icon.tooltip.length>0)

				markup+=" title='"+tooltip+"' ";

			markup+="></div>";

			return markup;

	}



}







/*WARNING: comment this function before committing DWPE_Utilities to the repository

generates css for icon offsets by iconname and dumps it into console; copy this dump

to DWPE_Base.css 

$(function()

{

var str="";





for(var argName in DWPE_Utilities.icons)

{

	var icon=DWPE_Utilities.icons[argName];

	var grid=(icon.grid===undefined)?16:icon.grid;

	var i=icon.index;

	

	var x = ((i % grid)  * -grid );

	var y = (parseInt(i / grid) * -grid );



		x=isNaN(x)?0:x;

		y=isNaN(y)?0:y;

		



	

	str+=".i"+i+",.ico-"+argName+"{background-position:"+x+"px "+y+"px; width:"+grid+"px; height:"+grid+"px}\r\n";

}





console.log(str);

}); 

*/







/*shows a wait icon on top of the $callee icon -- for use when making ajax calls to retrieve content*/

DWPE_Utilities.showWaitIcon=function($callee)

{

	

	var $wait=$("<div class='wait'></div");

	var	L=$callee.offset().left - $callee.parent().offset().left;

	var	T=$callee.offset().top - $callee.parent().offset().top;

	

		$wait.css({top:T,left:L,"z-index":DWPE_WindowFactory.getNextZ()});

		$callee.parent().append($wait);

		return $wait;

}





DWPE_Utilities.makeJavascriptSafe=function(str)

{

	return str.replace(/'/g,'"');

			

}



DWPE_Utilities.get_Object_HTML_From_AJAX=function(data,type)

{

	//remove script and link tags

	data=data.replace(/<script.*?>[\s\S]*?<\/.*?script>/gi,"")

			 .replace(/<link[^>]*>/gi,"");

			 

	//$html is the incoming html file which we wrap in a div so we can call jquery functions on it

	var $html=$("<div></div>").html(data);

		

		if(type.length>0)

		{

		

			$object=$html.find(type);



		

			if($object.length>0)



				return $object.html();



			else

	

				return "Could not find component code!";

		}

		else

		{

				return $html.html();

		}

}





DWPE_Utilities.getSampleContent=function(length)

{

	switch(length)

	{

		case 'confirmation-dialog':

			return "The request was canceled.";

			break;

		

		case 'error-dialog':

			var str='<div><b>Messages for this page are listed below.</b></div>'+

					'<table>'+

						'<tr valign="top">'+

						'	<td rowspan="2"><a href="javascript:;">Field&nbsp;Name&nbsp;1</a></td>'+

						    '<td>'+DWPE_Utilities.getIconMarkup('error')+'</td>'+

							'<td>Text describing the <span style="color:  red; font-weight: bold;">error</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+

						'</tr>'+

						'<tr valign="top">'+

							'<td>'+DWPE_Utilities.getIconMarkup('warning')+'</td>'+

							'<td>Text describing the <span style="color:  rgb(255, 204, 51); font-weight: bold;">warning</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+

						'</tr>'+

						'<tr valign="top">'+

							'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;2</a></td>'+

							'<td>'+DWPE_Utilities.getIconMarkup('warning')+'</td>'+

							'<td>Text describing the <span style="color:   rgb(255, 204, 51); font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+

						'</tr>'+

						'<tr valign="top">'+

							'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;3</a></td>'+

							'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+

							'<td>Text describing the <span style="color:   blue; font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+

						'</tr>'+

				'</table>';

						

			return str;

			break;

		case 'warning-dialog':

			var str='You have not saved your changes. If you leave this page, then your changes will be lost. Do you want to continue?';	

						

			return str;

			break;

			

		case 'info-dialog':

			var str='<div><b>Messages for this page are listed below.</b></div>'+

				'<table>'+

						'<tr valign="top">'+

						'	<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;1</a></td>'+

						    '<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+

							'<td>Text describing the <span style="color: blue; font-weight: bold;">warning</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+

						'</tr>'+

						'<tr valign="top">'+

							'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;2</a></td>'+

							'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+

							'<td>Text describing the <span style="color:  blue; font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+

						'</tr>'+

				'</table>';	

						

			return str;

			break;	

		case 'long':

			var str="";

			for(var i=0;i<6;i++)

			{	str+=DWPE_Utilities.getLoremIpsum();	}

			return str;

			break;

		

		case 'medium':

			var str="";

			for(var i=0;i<3;i++)

			{	str+=DWPE_Utilities.getLoremIpsum();	}

			return str;

			break;

		case 'short':

		default:

			return DWPE_Utilities.getLoremIpsum();

			break;		

	

	

	}



}





DWPE_Utilities.getLoremIpsum=function()

{

	return '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem illo inventore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>';

}





DWPE_Utilities.triggerResize=function()

{

	$(window).trigger('resize');

}



DWPE_Utilities.componentResizeThrottle=null;

DWPE_Utilities.triggerComponentResize=function()

{

	//should eventually pass in parent, so we can test containment before each component commits to processing resize

	

	/*if we don't already have a resize reqeust in queue, create one, otherwise let the current request fire when ready;

	  this effectively throttles calls to resize to no more than once every 250 ms

	*/

	if(DWPE_Utilities.componentResizeThrottle==null)

	{	DWPE_Utilities.componentResizeThrottle=

			setTimeout

			(

				function()

				{

					$(window).trigger('dwpe-component-resize');

					DWPE_Utilities.componentResizeThrottle=null;

				},

				

				250 //ms

			);

	}

}























/* /DWPE/components/js/DWPE_ObjectFactory_Class.js */

/*DWPE_Object_Factory_Class*/



function DWPE_ObjectFactory_Class()

	{

		this.queue=new Array();

		this.timer=null;

		this.performanceMonitoringOn=false;

		return this;

	}

var DWPE_ObjectFactory=new DWPE_ObjectFactory_Class();



DWPE_ObjectFactory_Class.prototype.add=function(work_items)

	{

		//var _this=this;

		//$.merge(this.queue,work_items);

		this.queue=work_items;

		this.qty=this.queue.length;

		

		this.processQueue();

		//if(this.timer==null)

		//	this.timer=setInterval(function(){_this.processQueue();},1);

	}



DWPE_ObjectFactory_Class.prototype.processFragment=function($fragment)

{

	this.add($fragment.find(":dwpe"));

}



DWPE_ObjectFactory_Class.prototype.processPage=function()

{

	this.add($(":dwpe"));



	

}

	

DWPE_ObjectFactory_Class.prototype.processQueue=function()

	{



	this.queue.each(

	

		function()

		{

			//get our next ux stub

			var $parent=$(this);

		

	        	

		

			var _class=$parent.attr("class").toLowerCase();

				_class=_class.split(" ");

				_class=_class[0]; //pick off the first value in the css class and use it to make our class

				

			

			switch(_class)

			{

				case 'dwpe-radiogroup':

				case 'dwpe-checkbox':

				case 'dwpe-prompt':

				case 'dwpe-textarea':

				case 'dwpe-textbox':

				case 'dwpe-fileupload':

				case 'dwpe-link':

				case 'dwpe-uishell':

				

				

					/*no post processing required*/

					break;

				case 'dwpe-table':

					DWPE_TableFactory.make($parent);	

					break;

				case 'dwpe-tree':

					DWPE_TreeFactory.make($parent);	

					break;

				case 'dwpe-menu':

					DWPE_WindowFactory.make($parent);

					break;

				case 'dwpe-singleselectchoicelist':

				case 'dwpe-spinbox':

				case 'dwpe-multiselectchoicelist':

				case 'dwpe-multiselectlistbox':

				case 'dwpe-datetimepicker':

				case 'dwpe-lov':

					DWPE_FormFactory.make($parent);

					break;

				case 'dwpe-horizontal-splitter':

				case 'dwpe-vertical-splitter':

				case 'dwpe-accordion':

				case 'dwpe-tabset':

				case 'dwpe-trainset':

				case 'dwpe-header':

				case 'dwpe-subheader':

				case 'dwpe-subsubheader':



					DWPE_PanelFactory.make($parent);

					break;

					

				case 'dwpe-carousel':

				    DWPE_Carousel.make($parent);

					break;

				

				case 'dwpe-toolbar':

					DWPE_Toolbar.make($parent);	

					break;

				

				case 'dwpe-button':

				case 'dwpe-overflow-btn':

				case 'dwpe-toolbar-resize':

				

					/*no post processing required*/

					break;

				

				case 'dwpe-window-container':

					DWPE_WindowFactory.make($parent);

					break;

				default:			

					

					//console.log($parent)

					var args=ux_data[$parent.attr("id")];

					

					//call make on our main class, passing in the metadata, returning a new object

					var obj=DWPE.make(args);

					

					//set the DOM parent of our test object 

					obj.parent=$parent;

					

					//ask our test object to render to screen

					obj.render();

					

					

					

					break;

					

					

			}

			

			$parent.addClass("initialized");

			

		}

	

	)

	

	

	clearInterval(this.timer);

	if(this.performanceMonitoringOn==true) this.postPerformanceMonitoringResults();

	

	setTimeout(function(){DWPE_Utilities.triggerResize()},100);	



	/*

	if(this.queue.length==0)

		{

			clearInterval(this.timer);

			if(this.performanceMonitoringOn==true) this.postPerformanceMonitoringResults();

		}

		else

		{

			//get our next ux stub

			$parent=$(this.queue.shift());

		

			//call make on our main class, passing in the metadata, returning a new object

			var obj=DWPE.make(ux_data[$parent.attr("id")]);

			

			//set the DOM parent of our test object 

			obj.parent=$parent;

			

			//ask our test object to render to screen

			obj.render();

			

		}

		*/

		

	}	

	

DWPE_ObjectFactory_Class.prototype.startPerformanceMonitoring=function()

{

	this.performanceMonitoringOn=true;

	performanceMonitorBusy=true;

	this.start=new Date().getTime();

}



DWPE_ObjectFactory_Class.prototype.postPerformanceMonitoringResults=function()

{

	

	

	this.end=new Date().getTime();

	var elapsed=this.end-this.start;

	storeData(elapsed,this.qty);

	

	

	var msg= "<p>Time to make " + this.qty + " object(s) was "+ elapsed + " ms</p>";

	$("#time-to-execute").append(msg);

	

	

	this.performanceMonitoringOn=true;

	performanceMonitorBusy=false;

	

	

	

	

	var json_string=$("#metadata").val();

	

	

	if(json_string.length==0) return;

	

	//update property settings from metadata

	 updatePropertySettings(json_string);

	

	

	



	

}





















var lapsedTimes=new Array();

var quants=new Array();   





/*Performance Monitor runs a battery of object creation tests

  to determine how performant the code is */

var performanceMonitorBusy=false;

var performanceTests=[10,20,30,40,50];

var performanceTestStep=0;

var performanceMonitor;

var performanceMonitorMessages="";







function runPerformanceTest()

{



	$(":input").each(

	

		function(i)

		{

			$(this).attr("disabled","disabled");

		}

	)

	

	$("#time-to-execute").empty();

	performanceTestStep=0;

	performanceMonitorMessages="";

	performanceMonitor=setInterval(_performTest,1000);	

}



/* step through test, instantiating metadata the 

   number of times requested by the test step and

   graphing result */

function _performTest()

{

	if(performanceTestStep<performanceTests.length)

	{	

		if(performanceMonitorBusy==false)

		{

			$("#preview").empty();

			

			$("#qty").val(performanceTests[performanceTestStep++]);

					commitToPreview();

		}		

	}

	else

	{

		

		$(":input").each(

	

		function(i)

		{

			$(this).removeAttr("disabled");

		}

		);

		$("#qty").val(1);

		

		makeChart();

		clearInterval(performanceMonitor);

		//$("#time-to-execute").html(performanceMonitorMessages);

	}

	

}







/*store elapsed times and object quantities for use in charts*/

function storeData(t,q)

{

	lapsedTimes.push(t);

	quants.push(q);

	



}



/*calls the google chart api to draw a performance graph*/

function makeChart()

{

	var quantities=quants.join(",");

	var values=lapsedTimes.join(",");

	$("#performance-chart")

		.html("<img src='http://chart.apis.google.com/chart?chs=200x125&cht=lc&chds=0,3000&chco=0077CC&chd=t:"+values+"'/>");



}







/* /DWPE/components/js/DWPE_Window_Class.js */

/*DWPE_Window_Class.js*/


/*defines a class for managing windows (layers)*/
function DWPE_Window_Class()
{
	this.zCount=999;
	this.windows=new Array();
	
	this.groups={};	
	this.precedingGroup=null;
	this.mostRecentGroup=null;
	this.shadowWidth=16;
	this.shadowHeight=16;
	
	return this;
}
/*make a globally available instance of window to 
  gain access to its helper functions from inside any subclass*/
var DWPE_Window=new DWPE_Window_Class();



//get a window object and place it on top of all windows
DWPE_Window_Class.prototype.addWindow=function(_callee,id,_type,_group)
{
	//enforce defaults
	var callee=(!_callee)?$("body"):_callee;
	var type=(!_type)?"menu":_type;
	var group=(_group==null)?this.mostRecentGroup:_group;
	
	var windowWidth=$(window).width();
	var windowHeight=$(document).height();
	
	
	//prepare the window group if it doesn't exist
	var $mask=this.makeModalMask(group,$('body'),callee);
	
	
	
	//get callee location info
	var location=callee.offset();
	
	
	//manufacture a window object and append it to our mask
	
	//acquire the group's highest z-index
	var z=$mask.attr("zCount");
	
	var w;
	switch(type)
	{
		case 'dialog':
		case 'overflow-menu':
			//make window
			w=$(DWPE_Window_Class.addShadowFrame(id,"<ul id='"+id+"-body' class='DWPE_window_overflow'></ul>"));
			
				
			
			//position window TR
			w.css({	'zIndex':z++,
			'left':location.left + callee.width(),
			'top':location.top
			});
			break;
	
		case 'menu':
		default:
			//make window
			w=$(DWPE_Window_Class.addShadowFrame(id,"<ul id='"+id+"-body' class='DWPE_Window_Body Menu'></ul>"));
			//position window BL
			w.css({	'zIndex':z++,
			'left':location.left,
			'top':location.top+callee.height()
			});										
			break;									
	}												
	$mask.append(w);
	
	//add the window object to the window group
	this.groups[group].push(w);
	
	
	
	
	//increment the group zCount on mask		
	$mask.attr("zCount",z);		

	return w;
}




DWPE_Window_Class.prototype.makeModalMask=function(group,$parent,callee)
{

	var $mask;
	
	
	
	if( !this.groups[group] )
	{	this.groups[group]=new Array();	
		
		//store mask as first element of this window group
		$mask=$("<div class='mask'></div>");
		$parent.append($mask);
		this.groups[group].push($mask);
		
		//store callee on mask for use in cleanup operations
		$mask.data("callee",callee);
		
		//Get the screen height and width  
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
      
       
       
       
       
       //Set height and width of mask to fill up the whole screen  
       $mask.css({	'z-index':DWPE_WindowFactory.getNextZ(),
	   				'top':0,
					'left':0,
					'width':maskWidth,
					'height':maskHeight});
		
		//set the close window behavior on the mask
		$mask.click(
				function(){
					DWPE_Window.closeWindowGroup(group);
				});
		
		//initialize z-order count for all windows that will attach to this group	
		$mask.attr("zCount",0);		
		
		this.precedingGroup=this.mostRecentGroup;
		this.mostRecentGroup=group;
	}
	else
	{	$mask=this.groups[group][0];	}
	
	
	
	return $mask;



}



DWPE_Window_Class.addShadowFrame=function(id,body)
{
	var frame="<div class='DWPE_window'>"+body+"</div>";
	
		return frame;		
}


//remove a window group from the display
DWPE_Window_Class.prototype.closeWindowGroup=function(group)
{
	var win=this.groups[group];
	
	if(!win) return;
	
	//reset mostRecentGroup to the preceding group
	this.mostRecentGroup=win.precedingGroup|"window";
	
	
	/* mask is index 0 and holds the object id of callee; 
	call cleanup on callee */
	var mask=win[0];
	if(  mask && mask.data("callee") )
	{
		mask.data("callee").trigger("cleanup");
	}
	
	//remove all windows from this group
	while(win.length>0)
	{
		var w=win.pop();
		w.detach();
		
	}
	
	//set group to null, preparing it for GC
	this.groups[group]=null;
	
	

}


//remove a window object from the display
DWPE_Window_Class.prototype.removeWindow=function()
{

	var w=this.windows.pop();
		w.remove();
		this.zCount--;

}

//remove all window objects from the display
DWPE_Window_Class.prototype.removeAllWindows=function()
{

	while(this.windows.length>0)
	{
		this.removeWindow();
	}
}



/*Begin Class Methods*/
DWPE_Window_Class.anchorTo=function(pos,$object,$window)
{
	var location=$object.offset();
	
	
	var windowWidth=$(window).width();
	var windowHeight=$(window).height();
	
	var left=0,top=0;
	var shadowWidth=shadowHeight=16;
	
	switch(pos)
	{
		case 'tr': //anchor window to  top right of object
		default:
			
			//if we cross the right edge, paint left
			var left=location.left+$object.width();
			if(left+$window.width() > windowWidth*.9 )
				left=location.left-$window.width()+shadowWidth;
			
			//if we cross the bottom edge, paint up
			var top=location.top;
			if(top+$window.height() > windowHeight *.9)
				top=location.top+$object.height()-$window.height()+shadowHeight;
			
			break;			
	
	
	}
	
	$window.css({	
				'left':left,
				'top':top
				});	

}

















/* /DWPE/components/js/DWPE_ButtonFactory_Class.js */

/*DWPE_ButtonFactory_Class.js*/









/*Set the class that our class will inherit from*/

DWPE_ButtonFactory_Class.prototype=new DWPE_Base_Class();



/*Set and Define our own class constructor*/

DWPE_ButtonFactory_Class.constructor=DWPE_ButtonFactory_Class;

DWPE_ButtonFactory_Class.prototype._super=DWPE_Base_Class.prototype;

function DWPE_ButtonFactory_Class()

{

	this._class="DWPE_ButtonFactory_Class";

	

	return this;	



}



/*Make an Instance of Button Factory that others can call on to create buttons*/

DWPE_ButtonFactory=new DWPE_ButtonFactory_Class();



/*returns a string with:

   1. spaces converted to &nbsp;

   2. underscore+[character] replaced with underlined tag markup around [character]

*/

DWPE_ButtonFactory_Class.prototype.formatString=function(str)

{

	

	if(str)

		str=str.replace(/ /g,"&nbsp;")

			  .replace(/_(.)/g,"<u>$1</u>");

	

	return str;

	

}





/*this is a helper function to make a clickable region; most buttons use it*/

DWPE_ButtonFactory_Class.prototype.makeClickableRegion=function(content,render_style)

{

	var newline="\r\n";

		tab="\t";

	

	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";





	var className=this.buttonClass;

		if(this.properties.state=="0")

			className+=" Button_Disabled";

		else if(this.properties.state=="2")	

			className+=" Button_Active";

	

	//var markup="<li id='"+this.getID()+"' class='"+className+"' ";

	var markup="\n<"+tag+" class='"+className+"' ";

	

	if(this.properties.tooltip)

		markup+=" title='"+this.properties.tooltip+"' ";

	

	//only create click markup when an action(url) has been defined

	/*

	if(this.properties.url.length>0) 

	{

		

		

		if(this.properties.target=="_javascript")

		{

			var url=DWPE_Utilities.makeJavascriptSafe(this.properties.url);

			markup+=" onmousedown='DWPE_Utilities.exec(this);' cmd='"+url+"'>";

			//console.log(markup);	

		}

		else

		{	

			

			markup+="onclick='DWPE_Utilities.loadURL(this);' url='"+this.properties.url+"' target='"+this.properties.target+"'>";

			

		}

	}

	*/

	

	

	if(this.properties.command)

		markup+=" cmd='"+DWPE_Utilities.makeJavascriptSafe(this.properties.command)+"'";

	

	markup+=">";

	

	markup+=content;

	if(!render_style || render_style=="command-button")

		markup+=DWPE_Base_Class.getArgsAsString(this.properties);	

	

	markup+="</"+tag+">";

	return markup;



}





/*overrides DWPE_Base_Class.update()*/

DWPE_ButtonFactory_Class.prototype.update=function()

{

	this.markup=this.make(this.properties);

}







/*overrides DWPE_Base_Class.make()*/

DWPE_ButtonFactory_Class.prototype.make=function(args,render_style)

{

	

	

	//load the arguments into this object's properties list

	this.properties={};

	for(var argName in args)

	{

		this.properties[argName]=args[argName];

		

		

	}

	

	//call this button type's constructor method

	

	switch(args.type)

	{

	

		case 'TextButton':

			return this.generateTextButtonMarkup(args,render_style);

			break;

		case 'InlineSelector':

			return this.generateInlineSelectorButtonMarkup(args,render_style);

			break;

		case 'RadioButtonGroup':

			return this.generateRadioButtonGroupMarkup(args,render_style);

			break;	

		case 'IconicButton':

			return this.generateIconicButtonMarkup(args,render_style);

			break;

		case 'IconicTextButton':

			return this.generateIconicTextButtonMarkup(args,render_style);

			break;

		case 'ToggleButton':

			return this.generateToggleButtonMarkup(args,render_style);

			break;

		case 'ToolbarSeparator':

			return this.generateToolbarSeparatorMarkup(args,render_style);

			break;	

		default:

			args.label=this.formatString(args.label+" [could not resolve button type]");

			return this.generateTextButtonMarkup(args,render_style);

			break;

	

	}



}



DWPE_ButtonFactory_Class.prototype.setDefaultValue=function(name,value)

{

	if(!this.properties[name]) this.properties[name]=value;

}





DWPE_ButtonFactory_Class.prototype.generateToggleButtonMarkup=function(args,render_style)

{

	

//	var markup="<ux class='DWPE_Button ToggleButton' style='padding:0px;margin:0px;' "+

//					"onclick='DWPE_Toolbar_Class.toggle(event,this)'><ul>";

	

	//var tag=(render_style && render_style=="toolbar-item")?"li":"ux";

	

	

	var item={}

		item.label=this.formatString(args.label);

		item.command=args.command;

		item.tooltip=args.tooltip;

		item.icon=args.icon;

		

		args.items=[];

		args.items.push(item);

		

	

	/*we pass an inline style here as it's the only way 

	  to control no padding on an UX containing a UL; 

	  CSS does not have a parent selector like UX < UL*/

	

	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";

	

	

	var _className="dwpe-button ToggleButton";

		_className+=(this.properties.state==0)?" Button_Disabled":"";

		

	

	var markup="\n<"+tag+" class='"+_className+"' style='padding:0px;margin:0px;' >"+

					//" onclick='DWPE_Toolbar_Class.toggle(event,this)'>"+

					"<ul>";

	

	

	

	/*preserve a local copy of the radio button group properties 				

	  before we use DWPE_ButtonFactory to make the group's buttons*/

	var props=args; 

	var button_style=props.button_style;

	var _class="DWPE_ButtonFactory_Class";

	var state=(props.state!=null)?props.state:"1";

	var selected=parseInt(props.selected);

	

	for(var index in props.items)

	{

	

		var item=props.items[index];

		

		//the radio button group imposes _class and type

		item.type=button_style;

		item._class=_class;

		//args.state=state;

		item.state=state;

	

		

		//args.selected=(parseInt(index)+1==selected)?"1":"0";

		

		markup+=this.make(item,"toolbar-item");

	

		

	}	

	

	

	markup+="</ul>";

	if(!render_style || render_style=="command-button")

		markup+=DWPE_Base_Class.getArgsAsString(args);

	

	markup+="</"+tag+">";

		

	return markup;



}



DWPE_ButtonFactory_Class.prototype.generateRadioButtonGroupMarkup=function(args,render_style)

{

	/*

		procedure here is to build a list of buttons that belong to a group;

		the buttons function as they normally would, except that onclick,

		the parent of the buttons, which is an encompassing LI tag, also triggers a call 

		to a helper function (DWPE_Toolbar_Class.toggleOnOff) 

		that manages the state of all buttons in the group

		

		the result is that buttons in a button group are free to launch a url

		or call their own JavaScript just like regular buttons, but the state of 

		the buttons is managed in the helper function

		

	*/

	

	

	/*we pass an inline style here as it's the only way 

	  to control no padding on an UX containing a UL; 

	  CSS does not have a parent selector like UX < UL*/

	

	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";

	

	

	var _className="dwpe-button RadioButtonGroup";

		_className+=(this.properties.state==0)?" Button_Disabled":"";

		

	

	var markup="\n<"+tag+" class='"+_className+"' style='padding:0px;margin:0px;' >"+

					//" onclick='DWPE_Toolbar_Class.toggle(event,this)'>"+

					"<ul>";

	

	

	

	/*preserve a local copy of the radio button group properties 				

	  before we use DWPE_ButtonFactory to make the group's buttons*/

	var props=args; 

	var button_style=props.button_style;

	var _class="DWPE_ButtonFactory_Class";

	var state=(props.state!=null)?props.state:"1";

	var selected=parseInt(props.selected);

	

	for(var index in props.items)

	{

	

		var item=props.items[index];

		

		//the radio button group imposes _class and type

		item.type=button_style;

		item._class=_class;

		item.state=state;

		

	

		

		//args.selected=(parseInt(index)+1==selected)?"1":"0";

		

		markup+=this.make(item,"toolbar-item");

	

		

	}	

	

	

	markup+="</ul>";

	if(!render_style || render_style=="command-button")

		markup+=DWPE_Base_Class.getArgsAsString(args);

	

	markup+="</"+tag+">";

		

	return markup;

}







DWPE_ButtonFactory_Class.prototype.generateInlineSelectorButtonMarkup=function(args,render_style)

{

	this.setDefaultValue("url","");

	this.setDefaultValue("target","");

	

	this.buttonClass="InlineSelectorInner";

	

	var split=(args.command && args.command.length>0)?"Split":"";

	

	var outer_class="";

	var label="<span class='label'>"+this.formatString(args.label)+"</span>";

	var icon=DWPE_Utilities.getIconMarkup(args.icon,"",args.tooltip);

	

	switch(args.button_style)

	{	

	

		case "IconicTextButton": //Iconic Text Button Selector with Split

			outer_class+="dwpe-button InlineSelector"+split+" IconicButton ";

			break;

			

		case "IconicButton": //Iconic Button Selector with Split

			outer_class+="dwpe-button InlineSelector"+split+" IconicButton ";

			label="";

			break;

			

		case "TextButton": //Text Button Selector 

		default:

			outer_class+="dwpe-button InlineSelector"+split;

			icon="";

			break;

	}

	

	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";

	

	

	outer_class+=(args.state=="0")?" Button_Disabled":"";

		

	var markup="";

	markup+="\n<"+tag+" class='"+outer_class+"' ";

	//markup+=" onmousedown='DWPE_Toolbar_Class.showInlineSelectorMenu(event,this)' ";

	

	if(args.command)

		markup+=" cmd='"+DWPE_Utilities.makeJavascriptSafe(args.command)+"'";

	

	if(args.tooltip)

		markup+=" title='"+args.tooltip+"'";

	markup+=">";

	

	markup+=icon+label+"<span class='arw'>&nbsp;</span>";

	

	if(args.items)

	{

		markup+="<ul class='inline-selector-menu'>";

		for(var i=0;i<args.items.length;i++)

		{	var item=args.items[i];

				item.item_type="normal";

			markup+=DWPE_WindowFactory.generateMenuItemMarkup(item,0);

		}

		markup+="</ul>";

	}

	

	if(!render_style || render_style=="command-button")

		markup+=DWPE_Base_Class.getArgsAsString(args);

	

	

	markup+="</"+tag+">";

	

	return markup;

}





DWPE_ButtonFactory_Class.prototype.generateTextButtonMarkup=function(args,render_style)

{

	//this.setDefaultValue("url","");

	//this.setDefaultValue("target","");

	

	this.properties=args;

	this.buttonClass="dwpe-button textbutton";

	var markup=this.makeClickableRegion(this.formatString(args.label),render_style);

	

	return markup;

}





DWPE_ButtonFactory_Class.prototype.generateIconicButtonMarkup=function(args,render_style)

{

	//this.setDefaultValue("url","");

	//this.setDefaultValue("target","");

	

	this.properties=args;

	this.buttonClass="dwpe-button IconicButton";

	var markup=this.makeClickableRegion(DWPE_Utilities.getIconMarkup(args.icon,"",args.tooltip),render_style);

	

	return markup;

}





DWPE_ButtonFactory_Class.prototype.generateIconicTextButtonMarkup=function(args,render_style)

{

	//this.setDefaultValue("url","");

	//this.setDefaultValue("target","");

	

	this.properties=args;

	this.buttonClass="dwpe-button IconicTextButton";

	var content=DWPE_Utilities.getIconMarkup(this.properties.icon,"",args.tooltip) + ' <span>' + this.formatString(args.label) + '</span>';

	var markup=this.makeClickableRegion(content,render_style);



	return markup;

}



DWPE_ButtonFactory_Class.prototype.generateToolbarSeparatorMarkup=function(args,render_style)

{

	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";

	

	return "\n<"+tag+" class='dwpe-button Separator'><span></span></"+tag+">";

}





/*this function stores default definitions for each button type

 and returns them in JSON format */

DWPE_ButtonFactory_Class.prototype.getDefaultArgsListForType=function(type)

{



	var i="";

	var icon=DWPE_Utilities.getRandomIcon();

	

	var icons=new Array();

		icons[0]=DWPE_Utilities.getRandomIcon();

		icons[1]=DWPE_Utilities.getRandomIcon();

		icons[2]=DWPE_Utilities.getRandomIcon();

	



	switch(type)

	{	

	

		

		

		/*range 100 to 200 is reserved for menu button*/

		case 'MenuButton':

		case 100: 

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"MenuButton",

						"label":"MenuButton",

						"items":[	{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","command":"","icon":"add"},

									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","command":"","icon":"edit"},

									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","command":"","icon":"delete"}

								]};

			break;

	

	

		/*range 0 to 100 is reserved for toolbar buttons*/

		

		case 'ToggleButton':		

		case 6:	

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"ToggleButton",

						"button_style":"IconicTextButton",

						"label":"Toggle Button",

						"icon":"add",

						"command":"",

						"tooltip":""

					};	

						

						

		

		case 'ToolbarSeparator':

		case 5: 

			return {    "_class":"DWPE_ButtonFactory_Class",

						"type":"ToolbarSeparator",

						"label":"Toolbar Separator"	};

			break;

		

		

		case 'InlineSelector':		

		case 4:	

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"InlineSelector",

						"label":"Inline Selector",

						"tooltip":"Inline Selector",

						"command":"",

						"icon":"add"

					};	

			break;

			

		case 'InlineSelectorSplit':		

		case 4:	

			return {

					"_class":"DWPE_ButtonFactory_Class",

					"type":"InlineSelector",

					"button_style":"5",

					"label":"Inline Selector Split",

					"command":"",

					"icon":"add",

					"state":"1"

					};	

			break;	

		

			

		case 'RadioButtonGroup':		

		case 3:	

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"RadioButtonGroup",

						"button_style":"IconicButton",

						"label":"Radio Button Group",

						"items":[	{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","command":"js::alert('add')","icon":"add","tooltip":"Radio Button Group"},

									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","command":"js::alert('edit')","icon":"edit","tooltip":"Radio Button Group"},

									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","command":"js::alert('delete')","icon":"delete","tooltip":"Radio Button Group"}

								]};	

			break;					

			

		case 'IconicTextButton':

		case 2:

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"IconicTextButton",

						"label":"Iconic Text Button",

						"icon":"add",

						"command":"",

						"tooltip":""

						};	

			break;

		case 'IconicButton':

		case 1:

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"IconicButton",

						"label":"Iconic Button",

						"icon":"add",

						"command":"",

						"tooltip":""

						};

			break;

			

		case 'toolbar-item':

			return '{	"label":"Item","state":"1","itemtype":"TextButton","command":"","icon":"","tooltip":"","button_style":"TextButton","items":[]}';	

			break;		

			

		case 'TextButton':

		case 0:

		default:

			return {	"_class":"DWPE_ButtonFactory_Class",

						"type":"TextButton",

						"label":"Text Button",

						"command":"",

						"tooltip":""};	

			break;				

		

			

	}

	





}







/*this function stores default property sheet definitions for each button type

 and returns them in JSON format */

DWPE_ButtonFactory_Class.prototype.getPropertySheetFields=function(_type)

{



	var i="";

	var icon=DWPE_Utilities.getRandomIcon();



	switch(_type)

	

	{	

						

			

		case 'MenuButton':

			return	[	

			

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_ButtonFactory"},

						{type:"hidden",id:"type",  name:"type",  value:"MenuButton"},

						{type:"text",id:"label",name:"Label",value:""},

						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},

						{type:"text",id:"icon",name:"Icon",value:""}

						

					];

			break;

		case 'IconicTextButton':

		case 'IconicButton':

		case 'TextButton':

			return	[	

			

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_ButtonFactory"},

						{type:"hidden",id:"type",  name:"type",  value:_type},

						{type:"text",id:"label",name:"Label",value:""},

						{type:"text",id:"tooltip",name:"Tooltip",value:""},

						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},

						{type:"text",id:"icon",name:"Icon",value:""}

						

					];

			break;

			

		case 'IconicTextButton-form':

		case 'IconicButton-form':

		case 'TextButton-form':

			return	[	

						{type:"chooser",id:"type",name:"Type",value:"TextButton=Text Button&IconicButton=Iconic Button&IconicTextButton=Iconic Text Button"},

						{type:"text",id:"label",name:"Label",value:""},

						{type:"text",id:"tooltip",name:"Tooltip",value:""},

						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},

						{type:"text",id:"icon",name:"Icon",value:""}

						

					];

			break;		

		

		case 'InlineSelector':

		case 'ToggleButton':

		case 'ToolbarSeparator':

		case 'RadioButtonGroup':		

		default:

			return [];	

			break;		

	}

	





}





/*when we have a list that holds items containing DWPE object metadata we first

  initialize it so that we can edit the properties of those individual objects*/

DWPE_ButtonFactory_Class.prototype.initEditableObjectList=function(listName)

{

	/*

		when an item in the items list is chosen, populate

		the fields in the items-table 

	*/



	var $list=$("#"+listName);

	if($list.attr("initialized")==1) return;

	

	$list.change(

		function(event)

			{

				var $select=$(this);

				var $option=$($select.attr("options")[$select.attr("selectedIndex")]);

				

				

				

				var args=$option.data("obj");

				

				//create the prop sheet

				DWPE_ButtonFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);

				

				//populate the prop sheet

				for(var argName in args)

				{

					/*we prepend 'item__' to the id so as not to interfere 

					 with those same properties that the parent may define*/

					 

					$("#item__"+argName).val(args[argName]);

				}

			

			}

		);



	

	//insert the add and delete controls immediately after the list

	$(	'<p align="right" id="addRemoveListItems">'+

		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="addListItem(\''+listName+'\')">&nbsp;&nbsp;'+

		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="removeSelectedListItem(\''+listName+'\')">'+

		'</p>'

	).insertAfter($list);						

	

	

	$list.attr("initialized",1);



}



/*this function builds a properties form for editing a component from 

within compound components such as toolbar*/

DWPE_ButtonFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)

{

	

	var args=DWPE_ButtonFactory.getPropertySheetFields(type);





	var markup="";

	

	

	markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';

	

	if(args.length==0)

		markup+="<tr><td>No property sheet exists for this item type.</td></tr>";

	else

	{

		for(var argName in args)

		{

			var arg=args[argName];

			

		

			

			markup+="<tr>";

				

			

			switch(arg.type)

			{

				case 'select':

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+

								arg.value+

							'</select></td>';

					break;

				

				case 'hidden':

					markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';

					break;

				case 'text':

				default:

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';

					break;

			}

			

			markup+="</tr>";

		}

	}	

	markup+="</table>";						

				

	//insert markup inside our properties sheet container			

	$("#"+listName+"-property-sheet").html(markup).show("slide");

	

	

	

	/*wire up our properties sheet & list*/

	

	

	

				

	/*

		when a value in a field on our list changes,

		collect all field values and post them on the

		selected item's .data("obj") variable

		

		

	*/		

			

	$("#"+listName+"-selected-item-properties :input").keyup(

	

		function()

		{

				

			var args={};

			$("#"+listName+"-selected-item-properties :input").each(

			

				function()

				{

					var $fld=$(this);

					

					/*strip off the 'item__' prefix 

					   from the fld id to form the property name*/

					var propName=$fld.attr("id").replace(/item__/,"");

					

					args[propName]=$fld.val();

				}

			

			);

			

			var $select=$("#items");

			var i=$select.attr("selectedIndex");

			if(i>-1)

			{

				$option=$( $select.attr("options")[i]);

				$option.data("obj",args);

				$option.text(args.label);

			

			}

		}	

	

	)







}

















/* /DWPE/components/js/DWPE_Toolbar_Class.js */

/*DWPE_Toolbar_Class.js*/





/*Set the class that our class will inherit from*/
DWPE_Toolbar_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_Toolbar_Class.constructor=DWPE_Toolbar_Class;
DWPE_Toolbar_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_Toolbar_Class()
{
	
	
	this.id=this.getID();
	this._class="DWPE_Toolbar_Class";
	
	//define defaults
	this.label="DWPE_Toolbar";
	this.width="100%";
	this.alignment="L";
	this.items=new Array();
	
	
	
	$(".dwpe-link").live(	'mousedown',
								function(event)
								{
									
									var $item=$(this);
									
									 //don't execute if callee is disabled
									if(DWPE_Utilities.isDisabled($item)) return false;
	
									
									var cmd=$item.attr('cmd');
									
									DWPE_Utilities.performCommand($item,cmd);
									
									return false;	
								
							});
	
	$(".dwpe-button").live(	'mousedown',
								function(event)
								{
									
									
									
									var $item=$(this);
									
									
									 //don't execute if callee is disabled
									if(DWPE_Utilities.isDisabled($item)) return false;
	
									
									var cmd=$item.attr('cmd');
									
									
									//handle radio button group and toggle button case
									var parent_btn=$item.closest('.dwpe-button.RadioButtonGroup,.dwpe-button.ToggleButton')
									if(parent_btn)
									{
										DWPE_Toolbar_Class.toggle(event, parent_btn[0]);
										
									}
									
									//handle inline selector case
									if( $item.hasClass('InlineSelector')
										||
									    $item.hasClass('InlineSelectorSplit'))
									{	
										var cancel_cmd=DWPE_Toolbar_Class.showInlineSelectorMenu(event, $item[0]);
										if(cancel_cmd) cmd=null;
									}
									
									DWPE_Utilities.performCommand($item,cmd);
									
									return false;	
								
							});
	
	
	return this;	

}

//Make an instance of the class that we can access in code
DWPE_Toolbar = new DWPE_Toolbar_Class()

/*define the functions we wish to override from base*/


//define how we will display to screen
DWPE_Toolbar_Class.prototype.update=function()
{
	//build up markup
	var markup="<ux:toolbars class='dwpe-toolbar'>";
	markup+="<ul>";

	
	/*construction style #2: factory driven*/
	var len=this.properties.items.length;
	for(var index=0;index<len;index++)
	{
		var myItemArgs=this.properties.items[index]; //JSON
		
		markup+=DWPE_ButtonFactory.make(myItemArgs,"toolbar-item"); //creates the markup based on the _class argument that is passed in
		
	}
	
	
	markup+="<li class='dwpe-overflow-btn aft'></li>";
	
	
	markup+="</ul>";
	var resizable=(this.properties.resizable=="0")?" style='display:none' ":"";
	markup+="<div class='dwpe-toolbar-resize' "+resizable+" ></div>";
	markup+="</ux:toolbars>";
	
	this.markup=markup;
	

}


DWPE_Toolbar_Class.prototype.render=function()
{

	this._super.render.call(this);
	
	
	
	var $ux=this.parent;
		$ux.attr('id',DWPE_Utilities.getUniqueId());
		$ux.addClass("dwpe-toolbar");
		var w=(this.properties.width)?this.properties.width:"100%";
		$ux.data('size',w);
	
	
	var $overflow_btn=$ux.find("UX.dwpe-overflow-btn.aft:first");
	
	/*setup overflow control event handlers*/
	$overflow_btn.click(
		
		function(e)
		{	DWPE_Toolbar_Class.handleOverflowClick($ux);	}
	
	);
	
	
	/*setup resize control*/
	if(this.properties.resizable=="1")
	{
		$resizer=$ux.find(".dwpe-toolbar-resize:first");
		$resizer.draggable(
			{
				//containment:'parent',
				axis:'x',
				start:function(event,ui){},
				stop:function(event,ui)
				{
					var delta=ui.position.left;
					var newWidth=$ux.width()+delta;
					//$ux.css("width",newWidth+"px");
					$ux.data("size",newWidth+"px");
					
					ui.helper.css({"left":"0px", "top":"0px"});
					DWPE_Toolbar_Class.manageToolbarOverflow($ux);
				}
				
				
			}
		);
	}
	



	
	


						
	/*setup dwpe resize event handler*/
	$(window).bind('dwpe-component-resize',
						function(e,parentID)
						{	
							//if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)
								DWPE_Toolbar_Class.manageToolbarOverflow($ux);
							
						});
						
						
						
						
	
	
	
	/*manage toolbar overflow*/
	DWPE_Toolbar_Class.manageToolbarOverflow($ux);

}


/*create an ancillary function to handle parent-driven resize. Body binds to resize and then drives a custom call to resize down to its direct DWPE children*/





DWPE_Toolbar_Class.prototype.generateMarkup=function(args)
{
	//build up markup
	var markup="<ux:toolbars class='dwpe-toolbar'";
	
	if(args.url)
		markup+=" url='"+args.url+"'";
	
		markup+=">";
	
	if(!args.url)
	{
		markup+="<ul>";
	
		
		/*construction style #2: factory driven*/
		var len=args.items.length;
		for(var index=0;index<len;index++)
		{
			var myItemArgs=args.items[index]; //JSON
				if(myItemArgs["itemtype"]) 
					myItemArgs.type=myItemArgs.itemtype;
			
			markup+=DWPE_ButtonFactory.make(myItemArgs,"toolbar-item"); //creates the markup based on the _class argument that is passed in
			
		}
		
		
		markup+="<li class='dwpe-overflow-btn aft'></li>";
		
		
		markup+="\n</ul>";
		var resizable=(args.resizable=="0")?" style='display:none' ":"";
		markup+="\n<div class='dwpe-toolbar-resize' "+resizable+" ></div>";
		
		markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
	
	} //end if
	
	markup+="</ux:toolbars>";
	
	return markup;
	

}


/*post processing*/
DWPE_Toolbar_Class.prototype.make=function($ux)
{


	if($ux.data('toolbar-initialized')==true) return;
	
	$ux.data('toolbar-initialized',true);
	var toolbar_url=$ux.attr('url');
	
	
	
	if(toolbar_url)
	{
		//load toolbar then initialize	
		$.ajax(	{	url:toolbar_url,
						cache:false,			//always get a fresh copy of the content 
						//async:false,			//always wait for the content to arrive
						success:function(data)
						{
							
							var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,".dwpe-toolbar");
							
							//$object.html()is the content inside the toolbar ux tag which we drop inside our toolbar's $ux tag
							
							$ux.html(html);
							DWPE_Toolbar.initializeToolbar($ux);
							
						},
						error:function(XMLHttpRequest, textStatus, errorThrown)
						{
							$ux.html('Could not find: "'+toolbar_url+'"');
						}							
					} );
	}
	else
	{	
		//toolbar loaded inline, just initialize
		DWPE_Toolbar.initializeToolbar($ux);
		
		
	}
	
}	

DWPE_Toolbar_Class.prototype.initializeToolbar=function($ux)
{
	
	$ux.data('toolbar-initialized',true);
	
	$ux.attr('id',DWPE_Utilities.getUniqueId());
	var w=($ux.attr("width"))?$ux.attr("width"):"100%";
		$ux.data('size',w);
	
	
	var $overflow_btn=$ux.find("LI.dwpe-overflow-btn.aft:first");
	
	/*setup overflow control event handlers*/
	$overflow_btn.click(
		
		function(e)
		{	DWPE_Toolbar_Class.handleOverflowClick($ux);	}
	
	);
	
	
	/*setup resize control*/
	if(this.properties.resizable=="1")
	{
		$resizer=$ux.find(".dwpe-toolbar-resize:first");
		$resizer.draggable(
			{
				//containment:'parent',
				axis:'x',
				start:function(event,ui){},
				stop:function(event,ui)
				{
					var delta=ui.position.left;
					var newWidth=$ux.width()+delta;
					//$ux.css("width",newWidth+"px");
					$ux.data("size",newWidth+"px");
					
					ui.helper.css({"left":"0px", "top":"0px"});
					DWPE_Toolbar_Class.manageToolbarOverflow($ux);
				}
				
				
			}
		);
	}
	



	
	


						
	/*setup dwpe resize event handler*/
	$(window).bind('dwpe-component-resize',
						function(e,parentID)
						{	
							//if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)
								DWPE_Toolbar_Class.manageToolbarOverflow($ux);
							
						});
						
						
						
						
	
	
	
	/*manage toolbar overflow*/
	DWPE_Toolbar_Class.manageToolbarOverflow($ux);


}




/*--------------------------*/
/*      Class Methods       */
/*--------------------------*/

//hide all the buttons after the fold
DWPE_Toolbar_Class.manageToolbarOverflow=function($ux)
{
	
	/*if the overflow menu is open, close it*/
	DWPE_Window.closeWindowGroup($ux.attr('id')+"-overflow");


	//get handles to key elements
	//var $ux=$("#"+toolbarID);
	//var $toolbar=$("#"+toolbarID+"-toolbar");
	//var $toolbar_body=$("#"+toolbarID+"-toolbar-body");
	var $overflow_btn=$ux.find(">UL>LI.dwpe-overflow-btn.aft:first");
		$overflow_btn.show(); //show it so we can measure it
	
	
	//determine our parent's size
	var pW=$ux.parent().width();
	
	
	//determine how much size we can take and apply it to our container
	var size=$ux.data('size');
		size=(size)?size:"100%";
	
		if(size.indexOf('%')>-1)
		{
			size=(parseInt(size)/100)*pW;
		}
		else
		{
			size=parseInt(size);
		}
	$ux.width(size);
	
	
	//get a handle to all of our buttons
	var $buttons=$ux.find(">UL>LI.dwpe-button");
	
	//hide all buttons so we can do a fair test of when our width exceeds our bounds	
	$buttons.hide();
	
	//initialize our current width
	var w=0;
		w+=$overflow_btn.outerWidth(true);
		w+=2; //add a fudge factor
	

	//console.log($ux,pW,w,size);	
	
	//iterate over our buttons showing only as many as will fit in the visible display
	var overflown=false;
	$buttons.each(
	
		function(i)
		{
			
			
			var $button=$(this);
			
			//show the button so we can measure it
			$button.show();
		
			//add the width of this tab to our total width
			w+=$button.outerWidth(true);
	
			
			
			if(w>size) 		 		//we are out of bounds so hide it again and set the overflown flag
			{
				$button.hide();
				overflown=true;
			}
			
		}
	
	);
	
	//hide our overflow control if it isn't needed 
	if(overflown==false)
	{
		$overflow_btn.hide();
		
	}
	
	
	
}



DWPE_Toolbar_Class.handleOverflowClick=function($ux)
{

	//get handles to key controls
	//var $toolbar=$("#"+toolbarID+"-toolbar");
	//var $toolbar_body=$("#"+toolbarID+"-toolbar-body");
	var $overflow_btn=$ux.find("LI.dwpe-overflow-btn.aft:first");
	
			
	//make a overflow menu object
	var menu_id=$ux.attr('id')+"-overflow";
	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);
	var $menu_body=$("#"+menu_id+"-body");
	
	/*determine the outlier buttons and append them to an overflow menu body */
	$ux.find(">UL>LI.dwpe-button:hidden").each
	(
		function()
		{
			var $button=$(this);
			
			//clone the button, show it and append it to the overflow menu body
			var $c=$button.clone(true);
			
			if($c.hasClass("Separator")==false) //we don't show separators in overflow menus
			{	$c.show();
				$c.css('display','block'); //force it to block to paint vertically within the menu
			}
			$menu_body.append($c);
					
		}
	);

	
	//set the state of the overflow-control to active	
	$overflow_btn.addClass("active");
	
	//position the window relative to the overflow control
	DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);
	
	//when the user has selected a button move all the buttons back into the toolbar
	/*window class calls the 'cleanup' method just before the window group will be dismissed giving us a chance to move our clones*/
	$overflow_btn.bind(		
		"cleanup",
		function(e)
			{
			
				/*we remove from toolbar all the buttons that have been cloned into the overflow;
					we do this because the original items may not carry the latest state info 
					(toggle/radio/selector)*/
				$ux.find(">UL>LI.dwpe-button:hidden").each
				(
					function(j)
					{
						$(this).remove();
					}
				);

				/*we add back to toolbar all the buttons that had been cloned into the overflow
					but we hide them, as they were originally hidden when we opened this menu
					because they carry the latest state info */
				
				$toolbar_body=$ux.find(">UL");
				$menu_body.find(">LI").each
				(
					function(j)
					{	var $o=$(this);
						
						$o.hide();
						 
						
						$toolbar_body.append($o);
						
					}
				);
				
				//set the state of the overflow-control to normal and ensure it appears last
				$overflow_btn.removeClass("active");
				$toolbar_body.append($overflow_btn);
			}
		);
	
		
				

}













DWPE_Toolbar_Class.toggle=function(event,_group)
{
	
	/* this function is called as part of an event bubble from
		a click on the radio button group item 
		
		*/
	var group=$(_group);
	
	if(DWPE_Utilities.isDisabled(group)) return;
	
	
	/*the click occurs on content inside the LI tag, so we have
	 to walk up the node tree to find the encompassing LI
	 that represents our button*/
	var target=$(event.originalTarget);
	
	
	if(target.tagName!="LI")
	{
		target=target.closest("UX,LI");
	}
	
	/* now we compare our target button to all buttons in the group
		if we find our target, we add the "Active" class, otherwise we remove it (should it exist)
	*/ 
		group.find("LI").each(
		function(i)
		{	
			var $o=$(this);
			//we use $o[0]==target[0] so that we may compare node to node
			if($o[0]==target[0]) $o.toggleClass("Button_Active");
			else $o.removeClass("Button_Active");
		}
	)
	
}




DWPE_Toolbar_Class.showInlineSelectorMenu=function(event,callee)
{
	var $e=$(event);
	
	if(DWPE_Utilities.isDisabled(callee)) return;
	
	var $callee=$(callee);
	var drop_down_width=17;
	
	//console.log($(event.originalTarget));
	
	//var xFromRightEdge=($callee.offset().left+$callee.width()-event.clientX);
	//console.log($callee.offset().left,$callee.width(),event.clientX);
	
	
	if(	$callee.hasClass("InlineSelectorSplit") && 
			$(event.originalTarget).hasClass("arw")
		||
		
		$callee.hasClass("InlineSelector")  
		
			)
	{
		//show menu
		event.stopPropagation();
		var menu_id=$callee.attr("id")+"-menu";
		var group=null; //append to the last group
		var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);
		var $overflowMenuBody=$("#"+menu_id+"-body");
			
			$overflowMenuBody.html($callee.find(".inline-selector-menu").html());
			$overflowMenuBody.css("min-width",$callee.width())
			//$overflowMenuBody.append("<li>New</li><li>Edit</li><li>Open</li><li>Save</li><li>Save As</li><li>Delete</li>");
		
		return true;
		
	}	
	
	return false;
		
	
}

/* /DWPE/components/js/DWPE_PanelFactory_Class.js */

/*DWPE_PanelFactory_Class.js*/









/*Set the class that our class will inherit from*/

DWPE_PanelFactory_Class.prototype=new DWPE_Base_Class();



/*Set and Define our own class constructor*/

DWPE_PanelFactory_Class.constructor=DWPE_PanelFactory_Class;

DWPE_PanelFactory_Class.prototype._super=DWPE_Base_Class.prototype;

function DWPE_PanelFactory_Class()

{

	this._class="DWPE_PanelFactory_Class";

	

	

	

	

	

	$(".dwpe-tab").live(

	

			"click",

			function()

			{

				

				var $tab=$(this);

				var $ux=$tab.closest('.dwpe-tabset');

				var index=$tab.data("index");

					

					if($tab.hasClass('global'))

					{

						DWPE_PanelFactory_Class.openGlobalTab($ux,$tab,	index);

					}

					else

					{

						DWPE_PanelFactory_Class.showTabPanel($ux,index);	

					}

					

				return false;

			}

	)

	

	

	return this;	



}



/*Make an Instance of Panel Factory that others can call on to create buttons*/

DWPE_PanelFactory=new DWPE_PanelFactory_Class();









/*overrides DWPE_Base_Class.update()*/

DWPE_PanelFactory_Class.prototype.update=function()

{

	this.markup=this.make(this.properties);

}





DWPE_PanelFactory_Class.prototype.setDefaultValue=function(name,value)

{

	if(!this.properties[name]) this.properties[name]=value;

}







DWPE_PanelFactory_Class.prototype.make=function($ux)

{

	



	

	var _class=$ux.attr("class").toLowerCase();

				_class=_class.split(" ");

				_class=_class[0]; //pick off the first value in the css class and use it to make our class

	

	switch(_class)

		{

			case "dwpe-tabset":

			case "dwpe-tabset top":

			case "dwpe-tabset both":

			case "dwpe-tabset bottom":

				this.initializeTabset($ux);

				break;

			

			case "dwpe-trainset":

				this.initializeTrainset($ux);

				break;

			case "dwpe-horizontal-splitter":

			case "dwpe-vertical-splitter":

				this.initializeSplitter($ux);

				break;

						

			case "dwpe-accordion":

				this.initializeAccordion($ux);

				break;	

		

			case "dwpe-header":

				

				this.initializePageheader($ux);

				break;	

			

			case "dwpe-subheader":

				

				this.initializeSubheader($ux);

				break;	

				

			case "dwpe-subsubheader":

				

				this.initializeSubsubheader($ux);

				break;	

		}

	

}



/*For Accordion code see DWPE_Accordion.js*/



/*For Splitter code see DWPE_Splitter.js*/



/*For Tabs code see DWPE_Tabset.js*/



/*For Page headers code see DWPE_PageHeader.js*/



/*For Subheaders code see DWPE_SubHeader.js*/



/*For Sub-subheaders code see DWPE_SubSubHeader.js*/



/*this function stores default definitions for each panel type

 and returns them in JSON format */

DWPE_PanelFactory_Class.prototype.getDefaultArgsListForType=function(type)

{



	var i="";

	var icon=DWPE_Utilities.getRandomIcon();

	

	switch(type)

	{	

	

				

		case 'TabPanel':	

		

			return {	"_class":"DWPE_PanelFactory_Class",

						"type":"TabPanel",

						"label":"Tab "+i,

						"icon":'none',

						"closureButton":null,

						"content":"inline"

					};

						

			break;



		case 'tabpanel-item':	

		

			return '{	"label":"Tab","name":"","icon":"","state":"1","filename":"","content":"","selected":"0","visible":"1"	}';

						

			break;



		case 'TrainPanel':	

		

			return {	"_class":"DWPE_PanelFactory_Class",

						"type":"TrainPanel",

						"label":"Step "+i,

						"icon":'none',

						"closureButton":null,

						"content":"inline"

					};

					

						

			break;

		

		case 'train-item':	

		

			return '{	"label":"Stop","icon":"","filename":"","content":"","sequential_override":"0","tooltip":""}';

					

						

			break;



		case 'SplitterPanel':

			return {	"_class":"DWPE_PanelFactory_Class",

						"type":"SplitterPanel",

						"label":"New Pane "+i,

						"size":"100px",

						"state":"1",

						"toggle":"one",

						"content":"inline"

					};	

			break;		

			

		case 'splitterpanel-item':

			return '{	"label":"New Pane","size":"100px","state":"1","toggle":"one","content":"","filename":"" }';	

			break;	

			

		case 'PageHeader':		

					return {	"_class":"DWPE_PanelFactory_Class",

						"type":"pageheader",

						"label":"Page Header",					

						"helptext":"Static help text",

						"content":"inline",

						"toolbar":"none",

						"header":"yes",

						"choicelist":"choicelist-no"

					};	

			break;	

			

		case 'SubHeader':	

				return {	"_class":"DWPE_PanelFactory_Class",

					"type":"subheader",

					"label":"Page Sub-Header",					

					"helptext":"Static help text",

					"content":"inline",

					"toolbar":"sample-toolbar-short",

					"header":"yes",

					"disclosure":"show",

					"choicelist":"choicelist-no"

				};	

		break;	

		

		case 'SubsubHeader':		

				return {	"_class":"DWPE_PanelFactory_Class",

					"type":"subsubheader",

					"label":"Page Sub-subheader",					

					"helptext":"Static help text",

					"content":"inline",

					"toolbar":"sample-toolbar-short",

					"choicelist":"choicelist-no",

					"disclosure":"show"

				};	

		break;

			

		case 'AccordionPanel':

			return {	"_class":"DWPE_PanelFactory_Class",

						"type":"AccordionPanel",

						"label":"Accordion Pane "+i,

						"size":"1",

						"icon":"",

						"state":"1",

						"content":"inline",

						"toolbar":"none"

					};	

			break;	

			

		case 'AccordionPanel2':

			return {	"_class":"DWPE_PanelFactory_Class",

						"type":"AccordionPanel",

						"label":"Accordion Pane "+i,

						"size":"1",

						"icon":"",

						"state":"1",

						"content":"inline",

						"toolbar":"sample-toolbar-long"

					};	

			break;	

			

		case 'accordionpane-item':	

		

			return '{	"label":"Pane","size":"1","icon":"","state":"1","content":"","filename":"","toolbar":""}';	

		default:

			return {};

				

				

	}

	





}







/*this function stores default property sheet definitions for each panel type

 and returns them in JSON format */

DWPE_PanelFactory_Class.prototype.getPropertySheetFields=function(_type)

{



	var i="";

	var icon=DWPE_Utilities.getRandomIcon();





	switch(_type)

	

	{	

						

			

		case 'TabPanel':

			return	[	

			

						

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},

						{type:"hidden",id:"type",  name:"type",  value:_type},

						

						{type:"text",id:"label",name:"Tab&nbsp;Title",value:""},

						{type:"text",id:"icon",name:"Icon",value:""},

						

						{type:"chooser",id:"state",name:"State",value:"1=Enabled&0=Disabled"},

						{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"}

						

					];

		

		case 'TrainPanel':

			return	[	

			

						

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},

						{type:"hidden",id:"type",  name:"type",  value:_type},

						

						{type:"text",id:"label",name:"Stop&nbsp;Name",value:""},

						//{type:"chooser",id:"state",name:"State",value:"1=Enabled&0=Disabled"},

						{type:"text",id:"icon",name:"Icon",value:""},

						

						//{type: "chooser", id: "required_step", name: "Required Step", value: "0=No&1=Yes" },

						{type: "text", id: "content", name: "Content&nbsp;Source", value: "Inline" },

						{type: "chooser", id: "sequential_override", name: "Sequential Override", value: "0=No&1=Yes" },

						//{type: "chooser", id: "allow_skip", name: "Allow Skipping", value: "0=No&1=Yes" }

						{type:"text",id:"tooltip",name:"Tooltip",value:""}

						

					];

		

		

		case 'SplitterPanel':

			return	[	

			

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},

						{type:"hidden",id:"type",  name:"type",  value:_type},

						

						{type:"text",id:"label",name:"Pane&nbsp;Title",value:""},

						{type:"text",id:"size",name:"Size",value:"100px"},

						{type:"text",id:"state",name:"State",value:"1"},

						{type:"chooser",id:"toggle",name:"Toggle",value:"one=Applies to First Pane&two=Applies to Second Pane"},

						

						

						{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"}

						

						

					];

			break;

	

		case 'AccordionPanel':

			return	[	

			

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},

						{type:"hidden",id:"type",  name:"type",  value:_type},

						

						{type:"text",id:"label",name:"Pane&nbsp;Title",value:""},

						{type:"text",id:"icon",name:"Icon",value:""},

						{type:"text",id:"size",name:"Size",value:""},

						

						{type:"chooser",id:"state",name:"State",value:"1=Expanded&0=Collapsed"},

						{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"},

						{type:"chooser",id:"toolbar",name:"Toolbar",value:"none=None&sample-toolbar-short=Short Toolbar&sample-toolbar-long=Long Toolbar"}

						

						

					];

			break;	

				

		default:

			return [];	

			break;		

	}

	





}





/*when we have a list that holds items containing DWPE object metadata we first

  initialize it so that we can edit the properties of those individual objects*/

DWPE_PanelFactory_Class.prototype.initEditableObjectList=function(listName)

{

	/*

		when an item in the items list is chosen, populate

		the fields in the items-table 

	*/



	var $list=$("#"+listName);

	if($list.attr("initialized")==1) return;

	

	$list.change(

		function(event)

			{

				var $select=$(this);

				var $option=$($select.attr("options")[$select.attr("selectedIndex")]);

				

				

				

				var args=$option.data("obj");

				

				

				

				//create the prop sheet

				DWPE_PanelFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);

				

				//populate the prop sheet

				for(var argName in args)

				{

					/*we prepend 'item__' to the id so as not to interfere 

					 with those same properties that the parent may define*/

					 

					$("#item__"+argName).val(args[argName]);

				}

			

			}

		);



	

	//insert the add and delete controls immediately after the list

	$(	'<p align="right" id="addRemoveListItems">'+

		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_PanelFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+

		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_PanelFactory_Class.removeSelectedListItem(\''+listName+'\')">'+

		'</p>'

	).insertAfter($list);						

	

	

	$list.attr("initialized",1);



}



/*this function builds a properties form for editing a component from 

within compound components such as toolbar*/

DWPE_PanelFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)

{

	

	var args=DWPE_PanelFactory.getPropertySheetFields(type);





	var markup="";

	

	

	markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';

	

	if(args.length==0)

		markup+="<tr><td>No property sheet exists for this item type.</td></tr>";

	else

	{

		for(var argName in args)

		{

			var arg=args[argName];

			

		

			

			markup+="<tr>";

				

			

			switch(arg.type)

			{

				case 'select':

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+

								arg.value+

							'</select></td>';

					break;

				case 'chooser':

				

					var options=arg.value.split("&");

					

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";

					

					for(var i in options)

					{

						var option=options[i].split("=");

						markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";

					}

							

					markup+='</select></td>';

					break;	

				

				case 'hidden':

					markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';

					break;

				case 'text':

				default:

					markup+="<td class='label'>"+arg.name+"</td>";

					markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';

					break;

			}

			

			markup+="</tr>";

		}

	}	

	markup+="</table>";						

				

	//insert markup inside our properties sheet container			

	$("#"+listName+"-property-sheet").html(markup).show("slide");

	

	

	

	/*wire up our properties sheet & list*/

	

	

	

				

	/*

		when a value in a field on our list changes,

		collect all field values and post them on the

		selected item's .data("obj") variable

		

		

	*/		

			

	$("#"+listName+"-selected-item-properties :input").keyup(

	

		function()

		{

				

			var args={};

			$("#"+listName+"-selected-item-properties :input").each(

			

				function()

				{

					var $fld=$(this);

					

					/*strip off the 'item__' prefix 

					   from the fld id to form the property name*/

					var propName=$fld.attr("id").replace(/item__/,"");

					

					args[propName]=$fld.val();

					

			

				}

			

			);

			

			

			

			var $select=$("#items");

			var i=$select.attr("selectedIndex");

			if(i>-1)

			{

				$option=$( $select.attr("options")[i]);

				$option.data("obj",args);

				$option.text(args.label);

			

			}

		}	

	

	).change(

	

		function()

		{

				

			var args={};

			$("#"+listName+"-selected-item-properties :input").each(

			

				function()

				{

					var $fld=$(this);

					

					/*strip off the 'item__' prefix 

					   from the fld id to form the property name*/

					var propName=$fld.attr("id").replace(/item__/,"");

					

					args[propName]=$fld.val();

					

			

				}

			

			);

			

			

			

			var $select=$("#items");

			var i=$select.attr("selectedIndex");

			if(i>-1)

			{

				$option=$( $select.attr("options")[i]);

				$option.data("obj",args);

				$option.text(args.label);

			

			}

		}	

	

	)







}









/*---------------------------------------*/

/* Property List Management Class Methods*/

/*---------------------------------------*/



/* On A Select List Box, removes the item the user

   has highlighted and highlights the preceding available item  */

DWPE_PanelFactory_Class.removeSelectedListItem=function(listID)

{

	

	//get list

	var $list=$("#"+listID);

	var i=$list.attr("selectedIndex");

	var len=$list.attr("options").length;

	

	

	//do nothing if list is empty

	if(len==0)

		return;

	

	//remove selected item

	$($list.attr("options")[i]).remove();

	

	//do nothing if list is now empty

	if(len-1<=0) 

		return;

	

	//move selectedIndex

	i=(i-1<0)?0:i-1;

	$list.attr("selectedIndex",i);

	

	//force list to update property sheet

	$list.change();

}



/* On a Select List Box adds an item to the list

	

	Note, code is ButtonFactory specific now, should be made generic later



*/

DWPE_PanelFactory_Class.addListItem=function(listID)

{



	var $list=$("#"+listID);

	var $option=$("<option></option>");

	

	var args=DWPE_PanelFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));

	

	//set options label

	$option.text(args.label);

	

	//set the data 'obj' variable to our args 

	$option.data("obj",args);$list.append($option);



}













/* /DWPE/components/js/DWPE_Accordion.js */


/*generates markup for the accordion that gets output to scratchpad*/
DWPE_PanelFactory_Class.prototype.generateAccordionMarkup=function(args)
{
	//console.log(args);
	
	var markup="";
	
	markup+='<ux:accordions class="dwpe-accordion">\r\n';
	
	markup+="\r\n";
	
	
	for(var i in args.items)
	{
		var item=args.items[i];
		
		var state="";
		if(item.state=="0")
			state=' class="collapsed" ';
		markup+='\t<h3 '+state+' size="'+item.size+'">';
		
		
		
		if(item.icon.length>0)
			{	markup+=DWPE_Utilities.getIconMarkup(item.icon);	}
		
		
		markup+="<span class='title'>"+item.label+"</span>";
		
		if(item.toolbar.length>0 && item.toolbar!="none")
		markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+item.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";
		
		
		//markup+="<ux class='dwpe-toolbar' data='sample-toolbar-long'/>";
		
		markup+='</h3>\r\n';
		
		if(  item.content===undefined || item.content == "inline")
		{	markup+='\t<div>';
			markup+=DWPE_Utilities.getSampleContent('short');	}
		else
		{	markup+='\t<div content="'+item.content+'"><div style="padding:10px">Loading...</div>';
						
		}	
		markup+='</div>\r\n';
		markup+="\r\n";
	
	}
	
	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
		
	markup+="\r\n";
	markup+='</ux:accordions>';
	
	return markup;
	
	
}


/*initializes an accordion with accordion style and behavior*/
DWPE_PanelFactory_Class.prototype.initializeAccordion=function($ux)
{
	var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();
	$ux.attr("id",id);
	
	
	
	var num_panes=0;
	//style pane titlebars
	$ux.find(">h3").each(
	
		function(i)
		{	
			var $h3=$(this);
			num_panes++;
			
			$h3.attr("panel",id+"-"+num_panes++);
		
			$h3.addClass("dwpe-accordion-header");	
			
			//create disclosure icon
			
			var $disc=$("<span class='dwpe-accordion-disclosure'></span>");
			if($h3.hasClass('collapsed'))
				$disc.addClass('collapsed')
				
			//create resize aware layout for title and toolbar
			var $layout=$("<div class='dwpe-accordion-header-container'><div class='left'></div><div class='right'></div></div>");

			//move icon and title into left side
			$layout.find("DIV.left")
					.append($disc)
					.append($h3.find(">SPAN,>DIV"));
				
			//move toolbar into right side if it exists
			var	$toolbar=$h3.find(".dwpe-toolbar:eq(0)");
				if($toolbar && $toolbar.length>0)
				{	$layout.find("DIV.right")
									.append($toolbar);
					
					//when we have a toolbar let the title be clipped when accordion is narrowed
					$layout.find("DIV.left").css('overflow','hidden');
					//$layout.find("DIV.right").css('overflow','hidden');
					
				}
			 
			$h3.append($layout);
			
			
			
			var $panel=$h3.next(); //our panel is the div that follows the H3
			
			
			//handle content via url
			var content=$panel.attr("content");
			if($panel.attr("content") && content!="inline" )
			{
				
				
				//$panel.replaceWith( "<iframe class='dwpe-accordion-panel' src='"+ content +"'  frameborder='0' width='100%' allowtransparency='false'/>"  );	
				//$panel=$h3.next();
			
				$.ajax(	{	url:content,
							cache:false,			//always get a fresh copy of the content 
							success:function(data)
							{
								
								var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,"");
								$panel.html(html);
								DWPE_ObjectFactory.processFragment($panel);
							},
							error:function(XMLHttpRequest, textStatus, errorThrown)
							{
								$panel.html('Could not find: "'+content+'"');
							}							
					} );
					
			}
		
			
			if($h3.hasClass("expanded"))
				$panel.addClass("expanded");
			
			$panel.addClass("dwpe-accordion-panel");
			$panel.attr("id", id+'-'+i);
			$panel.data("panel_index",i);
		
			
		
			$disc.click(function()
								{
								
									if($disc.hasClass('collapsed'))
									{
										$disc.removeClass("collapsed");
										$h3.removeClass("collapsed");
										$panel.removeClass("collapsed");
										$panel.height($panel.data("last_known_height")||100)
											  .slideDown(	500,
															function()
															{
																DWPE_PanelFactory.manageAccordionPanels($ux,$panel);
															}
															);
										
										
									}
									else
									{
										$disc.addClass("collapsed");
										$h3.addClass("collapsed");
										$panel.addClass("collapsed");
										$panel.slideUp(		500,
															function()
															{
																DWPE_PanelFactory.manageAccordionPanels($ux,$panel);
															}
															);
									}
									
									
																		
								});
			
			
		
		}	
			
	);
	
	
	//add overflow controls
	//$ux.prepend("<div class='accordion-overflow-control fore'></div>");
	//$ux.append("<div class='accordion-overflow-control aft'></div>");
	
	//store first and last pane info
	//$ux.data("first-pane",0);
	//$ux.data("last-pane",num_panes-1);
	
	
	
	$(window).resize(function(){DWPE_PanelFactory.manageAccordionPanels($ux,null);});
	
	//DWPE_PanelFactory.manageAccordionPanels($ux,null);	
	
	
}



DWPE_PanelFactory.manageAccordionPanels=function($ux,$p)
{
	
		//$ux is the accordion, which is passed in by the click on the disclosure icon
		//$p (optional) is the target panel, which is passed in by the click on the disclosre icon
		
		
		
		//get the overall height of accordion parent
		var h=$ux.parent().height();
		var avail_h=h;
		$ux.height(h-1);
		
		
		//console.log(h,$ux.height());
		
		
		
		//get a handle to the overflow controls
		//var $overflow_btn_fore=$a.find(">DIV.accordion-overflow-control.fore");
		//var $overflow_btn_aft=$a.find(">DIV.accordion-overflow-control.aft");
		
		
		//reduce available height by the height of the overflow buttons
		//avail_h-=$overflow_btn_fore.height();
		//avail_h-=$overflow_btn_aft.height();
		
		
		
		/*setup a panels array which will hold our sizing 
			calculations until we wish to commit them to screen*/
		var panels=new Array();
		
		var size_count=0;
		
		
		//var first_pane=$a.data('first-pane');
		//var last_pane=$a.data('last-pane');
		
		var min_panel_height=40;
					
					
		/*extract panel needs & wants*/
		$ux.find(">h3").each(
			function(pane_num)
			{
				var $h3=$(this);
				var headerH=$h3.outerHeight(true); //include borders & padding
				
				
				
				//console.log(headerH);
				avail_h-=(headerH); //subtract the height of this header from avail_h
				
				var $panel=$h3.next();  //our panel is the next sibling of $h3 
				
				var x={};
				
					//if our pane is out of bounds, don't show it at all
					//if(pane_num<first_pane || pane_num>last_pane)
					//	x.dont_show=1;
					//else
					//	x.dont_show=0;
				
					x.header=$h3;
					x.panel=$panel;
					x.size=$h3.attr("size");
					x.expanded=!$h3.hasClass("collapsed");
					
					
					if(x.expanded==true)
						size_count+=parseInt(x.size); //tallies the number of sizing units in effect 
					
					//force block state to block to take measurements
					var oldBlockState=x.panel.css("display");
					var oldH=x.panel.height();
					x.panel.height(0);
					x.panel.css('display','block');
					
					
					
					
					x.has=x.panel.outerHeight(true);         //panel height with borders and padding
					
					//find the height of its content
					
					if(x.panel.find(">IFRAME:first-child").length>0) 
						x.wants=x.panel.find(">IFRAME:first-child").height();	
					else
					{	x.wants=x.panel.attr("scrollHeight");    }
					x.wants=(x.wants<min_panel_height)?min_panel_height:x.wants;		//enforce a minimum
					x.mustHave=(x.size==0)?x.wants:min_panel_height;      //inflexibles want their content's height, others reqire a minimum
					
					//return block state to its original state
					x.panel.height(oldH);
					x.panel.css("display",oldBlockState);
					
					
					x.visited=0; //have we calculated size for this panel yet?
				
					
					
				
					panels[pane_num]=x;
				
			}
		);
		
		
		
		
		
		/*if we are expanding an inflexible panel give it first crack at available height*/
		if($p)
		{
			
				
			
			//get a handle to our panel sizing data inside panels array
			var panel_index= $p.data("panel_index") ;
			var panel=panels[panel_index];
			
			if(panel.size==0)
			{
				panel.wants=panel.mustHave;
				
				
				
				if(panel.expanded==false) 
				//this panel is closed, so it gets nothing
				{
					panel.finalHeight=0;
				}
				else if(avail_h>=panel.wants)
				//we have room to give the panel what it wants, so give it what it wants
				{					
					panel.finalHeight=panel.wants;
					avail_h-=panel.wants;
					
				}
				else if (panel.wants>avail_h && avail_h>panel.mustHave) 
				//the panel wants more room than we have to give, and we have more room to give than its minimum requirement, so give all we have
				{			
					panel.finalHeight=avail_h;
					avail_h=0;
				}
				else
				//we have nothing left to give, so mark it dont show
				{
					panel.finalHeight=0;
					panel.state=0;
					//panel.dont_show=1;
				}
				
				panel.visited=1;
			}
		}
		
		
		
		
		/*bestow on each open inflexible panel the height it wants until avail_h is depleted*/
		$(panels).each(
		
			function()
			{
				
				if(this.visited==1) return; //we have already computed this panel's height
				if(this.size!=0) return; //weed out the flexible panels
				
				
				if(this.expanded==false)
				//this panel is closed, so it gets nothing
				{	this.finalHeight=0;	}
				else if(avail_h>=this.wants)
				//we have room to give the panel what it wants, so give it what it wants
				{
					avail_h-=this.wants;
					this.finalHeight=this.wants;
				}
				else if (this.wants>avail_h && avail_h>this.mustHave) 
				//the panel wants more room than we have to give, and we have more room to give than its minimum requirement, so give all we have
				{
					this.finalHeight=avail_h;
					avail_h=0;
				}
				else
				//we have nothing left to give, so give it 0 and collapse it
				{
					this.finalHeight=0;
					this.state=0;
					//panel.dont_show=1;
				}
				
				//if(this.finalHeight==0) this.state=0;
				
				
				this.visited=1;

				
				
			}
		
		);
		
		
		var px_per_flex_unit=parseInt(avail_h/size_count); 
		
		//console.log(avail_h,size_count,px_per_flex_unit);
		
		var num_panels=panels.length;
			
	
		
		
		/*bestow on each open flexible panel the height it wants until avail_h is depleted*/
		$(panels).each(
		
			function(i)
			{
				if(this.visited==1) return; //we have already computed this panel's height
				if(this.size==0) return; //weed out the inflexible panels
			
				//if(avail_h<=0)
				//{
				//	this.dont_show=true;
				//	return;
				//}
			
				if(this.expanded==false)
				//this panel is closed, so it gets nothing
				{	this.finalHeight=0;	}
				else
				//we have room to give the panel what it wants, so give it what it wants
				{
					this.finalHeight=this.size*px_per_flex_unit;
					avail_h-=this.finalHeight;
					
				}
				
			
				this.visited=1;
				
			
			}
		
		);
	
	
		
		/*determine the last open panel*/
		var last_open_panel=-1;
		$(panels).each(
		
			function(i)
			{
				if(this.expanded==true) last_open_panel=i;
			}
		
		);
		
		
		//console.log(avail_h)
		
		/*if we have avail_h left over add it to the last open panel's height*/
		if(last_open_panel>-1)
		{
			
			panels[last_open_panel].finalHeight+=avail_h;
			
			avail_h=0;
		}
		
		
	
		/*animate panel height adjustments*/
		var d=500; //animation speed
		$(panels).each(
		
			function(i)
			{
			
				//adjust panel height and set disclosure state accordingly 
				var $disclosure=this.header.find("span.dwpe-accordion-disclosure:first-child");
				
				var _this=this;
				
				//enforce the calculated state
				//this.header.attr("state",this.state);
				//this.panel.attr("state",this.state);	
				
				
				
				
				var $p=this.panel;

					$p.data("last_known_height",this.finalHeight);	
				
					
				if(this.expanded==false)	
				{	
					$disclosure.addClass("collapsed");
					this.header.find("DIV.right>.dwpe-toolbar").css('visibility','hidden'); //hide toolbar
					
					$p.height(this.finalHeight).hide();
					
					//if($p.css("display")!="none") //if we are not already closed, close us in an animated fashion
					//$p.animate({'height': this.finalHeight}, d,function(){$p.hide()});
				}	
				else
				{
					$disclosure.removeClass('collapsed');
					this.header.find("DIV.right>.dwpe-toolbar").css('visibility','visible'); //show toolbar
					
					$p.height(this.finalHeight).show()
					//$p.show();
					//$p.animate({'height': this.finalHeight}, d);
					//$p.height(this.finalHeight);
					//$p.slideDown(d);
				}
				
				
			}
		
		);
		
		
	

}



/* /DWPE/components/js/DWPE_Splitter.js */

/*generates markup for the splitter that gets output to scratchpad*/
DWPE_PanelFactory_Class.prototype.generateSplitterMarkup=function(args)
{
	//console.log(args);
	
	var markup="";
	
	markup+='<ux:splitters class="dwpe-'+args.orientation+'-splitter">\r\n';
	
	markup+="\r\n";
	
	
	
	for(var i in args.items)
	{
		var item=args.items[i];
		markup+='\t<div class="split-panel';
		markup+=(item.style)?" "+item.style:"";
		markup+='"';
		markup+=(item.id)?' id="'+item.id+'"':'';
		markup+=' size="'+item.size+'" ';
		
		if(item.state!="1")
			markup+=' state="'+item.state+'"';
		
		if(item.toggle!="one")
			markup+=' toggle="'+item.toggle+'"';
		
		if(item.content && item.content!="inline")
			markup+=' content="'+item.content+'"';
		
		
		markup+='>';
		
		
		if(!item.content || item.content=="inline")
		{	markup+="<h3>"+item.label+"</h3>";
			markup+=DWPE_Utilities.getSampleContent('short');
		}
		
		markup+='\t</div>\r\n';
		markup+="\r\n";
	
	}
	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
		
	markup+="\r\n";
	markup+='</ux:splitters>';
	
	return markup;
	
	
}


/*initialize splitter with splitter look and behavior*/
DWPE_PanelFactory_Class.prototype.initializeSplitter=function($ux)
{

		//if we have a unique id, use it, otherwise make one
		var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();
		$ux.attr("id",id);
		

		var horizontal=$ux.hasClass("dwpe-horizontal-splitter");
		var orientation=(horizontal)?"horizontal":"vertical";
		var axis=(horizontal)?"x":"y";
		var sizeName=(horizontal)?"width":"height";
		var edgeName=(horizontal)?"left":"top";
		
		
		
		
		
		var splitters=new Array();
		var i=0;
		
		//size to Fit
		$ux.width($ux.parent().width());
		$ux.height($ux.parent().height());
		
		
		
		$panels=$ux.find(">DIV.split-panel");
		
		/*setup splitters and expanders between panels*/
		$panels.each(
		
			function()
			{
				var tmp;
				var $panel_one=$(this);
				var $panel_two=$panel_one.next();
				
					
					//record state into data
					tmp=$panel_one.attr("state");
					tmp=(tmp=="0")?"0":"1";		//if no state, assume state=1 (open)
					$panel_one.data("state", tmp);  //move panel state attr into jquery data object
					
					tmp=$panel_two.attr("state");
					tmp=(tmp=="0")?"0":"1";		//if no state, assume state=1 (open)
					
					$panel_two.data("state", tmp);  //move panel state attr into jquery data object
					
					//record size into data
					tmp=$panel_one.attr("size");
					tmp=(tmp)?tmp:"200";		//if no size assume fixed size of 200
					tmp=tmp.replace("px","");
					$panel_one.data("size", tmp);  //move panel state attr into jquery data object
					
					tmp=$panel_two.attr("size");
					tmp=(tmp)?tmp:"200";		//if no size assume fixed size of 200
					tmp=tmp.replace("px","");
					$panel_two.data("size", tmp);  //move panel state attr into jquery data object
					
					
					//record toggle into data
					tmp=$panel_one.attr("toggle");
					tmp=(tmp=="two")?tmp:"one";		//if no size assume fixed size of 200
					$panel_one.data("toggle", tmp);  //move panel state attr into jquery data object
				
					/*
					tmp=$panel_two.attr("toggle");
					tmp=(tmp=="two")?tmp:"one";		//if no size assume fixed size of 200
					$panel_two.data("toggle", tmp);  //move panel state attr into jquery data object
					*/
				
				var content	= $panel_one.attr("content");
				if( content && content!="inline")
				{
					
					//$panel_one=$panel_one.append("<iframe width='100%' height='100%' src='"+$panel_one.attr("content")+"' frameborder='0' allowtransparency='false'></iframe>")
				
				
					$.ajax(	{	url:content,
								cache:false,			//always get a fresh copy of the content 
								success:function(data)
								{
									
									var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,"");
									$panel_one.html(html);
									DWPE_ObjectFactory.processFragment($panel_one);
									$panel_one.data('initialized',true);
								},
								error:function(XMLHttpRequest, textStatus, errorThrown)
								{
									$panel_one.html('Could not find: "'+content+'"');
								}							
							} );
				
				}	
					
				
				if($panel_two.length>0)
				{
					
					
					
					
					
					
				
					var toggle_pane=$panel_one.data("toggle");
					
					var state=orientation;
					
					
					if(toggle_pane=="one")
						state+=($panel_one.data("state")=="0")?"-expand":"-collapse";
					else
						state+=($panel_two.data("state")=="0")?"-expand":"-collapse";
					
						state+="-"+toggle_pane;
				
					var $splitter=$("<div class='"+orientation+"-split-bar "+state+"'><div class='panel-expander'></div></div>");
					var $expander=$splitter.find(".panel-expander");
					
					$panel_one.after($splitter);
					
					
					
					$splitter.mouseover(function(){$(this).addClass("split-hover");});
					$splitter.mouseout(function(){$(this).removeClass("split-hover");});
					var splitPos;
					
					
					
					$splitter.draggable(
						{
							"axis":axis,
							zIndex:1,
							addClasses:false,
							iframeFix:true,
							cancel:".expander",
							start:function()
							{
								//calculate & set containment x,y coords
								
								
								var $handle=$(this);
								
								$handle.css({	"z-index":999999 }); //set the z-order high to paint over iframe content
								
								$expander.hide();
								
								splitPos=$splitter.css(edgeName);
								
								
								
								
							},
							drag:function(event,ui)
							{
							
							},
							
							
							stop:function(event,ui)
							{
							
								
								var movedBy=(horizontal)?ui.position.left:ui.position.top;
								
								var s1=(horizontal)?$panel_one.width():$panel_one.height();
								var s2=(horizontal)?$panel_two.width():$panel_two.height();
							
								
								if($panel_one.data("toggle")=="one") //expand & collapse panel one
								{
								
									if(s1+movedBy<=15)
									{
										$splitter.removeClass(orientation+'-collapse-one');
										$splitter.addClass(orientation+'-expand-one');
										movedBy=-s1;
										
										$panel_one.addClass('split-panel-collapsed');
										$panel_one.data("state","0");
									
									}
									else
									{
										if(s1+movedBy>s1+s2) //don't let a drag exceed the bounds of the two panels combined
											movedBy=s2;
									
										$splitter.removeClass(orientation+'-expand-one');
										$splitter.addClass(orientation+'-collapse-one');
										
										$panel_one.removeClass('split-panel-collapsed');
										$panel_one.data("state","1");
									}
									
								
									
								}
								else //expand & collapse panel two
								{
								
								
									if(s2-movedBy<=15)
									{
										$splitter.removeClass(orientation+'-collapse-two');
										$splitter.addClass(orientation+'-expand-two');
										movedBy=s2;
										$panel_two.data("state","0");
										$panel_two.addClass('split-panel-collapsed');
										
									
									}
									else
									{
									
										if(-movedBy>s1) //don't let a drag exceed the bounds of the first panel
										{	movedBy=-s1;
										}	
										
										$splitter.removeClass(orientation+'-expand-two');
										$splitter.addClass(orientation+'-collapse-two');
										$panel_two.removeClass('split-panel-collapsed');
										$panel_two.data("state","1");
									}
									
									
								}
								
								
								var panel_one_size=s1+movedBy;
								var panel_two_size=s2-movedBy;
								
								$panel_one.data("oldSize",panel_one_size);
								$panel_two.data("oldSize",panel_two_size);
								
								$panel_one.data("size",panel_one_size+"px");
								$panel_two.data("size",panel_two_size+"px");
								
								
								
								if(horizontal)
								{	
									$panel_one.width(panel_one_size);
									$panel_two.width(panel_two_size);
								}
								else
								{
									$panel_one.height(panel_one_size);
									$panel_two.height(panel_two_size);
								}
								
								//return splitter to its starting position
								$splitter.css(edgeName,splitPos);		
								
								
								//show expander
								$expander.show();
								
								//prompt all components that adjustments due to resize may be in order
								//DWPE_Utilities.triggerComponentResize(); //should eventually pass in parent, so we can test containment before processing
							}
						}
					);
					
					

					
					$expander.click(
						function(event,ui)
						{
							var d=0; //animation duration;
							event.preventDefault();
							event.stopPropagation();
							
							//DWPE_Utilities.triggerResize();
							
							var s1=(horizontal)?$panel_one.outerWidth(true):$panel_one.outerHeight(true);
							var s2=(horizontal)?$panel_two.outerWidth(true):$panel_two.outerHeight(true);
								
								
							var panel_one_args={};
							var panel_two_args={};
									
							
							if($panel_one.data("toggle")=="one") //expand & collapse the first panel
							{
								
								
								
								if($panel_one.data("state") =="1")
								{	
									//collapse panel one
									$panel_one.data("oldSize",s1);
									$panel_one.data("state","0");
									
									panel_one_args[sizeName]="0px";
									//$panel_one.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									
									//if($panel_two.data("sizing")=="relative")
									//{	
										panel_two_args[sizeName]=(s1+s2)+"px"; //give all size to panel 2
									//	$panel_two.animate(args,d);
									//}
									
									//console.log("p1 collapse p2 expand: ",panel_one_args[sizeName],panel_two_args[sizeName]);
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-collapse-one');
									$splitter.addClass(orientation+'-expand-one');
									//$splitter.css(edgeName,2);
									
									$panel_one.addClass('split-panel-collapsed');
								}
								else
								{	
									//expand panel one
									s1=$panel_one.data("oldSize")||$panel_one.data("size");
									$panel_one.data("state","1");
									
									panel_one_args[sizeName]=s1+"px";
									//$panel_one.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									//if($panel_two.data("sizing")=="relative")
									//{
										panel_two_args[sizeName]=(s2-s1)+"px"; //take size of panel 1 away from panel 2
									//	$panel_two.animate(args,d);
									//}
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-expand-one');
									$splitter.addClass(orientation+'-collapse-one');
									//$splitter.css(edgeName,-1);
									
									$panel_one.removeClass('split-panel-collapsed');
									
								
								}
							}
							else //expand & collapse the second panel
							{
								
							
								if($panel_two.data("state") =="1")
								{	
									//collapse panel two
									$panel_two.data("oldSize",s2)||$panel_two.data("size");
									$panel_two.data("state","0");
									
									panel_two_args[sizeName]="0px";
									//$panel_two.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									//if($panel_one.data("sizing")=="relative")
									//{
										panel_one_args[sizeName]=(s1+s2)+"px"; //give all size to panel 1
									//	$panel_one.animate(args,d);
									//}	
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-collapse-two');
									$splitter.addClass(orientation+'-expand-two');
									
									$panel_two.addClass('split-panel-collapsed');
									
									//$splitter.css(edgeName,2);
								}
								else
								{	
									//expand panel two
									s2=$panel_two.data("oldSize");
									$panel_two.data("state","1");
									
									panel_two_args[sizeName]=s2+"px";
									//$panel_two.animate(args,d);//,DWPE_Utilities.triggerResize);
									
									//if($panel_one.data("sizing")=="relative")
									//{
										panel_one_args[sizeName]=(s1-s2)+"px"; //take size of panel 2 away from panel 1
									//	$panel_one.animate(args,d);
									//}
									
									//change the splitter direction
									$splitter.removeClass(orientation+'-expand-two');
									$splitter.addClass(orientation+'-collapse-two');
									//$splitter.css(edgename,-1);
									
									$panel_two.removeClass('split-panel-collapsed');
									
								
								}
							
							
							}
							
							//animate panel expand/collapse
							$panel_one.animate(panel_one_args,d);//,DWPE_Utilities.triggerResize);
							$panel_two.animate(panel_two_args,d);//,DWPE_Utilities.triggerResize);
									
							
							//prompt all components that adjustments due to resize may be in order
							DWPE_Utilities.triggerComponentResize();
							
								
						}
					);
					
					
				
				}
				
			}
		
		);
	
	

		$(window).bind('resize',function()
		{
		
		/*-----
		
			now apply size to each panel based on current size of parent
			and the size requested by the panel
			
			------*/
		var d=250;  //animation duration
		var fixed=[];
		var relative=[];
		var horizontal=$ux.hasClass("dwpe-horizontal-splitter");
		var stretchTo;
		
		
		//console.log("resize: ", $ux.attr("id"));
		
		
		
		
		//fit splitter to parent container
		//$ux.hide();
		$ux.parent().css("overflow","hidden");
		
		var ww=$ux.parent().width();
		var hh=$ux.parent().height();
		
		/*fudge factor to ensure last collapsed pane splitbar is not clipped by right edge
			probably due to parent border not being counted properly
			needs analysis & rework*/
		
		/*
		if(horizontal)
		{	ww-=4;	}
		else
		{	hh-=4;	}
		*/
		$ux.width(ww);
		$ux.height(hh);
			
		//$ux.show();
		
		
		
		
		var avail_size;
		if(horizontal)
		{
			avail_size=ww;
			stretchTo=hh;
			
		}	
		else
		{	
			avail_size=hh;
			stretchTo=ww;
		
		}
		
		var total_size=avail_size;
		
		/*organize panels into fixed and relative sized*/
		var num_open_panels=0;
		
		$panels.each(
		
			function()
			{
				var $panel=$(this);
				var w=$panel.data("size")+"";
				
				var state=$panel.data("state");
				
				if(state=="1") //only calculate width if panel is open
					{	num_open_panels++;	}
					
				
				if(w.indexOf("%")>-1)
				{
					relative.push($panel);
					$panel.data("sizing","relative");
				}
				else
				{	
					fixed.push($panel)
					$panel.data("sizing","fixed");
				}
			}
		);
		
		
		//console.log("as>split-bar ",avail_size);

		
		/*subtract the size of splitters from the total*/
		var num_open_panes=0;
		
		
		var splitbar_size=0;
		$ux.find(">DIV."+orientation+"-split-bar").each
		(	function()
			{
				var $s=$(this);
				if(horizontal)
				{	
					splitbar_size=$s.outerWidth(true);
					$s.css("height","auto");
					$s.height(stretchTo);
				}	
				else
				{
					splitbar_size=$s.outerHeight(true);
					$s.css("width","auto");
					$s.width(stretchTo);
				}

			}
		
		);
		
		avail_size-=num_open_panels*splitbar_size;

		
		/*give fixed panels first shot at avail_size*/
		$(fixed).each
		(
			function()
			{
					var $panel=$(this);
					
					var state=$panel.data("state");
					
					
					var s=0;
					
					if(state=="1") //only calculate width if panel is open
					{	s=parseInt($panel.data("size"));	}
					

					if(horizontal)
					{	
						
						$panel.width(s);
						s=$panel.outerWidth(true);
						$panel.css("height","auto");
						$panel.height(stretchTo);
					}	
					else
					{
						$panel.height(s);
						s=$panel.outerHeight(true);
						$panel.css("width","auto");
						$panel.width(stretchTo);
					}
					avail_size-=s;
					//console.log($ux.attr("id"),avail_size);	
			}
		);
	
		/*give relative panels a shot at avail_size */
		var total_size_for_relative=avail_size;
		$(relative).each
		(
			function()
			{
					var $panel=$(this);
					
					var state=$panel.data("state");
					
					
					var s=0;
					
					//if(state=="1") //only calculate width if panel is open
					//{	
						s=$panel.data("size");
						s=parseInt(s)/100;   //convert percent to float
						s=parseInt(total_size_for_relative*s);
					//}
					
					if(state=="0") //pane is collapsed, but store its preferred size for when it is expanded
					{
						$panel.data("oldSize",s);
						s=0;
					}
					
					//$panel.data("sizing","fixed");
					//$panel.attr("size",s);  //we are now a fixed size panel	
					
					if(horizontal)
					{	
						$panel.width(s);
						s=$panel.outerWidth(true);
						$panel.css("height","auto");
						$panel.height(stretchTo);
					}	
					else
					{
						$panel.height(s);
						s=$panel.outerHeight(true);
						$panel.css("width","auto");
						$panel.width(stretchTo);
					}
					
					//console.log("as ",avail_size);
					avail_size-=s;
					
					
			}
		);
		
		
		/*give to/take from the first open panel the remaining size (avail_size can be negative) */
		var $first_panel=null;
		$panels.each(
			function()
			{
				var $panel=$(this);
					
				//don't count collapsed panels
				var state=$panel.data("state");
				if(state=="1" && !$first_panel)
					$first_panel=$panel;
				
				
			}
		);
		
		//console.log(avail_size);
		
		if($first_panel)// && avail_size>0)
		{
			if(horizontal)
			{	
				var s=$first_panel.outerWidth() +avail_size;
				$first_panel.width(s);
				//$last_panel.animate({width:s},d);
				
			}	
			else
			{
				var s=$first_panel.outerHeight() +avail_size;
				$first_panel.height(s);
				//$last_panel.animate({height:s},d);
					
			}
		}
		
		
		

	});
	
	DWPE_Utilities.triggerResize();
	
	
	
}


/* /DWPE/components/js/DWPE_Tabset.js */

/*generates markup for the tabs that gets output to scratchpad*/

DWPE_PanelFactory.generateTabsetMarkup=function(args)

{

	var markup = "";

	

	markup+='<ux:tabs class="dwpe-tabset '+args.tab_style + ' ' + args.allow_tab_close +'" height="' + args.height +'"';

	

	markup+=" name='"+((args.name)?args.name:"Tabs")+"'";

	

	

	//set default tab

	var default_tab="0";

	for(var i=0;i<args.items.length;i++)

	{

		if(args.items[i].selected && args.items[i].selected=="1")

		{

			default_tab=i;

			break;

		}

	}

	markup+=" default_tab='"+default_tab+"'";

	

	markup+=">\r\n";



	markup += DWPE_PanelFactory_Class.generateTabMarkup(args);

	

	if(args.toolbar.length>0 && args.toolbar!="none")			

		markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";

	markup += DWPE_PanelFactory_Class.generateTabPanelMarkup(args);	

	

	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);

	

	markup+="</ux:tabs>\r\n";

	

	



	

	return markup;

}



DWPE_PanelFactory.generateTabOnlyMarkup=function(args)

{

	var markup = "";

	

	

	

	var num_visible_tabs=0;

	

	

	

	

	

	markup+='<ux:tabs class="dwpe-tabset top allow_tab_close" height="0"';

	

	markup+=" name='"+((args.name)?args.name:"Tabs")+"'";

		

	markup+=">\r\n";



	markup+="	<ul class='dwpe-tabs'>\r\n";   



	for(var i in args.items)

	{

		if(args.items[i].visible=="1") num_visible_tabs++;

		

		var item=args.items[i];

		markup+="<li class='global";

		

		markup+=(item.state=='0')?" disabled":"";

		markup+=(item.selected=='1')?" selected":"";

		markup+=(item.visible=='0')?" hidden":"";

		

		markup+="'";

		markup+=(item.name)?" name='"+item.name+"'":""

		markup+=">";

		

		if(item.icon.length>0 && item.icon !='none')

			markup+=DWPE_Utilities.getIconMarkup(item.icon) + " ";



		

		markup+= item.label;

		markup+="</li>\r\n";



	}

	

	if(num_visible_tabs==0) return "";



	markup+="	</ul>\r\n";

	

	markup+="</ux:tabs>\r\n";

	

	



	

	return markup;

}



DWPE_PanelFactory_Class.generateTabMarkup = function(args)

{

	markup = "";

	markup+="	<ul class='dwpe-tabs'>\r\n";   

	for(var i in args.items)

	{

		var item=args.items[i];

		

		

		

		var disabled=(item.state=='0')?"class='disabled'":"";

		markup+="\t\t\<li ";

		markup+=" class='"

		markup+=(item.state=='0')?" disabled":"";

		markup+=(item.visible=='0')?" hidden":"";

		

		markup+="' "; 

		markup+=(item.name)?" name='"+item.name+"'":""

		markup+=">";

		

		

		/* Icon */

		if(item.icon.length>0 && item.icon !='none')

			markup+=DWPE_Utilities.getIconMarkup(item.icon) + " ";

		

		markup+= item.label;

		

	

		

		markup+="</li>\r\n";

	}

	markup+="	</ul>\r\n";

	return markup;

}



DWPE_PanelFactory_Class.generateTabPanelMarkup = function(args)

{

	markup="";

	markup+="\t<div class='dwpe-tab-panels'>\r\n";

	for(var i in args.items)

	{

		var item=args.items[i];



		//if( item.content == "inline" )

		//{

		//	markup+="\t\t<div>\r\n<h3>" + 

		//	                 item.label + "</h3>" + DWPE_Utilities.getSampleContent('medium	') + "\r\n\t\t</div>\r\n";

		//} else {

			/* We'll check for content attribute later in DWPE_PanelFactory_Class.showTabPanel */

			markup+="\t\t<div url='"+ item.content +"'><div style='padding:10px'>Loading...</div></div>\r\n";

		//}

	}

	markup+="\t</div>\r\n";

	return markup;

}





/*initializes a tabset with tab style and behavior*/

DWPE_PanelFactory_Class.prototype.initializeTabset=function($ux)

{

	//if we have a unique id, use it, otherwise make one

	var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();

	$ux.attr("id",id);

	

	

	

	//save our preferred size into $ux data object

	var size="100%";

	$ux.data('size',size);

	

	

	//pick up the default tab, if not defined, assign first tab

	var default_tab=$ux.attr("default_tab");

		default_tab=(default_tab)?default_tab:0;

	

	$ux.data("current-tab",-1);

	

	

	$ux.data('allow-tab-close', $ux.hasClass('allow-tab-close') );

	

	//create a  container to hold our tabs and toolbar on one line with resize awareness

	var $container=$("<div class='tabs-container'>"+

						"<div class='left'></div>"+

						"<div class='right'></div>"+

					"</div>");



	//place tabs to the left

	var $tabs=$ux.find(">UL.dwpe-tabs:first");

	$container.find(">DIV.left").append($tabs);

	

	//place toolbar to the right

	var $toolbar=$ux.find(">.dwpe-toolbar");

	if($toolbar && $toolbar.length>0)

	{	$container.find(">DIV.right").append($toolbar);	}

	else //no toolbar so give left all the width it can have

	{

		$container.find(">DIV.right").width("1%");

		$container.find(">DIV.left").width("99%");

	}

	

	//acquire a handle to all the tab LIs in the tabset

	var $tabs=$container.find('UL.dwpe-tabs>LI'); 

	

	//give each LI that this tabset owns its tab class

	var num_tabs_visible=0;

	$tabs.each(

	

		function(i)

			{

					var $tab=$(this);

					$tab.addClass("dwpe-tab normal");	

					$tab.attr('id',id+"-tab-"+i);

					$tab.data('index',i);

					if($tab.hasClass("hidden")==false) num_tabs_visible++;

					/*$tab.click(

						

						function(){	DWPE_PanelFactory_Class.showTabPanel($ux,i);	}

						

					);*/

			}

	)

	

	$ux.data('num-of-tabs',$tabs.length);

	

	//add our tab container inside $ux

	if ( $ux.hasClass('bottom')  )             //tabs at bottom only

	{

		$container.addClass('bottom');

		$ux.append($container);

		// Since we're a bottom tabs, hide the toolbar

		/*Anthony, do we really hide toolbar if tabs are only on bottom?*/

		

		$container.find(">DIV.right").css('visibility','hidden');

		

		//add the overflow controls

		var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');

		$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);

		

		var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');

		$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);

		

		//bind an overflow handler to our overflow controls

		$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});

		$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});

		

	}

	else if ($ux.hasClass('both'))          //tabs top and bottom

	{

		//top

		$container.addClass('top');

		$ux.prepend($container);

		

		//add the overflow controls

		

		

		

		//top

		var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');

		$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);

		

		var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');

		$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);

		

		//bind an overflow handler to our overflow controls

		$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});

		$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});

		

		

		

		//bottom

		var $bottom=$container.clone(true);

		$bottom.removeClass('top');

		$bottom.addClass('bottom');

		$ux.append($bottom);

		$bottom.find(">DIV.right").css('visibility','hidden');

		

		//get handles to the overflow controls that bottom already has thanks to cloning container

		var  $overflow_btn_fore2= $bottom.find('LI.fore');

		var  $overflow_btn_aft2 = $bottom.find('LI.aft');

		

		//remove the old handlers

		$overflow_btn_fore2.unbind();

		$overflow_btn_aft2.unbind();

		

		

		//bind an overflow handler to our overflow controls

		$overflow_btn_fore2.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore2);});

		$overflow_btn_aft2.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft2);});

		

		

		//udpate the bottom tab ids to have -btm (used to manage selected state top & bottom)

		$bottom.find('UL.dwpe-tabs>LI').each(

			function()

			{

				var $tab=$(this);

				var id=$tab.attr('id');

					id+='-btm'

					$tab.attr('id',id);

			}

		);

		

		

	}

	else 									//tabs top only

	{

		$ux.addClass('top'); //force top class just in case user didn't specify it

		$container.addClass('top');

		$ux.prepend($container);

		

		

		//add the overflow controls

		var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');

		$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);

		

		var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');

		$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);

		

		//bind an overflow handler to our overflow controls

		$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});

		$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});

		

		

		

		

	} 

	

	



	

	//set the first tab, used in overflow calculations

	$ux.data('first-tab',0);

	

	//set the last tab, used in overflow calculations

	$ux.data('last-tab',num_tabs_visible-1);

	

	

	//acquire a handle to all the panels in the tabset

	//var $tab_panels=$ux.find('>DIV.dwpe-tab-panels>DIV'); 

	var $tab_panels=$ux.find('DIV.dwpe-tab-panels>DIV'); 

	

	//give each tab panel that this tabset owns its panel class

	$tab_panels.each(

	

		function(i)

			{

					

					var $tab_panel=$(this);

					$tab_panel.attr('id',id+"-tabpanel-"+i)

							  .css('height', $ux.attr('height'));

			

					if(i==default_tab)  //by default, first panel is shown

					{	

						

					}

			}

	);

	

	//enforce the default tab by showing it

	DWPE_PanelFactory_Class.showTabPanel($ux,default_tab);

	

	

	//force window to call on our tabset to manage overflow when a window resize occurs

	$(window).bind('resize',function(e,parentID){	

											//if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)

												DWPE_PanelFactory_Class.manageTabOverflow($ux);

											})

	//$(window).bind('dwpe-component-resize',function(){DWPE_PanelFactory_Class.manageTabOverflow($ux);})

	

	//force tabs to evaluate for overflow once so that tabs layout correctly on load

	DWPE_PanelFactory_Class.manageTabOverflow($ux);



}



/*Close tab removes the tab and related panel from the DOM*/

DWPE_PanelFactory_Class.closeTabPanel = function($ux)

{

	var current_tab_index=$ux.data("current-tab");

	

	if(current_tab_index==null) return;  //we only close the open tab panel

	

	

	var id= $ux.attr("id");

	

	var $tab_top=$("#"+id+"-tab-"+current_tab_index);

	var $tab_panel=$("#"+id+"-tabpanel-"+current_tab_index);

	var $tab_btm=$("#"+id+"-tab-"+current_tab_index+"-btm");

	

	var $tab=($tab_top.length==0)?$tab_btm:$tab_top;

	

	var old_tab_index=$tab.data('index');

	

	

	//find the nearest sibling tab

	var $prv=$tab.prev(".dwpe-tab");

	var $nxt=$tab.next(".dwpe-tab");

	var $sibling=($nxt.length==0)?$prv:$nxt;

		

	//do nothing more if we can't locate a sibling 

	if($sibling.length==0  ) return;

	

	//remove the old tab's tab and panel objects

	$tab_top.remove();

	$tab_panel.remove();

	$tab_btm.remove();

	

	

	$ux.data('first-tab' ,$sibling.data('tab-index')	);

	

	//reindex our tabs

	var count=0;

	$ux.find(">DIV.top LI.dwpe-tab").each(function(i){$(this).data('tab-index',i);count++});

	if(count==0)

		$ux.find(">DIV.bottom LI.dwpe-tab").each(function(i){$(this).data('tab-index',i); count++});

	else

		$ux.find(">DIV.bottom LI.dwpe-tab").each(function(i){$(this).data('tab-index',i); });

		

	//update tab count

	$ux.data('num-of-tabs',count);

	$ux.data('first-tab' ,$sibling.data('tab-index')	);

	

	

	//move focus to the sibling tab panel we found

	

	DWPE_PanelFactory_Class.showTabPanel($ux,$sibling.data('index'));

	

	

	

	

	



	

	//last, give our tabset a chance to manage overflow

	DWPE_PanelFactory_Class.manageTabOverflow($ux);

	

}





/*shows the panel that has been passed in*/

DWPE_PanelFactory_Class.showTabPanel = function($ux,tab_index)

{

	

	var current_tab=$ux.data("current-tab");

	if(tab_index==current_tab) return; //don't show a tab that's already shown

	

	

	

	var id= $ux.attr("id");

	

	var $new_tab_top=$("#"+id+"-tab-"+tab_index);

	var $new_tab_btm=$("#"+id+"-tab-"+tab_index+"-btm");

	var $new_panel=$ux.find("#"+id+"-tabpanel-"+tab_index);

	

	if(DWPE_Utilities.isDisabled($new_tab_top) )return; //don't show a tab that is disabled

	

	//iframes can cause flashes when hiding tab panel, so hide them first

	var $old_panel=$("#"+id+"-tabpanel-"+current_tab);

	if($old_panel.length>0)

		$old_panel.find(">IFRAME").hide();

	

	if($new_panel.length>0)

	{	

		$ux.data("current-tab",tab_index);

		

		

		$new_tab_top.addClass('selected');

		$new_tab_top.removeClass('normal');

		$new_tab_btm.addClass('selected');

		$new_tab_btm.removeClass('normal');

		

		

		

		if($ux.data('allow-tab-close')==true && $ux.data('num-of-tabs')>1)

		{

			var $close=$(DWPE_Utilities.getIconMarkup('closetab'));

				$close.addClass('close');

				$close.click(function(e){e.stopPropagation(); DWPE_PanelFactory_Class.closeTabPanel($ux);} );

				$new_tab_top.append($close);

				$new_tab_btm.append($close.clone(true));



		}

		

		

		$new_panel.show();

		

		//now that we've shown our panel, give it a chance to lay itself out.

		$(window).trigger('resize');

		

		/*	Dynamic loading of iframe 

			The iframe is loaded on the first call only

			subsequent calls will only display the iframe content 	*/

		

		

		

		var content=$new_panel.attr('url');

		

		

			

		if ( content && content.length>0)

		{	

			/*if($new_panel.find(">iframe").length==0 )

			{

				$new_panel.html( "<iframe src='"+ content +"' frameborder='0' allowtransparency='false'/>"  );

			}

			$new_panel.find(">IFRAME").show();

			*/

			

			if(!$new_panel.data('initialized'))

			{

				$.ajax(	{	url:content,

							cache:false,			//always get a fresh copy of the content 

							success:function(data)

							{

								

								var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,"");

								$new_panel.html(html);

								DWPE_ObjectFactory.processFragment($new_panel);

								$new_panel.show();

								$new_panel.data('initialized',true)

							},

							error:function(XMLHttpRequest, textStatus, errorThrown)

							{

								$new_panel.html('Could not find: "'+content+'"');

							}							

					} );

			}

			

		}

		else //no content url specified so present dummy content

		{

			$new_panel.html( DWPE_Utilities.getSampleContent('medium'))

		}

	}

	

	

	if(current_tab!=null)

	{

		//unhighlight the old tab

		

		$old_panel.hide();

		var $tab_top=$("#"+id+"-tab-"+current_tab).removeClass('selected');

			$tab_top.addClass('normal');

		var $tab_btm=$("#"+id+"-tab-"+current_tab+"-btm").removeClass('selected');

			$tab_btm.addClass('normal');

			

		//remove the close button if we can find item

		$tab_top.find('DIV.close').remove();

		$tab_btm.find('DIV.close').remove();

		

	}

	

	

}



DWPE_PanelFactory_Class.manageTabOverflow = function($ux)

{

	

	//if an overflow menu is open, close it

	DWPE_Window.closeWindowGroup("tabset-overflow");



	//note that our tabs container could be on top, bottom or both

	

	//add our container inside $ux

	if ( $ux.hasClass('top')  )             //tabs at top only

	{

		DWPE_PanelFactory_Class._manageTabOverflow($ux,'top');

	} 

	else if ($ux.hasClass('both'))          //tabs top and bottom

	{

		DWPE_PanelFactory_Class._manageTabOverflow($ux,'top');

		DWPE_PanelFactory_Class._manageTabOverflow($ux,'bottom');

		

	}

	else 									//tabs bottom only

	{

		DWPE_PanelFactory_Class._manageTabOverflow($ux,'bottom');

	}

	

}



DWPE_PanelFactory_Class._manageTabOverflow = function($ux,position)

{



	var selected_tab=$ux.data('current-tab');



	//determine if scrollbars are in effect

	var pH=$ux.parent().innerHeight();

	var pSH=$ux.parent().attr("scrollHeight");

	var scrollbar_width=(pSH>pH)?DWPE_Utilities.getScrollbarWidth():0;

	

	//console.log(sH,h);

	

	//determine our parent's size

	var pW=$ux.parent().width()-scrollbar_width;

	

	//determine how much size we can take and apply it to our container

	var size=$ux.data('size');

	

	if(size==null) return;

	

		if(size.indexOf('%')>-1)

		{

			size=(parseInt(size)/100)*pW;

		}

		else

		{

			size=parseInt(size);

		}

	$ux.width(size);

	

	

	

	//now find the size we can allocate to tabs

	var avail_size=$ux.find(">DIV.tabs-container."+position+">DIV.left").width();

	

	

	//console.log(size,avail_size)

	

	

	/*if we take up more room than our parent offers (w>size)

	  we have triggered an overflow condition*/

	 

	

	

	//undhide our overflow button so it can be counted in scrollWidth calculations

	

	

	

	

	var $overflow_fore=$ux.find(">DIV.tabs-container."+position+" LI.fore").show();

	var $overflow_aft=$ux.find(">DIV.tabs-container."+position+" LI.aft").show();

	

			

	var overflown=false;

	

	//set width to the width of our overflow controls, to ensure they have room to paint if we need them

	var w=$overflow_fore.outerWidth(true);

	    w+=$overflow_aft.outerWidth(true);

		//w+=100; //add a fudge factor

	

	//console.log(w);

	

	//get static values for first and last tab

	var first_tab=$ux.data("first-tab");

	var last_tab=$ux.data("last-tab");

	



	//grab our tabs, we do it each time to catch tabs that may have arrived dynamically

	var $tabs=$ux.find(">DIV.tabs-container."+position+">DIV.left>UL.dwpe-tabs>LI.dwpe-tab");

	var $last=null;

	

	//set all our tabs to hidden so we can fairly test if we are within bounds

	$tabs.hide();

	var num_visible_tabs=0;

	var shown_tabs=0;

	

	$tabs.each(

	

		function(i)

		{

			if(i>=first_tab) 		 		

			{

			

				var $tab=$(this);

				

				

				//store the i value as the tab's index, used later if the tab is clicked in an overflow menu

				$tab.data('tab-index',i);

				

				//don't count hidden tabs

				if($tab.hasClass('hidden')==false)

				{

				

					num_visible_tabs++;

					

					//show the tab so we can measure it

					$tab.removeClass('last');

					$tab.show();

					

					

					

					//add the width of this tab to our total width

					w+=$tab.outerWidth(true);

					

					if(w>avail_size) 		 		//we are out of bounds so hide it again and set the overflown flag

					{

						

						/*check to make sure our selected tab is visible

						sometimes when its the last tab in the visible set before its selected it can

						get knocked off the visible set after overflow calculations are performed	

						this check ensures we always show our visible tab

						*/

					

						if(i!=selected_tab)

						{

							$tab.hide();

							overflown=true;

						}

					}

					else					//we are still in bounds and record this tab position as last tab, because it may be

					{

						last_tab=i;

						$last=$tab;

						shown_tabs++;

					}

				

				}

				

				

				

			}

			

			

		}

	

	);

	

	//store off first and last tabs, in case they have just changed

	$ux.data("first-tab",first_tab);

	$ux.data("last-tab",last_tab);

	

	//set the last visible tab as last (tiertiary)

	if($last)$last.addClass('last');

	

	

	

	//console.log(w,pW,size)

	

	//manage the display of the overflow controls

	if(first_tab>0)

		$overflow_fore.show();

	else

		$overflow_fore.hide();

		

	if(overflown)

		$overflow_aft.show();

	else

		$overflow_aft.hide();



}





DWPE_PanelFactory_Class.handleTabOverflowClick = function($ux,$overflow_btn)

{

	

	var type=($overflow_btn.hasClass('fore'))?"fore":"aft";

	

	

	//make a overflow menu object

	var menu_id="tabset-overflow";

	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);

	var $menu_body=$("#"+menu_id+"-body");

	

	

	//get static values for first and last tab

	var first_tab=$ux.data("first-tab");

	var last_tab=$ux.data("last-tab");

	

	/*determine the outlier tabs and append them to an overflow menu body */

	$ux.find("UL.dwpe-tabs:first>LI.dwpe-tab:hidden").each

	(

		function()

		{

			var $tab=$(this);

			var tab_index=$tab.data("tab-index");

			

			if(type=='fore' && tab_index>first_tab) return;

			else if(type=='aft' && tab_index<last_tab) return;

			

			

			

			//clone the tab, show it and append it to the overflow menu body

			var $c=$tab.clone(true);

			$c.show();

			$c.css('display','block'); //force it to block to paint vertically within the menu

			$menu_body.append($c);

			

			//remove icons from menu itemss

			$c.find("span.icons").remove();

			

			//bind a click event to the item which sets this tab as the firt tab

			

			if($c.hasClass('disabled')==false)

			{	$c.click(

			

					function()

					{

						

						

						$ux.data("first-tab",$tab.data('tab-index'));

					

					

						//now that we have presumably changed tab first position, force tabs to re-layout

						DWPE_PanelFactory_Class.manageTabOverflow($ux);

					}

				

				);

			}				

					

		}

	);



	

	

	//set the state of the overflow-control to active	

	$overflow_btn.addClass("active");

	

	//position the window relative to the overflow control

	DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);

	

	/*window class calls this method after the user has made a selection and just before the window 

	 group will be dismissed*/

	$overflow_btn.bind(		

		"cleanup",

		function(e)

			{

				//set the state of the overflow-control to normal	

				$overflow_btn.removeClass('active');

			}

		);

	

	

	

	

}





DWPE_PanelFactory_Class.openGlobalTab=function($ux,$tab,index)

{

	$ux.find('.dwpe-tab.global').removeClass('selected');

	$tab.addClass('selected');

	updateGlobalSplitter(index);

	

}





function showNamedTab(name)

{

	var $tab=$("li.dwpe-tab[name='"+name+"']:eq(0)");

		

		if($tab.length==0) return;

		

		

		$tab.removeClass('hidden');

		$tab.trigger("click");

		

}





function hideNamedTab(name)

{

	var $tab=$("li.dwpe-tab[name='"+name+"']:eq(0)");

		

		if($tab.length==0) return;

		

	var $sibling_tab=$tab.prev("li.dwpe-tab");

		$sibling_tab=($sibling_tab.length==0)?$sibling_tab.next("li.dwpe-tab"):$sibling_tab;

		

		if($sibling_tab.length==0) return;

		

			$sibling_tab.trigger("click");

			$tab.hide();

			$tab.addClass('hidden');

}







/* /DWPE/components/js/DWPE_SampleData.js */

ux_data={};

ux_data["sample-toolbar-short"]={
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveleft",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"add",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"edit",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Button"
		}
	]
};




ux_data["table-toolbar"]=
{
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"add",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"edit",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_TableFactory.deleteRow()",
		"target":"_javascript",
		"iconId":"delete",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicButton",
		"label":"Toggle QBE",
		"url":"DWPE_TableFactory.toggleQBE()",
		"target":"_javascript",
		"selected":"1",
		"iconId":"qbe",
		"tooltip":""
		}
		
		
	]
};

ux_data["sample-toolbar-medium"]={
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"wrap",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"go-to-top",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"RadioButtonGroup",
		"button_style":"IconicButton",
		"label":"Radio Button Group",
		"items":[
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 0",
			"iconId":"add",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 1",
			"url":"#",
			"target":"_self",
			"iconId":"edit",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 2",
			"url":"#",
			"target":"_self",
			"iconId":"delete",
			"tooltip":"Radio Button Group"
			}
	]
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"TextButton",
		"label":"Text Button ",
		"url":"#",
		"iconId":"duplicate",
		"target":"_self",
		"tooltip":"Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"InlineSelector",
		"button_style":"0",
		"label":"Inline Selector",
		"tooltip":"Inline Selector",
		"url":"#",
		"target":"_self",
		"iconId":"freezecolumn"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicTextButton",
		"label":"Toggle Button",
		"url":"#",
		"target":"_self",
		"iconId":"warning",
		"tooltip":"Toggle Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"movetop",
		"tooltip":"Iconic Text Button"
		}
	]
};

ux_data["sample-toolbar-long"]={
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"wrap",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"go-to-top",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"RadioButtonGroup",
		"button_style":"IconicButton",
		"label":"Radio Button Group",
		"items":[
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 0",
			"iconId":"add",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 1",
			"url":"#",
			"target":"_self",
			"iconId":"edit",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 2",
			"url":"#",
			"target":"_self",
			"iconId":"delete",
			"tooltip":"Radio Button Group"
			}
	]
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"TextButton",
		"label":"Text Button ",
		"url":"#",
		"iconId":"duplicate",
		"target":"_self",
		"tooltip":"Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"InlineSelector",
		"button_style":"1",
		"label":"In. Sel. Split",
		"tooltip":"Inline Selector Split",
		"url":"#",
		"target":"_self",
		"iconId":"freezecolumn"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicTextButton",
		"label":"Toggle Button",
		"url":"#",
		"target":"_self",
		"iconId":"warning",
		"tooltip":"Toggle Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"movetop",
		"tooltip":"Iconic Text Button"
		}
	]
};

ux_data["sample-tree-context-menu-short"] = {
	"_class":"DWPE_WindowFactory_Class",
	"type":"contextmenu",
	"items":[{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Expand",
		"key":"",
		"cmd":"javascript::DWPE_Tree.expand(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Collapse",
		"key":"",
		"cmd":"javascript::DWPE_Tree.collapse(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Expand All Below",
		"key":"",
		"cmd":"javascript::DWPE_Tree.expandAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
    	"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Collapse All Below",
		"key":"",
		"cmd":"javascript::DWPE_Tree.collapseAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Expand All",
		"key":"",
		"cmd":"javascript::DWPE_Tree.expandAll(DWPE_Tree.getTree($(this)))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Collapse All",
		"key":"",
		"cmd":"javascript::DWPE_Tree.collapseAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
	    "_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"----------",
		"key":"",
		"item_type":"separator",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Show as Top",
		"cmd":"javascript::DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree($(this))))",
		"key":"",
		"item_type":"normal",
		"items":[]
	}]
};
    
ux_data["sample-tree-toolbar-short"] = {
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goUp(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-up",
		"tooltip":"Go Up"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goToTop(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-to-top",
		"tooltip":"Go to Top"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree(this)));",
		"target":"_javascript",
		"iconId":"show-as-top",
		"tooltip":"Show as Top"
	}]
};

ux_data["sample-tree-toolbar-long"] = {
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goUp(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-up",
		"tooltip":"Go Up"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goToTop(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-to-top",
		"tooltip":"Go to Top"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree(this)));",
		"target":"_javascript",
		"iconId":"show-as-top",
		"tooltip":"Show as Top"
	},{
    	"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"wrap",
		"tooltip":"Iconic Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"go-to-top",
		"tooltip":"Iconic Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"RadioButtonGroup",
		"button_style":"IconicButton",
		"label":"Radio Button Group",
		"items": [{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 0",
			"iconId":"add",
			"tooltip":"Radio Button Group"
		},{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 1",
			"url":"#",
			"target":"_self",
			"iconId":"edit",
			"tooltip":"Radio Button Group"
		},{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 2",
			"url":"#",
			"target":"_self",
			"iconId":"delete",
			"tooltip":"Radio Button Group"
		}]
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"TextButton",
		"label":"Text Button ",
		"url":"#",
		"iconId":"duplicate",
		"target":"_self",
		"tooltip":"Text Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"InlineSelector",
		"button_style":"1",
		"label":"In. Sel. Split",
		"tooltip":"Inline Selector Split",
		"url":"#",
		"target":"_self",
		"iconId":"freezecolumn"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicTextButton",
		"label":"Toggle Button",
		"url":"#",
		"target":"_self",
		"iconId":"warning",
		"tooltip":"Toggle Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Text Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"movetop",
		"tooltip":"Iconic Text Button"
	}]
};

/* /DWPE/components/js/DWPE_PageHeader.js */

/*generates markup for the page header that gets output to scratchpad*/

DWPE_PanelFactory_Class.prototype.generatePageheaderMarkup=function(args)

{

	

	var currentTime = new Date()

	var month = currentTime.getMonth() + 1

	var day = currentTime.getDate()

	var year = currentTime.getFullYear()

		

	var markup="";	

	markup+='<ux:panels class="dwpe-header">';

	//markup+='\r\t<div class="dwpe-subheader-panel" style="display:block">';

	

	//if(args.icon)

	//	markup+='\r\t\t'+DWPE_Utilities.getIconMarkup(args.icon);	

	

	

	

	markup+='<div class="dwpe-pageheader-label">'

	markup+=args.label;

	

	

	if(args.choicelist == "choicelist-yes")

		markup+='\r\t\t<span title="Content-Switcher" class="choice-list"></span>';

	

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'record-info','command':'','tooltip':'Record Information'});

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'uap','command':'','tooltip':'UAP'});

	

	

	markup+='</div>';	

	

	

	if(args.toolbar.length>0 && args.toolbar!="none")			

		markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";

					

	

	markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top' width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";		

	

	markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';

	markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();

	markup+='\r\t\t</div>';

	//markup+='\r\t</div>\n';



	markup+='</ux:panels>';

	

	return markup;

}



/*initializes an header with header style and behavior*/

DWPE_PanelFactory_Class.prototype.initializePageheader=function($ux)

{	

	var markup="";

	var $title=$ux.find('>DIV.dwpe-pageheader-label');



	

	//create a  container to hold our title and toolbar on one line with resize awareness

	var $container=$("<div class='title-container'>"+

						"<div class='left'></div>"+

						"<div class='right'></div>"+

					"</div>");



	//place title to the left

	$container.find(">DIV.left").append($title);

	

	//place toolbar to the right

	var $toolbar=$ux.find(">.dwpe-toolbar");

	if($toolbar && $toolbar.length>0)

	{	$container.find(">DIV.right").append($toolbar);	}

	else //no toolbar so give left all the width it can have

	{

		$container.find(">DIV.right").width("1%");

		$container.find(">DIV.left").width("99%");

	}

	

	

	//insert container inside $ux, above everything else

	$ux.prepend($container);

	

	

	//single select choice list on-click event

	$title.find('>SPAN.choice-list').click(function()

			{		

				var $callee=$(this);

				var menu_id=$callee.attr("id")+"-menu";

				var group=null; //append to the last group

				var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);

				var $overflowMenuBody=$("#"+menu_id+"-body");

				$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");

			});	



	

	

														

}

/* /DWPE/components/js/DWPE_SubHeader.js */

/*generates markup for the page sub header that gets output to scratchpad*/

DWPE_PanelFactory_Class.prototype.generateSubheaderMarkup=function(args)

{	

	var currentTime = new Date()

	var month = currentTime.getMonth() + 1

	var day = currentTime.getDate()

	var year = currentTime.getFullYear()

		

	var markup="";	

	markup+='<ux:panels class="dwpe-subheader '+args.disclosure+' '+args.choicelist+' dwpe-subheader-indent">';

	//markup+='\r\t<div class="dwpe-subheader-panel" style="display:block">';

	

	var icon_name = args.icon;

	//only if header icon display

	

	

	markup+='<div class="dwpe-subheader-label">';

	

	//disclosure

	markup+='<span title="Expand/Collapse Subheader" class="dwpe-header-disclosure '+args.disclosure+'"></span>';



	if(args.icon && icon_name == "person")

		markup+='\r\t\t'+DWPE_Utilities.getIconMarkup(args.icon);	

	

	markup+=args.label;

	

	if(args.choicelist == "choicelist-yes")

		markup+='\r\t\t<span class="choice-list"></span>';

	

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'record-info','command':'','tooltip':'Record Information'});

	

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'uap','command':'','tooltip':'UAP'});

	

	

	markup+='</div>';

	

	

	

	if(args.toolbar.length>0 && args.toolbar!="none")			

		markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";

					

	

	markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top' width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";		

	

	markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';

	markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();

	markup+='\r\t\t</div>';

	//markup+='\r\t</div>\n';

	markup+='</ux:panels>';

	

	return markup;

}





/*initializes an sub-header with sub-header style and behavior*/

DWPE_PanelFactory_Class.prototype.initializeSubheader=function($ux)

{		

	var markup="";

	

	

	//markup+='<span class="dwpe-header-title"></span>';

	

	//title

	var $title=$ux.find('>DIV.dwpe-subheader-label');

	//markup+=$title.text();

	

	//markup+='<span class="after-header-title"></span>';

	

	//$title.html(markup);

	

	//choice-list	

	//var markup2 ="";

	//var $choice = $ux.find('SPAN.choicelist');

	//if($choice && $choice.length >0)

	// 	markup2+='<span title="Content Switcher" class="choice-list"></span>';

	

	//help

	//markup2+='<span title="Definition text">'+DWPE_Utilities.getIconMarkup("uap")+'</span>';

	

	//recompose title	

	//$title.append(markup2);

	

	//get handle to the disclosure icon

	var $disc=$ux.find('.dwpe-header-disclosure');

		

	//if icon exists insert it after disclosure icon

	//var $icon=$ux.find('>SPAN.icons');

	//if( $icon && $icon.length>0  ){ //header icon

	//	$icon.insertAfter($disc);

	//}

			

	//create a  container to hold our title and toolbar on one line with resize awareness

	var $container=$("<div class='title-container'>"+

						"<div class='left'></div>"+

						"<div class='right'></div>"+

					"</div>");



	//place title to the left

	$container.find(">DIV.left").append($title);

	

	//place toolbar to the right

	var $toolbar=$ux.find(">.dwpe-toolbar");

	if($toolbar && $toolbar.length>0)

	{	$container.find(">DIV.right").append($toolbar);	}

	else //no toolbar so give left all the width it can have

	{

		$container.find(">DIV.right").width("1%");

		$container.find(">DIV.left").width("99%");

	}

	

	

	//insert container inside $ux, above everything else

	$ux.prepend($container);

	

	

	//single select choice list on-click event

	$title.find('>SPAN.choice-list').click(function()

			{		

				var $callee=$(this);

				var menu_id=$callee.attr("id")+"-menu";

				var group=null; //append to the last group

				var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);

				var $overflowMenuBody=$("#"+menu_id+"-body");

				$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");

			});	

	

	

	//manage panel state

	var $panel=$ux.find('>DIV.header-panel');

	if($disc.hasClass("collapsed"))

	{

		$panel.hide();

	}

	else

	{

		$panel.show();

	}

	

	

	//disclosure on-click event

	$disc.click( 

			function(event, ui)

			{				

				var $disc = $(this);

				

				if( $disc.hasClass('expanded') ) 

				{

					$disc.removeClass('expanded');

					$disc.addClass('collapsed');

					$panel.slideUp(500);

				}

				else

				{

					$disc.removeClass('collapsed');

					$disc.addClass('expanded');

					$panel.slideDown(500);

				}	

			}

		);								

}

/* /DWPE/components/js/DWPE_SubSubHeader.js */

/*generates markup for the page sub-subheader that gets output to scratchpad*/

DWPE_PanelFactory_Class.prototype.generateSubsubheaderMarkup=function(args)

{

	var currentTime = new Date()

	var month = currentTime.getMonth() + 1

	var day = currentTime.getDate()

	var year = currentTime.getFullYear()

		

	var markup="";	

	markup+='<ux class="dwpe-subsubheader '+args.disclosure+' '+args.choicelist+' dwpe-subheader-indent">';

	//markup+='\r\t<div class="dwpe-subheader-panel" style="display:block">';

	/*var icon_name = args.icon;

	//only if header icon display

	if(args.icon && icon_name == "person")

		markup+='\r\t\t'+DWPE_Utilities.getIconMarkup(args.icon);	*/

	

	markup+='\r\t\t<div class="dwpe-subsubheader-label">\r\t\t\t'+args.label+'\r\t\t</div>';	

	

	if(args.choicelist == "choicelist-yes")

		markup+='\r\t\t<span class="choicelist"></span>';

		

	if(args.toolbar.length>0 && args.toolbar!="none")			

	markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";

					

	

	markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top'  width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";		

	

	markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';

	markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();

	markup+='\r\t\t</div>';

	//markup+='\r\t</div>\n';

	markup+='</ux>';

	

	return markup;

}



/*initializes an sub-subheader with sub-subheader style and behavior*/

DWPE_PanelFactory_Class.prototype.initializeSubsubheader=function($ux)

{	

	var markup="";

	

	//disclosure

	var state=($ux.hasClass('expanded'))?"expanded":"collapsed";

	markup+='<span title="Expand/Collapse Subheader" class="dwpe-header-disclosure '+state+'"></span>';



	//title

	var $title=$ux.find('>DIV.dwpe-subsubheader-label');

	markup+=$title.text();

	

	markup+='<span class="after-header-title"></span>';

	

	$title.html(markup);

	

	//choice-list	

	var markup2 ="";

	var $choice = $ux.find('SPAN.choicelist');

	if($choice && $choice.length >0)

	 	markup2+='<span title="Content Switcher" class="choice-list"></span>';

	

	//help

	markup2+='<span title="Definition text">'+DWPE_Utilities.getIconMarkup("uap")+'</span>';

	

	//recompose title	

	$title.append(markup2);

	

	//get handle to the disclosure icon

	var $disc=$ux.find('.dwpe-header-disclosure');

	

	//if icon exists insert it after disclosure icon

	/*var $icon=$ux.find('>SPAN.icons');

	if( $icon && $icon.length>0  ) //header icon

		$icon.insertAfter($disc);*/

		

		

	

	//create a  container to hold our title and toolbar on one line with resize awareness

	var $container=$("<div class='title-container'>"+

						"<div class='left'></div>"+

						"<div class='right'></div>"+

					"</div>");



	//place title to the left

	$container.find(">DIV.left").append($title);

	

	//place toolbar to the right

	var $toolbar=$ux.find(">.dwpe-toolbar");

	if($toolbar && $toolbar.length>0)

	{	$container.find(">DIV.right").append($toolbar);	}

	else //no toolbar so give left all the width it can have

	{

		$container.find(">DIV.right").width("1%");

		$container.find(">DIV.left").width("99%");

	}

	

	

	//insert container inside $ux, above everything else

	$ux.prepend($container);

	

	

	//single select choice list on-click event

	$title.find('>SPAN.choice-list').click(function()

			{		

				var $callee=$(this);

				var menu_id=$callee.attr("id")+"-menu";

				var group=null; //append to the last group

				var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);

				var $overflowMenuBody=$("#"+menu_id+"-body");

				$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");

			});	

	

	

	//manage panel state

	var $panel=$ux.find('>DIV.header-panel');

	if(state=="collapsed")

	{

		$panel.hide();

	}

	else

	{

		$panel.show();

	}

	

	

	//disclosure on-click event

	$disc.click( 

			function(event, ui)

			{				

				var $disc = $(this);

				

				if( $disc.hasClass('expanded') ) 

				{

					$disc.removeClass('expanded');

					$disc.addClass('collapsed');

					$panel.slideUp(500);

				}

				else

				{

					$disc.removeClass('collapsed');

					$disc.addClass('expanded');

					$panel.slideDown(500);

				}	

			}

		);	

		

}

/* /DWPE/components/js/DWPE_FormFactory_Class.js */

/*DWPE_FormFactory_Class.js*/




/*Set the class that our class will inherit from*/
DWPE_FormFactory_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_FormFactory_Class.constructor=DWPE_FormFactory_Class;
DWPE_FormFactory_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_FormFactory_Class()
{
	this._class="DWPE_FormFactory_Class";
	
	
	
	//setup form field validation using live events
	$(':input,a,ux,select').live('blur',
	
		function()
		{
			
			
			var $ux;
			var $fld=$(this);
			var value=$fld.val();
			var notes=new Array();
			
			//if we have a note window, remove it
			if($fld.data('note-window'))
			{	
				$fld.data('note-window').remove();
				$fld.removeData('note-window');
			
			}
			
			
			if(	$fld[0].tagName.toLowerCase()=='input' && 
							(	$fld[0].type.toLowerCase()=='radio' 
								|| 
								$fld[0].type.toLowerCase()=='checkbox'	)
				)
						{
							 $ux=$fld.closest("ux");
							
							if($ux.data("note-window"))
							{	$ux.data('note-window').remove();
							 	$ux.removeData('note-window');		}
						}
			
			
			
			if($fld.hasClass('number') && ( isNaN(value) || value.length==0))
			{
				$fld.addClass('error');
				notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																'Error: You must enter a number',
																'This field requires a numeric value.') 
						   );
			}
			
			
			if($fld.hasClass('pos-number') && ( isNaN(value) || value.length==0 || value<0))
			{
				$fld.addClass('error');
				notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																'Error: You must enter a positive number',
																'This field requires a numeric value that is greater than zero.') 
						   );
			}
			
			
			if($fld.hasClass('email') && ( value.length==0 || value.indexOf("@")==-1))
			{
				$fld.addClass('error');
				notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																'Error: You must enter a valid email address',
																'This field requires an email address.') 
						   );
			}
			
			if($fld.hasClass('zip') && ( value.length!=5))
			{
				$fld.addClass('error');
				notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																'Error: You must enter a valid zip code',
																'This field requires an zip code.') 
						   );
			}
			
			
			if($fld.hasClass('neg-number') && ( isNaN(value) || value.length==0 || value>=0))
			{
				$fld.addClass('error');
				notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																'Error: You must enter a negative number',
																'This field requires a numeric value that is less than zero.') 
						   );
			}
			
			
			if($fld.hasClass('phone') && value.length>0)
			{
				var error=false;
				var digits = "0123456789";
				var phoneNumberDelimiters = "()- ext.";
				var validWorldPhoneChars = phoneNumberDelimiters + "+";
				var minDigitsInPhoneNumber = 10;
				var phoneNumber="";
				
				
				for (var i = 0; i < value.length; i++)
				{
					
					var c = value.charAt(i);
					if (validWorldPhoneChars.indexOf(c) == -1) 
						phoneNumber += c;
				}
				
				
				if(isNaN(phoneNumber)) error=true;
				if(phoneNumber.length<minDigitsInPhoneNumber) error=true;
				
				
			
				if(error==true)
				{
					$fld.addClass('error');
					notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																	'Error: You must enter a phone number',
																	'This field requires a phone number of the form (999) 999-9999.') 
							   );
				}
			}
			
			
			
			
			
			
			if($fld.hasClass('required') && value.length==0)
			{
				$fld.addClass('error');
				notes.push(	DWPE_WindowFactory.formatMessage(	DWPE_Utilities.getIconMarkup('error'),
																'Error: You must enter a value',
																'This field requires that a value be provided.') 
						   );
			}
			
			if(notes.length>0)
			{
				$fld.data('notes', notes.join(""));
			}
			else
			{
				$fld.removeClass('error');
				$fld.removeClass('warning');
				
				$fld.removeData('notes');
			}
			
			
			
			return false;

		}
		
		
		
	);
	
	//evaluate a field to see if it has as note window to show
	$(":input,a,select").live('focus',
				
				function()
					{	
						
						var $fld=$(this);
						
						if(	$fld[0].tagName.toLowerCase()=='input' && 
							(	$fld[0].type.toLowerCase()=='radio' 
								|| 
								$fld[0].type.toLowerCase()=='checkbox'	)
							
							)
						{
							 $fld=$fld.closest("ux");
						
						}
						
						//console.log($fld)
						
						var notes=$fld.data('notes');
						var help=$fld.attr('help');
						var $win=null;	
						
						
							
							
						if(notes)
						{
							var type=$fld.hasClass('error')?'error':'';
							type=$fld.hasClass('warning')?'warning':type;
							
							$win=DWPE_WindowFactory.openNoteWindow($fld,type,notes);
							$fld.data('note-window',$win);	
							
						}
						else if(help)
						{
							
							$win=DWPE_WindowFactory.openNoteWindow(	$fld,
																	'help',
																	DWPE_WindowFactory.formatInfieldHelp(help)
																   )											
							
							$fld.data('note-window',$win);
						}
						else
						{
							$fld.data('note-window',null);
						}
						
						
						
						
						return false;
					}
				);
	
	
	
	
	return this;	

}

/*Make an Instance of Panel Factory that others can call on to create buttons*/
DWPE_FormFactory=new DWPE_FormFactory_Class();




/*overrides DWPE_Base_Class.update()*/
DWPE_FormFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}


DWPE_FormFactory_Class.prototype.setDefaultValue=function(name,value)
{
	if(!this.properties[name]) this.properties[name]=value;
}




DWPE_FormFactory_Class.prototype.generateMarkup=function(args)
{

	switch(args.type.toLowerCase())
	{
		case 'checkbox':
			return this.generateCheckBoxMarkup(args); 
			break;
		case 'textbox':
			return this.generateTextBoxMarkup(args);
			break;
		case 'textarea':
			return this.generateTextAreaMarkup(args);
			break;
		case 'prompt':
			return this.generatePromptMarkup(args);
			break;
		case 'fileupload':						
			return this.generateFileUploadMarkup(args);
			break;		
		case 'singleselectchoicelist':
			return this.generateSingleSelectChoiceListMarkup(args);
			break;		
		case 'spinbox':			
			return this.generateSpinBoxMarkup(args);
			break;	
		case 'radiogroup':
			return this.generateRadioGroupMarkup(args); 
			break;			
		case 'multiselectlistbox':
			return this.generateMultiSelectListBoxMarkup(args); 
			break;
		case 'multiselectchoicelist':
			return this.generateMSCLMarkup(args); 
			break;
		case 'datetimepicker':
			return this.generateDateTimePickerMarkup(args); 
			break;
		case 'lov':
			return this.generateLOVMarkup(args); 
			break;
		case 'link':
			return this.generateLinkMarkup(args);
		case 'blank':
			return "";
			
			break;
	}


}



DWPE_FormFactory_Class.prototype.make=function($ux)
{
	
	var _class=$ux.attr("class").toLowerCase();
				_class=_class.split(" ");
				_class=_class[0]; //pick off the first value in the css class and use it to make our class
	
	if($ux.data("initialized")) return;
	   $ux.data("initialized",true);	
	
	switch(_class)
		{
			case "dwpe-label":
			case "dwpe-textbox":
			case "dwpe-textarea":
			case "dwpe_checkbox":				
			case "dwpe_radiogroup":				
			case "dwpe-fileupload":
				//no post processing required
				break;
			
			case "dwpe-singleselectchoicelist":
				this.initializeSingleSelectChoiceList($ux);
				break;
				
			case "dwpe-spinbox":
				this.initializeSpinBox($ux);
				break;	
				
			case "dwpe-multiselectlistbox":
			    this.initializeMultiSelectListBox($ux);
				break;

			case "dwpe-multiselectchoicelist":
				this.initializeMSCL($ux);
				break;
			case "dwpe-datetimepicker":
				this.initializeDateTimePicker($ux);
				break;
			case "dwpe-lov":
				this.initializeLOV($ux);
				break;
		}
	
}







DWPE_FormFactory_Class.prototype.generatePromptMarkup=function(args)
{
	var markup="";


	var definition="";
	if(args.definition && args.definition.length>1)
	{
		definition=DWPE_Utilities.getIconMarkup('term-def');
		definition=definition.replace(/%DEFINITION%/,args.definition);
	}
	
		markup+='<ux class="dwpe-prompt '+args.state+" "+args.style+" " +args.wrap+ '" >';
		markup+=DWPE_Utilities.getIconMarkup(args.required)+
				definition+
				args.label;
		markup+=DWPE_Base_Class.getArgsAsString(args);
		markup+="</ux>";
		return markup;

}


DWPE_FormFactory_Class.prototype.generateTextBoxMarkup=function(args)
{
	var markup='';
	var help=(args.help)?' help="'+args.help+'"':"";
	var required =(args.required)?' required':'';
	
	markup+='<ux class="dwpe-textbox"><input class="dwpe-textbox '+ args.state + ' '+ args.alignment + ' ' + required + '" value="'+ args.text +'"';
	if (args.state == 'disabled' || args.state == 'read-only' ) markup+=' disabled="disabled" ';
	markup+=help;
	markup+='/>';
	markup+=DWPE_Base_Class.getArgsAsString(args);	
	markup+='</ux>';

	return markup;
}

DWPE_FormFactory_Class.prototype.generateSpinBoxMarkup=function(args)
{
	var markup='';
	var help=(args.help)?' help="'+args.help+'"':"";
	var required =(args.required)?' required':'';

	markup+='<ux class="dwpe-spinbox ' + args.state +' '+ required + '"';
	if (args.default_value) markup+=' current="'+ args.default_value +'" ';
	if (args.min_value) markup+=' min="'+ args.min_value +'" ';
	if (args.max_value) markup+=' max="'+ args.max_value +'" ';
	if (args.increment) markup+=' increment="'+ args.increment +'" ';
	if (args.number_length) markup+=' number_length="' + args.number_length + '" ';
	markup+=help+">";
	markup+= DWPE_Base_Class.getArgsAsString(args);
	markup+='</ux>\r\n';
	return markup;
}

DWPE_FormFactory_Class.prototype.spinnerOnClick=function(objId,action)
{	
	var $ux = $('#'+objId);
	if ( $ux.hasClass('disabled') || $ux.hasClass('read-only') ) return;
	var curVal 	= parseFloat ( $ux.attr('current') );
	var minVal 	= parseFloat ( $ux.attr('min') );
	var maxVal 	= parseFloat ( $ux.attr('max') );
	var stepVal	= parseFloat ( $ux.attr('increment') );
	
	if ( action == 'up') // Increment
	{
		if (curVal < maxVal && curVal+stepVal <= maxVal )
		{
			curVal += +stepVal;
		}
	} else {	// Decrement
		if (curVal > minVal && curVal-stepVal >= minVal )
		{
			curVal += -stepVal;
		}
	}
	$ux.attr('current',curVal)
	if ( $ux.attr('number_length') > 0  && curVal >= 0 )
	{
		curVal = this.formatSpinResult($ux.attr('current').length, $ux.attr('number_length')) + parseFloat(curVal);
	}
	
	precision = $ux.attr('increment').split('.'); 
	if(typeof(precision[1]) !== 'undefined' && precision[1] != null)
	{
		var precisionLength = precision[1].length;
		curVal = curVal.toFixed(precisionLength);
	}
	
	if (curVal <= 0)
	{
		curVal = this.formatSpinResult($ux.attr('current').length, $ux.attr('number_length')) + parseFloat(curVal);
		curVal = curVal + ''
		if ( $ux.attr('number_length') >= 2 )
	  	{
			curVal = '-' + curVal.replace('-','0');
	  	}
	}
	
	$ux.find("input").val( curVal );
}
DWPE_FormFactory_Class.prototype.formatSpinResult=function(number,number_length)
{
	current_len = parseFloat(number);
	desired_len = parseFloat (number_length);
	pad = desired_len - current_len;
	var padding = ''; 

	for (var i=0;i< pad;i++)
	{ 
		padding += + '0'; 
	}
	return padding ;
}

DWPE_FormFactory_Class.prototype.initializeSpinBox=function($ux)
{
	var objId = DWPE_Utilities.getUniqueId();
	$ux.attr('id',objId);
	$ux.append('<input class="number" />');
	$('#'+objId+' input').click(function(e){
		var $fld=$(this);
		if ( (e.layerX) < $fld.width() + 7 )
		{
			return;
		} else {
			if ( e.layerY < 7 )
			{
				DWPE_FormFactory.spinnerOnClick(objId,'up')
			} else {
				DWPE_FormFactory.spinnerOnClick(objId,'down')
			}
		}
	});	

	$('#'+objId+' input').mouseout(function(e){
		$fld.attr('class','number');
	})

	$('#'+objId+' input').mousemove(function(e){
		var $fld=$(this);
		if ( (e.layerX) < $fld.width() +10 )
		{
			$fld.attr('class','number');
			return;
		} else {
			if ( (e.layerY) < 7 )
			{
				$fld.attr('class','number').addClass('hover-up');
			} else {
				$fld.attr('class','number').addClass('hover-down');
			}
		}
	});	

	$('#'+objId+' input').mousedown(function(e){
		var $fld=$(this);
		if ( (e.layerX) < $fld.width() +10 )
		{
			$fld.attr('class','number');
			return;
		} else {
			if ( (e.layerY) < 7 )
			{
				$fld.attr('class','number')
				.addClass('up');
			} else {
				$fld.attr('class','number')
				.addClass('down');
			}
		}
	});	

	$('#'+objId+' input').mouseup(function(e){
		var $fld=$(this);
		if ( (e.layerX) < $fld.width() +10 )
		{
			$fld.attr('class','number')			
			return;
		} else {
			if ( (e.layerY) < 7 )
			{
				$fld.attr('class','number')			
				.addClass('hover-up');
			} else {
				$fld.attr('class','number')			
				.addClass('hover-down');
			}
		}
	});
	var $fld=$ux.find("input")
	var curVal = $ux.attr('current');
	$ux.attr('id',objId);
	if ( $ux.attr('width') ) $ux.find("input").css('width', $ux.attr('width') );
	
	if ( $ux.attr('number_length') > 0 )
	{
		curVal = this.formatSpinResult($ux.attr('current').length, $ux.attr('number_length')) + curVal;
	}	
	
	if ( $ux.attr('current') ) $fld.val( curVal  );
	if ( $ux.attr('help') ) $fld.attr( 'help', $ux.attr('help') );
	if ( $ux.hasClass('disabled') || $ux.hasClass('read-only') ) $fld.attr( 'disabled','disabled' );	
	if ( $ux.hasClass('required') )
	{
		$ux.find("input").addClass('required');
		$fld.addClass( 'required' );
	};
}

DWPE_FormFactory_Class.prototype.generateSingleSelectChoiceListMarkup=function(args)
{
	var markup="";
	var selectedItem = ""
	var help=(args.help)?' help="'+args.help+'"':"";
	var required =(args.required)?' required':'';
	
	markup+='<ux class="dwpe-singleselectchoicelist">\r\n'; 
	
	markup+="\t<select class='dwpe-singleselectchoicelist "+args.state+" "+ required+"'";
	if (args.state == "disabled" || args.state == "read-only" ) markup+=" disabled='disabled' ";
	markup+=help;
	markup+=">\r\n";
		
	for(var i in args.items)
	{
		var item=args.items[i];
		var display_text=(item.label.toLowerCase()=="blank")?" ":item.label;
		
		markup+="\t\t<option";
		if (item.value) markup+=" value='"+item.value+"' ";
		if (item.selected == 'yes')
		{
			markup+=' selected="selected"';
			selectedItem = item.label;
		}
		markup+=">"+ display_text +"</option>\r\n";
	}
	
	markup+="\t</select>\r\n";
	markup+=DWPE_Base_Class.getArgsAsString(args);
	markup+="</ux>\r\n";
	
	return markup;
	
}
DWPE_FormFactory_Class.prototype.initializeSingleSelectChoiceList=function($ux)
{
	if ( $ux.find('select').hasClass('read-only') )
	{
		$ux.html( '<span class="dwpe-singleselectchoicelist read-only">' + $ux.find('select').val() + '</span>' );
	}
}


DWPE_FormFactory_Class.prototype.generateTextAreaMarkup=function(args)
{
	var markup="";
	
	var help=(args.help)?' help="'+args.help+'"':"";
	var required =(args.required)?' required':'';
	
	markup+="<ux class='dwpe-textarea'><textarea class='dwpe-textarea "+args.state+' '+required+"'";
	if (args.state == "disabled" || args.state == "read-only" ) markup+=" disabled='disabled' ";
	if ( args.height ) markup+=" style='height:" + args.height + "' ";
	
	markup+=help;
	
	 
	markup+=">"+args.text+"</textarea>";
	
	markup+=DWPE_Base_Class.getArgsAsString(args);
	markup+="</ux>";

	return markup;
}

/* Markup for generating Checkbox */
DWPE_FormFactory_Class.prototype.generateCheckBoxMarkup=function(args)
{
		var markup="";		
		var count=1;		
		var help=(args.help)?' help="'+args.help+'" ':"";
		markup+='<ux class="dwpe-checkbox '+args.required +'" ';
		markup+=help;
		markup+='>';
		


			var label_indent="\r\t";
		
			if(args.wrap && args.wrap!=0)
			{	markup+='\r\t<table>\r\t\t<tr valign="top">\r\t\t\t<td class="wrap" >';
				label_indent+="\t\t";
			}
			for(i in args.items)
			{					
				var item = args.items[i];
				
				markup+=label_indent+'<label class="checkbox-label';
				//individual checkbox state
				if(item.boxstate== "disabled" || args.state == "disabled")
					markup+=' disabled';
				markup+='"';
				
				//tooltip when pointing to the label
				if(item.tooltip)
					markup+=' title="'+item.tooltip+'"';
								
				markup+='><input class="check-box '+args.state+'" type="checkbox"';			
				if(item.value)
					markup+=' value="'+item.value+'"';
				if(item.tooltip)
					markup+=' title="'+item.tooltip+'"';
				if (args.state == "disabled" || args.state == "read-only" || item.boxstate == "disabled" ) 
					markup+=' disabled="disabled" ';
				if (item.selected == 'yes')
					markup+=' checked="checked"';

				markup+=' />';
				
				markup+=item.label+'</label><br>';			

				//slice the list to next column and check if there are anymore chechboxes to be generated
				if(count%args.wrap==0 && args.items.length != count) 
						markup+='\r\t\t\t</td>\r\t\t\t<td class="wrap" valign="top">';
				count++;			
			}
			if(args.wrap && args.wrap!=0)
				markup+='\r\t\t\t</td>\r\t\t</tr>\r\t</table>';

	
		markup+=DWPE_Base_Class.getArgsAsString(args);
		markup+='\r</ux>';
		return markup;
}

/* Markup for generating radio group */
DWPE_FormFactory_Class.prototype.generateRadioGroupMarkup=function(args)
{
		var markup="";		
		var count=1;
		var help=(args.help)?' help="'+args.help+'"':"";
		markup+='<ux class="dwpe-radiogroup '+args.required+'" ';
		markup+=help;
		markup+='>';
		
		var label_indent="\r\t";
		if(args.wrap && args.wrap!=0)
		{	markup+='\r\t<table>\r\t\t<tr valign="top">\r\t\t\t<td class="wrap" >';
			label_indent+="\t\t";
		}
		
		for(i in args.items)
		{					
			var item = args.items[i];
			
			markup+=label_indent+'<label class="radiogroup-label';
			
			//individual radio button state
			if(item.boxstate== "disabled" || args.state == "disabled")
				markup+=' disabled';	
			
			markup+='"';
			
			//tooltip when pointing to the label
			if(item.tooltip)
				markup+=' title="'+item.tooltip+'"';
				
			markup+='><input name="'+args.group+'" class="radio-group '+args.state+'" type="radio"';			
			if(item.value)
				markup+=' value="'+item.value+'"';			
			if(item.tooltip)
				markup+=' title="'+item.tooltip+'"';
			if (item.selected == 'yes')
				markup+=' checked="checked"';
			if (args.state == "disabled" || args.state == "read-only" || item.boxstate == "disabled" ) 
				markup+=' disabled="disabled" ';
			
			markup+=' />'+item.label+'</label><br>';			
			
			//slice the list to next column and check if there are anymore radio buttons to be generated
			if(count%args.wrap==0 && args.items.length != count) 
				markup+='\r\t\t\t</td>\r\t\t\t<td class="wrap" valign="top">';
			count++;			
		}
			
		if(args.wrap && args.wrap!=0)
			markup+='\r\t\t\t</td>\r\t\t</tr>\r\t</table>';
		
		markup+=DWPE_Base_Class.getArgsAsString(args);
		markup+='\r</ux>';
		return markup;
}

/* Markup for generating file upload */
DWPE_FormFactory_Class.prototype.generateFileUploadMarkup=function(args)
{
	var markup="";
	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
    btn.label="Browse";
	
	
	var help,width;
	
	if(args.state=="disabled")
		btn.state = 0;
	
	
	markup+="<ux class='dwpe-fileupload'>";
	markup+="<input class='dwpe-fileupload "+args.required+' '+args.state+"' type='text'";
	if (args.state == "disabled" || args.state == "read-only" ) markup+=" disabled='disabled' ";
	
	if(args.help)
		markup+=' help="'+args.help+'"';
	if(args.width && args.width.length>0)
		markup+=' style="width:'+args.width+'px"';
	
	
	markup+="/>";
	markup+=DWPE_Base_Class.getArgsAsString(args);
	markup+='\r\t<span class="browse-button '+args.state+'">'+DWPE_ButtonFactory.make(btn)+'</span>';
	
	markup+='\n</ux>';		
	return markup;
}

/* Markup for generating multi-select list box */
DWPE_FormFactory_Class.prototype.generateMultiSelectListBoxMarkup=function(args)
{		
	var markup="";		
	markup+='<ux class="dwpe-multiselectlistbox '+args.required+' '+args.state+'"';		
	if(args.listboxwidth)
		markup+=' style="width:'+args.listboxwidth+'"';		
	if(args.listboxhelp)
		markup+=' help="'+args.listboxhelp+'"';	
	markup+='>';
	
	//Handling read-only state
		if (args.checkboxall == "all-required") 
		{
			markup+='\r\t<label class="multiselectlistbox-label';
			
			//individual checkbox state
			if(args.state == "disabled")
				markup+=' disabled';			
				
			markup+='"';
			
			if(args.selectalltooltip)
				markup+=' title="'+args.selectalltooltip+'"';
				
			markup+='>';
			
			markup+='<input class="multiselect-listbox-selectall '+args.state+'" type="checkbox"';	
			
			if (args.state == "disabled" || args.state == "read-only") 
				markup+=' disabled="disabled" ';
				
			if(args.selectalltooltip)
				markup+=' title="'+args.selectalltooltip+'"';


			markup+='/>All</label>';		
			//markup+='\r\t<ul class="multiselect-separator"/>';
		 	markup+='\r\t<div class="multiselect-listbox multiselect-all-separator"';
		}
		else
			markup+='\r\t<div class="multiselect-listbox"';
		if(args.listboxheight)
			markup+=' style="height:'+args.listboxheight+'"';
		markup+='>';
		
		for(var i in args.items)
		{					
			var item = args.items[i];			
			switch(item.itemtype)
			{
				case "checkbox":
				default:
	
				markup+='\r\t\t<label class="multiselectlistbox-label';
			
				//individual checkbox state
				if(item.boxstate== "disabled" || args.state == "disabled")
					markup+=' disabled';
				markup+='"';
			
				//tooltip when pointing to the label
				if(item.tooltip)
					markup+=' title="'+item.tooltip+'"';
					
				markup+='><input class="multiselect-listbox checkbox'+i+' '+args.state+'" type="checkbox"';			
				if(item.value)
					markup+=' value="'+item.value+'"';
				if(item.tooltip)
					markup+=' title="'+item.tooltip+'"';
				if (args.state == "disabled" || args.state == "read-only" || item.boxstate == "disabled" ) 
					markup+=' disabled="disabled" ';
				if(item.selected=="yes")
					markup+=' checked="checked"'
					
				markup+='/>';
				
				markup+=item.label+'</label><br>';								
				break;
				
			case "separator":
				markup+='\r\t\t<hr class="multiselect-separator"/>';	
				break;
			} //end of switch
		}//end of for
	
		markup+='\r\t</div>';
	
	markup+=DWPE_Base_Class.getArgsAsString(args);
	markup+='\r</ux>';		
	return markup;		
}

//initialization of multselect-listbox
DWPE_FormFactory_Class.prototype.initializeMultiSelectListBox=function($ux)
{
	//Select/unselect "All" 
	$('INPUT.multiselect-listbox-selectall').change(function(){
			$(this).closest('UX').find("INPUT.multiselect-listbox").attr('checked', $('.multiselect-listbox-selectall').is(':checked'));	
	});	
	
	//Unselect "All" when one of the checkboxes are unchecked
	$('INPUT.multiselect-listbox').change(function(){
		$(this).closest('UX').find('INPUT.multiselect-listbox-selectall').attr('checked','');
	});
	
	// Set Read-Only Mode.
	if ($ux.hasClass('read-only'))
	{
		var markup = '';
		$ux.find('div input:checkbox:checked').each(function()
		{
			markup += $(this).parent().text() + '; ';
	 	});
		$ux.html( markup );
	}
}

/****************************************************
*****************************************************
****	Multi-Select Choice List				*****
*****************************************************
****************************************************/
DWPE_FormFactory_Class.prototype.generateMSCLMarkup = function (args) {
    /****************************************************
    Generated Markup: This is what's displayed
    in the Form's Generated Markup Area.
    Simplistic, minimalist user friendly code.
    ****************************************************/
    var markup = '';
    var help = (args.help) ? ' help="' + args.help + '"' : "";

    markup += '<ux class="dwpe-multiselectchoicelist '
    if (args.required) markup += args.required + ' ';
    if (args.state) markup += args.state + ' ';
    if (args.checkboxall) markup += 'AllowCheckAll ';
    markup += '"';
    if (args.list_width) markup += ' width="' + args.list_width + '" ';
    if (args.list_height) markup += ' height="' + args.list_height + '" ';
   	
   	markup += help;
    markup += '>';
    markup +='\r\n\t<ul>\r\n';

    if (args.state == 'read-only') {
        markup += '\t<li>[no items selected]</li>\r\n';
    } else {
        for (i in args.items) {
            var item = args.items[i];
            var myClass = '';
            markup += '\t\t<li';
            if (item.value) markup += ' SystemValue="' + item.value + '"';
            if (item.tooltip) markup += ' Tooltip="' + item.tooltip + '"';
            if (item.selected == 'yes') myClass += 'checked';
            if (item.separator == '1') myClass += ' separator';
            if (item.boxstate == '0') myClass += ' disabled';
            if (myClass.length > 0) markup += ' class="' + myClass + '"';
            markup += '>' + item.label + '</li>\r\n';
        }
    }
 	markup+=DWPE_Base_Class.getArgsAsString(args);
	markup += '\t</ul>\r\n</ux>'
    

    return markup;
}

DWPE_FormFactory_Class.prototype.initializeMSCL=function($ux)
{
	/****************************************************
		Initialied Markup: This is the actual code
		rendered to the browser.  It includes all
		elements and bindings which are not required
		to be exposed to the end user for simplicity.
	****************************************************/
	var objId = DWPE_Utilities.getUniqueId();
	$ux.attr('id',objId);
	
	var $menu = $("<div></div>");
	$ux.data("menu",$menu);
	$ux.append($menu);
	
	var menuMarkup = '';

	/****************************************************
		There's really no need to clutter our Generated
		Markup area with a check all box.  Since we
		apply the class 'AllowCheckAll' to our 
		container when a Check All Boxes is required
		let's just build it dynamically.
	****************************************************/
	if ($ux.hasClass('AllowCheckAll'))
	{
		 menuMarkup += '<ul class="mscl-checkall"><li><label><input type="checkbox" class="mcsl-check-all" name="dwpe_mscl_'+objId+'" onclick="DWPE_FormFactory_Class.msclCheckAll(\''+objId+'\');" value="">All</label></li></ul>';
	}
	menuMarkup += '<div class="mscl-listitems"><ul>';
	$ux.find("li").each
	(
		function(index)
		{
			var $fld=$(this);
			var chkID = objId+'_'+index;
			var value = $fld.attr('SystemValue');
			var tooltip = $fld.attr('Tooltip');
			menuMarkup += '<li ';
			menuMarkup += 'class="'
				if ($fld.hasClass('separator')) menuMarkup += 'separator ';
				if ($fld.hasClass('disabled')) menuMarkup += ' disabled';
			menuMarkup += '" ';
			menuMarkup += '>'
			menuMarkup += '<label'
			if ( $fld.hasClass('disabled') )menuMarkup+=' class="disabled" ';
			if ( tooltip )menuMarkup+=' title="'+ tooltip +'" ';
			menuMarkup +='><input type="checkbox" name="dwpe_mscl_'+objId+'"';
				if ($fld.hasClass('checked')) menuMarkup += ' checked ';
				if ($fld.hasClass('disabled'))menuMarkup += ' disabled="disabled" ';
				( value ) ? menuMarkup += ' value="'+ value +'"' : menuMarkup += ' value="'+ $fld.html() +'"';
			menuMarkup += '/>' + $fld.html() + '</label></li>';
		}
	);
	menuMarkup += '</ul></div>';
	$menu.html(menuMarkup);
	$('<div></div>').append($menu);

	$menu.find('ul.mscl-checkall label').bind(	'click',
								function(event){ 	event.stopPropagation();
													});

	$menu.find('div.mscl-listitems label').bind(	'click',
								function(event){ 	event.stopPropagation();
													DWPE_FormFactory_Class.msclCheckBoxOnClick(objId);
													});
			
	
	//we need to transfer pertinent info from the ux tag into the input tag
	var class_string=$ux.attr("class").replace(/dwpe-multiselectchoicelist/,"");
	var markup = '<input 	class="'+class_string+'" ';
	if($ux.attr('help'))
		markup+=' help="'+$ux.attr('help')+'"';
        if ( $ux.attr('width') )
        {
            markup += ' style="width:'+ $ux.attr('width') +'"';
        }
		
		markup+=' id="' + objId+ '_items" />';

		$ux.removeAttr('help');


        if ( $ux.hasClass('read-only') )
        {
            markup = '<span class="dwpe-mscl read-only">' + $ux.find(">li").html() + '</span>';
        }

	$ux.html(markup);

	$('#'+objId+'_items').keyup(function(e){
		// Clear List Items
		$ux.data('menu').find('li').each(function(){$(this).removeClass('selected');})
		$ux.data('menu').find('input:checkbox').each(function(){$(this).attr('checked',false);})

		var myArray = $(this).val().split(';');
		$.each( myArray, function(intIndex, objValue){
			var listboxItems = $.trim(objValue).toLowerCase();
			$ux.data('menu').find("label").each(function()
			{
				var $listItem = $(this);
				if (listboxItems == $listItem.text().toLowerCase())
				{
					$listItem.find("input:checkbox").attr('checked',true);
					$listItem.closest("li").addClass('selected');
				}
			})
		})
	})

	


	$('#'+objId+'_items').click(function(e){
	
		
		var $fld=$(this);
		// Make sure the user clicks over the disclosure background image.
		if ( (e.layerX) < $fld.width() - 10 ) return;
		
		
		var $ux = $fld.closest("ux.dwpe-multiselectchoicelist");
		var $menuContent = $ux.data("menu");
		var menu_id=objId+"-menu";
		var group=null; //append to the last group
		var menu=DWPE_Window.addWindow($ux,menu_id,"menu",null);
		var $menuBody=$("#"+menu_id+"-body");
			$menuBody.append($menuContent);
			
			
	
		$('.mscl-listitems ul li').css('width',$('#'+objId).closest("ux").width()-7);
		if ( $ux.hasClass('AllowCheckAll') ) $('.mscl-listitems').css('max-height','255px');
	});

	if ( $ux.hasClass('disabled') || $ux.hasClass('read-only') ) 
		$ux.find("input").attr( 'disabled','disabled' );
	DWPE_FormFactory_Class.msclCheckBoxOnClick(objId);
	
	// Set Width & Height
	if ( $ux.attr('width') ) $ux.css('width',$ux.attr('width'));
	if ( $ux.attr('height') ) $ux.find("div.mscl-listitems").css('height',$ux.attr('height'));
	
	
	
}
/****************************************************
*****************************************************
****	LINK									*****
*****************************************************
****************************************************/
DWPE_FormFactory_Class.prototype.generateLinkMarkup = function (args) {
	var linkLabel = (args.label) ? args.label : "";
    var linkCommand = (args.command) ? ' cmd="' + args.command + '"' : "";
    var linkTooltip = (args.tooltip) ? ' title="' + args.tooltip + '"' : "";
    var icon=(args.icon)?DWPE_Utilities.getIconMarkup(args.icon):'';
    var markup = '';
    markup += '<ux class="dwpe-link" ' + linkCommand + ' ' + linkTooltip  + '>' + 
    	icon +
    	linkLabel + 
    	DWPE_Base_Class.getArgsAsString(args)+
    	'</ux>';
    return markup;
}



/****************************************************
*****************************************************
****	LOV										*****
*****************************************************
****************************************************/
DWPE_FormFactory_Class.prototype.generateLOVMarkup = function (args) {
    var markup = '';
    var help = (args.help) ? ' help="' + args.help + '"' : "";
    var cmd = (args.dialog_url) ? ' cmd="js::openDialog(\'' + args.dialog_url + '\')	"' : "";
    var defaultValue = (args.default_value) ? ' DefaultValue="' + args.default_value + '"' : "";
	var defaultStyle = (args.default_style) ? ' DefaultStyle="'+ args.default_style +'"' : "";
	
    markup += '<ux class="dwpe-lov';
    if (args.required) markup += ' ' + args.required;
    if (args.state) markup += ' ' + args.state;
    if (args.value) markup += ' ' + args.value;
    markup += '"';
    markup += defaultStyle;
    markup += defaultValue;
    markup += cmd;
    
   	markup += help;
	markup += '>';
	markup +='\r\n';
 	markup +='\t' + DWPE_Base_Class.getArgsAsString(args);
	markup += '\r\n</ux>'
    return markup;
}

DWPE_FormFactory_Class.prototype.initializeLOV=function($ux)
{
	if ( $ux.hasClass('read-only') )
	{
		var readOnlyText = $ux.attr('DefaultValue');
		$ux.html( '<span class="dwpe-lov read-only">' + readOnlyText + '</span>' );
		return;
	}



	var markup="<input ";
		markup+="class='";
		if ( $ux.hasClass('required') ) markup+="required ";
			markup+="' ";
		
		if ( $ux.hasClass('disabled') || $ux.hasClass('read-only') )
			 markup+=" disabled='disabled'"; 
		
		if ( $ux.attr('cmd') ) 
			markup+=' cmd="'+$ux.attr('cmd')+'"';
		
		if ( $ux.attr('DefaultValue') ) 
			markup+=" value='"+$ux.attr('DefaultValue')+"'";
	
		if ( $ux.attr('help') ) 
			markup+=" help='"+$ux.attr('help')+"'";
		
		markup+="/>";
	
	$ux.html(markup);
	$ux.find("input:eq(0)").click(function(e){
		var $fld=$(this);
		if ( (e.layerX) < $fld.width() + 7 ) return;
		if($fld.attr("cmd"))
			DWPE_Utilities.performCommand($fld,$fld.attr("cmd"));
	});	
	
	

	
}




/****************************************************
*****************************************************
****	Date-Time Picker						*****
*****************************************************
****************************************************/
DWPE_FormFactory_Class.prototype.generateDateTimePickerMarkup = function (args) {
    /****************************************************
    Generated Markup: This is what's displayed
    in the Form's Generated Markup Area.
    Simplistic, minimalist user friendly code.
    ****************************************************/
    var markup = '';
    var help = (args.help) ? ' help="' + args.help + '"' : "";
   	var timeZone = (args.time_zone) ? ' TimeZone="' + args.time_zone + '"' : "";
	//var displayTime = (args.display_time) ? ' DisplayTime="yes"' : "";
	
	var defaultDate="";

	switch( args.default_date )
	{
		case 'past':
			defaultDate = DWPE_TableFactory.getRandomDate(-1000,-1);
			break;
		case 'today':
			defaultDate = DWPE_TableFactory.getRandomDate(0,0);
			break;
		case 'future':
			defaultDate = DWPE_TableFactory.getRandomDate(1,1000);
			break;
		case 'none':
			defaultDate="";
			break;
		default:
			defaultDate = args.default_date;
			break;
	}
	
	switch( args.default_date )
	{
		case 'past':
		case 'today':
		case 'future':
			if ( args.display_time ) defaultDate += ' '+DWPE_TableFactory.getRandomTime();
			break;
		case 'none':
			defaultDate="";
			break;
		default:
			defaultDate = args.default_date;
			break;
	}
	
	args.default_date=defaultDate;
	
	defaultDate = ' DefaultDate="'+ defaultDate +'"';

	

    markup += '<ux class="dwpe-datetimepicker';
    if (args.required) markup += ' ' + args.required;
    if (args.state) markup += ' ' + args.state;
    if (args.value) markup += ' ' + args.value;
    markup += '"';
    markup += defaultDate;
    //markup += displayTime;
   	markup += timeZone;
   	markup += help;
	markup += '>';
	markup +='\r\n';
 	markup +='\t' + DWPE_Base_Class.getArgsAsString(args);
	markup += '\r\n</ux>'
    return markup;
}

DWPE_FormFactory_Class.prototype.initializeDateTimePicker=function($ux)
{
	$ux.append('<input/>');
	var $fld=$ux.find("input:eq(0)");
	var value=$ux.attr("DefaultDate");
	
	if ( $ux.attr('TimeZone') )
	{
		var timeZone = DWPE_FormFactory.getDateTimePickerTimeZone( $ux.attr('TimeZone') );
		if ( $ux.hasClass('read-only') )
		{
			value+= ' ' + timeZone; 
		} 
		else 
		{
			$fld.css('width','75%');
			$ux.append( '<span>' + timeZone + '</span>' );
		}
	}
	
	$fld.click(function(e)
	{
		if ( (e.layerX) < $fld.width() + 7 ) return;
		alert('Calendar popup has not been implemented.');
	});	

    if ( $ux.hasClass('disabled') || $ux.hasClass('read-only') )
	{
		$fld.attr('disabled','disabled');
	}
	
	$fld.attr('value',value); 
    
	
	if ( $ux.hasClass('required') ) $fld.addClass('required');
	if ( $ux.attr('help') ) $fld.attr('help',$ux.attr('help'));
}

DWPE_FormFactory_Class.prototype.getDateTimePickerTimeZone=function(tz)
{
	var timeZone = '';
	
	switch(tz)
	{
		case '-12':
			timeZone = '(UTC -12:00) Eniwetok';
			break;
		case '-11':
			timeZone = '(UTC -11:00) Samoa';
			break;
		case '-10':
			timeZone = '(UTC -10:00) Hawaii';
			break;
		case '-9':
			timeZone = '(UTC -9:00) Alaska';
			break;
		case '-8':
			timeZone = '(UTC -08:00) US Pacific Time';
			break;
		case '-7':
			timeZone = '(UTC -07:00) US Mountain Time';
			break;
		case '-6':
			timeZone = '(UTC -06:00) US Central Time';
			break;
		case '-5':
			timeZone = '(UTC -05:00) US Eastern Time';
			break;
		case '-4':
			timeZone = '(UTC -04:00) US Atlantic Time';
			break;
		case '-3':
			timeZone = '(UTC -03:00) Brazil';
			break;
		case '-2':
			timeZone = '(UTC -02:00) Mid Atlantic';
			break;
		case '-1':
			timeZone = '(UTC -01:00) Azores';
			break;
		case '0':
			timeZone = '(UTC -00:00) London';
			break;
		case '+1':
			timeZone = '(UTC +01:00) Paris';
			break;
		case '+2':
			timeZone = '(UTC +02:00) South Africa';
			break;
		case '+3':
			timeZone = '(UTC +03:00) Baghdad';
			break;
		case '+4':
			timeZone = '(UTC +04:00) Abu Dhabi';
			break;
		case '+5':
			timeZone = '(UTC +05:00) Ekaterinburg';
			break;
		case '+6':
			timeZone = '(UTC +06:00) Almaty';
			break;
		case '+7':
			timeZone = '(UTC +07:00) Bangkok';
			break;
		case '+8':
			timeZone = '(UTC +08:00) Beijing';
			break;
		case '+9':
			timeZone = '(UTC +09:00) Tokyo';
			break;
		case '+10':
			timeZone = '(UTC +10:00) Eastern Australia';
			break;
		case '+11':
			timeZone = '(UTC +11:00) Magadan';
			break;
		case '+12':
			timeZone = '(UTC +12:00) Auckland*';
			break;
		default:
			timeZone = '(UTC -08:00) US Pacific Time';
	}	
	return timeZone;
}


DWPE_FormFactory_Class.msclCheckAll=function(objId)
{
	/****************************************************
		Check/Uncheck all checkboxes within control.
	****************************************************/
	var $menu = $('#'+objId).closest("ux").data("menu");
	var checkAllStatus = $menu.find('.mcsl-check-all').is(':checked'); // CheckAll checkbox state.
	
	$menu.find("div.mscl-listitems INPUT[type='checkbox']").each(function(){
		$(this).attr('checked',checkAllStatus);
	});
	$('#'+objId+'_items').val( (checkAllStatus)?'All':'' ); // Populate field.
	
	if ( $('#'+objId+'_items').val() )
	{
		$menu.find('div.mscl-listitems li').addClass('selected');
	} else {
		$menu.find('div.mscl-listitems li').removeClass('selected');
	}
}


DWPE_FormFactory_Class.msclCheckBoxOnClick = function (objId) {
    /****************************************************
    Populate our component box with the selected
    items.  The slicing at the end is to remove
    the trailing semicolon.
    ****************************************************/
    var $ux = $('#' + objId).closest("ux").data("menu");
    $ux.find(".mcsl-check-all").attr('checked', false);
    var selectedItems = '';
    $ux.find("li").removeClass('selected');
    $ux.find("INPUT:checkbox:checked").each(function () {
        var $fld = $(this);
        $fld.closest('div.mscl-listitems li').addClass('selected');
        selectedItems += ($fld.parent().text()) + '; ';
    });
    var lastValue = selectedItems.slice(0, selectedItems.length - 2);
    $('#' + objId + '_items').val(lastValue);
    $ux.data('mscl_last_value', lastValue);
}



/*Generates a random sampling of form elements laid out in a multi-column fashion*/
DWPE_FormFactory_Class.prototype.generateFormMarkup=function(args)
{
	//force args to numbers
	args.rows=args.rows*1;
	args.columns=args.columns*1;
	
	var col_width="";
	if(args.prompts=="stacked")
		col_width=" class='r100'";
	else
		col_width=" class='r50'";
		
	
	var table_width="r"+args.columns;
	
	//var states=[""];//,"error","","warning","","disabled","","read-only"];
	//var req=["not-required","required"];

	
		
	
	var field_type_index=0;
	var markup="<form>\r\t<table  cellpadding='0' cellspacing='0' class='dwpe-form-layout'>\r\t\t<tr>";
		for(var columns=0; columns<args.columns;columns++)
		{
		
		
		
		markup+="\r\t\t\t<td >\r\t\t\t\t<table cellpadding='0' cellspacing='0' class='dwpe-form-layout-inner "+args.prompts+"'>";
		for(var rows=0; rows<args.rows;rows++)
		{
			
			var component;
			switch(args.fields)
			{
				case 'sample-fields':
					component=this.getDefaultArgsListForType(this.field_types[field_type_index++]);
					field_type_index=(field_type_index==this.field_types.length)?0:field_type_index;
					break;
				case 'text-fields':
					component=this.getDefaultArgsListForType("TextBox");
					break;
				case 'prompts-only':
					component=this.getDefaultArgsListForType("blank");
					break;
			}
			
			var prompt=(args.prompts=='stacked')?this.getDefaultArgsListForType('prompt-stacked'):this.getDefaultArgsListForType('prompt');
			prompt.label=component.type.replace(/\w\S*/g, function(txt){return  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			
			markup+="\r\t\t\t\t\t<tr>";
			markup+="\r\t\t\t\t\t\t<td>"+this.generateMarkup(prompt)+"</td>";
			
			if(args.prompts=='stacked')
				{	markup+="\r\t\t\t\t\t</tr>\r\t\t\t\t\t<tr>";	}
			
			markup+="\r\t\t\t\t\t\t<td class='"+table_width+"'>"+this.generateMarkup(component)+"</td>";
			markup+="\r\t\t\t\t\t</tr>";
		}	
		markup+="\r\t\t\t\t</table>\r\t\t\t</td>";
		
	}
	
	markup+="\r\t\t</tr>\r\t\</table>\r</form>";
	
	
	return markup;


}

DWPE_FormFactory_Class.prototype.field_types=[
					"TextArea",
					"TextBox",
					"singleselectchoicelist",
					"multiselectchoicelist",
					"spinbox",
					"CheckBox",
					"RadioGroup",
					"MultiSelectListBox",
					"LOV",
					"DateTimePicker"
				];

DWPE_FormFactory_Class.prototype.getRandomArgsList=function()
{

	
				
	var i=parseInt(Math.random()*(this.field_types.length));
		
		
		return this.getDefaultArgsListForType(this.field_types[i]);

}
	

/*this function stores default definitions for each form field type
 and returns them in JSON format */
DWPE_FormFactory_Class.prototype.getDefaultArgsListForType=function(type)
{
	var i="";
	var icon=DWPE_Utilities.getRandomIcon();
	
	switch(type.toLowerCase())
	{				
			case 'multiselectchoicelist':		// Multi Select Choice List
					return {	"_class":"DWPE_FormFactory_Class",
								"type":"multiselectchoicelist",										
								"required":"not-required",
								"state":" ",			
								"label":"New Item",
								"checkboxall":" ",
								"help":"",
								"items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"}]
					};	
					break;
			case 'multiselectchoicelist-item':
					return '{"label":"Item","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"}';
					break;					 
			case 'checkbox':		
					return {	"_class":"DWPE_FormFactory_Class",
								"type":"checkbox",										
								"required":"not-required",
								"state":"enabled",
								"selecttype":"truefalse-select",
								"label":"Sample Value",
								"help":"",
								"wrap":"0",
								"items":[	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":""},
											{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":""},
											{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":""}	]
								
					};	
					break;
			case 'checkboxgroup':		
					return {	"_class":"DWPE_FormFactory_Class",
								"type":"checkbox",										
								"required":"not-required",
								"state":"enabled",
								"selecttype":"truefalse-select",
								"label":"Sample Value",
								"help":"",
								"wrap":"0",
								"items":[	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","tooltip":"","selected":"no"},
											{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","tooltip":"","selected":"no"},
											{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","tooltip":"","selected":"no"}	]
								
					};	
					break;		
			case 'checkboxgroup-item':
					return '{"label":"Item","value":"","tooltip":"","selected":"no"}';
					break;			
			case 'textbox':
				return {
							"_class":"DWPE_FormFactory_Class",
							"type":"textbox",
							"text":"My Text",
							"state":" ",
							"required":"not-required",
							"help":""
							}
				break;
			case 'textarea':
				return 	{
							"_class":"DWPE_FormFactory_Class",
							"type":"textarea",
							"text":"Lorem ipsum dolor sit amet",
							"height":"47px",
							"state":"",
							"required":"not-required",
							"help":""
							}
					break;

			case 'spinbox':
				return {
							"_class":"DWPE_FormFactory_Class",
							"type":"spinbox",
							"min_value":"-5",
							"max_value":"5",
							"increment":"1",
							"required":" ",
							"help":"",
							"default_value":"0",
							"number_length":""
							}
				break;


			case 'prompt':		
					return {
							"_class":"DWPE_FormFactory_Class",
							"type":"prompt",
							"label":"My Label",
							"required":"not-required",
							"state":" ",
							"style":" ",
							"wrap":" ",
							"definition":" "
							};	
					break;
			case 'prompt-stacked':		
					return {
							"_class":"DWPE_FormFactory_Class",
							"type":"prompt",
							"label":"My Label",
							"required":"not-required",
							"state":" ",
							"style":"stacked",
							"wrap":" ",
							"definition":" "
							};	
					break;		
			case 'fileupload':
					return{ 
							"_class":"DWPE_FormFactory_Class",
							"type":"fileupload",
							"required":"not-required",
							"state":"enabled",
							"help":""
	
							};	
					break;
			case 'lov':
					return{ 
							"_class":"DWPE_FormFactory_Class",
							"type":"LOV",
							"required":"not-required",
							"state":"enabled",
							"help":""
	
							};	
					break;
			case 'datetimepicker':
					return{ 
							"_class":"DWPE_FormFactory_Class",
							"type":"datetimepicker",
							"required":"not-required",
							"state":"enabled",
							"help":"",
							"default_date":"future"
	
							};	
					break;		
			case 'singleselectchoicelist':
					return{
							"_class":"DWPE_FormFactory_Class",
							"type":"singleselectchoicelist",
							"state":" ",
							
							"required":"not-required",
							"help":"",
							"items":[	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"a","selected":"no"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"b","selected":"no"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"c","selected":"no"}]
							};	
					break;
				case 'singleselectchoicelist-item':
					return	'{	"label":"Item", "value":"", "selected":"no"}';	
					break;	
								
				case 'radiogroup':						
					return {	"_class":"DWPE_FormFactory_Class",
								"type":"radiogroup",										
								"required":"not-required",
								"state":"enabled",
								"group":"radiogroup",
								"label":"Sample Value",
								"help":"",
								"wrap":"0",
								"items":[	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","tooltip":"","boxstate":"enabled","selected":"no"},
										 	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","tooltip":"","boxstate":"enabled","selected":"no"},
										 	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","tooltip":"","boxstate":"enabled","selected":"no"}]
					};	
					break;
					
				case 'radiogroup-item':
					return '{"label":"Item","value":"","tooltip":"","boxstate":"enabled","selected":"no"}';
					break;
					
				case 'multiselectlistbox':						
					return {	"_class":"DWPE_FormFactory_Class",
								"type":"multiselectlistbox",										
								"required":"all-notrequired",
								"state":"enabled",								
								"label":"Sample Value",
								"checkboxall":"required",
								"help":"",
								"items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"}]
					};	
					break;
				case 'multiselectlistbox-item':
					return '{"label":"Item","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"}';
					break;
						
				case 'blank':
					return {"type":"blank","label":""};
					break;
			default:
				return {};
				break;
	}
}



/*this function stores default property sheet definitions for each form field type
 and returns them in JSON format */
DWPE_FormFactory_Class.prototype.getPropertySheetFields=function(_type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();

	switch(_type)	
	{							
		case 'multiselectchoicelist': // Multi Select Choice List
			return	[				
						{type:"text",id:"label",name:"Value",value:""},
						{type:"text",id:"value",name:"System Value",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},
						{type:"chooser",id:"boxstate",name:"Item State",value:'1=Enabled&0=Disabled'},
						{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'},						
						{type:"chooser",id:"separator",name:"Separator Below",value:'0=No&1=Yes'}
					];
			break;	

		case 'checkbox':
			return	[				
						{type:"text",id:"label",name:"Value",value:""},
						{type:"text",id:"value",name:"System Value",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},
						{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}						
					];
			break;	
			
		case 'radiogroup':
			return	[				
						{type:"text",id:"label",name:"Value",value:""},
						{type:"text",id:"value",name:"System Value",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},
						{type:"chooser",id:"boxstate",name:"Item State",value:'enabled=Enabled&disabled=Disabled'},
						{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}						
					];
			break;	
		
		case 'multiselectlistbox':
			return	[				
					 	{type:"chooser",id:"itemtype",name:"Item Type",value:'checkbox=Checkbox&separator=Separator'},
						{type:"text",id:"label",name:"Value",value:""},
						{type:"text",id:"value",name:"System Value",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},						
						{type:"chooser",id:"boxstate",name:"Item State",value:'enabled=Enabled&disabled=Disabled'},
						{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}						
					];
			break;	
			
		case 'singleselectchoicelist':
			return	[	
						{type:"text",id:"label",name:"Value",value:""},
						{type:"text",id:"value",name:"System Value",value:""},
						{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}
					];
			break;

		default:
			return [];	
			break;		
	}
	


}


/*when we have a list that holds items containing DWPE object metadata we first
  initialize it so that we can edit the properties of those individual objects*/
DWPE_FormFactory_Class.prototype.initEditableObjectList=function(listName)
{
	/*
		when an item in the items list is chosen, populate
		the fields in the items-table 
	*/

	var $list=$("#"+listName);
	if($list.attr("initialized")==1) return;
	
	$list.change(
		function(event)
			{
				var $select=$(this);
				var $option=$($select.attr("options")[$select.attr("selectedIndex")]);
				
				
				
				var args=$option.data("obj"); 
				
				//create the prop sheet
				DWPE_FormFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);
				
				//populate the prop sheet
				for(var argName in args)
				{
					/*we prepend 'item__' to the id so as not to interfere 
					 with those same properties that the parent may define*/
					 
					$("#item__"+argName).val(args[argName]);
				}
			
			}
		);

	//insert the add and delete controls immediately after the list
	$(	'<p align="right" id="addRemoveListItems">'+
		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_FormFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+
		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_FormFactory_Class.removeSelectedListItem(\''+listName+'\')">'+
		'</p>'
	).insertAfter($list);						
	
	
	$list.attr("initialized",1);

}

/*this function builds a properties form for editing a component from 
within compound components such as toolbar*/
DWPE_FormFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{
	
	var args=DWPE_FormFactory.getPropertySheetFields(type);
	var markup="";
	
	
	markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';
	if(args.length==0)
		markup+="<tr><td>No property sheet exists for this item type.</td></tr>";
	else
	{
		for(var argName in args)
		{
			var arg=args[argName];
			
		
			
			markup+="<tr>";
				
			
			switch(arg.type)
			{
				case 'select':
					markup+="<td class='label'>"+arg.name+"</td>";
					markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+
								arg.value+
							'</select></td>';
					break;
				case 'chooser':
				
					var options=arg.value.split("&");
					
					markup+="<td class='label'>"+arg.name+"</td>";
					markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";
					
					for(var i in options)
					{
						var option=options[i].split("=");
						markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";
					}
							
					markup+='</select></td>';
					break;	
				
				case 'hidden':
					markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';
					break;
				case 'text':
				default:
					markup+="<td class='label'>"+arg.name+"</td>";
					markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';
					break;
			}
			
			markup+="</tr>";
		}
	}	
	markup+="</table>";						
				
	//insert markup inside our properties sheet container			
	$("#"+listName+"-property-sheet").html(markup).show("slide");
	
	
	
	/*wire up our properties sheet & list*/
	
	
	
				
	/*
		when a value in a field on our list changes,
		collect all field values and post them on the
		selected item's .data("obj") variable
		
		
	*/		
			
	$("#"+listName+"-selected-item-properties :input").keyup(
	
		function()
		{
				
			var args={};
			$("#"+listName+"-selected-item-properties :input").each(
			
				function()
				{
					var $fld=$(this);
					
					/*strip off the 'item__' prefix 
					   from the fld id to form the property name*/
					var propName=$fld.attr("id").replace(/item__/,"");					
					args[propName]=$fld.val();
					
			
				}
			
			);
			
			
			
			var $select=$("#items");
			var i=$select.attr("selectedIndex");			
			if(i>-1)
			{
				$option=$( $select.attr("options")[i]);
				$option.data("obj",args);
				$option.text(args.label);
			
			}
		}	
	
	).change(
	
		function()
		{
			
			var args={};
			$("#"+listName+"-selected-item-properties :input").each(
			
				function()
				{
					var $fld=$(this);
					
					/*strip off the 'item__' prefix 
					   from the fld id to form the property name*/
					var propName=$fld.attr("id").replace(/item__/,"");
					
					args[propName]=$fld.val();
					
			
				}
			
			);
			
			
			
			var $select=$("#items");
			var i=$select.attr("selectedIndex");
			if(i>-1)
			{
				$option=$( $select.attr("options")[i]);
				$option.data("obj",args);
				$option.text(args.label);
			
			}
		}	
	
	)



}




/*---------------------------------------*/
/* Property List Management Class Methods*/
/*---------------------------------------*/

/* On A Select List Box, removes the item the user
   has highlighted and highlights the preceding available item  */
DWPE_FormFactory_Class.removeSelectedListItem=function(listID)
{
	
	//get list
	var $list=$("#"+listID);
	var i=$list.attr("selectedIndex");
	var len=$list.attr("options").length;
	
	
	//do nothing if list is empty
	if(len==0)
		return;
	
	//remove selected item
	$($list.attr("options")[i]).remove();
	
	//do nothing if list is now empty
	if(len-1<=0) 
		return;
	
	//move selectedIndex
	i=(i-1<0)?0:i-1;
	$list.attr("selectedIndex",i);


	//force list to update property sheet
	$list.change();
}

/* On a Select List Box adds an item to the list
	
	Note, code is ButtonFactory specific now, should be made generic later

*/
DWPE_FormFactory_Class.addListItem=function(listID)
{		
	var $list=$("#"+listID);
	var $option=$("<option></option>");
	
	var args=DWPE_FormFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));
	
	//set options label
	$option.text(args.label+' '+i);
	
	//set the data 'obj' variable to our args 
	$option.data("obj",args);$list.append($option);
	i++;
}







/* /DWPE/components/js/DWPE_WindowFactory_Class.js */

/*DWPE_WindowFactory_Class.js*/









/*Set the class that our class will inherit from*/

DWPE_WindowFactory_Class.prototype=new DWPE_BaseFactory_Class();



/*Set and Define our own class constructor*/

DWPE_WindowFactory_Class.constructor=DWPE_WindowFactory_Class;

DWPE_WindowFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;

function DWPE_WindowFactory_Class()

{

	this._class="DWPE_WindowFactory_Class";

	

	

	//setup live() methods

	

	//make all window containers draggable via their top titlebar, now and forever

	$(".dwpe-window-container>DIV.window>DIV.top").live('mouseover',

		function(){

				

				var $win_title=$(this);

				

				

				if (!$win_title.data("init")) 

				{

                	$win_title.data("init", true);

                	

                	var $win_container=$win_title.closest('.dwpe-window-container');

                	

                	var $win;

                	

                	

                	if($win_container.hasClass("modal"))

                	{	

                		//we are modal so the shadow layer becomes the fixed position modal layer shield

                		$win=$win_container.find(">DIV.window");

                	}

                	else

                	{	

                		//we are modeless so the shadow layer moves with our window

                		$win=$win_container;

                	}

                	

                	$win.draggable(	{

										cursor:"move",

										containment:'parent',

										handle:$win_title,

										start:function(event,ui)

										{

											//var $win=$(this);

											$win_container.css('z-index',DWPE_WindowFactory.getNextZ());

											$(":input").trigger('blur');

										},

										stop:function()

										{

											//var $win=$(this);

											//var oldZ=$win.data('oldZ');

											

										

											//$win.css('z-index',oldZ);

										}

										

									});

                }

		

				return false;

		});

		

		

	//clicking anywhere on a window container brings it to top	

	$(".dwpe-window-container").live('mousedown',

	

		function()

		{

			//bring to front

			var $win=$(this);

            $win.css('z-index',DWPE_WindowFactory.getNextZ());

            $(":input").trigger('blur');

            

            //return false;

		}

	);



	

	

	/*clicking on an element whose class includes open-window opens 

	 a window whose content comes from the specified url*/

	$(".open-window").live('mouseup',

		function(event,ui)

		{

				DWPE_WindowFactory.open(this,$(this).attr('url'));

				event.preventDefault();

				$(":input,a").trigger('blur');

				return false;

		}

	);

	

	/*clicking on an element whose class includes close-window closes 

	 the window that is parent to that element*/

	$(".close-window").live('click',

		function(event,ui)

		{

				$(document).data('context',$(this));

				cancelDialog();

		}

	);

	



	

	//create live() methods for menu behavior

	

	

	$(document).bind('contextmenu',function(){return false;})

	

	

	//fetch a context menu

	$(".context-menu").live('mouseup',

	

	

		function(event)

		{

			var $callee=$(this);

			if($callee.data('context-menu-open')) return;

			if(event.which===1) return true; //ignore mouse left clicks

		

			$callee.data('context-menu-open',true);

			

			var x=event.clientX+$(document).scrollLeft();

			var y=event.clientY+$(document).scrollTop();

		

			var menu_url=$callee.attr('menu');

			

			if(!$callee.data('menu'))

			{	

				$.ajax(	{	url:menu_url,

							cache:false,			//always get a fresh copy of the content 

							//async:false,			//always wait for the content to arrive

							success:function(data)

							{

								//$wait.remove();

								var $_callee=$callee;

								var $menu=DWPE_WindowFactory.initializeContextMenu(data,$callee,x,y);

									

									//we write our handler to execute once then unbind itself

									//the handler closes the window when a mouseup occurs

									var handler=function(event){$menu.hide(); $_callee.data('context-menu-open',false);  $(this).unbind(event);};

									$('body').bind('mousedown', handler );

									

								

								

							}

									

						} );

			}

			else

			{

				var $menu = $callee.data("menu");

				$('body').append($menu)

				

				//we write our handler to execute once then unbind itself

				//the handler closes the window when a mouseup occurs

				var handler=function(event){$menu.hide(); $callee.data('context-menu-open',false); $(this).unbind(event);};

				$('body').bind('mouseup', handler );

				

				$menu.css({top:y,left:x,"z-index":DWPE_WindowFactory.getNextZ() });

				$menu.show();

				

			

			}

					

					

			return false;		

			

		}

	

	);

	

	

	

	//initialize a menu on first rollover

/*	$("UX.dwpe-menu").live('mouseover',

							

							function(event,ui)

							{

								var $ux=$(this);

								

								if($ux.hasClass('context'))return;

								

								if(!$ux.data('menu-initialized'))

									DWPE_WindowFactory.initializeMenu( $ux )

								return false;

							});

*/							

	

	/*manages the click on menu items*/

	$(".dwpe-menu LI, UL.DWPE_Window_Body LI").live('click',

							

							function(event,ui)

							{

								

								var $item=$(this);

								

								var $parent=$item.closest("UL");

								

								if($item.hasClass('disabled')) return;

								

								if($item.hasClass('radio'))

								{

									/*find the parent of this LI, then find all LIs that match this LIs group*/

									$parent.find(">LI.radio[group='"+$item.attr('group')+"']").each

									(

									

										function(i)

										{

										

											var $LI=$(this);

											

											if($item[0]==$LI[0])

											{

												$LI.addClass('on');

											}

											else

											{

												$LI.removeClass('on');

											}

										

										});

								}									

								else if($item.hasClass('toggle'))

								{

									/*manages the state of check menus*/

									$item.toggleClass('on');

								}

								else if($item.hasClass('menu-scroll'))

								{

									/*manages menu scrolling*/

								

									var $parent=$item.closest("UL");

									var $items=$parent.data('menu-items');

									var numItems=$items.length;

									var first_index=$parent.data('first_index');

									var last_index=first_index+DWPE_WindowFactory.menuScrollThreshold;

									var $up=$parent.data("up");

									var $dwn=$parent.data("down");

									

								

									if($item.hasClass('up') && first_index>0) 

									{

										first_index-=1;

										last_index-=1;

									}

									else if($item.hasClass('down') && last_index<numItems) 

									{

										first_index+=1;

										last_index+=1;

									}

								

									$items.each(

										

										function(i)

										{

											if(i>=first_index && i<last_index)

												$(this).show();

											else

												$(this).hide();

										}

									

									);

									

									

									

									

									if(first_index<=0)

										$up.removeClass('enabled');

										

									else

										$up.addClass('enabled');

										

									if(last_index>=numItems-1)

										$dwn.removeClass('enabled');

									else

										$dwn.addClass('enabled');

									

									

									$parent.data('first_index',first_index);

										

									

									return false;

								

								}

								

								

								

								

								

								

								

								

								

								//perform action, if one is defined

								var cmd=$item.attr('cmd');

								

								

								if(cmd)

								{

									var action=cmd.split("::");

									switch(action[0].toLowerCase())

									{	

										case "js":

											

											var command=action[1];

										

											

											if(DWPE_Utilities.isDisabled($item)) break; //don't execute if callee is disabled

											

											

											

											try{

												$(document).data('context',$item);

												eval(command);

												}

											catch(e){alert("error in command format");}

											

											break;

										case "url":

											

											document.location=action[1];

											

											break;

										default:

											break;

									}

										

										

									

								}

								

								

								

								if(!$item.hasClass("top-level-parent"))

								{	$parent.trigger('mouseout');	

									$parent.closest('ux').data('show-menus',false);

								}

								

								

								return false;	

								

							});









	

	return this;	



}



/*Make an Instance of Window Factory that others can call on to create windows*/

DWPE_WindowFactory=new DWPE_WindowFactory_Class();





/*menuScrollThreshold: The number of menu items shown before scroll icons are presented*/

DWPE_WindowFactory_Class.prototype.menuScrollThreshold=14;







/*clicking on an element whose class includes open-window opens 

	 a window whose content comes from the specified url*/

DWPE_WindowFactory_Class.prototype.openWindow=function(btn)

{

	var $btn=$(document).data('context');

	DWPE_WindowFactory.open($btn,$btn.attr('url'));

	event.preventDefault();

	$(":input,a").trigger('blur');

	

	

	return false;

}



	

/*clicking on an element whose class includes close-window closes 

 the window that is parent to that element*/

DWPE_WindowFactory_Class.prototype.closeWindow=function()	 

{

				

	var $btn=$(document).data('context');

	$(":input,a").trigger('blur');

	var $win=$btn.closest('.dwpe-window-container');

	$win.remove();

	

	return false;

}





/*overrides DWPE_Base_Class.update()*/

DWPE_WindowFactory_Class.prototype.update=function()

{

	this.markup=this.make(this.properties);

}









DWPE_WindowFactory_Class.prototype.make=function($ux)

{

	

	

	var _class=this.getRootClass($ux.attr("class"));

	

	switch(_class)

		{

			case 'dwpe-menu':

				this.loadMenu($ux);

				break;

			case "dwpe-window-container":

				break;

		}

	

}





DWPE_WindowFactory_Class.prototype.generateMarkup=function(args)

{

	

	switch(args.type.toLowerCase())

		{

			case "info-dialog":

				return this.generateInfoDialogMarkup(args);

				break;

			case "lov-dialog":

				return this.generateLOVDialogMarkup(args);

				break;	

			case "warning-dialog":

				return this.generateWarningDialogMarkup(args);

				break;

			case "error-dialog":

				return this.generateErrorDialogMarkup(args);

				break;

			case "confirm-dialog":

				return this.generateConfirmationDialogMarkup(args);

				break;	

			case "dialog":

				return this.generateDialogMarkup(args);

				break;

			case "menu":

				return this.generateMenuMarkup(args);

				break;

			default:

				return "[undefined window or menu type]";	

				break;

		}

	

}







DWPE_WindowFactory_Class.prototype.formatMessage=function(icon,summary,detail)

{

	return "<table><tr><td>"+icon+"</td><td><b>"+summary+"</b></td></tr><tr><td></td><td>"+detail+"</td></tr></table>";



}

DWPE_WindowFactory_Class.prototype.formatInfieldHelp=function(help)

{

	return "<table><tr><td><b>"+help+"</b></td></tr></table>";



}





DWPE_WindowFactory_Class.prototype.noteWindowTemplate=function()

{



	var markup="";

	

	markup+="<ux:dialogs class='dwpe-note-window-container note-anchored'>";

	

	markup+="<div class='cone left'></div>"

	

	markup+="<div class='window note'>";



	markup+="<div class='middle WindowRegion'>";

	

	markup+="%CONTENT%";

	

	markup+="</div>";

	

	markup+="</div>";

	

	markup+="<div class='cone right'></div>"

	

	markup+="</ux:dialogs>";

	

	

	

	return markup;





}





DWPE_WindowFactory_Class.prototype.dialogTemplate=function()

{



	var markup="";

	

	markup+="<ux:dialogs class='dwpe-window-container also-resize %POSITION%  %MODE%' width='%WIDTH%' height='%HEIGHT%'>";

	

	markup+="\r\t<div class='window %TYPE% %RESIZABLE%'>";

	

	markup+="\r\t<div class='top'>";

	markup+="\r\t\t<div class='left'>";

	

	markup+="\r\t\t\t %ICON% %TITLE%";

	

	

	markup+="</div>";

	markup+="\r\t\t<div class='right'>";

	

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'uap','command':'','tooltip':'UAP'});

	markup+="&nbsp;"

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'closetab','command':'js::cancelDialog();','tooltip':'Close Dialog'});

	

	

	

	markup+="\r\t\t</div>";

	

	

	markup+="\r\t\t</div>";

	

	markup+="\r\t<div class='middle also-resize WindowRegion'>";

	

	markup+="\r\t\t\t %CONTENT%";

	

	markup+="\r\t</div>";

	

	

	markup+="\r\t<div class='bottom'>";

	

	markup+="\r\t\t<div class='left'>";

	markup+="\r\t\t</div>";

	

	markup+="\r\t\t<div class='right'>";

	

	markup+="%BUTTON-1%";

	

	markup+="%BUTTON-2%";

	

	markup+="%RESIZER%";

	

	markup+="\r\t\t</div>";

	

	

	markup+="\r\t</div>";

	markup+="\r\t</div>";

	

	markup+="\r</ux:dialogs>";

	

	

	

	return markup;





}





DWPE_WindowFactory_Class.prototype.messageListTemplate=function()

{



	var markup="";

	

	markup+="<ux:dialogs class='dwpe-window-container also-resize %POSITION%  %MODE%' width='%WIDTH%' height='%HEIGHT%'>";

	

	markup+="\r\t<div class='window %TYPE% %RESIZABLE%'>";

	

	markup+="\r\t<div class='top'>";

	markup+="\r\t\t<div class='left'>";

	

	markup+="\r\t\t\t %ICON% %TITLE%";

	

	

	markup+="</div>";

	markup+="\r\t\t<div class='right'>";

	

	markup+=DWPE_FormFactory.generateLinkMarkup({'type':'link','label':'','icon':'closetab','command':'js::cancelDialog();','tooltip':'Close Dialog'});

	

	

	

	markup+="\r\t\t</div>";

	

	

	markup+="\r\t\t</div>";

	

	markup+="\r\t<div class='middle also-resize WindowRegion'>";

	

	markup+="\r\t\t\t %CONTENT%";

	

	markup+="\r\t</div>";

	

	

	markup+="\r\t<div class='bottom'>";

	

	markup+="\r\t\t<div class='left'>";

	markup+="\r\t\t</div>";

	

	markup+="\r\t\t<div class='right'>";

	

	markup+="%BUTTON-1%";

	

	markup+="%BUTTON-2%";

	

	markup+="%RESIZER%";

	

	markup+="\r\t\t</div>";

	

	

	markup+="\r\t</div>";

	markup+="\r\t</div>";

	

	markup+="\r</ux:dialogs>";

	

	

	

	return markup;





}





DWPE_WindowFactory_Class.prototype.generateDialogMarkup=function(args)

{



	var markup=this.dialogTemplate();

	

	

		markup=

		markup.replace('%TYPE%',args.type)

			  .replace('%RESIZABLE%',args.resizable)

			  .replace('%POSITION%',args.position)

			  .replace('%TITLE%',args.title)

			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('short'))

			  .replace('%ICON%',"")

			  .replace('%WIDTH%',args.width)

			  .replace('%HEIGHT%',args.height)

			  .replace('%MODE%',args.mode);

			  

			  

	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');

	

		btn.label="OK";

		btn.command="js::closeDialog()";

		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));

		

		

		btn.label="Cancel";

		btn.command="js::cancelDialog()";

		markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));

		



	if(args.resizable=="resizable")

		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");

	else

		markup=markup.replace('%RESIZER%',"");

		

	

	return markup;





}



DWPE_WindowFactory_Class.prototype.generateLOVDialogMarkup=function(args)



{



	try{



	var markup=this.dialogTemplate();



		



		var table_args=DWPE_Base_Class.decodeJSONString("{'type':'table',k1:[{c1:'Column',d1:'fullname','key':'','item_type':'normal','width':'100','sort':'not','align':'left','format':'text','visibility':' '},{c1:'Column',d1:'fullname','key':'','item_type':'normal','width':'100','sort':'not','align':'left','format':'text','visibility':' '},{c1:'Column',d1:'fullname','key':'','item_type':'normal','width':'100','sort':'not','align':'left','format':'text','visibility':' '}],'mode':'tables','row_header':'none','row_banding':'row-band-even','column_banding':' ','grid_lines':' ','num_rows':'20','num_visible_rows':'10','totaling':'none','totaling_frequency':'5','menubar':'','toolbar':'','qbe':'show','column_footer':'hidden','statusbar':'visible','name':'lov-dialog-table'}");



			



		markup=



		markup.replace('%TYPE%',args.type)



			  .replace('%RESIZABLE%',args.resizable)



			  .replace('%POSITION%',args.position)



			  .replace('%TITLE%',args.title)



			  .replace('%CONTENT%',DWPE_TableFactory.generateTableMarkup(table_args))



			  .replace('%ICON%',"")



			  .replace('%WIDTH%',args.width)



			  .replace('%HEIGHT%',args.height)



			  .replace('%MODE%',args.mode);



			  



			  



	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');



	



		btn.label="OK";



		btn.command="js::closeDialog()";



		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));



		



		



		btn.label="Cancel";



		btn.command="js::cancelDialog()";



		markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));



		







	if(args.resizable=="resizable")



		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");



	else



		markup=markup.replace('%RESIZER%',"");



		



	



	return markup;

	

	}catch(e){alert(e);}











}



DWPE_WindowFactory_Class.prototype.generateConfirmationDialogMarkup=function(args)

{



	var markup=this.messageListTemplate();

	

		markup=

		markup.replace('%TYPE%',args.type)

			  .replace('%RESIZABLE%',args.resizable)

			  .replace('%POSITION%',args.position)

			  .replace('%TITLE%', "Confirmation")

			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('confirmation-dialog'))

			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('confirm'))

			  .replace('%WIDTH%',args.width)

			  .replace('%HEIGHT%',args.height)

			  .replace('%MODE%',args.mode);

			  

			  

	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');

	

		btn.label="OK";

		btn.command="js::closeDialog()";

		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));

		

		

		btn.label="Cancel";

		btn.command="js::cancelDialog()";

		markup=markup.replace('%BUTTON-2%','');

		



	if(args.resizable=="resizable")

		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");

	else

		markup=markup.replace('%RESIZER%',"");

		

	

	return markup;





}



DWPE_WindowFactory_Class.prototype.generateInfoDialogMarkup=function(args)

{



	var markup=this.messageListTemplate();

	

		markup=

		markup.replace('%TYPE%',args.type)

			  .replace('%RESIZABLE%',args.resizable)

			  .replace('%POSITION%',args.position)

			  .replace('%TITLE%', "Info")

			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('info-dialog'))

			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('info'))

			  .replace('%WIDTH%',args.width)

			  .replace('%HEIGHT%',args.height)

			  .replace('%MODE%',args.mode);

			  

	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');

	

		btn.label="OK";

		btn.command="js::closeDialog()";

		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));

		

		

		btn.label="Cancel";

		btn.command="js::cancelDialog()";

		markup=markup.replace('%BUTTON-2%',"");

		



	if(args.resizable=="resizable")

		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");

	else

		markup=markup.replace('%RESIZER%',"");

		

	

	

	return markup;





}



DWPE_WindowFactory_Class.prototype.generateWarningDialogMarkup=function(args)

{



	var markup=this.messageListTemplate();

	

		markup=

		markup.replace('%TYPE%',args.type)

			  .replace('%RESIZABLE%',args.resizable)

			  .replace('%POSITION%',args.position)

			  .replace('%TITLE%',"Warning")

			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('warning-dialog'))

			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('warning'))

			  .replace('%WIDTH%',args.width)

			  .replace('%HEIGHT%',args.height)

			  .replace('%MODE%',args.mode);

			  

	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');

	

		btn.label="Yes";

		btn.command="js::closeDialog()";

		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));

		

		

		btn.label="No";

		btn.command="js::closeDialog()";

		markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));

		



	if(args.resizable=="resizable")

		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");

	else

		markup=markup.replace('%RESIZER%',"");

		

	

	

	return markup;





}



DWPE_WindowFactory_Class.prototype.generateErrorDialogMarkup=function(args)

{



	var markup=this.messageListTemplate();

	

	

		markup=

		markup.replace('%TYPE%',args.type)

			  .replace('%RESIZABLE%',args.resizable)

			  .replace('%POSITION%',args.position)

			  .replace('%TITLE%', "Error")

			  .replace('%CONTENT%',DWPE_Utilities.getSampleContent('error-dialog'))

			  .replace('%ICON%',DWPE_Utilities.getIconMarkup('error'))

			  .replace('%WIDTH%',args.width)

			  .replace('%HEIGHT%',args.height)

			  .replace('%MODE%',args.mode);

			  

	var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');

	

		btn.label="OK";

		btn.command="js::closeDialog()";

		markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));

		

		

		btn.label="Cancel";

		btn.command="js::cancelDialog()";

		markup=markup.replace('%BUTTON-2%',"");

		



	if(args.resizable=="resizable")

		markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");

	else

		markup=markup.replace('%RESIZER%',"");

		

	

	

	return markup;





}



DWPE_WindowFactory_Class.prototype.generateMenuMarkup=function(args)

{

	var markup = "";

	

	markup+='<ux:menus class="dwpe-menu">\r\n';

	markup+="	<ul>\r\n";  

	

	for(var i in args.items)

	{

		var item=args.items[i];

		

		markup+=this.generateMenuItemMarkup(item , level=1);	

		

	}

	markup+="	</ul>\r\n";

	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);

	markup+="</ux:menus>\r\n";

	

	return markup;

}



DWPE_WindowFactory_Class.prototype.generateMenuItemMarkup=function(item,level)

{

	var markup = "";

	var indent="";

	

		for (var c=0;c<level;c++)

		{	indent+="\t";	}

	

		markup+=indent+"<li";

		

		var _class=(item.itemtype!="normal") 

		?	" "+item.itemtype+" "

		:	"";

		

		

		_class+=(item.selected) 

		?	" "+item.selected+" "

		:	"";

		

		_class+=(item.state) 

		?	" "+item.state+" "

		:	"";

		

		_class=(_class.length>0)

		?" class='"+_class+"'"

		:"";

		

		var group=(item.group) 

		?	' group="'+item.group+'"'

		:	'';

		

		var command=(item.command) 

		?	' cmd="'+item.command+'"'

		:	'';

		

		var tooltip=(item.tooltip) 

		?	' title="'+item.tooltip+'"'

		:	'';

		

		markup+=_class+group+command+tooltip+">";

		

		

		switch(item.itemtype)

		{

			case 'separator':

				markup+="<hr>"

				break;

			default:

				markup+=item.label;

				if(item.key && item.key.length>0)

					markup+="<key>"+item.key+"</key>";

				break;

				

		}

		

		

		if(item.items && item.items.length>0)

		{

			markup+="\r"+indent+"\t<ul>\r\n";  

	

			for(var i in item.items)

			{

				var child_item=item.items[i];

				

				markup+=this.generateMenuItemMarkup(child_item,level+2);	

				

			}

			markup+=indent+"\t</ul>\r\n"+indent;

		}

		

		markup+="</li>\r\n";

	

	return markup;

}















DWPE_WindowFactory_Class.prototype.z=9999;

DWPE_WindowFactory_Class.prototype.getNextZ=function()

{

	return this.z++;

}







/*open a new window with remote content*/

DWPE_WindowFactory_Class.prototype.open=function(_callee,_url)

{



	

	var $callee=$(_callee);

	var $wait=DWPE_Utilities.showWaitIcon($callee);

	

	

	$.ajax(	{	url:_url,

				cache:false,			//always get a fresh copy of the content 

				//async:false,			//always wait for the content to arrive

				success:function(data)

				{

					var markup=DWPE_Utilities.get_Object_HTML_From_AJAX(data,"");

							

							

					$wait.remove();

					DWPE_WindowFactory.processWindowMarkup(markup,$callee);

				}

						

		    } );

	

}





/*open a note window*/

DWPE_WindowFactory_Class.prototype.openNoteWindow=function(_caller,type,content)

{



		

	var $caller=$(_caller);

	var note_markup=this.noteWindowTemplate();

		content=(!content || content.length==0)?"Note window message":content;

		note_markup=note_markup.replace("%CONTENT%",content);

		

		

	

	var $win=$(note_markup);

	

		//set z-order

		$win.css('z-index',DWPE_WindowFactory.getNextZ());

		

		//add to DOM

		//we attach to #preview only for testing...in production we'd attach to body

		//$("#preview").append($win);

		$("body").append($win);

		

		

		var L=0;

		var T=0;

		

		//Get screen dimensions

		var pW = ($win.parent() === $('body'))?$win.parent().width():$win.parent().outerWidth()-2;  

		var pH = ($win.parent() === $('body'))?$win.parent().height():$win.parent().outerHeight()-2;

		

		//get window dimensions

		var wW = $win.width();

		var wH = $win.height();

		

		

		//set position of note window relative to callee

		var caller_left=$caller.offset().left - $win.parent().offset().left;

		var caller_top=$caller.offset().top - $win.parent().offset().top;

		var x_pos="";

		var y_pos="";

		

		//anchor top right by default

		L=caller_left+$caller.width()+5;

		T=caller_top-wH-5;

		x_pos="right";

		y_pos="top";

		

		//no room to the right, position left of caller if possible

		if(L+wW>pW && caller_left-wW-5>0)

		{

			x_pos="left";

			L=caller_left-wW+13;

		}

		

		//no room above, position below caller if possible

		if(T<0)

		{

			y_pos="bottom";

			T=caller_top+$caller.height();

		}

		

		

		

		//add class to window to set cone orientation

		$win.addClass('cone-points-'+y_pos+'-'+x_pos);

		

		//apply window position and animate its reveal

		$win.css({left:L+"px",top:T+"px"});

		

		//process markup of $ux tags

		DWPE_ObjectFactory.processFragment($win);





		return $win;

	

	



	

}







/*gives the passed in window all of its native behaviors*/

DWPE_WindowFactory_Class.prototype.processWindowMarkup=function(markup,$callee)

{





		var $win=$(markup);

	

		

		

		

	

						

		//set z-order

		$win.css('z-index',DWPE_WindowFactory.getNextZ());

		

		//add to DOM

		//we attach to #preview only for testing...in production we'd attach to body

		//$("#preview").append($win);

		$("body").append($win);

		DWPE_ObjectFactory.processFragment($win);

		

		var L=0;

		var T=0;

		

		//Get the screen height and width  

		var pW = ($win.parent() === $('body'))?$win.parent().width():$win.parent().outerWidth()-2;  

		var pH = ($win.parent() === $('body'))?$win.parent().height():$win.parent().outerHeight()-2;

		

		

		

		//set size

		var w=$win.attr("width");

		var h=$win.attr("height");

		

		

		if(w=="auto")

			w=$win.find('div.middle').width()+20;

		

		w=Math.min(pW*.8,w);

		$win.find('div.window').width(w);

		

		

		if(h=="auto")

			h=$win.find('div.middle').height()+20;

	

		h=Math.min(pH*.6,h)

		$win.find('div.middle').height(h);

			

	

		

		

		//set position

		if($win.hasClass('centered') || $win.hasClass('modal'))

		{

			 //center window

			 L=(pW-$win.width())/2;

			 T=(pH-$win.height())/2;

		} 

		else if($win.hasClass('anchored'))

		{

			//bl

			L=$callee.offset().left - $win.parent().offset().left;

			T=$callee.offset().top - $win.parent().offset().top;

			T+=$callee.height();

			

			//br

			if(L+$win.width()>pW)

				L=L+$callee.width()-$win.width();

			

			//tl or tr

			if(T+$win.height()>pH && T-$callee.height()-$win.height()>0)

				T=T-$callee.height()-$win.height();

			

			//shrink window

			

		}

		

		

		//don't paint the window offscreen

		T=Math.max(T,0);

		

		

		//enable resizable

		var $win_box=$win.find(">DIV.window");

		if($win_box.hasClass('resizable') && !$win_box.data("resize-init"))

		{

			

			$win_box.data("resize-init", true);

			$win_box.resizable({

									handles:'se',

									minWidth:225,

									minHeight:175,

									maxWidth:pW*.6,

									maxHeight:pH*.6,

									alsoResize: $win.closest('.dwpe-window-container').find('.also-resize')

								

								});

		}

		

		

		if($win.hasClass('modal'))

		{	//we are modal so the window shadow becomes the modal layer mask

			//force the mask to be as large as the parent (presumably that's the document)

			

			//Set height and width of mask to fill up the whole screen  

		   $win.css({	'width': pW,

						'height':pH});

			

		   //now find the window object inside our mask -- that will be the draggable window	

		   $win=$win.find(">DIV.window");

		   

		  

		} 

		

		

		

		//apply window position and animate its reveal

		$win.css({left:L+"px",top:T+"px"});

		

		$win.hide();

		

		$win.animate({height:'show',width:'show'},250);

		

		





		return $win;

}





DWPE_WindowFactory_Class.prototype.loadMenu=function($ux)

{

	

	if($ux.hasClass('context')) return;

	

	if($ux.data('menu-initialized')==true) return;

	

	

	

	$ux.data('menu-initialized',true);

	var menu_url=$ux.attr('url');

	

	

	

	if(menu_url)

	{

		//load menu then initialize	

		$.ajax(	{	url:menu_url,

						cache:false,			//always get a fresh copy of the content 

						//async:false,			//always wait for the content to arrive

						success:function(data)

						{

							

							var html=DWPE_Utilities.get_Object_HTML_From_AJAX(data,".dwpe-menu");

							

							$ux.html(html);

							DWPE_WindowFactory.initializeMenu($ux);

							

						},

						error:function(XMLHttpRequest, textStatus, errorThrown)

						{

							$ux.html('Could not find: "'+menu_url+'"');

						}

								

					} );

	}

	else

	{	

		//menu loaded inline, just initialize

		DWPE_WindowFactory.initializeMenu($ux);

		

		

	}

	

	

}







/*initializes a menu with all its behaviors the first time the user rolls over the element*/

DWPE_WindowFactory_Class.prototype.initializeMenu=function($ux)

{

	

	//evaluate dynamic content

	$ux.find('DIV.dynamic-content').each(

		function()

		{	

			DWPE_Utilities.exec(this);

		}

	);

	

	//find the UL inside our $ux

	var $mainmenu=$ux.find(">UL"); 

	

	

	//find the parents of all the ULs

	var $headers=$mainmenu.find("UL").parent();



	

	$headers.each(

	

		function(i)

		{ 

			var $_ux=$ux;

			

			

			

			

			//loop through each LI header

			var $item=$(this);

			

			if($item.hasClass('separator')) return;

			if($item.hasClass('disabled')) return;

			

			

			

			 //reference current LI header

			

			

			var $submenu=$item.find('ul:eq(0)')

							  .css({display:'block'});

			

			//insert before every ul a shadow div

			var $shadow=$("<div class='menu-shadow'></div>");

			$submenu.before($shadow);

			

			

			var $dim={	w:$item.outerWidth(true), 

						h:$item.outerHeight(true), 

						submenuW:$submenu.outerWidth(true), 

						submenuH:$submenu.outerHeight(true)

					};

			

			

			$submenu.data('timers', {});

			

			

			

			$item.data('dimensions',$dim);

				

			var isTopHeader=$item.parents("ul").length==1;

			

			$item.data('istopheader', isTopHeader);

			

			$submenu.css('top',isTopHeader?$dim.h:0); 

			

			$item.addClass(  isTopHeader? 

							'top-level-parent' : 

							'second-level-parent');

			

			if(isTopHeader)

			{

				//we must click to open the first top-level menu; thereafter menus are revealed via rollover

				$item.click(

					

					function()

					{

						/*we allow users to traverse menus on rollover after the first click;

							we permit this up until the next click

						*/

						

						var $__ux=$_ux;

						

						if( $_ux.data('show-menus')===undefined || $_ux.data('show-menus')==false)

						{

							$_ux.data('show-menus',true);

							

							//we write our handler to execute once then unbind itself

							var handler=function(event){$__ux.data('show-menus',false);  $(this).unbind(event);};

							$('body').bind('mousedown', handler )

							$item.trigger('mouseover');

							

						}

						else

						{

							$_ux.data('show-menus',false);

							$item.trigger('mouseout');

						}

						

					}

				

				);

			

			}	

			else

			//if we are not a top level menu then when our item is rolled over we mark it as selected			

			

			{

					$item.hover(

						function(e)

						{

							$(this).addClass('selected');

						},

						function(e)

						{

							$(this).removeClass('selected');

						}

						

					

					

					);

					

					var $parent=$item.find(">UL");

					var $children=$parent.find(">LI");

					if ($children.length>DWPE_WindowFactory.menuScrollThreshold)

					{

						var $up=$("<li class='menu-scroll up'><div></div></li>");

						$up.insertBefore($children[0]);

						

						var $down=$("<li class='menu-scroll down enabled'><div></div></li>");

						$down.insertAfter($children[$children.length-1]);

						

						$children.each(

						

						function(i)

						{

							if(i<DWPE_WindowFactory.menuScrollThreshold)

							{

								$(this).show();

							}

							else

							{

								$(this).hide();

							

							}

						}

						

						);

						

						

						$parent.data('first_index',0);

						$parent.data('menu-items',$children);

						$parent.data('up',$up);

						$parent.data('down',$down);

						

						

						

						

					}

				



			}

			

			

			

			var show_delay=200;

			var hide_delay=200;

			

			var anim_time=0;

			

			$item.hover(

				

				//enter

				function(e)

				{

					//if a top-level menu item has not been clicked yet, don't show menus

					if(!$_ux.data('show-menus')) return;

					

					//submenu to reveal

					var $_submenu=$submenu;

					var $_shadow=$shadow;

					

					

					

					$_submenu.find("LI").each(

						

						function()

						{

							if(!$(this).attr('title'))

							{	$(this).attr('title',' ');	}

						}

					)

				

					

					

					//reference header LI as DOM object

					var $_item=$item;

					

					if($_submenu.data("menu-items"))

					{

					

						$_submenu.data("menu-items").each(

					

							function(i)

							{

								

								var $menu_item=$(this);

								if(i<DWPE_WindowFactory.menuScrollThreshold)

								{

									$menu_item.show();

								}

								else

								{

									$menu_item.hide();

								

								}

							}

						

						);	

					}

					

					clearTimeout($_submenu.data('timers').hidetimer);

					

					$_submenu.data('timers').showtimer=setTimeout(

						function()

						{

							var dimensions=$_item.data("dimensions");

							var isTopHeader=$_item.data('istopheader');

							

							$_submenu.show();

							var menu_width=$_submenu.width();

							var menu_height=$_submenu.height();

							

							$_submenu.hide();

							

							var offsets=$_item.offset(); //{left:$_item.offset().left, top:$_item.offset().top};

							

							//$_item.data('offsets', offsets );

							

							var menuleft=(isTopHeader==true)? 0 : $_item.outerWidth();

							var menu_top=(isTopHeader==true)? $_item.height() : $_item.position().top;

							

							

							if( offsets.left+menuleft+dimensions.submenuW>$(window).width())   //calculate this sub menu's offsets from its parent

								menuleft=(isTopheader)? -dimensions.submenuW+dimensions.w : -dimensions.w;

							

							

							var z1=DWPE_WindowFactory.getNextZ();

							var z2=DWPE_WindowFactory.getNextZ();

							

							

							

							if ($_submenu.queue().length<1)

							{ //if 1 or less queued animations

								

								$_submenu.css({	left:menuleft+"px",

												width:menu_width+'px',

												top:menu_top+"px",

												zIndex: z2,

												visibility:'visible'})

										 .animate({width:'show',height:'show'}, anim_time,

										 

										 function(){

														$shadow.css('visibility','visible');

														$shadow.show();}

										 

										 );

								

								$_shadow.css({	left:menuleft+"px",

												width:menu_width+'px',

												top:menu_top+"px",

												zIndex: z1,

												height:menu_height+"px"});

							

							}

							

							

						}, show_delay  );

				},

				//leave

				function(e)

				{

					

					var $_submenu=$submenu

					var $_shadow=$shadow;

					

					

					

					//var header=$item.get(0);

					

					clearTimeout($submenu.data('timers').showtimer)

					

					$_submenu.data('timers').hidetimer=setTimeout

					(	function()

						{

							$_submenu.animate({width:'hide',height:'hide'},anim_time); 

							$_shadow.animate({width:'hide',height:'hide'},anim_time); 

							

							

							

					}, hide_delay );

					

					//if submenu scrolls, reset the scroll state when we leave

					$_submenu.data('first_index',0);

					if($_submenu.data('up'))

						$_submenu.data('up').removeClass('enabled');

					if($_submenu.data('down') )

						$_submenu.data('down').addClass('enabled');

					

				}

			) //end hover

		}) //end $headers.each()

	

	

	//set menu as initialized

	$ux.data('menu-initialized',true);

	

	

} //end function	

	

		





/*initializes a context menu with all its behaviors*/

DWPE_WindowFactory_Class.prototype.initializeContextMenu=function(markup,$ux,x,y)

{

	

	var $menu=$(markup);

	

	//find the parents of all the ULs

	var $headers=$menu.find("LI UL").parent();







	//position menu

	$menu.css({top:y,left:x,"z-index":DWPE_WindowFactory.getNextZ()});

	$('body').append($menu);

	



	

	

	

	

	$headers.each(

	

		function(i)

		{ 

			//var $_ux=$ux;

			

			//loop through each LI header

			var $item=$(this);

			

			if($item.hasClass('separator')) return;

			if($item.hasClass('disabled')) return;

			

			

			

			$item.css({zIndex: DWPE_WindowFactory.getNextZ()}) //reference current LI header

			

			

			var $submenu=$item.find('ul:eq(0)')

							  .css({display:'block'});

			

			//insert before every ul a shadow div

			var $shadow=$("<div class='menu-shadow'></div>");

			$submenu.before($shadow);

			

			

			

			var $dim={	w:$item.outerWidth(true), 

						h:$item.outerHeight(true), 

						submenuW:$submenu.outerWidth(true), 

						submenuH:$submenu.outerHeight(true)

					};

			

			

			$submenu.data('timers', {});

			

			

			

			$item.data('dimensions',$dim);

				

			$item.addClass('second-level-parent');

			

			

			$item.hover(

				function(e)

				{

					$(this).addClass('selected');

				},

				function(e)

				{

					$(this).removeClass('selected');

				}

				

			

			

			);

			

			var $parent=$item.find(">UL");

			var $children=$parent.find(">LI");

			if ($children.length>DWPE_WindowFactory.menuScrollThreshold)

			{

				var $up=$("<li class='menu-scroll up'><div></div></li>");

				$up.insertBefore($children[0]);

				

				var $down=$("<li class='menu-scroll down enabled'><div></div></li>");

				$down.insertAfter($children[$children.length-1]);

				

				$children.each(

				

				function(i)

				{

					if(i<DWPE_WindowFactory.menuScrollThreshold)

					{

						$(this).show();

					}

					else

					{

						$(this).hide();

					

					}

				}

				

				);

				

				

				$parent.data('first_index',0);

				$parent.data('menu-items',$children);

				$parent.data('up',$up);

				$parent.data('down',$down);

				

				

				

				

			}

		



			

			

			

			

			var show_delay=200;

			var hide_delay=200;

			

			var anim_time=0;

			

			$item.hover(

				

				//enter

				function(e)

				{

					//submenu to reveal

					var $_submenu=$submenu;

					var $_shadow=$shadow;

					

					

					

					$_submenu.find("LI").each(

						

						function()

						{

							if(!$(this).attr('title'))

							{	$(this).attr('title',' ');	}

						}

					)

				

					

					

					//reference header LI as DOM object

					var $_item=$item;

					

					if($_submenu.data("menu-items"))

					{

					

						$_submenu.data("menu-items").each(

					

							function(i)

							{

								

								var $menu_item=$(this);

								if(i<DWPE_WindowFactory.menuScrollThreshold)

								{

									$menu_item.show();

								}

								else

								{

									$menu_item.hide();

								

								}

							}

						

						);	

					}

					

					clearTimeout($_submenu.data('timers').hidetimer);

					

					$_submenu.data('timers').showtimer=setTimeout(

						function()

						{

							var dimensions=$_item.data("dimensions");

							//var isTopHeader=$_item.data('istopheader');

							

							$_submenu.show();

							var menu_width=$_submenu.width();

							var menu_height=$_submenu.height();

							

							$_submenu.hide();

							

							var offsets=$_item.offset(); //{left:$_item.offset().left, top:$_item.offset().top};

							

							//$_item.data('offsets', offsets );

							

							var menuleft= $_item.outerWidth();

							var menu_top= 0;//$_item.position().top;

							

							

							if( offsets.left+menuleft+dimensions.submenuW>$(window).width())   //calculate this sub menu's offsets from its parent

								menuleft=-dimensions.w;

							

							$_submenu.css({	left:menuleft+"px",

												width:menu_width+'px',

												top:menu_top+"px",

												visibility:'visible'}).show();

												

												

							

							$shadow.css({	visibility:'visible',

											left:menuleft+"px",

											width:menu_width+'px',

											top:menu_top+"px",

											height:menu_height+"px"}).show();

							

							

							

							

						}, show_delay  );

				},

				//leave

				function(e)

				{

					

					var $_submenu=$submenu

					var $_shadow=$shadow;

					

					

					

					//var header=$item.get(0);

					

					clearTimeout($submenu.data('timers').showtimer)

					

					$_submenu.data('timers').hidetimer=setTimeout

					(	function()

						{

							$_submenu.animate({width:'hide',height:'hide'},anim_time); 

							$_shadow.animate({width:'hide',height:'hide'},anim_time); 

							

							

							

					}, hide_delay );

					

					//if submenu scrolls, reset the scroll state when we leave

					$_submenu.data('first_index',0);

					$_submenu.data('up').removeClass('enabled');

					$_submenu.data('down').addClass('enabled');

					

				}

			) //end hover

		}) //end $headers.each()

	

	

	//set menu as initialized

	$ux.data('menu',$menu);

	

	return $menu;

	

	

	

	

} //end function	

	

		







/*deprecated...

DWPE_WindowFactory_Class.prototype.anchorTo=function(pos,$object,$window)

{

	var location=$object.offset();

	

	

	var wW=$(window).width();

	var wH=$(window).height();

	

	var left=0,top=0;

	var shadowWidth=shadowHeight=16;

	

	var L=location.left;

	var T=location.top;

	var W=$object.outerWidth(true);

	var H=$object.outerHeight(true);

	

	var R=wW-W;

	var B=wH-H;

	

	switch(pos)

	{

		case 'br': //anchor window to  bottom right of object

			left=L+W;

			top=T+H;

			break;			

	

		case 'tr': //anchor window to  top right of object

		default:

			

			//if we cross the right edge, paint left

			left=location.left+$object.width();

			if(left+$window.width() > windowWidth*.9 )

				left=location.left-$window.width()+shadowWidth;

			

			//if we cross the bottom edge, paint up

			top=location.top;

			if(top+$window.height() > windowHeight *.9)

				top=location.top+$object.height()-$window.height()+shadowHeight;

			

			break;			

	

	

	}

	

	//enforce window limits

	

	left=Math.min(left,R);

	top=Math.min(top,B);

	

	

	$window.css({	

				'left':left,

				'top':top

				});	



}



*/







/*this function stores default definitions for each type

 and returns them in JSON format */

DWPE_WindowFactory_Class.prototype.getDefaultArgsListForType=function(type)

{



	var i="";

	var icon=DWPE_Utilities.getRandomIcon();

	

	switch(type)

	{	

	

				

		case 'menu-item':	

		

			return {	"_class":"DWPE_WindowFactory_Class",

						"type":"menu-item",

						"label":"Menu Item "+i,

						"key":"",

						"command":"",

						"itemtype":"normal"

						

					};

						

			break;

		case 'menu-separator':	

		

			return {	"_class":"DWPE_WindowFactory_Class",

						"type":"menu-item",

						"label":"----------",

						"key":"",

						"itemtype":"separator"

						

					};

						

			break;	

		

		case 'menuitem':	

		

			return '{	"label":"Item","key":"","state":" ","tooltip":"","command":"","itemtype":"normal","selected":" ","group":""}';

		

		default:

			return {};

				

				

	}

	





}







/*this function stores default property sheet definitions for each type

 and returns them in JSON format */

DWPE_WindowFactory_Class.prototype.getPropertySheetFields=function(_type)

{



	switch(_type)

	{	

		

		case 'menu-item':

			return	[	

			

						{type:"hidden",id:"_class",name:"_class",value:"DWPE_WindowFactory"},

						{type:"hidden",id:"_type",name:"Type",value:"menu-item"},

						

						

						{type:"chooser",id:"itemtype",name:"Type",value:"normal=Normal&radio=Radio&toggle=Toggle&separator=Separator", dynamic:"dynamic"},

						{type:"chooser",id:"state",name:"State",value:" =Enabled&disabled=Disabled"},

						

						

						{type:"text",id:"label",name:"Label",value:""},

						{type:"text",id:"tooltip",name:"Tooltip",value:""},

						{type:"text",id:"key",name:"Acc. Key",value:""},

						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},

						

						

						{type:"text",id:"group",name:"Group&nbsp;Name",value:""},

						{type:"chooser",id:"selected",name:"Selected",value:" =Not Selected&on=Selected"}

						

						

						

						

						

					

						

					];

			break;

	

				

		default:

			return [];	

			break;		

	}

	





}





/* /DWPE/components/js/DWPE_TreeFactory_Class.js */

/* DWPE_TreeFactory_Class.js */

/* Set the class that our class will inherit from */
DWPE_TreeFactory_Class.prototype = new DWPE_BaseFactory_Class();

/* Set and Define our own class constructor */
DWPE_TreeFactory_Class.constructor = DWPE_TreeFactory_Class;
DWPE_TreeFactory_Class.prototype._super = DWPE_BaseFactory_Class.prototype;

function DWPE_TreeFactory_Class() {
    this._class = "DWPE_TreeFactory_Class";
    
    
    $(".tree-node").live(	'mousedown',
								function(event)
								{
									
									var $item=$(this);
									
									 //don't execute if callee is disabled
									if(DWPE_Utilities.isDisabled($item)) return false;
	
									
									var cmd=$item.attr('cmd');
									
									DWPE_Utilities.performCommand($item,cmd);
									
									return false;	
								
							});
    
}


    function getTree(node) {
        return node.closest('.dwpe-tree');
    }
    
    function getRoot(tree) {
        return tree.data('root') || setRoot(tree);
    }
    
    function setRoot(tree, root) {
        if(!root || !root.length) {
            root = tree.find('.root:first');
        }
        tree.data('root', root);
        return root;
    }

    function getLastNode(tree) {
        return tree.data('lastNode') || setLastNode(tree);
    }
    
    function setLastNode(tree, node) {
        if (!node || !node.length) {
            node = getRoot(tree).children('li.node:last');
            while (node.length && node.children('ul.branch').length) {
                node = node.find('>ul.branch>li.node:last');
            }
        }
        tree.data('lastNode', node);
        return node;
    }

    function scrollTo(node) {
        var scrollPane = node.closest('.scrollPane');
        var scrollPaneTop = scrollPane.scrollTop();
        var scrollPaneHeight = scrollPane[0].clientHeight;
        var scrollPaneLeft = scrollPane.scrollLeft();
        var scrollPaneWidth = scrollPane[0].clientWidth;
        
        var status = node.children('.status');
        var icon = node.children('.icons');
        var label = node.children('.label');
        
        var nodeTop = label.position().top;
        var nodeBottom = nodeTop + label.outerHeight(true);
        var nodeLeft = node.is('.open, .closed') ? node.position().left : 
                        status.attr('class').length ? status.position().left : icon.position().left;
        var nodeRight = label.position().left + label.outerWidth(true);
        
        if (nodeTop < 0) {
            scrollPane.scrollTop(scrollPaneTop + nodeTop);
        } else if (nodeBottom > scrollPaneHeight) {
            scrollPane.scrollTop(scrollPaneTop - scrollPaneHeight + nodeBottom);
        }
        
        if (nodeLeft < 0) {
            scrollPane.scrollLeft(scrollPaneLeft + nodeLeft);
        } else if (nodeRight > scrollPaneWidth) {
            scrollPane.scrollLeft(scrollPaneLeft - scrollPaneWidth + nodeRight);
        }
    }

    /***** tree node state *****/

    /*** focus ***/
    
    function getFocus(tree) {
        return tree.data('focus') || $();
    }

    function focus(node) {
        if(node.length) {
            var tree = getTree(node);
            blur(getFocus(tree));
            scrollTo(node);
            tree.data('focus', node);
        }
        return node.addClass('focused');
    }

    function blur(node) {
        if(node.length) {
            getTree(node).removeData('focus');
        }
        return node.removeClass('focused');
    }

    /*** selection ***/
    
    function getSelection(tree) {
        return tree.data('selected') || $();
    }

    function select(nodes) {
        if(nodes.length) {
            var tree = getTree(nodes.first());
            var selected = getSelection(tree).add(nodes);
            tree.data('selected', selected);
            tree.trigger('treeselect', {added: nodes, removed: $(), selection: selected});
        }
        return nodes.addClass('selected');
    }

    function deselect(nodes) {
        if(nodes.length) {
            var tree = getTree(nodes.first());
            var selected = getSelection(tree).not(nodes);
            tree.data('selected', selected);
            tree.trigger('treeselect', {added: $(), removed: nodes, selection: selected});
        }
        return nodes.removeClass('selected');
    }
    
    function toggleSelection(nodes) {
        var selected = nodes.filter('.selected');
        var unselected = nodes.not('.selected');
        var tree = getTree(nodes.first());
        var selected = getSelection(tree).not(selected).add(unselected)
        tree.trigger('treeselect', {added: selected, removed: unselected, selection: selected});
        tree.data('selected', selected);
        return nodes.toggleClass('selected');
    }

    /*** contiguous selection anchor ***/

    function getAnchor(tree) {
        return tree.data('anchor') || $();
    }
    
    function setAnchor(node) {
        var tree = getTree(node);
        clearAnchor(tree);
        tree.data('anchor', node);
        return node.first().addClass('anchor');
    }

    function clearAnchor(tree) {
        getAnchor(tree).removeClass('anchor');
        tree.removeData('anchor');
        return tree;
    }
    
    /***** event processors *****/
    
    function upArrowKey(ev, node) {
        if(ev.ctrlKey && ev.altKey) {
            scrollTo($('.root .node:visible:first', ev.target));
        } else if (!node.length) {
            // if no node has focus, select and focus the first visible node, if any
            node = $('.root .node:visible:first', ev.target);
            if (node.length) {
                select(focus(node));
            }
        } else {
            var tree = getTree(node);
            if (getRoot(tree).children('.node:first')[0] !== node[0]) {
                // if any node but the first has focus
                var prevNode = node.preceding('.node:visible');
                if (prevNode.length) {
                    if (tree.is('.multiselect') && ev.shiftKey) {
                        // shift up
                        var anchor = getAnchor(tree);
                        if (!anchor.length) {
                            anchor = setAnchor(node);
                        }
                        if (!prevNode.precedes(anchor[0])) {
                            deselect(node);
                        } 
                        select(prevNode);
                    } else {
                        clearAnchor(tree);
                        if (!tree.is('.discontiguous') || !ev.ctrlKey) {
                            // not ctrl up
                            deselect(getSelection(tree));
                            select(prevNode);
                        }
                    }
                    focus(prevNode);
                }
            }
        }
    }
    
    function downArrowKey(ev, node) {
        if(ev.ctrlKey && ev.altKey) {
            scrollTo($('.root .node:visible:last', ev.target));
        } else if (!node.length) {
            // if no node has focus, select and focus the first visible node, if any
            node = $('.root .node:visible:first', ev.target);
            if (node.length) {
                select(focus(node));
            }
        } else {
            var tree = getTree(node);
            var lastNode = getLastNode(tree)[0];
            var nextNode = node.following('.node:visible');
            // make sure the next visible node is not after the last node in *this^ tree
            if (nextNode.length && !nextNode.follows(lastNode)) {
                if (tree.is('.multiselect') && ev.shiftKey) {
                    // shift down
                    var anchor = getAnchor(tree);
                    if (!anchor.length) {
                        anchor = setAnchor(node);
                    }
                    if (!anchor.precedes(nextNode[0])) {
                        deselect(node);
                    }
                    select(nextNode);
                } else {
                    clearAnchor(tree);
                    if (!tree.is('.discontiguous') || !ev.ctrlKey) {
                        // not ctrl down
                        deselect(getSelection(tree));
                        select(nextNode);
                    }
                }
                focus(nextNode);
            }
        }
    }
    
    function leftArrowKey(ev, node) {
        if (node.is('.open')) {
            DWPE_TreeFactory.collapse(node);
        } else {
            upArrowKey(ev, node);
        }
    }
    
    function rightArrowKey(ev, node) {
        if (node.is('.closed')) {
            DWPE_TreeFactory.expand(node);
        } else {
            downArrowKey(ev, node);
        }
    }
    
    function spaceKey(ev, node) {
        if (ev.ctrlKey || ev.metaKey) {
            // ctrl space
            var tree = getTree(node);
            if (!node.is('.selected') && !tree.is('.discontiguous')) {
                deselect(getSelection(tree));
            }
            toggleSelection(node);
        }
        ev.preventDefault();
    }
    
    var osx = /Macintosh/.exec(navigator.userAgent);
    
    function mouseButton(ev, node) {
        if (node.is('.selected') && ev.which !== 1 && !ev.ctrlKey) {
            return;
        }
        var tree = getTree(node);
        if (tree.is('.multiselect') && ev.shiftKey) {
            // shift click
            var anchor = getAnchor(tree);
            if (anchor.length || !tree.is('.discontiguous')) {
                deselect(getSelection(tree));
            }
            if (!anchor.length) {
                anchor = setAnchor(getFocus(tree));
            }
            if (!anchor.length || node[0] === anchor[0]) {
                select(node);
            } else if (node.follows(anchor[0])) {
                select(node.precedingUntil('.anchor','.node:visible').andSelf().add(anchor));
            } else {
                select(node.followingUntil('.anchor','.node:visible').andSelf().add(anchor));
            }
            focus(node);
        } else if ((ev.ctrlKey && (!osx || ev.type === 'contextmenu')) || !ev.ctrlKey) {
            // in firefox on osx, ctrl click triggers the contextmenu event, and in webkit it triggers BOTH contextmenu 
            // and click events, so handle contextmenu on osx while ignoring superfluous ctrl click
            clearAnchor(tree);
            if (ev.ctrlKey) {
                // ctrl click
                if (tree.is('.discontiguous')) {
                    toggleSelection(node);
                    focus(node);
                } else if (tree.is(':not(.multiselect)') && node.is('.selected')) {
                    deselect(node);
                }
            } else {
                deselect(getSelection(tree).not(node));
                select(node);
                focus(node);
            }
        }
    }

    function hoverLabel(ev, label) {
        var scrollPane = label.closest('.scrollPane');
        var scrollPaneWidth = scrollPane[0].clientWidth;
        var labelLeft = label.position().left;
        var labelRight = labelLeft + label.outerWidth(true);
        if (labelLeft < 0 || labelRight > scrollPaneWidth) {
            label.attr('title', label.text());
        }
    }

    function hoverDisclosure(ev, disclosure) {
        var node = disclosure.parent();
        if (node.is('.open')) {
            disclosure.attr('title', 'Collapse');
        } else if (node.is('.closed')) {
            disclosure.attr('title', 'Expand');
        } else if (node.is('.loading')) {
            disclosure.attr('title', 'Retrieving data');
        }
    }

    function showContextMenu(ev, tree) {
        var menuContents = $(DWPE_WindowFactory.generateMenuMarkup(ux_data['sample-tree-context-menu-short'])).addClass('context');
        var focus = getFocus(tree);
        var selected = getSelection(tree);
        var selectedClosed = selected.filter('.closed');
        var selectedOpen = selected.filter('.open');
        var point = (ev.type === 'mouseup') ? {x: ev.clientX, y: ev.clientY} :
                        {x: focus.find('>.label').offset().left + 50, y: focus.offset().top + 10};
                        
        if (selected.length && selectedClosed.length && !selectedOpen.length) {
            // hide collapse
            menuContents.find('li:contains(Collapse)').hide();
        } else {
            // hide expand
            menuContents.find('li:contains(Expand)').hide();
            if (!selectedOpen.length) {
                // disable collapse
                menuContents.find('li:contains(Collapse)').addClass('disabled');
            }
        }
        if (!selectedClosed.length && !selected.find('.closed').length) {
            menuContents.find('li:contains(Expand All Below)').addClass('disabled');
        }

        if (!selectedOpen.length && !selected.find('.open').length) {
            menuContents.find('li:contains(Collapse All Below)').addClass('disabled');
        }
        
        if (!focus.parents('.node').length) {
            menuContents.find('li:contains(Show as Top)').addClass('disabled');
        }

        var menu = DWPE_WindowFactory.initializeContextMenu($('<ux tabindex="0" class="dwpe-menu context"/>').append(menuContents), focus, point.x, point.y);
        menu.find('li[cmd]').each(function() {
            var menuItem = $(this);
            var match = /(js|url)::(.+)/.exec(menuItem.attr('cmd')) || [''];
            var fn = new Function(match[1] === 'js' ? match[2] : 'window.location.href="' + match[2] +'"');
            $(this).click(function() {
                fn.apply(focus);
                focus.focus();
                return false;
            })
            $(this).removeAttr('cmd');
        });    
        menu.focus();
        $('body').one('mouseup', function() {
            menu.hide();
            setTimeout(function(){
                menu.remove();
                getTree(focus).focus();
            })
        });
    }

    /***** event handlers *****/

    function clickEventHandler(ev) {
        var span = $(this);
        var node = span.parent();
        if (span.is('.disclosure')) {
            if (node.is('.closed')) {
                DWPE_TreeFactory.expand(node);
            } else if (node.is('.open')) {
                DWPE_TreeFactory.collapse(node);
            }
        } else if (span.is(':not(.status)')) {
            mouseButton(ev, node);
        }
    }
    
    function blurEventHandler(ev) {
        getFocus(getTree($(this))).removeClass('focused');
    }
    
    function focusEventHandler(ev) {
        getFocus(getTree($(this))).addClass('focused');
    }
    
    function eventCanceller(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        return false;
    }
    
    var keys = {space: 32, left:37, up:38, right:39, down:40, m: 77, M: 109};

    function keyEventHandler(ev) {
        if (ev.type === 'keydown' && ev.keyCode === keys.space) {
            spaceKey(ev, getFocus(getTree($(this))));
            ev.preventDefault();
        } else if (($.browser.mozilla && ev.type === 'keypress') || (!$.browser.mozilla && ev.type === 'keydown')) {
            // handling keypress for mozilla and keydown for other browsers gives consistent key repeat behavior
            var focus = getFocus(getTree($(this)));
            switch (ev.keyCode || ev.charCode) {
                case keys.up: 
                    upArrowKey(ev, focus);
                    break;
                case keys.down:
                    downArrowKey(ev, focus);
                    break;
                case keys.right:
                    rightArrowKey(ev, focus);
                    break;
                case keys.left:
                    leftArrowKey(ev, focus);
                    break;
                case keys.m:
                case keys.M:
                    if (ev.ctrlKey && ev.altKey) {
                        showContextMenu(ev, getTree($(this)));
                    }
                    break;
                default:
                    return;
            }
            ev.preventDefault();
        }
    }
    
    function hoverEventHandler(ev) {
        var span = $(ev.target);
        switch (ev.type) {
            case 'mouseover':
                if (span.is('.label')) {
                    hoverLabel(ev, span);
                } else if (span.is('.disclosure')) {
                    hoverDisclosure(ev, span);
                }
                break;
            case 'mouseout':
                span.removeAttr('title');
                break;
        }
    }
    
    function mouseUpEventHandler(ev) {
        if (ev.which === 3 && !ev.ctrlKey) {
            var span = $(ev.target);
            if (span.is('.label, .icons')) {
                showContextMenu(ev, getTree(span.parent()));
            }
        }
    }
    
    function resizeEventHandler(ev) {
        var tree = $(this);
        var actionBar = tree.find('>.actionBar');
        var menu = actionBar.find('>.menu');
        var toolbar = actionBar.find('>.toolbar');
        var separator = actionBar.find('>.Separator');
        var scrollPane = tree.find('>.scrollPane');
        toolbar.width(actionBar.outerWidth(true) - menu.outerWidth(true) - separator.outerWidth(true));
        scrollPane.height(tree.height() - actionBar.outerHeight(true));
        // toolbar overflow handling wasn't triggering until I added the following... 
        // probably just need to bind the resize event handler to the toolbar and not the window.
        $(window).resize();
    }
    
    /*** event handler bindings ***/
    
    $(function() {
        $.each({
            'click contextmenu': clickEventHandler,
            'hover': hoverEventHandler,
            'mouseup': mouseUpEventHandler
        }, function(type, fn) {
            $('.root .node>span').live(type, fn);
        });

        $.each({
            'selectstart contextmenu': eventCanceller,
            'keydown keypress': keyEventHandler,
            'blur': blurEventHandler,
            'focus': focusEventHandler
        }, function(type, fn) {
            $('.dwpe-tree .scrollPane').live(type, fn);
        });  
    });

    function initializeTree(tree) {
        $('#preview').css({'overflow':'hidden','maxHeight':600});
        
        // just for kicks, let's make the preview window resizable
        $('#preview').removeData('resizable').resizable()
        
        setRoot(tree);
        setLastNode(tree);
        tree.resize(resizeEventHandler).trigger('resize');
        
        // proxy all cmds in menus and toolbars
        setTimeout(function() {
            $('.dwpe-toolbar li[cmd]', tree).each(function() {
                var button = $(this);
                var cmd = button.attr('cmd');
                button.mousedown(eventCanceller).click(function() {
                    new Function(cmd).apply(tree);
                    tree.find('.scrollPane').focus();
                    return false;
                });
                button.removeAttr('cmd');
            });
            $('.dwpe-menu li[cmd]', tree).each(function() {
                var menuItem = $(this);
                var match = /(js|url)::(.+)/.exec(menuItem.attr('cmd'));
                if(match) {
                    var cmd = match[2].replace(/'/g,'"')
                    menuItem.click(function() {
                        new Function(match[1] === 'url' ? 'location.href=\'' + cmd +'\'' : cmd).apply(tree);
                        tree.find('.scrollPane').focus();
                    });
                }
                menuItem.removeAttr('cmd');
            });
        });
    };
    
   
    
    
    var xhtmlnsRegex = / xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/;
    var xsltIndentTransform = '<transform xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0"><output method="xml" indent="yes"/><template match="@*|node()"><copy><apply-templates select="@*|node()"/></copy></template></transform>';
    
    function prettyPrint(elem) {
        var html;
        if (typeof XMLSerializer === 'object') {
            // in webkit, perform xslt identity transform, but output with indent=yes
            var xslt = new XSLTProcessor();
            xslt.importStylesheet(new DOMParser().parseFromString(xsltIndentTransform, 'text/xml'));
            html = new XMLSerializer().serializeToString(xslt.transformToFragment(elem[0],document));
        } else if (typeof XMLSerializer === 'function') {
            // mozilla doesn't support indent attribute of xsl:output, but includes E4X, so use that instead
            html = XML(new XMLSerializer().serializeToString(elem[0])).toXMLString().replace(xhtmlnsRegex, '');
        } else {
            // sorry, no pretty print for you IE...
            html = $("<div/>").append(elem).html();
        }
        
        do {
            // replace each leading indent (2 spaces) with a tab
            var oldHtml = html;
            html = html.replace(/\n(\t*)  /g,"\n$1\t");
        } while (oldHtml !== html);
        
        return html;   
    }

    /**************************************************************************
     * tree factory prototype 
     */
DWPE_TreeFactory_Class.prototype.update=function() {
            this.markup = this.generateMarkup(this.properties);
        }

DWPE_TreeFactory_Class.prototype.make= function($ux) {
            var _class = this.getRootClass($ux.attr("class"));
            switch (_class) {
                case "dwpe-tree":
                    initializeTree($ux);
                    break;
            }
        }
        
DWPE_TreeFactory_Class.prototype.generateTreeNode= function (nodeData, lazy) {
            
            
            var parent=false;
            var node_state='';
            if (nodeData.items && nodeData.items.length) 
            {	
                parent=true;
                node_state=(nodeData.state === 'closed') ? ' closed' : ' open';
                
            }
            else if (lazy)
            {
            	node_state="closed";
            }	
            
            var markup='';
            	markup+='<li class="node'
            	markup+=node_state;
            	markup+='">';
            	markup+='<span class="disclosure"/>';
            	markup+='<span class="status';
            	
            	if (nodeData.status) 
            	{
                	markup+=" "+nodeData.status;
       			}
       			
       			markup+='" ';
       			
                
                if (nodeData.status && nodeData.statusTooltip) 
                {
                    markup+=' title="'+node.statusTooltip+'"';
                }
            	
            	markup+='"/>';
            	
            	
            	var cmd='';
            	// attach command
				if(nodeData.command)
				{
					cmd = ' cmd="'+nodeData.command+'"';
				
				}
				
				var icon = (nodeData.icon && lazy=="1")?'icons':nodeData.icon;
                var node_state=(lazy=="1")?'closed':nodeData.state;
				
				//icon
				markup+=(nodeData.icon && (!nodeData.items || !nodeData.items.length)) ? DWPE_Utilities.getIconMarkup(nodeData.icon) : '<span class="icons tree-node" '+cmd+'/>';
				
				//label
				markup+='<span class="label tree-node" '+cmd+'>'+nodeData.label+'</span>';
				
            	
            	
            	if (nodeData.items && nodeData.items.length) 
            	{
            	
					var self = this;
					
					markup+='<ul class="branch">';
			   
					for(var i=0;i<nodeData.items.length;i++)
					{
						markup+=self.generateTreeNode(nodeData.items[i], nodeData.lazy);
					}
            
            		markup+="</ul>";
            	}
            	
            	markup+='</li>';
            	
            
            return markup;
        }
        
DWPE_TreeFactory_Class.prototype.generateMarkup= function(args) {
            
            var treeData = args;
            var markup="<ux:trees class='dwpe-tree";
            
            if (treeData.lazy && treeData.lazy=="1") 
            {
                markup+=' lazy';
            }
            
            if(treeData.selection=='noncontiguousmultiselect')
            {	markup+=' discontiguous';	}
            
            if(treeData.selection=='multiselect')
            {	markup+=' multiselect';	}
            
            
            
            markup+="' style='";
            
            if(treeData.height) 
            {	
            	markup+= "height:"+treeData.height+"'";
            }
            
            if(treeData.width) {
                
                markup+= "width:"+treeData.width+"'";
            }
            
            markup+="'>";
            
            
           markup+='<ol class="actionBar">';
           
           
           
           if(args.menubar.length>0 && args.menubar!="none")			
			markup+="\t<ux:menus class='dwpe-menu' url='"+args.menubar+"'><!--args_menu:{'url':'"+args.menubar+"'}--></ux:menus>\r\n";
		
		   if(args.toolbar.length>0 && args.toolbar!="none")			
				markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";
			
           
           
           
           markup+='</ol>';
           
           
           markup+='<div tabindex="0" class="scrollPane">';
           
           markup+='<ul class="root branch">';
           
           
           var self = this;
           
           for(var i=0;i<treeData.items.length;i++)
           {
           		markup+=self.generateTreeNode(treeData.items[i], treeData.lazy);
           }
           
           markup+='</ul>';
           
           markup+='</div>';
           
           markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
           
           markup+="</ux:trees>";
            return markup;
        }
       
DWPE_TreeFactory_Class.prototype.getDefaultArgsListForType=function(type) {
            switch (type) {
                case 'tree-item':
                    return {
                        "_class": "DWPE_TreeFactory_Class",
                        "type": "tree-item",
                        "label": "Tree node",
                        "state": " ",
                        "status": " ",
                        "icon": "file",
                        "items":[],
                        "command": " "
                    };
                    break;
               case 'treeitem':
               		return ' {"label": "Tree node","state": " ","status": " ","icon": "file","command": "","items":[]}';
               		break;
            }
        }

DWPE_TreeFactory_Class.prototype.getPropertySheetFields= function(type) {
            switch (type) {
                case 'tree-item':
                    return [
                        {type:"hidden", id:"_class", name:"_class", value:"DWPE_TreeFactory"},
                        {type:"hidden", id:"_type", name:"Type", value:"tree-item"},
                        {type:"chooser", id:"state", name:"State", value:" =Enabled&open=Open&closed=Closed"},
                        {type:"chooser", id:"status", name:"Status", value:" =None&warning=Warning"},
                        {type:"text", id:"label", name:"Label", value:""},
                        {type:"text", id:"icon", name:"Icon", value:"file"},
                        {type:"text", id:"command", name:"Command", value:"", help:"(javascript::alert('hi') or url::http://oracle.com)"}
                    ];
            }
        }

    
    /**************************************************************************
     * public APIs 
     */

        DWPE_TreeFactory_Class.prototype.expand=function(nodes) {
            var self = this;
            return nodes.filter('.closed').each(function() {
                var node = $(this);
                if (node.children('.branch').length) {
                    node.removeClass('closed').addClass('open');
                } else {
                    // a '.closed' node with no branch needs to be lazily loaded
                    self.load(node);
                }
            }).end();
        }

        DWPE_TreeFactory_Class.prototype.expandAll=function(tree) {
            // expands nodes in the scratch area also
            this.expand(tree.find('.closed'));
            return tree;
        }

        DWPE_TreeFactory_Class.prototype.expandTo=function(node) {
            this.expand(node.parents('.node'));
            return focus(node);
        }
        
        DWPE_TreeFactory_Class.prototype.expandAllBelow=function(nodes) {
            this.expand(nodes.find('.closed').andSelf());
            return nodes;
        }

        DWPE_TreeFactory_Class.prototype.collapse=function(nodes) {
            return nodes.filter('.open').removeClass('open').addClass('closed').end();
        }

        DWPE_TreeFactory_Class.prototype.collapseAll=function(tree) {
            // collapses nodes in the scratch area also
            this.collapse(tree.find('.open'));
            return tree;
        }

        DWPE_TreeFactory_Class.prototype.collapseAllBelow=function(nodes) {
            this.collapse(nodes.find('.open').andSelf());
            return nodes;
        }

        DWPE_TreeFactory_Class.prototype.load=function(node) {
            function randomInt(n) {
                return Math.floor(n * Math.random());
            }
            node.removeClass('closed').addClass('loading');
            setTimeout(function() {
                node.removeClass('loading');
                if (!!Math.round(Math.random())) {
                    node.addClass('open');
                    var branch = $('<ul class="branch"/>');
                    var childCount = randomInt(4) + 1;
                    var child;
                    while (childCount--) {
                       child = $('<li class="node closed"/>').appendTo(branch);
                       $('<span class="disclosure"/>').appendTo(child);
                       $('<span class="status"/>').appendTo(child);
                       $('<span class="icons"/>').appendTo(child);
                       $('<span class="label"/>').text('Lazily evaluated node').appendTo(child);
                    }
                    branch.appendTo(node);
                    if (getLastNode(getTree(node)).precedes(child[0])) {
                        setLastNode(getTree(node), child);
                    }
                } else {
                    node.find('.icons').addClass('ico-file');
                }
            }, randomInt(1000));
        }
        
        DWPE_TreeFactory_Class.prototype.showAsTop=function(node) {
            var self = this;
            var tree = getTree(node);
            var root = getRoot(tree);
            var scratch = root.prev('.scratch');
            if (!scratch.length) {
                scratch = $('<div class="scratch"/>').insertBefore(root);
            }
            var container = root.parent();
            this.goToTop(tree);
            if(node.parent()[0] === root[0]) {
                // showAsTop(topLevelNode) == goToTop(tree), no?
                return;
            }
            var placeHolder = $('<li class="placeHolder"/>').insertBefore(node);
            scratch.append(root.children('li'));
            $('<div class="hierSelector icons i31"/>').appendTo(root).click(function(ev) {
                var hierPanel = $('<div class="hierPanel"/>');
                $.each(Array.prototype.slice.call(placeHolder.parents('.node')), function() {
                    var parent = $(this);
                    var label = parent.find('>.label').text();
                    var hierBranch = $('<ul class="hierBranch"/>');
                    $('<li class="hierNode"/>').text(parent.find('>.label').text()).appendTo(hierBranch).click(function() {
                        self.showAsTop(parent);
                    });
                    hierBranch.append(hierPanel.children('ul')).appendTo(hierPanel);
                });
                hierPanel.appendTo(tree);
                window.setTimeout(function() {
                    // defer this click handler on tree until after the current click event bubbles
                    tree.one('click contextmenu', function() {
                        hierPanel.remove();
                    });
                });
            });
            node.appendTo(root);
            setLastNode(tree);
            return node;
        }
        
        DWPE_TreeFactory_Class.prototype.goToTop=function(tree) {
            var root = getRoot(tree);
            var scratch = root.prev('.scratch');
            var placeHolder = scratch.find('.placeHolder');
            root.children('.hierSelector').remove();
            if (placeHolder.length) {
                placeHolder.after(root.children('.node')).remove();
                scratch.children('.node').appendTo(root);
            }
            setLastNode(tree);
            return tree;
        }

        DWPE_TreeFactory_Class.prototype.goUp=function(tree) {
            var root = getRoot(tree);
            var prevTop = root.find('.node:first');
            this.goToTop(tree);
            this.showAsTop(prevTop.parents('.node:first'));
        }

        DWPE_TreeFactory_Class.prototype.getTree=function(elem) {
            if(elem.nodeType) {
                elem = $(elem);
            }
            return elem.closest('.dwpe-tree');
        }

        DWPE_TreeFactory_Class.prototype.getFocus=function(tree) {
            return getFocus(tree);
        }
        
        DWPE_TreeFactory_Class.prototype.getSelection=function(tree) {
            return getSelection(tree);
        }
        
        DWPE_TreeFactory_Class.prototype.scrollTo=function(node) {
            return scrollTo(node);
        }
        
        DWPE_TreeFactory_Class.prototype.addAfter= function(precedingNode, nodeData) {
            var tree = getTree(precedingNode);
            var newNode = $(DWPE_TreeFactory.generateTreeNode(nodeData, tree.is('.lazy'))).insertAfter(precedingNode);
            if(getLastNode(tree).filter(precedingNode).length) {
                setLastNode(newNode);
            }
            return newNode;
        }

        DWPE_TreeFactory_Class.prototype.addBefore=function(followingNode, nodeData) {
            var tree = getTree(followingNode);
            return $(DWPE_TreeFactory.generateTreeNode(nodeData, tree.is('.lazy'))).insertBefore(followingNode);
        }
        
        DWPE_TreeFactory_Class.prototype.addChild=function(parentNode, nodeData) {
            var tree = getTree(parentNode);
            var branch = parentNode.children('.branch');
            if(branch.length === 0) {
                parentNode.addClass('open').find('.icons').attr('class','icons');
                branch = $('<ul class="branch"/>').appendTo(parentNode);
            }
            var newNode = $(DWPE_TreeFactory.generateTreeNode(nodeData, tree.is('.lazy'))).prependTo(branch);
            if(getLastNode(tree).filter(parentNode).length) {
                setLastNode(newNode);
            }
            return newNode;
        }

        DWPE_TreeFactory_Class.prototype.remove=function(nodes) {
            var tree = getTree(nodes);
            var descendentsAndSelf = nodes.find('.node').andSelf();
            var needNewLastNode = false;
            deselect(getSelection(tree).filter(descendentsAndSelf));
            blur(getFocus(tree).filter(descendentsAndSelf));
            clearAnchor(getAnchor(tree).filter(descendentsAndSelf));
            if(getLastNode(tree).filter(nodes).length) {
                needNewLastNode = true;
            }
            var parentBranches = nodes.parent();
            nodes.remove();
            var emptyParentBranches = parentBranches.filter(':not(:has(li))');
            emptyParentBranches.parent('.node').removeClass('open').removeClass('closed').children('.icons').addClass('ico-file');
            emptyParentBranches.remove();
            if(needNewLastNode) {
                setLastNode(tree);
            }
        }

/* Make an Instance of TreeFactory that others can call on to create trees */
DWPE_TreeFactory = new DWPE_TreeFactory_Class();


/* /DWPE/components/js/DWPE_TableFactory_Class.js */


/*Set the class that our class will inherit from*/
DWPE_TableFactory_Class.prototype=new DWPE_BaseFactory_Class();

/*Set and Define our own class constructor*/
DWPE_TableFactory_Class.constructor=DWPE_TableFactory_Class;
DWPE_TableFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;
function DWPE_TableFactory_Class()
{
	this._class="DWPE_TableFactory_Class";
	this.row_height=18; //18 pixels is standard row height
	
	//setup live() methods
	
	

	
	
	/*manage sorting*/
	$(  ".dwpe-table TR.columns>TH.sort-not , .dwpe-table TR.columns>TH.sort-none , .dwpe-table TR.columns>TH.sort-asc , .dwpe-table TR.columns>TH.sort-desc")
			.live('mouseover mouseout',
							
							
							function()
							{
								var $th=$(this);
								
								if($th.attr("className").length==0 || $th.hasClass('sort-not')) {	return	};
								
								/*create sort control first time in*/
								if(	!$th.data('sort-controls') )
								{
									var $sort=$('<div class="sort"></div>');
										$sort.data('th',$th);
									
									var $div=$th.find('>div');
										$div.prepend($sort);
										$sort.data('col',"col"+$div.attr('col'));
									$th.data('sort-controls',$sort);
									
									
									
									$sort.mouseout(
										
										function(){$(this).removeClass('over asc desc')}
										
									);
									
									$sort.mousemove(
										
										function(event)
										{	
											var x=event.layerX;
											
											if(x<16)
											{	$sort.addClass('over asc');
												$sort.removeClass('desc');
												$sort.attr('title',"Sort Ascending");
												
											}
											else
											{	$sort.addClass('over desc');
												$sort.removeClass('asc');
												$sort.attr('title',"Sort Descending");
											}
											
											
										}
										
									);
									
									
									$sort.click(
										
										function(event)
										{	
											var $ux=$sort.closest('.dwpe-table');
											
											
											//remove sort active state from all columns that can be sorted
											$ux.find("th.sort-asc,th.sort-desc").each(
											
												function(){$(this).removeClass().addClass('sort-none');}
											);
											
											//determine the direction of the sort
											var sort_dir="asc";
											if(event.layerX>$sort.width()/2)
											{
												sort_dir="desc";	
											}
											
											//update the state of the sort control (in header and footer)
											$ux.find('div.'+$sort.data('col')).each(
												
												function()
												{
													$(this).closest('th').removeClass().addClass('sort-'+sort_dir);
												}
													
											);
											
											//find the cell number
											//find all cells and store their rows in an array;
											//sort the rows array
											
											var col="col"+$sort.data('th').find('>div').attr('col');			
											var rows=[];
											var $table_body=$sort.closest('.dwpe-table').find('table.table-body>TBODY:eq(0)');
											$table_body.find('TR').each(
											
												function()
												{
													
													var $row=$(this);
													
													//hide subtotals rows when performing sorts
													if($row.hasClass('subtotal'))
													{
														$row.hide();
														return;
													}
													
													if($row.hasClass('grand-totals'))
													{
														$row.hide();
														return;
													}
													
													
													
													var row={};
														row.object=$row;
													var	$column=$row.find("div."+col);
														
														//look for a select tag
														row.value=value=$column.find("select:eq(0)").find(":selected").text();
							
														if(!row.value || row.value.length===0)
														{	//if we can't find text to search on, look for an input tag and use its value
															row.value=$column.find("input,select").val();
														}
														
														if(!row.value || row.value.length===0)
														{	//if we can't find text to sort on, pick off an icon's title attribute
															row.value=$column.find(">.icons").attr('title');
														}
														
														if(!row.value || row.value.length===0)
														{
															row.value=$column.text().trim();
														}
														
														
														
														
														
														
														
														var date=new Date(row.value);
														
														if(!isNaN(row.value) && row.value.indexOf('.')>-1)
															row.value=parseFloat(row.value);
														
														//convert integers
														else if(!isNaN(row.value) && row.value.indexOf('.')==-1)
															row.value=parseInt(row.value);
														
														//convert dates
														else if(Object.prototype.toString.call(date) === "[object Date]")
														{
															var time=date.getTime();
															if(!isNaN(time))
															{	row.value=time;	}
															
														}
														
														//convert floats
														
														
														
														rows.push(row);		
												}
											
											);
											
											rows.sort(function(a,b){	//console.log(a.value,b.value,a.value<b.value); 
																		return a.value>b.value;	});
											
											if(sort_dir=="desc")
												rows.reverse();
											
											$(rows).each(function(){$table_body.append(this.object)});
											
											
											
											
											
											
											
										}
										
									);
									
									
								}
								$th.data('sort-controls').toggleClass('show');
								
								return false;
							}
							
	);
	
	
	$(".dwpe-table.click-to-edit DIV.table-body-container>TABLE>TBODY>TR").live
	(
		'dblclick',
		function()
		{
			//transfer values back into hidden row
			
			//show hidden row
			
			//hide dbl-click'd row
			
			//transfer values from dbl-click'd row into editable row
			
			//append editable row directly below dbl-click row 
			
			
			return false;
		}
	);
	
	
	/*manage qbe execution*/
	$(".dwpe-table TR.qbe INPUT").live
	(
		'keydown',
		function(event)
		{
			//process qbe only when users presses enter
			if(event.keyCode!=13) return;
			
			//var query=new Array();
			
			
			
			var $fld=$(this);
			
			
			/*get all qbe input fields*/
			var $input_divs=$fld.closest("TR.qbe").find("DIV");
			
			//prepare query array
			var query=new Array();
			$input_divs.each(
				function()
					{
						var $div=$(this);
						var o={};
						
							o.id=$div.attr("col");
						var $fld=$div.find('input');
						
							if($fld.length>0 && $fld.val().length>0)
							{	o.term=$fld.val().toLowerCase();
								
								if(o.term.indexOf("*")==0)
								{
									o.term=o.term.replace("*","");
									o.search="contains";
								}
								else
								{
									o.search="starts-with";
								}
							
								query.push(o);
							}
					}
			)
			
			
			
			//evaluate query
			var $ux=$fld.closest('.dwpe-table');
			var rows_found=0;
			
			$("table.table-body TR:first-child").css({"visibility":"visible"})
			
			
			$ux.find('table.table-body TR.subtotal').hide();
			
			$ux.find('table.table-body TR').each(
			
				function()
				{
					var $row=$(this);
					
					//hide subtotal rows when doing queries
					if($row.hasClass('subtotal'))
					{
						$row.hide();
						return;
					}
					
					$row.show();
					$row.removeClass('selected');
					var matched=true;	
					
					$(query).each(
					
						function()
						{
						
							
							if(matched==false) return;
							
							var $column=$row.find('div.col'+this.id);
							
							
							//look for a select tag
							var value=value=$column.find("select:eq(0)").find(":selected").text();
							
							
							if(!value || value.length==0)
							{	//if we can't find text to search on, look for an input tag and use its value
								value=$column.find("input").val();
							}
							
							
							if(!value || value.length==0)
							{	//if we can't find text to search on, pick off an icon's title attribute
								value=$column.find(">span.icons").attr('title');
							}
							
							if(!value || value.length==0)
							{
								value=$column.text().trim();
							}
							
							
							
							
							
							
							
							if(this.search=="starts-with")
							{
								matched= (value.toLowerCase().indexOf(this.term)==0);
							}
							else
							{
								matched=(value.toLowerCase().indexOf(this.term)>-1);
							}
							
							
						
						}
					
					);
					
					if(matched==false)
						{	$row.hide();	}
					else
						{	$row.show();
							rows_found++
						}
					
					
				}
			);
			
			if(rows_found==0)
			{
				$("table.table-body TR:first-child").css({'display':"table-row","visibility":"hidden"})
			}
			
			DWPE_TableFactory.updateRowsSelected($ux);
			
			return false;
		
		}
	
	
	);
	

	
	
	//manage row selection
	$(".dwpe-table table.table-body>TBODY>TR").live
	(
		'mouseup'
		,
		function(event)
		{
			var $row=$(this);
				if($row.hasClass('subtotal')) return;
			
			var $ux=$row.closest('.dwpe-table');
			var $last_active_row=$ux.data('last-active-row');
			
			var $rows=$row.closest('TBODY').find('TR');
			
			
			if(event.ctrlKey==true)//non-contiguous selection
			{
			
				$row.addClass('selected active');
				
				
				
			}
			else if(event.shiftKey==true)//contiguous selection
			{
				
				//remove all selections except the last active selection
				$rows.each(
				
					function()
					{
						var $myrow=$(this);
						if(!$myrow.hasClass('active'))
						{	$myrow.removeClass('selected');	}
					}
				)
				//add the new selection
				$row.addClass('selected');
				
				//console.log($row.attr('rowIndex'),$last_active_row.attr('rowIndex'),$row==$last_active_row);
				
				if($last_active_row && $row.attr('rowIndex') == $last_active_row.attr('rowIndex')) // user has selected only one row so we are done
					return;
				
				
				
				var begin_selection=false;
				var end_selection=false;
				
				var state="";
				$rows.each(
				
					
					function()
					{
						
						var $myrow=$(this);
							$myrow.removeClass('active');
						
							if($myrow.is(':hidden')) return;
							if($myrow.hasClass('subtotal')) return;
							
						
						if(begin_selection==false && $myrow.hasClass('selected'))
						{
							begin_selection=true;
							end_selection=false;
							
						}
						else if(begin_selection==true && end_selection==false && $myrow.hasClass('selected'))
						{
							end_selection=true;
						}
						else if(begin_selection==true && end_selection==true)
						{
							$myrow.removeClass('selected');
						}
						else if(begin_selection==false && end_selection==false)
						{
							$myrow.removeClass('selected');
						}
						else if(begin_selection==true && end_selection==false)
						{
							$myrow.addClass('selected');
						}
						
						
					
					}
				
				);
				
				$row.addClass('active');
				
				
			}
			else //single row selection
				
			{
				$rows.removeClass('selected');
				$rows.removeClass('active');
				$row.addClass('selected active');
				
			}
				
				
			//TO-DO: trigger a custom event annoucing the rows selected from this table	
				
				
			DWPE_TableFactory.updateRowsSelected($ux)
			
			$ux.data('last-active-row',$row);	
			
			return false;
		}
	);

	
	return this;	

}

/*Make an Instance of TableFactory that others can call on to create windows*/
DWPE_TableFactory=new DWPE_TableFactory_Class();


/*overrides DWPE_Base_Class.update()*/
DWPE_TableFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}




DWPE_TableFactory_Class.prototype.make=function($ux)
{
	
	
	
	var _class=this.getRootClass($ux.attr("class"));
	
	switch(_class)
		{
			case "dwpe-table":
			case "dwpe-table-standalone":
				$("<div style='padding:10px'>Loading...</div>").insertBefore($ux.find('.table-body').hide());
				setTimeout(function(){DWPE_TableFactory.initialize($ux);},1000);
				break;
		}
	
}


DWPE_TableFactory_Class.prototype.initialize=function($ux)
{

	
	var $table_headers=$ux.find('>DIV.table-headers-container');
	var $table_body=$ux.find('>DIV.table-body-container');
	
	
	//initialize table body height			
	$table_body.height($table_body.attr('height')||200);
	
	/*synchronize table body scroll with table header scroll*/
	$table_headers.scroll
	(
	
		function()
		{
			var a=$table_headers.attr('scrollLeft');
				  $table_body.attr('scrollLeft',a);
		}
	
	);
	
	
	$table_body.scroll
	(
		function()
		{
			var a=$table_body.attr('scrollLeft');
				  $table_headers.attr('scrollLeft',a);
		}
	);
	
	
	/*manage column resizing*/
	$('TH>DIV',$table_headers).resizable
	(	{	handles:'e',
			helper:'col-resize-helper',
			minWidth:50,
			start:function(event,ui)
			{
			
			},
			
			resize:function(event,ui)
			{
				//force the helper to be the height of the table
				
				var $helper=$(ui.helper);
				var $table_body=$(this).closest('.dwpe-table').find("DIV.table-body-container");
				var $table_header=$(this).closest('.dwpe-table').find("DIV.table-headers-container");
				
				$helper.css(	{	'height':$table_header.height()+$table_body.height(),
										'top':$table_header.offset().top							
										});
				
				
				
			},
			
			stop:function(event,ui)
			{
				
				/*resize column*/
				var $column=$(this);
				var n=$column.attr('col');
				var w=$column.width();
				
				
				$column.width(w);
				$column.closest('th').width(w);//css('width',w);
				
				$ux.find("div.col"+n).each
				(
					function(event,ui)
					{
						var $col=$(this);
						var $parent=$col.closest('td','th');
						var $fld=$("input",$col);
						
						$col.width(w);
						$parent.width(w);
						$fld.width(w);
					}
				);
				
			
				
			}
		}
		
	);
	
	
	//clone editable fields from first row into subsequent rows
	var first_row_fields=new Array();
	$table_body.find("table.table-body>tbody>tr").each
				(
					function(row)
					{	
						var $row=$(this);
						
						$row.find("td>div").each
						(	function(col)
							{
								var $cell=$(this);
								
								if(row==0)
								{
									var $ux=$cell.find(":dwpe_initialized");
									if($ux.length>0 && !$ux.hasClass('dwpe-link'))
										first_row_fields.push($cell);
									else
										first_row_fields.push(false);
								}
								
								else if(first_row_fields[col]!=false)
								{
									var value=$cell.text();
									var $new_cell=first_row_fields[col].clone(true).removeClass("initialized");
									$cell.replaceWith( $new_cell 	);
									
									$new_cell.find("input,select").val(value);
									
									
									
								}
							}
						);
						
						//if(row==0)	DWPE_ObjectFactory.processFragment($row);
						
						
					}
				);
	
	DWPE_ObjectFactory.processFragment($table_body);
	$ux.find('.table-body').show().prev().hide();
}	



DWPE_TableFactory_Class.prototype.generateMarkup=function(args)
{

	switch(args.type.toLowerCase())
		{
			case "read-only":
			case "direct-edit":
			case "click-to-edit":
			case "table":
				return this.generateTableMarkup(args);
				break;
			default:
				return "[undefined type]";	
				break;
		}
	
}


DWPE_TableFactory_Class.prototype.generateTableMarkup=function(args)
{


	var _args=$.extend(true,{},args); 
	
	var mode=(args.mode)?args.mode:"tables";
		
	var markup="<ux:"+mode+" class='dwpe-table";
		markup+=" "+args.row_banding;
		markup+=" "+args.column_banding;
		markup+=" "+args.grid_lines;
		
		markup+="'";
		markup+=" name='"+((args.name)?args.name:"Table")+"'";
		
		markup+=">";
		
		
	 
		if(args.menubar.length>0 && args.menubar!="none")			
			markup+="\t<ux:menus class='dwpe-menu' url='"+args.menubar+"'><!--args_menu:{'url':'"+args.menubar+"'}--></ux:menus>\r\n";
		
		if(args.toolbar.length>0 && args.toolbar!="none")			
			markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args_toolbar:{'url':'"+args.toolbar+"'}--></ux:toolbars>\r\n";
			
		markup+=this.process(_args,args);
		
		
		
		markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
	
		markup+="\r</ux:"+mode+">";
		
		
		
		
		return markup;


}


 


DWPE_TableFactory_Class.prototype.process=function(tree,args)
{

	
	//get max depth
	var max_depth=0;
	var leaf_nodes=new Array();
	
	var getTreeDepth=function(node,depth)
	{
		node.row=depth;
		node.colspan=0;
		
		var i_len=(node.items)?node.items.length:0;
		for(var i=0;i<i_len;i++)
		{	
			var child_node=node.items[i];
				child_node.parent=node;
			getTreeDepth(child_node,depth+1);
		}
		
		if(i_len==0)
		{	
			leaf_nodes.push(node);
			node.leaf=true;
		}
		else
		{
			node.leaf=false;
		}
		
		max_depth=Math.max(depth,max_depth);
	
	}
	
	
	
	getTreeDepth(tree,0);

	//set colspans from the bottom up
	var len=leaf_nodes.length;
	for (var i=0;i<len;i++)
	{
			var node=leaf_nodes[i];
				node.col_id=i+1;
			var parent=node.parent;
			
			while(parent)
			{
				parent.colspan+=1;
				parent=parent.parent;
			}
			
	}
	
	
	//set rowspans from the top down
	var assignTableHeaderRowspan=function(node,rowspan)
	{
		node.rowspan=(!node.items || node.items && node.items.length==0)?rowspan:1;     //we take 1 row if we have children, otherwise we take up the remaining rows
		if(node.items)
		{
			var k_len=node.items.length;
			for(var k=0;k<k_len;k++)
			{
				assignTableHeaderRowspan(node.items[k],rowspan-1);
			}
		}
	
	
	}
	
	var i_len=tree.items.length;
	
	for (var i=0;i<i_len;i++)
	{
		assignTableHeaderRowspan(tree.items[i],max_depth,0);	
	}

	

	//walk down each branch of the tree assigning row and colspans
	var setColumnHTML=function(node)
		{
			if(node.items)
			{
				var j_len=node.items.length;
				for (var j=0;j<j_len;j++)
				{
					setColumnHTML(node.items[j]);
				
				}
				
			}
			var colspan=(node.colspan>1)?" colspan='"+node.colspan+"'":"";
			var rowspan=(node.rowspan>1)?" rowspan='"+node.rowspan+"'":"";
			
			
			var align=(node.align!='left')?" "+node.align:"";
				
			var width,col_class,div_attribs,sort;
			if(node.leaf)
			{
				
				col_class =" class='";
				col_class+="sort-"+node.sort; 
				col_class+=(node.visible=="hide")?" hide":"";
				col_class+="'";
				
				
				div_attribs=" class='column"+align+" col"+node.col_id+"'";
				if(isNaN(node.width))
					node.width=100;
				width=(node.width!=parseInt(100))?" style='width:"+node.width+"'":""
			}
			else
			{
				sort="";
				visibility=
				div_attribs=" class='column-group"+align+"'";
				
				col_class =" class='";
				col_class+=(node.visible=="hide")?" hide":"";
				col_class+="'";
				width=" style='width:100%'";
			}
			
			
			var col_id =(node.col_id)?" col='"+node.col_id+"'":"";
			var div_class=" class='col"+node.col_id+" "+align+"'";
			var visibility=(node.visible=="hide")?" class='hide'":"";
			
			node.qbe_html="\r\t<th"+colspan+visibility+" ><div "+div_class+col_id+width+"><input/></div></th>";
			node.col_html="\r\t<th"+colspan+rowspan+col_class+" ><div "+col_id+width+div_attribs+">"+node.label+"</div></th>";
			node.row_html="\r\t<td"+colspan+visibility+" ><div "+width+div_class+">%VALUE%</div></td>";
			
			
		}
	
	//walk the tree from the top down, setting html accordingly
	var len=tree.items.length;
	for (var i=0;i<len;i++)
	{
		setColumnHTML(tree.items[i]);
	
	}
	/*
	
	//walk the rows of columns, collecting html
	var html="";
	var getColumnMarkup=function(node,row)
	{
		var _row=row;
		
		if(_row==node.row)
			html+=node.col_html;
	
		var len=node.items.length;
		for(var i=0;i<len;i++)
		{	getColumnMarkup(node.items[i],row);	}
		
	}
	*/
	
	//organize nodes into rows
	var rows=new Array();
	var collectIntoRows=function(node,row_index)
	{
		if(!rows[row_index]) rows[row_index]=new Array();
		
		
		if(row_index==node.row)
		{	rows[row_index].push(node);}
		
		
		var j_len=(node.items)?node.items.length:0;
		for(var j=0;j<j_len;j++)
		{
			collectIntoRows(node.items[j],row_index);
		}
	}
	
	for(var row_index=1;row_index<=max_depth;row_index++)
	{
		var i_len=tree.items.length;
		for(var i=0;i<i_len;i++)
		{
			collectIntoRows(tree.items[i],row_index);
		}
	}
	
	
		
	
	
	
	var collectColumnHTML=function(top_node,node,row)
	{
	
		top_node.rows[row] +=node.col_html;	
		
		top_node.rows[row+1]="";
					
		var j_len=(node.items)?node.items.length:0;
		for(var j=0;j<j_len;j++)
		{
			collectColumnHTML(top_node,node.items[j],row+1);
		}
		
	}
	
	var makeColumnGroups=function(top_node)
	{
		
		top_node.rows=new Array();
			
		var row=0;
			top_node.rows[row]=top_node.col_html;
		
		top_node.rows[row+1]="";
		
		
		var i_len=(top_node.items)?top_node.items.length:0;
		for(var i=0;i<i_len;i++)
		{ 
			collectColumnHTML(top_node,top_node.items[i],row+1);
		}

	}
	
	
	
		
	
	//walk top level nodes, making column group tables
	var h_len=tree.items.length;
	for(var h=0;h<h_len;h++)
	{
		makeColumnGroups(tree.items[h]);
	}
	
	
	
	//walk the rows of columns, collecting html
	var html="";
	
	html+="<div class='table-headers-container'>";
	html+="<table class='table-header' cellpadding='0' cellspacing='0'>";
	html+="<thead>";
		
	/*qbe*/

	
	html+="<tr class='qbe "+tree.qbe+"'>";
	
	if(tree.row_header=='visible' || tree.row_header=='numbered')
		{	html+='<th class="row-header"><div col="0" tabindex="0">&nbsp;</div></th>';	}
	
	for(var j=0;j<leaf_nodes.length;j++)
	{	html+=leaf_nodes[j].qbe_html;	}
	html+="</tr>";
	
	
	/*column headers*/	
	for(var row=1;row<=max_depth;row++)
	{
		var items=rows[row];
		
		
		html+="<tr class='columns'>";
		
		if(row==1 && (tree.row_header=='visible' || tree.row_header=='numbered'))
			{	html+='<th class="row-header" rowspan="'+max_depth+'"><div col="0">&nbsp;</div></th>';	}
		
		for(var j=0;j<items.length;j++)
		{	html+=items[j].col_html;	}
		html+="</tr>";
		
	}
	
	html+="</thead>";
	html+="</table>";
	html+="</div>";
	
	
	
	//walk the rows of leaf_node columns, collecting row html
	
	html+="<div class='table-body-container' height='"+(tree.num_visible_rows*this.row_height)+"px'>";
	html+="<table class='table-body' cellpadding='0' cellspacing='0'>";
	

	
	html+="<tbody>";
	
	
	//Build up persona array
	var personas=new Array();
	
	//tree.num_rows=Math.min(tree.num_rows*1,20);
	for(var row=0;row<tree.num_rows*1;row++)
	{	
		personas.push(this.getRandomPersona());
		
	}
	
	//var list_of_values=new Array();
	
	//Build up table data
	var subtotals=new Array();
	var grandtotals=new Array();
	
	var unique_values=new Array();
	var table_data=new Array();
	var subtotal_row=0;
	var counters=new Array();
	for(var row=0;row<tree.num_rows*1;row++)
	{	
		
		var persona=personas[row];
		var row_data=new Array();
		
		for(var j=0;j<leaf_nodes.length;j++)
		{	var node=leaf_nodes[j];
			var value=persona[node.value];
			row_data.push(value);
			
			//if(!list_of_values[j]) list_of_values[j]={};
			//list_of_values[j][value]=value;
			
			
			//push this value onto the set of unique values
			//if(!unique_values[node.label])
			//	unique_values[node]=new Array();
			
			//unique_values[node.label][value]=0;		
			
			switch(node.value)
			{
			
				case 'currency':
					var n=parseFloat(value);
					
						if(counters[j]==undefined)    counters[j]=0;
						if(grandtotals[j]==undefined) grandtotals[j]=0;
						
						var c=counters[j]+n;
							counters[j]=parseFloat(c);
							
						var g=grandtotals[j]+n;
							grandtotals[j]=parseFloat(g);
						
						
					break;
				case 'int100':
				case 'int100_100':
					var n=parseInt(value);
						counters[j]=(counters[j])?counters[j]+n:n;	
						grandtotals[j]=(grandtotals[j])?grandtotals[j]+n:n;
					break;
					
				
				default:
					counters[j]="";
					grandtotals[j]="";
					break;
			}
			
	
			
			
			
			
			
		}
		
		var counts=new Array();
		for(var i=0;i<counters.length;i++) {counts.push(counters[i]);}
		subtotals.push(counts);
		
		
		
		//reset counters at every interval
		if(row>1 && row % 5==0)
		{
			for(var i=0;i<counters.length;i++) {counters[i]=0}
		}
		
		table_data.push(row_data);
		
	}
	
	/*
	
	for(var i=0;i<list_of_values.length;i++)
	{
		for each column (i) take the associative array of 
		  values and make it into an array of strings, 
		  for use in making column editable fields 
		var o=list_of_values[i];
		var a=new Array();
		for (var value in o)
		{	a.push({label:value,value:value,selected:"0"});	}
	
		list_of_values[i]=a;
	
	}
	*/
	
	
	
	
	//evaluate table data
	for(var row=0;row<tree.num_rows*1;row++)
	{
		var row_data=table_data[row];
		var row_counters=subtotals[row];
		
		
		
		if(html.length>23000)
		{
			/*monitor buffer and don't let it exceed 23000 characters, 
			if it does cap the num of rows at the current row number
			and stop generating more rows*/
			args.num_rows=row;
			break;
		}
		
		
		html+=this.makeRow(row,tree.row_header,row_data,row_counters,'row',leaf_nodes); //,list_of_values);
			
			
			
		if(		tree.totaling=='sub-grand'
				&&
				(row+1) % tree.totaling_frequency == 0)
		{
			html+=this.makeRow(row,tree.row_header,row_data,row_counters,'subtotal',leaf_nodes);	
		}
		
	}
	html+="</tbody>"
	html+="</table>";
	html+="</div>";
	
	
	
	
	/*grand totals*/	
	if(tree.totaling=='grand' || tree.totaling=='sub-grand')
	{
		html+="<div class='table-headers-container'>";
		html+="<table class='table-body' cellpadding='0' cellspacing='0'>";
		
		
		html+="<tbody>";
		
		html+="<tr class='grand-totals'>";
			
		if(tree.row_header=='visible' || tree.row_header=='numbered')
			{	html+='<td class="row-header"><div col="0">&nbsp;</div></td>';	}
			
		var label_applied=false;		
		for(var j=0;j<leaf_nodes.length;j++)
		{	
			var node=leaf_nodes[j];
			var value;
			
			if (label_applied==false && grandtotals[j]=="")
			{
				label_applied=true;
				value="<div align='right'>Total</div>";
			}
			else
			{
				switch(node.value)
						{	
							case 'currency':
								value=parseFloat(grandtotals[j]).toFixed(2);
								break;
							default:
								value=grandtotals[j];
								break;
						}
			}
			html+=leaf_nodes[j].row_html.replace(/%VALUE%/,DWPE_Utilities.format(leaf_nodes[j].value,value)) ;	}
	
		html+="</tr>";
			
		
		html+="</tbody>";
		html+="</table>";
		html+="</div>";
	}
	
	
	/*column footers*/	
	if(tree.column_footer=='visible')
	{
		html+="<div class='table-headers-container'>";
		html+="<table class='table-header' cellpadding='0' cellspacing='0'>";
		html+="<thead>";
		
		for(var row=1;row<=max_depth;row++)
		{
			var items=rows[row];
			
			
			html+="<tr class='columns'>";
			
			if(row==1 && (tree.row_header=='visible' || tree.row_header=='numbered'))
				{	html+='<th class="row-header" rowspan="'+max_depth+'"><div col="0">Row</div></th>';	}
			
			for(var j=0;j<items.length;j++)
			{	html+=items[j].col_html;	}
			html+="</tr>";
			
		}
		
		html+="</thead>";
		html+="</table>";
		html+="</div>";
	}		



	if(tree.statusbar=='visible')
	{
		html+="<table class='table-statusbar'>";
		html+="<tr>";
		
		html+="<td class='rows-selected'>&nbsp;</td>";
		html+="<td>&nbsp;</td>";
		html+="<td>&nbsp;</td>";
		
		html+="</tr>";
		
		html+="</table>"
	
	}


	
	return html;



}



DWPE_TableFactory_Class.prototype.makeRow=function(row,row_header,row_data,row_counters,row_type,leaf_nodes) //,list_of_values)
{
		var html="";
		
		
		switch(row_type)
		{
			case 'subtotal':
				html+="\r<tr class='subtotal'>";
				if(row_header=='visible')
					{	html+='<td class="row-header"><div class="col0">&nbsp;</div></td>';	}
				else if(row_header=='numbered')
					{	html+='<td class="row-header"><div class="col0">'+(row+1)+'</div></td>';	}
				
				break;
			case 'row':
			default:
				html+="\r<tr>";
				if(row_header=='visible')
					{	html+='<td class="row-header"><div class="col0">&nbsp;</div></td>';	}
				else if(row_header=='numbered')
					{	html+='<td class="row-header"><div class="col0">'+(row+1)+'</div></td>';	}
				
				break;
		
		}
		
	
		var label_applied=false;
		for(var j=0;j<leaf_nodes.length;j++)
		{	var node=leaf_nodes[j];
			var value=""; 
			
			switch(row_type)
			{
				case 'subtotal':
					
					
					if (label_applied==false && row_counters[j]=="")
					{
						label_applied=true;
						value="<div align='right'>Subtotal</div>";
					}
					else
					{
						
						switch(node.value)
						{	
							case 'currency':
								value=parseFloat(row_counters[j]).toFixed(2);
								break;
							default:
								value=row_counters[j];
								break;
						}
								
					}
					
					
					
					
					
					
					break;
				case 'row':
				default:
					value=row_data[j]
					break;
			
			}
			
			
			value=DWPE_Utilities.format(node.value,value);
			
			if(row>0 && (node.format!="link")) node.format="text";
			html+=node.row_html.replace(/%VALUE%/,this.makeColumnValue(node.format,value));
			
			
			
		}
		
		html+="\r</tr>";
		
		
		return html;

}




DWPE_TableFactory_Class.prototype.last_names=
["Smith",
"Johnson",
"Williams",
"Jones",
"Brown",
"Davis",
"Miller",
"Wilson",
"Moore",
"Taylor",
"Anderson",
"Thomas",
"Jackson",
"White",
"Harris",
"Martin",
"Thompson",
"Garcia",
"Martinez",
"Robinson",
"Yee",
"Gupta"];


DWPE_TableFactory_Class.prototype.first_names=
[
"Katelyn",
"Ariana",
"Bailey",
"Camilla",
"Kumal",
"Jennifer",
"Melanie",
"Gianna",
"Charlotte",
"Paige",
"Whitney",
"Autumn",
"Payton",
"Faith",
"Sara",
"Isabelle",
"Caroline",
"Mary",
"Zoey",
"Gracie",
"Megan",
"Jordan",
"Robert",
"Aaron",
"Brayden",
"Thomas",
"Cameron",
"Hunter",
"Austin",
"Adrian",
"Connor",
"Owen",
"Aidan",
"Jason",
"Julian",
"Wyatt",
"Charles",
"Luis",
"Carter",
"Juan",
"Chase",
"Diego"

];

DWPE_TableFactory_Class.prototype.companies=
[
"Acme Inc",
"Arrow Ltd.",
"Featherweight Industries",
"XYZ Corp.",
"Greene & Greene",
"T. Moser & Sons",
"Stickley Co."
];

DWPE_TableFactory_Class.prototype.street=
[
"Foster Road",
"Dempsey Avenue",
"Kingston Highway",
"Rileyville Road",
"Hanover Avenue",
"Dale St."
];

DWPE_TableFactory_Class.prototype.city=
[
"Burlingame",
"Manchester",
"Ithaca",
"Arlington",
"Redwood Shores",
"Princeton"
];

DWPE_TableFactory_Class.prototype.state=
[
"MA",
"NY",
"CA",
"NJ",
"TX",
"FL"
];

DWPE_TableFactory_Class.prototype.getRandomInteger=function(low,high)
{
	if(high)
		return parseInt(Math.random()*(high-low))+low;
	else
		return parseInt(Math.random()*low);
		
	
}


DWPE_TableFactory_Class.prototype.month_names=new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec");
DWPE_TableFactory_Class.prototype.currency_codes=new Array("USD", "CNY", "CAD", "AUD", "GBP", "JPY", "EUR");

DWPE_TableFactory_Class.prototype.getRandomDate=function(low,high)
{
	var d=new Date();
	var newtimems=d.getTime()+(this.getRandomInteger(low,high)*24*60*60*1000);
		d.setTime(newtimems);

		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		return this.month_names[curr_month]+ " " +curr_date + ", " + curr_year;

}

DWPE_TableFactory_Class.prototype.getRandomTime=function()
{
	var d=new Date();
	var newtimems=d.getTime()+(this.getRandomInteger(0,23)*60*this.getRandomInteger(0,59)*1000);
		d.setTime(newtimems);

		var hh = this.getRandomInteger(1,12);
		var mm = this.getRandomInteger(0,59);
			mm = (mm<10)?'0'+mm:mm;
		var meridiem = (this.getRandomInteger(0,23)>12)?"AM":"PM";
		return hh+ ":" +mm + " " + meridiem;

}

DWPE_TableFactory_Class.prototype.getRandomPersona=function()
{
	
	var o={};
	
	
		o.exchange=this.getRandomInteger(200,999);
		o.lastname=this.last_names[parseInt(Math.random()*this.last_names.length)];
		o.firstname=this.first_names[parseInt(Math.random()*this.first_names.length)];
		o.fullname=o.firstname+" "+o.lastname;
		o.phone1="("+o.exchange+") "+this.getRandomInteger(200,999)+"-"+this.getRandomInteger(1000,9999);
		o.phone2="("+o.exchange+") "+this.getRandomInteger(200,999)+"-"+this.getRandomInteger(1000,9999);
		o.company=this.companies[parseInt(Math.random()*this.companies.length)];
		o.email=o.firstname+"."+o.lastname+"@"+o.company.replace(/[ \\.]/gi,"")+".com";
		o.street=this.street[parseInt(Math.random()*this.street.length)];
		o.address=this.getRandomInteger(999)+" "+o.street;
		o.city=this.city[parseInt(Math.random()*this.city.length)];
		o.state=this.state[parseInt(Math.random()*this.state.length)];
		o.zip=this.getRandomInteger(10000,99999)+"";
		o.empty="";
		o.currency=this.getRandomInteger(200,9999)+"."+this.getRandomInteger(0,99);
		o.currency=parseFloat(o.currency).toFixed(2);
		o.currencycode=this.currency_codes[parseInt(Math.random()*this.currency_codes.length)];
		o.status=DWPE_Utilities.getRandomStatusIconMarkup();
		o.past=this.getRandomDate(-1000,-1);
		o.future=this.getRandomDate(1,1000);
		o.int100=this.getRandomInteger(0,100);
		o.int100_100=this.getRandomInteger(-100,100);
		
		
		return o;
	
	
}


DWPE_TableFactory_Class.assignTableHeaderRowspan=function(node,rowspan)
{
	node.rowspan=(node.items && node.items.length==0)?rowspan:1;     //we take 1 row if we have children, otherwise we take up the remaining rows
	if(node.items)
	{
		var k_len=node.items.length;
		for(var k=0;k<k_len;k++)
		{
			DWPE_TableFactory_Class.assignTableHeaderRowspan(node.items[k],rowspan-1);
		}
	}


}


DWPE_TableFactory_Class.prototype.makeColumnValue=function(type,value)
{
	switch(type)
	{
		case 'text':
			return value;
		case 'link':
			return "<a href='javascript:void(0)'>"+value+"</a>";
		case 'spinbox':
		case 'checkbox':
		case 'radiogroup':
		case 'textbox':
		case 'textarea':
		case 'singleselectchoicelist':
		case 'multiselectlistbox':
		case 'multiselectchoicelist':
		case 'lov':
		case 'datetimepicker':
		
			
			var args=DWPE_FormFactory.getDefaultArgsListForType(type);
				args.help="";
				
				args.items=[{"label":value,"value":value,"checked":"0"}];
				args.default_value=value;
				args.label=value;
				args.text=value;
				
			return DWPE_FormFactory.generateMarkup(args);
	}

}


function toggleTableQBE()
{
	var $context=DWPE_Utilities.getContext();
	$context.closest('.dwpe-table').find("TR.qbe").toggleClass('show');
}

function deleteTableRow()
{
	var $context=DWPE_Utilities.getContext();
	var $ux=$context.closest('.dwpe-table');
	
	
	//delete selected rows and clear the rows selected status
	$ux.find("table.table-body TR.selected").remove();
	DWPE_TableFactory.updateRowsSelected($ux);
}


DWPE_TableFactory_Class.prototype.updateRowsSelected=function($ux)
{
	
		var num_rows_selected=0;
		
		var selected_rows=[];
		$ux.find("table.table-body TR").each(
			function(){
						var $row=$(this);
						if($row.hasClass('selected'))
						{	num_rows_selected++;
							
							var str=$row.find('.col1').text();
							selected_rows.push(str);
						}
					}
		)
		
		$(document).data('selected-rows',selected_rows);
			
		var rows_msg=(num_rows_selected==0)?"&nbsp;":"Rows Selected &nbsp;&nbsp;&nbsp;"+num_rows_selected;
		
		$ux.find('TD.rows-selected').html(rows_msg);
			
}

function generateTableColumnVisibilityMenuItems()
{
	var $context=DWPE_Utilities.getContext(); 
	var $ux=$context.closest('.dwpe-table');
	var html="";
	
	var $columns=$ux.find("DIV.column");
		$columns.each(
		
			function()
			{		
				var $column=$(this);
				var menu_item=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
					menu_item.label=$column.text();
					menu_item.item_type='toggle';
					menu_item.selected=($column.parent().hasClass('hide'))?'':'on';
					menu_item.cmd="js::toggleTableColumn('"+$column.attr('col')+"')"
					
					html+=DWPE_WindowFactory.generateMenuItemMarkup(menu_item);
			}
		)
	
	$context.html(html);
	
	
}

DWPE_TableFactory_Class.prototype.showAllColumns=function()
{
	
	var $context=DWPE_Utilities.getContext(); 
	
		//update the column toggle menu items to 'on'
		$context.closest('ul').find('LI.toggle').addClass('on');
	
	var $ux=$context.closest('.dwpe-table');
		
		
		var col_ids=new Array();
		
		
		$ux.find("DIV.column").each(
		
			function()
			{
				var $div=$(this);
				var value=$div.attr('col');
				
				if(value)
					col_ids.push(value);
			}
		);
		
		
		$(col_ids).each(
		
		function()
		{
			$ux.find("DIV.col"+this).each(
			
				function()
				{
					var $div=$(this);
					var $parent=$div.closest("TH,TD");
						$parent.removeClass('hide');
					
				});
		});
		
		
}
function toggleTableColumn(col_id)
{
	var $context=DWPE_Utilities.getContext(); 
	var	$ux=$context.closest('.dwpe-table');
		
		//read state of toggle menu item to determine which state to toggle column to
		var state=$context.hasClass('on')?1:0;
		$ux.find("DIV.col"+col_id).each(
		
			function()
			{
				var $div=$(this);
				var $parent=$div.closest("TH,TD");
					
				if(state)
					$parent.removeClass('hide');
				else
					$parent.addClass('hide');

			}
		
		)
	
}



/*this function stores default definitions for each type
 and returns them in JSON format */
DWPE_TableFactory_Class.prototype.getDefaultArgsListForType=function(type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();
	
	switch(type)
	{	
	
				
		case 'column':	
		
			return {	"_class":"DWPE_TableFactory_Class",
						"type":"column",
						"label":"Column",
						"value":"fullname",
						"key":"",
						"item_type":"normal",
						"width":"100",
						"sort":"not",
						"align":"left",
						"format":"text",
						"visibility":" "
						
					};
						
			break;	
		
		
		case 'column-item':	
		
			return '{ "label":"Column" , "value":"fullname" , "key":"" , "item_type":"normal" , "width":"100" , "sort":"not" , "align":"left" , "format":"text" , "visibility":" ", items:[]}';
						
			break;	
		default:
			return {};
				
				
	}
	


}



/*this function stores default property sheet definitions for each type
 and returns them in JSON format */
DWPE_TableFactory_Class.prototype.getPropertySheetFields=function(_type)
{

	switch(_type)
	{	
		
		case 'column':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_TableFactory"},
						{type:"hidden",id:"_type",name:"Type",value:"column"},
						
						
						{type:"text",id:"label",name:"Column&nbsp;Name",value:"Column Title"},
						{type:"chooser",id:"visible",name:"Visibility",value:" =Visible&hide=Hidden"},
						{type:"chooser",id:"format",name:"Format",value:"text=Plain Text&link=Link&textbox=Text Field&textarea=Textarea&checkbox=Checkbox Group&radiogroup=Radio Group&singleselectchoicelist=Single-Select Choice List&multiselectchoicelist=Multi-Select Choice List&multiselectlistbox=Multi-Select List Box&spinbox=Spinbox"},
						{type:"chooser",id:"value",name:"Generated&nbsp;Value",value:"empty=Empty&fullname=Full Name&lastname=Last Name&firstname=First Name&company=Company&email=Email&phone1=Work Phone&phone2=Mobile Phone&address=Address&city=City&state=State&zip=Postal Code&currency=Currency&currencycode=Currency Code&status=Status Icon&past=Past Date&future=Future Date&int100=Integer [0 to 100]&int100_100=Integer [-100 to 100]"},
						{type:"chooser",id:"sort",name:"Sort",value:"not=Not Sortable&none=Not Sorted&asc=Sorted Ascending&desc=Sorted Descending"},
						
						
						{type:"chooser",id:"align",name:"Alignment",value:"left=Start&center=Center&right=End"},
						{type:"text",id:"width",name:"Width",value:"100",help:'(pixels values only)'}
						
						
						
						
						
						
						
						
					
						
					];
			break;
	
				
		default:
			return [];	
			break;		
	}
	


}


/* /DWPE/components/js/DWPE_Carousel_Class.js */

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





/* /DWPE/components/js/DWPE_Train.js */

/*generates markup for the trains that gets output to scratchpad*/

DWPE_PanelFactory.generateTrainsetMarkup=function(args)

{

	var markup = "";

	markup += '<ux:train class="dwpe-trainset';

	if (args.train_position) markup += ' ' + args.train_position;

	if (args.train_state) markup += ' ' + args.train_state;

	if (args.train_buttonbar) markup += ' ' + args.train_buttonbar;

	if (args.cmdTrainButtonSubmit) markup += ' button-bar-submit';

	if (args.cmdTrainButtonFinish) markup += ' button-bar-finish';

	if (args.cmdTrainButtonSave) markup += ' button-bar-save';

	if (args.cmdTrainButtonExit) markup += ' button-bar-exit';

	if (args.cmdTrainButtonCancel) markup += ' button-bar-cancel';

	if (args.train_process) markup += ' ' + args.train_process;

	markup += '" ';

	if (args.train_parent_url) markup += ' parentURL="' + args.train_parent_url + '" ';

	if (args.cmdTrainButtonSubmit) markup += ' onSubmit="' + args.cmdTrainButtonSubmit + '" ';

	if (args.cmdTrainButtonFinish) markup += ' onFinish="' + args.cmdTrainButtonFinish + '" ';

	if (args.cmdTrainButtonSave) markup += ' onSave="' + args.cmdTrainButtonSave + '" ';

	if (args.cmdTrainButtonExit) markup += ' onExit="' + args.cmdTrainButtonExit + '" ';

	if (args.cmdTrainButtonCancel) markup += ' onCancel="' + args.cmdTrainButtonCancel + '" ';



    markup += '>\r\n';

	markup += DWPE_PanelFactory_Class.generateTrainMarkup(args);

	markup += DWPE_PanelFactory_Class.generateTrainPanelMarkup(args);

	markup+="\n"+DWPE_Base_Class.getArgsAsString(args);

	markup+="</ux:train>\r\n";

	return markup;

}



DWPE_PanelFactory_Class.generateTrainMarkup = function(args)

{

	markup = "";

	markup+='	<ul class="dwpe-train">\r\n'; 

	for(var i in args.items)

	{

        var _class = '';

        var _tooltip = '';

		var item=args.items[i];

        var state = (item.state == '0') ? "disabled" : "";

        var icon = (item.icon == 'none') ? "" : item.icon;

        var required = (item.required_step == '1') ? "required" : "";

        var sequential_override =(item.sequential_override == '1') ? "sequential-override" : "";

        var allow_skip = (item.allow_skip == '1') ? "allow-skip" : "";

        var tooltip = (item.tooltip) ? item.tooltip : "";

		if (state || icon || required || sequential_override || allow_skip )

        {

            _class= ' class="';

            if (state) _class += state + ' ';

            if (icon) _class += icon + ' ';

            if (required) _class += required + ' ';

            if (sequential_override) _class += sequential_override + ' ';

            if (allow_skip) _class += allow_skip ;

            _class += '"';

        }

        if (tooltip)

        {

            _tooltip= ' tooltip="' + tooltip + '"';

		}

		markup+="\t\t\<li"+_class+_tooltip+">";

		markup+= item.label;

		markup+="</li>\r\n";

	}

	markup+="	</ul>\r\n";

	return markup;

}



DWPE_PanelFactory_Class.generateTrainPanelMarkup = function(args)

{

	markup="";

	markup+='\t<div class="dwpe-train-panels">\r\n';

	for(var i in args.items)

	{

		var item=args.items[i];

		if( item.content == "inline" )

		{

			markup+='\t\t<div>\r\n\t\t\t<h3>' + item.label + '</h3>' + '\r\n\t\t</div>\r\n';

		} else {

			markup+="\t\t<div content='"+ item.content +"'></div>\r\n";

		}

	}

	markup+="\t</div>\r\n";

	return markup;

}



DWPE_PanelFactory_Class.prototype.initializeTrainset = function ($ux) {

    //if we have a unique id, use it, otherwise make one

    var id = ($ux.attr("id")) ? $ux.attr("id") : DWPE_Utilities.getUniqueId();

    $ux.attr("id", id);



    //save our preferred size into $ux data object

    var size = "100%";

    $ux.data('size', size);



    //pick up the default train, if not defined, assign first train

    var default_train = $ux.attr("default_train");

    default_train = (default_train) ? default_train : 0;



    $ux.data("current-train", -1);



    $ux.data('allow-train-close', $ux.hasClass('allow-train-close'));



    //create a  container to hold our trains and toolbar on one line with  awareness

    var $container = $("<div class='train-container'>" +

						"<div class='left'></div>" +

						"<div class='right'></div>" +

					"</div>");



    //place trains to the left

    var $trains = $ux.find(">UL.dwpe-train:first");

    $container.find(">DIV.left").append($trains);



    //place toolbar to the right

    var $toolbar = $ux.find(">UX.dwpe-toolbar");

    if ($toolbar && $toolbar.length > 0)

    { $container.find(">DIV.right").append($toolbar); }

    else //no toolbar so give left all the width it can have

    {

        $container.find(">DIV.right").width("1%");

        $container.find(">DIV.left").width("99%");

    }



    //acquire a handle to all the train LIs in the trainset

    var $trains = $container.find('UL.dwpe-train>LI');



    //give each LI that this trainset owns its train class

    var stepNumber = 1;

    $trains.each(

		function (i) {

		    var $train = $(this);

		    $train.addClass("train-stop");

		    $train.attr('id', id + "-train-" + i);



		    if ($train.attr('tooltip')) {

		        $train.attr('title', $train.attr('tooltip'));

		    } else {

		        $train.attr('title', 'Step ' + stepNumber + ' of ' + $trains.length);

		    }



		    $train.data('index', i);

		    $train.click(

				function () { DWPE_PanelFactory_Class.showTrainPanel($ux, i); }

			);



		    var trainStopMarkup = '';

		    // var stopClass = 'normal';

		    trainStopMarkup += '<table><tr class="train-track">';

		    trainStopMarkup += '<td class="track"><div><span class=""></span></div></td>';

		    trainStopMarkup += '<td class="train-stop-icon">';

		    if (

				$train.hasClass('error') ||

				$train.hasClass('warning') ||

				$train.hasClass('complete') ||

				$train.hasClass('information')

				) {

		        trainStopMarkup += '<span></span>';

		    }

		    trainStopMarkup += '</td>';

		    trainStopMarkup += '<td class="track"><div><span class=""></span></div></td>';

		    trainStopMarkup += '</tr><tr>';

		    trainStopMarkup += '<td colspan="3" style="text-align:center; white-space:nowrap;" cellspacing="0" cellpadding="0">'



		    if ($train.hasClass('required')) // Add required step indicator

		    {

		        trainStopMarkup += '* ';

		    }



		    trainStopMarkup += $(this).html()

		    trainStopMarkup += '</td></tr></table>';

		    $train.html(trainStopMarkup);

		    stepNumber++;

		}

	)



    if ($ux.hasClass('button-bar')) {

        var $buttonBar = $container.find('UL.dwpe-train');

        $buttonBar.attr('class', 'dwpe-train-button-bar');



        buttonBarMarkup = '';

        buttonBarMarkup += '<li class="dwpe-button" type="train_button_back">Back</li>';

        buttonBarMarkup += '<li class="dwpe-button" type="train_button_next">Next</li>';

        if ($ux.hasClass('button-bar-submit')) {

            var thisCommand = $ux.attr('onSubmit');

            buttonBarMarkup += '<li class="dwpe-button" type="train_button_submit" '

			if(thisCommand){

				var cmd = thisCommand.split("::");

				switch(cmd[0].toLowerCase())

				{	

					case "javascript":

					case "js":

		                buttonBarMarkup += 'onclick="javascript:' + cmd[1] + '">';

						break;

					case "url":

		                buttonBarMarkup += 'onclick="window.location.href=\''+ cmd[1] +'\'">';

						break;

					default:

						break;

				}

			}

            buttonBarMarkup += 'Submit</li>';

        }



		if ($ux.hasClass('button-bar-finish')) {

            var thisCommand = $ux.attr('onFinish');

            buttonBarMarkup += '<li class="dwpe-button" type="train_button_finish" '

            if (thisCommand.indexOf("(") != -1) {

                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';

            } else {

                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';

            }

            buttonBarMarkup += 'Finish</li>';

        }

        if ($ux.hasClass('button-bar-save')) {

            var thisCommand = $ux.attr('onSave');

            buttonBarMarkup += '<li class="dwpe-button" type="train_button_save" '

            if (thisCommand.indexOf("(") != -1) {

                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';

            } else {

                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';

            }

            buttonBarMarkup += 'Save</li>';

        }



        if ($ux.hasClass('button-bar-exit')) {

            var thisCommand = $ux.attr('onExit');

            buttonBarMarkup += '<li class="dwpe-button" type="train_button_exit" '

            if (thisCommand.indexOf("(") != -1) {

                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';

            } else {

                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';

            }

            buttonBarMarkup += 'Exit</li>';

        }

        if ($ux.hasClass('button-bar-cancel')) {

            var thisCommand = $ux.attr('onCancel');

            buttonBarMarkup += '<li class="dwpe-button" type="train_button_cancel" '

            if (thisCommand.indexOf("(") != -1) {

                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';

            } else {

                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';

            }

            buttonBarMarkup += 'Cancel</li>';

        }

        $buttonBar.html(buttonBarMarkup);

        $buttonBar.find('li').click(function () { DWPE_PanelFactory_Class.trainButtonBarOnClick($ux, $(this).attr('type')) });

    }





    $ux.data('num-of-trains', $trains.length);

    //add our train container inside $ux



    if ($ux.hasClass('bottom')) {

        $ux.append($container);

    } else {

        $ux.prepend($container);

    }





    //add the overflow controls

    var $overflow_btn_fore = $('<li class="dwpe-overflow-btn fore"></li>');

    $container.find('>DIV.left>UL.dwpe-train').prepend($overflow_btn_fore);



    var $overflow_btn_aft = $('<li class="dwpe-overflow-btn aft"></li>');

    $container.find('>DIV.left>UL.dwpe-train').append($overflow_btn_aft);



    //bind an overflow handler to our overflow controls

    $overflow_btn_fore.click(function () { DWPE_PanelFactory_Class.handleTrainOverflowClick($ux, $overflow_btn_fore); });

    $overflow_btn_aft.click(function () { DWPE_PanelFactory_Class.handleTrainOverflowClick($ux, $overflow_btn_aft); });



    //set the first train, used in overflow calculations

    $ux.data('first-train', 0);



    //set the last train, used in overflow calculations

    $ux.data('last-train', $trains.length - 1);



    //acquire a handle to all the panels in the trainset

    var $train_panels = $ux.find('>DIV.dwpe-train-panels>DIV');



    //give each train panel that this trainset owns its panel class

    $train_panels.each(

		function (i) {

		    var $train_panel = $(this);

		    $train_panel.attr('id', id + "-trainpanel-" + i)

					  .css('height', $ux.attr('height'));



		    if (i == default_train)  //by default, first panel is shown

		    {



		    }

		}

	);



    //enforce the default train by showing it

    DWPE_PanelFactory_Class.showTrainPanel($ux, default_train);





    //force window to call on our trainset to manage overflow when a window  occurs

    $(window).bind('resize', function (e, parentID) {

        //if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)

        DWPE_PanelFactory_Class.manageTrainOverflow($ux);

    })

    //$(window).bind('dwpe-component-',function(){DWPE_PanelFactory_Class.manageTrainOverflow($ux);})



    //force trains to evaluate for overflow once so that trains layout correctly on load

    DWPE_PanelFactory_Class.manageTrainOverflow($ux);



    $ux.find('td.track:first div,td.track:last div').css('background-color', 'transparent');







	if ($ux.attr('parentURL')) 

    {

        var parentURL = $ux.attr('parentURL');



		var $parent_btn_fore = $('<li class="train-parent parent-fore"></li>');

		$parent_btn_fore.attr('target','_self');

		$parent_btn_fore.attr('url',DWPE_Utilities.makeJavascriptSafe(parentURL));

    	$container.find('UL.dwpe-train LI:first').before($parent_btn_fore);

		$parent_btn_fore.mousedown(function() { DWPE_Utilities.loadURL(this); });



	    var $parent_btn_aft = $('<li class="train-parent parent-aft"></li>');

		$parent_btn_aft.attr('target','_self');

		$parent_btn_aft.attr('url',DWPE_Utilities.makeJavascriptSafe(parentURL));

    	$container.find('UL.dwpe-train LI:last').after($parent_btn_aft);

		$parent_btn_aft.mousedown(function() { DWPE_Utilities.loadURL(this); });

    }



}

DWPE_PanelFactory_Class.trainButtonBarOnClick = function ($ux, buttonType) {

    if ($ux.hasClass('disabled')) return;

    var i = $ux.data("current-train");

    switch (buttonType) {

        case 'train_button_next':

            i++;

            break;

        case 'train_button_back':

            i--;

            break;

        default:

            break;

    }



    if (i < 0 || i >= $ux.data('num-of-trains')) return;

    DWPE_PanelFactory_Class.showTrainPanel($ux, i);

}





/*shows the panel that has been passed in*/

DWPE_PanelFactory_Class.showTrainPanel = function($ux,train_index)

{



	var current_train=$ux.data("current-train");

	

	if(train_index==current_train) return; //don't show a train that's already shown



	var id= $ux.attr("id");

	var $new_train=$("#"+id+"-train-"+train_index);

	var $new_panel=$ux.find("#"+id+"-trainpanel-"+train_index);

	



	if ( (train_index > (current_train + 1)) && !$ux.hasClass('non-sequential')) 

	{

		// If the previous stop has not been visited, return.

		if ( !$new_train.prev().hasClass('visited')  )

		{

			//console.log('Non-Sequential Step.');

			return;

		}

	}

	

	// Switch from Sequential to non-sequential when

	// a Train Stop with sequential-override is clicked.

	if ( $new_train.hasClass('sequential-override') )

	{

		$ux.addClass('non-sequential');

		$ux.find('LI.train-stop').removeClass('disabled');

	}

	



	//iframes can cause flashes when hiding train panel, so hide them first

	var $old_panel=$("#"+id+"-trainpanel-"+current_train);

	if($old_panel.length>0)

		$old_panel.find(">IFRAME").hide();

	

	if($new_panel.length>0)

	{	

		$ux.data("current-train",train_index);

		$new_train.addClass('selected');

		$new_train.removeClass('disabled');

		$new_train.next().removeClass('disabled');

		$new_panel.show();

		//now that we've shown our panel, give it a chance to lay itself out.

		$(window).trigger('');

		

		/*	Dynamic loading of iframe 

			The iframe is loaded on the first call only

			subsequent calls will only display the iframe content 	*/

		var content=$new_panel.attr('content');

			

		if ( content &&  $new_panel.find(">iframe").length==0 )

		{

			$new_panel.html( "<iframe src='"+ content +"' frameborder='0' allowtransparency='false'/>"  );

		}

		$new_panel.find(">IFRAME").show();

	}

	

	if(current_train!=null)

	{

		//unhighlight the old train

		$old_panel.hide();

		var $train=$("#"+id+"-train-"+current_train).removeClass('selected');

			$train.addClass('visited');

			

		//remove the close button if we can find item

		$train.find('SPAN.close').remove();

	}

	

	if ( $ux.hasClass('disabled') )

	{

		$ux.find('UL.dwpe-train>LI').unbind('click');

	}



	

}



DWPE_PanelFactory_Class.manageTrainOverflow = function($ux)

{

	DWPE_Window.closeWindowGroup("trainset-overflow");

	DWPE_PanelFactory_Class._manageTrainOverflow($ux,'train-container');

}



DWPE_PanelFactory_Class._manageTrainOverflow = function($ux,position)

{



	var selected_train=$ux.data('current-train');



	//determine if scrollbars are in effect

	var pH=$ux.parent().innerHeight();

	var pSH=$ux.parent().attr("scrollHeight");

	var scrollbar_width=(pSH>pH)?DWPE_Utilities.getScrollbarWidth():0;

	

	//console.log(sH,h);

	

	//determine our parent's size

	var pW=$ux.parent().width()-scrollbar_width;

	

	//determine how much size we can take and apply it to our container

	var size=$ux.data('size');

	

	if(size==null) return;

	

		if(size.indexOf('%')>-1)

		{

			size=(parseInt(size)/100)*pW;

		}

		else

		{

			size=parseInt(size);

		}

	$ux.width(size);

	

	

	

	//now find the size we can allocate to trains

	var avail_size=$ux.find(">DIV.train-container."+position+">DIV.left").width();

	

	var $overflow_fore=$ux.find(">DIV.train-container."+position+" LI.fore").show();

	var $overflow_aft=$ux.find(">DIV.train-container."+position+" LI.aft").show();

	

	

			

	var overflown=false;

	

	//set width to the width of our overflow controls, to ensure they have room to paint if we need them

	var w=$overflow_fore.outerWidth(true);

	    w+=$overflow_aft.outerWidth(true);

		

		if ($ux.attr('parentURL')) 

		{

			var $parent_fore=$ux.find(">DIV.train-container."+position+" LI.parent-fore").show();

			var $parent_aft=$ux.find(">DIV.train-container."+position+" LI.parent-aft").show();

			w+=$parent_fore.outerWidth(true);

			//console.log(w, $parent_fore);

			w+=$parent_aft.outerWidth(true);

			//console.log(w, $parent_aft);

		}

		

		//w+=100; //add a fudge factor

	

	

	

	//console.log(w);

	

	//get static values for first and last train

	var first_train=$ux.data("first-train");

	var last_train=$ux.data("last-train");

	



	//grab our trains, we do it each time to catch trains that may have arrived dynamically

	var $trains=$ux.find(">DIV.train-container."+position+">DIV.left>UL.dwpe-train>LI.train-stop");

	var $last=null;

	

	//set all our trains to hidden so we can fairly test if we are within bounds

	$trains.hide();

	$trains.each(

	

		function(i)

		{

			if(i>=first_train) 		 		

			{

			

				var $train=$(this);

				//store the i value as the train's index, used later if the train is clicked in an overflow menu

				$train.data('train-index',i);

				

				//show the train so we can measure it

				$train.removeClass('last');

				$train.show();

				

				

				

				//add the width of this train to our total width

				w+=$train.outerWidth(true);

				

				if(w>avail_size) 		 		//we are out of bounds so hide it again and set the overflown flag

				{

					

					/*check to make sure our selected train is visible

					sometimes when its the last train in the visible set before its selected it can

					get knocked off the visible set after overflow calculations are performed	

					this check ensures we always show our visible train

					*/

				

					if(i!=selected_train)

					{

						$train.hide();

						overflown=true;

					}

				}

				else					//we are still in bounds and record this train position as last train, because it may be

				{

					last_train=i;

					$last=$train;

				}

				

				

				

			}

			

			

		}

	

	);

	

	//store off first and last trains, in case they have just changed

	$ux.data("first-train",first_train);

	$ux.data("last-train",last_train);

	

	//set the last visible train as last (tiertiary)

	if($last)$last.addClass('last');

	

	

	

	//console.log(w,pW,size)

	

	//manage the display of the overflow controls

	if(first_train>0)

		$overflow_fore.show();

	else

		$overflow_fore.hide();

		

	if(last_train<$trains.length-1)

		$overflow_aft.show();

	else

		$overflow_aft.hide();



}





DWPE_PanelFactory_Class.handleTrainOverflowClick = function($ux,$overflow_btn)

{

	

	var type=($overflow_btn.hasClass('fore'))?"fore":"aft";

	

	

	//make a overflow menu object

	var menu_id="trainset-overflow";

	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);

	var $menu_body=$("#"+menu_id+"-body");

	

	

	//get static values for first and last train

	var first_train=$ux.data("first-train");

	var last_train=$ux.data("last-train");

	

	/*determine the outlier trains and append them to an overflow menu body */

	$ux.find("UL.dwpe-train:first>LI.train-stop:hidden").each

	(

		function()

		{

			var $train=$(this);

			var train_index=$train.data("train-index");

			

			if(type=='fore' && train_index>first_train) return;

			else if(type=='aft' && train_index<last_train) return;

			

			

			

			//clone the train, show it and append it to the overflow menu body

			var $c=$train.clone(true);

			$c.show();

			$c.css('display','block'); //force it to block to paint vertically within the menu

			$menu_body.append($c);

			

			//remove icons from menu itemss

			$c.find("span.icons").remove();

			

			//bind a click event to the item which sets this train as the firt train

			

			if($c.hasClass('disabled')==false)

			{	$c.click(

			

					function()

					{

						

						

						$ux.data("first-train",$train.data('train-index'));

					

					

						//now that we have presumably changed train first position, force trains to re-layout

						DWPE_PanelFactory_Class.manageTrainOverflow($ux);

					}

				

				);

			}				

					

		}

	);



	

	

	//set the state of the overflow-control to active	

	$overflow_btn.addClass("active");

	

	//position the window relative to the overflow control

	DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);

	

	/*window class calls this method after the user has made a selection and just before the window 

	 group will be dismissed*/

	$overflow_btn.bind(		

		"cleanup",

		function(e)

			{

				//set the state of the overflow-control to normal	

				$overflow_btn.removeClass('active');

			}

		);

}

/* /DWPE/components/js/DWPE_Initialize.js */

/*DWPE_Initialize.js*/
//things we do at page startup
$(function(){	
				
				DWPE_ObjectFactory.processPage();
				
				//ensure that when window is resized, components interested in resize get the message
				$(window).resize(
					function(){
								DWPE_Utilities.triggerComponentResize();
								});
								
				//ensures the body is shown once the page loads				
				$('body').css('visibility','visible');				
});