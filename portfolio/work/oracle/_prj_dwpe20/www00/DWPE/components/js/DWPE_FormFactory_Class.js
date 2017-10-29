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
	
	markup+='\r\t<span class="browse-button '+args.state+'">'+DWPE_ButtonFactory.make(btn)+'</span>';
	markup+=DWPE_Base_Class.getArgsAsString(args);
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
    var markup = '';
    markup += '<ux class="dwpe-link" ' + linkCommand + ' ' + linkTooltip  + '>' + 
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
    var cmd = (args.dialog_url) ? ' cmd="dialog::' + args.dialog_url + '"' : "";
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
	//var objId = DWPE_Utilities.getUniqueId();
	//$ux.attr('id',objId);

	$input=$('<input />');
	$ux.append($input);
	$input.click(function(e){
		var $fld=$(this);
		if ( (e.layerX) < $fld.width() + 7 ) return;
		if($fld.attr("cmd"))
			DWPE_Utilities.performCommand($fld,$fld.attr("cmd"));
	});	
	if ( $ux.attr('cmd') ) $input.attr('cmd',$ux.attr('cmd'));
	if ( $ux.hasClass('required') ) $input.addClass('required');
	if ( $ux.hasClass('disabled') || $ux.hasClass('read-only') ){ $input.attr('disabled','disabled'); }
	if ( $ux.attr('DefaultValue') ) $input.val($ux.attr('DefaultValue'));

	if ( $ux.hasClass('read-only') )
	{
		var readOnlyText = $input.val();
		$ux.html( '<span class="dwpe-lov read-only">' + readOnlyText + '</span>' );
		return;
	}

	if ( $ux.hasClass('required') ) $input.addClass('required');
	if ( $ux.attr('help') ) $input.attr('help',$ux.attr('help'));
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
							"items":[	{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","selected":"no"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","selected":"no"},
										 {"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","selected":"no"}]
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





