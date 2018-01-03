// This JS is init from global.js in the openModalView() func, this allows this JS to be re-init

var pricelookup = {};

pricelookup = {
    init: function() {
        pricelookup.searchResults();
        pricelookup.openPriceHistory();
    },
    searchResults: function() {
        // Price Lookup List: DrillIn to Details
        $('.price-lookup .price-search-results dd > a').on("click", function() {
            // Close Pinned Sidebar Menu
            global.closeSidebarMenu();
            // Drill into details
            global.listDrillIn($(this)); // Pass which drill list (this)
            // Show DrillOut Button
            global.showDrillOutBtn();
            // Get what contextual pane content to show
            contextual_pane_content_id = $(this).attr('data-show-contextual');
            // Pass what contextual pane content to show
            global.contextualPaneContent(contextual_pane_content_id);
            // Which contextual pane to show
            dealdetails.rowContent();
            // Init Contextual Pane
            global.responsiveContextualPane();
            // Show Details Page
            global.showDetailsPage($(this));
            // Bind reopening of sidebar menu
            $('.active-drillin > .navbar-fixed-top.drill-out .butcon.back').bind("click", function() {
                // Open Pinned Sidebar Menu
                global.openSidebarMenu();
            });
        });
    },
    openPriceHistory: function() {
        $('.infobox a').on('click', function () {
            // Init Contextual Pane
            global.responsiveContextualPane();
        });
        $('.vsnb .contextual-pane .navbar-fixed-top .close-pane').on("click", function() {
            // Close Contextual Pane
            global.closeContextualPane();
        });
    }
};
pricelookup.init();