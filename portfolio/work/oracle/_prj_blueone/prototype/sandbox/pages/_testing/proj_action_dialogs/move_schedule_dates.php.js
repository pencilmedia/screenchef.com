// JavaScript Document
function Init()
{
	$('#radio_00, #radio_01, #radio_02, #radio_03').bind('click', radioHandler);
	$('#radio_00').click();
}

function radioHandler()
{
	var radioIndex = -1;
	if (!this.id) return;
	radioIndex = parseInt(this.id.substring(this.id.indexOf("_")+1));	
	if (radioIndex<0) return;
	
	$('#form1 input[@type=text]').each (
						function(i){ 
								this.disabled = (i==radioIndex) ? false: true;
								this.value = (i==radioIndex) ? this.value: "";
								if (i==radioIndex) this.focus(); 
								});
	$('#form1 a').each (
						function(i){ 
							if (i==radioIndex) $('#'+this.id).removeClass('disabled');
							else if (radioIndex > 1) $('#'+this.id).addClass('disabled'); 
							else $('#'+this.id).addClass('disabled');
						});
	
}

$(document).ready(Init);