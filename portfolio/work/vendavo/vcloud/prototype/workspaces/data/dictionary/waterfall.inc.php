<form class="waterfall-tab">
  <div class="alert alert-block alert-info fade in waterfall-info">
    <button type="button" class="close" data-hide="alert">×</button>
    <strong><i class="fa fa-film"></i>Understanding the Price Waterfall</strong> 
    <p>This video provides an overview of the price waterfall concept and the way it's used Vendavo Cloud. <a href="#/">Watch the video now</a></p>
  </div>
  <div class="graph">
    <button class="butcon fade" title="Learn about the Price Waterfall"><i class="info fa fa-film"></i></button>
    <ul>
      <li data-toggle="popover" data-content="And here's some amazing content. This popover gets wider with longer text in it. We should control the width so it easier to read." data-original-title="Market Price" data-id="1"><span class="price_point" style="height:200px"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Negotiated Discount"  data-id="2"><span class="price_drop" style="height:10px"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Customer Negotiated Discount"  data-id="3"><span class="price_point" style="height:185px;margin-top:15px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Customer Defined Charge"  data-id="4"><span class="price_rise" style="height:5px;margin-top:12px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Freight Method"  data-id="5"><span class="price_drop" style="height:18px;margin-top:12px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Subcharges"  data-id="6"><span class="price_rise" style="height:8px;margin-top:22px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Service Charges"  data-id="7"><span class="price_rise" style="height:10px;margin-top: 12px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Invoice Price"  data-id="8"><span class="price_point" style="height:188px;margin-top:12px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Distributor Rebate"  data-id="9"><span class="price_drop" style="height:5px;margin-top:10px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Distributor Rebate"  data-id="10"><span class="price_drop" style="height:5px;margin-top:10px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Net Price"  data-id="11"><span class="price_point" style="height:175px;margin-top:25px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Payment Price"  data-id="12"><span class="price_drop" style="height:10px;margin-top:25px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Freight Cost"  data-id="13"><span class="price_drop" style="height:5px;margin-top:35px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Service Cost"  data-id="14"><span class="price_drop" style="height:20px;margin-top:40px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Pocket Price"  data-id="15"><span class="price_point" style="height:135px;margin-top:65px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="COGS"  data-id="16"><span class="price_drop" style="height:60px;margin-top:65px;"></span></li>
      <li data-toggle="popover" data-content="And here's some amazing content." data-original-title="Pocket Margin" data-id="17"><span class="price_point" style="height:55px;margin-top:145px;"></span></li>
    </ul>
  </div>
  <fieldset>
    <header>
      <hgroup>
        <h2>Field</h2>
        <h2>Label</h2>
      </hgroup>
    </header>
    <ol class="sortable">
      <li data-id="1" class="no-sort">
        <div class="price-point">
          <label>
            <input type="checkbox" checked />Market Price
          </label>
          <input type="text" value="Market Price" />
          <button type="button" class="butcon waterfall-add" data-toggle="tooltip" data-original-title="Add a custom field" data-placement="left"><i class="fa fa-plus"></i></button>
        </div>
      </li>
      <li data-id="2" class="no-sort">
        <div class="cost">
          <label><input type="checkbox" checked>Negotiated Discount<i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i></label>
          <input type="text" value="Negotiated Discount" />
        </div>
      </li>
      <li data-id="3" class="no-sort">
        <div class="price-point inactive">
          <label><input type="checkbox">Customer Negotiated Discount</label>
          <input type="text" value="Customer Negotiated Discount" disabled />
          <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Add a custom field" data-placement="left"><i class="fa fa-plus"></i></button>
        </div>
      </li>
      <li data-id="4" class="custom-field">
        <div class="charge">
          <label><input type="checkbox" checked disabled>Customer Defined Charge<i data-toggle="tooltip" data-original-title="Positive waterfall adjustment" data-placement="bottom" class="fa fa-arrow-up"></i><i data-toggle="tooltip" data-original-title="Your company has added this custom field." data-placement="bottom" class="fa fa-asterisk"></i></label>
          <input type="text" value="Customer Defined Charge" />
          <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Remove this custom field" data-placement="left"><i class="fa fa-minus"></i></button>
        </div>
      </li>
      <li data-id="5" class="no-sort">      
        <div class="cost inactive">
          <label><input type="checkbox" disabled>Freight Method<i data-toggle="tooltip" data-original-title="Positive waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i></label>
          <input type="text" value="Freight Method" disabled />
        </div>
      </li>
      <li data-id="6" class="no-sort">
        <div class="charge">
          <label><input type="checkbox" checked>Subcharges<i data-toggle="tooltip" data-original-title="Positive waterfall adjustment" data-placement="bottom" class="fa fa-arrow-up"></i></label>
          <input type="text" value="Subcharges" />
        </div>
      </li>
      <li data-id="7" class="no-sort">
        <div class="charge">
          <label><input type="checkbox" checked>Service Charges<i data-toggle="tooltip" data-original-title="Positive waterfall adjustment" data-placement="bottom" class="fa fa-arrow-up"></i></label>
          <input type="text" value="Service Charges" />
        </div>
      </li>
      <li data-id="8" class="no-sort">
        <div class="price-point">
          <label><input type="checkbox" checked disabled>Invoice Price</label>
          <input type="text" value="Invoice Price" />
          <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Add a custom field" data-placement="left"><i class="fa fa-plus"></i></button>
        </div>
      </li>
      <li class="no-sort">
        <div class="cost grouping">
          <!-- Hierarchy - Grouping -->
          <fieldset class="hierarchy">
            <ol class="linked">
              <li class="linked-file">
                <div>
                  <label>Rebates</label>
                  <input type="text" value="Rebates" />
                  <button type="button" class="butcon" data-open-panel="rebate-adjuster-add" data-toggle="tooltip" data-original-title="Add a split adjustment field for Rebates." data-placement="left">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </li>
              <li data-id="9" class="linked-file attribute">
                <div>
                  <label>
                    <input type="checkbox" checked />Distributor Rebate
                    <i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i>
                    <i data-toggle="tooltip" data-original-title="Split rebate adjustment field." data-placement="bottom" class="fa fa-chain"></i>
                  </label>
                  <input type="text" value="Distributor Rebate" />
                </div>
              </li>
              <li data-id="10" class="linked-file attribute">
                <div>
                  <label>
                    <input type="checkbox" checked />End User Rebate
                    <i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i>
                    <i data-toggle="tooltip" data-original-title="Split rebate adjustment field." data-placement="bottom" class="fa fa-chain"></i>
                  </label>
                  <input type="text" value="End User Rebate" />
                </div>
              </li>
            </ol>
          </fieldset>
        </div>
      </li>
      <li data-id="11" class="no-sort">
        <div class="price-point inactive">
          <label><input type="checkbox">Net Price</label>
          <input type="text" value="Net Price" disabled />
          <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Add a custom field" data-placement="left"><i class="fa fa-plus"></i></button>
        </div>
      </li>
      <li data-id="12" class="no-sort">
        <div class="cost">
          <label><input type="checkbox" checked>Payment Price<i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i></label>
          <input type="text" value="Payment Price" />
        </div>
      </li>
      <li data-id="13" class="no-sort">
        <div class="cost">
          <label><input type="checkbox" checked>Freight Cost<i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i></label>
          <input type="text" value="Freight Cost" />
        </div>
      </li>
      <li data-id="14" class="no-sort">
        <div class="cost">
          <label><input type="checkbox" checked>Service Cost<i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i></label>
          <input type="text" value="Service Cost" />
        </div>
      </li>
      <li data-id="15" class="no-sort">
        <div class="price-point inactive">
          <label><input type="checkbox">Pocket Price</label>
          <input type="text" value="Pocket Price" disabled />
          <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Add a custom field" data-placement="left"><i class="fa fa-plus"></i></button>
        </div>
      </li>
      <li data-id="16" class="no-sort">
        <div class="cost">
          <label><input type="checkbox" checked>COGS<i data-toggle="tooltip" data-original-title="Negative waterfall adjustment" data-placement="bottom" class="fa fa-arrow-down"></i></label>
          <input type="text" value="COGS" />
          <button type="button" class="butcon split-dimension-add" data-toggle="tooltip" data-original-title="Split COGS into multiple adjustment fields." data-placement="left"><i class="fa fa-code-fork"></i></button>
        </div>
      </li>
      <li data-id="17" class="no-sort">
        <div class="price-point">
          <label><input type="checkbox" checked disabled>Pocket Margin</label>
          <input type="text" value="Pocket Margin" />
        </div>
      </li>
    </ol>
    
  </fieldset>
</form>

<!-- Modal - Split Dimensions -->
<div id="split-dimension-dialog" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="custom-content">
        <!-- Page 1 -->
        <div id="dimension-page-1" class="dialog-page">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">When to Use Split Adjustment Fields</h4>
          </div>
          <div class="modal-body">
            <p>Splitting an adjuster into multiple, more specific adjusters can result in more insightful and actionable analyses.  Presenting you with opportunities in areas of your business where you can take action is our goal.</p>
            <p>For example, if you track more than one type of rebate, uploading the rebate information separately allows us to analyze each rebate type independently.  This allows us to give you opportunities that are focused on the actionable, split adjuster rather than at a higher, less actionable level.    However, if it makes sense in your business to upload them as a single, aggregated adjuster because that is the most actionable level, then splitting an adjuster is unnecessary.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary action-next" autofocus>Continue</button>
          </div>
        </div>
        <!-- Page 2 -->
        <div id="dimension-page-2" class="dialog-page">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Add COGS Split Adjustment Fields<button type="button" class="btn butcon action-back"><i class="info fa fa-question-circle"></i></button></h4>
          </div>
          <div class="modal-body">
            <p>Split the (aggregate adjuster name) adjuster by selecting from the suggestions below or by entering your own adjuster. You'll be able to add more split adjusters later.</p>
            <form action="#">
              <ul class="list-unstyled">
                <li><label><input type="checkbox" checked autofocus /> Raw Material Cost</label></li>
                <li><label><input type="checkbox" /> Processing Cost</label></li>
                <li><label><input type="checkbox" /> Fixed Overhead Cost</label></li>
                <li class="divider"></li>
                <li><label><input type="checkbox"><input type="text" placeholder="Enter split adjuster name"></label><span>You can add more later</span></li>
              </ul>
            </form>
          </div>
          <div class="modal-footer">
            
            <button type="button" class="btn" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary action-add">Add</button>
          </div>
        </div>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

