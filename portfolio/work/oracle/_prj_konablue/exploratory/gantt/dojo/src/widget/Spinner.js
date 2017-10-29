/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

dojo.provide("dojo.widget.Spinner");
dojo.provide("dojo.widget.AdjustableIntegerTextbox");

dojo.require("dojo.widget.validate.IntegerTextbox");
dojo.require("dojo.widget.*");
dojo.require("dojo.event.*");

/*
  ****** AdjustableIntegerTextbox ******

  A subclass of IntegerTextbox.
*/
dojo.widget.AdjustableIntegerTextbox = function(node) {
	// this property isn't a primitive and needs to be created on a per-item basis.
	this.flags = {};
}
dojo.inherits(dojo.widget.AdjustableIntegerTextbox, dojo.widget.validate.IntegerTextbox);
dojo.lang.extend(dojo.widget.AdjustableIntegerTextbox, {
	// new subclass properties
	widgetType: "AdjustableIntegerTextbox",
		delta: "1",

	adjustValue: function(direction, x){
			var val = this.getValue().replace(/[^\-+\d]/g, "");
			if(val.length == 0){ return; }

			num = Math.min(Math.max((parseInt(val)+(parseInt(this.delta) * direction)), (this.flags.min?this.flags.min:-Infinity)), (this.flags.max?this.flags.max:+Infinity));
			val = num.toString();

			if(num >= 0){
				val = ((this.flags.signed == true)?'+':' ')+val; // make sure first char is a nondigit
			}

			if(this.flags.separator.length > 0){
				for (var i=val.length-3; i > 1; i-=3){
					val = val.substr(0,i)+this.flags.separator+val.substr(i);
				}
			}

			if(val.substr(0,1) == ' '){ val = val.substr(1); } // remove space

			this.setValue(val);

			return val.length;
	}
});
dojo.widget.tags.addParseTreeHandler("dojo:AdjustableIntegerTextbox");

/*
  ****** AdjustableRealNumberTextbox ******

  A subclass of RealNumberTextbox.
  @attr places    The exact number of decimal places.  If omitted, it's unlimited and optional.
  @attr exponent  Can be true or false.  If omitted the exponential part is optional.
  @attr eSigned   Is the exponent signed?  Can be true or false, if omitted the sign is optional.
*/
dojo.widget.AdjustableRealNumberTextbox = function(node) {
	// this property isn't a primitive and needs to be created on a per-item basis.
	this.flags = {};
}
dojo.inherits(dojo.widget.AdjustableRealNumberTextbox, dojo.widget.validate.RealNumberTextbox);
dojo.lang.extend(dojo.widget.AdjustableRealNumberTextbox, {
	// new subclass properties
	widgetType: "AdjustableRealNumberTextbox",
		delta: "1e1",

	adjustValue: function(direction, x){
			var val = this.getValue().replace(/[^\-+\.eE\d]/g, "");
			if(!val.length){ return; }

			var num = parseFloat(val);
			if(isNaN(num)){ return; }
			var delta = this.delta.split(/[eE]/);
			if(!delta.length){
				delta = [1, 1];
			}else{
				delta[0] = parseFloat(delta[0].replace(/[^\-+\.\d]/g, ""));
				if(isNaN(delta[0])){ delta[0] = 1; }
				if(delta.length > 1){
					delta[1] = parseInt(delta[1]);
				}
				if(isNaN(delta[1])){ delta[1] = 1; }
			}
			val = this.getValue().split(/[eE]/);
			if(!val.length){ return; }
			var numBase = parseFloat(val[0].replace(/[^\-+\.\d]/g, ""));
			if(val.length == 1){
				var numExp = 0;
			}else{
				var numExp = parseInt(val[1].replace(/[^\-+\d]/g, ""));
			}
			if(x <= val[0].length){
				x = 0;
				numBase += delta[0] * direction;
			}else{
				x = Number.MAX_VALUE;
				numExp += delta[1] * direction;
				if(this.flags.eSigned == false && numExp < 0){
					numExp = 0;
				}
			}
			num = Math.min(Math.max((numBase * Math.pow(10,numExp)), (this.flags.min?this.flags.min:-Infinity)), (this.flags.max?this.flags.max:+Infinity));
			if((this.flags.exponent == true || (this.flags.exponent != false && x != 0)) && num.toExponential){
				if (isNaN(this.flags.places) || this.flags.places == Infinity){
					val = num.toExponential();
				}else{
					val = num.toExponential(this.flags.places);
				}
			}else if(num.toFixed && num.toPrecision){
				if(isNaN(this.flags.places) || this.flags.places == Infinity){
					val = num.toPrecision((1/3).toString().length-1);
				}else{
					val = num.toFixed(this.flags.places);
				}
			}else{
				val = num.toString();
			}

			if(num >= 0){
				if(this.flags.signed == true){
					val = '+' + val;
				}
			}
			val = val.split(/[eE]/);
			if(this.flags.separator.length > 0){
				if(num >= 0 && val[0].substr(0,1) != '+'){
					val[0] = ' ' + val[0]; // make sure first char is nondigit for easy algorithm
				}
				var i = val[0].lastIndexOf('.');
				if(i >= 0){
					i -= 3;
				}else{
					i = val[0].length-3;
				}
				for (; i > 1; i-=3){
					val[0] = val[0].substr(0,i)+this.flags.separator+val[0].substr(i);
				}
				if(val[0].substr(0,1) == ' '){ val[0] = val[0].substr(1); } // remove space
			}
			if(val.length > 1){
				if((this.flags.eSigned == true)&&(val[1].substr(0,1) != '+')){
					val[1] = '+' + val[1];
				}else if((!this.flags.eSigned)&&(val[1].substr(0,1) == '+')){
					val[1] = val[1].substr(1);
				}else if((!this.flags.eSigned)&&(val[1].substr(0,1) == '-')&&(num.toFixed && num.toPrecision)){
					if(isNaN(this.flags.places)){
						val[0] = num.toPrecision((1/3).toString().length-1);
					}else{
						val[0] = num.toFixed(this.flags.places).toString();
					}
					val[1] = "0";
				}
				val[0] += 'e' + val[1];
			}
			this.setValue(val[0]);
			if(x > val[0].length){ x = val[0].length; }
			return x;
	}
});
dojo.widget.tags.addParseTreeHandler("dojo:AdjustableRealNumberTextbox");

/*
  ****** AdjustableTimeTextbox ******

  A subclass of TimeTextbox.
*/
dojo.widget.AdjustableTimeTextbox = function(node) {
	// this property isn't a primitive and needs to be created on a per-item basis.
	this.flags = {};
}
dojo.inherits(dojo.widget.AdjustableTimeTextbox, dojo.widget.validate.TimeTextbox);
dojo.lang.extend(dojo.widget.AdjustableTimeTextbox, {
	// new subclass properties
	widgetType: "AdjustableTimeTextbox",

	adjustValue: function(direction, x){
		var val = this.getValue();
		var format = (this.flags.format && this.flags.format.search(/[Hhmst]/) >= 0) ? this.flags.format : "hh:mm:ss t";
		if(direction == 0 || !val.length || !this.isValid()){ return; }
		if (!this.flags.amSymbol) {
			this.flags.amSymbol = "AM";
		}
		if (!this.flags.pmSymbol) {
			this.flags.pmSymbol = "PM";
		}
		var re = dojo.regexp.time(this.flags);
		var qualifiers = format.replace(/H/g,"h").replace(/[^hmst]/g,"").replace(/([hmst])\1/g,"$1");
		var hourPos = qualifiers.indexOf('h') + 1;
		var minPos = qualifiers.indexOf('m') + 1;
		var secPos = qualifiers.indexOf('s') + 1;
		var ampmPos = qualifiers.indexOf('t') + 1;
		// tweak format to match the incoming data exactly to help find where the cursor is
		var cursorFormat = format;
		var ampm = "";
		if (ampmPos > 0){
			ampm = val.replace(new RegExp(re),"$"+ampmPos);
			cursorFormat = cursorFormat.replace(/t+/, ampm.replace(/./g,"t"));
		}
		var hour = 0;
		var deltaHour = 1;
		if (hourPos > 0){
			hour = val.replace(new RegExp(re),"$"+hourPos);
			if (dojo.lang.isString(this.delta)) {
				deltaHour = this.delta.replace(new RegExp(re),"$"+hourPos);
			}
			if (isNaN(deltaHour)) {
				deltaHour = 1;
			} else {
				deltaHour = parseInt(deltaHour);
			}
			if (hour.length == 2) {
				cursorFormat = cursorFormat.replace(/([Hh])+/, "$1$1");
			} else {
				cursorFormat = cursorFormat.replace(/([Hh])+/, "$1");
			}
			if (isNaN(hour)) {
				hour = 0;
			} else {
				hour = parseInt(hour.replace(/^0(\d)/,"$1"));
			}
		}
		var min = 0;
		var deltaMin = 1;
		if (minPos > 0){
			min = val.replace(new RegExp(re),"$"+minPos);
			if (dojo.lang.isString(this.delta)) {
				deltaMin = this.delta.replace(new RegExp(re),"$"+minPos);
			}
			if (isNaN(deltaMin)) {
				deltaMin = 1;
			} else {
				deltaMin = parseInt(deltaMin);
			}
			cursorFormat = cursorFormat.replace(/m+/, min.replace(/./g,"m"));
			if (isNaN(min)) {
				min = 0;
			} else {
				min = parseInt(min.replace(/^0(\d)/,"$1"));
			}
		}
		var sec = 0;
		var deltaSec = 1;
		if (secPos > 0){
			sec = val.replace(new RegExp(re),"$"+secPos);
			if (dojo.lang.isString(this.delta)) {
				deltaSec = this.delta.replace(new RegExp(re),"$"+secPos);
			}
			if (isNaN(deltaSec)) {
				deltaSec = 1;
			} else {
				deltaSec = parseInt(deltaSec);
			}
			cursorFormat = cursorFormat.replace(/s+/, sec.replace(/./g,"s"));
			if (isNaN(sec)) {
				sec = 0;
			} else {
				sec = parseInt(sec.replace(/^0(\d)/,"$1"));
			}
		}
		if (isNaN(x) || x >= cursorFormat.length){
			x = cursorFormat.length-1;
		}
		var cursorToken = cursorFormat.charAt(x);

		switch(cursorToken) {
			case 't':
				if (ampm == this.flags.amSymbol) {
					ampm = this.flags.pmSymbol;
				}
				else if (ampm == this.flags.pmSymbol) {
					ampm = this.flags.amSymbol;
				}
				break;
			default:
				if (hour >= 1 && hour < 12 && ampm == this.flags.pmSymbol) {
					hour += 12;
				}
				if (hour == 12 && ampm == this.flags.amSymbol) {
					hour = 0;
				}
				switch(cursorToken) {
					case 's':
						sec += deltaSec * direction;
						while (sec < 0) {
							min--;
							sec += 60;
						}
						while (sec >= 60) {
							min++;
							sec -= 60;
						}
					case 'm':
						if (cursorToken == 'm') {
							min += deltaMin * direction;
						}
						while (min < 0) {
							hour--;
							min += 60;
						}
						while (min >= 60) {
							hour++;
							min -= 60;
						}
					case 'h':
					case 'H':
						if (cursorToken == 'h' || cursorToken == 'H') {
							hour += deltaHour * direction;
						}
						while (hour < 0) {
							hour += 24;
						}
						while (hour >= 24) {
							hour -= 24;
						}
						break;
					default: // should never get here
						return;
				}
				if (hour >= 12) {
					ampm = this.flags.pmSymbol;
					if (format.indexOf('h') >= 0 && hour >= 13) {
						hour -= 12;
					}
				} else {
					ampm = this.flags.amSymbol;
					if (format.indexOf('h') >= 0 && hour == 0) {
						hour = 12;
					}
				}
		}

		cursorFormat = format;
		if (hour >= 0 && hour < 10 && format.search(/[hH]{2}/) >= 0) {
			hour = "0" + hour.toString();
		}
		if (hour >= 10 && cursorFormat.search(/[hH]{2}/) < 0 ) {
			cursorFormat = cursorFormat.replace(/(h|H)/, "$1$1");
		}
		if (min >= 0 && min < 10 && cursorFormat.search(/mm/) >= 0) {
			min = "0" + min.toString();
		}
		if (min >= 10 && cursorFormat.search(/mm/) < 0 ) {
			cursorFormat = cursorFormat.replace(/m/, "$1$1");
		}
		if (sec >= 0 && sec < 10 && cursorFormat.search(/ss/) >= 0) {
			sec = "0" + sec.toString();
		}
		if (sec >= 10 && cursorFormat.search(/ss/) < 0 ) {
			cursorFormat = cursorFormat.replace(/s/, "$1$1");
		}
		x = cursorFormat.indexOf(cursorToken);
		if (x == -1) {
			x = format.length;
		}
		format = format.replace(/[hH]+/, hour);
		format = format.replace(/m+/, min);
		format = format.replace(/s+/, sec);
		format = format.replace(/t/, ampm);
		this.setValue(format);
		if(x > format.length){ x = format.length; }
		return x;
	}
});
dojo.widget.tags.addParseTreeHandler("dojo:AdjustableTimeTextbox");

dojo.declare(
	"dojo.widget.Spinner",
	null,
	{
		isContainer: false
	}
);

// render-specific includes
dojo.requireAfterIf("html", "dojo.widget.html.Spinner");
