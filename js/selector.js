//html/text/val
/*
- Getter : 가져오기
var h = $(객체).html() : 객체 안의 html을 가져온다.
var t = $(객체).text() : 객체 안의 tag를 제외하고 text를 가져온다.
var v = $(form객체).val() : form요소의 value값을 가져온다.
- Setter : 저장(적용)하기
$(객체).html('<h2>ㅎㅎㅎㅎ</h2>') : 객체 안의 html을 적용한다.
$(객체).text('ㅎㅎㅎㅎ') : 객체 안의 텍스트로 적용한다.
$(form객체).val() : form요소의 value값을 적용한다.
*/

$("#bt1").click(function(){
	//$(".console").html($(this).parent().prev().prev().html());
	//$(".console").html($("#box3").find("span").text());
	//$(".console").text($("#in1").val());
	$("#in1").val("홍길동");
});

$("#bt2").click(function(){
	var html = $("#in2").find("option:selected").text() + "---" + $("#in2").val();
	$(".console").html(html);
});

$("#bt3").click(function(){
	var cls = $(this).next().attr("class") + ' === ';
	cls += $(this).next().attr("id") + ' === ';
	cls += $(this).next().prop("tagName");
	$(".console").html(cls);
});
$("#bt4").click(function(){
	$(this).attr("class", "btn btn-danger");
	$("#in1").attr("value", "홍길순");
});