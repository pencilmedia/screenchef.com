<?php
	include_once($_SERVER['DOCUMENT_ROOT'] . '/_project_config.php');
	include_once($_SERVER['DOCUMENT_ROOT'] . '/_project_code.php');
?>
<?php $local_js_dir = "/prototype/html/alpha/js"; ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; A redesign of Agile PLM</title>
	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	
	<script language="javascript" src="<?=$local_js_dir;?>/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.string.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="<?=$local_js_dir;?>/invo.event.js" type="text/javascript"></script>
	
	<script language="javascript" type="text/javascript">

	function toggleDetailDisplay(obj) {
		if (obj.className && (obj.className.indexOf("obj_display_none") != -1) ) {
			obj.className = obj.className.replace("obj_display_none", "obj_display_block");
		} else if (obj.className && (obj.className.indexOf("obj_display_block") != -1) ) {
			obj.className = obj.className.replace("obj_display_block", "obj_display_none");
		}
	}

	function positionDetails(evt, popup_name) {
	
		evt = invo.event.getEvent(evt);
		var tgt = invo.event.getEventTarget(evt);
		var event_x = parseInt(invo.event.getEventX(evt));
		var event_y = parseInt(invo.event.getEventY(evt));
		var popup_obj = document.getElementById(popup_name);
		var arrow = invo.dom.getElementsByClass("pop_arrow_up", popup_obj, "div");
		
		toggleDetailDisplay(popup_obj);
		
		var popup_width = parseInt(invo.metrics.getObjectWidth(popup_obj));
		var delta_x = Math.round(popup_width / 2);
		var delta_y = -10;
		
		var shift_loc_x = event_x - delta_x;
		var shift_loc_y = event_y - delta_y;
		var screen_x = invo.metrics.getInsideWindowWidth();
		var screen_y = invo.metrics.getInsideWindowHeight();
		var padding_for_edges = 30;
		
		if (shift_loc_x < 0) { 
			shift_loc_x = padding_for_edges;
			if (arrow.length) {
				arrow[0].className = "pop_arrow_up pop_arrow_left";
			}
		} else if (shift_loc_x > (screen_x - popup_width) ) { 
			// magic number to account for potential scroll bar 
			shift_loc_x = screen_x - popup_width - padding_for_edges; 
			if (arrow.length) {
				arrow[0].className = "pop_arrow_up pop_arrow_right";
			}
		} else {
			if (arrow.length) {
				arrow[0].className = "pop_arrow_up";
			}
		}
		
		invo.metrics.shiftTo(popup_obj, shift_loc_x, shift_loc_y);
		
		return false;
	}
	
	</script>

	<style>
ul.leftItemList, 
ul.teamList {
	margin: 0;
	padding: 0;
}

ul.leftItemList li {
	/*list-style-position: inside;*/
	list-style-type: none;
	padding: 5px 0 5px 22px;
}

ul.leftItemList li a {
	margin-left: -22px;
	padding-left: 22px;
	display: block;
}

ul.teamList li {
	/*list-style-position: inside;*/
	list-style-type: none;
	padding: 0px 0 0 30px;
	margin: 5px 0 0 0;
	height: 35px;
}

ul.teamList li span.phone {
	line-height: 18px;
}

ul.teamList li.dirk {
	background: url('../../../shared/images/pho_dirk.png') no-repeat top left;
}

ul.teamList li.andrei {
	background: url('../../../shared/images/pho_andrei.png') no-repeat top left;
}

ul.teamList li.ben {
	background: url('../../../shared/images/pho_ben.png') no-repeat top left;
}

ul.teamList li.donna {
	background: url('../../../shared/images/pho_donna.png') no-repeat top left;
}

ul.teamList li.tiffany {
	background: url('../../../shared/images/pho_tiffany.png') no-repeat top left;
}

ul.teamList li.joel {
	background: url('../../../shared/images/pho_joel.png') no-repeat top left;
}

ul.teamList li.michele {
	background: url('../../../shared/images/pho_michele.png') no-repeat top left;
}

ul.teamList li.dave {
	background: url('../../../shared/images/pho_dave.png') no-repeat top left;
}

ul.teamList li.other {
	background: url('../../../shared/images/pho_other.png') no-repeat top left;
}
	</style>	
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>

<div id="content">

	<div id="sidebar">
		<div id="about">
		<h2>About <em>KONA</em>BLUE</h2>
		<p>The inspiration from the name actually comes from the use of "Project Kona" inside many of the 922 prototypes.</p>
		<p>
			KonaBlue was ultimately chosen to honor one of Involution's favorite elixirs: coffee. KonaBlue also 
			conjures up images of paradise on earth, which of course includes places like the big island of Hawaii Kauai, HI.</p>
		</div>
		
		<div id="schedule">
		<h4><em>Design</em> Schedule</h4>
		<p><img src="/shared/images/konablue_schedule.png" alt="" /></p>
		<h4><em>Architecture</em> Schedule</h4>
		</div>
		
		<h2>Decisions &amp; Milestones</h2>
		<p>As decisions are reached throughout the design process and at each major milestone, they will be recorded below.</p>
		<p>
			For questions or to post corrections, please contact 
			<a href="#" onclick="positionDetails(event, 'dirk'); return false;">Dirk Knemeyer</a>,
			<a href="#" onclick="positionDetails(event, 'andrei'); return false;">Andrei Herasimchuk</a>, 
			or <a href="#" onclick="positionDetails(event, 'joel'); return false;">Joel Nave</a>.
		</p>
		
		<h3>Kickoff &bull; <em>Completed March 27, 2006</em></h3>
		<p>Get the project started!</p>
		<ul>
			<li>Team divided up and owners for each component area designated</li>
			<li>Schedule and milestones determined and agreed upon</li>
			<li>KonaBlue Sandbox created</li>
		</ul>
		
		<h3>Framework &bull; May 19, 2006</h3>
		<p>
			This milestone is set to have design decisions made around window behaviors, controls, look and feel, and 
			component design. Sketches and mockups will also have been in full swing for all components when this 
			milestone is reached.
		</p>
		<ul>
			<li>[*Milestone not reached yet*]</li>
		</ul>
		
		<h3>Framework Approval &bull; June 6, 2006</h3>
		<p>
			An engineering architectural milestone. By this date, the general strategy and plan for how to create 
			an application engine and framework will be decided.
		</p>
		<ul>
			<li>[*Milestone not reached yet*]</li>
		</ul>
		
		<h3>Components Defined &bull; July 6, 2006</h3>
		<p>
			An engineering architectural milestone. All components in the widgets and application control 
			component will have been defined, providing the foundation to begin converting them into production 
			code that fits into the new framework.
		</p>
		<ul>
			<li>[*Milestone not reached yet*]</li>
		</ul>
		
		<h3>Draft &bull; July 14, 2006</h3>
		<p>A solid draft design of the major components working together cohesively, addressing key use cases for Agile PLM.</p>
		<ul>
			<li>[*Milestone not reached yet*]</li>
		</ul>
		
		<h3>Redesign &bull; October 6, 2006</h3>
		<p>
			The final redesign at about 80% complete for the entire Agile PLM product. All major features
			addressed with this design along with a prototype to interact with that conveys all major 
			functionality.
		</p>
		<ul>
			<li>[*Milestone not reached yet*]</li>
		</ul>
		
		<h3>Framework Ready &bull; October 30, 2006</h3>
		<p>
			An engineering architectural milestone. A production ready framework that can be used to fully 
			realize the KonaBlue redesign.
		</p>
		<ul>
			<li>[*Milestone not reached yet*]</li>
		</ul>
		
		<h3 id="team">Team</h3>
		<? printTeamList(); ?>
		
		<h3 id="prototype">Prototype</h3>
		<ul>
			<li><a href="/prototype/html/alpha/index.php">9.2.2</a></li>
		</ul>

	</div>
	<div id="konablue">
	
		<h2>New Work to Review</h2>
		<p>
			As periodic design explorations and work are created, added or modified, you can check the links below.
			These links will be moved and adjusted as time progresses, so be sure to check the content itself listed
			in the Component Explorations &amp; Design section.
		</p>
		<ul>
			<li>July 16, 2006</li>
			<li><a href="/design/exploratory/modules/files/tables/column_locking/">Standalone Table Column-Locking</a></li>
		</ul>

		<ul>
			<li>June 16, 2006</li>
			<li>Added use case documents and <a href="/prototype/html/beta/">prototype link</a>. Please see <b>Key Use Cases</b> 
			section below.</li>
		</ul>
		<ul>
			<li>June 2, 2006</li>
			<li><a href="/design/exploratory/modules/files/tables/tables.php">Tables</a> (preliminary), Revised: June 2, 2006</li>
		</ul>
		<ul>
			<li>May 30, 2006</li>
			<li><a href="/design/exploratory/tests/index.php">JS Testing</a>, Posted: May 30 2006</li>
		</ul>
		<ul>
			<li>May 19, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_document_home.png">Conceptual Screenshot 01</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_find_document.png">Conceptual Screenshot 02</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_route_for_comment.png">Conceptual Screenshot 03</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_doc_info.png">Conceptual Screenshot 04</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/modules/files/buttons/buttons.php">Buttons</a>, Revised: May 17, 2006</li>
			<li><a href="/design/exploratory/modules/files/menus/menus.php">Menus</a>, Revised: May 17, 2006</li>
			<li><a href="/design/exploratory/modules/files/tabs/tabs.php">Tabs</a>, Revised: May 17, 2006</li>
			<li><a href="/design/exploratory/modules/files/forms/forms.php">Forms</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/modules/files/tables/tables.php">Tables</a> (preliminary), Posted: May 19, 2006</li>
		</ul>
		<p>&nbsp;</p>
		
		<h2>Key Use Cases with Prototype links</h2>
		<p>
			The prototype is still currently undergoing development where the URLs have not been finished, so until then please
			<a href="/prototype/html/beta/">use this link to lauch the prototype</a>. From there
			click on a major switcher section, then click on the left hand navigation to initiate a workflow.
		</p>
		<ul>
			<li>Parts</li>
			<li><a href="/design/use_cases/pd_create_bom_adhoc.doc">Create an BOM ad-hoc</a> (.doc) &bull; Link TBD</li>
			<li><a href="/design/use_cases/cc_remove_part_from_boms.doc">Remove Part from a BOM</a> (.doc) &bull; Link TBD</li>
			<li><a href="/design/use_cases/cc_replace_part_in_boms.doc">Replace Part in a BOM</a> (.doc) &bull; Link TBD</li>
		</ul>
		<ul>
			<li>Documents</li>
			<li><a href="/design/use_cases/dm_check-in_document.doc">Check in document</a> (.doc) &bull; Link TBD</li>
			<li><a href="/design/use_cases/dm_route_document_for_comment.doc">Route document for comment</a> (.doc) &bull; Link TBD</li>
			<li><a href="/design/use_cases/dm_approve_document_change.doc">Approve document change</a> (.doc) &bull; Link TBD</li>
		</ul>
		<ul>
			<li>Projects</li>
			<li><a href="/design/use_cases/pqm_report_a_problem.doc">Report a problem</a> (.doc) &bull; Link TBD</li>
		</ul>
		<ul>
			<li>Products</li>
			<li><a href="/design/use_cases/pgc_assess_product_compliance.doc">Assess Product Compliance</a> (.doc) &bull; Link TBD</li>
		</ul>


		<h3 id="send">Send Comments to: <a href="mailto:ux@agile.com">The UX Team</a></h3>
	
		<h2 id="components">Component Explorations &amp; Design</h2>
		<p>
			For KonaBlue, each major component identified during the <a href="#box_exercise">Box Exercise</a> was turned into an
			area of design focus. Those areas are listed below, along with links to explore various	ideas and approaches 
			to be considered for the redesign.
		</p>
		
		
		<h3>Switcher &nbsp;&bull;&nbsp;
		<span> Owners: <a href="#" onclick="positionDetails(event, 'donna'); return false;">Donna Driscoll</a> &amp;
		<a href="#" onclick="positionDetails(event, 'joel'); return false;">Joel Nave</a></span>
		</h3>
		<p>
			Through the course of discussions in the Box Exercise, the teams felt incorporating the idea of a 
			"switcher" had a lot of merit to solve one of the core problems within Agile PLM -- the problem of 
			forcing the same interface onto everything inside the product. In essence, this switcher becomes 
			the control that gives the design team the freedom to change the entire interface for the product 
			based on context, allowing an interface that is more specific to the object, process, item or workflow 
			that the customer is interacting with at that moment in time.
		</p>
		<p>
			Further, one of the major weaknesses identified with the current product by Involution in 
			its <a href="/client/presentations/agi_design_assessment.pdf">design assessment</a>
			of Agile PLM is the lack of a mental model customers can relate to within Agile PLM. By incorporating 
			a switcher into the redesign, the team plans to solve two large design problems in one fell swoop.
		</p>
		<ul>
			<li><a href="/design/exploratory/switcher">Switcher Explorations</a>, Posted:  April 5, 2006</li>
			<li><a href="/design/exploratory/switcher/index2.php">Switcher Explorations :: Week 2</a>, Posted: April 13, 2006</li>
			<li><a href="/design/exploratory/switcher/index3.php">Switcher Explorations :: Week 3</a>, Posted: April 21, 2006</li>
			<li><a href="/design/exploratory/switcher/index4.php">Switcher Explorations :: Week 4</a>, Posted: April 27, 2006</li>
		</ul>
		
		
		
		<h3>User Tasks Navigation &nbsp;&bull;&nbsp;
		<span>Owners: <a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'michele'); return false;">Michele Yoshikawa</a></span>
		</h3>
		<p>
			The user task nav is going to be a critical part of user interaction with the
			redesigned Agile product. For this reason, it is important to assure that
			the way the use case nav behaves is both consistent with the entire application 
			and appropriate to the end user at every stage of interaction with a given
			use case.
		</p>
		<ul>
			<li><a href="/design/exploratory/use_case_display/index.php">User Tasks Navigation Explorations - Week 1</a>, Posted: April 6, 2006</li>
			<li><a href="/design/exploratory/use_case_display/index1.php">User Tasks Navigation Explorations - Week 2</a>, Posted: April 13, 2006</li>
			<li><a href="/design/exploratory/simple_panes/index.php">Pane Interaction Framework</a>, Posted: April 24, 2006</li>
			<li><a href="/design/exploratory/use_case_display/index3.php">Supplemental data for user tasks</a>, Posted: May 2, 2006</li>
		</ul>
		
		
		
		<h3>Main Content Area &nbsp;&bull;&nbsp;
		<span>Owner: <a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a></span>
		</h3>
		<p>
			One thing we were struggling with during the wireframe process was how
			to define the manner in which the content area would be defined, and what
			content would be available in each area we defined.
		</p>
		<p>
			The challenge was coming up with a method for defining how the content area 
			should behave in response to conditions outside of the content area (e.g. 
			what the active switcher area is, what use case is active, etc). One can
			envision an almost endless series of division of the content area, since
			there are no rules for how these divisions will occur.
		</p>
		<p>
			So, I tried to come up with a process for deciding when and how divisions 
			could occur. The idea is not to define the boxes first, but to define boxes
			in response to actions the user might take.
		</p>
		<ul>
			<li><a href="/design/exploratory/content_display/">Main Content Area Explorations</a>, Posted: April 6, 2006</li>
			<li><a href="/design/exploratory/simple_panes/index.php">Pane Interaction Framework</a>, Posted: April 24, 2006</li>
		</ul>
		
		
		
		<h3>Search &amp; Find &nbsp;&bull;&nbsp;
		<span>Owner: <a href="#" onclick="positionDetails(event, 'donna'); return false;">Donna Driscoll</a></span>
		</h3>
		<p>[*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*]</p>
		<ul>
			<li>[*List of explorations TBD*]</li>
		</ul>
		
		
		
		<h3>Collaboration Content &nbsp;&bull;&nbsp;
		<span>Owner: <a href="#" onclick="positionDetails(event, 'andrei'); return false;">Andrei Herasimchuk</a></span>
		</h3>
		<p>[*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*]</p>
		<ul>
			<li>[*List of explorations TBD*]</li>
		</ul>
		
		
		
		<h3>Collaboration Controls &nbsp;&bull;&nbsp;
		<span>Owner: <a href="#" onclick="positionDetails(event, 'donna'); return false;">Donna Driscoll</a></span>
		</h3>
		<p>
			All items that can be identified as call to action, peer-to-peer messages, project alerts and system level notifications 
			are grouped here under the collaboration controls umbrella. While this area was only given a small amount of space to work
			with in the Box Exercise, various designs will be explored to take full advantage of that space combined with more Ajax 
			style interactions.
		</p>
		<ul>
			<li><a href="/design/exploratory/collab_nav/">Collaboration Controls Explorations</a>, Posted:  April 6, 2006</li>
			<li><a href="/design/exploratory/collab_nav/index2.php">Collaboration Controls Explorations :: Week 2</a>, Posted: April 13, 2006</li>
		</ul>
		
		
		
		<h3>Windowing System &nbsp;&bull;&nbsp;
		<span>Owners: <a href="#" onclick="positionDetails(event, 'kishore'); return false;">Kishore Subramanian</a> &amp;
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a></span>
		</h3>
		<p>
			I have done some preliminary work on the windowing system, and will	hopefully be posting a sample of it here in the 
			next few days (Ben, April 6, 2006).
		</p>
		<ul>
			<li>Window Architecture, Posted: TBD</li>
			<li>Drag &amp; Drop, Posted: TBD</li>
		</ul>
		
		
		
		<h3>Window Controls, Courtesy Controls &amp; Theme Issues &nbsp;&bull;&nbsp;
		<span>Owner: <a href="#" onclick="positionDetails(event, 'andrei'); return false;">Andrei Herasimchuk</a></span>
		</h3>
		<p>
			Every product needs character. This is the section for that. From iconography to color systems, all 
			exploratory design work that pertains to the overall look and feel of KonaBlue can be found here. Also 
			contained here are the nuts &amp; bolts features, like the customer's login name, where to find help and
			general navigational controls like forward, backward, home and help buttons.
		</p>
		<ul>
			<li><a href="/design/exploratory/framework/agi_konablue_document_home.png">Conceptual Screenshot 01</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_find_document.png">Conceptual Screenshot 02</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_route_for_comment.png">Conceptual Screenshot 03</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_doc_info.png">Conceptual Screenshot 04</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/framework/agi_konablue_framework.png">Draft KonaBlue Framework Screenshot</a>, Posted: May 5, 2006</li>
			<li>Color Systems</li>
			<li>Iconography</li>
			<li>Theme Strategy</li>
		</ul>
	
	
		<h3>Widgets, Controls &amp; General Issues &nbsp;&bull;&nbsp;
		<span>Owners: <a href="#" onclick="positionDetails(event, 'dave'); return false;">Dave Elliott</a>, 
		<a href="#" onclick="positionDetails(event, 'kishore'); return false;">Kishore Subramanian</a>,
		<a href="#" onclick="positionDetails(event, 'ben'); return false;">Ben Listwon</a> &amp;
		<a href="#" onclick="positionDetails(event, 'tiffany'); return false;">Tiffany Altieri</a></span>
		</h3>
		<p>Explorations for all interface controls and widgets can be found below. In general, the rule of thumb
		with all of these examples is to provide the best interaction, a professional visual style and to do so
		without sacrificing W3C standards compliant approaches to each solution.</p>
		<ul>
			<li><a href="/design/exploratory/classes">Class &amp; ID Attributes as Style vs. Program Identifiers</a>, Posted: March 24, 2006</li>
			<li><a href="/design/exploratory/css_redux">CSS Redux</a>, Posted: February 2006</li>
			<li><a href="/design/exploratory/modules/files/buttons/buttons.php">Buttons</a>, Revised: May 17, 2006</li>
			<li><a href="/design/exploratory/modules/files/menus/menus.php">Menus</a>, Revised: May 17, 2006</li>
			<li><a href="/design/exploratory/modules/files/tabs/tabs.php">Tabs</a>, Revised: May 17, 2006</li>
			<li><a href="/design/exploratory/modules/files/tables/tables.php">Tables</a> (preliminary), Posted: May 19, 2006</li>
			<li><a href="/design/exploratory/modules/files/forms/forms.php">Forms</a>, Posted: May 18, 2006</li>
			<li><a href="/design/exploratory/tests/index.php">JS Testing</a>, Posted: May 30 2006</li>
			<li><a href="/design/exploratory/modules/files/tables/column_locking/">Standalone Table Column-Locking</a>, Posted: July 16, 2006</li>
			<li>Object Trees</li>
			<li>Gantt Chart</li>
			<li>Sparklines</li>
		</ul>
			
		
		<h2 id="box_exercise">The Box Exercise</h2>
		<p>
			The Agile UX Team, in conjunction with product management and engineering, took on an exercise 
			developed by Involution Studios called The Box Exercise. Put simply, the entire team broke up 
			the current Agile PLM suite of products into major areas of functionality. With that large list, 
			features were combined and simplified until a manageable set of boxes could be created that represented 
			that functionality. These boxes were then used to iterate quickly on different configurations and 
			layouts for a new product approach. Each configuration was analyzed, listing its strengths as well 
			as its weaknesses.
		</p>
		<p>
			The end result is a general framework that becomes the foundation for the KonaBlue redesign. While
			the framework is not set in stone, historically the Box Exercise tends to create a framework that 
			is strong enough to handle the features and functions for the redesign. It tends to change the least 
			throughout the redesign process.
		</p>
		<p><a href="/client/presentations/agi_wireframe.pdf"><img class="border" src="/shared/images/box_exercise_modes.png" alt="" /></a></p>
		<p><a href="/client/presentations/agi_wireframe.pdf"><img src="/shared/images/icn_pdf.png" alt="PDF" />View the PDF for the Box Exercise</a></p>
		
	</div>
	
	
	<!-- All popup biz cards. Hidden by default -->

	<div id="andrei" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('andrei'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_andrei.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Andrei Herasimchuk</strong><br />Principal, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 408-306-6422</li>
					<li><a href="mailto:Andrei.Herasimchuk@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Andrei.Herasimchuk@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="dirk" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('dirk'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_dirk.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Dirk Knemeyer</strong><br />Principal, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 419-297-4046</li>
					<li><a href="mailto:Dirk.Knemeyer@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Dirk.Knemeyer@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="ben" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('ben'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_ben.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Ben Listwon</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 650-305-0228</li>
					<li><a href="mailto:Ben.Listwon@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Ben.Listwon@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="donna" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('donna'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_donna.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Donna Driscoll</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420<br />C: 650-776-6262</li>
					<li><a href="mailto:Donna.Driscoll@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Donna.Driscoll@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="tiffany" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('tiffany'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_tiffany.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Tiffany Altieri</strong><br />Designer, Involution Studios LLC</li>
					<li>W: 408-249-0420</li>
					<li><a href="mailto:Tiffany.Altieri@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Tiffany.Altieri@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="joel" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('joel'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_joel.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Joel Nave</strong><br />Designer, Agile</li>
					<li>W: 408-284-3889<br />C: 408-802-0765</li>
					<li><a href="mailto:Joel.Nave@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Joel.Nave@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="michele" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('michele'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_michele.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Michele Yoshikawa</strong><br />Designer, Agile</li>
					<li>W: 408-284-3823<br />C: 408-705-7233</li>
					<li><a href="mailto:Michele.Yoshikawa@agile.com"><img src="/shared/images/icn_email.png" alt="" />Michele.Yoshikawa@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="dave" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('dave'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_dave.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Dave Elliott</strong><br />Designer, Agile</li>
					<li>W: 408-284-3824<br />C: 408-375-2206</li>
					<li><a href="mailto:Dave.Elliott@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Dave.Elliott@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<div id="kishore" class="popup obj_display_none">	
		<div class="pop_top"><div class="pop_left"><div class="pop_right"><div class="pop_arrow_up"></div></div></div></div>
		<div class="pop_msg"><div class="pop_right"><div class="pop_wrapper">
			<span class="right"><img class="close" src="/shared/images/icn_close.png" onclick="toggleDetailDisplay(document.getElementById('kishore'));" alt="" /></span>
			<div id="photo" class="left"><img src="/shared/images/pho_kishore.png" alt="" /></div>
			<div class="vitals">
				<ul>
					<li><strong>Kishore Subramanian</strong><br />Principal Software Engineer, Agile</li>
					<li>W: 408-284-3820<br />C: 408-480-4388</li>
					<li><a href="mailto:Kishore.Subramanian@agile.com"><img src="/shared/images/icn_email.png" alt="" /> Kishore.Subramanian@agile.com</a></li>
				</ul>
			</div>
		</div></div></div><div class="pop_bottom"><div class="pop_left"><div class="pop_right"></div></div></div>
	</div>
	
	<!-- End Biz Cards. -->
	
	
</div>
<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>