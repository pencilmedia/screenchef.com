function agileUtilBindFunction(obj, methodName, params) {
	if (params && params.inArray('event')) {
		return(function(event) {
			if (params) {
				return obj[methodName](event, params);
			} else {
				return obj[methodName](event);
			}
		});
	} else {		
		return(function() {
			if (params) {
				return obj[methodName](params);
			} else {
				return obj[methodName]();
			}
		});
	}
}

Array.prototype.inArray = function (value) {
	for (var i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};


