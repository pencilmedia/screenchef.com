/*DWPE_IconicTextButton_Class.js*/
/*Set the class that our class will inherit from*/
DWPE_IconicTextButton_Class.prototype=new DWPE_TextButton_Class();

/*Set and Define our own class constructor*/
DWPE_IconicTextButton_Class.constructor=DWPE_TextButton_Class;
DWPE_IconicTextButton_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_IconicTextButton_Class()
{
	this._class="DWPE_IconicTextButton_Class";
	this.defineDWPE_Properties();
	return this;	
}

//define how we will display to screen
DWPE_IconicTextButton_Class.prototype.update=function()
{
	var index = DWPE_Icon[ this.iconId.toLowerCase() ];
 	var x = ((index % 32)  * -16 );
	var y = (parseInt(index / 32) * -16 );
	this.buttonClass="DWPE_IconicTextButton";
	this.markup=this.makeClickableRegion('<span style="background-position:' + x + 'px ' + y + 'px"></span> <span>' + this.label + '</span>');
}