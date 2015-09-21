<?php
	include('config.php');
	if($_GET['action']=="list" ){
		$query="SELECT ids, titulos, descripcions FROM servicios ORDER BY ids";
		$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

		$arr = array();
		if($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				$arr[] = $row;	
			}
		}
		$json_response = json_encode($arr);
		echo $json_response;
	}
	else{
		if($_GET['action']=="get" ){
			$idp = $_GET['idp'];
			$query="SELECT p.nombrep, p.descripcionp, p.preciop, p.tamanhop, p.pesop, p.imagenp, p.materialp, p.idpr, p.idc FROM productos p WHERE p.idp='$idp'";
			$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

			$arr = array();
			if($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					$arr[] = $row;	
				}
			}
			$json_response = json_encode($arr);
			echo $json_response;
		}
		else{
			if($_GET['action']=="updateProd"){
				$data = json_decode(file_get_contents("php://input"));
				$idp = $data->idp;
				$nomp = $data->nomp;
				$descp = $data->descp;
				$prep = $data->prep;
				$tamp = $data->tamp;
				$pesp = $data->pesp;
				$matp = $data->matp;
				$imgp = $data->imgp;
				$prop = $data->prop;
				$catp = $data->catp;
			    
			    $qry = "UPDATE productos SET nombrep='$nomp', descripcionp='$descp', preciop='$prep', tamanhop='$tamp', pesop='$pesp', imagenp='$imgp', materialp='$matp', idpr='$prop', idc='$catp' WHERE idp='$idp'";
			    $qry_res = mysqli_query($mysqli, $qry);
			    if ($qry_res) {
			        echo "ok";
			    } else {
			        echo "error";
			    }
			}
			else{
				if($_GET['action']=="delete"){
					$data = json_decode(file_get_contents("php://input"));     
				    $idp = $data->idp;     
				    $del = mysqli_query($mysqli, "DELETE FROM productos WHERE idp ='$idp'");
				    if($del)
				    	echo "ok";
				    else
				    	echo "error";    
				}
			}
		}
	}
?>
