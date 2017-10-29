loadAttachmentsMenu = function(p_oEvent) {
    
        function determineChecked(p_sType, p_aArguments, p_oMenuItem) {
            
            if (this.cfg.getProperty("checked") == true) {
            	this.cfg.setProperty("checked", false);
            } else {
            	this.cfg.setProperty("checked", true);
            }
        
        }

		var agileMenu0Items = [

			[
			 	{ text: "View Versions", url: "" },
			],
			[
				{ text: "View", url: "" },
				{ text: "Cross Probe", url: "" },
				{ text: "Compare", url: "" },
				{ text: "Overlay", url: "" },
				{ text: "Digital Mockup", url: "" }
			]

		];  
		
		var agileMenu1Items = [

			[
				{ text: "Get", url: "" },
				{ text: "Print", url: "" }
			],
			[
				{ text: "Undo", helptext:"Ctrl+E", url: "" },
				{ text: "Redo", helptext:"Ctrl+E", url: "" },
				{ text: "Fill Up", helptext:"Ctrl+E", url: "" },
				{ text: "Fill Down", helptext:"Ctrl+E", url: "" }
			],
			[
				{ text: "Show/Hide Columns", submenu: { id: "showhidecolumns", itemdata: [ 
					{ text: "Menu Action Item", helptext:"Ctrl+E", url: "" },
					{ text: "Menu Action Item", url: "" }
				] } },
				{ text: "Lock/Unlock Columns", helptext:"Ctrl+E", url: "" }
			]

		];  

	var agileMenu0 = new YAHOO.widget.Menu("agilemenu0", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	agileMenu0.clearContent(); //clears data from memory 
	agileMenu0.addItems(agileMenu0Items);
	agileMenu0.render(document.body);
	agileMenu0.cfg.setProperty("context", ["toggle_menu_0", "tl","bl"]);
	
	var agileMenu1 = new YAHOO.widget.Menu("agilemenu1", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	agileMenu1.clearContent(); //clears data from memory 
	agileMenu1.addItems(agileMenu1Items);
	agileMenu1.render(document.body);
	agileMenu1.cfg.setProperty("context", ["toggle_menu_1", "tl","bl"]);
	
	function toggleMenu0(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		agileMenu0.align("tl", "bl"); //this function MUST be used with the context property
		agileMenu0.show();
	}
	
	function toggleMenu1(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		agileMenu1.align("tl", "bl"); //this function MUST be used with the context property
		agileMenu1.show();
	}

	YAHOO.util.Event.addListener("toggle_menu_0", "mousedown", toggleMenu0);
	YAHOO.util.Event.addListener("toggle_menu_1", "mousedown", toggleMenu1);
	
}

//YAHOO.util.Event.addListener(window, "load", loadAttachmentsMenu);

