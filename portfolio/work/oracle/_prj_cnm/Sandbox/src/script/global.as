// ActionScript file
	
import mx.controls.Alert;
import mx.events.ItemClickEvent;
import mx.controls.TabBar;
//import mx.containers.HDividedBox.quote;
/*
function barClickEvent(event:ItemClickEvent):void
{
	if (searchResults.visible) { // for search results to appear
		searchResults.visible = false;
		searchResults.percentHeight=0;
		mainNav.visible = true;
		mainNav.percentHeight=100;
		mainNav.selectedIndex = globalTabBar.selectedIndex;
	} else {
		mainNav.selectedIndex = globalTabBar.selectedIndex;
		if(globalTabBar.selectedIndex == 1) {
			//changeQuote();
		}
	}
}
*/
public function showInfo():void
{
	Alert.show("Name:" );
	//Alert.show("Name:" );
	//quote.visible = false;
	//quote.percentHeight=0;
}

public function changeQuote():void
{
	
			Alert.show("Name:" );
			currentState='quotepage';
		
}