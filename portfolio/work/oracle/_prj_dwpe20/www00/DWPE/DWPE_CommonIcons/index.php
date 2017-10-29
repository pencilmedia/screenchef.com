<?php
		session_start();
		$component_title="DWPE Common Icons";
		$component_key="DWPE_CommonIcons";
		$owner="Roy Selig";
		$specs=array();
	
	
		$specs[0]=array( "label" => "Icon Usage",
						 "url" => "http://fusiongps.us.oracle.com/guidelines/content/guidelines/icons/index.htm");
			
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
		
		
		<h3>Icon Beta Testing</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-icon.png" title='Dreamweaver Link Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page.</li>
				<li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Icon" menu item.  The Icon dialog should appear.</li>
				<li>On the attributes tab click on an icon. Note that its keyword equivalent is posted to the Icon field. </li>
				<li>Click OK to commit your changes.</li>
				<li>In design mode a component placeholder will appear at the insertion point. </li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				<li>Repeat the test steps, but this time click the browse button next to the icon field.  Browse to find an icon that you want to reference that isn't a system supported icon. This test will probably require you to first copy an icon from DWPE 1.0 site into a folder on your DWPE 2.0 Beta test site. You should place the image in the shared/images folder.</li>
			
			</ul>
		</li>
		
		
		
		<li>Visit the <b>Beta Feedback</b> tab and report your findings
			<ul>
				<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
				<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
				<li>Feedback is due on Tuesday, Noon PT.</li>
			</ul>
		</li> 
		</ol>
		
		
		<div style="opacity:.5">
		
		<h3>Common Icon Testing 4/6&nbsp;<input class='print-btn'/></h3>
		
		
		<p>
			The icons have been updated to include 12x12 icons such as status icons that you might use within tables.
		</p>
			
		
		<ol>
            <li>Visit the <b>Preview</b> area; a list of the common icons that the system
            currently holds is shown there. The icon appears first, the icon's keyword follows, 
            and the system generated icon index appears last.
            
            
           			 <ul>
						<li>
							Review each icon for proper spacing and alignment. 
						</li>
						
						<li>
							Review each icon keyword.  Does it clearly and succinctly describe the icon?
						</li>
						
						<li>
							Rollover each icon.  When an icon presents a tooltip (not all define one) does it 
							match the icons function?
						</li>
						
						
						
						<li>
							The last icon in the set is brought in via URL.  Verify that a green thumbs up icon appears.
            
						</li>
						
						
					</ul>
            
            
            </li>
            
           <li>Visit the <b>Feedback</b> tab and report your findings
            	<ul>
            		
            	
					<li>Enter a separate bug for each issue you've noted.  </li>
					<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
					<li>Feedback is due on Monday, Noon PT.</li>
				</ul>
            </li>
		</ol>
	
	
		
		<div style='color:#999'>
		<h3>Common Icon Testing 3/30: Complete&nbsp;</h3>
	
		
		<p>
		
			<p>
			The icons have been updated to reflect the keywords they are commonly associated with in Fusion.
			This list of associations was provided by Katy Massucco.
			</p>
			<p>
			We've included support for default tooltips on icons. We only provide
			a default tooltip when Fusion defines one. Otherwise we leave it out. In these cases, the prototyper can
			supply a tooltip if they wish by adding a title attribute to the icon's generated markup.
			</p>
			<p>
			Note that several icons are associated with multiple keywords which fits current practice. For
			example, the keywords 'delete' and 'remove' are both associated with the icon index 23. This is done
			for user convenience. This is not a bug.
			</p>
			<p>
			We now allow users to specify icons via keyword in CSS markup.  To avoid
			collisions with functional elements in CSS we require that the prototyper prefix an 
			'ico-' before the keyword.  So the 'delete' keyword would appear in CSS markup as 'ico-delete'.
			</p>
			
			
		</p>
		
		
		<ol>
            <li>Visit the <b>Preview</b> area; a list of the common icons that the system
            currently holds is shown there. The icon appears first, the icon's keyword follows, 
            and the system generated icon index appears last.
            
            
           			 <ul>
						<li>
							Review each icon for proper spacing and alignment. 
						</li>
						
						<li>
							Review each icon keyword.  Does it clearly and succinctly describe the icon?
						</li>
						
						<li>
							Rollover each icon.  When an icon presents a tooltip (not all define one) does it 
							match the icons function?
						</li>
						
						
						
						<li>
							The last icon in the set is brought in via URL.  Verify that a green thumbs up icon appears.
            
						</li>
						
						
					</ul>
            
            
            </li>
            
           <li>Visit the <b>Feedback</b> tab and report your findings
            	<ul>
            		
            	
					<li>Enter a separate bug for each issue you've noted.  </li>
					<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
					<li>Feedback is due on Monday, Noon PT.</li>
				</ul>
            </li>
		</ol>
		</div>
		
		
		<h3>Common Icon Testing 3/2: Complete&nbsp;</h3>
		
		<p>
			Users of the DWPE 2 will have two methods to specify icons in dialogs. The first method is by URL. 
			As in DWPE 1, the user may specify a relative or absolute URL to an icon image.  In such cases the
			user is expected to point to a valid icon image.
			<br><br>
			The second method of specifying icons in DWPE 2 is by keyword.  Users can type a succinct keyword 
			and the system will resolve that keyword and present its associated image at runtime.
			<br><br>
			In this page we are testing both methods.
			
		</p>
		
		
		<ol>
            <li>Visit the <b>Preview</b> area; a list of the common icons that the system
            currently holds is shown there. The icon appears first, the icon's keyword follows, 
            and the system generated icon index appears last.
            
            
           			 <ul>
						<li>
							Review each icon for proper spacing and alignment. 
						</li>
						
						<li>
							Review each icon keyword.  Does it clearly and succinctly describe the icon?
						</li>
						
						<li>
							The last icon in the set is brought in via URL.  Verify that a green thumbs up icon appears.
            
						</li>
						
						
					</ul>
            
            
            </li>
            
            <li>
				Reflect on your own application domain.  Are there icons that you think
				should be included in the common set?  Remember, what you suggest must have
				universal application.  For each of your icon suggestions enter one message 
				in the feedback tab on this page.  
				<br><br>
				<u>Please ensure each message includes</u>:
				<ol>
					<li>a single icon suggestion</li>
					<li>a URL where the icon can be seen</li>
					<li>a suggested keyword for the icon</li>
					<li>a brief justification for its inclusion</li>
				</ol>
			</li>
            
            
            <li>Visit the <b>Feedback</b> tab and report your findings
            	<ul>
            		
            	
					<li>Enter a separate bug for each issue you've noted.  </li>
					<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
					<li>Feedback is due on Monday, Noon PT.</li>
				</ul>
            </li>
		</ol>
	
		</div>
	</div>
	
	
	


	
	<form id="properties-sheet">

	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>



</body>
</html>
