<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Project Kona Blue &bull; User Tasks Supplemental Data</title>	
	<link rel="stylesheet" type="text/css" href="/shared/css/inv_simple_code.css" />
	<link rel="stylesheet" type="text/css" href="css/use_case_styles.css" />
</head>
<body>

<? include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_header.php'); ?>



<div id="content">
	<h6>Data to assist in the creation of user tasks</h6>
		<ul>
			<li><a href="#box_exercise">Results of the Box Exercise</a></li>
			<li><a href="#agile_objects">Agile objects by module</a></li>
			<li><a href="#use_cases">Sample Agile use cases</a></li>
			<li><a href="#roles">Roles within the Agile system</a></li>
			<li><a href="#actions">Actions that can be performed in Agile</a></li>
		</ul>
	<h6 id="box_exercise">Results of the Box Exercise</h6>
	<p>
		In the box exercise, we brainstormed all of the tasks user perform in the Agile
		system then grouped them by their affinity to other tasks.  We then labeled these
		groups of tasks.  This resulted in the following nine categories: Record,
		Relationships, Collaboration, Bulk/Batch/Workspace, Settings, Analysis, Navigation,
		Address Book, Warnings and Error Handling.
	<p>
	<p class="categories">Record</p>
	<ul class="spacer">
		<li>manage:
			<ul>
				<li>modify BO info (P1, P2, P3)</li>
				<li>import object</li>
				<li>view all tabs of BO</li>
				<li>soft delete</li>
				<li>create object</li>
				<li>delete object</li>
				<li>change ID</li>
				<li>view history</li>
				<li>export object</li>
				<li>update object metadata</li>
				<li>print object</li>
				<li>hard delete</li>
				<li>save as object</li>
			</ul>
		</li>
		<li>parts:
			<ul>
				<li>change class</li>
				<li>manufacturer part where used</li>
				<li>view item where used</li>
				<li>import item redline mode</li>
				<li>import item authoring mode</li>
				<li>view filtered info</li>
				<li>view relationship info</li>
				<li>view changes</li>
				<li>view cost info for item</li>
				<li>view manufacturers</li>
				<li>CAD model</li>
				<li>document management:
					<ul>
						<li>manage documents (files & URLs)</li>
						<li>view documents (files & URLs)</li>
						<li>file folder redlining</li>
						<li>route ff(?) for approval</li>
						<li>redline attachment</li>
						<li>file versioning (edit file)</li>
						<li>incorporate attachments</li>
						<li>unincorporate</li>
						<li>CAD file</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>sites:
			<ul>
				<li>edit sites flex fields</li>
				<li>create new sites</li>
				<li>remove sites</li>
				<li>add sites</li>
				<li>changes:</li>
				<li>create change from item</li>
				<li>add affected item</li>
				<li>redline item</li>
				<li>edit affected items</li>
				<li>redline manufacturer</li>
			</ul>
		</li>
	</ul>
	<p class="categories">Relationships</p>
	<ul class="spacer">
		<li>category 1:
			<ul>
				<li>CAD Structure</li>
				<li>manage relationship</li>
				<li>view relationship</li>
			</ul>
		<li>category 2:
			<ul>
				<li>reference objects</li>
				<li>relate change to other objects</li>
				<li>reference change to other objects</li>
			</ul>
		</li>
	</ul>
	<p class="categories">Collaboration</p>
	<ul class="spacer">
		<li>workflow:
			<ul>
				<li>notify user/CA</li>
				<li>participate in workflow</li>
				<li>change workflow status</li>
				<li>manage app/obs</li>
				<li>route a change for approval</li>
				<li>state process step completion</li>
				<li>run audit status on change</li>
				<li>discussion:</li>
				<li>create discussion</li>
				<li>view discussion</li>
				<li>reply to discussion</li>
				<li>notifications:</li>
				<li>email notifications</li>
				<li>my notifications</li>
				<li>review changes I created</li>
				<li>changes I need to approve</li>
				<li>view workflow routings</li>
				<li>add action item</li>
				<li>action items</li>
			</ul>
		</li>
		<li>misc:
			<ul>
				<li>send</li>
				<li>share</li>
				<li>subscribe to BO</li>
			</ul>
		</li>
	</ul>
	<p class="categories">Bulk/Batch/Workspace</p>
	<ul class="spacer">
		<li>work with search results</li>
	</ul>	
	<p class="categories">Settings</p>
	<ul class="spacer">
		<li>change approval password</li>
		<li>view my user profile</li>
		<li>transfer authority</li>
		<li>change password</li>
		<li>LDAP integration</li>
		<li>define escalation</li>
		<li>manage users</li>
		<li>manage user groups</li>
	</ul>
	<p class="categories">Analysis</p>
	<ul class="spacer">
		<li>create a report</li>
		<li>auto run report</li>
		<li>run reports</li>
		<li>view a report</li>
		<li>analytics</li>
	</ul>
	<p class="categories">Navigation</p>
	<ul class="spacer">
		<li>manage bookmarks</li>
		<li>general navigation (back, forward, home)</li>
		<li>logout</li>
		<li>view something recently viewed</li>
		<li>advanced search</li>
		<li>quick search</li>
		<li>access help</li>
	</ul>
	<p class="categories">Address Book</p>
	<ul class="spacer">
		<li>manage address book</li>
		<li>view address book</li>
	</ul>
	<p class="categories">Warnings and Error Handling</p>
	<ul class="spacer">
		<li>warnings and error handling</li>
		<li>check sum</li>
	</ul>
	<h6 id="agile_objects">Agile objects by module</h6>
	<p>
		The objects within Records and Relationships were then identified for each Agile
		module.  They are presented in the table below.
	</p>
	<table cellpadding="0" cellspacing="0">
		<thead>
			<tr>
				<th>
					&nbsp;
				</th>
				<th>
					Global
				</th>
				<th>
					PC
				</th>
				<th>
					EC
				</th>
				<th>
					PG&C
				</th>
				<th>
					PCM
				</th>
				<th>
					PPM
				</th>
				<th>
					PQM
				</th>
			</tr>
		</thead>
		<tbody class="agile_objects">
			<tr>
				<th>
					Record
				</th>
				<td>
					<ul>
						<li>discussions</li>
						<li>action items</li>
						<li>documents/
							attachments</li>
						<li>contacts</li>
						<li>contact list</li>
						<li>contact group</li>
						<li>product line</li>
						<li>part family</li>				
					</ul>				
				</td>
				<td>
					<ul>
						<li>manufacturer's
							parts</li>
						<li>parts</li>
						<li>suppliers</li>
						<li>change order</li>
						<li>change request</li>
						<li>deviations</li>
						<li>stop ships</li>
						<li>packages</li>
						<li>contact
							transfer
							order</li>
						<li>project</li>
					</ul>				
				</td>
				<td>
					<ul>
						<li>models</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>substance</li>
						<li>material</li>
						<li>sub-part</li>
						<li>substance group</li>
						<li>declaration</li>
						<li>product</li>
						<li>specification</li>	
					</ul>
				</td>
				<td>
					<ul>
						<li>RFQ</li>
						<li>price</li>
						<li>price change order</li>
						<li>sourcing project</li>				
					</ul>
				</td>
				<td>
					<ul>
						<li>schedule</li>
						<li>task</li>
						<li>gate</li>
						<li>phase</li>
						<li>action item</li>
						<li>program</li>
						<li>discussion</li>
						<li>news</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>problem reports</li>
						<li>CAPA (corrective act./
							preventative act.)</li>
					</ul>
				</td>
			</tr>
			<tr>
				<th>
					Relationship
				</th>
				<td>
					<ul>
						<li>BOMs</li>
						<li>AMLs</li>
						<li>attachments</li>
						<li>items</li>
						<li>design</li>
						<li>AVLs / ASLs</li>
						<li>history</li>
						<li>where used</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>affected items</li>
						<li>changes</li>						
					</ul>
				</td>
				<td>
					<ul>
						<li>design</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>compliance</li>
						<li>BOS</li>
						<li>threshold values</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>priceline</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>team</li>
						<li>links</li>
						<li>deliverables</li>
						<li>dependency</li>
						<li>resource</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>quality</li>
					</ul>
				</td>
			</tr>
		</tbody>
	</table>
	<!--
	<table cellpadding="0" cellspacing="0">
		<thead>
			<tr>
				<th>
					&nbsp;
				</th>
				<th>
					Record
				</th>
				<th>
					Relationship
				</th>
			</tr>
		</thead>
		<tbody class="agile_objects">
			<tr>
				<th>
					Global
				</th>
				<td>
					<ul>
						<li>discussions</li>
						<li>action items</li>
						<li>documents/
							attachments</li>
						<li>contacts</li>
						<li>contact list</li>
						<li>contact group</li>
						<li>product line</li>
						<li>part family</li>				
					</ul>					
				</td>
				<td>
					<ul>
						<li>BOMs</li>
						<li>AMLs</li>
						<li>attachments</li>
						<li>items</li>
						<li>design</li>
						<li>AVLs / ASLs</li>
						<li>history</li>
						<li>where used</li>
					</ul>				
				</td>
			</tr>
			<tr>
				<th>
					PC
				</th>
				<td>
					<ul>
						<li>manufacturer's
							parts</li>
						<li>parts</li>
						<li>suppliers</li>
						<li>change order</li>
						<li>change request</li>
						<li>deviations</li>
						<li>stop ships</li>
						<li>packages</li>
						<li>contact
							transfer
							order</li>
						<li>project</li>
					</ul>				
				</td>
				<td>
					<ul>
						<li>affected items</li>
						<li>changes</li>						
					</ul>				
				</td>
			</tr>
			<tr>
				<th>
					EC
				</th>
				<td>
					<ul>
						<li>models</li>
					</ul>				
				</td>
				<td>
					<ul>
						<li>design</li>
					</ul>				
				</td>
			</tr>	
			<tr>
				<th>
					PG&C
				</th>
				<td>
					<ul>
						<li>substance</li>
						<li>material</li>
						<li>sub-part</li>
						<li>substance group</li>
						<li>declaration</li>
						<li>shippable item</li>
						<li>product</li>
						<li>specification</li>	
					</ul>				
				</td>
				<td>
					<ul>
						<li>compliance</li>
						<li>BOS</li>
						<li>threshold values</li>
					</ul>				
				</td>
			</tr>
			<tr>
				<th>
					PCM
				</th>
				<td>
					<ul>
						<li>RFQ</li>
						<li>price</li>
						<li>price change order</li>
						<li>sourcing project</li>				
					</ul>				
				</td>
				<td>
					<ul>
						<li>priceline</li>
					</ul>				
				</td>
			</tr>
			<tr>
				<th>
					PPM
				</th>
				<td>
					<ul>
						<li>schedule</li>
						<li>task</li>
						<li>gate</li>
						<li>phase</li>
						<li>action item</li>
						<li>program</li>
						<li>discussion</li>
						<li>news</li>
					</ul>				
				</td>
				<td>
					<ul>
						<li>team</li>
						<li>links</li>
						<li>deliverables</li>
						<li>dependency</li>
						<li>resource</li>
					</ul>				
				</td>
			</tr>
			<tr>
				<th>
					PQM
				</th>
				<td>
					<ul>
						<li>problem reports</li>
						<li>CAPA (corrective act./
							preventative act.)</li>
					</ul>				
				</td>
				<td>
					<ul>
						<li>quality</li>
					</ul>				
				</td>
			</tr>
		</tbody>
	</table>	
	-->
	<h6 id="use_cases">Sample Agile use cases</h6>
	<p>
		These are the 14 use cases we brainstormed at the close of the
		wireframing process, when we had decided upon an overall structure to pursue for the
		exploratory phase of the design.
	</p>
	<ol>
		<li>Bulk RFQ update
			<ul>
				<li>Filter on some criteria</li>
				<li>Select results</li>
				<li class="spacer">Add price adder to all selected</li>
			</ul>
		</li>
		<li>Validate compliance for BOM
			<ul>
				<li>Identify undeclared parts</li>
				<li>Find info on web</li>
				<li>Update parts</li>
				<li>Initiate system roll-up</li>
				<li>Run component  report</li>
				<li>Evaluate component</li>
				<li>Create issues</li>
				<li class="spacer">Send issues to owners</li>
			</ul>
		</li>
		<li>Create pricing for parts
			<ul>
				<li>Create sourcing project</li> 
				<li>Create RFQs</li> 
				<li class="spacer">Route RFQs</li>
			</ul>
		</li>	
		<li>Receive RFQ response
			<ul>
				<li>Analyze data in sourcing project</li> 
				<li class="spacer">Publish prices to parts</li> 
			</ul>
		</li>	
		<li>Receive notifications for RFQ to respond to
			<ul>
				<li>Find RFQ</li> 
				<li>Export to Excel</li> 
				<li>Import</li> 
				<li class="spacer">Submit</li> 
			</ul>
		</li>	
		<li>Review Where Used for a part
			<ul>
				<li>Search  Agile for a part</li> 
				<li>Open part from list</li> 
				<li>Click on Where Used</li> 
				<li>Find/see parent(s)</li> 
				<li class="spacer">Note parent or open parents</li> 
			</ul>
		</li>	
		<li>Find office document to run
			<ul>
				<li>Search for something</li> 
				<li>Click on results</li> 
				<li>Open documents, close if wrong And open another documents</li> 
				<li>Click on attachments(s)</li> 
				<li>Get attachments(s)</li> 
				<li class="spacer">Open attachment in native app</li> 
			</ul>
		</li>
		<li>Aggregate select a group of ECRs, and add to ECO
			<ul>
				<li>Update Affected Item table</li> 
				<li class="spacer">Route for change</li> 
			</ul>
		</li>	
		<li>Find Subassembly or Part in a BOM
			<ul>
				<li>Search for part</li> 
				<li>Open part from list</li> 
				<li>Click on BOM</li> 
				<li>Explode BOM</li> 
				<li>Find part</li> 
				<li class="spacer">Note comp or open component</li>  
			</ul>
		</li>
		<li>Review my open tasks
			<ul>
				<li>Filter by date</li> 
				<li class="spacer">Update task by % complete</li> 
			</ul>
		</li>	
		<li>Find MRD
			<ul>
				<li class="spacer">Review or view and sign off</li> 
			</ul>
		</li>
		<li>Review status of all programs I own
			<ul>
				<li>Look at issues in one program</li> 
				<li>Review schedule</li> 
				<li>Filter on a task</li> 
				<li class="spacer">Send reminder (follow up)</li> 
			</ul>
		</li>
		<li class="spacer">Advanced search</li>
		<li>Create a problem report</li>
	</ol>
	<h6 id="roles">Roles within the Agile system</h6>
	<p>
		To assist us in the proess of pairing roles with tasks in the Agile system, the following
		is a preliminary list of the types of users who use Agile.  This list is by no means
		exhaustive.
	</p>
	<ul>
		<li>Change analyst</li>
		<li>Component engineer</li>
		<li>Commodity manager</li>
		<li>Product manager</li>
		<li>Project manager</li>
		<li>Buyer</li>
		<li>Design Engineer</li>
		<li>Manufacturing Engineer</li>
		<li>Supplier</li>
		<li>Program managers</li>
		<li>Call center agents</li>
		<li>Manufacturing operators/Shop floor person</li>
		<li>Field service agent</li>
		<li>Administrator</li>
		<li>Executive</li>
		<li>Resource manager</li>
		<li>Quality Analyst</li>
		<li>Compliance Manager</li>
	</ul>
	<h6 id="actions">Actions that can be performed in Agile</h6>
	<p>
		Actions in the Agile system can be grouped into 5 categories:  view/read, add/create, delete,
		edit and collaborate.
	</p>
	<table cellpadding="0" cellspacing="0" id="actions">
		<thead>
			<tr>
				<th>
					View | Read
				</th>
				<th>
					Add | Create
				</th>
				<th>
					Delete
				</th>
				<th>
					Edit
				</th>
				<th>
					Collaborate
				</th>
			</tr>
		</thead>
		<tbody class="agile_objects">
			<tr>
				<td>
					<ul>
						<li>view</li>
						<li>export</li>
						<li>find</li>
						<li>run (report)</li>
						<li>run (where used)</li>
						<li>audit</li>
						<li>filter</li>
						<li>analyze</li>
						<li>print</li>								
					</ul>				
				</td>
				<td>
					<ul>
						<li>add</li>
						<li>create</li>
						<li>define</li>
						<li>run (report)</li>
						<li>import</li>
						<li>define (escalation)</li>
						<li>post</li>
						<li>bookmark</li>				
					</ul>				
				</td>
				<td>
					<ul>
						<li>delete</li>
						<li>remove</li>					
					</ul>
				</td>
				<td>
					<ul>
						<li>edit/set</li>
						<li>modify</li>
						<li>redline</li>
						<li>maintain</li>
						<li>manage</li>
						<li>approve</li>
						<li>import</li>
						<li>incorporate/
							unincorporate</li>
						<li>lock/unlock</li>
						<li>check in/check out</li>
						<li>lookup</li>
						<li>publish</li>
						<li>bulk change</li>
						<li>propose alternate</li>
						<li>mark</li>
						<li>decline</li>
						<li>accept</li>
						<li>reject</li>
						<li>change</li>
						<li>rollup</li>
						<li>relate</li>
						<li>attach</li>
					</ul>
				</td>
				<td>
					<ul>
						<li>participate</li>
						<li>share</li>
						<li>expedite</li>
						<li>subscribe</li>
						<li>send</li>
						<li>notify</li>
						<li>transfer authority</li>
						<li>run meeting</li>
						<li>route</li>					
					</ul>
				</td>
			</tr>
		</tbody>
	</table>
</div>




<? 
	$gContactEmail = "andrei@involutionstudios.com";
	include_once($_SERVER['DOCUMENT_ROOT'] . '/shared/php/inv_simple_code_footer.php'); 
?>
</body>
</html>