<!-- Filter
================================================== -->
<section class="filter-container" role="navigation">
    <div class="flex-colonnade">
        <!-- Begin: Filters -->
        <div class="flex">

            <!-- Main Filter -->
            <div class="flex-colonnade primary-filter">
                <div class="flex-column data-settings dropdown">
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
                                <button class="btn btn-primary">Apply</button>
                            </footer>
                        </form>
                    </div>
                </div>
                <div class="flex-column">
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" title="Dimensions &amp; Measures" id="dm_listings" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-plus"></i></button>
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
                    <button class="btn btn-link" title="Advanced Search"><i class="fa fa-bullseye"></i></button>
                </div>
            </div>

            <!-- Comparison Filter -->
             <div class="flex-colonnade comparison-filter flex-hide" id="comparison-one">
                <div class="flex-column data-settings dropdown">
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
                                <button class="btn btn-primary">Apply</button>
                            </footer>
                        </form>
                    </div>
                </div>
                <div class="flex-column">
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" title="Dimensions &amp; Measures" id="dm_listings" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-plus"></i></button>
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
                    <button class="btn btn-link" title="Advanced Search"><i class="fa fa-bullseye"></i></button>
                </div>
            </div>
            <!-- End: Filters -->
        </div>
        <div class="flex-column apply-filters">
            <button class="btn btn-link" title="Apply these filters">Apply</button>
        </div>
    </div>
</section>