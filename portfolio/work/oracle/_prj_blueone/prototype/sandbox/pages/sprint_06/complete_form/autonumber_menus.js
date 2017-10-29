loadAutoNumberMenu = function(p_oEvent) {
        function determineChecked(p_sType, p_aArguments, p_oMenuItem) {
            if (this.cfg.getProperty("checked") == true) {
            	this.cfg.setProperty("checked", false);
            } else {
            	this.cfg.setProperty("checked", true);
            }
        }
		var agileMenu0Items = [
			[
				{ text: "Artwork/Labeling", url: "javascript:increment('ui_control_id3');" },
				{ text: "Broker Number", url: "javascript:increment('ui_control_id3');" },
				{ text: "Part Number", url: "javascript:increment('ui_control_id3');" }				
			]
		];  
		var agileMenu1Items = [
			[
				{ text: "Artwork/Labeling", url: "javascript:increment('ui_control_id4');" },
				{ text: "Broker Number", url: "javascript:increment('ui_control_id4');" },
				{ text: "Part Number", url: "javascript:increment('ui_control_id4');" }	
			]
		];  
	var agileMenu0 = new YAHOO.widget.Menu("autonumber_menu3", { constraintoviewport:false, zindex: 1000, hidedelay:200 });
		agileMenu0.clearContent(); //clears data from memory 
		agileMenu0.addItems(agileMenu0Items);
		agileMenu0.render(document.body);
		agileMenu0.cfg.setProperty("context", ["an_menu_3", "tl","bl"]);
		
	var agileMenu1 = new YAHOO.widget.Menu("autonumber_menu4", { constraintoviewport:false, zindex: 1000, hidedelay:200 });
		agileMenu1.clearContent(); //clears data from memory 
		agileMenu1.addItems(agileMenu1Items);
		agileMenu1.render(document.body);
		agileMenu1.cfg.setProperty("context", ["an_menu_4", "tl","bl"]);
		
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
	YAHOO.util.Event.addListener("an_menu_3", "mousedown", toggleMenu0);
	YAHOO.util.Event.addListener("an_menu_4", "mousedown", toggleMenu1);
	
}
//YAHOO.util.Event.addListener(window, "load", loadAttachmentsMenu);

