<?php
$nama = isset($_POST['nama']) ? trim(htmlentities($_POST['nama'])):'';
$komentar = isset($_POST['komentar']) ? trim(htmlentities($_POST['komentar'])):'';
/* untuk menampung variabel post dari captcha google adalah g-recaptcha-reponse */
$captcha = isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response']:'';

$secret_key = '6LfdIzUUAAAAAL0-45Av003PLuIA4bqfZtILncKj'; //masukkan secret key-nya berdasarkan secret key masig-masing saat create api key nya
$error = 'Gagal kirim form: periksa nama, komentar dan captcha nya';
if ($captcha != '' && $nama != '' && $komentar != '') {
   $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secret_key) . '&response=' . $captcha;   
   $recaptcha = file_get_contents($url);
   $recaptcha = json_decode($recaptcha, true);
   if (!$recaptcha['success']) {
	  echo $error;
   } else {
      echo 'Nama Anda : '.$nama.'<br>Komentar Anda : '.$komentar;
   }
} else {
   echo $error;
}
