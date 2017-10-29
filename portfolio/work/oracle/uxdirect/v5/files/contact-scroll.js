	 $(function () {
		 $('#scrlBotm').click(function () {
			 $('html, body').animate({
				 scrollTop: $(document).height()
			 },
			 1500);
			 return false;
		 });
		 $('#scrlTop').click(function () {
			 $('html, body').animate({
				 scrollTop: '0px'
			 },
			 1500);
			 return false;
		 });
	 });