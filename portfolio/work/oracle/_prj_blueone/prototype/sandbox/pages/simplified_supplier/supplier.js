//	***********************************************************
//		UX JS ONLY - THESE SCRIPTS NOT MEANT FOR PRODUCTION
//	***********************************************************

var ui_supplier = {};

ui_supplier = 
{
	init : function()
	{
		navOpt = jQuery('.slideMenuBody ul li');
		
		ui_supplier.nav();
		jQuery('#hmpgnav').show();
		jQuery('#gennav').hide();
		jQuery('#decnav').hide();
		jQuery('body').addClass('supplier_home');
	},
	hmpg : function()
	{  
		jQuery('#hmpgnav').show();
		jQuery('#gennav').hide();
		jQuery('#decnav').hide();
		navOpt.removeClass("selected"); 
		jQuery('.slideMenuBody ul li:first-child').addClass("selected");
		jQuery('body').addClass('supplier_home');
	},
	cover : function()
	{
		jQuery('#hmpgnav').hide();
		jQuery('#gennav').show();
		jQuery('#decnav').hide();
		navOpt.removeClass("selected"); 
		jQuery('.slideMenuBody ul li:first-child').addClass("selected");
		jQuery('.slideMenuBody ul ul li:first-child').removeClass("selected"); //Removes class from first child of nested ul
		jQuery('body').removeClass('supplier_home');
	},
	declare : function()
	{
		jQuery('#hmpgnav').hide();
		jQuery('#gennav').hide();
		jQuery('#decnav').show();
		navOpt.removeClass("selected"); 
		jQuery('.slideMenuBody ul li:first-child').addClass("selected");
		jQuery('.slideMenuBody ul ul li:first-child').removeClass("selected"); //Removes class from first child of nested ul
		jQuery('.slideMenuBody ul:last-child li:first-child').removeClass("selected"); 
		jQuery('body').addClass('supplier_home');
	},
	nav : function()
	{
		navOpt.mousedown( function() { navOpt.removeClass("selected"); jQuery(this).addClass("selected"); } );
	}
}

jQuery(document).ready(ui_supplier.init);


////////////////////////////////////////
//        JUNK SCRIPTS
////////////////////////////////////////

agile.ux.sidebar =
{
	resizeContainers: function()
	{
		//DO NOTHING: DUMMY SCRIPT BECAUSE SHARING SCRIPTS FROM CONCEPT CAR, BUT ALL CAR SCRIPTS NOT NEEDED FOR THIS
	}
}
