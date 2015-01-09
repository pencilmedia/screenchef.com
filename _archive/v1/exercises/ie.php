<?php include("../global/config.inc"); ?>
<?php $thisPage = "exercises"; ?>
<!--[if lt IE 7 ]><html lang="en" class="no-js ie6"><![endif]-->
<!--[if IE 7 ]><html lang="en" class="no-js ie7"><![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><!DOCTYPE html class="no-js"><!--<![endif]-->

<head>
<title><?php echo exercisesTitle ?></title>
<?php include("../global/inc/head.inc.php"); ?>
</head>
<body id="exercises">
    <div id="wrapper">
    <?php include("../global/inc/nav.inc.php"); ?>
        
        <section>
            <h1>Internet Explorer Test Page</h1>
            <p>Checking to see what IE is doing&hellip;</p>
                
        	<article>
                <h2>Example Uno</h2>
                <h3>HTML5 &lt;details&gt; element</h3>
                <p>
                    The HTML5 &lt;details&gt; element is currently not natively supported in any browser natively supported in Chrome 12 and up. Firefox does see it and you can style it, however it has no default behaviors except display:block.
                </p>
                <h4>This is the example</h4>
                <details>
                    <summary>See it</summary>
                  <p>These are the details &hellip; contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </details>
                <style>
                    details {display:block;border:1px solid #ccc;padding:1em 1em .5em 1em;color:#666;}
                    summary {font-weight:bold;color:#333;margin-bottom:.5em;}
                </style>
            </article>
                
        	<article>
                <h2>Example Dos</h2>
                <h3>Multicolumn Layout</h3>
                <p>There is a new way to arrange text like a newspaper, in columns. It allows text  be fitted into columns, in two ways: by defining a width for each  column, or by defining a number of columns. The first would be done by column-width, the latter by column-count. To create a space between the columns, you need to specify a width for column-gap.</p>
                <h4>This is the example</h4>
                <details>
                    <div class="multi-column">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean egestas blandit ipsum. Morbi nulla metus, luctus et, ullamcorper sit amet, commodo quis, nisl. Ut blandit lacus nec nibh. Phasellus eleifend enim et risus. Nam condimentum. Praesent euismod auctor dui. Nunc ut leo vel magna adipiscing tempor. Donec pretium, ligula et hendrerit faucibus, sem velit accumsan tortor, sodales tempor est ligula non velit. Nulla sagittis, odio quis porta nonummy, mauris arcu gravida odio, quis aliquam lacus elit non libero. Proin aliquam augue accumsan augue. Quisque ut eros at erat ultrices sodales. Nunc vitae ipsum. Mauris in elit in dolor imperdiet interdum. Vivamus egestas sagittis justo. Sed lorem. Sed vel neque in ipsum gravida nonummy. Nulla tempor blandit elit.</p>
                    </div>
                </details>
                <style>
                    .multi-column {
						padding:1em;
						column-count: 3;
						column-gap: 1.5em;
						column-rule: 1px solid #ccc;
						-moz-column-count: 3;
						-moz-column-gap: 1.5em;
						-moz-column-rule: 1px solid #ccc;
						-webkit-column-count: 3;
						-webkit-column-gap: 1.5em;
						-webkit-column-rule: 1px solid #ccc;
					}
                </style>
            </article>
        </section>
             
    </div>
	<?php include("../global/inc/foot.inc.php"); ?>   
</body>
</html>
