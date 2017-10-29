function dataItems() {

	this._div = null;
	this._data = null;
	this._parent = null;
	
	
	this.setDataSource = function(obj) {
		this._data = obj;
	}
	
	this.setParentObj = function(obj) {
		this._parent = obj;
	}
	
	this.getRootObject = function() {
		return (this._div);
	}
	
	this.create = function() {
		this._div = document.createElement("div");
		
		for (var i=0; i<this._data.rows.length; i++) {
			var div = this._div_schema(this._data.rows[i]);
			this._div.appendChild(div);
		}
	}
	
	this._div_schema = function(obj) {
		var div = document.createElement("div");
		div.className = "sample";
		if (this._parent) {
			div.onclick = associateEventWithData(this._parent, "_displayInspectorData", obj);
		}
		
		
		for (var i=0; i<obj.cols.length; i++) {
			if (obj.cols[i].classname) {
				div.className += " " + obj.cols[i].classname;
			}
			
			if (obj.cols[i].name == "item_icon") {
				var result = createSwitcher(obj.cols[i]);
				result.width = "50";
				result.height = "50";
				div.appendChild(result);
			}

			if (obj.cols[i].name == "item_name") {
				var para = document.createElement("p");
				var result = createSwitcher(obj.cols[i]);
				para.appendChild(result);
				div.appendChild(para);
			}

		}
				
		return (div);
	}
	
}