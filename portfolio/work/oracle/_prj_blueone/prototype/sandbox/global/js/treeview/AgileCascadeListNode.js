YAHOO.widget.AgileCascadeListNode = function(oData, oParent, expanded, hasIcon) {
    if (oData) { 
        this.init(oData, oParent, expanded);
        this.initContent(oData, hasIcon);
    }
};

YAHOO.extend(YAHOO.widget.AgileCascadeListNode, YAHOO.widget.Node, {
	/* ------------------------------------------------------------------------------------
		MEMBER VARIABLES
	------------------------------------------------------------------------------------ */
	/*
		Simply to clear the parent class
	*/
    contentStyle: "",
    content: null,

	/*
		ID of the toggle widget
	*/
	toggleElId: null,

	/*
		ID of the icon widget
	*/
	iconElId: null,

	/*
		ID of the content object
	*/
    contentElId: null,

	/*
		Selected state of node
	*/
	isSelected: false,

	/*
		This is internal data storage. You can set it up however you need, it's just
		a place to store the passed in data for shorter access.
		
		This will grow as complexity grows. 
		
		!!! NOTE: It should actually be dynamic if this node is used for other lists.
	*/
	_id: null,
	_title: null,



	/* ------------------------------------------------------------------------------------
		Fills out the node by setting internal members based on the data structure
		and calls the even handler init.
	------------------------------------------------------------------------------------ */
    initContent: function(oData, hasIcon) { 
        if (typeof oData == "string") {
            oData = { html: oData };
        }

		if (oData.id) {
			this._id = oData.id;
		}
		
		if (oData.title) {
			this._title = oData.title;
		}

		this._toolTip = oData.toolTip ? oData.toolTip : null;

        this.contentElId = "ygtvcontentel" + this.index;
		this.toggleElId  = "agileTreeNodeToggle" + this.index;
		this.iconElId    = "agileTreeNodeIcon" + this.index;
        this.hasIcon = hasIcon;
		this.initEventHandlers();
    },


	/* ------------------------------------------------------------------------------------
		Simply registers events with the tree.
	------------------------------------------------------------------------------------ */
	initEventHandlers: function() {		
		if (this.tree && !this.tree.hasEvent("labelClick")) {
			this.tree.createEvent("labelClick", this.tree);
		}
		
		if (this.tree && !this.tree.hasEvent("labelDoubleClick")) {
			this.tree.createEvent("labelDoubleClick", this.tree);
		}
		
		if (this.tree && !this.tree.hasEvent("enterKeyPressed")) {
			this.tree.createEvent("enterKeyPressed", this.tree);
		}
	},


	/* ------------------------------------------------------------------------------------
		Returns the outer html element for this node's content
	------------------------------------------------------------------------------------ */
    getContentEl: function() { 
        return document.getElementById(this.contentElId);
    },


	/* ------------------------------------------------------------------------------------
		Shortcut function for a commonly used bit of internal code
	------------------------------------------------------------------------------------ */
	getNodeString: function() {
		return ('YAHOO.widget.TreeView.getNode(\'' + this.tree.id + '\',' + this.index + ')');
	},
	

	/* ------------------------------------------------------------------------------------
		Main worker
		overrides YAHOO.widget.Node
	------------------------------------------------------------------------------------ */
    getNodeHtml: function() { 
        var sb = [];

        sb[sb.length] = '<div id="' + this.contentElId + '" class="agileTreeNode" style="padding-left:' + (this.depth * 18) + 'px;" ';
		
		sb[sb.length] = ' onclick="return ' + this.getNodeString() + '.onLabelClick(event, ' + this.getNodeString() + ');"';
	
		if (!this.hasChildren(true)) 
		sb[sb.length] = ' ondblclick="return ' + this.getNodeString() + '.onLabelDoubleClick(event, ' + this.getNodeString() + ');"';
		
		sb[sb.length] = '>';


        sb[sb.length] = this._genHTML();

        sb[sb.length] = '</div>';

        return sb.join("");
    },


	/* ------------------------------------------------------------------------------------
		Called by main html func, use this to dispatch different elements
	------------------------------------------------------------------------------------ */
	_genHTML: function() {
		htmlStr = "";
		htmlStr += this._genBaseHTML();
		return htmlStr;
	},


	/* ------------------------------------------------------------------------------------
		Generates the core node html
	------------------------------------------------------------------------------------ */
	_genBaseHTML: function() {
		var sb = [];
		

		sb[sb.length] = '<span';
		sb[sb.length] = ' id="' + this.toggleElId + '"';
        if (this.hasChildren(true) || (this.isDynamic() && !this.getIconMode())) {
			sb[sb.length] = ' onclick="javascript:' + this.getToggleLink() + ';"';
		}
		sb[sb.length] = ' class="' + this.getIconStyle() + '"';
		sb[sb.length] = ' >&nbsp;</span>';

		
		sb[sb.length] = '<span';
		sb[sb.length] = ' id="' + this.iconElId + '"';
		sb[sb.length] = ' class="' + this.getObjectIconStyle() + '"';
		sb[sb.length] = ' >&nbsp;</span>';
		
		
		sb[sb.length] = '<a href="#"';
		if (this._toolTip)
		{
			sb[sb.length] = ' title="' + this._toolTip + '"';
		}
		sb[sb.length] = ' id="agileTreeNodeLink' + this.index + '"';
		sb[sb.length] = ' ';
		sb[sb.length] = ' ondblclick="return ' + this.getNodeString() + '.onLabelDoubleClick(event, ' + this.getNodeString() + ');"';
		sb[sb.length] = ' onclick="return ' + this.getNodeString() + '.onLabelClick(event, ' + this.getNodeString() + ');"';
		sb[sb.length] = ' >';
		sb[sb.length] = this._title;
		sb[sb.length] = '</a>';
		
		return sb.join("");
	},


	/* ------------------------------------------------------------------------------------
		Evnet handlers
	------------------------------------------------------------------------------------ */
	onLabelClick: function(evt, me) { 
		/*
			Modified to allow a timeout in order to intercept the double click.
			We're hosed if someone has set their double-click speed really slow.
		*/
		if (this._clickTimer != null) {
			clearTimeout(this._clickTimer);
			this._clickTimer = null;
		}
		
		var clickFunc = function() {

			if (me.hasChildren(true) && (this.tree._ctrlPressed != true  && this.tree._shiftPressed != true))  {
				// Open the node
				//me.toggle();
				
			}

			// Push and run selection
			me.tree.handleNodeSelection(me);
			
			// Fire tree event
			return me.tree.fireEvent("labelClick", me);
		}
		
		this._clickTimer = setTimeout(clickFunc, 250);
	},
	onLabelDoubleClick: function(evt, me) { 
		if (this._clickTimer != null) {
			clearTimeout(this._clickTimer);
			this._clickTimer = null;
		}

		// Push and run selection
		me.tree.handleNodeSelection(me);

		return me.tree.fireEvent("labelDoubleClick", me);
	},
	
	
	/* ------------------------------------------------------------------------------------
		Returns a string representation of the node
	------------------------------------------------------------------------------------ */
    toString: function() { 
        return "HTMLNode (" + this.index + ")";
    },



	/* ------------------------------------------------------------------------------------
		Handler to toggle the toggle image (and in this case, the icon as well)
	------------------------------------------------------------------------------------ */
	toggleIcon: function() {
		var toggle = document.getElementById(this.toggleElId);
		toggle.className = this.getIconStyle();
		var icon = document.getElementById(this.iconElId);
		icon.className = this.getObjectIconStyle();
	},


	/* ------------------------------------------------------------------------------------
		(mostly) Internal accessor for the toggle image style
	------------------------------------------------------------------------------------ */
    getIconStyle: function() {
		var type = "NoKids";
		if (this.hasChildren(true) || (this.isDynamic() && !this.getIconMode())) {
		// if (this.hasChildren(true)) {
		    type = (this.expanded) ? "Collapse" : "Expand";
		}

		return "toggleImage" + type;
    },
	
	
	/* ------------------------------------------------------------------------------------
		(mostly) Internal accessor for the current icon style
	------------------------------------------------------------------------------------ */
    getObjectIconStyle: function() {
		var type = ""
		if (this.hasChildren(true) || (this.isDynamic() && !this.getIconMode())) {
		    type = (this.expanded) ? "FolderOpen" : "FolderClosed";
		} else {
			type = "Document";
		}

		return "itemIcon" + type;
    },
	
	
	/* ------------------------------------------------------------------------------------
		Accessors for selection of the node
		
		!!! NOTE: This is where we'll handle the magic of parent node notification
	------------------------------------------------------------------------------------ */
	selectSelf: function() {
		var obj = document.getElementById(this.contentElId);
		obj.className = obj.className + " agileTreeNodeSelected";
		this.isSelected = true;
	},
	
	deselectSelf: function() {
		var obj = document.getElementById(this.contentElId);
		while (obj.className.search("agileTreeNodeSelected") > -1) {
			obj.className = obj.className.replace("agileTreeNodeSelected", "");
		}
		this.isSelected = false;
	},
	
	
	/* ------------------------------------------------------------------------------------
		Accessor for title
	------------------------------------------------------------------------------------ */
	getTitle: function() {
		return this._title;
	},
	
	getToolTip: function() {
		if (this._toolTip)
			return this._toolTip;
	}
	
});




