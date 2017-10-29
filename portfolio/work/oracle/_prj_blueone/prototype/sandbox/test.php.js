(function($){
	var updateUpDown = function(sortable){
		$('dl:not(.ui-sortable-helper)', sortable)
			.removeClass('first').removeClass('last')
			.find('.up, .down').removeClass('disabled').end()
			.filter(':first').addClass('first').find('.up').addClass('disabled').end().end()
			.filter(':last').addClass('last').find('.down').addClass('disabled').end().end();
	};
	
	var moveUpDown = function(){
		var link = $(this),
			dl = link.parents('dl'),
			prev = dl.prev('dl'),
			next = dl.next('dl');
	
		if(link.is('.up') && prev.length > 0)
			dl.insertBefore(prev);
	
		if(link.is('.down') && next.length > 0)
			dl.insertAfter(next);
		
		alert( $(this).id );
		//updateUpDown(dl.parent());
	};
	
	var addItem = function(){
		var sortable = $(this).parents('.ui-sortable');
		var options = '<span class="options"><a class="up">up</a><a class="down">down</a></span>';
		var tpl = '<dl class="sort"><dt>{name}' + options + '</dt><dd>{desc}</dd></dl>';
		var html = tpl.replace(/{name}/g, 'Dynamic name :D').replace(/{desc}/g, 'Description');
	
		sortable.append(html).sortable('refresh').find('a.up, a.down').bind('click', moveUpDown);
		//updateUpDown(sortable);
	};
	
	var emptyTrashCan = function(item){
		item.remove();
	};
	
	var sortableChange = function(e, ui){
		if(ui.sender){
			var w = ui.element.width();
			ui.placeholder.width(w);
			ui.helper.css("width",ui.element.children().width());
		}
	};
	
	var sortableStop = function(e, ui){
	
		//alert ( ui.element[0].parent().id );
	};
	
	$(document).ready(function(){
		var els = ['#header', '#content', '#sidebar', '#content2', '#sidebar2', '#footer', '#footer2', '#trashcan'];
		var $els = $(els.toString());
		
		$('h2', $els.slice(0,-1)).append('<span class="options"><a class="add">add</a></span>');
		$('dt', $els).append('<span class="options"><a class="up">up</a><a class="down">down</a></span>');
		
		$('a.add').bind('click', addItem);
		$('a.up, a.down').bind('click', moveUpDown);
		
		$els.each(function(){
			//updateUpDown(this);
		});
		
		$els.sortable({
			items: '> dl',
			handle: 'dt',
			cursor: 'move',
			appendTo: 'body',
			connectWith: els,
			stop: sortableStop
		});
	});
	
	$(window).bind('load',function(){
		setTimeout(function(){
			$('#overlay').fadeOut(function(){
				$('body').css('overflow', 'auto');
			});
		}, 750);
	});
})(jQuery);