var global_palette;

////////////////////////////////////////
//
//        GLOBAL PALETTE ACCESS
//
////////////////////////////////////////

function createGlobalPalette(){
	var palette_enclosure = document.getElementById("palette_enclosure");
	
	if(palette_enclosure) {
		global_palette = new Palette();
		palette_enclosure.appendChild(global_palette.getPalette());
	}
}

function openGlobalPalette(){
	global_palette.open();
}

function closeGlobalPalette(){
	global_palette.close();
	if ( document.getElementById('frame_edit_msl') )
	{
		document.getElementById('frame_edit_msl').style.display = 'none';
	}
}

function setGlobalPaletteWidth(num){
	global_palette.setWidth(num);
}

function setGlobalPaletteMinWidth(num){
	global_palette.setMinWidth(num);
}

function setGlobalPaletteHeight(num){
	global_palette.setHeight(num);
}

function setGlobalPaletteMinHeight(num){
	global_palette.setMinHeight(num);
}

function titleGlobalPalette(title){
	global_palette.setTitle(title);
}

function setGlobalPaletteDMS(str){
	global_palette.setDMS(str);
}

function extendGlobalPalette(extension){
	global_palette.extend(extension, "bcd");
}

function extendGlobalPaletteTitlebar(extension){
	global_palette.extend(extension, "titlebar");
}

function extendGlobalPaletteTabs(extension){
	global_palette.extend(extension, "tabs");
}

function extendGlobalPaletteDMS(extension){
	global_palette.extend(extension, "dms");
}

function clearGlobalPalette(){
	global_palette.clear("palette_bcd");
}

function clearGlobalPaletteTitlebar(){
	global_palette.clear("palette_title_extra");
}

function clearGlobalPaletteAll(){
	global_palette.clear("palette_title_extra");
	global_palette.clear("palette_tab_bar");
	global_palette.clear("palette_dms");
	global_palette.clear("palette_bcd");
}

////////////////////////////////////////
//
//        PALETTE CLASS
//
////////////////////////////////////////

function Palette() {
	this.__init__();
}

Palette.prototype = {
	_title: "Default Palette Title",
	_obj: null,
	_resize_obj: null,
	_obj_title: null,
	
	/////////////////////////////////////////////////////////////////////
	//	INITIALIZE PALETTE
	/////////////////////////////////////////////////////////////////////
	__init__: function() {
		this.createPalette();
		this.makeDraggable();
	},
	
	/////////////////////////////////////////////////////////////////////
	//	CREATE PALETTE
	/////////////////////////////////////////////////////////////////////
	
	createPalette: function() {
		var palette = make("div","palette nodrag","global_palette");
		palette.tabIndex = "-1";
		
		var palette_content = make("div","palette_content nodrag","palette_content");
		palette_content.tabIndex = "-1";
		
		var palette_handlebar = make("div","handlebar","palette_handlebar");
		palette_handlebar.tabIndex = "-1";
		
		var close_palette = make("a","close_palette","close_palette");
		close_palette.tabIndex = "-1";
		close_palette.onclick = function() { closeGlobalPalette(); };
		
		var close_palette_span = make("span");
		close_palette_span.innerHTML = "close";
		close_palette.appendChild(close_palette_span);
		
		var palette_title_bar = make("div","palette_title_bar nodrag","palette_title_bar");
		palette_title_bar.tabIndex = "-1";
		
		var palette_title_extra = make("div","palette_title_extra nodrag","palette_title_extra");
		palette_title_extra.tabIndex = "-1";
		
		var palette_title = make("div","palette_title nodrag","palette_title");
		palette_title.tabIndex = "-1";
			
		palette_title_bar.appendChild(palette_title_extra);
		palette_title_bar.appendChild(palette_title);
		
		var palette_tab_bar = make("div","palette_tab_bar nodrag","palette_tab_bar");
		
		var palette_dms = make("div","palette_dms nodrag","palette_dms");
		palette_dms.tabIndex = "-1";
		
		var palette_bcd = make("div","palette_bcd nodrag","palette_bcd");
		
		var palette_resize_handle = make("div","palette_resizer nodrag","palette_resize_handle");
		palette_resize_handle.tabIndex = "-1";
		palette_resize_handle.innerHTML = "&nbsp;";
		
		palette_content.appendChild(palette_handlebar);
		palette_content.appendChild(close_palette);
		palette_content.appendChild(palette_title_bar);
		palette_content.appendChild(palette_tab_bar);
		palette_content.appendChild(palette_dms);
		palette_content.appendChild(palette_bcd);
		palette_content.appendChild(palette_resize_handle);
		
		palette.appendChild(palette_content);
		
		this._obj = palette;
		this._obj_title = palette_title;
		this._resize_obj = palette_resize_handle;
		this._obj_title.innerHTML = this._title;
	},
	
	/////////////////////////////////////////////////////////////////////
	//	MAKE PALETTE DRAGGABLE
	/////////////////////////////////////////////////////////////////////
	
	makeDraggable: function(){
		var result_dd = new YAHOO.util.DD(this._obj);
		result_dd.addInvalidHandleClass("nodrag");
		var result_resize = new YAHOO.tableControlPaletteDDresize(this._obj, this._resize_obj);
	},
	
	
	/////////////////////////////////////////////////////////////////////
	//	SET PALETTE HEIGHT
	/////////////////////////////////////////////////////////////////////
	
	setHeight: function(num){
		if (typeof(content) == "number"){
			num = num + "px"
		}
		this._obj.style.height = num;
		$("palette_content").style.height = num;
	},
	
	/////////////////////////////////////////////////////////////////////
	//	SET PALETTE MIN-HEIGHT
	/////////////////////////////////////////////////////////////////////
	
	setMinHeight: function(num){
		if (typeof(content) == "number"){
			num = num + "px"
		}
		this._obj.style.minHeight = num;
		
		//ASSIGN MIN-WIDTH TO OTHER PARTS OF PALETTE
		$("palette_content").style.minHeight = num;
		$("palette_bcd").style.minHeight = num;
		
		//ASSIGN RECALCULATED MIN-HEIGHT TO RESIZABLE ELEMENTS OF PALETTE
		if($("format_div")) { $("format_div").style.minHeight = parseInt(num) - 160 + "px"; }
		if($("filter_table_content_wrapper")) { $("filter_table_content_wrapper").style.minHeight = parseInt(num) - 130 + "px"; }
	},
	
	/////////////////////////////////////////////////////////////////////
	//	SET PALETTE WIDTH
	/////////////////////////////////////////////////////////////////////
	
	setWidth: function(num){
		if (typeof(content) == "number"){
			num = num + "px"
		}
		this._obj.style.width = num;
		$("palette_content").style.width = num;
	},
	
	/////////////////////////////////////////////////////////////////////
	//	SET PALETTE MIN-WIDTH
	/////////////////////////////////////////////////////////////////////
	
	setMinWidth: function(num){
		if (typeof(content) == "number"){
			num = num + "px"
		}
		this._obj.style.minWidth = num;
		
		//ASSIGN MIN-WIDTH TO OTHER PARTS OF PALETTE
		$("palette_content").style.minWidth = num;
		$("palette_bcd").style.minWidth = num;
		
	},
	
	/////////////////////////////////////////////////////////////////////
	//	SET PALETTE TITLE
	/////////////////////////////////////////////////////////////////////
	
	setTitle: function(str){
		this._title = str;
		this._obj_title.innerHTML = this._title;
	},
	
	/////////////////////////////////////////////////////////////////////
	//	SET PALETTE DMS
	/////////////////////////////////////////////////////////////////////
	
	setDMS: function(str){
		$("palette_dms_text").innerHTML = str;
	},
	
	
	/////////////////////////////////////////////////////////////////////
	//	OPEN PALETTE
	/////////////////////////////////////////////////////////////////////
	
	open: function(){
		var palette = document.getElementById("global_palette");
		displayBlock(palette);
	},
	
	/////////////////////////////////////////////////////////////////////
	//	CLOSE PALETTE
	/////////////////////////////////////////////////////////////////////
	
	close: function(){
		var palette = document.getElementById("global_palette");
		displayNone(palette);
	},
	
	/////////////////////////////////////////////////////////////////////
	//	CLEAR SECTION
	/////////////////////////////////////////////////////////////////////
	
	clear: function(section_id){
		var section = document.getElementById(section_id);
		clearObj(section);
	},
	
	/////////////////////////////////////////////////////////////////////
	//	EXTEND PALETTE (titlebar, tabs, blank content)
	/////////////////////////////////////////////////////////////////////
	
	extend: function(content, section){
		var palette_section;
		switch (section) {
			case "titlebar":
				palette_section = document.getElementById("palette_title_extra");
				break;
			case "tabs":
				palette_section = document.getElementById("palette_tab_bar");
				break;
				case "dms":
				palette_section = document.getElementById("palette_dms");
				break;
			case "bcd":
				palette_section = document.getElementById("palette_bcd");
				break;
			default:
				break;
		}
		
		if (typeof(content) == "string"){
			content = this.encloseExtension(content);
		}
		
		palette_section.appendChild(content);
	},
	
	/////////////////////////////////////////////////////////////////////
	//	ENCLOSE EXTENSION
	/////////////////////////////////////////////////////////////////////
	
	encloseExtension: function(ext, ext_class, ext_id){
		if(!ext_class){ ext_class = ""; }
		if(!ext_id)   { ext_id = ""; }
	
		var enclosure_div = make("div", ext_class + " nodrag", ext_id);
		enclosure_div.innerHTML = ext;
	
		return enclosure_div;
	},

	
	/////////////////////////////////////////////////////////////////////
	//	GET PALETTE
	/////////////////////////////////////////////////////////////////////
	
	getPalette: function() {
		return this._obj;
	}
}

/////////////////////////////////////////////////////////////////////
// DRAG AND RESIZE FOR TABLE CONTROL PALETTE
/////////////////////////////////////////////////////////////////////
YAHOO.tableControlPaletteDDresize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId)
	{
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};

YAHOO.extend(YAHOO.tableControlPaletteDDresize, YAHOO.util.DragDrop);

YAHOO.tableControlPaletteDDresize.prototype.onMouseDown = function(e)
{
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};

YAHOO.tableControlPaletteDDresize.prototype.onDrag = function(e)
{
    var newPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX = newPos[0] - this.startPos[0];
    var offsetY = newPos[1] - this.startPos[1];
    var newWidth = Math.max(this.startWidth + offsetX, 10);
    var newHeight = Math.max(this.startHeight + offsetY, 10);
    var panel = this.getEl();
    panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	$("palette_content").style.height = newHeight - 12 + 'px';
	$("palette_bcd").style.height = newHeight - 175 + 'px';
	
	//ELEMENTS TO BE RESIZED
	if($("format_div")) { $("format_div").style.height = newHeight - 165 +'px'; }
	if($("filter_table_content_wrapper")) { $("filter_table_content_wrapper").style.height = newHeight - 141 +'px'; }
	
	positionFrame('edit_msl', 'global_palette', 'filter_table_content_wrapper');	
};