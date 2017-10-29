/* ===================================================
 * Proto.js - Custom Prototype JavaScript
 * ===================================================
 * Copyright 2012 Vendavo, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/////////////////////////
//BELOW ARE PURE PROTOTYPE BEHAVIORS - NOT FOR PRODUCTION
/////////////////////////
var proto = {};
proto = {
    init: function() {
        /*****************************************/
        /* INIT PLUGINS & APP SPECIFIC BEHAVIORS */
        /*****************************************/
        // Init Plug-Ins
        plugins.chosenPlugin();

        // Init PriceData Behaviors
        pd.init();

        // Init Grid Behaviors 
        proto.gridBehaviors();

        $('.proto-menu-action').popover({
            trigger: 'click',
            animation: true,
            placement: 'bottom',
            html: true,
            title: 'Prototype Navigation',
            placement: 'top',
            content: function() {
                return $('#proto-menu').html();
            }
        }).on("click", function() {
            // Override Popover Positioning
            protoMenuPopover = $('.popover-content .proto-menu').parent().parent();
            protoMenuPopover.css({
                left: 'auto',
                right: '10px'
            });
            // Add Drill In Component in global.js
            global.drillDownComponent();
        });
        // Close Popovers on click anywhere
        $(":not(#anything)").on('click', function(e) {
            $(".proto-menu-action").each(function() {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons and other elements within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                    return;
                }
            });
        });
    },
    gridBehaviors: function() {
        // Manages selected state in jqgrid tables
        $(".table-striped tr").on("click", function() {
            $(".table-striped tr").removeClass("selected");
            $(this).addClass("selected"); // .ui-state-highlight is a jqgrid style, .selected is bootstrap style
        });
    },
    selectRow: function(row_id) {
        $(".waterfall-tab .sortable li[data-id=" + row_id + "] > div").attr('id', 'selected');
        $(".waterfall-tab .sortable li input").on("click", function() {
            this.focus();
        }); // Give focus to each clicked input so tabbing order is correct
    },
    deselectRow: function(row_id) {
        $(".waterfall-tab .sortable li[data-id=" + row_id + "] > div").attr('id', '');
    },
    selectColumn: function(row_id) {
        $(".waterfall-tab .graph li[data-id=" + row_id + "]").attr('id', 'selected');
    },
    deselectColumn: function(row_id) {
        $(".waterfall-tab .graph li[data-id=" + row_id + "]").attr('id', '');
    },
    isValidEmailAddress: function(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }
};
$(proto.init);


/////////////////////////
// PLUG-IN INIT & SCRIPTS
/////////////////////////

var plugins = {};
plugins = {
    chosenPlugin: function() {
        $(".chosen-select").chosen({
            width: "100%"
        });
    }
};


/////////////////////////
//  APP SPECIFIC BEHAVIORS
/////////////////////////
// Price Data

var pd = {};
pd = {
    init: function() {
        pd.editTemplate();
    },
    editTemplate: function() {
        // Init Popover Edge Detection
        var popover_options = {
            placement: function(context, source) {
                var position = $(source).position();
                if (position.left > 515) {
                    return "left";
                }
                if (position.left < 515) {
                    return "right";
                }
                if (position.top < 110) {
                    return "bottom";
                }
                return "top";
            },
            trigger: "hover"
        };
        $(".waterfall-tab .sortable li").mouseover(function() {
            row_id = $(this).attr('data-id');

            if (row_id !== undefined) {
                proto.selectColumn(row_id);
            }
        });

        $(".waterfall-tab .graph li").mouseover(function() {
            // Edge Detect
            $(this).popover(popover_options);
            row_id = $(this).attr('data-id');

            if (row_id !== undefined) {
                proto.selectRow(row_id);
                proto.selectColumn(row_id);
                $(".waterfall-tab .graph li[data-id=" + row_id + "]").popover('show');
            }
        });
        $(".waterfall-tab .sortable li").mouseleave(function() {
            row_id = $(this).attr('data-id');

            if (row_id !== undefined) {
                proto.deselectColumn(row_id);
            }
        });

        $(".waterfall-tab .graph li").mouseleave(function() {
            row_id = $(this).attr('data-id');

            if (row_id !== undefined) {
                proto.deselectRow(row_id);
                proto.deselectColumn(row_id);
                $(".waterfall-tab .graph li[data-id=" + row_id + "]").popover('hide');
            }
        });
    }
};

var toggleSwitch = function() {
    if ($(this).hasClass("off"))
        $(this).removeClass("off").addClass("on");
    else if ($(this).hasClass("on"))
        $(this).removeClass("on").addClass("off");
}

$('i.on').on('click', toggleSwitch);
$('i.off').on('click', toggleSwitch);