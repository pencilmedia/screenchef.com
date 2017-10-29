(function($) {
    /** directional DOM walkers */
    var axes = {
        /**
         * return the DOM node preceding the specified DOM node in document order, which is:
         *      a) the last descendent of the previous sibling of this DOM node, or 
         *      b) the previous sibling of this DOM node, or 
         *      c) the parent node of this DOM node, or
         *      d) undefined
         */
        preceding: function(node) {
            if (node) {
                if (node.previousSibling) {
                    node = node.previousSibling;
                    while (node.lastChild) {
                        node = node.lastChild;
                    }
                } else {
                    node = node.parentNode;
                }
            }
            return node;
        },
        /**
         * return the DOM node following the specified DOM node in document order, which is:
         *      a) the first child of this DOM node, or
         *      b) the next sibling of this DOM node, or 
         *      c) the next sibling of the closest ancestor of this DOM node with such a sibling, or
         *      d) undefined
         */
        following: function(node) {
            if (node) {
                if (node.firstChild) {
                    node = node.firstChild;
                } else if (node.nextSibling) {
                    node = node.nextSibling;
                } else {
                    while ((node = node.parentNode)) {
                        if (node.nextSibling) {
                            node = node.nextSibling;
                            break;
                        }
                    }
                }
            }
            return node;
        }
    };
    $.each(axes, function(axis, walk) {
        /** 
         * return jquery object containing the immediately following/preceding element of each of the context elements, 
         * matching optional selector 
         */
        $.fn[axis] = function(selector) {
            return this.pushStack($.unique(this.map(function(i, node) {
                while ((node = walk(node))) {
                    if (node.nodeType === 1 && (!selector || $.find.matches(selector, [node]).length)) {
                        return node;
                    }
                }
            })), axis, selector);
        };
        
        /** 
         * return jquery object containing all following/preceding elements of each of the context elements, matching 
         * optional selector 
         */
        $.fn[axis+'All'] = function(selector) {
            var results = [];
            this.each(function(i, node) {
                while ((node = walk(node))) {
                    if (node.nodeType === 1 && (!selector || $.find.matches(selector, [node]).length)) {
                        results.push(node);
                    }
                } 
            });
            return this.pushStack($.unique(results), axis+'All', selector || "");
        };
        
        /** 
         * return jquery object containing all following/preceding elements of each of the context elements, matching 
         * optional selector, up to but not including the element matching untilSelector 
         */
        $.fn[axis+'Until'] = function(untilSelector, selector) {
            var results = [];
            this.each(function(i, node) {
                while ((node = walk(node)) && !$(node).is(untilSelector)) {
                    if (node.nodeType === 1 && (!selector || $.find.matches(selector, [node]).length)) {
                        results.push(node);
                    }
                }
            });
            return this.pushStack($.unique(results), axis+'Until', untilSelector + (selector ? "," + selector : ""));
        };
    });
    /** 
     * return true if the entire context nodeset precedes the specified dom element 
     */
    $.fn.precedes = function(elem) {
        return this.index(elem) === -1 && this.add(elem).last()[0] === elem;
    };
    /** 
     * return true if the entire context nodeset follows the specified dom element 
     */
    $.fn.follows = function(elem) {
        return this.index(elem) === -1 && this.add(elem)[0] === elem;
    };
})(jQuery);