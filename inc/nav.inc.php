<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<header class="page-header animated zoomInUp">
    <hgroup>
        <h1><a href="<?php echo $ROOT ?>">Ralph Adrian Garcia</a></h1>
        <h2>Interaction Designer and Prototyper</h2>
        <p><?php echo (string)$yearsExperience->y; ?> years in user experience and interaction design.</p>
    </hgroup>
    <nav class="main-nav">
       <ul>
            <li><a <?php echo 'href="' . $ROOT . '"'; if ($thisPage=="home") echo " class=\"active\""; ?> >home</a></li>
            <li><a <?php echo 'href="' . $ROOT . 'portfolio/"'; if ($thisPage=="portfolio") echo " class=\"active\""; ?> >portfolio</a></li>
            <li><a <?php echo 'href="' . $ROOT . 'about/"'; if ($thisPage=="about") echo " class=\"active\""; ?> >about</a></li>
       </ul>
    </nav>
</header>