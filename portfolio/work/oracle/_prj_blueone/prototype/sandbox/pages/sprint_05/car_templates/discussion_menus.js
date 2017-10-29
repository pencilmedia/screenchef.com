loadDiscussionActionItemsMenu = function(p_oEvent) {
	var agileMenuDiscussionItems = [
		[
			{ text: "Bookmark", url: "" },
			{ text: "Subscribe", url: "" }
		],
		[
			{ text: "Delete", url: "" }
		],
		[
			{ text: "Copy URL to Clipboard", url: "" },
			{ text: "Export", url: "" }
		],
		[
			{ text: "Print", url: "" },
			{ text: "Send", url: "" },
			{ text: "Sharing", url: "" }
		]
	];

	var agileMenuDiscussion = new YAHOO.widget.Menu("agileMenuDiscussion", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	agileMenuDiscussion.clearContent(); //clears data from memory 
	agileMenuDiscussion.addItems(agileMenuDiscussionItems);
	agileMenuDiscussion.render(document.body);
	agileMenuDiscussion.cfg.setProperty("context", ["toggle_discussion_menu", "tl","bl"]);
		
	function toggleMenuDiscussion(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		agileMenuDiscussion.align("tl", "bl"); //this function MUST be used with the context property
		agileMenuDiscussion.show();
	}
	
	YAHOO.util.Event.addListener("toggle_discussion_menu", "mousedown", toggleMenuDiscussion);	
}