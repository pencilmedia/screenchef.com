
<ul>
	<li><a href="#feedback-schedule">Feedback Schedule</a></li>
	<li><a href="#drops">Drops</a></li>
	<li><a href="#tagging">Tagging & Bug Tracking</a></li>
	<li><a href="#searching">Search</a></li>
	<li><a href="#font-default">Restoring Default Font</a></li>
	<li><a href="#extension-install">DWPE 2 Extension Installation</a></li>
	
	
</ul>

<hr>

<h3><a name="feedback-schedule">Feedback Schedule</a></h3>

<p>

<b>Wednesday:</b> <i>test plan delivered to your inbox</i><br>
Offers a high-level description of what areas are being tested
Will include links to the components needing your attention
Each component will deliver a specific test plan.
</p>

<p>
<b>Thursday</b>: <i>meeting check-in</i><br>
Now that you’ve had a day to look at the test plan this meeting gives you a chance to ask questions and for the developers to ask you questions about your feedback
Your are strongly encouraged to attend the first 15 minutes where we will impart need-to-know information.
</p>

<p>
<b>Tuesday Noon PT</b>: <i>your feedback from the previous week is due</i><br>
We hate deadlines too, but we are running a tight schedule and have some 80 components/features to get through.
Your feedback is our best chance of catching issues while we still have time to remedy them. 
The quality of DWPE 2.0 depends largely upon you.
So please, get your feedback in on time!
</p>

<hr>

<h3><a name="drops">Drops</a></h3>

<p>
Developers commit changes throughout the workday. As they check in their changes they are assigned a revision number in source control.
This revision number is reported back to you when bugs are declared fixed.  Once a day we take all the revisions
and push them to the production server (Scout). This push to production is what we call a drop. 
A drop is assigned a number. This number appears on the top of
all component pages. Any fix with a revision number that precedes
the posted drop number should be live in this drop. Drops occur at 9 AM ET, Monday through Friday. 

<br><br>
</p>


<hr>

<h3><a name="tagging">Tagging & Bug Tracking</a></h3>

<p>
Here's the bug reporting and fix procedure using an exchange between Jon and Roy as an example:
</p>

<ol>
  <li>Jon identifies the text button height bug.  He marks his feedback with a <b>bug:display</b> tag.</li>
  <li>Later, Roy goes to the feedback section and searches on 'bug:display,bug:interaction'. This search pulls back just the bugs he hasn't addressed.</li>
  <li>He sees Jon's bug. Finds a fix. Tests it locally. Checks it in. Notes the revision # of his check-in. </li>
  <li>Now Roy is ready to reply to Jon's message. He clicks the reply link in Jon's message, and writes: "Bug fixed in 10314. Please Verify". 
  		An explanation would help here so he adds it.  Next he sets the tag of his reply to <b>bug:fixed</b> and submits the reply.</li>
  <li>Then he replaces the <b>bug:display</b> tag in Jon's original note with a <b>bug:verify fix</b> tag. This puts Jon on notice 
       that he should check the change.  </li>
  <li>Jon cannot verify the fix until the developer's change hits production.  That won't happen until
       the next drop occurs.  Normally we do a drop each morning at 9 AM ET.   So a bug marked fixed today
       should be available to verify tomorrow.</li>
  <li>At this point, Jon has the option to mark the bug <b>bug:fix verified</b> or <b>bug:not fixed</b>.  
       Of course, bug:not fixed puts the developer on notice that there are still problems to address.</li>
</ol>
<p>
Another task in monitoring feedback is to triage.   Some fixes are easy, some require more time. 
No matter the case, developers should always let alpha testers know that we are responding in some way.  
So you have the option to reply to someone's bug with an explanation of what you intend to do and 
tag your reply as status:working, status:researching or status:stuck.  A status:stuck will likely 
yield a note from Roy to see if he can help.
</p>

<p>
Also in the course of triage, a developer might find that a bug isn't a bug at all. If so, the developer should 
reply with a thoughtful explanation.  Tag your reply as bug:not. Then change the tag on the tester's feedback to closed.  
The tester can always open it again if they disagree with your explanation.
</p>

<p>
Another possibility and one we can see evidence of in TextButton feedback is a bug or comment that requires discussion. 
Here the developer replies with the tag set to status:needs discussion.  Items marked in this manner will serve as agenda items 
for our dev daily meetings and possibly our alpha tester weekly meeting.
</p>

<hr>


<h3><a name="searching">Search</a></h3>

<p>
	You have two places where you can search.  On an individual component's feedback area 
	and in the global search tab that sits on the site home page.  Searches query against message tags only, 
	not message bodies.  That's why it is a requirement to tag all messages with at least one tag.
	
	
</p>

<h4>Search Scope:</h4>
<p>
The scope of the query depends upon where you search from.

<ul>
	<li>Searches performed within one component's feedback tab query just the feedback against that component.</li>
	
	<li>Searches performed within global search, found under the site home page search tab, can be scoped across all components or just a single component. Use the choice box there to define the scope.</li>
	
</ul>


<h4>Search Syntax:</h4>

<ul>
	<li>Search on one or more tags by concatenating them with commas. Example:
		<p>"bug:display,bug:interaction" finds all messages tagged with either bug:display or bug:interaction.</p>
	</li>
	<li>Search on all messages logged in the last day. Example:
		<p>"<1" finds all messages entered in the last day.</p>
	</li>
	<li>Search on all messages logged in the last seven days. Example:
		<p>"<7" finds all messages entered in the last seven days.</p>
	</li>
	
	<li>Search on all messages authored by you. Example:
		<p>"me" finds all messages authored by me, presuming you have already logged in.</p>
	</li>
	
</ul>

Bringing it altogether, we can form a complex search to find all bug fixes awaiting our verification posted in the last seven days using this syntax:
<p>"me,<7,bug:verify fix"</p>

<h4>Usage</h4>

<ul>
	<li>For the moment the global search returns results in a read-only fashion.  For the most part you
	need the context of the component to form a meaningful reply and at this level you just don't have that
	context. Use the global search to gain insight into areas that need your attention.</li>
	<li>Once you've determined components that need attention, visit those components and enter feedback on
	their specific feedback tab.
	</li>
	<li>Search on a component's feedback is scoped just to that component.  The most common search an alpha tester
	will use is 'me,bug:verify fix'.</li>
	
	
	
</ul>

<hr>

<h3><a name="font-default">Restoring Default Font</a></h3>

<p>
It's a good idea when beginning a testing session to return your browser's font to it's default size. To do this in Firefox, from the menus select View &gt; Zoom &gt; Reset.  
The keyboard equivalent is CTRL-0. We write our components assuming the default font size is in effect so this step reduces the chances of turning up false-positive
font or alignment issues.

</p>

<hr>

<h3><a name="extension-install">DWPE 2 Extension Installation</a></h3>

Ensure that you have the following installed on your system:
<ul>
    <li>Dreamweaver 8+</li>
    <li>DWPE 1.0 installed on top of Dreamweaver (<a href='builds/blaf+_v1.0.86.mxp'>blaf+_v1.0.86.mxp</a>)</li>
    <li>Firefox 3.5+</li>
</ul>

<p>Download the latest extension build. Check the weekly test plan tab for a link to the latest build.</p>


<p><b>Extension Installation</b></p>

<p>If Dreamweaver is open, close it.</p>

<p>Open the Adobe Extension Manager. Find it under c:\Program Files\Adobe\Adobe Extension Manager or c:\Program Files\Macromedia\Macromedia Extension Manager. Once it is open, click File > Install Extension, then browse and select the installation file you just downloaded. 
Accept the license agreement. The DWPE2 extension will install itself.</p>

<p>
<img src="/DWPE/DWPE_Extension/images/dwpe-adobe-extension-manager.png" title='Adobe Extension Manager Main Window'>
<p>&nbsp;</p>
</p>


<p>Now open Dreamweaver. Find the Insert Bar (typically its the toolbar directly below the menus). The Insert Bar will appeared disabled until you have a document opened for editing. Press CTRL+N to create a new document and enable the Insert Bar.</p> 

<p>
<img src="/DWPE/DWPE_Extension/images/dwpe-toolbar-show-as-tabs.png" title='Insert Bar with Show As Tabs Option'>
<p>&nbsp;</p>
</p>


<p>If Insert Category Names are showing as tabs, find the pull-down menu on the right side of the Insert Bar and from it select the option Show as Menu.  The tabs will disappear and all the choices will collapse into a menu.</p>

<p>
<img src="/DWPE/DWPE_Extension/images/dwpe-toolbar-show-as-menu.png" title='Insert Bar with Show As Menu Option'>
<p>&nbsp;</p>

</p>


<p>From the menu on the Insert Bar select DWPE2.  The toolbar that appears as a result represents the new DWPE where you will conduct your beta tests.  Each week we will add more features to this toolbar for you to test.  
</p>

<p>
<img src="/DWPE/DWPE_Extension/images/dwpe-toolbar-dwpe2.png" title='DWPE 2 Insert Bar'>
<p>&nbsp;</p>
</p>

<p>Open the Overlay Framework dialog and check the build number at the bottom of the dialog.  If the install was successful it should match the build number that was specified in the extension filename.</p>

<p>
<img src="/DWPE/DWPE_Extension/images/dwpe-dialog-overlay-framework.png" title='DWPE 2 Overlay Resources Dialog'>
<p>&nbsp;</p>
</p>



