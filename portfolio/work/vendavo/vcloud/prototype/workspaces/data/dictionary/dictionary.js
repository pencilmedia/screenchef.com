var dictionary = {};
dictionary = {
    init: function() {
        dictionary.collapseSection();
        dictionary.dimensionActions();
        dictionary.nestedSortable();
        dictionary.rightPanelActions();
        dictionary.infoButtonActions();
        dictionary.formActions();
        dictionary.splitDimensions();
    },
    collapseSection: function() {
        $(".dimension-tab .collapse-section").on("click", function() {
            // change direction of icon up/right
            $(this).children('i').toggleClass('fa-caret-down').toggleClass('fa-caret-right');
            // hide section
            collapseThis = $(this).parent().siblings('ol');
            collapseThis.toggle();
            return false;
        });
    },
    rightPanelActions: function() {
        $('#custom-field-type').chosen({
            "disable_search": true
        });
    },
    infoButtonActions: function() {
        var waterfallButcon = $(".waterfall-tab .graph .butcon.fade");
        // Actions when alert box is closed
        $(".alert.waterfall-info [data-hide]").on("click", function() {
            $("." + $(this).attr("data-hide")).hide(150);
            waterfallButcon.toggleClass("in").removeAttr("disabled");
        });
        // Bind events to info butcon
        waterfallButcon.on("click", function(e) {
            // Show Alert Message
            $(".alert.waterfall-info").show(150);
            waterfallButcon.toggleClass("in").attr("disabled");
            e.preventDefault();
        });
    },
    formActions: function() {
        // Automatic TabIndex ordering
        var tabindex = 1;
        $('.waterfall-tab input, .waterfall-tab select, .waterfall-tab button, .dimension-tab input, .dimension-tab select, .dimension-tab button').each(function() {
            if (this.type != "hidden") {
                var $input = $(this);
                $input.attr("tabindex", tabindex);
                tabindex++;
            }
        });
        // Set Form Focus
        dictionary.formFocus();
        // Bind tabs with form focus - so when click on tab 1st form field gets focus
        $('.data-upload section .nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function() {
            dictionary.formFocus();
        })
        $(".data-upload ol li label input[type='checkbox']").on("click", function() {
            var listRow = $(this).parent().parent();
            var rowItem = $(this).parent().next();
            listRow.toggleClass('inactive');
            rowItem.toggleClass('disabled');
            if (listRow.hasClass('inactive')) {
                rowItem.attr('disabled', 'disabled');
            } else {
                rowItem.removeAttr('disabled', 'disabled');
            }

        });
    },
    formFocus: function() {
        // Set focus on form to 1st field
        $('.data-upload form input:visible:enabled:first').focus();
    },
    dimensionActions: function() {
        // ACTION BUTTONS
        // Add Custom Fields to Dictionary
        $('button[data-open-panel]').on("click", function() {
            whichPanel = $(this).attr('data-open-panel');
            // Open Panel
            $(".data-upload-details article").hide();
            shell.openRtPanel();
            // Decide which Panel to open
            switch (whichPanel) {
                case "dimension-custom-add":
                    // Add Custom Field
                    $('.data-upload-details article[data-id="dimension-custom-add"]').show();
                    break;
                case "dimension-product-add":
                    // Add Product Hierarchy Field
                    $('.data-upload-details article[data-id="dimension-product-add"]').show();
                    break;
                case "dimension-product-attr-add":
                    // Add Product Attribute
                    $('.data-upload-details article[data-id="dimension-product-attr-add"]').show();
                    break;
                case "dimension-customer-add":
                    // Add Customer Hierarchy Field
                    $('.data-upload-details article[data-id="dimension-customer-add"]').show();
                    break;
                case "rebate-adjuster-add":
                    // Add Customer Attribute
                    $('.data-upload-details article[data-id="rebate-adjuster-add"]').show();
                    break;
                case "dimension-customer-attr-add":
                    // Add Customer Attribute
                    $('.data-upload-details article[data-id="dimension-customer-attr-add"]').show();
                    break;
                default:
                    // Add Custom Field
                    $('.data-upload-details article[data-id="dimension-custom-add"]').show();
            }
        });
    },
    nestedSortable: function() {
        $('.dimension-tab .sortable').nestedSortable({
            disableNesting: 'no-nest',
            handle: 'div',
            items: 'li',
            toleranceElement: '> div',
            maxLevels: 5,
            placeholder: 'highlight'
        });
        $('.waterfall-tab .sortable').nestedSortable({
            cancel: '.no-sort',
            handle: 'div',
            items: 'li',
            toleranceElement: '> div',
            maxLevels: 0,
            placeholder: 'highlight'
        });
        $('.waterfall-tab .waterfall-add').on("click", function() {
            $(".data-upload-details article").hide();
            shell.openRtPanel();
            $('.data-upload-details article[data-id="waterfall-add"]').show();
        });
        $('.sortable li[data-id="5"]').bind('click', function(event) {
            if (event.target.nodeName == 'DIV') {
                $(".data-upload-details article").hide();
                shell.openRtPanel();
                $('.data-upload-details article[data-id="waterfall-edit"]').show();
            }
        });
    },
    splitDimensions: function() {
        $('.waterfall-tab .split-dimension-add').on("click", function() {
            $('#split-dimension-dialog').modal({
                keyboard: true,
                show: true
            });
        });
        // Auto check the checkbox when user types in the field
        $('#split-dimension-dialog .list-unstyled li label input[type="text"]').keyup(function(event) {
            /* Act on the event */
            $(this).siblings('input[type="checkbox"]').attr('checked', 'checked');
        });
        // Split Dimension Dialog pagination
        $('#dimension-page-2').hide();
        $('#split-dimension-dialog .action-next').on("click", function() {
            // Animate pg 1
            $('#dimension-page-1').removeClass('animate slideInLeft slideOutLeft').addClass('animate slideOutLeft');
            $('#dimension-page-1').hide();
            // Animate pg 2
            $('#dimension-page-2').show();
            $('#dimension-page-2').removeClass('animate slideOutRight slideInRight').addClass('animate slideInRight');
            // Bind back button
            $('#split-dimension-dialog .action-back').on("click", function() {
                $('#dimension-page-1').show();
                $('#dimension-page-1').removeClass('animate slideOutLeft').addClass('animate slideInLeft');
                $('#dimension-page-2').removeClass('animate slideInRight').addClass('animate slideOutRight');
                $('#dimension-page-2').hide();
            });
        });

    }
};
dictionary.init();