 /* ===================================================
  * helpers.js - Helper JS
  * =================================================== */

  var helpers = {};

  helpers = {
  	init: function() {
  		helpers.getTheYear();
  		helpers.getYearsExperience();
  		helpers.link_control();
  	},
  	getTheYear: function() {
  		today = new Date();
		thisYear = today.getFullYear();
		$("[data-id='getTheYear']").text(thisYear);
  	},
  	getYearsExperience: function() {
		today.setFullYear(1999);
		startYear = today.getFullYear();
		yearsExperience = thisYear - startYear;
		$("[data-id='yearsExperience']").text(yearsExperience);
  	},
  	link_control: function() {
  	// EXTERNAL LINK - Open external links in new window.
		$('a[href^=http]').on("click", function() {
			//Not this domain - open link in window
			if (this.href.indexOf('screenchef.com') < 0) {
				window.open(this.href);
				return false;
			}
		});
	//EXTERNAL LINK - Cancel openning in new window
		if ( $('a.ext_override') ) {
			
			$('a.ext_override').on("click", function() {
				window.open(this.href);
				return false;
			});
		}
  	}
  }
  $(helpers.init);
