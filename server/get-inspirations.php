<?php

	switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
	        fetch();
	        break;
    }


	function fetch() {

		$servername = "";
		$username = "";
		$password = "";
		$database = "";

		$pdo=new PDO('mysql:dbname='.$database.';host='.$servername,$username,$password);
        $sql = "SELECT title, body, media FROM inspirations ORDER BY date DESC";
        
        $statement=$pdo->prepare($sql);
        $statement->execute();
        $results=$statement->fetchAll(PDO::FETCH_ASSOC);
        die(json_encode($results));
	}

?>