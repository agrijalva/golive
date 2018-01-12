<?php
	require_once '../model/mdb.class.php';
	if(isset($_REQUEST['table']) && !empty($_REQUEST['table']))
	{
		$mdb = new mdb($_REQUEST['table']);
		$_array['success'] = $mdb->delete($_REQUEST);
		echo json_encode($_array);
	}
?>