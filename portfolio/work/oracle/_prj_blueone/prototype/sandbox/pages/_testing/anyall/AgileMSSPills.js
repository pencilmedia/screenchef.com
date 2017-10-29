registerNS('agile.ux.mss.pills');
agile.ux.mss.pills =
{
	/////////////////////////////////////////////////////////////////////
	// ADDPILL
	/////////////////////////////////////////////////////////////////////
	add: function(item, id)
	{
		if ( agile.ux.mss.pills.isNewPill(id) )
		{
			var pillbox = $('mss_pillbox')
			var oID = id;
			var li = document.createElement("li");
			li.setSelected = agile.ux.mss.pills.setSelected;
			li.id = id;
			li.title = item;
			li.innerHTML = item;
			li.onclick = agile.ux.mss.pills.selectPill;
			var a = document.createElement("a");
			a.innerHTML = '<span>x</span>';
			a.href='#';
			a.onclick = function() { agile.ux.mss.pills.deletePill(id); };
			li.appendChild(a);
			pillbox.insertBefore(li, pillbox.firstChild);
			agile.ux.mss.pills.animatePill(id);
		}
	},
	/////////////////////////////////////////////////////////////////////
	// PILL ANIMATION
	/////////////////////////////////////////////////////////////////////
	animatePill: function(pillId)
	{
		var pill = jQuery('#'+pillId);
		pill.animate({ backgroundColor: '#dee7f8' }, 1000)
	},
	/////////////////////////////////////////////////////////////////////
	// SELECT PILL
	/////////////////////////////////////////////////////////////////////
	selectPill: function(e)
	{
		if (!e) var e = window.event;
		if (!e.ctrlKey) agile.ux.mss.pills.toggleAllPills(false);
		(this.className == 'selected') ? this.className = '' : this.className = 'selected';
		agile.ux.mss.pills.setFocus();
	},
	/////////////////////////////////////////////////////////////////////
	// TOGGLE ALL PILLS
	/////////////////////////////////////////////////////////////////////
	toggleAllPills: function(selectedStatus)
	{
		var itemsList = $('mss_pillbox');
		var items = itemsList.getElementsByTagName("li");	
		if (items[0])
		{
			if ( items[0].className == 'selected' ) selectedStatus = false;
		}
		for (var i = 0; i < items.length; i++)
		{
			items[i].setSelected(selectedStatus);
		}
	},
	/////////////////////////////////////////////////////////////////////
	//	DELETE PILL
	/////////////////////////////////////////////////////////////////////
	deletePill: function(id)
	{
		var container = document.getElementById(id).parentNode;
		var pill = document.getElementById(id);
		container.removeChild(pill);
	},
	/////////////////////////////////////////////////////////////////////
	//	DELETE MULTIPLE PILLS
	/////////////////////////////////////////////////////////////////////
	deleteMultiplePills: function(e)
	{
		var currentItem;
		var itemsList = $('mss_pillbox');
		var items = itemsList.getElementsByTagName("li");
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].className == 'selected')
			{
				agile.ux.mss.pills.deletePill($(items[i]).id);
				i -= 1 // correct array count since item removal.
			}
		}
	},	
	/////////////////////////////////////////////////////////////////////
	// SET SELECTED
	/////////////////////////////////////////////////////////////////////
	setSelected: function(selectedStatus)
	{
		this.selected = agile.ux.mss.pills.selected;
		this.className = selectedStatus ? 'selected' : '';
	},
	/////////////////////////////////////////////////////////////////////
	// PILL QUERY KEY HANDLER
	/////////////////////////////////////////////////////////////////////
	multiSelectKeyHandler: function(e)
	{
		if (!e) var e = window.event;
		switch(e.keyCode)
		{
			/////////////////////////////////////////////////////////////////////
			// CONTROL OR  APPLE + A
			/////////////////////////////////////////////////////////////////////
			case 65:	// control + A
			case 224:	// apple + A
			if ( e.ctrlKey ) { agile.ux.mss.pills.toggleAllPills(true); }
			agile.ux.mss.pills.cancelTextSelection();
			break;
			/////////////////////////////////////////////////////////////////////
			// ENTER KEY
			/////////////////////////////////////////////////////////////////////
			case 13:	
			break;
			/////////////////////////////////////////////////////////////////////
			// DELETE KEY
			/////////////////////////////////////////////////////////////////////
			case 46:
			agile.ux.mss.pills.deleteMultiplePills();
			break;
		}
		return false;
	},
	/////////////////////////////////////////////////////////////////////
	//	CANCEL TEXT SELECTION
	/////////////////////////////////////////////////////////////////////
	//	Removes hilight after selecting Control A.
	/////////////////////////////////////////////////////////////////////
	cancelTextSelection: function() 
	{
		if (document.selection) {
			document.selection.empty();
		} else {
			window.getSelection().collapseToStart();
		}
	},
	isNewPill : function(id)
	{
		var isNewItem = true;
		var items = $("mss_pillbox").getElementsByTagName("li");
		for (var i = 0; i < items.length; i++)
		{
			if ( items[i].id == id ) isNewItem = false;
		}
		return isNewItem;
	},
	setFocus: function()
	{
		uxDom.addClass($('mssContainer'),'focus_field');
	},
	removeFocus: function()
	{
		uxDom.removeClass($('mssContainer'),'focus_field');
	}	
}