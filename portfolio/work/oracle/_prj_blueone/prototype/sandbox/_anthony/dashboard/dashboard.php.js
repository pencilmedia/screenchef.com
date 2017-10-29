var dashboard = {};
dashboard.widgetId = 1;
dashboard.init = function()
{
	jQuery('.groupWrapper').Sortable(
		{
			accept: 		'groupItem',
			helperclass: 	'sortHelper',
			activeclass : 	'sortableactive',
			hoverclass : 	'sortablehover',
			handle: 		'div.itemHeader',
			tolerance: 		'pointer',
			fit:			false,
			onStart: 		function()
			{
				jQuery.iAutoscroller.start(this, document.getElementsByTagName('body'));
				jQuery('#dragHelper').css('border','1px dashed silver');
				jQuery('#dragHelper *').hide();
			}
		}
	);
	jQuery('a.closeEl').bind('click', dashboard.toggleContent);
	jQuery('#add').bind('click', dashboard.add);
	jQuery('#collapse').bind('click', dashboard.collapse);
	jQuery('#expand').bind('click', dashboard.expand);
	jQuery('a.cmdA').bind('click', dashboard.doClick);
	jQuery('a.cmdB').bind('click', dashboard.doClick);
	jQuery('.skins').click(dashboard.skinsOnClick);	
}

dashboard.skinsOnClick = function()
{
	jQuery('#dcss').attr("href", 'skins/ux_dash_' + this.id + '.css'); 
}

dashboard.doClick = function(e)
{
	alert('Do something...');
};


dashboard.toggleContent = function(e)
{
	var targetContent = jQuery('div.itemContent', this.parentNode.parentNode);
	if (targetContent.css('display') == 'none') {
		jQuery(this.parentNode).css('border-bottom','1px solid silver');
		targetContent.show();
		jQuery(this).addClass('expanded');
	} else {
		targetContent.hide();
		jQuery(this).removeClass('expanded');
		jQuery(this.parentNode).css('border-bottom',0);
	}
	return false;
};

dashboard.add = function()
{
	var id = dashboard.widgetId++;
	if (id > 10) 
	{
		alert('Please buy more credits :-)');
		return;
	} else {
		var newContainer = '';
		newContainer += '<div id="' + id + '" class="groupItem">';
		newContainer += '	<div class="itemHeader">'
		newContainer += '		<a href="#" class="closeEl expanded">&nbsp;</a>';
		newContainer += '			Right Widget ' + id;
		newContainer += '		<a href="#" id="cmd_' + id + '" class="cmdA" onclick="dashboard.doClick()">&nbsp;</a>';
		newContainer += '		<a href="#" id="cmd_' + id + '" class="cmdB" onclick="dashboard.doClick()">&nbsp;</a>';
		newContainer += '	</div>';
		newContainer += '	<div class="itemContent">';
		newContainer += '		<ul>';
		newContainer += '			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>';
		newContainer += '		</ul>';
		newContainer += '	</div>';
		newContainer += '</div>';

		jQuery('#side')
    	.append(newContainer)
	    .SortableAddItem(document.getElementById(id));
		jQuery('a.closeEl').bind('click', dashboard.toggleContent);
	}
}

dashboard.collapse = function()
{
	jQuery('div.itemContent').hide();	
	jQuery('.closeEl').addClass('collapsed');
	jQuery('.itemHeader').css('border-bottom',0);

}

dashboard.expand = function()
{
	jQuery('div.itemContent').show();	
	jQuery('.closeEl').addClass('expanded');
	jQuery('.itemHeader').css('border-bottom','1px solid silver');

}
jQuery(document).ready(dashboard.init);