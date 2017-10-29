import mx.managers.PopUpManager;
import popups.contacts.contactPopup;
import popups.contacts.groupPopup;
import popups.contacts.memberPopup;
import mx.controls.Alert;

// POPUP CONTACT
public var contactPop:contactPopup;

public function popContact():void
{
	contactPop = new contactPopup();
	PopUpManager.addPopUp(contactPop, this, false);
	contactPop.x = 510;
	contactPop.y = 115;
}

private function closePopContact():void
{
	PopUpManager.removePopUp(parentApplication.quotePage.qd1.contactPop);
}

// POPUP GROUP
public var groupPop:groupPopup;

public function popGroup():void
{
	groupPop = new groupPopup();
	
	PopUpManager.addPopUp(groupPop, this, false);
	groupPop.x = 660;
	groupPop.y = 140;
}

// POPUP GROUP MEMBER
public var memberPop:memberPopup;

public function popGroupContact():void
{
	memberPop = new memberPopup();
	PopUpManager.addPopUp(memberPop, this, false);
	memberPop.x = 335;
	memberPop.y = 160;
}