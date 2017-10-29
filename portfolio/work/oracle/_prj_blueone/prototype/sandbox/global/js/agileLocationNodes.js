/**
 * The default node presentation.  The first parameter should be
 * either a string that will be used as the node's label, or an object
 * that has a string propery called label.  By default, the clicking the
 * label will toggle the expanded/collapsed state of the node.  By
 * changing the href property of the instance, this behavior can be
 * changed so that the label will go to the specified href.
 * @namespace YAHOO.widget
 * @class TextNode
 * @extends YAHOO.widget.Node
 * @constructor
 * @param oData {object} a string or object containing the data that will
 * be used to render this node
 * @param oParent {YAHOO.widget.Node} this node's parent node
 * @param expanded {boolean} the initial expanded/collapsed state
 */
YAHOO.widget.AgileLocationNode = function(oData, oParent, expanded) {

    if (oData) { 
        this.init(oData, oParent, expanded);
        this.setUpLabel(oData);
    }

};

YAHOO.extend(YAHOO.widget.AgileLocationNode, YAHOO.widget.TextNode, {
    


    textNodeParentChange: function() {
 
        /**
         * Custom event that is fired when the text node label is clicked.  The
         * custom event is defined on the tree instance, so there is a single
         * event that handles all nodes in the tree.  The node clicked is 
         * provided as an argument
         *
         * @event labelClick
         * @for YAHOO.widget.TreeView
         * @param {YAHOO.widget.Node} node the node clicked
         */
        if (this.tree && !this.tree.hasEvent("labelClick")) {
            this.tree.createEvent("labelClick", this.tree);
        }

        if (this.tree && !this.tree.hasEvent("labelDoubleClick")) {
            this.tree.createEvent("labelDoubleClick", this.tree);
        }
       
    },




    // overrides YAHOO.widget.Node
    getNodeHtml: function() { 
        var sb = [];

        sb[sb.length] = '<table border="0" cellpadding="0" cellspacing="0">';
        sb[sb.length] = '<tr>';
        
        for (var i=0;i<this.depth;++i) {
            //sb[sb.length] = '<td><div class="' + this.getDepthStyle(i) + '">&#160;</div></td>';
            //sb[sb.length] = '<td><div class="' + this.getDepthStyle(i) + '"></div></td>';
            sb[sb.length] = '<td class="' + this.getDepthStyle(i) + '"><div class="ygtvspacer"></div></td>';
        }

        var getNode = 'YAHOO.widget.TreeView.getNode(\'' + this.tree.id + '\',' + this.index + ')';

        sb[sb.length] = '<td';
        // sb[sb.length] = ' onselectstart="return false"';
        sb[sb.length] = ' id="' + this.getToggleElId() + '"';
        sb[sb.length] = ' class="' + this.getStyle() + '"';
        if (this.hasChildren(true)) {
            sb[sb.length] = ' onmouseover="this.className=';
            sb[sb.length] = getNode + '.getHoverStyle()"';
            sb[sb.length] = ' onmouseout="this.className=';
            sb[sb.length] = getNode + '.getStyle()"';
        }
        sb[sb.length] = ' onclick="javascript:' + this.getToggleLink() + '">';

        sb[sb.length] = '<div class="ygtvspacer">';
        sb[sb.length] = '</div>';
        sb[sb.length] = '</td>';
        sb[sb.length] = '<td ';
        sb[sb.length] = (this.nowrap) ? ' nowrap="nowrap" ' : '';
        sb[sb.length] = ' >';
        sb[sb.length] = '<a';
        sb[sb.length] = ' id="' + this.labelElId + '"';
        sb[sb.length] = ' class="' + this.labelStyle + '"';
        sb[sb.length] = ' href="' + this.href + '"';
        sb[sb.length] = ' target="' + this.target + '"';
        sb[sb.length] = ' onclick="return ' + getNode + '.onLabelClick(' + getNode +',event)"';
        sb[sb.length] = ' ondblclick="return ' + getNode + '.onLabelDoubleClick(' + getNode +',event)"';

		if (this.hasChildren(true)) {
            sb[sb.length] = ' onmouseover="document.getElementById(\'';
            sb[sb.length] = this.getToggleElId() + '\').className=';
            sb[sb.length] = getNode + '.getHoverStyle()"';
            sb[sb.length] = ' onmouseout="document.getElementById(\'';
            sb[sb.length] = this.getToggleElId() + '\').className=';
            sb[sb.length] = getNode + '.getStyle()"';
        }
        sb[sb.length] = ' >';
        sb[sb.length] = this.label;
        sb[sb.length] = '</a>';
        sb[sb.length] = '</td>';
        sb[sb.length] = '</tr>';
        sb[sb.length] = '</table>';

        return sb.join("");
    },


    /**
     * Executed when the label is clicked.  Fires the labelClick custom event.
     * @method onLabelClick
     * @param me {Node} this node
     * @scope the anchor tag clicked
     * @return false to cancel the anchor click
     */
    onLabelClick: function(me,e) { 
        return me.tree.fireEvent("labelClick",{
                        "node": me, 
                        "e": e
                    });
        return false;
    },

    onLabelDoubleClick: function(me) { 
        return me.tree.fireEvent("labelDoubleClick", me);
		//return false;
    }
});