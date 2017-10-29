<?
	if ( isset( $_POST["clear_theme"] ) )
	{
		$targetfile = $_SERVER['DOCUMENT_ROOT'] . '/global/css/__current_theme.css';
		if(!($fp1=fopen($targetfile,"w")))
		{
			echo "Unable to open ".$targetfile." file.";
			exit;
		}
		fwrite($fp1, '');
		fclose($fp1);
		
		// Clear cookies
		setcookie('global_toolbar', '');
		setcookie('global_toolbar_text', '');
		setcookie('dialog_title_bar', '');
		setcookie('dialog_title_bar_text', '');
		setcookie('widget_title_bar', '');
		setcookie('widget_title_bar_text', '');
		setcookie('selected_controls', '');
		setcookie('selected_controls_text', '');
		setcookie('non_selected_controls', '');
		setcookie('non_selected_controls_text', '');
		setcookie('control_highlights', '');
		setcookie('control_highlights_text', '');
		setcookie('message_area', '');
		setcookie('message_area_text', '');
		setcookie('backgrounds', '');
		setcookie('backgrounds_text', '');
		setcookie('borders', '');
		setcookie('gradient', '');
	} else {
		$global_toolbar 			= $_POST['global_toolbar'];
		$global_toolbar_text 		= $_POST['global_toolbar_text'];
		$dialog_title_bar			= $_POST['dialog_title_bar'];
		$dialog_title_bar_text		= $_POST['dialog_title_bar_text'];
		$widget_title_bar			= $_POST['widget_title_bar'];
		$widget_title_bar_text		= $_POST['widget_title_bar_text'];
		$selected_controls			= $_POST['selected_controls'];
		$selected_controls_text		= $_POST['selected_controls_text'];
		$non_selected_controls		= $_POST['non_selected_controls'];
		$non_selected_controls_text	= $_POST['non_selected_controls_text'];
		$control_highlights 		= $_POST['control_highlights'];
		$control_highlights_text	= $_POST['control_highlights_text'];
		$message_area				= $_POST['message_area'];
		$message_area_text			= $_POST['message_area_text'];
		$backgrounds				= $_POST['backgrounds'];
		$backgrounds_text			= $_POST['backgrounds_text'];
		$borders					= $_POST['borders'];
		if ( isset($_POST['gradient']) )
		{
			$gradient					= $_POST['gradient'];
			setcookie('gradient', $gradient);
		} else {
			setcookie('gradient', '');
		}
		setcookie('global_toolbar', $global_toolbar);
		setcookie('global_toolbar_text', $global_toolbar_text);
		setcookie('dialog_title_bar', $dialog_title_bar);
		setcookie('dialog_title_bar_text', $dialog_title_bar_text);
		setcookie('widget_title_bar', $widget_title_bar);
		setcookie('widget_title_bar_text', $widget_title_bar_text);
		setcookie('selected_controls', $selected_controls);
		setcookie('selected_controls_text', $selected_controls_text);
		setcookie('non_selected_controls', $non_selected_controls);
		setcookie('non_selected_controls_text', $non_selected_controls_text);
		setcookie('control_highlights', $control_highlights);
		setcookie('control_highlights_text', $control_highlights_text);
		setcookie('message_area', $message_area);
		setcookie('message_area_text', $message_area_text);
		setcookie('backgrounds', $backgrounds);
		setcookie('backgrounds_text', $backgrounds_text);
		setcookie('borders', $borders);
		
	
		$sourcefile 				= $_SERVER['DOCUMENT_ROOT'] . '/global/css/__current_theme_template.css';
		$targetfile 				= $_SERVER['DOCUMENT_ROOT'] . '/global/css/__current_theme.css';
	
		if(!($fp1=fopen($sourcefile,"r")))
		{
			echo "Unable to open ".$sourcefile." file.";
			exit;
		}
		if(!($fp2=fopen($targetfile,"w")))
		{
			echo "Unable to open ".$targetfile." file.";
			exit;
		}
		
		if ( isset($_POST['gradient']) )
		{
			$gradient = 'grad_dark2.png';
		} else {
			$gradient = '';
		}

		while (!feof($fp1)) 
		{
			$line = fgets($fp1,2048);
			$new_line = str_replace('[%global_toolbar%]',$global_toolbar,$line);
			$new_line = str_replace('[%global_toolbar_text%]',$global_toolbar_text,$new_line);
			if ( $global_toolbar_text == '#fff' )
			{
				$new_line = str_replace('[%global_toolbar_icons%]','_light',$new_line);
			} else {
				$new_line = str_replace('[%global_toolbar_icons%]','',$new_line);
			}
			$new_line = str_replace('[%dialog_title_bar%]',$dialog_title_bar,$new_line);
			$new_line = str_replace('[%dialog_title_bar_text%]',$dialog_title_bar_text,$new_line);
			$new_line = str_replace('[%widget_title_bar%]',$widget_title_bar,$new_line);
			$new_line = str_replace('[%widget_title_bar_text%]',$widget_title_bar_text,$new_line);
			$new_line = str_replace('[%selected_controls%]',$selected_controls,$new_line);
			$new_line = str_replace('[%selected_controls_text%]',$selected_controls_text,$new_line);
			$new_line = str_replace('[%non_selected_controls%]',$non_selected_controls,$new_line);
			$new_line = str_replace('[%non_selected_controls_text%]',$non_selected_controls_text,$new_line);
			$new_line = str_replace('[%control_highlights%]',$control_highlights,$new_line);
			$new_line = str_replace('[%control_highlights_text%]',$control_highlights_text,$new_line);
			$new_line = str_replace('[%message_area%]',$message_area,$new_line);
			$new_line = str_replace('[%message_area_text%]',$message_area_text,$new_line);
			$new_line = str_replace('[%backgrounds%]',$backgrounds,$new_line);
			$new_line = str_replace('[%backgrounds_text%]',$backgrounds_text,$new_line);
			if ( $backgrounds_text == '#fff' )
			{
				$new_line = str_replace('[%backgrounds_collapse_all_icons%]','_light',$new_line);
				$new_line = str_replace('[%backgrounds_expand_all_icons%]','_light',$new_line);
				$new_line = str_replace('[%backgrounds_edit_icons%]','_light',$new_line);
			} else {
				$new_line = str_replace('[%backgrounds_collapse_all_icons%]','',$new_line);
				$new_line = str_replace('[%backgrounds_expand_all_icons%]','',$new_line);
				$new_line = str_replace('[%backgrounds_edit_icons%]','',$new_line);
			}

			$new_line = str_replace('[%borders%]',$borders,$new_line);
			$new_line = str_replace('[%gradient%]',$gradient,$new_line);
			fwrite($fp2, $new_line);
		}
		
		fclose($fp1);
		fclose($fp2);
	}

		$host  = $_SERVER['HTTP_HOST'];
		$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
		$extra = 'specify_color_swatch.php';
		header("Location: http://$host$uri/$extra");
?>