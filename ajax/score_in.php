<?
include '../inc/connect.php';

$stdname = $_POST['stdname'];
$kor =  $_POST['kor'];
$eng = $_POST['eng'];
$math = $_POST['math'];

$sql = " INSERT INTO score SET kor=$kor, eng=$eng, math=$math, stdname='$stdname' ";

mysqli_query($conn, $sql);

$id = mysqli_insert_id($conn);

$str = '{ "code": 200 }';
echo $str;
?>
