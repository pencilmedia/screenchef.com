
/*Copyright Oracle 2005-2010*/

/*DWPE_Base_Class.js*/


/*extend the jQuery selectors to hunt for dwpe specific tags*/
jQuery.extend(jQuery.expr[':'], { 
    /////////////////////////////////////////////////////////// 
    // special UX elements 
    //  @usage: $(':dwpe') 
    dwpe: function(a) { 
    	 
    	 return (a.nodeName.toUpperCase().indexOf('UX')>-1)?true:false; 
    }
});



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
	return "<!--args:"+DWPE_Base_Class.encodeJSONString(args)+"-->";
	
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
















