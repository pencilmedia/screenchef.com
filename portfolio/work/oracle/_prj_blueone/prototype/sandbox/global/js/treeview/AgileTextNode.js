//New Agile Text Node

YAHOO.widget.AgileTextNode = function(oData, oParent, expanded) {

    if (oData) { 
        this.init(oData, oParent, expanded);
        this.setUpLabel(oData);
    }

};


YAHOO.extend(YAHOO.widget.RootNode, YAHOO.widget.Node, {
    
    // overrides YAHOO.widget.Node
    getNodeHtml: function() { 
        return ""; 
    },

    toString: function() { 
        return "RootNode";
    },

    loadComplete: function() { 
        this.tree.draw();
    },

    collapse: function() {},
    expand: function() {},

	expandAll: function() {
        for (var i=0;i<this.children.length;++i) {
            var c = this.children[i];
            if (c.isDynamic()) {
                alert("Custom support");
                break;
            } else if (! c.multiExpand) {
				//only for menu node. no need to handle here
                alert("Not supported (no multi-expand + expand all)");
                break;
            } else {
                c.expand();
                c.expandAll();
            }
        }
    }

});

YAHOO.extend(YAHOO.widget.AgileTextNode, YAHOO.widget.TextNode, {

	nowrap: true,
	hasTabbing: false,

	expandAll: function() {
        for (var i=0;i<this.children.length;++i) {
            var c = this.children[i];
            if (c.isDynamic()) {
          
                break;
            } else if (! c.multiExpand) {
                break;
            } else {
                c.expand();
                c.expandAll();
            }
        }
    },

	getStyle: function() { 
		if (this.data.isExpandable() && this.isLoading) {
            return "ygtvloading";
        } else {
            // location top or bottom, middle nodes also get the top style
            var loc = (this.nextSibling) ? "t" : "l";

            // type p=plus(expand), m=minus(collapase), n=none(no children)
            var type = "n";
            if (this.data.isExpandable() 
				&& (this.hasChildren(true) || (this.isDynamic() && !this.getIconMode()))) {
            // if (this.hasChildren(true)) {
                type = (this.expanded) ? "m" : "p";
            }

			//for top level node we  always show the icon
			if(this === this.tree.getTopLevelNode() && this.data.isExpandable())
				type = (this.expanded) ? "m" : "p";

            return "ygtv" + loc + type;
        }
    },

	getHoverStyle: function() { 
        var s = this.getStyle();
        if (this.data.isExpandable() &&  (this.hasChildren(true) && !this.isLoading)) { 
            s += "h"; 
        }
        return s;
    },

	getToggleLink: function() {
		if (!this.data.isExpandable())
			return "YAHOO.widget.TreeView.getNode(\'" + this.tree.id + "\'," + 
				this.index + ").noToggle()";
		else
			return "YAHOO.widget.TreeView.getNode(\'" + this.tree.id + "\'," + 
				this.index + ").toggle()";
    },

	noToggle: function(){
		return;
	},

	onLabelClick: function(me) { 
		this.tree._selectedNode = me
        return me.tree.fireEvent("labelClick", me);
        //return true;
    },

	highlightNode: function (id){ 
		this.tree._selectedNode = this;
		this.tree.highlightNode(id);
	},

	unhighlightNode: function (id){ 
		this.tree.unhighlightNode(id);
	},

	collapse: function() { //alert(' collapse ');
        // Only collapse if currently expanded
        if (!this.expanded) { return; }

        // fire the collapse event handler
        var ret = this.tree.onCollapse(this);

        if (false === ret) {
            return;
        }

        ret = this.tree.fireEvent("collapse", this);

        if (false === ret) {
            return;
        }


        if (!this.getEl()) {
            this.expanded = false;
        } else {
            // hide the child div
            this.hideChildren();
            this.expanded = false;

            this.updateIcon();

			if (!this.isLoading && this.data.isExpandable())
				this.updateExpansions();
        }

        // this.getSpacer().title = this.getStateText();

        ret = this.tree.fireEvent("collapseComplete", this);

    },

    expand: function() { //alert(' expand ');
        // Only expand if currently collapsed.
        if (this.expanded) { return; }

        // fire the expand event handler
        var ret = this.tree.onExpand(this);

        if (false === ret) {
            return;
        }
        
        ret = this.tree.fireEvent("expand", this);

        if (false === ret) {
            return;
        }

        if (!this.getEl()) {
            this.expanded = true;
            return;
        }

        if (! this.childrenRendered) {
            this.getChildrenEl().innerHTML = this.renderChildren();
        } else {
        }

        this.expanded = true;

        this.updateIcon();

		if (!this.isLoading && this.data.isExpandable())
			this.updateExpansions();

        // this.getSpacer().title = this.getStateText();

        // We do an extra check for children here because the lazy
        // load feature can expose nodes that have no children.

        // if (!this.hasChildren()) {
        if (this.isLoading) {
            this.expanded = false;
            return;
        }

        if (! this.multiExpand) {
            var sibs = this.getSiblings();
            for (var i=0; i<sibs.length; ++i) {
                if (sibs[i] != this && sibs[i].expanded) { 
                    sibs[i].collapse(); 
                }
            }
        }

        this.showChildren();

        ret = this.tree.fireEvent("expandComplete", this);
    },

	updateIcon:function() { 
		if (this.hasIcon) {
            var el = this.getToggleEl();
            if (el) {
                el.className = this.getStyle();
            }
        }

		var imgId = this.labelElId + '_img';

		if(this.expanded){
		  if(this.data.getBaseImg(this) != null)
			document.getElementById(imgId).innerHTML = this.data.getBaseImg(this);
		}else{
		  if(this.data.getBaseImg(this) != null)
			document.getElementById(imgId).innerHTML = this.data.getBaseImg(this);
		}
	},

	updateExpansions:function () {
		
		try{
			var xmlhttp = xmlRequest();
			xmlhttp.open("GET", this.tree.getUpdateExpansionsURL(this.data.treeRowKey), false);
			xmlhttp.setRequestHeader("Cache-Control", "no-cache");
			xmlhttp.onreadystatechange = function() { 
				//nothing to do
			};
			xmlhttp.send(null);
		} catch (e) {
			//
		}
	},
	
	getNodeHtml: function() { 
        var sb = [];

        sb[sb.length] = '<table border="0" cellpadding="0" cellspacing="0">';
        sb[sb.length] = '<tr>';
        
        for (var i=0;i<this.depth;++i) {
            sb[sb.length] = '<td class="' + this.getDepthStyle(i) + '"><div class="ygtvspacer"></div></td>';
        }

        var getNode = 'YAHOO.widget.TreeView.getNode(\'' +
                        this.tree.id + '\',' + this.index + ')';

        sb[sb.length] = '<td';
        // sb[sb.length] = ' onselectstart="return false"';
        sb[sb.length] = ' id="' + this.getToggleElId() + '"';
        sb[sb.length] = ' class="' + this.getStyle() + '"';

        if (this.data.isExpandable() && this.hasChildren(true)) {
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
        sb[sb.length] = '>';

		if(this.data.getBaseImg(this) != null){
			sb[sb.length] = '<span id="'+ this.labelElId +'_img" class="node_icon">';
			sb[sb.length] = this.data.getBaseImg(this) +" ";
			sb[sb.length] = '</span>';
		}

		if(!this.hasTabbing)
			sb[sb.length] = '<a tabIndex="-1"';
		else
			sb[sb.length] = '<a ';

        sb[sb.length] = ' id="' + this.labelElId + '"';
        sb[sb.length] = ' class="' + this.labelStyle + this.data.getClassName() + '"';
		sb[sb.length] = ' href="#"';
		sb[sb.length] = ' onclick="' + this.href + '"';
        sb[sb.length] = ' target="' + this.target + '"';
		sb[sb.length] = ' title="' + this.data.tooltip + '"';
        //sb[sb.length] = ' onclick="return ' + getNode + '.onLabelClick(' + getNode +');"';
		
        if (this.data.isExpandable() && this.hasChildren(true)) {
			sb[sb.length] = ' onfocus="' + getNode + '.highlightNode(\''+ this.labelElId +'\');';
			sb[sb.length] = 'document.getElementById(\''+ this.getToggleElId() + '\').className=';
            sb[sb.length] = getNode + '.getHoverStyle()"';

            sb[sb.length] = ' onmouseover="document.getElementById(\'';
            sb[sb.length] = this.getToggleElId() + '\').className=';
            sb[sb.length] = getNode + '.getHoverStyle()"';

            sb[sb.length] = ' onmouseout="document.getElementById(\'';
            sb[sb.length] = this.getToggleElId() + '\').className=';
            sb[sb.length] = getNode + '.getStyle()"';
        }else{
			sb[sb.length] = ' onfocus="' + getNode + '.highlightNode(\''+ this.labelElId +'\');"';
		}

		sb[sb.length] = ' onblur="' + getNode + '.unhighlightNode(\''+ this.labelElId +'\');"';

        sb[sb.length] = ' >';
        sb[sb.length] = this.label;
        sb[sb.length] = '</a>';
        sb[sb.length] = '</td>';
        sb[sb.length] = '</tr>';
        sb[sb.length] = '</table>';

        return sb.join("");
    }

});


YAHOO.widget.AgileRootNode = function(oData, oParent, expanded) {

    if (oData) { 
        this.init(oData, oParent, expanded);
        this.setUpLabel(oData);
    }

};

YAHOO.extend(YAHOO.widget.AgileRootNode, YAHOO.widget.AgileTextNode, {

		hasTabbing: true

});