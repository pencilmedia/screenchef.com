function dataTable() {

	this._table = null;
	this._data = null;
	this._parent = null;
	
	
	this.setDataSource = function(obj) {
		this._data = obj;
	}
	
	this.setParentObj = function(obj) {
		this._parent = obj;
	}
	
	this.getRootObject = function() {
		return (this._table);
	}
	
	this.create = function() {
		this._table = document.createElement("table");
		this._table.className = "sample";
		
		var tbody = document.createElement("tbody");
		this._table.appendChild(tbody);
		
		for (var i=0; i<this._data.rows.length; i++) {
			var row = this._row_schema(this._data.rows[i]);
			tbody.appendChild(row);
		}
		
	}
	
	this._row_schema = function(obj) {
		var row = document.createElement("tr");
		if (this._parent) {
			row.onclick = associateEventWithData(this._parent, "_displayInspectorData", obj);
		}
		
		for (var i=0; i<obj.cols.length; i++) {
			var cell = document.createElement("td");
			if (obj.cols[i].classname) {
				cell.className = obj.cols[i].classname;
			}
			var result = createSwitcher(obj.cols[i]);
			cell.appendChild(result);
			row.appendChild(cell);
		}
		
		return (row);
	}
	
}