/*DWPE_Initialize.js*/
//things we do at page startup
$(function(){	
				
				DWPE_ObjectFactory.processPage();
				
				//ensure that when window is resized, components interested in resize get the message
				$(window).resize(
					function(){
								DWPE_Utilities.triggerComponentResize();
								});
								
				//ensures the body is shown once the page loads				
				$('body').css('visibility','visible');				
});