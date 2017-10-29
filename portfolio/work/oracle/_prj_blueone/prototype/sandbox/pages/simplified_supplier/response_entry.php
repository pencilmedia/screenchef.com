<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="global/css/default.css" />
<script type="text/javascript" src="global/js/jquery/jquery.js"></script>
<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
<script type="text/javascript" src="response_entry.js"></script>
<title>Response Entry</title>
</head>
<body class="action_dialog record_by_record">
<div id="wrapper_action_dialog_header" class="header" style="min-width:620px;">
  <div class="header_wrapper">
    <div class="column_one">
      <h2>Response Entry</h2>
      <p>RFQ Response &bull; RFQ00647</p>
    </div>
  </div>
  <div class="record_by_record">
    <h2 class="left">P00253 &bull; <span style="font-weight:normal">Description goes here.</span></h2>
    <h2 class="right">Item 1 of 4</h2>
  </div>
  <div id="page_message" class="message info">
    <p>Please complete the requested information in the part and cost details sections. Totals will be calculated for you.</p>
  </div>
  <!--
        <div class="table_actions" style="margin-top: 15px;">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Delete</span></a>
                </p>
            </div>
        </div>
-->
</div>
<div id="wrapper_action_dialog_content" class="content dual_column">
  <h4 class="toggle bsone collapse" style="margin-top: 15px;">Part Details</h4>
  <form class="dynamic toggle_bsone toggle_content">
    <fieldset class="lt_column">
      <dl class="side_by_side_text with_top_margin">
        <dt>Number:</dt>
        <dd>P01656</dd>
        <dt>Description:</dt>
        <dd>This is where a description of the item belongs.</dd>
        <dt>Rev:</dt>
        <dd>B</dd>
        <dt>Commodity:</dt>
        <dd>&nbsp;</dd>
        <dt>UOM:</dt>
        <dd>&nbsp;</dd>
        <dt>Attachment:</dt>
        <dd>Yes
      </dl>
    </fieldset>
    <fieldset class="rt_column">
      <dl class="side_by_side_mixed with_top_margin">
        <dt>Bid Decision:</dt>
        <dd>
          <select class="short_width">
            <option selected="selected">Bid</option>
            <option>No Bid</option>
          </select>
        </dd>
        <dt>Currency:</dt>
        <dd>
          <select class="short_width">
            <option selected="selected">United States Dollar</option>
            <option>Mexican Peso</option>
          </select>
        </dd>
        <dt>Inventory Available:</dt>
        <dd>
          <input class="short_width" />
        </dd>
        <dt>Valid Until:</dt>
        <dd>
          <input type="text" value="" class="short_width" />
          <a class="button" href="#"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a></dd>
      </dl>
    </fieldset>
  </form>
  <h4 class="toggle bstwo collapse">Cost Details</h4>
  <form class="dynamic toggle_bstwo toggle_content">
    <div class="price_details">
      <table cellpadding="0" cellspacing="0">
        <colgroup>
        <col class="labels" />
        <col />
        <col class="column_end" />
        <col />
        <col class="column_end" />
        <col />
        <col class="column_end" />
        <col />
        </colgroup>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th colspan="2">4/2/2008 - 5/10/2008</th>
            <th colspan="2">4/2/2008 - 5/10/2008</th>
            <th colspan="2">4/2/2008 - 5/10/2008</th>
            <th colspan="2">4/2/2008 - 5/10/2008</th>
          </tr>
          <tr>
            <th>&nbsp;</th>
            <th>Qty 1</th>
            <th>Qty 2</th>
            <th>Qty 1</th>
            <th>Qty 2</th>
            <th>Qty 1</th>
            <th>Qty 2</th>
            <th>Qty 1</th>
            <th>Qty 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="labels">Quantity</td>
            <td>100<span>&nbsp;</span></td>
            <td>200<span>&nbsp;</span></td>
            <td>100<span>&nbsp;</span></td>
            <td>200<span>&nbsp;</span></td>
            <td>100<span>&nbsp;</span></td>
            <td>200<span>&nbsp;</span></td>
            <td>100<span>&nbsp;</span></td>
            <td>200<span>&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Target Cost</td>
            <td>3.00<span>&nbsp;</span></td>
            <td>2.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>2.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>2.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>2.00<span>&nbsp;</span></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="totals">
            <td class="labels">Total</td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
            <td>4.00<span>&nbsp;</span></td>
          </tr>
          <tr class="totals">
            <td class="labels">Material</td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
            <td>3.00<span>&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Price</td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Adder 1</td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Adder 2</td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
          </tr>
          <tr class="totals">
            <td class="labels">Non-Material</td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
            <td>1.00<span>&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Assembly</td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Test</td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
            <td><input type="text" />
              <span class="fill_right"  title="Fill same to the right" onclick="javascript:alert('clicked');">&nbsp;</span></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="labels">Total Extended</td>
            <td>600.00<span>&nbsp;</span></td>
            <td>400.00<span>&nbsp;</span></td>
            <td>600.00<span>&nbsp;</span></td>
            <td>400.00<span>&nbsp;</span></td>
            <td>600.00<span>&nbsp;</span></td>
            <td>400.00<span>&nbsp;</span></td>
            <td>600.00<span>&nbsp;</span></td>
            <td>400.00<span>&nbsp;</span></td>
          </tr>
          <tr>
            <td class="labels">Non-Recurring Cost</td>
            <td><input type="text" />
              <span>&nbsp;</span></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</div>
<div id="wrapper_action_dialog_footer" class="footer">
  <div class="column_one">
    <input type="checkbox" id="optional" />
    <label for="optional">Apply to all selected response lines</label>
  </div>
  <div class="column_three"><a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Previous</span></a><a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a><a href="#" id="cmdFinish" class="button"><span><em class="save_dialog">&nbsp;</em>Finish</span></a><a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a></div>
</div>
</body>
</html>
