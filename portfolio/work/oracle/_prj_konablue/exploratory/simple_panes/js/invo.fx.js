if (!invo.fx) { invo.fx = {}; }


invo.fx.classnames = {};
invo.fx.classnames.display_none    = "obj_display_none";
invo.fx.classnames.display_block   = "obj_display_block";
invo.fx.classnames.display_inline  = "obj_display_inline";


/*
	Switches display between none and block
*/
invo.fx.toggleBlock = function (elem) {
	if (elem.className && (elem.className.indexOf(invo.fx.classnames.display_none) != -1 ) ) {
		elem.className = elem.className.replace(invo.fx.classnames.display_none, invo.fx.classnames.display_block);
	} else if (elem.className && (elem.className.indexOf(invo.fx.classnames.display_block) != -1 ) ) {
		elem.className = elem.className.replace(invo.fx.classnames.display_block, invo.fx.classnames.display_none);
	}
}


/*
	Switches display between none and inline
*/
invo.fx.toggleInline = function (elem) {
	if (elem.className && (elem.className.indexOf(invo.fx.classnames.display_none) != -1 ) ) {
		elem.className = elem.className.replace(invo.fx.classnames.display_none, invo.fx.classnames.display_inline);
	} else if (elem.className && (elem.className.indexOf(invo.fx.classnames.display_inline) != -1 ) ) {
		elem.className = elem.className.replace(invo.fx.classnames.display_inline, invo.fx.classnames.display_none);
	}
}





invo.fx.windowShade = function (elem, elem_height) {
	var current_y = parseInt(invo.metrics.getObjectHeight(elem));
	if (current_y > 0) {
		alert(0);
		invo.fx._runShrink(elem, elem_height);
	} else {
	alert(1);
		invo.fx._runGrow(elem, 0, elem_height);
	}
}


invo.fx._runShrink = function (elem, size_y, increment) {
	if (!increment) { increment = 10; }
	if (parseInt(size_y) > 0) {
		size_y = parseInt(size_y) - increment;
		if (size_y < 0) { size_y = 0; }
		invo.metrics.setObjectHeight(elem, size_y);
		var shrink_timer = setTimeout(function() { invo.fx._runShrink(elem, size_y, increment); }, 10);
	} else {
		if (window.shrink_timer) {
			clearTimeout(window.shrink_timer);
		}
	}
}


invo.fx._runGrow = function (elem, size_y, tgt_y, increment) {
	if (!increment) { increment = 10; }
	if (parseInt(size_y) < tgt_y) {
		size_y = parseInt(size_y) + increment;
		if (size_y > tgt_y) { size_y = tgt_y; }
		invo.metrics.setObjectHeight(elem, size_y);
		var grow_timer = setTimeout(function() { invo.fx._runGrow(elem, size_y, tgt_y, increment); }, 10);
	} else {
		if (window.grow_timer) {
			clearTimeout(window.grow_timer);
		}
	}
}