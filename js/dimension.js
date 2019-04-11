$("button").click(function(){
	var html  = '<li>w:150 / b:10 / p:15 / m:30 / t:50 / l:300</li>';
	html += '<li>Box - width: '							+ $("#box").width()+'(패딩/보더빼고)</li>';
	html += '<li>Box - innerWidth: '				+ $("#box").innerWidth()+'(보더빼고)</li>';
	html += '<li>Box - outerWidth: '				+ $("#box").outerWidth()+'(보더포함)</li>';
	html += '<li>Box - outerWidth(true): '	+ $("#box").outerWidth(true)+'(마진포함)</li>';
	html += '<li>Box - position().top: '		+ $("#box").position().top+'(부모로부터 거리)</li>';
	html += '<li>Box - position().left: '		+ $("#box").position().left+'(부모로부터 거리)</li>';
	html += '<li>Box - offset().top: '			+ $("#box").offset().top+'(Body로부터 거리)</li>';
	html += '<li>Box - offset().left: '			+ $("#box").offset().left+'(Body로부터 거리)</li>';
	$(".console").html(html);
});