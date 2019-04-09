// Ajax Error 콜백
function err(xhr, status, error) {
	console.log(xhr);
	console.log(status);
	console.log(error);
}
// Ajax 성적 리스트 콜백
function getScore(res) {
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
		html += '<td>';
		html += '<i onclick="delData(this);" class="fas fa-trash-alt pointer" data-id="'+std[i].id+'"></i> ';
		html += '<i onclick="upData(this);" class="fas fa-wrench pointer" data-id="'+std[i].id+'"></i> ';
		html += '</td>';
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
/*
url: "",								//문자열							=> 통신할 대상
type: "",								//문자열							=> get/post
dataType: "",						//문자열							=> json, xml, html, txt
data: {},								//자바스크립트 객체  => 보낼 데이터
success: function(){},	//함수								=> 함수를 보내고, 통신이 성공하는 시점에서 실행시킨다.
error: function(){}			//함수								=> 함수를 보내고, 통신이 실패하는 시점에서 실행시킨다.
*/
$("#bt_save").click(function(){
	var option = {
		url: "score_in.php",
		type: "post",
		dataType: "json",
		data: {
			stdname: $("#stdname").val(),
			kor: $("#kor").val(),
			eng: $("#eng").val(),
			math: $("#math").val()
		},
		success: function(res){
			console.log(res);
			if(res.code == 200) getList();
			else alert("데이터 처리에 문제가 있습니다.\n잠시후 다시 시도해 주세요.");
		},
		error: err
	};
	$.ajax(option);
});

// 성적 삭제하기
function delData(obj) {
	var id = $(obj).data("id");
	console.log(id);
}

// 성적 수정하기
function upData(obj) {

}
