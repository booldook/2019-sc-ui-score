<?
$title = '성적관리프로그램';
$css = 'score.css';
$js = 'score.js';
include '../inc/connect.php';
include '../inc/header.php';
?>
<div class="container">
	<div class="jumbotron">
		<h2>성적관리프로그램</h2>
	</div>
	<div class="score_in">
		<div class="form-group">
			<form action="score_in.php" name="form_score" method="post">
				<ul>
					<li><input type="text" name="stdname" class="form-control" placeholder="이름"></li>
					<li><input type="number" min="0" max="100" name="kor" class="form-control" placeholder="국어"></li>
					<li><input type="number" min="0" max="100" name="eng" class="form-control" placeholder="영어"></li>
					<li><input type="number" min="0" max="100" name="math" class="form-control" placeholder="수학"></li>
					<li>
						<button type="submit" class="btn btn-primary" id="bt_save">저장</button>
						<button type="button" class="btn btn-warning">취소</button>
					</li>
				</ul>
			</form>
		</div>
	</div>
	<table class="table table-bordered table-hover table-striped text-center">
		<thead>
			<tr>
				<th>번호</th>
				<th>이름</th>
				<th>국어</th>
				<th>영어</th>
				<th>수학</th>
				<th>평균</th>
			</tr>
		</thead>
		<tbody>
			<?
			$sql = " SELECT * FROM score ORDER BY id DESC ";
			$result = mysqli_query($conn, $sql);
			while($rs = mysqli_fetch_array($result)) {
				$avg = round(	( (int) $rs['kor'] + (int) $rs['eng'] + (int) $rs['math'] )	/ 3, 2);
			?>
			<tr>
				<td><?=$rs['id']?></td>
				<td><?=$rs['stdname']?></td>
				<td><?=$rs['kor']?></td>
				<td><?=$rs['eng']?></td>
				<td><?=$rs['math']?></td>
				<td><?=$avg?></td>
			</tr>
			<? } ?>
		</tbody>
	</table>
</div>
<? include '../inc/footer.php';?>