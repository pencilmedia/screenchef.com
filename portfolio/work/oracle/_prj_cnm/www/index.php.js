(function() {
    var Dom = YAHOO.util.Dom, Event = YAHOO.util.Event;

	Event.onDOMReady(function(){
		var page = 'cnm.php';
		var w = 1024;
		var h = 768;
		var window_name = 'cnm';
		var status = 0;
		var toolbar = 0;
		var resizable = 1;
		var scrollbars = 0;
		window.open(page, window_name, 'status=' + status + ',toolbar=' + toolbar + ',resizable=' + resizable + ', width=' + w + ', height=' + h + ', scrollbars=' + scrollbars);
	});
})();