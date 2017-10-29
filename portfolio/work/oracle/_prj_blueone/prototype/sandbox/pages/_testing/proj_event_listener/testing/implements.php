<html>
<head>
<script type="text/javascript">

function implement(src_class, dest_class) {
	for (k in src_class) {
		if ((k in dest_class) === false) {
			alert("class does not implement " + k);
			//dest_class[k] = src_class[k];
		}
	}
}


function ClassA() {
	alert("ClassA constructed");
}

ClassA.prototype = {	
	foo: function() {
		alert('fooey');
	},
	
	bar: function() {
		alert(this.baz);
	},
	
	baz: 5	
};



function ClassB() {
	alert("ClassB constructed");
	implement(new ClassA(), this);
}

ClassB.prototype = {
	baz: 7
};


function run() {
	var b = new ClassB();
	
	b.foo();
	b.bar();
	
}



</script>
</head>
<body onload="run();">
	
</body>
</html>