<!-- Pie Properties
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
                    <label for="slice-by">Slice By</label>
                    <select id="slice-by" class="form-control select2 long-list single-edit" data-placeholder="Choose a dimension">
                        <optgroup label="Recently Used Items" class="recently-used">
                            <option value="Dimension 8">Dimension 8</option>
                        </optgroup>
                        <option value="" disabled>-----</option>
                        <option value="Dimension 1" selected>Dimension 1</option>
                        <option value="Dimension 2">Dimension 2</option>
                        <option value="Dimension 3">Dimension 3</option>
                        <option value="Dimension 1">Dimension 4</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="slice-size">Slice Size</label>
                    <select id="slice-size" class="form-control select2 long-list single-edit" data-placeholder="Choose a measure">
                        <optgroup label="Recently Used Items" class="recently-used">
                            <option value="Measure 10">Measure 10</option>
                        </optgroup>
                        <option value="" disabled>-----</option>
                        <option value="Measure 1" selected>Measure 1</option>
                        <option value="Measure 2">Measure 2</option>
                        <option value="Measure 3">Measure 3</option>
                        <option value="Measure 1">Measure 4</option>
                    </select>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-toggle="toggle"> Display Legend
                    </label>
                </div>
                <div class="form-group">
                    <label for="legend-color-by">Color By</label>
                    <input id="legend-color-by" class="form-control" value="Dimension 1" readonly>
                </div>
            </fieldset>
        </form>
        <footer class="nav navbar navbar-fixed-bottom">
            <button class="btn btn-primary">Apply</button>
        </footer>
</section>
</aside>

