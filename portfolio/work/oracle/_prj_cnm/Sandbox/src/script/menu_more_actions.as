
 // Save Requirment Popup
import mx.managers.PopUpManager;
import popups.actions.saveRequirementPopup;
import popups.actions.importPopup;
import popups.actions.exportPopup;
   import popups.actions.viewHistoryPopup;
   import popups.actions.whereUsedPopup;

public var saveRequirementPop:saveRequirementPopup;
public function saveAsAction():void
{
	saveRequirementPop = new saveRequirementPopup();
	PopUpManager.addPopUp(saveRequirementPop, this, false);
	saveRequirementPop.x = 300;
	saveRequirementPop.y = 100;
}
public var importPop:importPopup;
public function importAction():void
{
	importPop = new importPopup();
	PopUpManager.addPopUp(importPop, this, false);
	importPop.x = 300;
	importPop.y = 100;
}
public var exportPop:exportPopup;
public function exportAction():void
{
	exportPop = new exportPopup();
	PopUpManager.addPopUp(exportPop, this, false);
	exportPop.x = 300;
	exportPop.y = 100;
}
public var historyPop:viewHistoryPopup;
public function viewHistoryAction():void
{
	historyPop = new viewHistoryPopup();
	PopUpManager.addPopUp(historyPop, this, false);
	historyPop.x = 300;
	historyPop.y = 100;
}
public var whereUsedPop:whereUsedPopup;
public function whereUsedAction():void
{
	whereUsedPop = new whereUsedPopup();
	PopUpManager.addPopUp(whereUsedPop, this, false);
	whereUsedPop.x = 300;
	whereUsedPop.y = 100;
}

// MORE ACTIONS DROPDOWN MENU
import mx.controls.Menu;
import mx.events.MenuEvent;   
import flash.geom.Point;

private var point1:Point = new Point();
private var myMenu:Menu;
   
// Create and display the Menu control.
private function moreActions():void {
    myMenu= Menu.createMenu(moreActionsBtn, createNewMenu, false);
    myMenu.labelField="@label"
    myMenu.addEventListener("itemClick", menuClickHandler);
    
    // Calculate position of Menu in Application's coordinates. 
    point1.x = moreActionsBtn.x;
    point1.y = moreActionsBtn.y;                
    //point1 = createNew.localToGlobal(point1);

    myMenu.show(point1.x + 430, point1.y + 115);
}

  import mx.events.MenuEvent;

  private function menuClickHandler(event:MenuEvent):void {
   switch (event.label) {
    case "Import":
    	importAction();
     break;
    case "Export":
    	exportAction();
     break;
    case "View History":
    	viewHistoryAction();
     break;
    case "Save As":
    	saveAsAction();
     break;
    case "Where Used":
    	whereUsedAction();
     break;
   }
  }
  
  
  
  	
//MORE ACTIONS MENU ITEMS - XML  
import mx.collections.XMLListCollection;

[Bindable]
public var createNewMenu:XML =
<root>
    <menuitem label="Save As" />
    <menuitem label="Import" />
    <menuitem label="Export" />
    <menuitem label="Where Used" />
    <menuitem label="View History" />
</root>;