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
<title><?php echo portfolioTitle ?></title>
<?php include("../inc/head.inc.php"); ?>
</head>
<body class="secondary animate5s fadeIn portfolio">
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <main>
        <?php include("../inc/nav.inc.php"); ?>
        <h1><? echo $thisPage ?></h1>

        <article class="mdc-layout-grid client">
            <section class="client-summary">
                <a href="http://www.paradata.io" title="Go to Paradata.io" class="client-brand">
                    <?php echo '<img src="' . $ROOT . 'assets/img/logos_clients/logo-paradata.png" alt="Paradata Inc.">'; ?>
                </a>
                <a href="http://www.paradata.io" title="Go to Paradata.io" class="pull-right">paradata.io</a>
                <p>Paradata is a supply chain software company that uses internal and external big data to help high tech OEM brand companies get increased transparency from their global supply chains. They identify cost, lead time, compliance and risk problems and offer verified insights to fix problems before they happen.</p>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                    <img src="../portfolio/work/paradata/thumbs/bom_advantage_2.png" alt="BOM Advantage 2.0 Thumbnail" class="product-thumbnail" />
                </div>
                <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                    <h4><a href="http://www.paradata.io/product/" target="_blank">BOM Advantage 2.0 <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i></a></h4>
                    <p><strong>Description:</strong> Paradata is transparency, traceability and trusted data for decision makers. Paradata builds proprietary supplier data useful for enterprises to gain supply chain network intelligence. Paradata is a Vertical-Specific Big Data Platform building golden data about your networked supply chain. Paradata is a SAAS delivering verified insights and executable actions to supply chain problems before they occur.</p>
                    <p><strong>Project Work:</strong> IxD, Front End Development, Responsive Design, Visual Design</p>
                    <p><a href="work/paradata/ba.php">View the Screenshots</a></p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                    <h4>Printable Product Analysis</h4>
                    <p><strong>Description:</strong> Provide the customer with the opportunity to print out a report that highlights our value showing opportunities to reduce costs and mitigate supply chain risks. Help speed up the sales cycle by making this report/presentation readily available to customers. Customers use the report to communicate up/down their organization.</p>
                    <p><strong>Project Work:</strong> Visualizations, Visual Design</p>
                    <p>
                       <!--  <a href="work/paradata/projects/2_bom_advantage/printable_analysis/1ux/ux_printable_analysis.pdf" target="_blank">View the Requirements</a> -->
                        <a href="work/paradata/projects/2_bom_advantage/printable_analysis/full_report_no_customer.pdf" target="_blank">View the printable analysis report (pdf)</a>
                    </p>
                </div>
                <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                    <img src="../portfolio/work/paradata/thumbs/printable_analysis.png" alt="Printable Analysis Thumbnail" class="product-thumbnail" />
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                    <img src="../portfolio/work/paradata/thumbs/sourcing_advantage_2.png" alt="Sourcing Advantage 2.0 Thumbnail" class="product-thumbnail" />
                </div>
                <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                    <h4><a href="http://www.paradata.io/product/" target="_blank">Sourcing Advantage 2.0 <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i></a></h4>
                    <p><strong>Description:</strong> Supply Base Managers have two main goals; reduce costs and mitigate supply risks. This product can look cross BOM (primarily for negotiating lower prices) to create a Request for Quote. The product will create demand roll up across products, suggest ways to switch demand and consolidate suppliers.
                    </p>
                    <p>
                        It also provides insight into "should be" pricing based on past private pricing and reveal demand trend by project state. The product assists to mitigate risks by 
                        revealing supplier performance, health analysis per part (low vs high quality parts), provide visibility into supply risks and data integrity issues, and suggest part equivalents for at risk parts.
                    </p>
                    <p><strong>Project Work:</strong> IxD, Front End Development, Responsive Design, Visual Design</p>
                    <p>
                         <a href="https://invis.io/CZ78BTVJT" target="_blank">View the Invision Prototype</a>&nbsp;&bull;&nbsp;<a href="work/paradata/sa.php">View the Mockups</a>
                    </p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                    <h4>Account Statistics (Internal Tool)</h4>
                    <p><strong>Description:</strong> View a quick overview and details through key metrics from which the user can drill­ in to see more detailed statistics.</p>
                    <p><strong>Project Work:</strong> IxD, Front End Advisor, Responsive Design, Visual Design</p>
                    <p>
                        <a href="work/paradata/bs.php">View the Screenshots</a>
                    </p>
                </div>
                <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                    <img src="../portfolio/work/paradata/thumbs/account_stats_thumb.png" alt="Account Statistics Internal Tool" class="product-thumbnail" />
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4>New Material Requests</h4>
                    <p><strong>Description:</strong> A product specifically designed for a global pharma client. Provide an easier way to enter and receive new product requests. Using Paradata proprietary (Trusted Discovery) technology to complete missing data. The customer regularly received a large quantity of global requests that often were missing data.</p>
                    <p><strong>Project Work:</strong> IxD, Front End Advisor, Visual Design</p>
                    <p>
                    <a href="work/paradata/nmr.php">View the Screenshots</a>
                    </p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4>Supplier Network Collaboration</h4>
                    <p><strong>Description:</strong> A concept for New Product Managers, Supply Chain Operations and Supply Base Managers to understand what data is needed to improve the health of their BOM. Allow the ability to create and track response requests. Alert and track supplier responses.</p>
                    <p><strong>Project Work:</strong> IxD, Front End Advisor, Visual Design</p>
                    <p>
                        <a href="work/paradata/projects/5_supplier_collab/1ux/ux_workflow.pdf" target="_blank">View Task Workflow</a>&nbsp;&bull;&nbsp;<a href="https://invis.io/PB5AFLGR2" target="_blank">View the Invision Prototype</a>&nbsp;&bull;&nbsp;<a href="work/paradata/sc.php">View the Mockups</a>
                    </p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4>Style Guide</h4>
                    <p><strong>Description:</strong> A common design language for Paradata applications.</p>
                    <p><strong>Project Work:</strong> IxD, Front End Advisor, Visual Design</p>
                    <p>
                        <a href="work/paradata/style-guide/dist/app/" target="_blank">View the Style Guide</a>
                    </p>
                </div>
            </section>
        </article>

        <article class="mdc-layout-grid client">
            <section class="client-summary">
                <a href="http://www.vendavo.com" title="Go to Vendavo.com" target="_blank" class="client-brand">
                    <?php echo '<img src="' . $ROOT . 'assets/img/logos_clients/logo-vendavo.png" alt="Vendavo Inc.">'; ?>
                </a>
                <a href="http://www.vendavo.com" title="Go to Vendavo.com" target="_blank" class="pull-right">vendavo.com</a>
                <p>Vendavo empowers businesses with innovative solutions to unlock hidden opportunities to improve profitability and maximize margins.</p>
                <h4>Awards</h4>
                <p>
                    <strong>2014 BIG Innovation Award</strong><br />
                    <a href="work/vendavo/vsnb/1_awards/big_innovation_award.pdf" target="_blank">PDF Link</a> | <a href="http://www.prweb.com/releases/2014/01/prweb11483764.htm" target="_blank">Web Link</a>
                </p>
                <p>
                    <strong>2016 SIIA CODiE Award Finalist for Best Business Intelligence Reporting &amp; Analytics Solution</strong><br />
                        <a href="work/vendavo/vsnb/1_awards/siia_codie_finalist.pdf" target="_blank">PDF Link</a> | <a href="https://www.vendavo.com/news/vendavo-named-siia-business-technology-codie-award-finalist-for-best-business-intelligence-reporting-analytics-solution/" target="_blank">Web Link</a>
                </p>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4><a href="http://www.vendavo.com/products/profit-analyzer/" target="_blank">Vendavo Profit Analyzer™ <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i></a></h4>
                    <p><strong>Description:</strong> Profit Analyzer delivers powerful in-memory analytics helping you to continually identify profit trends and opportunities for improvement.</p>
                    <p><strong>Project Work:</strong> IxD, Responsive Design, Visual Design</p>
                    <p>
                        <a href="work/vendavo/eps/5_prototype/dist/app/explorer/" target="_blank">View the Prototype</a>&nbsp;&bull;&nbsp;<a href="work/vendavo/eps/eps.php">View the Artifacts</a>
                    </p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4><a href="http://www.vendavo.com/resources/dealguidedatasheet/" target="_blank">Vendavo Deal Guide™ <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i></a></h4>
                    <p><strong>Description:</strong> Deal Guide better equips your sales force with analytical context and pricing guidance to negotiate profitable deals while reducing deal cycle time.</p>
                    <p><strong>Project Work:</strong> IxD, Responsive Design, Visual Design</p>
                    <p><a href="work/vendavo/vsnb/prototype/" target="_blank">View the Prototype</a>&nbsp;&bull;&nbsp;<a href="work/vendavo/vsnb/vsnb.php">View the Screenshots</a></p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4>Vendavo Profit Opportunities</h4>
                    <p><strong>Description:</strong> Codename: Midas - "Find the needle in the haystack." This product never launched but it was a tool to pinpoint profit opportunity. This was Vendavo's first attempt at a SaaS cloud product.</p>
                    <p><strong>Project Work:</strong> IxD, Responsive Design, Visual Design</p>
                    <p><a href="work/vendavo/vcloud/prototype/" target="_blank">View the Prototype</a>&nbsp;&bull;&nbsp;<a href="work/vendavo/vcloud/vcloud.php">View the Screenshots</a></p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4>Vendavo Sales Advisor for Mobile</h4>
                    <p><strong>Description:</strong> Native iOS application for sales people.</p>
                    <p><strong>Project Work:</strong> IxD, Visual Design</p>
                    <p><a href="work/vendavo/vsa/vsa.php">View the Screenshots</a></p>
                </div>
            </section>
            <section class="mdc-layout-grid__inner product">
                <div class="mdc-layout-grid__cell--span-12">
                    <h4>Vendavo UX Styleguide</h4>
                    <p><strong>Description:</strong> A product styleguide that standardizes patterns, components and styles for developers.</p>
                    <p><strong>Project Work:</strong> Styleguide Development</p>
                    <p><a href="work/vendavo/eps/5_prototype/dist/app/" target="_blank">View the Styleguide</a></p>
                </div>
            </section>
        </article>
        <article>
            <section>
                <a href="http://www.pencilmedia.com" class="button button-primary" target="_blank">See More Work</a>
            </section>
        </article>
        <?php include("../inc/foot.inc.php"); ?>   
    </main> 
</body>
</html>
