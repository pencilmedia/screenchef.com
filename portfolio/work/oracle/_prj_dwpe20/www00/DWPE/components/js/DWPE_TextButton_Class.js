/*DWPE_TextButton_Class.js*/




/*Set the class that our class will inherit from*/
DWPE_TextButton_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_TextButton_Class.constructor=DWPE_TextButton_Class;
DWPE_TextButton_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_TextButton_Class()
{
	this._class="DWPE_TextButton_Class";
	
	//define defaults
	this.label="TextButton Item";
	this.url="";
	this.target="";
	
	//indicate unique properties of this class
	this.defineDWPE_Properties();
	
	return this;	

}



/*define the functions we wish to override from base*/


/*define which unique properties we are creating to 
	maintain this class*/
DWPE_TextButton_Class.prototype.defineDWPE_Properties=function()
{
	this.properties["url"]=0;
	this.properties["target"]=0;
}


/*this is a helper function to make a clickable region; 
  child classes can use it also*/
DWPE_TextButton_Class.prototype.makeClickableRegion=function(content)
{

	var markup="<li class='"+this.buttonClass+"' ";
	
	//only create click markup when an action has been defined
	if(this.url.length>0) 
	{
		//we handle two types of URLs; plain and javascript
		if(this.target=="_javascript")
		{
			markup+="onclick='"+this.url+";return false;'>";
				
		}
		else
		{	
			
			markup+="onclick='DWPE.loadURL(\""+this.url+"\",\""+this.target+"\");'>";
			
		}
	}
	
	markup+="<a href='#'>" + content + "</a></li>";
	
	return markup;

}


//define how we will display to screen
DWPE_TextButton_Class.prototype.update=function()
{
	
	//build up markup
	this.buttonClass="DWPE_Button";
	this.markup=this.makeClickableRegion(this.label);
	
	

}




