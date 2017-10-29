(function($){
	$.extend({
		bgSlider:function(o){
			var _={
				pasta:'<div id="bgSlider"><img></div>',
				resizeFu:function(){
					var wwi=_.win.width(),
						whe=_.win.height(),
						wk=whe/wwi
					
					if(wk<_.k)
						_.img
							.css({
								width:wwi,
								height:'auto'
							})
					else
						_.img
							.css({
								width:'auto',
								height:whe
							})
				},
				init:function(){
					_.me=window.bgSlider=$(_.pasta)
						.prependTo('body')
					_.img=$('img',_.me)
						.css({position:'fixed',left:0,top:0,zIndex:-1})
						.load(function(){
							_.k=_.img.height()/_.img.width()
							_.resizeFu()
						})
					_.win=$(window)
						.resize(function(){
							_.resizeFu()
						})
					_.resizeFu()
					_.me.data({bgSlider:_})
				}
			}
			
			window.bgSlider?_=bgSlider.data('bgSlider'):_.init()
			typeof o=='string'&&_.img.attr({src:o})			
			typeof o=='object'&&(_=$.extend(_,o))
				
			
			return _.me
		}
	})
})(jQuery)