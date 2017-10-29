createSwitcher = function(obj) {
	switch(obj.value) {
		case 'image':
			var result = createImage(obj.data[0]);
			break;
		case 'link':
			var result = createLink(obj.data[0]);
			break;
		case 'text':
			var result = createText(obj.data);
			break;
		case 'mixed':
			var result = document.createElement("span");
			for (var i=0; i<obj.data.length; i++) {
				result.appendChild(createSwitcher(obj.data[i]));
			}
			break;
	}
	if (result) {
		return result;
	} else {
		return false;
	}
}

createImage = function(data) {
	var img = document.createElement("img");

	if (data.src) {
		img.src = data.src;
	}
	
	if (data.alt) {
		img.alt = data.alt;
	}

	return (img);
}

createLink = function(data) {
	var link = document.createElement("a");

	if (data.href) {
		link.href = data.href;
	}
	
	if (data.title) {
		link.title = data.title;
	}
	
	if (data.value) {
		var result = createSwitcher(data);
		link.appendChild(result);
	}

	return (link);
}

createText = function(data) {
	var text = document.createTextNode(data);
	return (text);
}