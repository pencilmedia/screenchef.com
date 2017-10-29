uxPalette = function()
{
	if (arguments.length)
	{
		id = arguments[0];
	} else {
		var d = new Date(); 
		id = ( 'ux_palette_' + d.getTime() );
	}

	this._id					= id;
	this._class					= 'ux_palette';
	this._title 				= '';
	this._content 				= '[Palette Main]';
	this._width 				= null;
	this._height				= null;
	this._x 					= null;
	this._y 					= null;
	this._position				= function(x,y){this._x=x; this._y=y }


	this._isCollapsed 			= false;
	this._currentHeight			= null;
	this._ux_palette_header 	= 'ux_palette_header_'+this._id;
	this._palette       		= this._id;
	this._palette_top			= 'ux_palette_top_' + this._id;
	this._main_content    		= 'ux_palette_main_'+ this._id;
	this._palette_bottom		= 'ux_palette_bottom_' + this._id;
	this._paletter_resize		= 'ux_palette_resizer_' + this._id;
	

	this.Class					= function(o){this._class = this._class + ' ' + o;};
	this.Title 					= function(o){this._title = o;};
	this.Content				= function(o)
								  {
									jQuery.get(o,function(data)
									{
										jQuery('#ux_palette_main_'+pal.Id).html(data);
									});
									this._content = o;
								  };
	
	this.Id						= id;
	this.Width 					= function(o){this._width = o;};
	this.Height 				= function(o){this._height = o;};
	this.Position				= function(x,y){this._x=x; this._y=y }
	
	this.Show 		= function()
	{
		//  PALETTE HEADER
		var cmdToggle 			= $.create('a', {'id':'ux_palette_toggle_'+ this._id, 'href':'#','class':'ux_palette_toggle'},[]);
		var headerTitle    		= $.create('h4',{'id':'ux_palette_title_'+ this._id, 'class':'ux_palette_title'},[this._title]);
		var cmdClose 			= $.create('a', {'id':'ux_palette_close_'+ this._id, 'href':'#','class':'ux_palette_close'},[]);
		var	paletteHeader   	= $.create('div',{'id':'ux_palette_header_'+ this._id, 'class':'ux_palette_header'},[cmdToggle,headerTitle,cmdClose]);
        // PALETTE TOP ACTION BAR
        var topActionBarContent = $.create('p',{},['[Top Action Bar]']);
		var paletteTopActionBar = $.create('div',{'id':'ux_palette_top_action_bar_'+ this._id, 'class':'ux_palette_top_action_bar'},[topActionBarContent]);
        // PALETTE TOP
		var paletteTop          = $.create('div',{'id':'ux_palette_top_'+ this._id, 'class':'ux_palette_top'},[paletteHeader, paletteTopActionBar]);
		// PALETTE MAIN
        var paletteMainContent  = this._content;
		var paletteMain         = $.create('div',{'id':'ux_palette_main_'+ this._id, 'class':'ux_palette_main'},[paletteMainContent]);
        // PALETTE MESSAGE AREA
        var messageMessageContent = $.create('div',{},['[Message Area]']);
		var paletteMessage = $.create('div',{'id':'ux_palette_message_area'+ this._id, 'class':'ux_palette_message_area'},[messageMessageContent]);
        // PALETTE BOTTOM ACTION BAR
        var bottomActionBarContent = $.create('p',{},['[Bottom Action Bar]']);
		var paletteBottomActionBar = $.create('div',{'id':'ux_palette_bottom_action_bar_'+ this._id, 'class':'ux_palette_bottom_action_bar'},[bottomActionBarContent]);
        // PALETTE BOTTOM
		var paletteBottom          = $.create('div',{'id':'ux_palette_bottom_'+ this._id, 'class':'ux_palette_top'},[paletteMessage, paletteBottomActionBar]);
		// PALETTE RESIZER HANDLE
		var resizer				= $.create("div",{'id':'ux_palette_resizer_'+ this._id, 'class':'ux_palette_resizer'},[]);
        // CREATE PALETTE
        objPalette 			    = $.create("div", {'id':this._id,'class':this._class},[paletteTop,paletteMain,paletteBottom,resizer]);
    		
		var self = this;
		$(document.body).append(objPalette);
		$('#'+this._id).draggable({'handle':paletteHeader});
		$('#'+this._id).resizable({'handles':{'se':'#ux_palette_resizer_'+self._id},'resize':function(e, ui) { self.resize(e, ui, self);} });
		$('#'+this._id).width(this._width);
		$('#'+this._id).height(this._height);
		$('#'+this._id).css({'left':this._x,'top':this._y});
		$('#ux_palette_toggle_' + this._id).click( function(){ self.toggle() } );
		$('#ux_palette_close_' + this._id).click( function() { $('#'+self._id).hide() } );
		$('#'+self._id).show();
		this.resize();
	}
	
	this.toggle = function()
	{
		var self = this;
		if (this._isCollapsed)
		{
			// ... then expand...
			jQuery('#'+this._id).css('minHeight',70); 
			jQuery('#'+this._id).height(this._currentHeight);
			jQuery('#ux_palette_toggle_'+this._id).css('background-image','url(/global/images/ux_palette/palette_collapse.png)');
			jQuery('#ux_palette_resizer_'+this._id).show();
			this._isCollapsed = false;
		} else {
			// ... else collapse
			this._currentHeight = jQuery('#'+this._id).height();
			jQuery('#'+this._id).height(this._currentHeight);
			jQuery('#'+this._id).css('minHeight',17); 
			jQuery('#'+this._id).height(0);
			jQuery('#ux_palette_toggle_'+this._id).css('background-image','url(/global/images/ux_palette/palette_expand.png)');
			jQuery('#ux_palette_resizer_'+this._id).hide();
			this._isCollapsed = true;
		}
	},
	
	this.resize = function(e)
	{
		var palette       	= document.getElementById(this._id);
		var palette_top		= document.getElementById('ux_palette_top_' + this._id);
		var main_content    = document.getElementById('ux_palette_main_'+ this._id);
		var palette_bottom	= document.getElementById('ux_palette_bottom_' + this._id);
		var paletter_resize	= document.getElementById('ux_palette_resizer_' + this._id);
		main_content.style.height = palette.offsetHeight - palette_top.offsetHeight - palette_bottom.offsetHeight - paletter_resize.offsetHeight + 'px';
	}
}