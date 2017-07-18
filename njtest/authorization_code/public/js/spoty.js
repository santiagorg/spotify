(function($){
	var $btn = $('#button');
	var $artist = $('#artist');

	$btn.on('click', function(){
		$artist.load('https://api.spotify.com/v1/search?type=artist&query=SEARCHTERM', completeFunction);
	});

	function completeFunction(responseText,textStatus, request){
		$artist.css('border','1px solid pink');
		console.log(request);
		if(textStatus === 'error'){
			$artist.text('Error al mostrar artista'+request.status+' '+request.statusText);
		}
	}

})(jQuery);
