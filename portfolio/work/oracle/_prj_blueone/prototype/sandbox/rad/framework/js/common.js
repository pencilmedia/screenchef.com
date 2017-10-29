//the main function, call to the effect object
function init()
{
	var toggles = document.getElementsByClassName('selector'); 		//What I click on
	var stretchers = document.getElementsByClassName('stretcher'); 	//div that stretches

	//accordion effect
	var myAccordion = new fx.Accordion( toggles, stretchers, {opacity: false, duration: 600} );

	//hash functions
	var found = false;
	toggles.each(function(h3, i)
	    {
		    var div = Element.find(h3, 'nextSibling'); //element.find is located in prototype.lite
		    if (window.location.href.indexOf(h3.title) > 0)
		    {
			    myAccordion.showThisHideOpen(div);
			    found = true;
		    }
	    }
    );
	if (!found) 
	{
	    myAccordion.showThisHideOpen(stretchers[0]);
	}
}

function this_card(id)
{
	el = $(id)
	el.className = "card selected";
}