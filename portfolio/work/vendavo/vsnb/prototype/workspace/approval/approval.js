// This JS is init from global.js in the openModalView() func, this allows this JS to be re-init

var pricelookup = {};

pricelookup = {
    init: function() {
        pricelookup.searchResults();
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
            // Show Details Page
            global.showDetailsPage($(this));
            // Bind reopening of sidebar menu
            $('.active-drillin > .navbar-fixed-top.drill-out .butcon.back').bind("click", function() {
                // Open Pinned Sidebar Menu
                global.openSidebarMenu();
            });
        });
    }
};
pricelookup.init();