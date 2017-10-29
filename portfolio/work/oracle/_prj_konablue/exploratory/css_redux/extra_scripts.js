var res = eval("document." + "MainForm");
var doYesProcessed;
function yesProceed(){
	setWarningCodes();
	if (eval(res.stepCommand)) {
		eval(res.stepCommand).value = "null";
	}
	if (eval(res.deleteRowsTableId)) {
		eval(res.deleteRowsTableId).value = "null";
	}
	disableButtons();
	submitForm(document.forms[0].name,"ActivityHandler","displayObject", "_self");
}
function disableButtons() {}
function noProceed() {
	setRepWarningCodes()
	if (eval(res.stepCommand)) {
		eval(res.stepCommand).value = "null";
		submitForm(document.forms[0].name,"ActivityHandler","displayObject", "_self");
	}
}
function noNext() {
	clearWarningCodes("null");
}
function setWarningCodes() {
	res.pgWarnID.value = "null";
	res.pgWarnCode.value = "null";
	res.commonWarnCode.value = "null";
}
function setRepWarningCodes() {
	res.pgWarnID.value = "null";
	res.pgWarnCode.value = "null";
}
function clearWarningCodes(wCode) {
	if (wCode != null && wCode.length > 0) {
		var allCodeIds = "null";
		var allCodes = "null";
		var arrCodeIds = allCodeIds.split(";")
		var arrCodes = allCodes.split(";")
		var rCodeIds = "";
		var rCodes = "";
		for (var i=0; i<arrCodes.length; i++ ) {
			if(wCode == arrCodes[i]) {
				continue;
			}
			rCodeIds = arrCodeIds[i] +";"+rCodeIds;
			rCodes = arrCodes[i] +";"+rCodes;
		}
		res.pgWarnID.value = rCodeIds;
		res.pgWarnCode.value = rCodes;
	} else {
		res.pgWarnID.value = "";
		res.pgWarnCode.value = "";
		res.commonWarnCode.value = "";
	}
}
function cancelWarning() {
	clearWarningCodes();
	submitForm('MainForm', '', '', '_self');
}
var maxAvailWidth = screen.availWidth * 90 / 100;
function setPosition(id) {
	var _systemEvent = null;
	if (navigator.appName == 'Netscape') {
		_systemEvent = e;
	} else {
		_systemEvent = event;
	}
	alert('id = '+_systemEvent.clientX);
}
function expandRow(formName, tableId, rowId, expand) {
	setExpanded('MainForm', tableId, rowId, expand);
	document.MainForm.submit();
}
function modifyTeam(oper) {
	var args = "&MODIFY_TEAM_OPERATION="+oper;
	openDialogWindow('MainForm', 'ActivityHandler', 'modifyTeam', '_New', 600, 750, true, 'no', args);
}
function showEditDependency() {
	openDialogWindow('', 'ActivityHandler', 'editDependencies', 'popupWindow', 500, maxAvailWidth, 'true', 'no');
}
function showDisplayOrder() {
	openDialogWindow('', 'ActivityHandler', 'editDisplayOrder', 'popupWindow', 500, maxAvailWidth, 'true', 'no');
}
function showReshedule() {
	openDialogWindow('', 'ActivityHandler', 'editResechedule', 'popupWindow', 400, 500, 'true', 'no');
}
function showAddTeam() {
	openDialogWindow('', 'ActivityHandler', 'addTeam', 'popupWindow', 400, 600, 'true', 'no');
}
function showRemoveTeam() {
	openDialogWindow('', 'ActivityHandler', 'removeTeam', 'popupWindow', 400, 600, 'true', 'no');
}
function showCreateBaseLine() {
	openDialogWindow('', 'ActivityHandler', 'createBaseLine', 'popupWindow', 350, 600, 'true', 'no');
}
function removeBaseLine() {
	document.MainForm.SchedulerRev.value = '-1';
	submitForm('', 'ActivityHandler', 'removeBaseLine', '_self', '', '', 'true');
}
function deleteSchedule() {
	var confirmDelete = confirm(localMsg.confirmActivityDeletion);
	if(confirmDelete) {
		submitForm('', 'ActivityHandler', 'deleteScheduleRows', '_self', '', '', 'true');
	}
}
function expandActivity(tableId) {
	var rowmap = getRowMap(tableId);
	var ctr = 0;
	var selectedRowId = 0;
	var index = 0;
	for(i=1; i<rowmap.length;i++) {
		if (rowmap[i].isSelected) {
			rowmap[i].isExpanded=true;
		}
	}
	setTreeRowInfo('MainForm', tableId);
	submitForm('', 'ActivityHandler', 'expandActivity', '_self', '', '', 'true');
}