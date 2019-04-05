<?
include '../inc/connect.php';

$stdname = $_POST['stdname'];
$kor =  $_POST['kor'];
$eng = $_POST['eng'];
$math = $_POST['math'];

$sql = " INSERT INTO score SET kor=$kor, eng=$eng, math=$math, stdname='$stdname' ";
mysqli_query($conn, $sql);
?>
<meta charset="utf-8">
<script>
alert("점수가 저장되었습니다.");
location.href = 'score.php';
</script>