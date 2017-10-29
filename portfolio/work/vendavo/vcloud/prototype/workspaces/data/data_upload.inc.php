<div class="alert alert-block alert-warning opportunity-removed">
  <button type="button" class="close" data-dismiss="alert">×</button>
  <strong><i class="fa fa-exclamation-triangle"></i></strong> You have multiple files that failed during upload.&nbsp;<a href="#" class="unhide-opportunity">Clear failed files.</a>
</div>

<div class="app data-upload">
  <header>
      <h1>
        <span>Data</span>
        <div class="dropdown">
          <a href="../../../common_services/user_assistance/data/Page_Level_Help_Data_Load.html" class="btn butcon learn-more" target="_blank" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');return false;" title="Learn about Data Upload" data-toggle="tooltip" data-original-title="Learn about Data Upload" data-placement="bottom"><i class="info fa fa-question-circle"></i></a>
        </div>
      </h1>
      <article class="page-tools page-actions">
        <div class="btn-group">
          <a href="#" class="btn" role="button" data-toggle="tooltip" data-original-title="Run analyses on new data" data-placement="bottom"><i class="fa fa-play-circle-o"></i><span>Run Analyses</span></a>
          <a href="dictionary/" class="btn" role="button" data-toggle="tooltip" data-original-title="Add, remove and rename fields" data-placement="bottom"><i class="fa fa-pencil"></i><span>Configure Dictionary</span></a>
          <div class="btn-group">
            <a href="#" class="btn dropdown-toggle" role="button" title="More" data-placement="left" data-toggle="dropdown"><span>More</span><i class="fa fa-caret-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="modal">Download Template</a></li>
              <li><a href="analysis/">View Previously Analyzed Files</a></li>
              <li><a href="#data-upload-settings-modal" data-toggle="modal">Edit Settings</a></li>
              <li class="divider"></li>
              <li><a href="#" data-toggle="modal">Extract Pricemart Data</a></li>
            </ul>
          </div>
        </div>
      </article>
  </header>

  <section>
    <?php include("data_upload_analyze.inc.php"); ?>

    <!-- Modal -->
    <div id="data-upload-settings-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h3>Data Settings</h3>
          </div>
          <div class="modal-body">
              <form>
                <h2>Data Upload</h2>
                <dl>
                  <dd>
                    <label class="checkbox"><input type="checkbox" checked="checked">Wait for user validation of manually uploaded data files</label>
                    <span class="text-muted">All manually uploaded data files will require a user validation.</span>
                  </dd>
                  <dd>
                    <label class="checkbox"><input type="checkbox">Automatically upload data files from the dedicated FTP server</label>
                    <span class="text-muted">Data files on the dedicated FTP server will be automatically uploaded without validation.</span>
                  </dd>
                </dl>
                <h2>Data Analysis</h2>
                <dl>
                  <dd>
                    <label class="checkbox"><input id="data-upload-modal-switcher" type="checkbox" value="checked">Enable automatic analysis of uploaded data files at a set frequency</label>
                    <span class="text-muted">Uploaded data files will be automatically analyzed at the specified interval.</span>
                  </dd>
                  <dd class="date-field">
                    <label>Start Date</label>
                    <input class="data-upload-modal-group" class="datepicker" size="16" type="text" value="01-01-2015" disabled>
                  </dd>
                  <dd class="date-field">
                    <label>Time</label>
                    <input class="data-upload-modal-group" type="text" value="11:30 PM EST" disabled>
                  </dd>
                  <dd class="date-field">
                    <label>Frequency</label>
                    <select class="data-upload-modal-group" disabled>
                      <option>Weekly</option>
                      <option selected="selected">Monthly</option>
                      <option>Quaterly</option>
                    </select>
                  </dd>
                </dl>
              </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary">Save</button>
            <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
