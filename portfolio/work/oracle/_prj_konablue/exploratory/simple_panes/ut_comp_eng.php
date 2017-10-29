<div id="usertasks">
	<div id="ut_parts" style="display:none;">
		<!--Parts User Tasks-->
		<h4>CONTEXT SENSITIVE TASKS</h4>
		<ul id="ut_parts_context">

		</ul>
		<hr>
		<h4>PARTS</h4>
		<ul>
			<li><a href="#" onclick="ct_file = 'ct_comp_eng_part_change.php'; goPage(); return false;">Create change</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Manufacturing part</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Part</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">MCO</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">ECR</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Part Cost</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Part Compliance</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">PSR</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Discussion</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Document | File folder</li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Personal user group</li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Action item</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">User profile</a></li>
		</ul>
	</div>
	<div id="ut_documents" style="display:none;">
		<!--Documents User Tasks-->
		<h4>CONTEXT SENSITIVE TASKS</h4>
		<!--Tasks involved in routing a document for comment-->
		<ul id="ut_documents_context">

		</ul>
		<!-- These are the context sensitive tasks for documents, including subtasks where relevant
		
		Route for approval:
		Route for approval
		Reject document
		Add approvers 
		Add comments
		Send document
		
		Delete
		
		Checkout:
		Checkout
		Cancel checkout
		Check in
		
		View:
		Open/get in native app (this means download)
		View in Agile viewer

		
		Redline:
		Redline
		Create a change
		
		Incorporate / lock
		Unincorporate / unlock
		
		Bookmark workflow:
		Identify folder
		Create new folder
		
		Tag (grouping related docs):
		Choose a view
		Create a new view
		(Note: bookmarking and tagging are related)
		
		Save as:
		Complete form
		Not save attachment
		Copy attachment
		Reference attachment
		
		Send:
		Identify recipient
		Add comment
		
		Share:
		Identify recipient
		Assign recipeint roles
		
		Subscribe:
		Identify changes to subscribe to
		
		Scan
		
		Import
		
		These are the bulk actions:
		Mass update (e.g. attach this file to multiple BOs)
		Bulk remove:
		Choose object to remove file from
		Bulk add:
		Search for BOs to add it to
		Bulk replace:
		Choose object to remove file from
		Assign replacement
		
		Create change (for multiple affected items)
		
		This is an uncommon action
		Export
		
		We need to discuss where these go:
		View history		
		View where used
		View relationships
		-->
		<hr>
		<h4>DOCUMENTS</h4>
		<ul>
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create a document</a></li>
			<li><a href="#" onclick="ct_file = 'ct_comp_eng_find_docs.php'; goPage(); return false;">Find documents</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Browse documents</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Documents I need to approve</a></li>
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Rejected documents</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Recently viewed</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Checked out documents</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">My documents</a></li>
		</ul>
	</div>
	<div id="ut_projects" style="display:none;">
		<!--Projects User Tasks-->
		<h4>CONTEXT SENSITIVE TASKS</h4>
		<ul id="ut_projects_context">
		
		</ul>
		<hr>
		<h4>PROJECTS</h4>
		<ul>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create project</a></li> <!-- B -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create portfolio</a></li> <!-- S, PMs only -->
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create template</a></li> <!-- S/B, PMs only -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">My projects</a></li> <!-- B -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Recently viewed projects</a></li> <!-- B -->
			<li><a href="#" onclick="ct_file = 'ct_comp_eng_find_proj.php'; goPage(); return false;">Find projects</a></li> <!-- B -->
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Browse projects</a></li> <!-- B -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">My assignments</a></li> <!-- S-->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Overdue tasks</a></li> <!-- S -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Upcoming tasks</a></li> <!-- S -->
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Upcoming milestones</a></li> <!--S -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Overdue RFQs</a></li> <!-- R -->
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Open RFQs</a></li> <!-- R -->
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Open discussions</a></li> <!-- B -->
		</ul>
	</div>
	<div id="ut_products" style="display:none;">
		<!--Products User Tasks-->
		<h4>CONTEXT SENSITIVE TASKS</h4>
		<ul id="ut_products_context">
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Add parts</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Move parts</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Find noncompliant parts</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create subassembly</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Attach documents</a></li>
		</ul>
		<hr>
		<h4>PRODUCTS</h4>
		<ul>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">AML</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Manufacturing part</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Part</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">MCO</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">ECR</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">PSR</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Discussion</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Document | File folder</li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">v a e d</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Personal user group</li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Action item</a></li>
			<li onmouseover="utOver(this);" onmouseout="utOut(this);"><span class="ut_actions">e</span><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">User profile</a></li>
		</ul>
	</div>
	<div id="ut_contacts" style="display:none;">
		<!--Contacts User Tasks-->
		<h4>CONTEXT SENSITIVE TASKS</h4>
		<!--
		These tasks and subtasks can apply to a user or collection
		
		Make assignments:
		View utilization report
		Assign resources
		
		Assign roles (set permissions)
		
		PSR tasks:
		View PSRs (to check which supplier keeps giving you crap)
		Find related PSRs
		Create a CAPA
		
		View RFQ tasks:
		Send bulk RFQ
		Expediate RFQ
		
		Escalate approval:
		Specify criteria
		Choose who to notify
		
		These are the less common tasks specific to users:
		What are the user groups this user is in?
		What objects has this user subscribed to?
		What are the things that have been shared with this person?
		Whare is this person subscribed to?
		
		These tasks are in the context of a suppliers:
		Create RFQ routing tasks:
		Specify supplier
		Choose location 
		Choose owner
		
		Create commodity offerings (entails filling out a one page form)
		
		Note: a manufacturere can be composed of a group of suppliers		
		-->
		<ul id="ut_contacts_context">
		</ul>
		<hr>
		<h4>CONTACTS</h4>
		<ul>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create contact</a></li>
			<li><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create group</a></li>
			<!--
			Groups include:  resource pool, user group and distribution list
			Org includes:  supplier, customer, manufacturer (these 3 can be lumped into "company")
			-->
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Create organization</a></li>
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_comp_eng_find_cont.php'; goPage(); return false;">Find contact</a></li>
			<li class="spacer"><a href="#" onclick="ct_file = 'ct_sample_content_and_table.php'; goPage(); return false;">Browse contact</a></li>
		</ul>
	</div>
</div>