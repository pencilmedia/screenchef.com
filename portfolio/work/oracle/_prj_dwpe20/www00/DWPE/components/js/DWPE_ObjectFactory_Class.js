/*DWPE_Object_Factory_Class*/

function DWPE_ObjectFactory_Class()
	{
		this.queue=new Array();
		this.timer=null;
		this.performanceMonitoringOn=false;
	}
var DWPE_ObjectFactory=new DWPE_ObjectFactory_Class();

DWPE_ObjectFactory_Class.prototype.add=function(work_items)
	{
		//var _this=this;
		//$.merge(this.queue,work_items);
		this.queue=work_items;
		this.qty=this.queue.length;
		
		this.processQueue();
		//if(this.timer==null)
		//	this.timer=setInterval(function(){_this.processQueue();},1);
	}

DWPE_ObjectFactory_Class.prototype.processFragment=function($fragment)
{
	this.add($fragment.find(":dwpe"));
}

DWPE_ObjectFactory_Class.prototype.processPage=function()
{
	this.add($(":dwpe"));

	
}
	
DWPE_ObjectFactory_Class.prototype.processQueue=function()
	{

	this.queue.each(
	
		function()
		{
			//get our next ux stub
			var $parent=$(this);
		
		
			var _class=$parent.attr("class").toLowerCase();
				_class=_class.split(" ");
				_class=_class[0]; //pick off the first value in the css class and use it to make our class
				
			
			switch(_class)
			{
				case 'dwpe-radiogroup':
				case 'dwpe-checkbox':
				case 'dwpe-prompt':
				case 'dwpe-textarea':
				case 'dwpe-textbox':
				case 'dwpe-fileupload':
				case 'dwpe-link':
				
					/*no post processing required*/
					break;
				case 'dwpe-table':
					DWPE_TableFactory.make($parent);	
					break;
				case 'dwpe-tree':
					DWPE_TreeFactory.make($parent);	
					break;
				case 'dwpe-menu':
					DWPE_WindowFactory.make($parent);
					break;
				case 'dwpe-singleselectchoicelist':
				case 'dwpe-spinbox':
				case 'dwpe-multiselectchoicelist':
				case 'dwpe-multiselectlistbox':
				case 'dwpe-datetimepicker':
				case 'dwpe-lov':
					DWPE_FormFactory.make($parent);
					break;
				case 'dwpe-horizontal-splitter':
				case 'dwpe-vertical-splitter':
				case 'dwpe-accordion':
				case 'dwpe-tabset':
				case 'dwpe-trainset':
				case 'dwpe-header':
				case 'dwpe-subheader':
				case 'dwpe-subsubheader':

					DWPE_PanelFactory.make($parent);
					break;
					
				case 'dwpe-carousel':
				    DWPE_Carousel.make($parent);
					break;
				
				case 'dwpe-toolbar':
					DWPE_Toolbar.make($parent);	
					break;
				
				case 'dwpe-button':
				case 'dwpe-overflow-btn':
				case 'dwpe-toolbar-resize':
				
					/*no post processing required*/
					break;
				
				case 'dwpe-window-container':
					DWPE_WindowFactory.make($parent);
					break;
				default:			
					
					//console.log($parent)
					var args=ux_data[$parent.attr("id")];
					
					//call make on our main class, passing in the metadata, returning a new object
					var obj=DWPE.make(args);
					
					//set the DOM parent of our test object 
					obj.parent=$parent;
					
					//ask our test object to render to screen
					obj.render();
					
					
					
					break;
					
					
			}
			
			
			
		}
	
	)
	
	
	clearInterval(this.timer);
	if(this.performanceMonitoringOn==true) this.postPerformanceMonitoringResults();
	
	setTimeout(function(){DWPE_Utilities.triggerResize()},100);	

	/*
	if(this.queue.length==0)
		{
			clearInterval(this.timer);
			if(this.performanceMonitoringOn==true) this.postPerformanceMonitoringResults();
		}
		else
		{
			//get our next ux stub
			$parent=$(this.queue.shift());
		
			//call make on our main class, passing in the metadata, returning a new object
			var obj=DWPE.make(ux_data[$parent.attr("id")]);
			
			//set the DOM parent of our test object 
			obj.parent=$parent;
			
			//ask our test object to render to screen
			obj.render();
			
		}
		*/
		
	}	
	
DWPE_ObjectFactory_Class.prototype.startPerformanceMonitoring=function()
{
	this.performanceMonitoringOn=true;
	performanceMonitorBusy=true;
	this.start=new Date().getTime();
}

DWPE_ObjectFactory_Class.prototype.postPerformanceMonitoringResults=function()
{
	
	
	this.end=new Date().getTime();
	var elapsed=this.end-this.start;
	storeData(elapsed,this.qty);
	
	
	var msg= "<p>Time to make " + this.qty + " object(s) was "+ elapsed + " ms</p>";
	$("#time-to-execute").append(msg);
	
	
	this.performanceMonitoringOn=true;
	performanceMonitorBusy=false;
	
	
	
	
	var json_string=$("#metadata").val();
	
	
	if(json_string.length==0) return;
	
	//update property settings from metadata
	 updatePropertySettings(json_string);
	
	
	

	
}










var lapsedTimes=new Array();
var quants=new Array();   


/*Performance Monitor runs a battery of object creation tests
  to determine how performant the code is */
var performanceMonitorBusy=false;
var performanceTests=[10,20,30,40,50];
var performanceTestStep=0;
var performanceMonitor;
var performanceMonitorMessages="";



function runPerformanceTest()
{

	$(":input").each(
	
		function(i)
		{
			$(this).attr("disabled","disabled");
		}
	)
	
	$("#time-to-execute").empty();
	performanceTestStep=0;
	performanceMonitorMessages="";
	performanceMonitor=setInterval(_performTest,1000);	
}

/* step through test, instantiating metadata the 
   number of times requested by the test step and
   graphing result */
function _performTest()
{
	if(performanceTestStep<performanceTests.length)
	{	
		if(performanceMonitorBusy==false)
		{
			$("#preview").empty();
			
			$("#qty").val(performanceTests[performanceTestStep++]);
					commitToPreview();
		}		
	}
	else
	{
		
		$(":input").each(
	
		function(i)
		{
			$(this).removeAttr("disabled");
		}
		);
		$("#qty").val(1);
		
		makeChart();
		clearInterval(performanceMonitor);
		//$("#time-to-execute").html(performanceMonitorMessages);
	}
	
}



/*store elapsed times and object quantities for use in charts*/
function storeData(t,q)
{
	lapsedTimes.push(t);
	quants.push(q);
	

}

/*calls the google chart api to draw a performance graph*/
function makeChart()
{
	var quantities=quants.join(",");
	var values=lapsedTimes.join(",");
	$("#performance-chart")
		.html("<img src='http://chart.apis.google.com/chart?chs=200x125&cht=lc&chds=0,3000&chco=0077CC&chd=t:"+values+"'/>");

}


