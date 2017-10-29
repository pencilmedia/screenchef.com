<?
/****************************************
	AGILE UI Base
	Anthony Moquette
	Extension: 3984
	Version: b 2.0
	1/18/2007
****************************************/
class AgileBase
{

	/*************************************
		[ UTILITY ] FUNCTIONS
	*************************************/
	public function format ($val) { return "\n" . $val . "\n"; }

	function display_what($val)
	{
		$error_message = "<h2>Which type of $val would you like to display?</h2>";
		return $error_message;
	}

	function unique_id() { return uniqid (ui_control_id_, true); }

	function control_description($description="UI_CONTROL")
	{
		$this->description = "\n";
		$this->description .= "<!--************************************\n";
		$this->description .= "\t" . $description . "\n";
		$this->description .= "*************************************-->\n";
		return $this->description;
	}

	public function addUXMessage($message)
	{
		echo $this->control_description("Web UX Message");
		echo $this->format("<h2 class=\"ux_ui_message\">$message</h2>");
	}


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