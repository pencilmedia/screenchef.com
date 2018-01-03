 /* ===================================================
  * Global.js - Custom JavaScript
  * =================================================== */

 // GLOBAL VARIABLES
 var global = {};
 var viewportWidth = $(window).width();

 // MODAL MENU VARS
 var menuOverlay = $(".vsnb .modal-overlay");
 var menuTrigger = $(".vsnb .modal-menu");
 var responsiveMenuTrigger = $(".responsive-menu");

 global = {
    init: function() {
        global.initPlugins();
        global.checkResponsive();
        global.responsiveMenu();
        global.sidebarMenu();
        global.contextualPane();
        global.modalViewActions();
        global.formBehaviors();
        $("#e1").select2();
        $("#e2").select2();
    },
    // INIT PLUGINS
    ///////////////
    initPlugins: function() {
        // Init fastclick plugin
        $(function() {
            FastClick.attach(document.body);
        });
    },
    // RESPONSIVE BEHAVIORS
    ///////////////////////
    checkResponsive: function() {
        // Initial check of viewport width
        // add responsive class to trigger js and special stylings
        if (viewportWidth <= 768) {
            $(".vsnb").removeClass('wideViewport').addClass('slimViewport');
        } else {
            $(".vsnb").removeClass('slimViewport').addClass('wideViewport');
        }
        // Responsive JS - onResize
        var resizeMethod = function() {
            if (document.body.clientWidth <= 768) {
                $(".vsnb").removeClass('wideViewport').addClass('slimViewport');
            }
            if (document.body.clientWidth > 768) {
                $(".vsnb").removeClass('slimViewport').addClass('wideViewport');
            }
        };
        //Attach event for resizing
        window.addEventListener("resize", resizeMethod, true);
    },
    responsiveMenu: function() {
        // Check desktop or mobile, bind correct behavior to customer button
        if (viewportWidth > 480) {
            // Show desktop menu
            global.desktopCustomerBtn();
        } else if (viewportWidth <= 480) {
            // Show full screen mobile menu
            global.mobileCustomerBtn();
        }
        // RESIZING behavior
        $(window).resize(function(event) {
            var liveMenuViewport = $(document).width();
            if (liveMenuViewport > 480) {
            // Show desktop menu
                global.desktopCustomerBtn();
            } else if (liveMenuViewport <= 480) {
            // Show full screen mobile menu
                global.mobileCustomerBtn();
            }
        });
    },
    desktopCustomerBtn: function() {
        responsiveMenuTrigger.unbind().removeClass('modal-menu').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    },
    mobileCustomerBtn: function() {
        responsiveMenuTrigger.removeClass('dropdown-toggle').removeAttr('data-toggle');
        // If desktop mode, bind button with popover menu, else on mobile and init action sheet menu
        responsiveMenuTrigger.popover('disable');
        responsiveMenuTrigger.addClass('modal-menu');
        $(".modal-menu").on("click", function() {
            global.openModalView($(this));
        });
    },
    // SIDEBAR BEHAVIORS
    ////////////////////
    // TRIGGER SIDEBAR MENU
    sidebarMenu: function() {
        // Sidebar Icon
        global.sidebarSwapText();
        // Sidebar Vars
        sidebarMenu = $('.vsnb .sidebar-menu');
        sidebarMask = $('.vsnb .mask');
        // BIND menu action butcon
        $('.vsnb .navbar-fixed-top .sidebar-action').on('click', function() {
            // Open Sidebar
            global.openModalSidebarMenu();
            // Close sidebar on click anywhere
            $(":not(#anything)").on('click', function(e) {
                $(".sidebar-action").each(function() {
                    //the 'is' for buttons that trigger popups
                    //the 'has' for icons and other elements within a button that triggers a popup
                    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.sidebar-menu').has(e.target).length === 0) {
                        global.closeModalSidebarMenu();
                        return;
                    }
                });
            });
        });
        if (viewportWidth <= 768) {
            sidebarMenu.hide();
        } else {
            // On desktop don't show sidebar-menu for price lookup page
            if (!$('.wideViewport').hasClass('price-lookup')) {
                sidebarMenu.show();
            }
        }
        // RESIZING behavior
        $(window).resize(function(event) {
            var viewportWidth = $(document).width();
            // AUTO CLOSE Sidebar on resize
            if (viewportWidth <= 768) {
                // sidebar is visible so hide non modal sidebar
                //  sidebarMenu.hide();
                global.closeSidebarMenu();
                // modal sidebar is visible so hide modal sidebar
                if (sidebarMask.is(':visible')) {
                    global.closeModalSidebarMenu();
                    return false;
                }
            }
            if (viewportWidth > 768) {
                // AUTO PIN Sidebar on resize when desktop resolution ".wideViewport"
                if ($('.wideViewport .sidebar-menu').is(':visible')) {
                    // sidebar is already open so do nothing
                } else {
                    global.openSidebarMenu();
                }
                // not in drillin or details mode so run openSidebarMenu()
                if (!$('.vsnb').hasClass('active-drillin')) {
                    global.openSidebarMenu();
                }
                if ($('.vsnb').hasClass('active-drillin')) {
                    sidebarMenu.hide();
                    return false;
                }
                return false;
            }
        });
    },
    // OPEN SIDEBAR MENU
    openModalSidebarMenu: function() {
        // Toggle sidebar-closed class which tells CSS what padding-left to apply
        $('.vsnb').removeClass('sidebar-closed');
        // Remove possible existing animation classes (might be there if user resized window)
        sidebarMask.removeClass('fadeIn fadeOut');
        sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
        // Responsive - slimViewport show mask
        sidebarMask.show().addClass('fadeIn');
        // Show left pane and add animate in
        sidebarMenu.show().addClass('fadeInLeftBig');
    },
    // CLOSE SIDEBAR MENU
    closeModalSidebarMenu: function() {
        // Toggle sidebar-closed class which tells CSS what padding-left to apply
        $('.vsnb').addClass('sidebar-closed');
        // Remove possible existing animation classes (might be there if user resized window)
        sidebarMask.removeClass('fadeIn fadeOut');
        sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
        // Animate sidebar menu out
        sidebarMenu.addClass('fadeOutLeftBig');
        // Animate Mask Out
        sidebarMask.addClass('fadeOut');
        // Hide Menu and Mask
        setTimeout(function() {
            sidebarMask.hide();
            sidebarMenu.hide();
            sidebarMask.removeClass('fadeIn fadeOut');
            sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
        }, 500);

    },
    /* SIDEBAR NON MODAL NO MASK BEHAVIOR */
    // DESKTOP BEHAVIOR - Drilling in/out to details closes/opens sidebar with no mask
    ///////////////////////////////////
    // OPEN JUST SIDEBAR MENU - NOT MASK
    openSidebarMenu: function() {
        // Toggle sidebar-closed class which tells CSS what padding-left to apply
        $('.vsnb').removeClass('sidebar-closed');
        // If in desktop mode open pinned sidebar again
        if ($(document).width() > 768) {
            // Remove possible existing animation classes (might be there if user resized window)
            sidebarMask.removeClass('fadeIn fadeOut');
            sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
            // Show left pane and add animate in
            sidebarMenu.show();
        }
    },
    // CLOSE JUST SIDEBAR MENU - NOT MASK
    closeSidebarMenu: function() {
        if ($(document).width() > 768) {
            // Toggle sidebar-closed class which tells CSS what padding-left to apply
            $('.vsnb').addClass('sidebar-closed');
            // Remove possible existing animation classes (might be there if user resized window)
            sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
            // Animate sidebar menu out
            sidebarMenu.addClass('fadeOutLeftBig');
            // Hide Menu and Mask
            setTimeout(function() {
                sidebarMenu.hide();
                sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
            }, 500);
        } else {
            sidebarMenu.removeClass('fadeOutLeftBig fadeInLeftBig');
            sidebarMenu.hide();
        }
    },
    sidebarSwapText: function() {
        // Swap header text with selected menu text
        sidebarMenuHeader = $('.navbar-fixed-top .sidebar-action h1');
        // Grab the menu text and not the children
        sidebarActiveText = $('.vsnb .sidebar-menu .nav .active a').clone().children().remove().end().text();
        // Swap the text in the header
        sidebarMenuHeader.removeClass().text(sidebarActiveText);
    },
    // CONTEXTUAL PANE (Right Pane)
    ///////////////////////
    // INIT CONTEXTUAL PANE
    contextualPane: function() {
        // Contextual Pane Vars
        contextualPane = $('.vsnb .contextual-pane');
        // hide pane on page load
        contextualPane.hide();
        // bind event for showing contextual pane
        global.showContextualPane();
    },
    responsiveContextualPane: function() {
        // Check viewport width
        if (viewportWidth <= 768) {
            // hide contextual-pane
            global.closeContextualPane();
        } else {
            // show contextual-pane
            global.openContextualPane();
        }
        // RESIZING behavior
        $(window).resize(function(event) {
            var liveViewportWidth = $(document).width();
            // AUTO CLOSE Contextual-pane on resize
            if (liveViewportWidth <= 768) {
                // contextual-pane is visible so hide it
                global.closeContextualPane();
            }
            if (liveViewportWidth > 768) {
                // AUTO PIN Contextual-pane on resize when desktop resolution ".wideViewport"
                // contextual-pane is already open so do nothing
                if ($('.wideViewport .contextual-pane').is(':visible')) {
                    global.openContextualPane();
                    return false;
                } else {
                    global.openContextualPane();
                }
                return false;
            }
        });
    },
    openContextualPane: function() {
        // Remove conflicting animation classes
        contextualPane.removeClass('fadeOutRightBig');
        // Show and Fade In From Right
        contextualPane.show().addClass('fadeInRightBig');
    },
    closeContextualPane: function() {
        // Remove conflicting animation classes
        contextualPane.removeClass('fadeInRightBig');
        // Show and Fade In From Right
        contextualPane.show().addClass('fadeOutRightBig');
    },
    contextualPaneContent: function(pane_id) {
        // Hide all contextual pane content (section)
        $(".contextual-pane .contextual-overflow").hide();
        // Receive the contextual pane_id to show
        contextual_pane_id = pane_id;
        // Match the pane_id to data-id to show correct content in contextual pane
        $('.contextual-pane .contextual-overflow[data-id="' + contextual_pane_id + '"]').show();

        // STATIC - Pin Footer when content is scrollable
        paneHeight = contextualPane.height();
        paneContentHeight = $('.contextual-pane .contextual-overflow[data-id="' + contextual_pane_id + '"]').height();
        if (paneHeight < paneContentHeight) {
            /* Allow space at end of form for footer */
            $('.contextual-pane .contextual-overflow').css('padding-bottom','75px');
            $('.contextual-pane .contextual-overflow > footer').addClass('fixed-bottom');
        } else {
            /* Remove space at end of form for footer */
            $('.contextual-pane .contextual-overflow').css('padding-bottom','0');
            $('.contextual-pane .contextual-overflow > footer').removeClass('fixed-bottom');
        }

        // RESIZING - Pin Footer when content becomes scrollable
        $(window).resize(function(event) {
            var livePaneHeight = contextualPane.height();
            var livePaneContentHeight = $('.contextual-pane section[data-id="' + contextual_pane_id + '"]').height();
            if (livePaneHeight < livePaneContentHeight) {
                // contextual-pane content is taller so pin footer
                $('.contextual-pane .contextual-overflow footer').addClass('fixed-bottom');
            } else {
                // contextual-pane content is NOT taller so remove pin footer
                $('.contextual-pane .contextual-overflow footer').removeClass('fixed-bottom');
            }
        });
    },
    showContextualPane: function() {
        // Show Contextual Pane Content - NOT FOR DEAL LIST SLATS
        // .not(".vsnb.slimViewport .deal-listings .deal-list dd > a")
        $(".vsnb [data-show-contextual]").on("click", function() {
            // Check to see if this is the create button, if so needs special class to add dropshadow
            var createNewBtn = $(this).attr('data-show-contextual');
            if ( createNewBtn == 'create-quote' || createNewBtn == 'create-agreement') {
                $('.vsnb').addClass('contextual-pane-open');
                $('.vsnb .contextual-pane .navbar-fixed-top .close-pane').show();
            }
            // run responsive check - closes right panel if resized smaller than 768
            global.responsiveContextualPane();
            // If click is from .deal-list slat in mobile mode (.slimViewport), then don't open
            if ($(this).parents().is('.slimViewport .deal-list')) {
                // HIDE Contextual Pane -- NOTE not closeContextualPane() because that causes flicker
                contextualPane.hide();
            } else {
                // Open Contextual Pane
                global.openContextualPane();
            }
            // Get what contextual pane content to show
            contextual_pane_content_id = $(this).attr('data-show-contextual');
            // Pass what contextual pane content to show
            global.contextualPaneContent(contextual_pane_content_id);
            // Bind Contextual Pane Close Button
            $('.vsnb .contextual-pane .navbar-fixed-top .close-pane').on("click", function() {
                if ($('.vsnb').hasClass('contextual-pane-open')) {
                    $('.vsnb').removeClass('contextual-pane-open');
                $('.vsnb .contextual-pane .navbar-fixed-top .close-pane').hide();
                }
                // Close Contextual Pane
                global.closeContextualPane();
            });
        });
    },
    // MODAL MENU BEHAVIORS
    ///////////////////////
    // TRIGGER MODAL MODE
    modalViewActions: function() {
        // Bind Open Menu Buttons
        menuTrigger.on("click", function() {
            global.openModalView($(this));
        });
        // Bind Close Button and Action
        $(".vsnb .modal-overlay header .close-view").on("click", function() {
            global.closeModalView();
        });
    },
    // OPEN MODAL MODE
    openModalView: function(e) {
        // Remove any animation classes, to prevent animating when shown 2nd, 3rd, etc times after 1st time
        $('.drill-list > .lt-column').removeClass('animate drillOutPageLeft drillInPageLeft');
        $('.drill-list > .rt-column').removeClass('animate drillOutPageRight drillInPageRight');

        // -- OPEN OVERLAY -- //
        // Capture passed ID
        var menuID = e.attr('data-id');
        // Show Menu
        menuOverlay.show();
        // Animation
        menuOverlay.removeClass("expandClose").addClass("expandOpen"); // alternatively use .expandClose
        // Show Content in Menu
        $('.vsnb .modal-overlay section[data-id]').hide();
        $('.vsnb .modal-overlay section[data-id="' + menuID + '"]').show();
        // Disable body scrolling - This prevents touch device from revealing and scrolling the content beneath the modal
        $("body").css({
            'position': 'fixed',
            'overflow': 'hidden'
        });

        // Init specific page JS when menu trigger pressed
        switch (menuID) {
            // Init create_deal.js
            case "create-deal":
                createdeal.init();
                break;
            default:
                return;
        }
    },
    // CLOSE MODAL MODE
    closeModalView: function() {
        // -- CLOSE OVERLAY -- //
        // Enable body scrolling
        $("body").removeAttr("style");
        //Animation
        menuOverlay.removeClass("expandOpen").addClass("expandClose"); // alternatively use .fadeOutDownBig
        // Timing
        setTimeout(function() {
            menuOverlay.hide();
        }, 250);
    },
    formBehaviors: function() {
        // Select List Control Focus Behaviors
        $('.edit-form select').focusin(function() {
            $(this).css("border-bottom", "1px solid #4a90e2");
        });
        $('.edit-form select').focusout(function() {
            $(this).removeAttr('style');
        });
        // Auto expand Text Areas
        $(document).one('focus.textarea', '.auto-expand', function() {
            var savedValue = this.value;
            this.value = '';
            this.baseScrollHeight = this.scrollHeight;
            this.value = savedValue;
        }).on('input.textarea', '.auto-expand', function() {
            var minRows = this.getAttribute('data-min-rows') | 0,
                rows;
            this.rows = minRows;
            console.log(this.scrollHeight, this.baseScrollHeight);
            rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
            this.rows = minRows + rows;
        });


    },
    // Drill In/Out List Behaviors
    ///////////////////////////////
    // DRILL IN
    listDrillIn: function(element) {
        // Target only the specific drill list by adding class to it's parent
        drillList = element.closest('.drill-list');
        drillList.addClass('active');
        drillListActive = $('.vsnb .drill-list.active');
        drillListParent = drillListActive.parent();
        drillListParent.addClass('active-drillin');

        // reusable variables for listDrillIn and listDrillOut
        leftColumn = $('.active-drillin > .drill-list > .lt-column');
        rightColumn = $('.active-drillin > .drill-list > .rt-column');

        // Remove any animation classes
        global.removeDrillClasses();

        // allow some time before adding animation
        setTimeout(function() {
            // RIGHT COLUMN
            // slide right column in
            rightColumn.show();
            rightColumn.addClass('animate drillInPageRight');
        }, 250);

        // LEFT COLUMN
        // slide left column out
        leftColumn.addClass('animate drillOutPageLeft');

        // hide left column - delayed for animation
        setTimeout(function() {
            leftColumn.hide();
        }, 250);

        global.showDrillOutBtn();
    },
    // DRILL BACK 
    listDrillOut: function() {
        // Remove Drill List  Target class
        drillList.removeClass('active')
        drillListParent.removeClass('active-drillin');

        // Remove any animation classes
        global.removeDrillClasses();

        // slide right column out
        rightColumn.addClass('animate drillOutPageRight');

        // hide right column - delayed for animation
        setTimeout(function() {
            rightColumn.hide();
            rightColumn.removeClass('animate drillOutPageRight');
        }, 250);

        // hide right contextual-pane
        global.closeContextualPane();

        // slide left column in
        leftColumn.addClass('animate drillInPageLeft');

        // allow some time before showing lt-column
        setTimeout(function() {
            leftColumn.show();
            global.hideDrillOutBtn();
        }, 250);

        // allow some time before removing animation
        setTimeout(function() {
            // Remove Animation Classes
            global.removeDrillClasses();
        }, 750);
    },
    // SHOW DRILL BACK TO LIST BUTTON IN NAVBAR
    showDrillOutBtn: function() {
        // Show Back to List butcon when viewing details page
        $('.active-drillin > .navbar-fixed-top').addClass('drill-out');
        $('.active-drillin > .navbar-fixed-top.drill-out .back').on("click", function() {
            global.listDrillOut();
            global.hideDrillOutBtn();
        });
    },
    // REMOVE DRILLIN CLASSES
    removeDrillClasses: function() {
        leftColumn.removeClass('animate drillOutPageLeft drillInPageLeft');
        rightColumn.removeClass('animate drillOutPageRight drillInPageRight');
    },
    // Drill Back Button Behaviors
    ///////////////////////////////
    // HIDE DRILL BACK TO LIST BUTTON IN NAVBAR
    hideDrillOutBtn: function() {
        // Hide Back to List butcon when returning to list
        $('.vsnb .navbar-fixed-top').removeClass('drill-out');
        $('.vsnb .navbar-fixed-top.drill-out .butcon.back').on("click", function() {
            $('.vsnb .navbar-fixed-top').removeClass('drill-out');
            global.listDrillOut();
        });
    },
    // Details Page 
    ///////////////////////////////
    // SHOW WHICH DETAIL PAGES
    showDetailsPage: function(element) {
        // Grab data-id to pass
        slatID = element.attr('data-id');
        // Hide all articles (details pages)
        $('.vsnb .details-pane article[data-id]').hide();
        $('.vsnb .details-pane article[data-id="' + slatID + '"]').show();
    }
 };
 $(global.init);