function agileUtilBindFunction(obj, method_name, params) {
	if (params && params.inArray('event')) {
		return(function(event) {
			if (params) {
				return obj[method_name](event, params);
			} else {
				return obj[method_name](event);
			}
		});
	} else {		
		return(function() {
			if (params) {
				return obj[method_name](params);
			} else {
				return obj[method_name]();
			}
		});
	}
}

function agileUtilAssocFunction(obj, method_name, params) {
	
}

Array.prototype.inArray = function (value) {
	for (var i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

