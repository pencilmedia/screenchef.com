
/* ORACLE CLOUD SITE CATALYST TRACKING FILE
   Create: Andrew Carr 2nd September 2011

Set up the site specific account and any pre / post plug-in functions */
function s_setAccount(){

/* Set the default values */
var sa=["oracledevall","cloud","en-us"]

/* Check to see if the site is STAGE or DEV or LOCAL - If YES then send data to the DEV reporting suite 
   Note: the PRODUCTION report suite (oraclecloud) will be created after testing has been completed ... */
   
sa[0] = (location.host.indexOf("apexcloud.us.oracle.com") != -1 || location.host.indexOf("localhost") != -1) ? "oracledevcloud" : "oraclecloud"
		
	return sa;
}   
