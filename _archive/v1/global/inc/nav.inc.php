<header>
    <hgroup>
        <h1>screenchef.</h1>
        <h2>Dice cheese all day</h2>
    </hgroup>
    <nav>
        <ul>
            <li><a href="<?php echo path ?>/journal/" <?php if ($thisPage=="journal") echo " id=\"selected\""; ?> >Journal</a></li>
            <li><a href="<?php echo path ?>/exercises/" <?php if ($thisPage=="exercises") echo " id=\"selected\""; ?> >Exercises</a></li>
            <li><a href="<?php echo path ?>/">Home</a></li>
        </ul>
    </nav>
</header>