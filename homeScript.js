var fade = function(){
	var images = ["teamPhoto.jpg"];
	for(count = 0; count < images.length; count++){
		document.getElementById("homePhoto").src = images[count];
		for(opacity = 0; opacity <= 1; opacity += 0.001){
			document.getElementById("homePhoto").opacity = opacity;
		}
	}
}