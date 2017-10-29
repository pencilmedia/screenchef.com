function homeClickEvent(event:MouseEvent):void
{
	// test function - Alert.show('sss');
	
	if (home.visible == false) {
		home.visible = true;
		home.percentHeight=100;
	} 
	if (searchResults.visible) { // for search results to appear
		searchResults.visible = false;
		searchResults.percentHeight=0;
		home.visible = true;
		home.percentHeight=100;
	}
	
}
                                                                                                               
function searchClickEvent(event:MouseEvent):void
{

	home.visible = false; 
	home.height = 0;
	searchResults.visible = true;
	searchResults.percentHeight=100;

}

function testMe():void 
{
	Alert.show("Home Quote Clicked");
}
