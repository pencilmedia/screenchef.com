<!-- Page Header
================================================== -->
<!-- INSTRUCTIONS: 
The navigation item is selected by matching the 'data-id' and the "pageID" variable on the index.html for each page
-->
<h1><i class="fa fa-briefcase"></i>Component Library</h1>
<nav id="styleguideNav" role="navigation">
   <ul class="nav nav-list">
       <li><h2 class="tree-toggler"><i class="fa fa-caret-down"></i>Overview</h2>
           <ul class="nav nav-pills nav-stacked tree">
			       <li><a href="/" data-id="overview">Overview</a></li>
             <li><a href="@@context/explorer" data-id="pa-explorer">@@titleExplorer</a></li>
           </ul>
       </li>
       <li><h2 class="tree-toggler"><i class="fa fa-caret-down"></i>Foundations</h2>
           <ul class="nav nav-pills nav-stacked tree">
        		<li><a href="@@context/foundations/entities.html" data-id="entities">@@titleEntities</a></li>
        		<li><a href="@@context/foundations/typography.html" data-id="typography">@@titleTypography</a></li>
        		<li><a href="@@context/foundations/colors.html" data-id="colors">@@titleColors</a></li>
        		<li><a href="@@context/foundations/icons.html" data-id="iconography">@@titleIconography</a></li>
        		<li><a href="@@context/foundations/animation.html" data-id="animation">@@titleAnimation</a></li>
           </ul>
       </li>
       <li><h2 class="tree-toggler"><i class="fa fa-caret-down"></i>Components</h2>
           <ul class="nav nav-pills nav-stacked tree">
              <li><a href="@@context/components/breadcrumb/" data-id="component-breadcrumb">@@titleBreadcrumb</a></li>
              <li><a href="@@context/components/buttons/" data-id="buttons">@@titleButton</a></li>
              <li><a href="@@context/components/dialogs/" data-id="dialogs">@@titleDialog</a></li>
              <li><a href="@@context/components/forms/" data-id="forms">@@titleForm</a></li>
              <li><a href="@@context/components/tabs/" data-id="tabs">@@titleTab</a></li>
              <li><a href="@@context/components/tooltips/" data-id="tooltips">@@titleTooltip</a></li>
              <li> <!-- Subtree -->
                <a href="#/" class="tree-toggler subtree"><i class="fa fa-caret-down"></i>Input Controls</a>
                <ul class="nav nav-pills nav-stacked tree">
                  <li><a href="@@context/components/date_range/" data-id="date-range">@@titleDateRange</a></li>
                  <li><a href="@@context/components/date_single/" data-id="date-single">@@titleDateSingle</a></li>
                  <li><a href="@@context/components/long_list_single/" data-id="long-list-single">@@titleLongListSingle</a></li>
                  <li><a href="@@context/components/long_list_multi/" data-id="long-list-multi">@@titleLongListMulti</a></li>
                  <li><a href="@@context/components/money/" data-id="money-input">@@titleMoneyInput</a></li>
                  <li><a href="@@context/components/quantity/" data-id="quantity-input">@@titleQuantityInput</a></li>
                </ul>
              </li>
           </ul>
       </li>
       <li><h2 class="tree-toggler"><i class="fa fa-caret-down"></i>Patterns</h2>
           <ul class="nav nav-pills nav-stacked tree">
              <li><a href="@@context/patterns/tables/" data-id="tables">@@titleTable</a></li>
           </ul>
       </li>
   </ul>
</nav>	