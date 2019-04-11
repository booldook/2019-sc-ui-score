$("#bt_show").on("click", function(){
	$("#box_s").stop().show(500);
});
$("#bt_hide").on("click", function(){
	$("#box_s").stop().hide(500);
});
$("#bt_toggle").on("click", function(){
	$("#box_s").stop().toggle(500);
});

$("#bt_fi").on("click", function(){
	$("#box_i").stop().fadeIn(500);
});
$("#bt_fo").on("click", function(){
	$("#box_i").stop().fadeOut(500);
});
$("#bt_ft").on("click", function(){
	$("#box_i").stop().fadeToggle(500);
});

$("#bt_sd").on("click", function(){
	$("#box_w").stop().slideDown(500);
});
$("#bt_su").on("click", function(){
	$("#box_w").stop().slideUp(500);
});
$("#bt_st").on("click", function(){
	$("#box_w").stop().slideToggle(500);
});

$("#bt_ani").click(function(){
	$("#box_d").stop().animate({"top":"250px"}, 500, function(){
		$(this).stop().animate({"top":0}, 500);
	});
});
$("#bt_cb").click(function(){
	var pos = $("#box_p").position().top;
	if(pos == 0) $("#box_p").stop().animate({"top":"250px"}, 500);
	else $("#box_p").stop().animate({"top":0}, 500);
});
$("#bt_cb2").click(function(){
	var r = $(this).parent().outerWidth() - 50;
	$("#box_p2").stop().animate({"left":r+"px"}, 2000, "swing", function(){
		$(this).stop().animate({"top":"+=150px"}, 500, "swing", function(){
			$(this).stop().animate({"left": 0}, 2000, "swing", function(){
				$(this).stop().animate({"top":"-=150px"}, 500, "swing");
			});
		});
	});
});