<form class="dimension-tab">
  <fieldset>
    <header>
      <hgroup>
        <h2>Field</h2>
        <h2>Label</h2>
        <button type="button" class="butcon" data-open-panel="dimension-custom-add" data-toggle="tooltip" data-original-title="Add a custom field" data-placement="left"> <i class="fa fa-plus"></i>
          &nbsp;
        </button>
      </hgroup>
    </header>
    <ol class="sortable">
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" disabled checked />
            Transaction ID
          </label>
          <input type="text" value="Transaction ID" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Invoice Number
          </label>
          <input type="text" value="Invoice Number" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" disabled checked />
            Transaction Date
          </label>
          <input type="text" value="Transaction Date" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Transaction Type
          </label>
          <input type="text" value="Transaction Type" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Sales Rep <i class="fa fa-hand-o-left" data-toggle="tooltip" data-original-title="Although we don't require it, we highly recommend providing this information." data-placement="bottom"></i>
          </label>
          <input type="text" value="Sales Rep" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Channel
            <i class="fa fa-hand-o-left" data-toggle="tooltip" data-original-title="Although we don't require it, we highly recommend providing this information." data-placement="bottom"></i>
          </label>
          <input type="text" value="Channel" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            End Use Customer
          </label>
          <input type="text" value="End Use Customer" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Freight Method
          </label>
          <input type="text" value="Freight Method" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Manufacturing Plant
          </label>
          <input type="text" value="Manufacturing Plant" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Incoterms
          </label>
          <input type="text" value="Incoterms" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" checked />
            Payment Terms
          </label>
          <input type="text" value="Payment Terms" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" disabled checked />
            Unit of Measure
          </label>
          <input type="text" value="Unit of Measure" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" disabled checked />
            Order Currency
          </label>
          <input type="text" value="Order Currency" />
        </div>
      </li>
      <li class="no-nest">
        <div>
          <label>
            <input type="checkbox" disabled checked />
            Order Quantity
          </label>
          <input type="text" value="Order Quantity" />
        </div>
      </li>
    </ol>
    <!-- BEGIN: Nesting -->
    <!-- Hierarchy -->
    <fieldset class="hierarchy">
      <h1>
        <button class="butcon collapse-section">
          <i class="fa fa-caret-down"></i>
        </button>
        <span>Product Hierarchy</span>
        <button type="button" class="butcon" data-open-panel="dimension-product-add" data-toggle="tooltip" data-original-title="Add a level to this hierarchy." data-placement="left">
          <i class="fa fa-plus"></i>
        </button>
      </h1>
      <ol class="sortable">
        <li>
          <div>

            <label>
              <input type="checkbox" checked />
              Product Level 1
            </label>
            <input type="text" value="Product Level 1" />
          </div>
          <ol>
            <li>
              <div>
                <label>
                  <input type="checkbox" checked />
                  Product Level 2
                </label>
                <input type="text" value="Product Level 2" />
              </div>
              <ol>
                <li>
                  <div>
                    <label>
                      <input type="checkbox" checked />
                      Product Level 3
                    </label>
                    <input type="text" value="Product Level 3" />
                  </div>
                  <ol class="linked">
                    <li class="linked-file">
                      <div>
                        <label>
                          <input type="checkbox" disabled checked />
                          Product
                        </label>
                        <input type="text" value="Product" />
                        <button type="button" class="butcon" data-open-panel="dimension-product-attr-add" data-toggle="tooltip" data-original-title="Add a custom field." data-placement="left">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                    </li>
                    <li class="linked-file attribute">
                      <div>
                        <label>
                          <input type="checkbox" checked />
                          Size
                          <i class="fa fa-asterisk" data-toggle="tooltip" data-original-title="Your company has added this custom field." data-placement="bottom"></i>
                          <i data-toggle="tooltip" data-original-title="This is a Product attribute." data-placement="bottom" class="fa fa-chain"></i>
                        </label>
                        <input type="text" value="Size" />
                        <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Remove custom field" data-placement="left"><i class="fa fa-minus"></i></button>
                      </div>
                    </li>
                    <li class="linked-file attribute">
                      <div>
                        <label>
                          <input type="checkbox" checked />
                          Temperature
                          <i data-toggle="tooltip" data-original-title="Your company has added this custom field." data-placement="bottom" class="fa fa-asterisk"></i>
                          <i data-toggle="tooltip" data-original-title="This is a Product attribute." data-placement="bottom" class="fa fa-chain"></i>
                        </label>
                        <input type="text" value="Temperature" />
                        <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Remove custom field" data-placement="left"><i class="fa fa-minus"></i></button>
                      </div>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </fieldset>
    <!-- Hierarchy -->
    <fieldset class="hierarchy">
      <h1>
        <button class="butcon collapse-section">
          <i class="fa fa-caret-down"></i>
        </button>
        <span>Customer Hierarchy</span>
        <button type="button" class="butcon" data-open-panel="dimension-customer-add" data-toggle="tooltip" data-original-title="Add a level to this hierarchy." data-placement="left">
          <i class="fa fa-plus"></i>
        </button>
      </h1>
      <ol class="sortable">
        <li class="no-nest">
          <div>
            <label>
              <input type="checkbox" checked />
              Global Customer
            </label>
            <input type="text" value="Global Customer" disabled />
          </div>
          <ol class="linked">
            <li class="linked-file">
              <div>
                <label>
                  <input type="checkbox" disabled checked />
                  Sold to Customer
                </label>
                <input type="text" value="Sold to Customer" />
                <button type="button" class="butcon" data-open-panel="dimension-customer-attr-add" data-toggle="tooltip" data-original-title="Add a custom field." data-placement="left">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </li>
            <li class="no-nest linked-file attribute">
              <div>
                <label>
                  <input type="checkbox" checked />
                  Customer Industry
                  <i data-toggle="tooltip" data-original-title="Your company has added this custom field." data-placement="bottom" class="fa fa-asterisk"></i>
                  <i data-toggle="tooltip" data-original-title="This is a Sold to Customer attribute." data-placement="bottom" class="fa fa-chain"></i>
                </label>
                <input type="text" value="Customer Industry" />
                <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Remove custom field" data-placement="left"><i class="fa fa-minus"></i></button>
              </div>
            </li>
            <li class="no-nest linked-file attribute">
              <div>
                <label>
                  <input type="checkbox" checked />
                  Distributor
                  <i data-toggle="tooltip" data-original-title="Your company has added this custom field." data-placement="bottom" class="fa fa-asterisk"></i>
                  <i data-toggle="tooltip" data-original-title="This is a Sold to Customer attribute." data-placement="bottom" class="fa fa-chain"></i>
                </label>
                <input type="text" value="Distributor" />
                <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Remove custom field" data-placement="left"><i class="fa fa-minus"></i></button>
              </div>
              <ol>
                <li>
                  <div>
                    <label>
                      <input type="checkbox" checked />
                      Ship to Customer
                    </label>
                    <input type="text" value="Ship to Customer" />
                  </div>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </fieldset>
    <!-- Hierarchy -->
    <fieldset class="hierarchy">
      <h1>
        <button class="butcon collapse-section">
          <i class="fa fa-caret-down"></i>
        </button>
        <span>Geography Hierarchy</span>
        <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Add a level to this hierarchy." data-placement="left">
          <i class="fa fa-plus"></i>
        </button>
      </h1>
      <ol class="sortable">
        <li>
          <div>
            <label>
              <input type="checkbox" checked />
              Region Level 1
            </label>
            <input type="text" value="Region Level 1" />
          </div>
          <ol>
            <li>
              <div>
                <label>
                  <input type="checkbox" checked />
                  Region Level 2
                </label>
                <input type="text" value="Region Level 2" />
              </div>
              <ol>
                <li>
                  <div>
                    <label>
                      <input type="checkbox" checked />
                      Region Level 3
                    </label>
                    <input type="text" value="Region Level 3" />
                  </div>
                  <ol>
                    <li class="no-nest">
                      <div>
                        <label>
                          <input type="checkbox" checked />
                          Country
                          <i class="fa fa-hand-o-left" data-toggle="tooltip" data-original-title="Although we don't require it, we highly recommend providing this information." data-placement="bottom"></i>
                        </label>
                        <input type="text" value="Country" />
                      </div>
                      <ol>
                        <li class="no-nest">
                          <div>
                            <label>
                              <input type="checkbox" checked />
                              State/Province
                            </label>
                            <input type="text" value="State/Province" />
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </fieldset>
    <!-- Hierarchy -->
    <fieldset class="hierarchy">
      <h1>
        <button class="butcon collapse-section">
          <i class="fa fa-caret-down"></i>
        </button>
        <span>Sales Hierarchy</span>
        <button type="button" class="butcon" data-toggle="tooltip" data-original-title="Add a level to this hierarchy." data-placement="left">
          <i class="fa fa-plus"></i>
        </button>
      </h1>
      <ol class="sortable">
        <li class="no-nest">
          <div>
            <label>
              <input type="checkbox" checked />
              Sales Level 1
            </label>
            <input type="text" value="Sales Level 1" />
          </div>
          <ol>
            <li class="no-nest">
              <div>
                <label>
                  <input type="checkbox" checked />
                  Sales Level 2
                </label>
                <input type="text" value="Sales Level 2" />
              </div>
              <ol>
                <li class="no-nest">
                  <div>
                    <label>
                      <input type="checkbox" checked />
                      Sales Level 3
                    </label>
                    <input type="text" value="Sales Level 3" />
                  </div>
                  <ol>
                    <li class="no-nest">
                      <div>
                        <label>
                          <input type="checkbox" checked />
                          Sales Level 4
                        </label>
                        <input type="text" value="Sales Level 4" />
                      </div>
                      <ol>
                        <li class="no-nest">
                          <div>
                            <label>
                              <input type="checkbox" checked />
                              Sales Level 5
                            </label>
                            <input type="text" value="Sales Level 5" />
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </fieldset>
    <!-- END: Nesting --> </fieldset>
</form>