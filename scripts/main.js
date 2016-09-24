$(document).ready(function() {
	// step 1 hide tweet controls
	$('#tweet-controls').hide();
	$('.tweet-actions').hide();
	$('.stats').hide();
	$('.reply').hide();

	// show Tweet controls
	$('#tweet-content').on('click', function(){
		$('#tweet-controls').show();
		$('.tweet-compose').animate({height:'5em'}, 500);

	});

	// monitor keystrokes
	$('.tweet-compose').keyup(function(){
	    var kCounter = 140 - ($(this).val().length);
	    $('#char-count').html(kCounter);
	    //change characters to red
	    if(kCounter > 10){
	    	$('#char-count').css('color','#999');
		} 
		else{
			$('#char-count').css('color','red');
		}
		//disable tweet button
		if(kCounter <= 0){ 
			$("#tweet-submit").prop("disabled", true);
		}else {$("#tweet-submit").prop("disabled", false);}
	});
	
	//append tweet to stream

	$('#tweet-submit').click(function(){
		
		$('#stream').prepend('<div class = "tweet" id = "new_tweet"></div>');
		$('#new_tweet').prepend('<div class = "content" id = "new_content"></div>');
		$('#new_content').prepend(	"<img class='avatar' src='img/alagoon.jpg' />" + 
									'<strong class="fullname">Big McLargehuge</strong>'+
									'<span class="username">@Big_McLargehuge</span>' +
									'<p class="tweet-text" id="new_tContent"></p>'
				);
		var filler1 = $('.tweet-compose').val();
		$('#new_tContent').append(filler1);
	});
	
	//unhide tweet-actions
	
	// $('.content').hover(function(){
	// 	$($(this)).css("background-color", "green");
	// })
	
	$('.content').hover(function(){
		$($(this)).find('.tweet-actions').show();
	})
	$('.content').mouseleave(function(){
		$($(this)).find('.tweet-actions').hide();
	})


	$('.content').hover(function(){
		$($(this)).find('.stats').show();
	})
	$('.content').mouseleave(function(){
		$($(this)).find('.stats').hide();
	})


	$('.content').hover(function(){
		$($(this)).find('.reply').show();
	})
	$('.content').mouseleave(function(){
		$($(this)).find('.reply').hide();
	})


	


});