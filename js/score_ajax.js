// Ajax Error 콜백
function err(xhr, status, error) {
	console.log(xhr);
	console.log(status);
	console.log(error);
}
// Ajax 성적 리스트 콜백
function getScore(res) {
	console.log(res);
	$(".score_tb tbody").empty();
	var std = res.student;
	for(var i in std) {
		var total = Number(std[i].kor) + Number(std[i].eng) + Number(std[i].math);
		var avg = Math.round(total/3);
		html 	= '<tr>';
		html += '<td>'+std[i].id+'</td>';
		html += '<td>'+std[i].stdname+'</td>';
		html += '<td>'+std[i].kor+'점</td>';
		html += '<td>'+std[i].eng+'점</td>';
		html += '<td>'+std[i].math+'점</td>';
		html += '<td>'+avg+'점</td>';
		html += '</tr>';
		$(".score_tb tbody").append(html);
	}
}


//성적 가져오기
getList();
function getList() {
	$("#stdname").val('');
	$("#kor").val('');
	$("#eng").val('');
	$("#math").val('');
	$.ajax({
		url: "score_li.php",
		type: "post",
		dataType: "json",
		error: err,
		success: getScore
	});
}

//성적 저장하기
$("#bt_save").click(function(){
	$.ajax({
		type: "post",
		url: "score_in.php",
		data: {
			stdname: $("#stdname").val(),
			kor: $("#kor").val(),
			eng: $("#eng").val(),
			math: $("#math").val()
		},
		dataType: "json",
		success: getList,
		error: err
	});
});

