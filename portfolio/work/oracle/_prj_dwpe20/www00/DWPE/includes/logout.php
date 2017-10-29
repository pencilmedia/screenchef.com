<?php
	//Start session
	if(!isset($_SESSION))
		session_start();
	

	
	//Unset the variables stored in session
	unset($_SESSION['SESS_ID']);
	unset($_SESSION['SESS_USER_NAME']);
	unset($_SESSION['SESS_MESSAGE']);
	unset($_SESSION['ERRMSG_ARR']);
	unset($_SESSION['SESS_ACTION']);
	unset($_SESSION['SESS_TYPE']);
	$_SESSION['SESS_LOGOUT_MSG'] = 'Logout Sucessful';
	session_write_close();
	
	
?>
