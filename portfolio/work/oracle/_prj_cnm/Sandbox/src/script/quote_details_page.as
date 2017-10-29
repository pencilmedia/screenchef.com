// ActionScript file
import mx.controls.*;
import mx.containers.Panel;
import mx.events.DataGridEvent;
import mx.events.DataGridEventReason;
        
[Embed(source="../assets/images/icons/ico_expanded.png")] 
public var expandedImage:Class
[Embed(source="../assets/images/icons/ico_collapsed.png")] 
public var collapsedImage:Class
[Embed(source="../assets/images/icons/ico_edit.png")] 
public var editIconImage:Class

public function init():void
{      	
	text1.htmlText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus diam a magna. Aenean facilisis pede sed ipsum. Vivamus interdum.';
}

public function showMore():void
 {
 	
 	if (c1.visible)
 	{
 		c1.visible = false;
 		c1.includeInLayout = false;
 		showMoreDetails.label = "Show More Details";
 	} else {
 		c1.visible = true;
 		c1.includeInLayout = true;
 		showMoreDetails.label = "Hide Details";
 	}
 }

public function togglePanel1():void
 {
 	if (collapsePanel1Body.visible)
 	{
 		collapsePanel1Body.visible = false;
 		collapsePanel1Body.includeInLayout = false;
 		this.collapsePanel1Toggle.source = collapsedImage; 
 	} else {
 		collapsePanel1Body.visible = true;
 		collapsePanel1Body.includeInLayout = true;
 		this.collapsePanel1Toggle.source = expandedImage; 
 	}
 }

public function togglePanel2():void
 {
 	if (collapsePanel2Body.visible)
 	{
 		collapsePanel2Body.visible = false;
 		collapsePanel2Body.includeInLayout = false;
 		this.collapsePanel2Toggle.source = collapsedImage; 
 	} else {
 		collapsePanel2Body.visible = true;
 		collapsePanel2Body.includeInLayout = true;
 		this.collapsePanel2Toggle.source = expandedImage; 
 	}
 }

public function togglePanel3():void
 {
 	if (collapsePanel3Body.visible)
 	{
 		collapsePanel3Body.visible = false;
 		collapsePanel3Body.includeInLayout = false;
 		this.collapsePanel3Toggle.source = collapsedImage; 
 	} else {
 		collapsePanel3Body.visible = true;
 		collapsePanel3Body.includeInLayout = true;
 		this.collapsePanel3Toggle.source = expandedImage; 
 	}
 }

public function toggleComments():void
 {
 	if (collapseComments.visible)
 	{
 		collapseComments.visible = false;
 		collapseComments.includeInLayout = false;
 		showComments.label = "Show 2 Comments";
 	} else {
 		collapseComments.visible = true;
 		collapseComments.includeInLayout = true;
 		showComments.label = "Hide Comments";
 	}
 }
            
   // Define the event listener.
   public function processData(event:DataGridEvent):void 
{
    return;
}


 // ADD CONTACT (TEAM MEMBER)
import mx.managers.PopUpManager;
import popups.search.searchPopup;

public var searchPop:searchPopup;

public function addContact():void
{
	searchPop = new searchPopup();
	PopUpManager.addPopUp(searchPop, this, false);
	searchPop.x = 300;
	searchPop.y = 100;
}
public function closeSearchPopup():void
{
	PopUpManager.removePopUp(searchPop);
}



 // ADD NOTE
import mx.managers.PopUpManager;
import popups.notes.notesPopup;  
  
public var notesPop:notesPopup;
public function addNote():void
{
	notesPop = new notesPopup();
	PopUpManager.addPopUp(notesPop, this, false);
	notesPop.x = 300;
	notesPop.y = 100;
}
// POPUP ADD A COMMENT
import popups.comment.addCommentPopup;

public var addCommentPop:addCommentPopup;

public function popComment():void
{
	addCommentPop = new addCommentPopup();
	PopUpManager.addPopUp(addCommentPop, this, false);
	addCommentPop.x = 250;
	addCommentPop.y = 300;
}

// POPUP QUOTES
import mx.managers.PopUpManager;
import popups.quotes.quotePopup;

public var quotePop:quotePopup;

public function popQuote():void
{
	quotePop = new quotePopup();
	PopUpManager.addPopUp(quotePop, this, false);
	PopUpManager.centerPopUp(quotePop);
}
public function closePopQuote():void
{
	PopUpManager.removePopUp(quotePop);
}
public function editRequirements():void
{
	requirementText.editable = true;
	requirementText.setStyle('borderThickness','1');
}
public function clearRequirements():void
{
	requirementText.editable = false;
	requirementText.setStyle('borderThickness','0');
}










 // ADD ATTACHMENT & REFERENCE
import mx.managers.PopUpManager;
import popups.attachment.attachmentPopup;  
  
public var attachmentPop:attachmentPopup;
public function addAttachment():void
{
	attachmentPop = new attachmentPopup();
	PopUpManager.addPopUp(attachmentPop, this, false);
	attachmentPop.x = 300;
	attachmentPop.y = 100;
}
 // REMOVE ATTACHMENT & REFERENCE
import mx.managers.PopUpManager;
import popups.attachment.removeAttachmentPopup;  
  
public var removeAttachmentPop:removeAttachmentPopup;
public function removeAttachment():void
{
	removeAttachmentPop = new removeAttachmentPopup();
	PopUpManager.addPopUp(removeAttachmentPop, this, false);
	removeAttachmentPop.x = 300;
	removeAttachmentPop.y = 100;
}



import mx.controls.Menu;
import mx.events.MenuEvent;
import mx.controls.Alert;           
import flash.geom.Point;

public var pointOne:Point = new Point();
public var attachmentMenu:Menu;
   
// Create and display the Menu control.
public function showAttachmentsMenu():void {
    attachmentMenu = Menu.createMenu(attachmentDropdown, attachmentMenuData, false);
    attachmentMenu.labelField="@label"
    attachmentMenu.addEventListener("itemClick", attachmentMenuClickHandler);
    
    // Calculate position of Menu in Application's coordinates. 
    pointOne.x=attachmentMenuBtn.x;
    pointOne.y=attachmentMenuBtn.y;                
    pointOne=attachmentMenuBtn.localToGlobal(point1);

    attachmentMenu.show(pointOne.x - 75, pointOne.y + 10);
}
   
// Event handler for the Menu control's change event.
public function attachmentMenuClickHandler(event:MenuEvent):void {
   switch (event.label) {
    case "Add":
    	addAttachment();
     break;
    case "Remove":
    	removeAttachment();
     break;
   }
 }



