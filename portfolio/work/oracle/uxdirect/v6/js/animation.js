$(document).ready(function() {
	
	if (Modernizr.cssanimations) {
		
		$("#playthis").prepend('<a href="#">Watch</a> ')
		
		$("#scene-01").append('');
		
		$("#scene-02").append('');
 
  } 
	
	
		$("#playthis a").click(function() {
			
			$('#stageholder').hide();
			
	    var li = $('#animation li');

	    var delays = [1500,5000,3000,4000];

	    function sumPrev(array, index){
	        var sum = 0;
	        for(var i = 0; i < index; i++){
	            sum += array[i];
	        }
	        return sum;
	    }

	    li.each(function(i){
	        setTimeout(function($ele){
	            $ele.addClass("go").siblings().removeClass("go");
	        }, sumPrev(delays, i), $(this));
	    });
		return false;
	});

});///ENDERS GAME///


	
		

