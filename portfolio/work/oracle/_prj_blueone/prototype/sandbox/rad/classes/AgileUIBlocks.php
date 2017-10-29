<?
/****************************************
	AGILE UI BLOCKS
	Anthony Moquette
	Extension: 3984
	Version: b 2.0
	1/20/2007
****************************************/
require_once "AgileUIBase.php";
class AgileUIBlocks extends AgileBase
{
	private $component_directory = "";

	public function __construct($page_title="Agile UI Blocks", $css_params="", $script_params="", $body_params="", $page_owner="")
	{
		$this->component_directory = APPLICATION_PATH . "/includes";

		/***********************************************
			PAGE HEADER
		***********************************************/
		$this->page_framework_top = "";
		$this->page_framework_top .= "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n";
		$this->page_framework_top .= "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n";
		$this->page_framework_top .= "<head>\n";
		$this->page_framework_top .= "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\" />\n";
		$this->page_framework_top .= "	<link rel=\"stylesheet\" type=\"text/css\" href=\"" . CSS_PATH . "/default.css\" />\n";

		/***********************************************
			ADDITIONAL CSS FILES
		***********************************************/
		if ( strlen( $css_params ) > 0 )
		{
			$value = explode("|", $css_params); 
			foreach($value as $items) 
			{ 
				$css_param = explode("|", $items); 
				$this->page_framework_top .= "	<link rel=\"stylesheet\" type=\"text/css\" href=\"" . CSS_PATH . "/$css_param[0]\" />\n";
			} 
		}

		$this->page_framework_top .= "	<script type=\"text/javascript\" src=\"" . JAVASCRIPT_PATH . "/yui/yahoo-dom-event/yahoo-dom-event.js\"></script>\n";
		$this->page_framework_top .= "	<script type=\"text/javascript\" src=\"" . JAVASCRIPT_PATH . "/common.js\"></script>\n";

		/***********************************************
			ADDITIONAL SCRIPT FILES
		***********************************************/
		if ( strlen( $script_params ) > 0 )
		{
			$value = explode("|", $script_params); 
			foreach($value as $items) 
			{ 
				$script_param = explode("|", $items); 
				$this->page_framework_top .= "	<script type=\"text/javascript\" src=\"" . JAVASCRIPT_PATH . "/$script_param[0]\"></script>\n";
			} 
		}

		/***********************************************
			CODE BEHIND
		***********************************************/
		$codeBehindFile = str_replace(".php", ".js", $_SERVER["SCRIPT_FILENAME"]);
		if ( file_exists($codeBehindFile) )
		{
			$this->page_framework_top .= "	<!-- AGILE UI BLOCK AUTO GENERATED INCLUDE -->\n";
			$this->page_framework_top .= "	<script type=\"text/javascript\" src=\"" . basename($codeBehindFile) . "\"></script>\n";
		}
		
		/***********************************************
			PAGE TITLE
		***********************************************/
		$this->page_framework_top .= "	<title>$page_title</title>\n";
		$this->page_framework_top .= "</head>\n";
		
		/*
		if ( strlen($page_class) > 1 ) {
			$this->page_framework_top .= "<body class=\"$page_class\">\n";
		} else {
			$this->page_framework_top .= "<body>";
		}
		*/
		$this->page_framework_top .= "<body";
		if ( strlen( $body_params ) > 0 )
		{
			$value = explode(",", $body_params); 
			foreach($value as $items) 
			{ 
				$body_param  = explode("|", $items); 
				$this->page_framework_top .= " $body_param[0]=\"$body_param[1]\"";
			} 
		}
		$this->page_framework_top .= ">";

		/***********************************************
			DEBUG/TROUBLESHOOTING DIVS
		***********************************************/
		/*if ( $_GET["debug"] == 1)
			$this->page_framework_top .= "<style> div { border: 2px solid red !important; padding: 5px; margin:5px; }</style>";*/

		$this->page_framework_top = $this->format( $this->page_framework_top );
		echo ($this->page_framework_top);
		
		if ( strlen( $page_owner ) > 0 )
			echo ( $this->addUXMessage("Work in progress : $page_owner") );
	}	
	
	/*************************************
		[ HEADERS ] COMPONENT
	*************************************/
	public function addHeader($type="", $title="", $description="",  $checked_text="", $button_1="", $button_2="")
	{
		$this->page_header = "";

		switch($type)
		{
			/****************************
				LAYOUT PAGES
			****************************/
			case "layout_generic":
				$f = $this->component_directory . "/layouts/headers/generic.php";
				$this->page_header = file_get_contents($f);
				break;

			case "layout_ppm":
				$f = $this->component_directory . "/layouts/headers/ppm.php";
				$this->page_header = file_get_contents($f);
				break;
				
			case "layout_print":
				$f = $this->component_directory . "/layouts/headers/print.php";
				$this->page_header = file_get_contents($f);
				break;
				
			/****************************
				ACTION DIALOGS
			****************************/
			case "action_dialog":
				if (strlen($checked_text) > 0 )
				{
					$f = $this->component_directory . "/dialogs/headers/action_dialog_checked.php";
				} else {
					$f = $this->component_directory . "/dialogs/headers/action_dialog.php";
				}
				if (strlen($button_1) < 1 ) // one button display if button_1 is null.
					$f = $this->component_directory . "/dialogs/headers/action_dialog_one_button.php";

				$this->page_header = file_get_contents($f);

				/* OBJECT TITLE */
				if ( strlen($title) > 0 )
					$this->page_header = str_replace("Object Title", $title, $this->page_header);
				if ( strlen($description) > 0 )
					$this->page_header = str_replace("Object Description &bull; 9999999999", $description, $this->page_header);
				if ( strlen($button_1) > 0 )
					$this->page_header = str_replace("Button 1", $button_1, $this->page_header);
				if ( strlen($button_2) > 0 )
					$this->page_header = str_replace("Button 2", $button_2, $this->page_header);
				if ( strlen($checked_text) > 0 )
					$this->page_header = str_replace("Lorem ipsum dolor sit amet.", $checked_text, $this->page_header);
				break;
	
			/****************************
				DEFAULT
			****************************/
			default: $this->page_header = $this->display_what("header");
		}
		$this->page_header = $this->format( $this->page_header );
		echo ( $this->page_header );
	}	


	/*************************************
		[ MESSAGES ] COMPONENT
	*************************************/
	public function addMessage ($type="", $message="")
	{
		$this->page_message = "";
		$f = $this->component_directory . "/layouts/messages/messages.php";
		$this->page_message = file_get_contents($f);

		switch($type)
		{
			case "info":
				$this->page_message = str_replace("message_type", "info", $this->page_message);
				break;
			case "error":
				$this->page_message = str_replace("message_type", "error", $this->page_message);
				break;
			default:
				$this->page_message = $this->page_header = $this->display_what("message");
		}

		if ( strlen($message) > 0 )
			$this->page_message = str_replace("Lorem ipsum dolor sit amet.", $message, $this->page_message);
	
		$this->page_message = $this->format( $this->page_message );
		echo ( $this->page_message );
	}


	/*************************************
		[ OBJECT ACTIONS ] COMPONENT
	*************************************/
	public function addObjectActions ($type="generic")
	{
		switch($type)
		{
			case "no_list":
				$f = $this->component_directory . "/layouts/object_actions/generic_no_list.php";
				break;
			case "generic":
				$f = $this->component_directory . "/layouts/object_actions/generic.php";
				break;
			default: echo $this->invalid_attribute("addObjectAction", $type, "no_list | generic");
		}
		echo ( $this->format(file_get_contents($f)) );
	}

	/*************************************
		[ TABS ] COMPONENT
	*************************************/
	public function addTabs ($type="generic")
	{
		switch($type)
		{
			case "sub_tabs":
				$f = $this->component_directory . "/layouts/tabs/sub_tabs.php";
				break;

			case "generic":
				$f = $this->component_directory . "/layouts/tabs/generic.php";
				break;
			default: echo $this->invalid_attribute("addTabs", $type, "generic | sub-tabs");
		}
		echo ( $this->format(file_get_contents($f)) );
	}


	/*************************************
		[ PAGE CONTROLS ] COMPONENT
	*************************************/
	public function addPageControls ($type="generic")
	{
		switch($type)
		{
			case "object_form":
				$f = $this->component_directory . "/layouts/page_controls/object_form.php";
				break;
			case "object_form_edit":
				$f = $this->component_directory . "/layouts/page_controls/object_form_edit.php";
				break;
			case "generic":
				$f = $this->component_directory . "/layouts/page_controls/generic.php";
				break;
			case "item_workflow":
				$f = $this->component_directory . "/layouts/page_controls/item_workflow.php";
				break;
			default: echo $this->invalid_attribute("addPageControls", $type, "object_form | object_form_edit | generic");
		}
		echo ( $this->format(file_get_contents($f)) );
	}
	
	/*************************************
		COMPONENT
	*************************************/
	public function addViewControls ($type="generic")
	{
		switch($type)
		{
			case "titled":
				$f = $this->component_directory . "/layouts/tables/view_controls/generic_title.php";
				break;
			case "disabled":
				$f = $this->component_directory . "/layouts/tables/view_controls/generic_title_disabled.php";
				break;
			case "generic":
				$f = $this->component_directory . "/layouts/tables/view_controls/generic.php";
				break;
			default: echo $this->invalid_attribute("addViewControls", $type, "titled | disabled | generic");
		}
		echo ( $this->format(file_get_contents($f)) );
	}	

	/*************************************
		[ INCLUDE FILE ] component
	*************************************/
	public function includeFile ($page_content)
	{
		$f = $this->component_directory . $page_content;
		echo ( $this->format(file_get_contents($f)) );
		
	}

	/*************************************
		[ PRINT PAGE ] component
	*************************************/
	public function printPage()
	{
		/*************************************
			[ framework bottom ]
		*************************************/
		$this->page_framework_bottom = "</body>\n";
		$this->page_framework_bottom .= "</html>\n";
		echo ( $this->page_framework_bottom );
	}
}
?>