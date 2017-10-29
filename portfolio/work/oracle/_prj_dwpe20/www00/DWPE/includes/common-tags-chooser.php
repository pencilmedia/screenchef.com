<select class='common-tags-chooser' 
		style='width:100%'
		id="<?php echo $common_tags_chooser_id?>;"
		related_field="<?php echo $common_tags_chooser_target;?>"
		>
	
	<option value="*">Common Tags...</option>
	
	<option value="%">-----------</option>
	
	<option value="bug:display">Display Bug</option>
	<option value="bug:interaction">Interaction Bug</option>
	<option value="comment">Comment</option>
	<option value="suggestion">Suggestion</option>
	<option value="closed">Closed</option>
	
	<option value="%">-----------</option>
	
	
	<option value="status:working">Working</option>
	<option value="status:research">Researching</option>
	<option value="status:stuck">Stuck</option>
	<option value="status:needs discussion">Needs Discussion</option>
	<option value="limitation">Tool Limitation</option>
	<option value="document">Needs Documentation</option>
	
	
	
	
	<option value="%">-----------</option>
	
	<option value="bug:not">Not A Bug</option>
	<option value="bug:fixed">Fixed</option>
	<option value="bug:verify fix">Verify Fix</option>
	<option value="bug:fix verified">Fix Verified</option>
	<option value="bug:not fixed">Not Fixed</option>

</select>