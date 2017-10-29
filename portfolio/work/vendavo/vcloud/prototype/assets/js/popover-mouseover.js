 /* ===================================================
 * popover-mouseover.js - Custom JavaScript
 * ===================================================
 * Copyright 2013 Vendavo, Inc.
 * ========================================================== */

// POPOVERS CUSTOMIZATION: Keeps popover open when mouseover, popover must have delay set to allow mouseover

(function($) {

    var oldHide = $.fn.popover.Constructor.prototype.hide;

    $.fn.popover.Constructor.prototype.hide = function() {
        if (this.options.trigger === "hover" && this.tip().is(":hover")) {
            var that = this;
            // try again after what would have been the delay
            setTimeout(function() {
                return that.hide.call(that, arguments);
            }, that.options.delay.hide);
            return;
        }
        oldHide.call(this, arguments);
    };

})(jQuery);
