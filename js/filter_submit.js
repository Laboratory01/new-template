jQuery(document).ready(function($){
	$('#seblod_form').change(function(){
		$.ajax({
			url: $('#seblod_form').attr('action'),  
			type:'GET',
			data: $('#seblod_form').serialize()
		});

	});
});