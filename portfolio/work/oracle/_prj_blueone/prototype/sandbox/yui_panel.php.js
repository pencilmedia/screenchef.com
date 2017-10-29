var Dom = YAHOO.util.Dom,
	Event = YAHOO.util.Event,
	layout = null,
	resize = null;

init();

function init() {
	// Setup constants

	// QUIRKS FLAG, FOR BOX MODEL
	var IE_QUIRKS = (YAHOO.env.ua.ie && document.compatMode == "BackCompat");

	// UNDERLAY/IFRAME SYNC REQUIRED
	var IE_SYNC = (YAHOO.env.ua.ie == 6 || (YAHOO.env.ua.ie == 7 && IE_QUIRKS));

	// PADDING USED FOR BODY ELEMENT (Hardcoded for example)
	var PANEL_BODY_PADDING = (10*2) // 10px top/bottom padding applied to Panel body element. The top/bottom border width is 0

	var panel = new YAHOO.widget.Panel('palette', {
		draggable: true,
		close: false,
		underlay: 'none',
		width: '500px',
		xy: [100, 100]
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
					//{ position: 'bottom', height: 25, body: '', gutter: '2' },
					{ position: 'center', body: '', gutter: '0 2 0 2' }
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
	
