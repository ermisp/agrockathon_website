<?php

	switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
	        fetch();
	        break;
    }


	function fetch() {

		$servername = "localhost";
		$username = "agrockathon";
		$password = "pass";
		$database = "agrockatjq_db";

		$pdo=new PDO('mysql:dbname='.$database.';host='.$servername,$username,$password);

		$sql =  'SET NAMES utf8; SET CHARACTER SET utf8';
        
        $statement=$pdo->prepare($sql);
        $statement->execute();

        $sql =  'SELECT id, title, body, media FROM inspirations ORDER BY date DESC';
        
        $statement=$pdo->prepare($sql);
        $statement->execute();
        $results=$statement->fetchAll(PDO::FETCH_ASSOC);
        die(json_encode($results));
	}

?>