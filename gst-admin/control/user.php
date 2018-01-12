<?php
	session_start();
	$data['info']['name'] 		= "gst-admin";
	$data['info']['version'] 	= "2.0.0";
	$data['info']['empresa'] 	= "GO&Live Outdoor Adventures";
	$data['info']['fecha'] 		= "Diciembre 2014";

	$data['success'] 	= $_SESSION['login'];
	$data['userName'] 	= $_SESSION['user_full'];
	$data['sexo'] 		= $_SESSION['sexo'];
	$data['foto'] 		= '';
	$data['perfil'] 	= $_SESSION['perfil'];

	echo json_encode($data);
?>