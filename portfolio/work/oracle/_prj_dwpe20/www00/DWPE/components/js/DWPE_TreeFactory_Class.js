/* DWPE_TreeFactory_Class.js */

/* Set the class that our class will inherit from */
DWPE_TreeFactory_Class.prototype = new DWPE_BaseFactory_Class();

/* Set and Define our own class constructor */
DWPE_TreeFactory_Class.constructor = DWPE_TreeFactory_Class;
DWPE_TreeFactory_Class.prototype._super = DWPE_BaseFactory_Class.prototype;

function DWPE_TreeFactory_Class() {
    this._class = "DWPE_TreeFactory_Class";
}

DWPE_Tree = function() {
    /**************************************************************************
     * private functions
     */
    function getTree(node) {
        return node.closest('.dwpe-tree');
    }
    
    function getRoot(tree) {
        return tree.data('root') || setRoot(tree);
    }
    
    function setRoot(tree, root) {
        if(!root || !root.length) {
            root = tree.find('.root:first');
        }
        tree.data('root', root);
        return root;
    }

    function getLastNode(tree) {
        return tree.data('lastNode') || setLastNode(tree);
    }
    
    function setLastNode(tree, node) {
        if (!node || !node.length) {
            node = getRoot(tree).children('li.node:last');
            while (node.length && node.children('ul.branch').length) {
                node = node.find('>ul.branch>li.node:last');
            }
        }
        tree.data('lastNode', node);
        return node;
    }

    function scrollTo(node) {
        var scrollPane = node.closest('.scrollPane');
        var scrollPaneTop = scrollPane.scrollTop();
        var scrollPaneHeight = scrollPane[0].clientHeight;
        var scrollPaneLeft = scrollPane.scrollLeft();
        var scrollPaneWidth = scrollPane[0].clientWidth;
        
        var status = node.children('.status');
        var icon = node.children('.icons');
        var label = node.children('.label');
        
        var nodeTop = label.position().top;
        var nodeBottom = nodeTop + label.outerHeight(true);
        var nodeLeft = node.is('.open, .closed') ? node.position().left : 
                        status.attr('class').length ? status.position().left : icon.position().left;
        var nodeRight = label.position().left + label.outerWidth(true);
        
        if (nodeTop < 0) {
            scrollPane.scrollTop(scrollPaneTop + nodeTop);
        } else if (nodeBottom > scrollPaneHeight) {
            scrollPane.scrollTop(scrollPaneTop - scrollPaneHeight + nodeBottom);
        }
        
        if (nodeLeft < 0) {
            scrollPane.scrollLeft(scrollPaneLeft + nodeLeft);
        } else if (nodeRight > scrollPaneWidth) {
            scrollPane.scrollLeft(scrollPaneLeft - scrollPaneWidth + nodeRight);
        }
    }

    /***** tree node state *****/

    /*** focus ***/
    
    function getFocus(tree) {
        return tree.data('focus') || $();
    }

    function focus(node) {
        if(node.length) {
            var tree = getTree(node);
            blur(getFocus(tree));
            scrollTo(node);
            tree.data('focus', node);
        }
        return node.addClass('focused');
    }

    function blur(node) {
        if(node.length) {
            getTree(node).removeData('focus');
        }
        return node.removeClass('focused');
    }

    /*** selection ***/
    
    function getSelection(tree) {
        return tree.data('selected') || $();
    }

    function select(nodes) {
        if(nodes.length) {
            var tree = getTree(nodes.first());
            var selected = getSelection(tree).add(nodes);
            tree.data('selected', selected);
            tree.trigger('treeselect', {added: nodes, removed: $(), selection: selected});
        }
        return nodes.addClass('selected');
    }

    function deselect(nodes) {
        if(nodes.length) {
            var tree = getTree(nodes.first());
            var selected = getSelection(tree).not(nodes);
            tree.data('selected', selected);
            tree.trigger('treeselect', {added: $(), removed: nodes, selection: selected});
        }
        return nodes.removeClass('selected');
    }
    
    function toggleSelection(nodes) {
        var selected = nodes.filter('.selected');
        var unselected = nodes.not('.selected');
        var tree = getTree(nodes.first());
        var selected = getSelection(tree).not(selected).add(unselected)
        tree.trigger('treeselect', {added: selected, removed: unselected, selection: selected});
        tree.data('selected', selected);
        return nodes.toggleClass('selected');
    }

    /*** contiguous selection anchor ***/

    function getAnchor(tree) {
        return tree.data('anchor') || $();
    }
    
    function setAnchor(node) {
        var tree = getTree(node);
        clearAnchor(tree);
        tree.data('anchor', node);
        return node.first().addClass('anchor');
    }

    function clearAnchor(tree) {
        getAnchor(tree).removeClass('anchor');
        tree.removeData('anchor');
        return tree;
    }
    
    /***** event processors *****/
    
    function upArrowKey(ev, node) {
        if(ev.ctrlKey && ev.altKey) {
            scrollTo($('.root .node:visible:first', ev.target));
        } else if (!node.length) {
            // if no node has focus, select and focus the first visible node, if any
            node = $('.root .node:visible:first', ev.target);
            if (node.length) {
                select(focus(node));
            }
        } else {
            var tree = getTree(node);
            if (getRoot(tree).children('.node:first')[0] !== node[0]) {
                // if any node but the first has focus
                var prevNode = node.preceding('.node:visible');
                if (prevNode.length) {
                    if (tree.is('.multiselect') && ev.shiftKey) {
                        // shift up
                        var anchor = getAnchor(tree);
                        if (!anchor.length) {
                            anchor = setAnchor(node);
                        }
                        if (!prevNode.precedes(anchor[0])) {
                            deselect(node);
                        } 
                        select(prevNode);
                    } else {
                        clearAnchor(tree);
                        if (!tree.is('.discontiguous') || !ev.ctrlKey) {
                            // not ctrl up
                            deselect(getSelection(tree));
                            select(prevNode);
                        }
                    }
                    focus(prevNode);
                }
            }
        }
    }
    
    function downArrowKey(ev, node) {
        if(ev.ctrlKey && ev.altKey) {
            scrollTo($('.root .node:visible:last', ev.target));
        } else if (!node.length) {
            // if no node has focus, select and focus the first visible node, if any
            node = $('.root .node:visible:first', ev.target);
            if (node.length) {
                select(focus(node));
            }
        } else {
            var tree = getTree(node);
            var lastNode = getLastNode(tree)[0];
            var nextNode = node.following('.node:visible');
            // make sure the next visible node is not after the last node in *this^ tree
            if (nextNode.length && !nextNode.follows(lastNode)) {
                if (tree.is('.multiselect') && ev.shiftKey) {
                    // shift down
                    var anchor = getAnchor(tree);
                    if (!anchor.length) {
                        anchor = setAnchor(node);
                    }
                    if (!anchor.precedes(nextNode[0])) {
                        deselect(node);
                    }
                    select(nextNode);
                } else {
                    clearAnchor(tree);
                    if (!tree.is('.discontiguous') || !ev.ctrlKey) {
                        // not ctrl down
                        deselect(getSelection(tree));
                        select(nextNode);
                    }
                }
                focus(nextNode);
            }
        }
    }
    
    function leftArrowKey(ev, node) {
        if (node.is('.open')) {
            DWPE_Tree.collapse(node);
        } else {
            upArrowKey(ev, node);
        }
    }
    
    function rightArrowKey(ev, node) {
        if (node.is('.closed')) {
            DWPE_Tree.expand(node);
        } else {
            downArrowKey(ev, node);
        }
    }
    
    function spaceKey(ev, node) {
        if (ev.ctrlKey || ev.metaKey) {
            // ctrl space
            var tree = getTree(node);
            if (!node.is('.selected') && !tree.is('.discontiguous')) {
                deselect(getSelection(tree));
            }
            toggleSelection(node);
        }
        ev.preventDefault();
    }
    
    var osx = /Macintosh/.exec(navigator.userAgent);
    
    function mouseButton(ev, node) {
        if (node.is('.selected') && ev.which !== 1 && !ev.ctrlKey) {
            return;
        }
        var tree = getTree(node);
        if (tree.is('.multiselect') && ev.shiftKey) {
            // shift click
            var anchor = getAnchor(tree);
            if (anchor.length || !tree.is('.discontiguous')) {
                deselect(getSelection(tree));
            }
            if (!anchor.length) {
                anchor = setAnchor(getFocus(tree));
            }
            if (!anchor.length || node[0] === anchor[0]) {
                select(node);
            } else if (node.follows(anchor[0])) {
                select(node.precedingUntil('.anchor','.node:visible').andSelf().add(anchor));
            } else {
                select(node.followingUntil('.anchor','.node:visible').andSelf().add(anchor));
            }
            focus(node);
        } else if ((ev.ctrlKey && (!osx || ev.type === 'contextmenu')) || !ev.ctrlKey) {
            // in firefox on osx, ctrl click triggers the contextmenu event, and in webkit it triggers BOTH contextmenu 
            // and click events, so handle contextmenu on osx while ignoring superfluous ctrl click
            clearAnchor(tree);
            if (ev.ctrlKey) {
                // ctrl click
                if (tree.is('.discontiguous')) {
                    toggleSelection(node);
                    focus(node);
                } else if (tree.is(':not(.multiselect)') && node.is('.selected')) {
                    deselect(node);
                }
            } else {
                deselect(getSelection(tree).not(node));
                select(node);
                focus(node);
            }
        }
    }

    function hoverLabel(ev, label) {
        var scrollPane = label.closest('.scrollPane');
        var scrollPaneWidth = scrollPane[0].clientWidth;
        var labelLeft = label.position().left;
        var labelRight = labelLeft + label.outerWidth(true);
        if (labelLeft < 0 || labelRight > scrollPaneWidth) {
            label.attr('title', label.text());
        }
    }

    function hoverDisclosure(ev, disclosure) {
        var node = disclosure.parent();
        if (node.is('.open')) {
            disclosure.attr('title', 'Collapse');
        } else if (node.is('.closed')) {
            disclosure.attr('title', 'Expand');
        } else if (node.is('.loading')) {
            disclosure.attr('title', 'Retrieving data');
        }
    }

    function showContextMenu(ev, tree) {
        var menuContents = $(DWPE_WindowFactory.generateMenuMarkup(ux_data['sample-tree-context-menu-short'])).addClass('context');
        var focus = getFocus(tree);
        var selected = getSelection(tree);
        var selectedClosed = selected.filter('.closed');
        var selectedOpen = selected.filter('.open');
        var point = (ev.type === 'mouseup') ? {x: ev.clientX, y: ev.clientY} :
                        {x: focus.find('>.label').offset().left + 50, y: focus.offset().top + 10};
                        
        if (selected.length && selectedClosed.length && !selectedOpen.length) {
            // hide collapse
            menuContents.find('li:contains(Collapse)').hide();
        } else {
            // hide expand
            menuContents.find('li:contains(Expand)').hide();
            if (!selectedOpen.length) {
                // disable collapse
                menuContents.find('li:contains(Collapse)').addClass('disabled');
            }
        }
        if (!selectedClosed.length && !selected.find('.closed').length) {
            menuContents.find('li:contains(Expand All Below)').addClass('disabled');
        }

        if (!selectedOpen.length && !selected.find('.open').length) {
            menuContents.find('li:contains(Collapse All Below)').addClass('disabled');
        }
        
        if (!focus.parents('.node').length) {
            menuContents.find('li:contains(Show as Top)').addClass('disabled');
        }

        var menu = DWPE_WindowFactory.initializeContextMenu($('<ux tabindex="0" class="dwpe-menu context"/>').append(menuContents), focus, point.x, point.y);
        menu.find('li[cmd]').each(function() {
            var menuItem = $(this);
            var match = /(javascript|url)::(.+)/.exec(menuItem.attr('cmd')) || [''];
            var fn = new Function(match[1] === 'javascript' ? match[2] : 'window.location.href="' + match[2] +'"');
            $(this).click(function() {
                fn.apply(focus);
                focus.focus();
                return false;
            })
            $(this).removeAttr('cmd');
        });    
        menu.focus();
        $('body').one('mouseup', function() {
            menu.hide();
            setTimeout(function(){
                menu.remove();
                getTree(focus).focus();
            })
        });
    }

    /***** event handlers *****/

    function clickEventHandler(ev) {
        var span = $(this);
        var node = span.parent();
        if (span.is('.disclosure')) {
            if (node.is('.closed')) {
                DWPE_Tree.expand(node);
            } else if (node.is('.open')) {
                DWPE_Tree.collapse(node);
            }
        } else if (span.is(':not(.status)')) {
            mouseButton(ev, node);
        }
    }
    
    function blurEventHandler(ev) {
        getFocus(getTree($(this))).removeClass('focused');
    }
    
    function focusEventHandler(ev) {
        getFocus(getTree($(this))).addClass('focused');
    }
    
    function eventCanceller(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        return false;
    }
    
    var keys = {space: 32, left:37, up:38, right:39, down:40, m: 77, M: 109};

    function keyEventHandler(ev) {
        if (ev.type === 'keydown' && ev.keyCode === keys.space) {
            spaceKey(ev, getFocus(getTree($(this))));
            ev.preventDefault();
        } else if (($.browser.mozilla && ev.type === 'keypress') || (!$.browser.mozilla && ev.type === 'keydown')) {
            // handling keypress for mozilla and keydown for other browsers gives consistent key repeat behavior
            var focus = getFocus(getTree($(this)));
            switch (ev.keyCode || ev.charCode) {
                case keys.up: 
                    upArrowKey(ev, focus);
                    break;
                case keys.down:
                    downArrowKey(ev, focus);
                    break;
                case keys.right:
                    rightArrowKey(ev, focus);
                    break;
                case keys.left:
                    leftArrowKey(ev, focus);
                    break;
                case keys.m:
                case keys.M:
                    if (ev.ctrlKey && ev.altKey) {
                        showContextMenu(ev, getTree($(this)));
                    }
                    break;
                default:
                    return;
            }
            ev.preventDefault();
        }
    }
    
    function hoverEventHandler(ev) {
        var span = $(ev.target);
        switch (ev.type) {
            case 'mouseover':
                if (span.is('.label')) {
                    hoverLabel(ev, span);
                } else if (span.is('.disclosure')) {
                    hoverDisclosure(ev, span);
                }
                break;
            case 'mouseout':
                span.removeAttr('title');
                break;
        }
    }
    
    function mouseUpEventHandler(ev) {
        if (ev.which === 3 && !ev.ctrlKey) {
            var span = $(ev.target);
            if (span.is('.label, .icons')) {
                showContextMenu(ev, getTree(span.parent()));
            }
        }
    }
    
    function resizeEventHandler(ev) {
        var tree = $(this);
        var actionBar = tree.find('>.actionBar');
        var menu = actionBar.find('>.menu');
        var toolbar = actionBar.find('>.toolbar');
        var separator = actionBar.find('>.Separator');
        var scrollPane = tree.find('>.scrollPane');
        toolbar.width(actionBar.outerWidth(true) - menu.outerWidth(true) - separator.outerWidth(true));
        scrollPane.height(tree.height() - actionBar.outerHeight(true));
        // toolbar overflow handling wasn't triggering until I added the following... 
        // probably just need to bind the resize event handler to the toolbar and not the window.
        $(window).resize();
    }
    
    /*** event handler bindings ***/
    
    $(function() {
        $.each({
            'click contextmenu': clickEventHandler,
            'hover': hoverEventHandler,
            'mouseup': mouseUpEventHandler
        }, function(type, fn) {
            $('.root .node>span').live(type, fn);
        });

        $.each({
            'selectstart contextmenu': eventCanceller,
            'keydown keypress': keyEventHandler,
            'blur': blurEventHandler,
            'focus': focusEventHandler
        }, function(type, fn) {
            $('.dwpe-tree .scrollPane').live(type, fn);
        });  
    });

    function initializeTree(tree) {
        $('#preview').css({'overflow':'hidden','maxHeight':600});
        
        // just for kicks, let's make the preview window resizable
        $('#preview').removeData('resizable').resizable()
        
        setRoot(tree);
        setLastNode(tree);
        tree.resize(resizeEventHandler).trigger('resize');
        
        // proxy all cmds in menus and toolbars
        setTimeout(function() {
            $('.dwpe-toolbar li[cmd]', tree).each(function() {
                var button = $(this);
                var cmd = button.attr('cmd');
                button.mousedown(eventCanceller).click(function() {
                    new Function(cmd).apply(tree);
                    tree.find('.scrollPane').focus();
                    return false;
                });
                button.removeAttr('cmd');
            });
            $('.dwpe-menu li[cmd]', tree).each(function() {
                var menuItem = $(this);
                var match = /(javascript|url)::(.+)/.exec(menuItem.attr('cmd'));
                if(match) {
                    var cmd = match[2].replace(/'/g,'"')
                    menuItem.click(function() {
                        new Function(match[1] === 'url' ? 'location.href=\'' + cmd +'\'' : cmd).apply(tree);
                        tree.find('.scrollPane').focus();
                    });
                }
                menuItem.removeAttr('cmd');
            });
        });
    };
    
    var xhtmlnsRegex = / xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/;
    var xsltIndentTransform = '<transform xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0"><output method="xml" indent="yes"/><template match="@*|node()"><copy><apply-templates select="@*|node()"/></copy></template></transform>';
    
    function prettyPrint(elem) {
        var html;
        if (typeof XMLSerializer === 'object') {
            // in webkit, perform xslt identity transform, but output with indent=yes
            var xslt = new XSLTProcessor();
            xslt.importStylesheet(new DOMParser().parseFromString(xsltIndentTransform, 'text/xml'));
            html = new XMLSerializer().serializeToString(xslt.transformToFragment(elem[0],document));
        } else if (typeof XMLSerializer === 'function') {
            // mozilla doesn't support indent attribute of xsl:output, but includes E4X, so use that instead
            html = XML(new XMLSerializer().serializeToString(elem[0])).toXMLString().replace(xhtmlnsRegex, '');
        } else {
            // sorry, no pretty print for you IE...
            html = $("<div/>").append(elem).html();
        }
        
        do {
            // replace each leading indent (2 spaces) with a tab
            var oldHtml = html;
            html = html.replace(/\n(\t*)  /g,"\n$1\t");
        } while (oldHtml !== html);
        
        return html;   
    }

    /**************************************************************************
     * tree factory prototype 
     */
    $.extend(DWPE_TreeFactory_Class.prototype, {
        update: function() {
            this.markup = this.generateMarkup(this.properties);
        },

        make: function($ux) {
            var _class = this.getRootClass($ux.attr("class"));
            switch (_class) {
                case "dwpe-tree":
                    initializeTree($ux);
                    break;
            }
        },
        
        generateTreeNode: function (nodeData, lazy) {
            var node = $('<li class="node"/>');
            var disclosure = $('<span class="disclosure"/>').appendTo(node);
            var status = $('<span class="status"/>').appendTo(node);
            if (nodeData.status) {
                status.addClass(nodeData.status);
                if (nodeData.statusTooltip) {
                    status.attr('title', nodeData.statusTooltip);
                }
            }
            // attach command
            var match = /(javascript|url)::(.+)/.exec(nodeData.command || '');
            var cmd = '';
            if(match) {
                cmd = match[2].replace(/"/g,"'");
                cmd = ' onclick="' + (match[1] === 'url' ? "location.href='" + cmd + "'" : cmd) + '"';
            }
            var icon = $(nodeData.icon && !nodeData.items.length ? DWPE_Utilities.getIconMarkup(nodeData.icon) : '<span class="icons"'+cmd+'/>').appendTo(node);
            var label = $('<span class="label"'+cmd+'/>').text(nodeData.label).appendTo(node);
            var self = this;
            if (nodeData.items && nodeData.items.length) {
                node.addClass(nodeData.state === 'closed' ? 'closed' : 'open');
                var branch = $('<ul class="branch"/>').appendTo(node);
                $.each(nodeData.items, function(i, child) {
                    self.generateTreeNode(child, lazy).appendTo(branch);
                });
            } else if (lazy) {
                icon.attr('class', 'icons');
                node.addClass('closed');
            }
            return node;
        },

        generateMarkup: function(args) {
            var treeData = args;
            var tree = $('<ux class="dwpe-tree"/>');
            if(treeData.height) {
                tree.height(treeData.height);
            }
            if(treeData.width) {
                tree.width(treeData.width);
            }
            var root = $('<ul class="root branch"/>');
            switch(treeData.selection) {
                // fall thru is intentional
                case 'noncontiguousmultiselect':
                    tree.addClass('discontiguous');
                case 'multiselect':
                    tree.addClass('multiselect');
                case 'singleselect':
            }
            if (treeData.lazy && treeData.lazy.toLowerCase() === 'true') {
                tree.addClass('lazy');
            }
            var self = this;
            $.each(treeData.items, function(i, nodeData) {
                self.generateTreeNode(nodeData, treeData.lazy).appendTo(root);
            });

            // had to make the following an OL due to a bug somewhere. when it was a UL, toolbar buttons
            // and menu items were no longer clickable for some reason.
            var actionBar = $('<ol class="actionBar"/>').appendTo(tree);
            var hasMenu = treeData.menu && treeData.menu.toLowerCase() !== 'none';
            var hasToolbar = treeData.toolbar && treeData.toolbar.toLowerCase() !== 'none';
            if(hasMenu) {
               $('<li class="menu"/>').appendTo(actionBar)
                       .append('<ux class="dwpe-menu" url="'+treeData.menu+'"/>');
            }
            if(hasMenu && hasToolbar) {
                $('<li class="DWPE_Button Separator" style="display: inline-block; "><span></span></li>').appendTo(actionBar);
            }
            if(hasToolbar) {
                $('<li class="toolbar"/>').appendTo(actionBar)
                        .append($('<ux class="dwpe-toolbar"/>').attr('data',treeData.toolbar));
            }
            
            var scrollPane = $('<div tabindex="0" class="scrollPane"/>').append(root).appendTo(tree);
            return prettyPrint(tree);
        },
        
        getDefaultArgsListForType: function(type) {
            switch (type) {
                case 'tree-item':
                    return {
                        "_class": "DWPE_TreeFactory_Class",
                        "type": "tree-item",
                        "label": "Tree node",
                        "state": " ",
                        "status": " ",
                        "icon": "file",
                        "items":[],
                        "command": " "
                    };
            }
        },

        getPropertySheetFields: function(type) {
            switch (type) {
                case 'tree-item':
                    return [
                        {type:"hidden", id:"_class", name:"_class", value:"DWPE_TreeFactory"},
                        {type:"hidden", id:"_type", name:"Type", value:"tree-item"},
                        {type:"chooser", id:"state", name:"State", value:" =Enabled&open=Open&closed=Closed"},
                        {type:"chooser", id:"status", name:"Status", value:" =None&warning=Warning"},
                        {type:"text", id:"label", name:"Label", value:""},
                        {type:"text", id:"icon", name:"Icon", value:"file"},
                        {type:"text", id:"command", name:"Command", value:"", help:"(javascript::alert('hi') or url::http://oracle.com)"}
                    ];
            }
        },
    });
    
    /**************************************************************************
     * public APIs 
     */
    return {
        expand: function(nodes) {
            var self = this;
            return nodes.filter('.closed').each(function() {
                var node = $(this);
                if (node.children('.branch').length) {
                    node.removeClass('closed').addClass('open');
                } else {
                    // a '.closed' node with no branch needs to be lazily loaded
                    self.load(node);
                }
            }).end();
        },

        expandAll: function(tree) {
            // expands nodes in the scratch area also
            this.expand(tree.find('.closed'));
            return tree;
        },

        expandTo: function(node) {
            this.expand(node.parents('.node'));
            return focus(node);
        },
        
        expandAllBelow: function(nodes) {
            this.expand(nodes.find('.closed').andSelf());
            return nodes;
        },

        collapse: function(nodes) {
            return nodes.filter('.open').removeClass('open').addClass('closed').end();
        },

        collapseAll: function(tree) {
            // collapses nodes in the scratch area also
            this.collapse(tree.find('.open'));
            return tree;
        },

        collapseAllBelow: function(nodes) {
            this.collapse(nodes.find('.open').andSelf());
            return nodes;
        },

        load: function(node) {
            function randomInt(n) {
                return Math.floor(n * Math.random());
            }
            node.removeClass('closed').addClass('loading');
            setTimeout(function() {
                node.removeClass('loading');
                if (!!Math.round(Math.random())) {
                    node.addClass('open');
                    var branch = $('<ul class="branch"/>');
                    var childCount = randomInt(4) + 1;
                    var child;
                    while (childCount--) {
                       child = $('<li class="node closed"/>').appendTo(branch);
                       $('<span class="disclosure"/>').appendTo(child);
                       $('<span class="status"/>').appendTo(child);
                       $('<span class="icons"/>').appendTo(child);
                       $('<span class="label"/>').text('Lazily evaluated node').appendTo(child);
                    }
                    branch.appendTo(node);
                    if (getLastNode(getTree(node)).precedes(child[0])) {
                        setLastNode(getTree(node), child);
                    }
                } else {
                    node.find('.icons').addClass('ico-file');
                }
            }, randomInt(1000));
        },
        
        showAsTop: function(node) {
            var self = this;
            var tree = getTree(node);
            var root = getRoot(tree);
            var scratch = root.prev('.scratch');
            if (!scratch.length) {
                scratch = $('<div class="scratch"/>').insertBefore(root);
            }
            var container = root.parent();
            this.goToTop(tree);
            if(node.parent()[0] === root[0]) {
                // showAsTop(topLevelNode) == goToTop(tree), no?
                return;
            }
            var placeHolder = $('<li class="placeHolder"/>').insertBefore(node);
            scratch.append(root.children('li'));
            $('<div class="hierSelector icons i31"/>').appendTo(root).click(function(ev) {
                var hierPanel = $('<div class="hierPanel"/>');
                $.each(Array.prototype.slice.call(placeHolder.parents('.node')), function() {
                    var parent = $(this);
                    var label = parent.find('>.label').text();
                    var hierBranch = $('<ul class="hierBranch"/>');
                    $('<li class="hierNode"/>').text(parent.find('>.label').text()).appendTo(hierBranch).click(function() {
                        self.showAsTop(parent);
                    });
                    hierBranch.append(hierPanel.children('ul')).appendTo(hierPanel);
                });
                hierPanel.appendTo(tree);
                window.setTimeout(function() {
                    // defer this click handler on tree until after the current click event bubbles
                    tree.one('click contextmenu', function() {
                        hierPanel.remove();
                    });
                });
            });
            node.appendTo(root);
            setLastNode(tree);
            return node;
        },
        
        goToTop: function(tree) {
            var root = getRoot(tree);
            var scratch = root.prev('.scratch');
            var placeHolder = scratch.find('.placeHolder');
            root.children('.hierSelector').remove();
            if (placeHolder.length) {
                placeHolder.after(root.children('.node')).remove();
                scratch.children('.node').appendTo(root);
            }
            setLastNode(tree);
            return tree;
        },

        goUp: function(tree) {
            var root = getRoot(tree);
            var prevTop = root.find('.node:first');
            this.goToTop(tree);
            this.showAsTop(prevTop.parents('.node:first'));
        },

        getTree: function(elem) {
            if(elem.nodeType) {
                elem = $(elem);
            }
            return elem.closest('.dwpe-tree');
        },

        getFocus: function(tree) {
            return getFocus(tree);
        },
        
        getSelection: function(tree) {
            return getSelection(tree);
        },
        
        scrollTo: function(node) {
            return scrollTo(node);
        },
        
        addAfter: function(precedingNode, nodeData) {
            var tree = getTree(precedingNode);
            var newNode = $(DWPE_TreeFactory.generateTreeNode(nodeData, tree.is('.lazy'))).insertAfter(precedingNode);
            if(getLastNode(tree).filter(precedingNode).length) {
                setLastNode(newNode);
            }
            return newNode;
        },

        addBefore: function(followingNode, nodeData) {
            var tree = getTree(followingNode);
            return $(DWPE_TreeFactory.generateTreeNode(nodeData, tree.is('.lazy'))).insertBefore(followingNode);
        },
        
        addChild: function(parentNode, nodeData) {
            var tree = getTree(parentNode);
            var branch = parentNode.children('.branch');
            if(branch.length === 0) {
                parentNode.addClass('open').find('.icons').attr('class','icons');
                branch = $('<ul class="branch"/>').appendTo(parentNode);
            }
            var newNode = $(DWPE_TreeFactory.generateTreeNode(nodeData, tree.is('.lazy'))).prependTo(branch);
            if(getLastNode(tree).filter(parentNode).length) {
                setLastNode(newNode);
            }
            return newNode;
        },

        remove: function(nodes) {
            var tree = getTree(nodes);
            var descendentsAndSelf = nodes.find('.node').andSelf();
            var needNewLastNode = false;
            deselect(getSelection(tree).filter(descendentsAndSelf));
            blur(getFocus(tree).filter(descendentsAndSelf));
            clearAnchor(getAnchor(tree).filter(descendentsAndSelf));
            if(getLastNode(tree).filter(nodes).length) {
                needNewLastNode = true;
            }
            var parentBranches = nodes.parent();
            nodes.remove();
            var emptyParentBranches = parentBranches.filter(':not(:has(li))');
            emptyParentBranches.parent('.node').removeClass('open').removeClass('closed').children('.icons').addClass('ico-file');
            emptyParentBranches.remove();
            if(needNewLastNode) {
                setLastNode(tree);
            }
        }
    };
}();

/* Make an Instance of TreeFactory that others can call on to create trees */
DWPE_TreeFactory = new DWPE_TreeFactory_Class();