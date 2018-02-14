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
    <!--[if gt IE 8]><!-->
    <html class="no-js">
    <!--<![endif]-->
    <head>
        <title>
            <?php echo portfolioTitle ?>
        </title>
        <?php include("../inc/head.inc.php"); ?>
    </head>
    <body class="secondary animate5s fadeIn portfolio">
        <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
        <main>
            <?php include("../inc/nav.inc.php"); ?>
            <h1 id="backToTop">
                <? echo $thisPage ?>
            </h1>
            <!-- Tabs -->
            <ul class="tab-nav">
                <li>
                    <a class="tab button active" href="#one">Paradata</a>
                </li>
                <li>
                    <a class="tab button" href="#two">Vendavo</a>
                </li>
                <li>
                    <a class="tab button" href="#three">Ivanti</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="one">
                    <!-- Paradata -->
                    <article class="mdc-layout-grid client">
                        <section class="client-summary">

                            <a href="http://www.paradata.io" title="Go to Paradata.io" class="client-brand">
                                <?php echo '<img src="' . $ROOT . 'assets/img/logos_clients/logo-paradata.png" alt="Paradata Inc.">'; ?>
                            </a>
                            <a href="http://www.paradata.io" title="Go to Paradata.io" class="pull-right">paradata.io</a>
                            <p>Paradata is a supply chain software company that uses internal and external big data to help
                                high tech OEM brand companies get increased transparency from their global supply chains.
                                They identify cost, lead time, compliance and risk problems and offer verified insights to
                                fix problems before they happen.</p>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/paradata/thumbs/bom_advantage_2.png" alt="BOM Advantage 2.0 Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>
                                    <a href="http://www.paradata.io/product/" target="_blank">BOM Advantage 2.0
                                        <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i>
                                    </a>
                                </h4>
                                <p>
                                    <label><strong>Description:</strong></label> Paradata is transparency, traceability and trusted data for decision
                                    makers. Paradata builds proprietary supplier data useful for enterprises to gain supply
                                    chain network intelligence. Paradata is a Vertical-Specific Big Data Platform building
                                    golden data about your networked supply chain. Paradata is a SAAS delivering verified
                                    insights and executable actions to supply chain problems before they occur.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Front-end Development, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/paradata/ba.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Printable Product Analysis</h4>
                                <p>
                                    <label><strong>Description:</strong></label> Provide the customer with the opportunity to print out a report
                                    that highlights our value showing opportunities to reduce costs and mitigate supply chain
                                    risks. Help speed up the sales cycle by making this report/presentation readily available
                                    to customers. Customers use the report to communicate up/down their organization.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Visualizations, Visual Design</p>
                                <p>
                                    <!--  <a href="work/paradata/projects/2_bom_advantage/printable_analysis/1ux/ux_printable_analysis.pdf" class="button" target="_blank">View the Requirements</a> -->
                                    <a href="work/paradata/projects/2_bom_advantage/printable_analysis/full_report_no_customer.pdf" class="button" target="_blank">View the printable analysis report (pdf)</a>
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
                                <h4>
                                    Sourcing Advantage 2.0
                                </h4>
                                <p>
                                    <label><strong>Description:</strong></label> Supply Base Managers have two main goals; reduce costs and mitigate
                                    supply risks. This product can look cross BOM (primarily for negotiating lower prices)
                                    to create a Request for Quote. The product will create demand roll up across products,
                                    suggest ways to switch demand and consolidate suppliers.
                                </p>
                                <p>
                                    It also provides insight into "should be" pricing based on past private pricing and reveal demand trend by project state.
                                    The product assists to mitigate risks by revealing supplier performance, health analysis
                                    per part (low vs high quality parts), provide visibility into supply risks and data integrity
                                    issues, and suggest part equivalents for at risk parts.
                                </p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/paradata/sa.php" class="button">View the Mockups</a>
                                </p>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Account Statistics (Internal Tool)</h4>
                                <p>
                                    <label><strong>Description:</strong></label> View a quick overview and details through key metrics from which
                                    the user can drill­ in to see more detailed statistics.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Front-end Advisor, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/paradata/bs.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/paradata/thumbs/account_stats_thumb.png" alt="Account Statistics Internal Tool" class="product-thumbnail" />
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/paradata/thumbs/nmr_workflow_thumb.png" alt="New Material Request Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>New Material Requests</h4>
                                <p>
                                    <label><strong>Description:</strong></label> A product specifically designed for a global pharma client. Provide
                                    an easier way to enter and receive new product requests. Using Paradata proprietary (Trusted
                                    Discovery) technology to complete missing data. The customer regularly received a large
                                    quantity of global requests that often were missing data.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Front-end Advisor</p>
                                <p>
                                    <a href="work/paradata/nmr.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Supplier Network Collaboration</h4>
                                <p>
                                    <label><strong>Description:</strong></label> A concept for New Product Managers, Supply Chain Operations and
                                    Supply Base Managers to understand what data is needed to improve the health of their
                                    BOM. Allow the ability to create and track response requests. Alert and track supplier
                                    responses.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Front-end Advisor, Visual Design</p>
                                <p>
                                    <a href="work/paradata/projects/5_supplier_collab/1ux/ux_workflow.pdf" class="button" target="_blank">View Task Workflow</a>
                                    <a href="https://invis.io/PB5AFLGR2" target="_blank" class="button">View the Invision Prototype</a>
                                    <a href="work/paradata/sc.php" class="button">View the Mockups</a>
                                </p>
                            </div>
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/paradata/thumbs/supplier_network_thumb.png" alt="Supplier Network Collobaration Thumbnail" class="product-thumbnail" />
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                        <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/paradata/thumbs/style_guide_thumb.png" alt="Paradata Style Guide Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Paradata Style Guide <small>(Design System)</small></h4>
                                <p>
                                    <label><strong>Description:</strong></label> Created and led a web-based common design language for Paradata applications.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label>Interaction Design, Front-end Development, Responsive Design, Visual Design, Design System</p>
                                <p>
                                    <a href="work/paradata/style-guide/dist/app/" target="_blank" class="button">View the Style Guide</a>
                                </p>
                            </div>
                        </section>
                    </article>
                </div>
                <div class="tab-pane" id="two">
                    <!-- Vendavo -->
                    <article class="mdc-layout-grid client">
                        <section class="mdc-layout-grid__inner client-summary">
                            <div class="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <a href="http://www.vendavo.com" title="Go to Vendavo.com" target="_blank" class="client-brand"><?php echo '<img src="' . $ROOT . 'assets/img/logos_clients/logo-vendavo.png" alt="Vendavo Inc.">'; ?></a>
                                <a href="http://www.vendavo.com" title="Go to Vendavo.com" target="_blank" class="pull-right">vendavo.com</a>
                                <p>Vendavo empowers businesses with innovative solutions to unlock hidden opportunities to improve profitability and maximize margins.</p>
                                <div class="mdc-layout-grid__cell callout-awards">
                                    <h4>Awards</h4>
                                    <div class="mdc-layout-grid__inner">
                                        <div class="mdc-layout-grid__cell--span-1">
                                            <i class="fas fa-3x fa-trophy icon-award" aria-hidden="true"></i>
                                        </div>
                                        <div class="mdc-layout-grid__cell--span-3">
                                            <p>
                                                <strong>2014 BIG Innovation Award</strong>
                                                <br />
                                                <a href="work/vendavo/vsnb/1_awards/big_innovation_award.pdf" target="_blank">PDF Link</a> |
                                                <a href="http://www.prweb.com/releases/2014/01/prweb11483764.htm" target="_blank">Web Link</a>
                                            </p>
                                        </div>
                                        <div class="mdc-layout-grid__cell--span-8">
                                            <p>
                                                <strong>2016 SIIA CODiE Award Finalist for Best Business Intelligence Reporting &amp; Analytics Solution</strong>
                                                <br
                                                />
                                                <a href="work/vendavo/vsnb/1_awards/siia_codie_finalist.pdf" target="_blank">PDF Link</a> |
                                                <a href="https://www.vendavo.com/news/vendavo-named-siia-business-technology-codie-award-finalist-for-best-business-intelligence-reporting-analytics-solution/"
                                                    target="_blank">Web Link</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/vendavo/thumbs/eps_dashboard_thumb.png" alt="Profit Analyzer Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>
                                    <a href="http://www.vendavo.com/products/profit-analyzer/" target="_blank">Vendavo Profit Analyzer™ <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i></a>
                                </h4>
                                <p>
                                    <label><strong>Description:</strong></label> Profit Analyzer delivers powerful in-memory analytics helping you
                                    to continually identify profit trends and opportunities for improvement.
                                </p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Responsive Design, Visual Design
                                </p>
                                <p>
                                    <a href="work/vendavo/eps/5_prototype/dist/app/explorer/" target="_blank" class="button">View the Prototype</a>
                                    <a href="work/vendavo/eps/eps.php" class="button">View the Artifacts</a>
                                </p>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>
                                    <a href="http://www.vendavo.com/resources/dealguidedatasheet/" target="_blank">Vendavo Deal Guide™
                                        <i class="fas fa-xs fa-external-link-alt" aria-hidden="true"></i>
                                    </a>
                                </h4>
                                <p>
                                    <label><strong>Description:</strong></label> Deal Guide better equips your sales force with analytical context
                                    and pricing guidance to negotiate profitable deals while reducing deal cycle time.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/vendavo/vsnb/prototype/" target="_blank" class="button">View the Prototype</a>
                                    <a href="work/vendavo/vsnb/vsnb.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/vendavo/thumbs/deal_guide_thumb.png" alt="Deal Guide Thumbnail" class="product-thumbnail" />
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/vendavo/thumbs/profit_opportunities_thumb.png" alt="Profit Opportunities Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Vendavo Profit Opportunities</h4>
                                <p>
                                    <label><strong>Description:</strong></label> Codename: Midas - "Find the needle in the haystack." This product
                                    never launched but it was a tool to pinpoint profit opportunity. This was Vendavo's first
                                    attempt at a SaaS cloud product.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/vendavo/vcloud/prototype/" target="_blank" class="button">View the Prototype</a>
                                    <a href="work/vendavo/vcloud/vcloud.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Vendavo Sales Advisor for Mobile</h4>
                                <p>
                                    <label><strong>Description:</strong></label> Native iOS application for sales people.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Visual Design</p>
                                <p>
                                    <a href="work/vendavo/vsa/vsa.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/vendavo/thumbs/sales_advisor_thumb.png" alt="Sales Advisor Thumbnail" class="product-thumbnail" style="max-width:250px" />
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/vendavo/thumbs/vendavo_styleguide_thumb.png" alt="Vendavo Styleguide Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Vendavo UX Styleguide</h4>
                                <p>
                                    <label><strong>Description:</strong></label>A product styleguide that standardizes patterns, components and
                                    styles for developers.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label>Interaction Design, Front-end Development, Responsive Design, Visual Design, Design System</p>
                                <p>
                                    <a href="work/vendavo/eps/5_prototype/dist/app/" target="_blank" class="button">View the Styleguide</a>
                                </p>
                            </div>
                        </section>
                    </article>
                </div>
                <div class="tab-pane" id="three">
                    <!-- Ivanti -->
                    <article class="mdc-layout-grid client">
                        <section class="client-summary">

                            <a href="http://www.ivanti.com" title="Go to Ivanti.com" class="client-brand">
                                <?php echo '<img src="' . $ROOT . 'assets/img/logos_clients/logo-ivanti.png" alt="Ivanti">'; ?>
                            </a>
                            <a href="http://www.ivanti.com" title="Go to Ivanti.com" class="pull-right">ivanti.com</a>
                            <p>Ivanti offers unified IT management solutions. They have various offerings from software that can manage IT assets, patches, systems management to IT service delivery and security.</p>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/ivanti/thumbs/catalog_thumb.png" alt="Catalog Thumbnail" class="product-thumbnail" />
                            </div>
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Project Uno: Catalog</h4>
                                <p>
                                    <label><strong>Description:</strong></label>Project Uno was the first SaaS cloud offering from Heat Software. It was designed to allow IT professionals to monitor assets, deploy patches and provide application and device control from the cloud.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Front-end Development, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/paradata/ba.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                        </section>
                        <section class="mdc-layout-grid__inner product">
                            <div class="mdc-layout-grid__cell--span-7-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone">
                                <h4>Project Uno: Patch Management</h4>
                                <p>
                                    <label><strong>Description:</strong></label>Project Uno was the first SaaS cloud offering from Heat Software. It was designed to allow IT professionals to monitor assets, deploy patches and provide application and device control from the cloud.</p>
                                <p>
                                    <label><strong>Project Work:</strong></label> Interaction Design, Front-end Development, Responsive Design, Visual Design</p>
                                <p>
                                    <a href="work/paradata/ba.php" class="button">View the Screenshots</a>
                                </p>
                            </div>
                            <div class="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone">
                                <img src="../portfolio/work/ivanti/thumbs/catalog_thumb.png" alt="Catalog Thumbnail" class="product-thumbnail" />
                            </div>
                        </section>
                    </article>
                </div>
            </div>
            <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">
                    <div class="mdc-layout-grid__cell--span-6">
                        <a href="#backToTop">Back To Top</a>
                    </div>
                    <div class="mdc-layout-grid__cell--span-6 align-right">
                        <a href="http://www.pencilmedia.com" class="button button-primary button-more" target="_blank">See Older Work</a>
                    </div>
                </div>
            </div>
            <?php include("../inc/foot.inc.php"); ?>
        </main>
    </body>

    </html>