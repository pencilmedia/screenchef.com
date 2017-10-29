<?php
		session_start();
		$component_title="DWPE 2 Extension";
		$component_key="DWPE_Extension";
		$owner="Roy Selig";
		$specs=array();
	
		/*
		$specs[0]=array( "label" => "Form Layout Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines4/formLayout.html");
		$specs[1]=array( "label" => "Form Layout Visuals",
		 				  "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/formLayout.html");
	
		/
		$specs[0]=array( "label" => "Tabs Usage",
						 "url" => "http://stux.us.oracle.com/blaf/guidelines5/tabs.html");
		$specs[1]=array( "label" => "Tabs Visuals",
						 "url" => "http://blafstaging.us.oracle.com/blafPlus/VisualDesign/Shepherd/tabs_new.html");
		*/
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<?php include $_SERVER['DOCUMENT_ROOT'].'/DWPE/includes/resources2.php'?>
	
</head>

<body>





	<div id="test-plan">
	
<h2>DWPE 2 Beta: Week 8</h2>	
		
<p>Download the DWPE 2 Beta Week 8 Installation file: <a href="builds/DWPE2BETA.11376.mxp">DWPE2Beta.11376.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Open your DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
<li><u>Important!</u> From the Insert bar choose Create Project.
</ol>

<p>This week's component test plans are as follows:



<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Tables/'>Tables</a></li>	
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Menus/'>Menus</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Tabs_Class/'>Tabs</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Headers_Class/'>Headers</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Subheaders_Class/'>Subheaders</a></li>
</ol>


</p>

<h4>Noteworthy</h4>
<ul>
	<li>LOV now supports the dialog URL You can now associate a dialog to be shown when the LOV icon is shown.  In it you could show a table.  Row selection and returning the selected value to the calling field is still to come.</li>

</ul>		
	

<h2>DWPE 2 Beta: Week 7</h2>	
		
<p>Download the DWPE 2 Beta Week 7 Installation file: <a href="builds/DWPE2BETA.11360.mxp">DWPE2Beta.11360.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Open your DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
</ol>

<p>This week's component test plans are as follows:



<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_FormLayout/'>Form Builder</a></li>	
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_DateTimePicker_Class/'>Date Time Picker</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_SpinBox_Class/'>Spin Box</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_ToggleButton/'>Toggle Button</a></li>
</ol>


</p>

<h4>Noteworthy</h4>
<ul>
	<li>Added fields attribute to Form Builder.  Allows specification of which fields, if any, are included when the form layout is generated.</li>
	<li>Date Time Picker now retains current date upon dialog reentry. Change the default value to something other than the retained date to have the date recalculated.</li>	
	<li>Spinbox now drawn using a new method, prepares the way for use in editable tables.</li>
	<li>Toggle Button Icon Picker bug fixed.</li>
</ul>	

<h2>DWPE 2 Beta: Week 6</h2>	
		
<p>Download the DWPE 2 Beta Week 6 Installation file: <a href="builds/DWPE2BETA.11341.mxp">DWPE2Beta.11341.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Create a new test site.  This step is important because we have simplified the site directory structure.  Open your new DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
</ol>

<p>This week's component test plans are as follows:



<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Link_Class/'>Link</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_CommonIcons/'>Icon</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Dialogs/'>Dialogs</a></li>
	
	Retesting for icon and command selection support...
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_TextButton_Class/'>Text Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_IconicButton_Class/'>Iconic Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_IconicTextButton_Class/'>Iconic Text Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_InlineSelector/'>Inline Selector</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_RadioButtonGroup/'>Radio Button Group</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_ToggleButton/'>Toggle Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Toolbar_Class/'>Toolbar</a></li>
	
	
</ol>


</p>

<h4>Noteworthy</h4>
<ul>
	<li>Added select image supporting dialog.  The dialog can be accessed from the green plus icons that appears after any icon field.  Usage: if you know the image keyword you may type it into the icon field directly.  Click the green plus icon to select from system delivered icons.  In this secondary dialog you may also browse to find the path of the icon you want to display.Affects: Toolbar, Iconic Button, Iconic Text Button, Radio Button Group, Toggle Button, Inline Selector.</li>
	<li>Added select command supporting dialog.The dialog can be accessed from the blue plus icon that appears after any command field.  Usage: if you know the syntax of the command you wish to invoke you may type it directly into the command field.  Click the blue plus icon to select a command.  You may call a javascript function or launch a url in one of several ways.  You may browse to find the page you want to link to.  The dialog handles the syntax based on your selections. Affects: Toolbar, Iconic Button, Iconic Text Button, Radio Button Group, Toggle Button, Inline Selector. </li>
	<li>Fixed the problem where DW breaks the component code during copy and paste operations into blank space in design view.  A CTRL+V into whitespace still breaks the code.  But A CTRL+D (for DWPE) will properly paste the control at the insertion point without breaking code.  The same approach to insertion is taken during component creation as we exit DWPE2 dialogs. This change allows us to discontinue wrapping our dialog output code in DIVs to prevent DW from breaking our code.  The redundant nested DIV problem also goes away.</li>
	<li>Fixed Multi-select Choice List where deselecting one item from an all checked state misreported selected items.</li>
	<li>Fixed Muli-select List Box where dialog reentry failed to restore previous choices.</li>
	<li>Fixed Toggle Button disabled state not being honored at runtime.
	<li>Important: In order for Firefox to load content locally via an AJAX call we must alter its config settings.  In the Firefox URL field type about:config.  Acknowledge the warning. In the filter field, type: "security.fileuri.strict_origin_policy".  Set this attribute to false.  Restart your browser.</li>
	
</ul>	

<h2>DWPE 2 Beta: Week 5</h2>	
		
<p>Download the DWPE 2 Beta Week 5 Installation file: <a href="builds/DWPE2BETA.11320.mxp">DWPE2Beta.11320.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Open your DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
</ol>

<p>This week's component test plans are as follows:



<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_InlineSelector/'>Inline Selector</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_RadioButtonGroup/'>Radio Button Group</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_ToggleButton/'>Toggle Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Toolbar_Class/'>Toolbar</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_LOV_Class/'>LOV</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_DateTimePicker_Class/'>Date Time Picker</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_FormLayout/'>Form Builder</a></li>
</ol>

</p>


<h4>Noteworthy</h4>
<ul>
	<li>Design Time(DT): Add Items dialog innapropriately allowed added child items for some components. Fixed.</li>
	<li>DT: Template overwrite warning moved out of alert dialog.</li>
	<li>DT: 'Prompt:' token removed from design time component; prompt now renders with a distinct background and text in a new color. Prompt wrap setting respected design time component.</li>
	<li>DT: For command attributes the prefix for declaring a javascript command has been shortened to "js::".</li>
	<li>DT: Now only one args list is written inside ux:toolbars tag.</li>
	<li>DT: Individual toolbar items are no longer re-entrant.  Items must be edited from the encompassing toolbar.</li>
	<li>DT: Object code is now delivered into the page using tokens.</li>
	<li>DT: Save As Template now prevents users from naming templates with a leading asterisk -- that notation is reserved for system delivered templates.</li>
	<li>DT: Buttons with tooltips declared override icons with system declared tooltips.</li>
	<li>Run Time (RT): Toolbar Overflow and resize now supported at runtime.  Until shell is implemented set the class of the body tag to SecondaryRegion.</li>
	<li>RT: Buttons with a command specified as a URL that are set to disabled no longer respond to clicks.</li>
</ul>



<p>Please report your feedback by next Tuesday at noon PT.  Thanks again for your help!
<p>-The DWPE Dev Team</p>
</p>

<p>&nbsp;</p>		

	
<hr>

<h2>DWPE 2 Beta: Week 4</h2>	
		
<p>Download the DWPE 2 Beta Week 4 Installation file: <a href="builds/DWPE2BETA.11300.mxp">DWPE2Beta.11300.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Open your DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
</ol>

<p>This week's component test plans are as follows:


<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_TextButton_Class/'>Text Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_IconicButton_Class/'>Iconic Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_IconicTextButton_Class/'>Iconic Text Button</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Toolbar_Class/'>Toolbar</a></li>
	
</ol>
</p>


<h4>Noteworthy</h4>
<ul>
	<li>Design Time: Deleting items from a dialog items list no longer throws a Javascript error</li>
	<li>Design Time: Single-select Choice List now supports the BLANK token for an item's value. At runtime BLANK is translated into an empty string.</li>
	<li>Design Time: Checkbox and Radio Group now support selected item state. To help you track selected items, they will have an asterisk (*) placed after their label in the dialog's items list.</li>
	<li>Design Time: Prompts in design mode view now show required asterisks when appropriate.</li>
	<li>Design Time: Apostrophe's in dialog attribute values are now properly escaped</li>
	<li>Design Time: To signal that a load template operation has successfully completed, we move the focus from the templates tab to the first tab in the dialog (usually this is the Attributes).</li>
		

</ul>



<p>Please report your feedback by next Tuesday at noon PT.  Thanks again for your help!
<p>-The DWPE Dev Team</p>
</p>

<p>&nbsp;</p>		

	
<hr>	
	
	<h2>DWPE 2 Beta: Week 3</h2>	
		
<p>Download the DWPE 2 Beta Week 3 Installation file: <a href="builds/DWPE2BETA.11270.mxp">DWPE2Beta.11270.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Open your DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
</ol>

<p>This week's component test plans are as follows:


<ol>

	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_SpinBox_Class/'>Spin Box</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_FileUpload_Class/'>File Upload</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_MultiSelectListBox_Class/'>Multi-Select List Box</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_FormLayout/'>Form Builder</a></li>
	
	Retesting for reentrant dialog support...
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_SingleSelectChoiceList_Class/'>Single-Select Choice List/</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_MultiSelectChoiceList_Class/'>Multi-Select Choice List</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_RadioGroup_Class/'>Radio Group</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_CheckBox_Class/'>Checkbox Group</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Prompts/'>Prompt</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_TextArea_Class/'>Textarea</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_TextBox_Class/'>Text Field</a></li>
	
</ol>
</p>


<h4>Noteworthy</h4>
<ul>
	<li>4 new component dialogs to test.</li>
	<li>Reentrant dialog support added. This requires a retest of 7 old dialogs for newly added reentrant support.</li>
	<li>Insertion inside a P tag fix applied.</li>
	<li>Null value list item dissappers issue fixed.</li>
	<li>Dialog spec buttons enabled.</li>
	<li>Various component and dialog fixes applied.</li>
</ul>



<p>Please report your feedback by next Tuesday at noon PT.  Thanks again for your help!
<p>-The DWPE Dev Team</p>
</p>

<p>&nbsp;</p>		

	
<hr>	
	
<h2>DWPE 2 Beta: Week 2</h2>	
		
<p>Download the DWPE 2 Beta Week 2 Installation file: <a href="builds/DWPE2BETA.11256.mxp">DWPE2Beta.11256.mxp</a></p>
	
<ol>	
<li>Close Dreamweaver. Open the Macromedia (Adobe) Extension Manager.</li>	
<li>In the Extension Manager, remove last week's build.</li>
<li>In the Extension Manager, install this week's build.</li>
<li>Open Dreamweaver.  Open a new document (CTRL+N). Ensure the DWPE2 Insert Bar is showing. </li>
<li>Open your DWPE2 Beta Test Site.</li>
<li>From the Insert bar, click the Overlay Prototype Resources icon (1st icon).</li>
<li>Verify that the build number at the bottom of the dialog matches the build number you downloaded and installed. If it doesn't, repeat the steps above. If installation problems persist, report them on this page's Beta Feedback tab.</li>
<li>Assuming installation was successful, Click OK to overlay resources.</li>
</ol>

<p>This week's component test plans are as follows:
<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_SingleSelectChoiceList_Class/'>http://scout.us.oracle.com/DWPE/DWPE_SingleSelectChoiceList_Class/</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_MultiSelectChoiceList_Class/'>http://scout.us.oracle.com/DWPE/DWPE_MultiSelectChoiceList_Class/</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_RadioGroup_Class/'>http://scout.us.oracle.com/DWPE/DWPE_RadioGroup_Class/</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_CheckBox_Class/'>http://scout.us.oracle.com/DWPE/DWPE_CheckBox_Class/</a></li>
	
</ol>
</p>



<p>Please report your feedback by next Tuesday at noon PT.  Thanks again for your help!
<p>-The DWPE Dev Team</p>
</p>

<p>&nbsp;</p>		

	
<hr>	
	
<p>&nbsp;</p>		
		
<h2>DWPE 2 Beta: Week 1</h2>	
		
<h3>Installation & Testing Guide</h3>

Ensure that you have the following installed on your system:
<ul>
    <li>Dreamweaver 8+</li>
    <li>DWPE 1.0 installed on top of Dreamweaver (<a href='builds/blaf+_v1.0.86.mxp'>blaf+_v1.0.86.mxp</a>)</li>
    <li>Firefox 3.5+</li>
</ul>

<p>Download the DWPE 2 Beta Week 1 Installation file:</p>

<p><a href="builds/DWPE2BETA.11232.mxp">DWPE2Beta.11232.mxp</a></p>

<p><b>Extension Installation</b></p>

<p>If Dreamweaver is open, close it.</p>

<p>Open the Adobe Extension Manager. Find it under c:\Program Files\Adobe\Adobe Extension Manager or c:\Program Files\Macromedia\Macromedia Extension Manager. Once it is open, click File > Install Extension, then browse and select the installation file you just downloaded. 
Accept the license agreement. The DWPE2 extension will install itself.</p>

<p>
<img src="images/dwpe-adobe-extension-manager.png" title='Adobe Extension Manager Main Window'>
<p>&nbsp;</p>
</p>


<p>Now open Dreamweaver. Find the Insert Bar (typically its the toolbar directly below the menus). The Insert Bar will appeared disabled until you have a document opened for editing. Press CTRL+N to create a new document and enable the Insert Bar.</p> 

<p>
<img src="images/dwpe-toolbar-show-as-tabs.png" title='Insert Bar with Show As Tabs Option'>
<p>&nbsp;</p>
</p>


<p>If Insert Category Names are showing as tabs, find the pull-down menu on the right side of the Insert Bar and from it select the option Show as Menu.  The tabs will disappear and all the choices will collapse into a menu.</p>

<p>
<img src="images/dwpe-toolbar-show-as-menu.png" title='Insert Bar with Show As Menu Option'>
<p>&nbsp;</p>

</p>


<p>From the menu on the Insert Bar select DWPE2.  The toolbar that appears as a result represents the new DWPE where you will conduct your beta tests.  Each week we will add more features to this toolbar for you to test.  
Open the Overlay Prototype Resources dialog and check the build number at the bottom of the dialog.  If the install was successful it should match the build number that was specified in the extension filename.</p>

<p>
<img src="images/dwpe-toolbar-dwpe2.png" title='DWPE 2 Insert Bar'>
<p>&nbsp;</p>
</p>


<p>From the menu on the Insert Bar select BLAF_PLUS. This represents the old DWPE, or DWPE1. We preserve the old extension so that you may continue to administer existing prototypes if you need to.</p>

<p>
<img src="images/dwpe-toolbar-blaf-plus.png" title='BLAF_PLUS Insert Bar'>
<p>&nbsp;</p>
</p>

<p>A few words of caution:</p>
<ol>
   <li> Dedicate a new site to testing the DWPE2 extension and only open this site when you are doing your testing.</li>
   <li> Never overlay DWPE2 resources over a DWPE 1 site. <font style="color:red">DWPE 2 is <u>not</u> backward compatible to DWPE 1.</font></li>
   <li> If you accidentally overlay resources from DWPE 2 onto a DWPE 1 site, delete the core directory in your DWPE 1 site, make sure the insertion bar is showing the DWPE1 toolbar and overlay resources again.</li>
</ol>



<p>Before we continue, ensure that your Insert Bar is showing the DWPE 2 toolbar.</p>

<p>&nbsp;</p>

<p><b>Create a New Site for Testing DWPE 2</b></p>
<p>From the Dreamweaver menus select Site > New Site.  You'll be prompted to enter the following information:</p>

<ol>
<li>Name: enter any name for the site that you like.  We suggest "DWPE 2 Beta Site". Leave the other fields set to their defaults.  Click the Next button.</li>

<li>Select "No, I do not want to use a server technology".  Click the Next button.</li>

<li>Decide where on your computer you would like to store this site. Click the Next button.</li>

<li>Set "How do you connect to your remote server" to none.  Click the Next button.</li>

<li>Review your choices and click the done button.  A new empty site will be created and appear in the Files Panel of Dreamweavers main interface.</li>
</ol>


<p>
<img src="images/dwpe-dialog-new-site.png" title='Dreamweaver New Site Dialog'>
<p>&nbsp;</p>
</p>


<p><b>Overlay DWPE 2 Resources</b></p>
From the previous step you have an empty site dedicated to testing the DWPE 2 extension.  You must overlay resources before you can build anything.  This process will install in the site the core JavaScript, CSS and images needed by the prototyping framework. </p>

<p>To overlay resources, locate the DWPE2 Insert Toolbar and click the "Overlay Prototype Resources" icon.  Follow the prompts.  When the dialog completes your site will be prepared for testing</p>


<p>
<img src="images/dwpe-dialog-overlay-framework.png" title='DWPE 2 Overlay Resources Dialog'>
<p>&nbsp;</p>
</p>


<p><b>Create a New Project</b></p>
<p>As an organizing principle DWPE2 asks that you store pages under projects.  To do this you must create a new project. From the DWPE2 Insert Toolbar click the "New Project" icon.  Give your project a meaningful name.  We suggest "Beta Week 1".  Choose Ok.  A project folder will be created for you in this site with a series of subfolders for organizing components and pages.</p>


<p>
<img src="images/dwpe-dialog-new-project.png" title='DWPE 2 New Project Dialog'>
<p>&nbsp;</p>
</p>


<p><b>Create a New Page</b></p>
<p>We are in the home stretch of setup. We need to create a page to place our component tests on. Press CTRL+N.  A New Document dialog will appear. Save your page under the pages folder within the project folder you just created. We suggest giving it the filename prompt_test.hml.</p>

<p>&nbsp;</p>

<p><b>Prompt testing</b></p>
<p>Now we can test our first component: prompt.  From the DWPE 2 Insert Toolbar click the "Form" icon and select "Prompt" form the menu. A prompt dialog will appear. Following the Prompt test plan found on scout (http://scout.us.oracle.com/DWPE/DWPE_Prompts/)  insert a prompt onto the page.</p>

<p>
<img src="images/dwpe-dialog-prompt.png" title='DWPE 2 Prompt Dialog'>
<p>&nbsp;</p>
</p>

<p><b>Previewing Your Test Page in a Browser</b></p>
<p>DWPE 1 protoypes could only be viewed in Internet Explorer.  DWPE 2 prototypes can only be viewed in Firefox.  The F12 key is a quick way to launch preview in browser.  We can setup browser associations by using the Dreamweaver Preferences dialog (Edit > Preferences).  From Categories select "Preview in Browser".  Internet Explorer may already be listed there and marked as the primary browser (F12 hotkey). If so, leave it that way.  Add a new browser for Firefox (typically you'll find its executable at: c:\Program Files\Mozilla Firefox...). Make sure to mark  Firefox as  your secondary browser.  Now when you press CTRL+F12 you Dreamweaver will launch Firefox and present the page you are testing.</p>


<p>
<img src="images/dwpe-dialog-dw-preferences.png" title='Dreamweaver Preferences Dialog'>
<p>&nbsp;</p>
</p>

<p><b>Installation and Setup Completion</b></p>

<p>So, did the prompt appear in the browser as you expected? If not, review these instructions to see if you missed a step.  If you continue to have difficulty use the Beta feedback tab on this page to log your problem.  We'll monitor this feedback page and get you answers quickly.</p>

<p>If the prompt appeared as you expected, you've successfully completed installation and setup for the DWPE 2 Beta Program.</p>

<p>The next step is to follow the Prompt test plan in its entirety and record your feedback under the Prompt's Beta Feedback tab on scout.  When you are finished testing Prompt, go on to test Text Field and Text Area and record your feedback against each component. Your feedback is due on Tuesday's at noon PT.</p>

<p>This week's test plans:</p>
<ol>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_Prompts/'>http://scout.us.oracle.com/DWPE/DWPE_Prompts/</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_TextBox_Class/'>http://scout.us.oracle.com/DWPE/DWPE_TextBox_Class/</a></li>
	<li><a href='http://scout.us.oracle.com/DWPE/DWPE_TextArea_Class/'>http://scout.us.oracle.com/DWPE/DWPE_TextArea_Class/</a></li>
</ol>		
		
	

	</div>
	
	
	


	
	<form id="properties-sheet">
		
        
        <input type="hidden" id="_class" value="DWPE_FormFactory_Class"/>
        <input type="hidden" id="type" value="prompt"/>
		<table class="properties-table" border='0' cellpadding='0' cellspacing='0'>
		<tr>
			<td>

	<div>Properties</div>
               <table cellpadding='0' cellspacing='0' style="border:1px solid #999999;background:#e0e0e0; width:100%;">
					
			
					 
					<tr>
						<td class='label'>Label</td>
						<td>
							<input id="label" type="text" value="My Label" />
							
						</td>
					</tr>
					
					<tr>
						<td class='label'>Definition</td>
						<td>
							<input id="definition" type="text" value=" " />
							
						</td>
					</tr>
					
					<tr>
						<td class='label'>Style</td>
						<td>
							<select id="style">
								<option value="stacked" selected="1">Stacked (left-aligned)</option>
								<option value=" " >Not Stacked (right-aligned)</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Required</td>
						<td>
							<select id="required">
								<option value="required">Required</option>
								<option value="requires-one">Requires One</option>
								<option value="not-required" selected="1">Not Required</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>Wrap</td>
						<td>
							<select id="wrap">
								<option value="wrap">Yes</option>
								<option value=" " selected="1">No</option>
							</select>
						</td>
					</tr>
					 <tr>
						<td class='label'>State</td>
						<td>
							<select id="state">
								<option value="disabled">Disabled</option>
								<option value=" " selected="1">Enabled</option>
							</select>
						</td>
					</tr>
					
			   </table>
            
			
			
			
				<div style="padding:20px 0px">
					<input class="ui-state-default ui-corner-all" type="button" value="Commit" onClick="insert();commitProperties()">
					<script type="text/javascript">
					
						function insert()
						{
							$("#scratchpad").val( DWPE_FormFactory.generatePromptMarkup( collectArguments() ) );
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

					
	

</body>
</html>
