<?php
	include('config.php');
	$query="SELECT c.idc, c.nombrec FROM categoria c WHERE c.estadoc='1' ORDER BY c.idc";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$arr = array();
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$arr[] = $row;	
		}
	}
	# JSON-encode the response
	$json_response = json_encode($arr);

	// # Return the response
	echo $json_response;
?>
