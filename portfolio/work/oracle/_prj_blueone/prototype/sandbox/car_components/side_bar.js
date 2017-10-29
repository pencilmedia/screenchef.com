AgileUXSidebar = function()
{
	this.__init__();
};

AgileUXSidebar.prototype =
{
	_domTool = null,
	_nav: null,
	_collapsedPane: null,
	_splitbar: null,
	_mainPane: null,
	_isCollapsed: null,
	_isClosed: null,

	__init__: function()
	{
		this._domTool = YAHOO.util.Dom;
		this._nav = $('nav');
		this._collapsedPane = $('collapsedPane');
		this._splitbar = $('splitbar');
		this._mainPane = $('MainPane');
		this._isCollapsed = false;
		this._isClosed = false;
	},

	getNavWidth: function() 
	{
		if ( this._isCollapsed )
		{
			return parseInt(this._domTool.getStyle(this._collapsedPane, 'width'));
		} else {
			return parseInt(this._domTool.getStyle('nav','width')) + parseInt(this._domTool.getStyle(this._splitbar, 'width'));
		}
	},
	
	resizeContainers: function()
	{

		var windowWidth = this._domTool.getViewportWidth();
		var windowHeight = this._domTool.getViewportHeight();
		var navWidth = this.getNavWidth();
		
		var mainPaneWidth = windowWidth;
		if ( !location.href.indexOf('pop=1') >= 0 ){
			// Regular window
			mainPaneWidth -= navWidth;
		}
		mainPaneWidth += "px";

		this._domTool.setStyle(this._mainPane, 'width', mainPaneWidth);


		
		var obj = document.getElementById('PaneContent');
        var rightContentHeight = getOffsetTop(obj);
			
		var topPaneHeight = parseInt(this._domTool.getStyle('TopPane','height'));
		headerHeight  = rightContentHeight - topPaneHeight ;

		var paneContentHeight = (windowHeight - topPaneHeight - headerHeight) + 'px';
		this._domTool.setStyle('PaneContent', 'height', paneContentHeight );
		
		
		// TODO: Replace with jQuery metrics
		// TEMPORARY: NEED TO FIGURE OUT WHY MS EXPLORER shoots out NaN for below....
		if (navigator.appName=="Microsoft Internet Explorer") {
			return false 
		} else {
			//calculate height of splitter panes by subtracting from the Object Pane from Content Pane
			var objPaneHeight = parseInt(this._domTool.getStyle('PaneContent', 'height'));
			var objTopPaneHeight = parseInt(this._domTool.getStyle('ObjectPane', 'height'));
			var objBottomPane = (objPaneHeight - objTopPaneHeight) - 10 + "px"; //subtract 3 for the preview bar splitter bar height
			this._domTool.setStyle('PreviewPane', 'height', objBottomPane );	
		
		}

	},
	build: function(args)
	{
	},
	collapse: function()
	{
		this._domTool.setStyle( this._nav, 'display', 'none' );
		this._domTool.setStyle( this._collapsedPane, 'display', 'block' );
		this._domTool.setStyle( this._splitbar, 'display', 'none' );
		this._domTool.setStyle( this._mainPane, 'margin-left', '8px' );
		this._isCollapsed = true;
		this.resizeContainers();
	},
	expand: function()
	{
		this._domTool.setStyle( this._nav, 'display', 'block' );
		this._domTool.setStyle( this._collapsedPane, 'display', 'none' );
		this._domTool.setStyle( this._splitbar, 'display', 'block' );
		this._domTool.setStyle( this._mainPane, 'margin-left', '' );
		this._isCollapsed = false;
		this.resizeContainers();
	},
	close: function()
	{
		this._domTool.setStyle( this._nav, 'display', 'none' );
		this._domTool.setStyle( this._collapsedPane, 'display', 'none' );
		this._domTool.setStyle( this._splitbar, 'display', 'none' );
		this._isClosed = true;
		this.resizeContainers();
	},
	open: function()
	{
		this._domTool.setStyle( this._nav, 'display', 'block' );
		this._domTool.setStyle( this._collapsedPane, 'display', 'none' );
		this._domTool.setStyle( this._splitbar, 'display', 'block' );
		this._isClosed = false;
		this.resizeContainers();
	}
};

agile.ux.sidebar = 
{
	resizeContainers: function()
	{
		
	},
	build: function(args)
	{
		this.container = $(args['sliderMenuId']);
		this.container.style.overflow = "hidden";
		this.animating = false;
		this.headerCount = 0;
		this.items = this._domTool.getElementsByClassName("slideMenuItem", "div", this.container);
		var iCount = 0;
	
		for (var i = 0; i < this.items.length; i++)
		{
			this.items[i].header = this._domTool.getElementsByClassName("slideMenuHeader", "div", this.items[i])[0];
			iCount += (this.headerCount + this.items[i].header.offsetHeight);
		}
		
		// This calculates the height for everything above the accordion
		// Include all here
		this.headerCount = iCount + $('LeftPaneTop').offsetHeight + $('LeftPaneButtons').offsetHeight;
		
		
		for (var i = 0; i < this.items.length; i++)
		{
			this.items[i].parent = this;
			this.items[i].header = this._domTool.getElementsByClassName("slideMenuHeader", "div", this.items[i])[0];
			this.items[i].body = this._domTool.getElementsByClassName("slideMenuBody", "div", this.items[i])[0];
			this.items[i].body.style.overflow = "auto";
			var headerCount;
	
			if ( this.items[i].body.offsetHeight > 0 )
			{
				
				this.activeItem = this.items[i];
				var h = this._domTool.getClientHeight() - this.headerCount;
				this.activeItem.body.style.height = h + "px";
				this.shrinkAtts = {height:{from:h, to:0}};
				this.expandAtts = {height:{from:0, to:h}};
			}
	
			YAHOO.util.Event.addListener(this.items[i].header, "click", function()
			{
				// Clicked on the header of the active item
				// Disregard if disabled
				
				var slideMenuArr = this.getElementsByTagName("DIV");
				var selectedHeaderClass = slideMenuArr[0].className;
				if (selectedHeaderClass.match(" disabled") != null || selectedHeaderClass.match(" selected") != null){
					return;
				}
	
				// Don't respond if we're already in a transition
				if (!this.parent.animating)
				{
					this.parent.animating = true;
					var shrink = new YAHOO.util.Anim(this.parent.activeItem.body, this.parent.shrinkAtts, .1, YAHOO.util.Easing.easeNone);
					var expand = new YAHOO.util.Anim(this.body, this.parent.expandAtts, .1, YAHOO.util.Easing.easeNone);
					expand.onComplete.subscribe(function()
					{
						this.parent.activeItem = this;
						this.parent.animating = false;
					}, this, true);
					shrink.animate(), expand.animate();
					
					//Remove old selected
					var menuDiv = document.getElementById("slideMenu");
					var divArr = menuDiv.getElementsByTagName("DIV");
					
					var tempClass;
					var headerArr = new Array;
					var j = 0;
					for (var i = 0; i< divArr.length; i++){
						tempClass = divArr[i].className;
						if (tempClass.match("slideMenuHeader") != null){
							headerArr[j] = divArr[i];
							j++;
						}
					}
					
					var headerClass;
					for (var i = 0; i< headerArr.length; i++){
						headerClass = headerArr[i].className;
						if (headerClass.match(" selected") != null){
							headerArr[i].className = "slideMenuHeader";
						}
					}
					
					//Assign new selected
					var slideMenuArr = this.getElementsByTagName("DIV");
					var selectedHeaderClass = slideMenuArr[0].className;
					if (selectedHeaderClass.match(" selected") == null && selectedHeaderClass.match(" disabled") == null){
						slideMenuArr[0].className = "slideMenuHeader selected";
					}
					
				}
			}, this.items[i], true);
		}
	},

	


};