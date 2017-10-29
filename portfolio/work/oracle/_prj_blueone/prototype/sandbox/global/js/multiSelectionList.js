/**
 * <p>
 * The MultiSelectList control provides front-end selection logic for 
 * text-entry suggestion and completion functionality as they relate to
 * the Agile Static and Object list types. 
 * </p>
 *
 * @module  multiSelectList
 * @requires yahoo, dom, event datasource, connection
 * @namespace YAHOO.widget
 * @title MultiSelectList Widget
 */

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

registerNS("AGILE.util");
registerNS("AGILE.widget");

/**
 * Factory for creating MultiSelectList JS list objects based on 
 * <code>listId</code>. This is the first method to be invoked, listening
 * begins here.
 * @param oArgs {Object} Object literal json struct
 */
function createInstance() {

   var args = {"dsConfig": [ {"listId": "1234",
			      "url": "http://localhost/msl/data"
                           }],
	       "elIds": [{"autoCompElIds": [        
                                            {"elem_id": "9999",
					     "edit_mode": "edit_mode", 
					     "agileautocomplete": "agileautocomplete",
					     "search_query": "search_query",
					     "results_container": "results_container",
					     "selected_container": "selected_container",
					     "selected_items": "selected_items",
					     "show_floater": "show_floater",
					     "selected_elem_count": "1",
					     "added_notice": "added_notice"
					    }
					    ]},          
                          {"paletteElIds": [
                             {"dragDiv": "dragDiv",
                              "totalDragged": "totalDragged",
			            "floater_window": "floater_window",
			            "floater_content": "floater_content",
			            "floater_handlebar": "floater_handlebar",
			            "close_floater": "close_floater",
			            "floater_filter": "floater_filter",
			            "floater_search_text": "floater_search_text",
			            "floater_results_div": "floater_results_div",
			            "floater_results_list": "floater_results_list",
			            "floater_resize_handle": "floater_resize_handle",
			            "paletteTitle": "Column Header Test"
                       }
                     ]}
			 ]};


   var msl = null;
   msl = new AGILE.widget.BulkSelectList(args);
   
   // For now we are not usinging this for MulitSelectList
   // The intent is to use the below Object to handle Searching
   //msl = new AGILE.widget.ObjectSelectList(url, targetEl, containerEl, inputEl, selectEl);
   
   // start listening for autocomplete        
   msl.beginListening();
   
   return msl;
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * @constructor
 * @private
 */
AGILE.util.PalettePosition = function () {
  if (AGILE.util.PalettePosition.caller != AGILE.util.PalettePosition.getInstance) {
    throw new Error("There is no public constructor for PalettePosition.");
  }
  
  var useDefault = true;
  this._usedefault = useDefault;
};

/**
 * @private
 */
AGILE.util.PalettePosition.__instance__ = null;  // static property

/**
 * @private
 */
AGILE.util.PalettePosition.prototype._usedefault = null;

/**
 * Public
 * @return singleton instance of this object.
 */
AGILE.util.PalettePosition.getInstance = function () {
  if (this.__instance__ == null) {
    this.__instance__ = new AGILE.util.PalettePosition();
  }
  
  return (this.__instance__);
};

/**
 * @return
 */
AGILE.util.PalettePosition.prototype.getUseDefault = function () {
  return (this._usedefault);
};

/**
 * @param (Object)  
 */
AGILE.util.PalettePosition.prototype.setUseDefault = function (usedefault) {
  this._usedefault = usedefault;
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * The <code>MultiSelectList</code> class defines and manages the default 
 * implementation for all list types (e.g. Long/Short) lists. 
 * This object also exposes overridable abstract methods intended for subclass 
 * implementation behavior.
 * 
 * @class MultiSelectList
 * @uses YAHOO.util.Event
 * @constructor
 * @param {Number} listId unique identifier of the this list.
 * @param {Object} elIds object literal holding all unique HTMLElement ids.
 *
 * @author Sean Wells
 * @version 0.1
 */ 
AGILE.widget.MultiSelectList = function (listId, elIds) {
   this._listId = listId;
   this._autoCompElIds = elIds[0].autoCompElIds;
   this._paletteElIds = elIds[1].paletteElIds;
   this._pillBox = new AGILE.widget.PillBox(this);
   this._queryType = "";
   this._initListeners();   
};

/////////////////////////////////////////////////////////////////////////////
//
// Public constants
//
/////////////////////////////////////////////////////////////////////////////

/**
 * Public accessor to the unique name of the MultiSelectList instance.
 *
 * @method toString
 * @return {String} Unique name of the MultiSelectList instance.
 */
AGILE.widget.MultiSelectList.prototype.toString = function() {
  return ("MultiSelectList " + this._listId);
};

/////////////////////////////////////////////////////////////////////////////
//
// Private member variables
//
/////////////////////////////////////////////////////////////////////////////

/**
 * Internal class variable to index multiple DataSource instances.
 *
 * @property _pillBox
 * @type PillBox
 * @private
 */
AGILE.widget.MultiSelectList.prototype._listId = null;

/**
 * Internal class variable holding all autocomplete HtmlElement ids.
 *
 * @property _autoCompElIds
 * @type Object
 * @private
 */
AGILE.widget.MultiSelectList.prototype._autoCompElIds = [];

/**
 * Internal class variable to index multiple DataSource instances.
 *
 * @property _pillBox
 * @type PillBox
 * @private
 */
AGILE.widget.MultiSelectList.prototype._paletteElIds = [];

/**
 * Internal class variable defining a reference to the <code>Pillbox</code>
 *
 * @property _pillBox
 * @type PillBox
 * @private
 */
AGILE.widget.MultiSelectList.prototype._pillBox = null;
AGILE.widget.MultiSelectList.prototype._queryType = "";
AGILE.widget.MultiSelectList.prototype._autoComp = null;

var elmdelim = "&#";

/**
 * @private
 * @member MultiSelectList
 */
AGILE.widget.MultiSelectList.prototype._initListeners = function() {
  var self = this;
  var autoCompElId = self._autoCompElIds[0].agileautocomplete;
  var searchQueryElId = self._autoCompElIds[0].search_query;
  
  ///////////////////////////////////
  // AutoCompelet type-in area focus
  ///////////////////////////////////
  YAHOO.util.Event.addListener(searchQueryElId, "focus", selectListFocus);
  function selectListFocus() {
    $(searchQueryElId).value = $(searchQueryElId).value.trim();
    $(searchQueryElId).style.color = "#000000";
    $(searchQueryElId).focus(); 
    YAHOO.util.Dom.removeClass($(searchQueryElId), "agile_border");
    YAHOO.util.Dom.addClass($(searchQueryElId), "focus_field");
    YAHOO.util.Dom.addClass($(searchQueryElId), "focus_border"); 
    YAHOO.util.Dom.removeClass($(autoCompElId), "agile_border");
    YAHOO.util.Dom.addClass($(autoCompElId), "focus_field");
    YAHOO.util.Dom.addClass($(autoCompElId), "focus_border");
  };      
  
  ////////////////////////////////////////
  // AutoCompelet type-in area click focus
  ////////////////////////////////////////
  YAHOO.util.Event.addListener(autoCompElId, "click", containerFocusEvent);	  
  function containerFocusEvent () {
    $(searchQueryElId).value = $(searchQueryElId).value.trim();
    $(searchQueryElId).focus(); 
    YAHOO.util.Dom.removeClass($(autoCompElId), "agile_border");
    YAHOO.util.Dom.addClass($(autoCompElId), "focus_field");
    YAHOO.util.Dom.addClass($(autoCompElId), "focus_border");
  };
  
  //////////////////////////////////
  // AutoCompelet type-in area blur
  //////////////////////////////////
  //YAHOO.util.Event.addListener(searchQueryElId , "blur", onBlurInputEvent);
  function onBlurInputEvent() {
    $(searchQueryElId).value = $(searchQueryElId).value.trim();
    YAHOO.util.Dom.removeClass($(autoCompElId), "focus_field");
    YAHOO.util.Dom.addClass($(autoCompElId), "agile_border");
    //self._sendQuery($(searchQueryElId).value);
    var results = self.findLocalMatch($(searchQueryElId).value, ";");
    var selectedList = self.validateInput(results, $(searchQueryElId).value.split(";"));
    self._pillBox.createPills(selectedList);
  };
  
  ///////////////////////
  // Wire Palette ToolTip
  ///////////////////////  
  /*
  var launchButtonEl = this._autoCompElIds[0].show_floater;
  //var logoutTooltip = new YAHOO.widget.Tooltip("logoutTooltip", 
  //				       { context:"logout", text:"Logout" } );
  var tooltip = new YAHOO.widget.Tooltip("paletteLaunchButtonTooltip", 
					 { context: launchButtonEl, text:"Palette" } );    
  */
};

/**
 * @param ds
 */
AGILE.widget.MultiSelectList.prototype.beginListening = function(ds) {
   var self = this;
   var containerCollapsed = false;
   var autoCompElId = self._autoCompElIds[0].agileautocomplete;
   var searchQueryElId = self._autoCompElIds[0].search_query;
   var resultsContainer = self._autoCompElIds[0].results_container;
  
   /**
    * Force the auto complete (AC) expanded container to close if the rightpane
    * is being scrolled. This is needed because scolling the right pane does
    * not force the AC expaned container to fire an 'onBlur' event.
    */
   scrollFocus = function() {
     self._autoComp._toggleContainer(false);
   };
   addEvent('pageViewContent', 'scroll', scrollFocus);

   /**
    * 
    */
   self._autoComp = new YAHOO.widget.AutoComplete(searchQueryElId, resultsContainer, ds,
		      { queryDelay:0, autoHighlight: true,
			  prehighlightClassName:"yui-ac-prehighlight",
			  typeAhead: true, useShadow:false,
			  delimChar:";", forceSelection:true,
			  maxResultsDisplayed:20, animVert:false 
			} );


   /**
    * Callback to hanble any pre-container expantion od autocompleted values.
    * @return {Boolean} <code>true</code> if expand <code>false</code> otherwise.
    */
   self._autoComp.doBeforeExpandContainer = function () {
      // if a cut/PASTE was performed do not show expantion container
      return (self._queryType != "CUT_PASTE");
   }
   
   /**
    * Converts a result item object into HTML markup escaping any special characters
    * shuch as <i>&</i>.
    * for display. Return data values are accessible via the oResultItem object,
    * and the key return value will always be oResultItem[0]. Markup will be
    * displayed within &lt;li&gt; element tags in the container.
    *
    * @method formatResult
    * @param oResultItem {Object} Result item representing one query result. 
    * Data is held in an array.
    * @param sQuery {String} The current query string.
    * @return {String} HTML markup of formatted result data.
    */
   self._autoComp.formatResult = function ( oResultItem , sQuery ) {
     //var sMarkup = oResultItem[0].replace(/&/g, "&#38;");
     return (oResultItem[0] ? oResultItem[0].textToHTML() : "");
   };

   /**
    *
    */
   var handleContainerCollapse = function (oSelf) {
     containerCollapsed = true;
   }
   
   self._autoComp.containerCollapseEvent.subscribe(handleContainerCollapse); 

   /**
    *
    */
   var handleContainerExpand = function (oSelf) {    
     var items = YAHOO.util.Dom.getElementsByClassName("yui-ac-content");
     var selectedContainerEl = $(self._autoCompElIds[0].selected_container);
     var width = selectedContainerEl.offsetWidth;

     for (var index = 0; index < items.length; index++) {
       var item = items[index];
       item.style.width = width + "px";
     }
   }
   
   self._autoComp.containerExpandEvent.subscribe(handleContainerExpand); 

   /**
    * Callback handling auto complete post logic 
    * @param
    * @param
    * @return
    */
   var onDataReturn = function (sType, aArgs) {
     var oAutoComp = aArgs[0];
     var sQuery = decodeURIComponent(aArgs[1]);
     var aResults = aArgs[2];
     
     // cut/paste single 			
     if (aResults.length > 0 && self._queryType == "CUT_PASTE") {
       // validate results and create pills for valid ones
       var selectedList = self.validateInput(aResults, sQuery.split(elmdelim));
       self._pillBox.createPills(selectedList);
     } else if (aResults.length == 0 && self._queryType == "CUT_PASTE") {
       $(searchQueryElId).style.color = "#990000";	         
     } else {
       var color = (aResults.length == 0 ? "#990000" : "#000000");
       $(searchQueryElId).style.color = color;
     }
     self._queryType = "";
   };   
   
   self._autoComp.dataReturnEvent.subscribe(onDataReturn);  
   
   /**
    * Event fired to create a new Pill when an item is selected via a click
    * or the [Enter] key.
    */
   var onItemSelect = function (sType, aArgs) {
     $(searchQueryElId).value = $(searchQueryElId).value.trim();
     var oAutoComp = aArgs[0];
     var elItemId = aArgs[2];
     var autoCompElId = self._autoCompElIds[0].agileautocomplete;
     self._pillBox.createPill(new String(elItemId), true);
     //self._sendQuery(YAHOO.util.Dom.get(searchQueryElId).value);
     //var results = self.findLocalMatch($(searchQueryElId).value, ";");
     var results = self.findLocalMatch(encodeURI($(searchQueryElId).value), ";");
     var selectedList = self.validateInput(results, $(searchQueryElId).value.split(";"));
     self._pillBox.createPills(selectedList);
   }    

   self._autoComp.itemSelectEvent.subscribe(onItemSelect);

   /**
    *
    */
   function onBlurInputEvent() {
     $(searchQueryElId).value = $(searchQueryElId).value.trim();
     YAHOO.util.Dom.removeClass($(autoCompElId), "focus_field");
     YAHOO.util.Dom.addClass($(autoCompElId), "agile_border");
     //self._sendQuery($(searchQueryElId).value);
     //var results = self.findLocalMatch($(searchQueryElId).value, ";");
     var results = self.findLocalMatch(encodeURI($(searchQueryElId).value), ";");
     var selectedList = self.validateInput(results, $(searchQueryElId).value.split(";"));
     self._pillBox.createPills(selectedList);
   };
   
   self._autoComp.textboxBlurEvent.subscribe(onBlurInputEvent);
   
   ///////////////////
   // Wire key events
   ///////////////////
   
   YAHOO.util.Dom.get(searchQueryElId).onkeyup = function(e) {
     var queryInput = YAHOO.util.Dom.get(searchQueryElId).value;
     //keycode = (window.event ? window.event.keyCode : e ? e.which : -999);
     if (window.event) {
       e = window.event;
       keycode = window.event.keyCode;
     } else {
       if (e) {
	 keycode = e.which;						
       }
     }
     
     if (keycode == 13) { // return key
       if (YAHOO.util.Dom.get(searchQueryElId).value){
	 //var results = self.findLocalMatch($(searchQueryElId).value, ";");
	 var results = self.findLocalMatch(encodeURI($(searchQueryElId).value), ";");
	 var selectedList = self.validateInput(results, $(searchQueryElId).value.split(";"));
	 self._pillBox.createPills(selectedList);
	 //self._sendQuery(queryInput);
       }
     }
     
     //if(e.altKey && keycode == 76) { // ALT + L -- launch palette
     if(e.ctrlKey && keycode == 76) { // ALT + L -- launch palette
        fireClickEvent(YAHOO.util.Dom.get(self._autoCompElIds[0].show_floater));
     }
     
     // When the auto complete is open and if right arrow is hit, then create 
     // pills for all the values
     if(keycode == 39 && containerCollapsed) {
       queryInput = queryInput.trim();
       queryInput = queryInput.replace(/; /, ";");
       queryInput = queryInput.replace(/ ;/, ";");
       //var results = self.findLocalMatch(queryInput, ";");
       var results = self.findLocalMatch(encodeURI(queryInput), ";");
       var selectedList = self.validateInput(results, queryInput.split(";"));
       self._pillBox.createPills(selectedList);
       //YAHOO.util.Dom.get(searchQueryElId).value = ""; // clear the value
     }
     containerCollapsed = false;
     
     // if the down arrow key is pressed in the type-in area with the 
     // auto complete container collapsed then select the first pill by default.
     if(keycode == 40  && !e.shiftKey) {
       if(!self._autoComp.isContainerOpen()) {
	 var pills = self._pillBox.getPills();
	 if(pills.length > 0)
	   self._pillBox.selectPill(pills[0].id);
       }
     }
     
     if (keycode == 46) { // [delete-key]
       self._pillBox.removePills();
     }
     
     return false;
   }      
};

/**
 * @private
 * @member MultiSelectList
 * @param {String} query the auto complete query String.
 */
AGILE.widget.MultiSelectList.prototype._sendQuery = function (query) {
  if (query) {
    var inputValues = (query.trim()).split(";");	
    var q = "";
    for (var index = 0; index < inputValues.length; index++) {
      var dilm = (index == inputValues.length-1 ? "" : elmdelim); 
      q += inputValues[index].trim() + dilm;
    }
    this._queryType = "CUT_PASTE";
    this._autoComp.sendQuery(q); // invokes async call. 
    return;
  }
};

 /**
  * Utility method to fire onclick event on an element
  */
function fireClickEvent(elem) {
  if (elem.fireEvent) { 
    elem.fireEvent("onclick"); 
  } else { 
    var clickEvent = window.document.createEvent("MouseEvent"); 
    clickEvent.initEvent("click", false, true); 
    elem.dispatchEvent(clickEvent); 
  }
};

/**
 * @param {Array} results
 * @param {Array} inputValues
 */
AGILE.widget.MultiSelectList.prototype.validateInput = function (results, inputValues) {  
  var self = this;
  var validResults = new Array();
  var invalidInput = "";	
  var index = 0;
  
  for (var i = 0; i < inputValues.length; i++) {
    var isValid = false;
    var input = (inputValues[i]).trim();
    input = input.replace(/;/, "");
    for (var j = 0; j < results.length; j++) {
      var result = new String(results[j]);
      result = result.replace(/\r|\n|\r\n/g, "");			
      //result = result.replace(/,/, "");			
      result = result.trim();
      if (encodeURI(input.toLowerCase()) == encodeURI(result.toLowerCase())) {
	isValid = true;			
	break;
      }
    }
    
    if (isValid) {  				  	  			  
      validResults.unshift(input);  
      index++;
    } else {
      // set bad input text to red and display
      var dilm = (i == inputValues.length-1 ? "" : "\;"); 
      invalidInput += inputValues[i] + dilm;  
      var searchQueryElId = self._autoCompElIds[0].search_query;
      $(searchQueryElId).value = invalidInput;
    }
  }
  
  var searchQueryElId = self._autoCompElIds[0].search_query;  
  var color = (invalidInput != "" ? "#990000" : "#000000");
  var value = (invalidInput != "" ? invalidInput : "");
  $(searchQueryElId).style.color = color;
  $(searchQueryElId).value = value;
         
  return validResults;
};

/**
 * @param queryInput
 */
AGILE.widget.MultiSelectList.prototype.onBlurValidateInput = function (queryInput) {
  var self = this;   
  if (queryInput){	
    queryInput = queryInput.trim();
    var inputValues = queryInput.split(";");	
    var q = "";
    for (var index = 0; index < inputValues.length; index++) {
      var dilm = (index == inputValues.length-1 ? "" : ","); 
      q += inputValues[index].trim() + dilm;
    }
    
    self._queryType = "CUT_PASTE";
    self._autoComp.sendQuery(q); // invokes async call. 
    return;	       
  }      
};

/**
 * @param {}
 */
AGILE.widget.MultiSelectList.prototype.registerPalette = function (dataSet) {
  var pillBox = this._pillBox;
  var autoCompElIds = this._autoCompElIds;
  var paletteElIds = this._paletteElIds;
  var launchButton = this._autoCompElIds[0].show_floater;
  var id = this._autoCompElIds[0].show_floater;
  
  /////////////////////////////////////////////////////////////
  // Wire Palette Button launch event ([enter], [alt-L], click)
  /////////////////////////////////////////////////////////////
  YAHOO.util.Event.addListener(launchButton, "click", launchPaletteEvent);
  
  var key = new AgileListenerProxy(AgileEventConstants.EVENT_LAUNCH_PALETTE,
				   launchButton, launchPaletteEvent);
  key[0].enable();  


  var key1 = new AgileListenerProxy(AgileEventConstants.EVENT_LAUNCH_PALETTE,
				    this._autoCompElIds[0].search_query, launchPaletteEvent);
  key1[0].enable();  
  

  var self = this;
  YAHOO.util.Dom.get(launchButton).onkeyup = function(e) {
    if(e.ctrlKey && keycode == 76) {
      fireClickEvent(YAHOO.util.Dom.get(self._autoCompElIds[0].show_floater));
    }
  }


  var enter = new YAHOO.util.KeyListener($(launchButton), { keys:13 }, 
					 { fn: function() { launchPaletteEvent(); }, 
					     scope: $(launchButton), correctScope:true }); 
  enter.enable();    

  /**
   * Launch Palette.
   */
  function launchPaletteEvent() {
    var palette = new AGILE.widget.Palette(dataSet, pillBox, autoCompElIds, paletteElIds);
  };        
};
    
/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * The <code>BulkSelectList</code> class defines and manages the implementation
 * for all <i>short lists</i>. 
 *
 * @class AGILE.widget.BulkSelectList
 * @author Sean Wells
 * @version 0.1
 * @uses YAHOO.util.Event
 * @constructor
 * @param {Object} args object literal json struct. holding all unique 
 * HtmlElement ids.
 */ 
AGILE.widget.BulkSelectList = function(args) {
  AGILE.widget.BulkSelectList.superclass.constructor.call(this, args.dsConfig[0].listId,
							  args.elIds);
  this._url = args.dsConfig[0].url;
  this._dataset = null;
  this._searchQueryElId = args.elIds[0].autoCompElIds[0].search_query;
  this._selectElId = args.elIds[0].autoCompElIds[0].selected_items;
  this._selectedElemCount = args.elIds[0].autoCompElIds[0].selected_elem_count;
  this._elemId = args.elIds[0].autoCompElIds[0].elem_id;
};

YAHOO.extend(AGILE.widget.BulkSelectList, AGILE.widget.MultiSelectList);

/////////////////////////////////////////////////////////////////////////////
//
// Private member variables
//
/////////////////////////////////////////////////////////////////////////////

/**
 * @private
 */
AGILE.widget.BulkSelectList.prototype._url = null
AGILE.widget.BulkSelectList.prototype._searchQueryElId = null;
AGILE.widget.BulkSelectList.prototype._dataset = null;
AGILE.widget.BulkSelectList.prototype._selectElId = null;
AGILE.widget.BulkSelectList.prototype._selectedElemCount = null;
AGILE.widget.BulkSelectList.prototype._elemId = null;

/**
 * Public accessor to the unique name of the BulkSelectList instance.
 *
 * @method toString
 * @return {String} Unique name of the BulkSelectList instance.
 */
AGILE.widget.BulkSelectList.prototype.toString = function() {
  return ("BulkSelectList ");
};

/**
 * Set up autocomplete and pull all list data and load upfront for client side
 * cache.
 *
 * @member BulkSelectList
 */
AGILE.widget.BulkSelectList.prototype.beginListening = function() {
  var self = this;
  
  /**
   * Callback that invokes the client side autocomplete matching.
   * @param {String} sQuery the auto complet type in query string.
   */
  var dsCallback = function (sQuery) {
    return (self.findLocalMatch(sQuery, elmdelim));
  };
  
  // super
  var ds = new YAHOO.widget.DS_JSFunction(dsCallback, {queryMatchSubset: true}); 
  AGILE.widget.BulkSelectList.superclass.beginListening.call(this, ds);
  
  /**
   * <p>AJAX bulk load of list data.</p>
   * @class AgileListMonitor
   */
  AgileListMonitor = {
    
    /**
     * This member handles the success response and passes the response 
     * object <code>result</code> to this objects <code>processResult</code> method.
     * @param {Object} result the responce result.    
     */
    handleSuccess:function(result) {         
      this.processResult(result);
    },   
    
    handleFailure:function(o) {
      // Failure handler, log...
      // @Note IE treates empty 'asyncRequest' as a failure.
      var dataset = {};
      self.registerPalette(dataset);
    },   
    
    processResult:function(o) {  
      var json = o.responseText;     
      self.registerPalette(eval('(' + (json ? json : "{}") + ')'));     
    },   
    
    sendRequest:function(methodType, url) { 
      url = url + "&format=text/json";
      YAHOO.util.Connect.asyncRequest(methodType, url, callback, null); 
    }        
  };           
  
  /**  
   * Define the callback object for success and failure  
   * handlers as well as object scope.  
   */  
  var callback = {   
    success:AgileListMonitor.handleSuccess,   
    failure:AgileListMonitor.handleFailure,   
    scope: AgileListMonitor 
  };  

  // preload static list data for client side cache  
  // @NOTE comment out for prototype
  // AgileListMonitor.sendRequest("GET", self._url);     

  this.registerPalette();
 
};

/////////////////////////////////////////////////////////////////////////////
//
// Public methods
//
/////////////////////////////////////////////////////////////////////////////	

/**
 * @param {}
 */
AGILE.widget.BulkSelectList.prototype.registerPalette = function () {
  var self = this;
  this._dataset =  {"c" : [{"COL0" : "Change Analyst List", "COL1" : "Change Analyst", id: 11, "COL2" : "Change Analyst", id: 66, "COL3" : "Change Analyst", id: 67, "COL4" : "Change Analyst", id: 69},  
                          {"COL0" : "Compliance Manager List", id: 16}, 
                          {"COL0" : "Component Engineer List", "COL1" : "Component Engineer", id: 12}], 
                   "p" : [{"COL0" : "Price Administrator List", "COL1" : "Price Administrator", id: 13}], 
                   "q" : [{"COL0" : "Quality Administrator List", "COL1" : "Quality Administrator", id: 14}, 
                          {"COL0" : "Quality Analyst List", "COL1" : "Quality Analyst", id: 15}, 
                          {"COL0" : "Quality Analyst List1", "COL1" : "Quality Analyst1", id: 16}, 
                          {"COL0" : "Quality Analyst List2", "COL1" : "Quality Analyst2", id: 17}, 
                          {"COL0" : "Quality Analyst List3", "COL1" : "Quality Analyst3", id: 18}, 
                          {"COL0" : "Quality Analyst List4", "COL1" : "Quality Analyst4", id: 19}, 
                          {"COL0" : "Quality Analyst List5", "COL1" : "Quality Analyst5", id: 20}, 
                          {"COL0" : "Quality Analyst List6", "COL1" : "Quality Analyst6", id: 21}, 
                          {"COL0" : "Quality Analyst List7", "COL1" : "Quality Analyst7", id: 22}, 
                          {"COL0" : "Quality Analyst List8", "COL1" : "Quality Analyst8", id: 23}, 
                          {"COL0" : "Quality Analyst List9", "COL1" : "Quality Analyst9", id: 24}, 
                          {"COL0" : "Quality Analyst List10", "COL1" : "Quality Analyst10", id: 25}, 
                          {"COL0" : "Quality Analyst List11", "COL1" : "Quality Analyst11", id: 26}, 
                          {"COL0" : "Quality Analyst List12", "COL1" : "Quality Analyst12", id: 27}, 
                          {"COL0" : "Quality Analyst List13", "COL1" : "Quality Analyst13", id: 28}], 
                   "_COLUMN_HEADERS" : [{key:"COL0", text:"Name", sortable:true, resizeable:true }, 
                                        {key:"COL1", text:"Description", sortable:true, resizeable:true },
                                        {key:"COL2", text:"Final Column", sortable:true, resizeable:true },
                                        {key:"COL3", text:"Final Column", sortable:true, resizeable:true },
                                        {key:"COL4", text:"Final Column", sortable:true, resizeable:true }
                                       ], 
                   "_SCHEMA" : {fields: ["COL0", "COL1", "COL2", "COL3", "COL4"]}, 
                   "_KEYS" : [{"KEY" : "c"}, {"KEY" : "p"}, {"KEY" : "q"}]};


 
  
  // super
  AGILE.widget.BulkSelectList.superclass.registerPalette.call(this, this._dataset);
};

/**
 * Local <i>Auto Complete</i> matching.
 * @param sQuery the input character typed in for autocomplete.
 * @return a list of <code>String</code> values that contain the 
 * <code>sQuery</code>. 
 */
AGILE.widget.BulkSelectList.prototype.findLocalMatch = function (sQuery, delim) {
  var self = this;
  var aResults = [];
  
  if (self._dataset && sQuery && sQuery.length > 0) {
    sQuery = decodeURIComponent(sQuery);
    var queries = sQuery.split(delim);
    
    for (var qi = 0; qi < queries.length; qi++) {
      var query = queries[qi];
      var charKey = query.substring(0,1).toLowerCase();
      var oResponse = self._dataset[charKey];
      
      if (oResponse) {
	query = query.toLowerCase();
	for (var i = oResponse.length-1; i >= 0; i--) {
	  var key = oResponse[i].COL0;	
	  key = replaceHtmlText(key);
	  var keyIndex = encodeURI(key.toLowerCase()).indexOf(encodeURI(query.toLowerCase()));

	  // Query found at the beginning of the key string
	  if (keyIndex === 0) {
	    aResults.unshift([key]);  
	  }             	
	}
      }                
    }
  }
  
  return aResults;
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

AGILE.widget.ObjectSelectList = function(args) {
  ObjectSelectList.superclass.constructor.call(this, args.dsConfig[0].listId,
                                               args.elIds);
  this._url = url;
};

YAHOO.extend(AGILE.widget.ObjectSelectList, AGILE.widget.MultiSelectList);

/////////////////////////////////////////////////////////////////////////////
//
// Private member variables
//
/////////////////////////////////////////////////////////////////////////////
AGILE.widget.ObjectSelectList.prototype._url = null;

/**
 *
 */
AGILE.widget.ObjectSelectList.prototype.beginListening = function() {  
  var tokens = this._url.split("\?");
  var host = tokens[0];
  var queryParams = tokens[1] + "&format=text/plain"
  var ds = new YAHOO.widget.DS_XHR(host, ["\n", "\t"],
		        { responseType: YAHOO.widget.DS_XHR.TYPE_FLAT,
			  queryMatchSubset: true,
			  scriptQueryAppend: queryParams }); 
  // super
  AGILE.widget.ObjectSelectList.superclass.beginListening.call(this, ds);    
};

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * The PillBox class defines and manages a set of  of un-ordered <li> 
 * HTMLElement's where each element is represented and referred to as a 
 * <i>Pill</i>.
 *
 * @class AGILE.widget.PillBox
 * @author Sean Wells
 * @version 0.1
 * @uses YAHOO.util.Event
 * @constructor
 * @param multiList {Object} Pointer to the <code>MultiSelectionList</code> that
 * manages this.
 */ 
AGILE.widget.PillBox = function (multiList) {
  this._multiList = multiList;
  //alert(this._multiList._autoCompElIds[0].selected_items);
  this._pillListElId = this._multiList._autoCompElIds[0].selected_items;
  this._pillBoxEl = $(this._multiList._autoCompElIds[0].selected_container);
  this._addedNoticeEl = $(this._multiList._autoCompElIds[0].added_notice);
  this._pills = new Array();
  this._animation = this._registerAnimationListeners();
  this._registerKeyListeners();
  
  // Pillbox container resize
  //YAHOO.util.Event.on(window,  "resize",  this._onResize, this, true);
};

/////////////////////////////////////////////////////////////////////////////
//
// Private member variables
//
/////////////////////////////////////////////////////////////////////////////

/**
 * Internal class variable to hold all pills in the pillbox.
 *
 * @property _pills
 * @type Array<li>
 * @private
 */
AGILE.widget.PillBox.prototype._pills = null;

/**
 * Internal class variable representing the unordered HtmlElement list id
 * holding all the pill list items.
 *
 * @property _pillListElId 
 * @type String
 * @private
 */
AGILE.widget.PillBox.prototype._pillListElId = null;

/**
 * Internal class variable, representing this <code>PillBox</code> HtmlElement.
 *
 * @property _pillBoxEl
 * @type String
 * @private
 */
AGILE.widget.PillBox.prototype._pillBoxEl = null;

/**
 * Internal class variable, points to the last selected pill in the pill box.
 *
 * @property _lastSelectedPillId 
 * @type String
 * @private
 */
AGILE.widget.PillBox.prototype._lastSelectedPillId = null;

/**
 * Internal class variable.
 *
 * @property _multiList
 * @type Object
 * @private
 */
AGILE.widget.PillBox.prototype._multiList = null;

/**
 * Internal class variable.
 *
 * @property _animation
 * @type Object
 * @private
 */
AGILE.widget.PillBox.prototype._animation = null;

/**
 * Internal class variable defining the <i>Added</i> notice HtmlElement. 
 *
 * @property _addedNoticeEl;
 * @type Object
 * @private
 */
AGILE.widget.PillBox.prototype._addedNoticeEl = null;

/**
 * Subscribe animation event listeners for pill creation.
 * @private
 * @return animation handler.
 */
AGILE.widget.PillBox.prototype._registerAnimationListeners = function () {
  var noticeId = this._multiList._autoCompElIds[0].added_notice;
  var anim = new YAHOO.util.ColorAnim(noticeId, { opacity: { to: 0 } }, 
				      .8, YAHOO.util.Easing.easeNone); 
  /**
   * Resets the pillbox <i>Added</i> animation divs to hidden.
   */
  function resetPillBoxAnimation() {
    var el = $(noticeId);
    el.style.opacity = '1';
    el.style.filter = 'alpha(opacity=100)';
    el.style.display = 'none';
  }
  // pillbox animation notice
  anim.onComplete.subscribe(resetPillBoxAnimation);
  return anim;
};

/**
 * Initialize all key event listeners for pill key navigation.
 * @private
 */
AGILE.widget.PillBox.prototype._registerKeyListeners = function () {
   var self = this;
   var searchQueryElId = self._multiList._autoCompElIds[0].search_query;
      
   // [control+a]
   var ctrlA = new YAHOO.util.KeyListener($(searchQueryElId), { ctrl:true, keys:65 }, { fn: function() { self.selectAllPills(); }, scope: $(searchQueryElId), correctScope:true }); 
   ctrlA.enable();    
   
   // [shift+right-arrow]
   var rightArrow = new YAHOO.util.KeyListener($(searchQueryElId), { shift:true, keys:39 }, { fn: function() { self.rightArrowNext(); }, scope: $(searchQueryElId), correctScope:true }); 
   rightArrow.enable(); 
  
   // [shift+left-arrow]
   var leftArrow = new YAHOO.util.KeyListener($(searchQueryElId), { shift:true, keys:37 }, { fn: function() { self.leftArrowNext(); }, scope: $(searchQueryElId), correctScope:true }); 
   leftArrow.enable(); 

   // [left-arrow]
   var leftArrowOnly = new YAHOO.util.KeyListener($(searchQueryElId), { keys:37 }, { fn: function() { self.leftArrowOnly(); }, scope: $(searchQueryElId), correctScope:true }); 
   leftArrowOnly.enable(); 

   // [right-arrow]
   var rightArrowOnly = new YAHOO.util.KeyListener($(searchQueryElId), { keys:39 }, { fn: function() { self.rightArrowOnly(); }, scope: $(searchQueryElId), correctScope:true }); 
   rightArrowOnly.enable(); 

   // [shift+up-arrow]
   var upArrow = new YAHOO.util.KeyListener($(searchQueryElId), { shift:true, keys:38 }, { fn: function() { self.upArrowNext(); }, scope: $(searchQueryElId), correctScope:true }); 
   upArrow.enable(); 
   
   // [shift+Home]
   var home = new YAHOO.util.KeyListener($(searchQueryElId), { shift:true, keys:36 }, { fn: function() { self.upArrowNext(); }, scope: $(searchQueryElId), correctScope:true }); 
   home.enable(); 

   // [shift+end]
   var end = new YAHOO.util.KeyListener($(searchQueryElId), { shift:true, keys:35 }, { fn: function() { self.downArrowNext(); }, scope: $(searchQueryElId), correctScope:true }); 
   end.enable(); 

   // [shift+down-arrow]
   var downArrow = new YAHOO.util.KeyListener($(searchQueryElId), { shift:true, keys:40 }, { fn: function() { self.downArrowNext(); }, scope: $(searchQueryElId), correctScope:true }); 
   downArrow.enable();    
   
   YAHOO.util.Event.addListener($(searchQueryElId), "keyup", handleKeyEvent);
   // Mac [cmd] key (same as [ctrl+a])
   // MAC | Safari : CMD key can be handled by checking event.metaKey
   // MAC | Firefox : [CMD+A] is 224
   function handleKeyEvent(e) {
     var keycode = "";
     if (window.event) {
       e = window.event;
       keycode = window.event.keyCode;
     } else {
       keycode = (e ? e.which : keycode); 
     }
     if(keycode == 224) {
       self.selectAllPills();
     }
   }
   
   // register mouse event listeners for any SAVED pills
   var pills = self.getPills();
   for (var index = 0; index < pills.length; index++) {
      var pill = pills[index];
      function mouseDownEvent(e) {
        self.mouseDownHandler(e, this, $(self._pillListElId).getElementsByTagName("li"));
      };
      YAHOO.util.Event.addListener(pill, "click", mouseDownEvent);	  
   }
};

/**
 * Creates a pill for each of the provided HtmlElement list item ids.
 * @param {Array} elementIds the ids of list item HtmlElement pills to be created.
 */
AGILE.widget.PillBox.prototype.createPills = function (elementIds) {
  // true = Indicates the animation 'Added' notice over pillbox
  var showAnimation = true;
  for (var index = 0; index < elementIds.length; index++) {    
    this.createPill(new String(elementIds[index]), showAnimation);
  }
};

/**
 * Unhighlights all other pills and selects this <code>pillId</code>.
 * @param {String} pillId id of the pill which will be selected.
 */
AGILE.widget.PillBox.prototype.selectPill = function (pillId) {
  var pills = this.getPills();
  for (var index = 0; index < pills.length; index++) {
    pills[index].className = '';
    if(pills[index].id == pillId) {
      this.unselectAllPills();
      // select this pill
      pills[index].className = 'selected';
      _lastSelectedPillId = pillId;
      this._pillBoxEl.scrollTop = 0;
      break;
    }
  }
};

/**
 * Creates a new pill within the pillbox container and adds it to DOM. 
 * @param {String} item the element id for the newly created pill.
 * @return <code>true</code> if the pill was created succesfully otherwise
 * <code>false</code>.
 */
AGILE.widget.PillBox.prototype.createPill = function (item, showAnimation) {
	
  var isPillCreated = false; // success|failure
  var itemId = this._multiList._elemId + "_"+ this._multiList._selectedElemCount;
  item = replaceHtmlText(item);

  // only add/create 'new' pills to list
  if (!this.isPillContained(item)) {
    var pill = new AGILE.widget.Pill(item, itemId);
    var li = pill.getHtmlElement();      
    $(this._pillListElId).insertBefore(li, $(this._pillListElId).firstChild);
    isPillCreated = true;

    // register mouse event listeners for pill created above
    var self = this;   
    function mouseDownEvent(e) {
      self.mouseDownHandler(e, this, $(self._pillListElId).getElementsByTagName("li"));
    };    
    YAHOO.util.Event.addListener(pill.getId(), "click", mouseDownEvent);
    this._multiList._selectedElemCount++;
    //this._pills.unshift(pill); // keep list of pills in box


  }
  
  // Animate the 'added' notice over the pillbox:
  // @Note 
  //  The idea here is to ALWAYS show the 'added notice' even if a pill
  //  is aready contained. However do not show one here if the pill has been
  //  created from the palette using an [Enter] key or mouse [Double Click].
  //  That animation is only displayed over the palette.
  if (showAnimation) {
    ////////
    var uxDom = YAHOO.util.Dom;         
    var positionTop = uxDom.getY(this._pillBoxEl);
    var positionLeft = uxDom.getX(this._pillBoxEl);
    // pageViewContent
    //var top = this._pillBoxEl.offsetTop + this._pillBoxEl.offsetHeight - $("pageViewContent").offsetHeight;
    //console.log($("pageViewContent").scrollTop); 
    //positionTop = positionTop + $("pageViewContent").scrollTop; 
    var pillBoxWidth = uxDom.getStyle(this._pillBoxEl, "width");
    uxDom.setY(this._addedNoticeEl, positionTop - 10);
    //uxDom.setX(this._addedNoticeEl, positionLeft - parseInt(paletteWidth) + 0);
    uxDom.setX(this._addedNoticeEl, positionLeft + parseInt(pillBoxWidth) - 100);
    ////////
    this._addedNoticeEl.style.display = "block";
    this._animation.animate();
  }	

  return isPillCreated;
};

/**
 * @param pillDisplayName {String}
 * @return <code>true</code> if the <i>pillId</i> was present otherwise
 * <code>false</code>.
 */
AGILE.widget.PillBox.prototype.isPillContained = function (pillDisplayName) {
  if (pillDisplayName == null || pillDisplayName == "") {
    return true; // mark empty pill as contained [true]
  }
  
  var isContained = false;   
  var pills = this.getPills();
  pillDisplayName = pillDisplayName.trim();   
  
  // check pill box for match
  for (var index = 0; index < pills.length; index++) {	
    var name = (pills[index].name ? pills[index].name : pills[index].getAttribute("name"));
    if (name.toLowerCase() == pillDisplayName.toLowerCase()) {          
      isContained = true;
      return isContained;
    }
  }
  
  return isContained; // not contained in master pill box
};

/**
 * Remove all pills from the this PillBox marked as <i>selected</i>.
 */
AGILE.widget.PillBox.prototype.removePills = function () {
  var pills = this.getPills();
  var removedItems = new Array();
  var j = 0;
  
  // remove 'pill' from screen
  for (var i = 0; i < pills.length; i++) {
    if (pills[i].className == 'selected') {
      pills[i].style.display = 'none';
      removedItems[j] = (pills[i].id).trim();
      j++;
    }
  }
  
  // physically remove 'pill' entry from list
  for (var i = 0; i < removedItems.length; i++) {
    var removedItem = removedItems[i];
    removePill(removedItem);
  }   
};

/**
 * Gets all the pills in the <code>PillBox</code>.
 * NOTE! The HTMLElement's returned sould be {read only} and NOT be modified.
 *
 * @return the list of HTMLElements (e.g. pills) that are represented in the
 * <code>Pillbox</code> container.
 * @type Array of Objects.
 */
AGILE.widget.PillBox.prototype.getPills = function () {
  var container = document.getElementById(this._pillListElId);
  return (container.getElementsByTagName("li"));
};

/**
 * Gets all the pill element ids in the <code>PillBox</code>.
 *
 * @return the list of HTMLElements ids (e.g. pill ids) that are represented in
 * the <code>PillBox</code> container.
 * @type Array of Strings.
 */ 
AGILE.widget.PillBox.prototype.getPillIds = function () {   
  var pills = this.getPills();
  var ids = new Array();
  for (var index = 0; index < pills.length; index++) {
    ids.unshift((pills[index].id).trim());
  }
  
  return ids;
};

/**
 * Highlights the next pill to the right of the current pill. This event is 
 * fired when a [shift+right-arrow] key combo. occured.
 */
AGILE.widget.PillBox.prototype.rightArrowNext = function () {
  var pills = this.getPills();
  var lastIndex = this.getLastSelectedIndex();
  if (lastIndex >= 0 && lastIndex < pills.length) {
    var next = (lastIndex + 1 >= 0 ? pills[lastIndex+1] : pills[lastIndex]);
    this.scroll(next, "selected", "right");
  }
};   

/**
 * Highlights the previous pill to the left of the current pill. This event is
 * fired when a [shift+left-arrow] key combo. occured.
 */
AGILE.widget.PillBox.prototype.leftArrowNext = function () {   
  var pills = this.getPills();
  var firstIndex = this.getFirstSelectedIndex();
  if (firstIndex >= 0 && firstIndex < pills.length) {
    var prev = (firstIndex - 1 >= 0 ? pills[firstIndex-1] : pills[firstIndex]);
    this.scroll(prev, "selected", "left");
  }
};   

/**
 * Highlights the next pill to the right of the current pill. This event is
 * fired when a [left-arrow] key is pressed.
 */
AGILE.widget.PillBox.prototype.leftArrowOnly = function () {
  var pills = this.getPills();
  var selectedPillId = -1;
  for (var index = 0; index < pills.length; index++) {	   
    if(pills[index].id == _lastSelectedPillId) {
      // if the first pill is current selected pill then don't do anything.
      if(index != 0) { 
	this.scroll(pills[index-1], "selected", "left");
	_lastSelectedPillId = pills[index-1].id;
	pills[index].className = "";
      }
    } else {
      pills[index].className = "";
    }
  }
};

/**
 * Highlights the next pill to the right of the current pill. This event is
 * fired when a [right-arrow] key is pressed.
 */
AGILE.widget.PillBox.prototype.rightArrowOnly = function () {
  var pills = this.getPills();
  var selectedPillId = -1;
  for (var index = pills.length-1; index >= 0; index--) {
    if(pills[index].id == _lastSelectedPillId) {
      // if last pill is the current selected pill then don't do anything.
      if(index != pills.length-1) {
	if (pills[index+1]) {
	  this.scroll(pills[index+1], "selected", "right");
	  pills[index].className = "";
	}			   
      }      
      selectedPillId = (pills[index+1] ? pills[index+1].id : pills[index].id);
    } else {
      pills[index].className = "";
    }
  }
  _lastSelectedPillId = selectedPillId;
};


/**
 * Highlights and selects all pills above and including the current focused 
 * pill. This event is fired when a [shift+up-arrow] key combo. occured.
 */
AGILE.widget.PillBox.prototype.upArrowNext = function () {
  var pills = this.getPills();
  var lastIndex = this.getLastSelectedIndex();
  if (lastIndex >= 0 && lastIndex < pills.length) {
    for (index = lastIndex; index >= 0; index--) {   
      pills[index].className = "selected"; 
    }
  }
}; 

/**
 * Highlights and selects all pills below and including the current focused 
 * pill. This event is fired when a [shift+down-arrow] key combo. occured.
 */
AGILE.widget.PillBox.prototype.downArrowNext = function () {
  var pills = this.getPills();
  var firstIndex = this.getFirstSelectedIndex();
  if (firstIndex >= 0 && firstIndex < pills.length) {
    for (index = firstIndex+1; index < pills.length; index++) {   
      pills[index].className = "selected";         
    }
    
  }
};

/**
 * Highlights all pills in the PillBox marking the className as <i>selected</i>.
 */
AGILE.widget.PillBox.prototype.selectAllPills = function () {
  var pills = this.getPills();
  for (var index = 0; index < pills.length; index++) {
    pills[index].className = "selected";    
  }
};

/**
 * Unselects all pills in the pillbox.
 * @param {String} pillId id of the pill which should be unselected.
 */
AGILE.widget.PillBox.prototype.unselectAllPills = function () {
  var pills = this.getPills();
  for (var index = 0; index < pills.length; index++) {
    pills[index].className = ""; 
  }
};

/**
 * Gets the last selected pill in the PillBox.
 * @return the last selected pill index in the unordered list if one is found
 * otherwise return less than 0.
 * @type Integer
 */
AGILE.widget.PillBox.prototype.getLastSelectedIndex = function () {
  var pills = this.getPills();
  for (var index = pills.length-1; index >= 0; index--) {
    if (pills[index].className == "selected") {
      return index;
    }      
  }
  
  return -999; // none selected
};

/**
 * Gets the last selected pill in the PillBox.
 * @return the first selected pill index in the unordered list if one is found
 * otherwise return less than 0.
 * @type Integer
 */
AGILE.widget.PillBox.prototype.getFirstSelectedIndex = function () {
  var pills = this.getPills();
  for (var index = 0; index < pills.length; index++) {
    if (pills[index].className == "selected") {       
      return index;
    }
  }
   
  return -999; // none selected
};

/**
 * Handles the mouse pressed event behavior for the pills.
 * @private
 * @param {Object} event the mouse pressed event.
 * @param {Object} targetEl the pressed Pill element.
 * @param {Array} elements all elements in this PillBox.
 */
AGILE.widget.PillBox.prototype.mouseDownHandler = function (event, targetEl, elements) { 
  if (event.ctrlKey) {
    targetEl.className = (targetEl.className == "selected" ? "" : "selected");    
  } else if (event.shiftKey) { 
    targetEl.className = "selected";
    var firstIndex = this.getFirstSelectedIndex();
    var lastIndex = this.getLastSelectedIndex();
    for (var index = firstIndex; index <= lastIndex; index++) {	
      elements[index].className = "selected";
    }
  } else { // single pill highlight via a 'click'
    // unselect all other pills
    for (var index = 0; index < elements.length; index++) {
      elements[index].className = ""; 
    }
    targetEl.className = "selected";    
  }
  
  targetEl.focus();
  //targetEl.scrollIntoView(true);
  _lastSelectedPillId = targetEl.id;
};

/**
 * Scroll pills into the pillbox view.
 * @private
 * @param {HtmlElement} pill element.
 * @param {String} style class name.
 * @param {String} direction to scroll.
 */
AGILE.widget.PillBox.prototype.scroll = function (pillEl, className, dir) {
  var content = this._pillBoxEl;
  if (pillEl) {    
    pillEl.className = className;
    if (dir == "right") { // scroll down
      // [down arrow]-scroll

      if (content.offsetHeight + content.scrollTop < pillEl.offsetTop 
	  + pillEl.offsetHeight) { 
	var top = pillEl.offsetTop + pillEl.offsetHeight - content.offsetHeight;
	content.scrollTop = top;
      }
    } else if (dir == "left") { // scroll up
      if (content.scrollTop > pillEl.offsetTop) { 
	var top = content.scrollTop - pillEl.offsetHeight; 
	content.scrollTop = top;
      }
    }	
  }	  	
};

/**
 * Event callback on pillbox resize to ellipse <code>Pill</code> text.
 * @private
 * @param {Event} event
 */
AGILE.widget.PillBox.prototype._onResize = function (e) {
  var pb =  this._pillBoxEl;
  var scrollBarOffset = (pb.clientWidth == pb.offsetWidth ? 0 
			 : (pb.offsetWidth - pb.clientWidth));
  var width = pb.offsetWidth - (24 + scrollBarOffset);
  
  var pills = this.getPills();
  for (var index = 0; index < pills.length; index++) {
    var pill = pills[index];
    this.ellipseText(pill, width);
  }		
};
  

AGILE.widget.PillBox.prototype.ellipseText = function (li, width) {
  var ellipseName = (li.ellipseName == "" ? "" : li.ellipseName);
  var text = li.name;
  //var anchor = (li.innerHTML).replace(text, "");
  
  if(li.offsetWidth > width) {
    //alert("li: " + li.offsetWidth + "  pillbox: " + width );
    var i = 1;
    li.innerHTML = '';
    li.ellipseName = '';

    while(li.offsetWidth < (width) && i < text.length) {
      li.innerHTML = text.substr(0,i) + '...';
      ellipseName = li.innerHTML;
      i++;
    }

    li.ellipseName = ellipseName;

    li.innerHTML += '<a href=# class=\"delete_button\" onclick=\"removePill(\'' + li.id + '\');return false;\" tabindex=\"-1\"><span>x</span></a>';

    //this._li = li;
  } else if (li.ellipseName != "" ) {
    
    var i = 1;
    li.innerHTML = '';
    li.ellipseName = '';
    
    while(li.offsetWidth <= (width)) { // && i < text.length) {
    //while(i < text.length) {
      li.innerHTML = text.substr(0,i) + '...';
      ellipseName = li.innerHTML;
      i++;
    }

    li.ellipseName = ellipseName;
    li.innerHTML = (i == 1 ? text : li.innerHTML);
    li.innerHTML += '<a href=# class=\"delete_button\" onclick=\"removePill(\'' + li.id + '\');return false;\" tabindex=\"-1\"><span>x</span></a>';
  }
}

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * <p>
 * The Pill class logically represents a HtmlElement <i>list item</i> with
 * additional attributes and functionality.
 * </p>
 *
 * @class Pill
 * @author Sean Wells
 * @version 0.1
 * @uses YAHOO.util.Event
 * @constructor
 * @param {String} pillName the display name of the HtmlElement <i>list item</i>
 * that identifies this <code>Pill</code>.
 * @param {String} pillId the id of the HtmlElement <i>list item</i> that
 * identifies this <code>Pill</code>.
 * manages this.
 */ 
AGILE.widget.Pill = function(pillName, pillId) {
  this._className = "";
  this._li = this._initPill(pillName, pillId);
};

/**
 * Internal class variable.
 *
 * @property _li
 * @type Object
 * @private
 */
AGILE.widget.Pill.prototype._li = null;
AGILE.widget.Pill.prototype._className = "";
AGILE.widget.Pill.prototype._pillBoxEl = null;
AGILE.widget.Pill.prototype._attributeId = -999;

/**
 * @private
 * @member Pill
 */
AGILE.widget.Pill.prototype._initPill = function (pillName, pillId) {
   var li = document.createElement("li");
   pillName = pillName.trim();
   li.id = pillId.trim();
   li.name = pillName;
   li.innerHTML = pillName.textToHTML();
   li.ellipseName = "";
   li.innerHTML += '<a href=# class=\"delete_button\" onclick=\"removePill(\'' + li.id + '\');return false;\" tabindex=\"-1\"><span>x</span></a>';
   return li;
};

/**
 * Gets the <i>li</i> HtmlElement within the DOM.
 * @member Pill
 * @return the <i>li</i> HtmlElement within the DOM.
 * @type Object
 */
AGILE.widget.Pill.prototype.getHtmlElement = function () {      
   return (this._li); 
};  

/**
 * @member Pill
 * @return
 * @type String
 */
AGILE.widget.Pill.prototype.getName = function () {      
   return (this._li.name); 
};  

/**
 * @member Pill
 * @return
 * @type String
 */
AGILE.widget.Pill.prototype.getId = function () {      
   return (this._li.id); 
};  

/**
 * @member Pill
 * @return
 * @type String
 */
AGILE.widget.Pill.prototype.getAttribute = function () {      
   return (this._attributeId); 
};  

/**
 * @member Pill
 * @param {String} attributeId
 */
AGILE.widget.Pill.prototype.setAttribute = function (attributeId) {      
   this._attributeId = attributeId;
};  

/**
 * @member Pill
 * @return
 * @type String
 */
AGILE.widget.Pill.prototype.getClassName = function () {      
   return (this._className); 
};  

/**
 * @member Pill
 * @param {String} className 
 */
AGILE.widget.Pill.prototype.setClassName = function (className) {      
   this._className = className;
};  

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/
 
/**
 * <p>
 * This class represents a YAHOO.util.DDProxy implementation that adds selected 
 * table columns from the Palette with the target converting them into 
 * <code>Pills</code> when dropped.
 * </p>
 *
 * @class
 * @author Sean Wells
 * @version 0.1
 * @requires YAHOO.util.Dom
 * @requires YAHOO.util.Event
 * @requires YAHOO.util.DragDrop
 *
 * @extends YAHOO.util.DDProxy
 * @constructor
 * @param {Object} dataSet 
 * @param {Object} pillBox the pill box object.
 * @param {Object} autoCompElIds
 * @param {Object} paletteElIds
 */
AGILE.widget.Palette = function(dataSet, pillBox, autoCompElIds, paletteElIds) {
  this._pillBox = pillBox;
  this._autoCompElIds = autoCompElIds;
  this._paletteElIds = paletteElIds;    
  this._registerAnimationListeners();
  this.dataTable = new PaletteTable ({dataSet: dataSet, pillBox: pillBox, 
					 paletteElIds: paletteElIds, 
					 animEl: this._paletteAnim});
  
  // init. DD proxy handlers
  //var dragEl = (!this.dataTable.isEmpty() ? this.dataTable._elTable : null);
  var dragEl = this.dataTable._elTable;
  this._registerDragDropProxy(YAHOO.util.Dom.generateId(dragEl));
  this._registerDragDropWindow();

  // init. palette listening events
  this._registerEventListeners();

  // fill palette with display content
  this._loadPaletteContent();
};

YAHOO.extend(AGILE.widget.Palette, YAHOO.util.DDProxy);

/**
 * @private
 */
AGILE.widget.Palette.prototype.dataTable = null;

/**
 * @private
 */
AGILE.widget.Palette.prototype._pillBox = null;

/**
 * @private
 */
AGILE.widget.Palette.prototype._paletteAnim = null;

/**
 * @private
 */
AGILE.widget.Palette.prototype._autoCompElIds = [];

/**
 * @private
 */
AGILE.widget.Palette.prototype._paletteElIds = [];

/**
 * @private
 */
AGILE.widget.Palette.prototype._loadPaletteContent = function() {  
  // set palette title
  $("palette_title").innerHTML = this._paletteElIds[0].paletteTitle;
  
  // launch and set palette position
  this.adjustPalettePosition();
  
  // reset old palette content  
  this.dataTable.resetTableContent();    
};

/**
 * @private
 */
AGILE.widget.Palette.prototype._registerAnimationListeners = function() {
  var paletteNoticeId = "palette_added_notice";
  // init animation
  this._paletteAnim = new YAHOO.util.ColorAnim(paletteNoticeId,
                       { opacity: { to: 0 } }, .8, YAHOO.util.Easing.easeNone); 

  ///////////////////////////////
  // Subscribe animattion events
  ///////////////////////////////

  /**
   * Resets the palette <i>Added</i> animation divs to hidden.
   */
  function resetPaletteAnimation() {
    var el = $(paletteNoticeId);
    el.style.opacity = '1';
    el.style.filter = 'alpha(opacity=100)';
    el.style.display = 'none';
  };
  // palette animation notice
  this._paletteAnim.onComplete.subscribe(resetPaletteAnimation);     
};

/**
 * @private
 */
AGILE.widget.Palette.prototype._registerDragDropProxy = function(id, tableId, sGroup, config) {
  if (!id) { return; }   
  
  //unreg();   
  YAHOO.util.DDM.mode = YAHOO.util.DDM.POINT;
  
  this.init(id, sGroup, { dragElId: this._paletteElIds[0].dragDiv, 
		centerFrame: true, resizeFrame: false});

  //this allows dragging from the table body only and not the headers
  //var dragBody = (!this.dataTable.isEmpty() ? this.dataTable._elBody : null);
  var dragBody = this.dataTable._elBody;
  this.setHandleElId(YAHOO.util.Dom.generateId(dragBody));	

  this.initFrame();
  
  /**
   * css style to use when items are not being hovered over.
   */
  this.offClass = "drag_tooltip over_target"; 
  
  /**
   * css style to use when hovered over
   */
  this.onClass = "drag_tooltip"; 
  
  /**
   * cache changed element styles so we can restore it later
   */
  this.els = [];  
};

/**
 * Make this palette window dragable and resizeable.
 * @private
 */
AGILE.widget.Palette.prototype._registerDragDropWindow = function() {
  var paletteContent = this._paletteElIds[0].floater_content;
  var paletteWindow = this._paletteElIds[0].floater_window;
  var paletteResizeHandle = this._paletteElIds[0].floater_resize_handle;
  var selectedContainer = this._autoCompElIds[0].selected_container;
  var paletteResultsList = this._paletteElIds[0].floater_results_list;
  
  ////////////////
  // Make dragable
  ////////////////
  var ddInitial = new YAHOO.util.DD(paletteWindow, "DragWindow", {scroll:true});
  ddInitial.addInvalidHandleClass("nodrag");	  
  ddInitial.endDrag = checkEndDragPosition;
  function checkEndDragPosition(e) {
    var palettePosition = AGILE.util.PalettePosition.getInstance();
    palettePosition.setUseDefault(false);   	
    if (parseInt($(this.id).style.top) < 0 ) {
      $(this.id).style.top = 10 + 'px';
    }
  };
  
  //////////////////
  // Make resizeable
  //////////////////
  var paletteResize = new DDResize(paletteWindow, paletteResizeHandle, 
				   paletteContent, paletteResultsList);
  
  YAHOO.util.DDM.mode = YAHOO.util.DDM.POINT;
  var ddTarget = new YAHOO.util.DDTarget(selectedContainer);
};

/**
 * Wire Palette events.
 * @private
 */
AGILE.widget.Palette.prototype._registerEventListeners = function() {
  var paletteContent = this._paletteElIds[0].floater_content;
  var paletteWindow = this._paletteElIds[0].floater_window;
  var paletteResultsList = this._paletteElIds[0].floater_results_list;
  
  //////////////////////
  // Close Pallete event
  //////////////////////
  var paletteLaunchButton = $(this._autoCompElIds[0].show_floater); 
  var closePaletteElId = this._paletteElIds[0].close_floater;
  YAHOO.util.Event.addListener(closePaletteElId, "click", closePaletteEvent); 
  function closePaletteEvent() { 
    $(paletteResultsList).style.overflow = "";
    $(paletteWindow).style.display = "";
    // set focus to palette launch button
    paletteLaunchButton.focus(); 
  };
  
  // [esc] (close palette)
  var esc = new YAHOO.util.KeyListener($(paletteContent), { keys:27 }, 
				       { fn: function() { closePaletteEvent(); }, 
					   scope: $(paletteContent), correctScope:true }); 
  esc.enable(); 
};

/**
 * 
 */
AGILE.widget.Palette.prototype.adjustPalettePosition = function() {  
  var palettePosition = AGILE.util.PalettePosition.getInstance();
  var usedefaultpos = palettePosition.getUseDefault();
  var displayval = $(this._paletteElIds[0].floater_window).style.display;
  //var filterElId = this._paletteElIds[0].floater_search_text;
  
  //$(filterElId).value = "";
  //$(filterElId).style.visibility = "visible";
  $(this._paletteElIds[0].floater_results_list).style.overflow = "auto";
  $(this._paletteElIds[0].floater_window).style.display = "block"; 
  //YAHOO.util.Dom.removeClass($(filterElId), "focus_field");
  //YAHOO.util.Dom.removeClass($(filterElId), "focus_border");  
    
  if (usedefaultpos && displayval != "block"){
    var uxDom = YAHOO.util.Dom;         
    var floaterWindow = this._paletteElIds[0].floater_window;
    var positionTop = uxDom.getY($(this._autoCompElIds[0].show_floater));
    var positionLeft = uxDom.getX($(this._autoCompElIds[0].show_floater));
    var paletteWidth = uxDom.getStyle($(floaterWindow), "width");
    uxDom.setY($(floaterWindow), positionTop + 80);
    uxDom.setX($(floaterWindow), positionLeft - parseInt(paletteWidth) + 34);
  }

  $(this._paletteElIds[0].floater_content).focus();
};

/**
 * Callback event fired when draged element gets dropped.
 * @member Palette
 * @param {event} e the drag drop event.
 * @param (String) id the drag driop lement id.
 */
AGILE.widget.Palette.prototype.onDragDrop = function(e, id) {
   var dd = YAHOO.util.DDM.getDDById(id);
    
   // add cell entry to pillbox    
   var targetElId = this._autoCompElIds[0].selected_container;
   if (id == targetElId) {
     var isPillCreated = false;
     var selRows = this.dataTable.getSelectedRows();
     for (var index = 0; index < selRows.length; index++) {	   
         var el = selRows[index].firstChild;	      
         if ($(el.id).style.display != "none") {
	   var showAnimation = true;
	   this._pillBox.createPill(el.innerHTML, showAnimation);
	 }
     }     
   }    	
};

/**
 * Occurs when the dragged object first interacts with another targettable 
 * drag and drop object.
 */
AGILE.widget.Palette.prototype.onDragEnter = function(e, id) {
  //this.logger.log(this.id + " dragEnter " + id);
  
  // store a ref so we can restore the style later
  this.els[id] = true;
  
  // set the mouseover style
  //sw var el = YAHOO.util.DDM.getElement(id);
  // sw if (el.className != this.onClass) {
  //sw     el.className = this.onClass;
  //}
  
  var targetElId = this._autoCompElIds[0].selected_container;
  if (id == targetElId) { // dont do this if id is the inital target
    var dragElId = this._paletteElIds[0].totalDragged; 
    YAHOO.util.Dom.get(dragElId).style.backgroundColor = "#8cd921";
  }
};

/**
 *
 */
AGILE.widget.Palette.prototype.onDragOut = function(e, id) {
  var dragElId = this._paletteElIds[0].totalDragged; 
  YAHOO.util.Dom.get(dragElId).style.backgroundColor = "#fff";
};

/**
 * 
 */
AGILE.widget.Palette.prototype.endDrag = function(e) {
  //this.logger.log(this.id + " endDrag");
  this.resetStyles();
};

/**
 *
 */
AGILE.widget.Palette.prototype.resetStyles = function() {
  // restore all element styles
  // SW for (var i in this.els) {
  //SW     var el = YAHOO.util.DDM.getElement(i);
  //SW    if (el) { el.className = this.offClass; }
  //SW }
  var dragElId = this._paletteElIds[0].totalDragged; 
  YAHOO.util.Dom.get(dragElId).style.backgroundColor = "#fff";
};

/**
 * Hide the dragged Div if no table rows where selected, otherwise
 * show/display the dragged div.
 */
AGILE.widget.Palette.prototype.onDrag = function(e) { 
  // hide/show the dragging div if zero values
  //var dragElId = this._paletteElIds[0].totalDragged;    
  //var display = ($(totalDraggedElId).innerHTML <= 0 ? "none" : "block");  
  //YAHOO.util.Dom.get(dragElId).style.display = display;      
  //var dragElId = this._paletteElIds[0].totalDragged; 

  // var dragElId = this._paletteElIds[0].totalDragged;    
  //YAHOO.util.Dom.get(dragElId).style.cursor = "pointer";
};

/**
 *
 */
AGILE.widget.Palette.prototype.onDragOver = function(e) { };

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/


/////////////////////////////////////////////////////////////////////
// YAHOO RESIZE
/////////////////////////////////////////////////////////////////////
DDResize = function(panelElId, handleElId, floaterContent, floaterResultsList, 
                    sGroup, config) {
                    
   if (panelElId) {
      this.init(panelElId, sGroup, config);
      this.handleElId = handleElId;
      this.setHandleElId(handleElId);
      this._floaterContent = floaterContent; //
      this._floaterResultsList = floaterResultsList; 
      //this.logger = this.logger || YAHOO;     
    }
};

YAHOO.extend(DDResize, YAHOO.util.DragDrop);

DDResize.prototype._floaterContent = null;
DDResize.prototype._floaterResultsList = null;

/**
 *
 */
DDResize.prototype.onMouseDown = function(e) {
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e),
                     YAHOO.util.Event.getPageY(e)];
};

DDResize.prototype.onDrag = function(e) {
    var palettePosition = AGILE.util.PalettePosition.getInstance();
       
    var newPos = [YAHOO.util.Event.getPageX(e),
                  YAHOO.util.Event.getPageY(e)];

    var offsetX = newPos[0] - this.startPos[0];
    var offsetY = newPos[1] - this.startPos[1];

    var newWidth = Math.max(this.startWidth + offsetX, 10);
    var newHeight = Math.max(this.startHeight + offsetY, 10);

    var panel = this.getEl();
    panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
    
    $(this._floaterContent).style.height = newHeight - 12 + "px";
    $(this._floaterResultsList).style.height = newHeight - 90 + "px";
	
    palettePosition.setUseDefault(false);	
};


/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/****************************************************************************
 *
 * Prototype methods.
 *
 ****************************************************************************/

/**
 * Ellipse a Sting value given maximum length.
 * @param {Integer} maxLength the maximum length of the value to be ellipsed.
 * @return ellipsed <code>String</code>.
 * @type String.
 */
String.prototype.ellipse = function(maxLength) {
  if(this.length > maxLength){
    return (this.substr(0, maxLength-3) + '...');
  }
  return this;
};

/**
 * Converts any special escape characters into the equivlant HTML for display.
 * @return HTML equivlant <code>String</code>.
 * @type String.
 */
String.prototype.textToHTML = function() {
  var x = this;
  x = x.replace(/&/g, "&#38;"); // &
  
  return x;
};

/**
 * Skip leading and trailing whitespace and return everything in between.
 * @return trimed <code>String</code>.
 */
String.prototype.trim = function() {
   var x = this;
   x = x.replace(/^\s*(.*)/, "$1");
   x = x.replace(/(.*?)\s*$/, "$1");
   return x;
};

/**
 * Utility method for removing <code>Pills</code> from the DOM.
 * @param {String} itemId the id of the pill to be removed.
 */
function removePill (itemId) {
   var el = document.getElementById(decodeURIComponent(itemId));
   el.parentNode.removeChild(el);
	
   //YAHOO.util.Dom.get("search_query"+itemId.substring(0, itemId.lastIndexOf("_"))).focus();
};

/****************************************************
	NAME SPACES
****************************************************/
function registerNS(ns) { 
  var nsParts = ns.split("."); 
  var root = window; 
  for(var i = 0; i < nsParts.length; i++) { 
    if(typeof root[nsParts[i]] == "undefined") 
      root[nsParts[i]] = new Object(); root = root[nsParts[i]]; 
  } 
}

/**
 * String global replace of special html characters
 * @return string with special characters replaced.
 * @type String.
 */
function replaceHtmlText(value) {
  if (value == null)
    return null;
  
  value = value.replace(/&lt;/gi, '<');
  value = value.replace(/&gt;/gi, '>');
  value = value.replace(/&amp;/gi, '&');
  value = value.replace(/&quot;/gi, '"');
  value = value.replace(/\\'/gi, '\'');

  return (value);
} // method

/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

(function() {

var Event = YAHOO.util.Event; 
var Dom = YAHOO.util.Dom;

/**
 * <p>
 * Defines the interface and base operation of all Selection Controls. 
 * It is intended to be extended, overriding the default implimentation
 * behaviors: (Still to be defined)
 * </p>
 *
 * @Note: This class is still being defined and will take shape when all
 *        the different selecto controls are impl. (MSL, MSS, ect...)
 *
 * @class SelectControl
 * @constructor
 * @param {String} id of the element that is linked to this instance
 *
 * @author Sean Wells
 * @version 0.1 (BlueOne)
 */
AGILE.widget.SelectControl = function(id) {
   if (id) {
      this.init(id); 
   }
};

AGILE.widget.SelectControl.prototype = {
    /**
     * The id of the element associated with this object.  
     * @property _id
     * @type String
     */
    _id: null,

    /**
     * Sets up the SelectControl object.  Must be called in the constructor of any
     * AGILE.widget.SelectControl subclass
     * @method init
     * @param id the id of the linked element
     */
    init: function(id) {
        //Event.on(this.id, "mousedown", this.handleMouseDown, this, true);
        // Event.on(this.id, "selectstart", Event.preventDefault);
    },

  /**
   * toString method
   * @method toString
   * @return {String} string representation of the SelectControl object.
   */
   toString: function() {
      return ("SelectControl " + this._id);
   }
 };

})();