<?php
	require("../vendor/autoload.php");
	

	$MailChimp = new \Drewm\MailChimp('e62c09670ddd090432b614828427f65b-us9');

	$result = $MailChimp->call('lists/subscribe', array(
				'id'                => 'e2e7d840aa',
                'email'             => array('email'=>'g_koul@hotmail.com'),
                'double_optin'      => false,
                'update_existing'   => true,
                'replace_interests' => false,
                'send_welcome'      => false,
            ));

	print_r($result);
?>