<html>
<head>
<script type="text/javascript">

	
	/*
		A sample object class
	*/
	function testObject() {
		/* private obj construction */
		this._obj = document.createElement("div");
		this._obj.className = "test_div";
		this._innerObj = document.createElement("div");
		this._innerObj.className = "test_inner";
		this._obj.appendChild(this._innerObj);
		

		/* private demo alerter */
		this._alert = function(evt, evt_obj, root_obj) {
			alert(evt_obj.innerHTML);
		}
		
		/* private demo function that will show how the parent was gotten */
		this._alertParent = function(evt, evt_obj, root_obj) {
			var str = "";
			var parent = root_obj.getRootObject();
			str += "The object clicked is: " + evt_obj + "\n";
			str += "And has the classname: " + evt_obj.className + "\n";
			str += "The root object is: " + root_obj + "\n";
			str += "The root parent of the object clicked is: " + parent + "\n";
			str += "And has the classname: " + parent.className + "\n";
			alert(str);
		}
		
		/* public retrieval of the object */
		this.getRootObject = function() {
			return this._obj;
		}
		
		/* public method to set the string */
		this.setStr = function(str) {
			this._innerObj.innerHTML = str;
		}
		
		/* public method to attach the private event */
		this.attachAlert = function() {
			addEvent(this._innerObj, "click", associateEvent(this, "_alert"), false);
		}
		
		/* public method to attach the private event */
		this.attachAlertParent = function() {
			addEvent(this._innerObj, "click", associateEvent(this, "_alert"), false);
			addEvent(this._innerObj, "click", associateEvent(this, "_alertParent"), false);
		}
	}


	/*
		A function to register events, supports multiple events for browsers with a stack
	*/
	function addEvent(elem, event_name, callback, bool_capture) {
		if (elem.addEventListener) {
			elem.addEventListener(event_name, callback, bool_capture);
			return true;
		} else if (elem.attachEvent) {
			var result = elem.attachEvent('on' + event_name, callback);
			return (result);
		} else {
			elem['on' + event_name] = callback;
		}
	}

	/*
		A function to associate events with class member objects
	*/
	function associateEvent (obj, methodName) {
		return(function(e) {
			e = e || window.event;
			return obj[methodName](e, this, obj);
		});
	}

	/*
		This is just for the demo, to set up the page
	*/
	function addSomeDivs() {
		var tgt = document.getElementById("content");
		var obj1 = new testObject();
		var obj2 = new testObject();
		var obj3 = new testObject();
		
		tgt.appendChild(obj1.getRootObject());
		tgt.appendChild(obj2.getRootObject());
		tgt.appendChild(obj3.getRootObject());
		
		obj1.setStr("This will be clickable");
		obj1.attachAlert();
		
		obj2.setStr("This will NOT be clickable");
		
		obj3.setStr("But, this will tell you the parent, and this text");
		obj3.attachAlertParent();
	}
</script>

<style type="text/css">
	div.test_div {
		width: 300px;
		height: 300px;
		margin: 10px;
		border: 1px solid #666;
		background: #eee;
		padding: 10px;
		float: left;
	}
	div.test_inner {
		margin: 10px;
		border: 1px solid #666;
		background: #ccc;
		padding: 10px;
		height: 260px;
	}
</style>

</head>
<body onload="addSomeDivs();">

<div id="content"></div>

</body>
</html>