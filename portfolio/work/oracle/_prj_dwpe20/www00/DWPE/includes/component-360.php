
<div id="page">

<div style='poition:relative;'>
	<div style="line-height:4px;float:right;"> 
		<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/login.php'?>
	</div>
	<div>
		<h3 style="line-height:4px"><a href="/DWPE/">DWPE 2.0 Component Sandbox</a>&nbsp;&nbsp;<span id="build_num"></span></h3>
		<h3 style="line-height:4px">
		<?php echo($component_title);?>
		<i style='font-weight:normal;font-size:11px'>Owner: <?php echo($owner)?></i><br>
		</h3>
	</div>
</div>

<a name="#preview"></a>
<div id="preview"></div>
<div id="script"></div>

<div id="component-tabs">
	<ul>
		<li id="tab-test-plan"><a href="#tabs-0">Test&nbsp;Plan</a></li>
		<li id="tab-beta-feedback"><a href="#tabs-1">Beta Feedback</a></li>
		<li id="tab-specifications"><a href="#tabs-2">Specifications</a></li>
		
		<li id="tab-configurable-elements"><a href="#tabs-3">Configurable&nbsp;Elements</a></li>
		<li id="tab-alpha-feedback"><a href="#tabs-4">Alpha Feedback</a></li>
		<li id="tab-metadata"><a href="#tabs-5">Metadata</a></li>
		<li id="tab-developer-notes"><a href="#tabs-6">Dev. Notes</a></li>
	</ul>
	
	<div id="tabs-0">
		<script type="text/javascript">
			$(function(){$("#tabs-0").append($("#test-plan"));});
		</script>
	</div>
	
	
	<div id="tabs-1" style="padding:0px;">
		
	<?php	echo("<iframe id='alpha_feedback_iframe' class='component-360-iframe' src='/DWPE/includes/feedback.php?component_key=".$component_key."-beta'></iframe>");  ?>
		
		
	
	</div>
	
	<div id="tabs-2" style="padding:0px;">
		<?php
		
			if(isset($specs))
			{	
			
				array_push($specs,
					array( "label" => "Generic Skin",
						 "url" => "/DWPE/images/generic_skin/generic-skin-comps.htm")		);
			
				echo("<div class='component-360-toolbar'>");
				echo("<span  style='margin:5px'>Load:</span>");
				
				$count=count($specs);
				
				for($i=0;$i<$count;$i++) 
				{
   				 	$o=$specs[$i];
   					echo("<input title='".$o["url"]."' class='ui-state-default ui-corner-all' style='margin:5px;' type='button' onclick='openInIframe(this)' frame_id='spec_iframe' url='".$o["url"]."' value='".$o["label"]."'>");
				 	
				}
				echo("</div>");
				echo("<iframe id='spec_iframe' class='component-360-iframe' src=''></iframe>");
			
			}
			
			
			else
				echo("<p>No specifications yet</p>");
		
		?>
	
	</div>
	
	<div id="tabs-3">
		
		<div id='properties-sheet-container'>
		
			<div id='region-selector'>
				<table class="properties-table">
					<tr>
						<td class='label'>Region</td>
						<td>
							
							<select id="region_style" ignore_property="1">
								<option value='Global'>Level 1</option>
								<option value='Primary' selected>Level 2</option>
								<option value='Secondary'>Level 3</option>
								<option value='Tiertiary'>Level 4</option>
								
							</select>
							
						</td>
					</tr>
				</table>
				
				<hr>
			</div>
			
		</div>
	
	</div>
	
	
	
	
	<div id="tabs-4" style="padding:0px;">
		
	<?php	echo("<iframe id='feedback_iframe' class='component-360-iframe' src='/DWPE/includes/feedback.php?component_key=".$component_key."'></iframe>");  ?>
		
		
	
	</div>
	
	
	<div id="tabs-5">
		
		<form id="metadata-form">
			
				<table class="properties-table">
					
					<tr id='metadata-definition-row'>
						<td class="label">Definition</td>
						<td colspan="2">
							<textarea id="metadata" value=''></textarea>
						</td>
					</tr>
					
					<tr>
						<td class="label">Quantity</td>
						<td colspan="2">
							<input id="qty" type="text" value="1"/> 
							&nbsp;
							<input id='metadata-make' class="ui-state-default ui-corner-all" type="button" value="Make" onclick="commitToPreview()">
							&nbsp;|	&nbsp;
							<input id='metadata-run-tests' class="ui-state-default ui-corner-all" type="button" value="Run Tests" onclick="runPerformanceTest()">
								
							
						</td>
					</tr>
					
					<tr>
						<td></td>
						<td>
						
							<span id="time-to-execute"></span>
							
							</td>
						<td><span id="performance-chart"/></td>	
						
					</tr>
					
					
					
					
					
				</table>
				
			
			</form>
	</div>
	
	<div id="tabs-6" style="padding:0px;">
		
		<?php	echo("<iframe id='dev-notes-iframe' class='component-360-iframe' src='/DWPE/includes/feedback.php?component_key=".$component_key."-dev-notes'></iframe>");  ?>
	
	
	</div>
	
	
</div><!--end component tabs-->




</div><!--end page-->
