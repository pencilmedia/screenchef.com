<div id="basic-filter" class="flex-colonnade basic-filter">
    <!-- Begin: Filters -->
    <div class="flex">
        <!-- Primary Filter -->
        <div class="flex-colonnade primary-filter">
            <div class="flex-column data-settings dropdown">
                <button class="btn btn-link" title="Data Settings" id="data-settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-list-alt"></i></button>
                <div class="dropdown-menu" role="menu" aria-labelledby="data-settings">
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
                            <button class="btn btn-primary">Apply</button>
                        </footer>
                    </form>
                </div>
            </div>
            <div class="flex-column">
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" title="Add Filter" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-plus-circle"></i></button>
                  <!--   <ul class="dropdown-menu" role="menu" aria-labelledby="add-dm">
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Region</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Customer</a></li>
                    </ul> -->
                    <div class="dropdown-menu" role="menu" aria-labelledby="add-dm">
                        <button class="btn btn-primary" id="add-filter">Open</button>
                        <select class="form-control select2 long-list single-edit" id="dm-list" data-placeholder="Please select an item">
                            <option value=""></option>
                            <optgroup label="Recently Used Items" class="recently-used">
                                <option value=""></option>
                                <option value="">DADR</option>
                                <option value="">MALOKS</option>
                            </optgroup>
                            <option value="" disabled="">-----</option>
                            <option value="">1DEPCON</option>
                            <option value="">BADGW2P19</option> 
                            <option value="">Option 3</option>
                            <option value="">Option 4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex add-filters dropdown">
                <!-- <input type="text" placeholder="Add Filters"> -->
               <ul class="nav filter-pills" role="tablist">
                   <li role="presentation">
                       <a href="#/" class="readonly" id="pill-date" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <em>Transaction Date</em> <strong>2014</strong>
                       </a>
                       <div class="dropdown-menu" role="menu" aria-labelledby="pill-date">@@include('dialogs/transaction_date.tpl')</div>
                   </li>
                   <li role="presentation">
                       <a href="#/" class="dimension" id="pill-dimension1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <em>Region</em> <strong>Asia</strong></a>
                       <div class="dropdown-menu" role="menu" aria-labelledby="pill-dimension1">@@include('dialogs/dimension.tpl')</div>
                   </li>
                   <li role="presentation">
                       <a href="#/" class="measure" id="pill-measure1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <em>Market Price</em> <strong>&gt;&nbsp;$145,000</strong></a>
                       <div class="dropdown-menu" role="menu" aria-labelledby="pill-measure1">@@include('dialogs/measure.tpl')</div>
                   </li>
               </ul>
            </div>
             <div class="flex-column">
                <button class="btn btn-link" data-toggle="toggle-advanced" title="Advanced Search"><i class="fa fa-caret-square-o-down"></i></button>
            </div>
        </div>
        <!-- Comparison Filter -->
         <div class="flex-colonnade comparison-filter flex-hide" id="comparison-one">
            <div class="flex-column data-settings dropdown">
                <button class="btn btn-link" title="Data Settings" id="data-settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-list-alt"></i></button>
                <div class="dropdown-menu" role="menu" aria-labelledby="data-settings">
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
                            <button class="btn btn-primary">Apply</button>
                        </footer>
                    </form>
                </div>
            </div>
            <div class="flex-column">
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" title="Add Filter" id="dm_listings" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-plus-circle"></i></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dm_listings">
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Region</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Customer</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex add-filters">
                <input type="text" placeholder="Add Filters">
            </div>
             <div class="flex-column">
                <button class="btn btn-link" data-toggle="toggle-advanced" title="Advanced Search"><i class="fa fa-caret-square-o-down"></i></button>
            </div>
        </div>
        <!-- End: Filters -->
    </div>
    <div class="flex-column apply-filters">
        <button class="btn btn-link" title="Apply these filters">Apply</button>
    </div>
</div>