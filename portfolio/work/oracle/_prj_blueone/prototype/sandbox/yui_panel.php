<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Layout inside a resizable Panel</title>
<style type="text/css">
/*margin and padding on body element
  can introduce errors in determining
  element position and are not recommended;
  we turn them off as a foundation for YUI
  CSS treatments. */
body
{
	margin:0;
	padding:0;
}
#palette .yui-resize-handle-br 
{
    height: 11px;
    width: 11px;
    background-position: -20px -60px;
    background-color: transparent;
}

.yui-skin-sam .yui-panel .hd 
{
	text-align: left;
}

.yui-layout-bd.yui-layout-bd-nohd.yui-layout-bd-noft
{
	background-color: #fff;
}

</style>
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.2/build/reset-fonts-grids/reset-fonts-grids.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.2/build/container/assets/skins/sam/container.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.2/build/resize/assets/skins/sam/resize.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.2/build/layout/assets/skins/sam/layout.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.2/build/button/assets/skins/sam/button.css" />
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/yahoo/yahoo-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/event/event-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/dom/dom-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/element/element-beta-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/dragdrop/dragdrop-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/container/container-min.js"></script>
<script src="http://yui.yahooapis.com/2.6.0/build/animation/animation-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/resize/resize-beta-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/layout/layout-beta-min.js"></script>
</head>
<body class="yui-skin-sam">
<div id="top1"><p>Anthony.</p></div>
<div id="bottom1"><p>bottom.</p></div>
<div id="right1">
    <b>Right 1</b>
</div>
<div id="left1">
    <p>Left.</p>
</div>
<div id="center1">
    <p id="toggle"><a href="#" id="tRight">Toggle Right</a><a href="#" id="tLeft">Toggle Left</a><a href="#" id="closeLeft">Close Left</a><a href="#" id="padRight">Add Gutter to Right</a></p>
    <p>Center.</p>
</div>


<script>

(function() {
    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event;

    Event.onDOMReady(function() {
        var layout = new YAHOO.widget.Layout({
            units: [
                { position: 'top', height: 50, body: 'top1', header: 'Top', gutter: '5px', collapse: false, resize: false },
                { position: 'right', header: 'Right', width: 300, resize: true, gutter: '0px 5px', footer: 'Footer', collapse: true, scroll: true, body: 'right1', animate: true },
                { position: 'bottom', header: 'Bottom', height: 100, resize: false, body: 'bottom1', gutter: '5px', collapse: false },
                { position: 'left', header: 'Left', width: 200, resize: true, body: 'left1', gutter: '0 5px', collapse: true, close: true, collapseSize: 50, scroll: true, animate: true },
                { position: 'center', body: 'center1' }
            ]
        });
        layout.on('render', function() {
            layout.getUnitByPosition('left').on('close', function() {
                closeLeft();
            });
        });
        layout.render();
        Event.on('tLeft', 'click', function(ev) {
            Event.stopEvent(ev);
            layout.getUnitByPosition('left').toggle();
        });
        Event.on('tRight', 'click', function(ev) {
            Event.stopEvent(ev);
            layout.getUnitByPosition('right').toggle();
        });
        Event.on('padRight', 'click', function(ev) {
            Event.stopEvent(ev);
            var pad = prompt('CSS gutter to apply: ("2px" or "2px 4px" or any combination of the 4 sides)', layout.getUnitByPosition('right').get('gutter'));
            layout.getUnitByPosition('right').set('gutter', pad);
        });
        var closeLeft = function() {
            var a = document.createElement('a');
            a.href = '#';
            a.innerHTML = 'Add Left Unit';
            Dom.get('closeLeft').parentNode.appendChild(a);

            Dom.setStyle('tLeft', 'display', 'none');
            Dom.setStyle('closeLeft', 'display', 'none');
            Event.on(a, 'click', function(ev) {
                Event.stopEvent(ev);
                Dom.setStyle('tLeft', 'display', 'inline');
                Dom.setStyle('closeLeft', 'display', 'inline');
                a.parentNode.removeChild(a);
                layout.addUnit(layout.get('units')[3]);
                layout.getUnitByPosition('left').on('close', function() {
                    closeLeft();
                });
            });
        };
        Event.on('closeLeft', 'click', function(ev) {
            Event.stopEvent(ev);
            layout.getUnitByPosition('left').close();
        });
    });


})();
</script>


<div id="palette"></div>

<script>
    
    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event,
        layout = null,
        resize = null;

    Event.onDOMReady(hgo)
	
	function hgo() {
	return false;
        // Setup constants

		// QUIRKS FLAG, FOR BOX MODEL
		var IE_QUIRKS = (YAHOO.env.ua.ie && document.compatMode == "BackCompat");

		// UNDERLAY/IFRAME SYNC REQUIRED
		var IE_SYNC = (YAHOO.env.ua.ie == 6 || (YAHOO.env.ua.ie == 7 && IE_QUIRKS));

		// PADDING USED FOR BODY ELEMENT (Hardcoded for example)
		var PANEL_BODY_PADDING = (10*2) // 10px top/bottom padding applied to Panel body element. The top/bottom border width is 0
    
        var panel = new YAHOO.widget.Panel('palette', {
            draggable: true,
            close: true,
            underlay: 'false',
            width: '500px',
            xy: [100, 100],
			constraintoviewport: true,
			fixedcenter: true
        });
        panel.setHeader('Palette');
        panel.setBody('<div id="layout"></div>');
        panel.beforeRenderEvent.subscribe(function() {
            Event.onAvailable('layout', function() {
                layout = new YAHOO.widget.Layout('layout', {
                    height: 250,
                    width: 480,
                    units: [
                        { position: 'top', height: 25, resize: false, body: '', gutter: '2' },
                        { position: 'left', width: 100, resize: true, body: '', gutter: '0 5 0 2', minWidth: 100, maxWidth: 300 },
                        { position: 'bottom', height: 25, body: '', gutter: '2' },
                        { position: 'center', body: '', gutter: '0 2 0 0' }
                    ]
                });

                layout.render();
            });
        });
        panel.render();
        resize = new YAHOO.util.Resize('palette', {
            handles: ['br'],
            autoRatio: true,
            status: true,
            minWidth: 380,
            minHeight: 250
        });
        resize.on('resize', function(args) {
            var panelHeight = args.height;
			var headerHeight = this.header.offsetHeight; // Content + Padding + Border
			var bodyHeight = (panelHeight - headerHeight);
			var bodyContentHeight = (IE_QUIRKS) ? bodyHeight : bodyHeight - PANEL_BODY_PADDING;

			YAHOO.util.Dom.setStyle(this.body, 'height', bodyContentHeight + 'px');

			if (IE_SYNC) {

				// Keep the underlay and iframe size in sync.

				// You could also set the width property, to achieve the 
				// same results, if you wanted to keep the panel's internal
				// width property in sync with the DOM width. 

				this.sizeUnderlay();

				// Syncing the iframe can be expensive. Disable iframe if you
				// don't need it.

				this.syncIframe();
			}

            layout.set('height', bodyContentHeight);
            layout.set('width', (args.width - PANEL_BODY_PADDING));
            layout.resize();
            
        }, panel, true);
		
		}
		
</script>

</body>
</html>