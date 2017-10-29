var highZ = 3;

function $(target) { return document.getElementById(target); }

function init()
{
	var searchFld 			= $("search");
	var btnClose 			= $("close");
	var rsltList			= $("results");
	var multi_select_form 	= $('multi_select_form');
	var resizeButton 		= $('resizeButton');

	searchFld.onkeyup = doChange;
	btnClose.onclick = doClose;
	rsltList.onclick = doRsltClick;

	xMoveTo(multi_select_form, 0, 0);
	drawForm();
	xEnableDrag('handlebar', handlebarOnDragStart, handlebarOnDrag, null);
	xEnableDrag(resizeButton, resizeButtonOnResizeStart, resizeButtonOnResize, null);
	xShow(multi_select_form);
	document.form1.search.focus();
	loadItemList();

}
function doRsltClick()
{
	alert(this.value);
}

function loadItemList()
{
	resultsArray = new Array(
							 "Aquarius",
							 "BlueOne: Clean-up and Productivity phases of KonaBlue",
							 "Aries",
							 "Cancer",
							 "Capricorn",
							 "Gemini",
							 "KonaBlue: Redesign",
							 "Leo",
							 "Libra",
							 "Pisces",
							 "Sagittarius",
							 "Scorpio: New Reports Framework",
							 "Taurus: Refactoring",
							 "Virgo"
							)

	var rslt = $('results_list');
	for (var i = 0;i<resultsArray.length;i++)
	{
		rslt.innerHTML += "<li>" + resultsArray[i] + "</li>";
	}
}

function drawForm()
{
	var multi_select_form = $('multi_select_form');
	var rBtn = $('resizeButton');
	var rslt = $('results');
	var x = $("results");
	x.style.height = xHeight(multi_select_form) - 82 + "px";
}

function handlebarOnDragStart(ele, mx, my)
{
	xZIndex('multi_select_form', highZ++);
}

function handlebarOnDrag(ele, mdx, mdy)
{
	xMoveTo('multi_select_form', xLeft('multi_select_form') + mdx, xTop('multi_select_form') + mdy);
}

function resizeButtonOnResizeStart(ele, mx, my)
{
	xZIndex('multi_select_form', highZ++);
}

function resizeButtonOnResize(ele, mdx, mdy)
{
	xResizeTo('multi_select_form', xWidth('multi_select_form') + mdx, xHeight('multi_select_form') + mdy);
	drawForm();
}

function search_action() { $("results_content").style.display = ''; }

function doOpen()
{
	xShow("multi_select_form");
	document.form1.search.focus();
}
function doClose()
{
	$("search").val = '';
	xHide("multi_select_form");
}

function doChange(event) 
{
	//var e = event || window.event;
	//alert (e.keyCode);
	var query = this.value.toLowerCase();
	var resultsList = $("results");
	var items = resultsList.getElementsByTagName("li");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var str = item.innerHTML.toLowerCase();
		var match = (str.indexOf(query) != -1);
		item.style.display = match? "" : "none";
	}
} 

