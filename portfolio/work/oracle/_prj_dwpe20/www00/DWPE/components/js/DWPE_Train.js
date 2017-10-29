/*generates markup for the trains that gets output to scratchpad*/
DWPE_PanelFactory.generateTrainsetMarkup=function(args)
{
	var markup = "";
	markup += '<ux class="dwpe-trainset';
	if (args.train_position) markup += ' ' + args.train_position;
	if (args.train_state) markup += ' ' + args.train_state;
	if (args.train_buttonbar) markup += ' ' + args.train_buttonbar;
	if (args.cmdTrainButtonSubmit) markup += ' button-bar-submit';
	if (args.cmdTrainButtonFinish) markup += ' button-bar-finish';
	if (args.cmdTrainButtonSave) markup += ' button-bar-save';
	if (args.cmdTrainButtonExit) markup += ' button-bar-exit';
	if (args.cmdTrainButtonCancel) markup += ' button-bar-cancel';
	if (args.train_process) markup += ' ' + args.train_process;
	markup += '" ';
	if (args.train_parent_url) markup += ' parentURL="' + args.train_parent_url + '" ';
	if (args.cmdTrainButtonSubmit) markup += ' onSubmit="' + args.cmdTrainButtonSubmit + '" ';
	if (args.cmdTrainButtonFinish) markup += ' onFinish="' + args.cmdTrainButtonFinish + '" ';
	if (args.cmdTrainButtonSave) markup += ' onSave="' + args.cmdTrainButtonSave + '" ';
	if (args.cmdTrainButtonExit) markup += ' onExit="' + args.cmdTrainButtonExit + '" ';
	if (args.cmdTrainButtonCancel) markup += ' onCancel="' + args.cmdTrainButtonCancel + '" ';

    markup += '>\r\n';
	markup += DWPE_PanelFactory_Class.generateTrainMarkup(args);
	markup += DWPE_PanelFactory_Class.generateTrainPanelMarkup(args);	
	markup+="</ux>\r\n";
	return markup;
}

DWPE_PanelFactory_Class.generateTrainMarkup = function(args)
{
	markup = "";
	markup+='	<ul class="dwpe-train">\r\n'; 
	for(var i in args.items)
	{
        var _class = '';
        var _tooltip = '';
		var item=args.items[i];
        var state = (item.state == '0') ? "disabled" : "";
        var icon = (item.icon == 'none') ? "" : item.icon;
        var required = (item.required_step == '1') ? "required" : "";
        var sequential_override =(item.sequential_override == '1') ? "sequential-override" : "";
        var allow_skip = (item.allow_skip == '1') ? "allow-skip" : "";
        var tooltip = (item.tooltip) ? item.tooltip : "";
		if (state || icon || required || sequential_override || allow_skip )
        {
            _class= ' class="';
            if (state) _class += state + ' ';
            if (icon) _class += icon + ' ';
            if (required) _class += required + ' ';
            if (sequential_override) _class += sequential_override + ' ';
            if (allow_skip) _class += allow_skip ;
            _class += '"';
        }
        if (tooltip)
        {
            _tooltip= ' tooltip="' + tooltip + '"';
		}
		markup+="\t\t\<li"+_class+_tooltip+">";
		markup+= item.label;
		markup+="</li>\r\n";
	}
	markup+="	</ul>\r\n";
	return markup;
}

DWPE_PanelFactory_Class.generateTrainPanelMarkup = function(args)
{
	markup="";
	markup+='\t<div class="dwpe-train-panels">\r\n';
	for(var i in args.items)
	{
		var item=args.items[i];
		if( item.content == "inline" )
		{
			markup+='\t\t<div>\r\n\t\t\t<h3>' + item.label + '</h3>' + '\r\n\t\t</div>\r\n';
		} else {
			markup+="\t\t<div content='"+ item.content +"'></div>\r\n";
		}
	}
	markup+="\t</div>\r\n";
	return markup;
}

DWPE_PanelFactory_Class.prototype.initializeTrainset = function ($ux) {
    //if we have a unique id, use it, otherwise make one
    var id = ($ux.attr("id")) ? $ux.attr("id") : DWPE_Utilities.getUniqueId();
    $ux.attr("id", id);

    //save our preferred size into $ux data object
    var size = "100%";
    $ux.data('size', size);

    //pick up the default train, if not defined, assign first train
    var default_train = $ux.attr("default_train");
    default_train = (default_train) ? default_train : 0;

    $ux.data("current-train", -1);

    $ux.data('allow-train-close', $ux.hasClass('allow-train-close'));

    //create a  container to hold our trains and toolbar on one line with  awareness
    var $container = $("<div class='train-container'>" +
						"<div class='left'></div>" +
						"<div class='right'></div>" +
					"</div>");

    //place trains to the left
    var $trains = $ux.find(">UL.dwpe-train:first");
    $container.find(">DIV.left").append($trains);

    //place toolbar to the right
    var $toolbar = $ux.find(">UX.dwpe-toolbar");
    if ($toolbar && $toolbar.length > 0)
    { $container.find(">DIV.right").append($toolbar); }
    else //no toolbar so give left all the width it can have
    {
        $container.find(">DIV.right").width("1%");
        $container.find(">DIV.left").width("99%");
    }

    //acquire a handle to all the train LIs in the trainset
    var $trains = $container.find('UL.dwpe-train>LI');

    //give each LI that this trainset owns its train class
    var stepNumber = 1;
    $trains.each(
		function (i) {
		    var $train = $(this);
		    $train.addClass("train-stop");
		    $train.attr('id', id + "-train-" + i);

		    if ($train.attr('tooltip')) {
		        $train.attr('title', $train.attr('tooltip'));
		    } else {
		        $train.attr('title', 'Step ' + stepNumber + ' of ' + $trains.length);
		    }

		    $train.data('index', i);
		    $train.click(
				function () { DWPE_PanelFactory_Class.showTrainPanel($ux, i); }
			);

		    var trainStopMarkup = '';
		    // var stopClass = 'normal';
		    trainStopMarkup += '<table><tr class="train-track">';
		    trainStopMarkup += '<td class="track"><div><span class=""></span></div></td>';
		    trainStopMarkup += '<td class="train-stop-icon">';
		    if (
				$train.hasClass('error') ||
				$train.hasClass('warning') ||
				$train.hasClass('complete') ||
				$train.hasClass('information')
				) {
		        trainStopMarkup += '<span></span>';
		    }
		    trainStopMarkup += '</td>';
		    trainStopMarkup += '<td class="track"><div><span class=""></span></div></td>';
		    trainStopMarkup += '</tr><tr>';
		    trainStopMarkup += '<td colspan="3" style="text-align:center; white-space:nowrap;" cellspacing="0" cellpadding="0">'

		    if ($train.hasClass('required')) // Add required step indicator
		    {
		        trainStopMarkup += '* ';
		    }

		    trainStopMarkup += $(this).html()
		    trainStopMarkup += '</td></tr></table>';
		    $train.html(trainStopMarkup);
		    stepNumber++;
		}
	)

    if ($ux.hasClass('button-bar')) {
        var $buttonBar = $container.find('UL.dwpe-train');
        $buttonBar.attr('class', 'dwpe-train-button-bar');

        buttonBarMarkup = '';
        buttonBarMarkup += '<li class="DWPE_Button" type="train_button_back">Back</li>';
        buttonBarMarkup += '<li class="DWPE_Button" type="train_button_next">Next</li>';
        if ($ux.hasClass('button-bar-submit')) {
            var thisCommand = $ux.attr('onSubmit');
            buttonBarMarkup += '<li class="DWPE_Button" type="train_button_submit" '
			if(thisCommand){
				var cmd = thisCommand.split("::");
				switch(cmd[0].toLowerCase())
				{	
					case "javascript":
					case "js":
		                buttonBarMarkup += 'onclick="javascript:' + cmd[1] + '">';
						break;
					case "url":
		                buttonBarMarkup += 'onclick="window.location.href=\''+ cmd[1] +'\'">';
						break;
					default:
						break;
				}
			}
            buttonBarMarkup += 'Submit</li>';
        }

		if ($ux.hasClass('button-bar-finish')) {
            var thisCommand = $ux.attr('onFinish');
            buttonBarMarkup += '<li class="DWPE_Button" type="train_button_finish" '
            if (thisCommand.indexOf("(") != -1) {
                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';
            } else {
                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';
            }
            buttonBarMarkup += 'Finish</li>';
        }
        if ($ux.hasClass('button-bar-save')) {
            var thisCommand = $ux.attr('onSave');
            buttonBarMarkup += '<li class="DWPE_Button" type="train_button_save" '
            if (thisCommand.indexOf("(") != -1) {
                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';
            } else {
                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';
            }
            buttonBarMarkup += 'Save</li>';
        }

        if ($ux.hasClass('button-bar-exit')) {
            var thisCommand = $ux.attr('onExit');
            buttonBarMarkup += '<li class="DWPE_Button" type="train_button_exit" '
            if (thisCommand.indexOf("(") != -1) {
                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';
            } else {
                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';
            }
            buttonBarMarkup += 'Exit</li>';
        }
        if ($ux.hasClass('button-bar-cancel')) {
            var thisCommand = $ux.attr('onCancel');
            buttonBarMarkup += '<li class="DWPE_Button" type="train_button_cancel" '
            if (thisCommand.indexOf("(") != -1) {
                buttonBarMarkup += 'cmd="' + thisCommand.replace('"', '\'') + '" onclick="DWPE_Utilities.exec(this);">';
            } else {
                buttonBarMarkup += 'target="_self" url="' + DWPE_Utilities.makeJavascriptSafe(thisCommand) + '" onmousedown="DWPE_Utilities.loadURL(this);">';
            }
            buttonBarMarkup += 'Cancel</li>';
        }
        $buttonBar.html(buttonBarMarkup);
        $buttonBar.find('li').click(function () { DWPE_PanelFactory_Class.trainButtonBarOnClick($ux, $(this).attr('type')) });
    }


    $ux.data('num-of-trains', $trains.length);
    //add our train container inside $ux

    if ($ux.hasClass('bottom')) {
        $ux.append($container);
    } else {
        $ux.prepend($container);
    }


    //add the overflow controls
    var $overflow_btn_fore = $('<li class="dwpe-overflow-btn fore"></li>');
    $container.find('>DIV.left>UL.dwpe-train').prepend($overflow_btn_fore);

    var $overflow_btn_aft = $('<li class="dwpe-overflow-btn aft"></li>');
    $container.find('>DIV.left>UL.dwpe-train').append($overflow_btn_aft);

    //bind an overflow handler to our overflow controls
    $overflow_btn_fore.click(function () { DWPE_PanelFactory_Class.handleTrainOverflowClick($ux, $overflow_btn_fore); });
    $overflow_btn_aft.click(function () { DWPE_PanelFactory_Class.handleTrainOverflowClick($ux, $overflow_btn_aft); });

    //set the first train, used in overflow calculations
    $ux.data('first-train', 0);

    //set the last train, used in overflow calculations
    $ux.data('last-train', $trains.length - 1);

    //acquire a handle to all the panels in the trainset
    var $train_panels = $ux.find('>DIV.dwpe-train-panels>DIV');

    //give each train panel that this trainset owns its panel class
    $train_panels.each(
		function (i) {
		    var $train_panel = $(this);
		    $train_panel.attr('id', id + "-trainpanel-" + i)
					  .css('height', $ux.attr('height'));

		    if (i == default_train)  //by default, first panel is shown
		    {

		    }
		}
	);

    //enforce the default train by showing it
    DWPE_PanelFactory_Class.showTrainPanel($ux, default_train);


    //force window to call on our trainset to manage overflow when a window  occurs
    $(window).bind('resize', function (e, parentID) {
        //if(DWPE_Utilities.isObjectContainedByID($ux,parentID)==true)
        DWPE_PanelFactory_Class.manageTrainOverflow($ux);
    })
    //$(window).bind('dwpe-component-',function(){DWPE_PanelFactory_Class.manageTrainOverflow($ux);})

    //force trains to evaluate for overflow once so that trains layout correctly on load
    DWPE_PanelFactory_Class.manageTrainOverflow($ux);

    $ux.find('td.track:first div,td.track:last div').css('background-color', 'transparent');



	if ($ux.attr('parentURL')) 
    {
        var parentURL = $ux.attr('parentURL');

		var $parent_btn_fore = $('<li class="train-parent parent-fore"></li>');
		$parent_btn_fore.attr('target','_self');
		$parent_btn_fore.attr('url',DWPE_Utilities.makeJavascriptSafe(parentURL));
    	$container.find('UL.dwpe-train LI:first').before($parent_btn_fore);
		$parent_btn_fore.mousedown(function() { DWPE_Utilities.loadURL(this); });

	    var $parent_btn_aft = $('<li class="train-parent parent-aft"></li>');
		$parent_btn_aft.attr('target','_self');
		$parent_btn_aft.attr('url',DWPE_Utilities.makeJavascriptSafe(parentURL));
    	$container.find('UL.dwpe-train LI:last').after($parent_btn_aft);
		$parent_btn_aft.mousedown(function() { DWPE_Utilities.loadURL(this); });
    }

}
DWPE_PanelFactory_Class.trainButtonBarOnClick = function ($ux, buttonType) {
    if ($ux.hasClass('disabled')) return;
    var i = $ux.data("current-train");
    switch (buttonType) {
        case 'train_button_next':
            i++;
            break;
        case 'train_button_back':
            i--;
            break;
        default:
            break;
    }

    if (i < 0 || i >= $ux.data('num-of-trains')) return;
    DWPE_PanelFactory_Class.showTrainPanel($ux, i);
}


/*shows the panel that has been passed in*/
DWPE_PanelFactory_Class.showTrainPanel = function($ux,train_index)
{

	var current_train=$ux.data("current-train");
	
	if(train_index==current_train) return; //don't show a train that's already shown

	var id= $ux.attr("id");
	var $new_train=$("#"+id+"-train-"+train_index);
	var $new_panel=$ux.find("#"+id+"-trainpanel-"+train_index);
	

	if ( (train_index > (current_train + 1)) && !$ux.hasClass('non-sequential')) 
	{
		// If the previous stop has not been visited, return.
		if ( !$new_train.prev().hasClass('visited')  )
		{
			//console.log('Non-Sequential Step.');
			return;
		}
	}
	
	// Switch from Sequential to non-sequential when
	// a Train Stop with sequential-override is clicked.
	if ( $new_train.hasClass('sequential-override') )
	{
		$ux.addClass('non-sequential');
		$ux.find('LI.train-stop').removeClass('disabled');
	}
	

	//iframes can cause flashes when hiding train panel, so hide them first
	var $old_panel=$("#"+id+"-trainpanel-"+current_train);
	if($old_panel.length>0)
		$old_panel.find(">IFRAME").hide();
	
	if($new_panel.length>0)
	{	
		$ux.data("current-train",train_index);
		$new_train.addClass('selected');
		$new_train.removeClass('disabled');
		$new_train.next().removeClass('disabled');
		$new_panel.show();
		//now that we've shown our panel, give it a chance to lay itself out.
		$(window).trigger('');
		
		/*	Dynamic loading of iframe 
			The iframe is loaded on the first call only
			subsequent calls will only display the iframe content 	*/
		var content=$new_panel.attr('content');
			
		if ( content &&  $new_panel.find(">iframe").length==0 )
		{
			$new_panel.html( "<iframe src='"+ content +"' frameborder='0' allowtransparency='false'/>"  );
		}
		$new_panel.find(">IFRAME").show();
	}
	
	if(current_train!=null)
	{
		//unhighlight the old train
		$old_panel.hide();
		var $train=$("#"+id+"-train-"+current_train).removeClass('selected');
			$train.addClass('visited');
			
		//remove the close button if we can find item
		$train.find('SPAN.close').remove();
	}
	
	if ( $ux.hasClass('disabled') )
	{
		$ux.find('UL.dwpe-train>LI').unbind('click');
	}

	
}

DWPE_PanelFactory_Class.manageTrainOverflow = function($ux)
{
	DWPE_Window.closeWindowGroup("trainset-overflow");
	DWPE_PanelFactory_Class._manageTrainOverflow($ux,'train-container');
}

DWPE_PanelFactory_Class._manageTrainOverflow = function($ux,position)
{

	var selected_train=$ux.data('current-train');

	//determine if scrollbars are in effect
	var pH=$ux.parent().innerHeight();
	var pSH=$ux.parent().attr("scrollHeight");
	var scrollbar_width=(pSH>pH)?DWPE_Utilities.getScrollbarWidth():0;
	
	//console.log(sH,h);
	
	//determine our parent's size
	var pW=$ux.parent().width()-scrollbar_width;
	
	//determine how much size we can take and apply it to our container
	var size=$ux.data('size');
	
	if(size==null) return;
	
		if(size.indexOf('%')>-1)
		{
			size=(parseInt(size)/100)*pW;
		}
		else
		{
			size=parseInt(size);
		}
	$ux.width(size);
	
	
	
	//now find the size we can allocate to trains
	var avail_size=$ux.find(">DIV.train-container."+position+">DIV.left").width();
	
	var $overflow_fore=$ux.find(">DIV.train-container."+position+" LI.fore").show();
	var $overflow_aft=$ux.find(">DIV.train-container."+position+" LI.aft").show();
	
	
			
	var overflown=false;
	
	//set width to the width of our overflow controls, to ensure they have room to paint if we need them
	var w=$overflow_fore.outerWidth(true);
	    w+=$overflow_aft.outerWidth(true);
		
		if ($ux.attr('parentURL')) 
		{
			var $parent_fore=$ux.find(">DIV.train-container."+position+" LI.parent-fore").show();
			var $parent_aft=$ux.find(">DIV.train-container."+position+" LI.parent-aft").show();
			w+=$parent_fore.outerWidth(true);
			//console.log(w, $parent_fore);
			w+=$parent_aft.outerWidth(true);
			//console.log(w, $parent_aft);
		}
		
		//w+=100; //add a fudge factor
	
	
	
	//console.log(w);
	
	//get static values for first and last train
	var first_train=$ux.data("first-train");
	var last_train=$ux.data("last-train");
	

	//grab our trains, we do it each time to catch trains that may have arrived dynamically
	var $trains=$ux.find(">DIV.train-container."+position+">DIV.left>UL.dwpe-train>LI.train-stop");
	var $last=null;
	
	//set all our trains to hidden so we can fairly test if we are within bounds
	$trains.hide();
	$trains.each(
	
		function(i)
		{
			if(i>=first_train) 		 		
			{
			
				var $train=$(this);
				//store the i value as the train's index, used later if the train is clicked in an overflow menu
				$train.data('train-index',i);
				
				//show the train so we can measure it
				$train.removeClass('last');
				$train.show();
				
				
				
				//add the width of this train to our total width
				w+=$train.outerWidth(true);
				
				if(w>avail_size) 		 		//we are out of bounds so hide it again and set the overflown flag
				{
					
					/*check to make sure our selected train is visible
					sometimes when its the last train in the visible set before its selected it can
					get knocked off the visible set after overflow calculations are performed	
					this check ensures we always show our visible train
					*/
				
					if(i!=selected_train)
					{
						$train.hide();
						overflown=true;
					}
				}
				else					//we are still in bounds and record this train position as last train, because it may be
				{
					last_train=i;
					$last=$train;
				}
				
				
				
			}
			
			
		}
	
	);
	
	//store off first and last trains, in case they have just changed
	$ux.data("first-train",first_train);
	$ux.data("last-train",last_train);
	
	//set the last visible train as last (tiertiary)
	if($last)$last.addClass('last');
	
	
	
	//console.log(w,pW,size)
	
	//manage the display of the overflow controls
	if(first_train>0)
		$overflow_fore.show();
	else
		$overflow_fore.hide();
		
	if(last_train<$trains.length-1)
		$overflow_aft.show();
	else
		$overflow_aft.hide();

}


DWPE_PanelFactory_Class.handleTrainOverflowClick = function($ux,$overflow_btn)
{
	
	var type=($overflow_btn.hasClass('fore'))?"fore":"aft";
	
	
	//make a overflow menu object
	var menu_id="trainset-overflow";
	var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);
	var $menu_body=$("#"+menu_id+"-body");
	
	
	//get static values for first and last train
	var first_train=$ux.data("first-train");
	var last_train=$ux.data("last-train");
	
	/*determine the outlier trains and append them to an overflow menu body */
	$ux.find("UL.dwpe-train:first>LI.train-stop:hidden").each
	(
		function()
		{
			var $train=$(this);
			var train_index=$train.data("train-index");
			
			if(type=='fore' && train_index>first_train) return;
			else if(type=='aft' && train_index<last_train) return;
			
			
			
			//clone the train, show it and append it to the overflow menu body
			var $c=$train.clone(true);
			$c.show();
			$c.css('display','block'); //force it to block to paint vertically within the menu
			$menu_body.append($c);
			
			//remove icons from menu itemss
			$c.find("span.icons").remove();
			
			//bind a click event to the item which sets this train as the firt train
			
			if($c.hasClass('disabled')==false)
			{	$c.click(
			
					function()
					{
						
						
						$ux.data("first-train",$train.data('train-index'));
					
					
						//now that we have presumably changed train first position, force trains to re-layout
						DWPE_PanelFactory_Class.manageTrainOverflow($ux);
					}
				
				);
			}				
					
		}
	);

	
	
	//set the state of the overflow-control to active	
	$overflow_btn.addClass("active");
	
	//position the window relative to the overflow control
	DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);
	
	/*window class calls this method after the user has made a selection and just before the window 
	 group will be dismissed*/
	$overflow_btn.bind(		
		"cleanup",
		function(e)
			{
				//set the state of the overflow-control to normal	
				$overflow_btn.removeClass('active');
			}
		);
}