<footer>
    <ul>
        <li>&copy; <?php echo date("Y"); ?> Ralph Adrian Garcia</li>
    </ul>
</footer>

<!-- Plugins -->
<?php echo '<script type="application/javascript" src="' . $ROOT . 'bower_components/fastclick/lib/fastclick.js"></script>'; ?>

<!-- Custom JS -->
<?php echo '<script type="application/javascript" src="' . $ROOT . 'assets/js/global.js"></script>'; ?>

<!-- FOR DEV PURPOSES: LiveReload -->
<!-- <script src="//localhost:35729/livereload.js"></script> -->

<!-- Google Analytics -->
<script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-31417418-1');ga('send','pageview');
</script>