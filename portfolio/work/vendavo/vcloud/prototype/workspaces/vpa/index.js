var midas_proto = {};
midas_proto = {
    init: function() {
        midas_proto.initTipsAndPops();
        setTimeout('midas_proto.searchFlow()', 500); // Give time for chosen plugin to load
        midas_proto.slatActions();
        midas_proto.exclusionActions();
        midas_proto.todoList();
        midas_proto.detailsPage();
        midas_proto.addFavoriteOpp();
        midas_proto.hideOpportunity();
        midas_proto.shareOpportunity();
        $(".close-contextual-pane").on("click", function() {
            shell.closeRtPanel();
        });
    },
    initTipsAndPops: function() {
        $(".midas .page-tools .sidebar-responsive .butcon[data-toggle='tooltip']").tooltip();
        // Midas Details Summary Popover
        // NOTE: Plugin for popovers to stay open when mouseover located at js/popover-mouseover.js, you must include the delay properties
        $(".midas .jargon[data-toggle='popover']").popover({
            trigger: 'hover',
            animation: true,
            delay: {
                show: 750,
                hide: 250
            }
        });
        // Observation Perspective Popovers
        $(".midas .observations [data-toggle='popover']").popover({
            trigger: 'click',
            html: true,
            container: 'body',
            placement: 'left',
            title: 'Other Perspectives',
            content: function() {
                return $('#observation-perspective-popover').html();
            }
        }).on("click", function() {
            // Override Popover Positioning
            // Menu Container - to reposition when trigger el is too close to viewport edge
            perspectiveMenuPopover = $('.popover-content .perspective-switcher').parent().parent(); // Menu Container
            perspectiveMenuPopoverDivet = $('.popover-content .perspective-switcher').parent().prev().prev();
            perspectiveMenuPopoverDivet.css({
                //    top: 'auto',
                //    bottom: '7px'
            });
            perspectiveMenuPopover.css({
                //    top: 'auto',
                //    bottom: '0'
            });
            // Add Drill In Component in global.js
            global.drillDownComponent();
        });
        // Observation Perspective Details Popovers
        $(".midas .summary-details h2 [data-toggle='popover']").popover({
            trigger: 'click',
            html: true,
            container: 'body',
            placement: 'bottom',
            title: 'Other Perspectives',
            content: function() {
                return $('#observation-perspective-popover').html();
            }
        }).on("click", function() {
            // Override Popover Positioning
            // Menu Container - to reposition when trigger el is too close to viewport edge
            perspectiveMenuPopover = $('.popover-content .perspective-switcher').parent().parent(); // Menu Container
            perspectiveMenuPopoverDivet = $('.popover-content .perspective-switcher').parent().prev().prev();
            perspectiveDetailsMenuPopover.css({
                left: 'auto',
                right: '5px'
            });
            // Add Drill In Component in global.js
            global.drillDownComponent();
        });
        $(".midas .summary-details h2 [data-toggle='popover']").tooltip({
            trigger: 'hover',
            container: 'body',
            placement: 'top',
            title: 'Other Perspectives'
        });
        // Popovers for Responsive layout
        $("#other-perspectives-responsive").popover({
            animation: true,
            trigger: 'click',
            html: true,
            container: 'body',
            placement: 'bottom',
            title: 'Saved Searches',
            content: function() {
                return $('#observation-perspective-popover').html();
            }
        });
        $("#save-search-responsive").popover({
            animation: true,
            trigger: 'click',
            html: true,
            container: 'body',
            placement: 'bottom',
            title: 'Saved Searches',
            content: function() {
                return '<div class="side-section saved-search"><button class="butcon"><i class="fa fa-pencil"></i></button><ul class="pill-list"><li class="label label-info"><span style="max-width: 225px;">Annual Product Margin Profit</span></li><li class="label label-info"><span style="max-width: 225px;">Long Value Example ;kxjkljkldjjksdasdfsfasdfasdfasdfasdNBMNBMNBM,NBMNMB,MNB,MNBM,NBM,NBMNB,MBM,NBMNBB</span></li></ul></div>';
            }
        });
        $("#annulus-responsive").popover({
            animation: true,
            trigger: 'click',
            html: true,
            container: 'body',
            placement: 'bottom',
            title: 'Total Margin Opportunity: $14.2m',
            content: function() {
                return '<span>Total Profit Opportunities of 14.2m which represents a 8% return on Net Sales.</span><div data-id="2" class="popoverButton cogs"><div class="left"></div><span class="percentage">15%</span><span>- Cost of Goods Sold</span></div><div data-id="1" class="popoverButton negotiatedDiscount"><div class="left"></div><span class="percentage">12%</span><span>- Negotiated Discount</span></div><div data-id="12" class="popoverButton freightCharges"><div class="left"></div><span class="percentage">2%</span><span>- Freight Charges</span></div><div data-id="11" class="popoverButton pocketPriceAdjustments"><div class="left"></div><span class="percentage">6%</span><span>- Pocket Price Adjustments</span></div><div data-id="10" class="popoverButton serviceCost"><div class="left"></div><span class="percentage">12%</span><span>- Service Costs</span></div><div data-id="9" class="popoverButton freightCost"><div class="left"></div><span class="percentage">5%</span><span>- Freight Costs</span></div><div data-id="8" class="popoverButton paymentCost"><div class="left"></div><span class="percentage">13%</span><span>- Payment Costs</span></div><div data-id="7" class="popoverButton netPriceAdjustments"><div class="left"></div><span class="percentage">8%</span><span>- Net Price Adjustments</span></div><div data-id="6" class="popoverButton rebates"><div class="left"></div><span class="percentage">2%</span><span>- Rebates</span></div><div data-id="5" class="popoverButton invoicePriceAdjustments"><div class="left"></div><span class="percentage">13%</span><span>- Invoice Price Adjustments</span></div><div data-id="4" class="popoverButton serviceCharges"><div class="left"></div><span class="percentage">7%</span><span>- Service Charges</span></div><div data-id="3" class="popoverButton surcharges"><div class="left"></div><span class="percentage">5%</span><span>- Surcharges</span></div>';
            }
        });
        $("#history-switcher").popover({
            animation: true,
            trigger: 'click',
            html: true,
            container: 'body',
            placement: 'bottom',
            content: function() {
                return $('#history-menu').html();
            }
        }).on("click", function() {
            // init history switcher
            midas_proto.historySwitcher();
        });
        // Midas DETAILS PAGE
        // Init midas transaction table popover
        $('.midas .contributors tr[data-toggle="popover"]').popover({
            trigger: 'click',
            placement: 'top',
            html: true,
            animation: true,
            delay: {
                show: 500,
                hide: 250
            }
        });
        // Comparative Transaction Popover
        $('.midas .proto-jargon-comparitive').popover({
            title: 'Comparative Transactions',
            placement: 'bottom',
            content: 'Comparative Transactions are transactions<br> for the same products, but they are outside<br> the defined opportunity segment. They are<br> displayed as faded shapes in the chart.'
        });
        // Close Popovers on click anywhere
        $(":not(#anything)").on('click', function(e) {
            $(".midas [data-toggle='popover'], #annulus-responsive, #save-search-responsive, #history-switcher, #other-perspectives-responsive").each(function() {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons and other elements within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                    return;
                }
            });
        });
    },
    todoList: function() {
        $('.to-do-list-action').on("click", function() {
            shell.openRtPanel();
        });
        $('.to-do-list.mode-normal .to-do-item').on("click", function() {
            if (event.target.nodeName === 'LABEL') {
                event.preventDefault();
            }

            if (event.target.type != 'checkbox') {
                $(':checkbox', this).attr('checked', function() {
                    return !this.checked;
                });
            }

            $(this).toggleClass('completed');

            // APPEND DATE
            if ($(this).hasClass('completed')) {
                var today = new Date();
                var month = today.getMonth() + 1;
                var day = today.getDate();
                var date = (month < 10) ? "0" + month : month;
                date += "/";
                date += (day < 10) ? "0" + day : day;
                date += "/";
                date += today.getYear() + 1900;

                $(this).append('<span>' + date + '</span>');
            } else {
                $(this).children('span').remove();
            }

            // SORT ITEMS
            var mylist = $('.to-do-list.mode-normal');
            var listitems = mylist.children('.to-do-item').get();

            listitems.sort(function(a, b) {
                var compA = $(a).hasClass('completed');
                var compB = $(b).hasClass('completed');
                return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
            });

            $.each(listitems, function(idx, itm) {
                mylist.append(itm);
            });
        });

        $('.to-do-list.mode-edit .to-do-item').on("click", function() {
            if ($('.to-do-item-edit').length === 0) {
                $(this).replaceWith('<dd class="to-do-item"><input class="to-do-item-edit" type="text" value="' + $(this).children('label').text() + '"/><a href="#" class="btn to-do-list-action-delete">&times;</a></dd>');
                $('.to-do-item-edit').focus();
            }
        });

        $('.to-do-list-action-save').on("click", function() {
            $('.to-do-item-edit').each(function() {
                $(this).parents('dd').replaceWith('<dd class="to-do-item"><label><input type="checkbox" disabled>' + $(this).val() + '</label><span></span></dd>');
                $('.to-do-list-action-add').show();
            });
        });

        $('.to-do-list-action-add').on("click", function() {
            if ($('.to-do-item-edit').length === 0) {
                $('.to-do-list.mode-edit').append('<dd class="to-do-item"><input class="to-do-item-edit" type="text" value=""/></dd>');
                $('.to-do-list-action-add').hide();
                $('.to-do-item-edit').focus();
            }
        });

        $('.to-do-list-action-delete').on("click", function() {
            $(this).parents('dd').remove();
        });
    },
    historySwitcher: function() {
        // Reposition Menu so it doesn't go offscreen when hugging the right side
        historyPopover = $('.popover-content .drillcards').parent().parent();
        historyPopoverDivet = $('.popover-content .history-switcher-menu').parent().prev().prev();
        historyPopoverDivet.css({
            left: 'auto',
            right: '10px'
        });
        historyPopover.css({
            left: 'auto',
            right: '5px'
        });
        // Add Drill In Component in global.js
        global.drillDownComponent();
    },
    /////
    // PILLS - SAVED SEARCH FUNCTIONS
    searchFlow: function() {

        // Select2 Component
        $("#advisor-search").select2({
            placeholder: "Type to Search",
            width: '100%',
            openOnEnter: true,
            allowClear: true,
        });


        var searchField = $('.midas .form-inline fieldset .select2-search-field input'); // Chosen Plugin Class
        searchField.focus();
        // Hide pills in saved search
        $('.midas aside .pill-list .label-info').hide();
        // Keyboard Functionality
        searchField.on('keyup', function(e) {
            switch (e.keyCode) {
                case 8: // Backspace
                    if (!searchField.val()) {
                        // Hide Clear Button if input is empty
                        $('.midas .form-inline .save-search').hide();
                        $('.midas .form-inline .clear-search').hide();
                    }
                    return;
                case 13: // Enter
                    if (searchField.val()) { // Only add pills if input not empty
                        // Enable Save Search Btn
                        $('.midas .form-inline .save-search').removeAttr('disabled').removeClass('disabled');
                        // Encapsulate value
                        searchValue = "Annual Product Margin Profit";
                        $('.form-inline select').append('<option class="dynamic" selected value="">' + searchValue + '</option>');
                        $('.form-inline select').trigger("chosen:updated");
                        // Bind Save Search Btn
                        $('.midas .form-inline .save-search').on("click", function() {
                            midas_proto.addSavedSearches();
                        });
                    }
                    break;
                default:
                    $('.midas .form-inline .clear-search, .midas .form-inline .save-search').show();
            }
        });
        // Clear Search Field Value
        $('.midas .form-inline .clear-search').on("click", function() {
            // Clear field
            searchField.val('');
            // disable/hide btns
            $('.midas .form-inline .clear-search, .midas .form-inline .save-search').hide();
            // Clear any pills
            $('.midas .form-inline .chosen-choices .search-choice').remove();
            // Refocus on input
            searchField.focus();
        });
    },
    addFavoriteOpp: function() {
        // View Marked Toggle Button
        $('.saved-search .view-favorites').on("click", function() {
            $(this).toggleClass('active');
        });
        // Mark Button
        markStatus = $('.midas .opportunities .list .rt-column .status-indicators .mark');
        $('.midas .opportunities .list .preview .btn-toolbar .mark-action').on('click', function() { // Count marked opps
            if (!markStatus.hasClass('active')) { // Add Mark
                $(this).html("<i class='fa fa-star'></i> Remove Mark").attr('alt', 'Remove Mark'); // Update tooltip and text
                // Enable Save Search - Mark this pill
                $('.view-favorites').children().addClass('animated rotateIn');
                $('.midas .sidebar-responsive .view-favorites').toggleClass('active').children().toggleClass('fa fa-star').toggleClass('fa fa-star-o'); // responsive mode
                $('.view-favorites').attr('data-original-title', 'View marked opportunities');
            } else { // Remove Mark
                $(this).html("<i class='fa fa-star'></i> Mark This").attr('alt', 'Mark This'); // Update tooltip and text
                // Disable Save Search - Mark this pill
                $('.view-favorites').children().removeClass('animated rotateIn');
                $('.midas .sidebar-responsive .view-favorites').toggleClass('active').children().toggleClass('fa fa-star').toggleClass('fa fa-star-o'); // responsive mode
                $('.view-favorites').attr('data-original-title', 'Nothing is marked for later');
            }
            markStatus.toggleClass('active animated rotateIn');
        });
        $('.midas.details header .page-actions .btn-group .mark-action').on('click', function() {
            $(this).toggleClass('active');
            $(this).children().toggleClass('fa-star-o').toggleClass('fa-star animated rotateIn');
        });
    },
    hideOpportunity: function() {
        selectedOpportunity = $('#proto-slat');
        $('.midas .opportunities .list .preview .btn-toolbar .hide-action, .midas.details header .page-actions .btn-group .hide-action').each(function() {
            $(this).on('click', function(e) {
                midas_proto.slatPreview();
                setTimeout(function() {
                    selectedOpportunity.addClass('animated slideOutLeft');
                    selectedOpportunity.css({
                        "min-height": "0"
                    });
                }, 250);
                setTimeout(function() {
                    selectedOpportunity.slideUp(300);
                }, 500);
                setTimeout(function() {
                    slatAction.removeClass('active');
                    selectedOpportunity.css({
                        "height": "0"
                    });
                    $('#proto-slat + .preview').hide();
                    selectedOpportunity.hide();
                    selectedOpportunity.removeClass('animated slideOutLeft');
                    $('.alert.opportunity-removed').fadeIn();
                }, 750);
                midas_proto.unhideOpportunity();
            });
        });
    },
    unhideOpportunity: function() {
        $('.unhide-opportunity').on("click", function() {
            selectedOpportunity.css({
                "height": "auto",
                "min-height": "auto"
            });
            selectedOpportunity.addClass('animated slideInLeft');
            selectedOpportunity.show().slideDown(150);
            setTimeout(function() {
                selectedOpportunity.addClass('active');
                $('.alert.opportunity-removed').removeClass('alert-warning').addClass('alert-success').html("<button type='button' class='close' data-dismiss='alert'>×</button><strong><i class='fa fa-check-circle-o'></i></strong> That opportunity is back in your list.");
            }, 250);
        });
    },
    shareOpportunity: function() {
        $('.midas .opportunities .list .preview .btn-toolbar .share-action').on('click', function() {
            // Init select2 filter
            $("#share-emails").select2({
                placeholder: "Type a user's first name, last name, or email address",

                formatNoMatches: function() {
                    return '';
                },
                dropdownCssClass: 'select2-hidden',
                allowClear: true
            });
            // HACKY set focus on share with field
            setTimeout(function() {
                $("#share-emails").select2("open");
                $("#share-emails").select2("close");
                $("#share-emails").attr('placeholder', 'Type a user\'s first name, last name, or email address');
            }, 250);
        });
        $('body').on('keyup', '#modal-share .select2-search-field input', function(e) {
            $('#modal-share .error').hide();
            switch (e.keyCode) {
                case 13: // Enter
                    var shareWithValue = $("#modal-share .select2-search-field input").val();
                    if (shareWithValue) {
                        if (proto.isValidEmailAddress(shareWithValue)) {
                            $('#share-emails').append('<option value="' + shareWithValue + '" selected>' + shareWithValue + '</option>');
                            $('#share-emails').change();
                            $('#share-emails').trigger("chosen:updated");
                        } else {
                            $('#modal-share .error').css({
                                'display': 'block'
                            });
                            $('#modal-share .select2-choices').css({
                                'background': '#faeaeb',
                                'border': '1px solid #e7979d'
                            });
                        }
                    }
                    break;
            }
        });
        $('body').on('mouseup', function(e) {
            $('#modal-share .error').hide();
            $('#modal-share .select2-choices').css({
                'background': 'white',
                'border': '1px solid #bfbfbf'
            });
        });
    },
    addSavedSearches: function() {
        $('.midas .form-inline .save-search').addClass('disabled').attr('disabled', 'disabled');
        $('.midas aside .proto-edit-pills').removeClass('disabled');
        $('.midas aside .pill-list .label-info').show();
        $('.midas aside .pill-list .label-info .fa-times').hide();
        midas_proto.editModePills();
    },
    editModePills: function() {
        $('.midas aside .proto-edit-pills').unbind();
        $('.midas aside .proto-edit-pills').on("click", function() {
            $('.midas aside .proto-edit-pills').addClass('edit-mode');
            $('.midas aside .pill-list').addClass('edit-mode');
            $('.midas aside .pill-list .label-info .fa-times').show('fast').on("click", function() {
                $(this).parent().hide();
                $('.midas aside .proto-edit-pills').removeClass('edit-mode');
                $('.midas aside .proto-edit-pills').addClass('disabled');
            });
            midas_proto.readModePills();
        });
    },
    readModePills: function() {
        $('.midas aside .proto-edit-pills').unbind();
        $('.midas aside .proto-edit-pills').on("click", function() {
            $('.midas aside .proto-edit-pills').removeClass('edit-mode');
            $('.midas aside .pill-list').removeClass('edit-mode');
            $('.midas aside .pill-list .label-info .fa-times').hide('fast');
            midas_proto.editModePills();
        });
    },
    // SLATS FUNCTIONS
    slatActions: function() {
        // Set Correct Slat Heights for slats with more than 2 segments
        slatHeight = $('#proto-slat').height();
        $('#proto-slat .lt-column h3').height(slatHeight - 10);

        // Slat actions
        $('#proto-slat').on("click", function() {
            slatAction = $('.midas .list > dd');
            if (!$(this).hasClass('active')) {
                slatAction.removeClass('active');
                $(this).toggleClass('active');

                // Init Learn More Tooltip
                $('#learn-more-opportunity').tooltip();
            } else {
                // REMOVE CLASS AND HEIGHT
                slatAction.removeClass('active');
            }
            midas_proto.slatPreview();
        });
    },
    viewSlatDetails: function() {
        // Remove active slat height stuff
        slatAction.prev().height('auto').removeClass('active');
        slatAction.removeClass('active');
        // Initiate Select Box Tab Chooser Replacement - Replaces UL tabs from bootstrap
        midas_proto.oppAnalytics();
        // toggle preview closed
        midas_proto.slatPreview();
    },
    slatPreview: function() {
        // show/hide preview area
        previewBox = $('.midas .list .preview');

        if (!previewBox.hasClass('slideDownPreview')) {
            previewBox.toggle().removeClass('slideUpPreview').addClass('slideDownPreview');
            // Close the preview area when taken to details page
            $('.preview nav a[href="#tab1-details"]').unbind().on("click", function() {
                midas_proto.viewSlatDetails();
            });
            $('.preview .rt_column li span').tooltip(); // Add Tooltip when value in preview is truncated
        } else {
            previewBox.removeClass('slideDownPreview').addClass('slideUpPreview');
            setTimeout('previewBox.toggle()', 250);
        }
    },
    // EXCLUSION FUNCTIONS
    exclusionActions: function() {
        // Open Right Panel with Exclusions
        $('.midas.details .proto-action-open-panel').on("click", function() {
            shell.openRtPanel();
            contributorID = $(this).attr('data-id'); // Get the data-id to open correct panel page
            midas_proto.oppDrillIn(contributorID); // Pass the data-id
        });
        // Disable Apply Button until action taken
        $('.midas.details aside article .list-actions .btn-primary').addClass('disabled');
        $('.midas.details aside .opportunity-exclusions .alert').hide();
        // Enable Search Exclusions
        midas_proto.oppSearchResults();
        // Enable Marked for Exclusions
        midas_proto.markExclusion();
        // Enable Filter Exclusions
        midas_proto.filterExclusions();
    },
    oppDrillIn: function(elID) { // Receive the data-id from Details Page
        $('.opportunity-exclusions').hide();
        $('.opportunity-exclusions[data-id="' + elID + '"]').show(); // Show correct data-id panel page
        // HIERARCHY DRILLIN
        $('.proto-drillin').on("click", function() {
            excludeID = $(this).attr('data-id'); // Get panel page data-id
            $('.opportunity-exclusions').hide();
            $('.opportunity-exclusions[data-id="' + excludeID + '"]').show(); // Show correct data-id panel page
            midas_proto.oppDrillBack();
        });
    },
    oppDrillBack: function(elID) { // Receive the data-id
        $('.proto-drill-back').on("click", function() {
            excludeBackID = $(this).attr('data-id'); // Get panel page data-id
            $('.opportunity-exclusions').hide();
            $('.opportunity-exclusions[data-id="' + excludeBackID + '"]').show(); // Show correct data-id panel page
        });
    },
    oppSearchResults: function() {
        // Exclusions Search Results
        var exclusionSearch = $('.opportunity-exclusions input[type="search"]');
        exclusionSearch.keypress(function(e) {
            if (e.which == 13) {
                $('.opportunity-exclusions').hide();
                $('.exclusions-search-results').show();
                $('.fa-times-sign').show().on("click", function() {
                    $('.opportunity-exclusions').hide();
                    $('.opportunity-exclusions[data-id="proto-exclusions"]').show();
                    $('.fa-times-sign').hide();
                });
                return false; // Stop form from sending
            } else {
                $('.fa-times-sign').show();
            }
        });
        midas_proto.oppDrillBack();
    },
    markExclusion: function() {
        $('.drill-list dd > .checkbox').on("click", function(e) {
            // Enable Apply Button until action taken
            //$('.midas.details aside article .list-actions .btn-primary').removeClass('disabled');
            $('.midas.details aside .opportunity-exclusions .alert').show();
            e.stopPropagation();
        });
        markforexclusion = $('.drill-list dd .checkbox input[type="checkbox"]');
        markforexclusion.on("click", function() {
            if (markforexclusion.parent().hasClass('mark-exclusion')) {
                markThis = $(this).parent().removeClass('mark-exclusion');
            } else {
                markThis = $(this).parent().addClass('mark-exclusion');
            }
        });
    },
    filterExclusions: function() {
        // custom css expression for a case-insensitive contains()
        jQuery.expr[':'].Contains = function(a, i, m) {
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };

        // Variables
        filter_box = $(".opportunity-exclusions .form-inline input[type='search']");
        remove_icon = $(".form-inline input[type='search'] + i");
        list = $(".form-inline .drill-list");

        // Filter the list
        filter_box.change(function() {
            remove_icon.show().on("click", function() {
                filter_box.val("");
                $(this).hide();
                $(".form-inline .drill-list dd label").parent().show();
            });
            var filter = $(this).val();
            if (filter) {
                // this finds all links in a list that contain the input,
                // and hide the ones not containing the input while showing the ones that do
                $(list).find("dd label:not(:Contains(" + filter + "))").parent().hide();
                $(list).find("dd label:Contains(" + filter + ")").parent().show();
            } else {
                $(list).find("dd label").show();
            }
            return false;
        }).keyup(function() {
            // fire the above change event after every letter
            $(this).change();
        });
    },
    detailsPage: function() {
        // BEGIN: CONTRIBUTORS TABLE BEHAVIORS
        /////////////

        // Toggle Row 
        var contributorTableRow = $('.tab-content.contributors .table tr');
        // get all table rows except .actions
        var contributorRow = $('.tab-content.contributors .table').find('tr').not('.actions');
        contributorRow.on('click', function(event) {
            // Table Check
            var contributorTable = $(this).parents('table');

            if (!contributorTable.hasClass("non-collapsible")) {
                var actionsContainer = $(this).next('.actions').find('p');
                // CLOSE ALL PREVIOUS .selected ROWS
                $('.midas.details .tab-content.contributors .table tr').removeClass('selected');

                if ($(this).data('clicked')) { // CLOSE ROW
                    $(this).data('clicked', false);
                    // remove .selected to clicked row
                    $(this).removeClass('selected');
                    // Toggle up/down divet
                    $(this).find('.action-divet i').removeClass('fa-angle-up').addClass('fa-angle-down');
                    // Animate closing row
                    actionsContainer.removeClass('slideDownRow').addClass('slideUpRow');
                    // Delay hiding row to allow for animation time
                    $(this).next('.tab-content.contributors .table .actions').delay(250).fadeOut('fast');
                } else { // OPEN ROW
                    // 1st close any open rows
                    // set the previous opened row to not clicked
                    $('.midas.details .tab-content.contributors .table tr').data('clicked', false);
                    // Toggle down divet
                    $('.midas.details .tab-content.contributors .table tr .action-divet i').removeClass('fa-angle-up').addClass('fa-angle-down');
                    // Animate closing row
                    $('.midas.details .tab-content.contributors .table .actions p').removeClass('slideDownRow').addClass('slideUpRow');
                    // Delay hiding row to allow for animation time
                    $('.midas.details .tab-content.contributors .table .actions').hide();

                    // Open Row
                    $(this).data('clicked', true);
                    // Show row first before animation
                    $(this).next('.midas.details .tab-content.contributors .table .actions').show();
                    // Toggle up/down divet
                    $(this).find('.action-divet i').removeClass('fa-angle-down').addClass('fa-angle-up');
                    // Add .selected to clicked row
                    $(this).addClass('selected');
                    // Animate opening row
                    actionsContainer.removeClass('slideUpRow').addClass('slideDownRow');
                }
            };

        });


        // Exclude Row
        contributorTableRow.on("mouseover", function() {
            excludeBtn = $('.midas .table .actions .proto-exclude-row');
            // Click Exclusion button - hides read only icon
            excludeBtn.on('click', function() {
                // Add .exclusion class to row
                $(this).parent().parent().parent().prev().removeClass('excluded');
                $('.tab-content.contributors .table tr.selected td:first-child i').hide();
                // Progress Loader for Button
                excludeBtn.button('loading');
                // Delay to FAKE EXCLUDING DATA
                window.setTimeout(function() {
                    // Reset Progress Loader for Button
                    excludeBtn.button('reset');
                    $('.table .reveal .btn:last-child i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
                    excludeBtn.html('<i class="fa fa-minus-circle"></i> Exclude');
                }, 1200);
            });

        });

        // BEGIN: ROOT CAUSE POPOVER IN CHART LEGEND
        /////////////

        // BEGIN: ROOT CAUSE NAVIGATION BEHAVIORS
        /////////////
        var charts = ["Delta Percentage from Floor - Cost of Goods and Pocket Margin", "Comparative Waterfall", "Time Series"];
        var links = ["scatter_chart_help.html", "root_cause_help.html", "time_series_help.html"];
        var current_chart = 0;
        $('#root-cause-btn-left').prop("disabled", true);
        $('#root-cause-btn-left').on("click", function() {
            if (current_chart > 0) {
                current_chart = current_chart - 1;
                $('.root-cause-nav span').html(charts[current_chart] + '<a href="external_pages/user_assistance/' + links[current_chart] + '" target="_blank" onclick="window.open(this.href,\'targetWindow\',\'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600\');return false;" class="butcon"><i class="info fa fa-info-circle"></i></a>');
                (current_chart == 2) ? $('#root-cause-btn-right').prop("disabled", true) : $('#root-cause-btn-right').prop("disabled", false);
                (current_chart == 0) ? $('#root-cause-btn-left').prop("disabled", true) : $('#root-cause-btn-left').prop("disabled", false);
            }
        });
        $('#root-cause-btn-right').on("click", function() {
            if (current_chart < 2) {
                current_chart = current_chart + 1;
                $('.root-cause-nav span').html(charts[current_chart] + '<a href="external_pages/user_assistance/' + links[current_chart] + '" target="_blank" onclick="window.open(this.href,\'targetWindow\',\'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600\');return false;" class="butcon"><i class="info fa fa-info-circle"></i></a>');
                (current_chart == 2) ? $('#root-cause-btn-right').prop("disabled", true) : $('#root-cause-btn-right').prop("disabled", false);
                (current_chart == 0) ? $('#root-cause-btn-left').prop("disabled", true) : $('#root-cause-btn-left').prop("disabled", false);
            }
        });
    }
};
$(midas_proto.init);