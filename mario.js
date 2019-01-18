$(document).ready(function(){
  $(document).keydown(function(event){
  	 event.originalEvent.preventDefault()
  	 console.log(event);
  	if(event.which == 38)
  	{
  		$('.sprite').addClass('jumping');
  		$('.sprite').on("animationend",function (event) {
  			$('.sprite').removeClass('jumping');
  		});
  	}
  });
}); 
