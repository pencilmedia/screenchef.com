function registerNS(ns) { var nsParts = ns.split("."); var root = window; for(var i=0; i<nsParts.length; i++) { if(typeof root[nsParts[i]] == "undefined") root[nsParts[i]] = new Object(); root = root[nsParts[i]]; } }
registerNS('agile.ux');
agile.ux.utilities =
{
	registerNamespace: function(ns) { registerNS(ns); },
	target: function(e)
	{
		e = e || window.event;
		return( e.target || e.srcElement );
	},
	disableSelection: function(el)
	{
		el = document.getElementById(el)
    	el.onselectstart = function()
		{
        	return false;
    	};
    	el.unselectable = "on";
    	el.style.MozUserSelect = "none";
    	el.style.cursor = "default";
	}
}