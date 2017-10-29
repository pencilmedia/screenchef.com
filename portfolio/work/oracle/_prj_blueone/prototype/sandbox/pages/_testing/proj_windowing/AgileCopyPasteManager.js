/* ---------------------------------------------------------------------------
	Copy And Paste Manager 
--------------------------------------------------------------------------- */
AgileCopyPasteManager = function() {
	this.__init__();
};

AgileCopyPasteManager.prototype = {
	_copy_queue: [],
	
	__init__: function() {
		// Nothing to do
	},
	
	addToCopyQueue: function(data_type, data) {
		this._copy_queue.push({'type': data_type, 'data': data});
	},
	
	getFromCopyQueue: function() {
		if (this._copy_queue.length) {
			return this._copy_queue[this._copy_queue.length - 1];
		} else {
			return null;
		}
	}
};