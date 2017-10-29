//records browser name
var browser = null;
//keeps track of current td
var selectedCellObj = null; 
//keeps track of current div
var selectedCellDiv = null; 
//keeps track of current table
var selectedTableObj = null; 
//keeps track of current text receptacle
var currentTextbox = null;
// keeps track of what type to show
var selectedCellPopupType = null;

//keeps track of current popup type
var visiblePopupName = null;
//records orig x of visible popup
var origX = null;
//records orig y of visible popup
var origY = null;

//keeps track of current list item
var listItemSelected = null;
var listItemWeights = new Array();

var allPopups = new Array ();
allPopups[0] = "popup_addr";
allPopups[1] = "popup_search";
allPopups[2] = "popup_text";
allPopups[3] = "popup_dropdown";
allPopups[4] = "popup_textarea";
allPopups[5] = "popup_units";
allPopups[6] = "popup_calendar_basic";
allPopups[7] = "popup_calendar_time12";
allPopups[8] = "popup_calendar_time24";

var allLists = new Array ();
allLists[0] = "list_weights";

var eventNum = 2; //For Safari onkeyup

var browserID;


////////////////////////////////////////
//
//        BROWSER FUNCTIONS
//
////////////////////////////////////////
function browserCheck(){	
	var browserVendor = navigator.vendor;
	var browserAgent = navigator.userAgent;
	
	if (typeof(browserVendor) == "string" && browserVendor.indexOf("Apple") != -1) { browserID = "safari"; }
	else if (typeof(browserAgent) == "string" && browserAgent.indexOf("MSIE") != -1) { browserID = "explorer"; }
	else {browserID = "";}
}



////////////////////////////////////////
//
//        BASIC FUNCTIONS
//
////////////////////////////////////////

function callPopup() {
	if (selectedCellObj && selectedCellPopupType) {
		checkPopup(selectedCellPopupType);	
		
		//alert(selectedCellPopupType);
		var obj = getID(selectedCellPopupType);
		adjustPopup(obj, selectedCellObj);
		replaceText(obj, selectedDivObj);
		displayBlock(obj);
		currentTextbox.focus();
		if(currentTextbox.select){
			currentTextbox.select();
		}		
	}
}

function selectCell(obj) {
	if (selectedCellObj) { unhighlightCell(selectedCellObj); }
	if (visiblePopupName) {
		var popupObj = getID(visiblePopupName);
		if (popupObj.style.display == "block"){	commitText(popupObj); }
	}
	selectedCellObj = obj;
	selectedDivObj = getChildFromCell(obj);
	highlightCell(obj);
	registerTable(obj);
}

function registerTable(cell) {
	var row_parent = getParentRowFromCell(cell);
	var table_parent = getParentTableFromRow(row_parent);
	if (selectedTableObj != table_parent) {
		selectedTableObj = table_parent;
	}
}

function registerPopupType(popup_name) {
	selectedCellPopupType = popup_name;
}


// function checks popup type being called is current popup type
// if it is, the function does nothing
// if not, it changes the current popup to display none
function checkPopup(popupName) {
	if (visiblePopupName && visiblePopupName != popupName){
		displayNone(getID(visiblePopupName));
	}
	visiblePopupName = popupName;
}

////////////////////////////////////////
//
//        DISABLED ALERT FUNCTION
//
////////////////////////////////////////
function disabledCell(){ alert('This cell is not editable.');}


////////////////////////////////////////
//
//        CELL MOD FUNCTIONS
//
////////////////////////////////////////

function highlightCell(obj) {
	var result = getMatch(selectedCellObj.className, "noneditable");
	if (result == "noneditable"){
		obj.style.backgroundImage = "url(../../global/images/bgd_gray_dot.png)";
	} else {
		obj.style.backgroundColor = "#dde9ff";
	}
}

function unhighlightCell(obj) {
	obj.style.backgroundColor = "#fff";
	obj.style.backgroundImage = "none";
}

function findActiveCell(i, cells, direction){
	if (direction == "forward"){
		for (var j=0; j < cells.length; j++){
			var resultHandle = getMatch(cells[i + j].className, "handle");
			var resultNon = getMatch(cells[i + j].className, "noneditable");
			
			if (resultHandle == null && resultNon == null){
				num = (i + j);
				return num;
			}
		}
	} else if (direction == "backward"){
		for (var j=0; j < cells.length; j--){
			var resultHandle = getMatch(cells[i + j].className, "handle");
			var resultNon = getMatch(cells[i + j].className, "noneditable");
			
			if (resultHandle == null && resultNon == null){
				num = (i + j);
				return num;
			}
		}
	}
}



////////////////////////////////////////
//
//        HIDE FUNCTIONS
//
////////////////////////////////////////

function hideObj(obj) {
	if (typeof(obj) == "string") {
		obj = getID(obj);
	}
	displayNone(obj);
}

function hideAllPopups() {
	for (var i=0; i< allPopups.length; i++) {
		hideObj(allPopups[i]);
	}	
	for (var i=0; i< allLists.length; i++) {
		hideObj(allLists[i]);
	}	
}


////////////////////////////////////////
//
//        POSITIONING FUNCTIONS
//
////////////////////////////////////////


//Function sizes and position popup based on type
//Function is tuned into the structure of the popup div/div/textarea
function adjustPopup(popupObj, cellObj) {

	popupCoordinates = findPos(cellObj);
	popupHeight      = cellObj.offsetHeight;
	popupWidth       = cellObj.offsetWidth;
	
	var scrollbarObj = getID("scrollbar");

	switch (popupObj.id) {
		case "popup_addr":
			var textTag = popupObj.getElementsByTagName("TEXTAREA")[0];
			if (browserID == "safari"){	
				textTag.style.width = (popupWidth) + "px";
				textTag.style.height = (popupHeight) + "px";
			} else {
				textTag.style.width = (popupWidth - 12) + "px";
				textTag.style.height = (popupHeight - 12) + "px";
			}
			popupObj.style.width = (popupWidth + 43) + "px";
			popupObj.style.height = (popupHeight + 6) + "px";
			origY = (popupCoordinates['y'] - 4) + "px";
			origX = (popupCoordinates['x'] - 4) + "px";
			break;
		case "popup_search":
			var textTag = popupObj.getElementsByTagName("TEXTAREA")[0];
			if (browserID == "safari"){	
				textTag.style.width = (popupWidth) + "px";
				textTag.style.height = (popupHeight) + "px";
			} else {
				textTag.style.width = (popupWidth - 12) + "px";
				textTag.style.height = (popupHeight - 12) + "px";
			}
			popupObj.style.width = (popupWidth + 43) + "px";
			popupObj.style.height = (popupHeight + 6) + "px";
			origY = (popupCoordinates['y'] - 4) + "px";
			origX = (popupCoordinates['x'] - 4) + "px";
			break;
		case "popup_units":
			var textTag = popupObj.getElementsByTagName("TEXTAREA")[0];
			if (browserID == "safari"){	
				textTag.style.width = (popupWidth) + "px";
				textTag.style.height = (popupHeight) + "px";
			} else {
				textTag.style.width = (popupWidth - 12) + "px";
				textTag.style.height = (popupHeight - 12) + "px";
			}
			popupObj.style.width = (popupWidth + 35) + "px";
			popupObj.style.height = (popupHeight + 6) + "px";
			origY = (popupCoordinates['y'] - 4) + "px";
			origX = (popupCoordinates['x'] - 4) + "px";
			break;
		case "popup_text":
			var textTag = popupObj.getElementsByTagName("TEXTAREA")[0];
			if (browserID == "safari"){	
				textTag.style.width = (popupWidth) + "px";
				textTag.style.height = (popupHeight) + "px";
			} else {
				textTag.style.width = (popupWidth - 12) + "px";
				textTag.style.height = (popupHeight - 12) + "px";
			}
			popupObj.style.width = (popupWidth + 6) + "px";	
			popupObj.style.height = (popupHeight + 6) + "px";
			origY = (popupCoordinates['y'] - 4) + "px";
			origX = (popupCoordinates['x'] - 4) + "px";
			break;
		case "popup_dropdown":
			var textTag = popupObj.getElementsByTagName("SELECT")[0];
			textTag.style.width = popupWidth + "px";
			textTag.style.height = (popupHeight - 2) + "px";
			popupObj.style.width = (popupWidth + 6) + "px";	
			popupObj.style.height = (popupHeight + 6) + "px";
			origY = (popupCoordinates['y'] - 4) + "px";
			origX = (popupCoordinates['x'] - 4) + "px";
			break;
		case "popup_textarea":
			var textTag = popupObj.getElementsByTagName("TEXTAREA")[0];
			if (browserID == "safari"){	
				textTag.style.width = (popupWidth) + "px";
				textTag.style.height = 66 + "px";
			} else {
				textTag.style.width = (popupWidth - 12) + "px";
				textTag.style.height = 54 + "px";
			}
			popupObj.style.width = (popupWidth + 6) + "px";	
			popupObj.style.height = 72 + "px";
			origY = (popupCoordinates['y'] - 4) + "px";
			origX = (popupCoordinates['x'] - 4) + "px";
			break;
		case "popup_calendar_basic":
			origY = (popupCoordinates['y'] - 10) + "px";
			origX =(popupCoordinates['x'] - 62) + "px";
			break;
		case "popup_calendar_time12":
			origY = (popupCoordinates['y'] - 10) + "px";
			origX =(popupCoordinates['x'] - 62) + "px";
			break;
		case "popup_calendar_time24":
			origY = (popupCoordinates['y'] - 10) + "px";
			origX =(popupCoordinates['x'] - 62) + "px";
			break;
		default:
			break;
	}
	
	popupObj.style.left = origX;
	popupObj.style.top = origY;
	adjustForScroll(scrollbarObj);
}


//function finds x,y coordinates by comparing offest values with offsetParent values
function findPos(obj) {
	var currentLeft = 0;
	var currentTop = 0;
	if (obj.offsetParent) {
		currentLeft = obj.offsetLeft
		currentTop = obj.offsetTop
		while (obj = obj.offsetParent) {
			currentLeft += obj.offsetLeft
			currentTop += obj.offsetTop
		}
	}
	return {'x': currentLeft, 'y': currentTop};
}


////////////////////////////////////////
//
//        DISPLAY FUNCTIONS
//
////////////////////////////////////////

function displayBlock(obj) { obj.style.display = "block"; }

function displayNone(obj) { obj.style.display = "none"; }

////////////////////////////////////////
//
//        TEXT REPLACEMENT FUNCTIONS
//
////////////////////////////////////////

//Take text from cell and put into text receptacle
function replaceText(target_obj, source_obj) {

	var replacementText = getText(source_obj);
	
	if (replacementText == "&nbsp;"){ replacementText = "";	}

	if (visiblePopupName == "popup_calendar_basic"){
		var textTag = target_obj.getElementsByTagName("INPUT")[0];
		textTag.value = replacementText;
		highlightDate(replacementText, "calendar_days_basic");
	} else if (visiblePopupName == "popup_calendar_time12"){
		var textTag = target_obj.getElementsByTagName("INPUT")[0];
		textTag.value = replacementText;
		highlightDate(replacementText, "calendar_days_time12");
	} else if (visiblePopupName == "popup_calendar_time24"){
		var textTag = target_obj.getElementsByTagName("INPUT")[0];
		textTag.value = replacementText;
		highlightDate(replacementText, "calendar_days_time24");
	} else if (visiblePopupName == "popup_dropdown") {
		var textTag = target_obj.getElementsByTagName("OPTION")[0];
		textTag.innerHTML = replacementText;
		textTag = target_obj.getElementsByTagName("SELECT")[0]; // Set so dropdown gets focus
	} else {
		var textTag = target_obj.getElementsByTagName("TEXTAREA")[0];
		textTag.value = replacementText;
	}
	
	currentTextbox = textTag;
}


//Commit text from text receptacle to cell
function commitText(obj, isEnter) {
	switch (obj.id) {
		case "popup_calendar_basic":
			var textTag = obj.getElementsByTagName("INPUT")[0];
			selectedDivObj.innerHTML = textTag.value;
			hideAllPopups();
			break;
		case "popup_calendar_time12":
			var textTag = obj.getElementsByTagName("INPUT")[0];
			selectedDivObj.innerHTML = textTag.value;
			hideAllPopups();
			break;
		case "popup_calendar_time24":
			var textTag = obj.getElementsByTagName("INPUT")[0];
			selectedDivObj.innerHTML = textTag.value;
			hideAllPopups();
			break;
		case "popup_dropdown":
			var textTag = obj.getElementsByTagName("SELECT")[0];
			var selectedNum = textTag.selectedIndex;
			selectedDivObj.innerHTML = textTag.options[selectedNum].value;
			hideAllPopups();
			break;
		case "popup_units":
			var listObj = getID("list_weights");
			if (listObj.style.display == "block"){
				replaceWeight('array');
			} else {
				var textTag = obj.getElementsByTagName("TEXTAREA")[0];
				selectedDivObj.innerHTML = textTag.value;
				hideAllPopups();
			}
			break;
		default:
			var textTag = obj.getElementsByTagName("TEXTAREA")[0];
			selectedDivObj.innerHTML = textTag.value;
			hideAllPopups();
			break;
	}
}


////////////////////////////////////////
//
//        EVENT DETECTION FUNCTIONS
//
////////////////////////////////////////

function detectedResize (){
	if (visiblePopupName) {
		var popupObj = getID(visiblePopupName);
		
		if (popupObj.style.display == "block"){
			adjustPopup(popupObj, selectedCellObj);
		}
	}			
}

function detectTableKeys (evt) {

	if (!selectedTableObj) {return;}

	evt = getEvent(evt);
	var characterCode = (evt && evt.which) ? evt.which : event.keyCode;
	var modifiers = getEventModifiers(evt);
	if (!characterCode) { return; }
	
	switch (characterCode) {
		case 9:
			if (modifiers && modifiers['shift']) { detectedTab(true); } else { detectedTab(); }
			break;
		case 13:
			if (modifiers && modifiers['alt']) { detectedEnter(true); } else { detectedEnter(); }
			break;
		case 27:
			detectedESC();
			break;
		case 37:
			if (browserID == "safari"){	setEventNum();} // Safari fires arrow key events twice
			detectedLeftArrow();
			break;
		case 38:
			if (browserID == "safari"){	setEventNum();} // Safari fires arrow key events twice
			detectedUpArrow();
			break;
		case 39:
			if (browserID == "safari"){	setEventNum();} // Safari fires arrow key events twice
			detectedRightArrow();
			break;
		case 40:
			if (browserID == "safari"){	setEventNum();} // Safari fires arrow key events twice
			detectedDownArrow();
			break;
		default:
			break;
	}
}

//Function is tuned into the structure of the popup div/div/textarea
function detectedEnter(bool_alt) {
	if (visiblePopupName) {
		var obj = getID(visiblePopupName);
		
		if (obj.style.display == "block"){
			commitText(obj, true);
		} else {
			if(selectedCellPopupType != "no_popup") { callPopup(); }
		}
	} else {
		if(selectedCellPopupType != "no_popup") { callPopup(); }
	}
}

function detectedESC() {
	var obj = getID(visiblePopupName);
	displayNone(obj);	
}

function detectedTab(bool_shift) {
	if (visiblePopupName) {
		var obj = getID(visiblePopupName);
		
		if (obj.style.display && obj.style.display == "block"){
			commitText(obj);
		}
	}  
	//Tab around table
	
	var cells = document.getElementsByTagName("TD");
	if (selectedCellObj) {
		for (var i=0; i< cells.length; i++) {
			if (cells[i] === selectedCellObj) {
				// If shift was down, go backwards
				if (bool_shift) {
					var resultHandle = getMatch(cells[i - 1].className, "handle");
					var resultNon = getMatch(cells[i - 1].className, "noneditable");
					if (i > 0) {
						if (resultHandle == "handle" || resultNon == "noneditable"){
							var num = findActiveCell((i - 1), cells, "backward");
							selectCell(cells[num]);
						} else {
							selectCell(cells[i - 1]);
						}
					} else {
						selectCell(cells[cells.length - 1]);
					}
				// Otherwise forwards
				} else {
					var resultHandle = getMatch(cells[i + 1].className, "handle");
					var resultNon = getMatch(cells[i + 1].className, "noneditable");
					
					if (i < cells.length - 1) {
						if (resultHandle == "handle" || resultNon == "noneditable"){
							var num = findActiveCell((i + 1), cells, "forward");
							selectCell(cells[num]);
						} else {
							selectCell(cells[i + 1]);
						}
					} else {
						selectCell(cells[0]);
					}					
				}
				selectedCellObj.focus();
				return;
			}
		}
	} else {
		// First press of tab, since nothing is chosen
		selectCell(cells[0]);
		selectedCellObj.focus();
		return;
	}

}


function detectedLeftArrow(){
	if (visiblePopupName){
		var obj = getID(visiblePopupName);
		
		if (obj.style.display != "block"){ 
			if (selectedCellObj && (eventNum%2 == 0)) {
				var cells      = getAllCellsFromCell(selectedCellObj);
				
				for (var i=0; i < cells.length; i++) {
					if ((selectedCellObj === cells[i]) && (i > 0)) {
						if (cells[i - 1].className == "handle"){
							selectCell(cells[i - 2]);
						} else {
							selectCell(cells[i - 1]);
						}
						selectedCellObj.focus();
						return;
					}
				}
				
			}
		} else if (obj.style.display == "block"){ return; }
	} else if (selectedCellObj && (eventNum%2 == 0)) {
		var cells      = getAllCellsFromCell(selectedCellObj);
		
		for (var i=0; i < cells.length; i++) {
			if ((selectedCellObj === cells[i]) && (i > 0)) {
				if (cells[i - 1].className == "handle"){
					selectCell(cells[i - 2]);
				} else {
					selectCell(cells[i - 1]);
				}
				selectedCellObj.focus();
				return;
			}
		}
	}
}

function detectedRightArrow() { 
	if (visiblePopupName){
		var obj = getID(visiblePopupName);
		
		if (obj.style.display != "block"){ 
			if (selectedCellObj && (eventNum%2 == 0)) {
				var cells      = getAllCellsFromCell(selectedCellObj);
				
				for (var i=0; i< cells.length; i++) {
					if ((selectedCellObj === cells[i]) && (i < cells.length - 1)) {
						if (cells[i + 1].className == "handle"){
							selectCell(cells[i + 2]);
						} else {
							selectCell(cells[i + 1]);
						}
						selectedCellObj.focus();
						return;
					}
				}
			}
		} else if (obj.style.display == "block"){ return; }
	} else  if (selectedCellObj && (eventNum%2 == 0)) {
		var cells      = getAllCellsFromCell(selectedCellObj);
		
		for (var i=0; i< cells.length; i++) {
			if ((selectedCellObj === cells[i]) && (i < cells.length - 1)) {
				if (cells[i + 1].className == "handle"){
						selectCell(cells[i + 2]);
					} else {
						selectCell(cells[i + 1]);
					}
				selectedCellObj.focus();
				return;
			}
		}
	}
}

function detectedUpArrow() { 
	if (visiblePopupName){
		var obj = getID(visiblePopupName);
		
		if (obj.style.display != "block") {
			if (selectedCellObj && (eventNum%2 == 0)) {
				var parent_row = getParentRowFromCell(selectedCellObj);
				var rows       = getSiblingRowsFromRow(parent_row);
				var cells      = getSiblingCellsFromCell(selectedCellObj);
				
				for (var i=0; i< rows.length; i++) {
					if ((parent_row === rows[i]) && (i > 0)) {
						var offset = getCellOffset(selectedCellObj, cells);
						var next_row_cells = getChildCellsFromRow(rows[i-1]);
						selectCell(next_row_cells[offset]);
						selectedCellObj.focus();
						return;
					}
				}
			}
		} else if (obj.style.display == "block"){ 
			switch (obj.id) {
				case "popup_units":
					var listDiv = getID('list_weights');
					var listItems = new Array();
					listItems = listDiv.getElementsByTagName("LI");
					
					if (listItemSelected){
						for (var i = 0; i < listItems.length; i++){
							if (listItemSelected === listItems[i]){
								if (i == 0){
									unhighlightListItem(listItemSelected);
									highlightListItem(listItems[listItems.length - 1]);
									return;
								} else {
									unhighlightListItem(listItemSelected);
									highlightListItem(listItems[i - 1]);
									return;
								}
							}
						}
					} else {
						highlightListItem(listItems[0]);
					}
					break;
				default:
					break;
			}
		}
	} else  if (selectedCellObj && (eventNum%2 == 0)) {
		var parent_row = getParentRowFromCell(selectedCellObj);
		var rows       = getSiblingRowsFromRow(parent_row);
		var cells      = getSiblingCellsFromCell(selectedCellObj);
		
		for (var i=0; i< rows.length; i++) {
			if ((parent_row === rows[i]) && (i > 0)) {
				var offset = getCellOffset(selectedCellObj, cells);
				var next_row_cells = getChildCellsFromRow(rows[i-1]);
				selectCell(next_row_cells[offset]);
				selectedCellObj.focus();
				return;
			}
		}
	}
}

function detectedDownArrow(){ 
	if (visiblePopupName){
		var obj = getID(visiblePopupName);
		
		if (obj.style.display != "block") {
			if (selectedCellObj && (eventNum%2 == 0)) {
				var parent_row = getParentRowFromCell(selectedCellObj);
				var rows       = getSiblingRowsFromRow(parent_row);
				var cells      = getSiblingCellsFromCell(selectedCellObj);
				
				for (var i=0; i< rows.length; i++) {
					if ((parent_row === rows[i]) && (i < rows.length - 1)) {
						var offset = getCellOffset(selectedCellObj, cells);
						var next_row_cells = getChildCellsFromRow(rows[i+1]);
						selectCell(next_row_cells[offset]);
						selectedCellObj.focus();
						return;
					}
				}
			}
		} else if (obj.style.display == "block"){ 
			switch (obj.id) {
				case "popup_units":
					var listDiv = getID('list_weights');
					var listItems = new Array();
					listItems = listDiv.getElementsByTagName("LI");
					
					if (listItemSelected){
						for (var i = 0; i < listItems.length; i++){
							if (listItemSelected === listItems[i]){
								if (i == listItems.length - 1){
									unhighlightListItem(listItemSelected);
									highlightListItem(listItems[0]);
									return;
								} else {
									unhighlightListItem(listItemSelected);
									highlightListItem(listItems[i + 1]);
									return;
								}
							}
						}
					} else {
						highlightListItem(listItems[0]);
					}
					break;
				default:
					break;
			}
		}
	} else if (selectedCellObj && (eventNum%2 == 0)) {
		var parent_row = getParentRowFromCell(selectedCellObj);
		var rows       = getSiblingRowsFromRow(parent_row);
		var cells      = getSiblingCellsFromCell(selectedCellObj);
		
		for (var i=0; i< rows.length; i++) {
			if ((parent_row === rows[i]) && (i < rows.length - 1)) {
				var offset = getCellOffset(selectedCellObj, cells);
				var next_row_cells = getChildCellsFromRow(rows[i+1]);
				selectCell(next_row_cells[offset]);
				selectedCellObj.focus();
				return;
			}
		}
	}
}

//Function only serves to measure the number of times Safari has fired an event
function setEventNum(){
	eventNum = eventNum + 1;	
}


////////////////////////////////////////
//
//        GET FUNCTIONS
//
////////////////////////////////////////

function getID(elemName) {
	return (document.getElementById(elemName));
}

function getText(obj) {	
	return (obj.innerHTML); 
}

function getParentTableFromRow(row) {
    return row.parentNode;
}

function getParentRowFromCell(cell) {
	return cell.parentNode;
}

function getChildFromCell(cell) {
	return cell.firstChild;
}

function getSiblingRowsFromRow(row) {
	var table_parent = row.parentNode;
	return table_parent.getElementsByTagName("TR");
}

function getAllCellsFromCell(cell) {
	var row_parent = getParentRowFromCell(cell);
	var table_parent = getParentTableFromRow(row_parent);
	return table_parent.getElementsByTagName("TD");
}

function getSiblingCellsFromCell(cell) {
	var row_parent = getParentRowFromCell(cell);
	return row_parent.getElementsByTagName("TD");
}

function getChildCellsFromRow(row) {
	return row.getElementsByTagName("TD");
}

function getCellOffset(tgt_cell, cell_list) {
	for (var i=0; i< cell_list.length; i++) {
		if (cell_list[i] === tgt_cell) {
			return i;
		}
	}
	return 0;
}

function getMatch(str, searchvalue){
	var result = str.match(searchvalue);
	return result;
}


/* Need cross browser grabbing of event */
function getEvent(evt) {
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	return (evt);
}

function getEventModifiers(evt) {
	var modifier_list = {
		'shift': false,
		'ctrl': false,
		'alt': false
	}
	
	if (evt.modifiers && Event && Event.SHIFT_MASK) {
		modifier_list['shift'] = true;
	} else if (evt.shiftKey && evt.shiftKey == true) {
		modifier_list['shift'] = true;
	}

	if (evt.modifiers && Event && Event.CTRL_MASK) {
		modifier_list['ctrl'] = true;
	} else if (evt.ctrlKey && evt.ctrlKey == true) {
		modifier_list['ctrl'] = true;
	}
	
	if (evt.modifiers && Event && Event.ALT_MASK) {
		modifier_list['alt'] = true;
	} else if (evt.altKey && evt.altKey == true) {
		modifier_list['alt'] = true;
	}
	
	
	return modifier_list;
}

////////////////////////////////////////
//
//        CREATE DOM ELEM FUNCTIONS
//
////////////////////////////////////////
function createElem(elem_type) {
	var elem = document.createElement(elem_type);
	return elem;
}

function createInput(input_type) {
	var elem = createElem("input");
	elem.type = input_type;
	return elem;
}

function createText(str) {
	var text = document.createTextNode(str);
	return text;
}

function clearObj(obj) {
	while (obj.firstChild) {
		obj.removeChild(obj.firstChild);
	}
}

/* Extend array to make your life easier */
Array.prototype.inArray = function (value) {
	for (var i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

////////////////////////////////////////
//
//        CALENDAR FUNCTIONS
//
////////////////////////////////////////

function getListItemParent (listItem) {
	return listItem.parentNode;
}

function getListParent (list){
	return list.parentNode;
}

function getHTML (obj) {
	return obj.innerHTML;
}

// MM/DD/YYYY format
function highlightDate (dateText, cdObj) {

	highlightTimeElems(dateText);
	
	var day = dateText.charAt(3);
	
	if (day == 0){ day = dateText.charAt(4); } 
	else {day = day + dateText.charAt(4); }
	
	var calendarDays = getID(cdObj);
	var allDays = calendarDays.getElementsByTagName("li");
	
	for (var i=0; i< allDays.length; i++) {
		if (allDays[i].className == "selected"){
				allDays[i].className = "";
			}
		
		var selectedDay = cleanDay(allDays[i].innerHTML);
		if (selectedDay == day) {
			if (allDays[i].className == ""){
				allDays[i].className = "selected";
			}
		}
	}
}

function highlightTimeElems(dateText){
	if (visiblePopupName == 'popup_calendar_time12'){
		var dateTextArr = dateText.split(" ");
		
		var hourInput = getID('hour12');
		var minuteInput = getID('minutes12');
		
		var timeArr = dateTextArr[1].split(":");
		
		hourInput.value = timeArr[0];
		switch (timeArr[1]) {
			case "00":
			case "15":
			case "30":
			case "45":
				minuteInput.value = timeArr[1];
				break;
			default:
				minuteInput.value = "00";
				break;
		}
			
		var meridiemList = getID('meridiemList');
		meridiemList.value = dateTextArr[2];
	} else if (visiblePopupName == 'popup_calendar_time24'){
		var dateTextArr = dateText.split(" ");
		
		var hourInput = getID('hour24');
		var minuteInput = getID('minutes24');
		
		var timeArr = dateTextArr[1].split(":");
		
		hourInput.value = timeArr[0];
		//alert(hourInput);
		//alert(timeArr[0]);
		//alert(hourInput.value);
		switch (timeArr[1]) {
			case "00":
			case "15":
			case "30":
			case "45":
				minuteInput.value = timeArr[1];
				break;
			default:
				minuteInput.value = "00";
				break;
		}
	}
}

function selectDate(dateObj){
	var day = getHTML(dateObj);
	var ul_parent = getListItemParent(dateObj);
	var div_parent = getListParent(ul_parent);
	
	if (dateObj.className == ""){
		var listItems = div_parent.getElementsByTagName("li");
		for (var i=0; i< listItems.length; i++) {
			if (listItems[i].className == "selected"){
				listItems[i].className = "";
			}
		}
		dateObj.className = "selected";
		updateDate(day);
	}
}

function commitDate(dateObj){
	var day = getHTML(dateObj);
	var ul_parent = getListItemParent(dateObj);
	var div_parent = getListParent(ul_parent);
	
	if (dateObj.className == ""){
		var listItems = div_parent.getElementsByTagName("li");
		for (var i=0; i< listItems.length; i++) {
			if (listItems[i].className == "selected"){
				listItems[i].className = "";
			}
		}
		dateObj.className = "selected";
		updateDate(day);
	}
	
	if (visiblePopupName) {
		var popupObj = getID(visiblePopupName);
		
		if (popupObj.style.display == "block"){
			detectedEnter();
		}
	}
}

function cleanDay(day) {
	if (browserID == "explorer"){
		if(day.length == 2) {
			day = day.substring(0,1);
		} else if (day.length == 3) {
			day = day.substring(0,2);
		}
	}
	return day;
}

function updateDate(day) {
	day = cleanDay(day);
	
	if( day.length == 1) {
		day = "0" + day;
	}

	
	if (visiblePopupName == 'popup_calendar_basic'){
		var currentDate = currentTextbox.value;
		var month = currentDate.substring(0,2);
		var year = currentDate.substring(6,8);
		
		var newDate = month + "/" + day + "/" + year;
		
		currentTextbox.value = newDate;
		selectedDivObj.innerHTML = newDate;
		
	} else if (visiblePopupName == 'popup_calendar_time12'){
		var currentDate = currentTextbox.value;
		
		var currentDateArr = currentDate.split(" ");
		
		var month = currentDateArr[0].substring(0,2);
		var year = currentDateArr[0].substring(6,8);
		
		var newDate = month + "/" + day + "/" + year;
		
		currentTextbox.value = newDate + " " + currentDateArr[1] + " " + currentDateArr[2];
		selectedDivObj.innerHTML = newDate + " " + currentDateArr[1] + " " + currentDateArr[2];
	} else if (visiblePopupName == 'popup_calendar_time24'){
		var currentDate = currentTextbox.value;
		
		var currentDateArr = currentDate.split(" ");
		
		var month = currentDateArr[0].substring(0,2);
		var year = currentDateArr[0].substring(6,8);
		
		var newDate = month + "/" + day + "/" + year;
		
		currentTextbox.value = newDate + " " + currentDateArr[1];
		selectedDivObj.innerHTML = newDate + " " + currentDateArr[1];
	}
}

function updateTime(time){
	var currentDate = currentTextbox.value;
	var currentDateArr = currentDate.split(" ");
	
	if (visiblePopupName == 'popup_calendar_time12'){
		currentTextbox.value = currentDateArr[0] + " " + time + " " + currentDateArr[2];
		selectedDivObj.innerHTML = currentDateArr[0] + " " + time + " " + currentDateArr[2];
	} else if (visiblePopupName == 'popup_calendar_time24'){
		currentTextbox.value = currentDateArr[0] + " " + time;
		selectedDivObj.innerHTML = currentDateArr[0] + " " + time;
	}
}

function updateHour(hourObj){
	var currentDate = currentTextbox.value;
	var currentDateArr = currentDate.split(" ");
	var timeArr = currentDateArr[1].split(":");
	
	var selectedNum = hourObj.selectedIndex;
	timeArr[0] = hourObj.options[selectedNum].value;
	
	if (visiblePopupName == 'popup_calendar_time12'){
		currentTextbox.value = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1] + " " + currentDateArr[2];
		selectedDivObj.innerHTML = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1] + " " + currentDateArr[2];
	} else if (visiblePopupName == 'popup_calendar_time24'){
		currentTextbox.value = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1];
		selectedDivObj.innerHTML = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1];
	}
}

function updateMinutes(minutesObj){
	var currentDate = currentTextbox.value;
	var currentDateArr = currentDate.split(" ");
	var timeArr = currentDateArr[1].split(":");
	
	var selectedNum = minutesObj.selectedIndex;
	timeArr[1] = minutesObj.options[selectedNum].value;
	
	if (visiblePopupName == 'popup_calendar_time12'){
		currentTextbox.value = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1] + " " + currentDateArr[2];
		selectedDivObj.innerHTML = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1] + " " + currentDateArr[2];
	} else if (visiblePopupName == 'popup_calendar_time24'){
		currentTextbox.value = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1];
		selectedDivObj.innerHTML = currentDateArr[0] + " " + timeArr[0] + ":" + timeArr[1];
	}
}


function updateMeridiem(meridiem){
	var currentDate = currentTextbox.value;
	var currentDateArr = currentDate.split(" ");
	
	currentTextbox.value = currentDateArr[0] + " " + currentDateArr[1] + " " + meridiem;
	selectedDivObj.innerHTML = currentDateArr[0] + " " + currentDateArr[1] + " " + meridiem;
}




////////////////////////////////////////
//
//        TABLE SCROLLING FUNCTIONS
//
////////////////////////////////////////
function doHeader(src_div, tgt_table) {
	var sDiv = src_div;
	var tTable = document.getElementById(tgt_table);
	
	tTable.style.left = (-1 * (sDiv.scrollLeft)) + "px";
	
}

function adjustForScroll(scrollbarObj){
	if (visiblePopupName){
		var obj = getID(visiblePopupName);
		
			var objLeftPx = origX;
			var objTopPx = origY;
			
			var objLeftArr = new Array();
			objLeftArr = objLeftPx.split("px");
			
			var objTopArr = new Array();
			objTopArr = objTopPx.split("px");
			
			var objLeft = parseInt(objLeftArr[0]);
			var objTop = parseInt(objTopArr[0]);
			
			obj.style.left = (objLeft - scrollbarObj.scrollLeft) + "px";
			obj.style.top = (objTop - scrollbarObj.scrollTop) + "px";

	}
}


////////////////////////////////////////
//
//        LIST FUNCTIONS
//
////////////////////////////////////////

function highlightListItem(obj){
	obj.style.backgroundColor = "#dde9ff";
	listItemSelected = obj;
}

function unhighlightListItem(obj) {
	obj.style.backgroundColor = "#fff";
}

function displayList(posObj, list, moveLeft){
	var listElem = getID(list);
	var posCoordinates = findPos(posObj);
	
	listElem.style.top = (posCoordinates['y'] + 22 ) + "px";
	listElem.style.left = (posCoordinates['x'] - moveLeft) + "px";
	displayBlock(listElem);
}

function replaceWeight(newWeight) {
	var currentText = currentTextbox.value;
	var currentTextArr = currentText.split(" ");
	
	if (newWeight == 'array'){
		for (var i = 0; i < listItemWeights.length; i++){
			if (listItemSelected == listItemWeights[i][0]){
				putWeight = listItemWeights[i][1];
				currentTextArr[1] = putWeight;
				selectedDivObj.innerHTML = currentTextArr[0] + " " + currentTextArr[1];
				hideAllPopups();
				return;
			}
			
		}
		
	} else {
		currentTextArr[1] = newWeight;
		selectedDivObj.innerHTML = currentTextArr[0] + " " + currentTextArr[1];
	}
	
	hideAllPopups();
}

function getMeasurements(objID){
	var obj = getID(objID);
	var listItems = new Array();
	listItems = obj.getElementsByTagName("LI");
	
	for (var i = 0; i < listItems.length; i++){
		listItemWeights[i] = [listItems[i], listItems[i].className];
	}
	
}