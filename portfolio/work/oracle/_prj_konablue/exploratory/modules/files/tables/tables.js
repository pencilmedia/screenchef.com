/*  Table manipulation

    Tables are generated in the browser using data and metadata supplied by the server
    in JSON format.  Three structures, one for data, one for headings and one for config
    (frozen columns, data types, editability, etc.) provide all the info needed to 
    create a table. (look at table_data.js)
    
*/

var lockedCols=0;
var tbl_idx = -1;

function agileTable(tableId, tableData, tableCfg){
	tbl_idx += 1;
	this.idx = tbl_idx;
	this.id = tableId;
	this.outer_height = null;
	this.footing_height = null;
	this.content_height = null;
	this.content_width = null;
	this.table_height = null;
	this.table_width = null;
	this.lockedCols = 0;
	this.max_table_scroll_x = null;
	this.max_table_scroll_y = null;
	this.heading_widths = new Array();
		
	this.col_off = "#7398dd";
	this.selected_rows = new Array();
	this.selected_columns = new Array();
	
	this.generateTable = function(table_cfg,table_headings,table_data){
		var target = document.getElementById(this.id);
		this._target = target;
		this.lockedCols = table_cfg.lockedCols;
		var container = document.createElement("div");
		container.id = this.id+"_table_container";
		container.className = "table_container";
		container.onscroll = scrollit;
		var tbl = document.createElement("table");
		tbl.setAttribute("cellSpacing","0");
		tbl.setAttribute("cellPadding","0");
		tbl.id = this.id+"_table_content";
		tbl.className="table_content standard_table_content";
		var tbl_head = document.createElement("thead");
		tbl_head.id = this.id+"_table_head";
		tbl_head.className = "table_head";
		var tbl_body = document.createElement("tbody");
		tbl_body.id = this.id+"_table_body";
		tbl_body.className = "table_body";
		
		if (table_headings) {
			var row = document.createElement("tr");
			for (var i=0; i<table_headings.length; i++) {
				var cell = document.createElement("th");
				cell.setAttribute("class","head_lo d_"+((i<10)?"0":"")+i);
				cell.setAttribute("className","head_lo d_"+((i<10)?"0":"")+i);  // for IE
				cell.className="head_lo d_"+((i<10)?"0":"")+i;
//				invo.event.addEvent(cell, "mouseover", highlightColumn , false);
//				invo.event.addEvent(cell, "mouseout", unhighlightColumn , false);
//				invo.event.addEvent(cell, "click", selectColumn , false);
				var lockedDiv = document.createElement("div");
				lockedDiv.className="lockedHdrDiv";
				var text = document.createTextNode(table_headings[i]);
				cell.appendChild(lockedDiv);
				lockedDiv.appendChild(text);
				row.appendChild(cell);
				
				/* There are narrow cells between the table headings that are
				   used as handles for column resizing.
				*/
				if (i < (table_headings.length-1)){
					var sep = document.createElement("th");
					sep.className="column_resize_handle lockedHdrDiv";
					sep.onmousedown=startdrag;
					sep.onmouseup=stopdrag;
					row.appendChild(sep);
					
					}
				}
			}
		tbl_head.appendChild(row);
		row.onselectstart = noop;
		if (document.styleSheets[0].deleteRule) {  // Firefox
			/* insert a rule into the stylesheet that will be modified as the user
			scrolls horizontally to position the locked table cells
			*/
			document.styleSheets[1].insertRule("#"+this.id+" .lockedHdrDiv { top: 0px; }",0) ;	
			document.styleSheets[1].insertRule("#"+this.id+" .lockedColDiv { left: 0px; }",0) ;	
			}

		if (table_data) {
			for (var i=0; i<table_data.length; i++) {

				var row = document.createElement("tr");
				row.setAttribute("class","row_lo");
				row.setAttribute("className","row_lo");  // for IE
				row.className="row_lo";

				invo.event.addEvent(row, "mouseover", highlightRow, false);
				invo.event.addEvent(row, "mouseout", unhighlightRow , false);
				invo.event.addEvent(row, "click", selectRow , false);

				
				for (var j=0;j<table_data[i].length;j++) {
					var cell = document.createElement("td");
					var cellClass = "d_"+((j<10)?"0":"")+j; // +(table_cfg.columns[j].sticky?" d_sticky_col":"");
					cell.setAttribute("class",cellClass);
					cell.setAttribute("className",cellClass);  // for IE
					cell.className=cellClass;

					switch (table_cfg.columns[j].type){
						case "text":
							var text = document.createTextNode(table_data[i][j]);
							cell.appendChild(text);
							break;
						case "date":
							var text = document.createTextNode(table_data[i][j]);
							cell.appendChild(text);
							break;
						case "icon":
							if (table_data[i][j].length>0){
								var icon = document.createElement("img");
								icon.setAttribute("src", "../../images/icn_" + table_data[i][j] + ".png");
								icon.setAttribute("alt", "");
								cell.appendChild(icon);
								}
							break;
						case "link":
							if (isArray(table_data[i][j])){
								for (k=0;k<table_data[i][j].length;k++){
									if (k != 0){
									   var comspace = document.createTextNode(", ");
									   cell.appendChild(comspace);
									   }
									var link = document.createElement("a");
									link.setAttribute("href", table_data[i][j][k].url);
									link.setAttribute("title", table_data[i][j][k].title);
									if (table_data[i][j][k].text){
										var linktext = document.createTextNode(table_data[i][j][k].text);
										link.appendChild(linktext);
										cell.appendChild(link);
										}
									else {
										if (table_data[i][j][k].icon){
											var icon = document.createElement("img");
											icon.setAttribute("src", "../../images/icn_" + table_data[i][j][k].icon + ".png");
											icon.setAttribute("alt", "");
											link.appendChild(icon);
											cell.appendChild(link);
											}
										}											
									}
								}
							else {
									var link = document.createElement("a");
									link.setAttribute("href", table_data[i][j].url);
									link.setAttribute("title", table_data[i][j].title);
									if (table_data[i][j].text){
										var linktext = document.createTextNode(table_data[i][j].text);
										link.appendChild(linktext);
										cell.appendChild(link);
										}
									else {
										if (table_data[i][j].icon){
											var icon = document.createElement("img");
											icon.setAttribute("src", "../../images/icn_" + table_data[i][j].icon + ".png");
											icon.setAttribute("alt", "");
											link.appendChild(icon);
											cell.appendChild(link);
											}
										}
									}
							break;
						case "xhtml":
							cell.innerHTML = table_data[i][j];
							break;
						};
					if (j<(table_data[i].length-1)){
						cell.colSpan = 2;
						}
					row.appendChild(cell);
					}
				tbl_body.appendChild(row);
				
				}
			}
		target.appendChild(container);
		container.appendChild(tbl);
		tbl.appendChild(tbl_head);
		tbl.appendChild(tbl_body);
		
		// footing
		var foot = document.createElement("div");
		foot.className = "table_footing_container";
		foot.id = this.id+"_table_footing_container";
		var foot_tbl = document.createElement("table");
		foot_tbl.className = "standard_table_heading";
		foot_tbl.setAttribute("cellSpacing","0");
		foot_tbl.setAttribute("cellPadding","0");
		var foot_row = document.createElement("tr");
		var foot_cell = document.createElement("td");
		if (table_cfg.footing){
			foot_cell.innerHTML = table_cfg.footing;
			}
		else{
			foot_cell.innerHTML = '&nbsp;';
			}
		foot_row.appendChild(foot_cell);
		foot_tbl.appendChild(foot_row);
		foot.appendChild(foot_tbl);
		target.appendChild(foot);

		
		lockCol(this.id,this.lockedCols);

/*		
		// scrollbars
		var vscroll = document.createElement("div");
		vscroll.id = this.id+"_table_vertical_scrollbar";
		vscroll.className = "table_vertical_scrollbar";
		var vscroll_center = document.createElement("div");
		vscroll_center.id = this.id+"_table_vertical_scrollbar_center";
		vscroll_center.className = "table_vertical_scrollbar_center";
		var vdot = document.createElement("div");
		this._vdot = vdot;
		vdot.id = this.id+"_vdot";
		vdot.className = "draggable";
		vdot.setAttribute("unselectable","on");
		invo.event.addEvent(vdot, "dragstart", this._startVerticalDrag, false);
		invo.event.addEvent(vdot, "mousedown", this._startVerticalDrag, false);
		vscroll.appendChild(vscroll_center);
		vscroll_center.appendChild(vdot);
		target.appendChild(vscroll);
		
		var hscroll = document.createElement("div");
		hscroll.id = this.id+"_table_horizontal_scrollbar";
		hscroll.className = "table_horizontal_scrollbar";
		var hscroll_center = document.createElement("div");
		hscroll_center.id = this.id+"_table_horizontal_scrollbar_center";
		hscroll_center.className = "table_horizontal_scrollbar_center";
		var hdot = document.createElement("div");
		this._hdot = hdot;
		hdot.id = this.id+"_hdot";
		hdot.className = "draggable";
		hdot.setAttribute("unselectable","on");
//		invo.event.addEvent(hdot, "dragstart", _moveHorizontalSlider, false);
//		invo.event.addEvent(hdot, "mousedown", _moveHorizontalSlider, false);
		hscroll.appendChild(hscroll_center);
		hscroll_center.appendChild(hdot);
		target.appendChild(hscroll);
*/		
			
	    }
	    
	this.initTable = function(table_cfg, table_headings, table_data){
		// load data
		this.generateTable(table_cfg, table_headings, table_data);

		// Get metrics of the containing and related elements
		this.outer_height = invo.metrics.getObjectHeight(this.id+'_table_container');
		this.footing_height = invo.metrics.getObjectHeight(this.id+'_table_footing_container');
		this.content_height = this.outer_height - this.footing_height;
		this.content_width = invo.metrics.getObjectWidth(this.id+'_table_container');
			
		// Get metrics of the table elements
		document.getElementById(this.id+'_table_content').style.width = invo.metrics.getObjectWidth(this.id+'_table_content') + "px";
		this.table_height   = invo.metrics.getObjectHeight(this.id+'_table_content');
		this.table_width    = invo.metrics.getObjectWidth(this.id+'_table_content');

		// Position the footer (button bar)
		document.getElementById(this.id+"_table_footing_container").style.bottom = "0px";
					
		// Used for calculating scrolling
		this.max_table_scroll_x = this.content_width;
		this.max_table_scroll_y = this.content_height;
			
		// "Magic" function to set widths of heading elements, then enable
		// them to scroll only in the horizontal direction
		if (false && document.getElementById(this.id+"_table_head")) {
			var children = document.getElementById(this.id+"_table_head").childNodes;
			if (children) {
				children = children[0].childNodes;
				}
			for (var i=0; i<children.length; i++) {
				var j = i + 1;
				if (children[j]) {
					children[i].style.width = children[j].offsetLeft - children[i].offsetLeft - 6 + "px";
				} else {
					children[i].style.width = invo.metrics.getObjectWidth(this.id+'_table_content') - children[i].offsetLeft - 6 + "px";
					}
				children[i].style.left = children[i].offsetLeft + "px";
				}
// not sure 
//				for (var i=0; i<children.length; i++) {
//					children[i].style.position = "absolute";
//				}
			document.getElementById(this.id+"_table_head").style.position = "absolute";
			document.getElementById(this.id+"_table_head").style.top = "0px";
			}		
//		this.attachAlertTable();
	    }
		

		this._startVerticalDrag = function() {

			drag_object = this._vdot;
			alert(drag_object.id);

			drag_callback = function(){this._moveVerticalSlider};

			invo.event.addEvent(document, "mousemove", invo.dnd.trackDnD, true);
			invo.event.addEvent(document, "mouseup", invo.dnd.releaseDnD, true);
			drag_object_x = invo.metrics.getObjectLeft(drag_object);
			drag_object_y = invo.metrics.getObjectTop(drag_object);
//			event_x       = invo.event.getEventX(evt);
//			event_y       = invo.event.getEventY(evt);
			event_x       = drag_object_x;
			event_y       = drag_object_y;
			}
		
		this._moveVerticalSlider = function() {

	    	evt = invo.dnd.getDragEvent();
			var x = invo.event.getEventX(evt);
			var y = invo.event.getEventY(evt);

			if (y >= 0 && y <= this.max_table_scroll_y) {

				invo.dnd.moveDragObject(null, true);
				if (this.table_height > this.content_height) {
					invo.metrics.setObjectTop(document.getElementById(tableID+"_table_content"), (0 - Math.round( ( (this.table_height - this.content_height) / this.content_height) * y) )); 
				}
			}
		}

	    this._moveHorizontalSlider = function() {

			evt = invo.dnd.getDragEvent();
			var x = invo.event.getEventX(evt);
			var y = invo.event.getEventY(evt);
			if (x >= 0 && x <= this.max_table_scroll_x) {
				invo.dnd.moveDragObject(true, null);
				if (this.table_width > this.content_width) {
					invo.metrics.setObjectLeft(document.getElementById(tableID+"_table_content"), (0 - Math.round( ( (this.table_width - this.content_width) / this.content_width) * x) ) );
				}
			}
		}


	    		/* public retrieval of the object */
		this.getRootObject = function() {
			return this._target;
		}
		
		/* public method to attach the private event */
		this.attachAlertTable = function() {
			invo.event.addEvent(this._hdot, "dragstart", associateEvent(this, "_moveHorizontalSlider"), false);
			invo.event.addEvent(this._hdot, "mousedown", associateEvent(this, "_moveHorizontalSlider"), false);
//			invo.event.addEvent(this._vdot, "dragstart", associateEvent(this, "_startVerticalDrag"), false);
//			invo.event.addEvent(this._vdot, "mousedown", associateEvent(this, "_startVerticalDrag"), false);
//			addEvent(this._innerObj, "click", associateEvent(this, "_alertParent"), false);
		}
	    

   }

	/*
		A function to associate events with class member objects
	*/
	function associateEvent (obj, methodName) {
		return(function(e) {
			e = e || window.event;
			return obj[methodName](e, this, obj);
		});
	}

// Return a boolean value telling whether 
// the first argument is an Array object. 

function isArray() {
	if (typeof arguments[0] == 'object') {  
		var criterion = arguments[0].constructor.toString().match(/array/i); 
 		return (criterion != null);  
 		}
 	return false;
 	}


	// nextSibling hack for Firefox
	function getNextSibling(startBrother){
	  var endBrother=startBrother.nextSibling;
	  while(endBrother.nodeType!=1){
	    endBrother = endBrother.nextSibling;
	  }
	  return endBrother;
	}
	// firstChild hack for Firefox
	function getFirstChild(parentNode){
	  if (parentNode.firstChild.nodeType == 1){
	     return parentNode.firstChild;
	     }
	  else {
	     return getNextSibling(parentNode.firstChild);
	     }
	  }
	function getChildNodes(parentNode){
	  var c = parentNode.childNodes;
	  var cn = new Array();
	  for (var i=0,j=0; i<c.length; i++){
		if (c[i].nodeType == 1){
		   cn[j++] = c[i];
		   }
		}
	  return cn;
	  }
   
	// fade the background of an updated field 
	var fadeobj=new Array();
	function fade(obj,val,init){
	  fadeobj = obj;
	  val = val + 10;
	  if (val<=255){
	     obj.style.backgroundColor = 'rgb(255,255,'+val+')';
	     setTimeout('fade(fadeobj,' + val + ',false)', 50);
		  }
	  else {
	     obj.style.backgroundColor = "transparent";
	     }
	  }

	function fadeout(obj,val,init){
	  fadeobj = obj;
	  // #faf3da
	  var startr=250,startg=243,startb=218;
	  var r=Math.floor(255-((255-startr)*(val*0.01)));
	  var g=Math.floor(255-((255-startg)*(val*0.01)));
	  var b=Math.floor(255-((255-startb)*(val*0.01)));

	  if (val>0){
		  obj.style.opacity = val*0.01;
		  obj.style.filter = "alpha(opacity="+val+")";
		obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
 	     setTimeout('fadeout(fadeobj,' + (val-5) + ',false)', 50);
		  }
	  else {
	        obj.parentNode.removeChild(obj);

	     }
	  }

	function getSelectedRows(table_id){
	   var r = new Array();
	   var t = document.getElementById(table_id);
	   var cn = getChildNodes(getFirstChild(t));
	   for (var i=0, j=0; i<cn.length; i++){
		 if (cn[i].className.indexOf('d_selected')>=0){
		    r[j++] = cn[i];
		    }
		 }
	   return r;
	   }
		
	function toggleAllRows(table_id){
	   var r = new Array();
	   var t = document.getElementById(table_id);
	   var cn = getChildNodes(getFirstChild(t));
	   var rows = getSelectedRows(table_id);
	   if ((rows.length==0) || ((rows.length>0) && (rows.length != cn.length))){
	       for (var i=0;i<cn.length;i++){
		       cn[i].className="d_selected";
		       }
	       return;
	       }
	   if (rows.length>0){
	       for (var i=0;i<cn.length;i++){
		       cn[i].className="";
		       }
	       return;
	       }

	   }
	
	function deselectRows(table_id){
	   var rows = getSelectedRows(table_id);
	   for (var i=0; i<rows.length; i++){
	      toggle_row(rows[i]);
       }
	}
	
	var editing = false;
	var saved_rows = new Array();
	function cancel(table_id){
	   var rows = getSelectedRows(table_id);
	   for (var i=0; i<rows.length; i++){
	      rows[i].innerHTML = saved_rows[i];
	      toggle_row(rows[i]);
	      }
	   	document.getElementById("defaultbuttons").className="obj_display_block";
		document.getElementById("editbuttons").className="obj_display_none";
	    editing = false;
	   }
	   
	function save(table_id){
	   var cells = new Array("todo_percent","todo_actualhours","todo_status");
	   var rows = getSelectedRows(table_id);
	   var cell, s;
	   for (var i=0; i<rows.length; i++){
	      for (var j=0; j<cells.length; j++){
	          s = invo.dom.getElementsByClass(cells[j], rows[i], 'TD');	
		      cell = getFirstChild(s[0]);
		      if (cell.tagName == "INPUT"){
		         s[0].innerHTML = cell.value;
		       }
	         }
		  toggle_row(rows[i]);
	      }
	   	document.getElementById("defaultbuttons").className="obj_display_block";
		document.getElementById("editbuttons").className="obj_display_none";
		editing = false;
	   }
	   
	   
	function edit(table_id){
	   var rows = getSelectedRows(table_id);
	   if (rows.length == 0){
	      alert('No rows have been selected.');
	      return;
	      }
		var s, txt;
	   saved_rows.length = 0;
	   for (var i=0; i<rows.length; i++){
	      saved_rows.push(rows[i].innerHTML);
          s = invo.dom.getElementsByClass('todo_actualhours', rows[i], 'TD');	
	      txt = s[0].innerHTML;
	      s[0].innerHTML="<input type='text' style='font-size:9px;width:58px' value='"+txt+"' />";
          s = invo.dom.getElementsByClass('todo_percent', rows[i], 'TD');	
	      txt = s[0].innerHTML;
	      s[0].innerHTML="<input type='text' style='font-size:9px;width:58px' value='"+txt+"' />";
          s = invo.dom.getElementsByClass('todo_status', rows[i], 'TD');	
	      txt = s[0].innerHTML;
	      s[0].innerHTML="<input type='text' style='font-size:9px;width:58px' value='"+txt+"' />";
	      }
	   document.getElementById("defaultbuttons").className="obj_display_none";
		document.getElementById("editbuttons").className="obj_display_block";
	    editing = true;
	   }
	
	function accept(table_id){
	   var rows = getSelectedRows(table_id);
	   if (rows.length == 0){
	      alert('No rows were selected.');
	      return;
	      }
	   var found = false;
	   for (var i=0; i<rows.length; i++){
	      var s = invo.dom.getElementsByClass('todo_status', rows[i], 'TD');
	      if (s[0].innerHTML.indexOf('Not Accepted')>=0){
	          found = true;
	          s[0].innerHTML = 'Not Started';
			  // r is to remove the Request icon from the flag column
			  var r = invo.dom.getElementsByClass('d_one',rows[i],'TD');
			  r[0].innerHTML = '&nbsp;';
	          }
			toggle_row(rows[i]);
	      }
	   if (found == false){
	      alert('No unaccepted items were found in selected rows.');
	      }
	   }
	function decline(table_id){
	   var rows = getSelectedRows(table_id);
	   if (rows.length == 0){
	      alert('No rows have been selected.');
	      return;
	      }
	   var found = false;
	   for (var i=0; i<rows.length; i++){
	      var s = invo.dom.getElementsByClass('todo_status', rows[i], 'TD');
	      if (s[0].innerHTML.indexOf('Not Accepted')>=0){
	          found = true;
	          document.getElementById("declinePopupDiv").style.display='block';
	          }
	      }
	   if (found == false){
	      alert('No unaccepted items were found in selected rows.');
	      }
	   }
	
	function hideDecline(){
	   document.getElementById('declinePopupDiv').style.display='none';
//	document.getElementById("popup").style.display='none';
	   }

	function submitDecline(table_id){
	   var rows = getSelectedRows(table_id);
	   for (var i=0; i<rows.length; i++){
	      var s = invo.dom.getElementsByClass('todo_status', rows[i], 'TD');
	      if (s[0].innerHTML.indexOf('Not Accepted')>=0){
			fadeout(rows[i],100);
		   }
		}
		hideDecline();
	}
	
	function cancelDecline(){
		hideDecline();
	}
	
	function markComplete(table_id){
	   var rows = getSelectedRows(table_id);
	   if (rows.length == 0){
	      alert('No rows have been selected.');
	      return;
	      }
	   for (var i=0; i<rows.length; i++){
	        fadeout(rows[i],100);
	        }
	   }


		/*
			From here down are simply decorative functions that handle the
			highlighting of elements in the table.
			
			1) They should be separated from teh functional parts that deals
			with storing rows and columns for selection that would submit data
			to the server.
			
			2) They need to be a lot more generic.
			
			3) They should be assigned as events to the rows and columns
			by the class that builds the table.
		*/
		function highlightRow(e) {
			var row = invo.event.getEventTarget(e);
			while (row.tagName != "TR"){
			    row = row.parentNode;
			    }
			var row_id = selected_rows.inArrayIdx(row);

			if (row_id < 0) {
				row.className=row.className.replace(/row_lo|row_hi|row_sel/,"row_hi");
				for (var i = 0; i<row.childNodes.length; i++) {
					if ((row.childNodes[i].className.indexOf("locked")>=0) &&
					     (row.childNodes[i].className.indexOf("row_hi")<0)) {
					   row.childNodes[i].className += " row_hi";
					   }
				   }
			}
			row.style.cursor = "pointer";
		}
		
		function unhighlightRow(e) {
			var row = invo.event.getEventTarget(e);
			while (row.tagName != "TR"){
			    row = row.parentNode;
			    }
			var row_id = selected_rows.inArrayIdx(row);
			if (row_id < 0) {
				row.className=row.className.replace(/row_lo|row_hi|row_sel/,"row_lo");
				for (var i = 0; i<row.childNodes.length; i++) {
					if (row.childNodes[i].className.indexOf("locked")>=0) {
						row.childNodes[i].className=row.childNodes[i].className.replace(/ row_lo| row_hi| row_sel/,"");
					   }
				   }
			}
		}
		
		function selectRow(e) {
			if (selected_columns.length) {
				while (selected_columns.length) {
					selectColumn(selected_columns[0]);
				}
			}
			var row = invo.event.getEventTarget(e).parentNode;
			
			var row_id = selected_rows.inArrayIdx(row);
			if (row_id < 0) {
				row.className=row.className.replace(/row_lo|row_hi|row_sel/,"row_sel");
				for (var i = 0; i<row.childNodes.length; i++) {
					if (row.childNodes[i].className.indexOf("locked")>=0) {
						row.childNodes[i].className=row.childNodes[i].className.replace(/row_lo|row_hi|row_sel/,"row_sel");
					   }
				   }
				selected_rows[selected_rows.length] = row;
			} else {
				var tmp = selected_rows.splice(row_id, 1);
				unhighlightRow(e);
			}
		}

/**************************************/
/*  Column highlighting and selecting
     (Are these needed?)
*/		
		function highlightColumn(e) {
			var heading = invo.event.getEventTarget(e);
			heading.className=heading.className.replace(/head_lo|head_hi|head_sel/,"head_hi");
//			heading.style.background = row_highlight_color;
			heading.style.cursor = "pointer";
		}
		
		function unhighlightColumn(e) {
			var heading = invo.event.getEventTarget(e);
			heading.className=heading.className.replace(/head_lo|head_hi|head_sel/,"head_lo");
//			heading.style.background = col_off;
		}	
		
		function selectColumn(e) {
			var heading = invo.event.getEventTarget(e);
			if (selected_rows.length) {
				while (selected_rows.length) {
					selectRow(selected_rows[0]);
				}
			}
			
			var column_id = selected_columns.inArrayIdx(heading);
			var parent = heading.parentNode;
			var idx = null;
			for (var i=0; i<parent.childNodes.length; i++) {
				if (parent.childNodes[i] == heading) {
					idx = i;
					continue;
				}
			}
			
			if (column_id < 0) {
				use_color = row_selected_color;
				selected_columns[selected_columns.length] = heading;
			} else {
				use_color = row_off;
				var tmp = selected_columns.splice(column_id, 1);
			}

			if (document.getElementById("table_body")) {
				var children = document.getElementById("table_body").childNodes;
				if (children) {
					for (var i=0; i<children.length; i++) {
						children[i].childNodes[idx].style.background = use_color;
						}
					}
				}
		}
	
	
/********************************************/		
/*  Slider functions -- not currently used  */
		
/*
	Callback function to move the vert slider
*/
function moveVerticalSlider() {
	evt = invo.dnd.getDragEvent();
	var x = invo.event.getEventX(evt);
	var y = invo.event.getEventY(evt);
//				alert(y);
	if (y >= 272 && y <= (272 + max_table_scroll_y)) {
		invo.dnd.moveDragObject(null, true);
		if (table_height > content_height) {
			invo.metrics.setObjectTop(document.getElementById("table_content"), (0 - Math.round( ( (table_height - content_height) / content_height) * y) ) + 70); //22 is heading height
			alert(table_height+" "+content_height+" "+invo.metrics.getObjectTop(document.getElementById("table_content")));
		}
	}
}
		
/*
	Callback function to move the horizontal slider
*/
function moveHorizontalSlider() {
	evt = invo.dnd.getDragEvent();
	var x = invo.event.getEventX(evt);
	var y = invo.event.getEventY(evt);
	if (x > 0 && x <= (700)) {
		invo.dnd.moveDragObject(true, null);
		if (table_width > content_width) {
			invo.metrics.setObjectLeft(document.getElementById("table_content"), (0 - Math.round( ( (table_width - content_width) / content_width) * x) ) );
		}
	}
}

/*****************************/
/*  Column locking/freezing

   Two distinct techniques are used based on IE/Firefox
      In IE, there is support for expressions in CSS and for relative positioning of 
      table elements (cells).  This allows us to set the cells in certain columns as
      being relatively positioned and setting the "left" value to match the "scrollLeft"
      property of the scrollable table container.  So, as the table scrolls left, the 
      columns are moved to the right.  The result is that they appear to stay in place.
      
      In Firefox, the approach is more complicated.  Since we can't relatively position the
      table elements, we generate a div within a locked cell that contains the child nodes
      of the cell.  We can then relatively position those divs as the user scrolls.  We have
      to do it explicitly instead of using CSS expressions as in IE.  Instead of repositioning
      each cell (there my be hundreds),	we modify the style rule for the class that these divs
      belong to (lockedColDiv).
      
      Note:  These three functions should become methods of agileTable.
      
*/	

function lockCol(tblID, n) {
	var table = document.getElementById(tblID); 
	var cTR = table.getElementsByTagName('TR');  //collection of rows
	var newDiv, colstolock;
	for (i = 0; i < (cTR.length-1); i++){
		var tr = cTR[i];
		colstolock = n;
		if (i == 0) {
		   colstolock *= 2;
		   }
		for (var k=0; k<colstolock; k++){
			newDiv = document.createElement("DIV");
			tr.cells[k].className += ' lockedCol';
			newDiv.className="lockedColDiv";
			if (k == (colstolock-1)){
//				newDiv.className += " lastLockedColDiv";
				tr.cells[k].className += " lastLockedCol";
				}
			if (tr.cells[k].hasChildNodes()){
				for (j=0; j< tr.cells[k].childNodes.length; j++){
					newDiv.appendChild(tr.cells[k].childNodes[j].cloneNode(true));
					}
				while (tr.cells[k].firstChild){
					tr.cells[k].removeChild(tr.cells[k].firstChild);
					}
				}
//			newDiv.style.height=invo.metrics.getObjectHeight(tr.cells[k])+"px";
			tr.cells[k].appendChild(newDiv);
			}
		}
	}

function unlockCol(tblID) {

	if (lockedCols > 0){
		var table = document.getElementById(tblID); 
		var cTR = table.getElementsByTagName('TR');  //collection of rows
		var newDiv;
		for (i = 0; i < cTR.length; i++){
			var tr = cTR.item(i);
			for (var k=0;k<lockedCols;k++) {
				tr.cells[k].className = '';
				newDiv = tr.cells[k].childNodes[0].cloneNode(true);
				tr.cells[k].removeChild(tr.cells[k].childNodes[0]);
				for (j=0; j<newDiv.childNodes.length; j++) {
					tr.cells[k].appendChild(newDiv.childNodes[j]);
					}
				}
			}
		}
	}

function scrollit(){
	/* For Firefox, modify the appropriate style rules to do the vertical and/or 
	   horizontal scrolling.  The style rules have been pushed onto the top of the
	   style sheet, so there's some math here to determine where the rules are for
	   this table.
	*/
	if (document.styleSheets[0].deleteRule) {  // Firefox
		var tbl = eval(this.id.replace("_table_container",""));
         if (tbl.lockedCols > 0){
			document.styleSheets[1].insertRule("#"+tbl.id+" .lockedColDiv { left: " + this.scrollLeft + "px; }",(tbl_idx-tbl.idx)*2) ;	
			document.styleSheets[1].deleteRule((tbl_idx-tbl.idx)*2+1);
			}
		document.styleSheets[1].insertRule(".lockedHdrDiv { top: " + this.scrollTop + "px; }",(tbl_idx-tbl.idx)*2+1) ;	
		document.styleSheets[1].deleteRule((tbl_idx-tbl.idx)*2+2);
		}
	}
	
	
/*********************/	
/*  Column resizing  */
	
function dragit(e){
	e=invo.event.getEvent(e); // window.event;
	var x=e.clientX+document.body.scrollLeft;
	resizecol.style.width=(colwidth-(xx-x))+"px";	
	}
			   
function startdrag(e){
	resizecol = this.previousSibling;
	e=invo.event.getEvent(e); // window.event;
	xx = e.clientX+document.body.scrollLeft;
	colwidth =  resizecol.clientWidth;
	document.onmousemove=dragit;
	document.onmouseup=stopdrag;
	}
	
function stopdrag(e){
	document.onmousemove="";
	document.onmousedrag="";
	}
	
function noop(){
	return false;
	}

	   