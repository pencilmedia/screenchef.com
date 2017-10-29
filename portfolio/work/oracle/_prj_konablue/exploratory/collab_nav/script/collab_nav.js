		var fade_timer = null;
		var scroll_timer = null;
	
		function fadeIn(obj_name, val) {
			if (val == null) {val = 0;}
			if (val < 100) {
				val = val + 10;
				setOpactiy(obj_name, val);
				fade_timer = setTimeout(function() { fadeIn(obj_name, val); }, 50);
			} else {
				if (fade_timer) { clearTimeout(fade_timer); }
				fade_timer = setTimeout(function() { fadeOut(obj_name, val); }, 2500);
			}
		}
		
		function fadeOut(obj_name, val) {
			if (val == null) {val = 100;}
			if (val > 0) {
				val = val - 10;
				setOpactiy(obj_name, val);
				fade_timer = setTimeout(function() { fadeOut(obj_name, val); }, 50);
			} else {
				if (fade_timer) { clearTimeout(fade_timer); }
			}
		}
	
		function setOpactiy(obj_name, val) {
			var tgt = document.getElementById(obj_name);
			if (tgt.style.opacity) {
				tgt.style.opacity = val/100;
			} else if (document.all && document.getElementById) {
				tgt.style.filter = "alpha(opacity=" + val + ")";
			}
		}
		
		
		function scrollIn(obj_name, val) {
			var tgt = document.getElementById(obj_name);
			if (val == null) { val = parseInt(tgt.style.left); }
			if (val > 0) {
				val = val - 10;
				tgt.style.left = val + "px";
				scroll_timer = setTimeout(function() { scrollIn(obj_name, val); }, 50);
			} else {
				if (scroll_timer) { clearTimeout(scroll_timer); }
				scroll_timer = setTimeout(function() { scrollOut(obj_name, val); }, 2750);
			}
		}
		
		
		function scrollOut(obj_name, val) {
			var tgt = document.getElementById(obj_name);
			if (val == null) { val = parseInt(tgt.style.left); }
			var parent = tgt.parentNode;
			// Hack
			// var max_width = parseInt(parent.style.width);
			var max_width = 160;
			if (val < max_width) {
				val = val + 10;
				tgt.style.left = val + "px";
				scroll_timer = setTimeout(function() { scrollOut(obj_name, val); }, 50);
			} else {
				if (scroll_timer) { clearTimeout(scroll_timer); }
			}
		}
		
		function show (details_name) {
			var tgt = document.getElementById(details_name);
			tgt.className = "showme";
		}
		
		function hide (details_name) {
			var tgt = document.getElementById(details_name);
			tgt.className = "hideme";
		}