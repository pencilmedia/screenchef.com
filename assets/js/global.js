$(document).ready(function() {
	
	// EXTERNAL LINK - Open external links in new window.
	$('a[href^=http]').click( function() {
		//Not this domain - open link in window
		if (this.href.indexOf('screenchef.com') < 0) {
			window.open(this.href);
			return false;
		}
	});
	//EXTERNAL LINK - Open link in window overrid
	if ( $('a.ext_override') ) {
		
		$('a.ext_override').click( function() {
			window.open(this.href);
			return false;
		});
	}
	

});// End

