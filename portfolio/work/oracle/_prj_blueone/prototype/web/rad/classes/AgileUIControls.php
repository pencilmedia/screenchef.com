<?
/****************************************
	AGILE UI BLOCKS
	Anthony Moquette
	Extension: 3984
	Version: b 2.0
	1/17/2007
****************************************/
require_once "AgileUIBase.php";
class AgileUIControls extends AgileBase
{
	/**************************************************************************************************************
		ADDTEXT CONTROL
	***************************************************************************************************************	
		Parameters:
			[optional]	Control Label:					Control label
			[optional]	Control Text:					Control text value
	***************************************************************************************************************
		Example:
			$control->addTex("label","Text goes here..."
	**************************************************************************************************************/
	public function addText($control_label="", $control_text="")
	{
		$this->control 				= "";
		$this->control_description	= $this->control_description("UI_ADDTEXT_CONTROL");
		$this->control_label 		= $control_label;
		$this->control_text			= $control_text;
				
		// Print view source control description
		$this->control .= $this->control_description;		
		// Control label
		if (strlen($control_label)>0)
		{
			$this->control .= "<dt>" . $this->control_label . ":</dt>\n";
		} else {
			$this->control .= "<dt class=\"place_holder\">Blank</dt>\n";
		}
		// Control text
		$this->control .="\t<dd>" . $this->control_text . "</dd>\n";
		// Print control
		echo $this->format( $this->control );
	}

	/**************************************************************************************************************
		ADDTEXTBOX CONTROL
	***************************************************************************************************************	
		Parameters:
			[required]	Control Type: 					Type of control to display values are text or textarea.
			[optional]	Control Label:					Control label
			[optional]	Control Text:					Control text value
			[optional]	Control Class					Control CSS class
			[optional]	Control Button Class:			Control button CSS class
	***************************************************************************************************************
		Example:
			$control->addTexBox("text","This Label","Container text goes here...","disabled","ico|addressbook|onclick|alert('test')")			
	**************************************************************************************************************/
	public function addTextBox
		(
			$control_type="", 				// Type text = regular textbox, s = small text area, m = medium text area, l = large text area
			$control_label="",				// Text label
			$control_text="", 				// Default text
			$control_container_class="",	// Text container class
			$control_button=""				// Control buttons
		)
	{
		$this->control 						= "";
		$this->control_id 					= $this->unique_id();
		$this->control_description			= $this->control_description("UI_ADDTEXTBOX_CONTROL");
		$this->control_type 				= $control_type;
		$this->control_label 				= $control_label;
		$this->control_text					= $control_text;
		$this->control_container_class		= $control_container_class;
		$this->control_button				= $control_button;
		//		
		// Print view source control description
		//
		$this->control .= $this->control_description;
		//
		// Control label
		//
		$this->control .= $this->formatControlLabel( $this->control_label, $this->control_id );
		//
		// Type of textbox to display
		//
		switch ( strtolower( $this->control_type) )
		{
			case "medium":
				$this->control .="<dd class=\"medium_textbox\"" . ">\n";
				break;	
			case "large":
				$this->control .="<dd class=\"large_textbox\"" . ">\n";
				break;	
			case "xlarge":
				$this->control .="<dd class=\"extra_large_textbox\"" . ">\n";
				break;	
			default:
				$this->control .="<dd>\n";
				break; 	
		}
		// 
		// Text container text and CSS class handling
		//
		if ( strtolower( $this->control_text ) == "required" )
		{
			if ( strlen( $this->control_container_class ) > 0 ) {
				$this->control_container_class 	= " class=\"required " . $this->control_container_class . "\" ";
			} else {
				$this->control_container_class 	= " class=\"required\"";
			}
			$this->control_text_event_handler	= " onfocus=\"required_field(this.id)\" onblur=\"required_field(this.id)\"";
			$this->control_text					= "(Required)";
		}
		else
		{
			if ( strlen( $this->control_container_class ) > 1 )
			{
				$this->control_container_class	= "class=\"". $this->control_container_class . "\"";
				$this->control_text		= $this->control_text;
			}
			$this->control_text_event_handler	= "";
		}
		//
		// Build text container
		//
		switch ( strtolower( $this->control_type) )
		{
			case "medium":
			case "large":
			case "xlarge":
				$this->control .= "\t<textarea id=\"" . $this->control_id . "\" " .  $this->control_container_class . $this->control_text_event_handler . ">" . $this->control_text . "</textarea>\n";	
				break;	
			default: // This will be a regular textbox.
				if ( strlen( $this->control_text ) > 0 )
				{
					$this->control_text = " value=\"" . $this->control_text . "\" ";
				}
				$this->control .= "\t<input type=\"text\" id=\"" . $this->control_id . "\"" . $this->control_container_class .  $this->control_text . $this->control_text_event_handler . " />\n";
				break; 	
		}
		//
		// Control buttons
		//
		if ( strlen( $this->control_button ) > 0 )
		{
			$button = explode(",", $this->control_button); 
			foreach($button as $item) 
			{ 
				$this->control_button_event_handler = "";
				$button_param  = explode("|", $item); 
				$button_id		= " id=\"" . $this->unique_id() . "\" ";
				$button_event   = $button_param[2];
				$button_action  = $button_param[3];
				if ( strlen($button_event) > 0 )
				{
					$this->control_button_event_handler = " " . $button_event . "=\"" . $button_action . "\"";
				}

				switch ( strtolower( $button_param[0] ) )
				{
					case "ico": 	// Icon button
						$button_class 	= " class=\"button\">" . "<span><em class=\"iconic " . $button_param[1] . "\">&nbsp;</em></span>";
						$control_format = "\t<a href=\"#\" " . $this->unique_id() . $this->control_button_event_handler . $button_class . "</a>\n";
						break;
					case "mix": 	// Mixed icon plus text button
						$mixed_params =  explode(".", $button_param[1]); 
						$button_class 	= " class=\"button\"><span><em class=\"" . $mixed_params[0] . "\">&nbsp;</em>";
						$control_format = "\t<a href=\"#\" " . $this->unique_id() . $this->control_button_event_handler . $button_class . "$mixed_params[1]</span></a>\n";
						break;
					default: 		// Default to a text button
						$control_format = "\t<a href=\"#\" class=\"button\"" . $this->unique_id() . $this->control_button_event_handler . "><span>$button_param[1]</span></a>\n";
						break;
				}
				$this->control .= $control_format;
			} 
		}
		//
		// Close our DD
		//
		$this->control .= "</dd>\n";
		//
		// Print control
		//
		echo $this->format( $this->control );
	}

	/**************************************************************************************************************
		ADDSELECTBOX CONTROL
	***************************************************************************************************************	
		Parameters:
			[optional]	Control Label:					Control label
			[required]	Control Option Values:			Comma delimited list of option values
			[optional]	Control Class					Control CSS class
			[optional]	Control Button Event Handler: 	Control onchange event handler
	***************************************************************************************************************
		Example:
			$control->addSelectBox("This Label","opt1,opt2,opt3","disabled","alert('test')")			
	**************************************************************************************************************/
	public function addSelectBox($control_label="", $control_option_values, $control_class="", $control_button="", $control_event_handler="")
	{
		$this->control 						= "";
		$this->control_id 					= $this->unique_id();
		$this->control_description			= $this->control_description("UI_SELECTBOX_CONTROL");
		$this->control_label 				= $control_label;
		$this->control_option_values		= $control_option_values;
		$this->control_class				= $control_class;
		$this->control_button				= $control_button;
		$this->control_event_handler		= $control_event_handler;

		// Print view source control description
		$this->control .= $this->control_description;

		// Get option list
		$this->control_option_values = explode(",", $this->control_option_values);
		
		// Control CSS class
		if ( strlen( $this->control_class ) > 0 )
			$this->control_class = " class=\"" . $this->control_class . "\"";

		// Event handler
		if ( strlen( $this->control_event_handler ) > 0 )
			$this->control_event_handler = " onchange=\"" . $this->control_event_handler . "\"";

		// Control label
		$this->control .= $this->formatControlLabel( $this->control_label, $this->control_id );

		$this->control .="<dd>\n";
		$this->control .= "\t<select id=\"" . $this->control_id . "\"" . $this->control_class . $this->control_event_handler . ">\n";

		// Build option list
		foreach( $this->control_option_values as $list_item )
		{
			if ( strtolower( $list_item ) == "required" )
			{
				$this->control .= "\t\t<option value=\"required\" class=\"required\">(Required)</option>\n";
			} else {
				$this->control .= "\t\t<option value=\"" . strtolower($list_item) . "\">$list_item</option>\n";
			}
		}
		$this->control .= "\t</select>\n";
		if ( strlen( $this->control_button ) > 0 )
		{
			$button = explode(",", $this->control_button); 
			foreach($button as $item) 
			{ 
				$this->control_button_event_handler = "";
				$button_param  = explode("|", $item); 
				$button_id		= " id=\"" . $this->unique_id() . "\" ";
				$button_event   = $button_param[2];
				$button_action  = $button_param[3];
				if ( strlen($button_event) > 0 )
				{
					$this->control_button_event_handler = " " . $button_event . "=\"" . $button_action . "\"";
				}

				switch ( strtolower( $button_param[0] ) )
				{
					case "ico": 	// Icon button
						$button_class 	= " class=\"button\">" . "<span><em class=\"iconic " . $button_param[1] . "\">&nbsp;</em></span>";
						$control_format = "\t<a href=\"#\" " . $this->unique_id() . $this->control_button_event_handler . $button_class . "</a>\n";
						break;
					case "mix": 	// Mixed icon plus text button
						$mixed_params =  explode(".", $button_param[1]); 
						$button_class 	= " class=\"button\"><span><em class=\"" . $mixed_params[0] . "\">&nbsp;</em>";
						$control_format = "\t<a href=\"#\" " . $this->unique_id() . $this->control_button_event_handler . $button_class . "$mixed_params[1]</span></a>\n";
						break;
					default: 		// Default to a text button
						$control_format = "\t<a href=\"#\" class=\"button\"" . $this->unique_id() . $this->control_button_event_handler . "><span>$button_param[1]</span></a>\n";
						break;
				}
				$this->control .= $control_format;
			} 
		}
		$this->control .= "</dd>\n";
		
		// Print control
		echo $this->format( $this->control );
	}

	/**************************************************************************************************************
		ADDAUTONUMBER CONTROL
	***************************************************************************************************************	
		Parameters:
			[optional]	Control Label					Control label
			[optional]	Default Number					Control default number
			[optional]	Control Class					Control CSS class
	***************************************************************************************************************
		Example:
			$control->addAutoNumber("This Label",12345,"disabled")
	**************************************************************************************************************/
	public function addAutoNumber($control_label="Auto Number", $control_default_number="85126", $control_class="")
	{
		$this->control 						= "";
		$this->control_id 					= $this->unique_id();
		$this->control_description			= $this->control_description("UI_ADDAUTONUMBER_CONTROL");
		$this->control_label 				= $control_label;
		$this->control_default_number		= $control_default_number;
				
		// Print view source control description
		$this->control .= $this->control_description;		
		
		// Control label
		$this->control .= $this->formatControlLabel( $this->control_label, $this->control_id );
		
		// Control text
		$this->control_text	= $this->control_default_number;
		
		$this->control .="<dd>\n";
		
		// If textbox
		$this->control .= "\t<input type=\"text\" id=\"" . $this->control_id . "\" value=\"" . $this->control_text . "\" class=\"auto_number_field disabled long_width\" disabled=\"disabled\" />\n";

		// Control button
		$this->control .= "\t<a href=\"#\" id=\"" . $this->unique_id() . "\" class=\"button icon auto_number\" onclick=\"increment('" . $this->control_id . "');return false;\">&nbsp;</a>\n";

		// Close our DD
		$this->control .= "</dd>\n";
		
		// Print control
		echo $this->format( $this->control );
	}

	/**************************************************************************************************************
		ADDRADIO CONTROL
	***************************************************************************************************************	
		Parameters:
			[optional]	Control Label:					Control label
			[required]	Control Option Values:			Comma delimited list of option values
			[optional]	Control Class					Control CSS class
	***************************************************************************************************************
		Example:
			$control->addRadio("This Label","opt1,opt2,opt3","disabled","checked")			
	**************************************************************************************************************/
	public function addRadio($control_label="", $control_option_values, $control_class="", $control_checked="", $control_disabled_status="")
	{
		$this->control 						= "";
		$this->control_name					= $this->unique_id();
		$this->control_description			= $this->control_description("UI_RADIO_CONTROL");
		$this->control_label 				= $control_label;
		$this->control_option_values		= $control_option_values;
		$this->control_class				= $control_class;
		$this->control_checked				= $control_checked;
		$this->control_disabled_status		= $control_disabled_status;

		// Print view source control description
		$this->control .= $this->control_description;

		// Get option list
		$this->control_option_values = explode(",", $this->control_option_values);
		
		// Check control for compound classes
		if (strlen($this->control_class) > 0)
			$this->control_class = " $control_class";
	
		// Check disabled status
		if ( strlen($this->control_disabled_status) > 0 )
			$control_disabled_status = "disabled=\"disabled\"";
		
		$this->control .= $this->formatControlLabel( $this->control_label, $this->control_id );

		// Build option list
		$x = 0;
		foreach( $this->control_option_values as $list_item )
		{
			$this->control_id = $this->unique_id();

			if ($x == 0)
			{
				if ( strlen($this->control_checked) > 0)
					$checked = "checked=\"checked\"";
			} else {
				$checked ="";
			}

			if ($x >= 1)
				$this->control .= "<dt class=\"place_holder\">blank</dt>\n";

			$this->control .= "\t\t<dd><input type=\"radio\" name=\"" . $this->control_name	. "\" class=\"form_selectors" . $this->control_class . "\" value=\"" . strtolower($list_item) . "\" id=\"" . $this->control_id . "\" $checked $control_disabled_status /><label for=\"" . $this->control_id . "\">" . $list_item . "</label></dd>\n";
			$x++;
		}
		
		// Print control
		echo $this->format( $this->control );
	}

	/**************************************************************************************************************
		ADDCHECK CONTROL
	***************************************************************************************************************	
		Parameters:
			[required]	control_text		Control text label
			[optional]	control_class		Control class defaults to "form_selectors"
	***************************************************************************************************************
		Example:
			$control->addCheck("Urgent","my_new_class")			
	**************************************************************************************************************/
	public function addCheck($control_text="", $control_class="form_selectors")
	{
		$this->control 						= "";
		$this->control_id 					= $this->unique_id();
		$this->control_description			= $this->control_description("UI_ADDCHECK_CONTROL");
		$this->control_text 				= $control_text;
		$this->control_class				= $control_class;
				
		// Print view source control description
		$this->control .= $this->control_description;		
		
		// Let's build our control...
		$this->control .= "<dt class=\"place_holder top_space\">blank</dt>\n";
		$this->control .="<dd class=\"top_space\">\n";
		$this->control .="\t<input type=\"checkbox\" class=\"" . $this->control_class . "\" id=\"" . $this->control_id . "\" /> <label for=\"" . $this->control_id . "\">" . $this->control_text . "</label>\n";
		// Close our DD
		$this->control .= "</dd>\n";
		// Print control
		echo $this->format( $this->control );
	}

	/**************************************************************************************************************
		UI CONTROLS UTILITIES
	**************************************************************************************************************/	

	/**************************************************************************************************************
		PRINT CONTROL LABEL
	***************************************************************************************************************	
		Parameters:
			[optional]	Control Label					Control label
			[optional]	Control ID						Control ID
	***************************************************************************************************************
		Example: $this->control = $this->formatControlLabel("This Label","1234")
		The function returns a formatted label control.		
	**************************************************************************************************************/
	public function formatControlLabel($control_label,$control_id) 
	{		
		$this->control_label 	= $control_label;
		$this->control_id		= $control_id;
		$this->formatted_label	= "";

		if ( strlen( $this->control_label ) > 0 )
		{
			$this->formatted_label = "<dt><label for=\"" . $this->control_id . "\">" . $this->control_label . ":</label></dt>\n";
		} else {
			$this->formatted_label = "<dt class=\"place_holder\">blank</dt>\n";
		}
		
		return $this->formatted_label;
	}	
}
?>