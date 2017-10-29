<!-- NAVBAR POPOVER MENUS -->

<!-- App Switcher -->
<!-- NOTE: This is the App Switcher HTML content that fills the popover in global.js -->
<nav id="app-switcher-menu" class="app-switcher-menu animate25s fadeOutUpBig">
	<div class="app-switcher-content">
        <ul class="nav nav-stacked workspaces" role="menu">
          <li class="app-opportunities <?php if ($thisPage==marginOppsTitle) echo "active"; ?>"><a <?php echo 'href="' . $ROOT . 'workspaces/vpa/"' ?>><?php echo marginOppsTitle ?></a></li> <!-- Previously: 'href="' . $ROOT . 'workspaces/vpa/"' -->
          <li class="app-pricedata <?php if ($thisPage==dataTitle) echo "active"; ?>"><a <?php echo 'href="' . $ROOT . 'workspaces/data/"' ?>><?php echo dataTitle ?></a></li>
          <li class="app-powerrisk <?php if ($thisPage==powerRiskTitle) echo "active"; ?>"><a <?php echo 'href="' . $ROOT . 'workspaces/power_risk/"' ?>><?php echo powerRiskTitle ?></a></li>
          <li <?php if ($thisPage==usersTitle) echo "class='active'"; ?>><a <?php echo 'href="' . $ROOT . 'workspaces/users/"' ?> role="menuitem"><?php echo usersTitle ?></a></li>
          <li <?php if ($thisPage==accountTitle) echo "class='active'"; ?>><a <?php echo 'href="' . $ROOT . 'workspaces/account_profile/"' ?> role="menuitem"><?php echo accountTitle ?></a></li>
          <li <?php if ($thisPage==settingsTitle) echo "class='active'"; ?>><a <?php echo 'href="' . $ROOT . 'workspaces/account_settings/"' ?> role="menuitem"><?php echo settingsTitle ?></a></li>
          <li <?php if ($thisPage==customerAccountsTitle) echo "class='active'"; ?>><a <?php echo 'href="' . $ROOT . 'workspaces/customer_accounts/"' ?> role="menuitem"><?php echo customerAccountsTitle ?></a></li>
          <li <?php if ($thisPage==customerUsersTitle) echo "class='active'"; ?>><a <?php echo 'href="' . $ROOT . 'workspaces/customer_users/"' ?> role="menuitem"><?php echo customerUsersTitle ?></a></li>
          <li <?php if ($thisPage==customerCommunicationTitle) echo "class='active'"; ?>><a <?php echo 'href="' . $ROOT . 'workspaces/customer_communication/"' ?> role="menuitem"><?php echo customerCommunicationTitle ?></a></li>
        </ul>
	</div>
</nav>

<!-- Courtesy Menu -->
<!-- NOTE: This is the courtesy menu HTML content that fills the popover in global.js -->
<nav id="courtesy-menu-content" style="display:none">
  <div class="drillcards courtesy-menu-content">
    <div class="drilldown"><!-- required -->
      <div class="drilldown-container"><!-- required -->
          <ul class="drilldown-root">
            <li>
              <a id="proto-action-tour" href="#modal-vpa-tour" data-toggle="modal">Display Profit Advisor Overview</a>
            </li>
            <li>
              <a href="#" class="drill-action">Settings <i class="fa fa-chevron-right"></i></a>
              <!-- BACK SIDE -->
              <ul class="drilldown-sub"><!-- required for deeper (non-root) levels -->
                <li class="drilldown-back">
                  <a href="#" class="drill-action-back"><i class="fa fa-chevron-left"></i></a> Settings
                </li><!-- required to be able to go back -->
                <li class="drilldown-backside">
                  <ul>
                    <li>
                      <a href="#update-profile-modal" data-toggle="modal">Update Profile</a>
                    </li>
                    <li>
                      <a href="#change-password-modal" data-toggle="modal">Change Password</a>
                    </li>
                  </ul>
              </ul>
            </li>
            <li class="divider"></li>
            <li>
              <a <?php echo 'href="' . $ROOT . 'signout.php"' ?>>Sign Out</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</nav>




<!-- Below is purely for prototype purposes. DO NOT INCLUDE IN PRODUCTION. Prototype Menu -->

<style>
  .proto-menu {max-width: 550px;}
  .proto-menu .lt-column dt,
  .proto-menu .rt-column dt,
  .proto-menu .lt-column dd,
  .proto-menu .rt-column dd {
      display: block;
      width: 100%;
      text-align: left;
  }
  .proto-menu .lt-column dt,
  .proto-menu .rt-column dt {
      padding: 15px 0 0 0;
  }
  .proto-menu .lt-column dd,
  .proto-menu .rt-column dd {
      padding: 5px;
  }
  .proto-menu .lt-column dt a,
  .proto-menu .rt-column dt a,
  .proto-menu .lt-column dd a,
  .proto-menu .rt-column dd a  {
    border: none;
    text-decoration: none;
  }
</style>
<nav id="proto-menu" style="display: none">
  <div class="proto-menu colonnade">
    <dl class="lt-column">
      <dt>Web Fonts</dt>
      <dd>
        <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Proto: Font Awesome Icon List</a>
      </dd>
      <dd>
        <a <?php echo 'href="' . $ROOT . 'assets/fonts/icomoon/docs/icon_list.html"' ?>target="_blank">Proto: Custom Icon List</a>
      </dd>
      <dt>Authentication &amp; Server Pages</dt>
      <dd>
        <a <?php echo 'href="' . $ROOT . 'authenticate.php"' ?> target="_blank">Proto: Sign In Page</a>
      </dd>
      <dd>
        <a <?php echo 'href="' . $ROOT . 'common_services/404_Page/"' ?> target="_blank">Proto: 404 Error Page</a>
      </dd>
      <dd>
      <dd><a <?php echo 'href="' . $ROOT . 'vshell/progress_indicator/index.php"' ?>>Proto: Progress Indicators and Alerts</a></dd>
      </dd>
      <dd>
        <a href="#tab19" data-toggle="tab">Proto: Details Chart Popovers</a>
      </dd>
      <dt>VPA Email Templates</dt>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/share_grant_opportunity.html"' ?>>Share and Grant Privilege</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/share_non_vpa_opportunity.html"' ?>>Share Opportunity with non-user</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/new_opportunities.html"' ?>>New Opportunities</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/no_opportunities.html"' ?>>No Opportunities</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/error_analyzing_data.html"' ?>>Error Analyzing Data</a></dd>
      <dt>Standalone apps</dt>
      <dd><a href="http://vsn.vendavo.com" target="_blank">VSN-b</a></dd>
    </dl>
    <dl class="rt-column">
      <dt>VSS Email Templates</dt>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/welcome_vendavo.html"' ?>>Welcome to Vendavo</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/welcome_account_owner.html"' ?>>Welcome Account Owner</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/first_sign_in.html"' ?>>First Time Sign In</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/account_updated.html"' ?>>Account Updated</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/application_activated.html"' ?>>Application Activated</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/password_reset.html"' ?>>Password Reset</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/password_changed.html"' ?>>Password Changed</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/email_changed.html"' ?>>Email Address Changed</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/owner_changed.html"' ?>>Account Owner Changed</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/account_created.html"' ?>>Account Created</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/activation_canceled.html"' ?>>Activation Canceled</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/activation_extended.html"' ?>>Activation Extended</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/application_deactivated.html"' ?>>Application Deactivated</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/application_deactivated.html"' ?>>Application Deactivated</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/deactivation_canceled.html"' ?>>Deactivation Canceled</a></dd>
      <dt>DIA Email Templates</dt>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/data_upload_notice.html"' ?>>Data Upload Notice</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/data_upload_fails.html"' ?>>Data Upload Fails</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/data_upload_fails_internal.html"' ?>>Data Upload Fails Internal</a></dd>
      <dd><a <?php echo 'href="' . $ROOT . 'common_services/email_templates/data_upload_notice_no_errors.html"' ?>>Data Upload Notice - No Errors</a></dd>
    </dl>
  </div>
</nav>

