YAHOO.widget.AgileSingleSelectCascadeListNode = function(oData, oParent, expanded, hasIcon) {
    if (oData) { 
        this.init(oData, oParent, expanded);
        this.initContent(oData, hasIcon);
    }
};

YAHOO.extend(YAHOO.widget.AgileSingleSelectCascadeListNode, YAHOO.widget.AgileCascadeListNode,
{
	/* ------------------------------------------------------------------------------------
		Generates the core node html
	------------------------------------------------------------------------------------ */
	_genBaseHTML: function()
	{
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
		sb[sb.length] = ' id="agileTreeNodeLink' + this.index + '" >';
		sb[sb.length] = this._title;
		sb[sb.length] = '</a>';
		
		return sb.join("");
	}
	
}
);
