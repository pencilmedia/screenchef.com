registerNS('agile.ux.demo.lj3bom');
agile.ux.demo.lj3bom =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.demo.lj3bom.wireEvents();
	},
	wireEvents: function()
	{
		agile.ux.demo.lj3bom.loadMenus();
	},
	loadMenus: function(p_oEvent) 
	{
		    
        function determineChecked(p_sType, p_aArguments, p_oMenuItem) {
            
            if (this.cfg.getProperty("checked") == true) {
            	this.cfg.setProperty("checked", false);
            } else {
            	this.cfg.setProperty("checked", true);
            }
        
        }

		var siteMenu = 
		[

			[
				{ text: "All", url: "" },
				{ text: "San Jose", url: "" },
				{ text: "Beijing", url: "" },
				{ text: "Guadalaraja", url: "" },
				{ text: "Sao Paulo", url: "" }
			]
		];  
		
		var revisionMenu = 
		[

			[
				{ text: "Inventory", url: "" }
			]
		]; 


	var agileMenu0 = new YAHOO.widget.Menu("agilemenu0", { constraintoviewport:false, zindex: 1000, hidedelay:400 });
	agileMenu0.clearContent(); //clears data from memory 
	agileMenu0.addItems(siteMenu);
	agileMenu0.render(document.body);
	agileMenu0.cfg.setProperty("context", ["cmdSiteMenu", "tl","bl"]);
	
	var agileMenu1 = new YAHOO.widget.Menu("agilemenu1", { constraintoviewport:false, zindex: 1000, hidedelay:400 });
	agileMenu1.clearContent(); //clears data from memory 
	agileMenu1.addItems(revisionMenu);
	agileMenu1.render(document.body);
	agileMenu1.cfg.setProperty("context", ["cmdRevisionMenu", "tl","bl"]);

	function toggleSiteMenu(p_oEvent) {
		agileMenu1.hide();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		agileMenu0.align("tl", "bl"); //this function MUST be used with the context property
		agileMenu0.show();
	}
	function toggleRevisionMenu(p_oEvent) {
		agileMenu0.hide();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		agileMenu1.align("tl", "bl"); //this function MUST be used with the context property
		agileMenu1.show();
	}	
	YAHOO.util.Event.addListener("cmdSiteMenu", "mousedown", toggleSiteMenu);
	YAHOO.util.Event.addListener("cmdRevisionMenu", "mousedown", toggleRevisionMenu);
	}
}