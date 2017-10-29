/*
Subscription Notes:
	tree.subscribe("labelClick", agile.ux.multicascadelist.treeClick); 
	tree.subscribe("labelDoubleClick", function(node) { alert(node._id)}); 
*/

YAHOO.widget.AgileLocationNode = function(oData, oParent, expanded)
{
	if (oData)
	{ 
		this.init(oData, oParent, expanded);
		this.initContent(oData, oParent, expanded);
	}
};

YAHOO.extend(YAHOO.widget.AgileLocationNode, YAHOO.widget.Node,
{
	/////////////////////////////////////////////////////////
	//	PRIVATE MEMBERS
	/////////////////////////////////////////////////////////
	_id: null,
	_title: null,
	labelStyle: "ygtvlabel",
	/////////////////////////////////////////////////////////
	initContent: function( oData, oParent, expanded )
	{
		if ( oData.id )
			this._id = oData.id;
		if ( oData.title )
			this._title = oData.title;
			
		this.initEventHandlers();
	},

	/**
	 * Get the markup for the node.	 This is designed to be overrided so that we can
	 * support different types of nodes.
	 * @method getNodeHtml
	 * @return {string} The HTML that will render this node.
	 */
	getNodeHtml: function()
	{ 
		var getNode = 'YAHOO.widget.TreeView.getNode(\'' + this.tree.id + '\',' + this.index + ')';
		
		var sb = [];
		sb[sb.length] = '<a ';
		sb[sb.length] = 'id="' + this._id + '" ';
		sb[sb.length] = 'class="' + this.labelStyle + '" ';
		sb[sb.length] = 'onmouseout="' + '" ';
		sb[sb.length] = 'onmouseover="'+ '" ';
		sb[sb.length] = 'onclick="return ' + getNode + '.onLabelClick(' + getNode + ')" ';
		sb[sb.length] = 'ondblclick="return ' + getNode + '.onLabelDoubleClick(' + getNode + ')" ';
		sb[sb.length] = 'target="_self" ';
		sb[sb.length] = '>';
		sb[sb.length] = this._title;
		sb[sb.length] = '</a>';
		return sb.join(''); 
	},

	onLabelClick: function(me)
	{
		return me.tree.fireEvent("labelClick", me);
	},
	
	onLabelDoubleClick: function(me)
	{
		return me.tree.fireEvent("labelDoubleClick", me);
	},
	
	initEventHandlers: function()
	{
		if ( this.tree && !this.tree.hasEvent("labelClick") )
		{
			this.tree.createEvent( "labelClick", this.tree );
		}
		
		if ( this.tree && !this.tree.hasEvent("labelDoubleClick") )
		{
			this.tree.createEvent( "labelDoubleClick", this.tree );
		}
	},
	/**
	 * Returns the id for this node's container div
	 * @method getElId
	 * @return {string} the element id
	 */
	getElId: function() {
		return "ygtv" + this.index;
	},

	/**
	 * Returns the id for this node's children div
	 * @method getChildrenElId
	 * @return {string} the element id for this node's children div
	 */
	getChildrenElId: function() {
		return "ygtvc" + this.index;
	},

	/**
	 * Returns the id for this node's toggle element
	 * @method getToggleElId
	 * @return {string} the toggel element id
	 */
	getToggleElId: function() {
		return "ygtvt" + this.index;
	},

	/**
	 * Returns this node's container html element
	 * @method getEl
	 * @return {HTMLElement} the container html element
	 */
	getEl: function() {
		return document.getElementById(this.getElId());
	},

	/**
	 * Returns the div that was generated for this node's children
	 * @method getChildrenEl
	 * @return {HTMLElement} this node's children div
	 */
	getChildrenEl: function() {
		return document.getElementById(this.getChildrenElId());
	},

	/**
	 * Returns the element that is being used for this node's toggle.
	 * @method getToggleEl
	 * @return {HTMLElement} this node's toggle html element
	 */
	getToggleEl: function() {
		return document.getElementById(this.getToggleElId());
	},

	/**
	 * Generates the link that will invoke this node's toggle method
	 * @method getToggleLink
	 * @return {string} the javascript url for toggling this node
	 */
	getToggleLink: function() {
		return "YAHOO.widget.TreeView.getNode(\'" + this.tree.id + "\'," + 
			this.index + ").toggle()";
	},

	/**
	 * Returns the markup for this node and its children.
	 * @method getHtml
	 * @return {string} the markup for this node and its expanded children.
	 */
	getHtml: function() {

		this.childrenRendered = false;

		var sb = [];
		sb[sb.length] = '<div class="ygtvitem" id="' + this.getElId() + '">';
		sb[sb.length] = this.getNodeHtml();
		sb[sb.length] = this.getChildrenHtml();
		sb[sb.length] = '</div>';
		return sb.join("");
	},

	/**
	 * Called when first rendering the tree.  We always build the div that will
	 * contain this nodes children, but we don't render the children themselves
	 * unless this node is expanded.
	 * @method getChildrenHtml
	 * @return {string} the children container div html and any expanded children
	 * @private
	 */
	getChildrenHtml: function() {

		var sb = [];
		sb[sb.length] = '<div class="ygtvchildren"';
		sb[sb.length] = ' id="' + this.getChildrenElId() + '"';
		if (!this.expanded) {
			sb[sb.length] = ' style="display:none;"';
		}
		sb[sb.length] = '>';

		// Don't render the actual child node HTML unless this node is expanded.
		if ( (this.hasChildren(true) && this.expanded) ||
				(this.renderHidden && !this.isDynamic()) ) {
			sb[sb.length] = this.renderChildren();
		}

		sb[sb.length] = '</div>';

		return sb.join("");
	},

	/**
	 * Node toString
	 * @method toString
	 * @return {string} string representation of the node
	 */
	toString: function() {
		return "Node (" + this.index + ")";
	}
});