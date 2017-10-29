function go() 
{
    var Event = YAHOO.util.Event,
        Dom   = YAHOO.util.Dom,
        lang  = YAHOO.lang,
        slider, 
        bg="slider-bg", thumb="slider-thumb", 
        valuearea="slider-value", textfield="slider-converted-value"

    // The slider can move 0 pixels up
    var topConstraint = 0;

    // The slider can move 200 pixels down
    var bottomConstraint = 200;

    // Custom scale factor for converting the pixel offset into a real value
    var scaleFactor = 1.5;

    // The amount the slider moves when the value is changed with the arrow
    // keys
    var keyIncrement = 20;

    var tickSize = 20;

	slider = YAHOO.widget.Slider.getHorizSlider(bg, thumb, topConstraint, bottomConstraint, 20);

	slider.getRealValue = function() 
	{
		return Math.round(this.getValue() * scaleFactor);
	}

	slider.subscribe("change", function(offsetFromStart) {

		var valnode = Dom.get(valuearea);
		var fld = Dom.get(textfield);

		// Display the pixel value of the control
		valnode.innerHTML = offsetFromStart;

		// use the scale factor to convert the pixel offset into a real
		// value
		var actualValue = slider.getRealValue();

		// update the text box with the actual value
		fld.value = actualValue;

		// Update the title attribute on the background.  This helps assistive
		// technology to communicate the state change
		Dom.get(bg).title = "slider value = " + actualValue;

	});

}
go();