/**
 * <p></p>
 * @class PaletteTable
 * @extends YAHOO.widget.DataTable
 * @constructor
 * @param {Object} oConfig json object holding server information for list.
 * 
 * @author Sean Wells
 * @version 0.1
 */
PaletteTable = function (oConfigs) {
  this._paletteElIds = oConfigs.paletteElIds;
  this._isEmpty = (!oConfigs.dataSet["_KEYS"]);
  if (!this._isEmpty) {
    this._pillBox = oConfigs.pillBox;
    this._paletteAnim = oConfigs.animEl;
    this._init(oConfigs.dataSet);  
    this._registerEventListeners();
    this._registerKeyListeners();
  }
  var filter = new Filter(this);
};

YAHOO.lang.extend(PaletteTable, YAHOO.widget.DataTable);

/**
 * @private
 */
PaletteTable.prototype._paletteElIds = [];
PaletteTable.prototype._pillBox = null;
PaletteTable.prototype._paletteAnim = null;
PaletteTable.prototype._isFocus = false;
PaletteTable.prototype._isEmpty = true;
PaletteTable.prototype._lastSelectedRow = null;

/**
 * @return
 */
PaletteTable.prototype.isEmpty = function () {
  return (this._isEmpty);
};

/**
 * @param {Object} dataset json strut. containing table data.
 * @private
 */
PaletteTable.prototype._init = function(dataset) {
  var columnHeaders = dataset["_COLUMN_HEADERS"];
  var schema = dataset["_SCHEMA"];
  var columnValues = new Array();            
  var keys = dataset["_KEYS"];
  
  // set up column header values for columnset
  for(var index = 0; index < keys.length; index++) {
    var key = keys[index].KEY; 
    var row = dataset[key]; // row = {NAME: "x", VALUE"y"}
    columnValues = columnValues.concat(row);
  }

  /////////////////////
  // Prepair ColumnSet
  /////////////////////
  var columnSet = new YAHOO.widget.ColumnSet(columnHeaders);
  var dataSource = new YAHOO.util.DataSource(columnValues, 
		       {responseType: YAHOO.util.DataSource.TYPE_JSARRAY, responseSchema: schema});
  
  ///////////////////////////////////
  // Prepair DataTable configurations
  ///////////////////////////////////
  var defaultSortCol = columnHeaders[0].key;
  var configs = { scrollable:false, rowSingleSelect:false, resizeable:false,
		  sortedBy:{colKey: defaultSortCol, dir:"asc"} }; 
  var elContainer = this._paletteElIds[0].floater_results_list;
  
  // super YUI DataTable 
  PaletteTable.superclass.constructor.call(this, elContainer, columnSet, 
					   dataSource, configs);  
};

/**
 * @private
 */
PaletteTable.prototype._registerEventListeners = function(dataset) {
   var self = this;
   var content = $(self._paletteElIds[0].floater_results_list);

   ////////////////////////////////////////////////////
   // Subscribe Mousedown and 'rowSelectEvent' handlers
   ////////////////////////////////////////////////////  
   this.subscribe("cellClickEvent", this.onEventSelectRow);
   this.subscribe("rowSelectEvent", handleRowSelectEvent); 
   function handleRowSelectEvent (oArgs) {
     var rowEl =  oArgs.el;    
     if (rowEl.style.display == "none") {      
       var isDownArrow = 
	 (rowEl.sectionRowIndex >= self._lastSelectedRow.sectionRowIndex);
       var nextEl = self.nextVisibleRow(rowEl.sectionRowIndex, isDownArrow);
       rowEl = (!nextEl ? self._lastSelectedRow : nextEl);  
       self.select(rowEl); // do not walk off end for dispay = 'none' rows 
     }	     
     
     // [down arrow]-scroll
     if (content.offsetHeight + content.scrollTop < 
	 rowEl.offsetTop + rowEl.offsetHeight ) { 
       
       var top = rowEl.offsetTop + rowEl.offsetHeight - content.offsetHeight;
       content.scrollTop = top;
     } else if (content.scrollTop > rowEl.offsetTop) { // [up arrow]-scroll
       var top = (rowEl.sectionRowIndex == 0 ? 0 : 
		  content.scrollTop - rowEl.offsetHeight); 
       content.scrollTop = top;
     }	

     self._lastSelectedRow = rowEl;
   };

   ////////////////////////////////////////////
   // Subscribe custom 'post' Mousedown handler
   ////////////////////////////////////////////
   this.subscribe("cellMousedownEvent", mousedownHandler);         
   function mousedownHandler (oArgs) {
     var evt = oArgs.event;
     var bCTRL = evt.ctrlKey; // || evt.metaKey); // ctrl or mac [cmd]
     var metaKey = evt.metaKey;
     var elTarget = oArgs.target;
     var elTag = elTarget.tagName.toLowerCase();     
     //if (!self._isFocus) {
     // must take this out!!!! 
     if (navigator.appName.toLowerCase().indexOf("internet") == -1) {
       self.getTable().focus(); // required for FF
     }	
     //self.focusTable();
               
     // Traverse up the DOM to find the row
     while(elTag != "tr") {
       // Bail out
       if(elTag == "body") {
	 return;
       }
       // Maybe it's the parent
       elTarget = elTarget.parentNode;
       elTag = elTarget.tagName.toLowerCase();
     }
     if (elTag == "tr") { // must be a row not a cell      
       if (!bCTRL && !self.isSelected(elTarget)) {
	 self.unselectAllRows();
	 self.select(elTarget);
       } else if (self.isSelected(elTarget)) { 
	 self.select(elTarget);
       } else if (metaKey) {
	 //alert("meta")
	 self.select(elTarget);
       }
       
       var rows = self.getSelectedRows();       
       var count = 0;
       for (var index = 0; index < rows.length; index++) {
	 count = (rows[index].style.display != "none" ? count+1 : count);	   
       }     
       
       var totalDraggedElId = self._paletteElIds[0].totalDragged;  	     
       if (count > 0) {
	 $(totalDraggedElId).innerHTML = count;  	
	 $(totalDraggedElId).style.display = "block"; 
       } else {	     	
	 $(totalDraggedElId).style.display = "none";
       }
     }
   };
   
   ///////////////////////////////////////////////////////////
   // Subscribe DoubleClick Event for datatable cell selection
   ///////////////////////////////////////////////////////////        
   this.subscribe("cellDoubleclickEvent", itemDoubleclickEvent);
   function itemDoubleclickEvent(oArgs) {
     var elTarget = oArgs.target;
     var elTag = elTarget.tagName.toLowerCase();
     // Traverse up the DOM to find the row
     while(elTag != "tr") {
       if(elTag == "body") {
	 return;
       }
       elTarget = elTarget.parentNode;
       elTag = elTarget.tagName.toLowerCase();
     }
     // create pill only for first <td> cell in row
     var cells = elTarget.getElementsByTagName("td");      
     var id = YAHOO.util.Dom.get(cells[0].id).innerHTML;
     self.addToPillBox(id);
   };
};

/**
 * @private
 */
PaletteTable.prototype._registerKeyListeners = function() {
   var self = this;
   var tableContent = $(this._paletteElIds[0].floater_results_list);

   ///////////////////////////////////////
   // Subscribe custom key event listeners
   ///////////////////////////////////////
   
   // [enter] 
   var enter = new YAHOO.util.KeyListener(tableContent, { keys:13 }, 
					  { fn: function() { self._enterEventHandler(); }, 
					      scope: tableContent, 
					      correctScope:true }); 
   enter.enable();         
   
   // [shift+Home]
   var home = new YAHOO.util.KeyListener(tableContent, { shift:true, keys:36 }, 
					 { fn: function() { self._selectAllRowsAbove(); }, 
					     scope: tableContent, 
					     correctScope:true }); 
   home.enable(); 
   
   // [shift+End]
   var end = new YAHOO.util.KeyListener(tableContent, { shift:true, keys:35 }, 
					{ fn: function() { self._selectAllRowsBelow(); }, 
					    scope: tableContent, 
					    correctScope:true }); 
   end.enable(); 
         
   /*
   //////////////////////////////////////
   function selectAllRowsBelowTEST() {
     alert("end");
     self.selectAllRows();
     var tableContent = $(self._paletteElIds[0].floater_results_list);
     tableContent.scrollTop = tableContent.scrollHeight;
   };
   
   
   var keys = new AgileListenerProxy(AgileEventConstants.EVENT_RANGE_SELECT_BOTTOM,
				    this._paletteElIds[0].floater_results_list,
				    selectAllRowsBelowTEST);
   keys[0].enable();
   keys[1].enable();
   */

   /*
   // [control+a]
   var ctrlA = new YAHOO.util.KeyListener(tableContent, { ctrl:true, keys:65 }, 
					  { fn: function() { self._selectAllEvent(); }, 
					      scope: tableContent, 
					      correctScope:true }); 
   ctrlA.enable();    
   */

   // key.enable();
   //////////////////////////////////////
   function selectAllTEST() {
     self.selectAllRows();
   };
   
   
   var key = new AgileListenerProxy(AgileEventConstants.EVENT_SELECT_ALL,
				    this._paletteElIds[0].floater_results_list,
				    selectAllTEST);   			     
   key[0].enable();
   //////////////////////////////////////

   // [tab]
   var tab = new YAHOO.util.KeyListener(tableContent, { keys:9 }, 
					{ fn: function() { self._tabEventHandler(); }, 
                                            scope: tableContent, 
                                            correctScope:true }); 
   tab.enable();    
   
   // [shift+tab]
   var shiftTab = new YAHOO.util.KeyListener(tableContent, { shift:true, keys:9 }, 
					     { fn: function() { self._tabEventHandler(); }, 
						 scope: tableContent, 
						 correctScope:true }); 
   shiftTab.enable();    
   
   // negate all tab index's for circular tabing
   (self.getTable()).tabIndex = -1;  
   (self.getBody()).tabIndex = -1;  
   (self.getHead()).tabIndex = -1;
};

/**
 * Flushes the table content back to it's initial start state.
 */
PaletteTable.prototype.resetTableContent = function() {
  //if (this.isEmpty()) { return; }

  // reset result list from last filter
  // setting all <tr>|<td>'s back to visable
  var tableContentEl = $(this._paletteElIds[0].floater_results_list);
  tableContentEl.scrollTop = 0; // set scroll bar to top
  
  var items = tableContentEl.getElementsByTagName("td");
  for (var index = 0; index < items.length; index++) {
    var item = items[index];
    item.style.display = item.parentNode.style.display = "";
  }
  this.unselectAllRows();
  
  // high light first row
  var firstRow = this.getRow(0);
  
  if (firstRow) {
    //this.getBody().focus();
    this.getHead().focus();
    this.select(firstRow);
    this.highlight(firstRow);
    this._lastSelectedRow = firstRow;
    var draggedEl = $(this._paletteElIds[0].totalDragged);
    draggedEl.innerHTML = 1;  	
  }   	
};

/**
 * @param
 * @param
 */
PaletteTable.prototype.addToPillBox = function(id) {
  var animationTargetEl = $('palette_added_notice');
  // create pill
  this._pillBox.createPill(id, false);
  
  // animate added notice over palette
  animationTargetEl.style.display = "block";
  this._paletteAnim.animate();

};

/**
 * 
 */
PaletteTable.prototype.getRowId = function(rowEl) {
  var cells = (rowEl).getElementsByTagName("td");  
  var el = YAHOO.util.Dom.get(cells[0].id); // cell[0] is the 'id' El
  if (el) {
    return (el.innerHTML);
  } else {
    return null;
  }
};

/**
 * 
 */
PaletteTable.prototype.getRows = function() {      
   return ((this.getBody()).getElementsByTagName("tr")); 
};

/**
 *
 */
PaletteTable.prototype.selectAllRows = function() {
  var rows = this.getRows(); 
  for(var index = 0; index < rows.length; index++) {
    if (rows[index]) {
      this.select((rows[index]));
    }
  }
};

/**
 * Gets the next visible row in the table. A visibile row is one who's
 * display style is not marked as <i>none</i>.
 * @param {int} row location in table to start searching.
 * @param {boolean} direction to start searching (up|down arrow keys). 
 */
PaletteTable.prototype.nextVisibleRow = function(startIndex, direction) {
  var rows = this.getRows();

  if (direction) { // down arrow
    for(var index = startIndex; index < rows.length; index++) {
      var elRow = rows[index];
      if (elRow.style.display != "none") {
	return elRow;
      }
    }
  } else { // up arrow
    for(var index = startIndex; index >= 0; index--) {
      var elRow = rows[index];
      if (elRow.style.display != "none") {
	return elRow;
      }
    }
  }

  return null;
}

//////////////////
// Private Events
//////////////////

/**
 * @private
 */
PaletteTable.prototype._enterEventHandler = function() {
  var selRows = this.getSelectedRows();
  //var animationTarget = {animationEl: {id: 'palette_added_notice'}};

  for (var index = 0; index < selRows.length; index++) {       
    var cells = (selRows[index]).getElementsByTagName("td");  
    var el = YAHOO.util.Dom.get(cells[0].id);    
    //if (el && $(el.id).style.display != "none" && selRows[index].style.display != "none") {
    if (el && selRows[index].style.display != "none") {
      this.addToPillBox(el.innerHTML);

    }
  }   	
  this.focusTable();
};              

/**
 * @private
 */
PaletteTable.prototype._selectAllEvent = function(yahooEvent, srcObj, agileObj) {
  //var self = agileObj['sourceObj'];
  //var self = agileObj['attachObj'];
  //var self = srcObj;
  //this.selectAllRows();
};

/**
 * @private
 * [shift+home]
 * @param {boolean} 
 */
PaletteTable.prototype._selectAllRowsAbove = function() {
  var selectedRows = this.getSelectedRows();
  if (selectedRows.length >=1) {
    var lastId = this.getRowId(selectedRows[selectedRows.length-1]);
    this.unselectAllRows();            
    var rows = this.getRows();      
    // select all rows above the 'last' selected row
    for (var index = 0; index < rows.length; index++) {  
      var rowEl = rows[index];       
      var id = this.getRowId(rowEl);        
      if (id && id == lastId) {
	this.select(rowEl);
	return;
      } else if (id) {
	this.select(rowEl);
      } // else ignore 
    }
  }	   
};

/**
 * [shift+end]
 * @private
 */
PaletteTable.prototype._selectAllRowsBelow = function() {
  var selectedRows = this.getSelectedRows();
  if (selectedRows.length >=1) {
    var lastId = this.getRowId(selectedRows[selectedRows.length-1]);
    this.unselectAllRows();            
    var rows = this.getRows();      
    // select all rows below the 'last' selected row
    for (var index = rows.length-1; index >= 0; index--) {  
      var rowEl = rows[index];       
      var id = this.getRowId(rowEl);        
      if (id && id == lastId) {
	this.select(rowEl);       
	setTimeout(function() { rowEl.focus(); }, 0);
	var tableContent = $(this._paletteElIds[0].floater_results_list);
	tableContent.scrollTop = tableContent.scrollHeight;
	return;
      } else if (id) {
	this.select(rowEl);
      } // else ignore 
    }
  }	   
};

/**
 * @private
 */
PaletteTable.prototype._tabEventHandler = function() {
  var filterElId = this._paletteElIds[0].floater_search_text;
  $(filterElId).focus();
  setTimeout("document.getElementById('"+ filterElId +"').focus();", 0);
};

/**
 * [tab+shift]
 * @private
 */
PaletteTable.prototype.tabShiftEventHandlerNOT_UESED = function() {
  this.unselectAllRows();
  this.focusTable();
  $(this._paletteElIds[0].floater_search_text).focus();   
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 *
 */
String.prototype.ellipse = function(maxLength){
  if(this.length > maxLength){
    return this.substr(0, maxLength-3) + '...';
  }
  return this;
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * <p>
 * This class acts as a contains text filter for <code>PaletteDataTable</code>
 * row and column text values.
 * </p>
 * 
 * @class Filter
 * //@extends //AGILE.widget.PaletteView
 * @constructor
 * @param {Object} oConfig 
 * 
 * @author Sean Wells
 * @version 0.1
 */
Filter = function(dataTable) {
  this._dataTable = dataTable;
  var filterElId = dataTable._paletteElIds[0].floater_search_text;
  var paletteResultsList = dataTable._paletteElIds[0].floater_results_list;
  var containerEl = $(dataTable._paletteElIds[0].floater_filter);
  
  /*if (dataTable.isEmpty()) {
    containerEl.innerHTML = localMsg.EmptyList;
    // clean any table results
    $(paletteResultsList).innerHTML = "";
    this._swapStyles($(paletteResultsList), "palette_results_list", "palette_results_list_disabled"); 
  } else {*/
    containerEl.innerHTML = "";
    containerEl.innerHTML += 'Filter: <input type=\"text\" id=\"' + filterElId + '\" ' 
    + 'class=\"search nodrag\" name=\"search\" autocomplete=\"off\" value=\"\" '
    + 'tabindex=\"1\"/>';
    
    $(filterElId).value = "";
    $(filterElId).style.visibility = "visible";    
    this._swapStyles($(paletteResultsList), "palette_results_list_disabled", "palette_results_list");
 // }  
  
  //////////////////
  // Filter results
  //////////////////      
  YAHOO.util.Event.addListener(filterElId, "keyup", filterResults); 
  function filterResults() {
    dataTable.unselectAllRows();
    var query = $(filterElId).value.toLowerCase();    
    var rows = ($(paletteResultsList)).getElementsByTagName("tr");
    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {       
      var row = rows[rowIndex];
      var cols = row.getElementsByTagName("td");
      var lastCol = cols.length-1;
      for (var colIndex = 0; colIndex < cols.length; colIndex++) {
	var col = cols[colIndex];
	var str = col.innerHTML.toLowerCase(); // trim       	 
        str = replaceHtmlText(str);
	if (str.indexOf(query) != -1) { // match	  
	  // ensure all columns have display for matched row	   
	  for (colIndex = 0; colIndex < cols.length; colIndex++) {
	    cols[colIndex].style.display = '';
	    cols[colIndex].parentNode.style.display = '';
	  }
	  break; // get next row
	} else {	   
	  if (colIndex == lastCol) { // remove entire row
	    col.style.display = 'none';
	    col.parentNode.style.display = 'none';
	    col.style.className = '';
	  }       
	}	
      }	
    }
  };
  
  /////////////////////
  // Wire filter focus
  /////////////////////
  YAHOO.util.Event.addListener(filterElId, "focus", filterFocusEvent);
  YAHOO.util.Event.addListener(filterElId, "click", filterFocusEvent);
  function filterFocusEvent(ev) {
    YAHOO.util.Event.stopEvent(ev);
    YAHOO.util.Dom.removeClass($(filterElId), "agile_border");
    YAHOO.util.Dom.addClass($(filterElId), "focus_field");
    YAHOO.util.Dom.addClass($(filterElId), "focus_border");  
    dataTable.unselectAllRows();
  };        

  ////////////////////
  // Wire filter blur
  ////////////////////
  YAHOO.util.Event.addListener(filterElId, "blur", filterBlurEvent);
  function filterBlurEvent() {
    //$(filterElId).value = "";
    $(filterElId).style.visibility = "visible";
    YAHOO.util.Dom.removeClass($(filterElId), "focus_field");
    YAHOO.util.Dom.removeClass($(filterElId), "focus_border");       
  };        
  
  /////////////////////
  // Wire KeyListeners
  ////////////////////
  var self = this;
  // [tab+shift]   
  var shiftTab = new YAHOO.util.KeyListener($(filterElId), { shift:true, keys:9 }, 
					    { fn: function() { self._shiftTabEventHandler(); }, 
						scope: $(filterElId), correctScope:true }); 
  shiftTab.enable();
  
  // [tab]
  var tab = new YAHOO.util.KeyListener($(filterElId), { keys:9 }, 
				       { fn: function() { self._tabEventHandler(); }, 
					   scope: $(filterElId), correctScope:true }); 
  tab.enable();    
};

/**
 * @private
 */
Filter.prototype._dataTable = null;

/**
 * @private
 */
Filter.prototype._swapStyles = function (targetEl, oldClass, newClass) {
  YAHOO.util.Dom.removeClass(targetEl, oldClass); 
  YAHOO.util.Dom.addClass(targetEl, newClass);
};

/**
 * [tab]
 */
Filter.prototype._tabEventHandler = function() {
  var dataTable = this._dataTable;
  var firstRow = dataTable.getRow(0);
  if (firstRow && firstRow.style.display == "none") {
    firstRow = dataTable.nextVisibleRow(0, true);
  }

  if (firstRow) {
    dataTable.selectRow(firstRow);
    (dataTable.getHead()).focus(); // needed for IE
    $(dataTable._paletteElIds[0].floater_results_list).scrollTop = 0;
  }
};

/**
 * [shift+tab]
 */
Filter.prototype._shiftTabEventHandler = function() {
  var dataTable = this._dataTable;
  var firstRow = dataTable.getRow(0);
  if (firstRow && firstRow.style.display == "none") {
    firstRow = dataTable.nextVisibleRow(0, true);
  }

  if (firstRow) {
    dataTable.getBody().focus();
    dataTable.selectRow(firstRow);
    $(dataTable._paletteElIds[0].floater_results_list).scrollTop = 0;
  }
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/
