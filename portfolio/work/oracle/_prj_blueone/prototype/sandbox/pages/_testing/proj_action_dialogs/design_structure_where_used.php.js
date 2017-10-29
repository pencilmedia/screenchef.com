function Init()
{
    /* Position size palette */
    jQuery('#ux_palette').css( {top: '150px', left: '150px', width: '568px', height: '294px'} );
    agile.ux.palette.onResize();
	jQuery('.toggler').click( ux.utils.toggler );

}

jQuery(document).ready(Init);