<div class="app data-upload">
  <header>
    <h1>
      <span>Configure Data Dictionary</span>
      <div class="dropdown">
        <a href="../../../common_services/user_assistance/data/Page_Level_Help_Data_Load.html" class="btn butcon learn-more" target="_blank" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');return false;" title="Learn about Data Dictionary" data-toggle="tooltip" data-original-title="Learn about Data Dictionary" data-placement="right"><i class="info fa fa-question-circle"></i></a>
      </div>
    </h1>
    <article class="page-tools">
      <a href="#/" class="btn btn-primary">Save</a>
      <a href="../" class="btn close-data-page">Cancel</a>
    </article>
  </header>
  <section>
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#template" data-toggle="tab">Price Waterfall Fields</a>
      </li>
      <li>
        <a href="#dimensional-fields" data-toggle="tab">Transaction and Dimension Fields</a>
      </li>
    </ul>
    <div class="tab-content">
      <!-- Price Waterfall Fields -->
      <div class="tab-pane active" id="template">
        <?php include("waterfall.inc.php"); ?></div>
      <!-- Dimensional Fields -->
      <div class="tab-pane" id="dimensional-fields">
        <?php include("dimensional.inc.php"); ?></div>
    </div>
  </section>
</div>