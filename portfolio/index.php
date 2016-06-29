<?php
// SETTING THE ROOT VARIABLE WE CAN USE IT TO CREATE RELATIVE PATHS
    include("../assets/config.inc");
    $ROOT = '../'; // Set root for relative paths
    $thisPage="portfolio"; 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<title><?php echo hmpgTitle ?></title>
<?php include("../inc/head.inc.php"); ?>
</head>
<body class="portfolio">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main>
        <?php include("../inc/nav.inc.php"); ?>
        <section>
            <h1>Portfolio</h1>
            <article class="client-summary">
                <a href="http://www.paradata.io" title="Go to Paradata.io" class="client-brand">
                    <?php echo '<img src="' . $ROOT . 'assets/img/logos_clients/logo-paradata.png" alt="Paradata Inc.">'; ?>
                </a>
                <div class="client-description">
                    <h3>Paradata Inc.</h3>
                    <a href="http://www.paradata.io" title="Go to Paradata.io" class="pull-right">paradata.io</a>
                    <p>Paradata is a supply chain software company that uses internal and external big data to help high tech OEM brand companies get increased transparency from their global supply chains. They identify cost, lead time, compliance and risk problems and offer verified insights to fix problems before they happen.</p>
                </div>
            </article>
            <article class="card-container">
                <a href="#/" class="card-item ixd" title="Interaction Design">
                    <span class="card-left">
                        <h6>Interaction Design</h6>
                    </span>
                    <span class="card-right">
                        <h4>User Experience Design</h4>
                        <p>Paradata is a SaaS delivering verified insights and executable actions to supply chain problems before they occur.</p>
                    </span>
                </a>
                <a href="#/" class="card-item alternate front-end" title="Front End Development">
                    <span class="card-left">
                        <h4>Front End Development</h4>
                        <p>Paradata is a SaaS delivering verified insights and executable actions to supply chain problems before they occur.</p>
                    </span>
                    <span class="card-right">
                        <h6>Front End Engineering</h6>
                    </span>
                </a>
                <a href="#/" class="card-item visual-design" title="Visual Design">
                    <span class="card-left">
                        <h6>Visual Design</h6>
                    </span>
                    <span class="card-right">
                        <h4>Visual Design</h4>
                        <p>Paradata is a SaaS delivering verified insights and executable actions to supply chain problems before they occur.</p>
                    </span>
                </a>
            </article>
        </section>
        <?php include("../inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
