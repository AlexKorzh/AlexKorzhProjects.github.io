<?php
@ini_set('display_errors', false);
@ini_set('html_errors', false);

$i=0;
foreach ($_REQUEST as $value=>$name)
{
if (is_array($_REQUEST[$value]))
{
$i++;
foreach ($_REQUEST[$value] as $exit=>$exitname)
{
	$i++;
}
}
}
function convert_unicode($t, $to = 'windows-1251') {

	$to = strtolower( $to );

	if( $to == 'utf-8' ) {

		return $t;

	} else {

		if( function_exists( 'mb_convert_encoding' ) ) {

			$t = mb_convert_encoding( $t, $to, "UTF-8" );

		} elseif( function_exists( 'iconv' ) ) {

			$t = iconv( "UTF-8", $to . "//IGNORE", $t );

		} else $t = "The library iconv AND mbstring is not supported by your server";

	}

	return $t;
}

if ($i>=1)
{
define ( 'ROOT_DIR', dirname ( __FILE__ ) );
///$count = file_get_contents(ROOT_DIR.'/count.txt');

$sendto = "sergey.gamal@gmail.com";
$subject  = "Заявка с LP AutoSteklo";

$headers = "From: Заявка с лэнда <sergey.gamal@gmail.com>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$name = $_POST['name'];
$forms = $_POST['forms'];
$date = time()+($config['date_adjust']*60);;

foreach ($_REQUEST as $value=>$name)
{
if (is_array($_REQUEST[$value]))
{
foreach ($_REQUEST[$value] as $exit=>$exitname)
{

$exitform .=
<<<HTML
<br />
{$exit}: <b>{$exitname}</b>
HTML;
}
}
}

$msg  = "<b><div align='center'>";
$msg  .= $forms;
$msg  .= "</div></b>";
$msg  .= $exitform;

mail($sendto, $subject, $msg, $headers);
echo 'Заявка отправлена,
дождитесь нашего звонка';
//header( 'Location: ../sendok.php' );
/*
?>

<html>
<meta name="robots" content="noindex,nofollow">
<head>
<script language="javascript">
<!-- Old browser shield
window.location.href="../sendok.php";
// -->
</script>
</head>
<body>
</body>
</html>
<?
*/
}
?>