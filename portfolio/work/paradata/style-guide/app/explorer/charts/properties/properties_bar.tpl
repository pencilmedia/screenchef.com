<!-- Bar Properties
================================================== -->
<aside class="workarea-pane animate25s slideOutRight">
    <section>
        <form class="inline-status">
            <fieldset>
                <div class="form-group">
                    <label for="chart-title">Chart Title</label>
                    <input id="chart-title" class="form-control" value="">
                </div>
                <div class="form-group">
                    <label for="horizontal-axis">Horizontal Axis</label>
                    <select id="horizontal-axis" class="form-control">
                        <option value="">Measure 1</option><option value="">Dimension 2</option><option value="">Dimension 3</option>
                    </select>
                    <button type="button" class="btn btn-link field-indicator expand-form"><i class="fa fa-caret-down"></i></button>
                    <!-- Sub Form Group -->
                    <div class="form-group sub-form-group">
                        <label for="horizontal-axis-label">Label</label>
                        <select id="horizontal-axis-label" class="form-control">
                            <option value="">Measure 1</option>
                        </select>
                        <label for="horizontal-axis-scale">Scale</label>
                        <select id="horizontal-axis-scale" class="form-control">
                            <option value="">Absolute</option>
                            <option value="">Percent</option>
                            <option value="">Per Unit</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="vertical-axis">Vertical Axis</label>
                    <select id="vertical-axis" class="form-control">
                        <option value="">Dimension 1</option><option value="">Dimension 2</option><option value="">Dimension 3</option>
                    </select>
                    <button type="button" class="btn btn-link field-indicator expand-form"><i class="fa fa-caret-down"></i></button>
                    <!-- Sub Form Group -->
                    <div class="form-group sub-form-group">
                        <label for="vertical-axis-label">Label</label>
                        <select id="vertical-axis-label" class="form-control">
                            <option value="">Dimension 1</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="group-by">Group By</label>
                    <select id="group-by" class="form-control">
                        <option value="" selected>Dimension 1</option>
                        <option value="">Time</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="color-by">Color By</label>
                    <input id="color-by" class="form-control" value="Dimension 1" readonly>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-toggle="toggle"> Stacked
                    </label>
                </div>
            </fieldset>
        </form>
        <footer class="nav navbar navbar-fixed-bottom">
            <button class="btn btn-primary">Apply</button>
        </footer>
    </section>
</aside>