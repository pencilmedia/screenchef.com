var mce = {};

mce.NUMBER_OF_CONTROL_ROWS = 3;
mce.MAX_NUMBER_OF_CONTROL_ROWS = 12;

mce.init = function() {};

mce.counter = function(boxType,thisField,cntfield,maxlimit)
{	
	switch(boxType) {
		case "multiText":
			var textPercentBox = (maxlimit)*.95; // this converts to 5% characters left
			cntfield.style.visibility='visible';
			
			thisField.onblur = function() {
				cntfield.style.visibility='hidden';	
				jQuery(this).removeClass('focus_field');
			}
			
			// colorize 5 percent warning
			if (thisField.value.length >= textPercentBox) {
				cntfield.style.color='#C60000';
				cntfield.style.fontWeight='bold';
			} else if (thisField.value.length <= textPercentBox)  {
				cntfield.style.color='';	
				cntfield.style.fontWeight='';	
			}
			// char counter
			if (thisField.value.length > maxlimit) {
				thisField.value = thisField.value.substring(0, maxlimit); // if too long...trim it!
			} else {
				cntfield.value = maxlimit - thisField.value.length; // otherwise, update 'characters left' counter
			}
			mce.autoExpand(thisField, mce.NUMBER_OF_CONTROL_ROWS);
		break;
		case "inputText":
			var inputPercentBox	= (maxlimit)*.95; // this converts to 5% characters left
			cntfield.style.visibility='visible';
			
			thisField.onblur = function() {
				cntfield.style.visibility='hidden';	
				jQuery(this).removeClass('focus_field');

			}
			
			// colorize 5 percent warning
			if (thisField.value.length >= inputPercentBox) {
				cntfield.style.color='#C60000';
				cntfield.style.fontWeight='bold';
			} else if (thisField.value.length <= inputPercentBox)  {
				cntfield.style.color='';
				cntfield.style.fontWeight='';
			}
			// char counter
			if (thisField.value.length > maxlimit) {
				thisField.value = thisField.value.substring(0, maxlimit); // if too long...trim it!
			} else {
				cntfield.value = maxlimit - thisField.value.length; // otherwise, update 'characters left' counter
			} 		
		break;
	}
}


mce.autoExpand = function(t,minrows) 
{
	a = t.value.split('\n');
	b = 0;
	
	for (x=0;x < a.length; x++) {
		if (a[x].length >= t.cols) b += Math.floor(a[x].length/t.cols);
	}
	 
	b += a.length;
	//grow the box up to 13 rows if content increases
	if (t.rows < mce.MAX_NUMBER_OF_CONTROL_ROWS) {
		//jQuery(t).addClass('noscroll');
		for (i=0;i < t.clientHeight; i++) {
			if (t.scrollHeight > t.clientHeight) {
				t.rows++;
				t.scrollBottom = 0;
			}
			if (t.rows >= mce.MAX_NUMBER_OF_CONTROL_ROWS){ // fixes bug where scrollbar doesn't appear after pasting more lines than the max # of rows
				t.rows = mce.MAX_NUMBER_OF_CONTROL_ROWS;
				
			}
		}
	}	
	/*if (t.rows == mce.MAX_NUMBER_OF_CONTROL_ROWS) {
		this was used to show scrollbar in IE -- jQuery(t).removeClass('noscroll');
	}*/
	
	// do not shrink textarea more than the default textarea attribute "minrows"
	if (b < minrows) {
		t.rows = minrows;
		return false;
	}
	//decrease rows as you delete content rows
	for (i=0;i < t.clientHeight; i++) {
		if (b < t.rows) {
			t.rows = t.rows - 1;
		}
	}
}


jQuery(document).ready( mce.init )