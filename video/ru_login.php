<?php
# Logging in with Google accounts requires setting special identity, so this example shows how to do it.
require 'openid.php';

try {
    # Change 'localhost' to your domain name.

    $openid = new LightOpenID('http://videobeseda.com');
    if(!$openid->mode) {
            $openid->identity = 'https://www.google.com/accounts/o8/id';
            header('Location: ' . $openid->authUrl());
		
    }elseif($openid->mode == 'cancel') {
        header('Location: http://videobeseda.com/ru.php');
    } else {
       
	if ($openid->validate()){
		$uid = substr($openid->identity,41);
		$key = md5("gg".$uid."qs5vbwersdfkkl21399l");

		setcookie('uid', $uid);
		setcookie('key', $key);

		header('Location: http://videobeseda.com/ru.php');
	}
    }
} catch(ErrorException $e) {
    echo $e->getMessage();
}
?>
