var homepage = {};
homepage =
{
	init : function()
	{
		jQuery('#logo, #launch').click(homepage.launchCar);
		homepage.launchCar();
	},
	launchCar : function()
	{
		var page = 'car.php?page=pages/sprint_05/car_templates/obj_form.php';
		var w = 1024;
		var h = 768;
		var window_name = 'car';
		var status = 0;
		var toolbar = 0;
		var resizable = 1;
		var scrollbars = 0;
		window.open(page, window_name, 'status=' + status + ',toolbar=' + toolbar + ',resizable=' + resizable + ', width=' + w + ', height=' + h + ', scrollbars=' + scrollbars);
	}
}
jQuery(document).ready( homepage.init )