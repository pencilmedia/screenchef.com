'article aside footer header hgroup nav section time'.replace(/\w+/g,function(n){document.createElement(n)})


jQuery(window).ready(function(){
	initPanels();
	
	// Homepage Slider 
	var slideControllerHTML = "";
	var sControls = jQuery("li","#sControls")
	var rSlides = jQuery("ul.sSpot > li");
	var totalSlides = rSlides.size();
	var currentSlideNum = 0;

	rSlides.each(function(i){
	  slideControllerHTML += "<li class=\"slideNum\" id=\"rSlide"+(i+1)+"\"><a href=\"javascript:void(0);\">"+jQuery(this).attr('title')+"</a></li>"
	})
	// slideControllerHTML += "<li class=\"nextSlide\"></li>";
	jQuery("#sControls").html(slideControllerHTML)

	rSlides.first().addClass("active");
	currentSlideNum = 1;

	jQuery("li.slideNum","#sControls").click(function(){
		slide_id = jQuery(this).attr('id').substr(6);
		if(slide_id != currentSlideNum) {
			jQuery(this).parent().find(".active").removeClass("active")
			jQuery(this).addClass("active")
		  loadSlide(slide_id);
		}
	})

	goToNextSlide = function(){
	  if (currentSlideNum >= totalSlides) {
	    loadSlide(1);
	  } else {
	    loadSlide(parseInt(currentSlideNum) + 1)
	  }
	}

	function loadSlide(i) {
		// console.log("loadSlide(i) = "+i)
		sControls = jQuery("li","#sControls")
		sControls.parent().find(".active").removeClass("active");
		rSlides.parent().find(".active").fadeOut(400, function(){$(this).removeClass("active")})
		rSlides.eq(i-1).fadeIn(400, function(){$(this).addClass("active")});
		// console.log("\tLoading Slide "+i)
		currentSlideNum = i;
		sControls.eq(i-1).addClass("active");
		// console.log(sControls.eq(i))
		// console.log("\tcurrentSlideNum: "+currentSlideNum)
	}

	// loadSlide(1)
	//  Start first slide
	rSlides.first().addClass("active");
	jQuery("li","#sControls").eq(0).addClass("active");
	
	setInterval("goToNextSlide()",20000)

	$("body").click(function(){
		jQuery(".menuPullDown").hide();
		jQuery("li.pullDownLink","#xHeader nav").removeClass("active");
	});
	jQuery(".menuPullDown").click(function(e){
		e.stopPropagation();
	})

	// Set up tab dropdown menu
	jQuery("li.pullDownLink a","#xHeader nav").click(function(e){
		e.stopPropagation();
		currentLink = $(this);
		divToShow = currentLink.next();
		if(divToShow.css("display") == "none") {
			jQuery(".menuPullDown").hide()
			jQuery("li.pullDownLink").removeClass("active");
			currentLink.parent().addClass("active");
			divToShow.show();
		} else {
			currentLink.parent().removeClass("active");
			divToShow.hide();
		}

	})
	
	jQuery("a.cShowMoreLink").toggle(function(){
		jQuery("#showMore").slideDown(200);
		jQuery(this).text('Show Less');
	},
	function(){
		jQuery("#showMore").slideUp(200);
		jQuery(this).text('Show More');
	}
	)
	
	var currentregionid;
	var currentregionlink;
	jQuery("div.cOverviewSpotlightRegion div.cSubTabs ul li a, div.cSideSubTabs ul li a").click(function(){
		// hide other region if active and then show proper region
		if (currentregionid != null) {
			jQuery("#"+currentregionid).hide();
			currentregionlink.parent().removeClass("active");
		}
		currentregionlink = jQuery(this);
		currentregionid = currentregionlink.attr("id").substr(3);
		currentregionlink.parent().addClass("active")
		jQuery("#"+currentregionid).show();
	}).first().click();


	var current_service_id;
	var current_service_selector;
	
	jQuery("ul.selectService li a").click(function(){
		// hide other region if active and then show proper region
		if (current_service_id != null) {
			jQuery("#"+current_service_id).hide();
			current_service_selector.removeClass("active");
		}
		//jQuery('#selectServiceMessage').hide();
		current_service_selector = jQuery(this).parent();
		current_service_id = current_service_selector.attr("id").substr(4);
		current_service_selector.addClass("active")
		jQuery("#"+current_service_id).show();
	}).first().click();
	
	if (jQuery("html").hasClass("no-css3")) {
		jQuery("table.sCompare tbody td:nth-child(2n)").addClass("lightCol");
	} 


})

function openModal(xid) {
	modalid = xid;
	jQuery('#'+modalid).modal({
		opacity: 25,
		overlayCss: {backgroundColor:"#000"},
		overlayClose: true,
		autoResize: true,
		escClose: true,
		containerId: 'modalContainer',
		closeHTML: '<a href=\'javascript:void(0);\' class=\'modalCloseImg\'></a>'
	});
}

function isiPhone(){
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
}

function initModalVideos() {
	jQuery("a.modalVideoLink").click(function(e){
		if (isiPhone() == false) {
			e.preventDefault();
			link = jQuery(this);
			link_url = link.attr('href');
			video_id = link_url.substring(link_url.indexOf('=')+1);
			// alert(video_id);
			// var modal_video = '<object style="height: 390px; width: 640px"><param name="movie" value="http://www.youtube.com/v/'+video_id+'?version=3"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="http://www.youtube.com/v/'+video_id+'?version=3" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="360"></object>';
			var modal_video = '<iframe width="640" height="390" src="http://www.youtube.com/embed/'+video_id+'?rel=0" frameborder="0" allowfullscreen></iframe>'

			jQuery.modal(modal_video,{
				opacity: 50,
				overlayCss: {backgroundColor:"#000"},
				overlayClose: true,
				autoResize: true,
				escClose: true,
				persist: true,
				containerId: 'videoModalContainer',
				closeHTML: '<a href=\'javascript:void(0);\' class=\'modalCloseImg\'></a>'
			});
		}		
	})
	// jQuery.modal('<iframe class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/'+youtubeid+'" frameborder="0"></iframe>',{
	// 	opacity: 25,
	// 	overlayCss: {backgroundColor:"#000"},
	// 	overlayClose: true,
	// 	autoResize: true,
	// 	escClose: true,
	// 	containerId: 'videoModalContainer',
	// 	closeHTML: '<a href=\'javascript:void(0);\' class=\'modalCloseImg\'></a>'
	// });
}

function openModalVideo(vid) {
	youtubeid = vid;
	jQuery.modal('<iframe class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/'+youtubeid+'" frameborder="0"></iframe>',{
		opacity: 25,
		overlayCss: {backgroundColor:"#000"},
		overlayClose: true,
		autoResize: true,
		escClose: true,
		containerId: 'videoModalContainer',
		closeHTML: '<a href=\'javascript:void(0);\' class=\'modalCloseImg\'></a>'
	});
}

function thumbModal() {
	jQuery('a.thumbLink').click(function(e){
		e.preventDefault();
		img = jQuery(this).attr('href');
		jQuery('<img src="'+img+'" />').modal({
			// opacity: 25,
			// overlayCss: {backgroundColor:"#000"},
			overlayClose: true,
			autoResize: true,
			escClose: true,
			persist: true,
			containerId: 'thumbModalContainer',
			closeHTML: '<a href=\'javascript:void(0);\' class=\'modalCloseImg\'></a>'
		})
	})
}

function showPanel(xid) {
	panelid = xid;
	textPanel = jQuery('#'+panelid+'Text');
	link = jQuery('#'+panelid);
	
	jQuery(".whyOracle .woSection").hide();
	jQuery(".whyOracle .woHeader li").removeClass('active');
	
	if(jQuery('div.woSection ul.stepsList li:first-child').size() > 0) {
		jQuery('div.woSection ul.stepsList li:first-child').click();
	}
	
	
	// console.log(textPanel);
	textPanel.show();
	link.addClass('active');
}
function initPanels() {
	jQuery(".whyOracle .woSection").first().show();
	jQuery(".whyOracle .woHeader li:first-child").addClass('active')
}

function initStepsList() {
	jQuery("div.woSection ul.stepsList li").hover(function(){
		jQuery(this).addClass('hoverClass');
	}, function(){
		jQuery(this).removeClass('hoverClass');
	}).click(function(){
		currentitem = jQuery(this);
		// console.log(currentitem);
		currentitem.addClass('activeClass').siblings().removeClass('activeClass');
		itemtext = currentitem.find("div.descText").html();
		currentitem.parents("div.stepsList").next("div.stepsSide").html(itemtext);
	})
	jQuery('div.woSection ul.stepsList li:first-child').click();
}

function initDiagram() {
	jQuery("a.flowBox").click(function(){
		flowbox = jQuery(this);
		title = flowbox.find("h3").text();
		text = flowbox.find("div.descText").html()
		jQuery("a.flowBox").removeClass("active");
		flowbox.addClass("active");
		changebox = jQuery("#hiwSideText");
		changebox.find("h2").text(title);
		changebox.find("div#diagramText").html(text);
	});
}