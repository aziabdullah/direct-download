<?php
function ippengunjung()
{
    
    $remote  = $_SERVER['REMOTE_ADDR'];
    $ip      = $remote;
    return $ip;
}
 
$user_ip = ippengunjung();
echo $user_ip; 
?>