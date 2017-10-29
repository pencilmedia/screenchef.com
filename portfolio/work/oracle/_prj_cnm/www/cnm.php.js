(function() {
    var Dom = YAHOO.util.Dom, Event = YAHOO.util.Event;
	Event.onDOMReady(function(){
        var layout = new YAHOO.widget.Layout({
            units: [
                { 
					body: 'top1',
					position: 'top',
					height: 75,
					gutter: '0'
				},
                { 
					body: 'center1',
					position: 'center',
					gutter: '-1px -1px 0 -1px',
					scroll: false,
					minWidth:500
				},
                {
					body: 'left1',
					header: 'testing',
					position: 'left',
					width: 200,
					resize: true,
					gutter: '-2px 0 0 0',
					collapse: true,
					scroll: true,
					animate: false
				},
                { 
					body: 'right1', 
					header: '&nbsp;', 
					position: 'right', 
					width: 200, 
					resize: true, 
					gutter: '-2px 0 0 0', 
					collapse: true, 
					scroll: true, 
					animate: false
				}
            ]
        });
		

		Event.on('yui-gen7', 'click', function(ev) {
            Event.stopEvent(ev);
            layout.getUnitByPosition('left').toggle();
		});


		Event.on('yui-gen10', 'click', function(ev) {
            Event.stopEvent(ev);
            layout.getUnitByPosition('right').toggle();
		});
		
        layout.render();

		$('.tabs1 li a').click( tabs1ClickHandler );

	});
})();


function tabs1ClickHandler()
{
	$('.tabs1 li a').parent().removeClass('selected');
	$(this).parent().addClass('selected');
}