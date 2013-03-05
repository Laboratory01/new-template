jQuery(document).ready(function($){
	$("#ct_state").change(function(){
		var region = $(this).find(":selected").val(),
			$cities = $("#wc_city");
		$cities.children().remove();
		$.ajax({
			url:'/templates/jblank/php/select_city.php',
			type:'GET',
			data:{'region':region},
			dataType:'json',
			cache:false,
			success:function(response){
				
				console.log('remove'+$cities.children());	
				$.each(response, function(key, item) {
					console.log(item);
					$cities.append("<option value="+item.value+">"+item.name+"</option>");

				});

			},
			error:function(jxhr){
				console.log(jxhr.responseText);
			}
		});
	});
	
});