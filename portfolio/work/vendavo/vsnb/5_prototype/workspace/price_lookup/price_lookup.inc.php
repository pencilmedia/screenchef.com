<section class="drill-list">
	<aside class="lt-column">
		<form class="search-price-lookup">
			<fieldset class="group-w-btn">
				<select id="e2" multiple>
					<option value="desmodur" selected>Desmodur</option>
				</select>
				<div class="group-set">
				    <div class="input-group">
				      <span class="input-group-btn">
				         <div class="btn-group">
		                	<button type="button" id="customer-menu" class="btn btn-default dropdown-toggle" data-toggle="dropdown" data-id="customer-menu-list"><i class="fa fa-building-o"></i><span class="caret"></span></button>
			                <dl class="dropdown-menu">
			                	<dt>A</dt>
							<dd><a href="#">Agilent</a></dd>
							<dd><a href="#">Apple</a></dd>
							<dt>B</dt>
							<dd><a href="#">Bayer</a></dd>
							<dd><a href="#">Barefoot Coffee Roasters</a></dd>
							<dt>C</dt>
							<dd><a href="#">Cadbury Confections</a></dd>
							<dd><a href="#">CSI</a></dd>
							<dt>M</dt>
							<dd><a href="#">Marriott</a></dd>
							<dd><a href="#">Microsoft</a></dd>
							<dd><a href="#">Mustards</a></dd>
							<dt>X</dt>
							<dd><a href="#">Xerox</a></dd>
			                </dl>
			              </div>
				      </span>
					<select id="e1" class="search" multiple>
						<option value="apple">Apple</option>
						<option value="agilent">Agilent</option>
						<option value="microsoft">Microsoft</option>
						<option value="xerox">Xerox</option>
					</select>
				    </div><!-- /input-group -->
				</div>
			</fieldset>
		</form>
		<section>
			<dl class="price-search-results">
				<dd>
					<a href="#/" data-id="1" data-show-contextual="price-history-1">
						<h1><span>231674</span><span>&#8364;998.54</span></h1>
						<p>
							DESMODUR T 80 0250,00 KG B13
							<span>
								current
							</span>
						</p>
					</a>
				</dd>
				<dd>
					<a href="#/" data-id="2" data-show-contextual="price-history-1">
						<h1><span>2536614</span><span>&#8364;2,004.40</span></h1>
						<p>
							DESMODUR 44 V 20 L 0000,00 KG T01
							<span>
								add to &gt;
							</span>
						</p>
					</a>
				</dd>
				<dd>
					<a href="#/">
						<h1><span>256623</span><span>&#8364;703.62</span></h1>
						<p>
							DESMODUR 60 Y 30 L 0450,00 KF F13
							<span>
								historical
							</span>
						</p>
					</a>
				</dd>
			</dl>
		</section>
	</aside>
	<div class="rt-column details-pane">
	     <?php include($ROOT . "workspace/price_lookup/price_lookup_details.inc.php"); ?>
	</div>
      <?php include($ROOT . "vshell/right_pane.inc.php"); ?>
</section>
