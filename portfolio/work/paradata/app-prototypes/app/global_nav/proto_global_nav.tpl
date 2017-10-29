<header class="paradata-global-navbar" role="navigation">
    <!-- App Switcher Menu -->
    <div class="paradata-nav-box">
        <button type="button" id="paradata-app-switcher-trigger" class="paradata-app-switcher-trigger">
            <img src="@@context/global_nav/img/paradata_tile.png" alt="Paradata Solutions">
            <span>@@productTitle</span>
        </button>
        <nav id="paradata-app-switcher-menu" class="paradata-app-switcher-menu paradata-animate">
            <ul class="paradata-app-menu paradata-apps" role="menu">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="@@context/pages/bom.html" data-id="@@bomID">@@bomTitle</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="@@context/pages/catalog.html" data-id="@@catalogID">@@catalogTitle</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="@@context/new_material.html" data-id="@@nmrID">@@nmrTitle</a></li>
            </ul>
            <ul class="paradata-app-menu paradata-admin" role="menu">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="@@context/pages/manager.html" data-id="@@usersID">@@usersTitle</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-id="@@dictionaryID">@@dictionaryTitle</a></li>
                <li class="paradata-divider">&nbsp;</li>
                <li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="@@context/" data-id="@@accountsID">@@accountsTitle</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-id="@@usageID">@@usageTitle</a></li>
            </ul>
            <p class="paradata-branding"><img src="@@context/global_nav/img/logo_paradata.png"></p>
        </nav>
    </div>
    <!-- Back Button -->
    <button class="paradata-btn paradata-btn-icon paradata-go-back" title="Back to Previous Page" data-toggle="tooltip" data-placement="right" onclick="window.location.href='index.html'"><i class="paradata-fa paradata-chevron-left"></i></button>
    <!-- Courtesy Menu -->
    <div class="paradata-nav-box">
        <!--<button type="button" class="paradata-btn paradata-btn-icon" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><i class="paradata-fa paradata-inbox"></i></button>-->
        <button id="paradata-courtesy-menu-trigger" class="paradata-btn paradata-courtesy-menu-trigger" type="button">Henry Lowell<span class="paradata-caret"></span></button>
        <ul class="paradata-courtesy-menu paradata-app-menu paradata-animate paradata-fadeIn" role="menu">
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">My Profile</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">My Settings</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Reset Password</a></li>
            <li role="presentation" class="paradata-divider"></li>
            <li class="paradata-dropdown-header">Prototype Only</li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="@@context/styleguide.html">Style Guide</a></li>
            <li role="presentation" class="divider"></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="@@context/authenticate.html">Logout</a></li>
        </ul>
    </div>
</header>