/*DWPE_IconButton_Class.js*/
/*Set the class that our class will inherit from*/
DWPE_IconButton_Class.prototype=new DWPE_TextButton_Class();

/*Set and Define our own class constructor*/
DWPE_IconButton_Class.constructor=DWPE_TextButton_Class;
DWPE_IconButton_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_IconButton_Class()
{
	this._class="DWPE_IconButton_Class";
	this.defineDWPE_Properties();
	return this;	
}

/*define the functions we wish to override from base*/


/*define which unique properties we are creating to 
	maintain this class*/
DWPE_IconButton_Class.prototype.defineDWPE_Properties=function()
{
	this.properties["iconId"]=0;
	this.properties["label"] = null;
}

DWPE_Icon = {};
DWPE_Icon["iconmail"]		= 1;
DWPE_Icon["iconnote"]		= 2;
DWPE_Icon["iconcontact"]	= 3;
DWPE_Icon["iconstorage"]	= 4;
DWPE_Icon["icondoc"]		= 5;
DWPE_Icon["iconnetwork"]	= 6;
DWPE_Icon["iconweb"]		= 7;
DWPE_Icon["iconfolder"]		= 8;
DWPE_Icon["iconcube"]		= 9;
DWPE_Icon["icondex"]		= 10;
DWPE_Icon["iconclipboard"]	= 11;
DWPE_Icon["test"]			= 31;
DWPE_Icon["test2"]			= 1023;

//define how we will display to screen
DWPE_IconButton_Class.prototype.update=function()
{
	var index = DWPE_Icon[ this.iconId.toLowerCase() ];
 	var x = ((index % 32)  * -16 );
	var y = (parseInt(index / 32) * -16 );
	this.buttonClass="DWPE_IconButton";
	this.markup=this.makeClickableRegion('<span style="background-position:' + x + 'px ' + y + 'px"></span>');
	
}