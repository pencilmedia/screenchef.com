var ourData = ["Anthony Moquette",
			   	"Joel Nave",
				"Michele Yoshikawa",
				"Ralph Garcia",
				"Tiffany Altieri",
				"John Doe",
				"Jane Doe",
				"Cindy Lopez",
				"Juan Cortez",
				"Nike Shoop",
				"Jan Jan",
				"Mike Smith",
				"Jane Smith",
				"Liz Smith",
				"Cindy Smith",
				"Steven Smith",
				"Sori Smith",
				"Shane Smith",
				"Sonny Smith",
				"Susan Smith",
				"Suzanne Smith",
				"Same Smith"
				];

YAHOO.Floater = function() {
    var ds
    var objAutoComplete
    return {
        init: function() {
            // Instantiate first JS Array DataSource
            ds = new YAHOO.widget.DS_JSArray(ourData);
			YAHOO.util.Dom.get('ysearchinput').onkeyup = function(e)
			{
				if (window.event)
				{
					keycode = window.event.keyCode;
				} else {
					if (e)
					{
						keycode = e.which;
					}
				}
				
				
				if (keycode == 13)
				{
					if (YAHOO.util.Dom.get('ysearchinput').value)
					{	
						var listItemName = YAHOO.util.Dom.get('ysearchinput').value
						var results = YAHOO.util.Dom.get('results')
						var li = document.createElement("li");
						li.id = removeSpaces( listItemName );
						li.innerHTML = listItemName;
						li.innerHTML += '<a href=# class="delete_button" onclick=YAHOO.Floater.removeItem(\'' + removeSpaces( listItemName ) + '\')>x</a>';
						results.appendChild(li);
						YAHOO.util.Dom.get('ysearchinput').value='';
					}
					return false;
				}
			}
            // Instantiate first AutoComplete
            objAutoComplete = new YAHOO.widget.AutoComplete('ysearchsubmit','ysearchinput', ds);
            objAutoComplete.queryDelay = 0;
            objAutoComplete.typeAhead = true;
            objAutoComplete.useShadow = false;
			objAutoComplete.minQueryLength = 1;
        },
        removeItem: function(itemId)
		{
			var x = document.getElementById(itemId);
			x.parentNode.removeChild(x);
        },
		validateForm: function()
		{
			return false;
		}
    };
}();

function removeSpaces(string)
{
	var tstring = "";
	string = '' + string;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	tstring += splitstring[i];
	return tstring;
}

function qFocus() { $('ysearchinput').focus(); }

YAHOO.util.Event.addListener(this,'load',YAHOO.Floater.init);
YAHOO.util.Event.addListener('auto_complete_container','click',qFocus);