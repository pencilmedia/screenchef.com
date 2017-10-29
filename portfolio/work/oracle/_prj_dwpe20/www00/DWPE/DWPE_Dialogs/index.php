<?php
		session_start();
		$component_title="DWPE Dialogs";
		$component_key="DWPE_Dialogs";
		$owner="Roy Selig";
		$specs=array();
	
		$specs[0]=array( "label" => "Secondary Windows Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/windows.html");
		$specs[1]=array( "label" => "Secondary Windows Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/windows_new.html");
		$specs[2]=array( "label" => "Messaging Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/messaging.html");
		$specs[3]=array( "label" => "Messaging",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/messaging.html");
		
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
	
	
	
		<h3>Dialog Beta Testing</h3>
		
		<p><h4>Attributes tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-dialog.png" title='Dreamweaver Dialog: Attributes Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>From the DWPE2 Insert Bar, click the window icon <img src="../DWPE_Extension/images/dwpe-icon-window.png" valign="middle">.  The 'Dialog' dialog should appear.</li>
				<li>On the attributes tab enter values for window title and filename.</li>
				<li>Change settings for mode, type and position.</li>
				<li>Note the project field.  When you click OK the dialog will create a file in this project's windows directory representing your dialog.  If you want to change the content of the dialog you must open this window file and change it's html.  As a convenience, immediately after clicking OK the window file that is created will be opened for you.</li>
				<li>Click OK to commit your changes.</li>
				
				<li>We have a window. Now we need a way to launch it.</li>
			
				<li>In Dreamwever open an existing test page. Place your cursor on some whitespace in the design pane and enter 10 carriage returns. This adds whitespace to the page.  At runtime this whitespace forces the body of the web page to have sufficient height for dialogs to display correctly. We will only need to do this step in Beta Testing.  In the final product, the UI Shell will ensure that the web page height fits the browser window height.</li>
				<li>From the DWPE2 Insert Bar, click the form icon <img src="../DWPE_Extension/images/dwpe-icon-form.png" valign="middle"> and select the "Link" menu item.  The Link dialog should appear.</li>
				<li>On the attributes tab enter values for label and tooltip.</li>
				<li>Click the button beside the command field to specify a command. In the Select Command dialog set type to Open Fusion Dialog. Set project to the project where you saved the window file. In the file field select the window file you saved. Click OK and verify that your choices have been pushed into the command field of the Link dialog.</li>
				<li>Click OK to commit your changes to this Link.</li>
				
				<li>In design mode a link component placeholder will appear at the insertion point. </li>
				<li>Preview the page in Firefox.  Click the link you created. Does the dialog open as you specified? Can you drag the dialog around? Can you dismiss it?</li>
				
				<li>Using the steps above create other dialog files. Vary the settings for type,mode, resizable and position. On the resultant window file, change the content of the window. Change the link to refer to these new window files.  Do the windows behave as expected?</li>
			
				<li>Note that the modal dialog shield (the grayed out area behind the dialog) won't span the entire page correctly.  This won't work until UI Shell is in place.</li>
			
			</ul>
		</li>
		
		<li>Open the dialog and click the '?' tab. Read the help presented there. If you feel something is missing or not covered well, enter feedback about it.</li>
		
		
		
		<li>Visit the <b>Beta Feedback</b> tab and report your findings
			<ul>
				<li>Enter a separate bug for each interaction and visual issue you've noted.  </li>
				<li>Remember to tag each feedback entry appropriately so we can search on it.</li>
				<li>Feedback is due on Tuesday, Noon PT.</li>
			</ul>
		</li> 
		</ol>
		
		<div style="opacity:.5">
		<hr>
		<h3>Dialog Alpha Testing</h3>

		<ol>
            <li>Visit the <b>Preview</b> area; a sample component has been set up for you there.
            	<ul>
					<li>
						Review spacing and alignment of elements in the window. 
					</li>
					
					<li>
						Grab the window title and move the window around the screen.
					</li>
					
					
					<li>
						Click the close button to close the window.  Refresh the page to get the window back.
					</li>
					
					<li>
						Refer to the Specifications tab for guidance.
					</li>
					
				</ul>
            </li>
            <li>Visit the <b>Configurable Elements</b> tab
            	<ul>
					<li>Modify the Window Title</li>
					<li>For Mode choose Modal</li>
					<li>Commit your changes.</li>
					<li>The window should appear and the background of the preview area should dim.</li>  
					<li>Click anywhere outside the window and within the preview area. Nothing should be active.</li>
					<li>Does the modal window behave as you expect?</li>
					<hr>
					
					<li>For Mode choose Modeless.</li>
					<li>For Resizable choose Enabled.</li>
					<li>Commit your changes.</li>
					<li>Find the resize handle in the lower right corner of the window.</li>
					<li>Resize the window to the smallest size possible.  Verify that a minimum width and height were enforced.</li>
					<li>Resize the window to the largest size possible.  Verify that a maximum width and height were enforced. Maximum width and height are set at 60% of the preview area width and height.</li>
					<li>Does the resizable window behave as you expect?</li>
					<hr>
					
					<li>For Position choose Anchored.</li>
					<li>Commit your changes.</li>
					<li>Does the window appear anchored to the target text?</li>
					<hr>
					
					<li>Select each type at least once and commit your changes.</li>
					<li>Does the content in the window appear formatted as you'd expect for a dialog of this type?</li>
					<hr>
					
					
					
					<li>For Type choose Dialog and commit your changes.</li>
					<li>In the open window find and click the link called 'open anchored window'.</li>
					<li>Does a second window open on top of the first window?</li>
					<li>Is the second window anchored to the 'open anchored window' text?</li>
					<li>Click somewhere inside the first window? Does the first window move to the front?</li>
					<hr>
					
					<li>Close the second window.</li>
					<li>In the open window find and click the link called 'open tabbed window'.</li>
					<li>Does a second window open on top of the first window?</li>
					<li>Does a three tab tabset appear inside this window's content area?</li>
					<li>Click on the tabs, the tab overflow and the toolbar. Does everythhing behave as you expect?</li>
					<hr>
					
					<li>Close the second window.</li>
					<li>In the open window find and click the link called 'open modal window'.</li>
					<li>Does a second window open on top of the first window?</li>
					<li>Does it prevent you from clicking on the first window?</li>
					<hr>
					
					<li>Close the second window.</li>
					<li>In the open window click on any of the links as many times as you like.</li>
					<li>Move windows around and click on more links.</li>
					
					<li>Do all the links open windows in the way you expect?</li>
					<li>When you move between windows is focus placed on windows as you expect?</li>
					<li>When you move windows around are you prevented from moving them beyond the left and top edges of the preview area?</li>
					
					<li>When you close windows do they behave as you expect?</li>
					
					<hr>
					<li>Visit the <a href='/DWPE/DWPE_Accordion_Class/'>Accordion</a> and <a href='/DWPE/DWPE_Tabs_Class/'>Tabset</a> test pages.</li>
					<li>Click the links you find in the content panes there and verify that the resultant windows behave as expected.</li>
					<hr>
					
					
					
					
					<li>Review the property labels.  Does the terminology used make sense to you?</li>
					
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
	

	</div>
	
	
	


	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_WindowFactory_Class"/>

		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Properties</div>
	
	
				
	
	
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
			
					
			
					
					 <tr>
						<td class='label'>Type</td>
						<td>
							<select id="type">
								<option value="dialog" selected="1">Dialog</option>
								<option value="confirm-dialog">Confirmation</option>
								<option value="info-dialog">Info</option>
								<option value="warning-dialog">Warning</option>
								<option value="error-dialog">Error</option>
								
								
							</select>
						</td>
					</tr>
					
					<tr>
						<td class='label'>Title</td>
						<td>
							<input id="title" type="text" value="Window Title" />
							
						</td>
					</tr>
					
					 <tr>
						<td class='label'>Mode</td>
						<td>
							<select id="mode">
								<option value="modal">Modal</option>
								<option value="modeless" selected="1">Modeless</option>
								
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Position</td>
						<td>
							<select id="position">
								<option value="centered">Centered</option>
								<option value="anchored" selected="1">Anchored</option>
								
							</select>
						</td>
					</tr>
					
					 <tr>
						<td class='label'>Resizable</td>
						<td>
							<select id="resizable">
								<option value=" ">Disabled</option>
								<option value="resizable" >Enabled</option>
							</select>
						</td>
					</tr>
					
			   </table>
            
			
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();">
					<script type="text/javascript">
					
						
					
						
						function insert()
						{
							var markup=DWPE_WindowFactory.generateMarkup( collectArguments() );
							$("#scratchpad").val( markup );
							commitProperties();
							
							var $target=$('<p style="position:relative;top:50px;left:150px;">Target Text</p>');
							$('#preview').empty();
							$('#preview').append($target);
							DWPE_WindowFactory.processWindowMarkup(markup,$target);
							
							
							
						}
						
						function specialized_CommitToPreview()
						{
							
							var markup=$("#scratchpad").val();
							
							var $target=$('<p style="position:relative;top:50px;left:150px;">Target Text</p>');
							$('#preview').empty();
							$('#preview').append($target);
							DWPE_WindowFactory.processWindowMarkup(markup,$target);
							
							
						}
						
						
						
						
						
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="specialized_CommitToPreview()">				
					</div>
				
				<div align="left">Generated Markup</div>
				
					<textarea id="scratchpad" style="width:100%;height:400px;padding:5px;"  ignore_property="1"></textarea>
			</td>
			
		</tr>
		
		
	
		
		<tr>
			<td colspan='1'></td>
			
			<td align="right">
				
			
			</td>
			
			
		</tr>
		
		</table>
			
	</form>
	
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/component-360.php'?>

					
	

</body>
</html>
