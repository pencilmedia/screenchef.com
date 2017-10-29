<aside class="rt-pane data-upload-details slideOutPanel">
  <section>
    <!-- ADD PRICE WATERFALL FIELD -->
    <article data-id="waterfall-add">
      <h1>Add a Price Field</h1>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="COGS BD1" maxlength="128">
          </dd>
          <dd>
              <label>Label</label>
              <input type="text" value="COGS BD1" maxlength="128">
          </dd>
          <dd>
            <label>Type<i data-toggle="tooltip" data-original-title="Cost is negative adjustment and charge is negative adjustment." data-placement="bottom"  class="info fa fa-question-circle"></i></label>
            <div class="radio">
              <label>
                <input type="radio" name="type">Cost - Negative Adjustment<i class="cost fa fa-arrow-down"></i>
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="type">Charge - Positive Adjustment<i class="charge fa fa-arrow-up"></i>
              </label>
            </div>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>

    </article>

    <!-- EDIT PRICE WATERFALL -->
    <article data-id="waterfall-edit">
      <h1>Edit Price Field</h1>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="COGS BD1" maxlength="128">
          </dd>
          <dd>
              <label>Label</label>
              <input type="text" value="COGS BD1" maxlength="128">
          </dd>
          <dd>
              <label>Type<i data-toggle="tooltip" data-original-title="Cost is negative adjustment and charge is negative adjustment." data-placement="bottom"  class="info fa fa-question-circle"></i></label>
              <div class="radio">
                <label>
                  <input type="radio" name="type">Cost - Negative Adjustment<i class="cost fa fa-arrow-down" checked></i>
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="type">Charge - Positive Adjustment<i class="charge fa fa-arrow-up"></i>
                </label>
              </div>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Save</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>

    </article>

    <!-- ADD custom dimension FIELD -->
    <article data-id="dimension-custom-add">
      <h1>Add a Custom Field</h1>
      <p class="instructions">
        After adding this new field, drag it to the desired place.  The Label will be used throughout the app; the Name is only used in this workspace.
      </p>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
            <label>Name</label>
            <input type="text" value="Name" maxlength="128">
          </dd>
          <dd class="error">
            <label>Label</label>
            <input type="text" value="Label" maxlength="128">
            <span>There is an error with this field</span>
          </dd>
          <dd>
            <label>Type</label>
            <select id="custom-field-type" class="chosen-select">
              <option>Choose Type</option>
              <option>Text</option>
              <option>Numeric</option>
              <option>Currency</option>
              <option>Date</option>
            </select>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>
    </article>

    <!-- ADD custom product hierarchy FIELD -->
    <article data-id="dimension-product-add">
      <h1>Add a Product Hierarchy Field</h1>
      <p class="instructions">
        After adding this new field, drag it to the desired place in the hierarchy.  The Label will be used throughout the app; the Name is only used in this workspace.
      </p>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="Name" maxlength="128">
          </dd>
          <dd class="error">
              <label>Label</label>
              <input type="text" value="Label" maxlength="128">
              <span>There is an error with this field</span>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>
    </article>

    <!-- ADD product attribute FIELD -->
    <article data-id="dimension-product-attr-add">
      <h1>Add a Product Attribute</h1>
      <p class="instructions">
        This new attribute is a characteristic of the hierarchy field where it was added.  Attributes can be very useful details about the product, like size or temperature.
      </p>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="Name" maxlength="128">
          </dd>
          <dd class="error">
              <label>Label</label>
              <input type="text" value="Label" maxlength="128">
              <span>There is an error with this field</span>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>
    </article>

    <!-- ADD product attribute FIELD -->
    <article data-id="rebate-adjuster-add">
      <h1>Add a Split Adjustment Field for Rebates</h1>
      <p class="instructions">
        This new adjuster will be added as a split adjuster to rebates.
      </p>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="Name" maxlength="128">
          </dd>
          <dd class="error">
              <label>Label</label>
              <input type="text" value="Label" maxlength="128">
              <span>There is an error with this field</span>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>
    </article>

    <!-- ADD custom customer hierarchy FIELD -->
    <article data-id="dimension-customer-add">
      <h1>Add a Customer Hierarchy Field</h1>
      <p class="instructions">
        After adding this new field, drag it to the desired place in the hierarchy.  The Label will be used throughout the app; the Name is only used in this workspace.
      </p>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="Name" maxlength="128">
          </dd>
          <dd class="error">
              <label>Label</label>
              <input type="text" value="Label" maxlength="128">
              <span>There is an error with this field</span>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>
    </article>

    <!-- ADD customer attribute FIELD -->
    <article data-id="dimension-customer-attr-add">
      <h1>Add a Customer Attribute</h1>
      <p class="instructions">
        This new attribute is a characteristic of the hierarchy field where it was added.  Attributes can be very useful details about the customer, like industry or size.
      </p>
      <form name="createForm" id="createForm" class="edit-form">
        <dl>
          <dd>
              <label>Name</label>
              <input type="text" value="Size" maxlength="128">
          </dd>
          <dd class="error">
              <label>Label</label>
              <input type="text" value="Size" maxlength="128">
              <span>There is an error with this field</span>
          </dd>
          <dd class="list-actions">
            <button class="btn btn-primary disabled" disabled="disabled">Add</button>
            <button class="btn close-contextual-pane">Cancel</button>
          </dd>
        </dl>
      </form>
    </article>


  </section>
</aside>