<?php
		session_start();
		$component_title="DWPE Tabset Class";
		$component_key="DWPE_Tabs_Class";
		$owner="Roy Selig , Anthony Moquette";
		$specs=array();
	
		$specs[0]=array( "label" => "Tabs Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/tabs.html");
		$specs[1]=array( "label" => "Tabs Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/tabs_new.html");
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>



	<div id="test-plan">
		<h3>Tabs Beta Testing: 7/14</h3>
		
		<p><h4>Items tab...</h4>
		<img src="../DWPE_Extension/images/dwpe-dialog-tabs.png" title='Dreamweaver Tabs Dialog: Items Tab'>
		<p>&nbsp;</p>
		</p>
		
		<ol>
		<li>Test Dialog Output & Runtime
			
			<ul>
				<li>Create a new test page. Set the CSS class of the body tag to 'SecondaryRegion'.</li>
				<li>From the DWPE2 Insert Bar, click the tabs icon <img src="../DWPE_Extension/images/dwpe-icon-tabs.png" valign="middle">.  The Tab dialog should appear.</li>
				<li>On the Items tab insert 4 tabs.  Enter a tab title for each one. The tab title is the basis for the filename that will hold the tab panels content.  You may override this derived filename if you wish.</li>
				<li>On the Attributes tab remember select a project and  specify a folder name.  The dialog will create html pages, one for each tab, in this directory within the project you specify.</li>
				<li>Click OK to commit your changes.</li>
				<li>Once the code is inserted on the DW page, the property inspector should refresh to show an edit button and an option to open the tab panel html for any of the tabs.</li> 
				<li>Open the first tab's html.  Insert a table on this page and save your changes.</li>
				<li>Open the second tab's html.  Insert a form on this page and save your changes.</li>
				<li>Preview the page in Firefox.  Does the control render correctly? Does the control behave correctly?</li>
				
			</ul>
		</li>
		
		<li>Test Dialog Reentry:
			<ul>
				<li>In Dreamweaver design mode, find the component you just created.</li>
				<li>Click the component name.  The Property Inspector below the design pane will refresh. It will show the component name and provide an edit button. Click
				the edit button. The dialog will display the settings as they were the last time the dialog was visited for this component. </li>
				<li>Make a change to the settings, click OK and verify the change is saved onto the page properly. Verify it displays in Firefox correctly.</li>
				<li>In design mode, click the component name again. Press CTRL+C to copy the component. Place your cursor somewhere else on the page and press CTRL+V to paste it there. </li> 
				<li>Click the new component name and verify that dialog reentry works correctly on this copy.</li>
				<li>Note that the code mode still allows you to do in-place edits of the HTML. However, in-place edits are not recognized by dialog reentry.</li>
				<li>Note that components created with builds prior to this week will not support dialog reentry.</li>
			</ul>
		</li> 
		
		<li>Test Templates:
			<ul>
				<li>In Dreamweaver design mode, find the component you created in previous steps. Use the property inspector to reenter the dialog.  </li>
				<li>Choose Save as Template and give it a name. Cancel out of the dialog.</li>
				<li>Find a new place on your page to insert the component.  Use the insert bar to launch the component dialog. </li> 
				<li>Open the templates tab. Highlight the template name you saved before and press the load button. Are the settings restored from the template as you expect?</li>
				<li>Press OK. Does the dialog insert the component correctly on the page? Does the component look and behave as expected in Firefox?</li>
			</ul>
		</li> 
		
		<li>Reflect on the components you might frequently make with this dialog. Are any of them candidates for becoming templates? Use the Beta Feedback section to nominate the ones you think would be useful to a broad audience of prototypers.  Include a link to a spec or working sample if you have one.</li>
		
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
		
		<h3>Tabs Testing</h3>

		<p class="note">
		<u>Note!</u> Styling of tabs are per the generic skin.
		</p>		
		<ol>
            
            
            <li>Visit the <b>Configurable Elements</b> tab
            <div>A ) Tab Selection</div>
            	<ul>
					<li>Verfy tabsets draw correctly in the preview area, we default to both top and bottom.</li>
					<li>Select a top tab, verify that the bottom tab matches the selected tab on top.</li>
					<li>Select a bottom tab, verify that the top tab matches the selected tab on bottom.</li>
					<li>Select an External tab, verify the external content displays correctly.</li>
				</ul>

				<hr>
				
				<div>B ) Tabset Configuration</div>
            	<ul>
                	<li>Select 'Tabs on Top' style from the Tabset, verify tabs are only displayed on top.</li>
                	<li>Select 'Tabs on Bottom' style from the Tabset, verify tabs are only displayed on bottom.</li>
                	<li>Select 'Tabs Top & Bottom' style from the Tabset, verify tabs are only displayed on both top and bottom.</li>
                    <li>Adjust the Tabset height and press Commit, verify the new height take effect.</li>
                    <li>Disable Tab Removal and press Commit, verify selected tabs DO NOT display the close button to the right of it's title when selected.</li> 
                    <li>Enable  Tab Removal and press Commit, verify selected tabs DO display the close button to the right of it's title when selected.</li> 
					<li>Change Toolbar property to none and commit.  Verify the toolbar is no longer displayed.</li>
                    <li>Change Toolbar property to Short Toolbar and commit.  Verify the short toolbar is displayed.</li>
                    <li>Change Toolbar property to Long Toolbar and commit.  Verify the long toolbar is displayed.</li>
				</ul>

				<hr>

                <div>C ) Individual Tab Configuration</div>
				<ul>
					<li>Select a tab and change it's title and commit.  Verify the tab's new title is displayed.</li>
                    <li>Select a tab and add or remove an icon.  Verify the icon is removed or displayed.</li>
                    <li>Select a tab and change it's state to disabled and commit.  Verify the tab is not selectable when clicked.</li>
                    <li>Select a tab and change it's state to enabled and commit.  Verify the tab is able to be selected when clicked.</li>
                    <li>Select a tab and change it's content to a URL, for example, http://www.oracle.com and commit.  Verify the tab's content displays the URL when selected.</li>
              		<li>Select a tab and click the remove button (-) and commit.  Verify the tab is removed.</li>
                    <li>Click the add button (+) and commit to add a new tab.  Verify the new tab is added.</li>
                    <li>Make sure the Tab Removal is enabled for the tabset.  Select a tab and click it's remove button.  Verify the tab is removed and the next tab is selected.</li>
                    <li>Attempt to remove all tabs, the last remaining tab should remain and not be able to be removed.</li>
                </ul>
                <hr>
                <div>D ) Resizing and Overflow</div>
                <ul>
                    <li>Resize the browser to force the tab set overflow.  Select a tab from the overflow window and verify the selected tab appears as the first tab of the set when displayed.</li>
					<li>Resize your browser window and verify that tabset spacing and overflow menus are maintained correctly.</li>    
					<li>Review the tabsets for spacing and alignment issues</li>
				</ul>	    
            </li>
            	
			<hr>          
            
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
		
        
        <input type="hidden" id="_class" value="DWPE_PanelFactory_Class"/>
        <input type="hidden" id="type" value="tabs"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Tabset</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">

		<tr>
        	<td align="right">Style</td>
            <td>
            	<select id="tab_style">
                	<option value="top">Tabs on Top</option>
                	<option value="bottom">Tabs on Bottom</option>
                	<option value="both" selected='1'>Tabs Top & Bottom</option>
                </select>
            </td>
        </tr>

		<tr>
        	<td align="right">Height</td>
            <td>
            	<input id="height" type="text" value="200" style='width:50%' />
            	<span class="fld-help">(% | px | auto)</span>
            </td>
        </tr>
         <tr>
        	<td align="right">Tab&nbsp;Removal</td>
            <td>
            	<select id="allow_tab_close">
                	<option value="allow-tab-close" selected="selected">Enable</option>
                    <option value=" ">Disable</option>
              	</select>
          	</td>
       	</tr>
        
        <tr>
        	<td align="right">Toolbar</td>
            <td>
            	<select id="toolbar">
                	<option value="none">None</option>
                    <option value="sample-toolbar-short" selected="selected">Short Toolbar</option>
                    <option value="sample-toolbar-long">Long Toolbar</option>
              	</select>
          	</td>
       	</tr>
   </table>
            
			<!--div>Tabs</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%">
					<tr>
						<td>
							<select id="items"  size="5" subtype="list" 
								class="object-list"
								listController="DWPE_PanelFactory"
								onAdd_AddType="TabPanel"
								style="width:100%;min-width:180px;height:100px">
							</select>
						
						</td>
					</tr>
					<tr>	
						<td>
						
							<div id="items-property-sheet"></div>
							<script type="text/javascript">
								//onready initialize our list
								$(function()
									{
										DWPE_PanelFactory.initEditableObjectList("items");
									}
								);
							</script>
							
						</td>
					</tr>
				</table-->
			
				<div class="editable-tree-container" style="width:250px;">
					<div id="test-tree" class='editable-tree-panel'  title="Tabs" fld="items"></div>
				</div>

				
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_PanelFactory.generateTabsetMarkup( collectArguments() ) );
						}
					</script>
				</div>
			
			
			</td>
			
			<td width="100%">
				
				<div align="right" style="float:right">
					<input class="ui-state-default ui-corner-all" type="button" value="Update Preview" onClick="commitToPreview()">				
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

					
				
		<!--ul>
		<li>@Roy: 
			This is the base button class. Initially, Icon button and Text Icon Button should inherit 
			from this class. This will make a good test of my framework and OOP model.
			We must try to keep inheritance shallow though, for performance reasons.  So
			ultimately we may want to model all Text,Icon and Text Icon buttons in one class
			and simply fork the render code based on the style the user has selected.
		</li>
		<li>@Roy: 
			I'm thinking that button has two ways to render itself.  As a button or as a menu item.
			In this way we can keep the definition in one class and just switch the render mode
			when the button has been scooted into the overflow area.
		</li>
		<li>@Roy: 
			Currently the update method does several HTML node manipulations which when scaled will cost
			us in terms of performance.  So we should quickly move to node construction using string
			concatenation, committing all changes as one string inserted into the DOM all at once.
		</li>
		
		
		<li>@Roy: Add qty field and timer to metadata section to enable scaling and performance testing</li>
		<li>@Roy: update() compiles HTML string, render() posts HTML string to screen</li>
		
			
			
	</ul-->

</body>
</html>
