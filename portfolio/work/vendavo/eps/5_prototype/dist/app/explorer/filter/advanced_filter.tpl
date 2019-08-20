<div id="advanced-filter" class="flex-colonnade advanced-filter hide-flex">
        <!-- Begin: Filters -->
    <div class="flex">
        <div class="flex-colonnade">
            <div class="flex-row data-settings">
                <div class="dropdown">
                    <button class="btn btn-link" title="Data Settings" id="data-settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-list-alt"></i></button>
                    <div class="dropdown-menu data-settings" role="menu" aria-labelledby="data-settings">
                        <form action="#">
                            <fieldset>
                                <div class="form-group">
                                    <label for="pricemart">Pricemart</label>
                                    <select id="pricemart" class="form-control">
                                        <option value="">Pricemart Transactions</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="lifecycle-stage">Lifecycle Stage</label>
                                    <select id="lifecycle-stage" class="form-control">
                                        <option value="">POS and Direct</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="target-unit">Target Unit</label>
                                    <select id="target-unit" class="form-control">
                                        <option value="">EACH</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="target-currency">Target Currency</label>
                                    <select id="target-currency" class="form-control">
                                        <option value="">USD</option>
                                    </select>
                                </div>
                                <h5>Convert Currency Using</h5>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>                                
                                        Transaction Date
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">                                
                                        Fixed Date
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="control-label sr-only"></label>
                                    <input class="form-control large" type="date" placeholder="MM/DD/YYYY" disabled />
                                </div>
                            </fieldset>
                            <footer>
                                <button class="btn btn-primary" title="Apply Data Settings">Apply</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex">
                <header class="flex-colonnade">
                    <div class="flex-column">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" title="Add Filter" id="dm_listings" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-plus-circle"></i>Add Filter</button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dm_listings">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Region</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Customer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex">
                        <h5>Primary Filters</h5>
                    </div>
                    <div class="flex-column">
                        <div class="button-group">
                            <button class="btn btn-primary" title="Apply Filters" disabled><i class="fa fa-check"></i>Apply</button>
                            <button class="btn btn-link" data-toggle="toggle-advanced" title="Close Advanced Search"><i class="fa fa-times"></i></button>
                        </div>
                    </div>
                </header>
                <section>
                    <p class="text-muted">Filter Applied to Single Transaction</p>
                    <form class="form-inline">
                        <div class="form-group">
                            <input type="text" class="form-control" value="Transaction Date" readonly>
                            <select class="form-control">
                                <option value="">And</option>
                                <option value="">Or</option>
                                <option value="" selected>Between</option>
                            </select>
                            <div class="input-group">
                                <label class="sr-only" for="date-range-example">Date Range</label>
                                <input type="text" id="date-range-example" class="form-control" value="05/23/2013 - 05/22/2014">                                
                                <span class="input-group-btn">
                                    <button class="btn btn-icon" type="button"> <i class="fa fa-calendar"></i></button>
                                </span>
                                <span class="input-group-addon btn-info"> <i class="fa fa-info-circle"></i></span>
                            </div>
                            <div class="dropdown pull-right">
                                <button class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="fa fa-gear"></i>
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Filter After Grouping</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Copy to Comparison Data Set</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Remove</a></li>
                                </ul>
                            </div>
                       </div>
                        <div class="form-group">
                            <input type="text" class="form-control" value="Sold To Customer" readonly>
                            <select class="form-control">
                                <option value="">And</option>
                                <option value="">Or</option>
                                <option value="" selected>Between</option>
                            </select>
                            <select class="form-control select2 long-list multi-edit" multiple="" tabindex="-1" data-placeholder="115 Items">
                                <optgroup label="Recently Used Items" class="recently-used">
                                    <option value="ds">115 Items</option>
                                </optgroup>
                                <option value="" disabled="">-----</option>
                                <option value="AK">ABC List Item</option>
                                <option value="WA">PQR List Item</option>
                            </select>
                            <div class="dropdown pull-right">
                                <button class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="fa fa-gear"></i>
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Filter After Grouping</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Copy to Comparison Data Set</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" value="Transaction Date" readonly>
                            <select class="form-control">
                                <option value="">And</option>
                                <option value="">Or</option>
                                <option value="" selected>Between</option>
                            </select>
                            <select class="form-control select2 long-list multi-edit" multiple="" tabindex="-1" data-placeholder="5.00 - 32.00">
                                <optgroup label="Recently Used Items" class="recently-used">
                                    <option value="ds">5.00 - 32.00</option>
                                </optgroup>
                                <option value="" disabled="">-----</option>
                                <option value="AK">ABC List Item</option>
                                <option value="WA">PQR List Item</option>
                            </select>
                            <div class="dropdown pull-right">
                                <button class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="fa fa-gear"></i>
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Filter After Grouping</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Copy to Comparison Data Set</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
                <section>
                    <p class="text-muted">
                        Filter Applied to Grouped Rows By
                        <select class="form-control">
                            <option value="">Region</option>
                        </select>
                    </p>
                    <form class="form-inline">
                        <div class="form-group">
                            <select class="form-control">
                                <option value="" selected>Pocket Margin</option>
                            </select>
                            <select class="form-control">
                                <option value="" selected>SUM</option>
                            </select>
                            <select class="form-control">
                                <option value="" selected>Greater Than</option>
                            </select>
                            <input type="number" class="form-control" value="1234.68">
                            <div class="dropdown pull-right">
                                <button class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="fa fa-gear"></i>
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Filter After Grouping</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Copy to Comparison Data Set</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-group">
                            <select class="form-control">
                                <option value="" selected>Pocket Margin</option>
                            </select>
                            <select class="form-control">
                                <option value="" selected>SUM</option>
                            </select>
                            <select class="form-control">
                                <option value="" selected>Greater Than or Equal To</option>
                            </select>
                            <input type="number" class="form-control" value="5">
                            <div class="dropdown pull-right">
                                <button class="btn btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="fa fa-gear"></i>
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Filter After Grouping</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Copy to Comparison Data Set</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
                <footer>
                    <p class="text-warning pull-right">30,000,000 Transactions</p>
                </footer>
            </div>
        </div>
    </div>
</div>