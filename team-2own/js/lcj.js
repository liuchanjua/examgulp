require(["jquery"],function($){
	$.ajax({
		url:"data/lcj_list.json",
		type:"post",
		dataType:"json",
		success:function(data){
			getAgent(data.result)
		},
		error:function(e){
			console.log(e)
		}
	})

	function getAgent(data){
		var str='';
		data.forEach(function(v,i){
			str+='<li>'+
					'<img src="images/'+v.img+'" alt="">'+
					'<p class="pic_t">'+v.title+'</p>'+
					'<p class="pic_st">'+v.small_t+'</p>'+
					'<p class="pic_dollar">'+v.dollar+'</p>'+
				'</li>' ;
		})

		$(".lcj_picMain").html(str)
	}

	

})