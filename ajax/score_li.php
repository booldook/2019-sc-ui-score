<?
include '../inc/connect.php';

$sql = " SELECT * FROM score ORDER BY id DESC ";
$result = mysqli_query($conn, $sql);

$str = '{ "student" : [ ';
while($rs = mysqli_fetch_array($result)) {
	$str.= '{';
	$str.= ' "stdname": "'.iconv("UTF-8", "EUC-KR", $rs['stdname']).'", ';
	$str.= ' "kor": "'.$rs['kor'].'", ';
	$str.= ' "eng": "'.$rs['eng'].'", ';
	$str.= ' "math": "'.$rs['math'].'" ';
	$str.= '},';
}
$str = substr($str, 0, -1);
$str.= ' ] }';
echo $str;
?>