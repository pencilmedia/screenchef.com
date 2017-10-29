function dataViewer() {

	this._data = null;
	this._payload = null;
	this._table_obj = null;
	this._items_obj = null;
	
	
	
	this.setDataSource = function(obj) {
		this._data = obj;
	}

	this.create = function() {
		this._payload = document.createElement("div");
		
		this._controls = document.createElement("div");
		this._controls.className = "viewer_controls";
		
		this._controls_para = document.createElement("p");
		
		this._control1 = document.createElement("a");
		this._control1.href = "#";
		this._control1.onclick = associateEvent(this, "displayAsTable");
		this._control1_text = document.createTextNode("Show as Table");
		this._control1.appendChild(this._control1_text);
		this._controls_para.appendChild(this._control1);

		var spacer0 = document.createTextNode(" | ");
		this._controls_para.appendChild(spacer0);

		this._control2 = document.createElement("a");
		this._control2.href = "#";
		this._control2.onclick = associateEvent(this, "displayAsItems");
		this._control2_text = document.createTextNode("Show as Items");
		this._control2.appendChild(this._control2_text);
		this._controls_para.appendChild(this._control2);
		
		this._controls.appendChild(this._controls_para);
		this._payload.appendChild(this._controls);
		
		var spacer1 = document.createElement("br");
		spacer1.className = "clear_both";
		
		this._payload.appendChild(spacer1);
		
		this._data_pane = document.createElement("div");
		this._data_pane.className = "viewer_data";
		
		this._inspector_pane = document.createElement("div");
		this._inspector_pane.className = "viewer_inspector";
	
		this._payload.appendChild(this._data_pane);
		this._payload.appendChild(this._inspector_pane);

		var spacer2 = document.createElement("br");
		spacer2.className = "clear_both";
		
		this._payload.appendChild(spacer2);
	}
	
	this.getRootObject = function() {
		return this._payload;
	}

	this.displayAsTable = function() {
		this.clearTgt(this._data_pane);
		
		if (this._table_obj == null) { 
			this._table_obj = new dataTable; 
			this._table_obj.setDataSource(this._data);
			this._table_obj.setParentObj(this);
		}
		
		this._table_obj.create();
		var result = this._table_obj.getRootObject();
		
		this._data_pane.appendChild(result);
	}
	
	
	this.displayAsItems = function() {
		this.clearTgt(this._data_pane);
	
		if (this._items_obj == null) { 
			this._items_obj = new dataItems; 
			this._items_obj.setDataSource(this._data);
			this._items_obj.setParentObj(this);
		}
		
		this._items_obj.create();
		var result = this._items_obj.getRootObject();
		
		this._data_pane.appendChild(result);
	}

	this._displayInspectorData = function(data_obj) {
		this.clearTgt(this._inspector_pane);
		
		var table = document.createElement("table");
		table.className = "sample";
		var tbody = document.createElement("tbody");
		table.appendChild(tbody);
		
		
		for (var i=0; i<data_obj.cols.length; i++) {
			//if (data_obj.cols[i].value == "text") {
				var row = document.createElement("tr");	
				var cell1 = document.createElement("td");
				var text1 = document.createTextNode(data_obj.cols[i].name);
				var cell2 = document.createElement("td");
				var text2 = createSwitcher(data_obj.cols[i]);
			
				cell1.appendChild(text1);
				cell2.appendChild(text2);
				row.appendChild(cell1);
				row.appendChild(cell2);
		
				tbody.appendChild(row);
			//}
		}

		this._inspector_pane.appendChild(table);
	}

	this.clearTgt = function(tgt) {
		if (typeof(tgt) == "string") {
			tgt = document.getElementById(tgt);
		}
		while (tgt.firstChild) {
			tgt.removeChild(tgt.firstChild);
		}
	}

}