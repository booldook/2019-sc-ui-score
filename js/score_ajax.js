// Ajax 옵션 설명
/*
url: "",								//문자열							=> 통신할 대상
type: "",								//문자열							=> get/post
dataType: "",						//문자열							=> json, xml, html, txt
data: {},								//자바스크립트 객체  => 보낼 데이터
success: function(){},	//함수								=> 함수를 보내고, 통신이 성공하는 시점에서 실행시킨다.
error: function(){}			//함수								=> 함수를 보내고, 통신이 실패하는 시점에서 실행시킨다.
*/

// jQuery each();
/*
	$td.each(function(i){
		if(i == 0) {
			html += '<td>'+$td.eq(i).html()+'</td>';
		}
		if(i == 1) {
			html += '<td><input type="text" class="stdname form-control" value="'+$td.eq(i).html()+'"></td>';
		}
		if(i >= 2 && i <= 4) {
			html += '<td></td>';
		}
		else {
			html += '<td></td>';
		}
	});
	*/

// insert, update, delete 완료 후 사용되는 콜백.
function callback(res) {
	if(res.code == 200) getList();
	else alert("데이터 처리에 문제가 있습니다.\n잠시후 다시 시도해 주세요.");
}

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
		html += '<button type="button" class="btn btn-success btn-sm" onclick="upData(this);" data-id="'+std[i].id+'">수정</button>&nbsp;';
		html += '<button type="button" class="btn btn-danger btn-sm" onclick="delData(this);" data-id="'+std[i].id+'">삭제</button>';
		//html += '<i onclick="delData(this);" class="fas fa-trash-alt pointer" data-id="'+std[i].id+'"></i> ';
		//html += '<i onclick="upData(this);" class="fas fa-wrench pointer" data-id="'+std[i].id+'"></i> ';
		html += '</td>';
		html += '</tr>';
		$(".score_tb tbody").append(html);
	}
}

// 성적 수정하기
// Iteration : Array, Object
function upData(obj) {
	var $tr = $(obj).parent().parent();
	var $td = $tr.children("td");
	$td.eq(1).addClass("up_el").html('<input type="text" class="stdname form-control" value="'+$td.eq(1).html()+'">');
	$td.eq(2).addClass("up_el").html('<input type="number" class="kor form-control" value="'+$td.eq(2).html().replace("점", "")+'"> 점');
	$td.eq(3).addClass("up_el").html('<input type="number" class="eng form-control" value="'+$td.eq(3).html().replace("점", "")+'"> 점');
	$td.eq(4).addClass("up_el").html('<input type="number" class="math form-control" value="'+$td.eq(4).html().replace("점", "")+'"> 점');
	$td.eq(5).html('');
	//console.log(n);
	$(obj).attr("onclick", "upSave(this);");
	$(obj).removeClass("btn-success").addClass("btn-info").html("적용");
}
function upSave(obj) {
	var $tr = $(obj).parent().parent();
	var id = $(obj).data("id");
	var stdname = $tr.find(".stdname").val();
	var kor = $tr.find(".kor").val();
	var eng = $tr.find(".eng").val();
	var math = $tr.find(".math").val();
	$.ajax({
		url: "./score_up.php",
		type: "post",
		dataType: "json",
		data: {
			id: id,
			stdname: stdname,
			kor: kor,
			eng: eng,
			math: math
		},
		success: callback,
		error: err
	});
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

// 신규성적 저장버튼 클릭시...
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
		success: callback,
		error: err
	};
	$.ajax(option);
});

// 성적 삭제하기
function delData(obj) {
	var id = $(obj).data("id");
	if(	confirm("정말로 삭제하시겠습니까?")	) {
		$.ajax({
			url: "./score_del.php",
			type: "post",
			dataType: "json",
			data: { id: id },
			success: callback,
			error: err
		});
	}
}


