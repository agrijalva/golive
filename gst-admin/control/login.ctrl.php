<?php
	error_reporting(0);
	session_start();
	require_once '../model/login.class.php';
	$obj = new login;

	if($obj->access($_POST['mail'], $_POST['pass'])){
		$_retur['success'] = true;
		$_retur['msg'] = 'Acceso correcto';
	}
	else{
		$_retur['success'] = false;
		$_retur['msg'] = 'Tu usuario y/o contraseña no son validos';
	}
	// echo 'success';
	
	echo json_encode($_retur);

?>