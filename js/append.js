$(".box").click(function(){
	alert("Hi~");
});
$("#bt_append").click(function(){
	var obj = $(".wrap").append('<div class="box">append()</div>');
	console.log(obj);
});
$("#bt_append2").click(function(){
	var obj = $('<div class="box">append()</div>').appendTo($(".wrap"));
	console.log(obj);
	obj.click(function(){
		alert("Hi2~~~");
	});
});
$("#bt_prepend").click(function(){
	
});
$("#bt_prepend2").click(function(){
	
});
$("#bt_html").click(function(){
	
});
$("#bt_empty").click(function(){
	
});
$("#bt_remove").click(function(){
	
});