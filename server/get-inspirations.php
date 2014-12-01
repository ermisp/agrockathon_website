<?php
	$servername = "";
	$username = "";
	$password = "";
	$database = "";


	if (!$link = mysql_connect($servername, $username, $password)) {
	    echo 'Could not connect to mysql';
	    exit;
	}

	if (!mysql_select_db($database, $link)) {
	    echo 'Could not select database';
	    exit;
	}

	$sql    = 'SELECT title, body, media FROM inspirations ORDER BY date DESC';
	$result = mysql_query($sql, $link);

	if (!$result) {
	    echo "DB Error, could not query the database\n";
	    echo 'MySQL Error: ' . mysql_error();
	    exit;
	}

	while ($row = mysql_fetch_assoc($result)) {
	    print_r($row);
	}

?>