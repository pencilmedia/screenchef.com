function Tasks() {
	/* 
		Member variables
	*/
	this._tasks = null;
	this._task_list_data = null;
	this._context_tasks = null;
	this._context_task_list_data = null;
	this._selected_task = null;

	this.create = function() {
		this._tasks = document.createElement("div");
		this._tasks.className = "tasks_inner";
	}

	this.getRootObject = function() {
		return (this._tasks);
	}
	
	this.createTaskList = function(data) {
		if (data) {
			this.removeTaskList();
		
			this._tasks.className = "tasks_inner " + data.task_class;
			this._task_list_data = data;
			
			this._task_list = document.createElement("ul");
			this._task_list.className = "task_list";
			this._task_list.id = "regular_task_list";

			cap = this._createTaskCap();
			this._task_list.appendChild(cap);
			
			var heading = this._createTaskHeading(data.task_heading);
			this._task_list.appendChild(heading);		

			cap = this._createTaskCap();
			this._task_list.appendChild(cap);

			for (var i=0; i<this._task_list_data.tasks.length; i++) {
				var task = this._createTask(this._task_list_data.tasks[i]);
				this._task_list.appendChild(task);
			}

			cap = this._createTaskCap();
			this._task_list.appendChild(cap);

			this._tasks.appendChild(this._task_list);
		}
	}
	
	this.createContextTaskList = function(data) {
		if (data) {
			this.removeContextTaskList();
			
			this._tasks.className = "tasks_inner " + data.task_class;
			this._context_task_list_data = data;
			
			this._context_task_list = document.createElement("ul");
			this._context_task_list.className = "task_list";
			this._context_task_list.id = "context_task_list";

			for (var i=0; i<this._context_task_list_data.tasks.length; i++) {
				var task = this._createTask(this._context_task_list_data.tasks[i]);
				this._context_task_list.appendChild(task);
			}
			
			if (this._tasks.firstChild) {
				this._tasks.insertBefore(this._context_task_list, this._tasks.firstChild);
			} else {
				this._tasks.appendChild(this._context_task_list);
			}
		}
	}
	
	this.removeTaskList = function() {
		if (document.getElementById("regular_task_list")) {
			this._tasks.removeChild(document.getElementById("regular_task_list"));
		}
	}
	
	this.removeContextTaskList = function() {
		if (document.getElementById("context_task_list")) {
			this._tasks.removeChild(document.getElementById("context_task_list"));
		}
	}

	this._createTaskCap = function() {
		var cap = document.createElement("li");
		cap.className = "cap";
		return(cap);
	}


	this._createTaskHeading = function(str) {
		var heading = document.createElement("li");
		heading.className = "heading";
		var heading_text = document.createTextNode(str);
		heading.appendChild(heading_text);
		return(heading);
	}


	this._createTask = function(data) {
		if (data.task_divider) {
			var task = document.createElement("li");
			task.className = "divider";
		} else {
			var task = document.createElement("li");
			var params = { src_obj:task, src_data:data };
			invo.event.addEvent(task, "click", invo.event.associateEvent(this, "_taskSelect", params), false);
			if (data.task_onclick) {
				invo.event.addEvent(task, "click", function() { eval(data.task_onclick); }, false);
			}
			invo.event.addEvent(task, "mouseover", invo.event.associateEvent(this, "_taskHighlight", params), false);
			invo.event.addEvent(task, "mouseout", invo.event.associateEvent(this, "_taskUnhighlight", params), false);
			var text = document.createTextNode(data.task_text);
			task.appendChild(text);
		}
		return (task);
	}



	this._taskHighlight = function(params) {
		if ((this._selected_task != null) && (this._selected_task == params.src_obj)) { return; }
		params.src_obj.className = "active";
	}

	this._taskUnhighlight = function(params) {
		if ((this._selected_task != null) && (this._selected_task == params.src_obj)) { return; }
		params.src_obj.className = "";
	}

	this._taskSelect = function(params) {
		if ((this._selected_task != null) && (this._selected_task == params.src_obj)) { return; }
		if ((this._selected_task != null) && (this._selected_task != params.src_obj)) {
			this._selected_task.className = "";
		}
		this._selected_task = params.src_obj;
		params.src_obj.className = "active";
	}

}