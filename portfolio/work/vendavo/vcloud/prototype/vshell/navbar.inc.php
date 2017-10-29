<!-- Fixed navbar -->
<header class="navbar navbar-default navbar-fixed-top" role="navigation">
    <button type="button" id="app-switcher" class="btn app-switcher">
      <span>
        <img <?php echo 'src="' . $ROOT . 'assets/img/logo_vendavo_icon_green.png"' ?> class="logo-vendavo" alt="Vendavo Cloud Services"><i class="fa fa-bars"></i>
      </span>
    </button>
    <button id="courtesy-menu" class="btn courtesy-menu pull-right">
      <i class="fa fa-user"></i>
      <span class="user-name">Naveen Sikka</span><b class="caret"></b>
    </button>
</header>
<!-- Proto Nav Only: Do Not Include in Production -->
<style>
	.proto-menu-action {
		display: block;
		z-index: 999999;
		position: fixed;
		right: 5px;
		bottom: 5px;
		color: #aaa;
		text-shadow: none;
		padding: 3px;
		width: 310px;
		text-align: center;
		border: 1px solid #e9e9e9;
		background: #f1f1f1;
	}
	.proto-menu-action:hover {
		transition: .5s;
		background: #e6e6e6;
		border: 1px solid #eee;
		box-shadow: 0 0 3px 0 #999;
	}
</style>
<a href="#/" class="proto-menu-action">Prototype Navigator</a>