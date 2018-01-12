<?php
require_once 'conexion.class.php';

class mdb{
	var $con;
	var $session;
	var $tabla;
	function mdb($tabla){
		$this->con = new DBManager;
		$this->tabla = $tabla;
	}

	function insert($array){
		if($this->con->conectar()==true){
			foreach ($array as $nombre => $valor){
				$campos .= $nombre . ",";
				$datos  .= "'".$valor . "',";
			}
			$campos .= '|'; $campos = str_replace(',|','',$campos);
			$datos .= '|'; $datos = str_replace(',|','',$datos);

			$sql = "INSERT INTO " . $this->tabla . "(" . $campos . ") VALUES (" . $datos . ")";
		
			$bool = mysql_query($sql);
			return $bool;
		}
	}

	function update($array,$condicion){
		// print_r($array);
		if($this->con->conectar()==true){
			foreach ($array as $nombre => $valor){
				$valores .= $nombre . "='" . $valor . "',";
			}
			$valores .= '|'; $valores = str_replace(',|','',$valores);
			$sql = "UPDATE " . $this->tabla . " SET ".$valores ." WHERE ".$condicion;
			// echo $sql;
			$bool = mysql_query($sql);
			return $bool;
		}
	}

	function getData($where = ''){
		if($this->con->conectar()==true){
			if(!empty($where)){
				$sql = "SELECT * FROM " . $this->tabla . ' WHERE ' . $where;
			}
			else{
				$sql = "SELECT * FROM " . $this->tabla;	
			}

			// echo $sql;	
			
			$data	= $this->Execute(mysql_query($sql));
			return json_encode($data);
		}
	}

	function delete($param){
		// echo $param . ' | ';
		if($this->con->conectar()==true){
			$sql = "DELETE FROM " . $this->tabla . " WHERE " . $param['campo'] . " = %d;";
			$sql = sprintf($sql, $param['valor']);
			// echo $sql;
			$bool	= mysql_query($sql);
			return $bool;
		}
	}
	
	function print_a($array){
		echo '<pre>';
		print_r($array);
		echo '</pre>';
	}
	
	function Execute($data){
		while($reg = mysql_fetch_assoc($data)){
			$registros[] = $reg;
		}
		
		if (empty($registros)){
			$registros = array();
		}
		
		return $registros;
	}
}
?>