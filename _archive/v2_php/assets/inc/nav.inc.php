<header>
    <hgroup>
        <h1><a href="<?php echo $thisPage ?>/">Ralph Adrian Garcia</a></h1>
        <h2>Interaction Designer and Prototyper</h2>
        <p><?php echo $yearsExperience; ?> years of experience in web development, visual and interaction design.</p>
    </hgroup>
    <nav>
        <a <?php echo 'href="' . $ROOT . '"'; if ($thisPage=="home") echo " id=\"selected\""; ?> >Home</a>&bull;<a <?php echo 'href="' . $ROOT . '/work/"'; if ($thisPage=="work") echo " id=\"selected\""; ?> >Work</a>&bull;<a <?php echo 'href="' . $ROOT . '/about/"'; if ($thisPage=="about") echo " id=\"selected\""; ?> >About</a>
    </nav>
</header>