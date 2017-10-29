(function($){
$.fn.extend({
sImg:function(_){
	var ret=this
	this.each(function(){
		var th=$(this),
			data=th.data('_sImg'),
			root={
			  	"undefined":function(opt){
					var _={
						enable:true,
						spinner:false,
						duration:1000,
						sleep:300,
						preFu:function(){
							var tmp
							tmp=$(_.spinner,_.me)
							if(tmp.length==0)
								tmp=$(_.spinner)
							if(tmp.parent().length==0)
								tmp.appendTo(_.me)
							_.spnnr=tmp
							_.spinnerHide()
						},
						spinnerShow:function(){
							_.spnnr.appendTo(_.me)							
						},
						spinnerHide:function(){
							_.spnnr.detach()
						},
						changeFu:function(src){
							if(src==_.src)
								return false
							_.src=src
							_.buff=_.buff||$('<img>').css({position:'absolute',top:'-999%',left:'-999%'})
							if(_.clone)
								_.clone.remove()
							_.spinnerShow()
							_.spnnr.fadeIn()
							_.buff
								.appendTo('body')
								.unbind('load')
								.load(function(){
									setTimeout(function(){
										_.spnnr.fadeOut(function(){_.spinnerHide()})
										_.clone=_.img.clone().appendTo(_.me)
										_.img.attr({src:src})
										_.clone.fadeOut(_.duration,function(){
											_.clone.remove()
										})
										_.buff.detach()
									},_.sleep)
								})
								.attr({src:src})
						},
						init:function(){
							_.me=this
							_.img=$('>img',_.me)
							
							_.preFu()
						}						
					}
					if(opt)
						$.extend(_,opt)
					if(!data)
						_.init.call(th),
						th.data({_sImg:data=_})						
					else
						_=data
					ret=_
				},
				"object":function(){
					$.extend(data,_)
					ret=th
				},
				"function":function(){
					data.onChangeMas.push(_)
					ret=th
				},
				"number":function(){
					ret=th
				},
				"string":function(){
					data.changeFu(_)
					ret=th
				},
				"boolean":function(){
					data.enable=_
					ret=th
				}
			},
			fu=root[typeof _]
			
			if(!data&&_!=undefined)
				root['undefined'](_)

			if(data.enable||_===true)
				fu()
		})
		return ret
	}
})
})(jQuery)