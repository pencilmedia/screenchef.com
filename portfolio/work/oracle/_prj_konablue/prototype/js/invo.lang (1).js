if (!invo.lang) { invo.lang = {}; }

/*
	JS has no built in function for inArray, so I have borrowed this
	one, used by a bajillion different people.
	
	Note that you can change the === is only available in modern JS
	implementations. it tests to see if the value passed in is both
	a) the same name and b) the same object type.
*/
Array.prototype.inArray = function (value) {
	for (var i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};