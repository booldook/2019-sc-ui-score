$("#bt_list").click(function(){
	$.ajax({
		url: "./score_li.php",
		type: "post",
		dataType: "json",
		success: function(data) {
			var s = data.student;
			for(var i in s) {
				$(".table thead").append('<tr><td>'+s[i].stdname+'</td><td>'+s[i].kor+'</td><td>'+s[i].eng+'</td><td>'+s[i].math+'</td></tr>');
			}
		}
	});
});

