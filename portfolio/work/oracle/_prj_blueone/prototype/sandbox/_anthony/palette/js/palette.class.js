uxPalette = function( config )
{
	// DEFAULT VALUES
	this._id			= null;
	this._paletteClass	= null;
	this._title 		= null;
	this._content 		= null;
	this._width 		= null;
	this._height		= null;
	this._x 			= null;
	this._y 			= null;
	this._opacity		= null;
	this._position		= function(x,y){this._x=x; this._y=y; };
	this._offSetHeight	= null;

	this.id 			= function(o){ if (o) { this._id = o; } else { return this._id; } };
	this.paletteClass	= function(o){ if (o) { this._class = o; } else { return this._class; } };
	this.title 			= function(o){ if (o) { this._title = o.toString(); $('#title_'+this._id).text(o); } else { return this._title; } };
	this.content		= function(o){ if (o) { this._content = o; $('#content_wrapper_'+this._id).html(o); } else { return this._content; } };
	this.width 			= function(o){ if (o) { this._width = o; } else { return this._width; } };
	this.minWidth 		= function(o){ if (o) { this._minWidth = this._width = o; } else { return this._minWidth; } };
	this.height 		= function(o){ if (o) { this._height = o; } else { return this._height; } };
	this.minHeight 		= function(o){ if (o) { this._minHeight = this_height = o; } else { return this._minHeight; } };
	this.position		= function(x,y){ if (x,y) { this._x=x; this._y=y; } else { return this._x + ',' + this._y; } };
	this.dragOpacity	= function(o){ if (o) { this._opacity = o; } else { return this._opacity; } };
	this.init			= function(o){ this._initialize(o); };

	this._initialize	( config );
}

uxPalette.prototype._initialize = function( config )
{
	if ( config )
	{		
		this._id 			= config.id 			|| this._id;
		this._paletteClass	= config.paletteClass 	|| 'ux_palette';
		this._title 		= config.title 			|| 'Palette Title';
		this._content 		= config.content 		|| '';
		this._width 		= config.width;
		this._minWidth		= config.minWidth		|| 100;
		this._height		= config.height;
		this._minHeight		= config.minHeight;
		this._opacity		= config.dragOpacity;
		if (config.position)
		{
			this._x 		= config.position[0];
			this._y 		= config.position[1];
		}
	}
	if ( !this._id )		{ this._id = ( 'ux_auto_id_' + new Date().getTime() ); }		
}

uxPalette.prototype.show 	= function()
{
	var palette 			= '#' + this._id;
	var paletteHandle 		= '#paletteHandle_' + this._id;
	var paletteCloseButton	= '#cmdClose_' + this._id;
	var paletteContent		= '#content_' + this._id;
	var paletteResizeHandle	= '#resize_' + this._id;

	var titleDiv			= $.create('div',{'id':'title_'+ this._id, 'class':'ux_palette_title'},[this._title]);
	var closeAnchor			= $.create('a',{'id':'cmdClose_'+ this._id, 'href':'#','title':'Close Palette'},['x']);
	var closeContainer		= $.create('span',{'id':'close_'+ this._id, 'class':'ux_palette_close'},[closeAnchor]);
	var	handleDiv			= $.create("div",{'id':'paletteHandle_'+ this._id, 'class':'ux_palette_handle'},[closeContainer]);
	var contentWrapperDiv	= $.create("div",{'id':'content_wrapper_'+ this._id,'class':'ux_palette_content_wrapper'},[this._content]);
	var resizeDiv			= $.create("div",{'id':'resize_'+ this._id, 'class':'ux_palette_resize'},[]);

	if( $(palette).get(0) == null )
	{
		objPalette 	= $.create("div", {'id':this._id,'class':this._paletteClass},[handleDiv,titleDiv,contentWrapperDiv,resizeDiv]);
		$('#body').append(objPalette);
		$(palette).draggable({'handle':paletteHandle,'opacity':this._opacity});
	}
	
	$('#title_'+this._id).html(this._title);
	$('#content_wrapper_'+this._id).html(this._content);
	
	var self = this;
	$(palette).resizable({
						 'handles':{'se':paletteResizeHandle},
						 'minHeight':this._minHeight,
						 'minWidth':this._minWidth,
						 'resize':function(e, ui) 
						 	{
								self.resize(e, ui, self);
								// Required for FF
								// Some weird resizing issue appears to
								// remove palette borders upon resizing.
								$(this).css({'border-top':'1px solid silver','border-right':'2px solid silver','border-bottom':'2px solid silver','border-left':'1px solid silver'})
							},
						 'stop':function(e, ui){ self.resize(e, ui, self); }
						});
	$(palette).width(this._width);
	$(palette).height(this._height);
	$(palette).css({'left':this._x,'top':this._y});
	$(palette).bind('click',this.topMost);
	$(paletteHandle).mousedown(this.topMost);
	$(paletteResizeHandle).mousedown(this.topMost);
	$(paletteCloseButton).bind('click', function() { $(palette).hide();return false; } );
	$(paletteContent).html(this._content);
	this._offSetHeight = $('.ux_palette_handle').height()+$('.ux_palette_title').height()+$('.ux_palette_resize').height();
	this.resize(self);
}

uxPalette.prototype.resize = function( e, ui, classObj )
{
	if (!classObj) classObj = this;
	$('#content_wrapper_'+ classObj._id).height( $('#' + classObj._id).height() - $('#paletteHandle_'+ classObj._id).height() - $('#title_'+ classObj._id).height() - $('#resize_'+classObj._id).height() );
	this.onResize( e, ui, classObj );
}

uxPalette.prototype.onResize = function( e, ui, classObj ){}

uxPalette.prototype.topMost = function()
{
	$('.ux_palette').css('zIndex', 3);
	$('#'+ this.id.replace('ux_handle_','')).css('zIndex', 1000);
	$('#'+ this.id.replace('ux_resize_','')).css('zIndex', 1000);
}