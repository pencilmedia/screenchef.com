$(document).ready(function() {
	$("#uxd").zAccordion({
		tabWidth: "3%",
		width: "100%",
		height: "100%",
		auto: false,
		trigger: "click",
		invert:true,
		speed:500,
		startingSlide: 0
		});
	$(window).resize(function() {
		$("#uxd").height($(window).height());
		$("#uxd li").height($(window).height());
		$("#uxd img").height($(window).height());
	});


	$("#p1nav a.identify").click(function(){ $("#uxd").zAccordion("trigger", 1); return false; });
	$("#p1nav a.experiences").click(function(){ $("#uxd").zAccordion("trigger", 2); return false; });
	$("#p1nav a.resources").click(function(){ $("#uxd").zAccordion("trigger", 3); return false; });
});

