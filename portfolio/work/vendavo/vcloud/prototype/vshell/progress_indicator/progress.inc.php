<section class="progress-proto">

  <div class="alert alert-block alert-error fade in">
    <button type="button" class="close" data-dismiss="alert">×</button> <strong><i class="fa fa-exclamation-circle"></i>
      Global Error Message</strong> 
    This appears inside the &lt;section&gt; tag
  </div>

  <div class="alert alert-block alert-warning fade in">
    <button type="button" class="close" data-dismiss="alert">×</button> <strong><i class="fa fa-warning"></i>
      Global Warning Message</strong> 
    Please fix some global errors.
  </div>

  <div class="alert alert-block alert-success fade in">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <strong>
      <i class="fa fa-check-circle-o"></i>
      Global Success Message
    </strong>
    Please fix some global errors.
  </div>

  <div class="alert alert-block alert-info fade in">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <strong>
      <i class="fa fa-info-circle"></i>
      Global Info Message
    </strong>
    Please fix some global errors.
  </div>

  <h1>Modal Progress Spinner</h1>

  <fieldset style="margin: 0 20px">
    <!-- Modal Progress Indicator -->
    <p>
      <a href="#modal-progress" role="button" class="btn" data-toggle="modal">Launch Progress Indicator</a>
    </p>
    <div id="modal-progress" class="modal fade" aria-hidden="true">
      <div class="modal-dialog vmodal">
        <div class="progress-indicator">
          <div class="progress-spinner">
            <!-- TODO: PS - icon-spinner-6 is no longer working. Need to find out why. -->
            <i class="fa fa-spinner fa-spin"></i>
            <p>Loading&hellip;</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Open Right Pane -->
    <p>
      <a href="#" id="proto-launch-pane-progress" role="button" class="btn" >Open Right Pane</a>
    </p>

    <!-- Modal Dialog Example -->
    <p>
      <a href="#modal-dialog" role="button" class="btn" data-toggle="modal">Launch Modal Dialog</a>
    </p>
    <div id="modal-dialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-dialogLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h3 id="myModalLabel">Modal headers</h3>
          </div>
          <div class="modal-body">
            <p>One fine body…</p>
          </div>
          <div class="modal-footer">
            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
            <button class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </fieldset>

  <h1>Progress Bar</h1>

  <div class="progress progress-striped">
    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Complete (success)</span>
    </div>
  </div>

</section>