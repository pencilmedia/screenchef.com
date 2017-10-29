<?php
		session_start();
		$component_title="DWPE Command Buttons";
		$component_key="DWPE_Command_Buttons";
		$owner="Roy Selig";
		$specs=array();
	
	
		$specs[0]=array( "label" => "Button Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/button.html");
		$specs[1]=array( "label" => "Button Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/buttons.html");
			
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
		<h3>Command Button Testing &nbsp;<input class='print-btn'/></h3>
		
		<p class='note'>
			Command Buttons are buttons that live outside of toolbars. For example, the 
			Ok and Cancel buttons that appear in window dialogs are command buttons.
			Command buttons function the same way as buttons on toolbars. However, 
			they don't always look exactly the same.  For example, the Iconic Button and
			Iconic Text Button, when rendered outside a toolbar, are considered 
			command buttons. In this placement, they are supposed to show button chrome.
			
		</p>
		
		
		<ol>
            <li>Visit the <b>Preview</b> area; a group of command buttons have been
                added for you there.
            	
            </li>
            
            
             <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Switch the region selector to Global, Primary and Secondary. For each region...
					
					<ol>
						<li>
							Review each button for proper spacing and alignment. 
						</li>
						
						<li>
							Review each button for proper state feedback: rollover, active, selected.
						</li>
						
						<li>
							Review each button for proper application of generic color scheme.
						</li>
						
						
					</ol>
				
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
            
            <li>Visit the <b>Feedback</b> tab and report your findings
            	<ul>
					<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
					<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
					<li>Feedback is due on Monday, Noon PT.</li>
				</ul>
            </li>
		</ol>
	
	</div>
	
	
	


	
	<form id="properties-sheet">

	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>



</body>
</html>
