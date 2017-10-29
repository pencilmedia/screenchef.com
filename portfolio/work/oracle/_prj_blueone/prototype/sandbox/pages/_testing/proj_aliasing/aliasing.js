/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
var uxDom 		= YAHOO.util.Dom;
var	textboxId 	= 'textbox1';
agile.ux.aliasing =
{
	init: function()
	{
		agile.ux.aliasing.loadEvents();
	},
	loadEvents: function()
	{
		addEvent(textboxId,	'keyup', agile.ux.aliasing.textBoxKeyHandler);
		addEvent(textboxId, 'focus', agile.ux.aliasing.doTextBoxFocus);
		addEvent(textboxId, 'blur', agile.ux.aliasing.doTextBoxBlur);
		addEvent(textboxId, 'keydown', agile.ux.aliasing.pillKeyHandler);
		addEvent('pillbox', 'click', agile.ux.aliasing.doTextBoxFocus);
		addEvent('sss',	'keyup', agile.ux.aliasing.listContainerKeyUp);

	},
	addPill: function(item)
	{
		item = agile.ux.aliasing.trim(item);
		if (item.length < 1)
		{
			$(textboxId).value = '';
			return;
		}

		if ( agile.ux.aliasing.isNewPill(item) )
		{	
			var pillbox = $('pillbox')
			var li = document.createElement('li');
			li.id = item;
			li.innerHTML = item;
			li.setSelected = agile.ux.aliasing.setSelected;
			li.onclick = agile.ux.aliasing.pillonclick;

			var a = document.createElement('a');
			a.innerHTML = '<span>x</span>';
			a.href='#';
			a.onclick = function() { agile.ux.aliasing.deletePill(item); };
			li.appendChild(a);

			pillbox.insertBefore(li, pillbox.firstChild);
		}
		$(textboxId).value = '';
	},
	
	setSelected: function(selectedStatus)
	{
		this.className = selectedStatus ? 'selected' : '';
	},
	
	listContainerKeyUp: function(e)
	{
		e = e || window.event;
		switch(e.keyCode)
		{
			/////////////////////////////////////////////////////////////////////
			// DELETE KEY
			/////////////////////////////////////////////////////////////////////
			case 46:
				agile.ux.aliasing.removeSelectedTargetItems();
				break;
			/////////////////////////////////////////////////////////////////////
			// CTRL+A
			/////////////////////////////////////////////////////////////////////
			case 65:
				if ( e.ctrlKey )
				{
					agile.ux.aliasing.selectAllBullets(true); 
				}
				break;
		}

		// Let's stop propagation
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
		return false;
	},
	
	pillonclick: function(e)
	{
		e = e || window.event;
		if (!e.ctrlKey) agile.ux.aliasing.selectAllBullets(false);
		(this.className == 'selected') ? this.className = '' : this.className = 'selected';
		$('textbox1').focus();

		// Let's stop propagation
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
	},
	
	removeSelectedTargetItems: function(e)
	{
		var currentItem;
		var itemsList = $('pillbox');
		var items = itemsList.getElementsByTagName("li");
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].className == 'selected')
			{
				currentItem = $(items[i]).id.substring(3);
				if ( $(currentItem) ) $(currentItem).parentNode.style.display='';
				$(items[i]).parentNode.removeChild($(items[i]));
				i -= 1 // correct array count since item removal.
			}
		}
	},	
	
	selectAllBullets: function(selectedStatus)
	{
		var itemsList = $('pillbox');
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
	
	isNewPill : function(id)
	{
		var isNewItem = true;
		var items = $('pillbox').getElementsByTagName('li');
		for (var i = 0; i < items.length; i++)
		{
			if ( items[i].id == id ) isNewItem = false;
		}
		return isNewItem;
	},	
	deletePill: function(id)
	{
		var container = document.getElementById(id).parentNode;
		var pill = document.getElementById(id);
		container.removeChild(pill);
	},	
	textBoxKeyHandler: function(e)
	{
		e = e || window.event 
		switch(e.keyCode)
		{
			case 13: 
				var pills;
				if ( $(textboxId).value.length > 0)
				{
					pills = $(textboxId).value.split(';');
					for(i = 0; i < pills.length; i++)
					{
						agile.ux.aliasing.addPill( pills[i] );
					}
				}
				break;
		}
		return false;
	},
	doTextBoxFocus: function()
	{
		uxDom.addClass($('sss'),'focus_border');
		uxDom.addClass($('sss'),'focus_field');
		uxDom.addClass($('pill'),'selected');
		uxDom.removeClass($('sss'),'agile_border');
		uxDom.removeClass($('textbox1'),'focus_field');
	},
	doTextBoxBlur: function()
	{
		uxDom.removeClass($('sss'),'focus_field');
		uxDom.removeClass($('sss'),'focus_border');
		uxDom.removeClass($('pill'),'selected');
		uxDom.addClass($('sss'),'agile_border');
	},

	trim: function(sString) 
	{
		while (sString.substring(0,1) == ' ')
		{
			sString = sString.substring(1, sString.length);
		}
		while (sString.substring(sString.length-1, sString.length) == ' ')
		{
			sString = sString.substring(0,sString.length-1);
		}
		return sString;
	}
};

addEvent(window,'load',agile.ux.aliasing.init);