function genAritcle(item){
	str = '<article> <a class="image"> <img src="images/gallery/my/'
		+ item[0]
		+ '.jpg" alt="" /> </a> <div class="caption"> <h3></h3> <p>'
		+ item[1]
		+ '</p> </div> </article>';
	return str;
}
$(function (){
	$('#Gallery0').html('');
	$('#Gallery1').html('');
	$('#Gallery2').html('');
	for(i=0;i<data.length;i+=3){
		$('#Gallery0').append(genAritcle(data[i]));
		if(i+1 < data.length)
			$('#Gallery1').append(genAritcle(data[i+1]));
		if(i+2 < data.length)
			$('#Gallery2').append(genAritcle(data[i+2]));
	}
	$("#Gallery0").simplyScroll({
		speed:3
	});
	$("#Gallery1").simplyScroll({
		direction:'backwards',
		speed:3
	});
	$("#Gallery2").simplyScroll({
		speed:3
	});
})

