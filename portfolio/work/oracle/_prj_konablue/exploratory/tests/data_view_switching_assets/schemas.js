row_schema_1 = function(obj) {
	var row = document.createElement("tr");
	
	var cell1 = document.createElement("td");
	var img1 = document.createElement("img");
	img1.src = "./data_view_switching_assets/icn_" + obj.item_icon + ".png";
	cell1.appendChild(img1);
	
	var cell2 = document.createElement("td");
	var text2 = document.createTextNode(obj.item_name);
	cell2.appendChild(text2);
	
	var cell3 = document.createElement("td");
	var text3 = document.createTextNode(obj.item_created);
	cell3.appendChild(text3);
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);
	
	return (row);
}


row_schema_2 = function(obj) {
	var row = document.createElement("tr");
	
	var cell1 = document.createElement("td");
	var img1 = document.createElement("img");
	img1.src = "./data_view_switching_assets/icn_" + obj.item_icon + ".png";
	cell1.appendChild(img1);
	
	var cell2 = document.createElement("td");
	var link2 = document.createElement("a");
	link2.href = obj.item_link[0].url;
	link2.title = obj.item_link[0].title;
	var text2 = document.createTextNode(obj.item_name);
	link2.appendChild(text2);
	cell2.appendChild(link2);
	
	var cell3 = document.createElement("td");
	var text3 = document.createTextNode(obj.item_created);
	cell3.appendChild(text3);
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);
	
	return (row);
}
	

div_schema_1 = function(obj) {
	var div = document.createElement("div");
	div.className = "sample";
	
	var img1 = document.createElement("img");
	img1.src = "./data_view_switching_assets/icn_" + obj.item_icon + ".png";
	img1.width = "50";
	div.appendChild(img1);
	
	var para2 = document.createElement("p");
	var text2 = document.createTextNode(obj.item_name);
	var link2 = document.createElement("a");
	link2.href = obj.item_link[0].url;
	link2.title = obj.item_link[0].title;
	var text2 = document.createTextNode(obj.item_name);
	link2.appendChild(text2);
	para2.appendChild(link2);
	div.appendChild(para2);
			
	return (div);
}
