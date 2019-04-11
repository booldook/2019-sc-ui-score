/*
1. $("객체")		2. '<div>A</div>'			3. "id"			4. "idName"
5. "className"			6. {"display":"none"}			7. "display", "none"

append()						=>	$("객체").append('<div>A</div>');
appendTo()					=>	$('<div>A</div>').appendTo($("객체"));
prepend()						=>	$("객체").prepend('<div>A</div>');
prependTo()					=>	$('<div>A</div>').prependTo($("객체"));
html()							=>	$("객체").html('<div>A</div>');
empty()							=>	$("객체").empty();
remove()						=>	$("객체").remove();
css()								=>	$("객체").css({"display":"none", "opacity":0.5});
												$("객체").css("display", "none");
												var v = $("객체").css("display");
addClass()					=>	$("객체").addClass("className");
removeClass()				=>	$("객체").removeClass("className");
attr()							=>	var id = $("객체").attr("id");
												$("객체").attr("id", "idName");
data()							=>	var id = $("객체").data("id");
*/


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
	$(".wrap").prepend('<div class="box">prepend()</div>');
});
$("#bt_prepend2").click(function(){
	$('<div class="box">prependTo()</div>').prependTo($(".wrap"));
});
$("#bt_html").click(function(){
	$(".wrap").html('<div class="box">html()</div>');
});
$("#bt_empty").click(function(){
	$(".wrap").empty();
});
$("#bt_remove").click(function(){
	$(".wrap").remove();
});
