function agileUtilBindFunction(obj, methodName, params) {
	return(function() {
		if (params) {
			return obj[methodName](params);
		} else {
			return obj[methodName]();
		}
	});
}



Array.prototype.inArray = function (value) {
	for (var i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};
