<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
	<div class="breadcrumb_wrapper">
        <ul class="breadcrumbs">
        	<li><a href="#">Breadcrumb</a> &raquo;</li>
	        <li>Breadcrumb</li>
		</ul>
	</div>
	<div class="column_one layout">
		<h2>Identifier</h2>
			<p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
	</div>
	<div class="column_two">
		<h2>Status / Lifecycle</h2>
		<p>[varies by object]</p>
	</div>
    	<div class="column_three">
			<ul class="rating">
                <li class="traffic_red">Overall Status</li>
                <li class="traffic_green">Schedule Status</li>
                <li class="traffic_yellow">Cost Status</li>
                <li class="traffic_red">Resources Status</li>
                <li class="traffic_grey">Quality Status</li>
			</ul>
		</div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <label>Label:</label>
            <select name="">
                <option value="">Values</option>
                <option value="">selection</option>
            </select>
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Object Action</span></a>
            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Action 2</span></a>
            <a href="#" class="button"><span>Menu<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab selected"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History</span></a></li>
    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
    <div class="errorbar" id="errorbar">
    	<p id="error" class="bgd">&nbsp;</p>
    	<p class="text"><em>4 warnings and 3 errors were found.</em> <a href="#" class="more" onclick="getMessage('/pages/sprint_04/dms/popCombined.php')">Details</a></p>
    </div>
    <div class="page_controls">
        <p class="button_controls"><a href="#" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_discussion">

            <h3>Discussion Information</h3>
                <dl class="side_by_side_discussion">			
                    <dt>Subject:</dt> 
                    <dd>Need to get an iMac to test for Safari.</dd>
            
                    <dt>Notify List:</dt>
                    <dd><a href="#">Troy Aikman</a>, <a href="#">Dan Marino</a>, <a href="#">Michael Vick</a>, <a href="#">Terry Bradshaw</a>, <a href="#">Terrell Owens</a>, <a href="#">Tom Brady</a>, <a href="#">Michael Vick</a>, <a href="#">Michael Vick</a></dd>
            
                    <dt>Priority:</dt>
                    <dd>Priority 1</dd>
                    <dt>Related To:</dt>
                    <dd><a href="#">T000345</a></dd>
                </dl>
            
            <h4>Messages</h4>
        
            <div class="object_messages">
                <div class="column_one">
                    <p>This text would be a reply from Roger.  We really need an Apple computer so that we can test Safari issues.   Current 
        recommendation is to purchase an iMac.  They have great displays and are designed exceptionally well.  Our other 
        option is to get a Mac Mini.  We need to add a lot of text to see exactly how this wiill look if someone has responded with 
        a ton of data.  At this point though, someone might get board and decide to stop reading the message alltogether.</p>
                    <p class="message_author">By: <cite><a href="#">Roger Staubach</a></cite></p>
                </div>
                <div class="column_two">
                    <p class="timestamp">2:45 PM GMT</p>
        
                </div>	
                <div class="column_three">
                    <p class="message_buttons">
                        <a href="#" class="button"><span>Reply</span></a><br/><br/>
                        <a href="#" class="button"><span>Edit</span></a>
                    </p>
                </div>
                
                <hr />
        
                <div class="column_one">
                    <p>This text would be a reply from John.  We really need an Apple computer so that we can test Safari issues.  Current 
        recommendation is to purchase an iMac.They have great displays and are designed exceptionally well.</p>
                    <p class="message_author">By: <cite><a href="#">John Elway</a></cite></p>
                </div>
                <div class="column_two">
                    <p class="timestamp">
                        01/01/2007<br />
                        2:45 PM GMT
                    </p>
                </div>	
                <div class="column_three">
                    <p class="message_buttons">
                        <a href="#" class="button"><span>Edit</span></a>
                    </p>
                </div>
                
                <hr />
        
                <div class="column_one">
                    <p>We really need an Apple computer so that we can test Safari issues.   Current recommendation is to purchase an iMac.
        They have great displays and are designed exceptionally well.  Our other option is to get a Mac Mini.</p>
                    <p class="message_author">By: <cite><a href="#">Troy Aikman</a></cite></p>
                </div>
                <div class="column_two">
                    <p class="timestamp">
                        01/01/2007<br />
                        2:45 PM GMT
                    </p>
                </div>	
                <div class="column_three">
                    <p class="message_buttons">
                        <a href="#" class="button"><span>Edit</span></a>
                    </p>
                </div>
            </div>
            
            <h4>Action Items</h4>
        
        <div class="table_simple_wrapper">
            <!--************************************
                TABLE SIMPLE ACTIONS
            *************************************-->
            <div class="simple_actions">
                <a href="#" class="button"><span>Add</span></a>
                <a href="#" class="button"><span>Delete</span></a>
        
            </div>
            <!--************************************
                TABLE SIMPLE
            *************************************-->
            <div class="scrollHeaderDiv">
                <table cellpadding="0" cellspacing="0" class="simple">
                    <tr>
                        <th>Col 1</th>
                        <th>Col 2</th>
                        <th>Col 3</th>
        
                        <th>Col 4</th>
                    </tr>
                </table>
            </div>
            <div class="scrollTableDiv" style="height:80px;">
                <table cellpadding="0" cellspacing="0" class="table_simple">
                    <tr>
                        <td>Text</td>
        
                        <td>Text</td>
                        <td>Text</td>
                        <td>Text</td>
                    </tr>
            
                    <tr>
                        <td>Text</td>
                        <td>Text</td>
        
                        <td>Text</td>
                        <td>Text</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>Text</td>
                        <td>Text</td>
        
                        <td>Text</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>Text</td>
                        <td>Text</td>
                        <td>Text</td>
                    </tr>
                </table>
            </div>
        </div>

        </div>
    </div>
</div>