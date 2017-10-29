
/*Set the class that our class will inherit from*/
DWPE_TableFactory_Class.prototype=new DWPE_BaseFactory_Class();

/*Set and Define our own class constructor*/
DWPE_TableFactory_Class.constructor=DWPE_TableFactory_Class;
DWPE_TableFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;
function DWPE_TableFactory_Class()
{
	this._class="DWPE_TableFactory_Class";
	this.row_height=18; //18 pixels is standard row height
	
	//setup live() methods
	
	
	$(".dwpe-table").live(
		
		'mouseover',
		function()
		{
			
			var $ux=$(this);
			
			
			//perform table setup
			if(!$ux.data('initialized'))
			{
				$ux.data('initialized',true);
				var $table_headers=$ux.find('>DIV.table-headers-container');
				var $table_body=$ux.find('>DIV.table-body-container');
			
				
				
				
				
				
				//var $column_cell_proxies=$table_headers.find("div.column");
				//var $data_cell_proxies=$table_body.find("tr:first-child>td>div");
				
				/*synchronize table body scroll with table header scroll*/
				
				$table_headers.scroll
				(
				
					function()
					{
						var a=$table_headers.attr('scrollLeft');
							  $table_body.attr('scrollLeft',a);
					}
				
				);
				
				
				$table_body.scroll
				(
					function()
					{
						var a=$table_body.attr('scrollLeft');
							  $table_headers.attr('scrollLeft',a);
					}
				);
				
				
				/*setup hover and selected states*/
				//$("TR").live('mouseover',function(){$(this).addClass('over')});
				//$("TR").live('mouseout' ,function(){$(this).removeClass('over')});
				
				
		
				/*manage column resizing*/
				$('TH>DIV',$table_headers).resizable
				(	{	handles:'e',
						helper:'col-resize-helper',
						minWidth:50,
						start:function(event,ui)
						{
						
						},
						
						resize:function(event,ui)
						{
							//force the helper to be the height of the table
							
							var $helper=$(ui.helper);
							var $table_body=$(this).closest('.dwpe-table').find("DIV.table-body-container");
							var $table_header=$(this).closest('.dwpe-table').find("DIV.table-headers-container");
							
							$helper.css(	{	'height':$table_header.height()+$table_body.height(),
													'top':$table_header.offset().top							
													});
							
							
							
						},
						
						stop:function(event,ui)
						{
							
							/*resize column*/
							var $column=$(this);
							var n=$column.attr('col');
							var w=$column.width();
							
							
							$column.width(w);
							$column.closest('th').width(w);//css('width',w);
							
							$ux.find("div.col"+n).each
							(
								function(event,ui)
								{
									var $col=$(this);
									var $parent=$col.closest('td','th');
									var $fld=$("input",$col);
									
									$col.width(w);
									$parent.width(w);
									$fld.width(w);
								}
							);
							
						
							
						}
					}
					
				);
				
				
					
				
				
				
			}
			
			
		}
	
	);
	
	
	/*manage sorting*/
	$(  ".dwpe-table TR.columns>TH.sort-not , .dwpe-table TR.columns>TH.sort-none , .dwpe-table TR.columns>TH.sort-asc , .dwpe-table TR.columns>TH.sort-desc")
			.live('mouseover mouseout',
							
							
							function()
							{
								var $th=$(this);
								
								if($th.attr("className").length==0 || $th.hasClass('sort-not')) {	return	};
								
								/*create sort control first time in*/
								if(	!$th.data('sort-controls') )
								{
									var $sort=$('<div class="sort"></div>');
										$sort.data('th',$th);
									
									var $div=$th.find('>div');
										$div.prepend($sort);
										$sort.data('col',"col"+$div.attr('col'));
									$th.data('sort-controls',$sort);
									
									
									
									$sort.mouseout(
										
										function(){$(this).removeClass('over asc desc')}
										
									);
									
									$sort.mousemove(
										
										function(event)
										{	
											var x=event.layerX;
											
											if(x<16)
											{	$sort.addClass('over asc');
												$sort.removeClass('desc');
												$sort.attr('title',"Sort Ascending");
												
											}
											else
											{	$sort.addClass('over desc');
												$sort.removeClass('asc');
												$sort.attr('title',"Sort Descending");
											}
											
											
										}
										
									);
									
									
									$sort.click(
										
										function(event)
										{	
											var $ux=$sort.closest('.dwpe-table');
											
											
											//remove sort active state from all columns that can be sorted
											$ux.find("th.sort-asc,th.sort-desc").each(
											
												function(){$(this).removeClass().addClass('sort-none');}
											);
											
											//determine the direction of the sort
											var sort_dir="asc";
											if(event.layerX>$sort.width()/2)
											{
												sort_dir="desc";	
											}
											
											//update the state of the sort control (in header and footer)
											$ux.find('div.'+$sort.data('col')).each(
												
												function()
												{
													$(this).closest('th').removeClass().addClass('sort-'+sort_dir);
												}
													
											);
											
											//find the cell number
											//find all cells and store their rows in an array;
											//sort the rows array
											
											var col="col"+$sort.data('th').find('>div').attr('col');			
											var rows=[];
											var $table_body=$sort.closest('.dwpe-table').find('table.table-body>TBODY:eq(0)');
											$table_body.find('TR').each(
											
												function()
												{
													
													var $row=$(this);
													
													//hide subtotals rows when performing sorts
													if($row.hasClass('subtotal'))
													{
														$row.hide();
														return;
													}
													
													if($row.hasClass('grand-totals'))
													{
														$row.hide();
														return;
													}
													
													
													
													var row={};
														row.object=$row;
													var	$column=$row.find("div."+col);
														row.value=$column.text();
														
														if(!row.value || row.value.length===0)
														{	//if we can't find text to sort on, pick off an icon's title attribute
															row.value=$column.find(">span.icons").attr('title');
														}
														
														if(!row.value || row.value.length===0)
														{	//if we can't find text to search on, look for an input tag and use its value
															row.value=$column.find("input").val();
														}
														
														
														//convert dates
														var date=new Date(row.value);
														if(Object.prototype.toString.call(date) === "[object Date]")
														{
															var time=date.getTime();
															if(!isNaN(time))
															{	row.value=time;	}
														}
														
														//convert floats
														else if(!isNaN(row.value) && row.value.indexOf('.')>-1)
															row.value=parseFloat(row.value);
															
														//convert integers
														else if(!isNaN(row.value) && row.value.indexOf('.')==0)
															row.value=parseInt(row.value);
														
														
														rows.push(row);		
												}
											
											);
											
											rows.sort(function(a,b){	//console.log(a.value,b.value,a.value<b.value); 
																		return a.value>b.value;	});
											
											if(sort_dir=="desc")
												rows.reverse();
											
											$(rows).each(function(){$table_body.append(this.object)});
											
											
											
											
											
											
											
										}
										
									);
									
									
								}
								$th.data('sort-controls').toggleClass('show');
								
								return false;
							}
							
	);
	
	
	$(".dwpe-table.click-to-edit DIV.table-body-container>TABLE>TBODY>TR").live
	(
		'dblclick',
		function()
		{
			//transfer values back into hidden row
			
			//show hidden row
			
			//hide dbl-click'd row
			
			//transfer values from dbl-click'd row into editable row
			
			//append editable row directly below dbl-click row 
			
			
			return false;
		}
	);
	
	
	/*manage qbe execution*/
	$(".dwpe-table TR.qbe INPUT").live
	(
		'keydown',
		function(event)
		{
			//process qbe only when users presses enter
			if(event.keyCode!=13) return;
			
			//var query=new Array();
			
			
			
			var $fld=$(this);
			
			
			/*get all qbe input fields*/
			var $input_divs=$fld.closest("TR.qbe").find("DIV");
			
			//prepare query array
			var query=new Array();
			$input_divs.each(
				function()
					{
						var $div=$(this);
						var o={};
						
							o.id=$div.attr("col");
						var $fld=$div.find('input');
						
							if($fld.length>0 && $fld.val().length>0)
							{	o.term=$fld.val().toLowerCase();
								
								if(o.term.indexOf("*")==0)
								{
									o.term=o.term.replace("*","");
									o.search="contains";
								}
								else
								{
									o.search="starts-with";
								}
							
								query.push(o);
							}
					}
			)
			
			
			
			//evaluate query
			var $ux=$fld.closest('.dwpe-table');
			var rows_found=0;
			
			$("table.table-body TR:first-child").css({"visibility":"visible"})
			
			
			$ux.find('table.table-body TR.subtotal').hide();
			
			$ux.find('table.table-body TR').each(
			
				function()
				{
					var $row=$(this);
					
					//hide subtotal rows when doing queries
					if($row.hasClass('subtotal'))
					{
						$row.hide();
						return;
					}
					
					$row.show();
					$row.removeClass('selected');
					var matched=true;
					
					$(query).each(
					
						function()
						{
						
							
							if(matched==false) return;
							
							var $column=$row.find('div.col'+this.id);
							
							var value=$column.text();
							if(!value || value.length==0)
							{	//if we can't find text to search on, pick off an icon's title attribute
								value=$column.find(">span.icons").attr('title');
							}
							
							if(!value || value.length==0)
							{	//if we can't find text to search on, look for an input tag and use its value
								value=$column.find("input").val();
							}
							
							
							
							if(this.search=="starts-with")
							{
								matched= (value.toLowerCase().indexOf(this.term)==0);
							}
							else
							{
								matched=(value.toLowerCase().indexOf(this.term)>-1);
							}
							
							
						
						}
					
					);
					
					if(matched==false)
						{	$row.hide();	}
					else
						{	$row.show();
							rows_found++
						}
					
					
				}
			);
			
			if(rows_found==0)
			{
				$("table.table-body TR:first-child").css({'display':"table-row","visibility":"hidden"})
			}
			
			DWPE_TableFactory.updateRowsSelected($ux);
			
			return false;
		
		}
	
	
	);
	

	
	
	//manage row selection
	$(".dwpe-table table.table-body>TBODY>TR").live
	(
		'mouseup'
		,
		function(event)
		{
			var $row=$(this);
				if($row.hasClass('subtotal')) return;
			
			var $ux=$row.closest('.dwpe-table');
			var $last_active_row=$ux.data('last-active-row');
			
			var $rows=$row.closest('TBODY').find('TR');
			
			
			if(event.ctrlKey==true)//non-contiguous selection
			{
			
				$row.addClass('selected active');
				
				
				
			}
			else if(event.shiftKey==true)//contiguous selection
			{
				
				//remove all selections except the last active selection
				$rows.each(
				
					function()
					{
						var $myrow=$(this);
						if(!$myrow.hasClass('active'))
						{	$myrow.removeClass('selected');	}
					}
				)
				//add the new selection
				$row.addClass('selected');
				
				//console.log($row.attr('rowIndex'),$last_active_row.attr('rowIndex'),$row==$last_active_row);
				
				if($last_active_row && $row.attr('rowIndex') == $last_active_row.attr('rowIndex')) // user has selected only one row so we are done
					return;
				
				
				
				var begin_selection=false;
				var end_selection=false;
				
				var state="";
				$rows.each(
				
					
					function()
					{
						
						var $myrow=$(this);
							$myrow.removeClass('active');
						
							if($myrow.is(':hidden')) return;
							if($myrow.hasClass('subtotal')) return;
							
						
						if(begin_selection==false && $myrow.hasClass('selected'))
						{
							begin_selection=true;
							end_selection=false;
							
						}
						else if(begin_selection==true && end_selection==false && $myrow.hasClass('selected'))
						{
							end_selection=true;
						}
						else if(begin_selection==true && end_selection==true)
						{
							$myrow.removeClass('selected');
						}
						else if(begin_selection==false && end_selection==false)
						{
							$myrow.removeClass('selected');
						}
						else if(begin_selection==true && end_selection==false)
						{
							$myrow.addClass('selected');
						}
						
						
					
					}
				
				);
				
				$row.addClass('active');
				
				
			}
			else //single row selection
				
			{
				$rows.removeClass('selected');
				$rows.removeClass('active');
				$row.addClass('selected active');
				
			}
				
				
			//TO-DO: trigger a custom event annoucing the rows selected from this table	
				
				
			DWPE_TableFactory.updateRowsSelected($ux)
			
			$ux.data('last-active-row',$row);	
			
			return false;
		}
	);

	
	return this;	

}

/*Make an Instance of TableFactory that others can call on to create windows*/
DWPE_TableFactory=new DWPE_TableFactory_Class();


/*overrides DWPE_Base_Class.update()*/
DWPE_TableFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}




DWPE_TableFactory_Class.prototype.make=function($ux)
{
	
	
	
	var _class=this.getRootClass($ux.attr("class"));
	
	switch(_class)
		{
			case "dwpe-window-container":
				break;
		}
	
}


DWPE_TableFactory_Class.prototype.generateMarkup=function(args)
{

	switch(args.type.toLowerCase())
		{
			case "read-only":
			case "direct-edit":
			case "click-to-edit":
			
				return this.generateTableMarkup(args);
				break;
			default:
				return "[undefined type]";	
				break;
		}
	
}


DWPE_TableFactory_Class.prototype.generateTableMarkup=function(args)
{


	var _args=$.extend(true,{},args); //jquery clone needed for test environment only

		
	var markup="<ux:tables class='dwpe-table "+args.type;
		markup+=" "+args.row_banding;
		markup+=" "+args.column_banding;
		markup+=" "+args.grid_lines;
		
		markup+="'";
		markup+=" name='"+((args.name)?args.name:"Table")+"'";
		
		markup+=">";
		
		
	
		if(args.menubar.length>0 && args.menubar!="none")			
			markup+="\t<ux:menus class='dwpe-menu' url='"+args.menubar+"'><!--args:{}--></ux:menus>\r\n";
		
		if(args.toolbar.length>0 && args.toolbar!="none")			
			markup += "\t<ux:toolbars class='dwpe-toolbar' url='"+args.toolbar+"'><!--args:{}--></ux:toolbars>\r\n";
			
		markup+=this.process(_args,args);
		
		
		
		markup+="\n"+DWPE_Base_Class.getArgsAsString(args);
	
		markup+="\r</ux:tables>";
		
		
		
		
		return markup;


}


 


DWPE_TableFactory_Class.prototype.process=function(tree,args)
{

	
	//get max depth
	var max_depth=0;
	var leaf_nodes=new Array();
	
	var getTreeDepth=function(node,depth)
	{
		node.row=depth;
		node.colspan=0;
		
		var i_len=(node.items)?node.items.length:0;
		for(var i=0;i<i_len;i++)
		{	
			var child_node=node.items[i];
				child_node.parent=node;
			getTreeDepth(child_node,depth+1);
		}
		
		if(i_len==0)
		{	
			leaf_nodes.push(node);
			node.leaf=true;
		}
		else
		{
			node.leaf=false;
		}
		
		max_depth=Math.max(depth,max_depth);
	
	}
	
	
	
	getTreeDepth(tree,0);

	//set colspans from the bottom up
	var len=leaf_nodes.length;
	for (var i=0;i<len;i++)
	{
			var node=leaf_nodes[i];
				node.col_id=i+1;
			var parent=node.parent;
			
			while(parent)
			{
				parent.colspan+=1;
				parent=parent.parent;
			}
			
	}
	
	
	//set rowspans from the top down
	var assignTableHeaderRowspan=function(node,rowspan)
	{
		node.rowspan=(!node.items || node.items && node.items.length==0)?rowspan:1;     //we take 1 row if we have children, otherwise we take up the remaining rows
		if(node.items)
		{
			var k_len=node.items.length;
			for(var k=0;k<k_len;k++)
			{
				assignTableHeaderRowspan(node.items[k],rowspan-1);
			}
		}
	
	
	}
	
	var i_len=tree.items.length;
	
	for (var i=0;i<i_len;i++)
	{
		assignTableHeaderRowspan(tree.items[i],max_depth,0);	
	}

	

	//walk down each branch of the tree assigning row and colspans
	var setColumnHTML=function(node)
		{
			if(node.items)
			{
				var j_len=node.items.length;
				for (var j=0;j<j_len;j++)
				{
					setColumnHTML(node.items[j]);
				
				}
				
			}
			var colspan=(node.colspan>1)?" colspan='"+node.colspan+"'":"";
			var rowspan=(node.rowspan>1)?" rowspan='"+node.rowspan+"'":"";
			
			
			var align=(node.align!='left')?" "+node.align:"";
				
			var width,col_class,div_attribs,sort;
			if(node.leaf)
			{
				
				col_class =" class='";
				col_class+="sort-"+node.sort; 
				col_class+=(node.visible=="hide")?" hide":"";
				col_class+="'";
				
				
				div_attribs=" class='column"+align+" col"+node.col_id+"'";
				if(isNaN(node.width))
					node.width=100;
				width=(node.width!=parseInt(100))?" style='width:"+node.width+"'":""
			}
			else
			{
				sort="";
				visibility=
				div_attribs=" class='column-group"+align+"'";
				
				col_class =" class='";
				col_class+=(node.visible=="hide")?" hide":"";
				col_class+="'";
				width=" style='width:100%'";
			}
			
			
			var col_id =(node.col_id)?" col='"+node.col_id+"'":"";
			var div_class=" class='col"+node.col_id+" "+align+"'";
			var visibility=(node.visible=="hide")?" class='hide'":"";
			
			node.qbe_html="\r\t<th"+colspan+visibility+" ><div "+div_class+col_id+width+"><input/></div></th>";
			node.col_html="\r\t<th"+colspan+rowspan+col_class+" ><div "+col_id+width+div_attribs+">"+node.label+"</div></th>";
			node.row_html="\r\t<td"+colspan+visibility+" ><div "+width+div_class+">%VALUE%</div></td>";
			
			
		}
	
	//walk the tree from the top down, setting html accordingly
	var len=tree.items.length;
	for (var i=0;i<len;i++)
	{
		setColumnHTML(tree.items[i]);
	
	}
	/*
	
	//walk the rows of columns, collecting html
	var html="";
	var getColumnMarkup=function(node,row)
	{
		var _row=row;
		
		if(_row==node.row)
			html+=node.col_html;
	
		var len=node.items.length;
		for(var i=0;i<len;i++)
		{	getColumnMarkup(node.items[i],row);	}
		
	}
	*/
	
	//organize nodes into rows
	var rows=new Array();
	var collectIntoRows=function(node,row_index)
	{
		if(!rows[row_index]) rows[row_index]=new Array();
		
		
		if(row_index==node.row)
		{	rows[row_index].push(node);}
		
		
		var j_len=(node.items)?node.items.length:0;
		for(var j=0;j<j_len;j++)
		{
			collectIntoRows(node.items[j],row_index);
		}
	}
	
	for(var row_index=1;row_index<=max_depth;row_index++)
	{
		var i_len=tree.items.length;
		for(var i=0;i<i_len;i++)
		{
			collectIntoRows(tree.items[i],row_index);
		}
	}
	
	
		
	
	
	
	var collectColumnHTML=function(top_node,node,row)
	{
	
		top_node.rows[row] +=node.col_html;	
		
		top_node.rows[row+1]="";
					
		var j_len=(node.items)?node.items.length:0;
		for(var j=0;j<j_len;j++)
		{
			collectColumnHTML(top_node,node.items[j],row+1);
		}
		
	}
	
	var makeColumnGroups=function(top_node)
	{
		
		top_node.rows=new Array();
			
		var row=0;
			top_node.rows[row]=top_node.col_html;
		
		top_node.rows[row+1]="";
		
		
		var i_len=(top_node.items)?top_node.items.length:0;
		for(var i=0;i<i_len;i++)
		{ 
			collectColumnHTML(top_node,top_node.items[i],row+1);
		}

	}
	
	
	
		
	
	//walk top level nodes, making column group tables
	var h_len=tree.items.length;
	for(var h=0;h<h_len;h++)
	{
		makeColumnGroups(tree.items[h]);
	}
	
	
	
	//walk the rows of columns, collecting html
	var html="";
	
	html+="<div class='table-headers-container'>";
	html+="<table class='table-header' cellpadding='0' cellspacing='0'>";
	html+="<thead>";
		
	/*qbe*/

	
	html+="<tr class='qbe "+tree.qbe+"'>";
	
	if(tree.row_header=='visible' || tree.row_header=='numbered')
		{	html+='<th class="row-header"><div col="0" tabindex="0">&nbsp;</div></th>';	}
	
	for(var j=0;j<leaf_nodes.length;j++)
	{	html+=leaf_nodes[j].qbe_html;	}
	html+="</tr>";
	
	
	/*column headers*/	
	for(var row=1;row<=max_depth;row++)
	{
		var items=rows[row];
		
		
		html+="<tr class='columns'>";
		
		if(row==1 && (tree.row_header=='visible' || tree.row_header=='numbered'))
			{	html+='<th class="row-header" rowspan="'+max_depth+'"><div col="0">Row</div></th>';	}
		
		for(var j=0;j<items.length;j++)
		{	html+=items[j].col_html;	}
		html+="</tr>";
		
	}
	
	html+="</thead>";
	html+="</table>";
	html+="</div>";
	
	
	
	//walk the rows of leaf_node columns, collecting row html
	
	html+="<div class='table-body-container' style='height:"+(tree.num_visible_rows*this.row_height)+"px'>";
	html+="<table class='table-body' cellpadding='0' cellspacing='0'>";
	

	
	html+="<tbody>";
	
	
	//Build up persona array
	var personas=new Array();
	
	//tree.num_rows=Math.min(tree.num_rows*1,20);
	for(var row=0;row<tree.num_rows*1;row++)
	{	
		personas.push(this.getRandomPersona());
		
	}
	
	//Build up table data
	var subtotals=new Array();
	var grandtotals=new Array();
	
	var unique_values=new Array();
	var table_data=new Array();
	var subtotal_row=0;
	var counters=new Array();
	for(var row=0;row<tree.num_rows*1;row++)
	{	
		
		var persona=personas[row];
		var row_data=new Array();
		
		for(var j=0;j<leaf_nodes.length;j++)
		{	var node=leaf_nodes[j];
			var value=persona[node.value];
			row_data.push(value);
			
			
			//push this value onto the set of unique values
			//if(!unique_values[node.label])
			//	unique_values[node]=new Array();
			
			//unique_values[node.label][value]=0;		
			
			switch(node.value)
			{
			
				case 'currency':
					var n=parseFloat(value);
					
						if(counters[j]==undefined)    counters[j]=0;
						if(grandtotals[j]==undefined) grandtotals[j]=0;
						
						var c=counters[j]+n;
							counters[j]=parseFloat(c);
							
						var g=grandtotals[j]+n;
							grandtotals[j]=parseFloat(g);
						
						
					break;
				case 'int100':
				case 'int100_100':
					var n=parseInt(value);
						counters[j]=(counters[j])?counters[j]+n:n;	
						grandtotals[j]=(grandtotals[j])?grandtotals[j]+n:n;
					break;
					
				
				default:
					counters[j]="";
					grandtotals[j]="";
					break;
			}
			
	
			
			
			
			
			
		}
		
		var counts=new Array();
		for(var i=0;i<counters.length;i++) {counts.push(counters[i]);}
		subtotals.push(counts);
		
		
		
		//reset counters at every interval
		if(row>1 && row % 5==0)
		{
			for(var i=0;i<counters.length;i++) {counters[i]=0}
		}
		
		table_data.push(row_data);
		
	}
	
	
	
	
	
	//evaluate table data
	for(var row=0;row<tree.num_rows*1;row++)
	{
		var row_data=table_data[row];
		var row_counters=subtotals[row];
		
		
		
		if(html.length>23000)
		{
			/*monitor buffer and don't let it exceed 23000 characters, 
			if it does cap the num of rows at the current row number
			and stop generating more rows*/
			args.num_rows=row;
			break;
		}
		
		
		html+=this.makeRow(row,tree.row_header,row_data,row_counters,'row',leaf_nodes);
			
			
			
		if(		tree.totaling=='sub-grand'
				&&
				(row+1) % tree.totaling_frequency == 0)
		{
			html+=this.makeRow(row,tree.row_header,row_data,row_counters,'subtotal',leaf_nodes);	
		}
		
	}
	html+="</tbody>"
	html+="</table>";
	html+="</div>";
	
	
	
	
	/*grand totals*/	
	if(tree.totaling=='grand' || tree.totaling=='sub-grand')
	{
		html+="<div class='table-headers-container'>";
		html+="<table class='table-body' cellpadding='0' cellspacing='0'>";
		
		
		html+="<tbody>";
		
		html+="<tr class='grand-totals'>";
			
		if(tree.row_header=='visible' || tree.row_header=='numbered')
			{	html+='<td class="row-header"><div col="0">&nbsp;</div></td>';	}
			
		var label_applied=false;		
		for(var j=0;j<leaf_nodes.length;j++)
		{	
			var node=leaf_nodes[j];
			var value;
			
			if (label_applied==false && grandtotals[j]=="")
			{
				label_applied=true;
				value="<div align='right'>Total</div>";
			}
			else
			{
				switch(node.value)
						{	
							case 'currency':
								value=parseFloat(grandtotals[j]).toFixed(2);
								break;
							default:
								value=grandtotals[j];
								break;
						}
			}
			html+=leaf_nodes[j].row_html.replace(/%VALUE%/,DWPE_Utilities.format(leaf_nodes[j].value,value)) ;	}
	
		html+="</tr>";
			
		
		html+="</tbody>";
		html+="</table>";
		html+="</div>";
	}
	
	
	/*column footers*/	
	if(tree.column_footer=='visible')
	{
		html+="<div class='table-headers-container'>";
		html+="<table class='table-header' cellpadding='0' cellspacing='0'>";
		html+="<thead>";
		
		for(var row=1;row<=max_depth;row++)
		{
			var items=rows[row];
			
			
			html+="<tr class='columns'>";
			
			if(row==1 && (tree.row_header=='visible' || tree.row_header=='numbered'))
				{	html+='<th class="row-header" rowspan="'+max_depth+'"><div col="0">Row</div></th>';	}
			
			for(var j=0;j<items.length;j++)
			{	html+=items[j].col_html;	}
			html+="</tr>";
			
		}
		
		html+="</thead>";
		html+="</table>";
		html+="</div>";
	}		



	if(tree.statusbar=='visible')
	{
		html+="<table class='table-statusbar'>";
		html+="<tr>";
		
		html+="<td class='rows-selected'>&nbsp;</td>";
		html+="<td>&nbsp;</td>";
		html+="<td>&nbsp;</td>";
		
		html+="</tr>";
		
		html+="</table>"
	
	}


	
	return html;



}



DWPE_TableFactory_Class.prototype.makeRow=function(row,row_header,row_data,row_counters,row_type,leaf_nodes)
{
		var html="";
		
		
		switch(row_type)
		{
			case 'subtotal':
				html+="\r<tr class='subtotal'>";
				if(row_header=='visible')
					{	html+='<td class="row-header"><div class="col0">&nbsp;</div></td>';	}
				else if(row_header=='numbered')
					{	html+='<td class="row-header"><div class="col0">'+(row+1)+'</div></td>';	}
				
				break;
			case 'row':
			default:
				html+="\r<tr>";
				if(row_header=='visible')
					{	html+='<td class="row-header"><div class="col0">&nbsp;</div></td>';	}
				else if(row_header=='numbered')
					{	html+='<td class="row-header"><div class="col0">'+(row+1)+'</div></td>';	}
				
				break;
		
		}
		
	
		var label_applied=false;
		for(var j=0;j<leaf_nodes.length;j++)
		{	var node=leaf_nodes[j];
			var value=""; 
			
			switch(row_type)
			{
				case 'subtotal':
					
					
					if (label_applied==false && row_counters[j]=="")
					{
						label_applied=true;
						value="<div align='right'>Subtotal</div>";
					}
					else
					{
						
						switch(node.value)
						{	
							case 'currency':
								value=parseFloat(row_counters[j]).toFixed(2);
								break;
							default:
								value=row_counters[j];
								break;
						}
								
					}
					
					
					
					
					
					
					break;
				case 'row':
				default:
					value=row_data[j]
					break;
			
			}
			
			
			value=DWPE_Utilities.format(node.value,value);
			
			
			html+=node.row_html.replace(/%VALUE%/,this.makeColumnValue(node.format,value));
			
			
			
		}
		
		html+="\r</tr>";
		
		
		return html;

}




DWPE_TableFactory_Class.prototype.last_names=
["Smith",
"Johnson",
"Williams",
"Jones",
"Brown",
"Davis",
"Miller",
"Wilson",
"Moore",
"Taylor",
"Anderson",
"Thomas",
"Jackson",
"White",
"Harris",
"Martin",
"Thompson",
"Garcia",
"Martinez",
"Robinson",
"Yee",
"Gupta"];


DWPE_TableFactory_Class.prototype.first_names=
[
"Katelyn",
"Ariana",
"Bailey",
"Camilla",
"Kumal",
"Jennifer",
"Melanie",
"Gianna",
"Charlotte",
"Paige",
"Whitney",
"Autumn",
"Payton",
"Faith",
"Sara",
"Isabelle",
"Caroline",
"Mary",
"Zoey",
"Gracie",
"Megan",
"Jordan",
"Robert",
"Aaron",
"Brayden",
"Thomas",
"Cameron",
"Hunter",
"Austin",
"Adrian",
"Connor",
"Owen",
"Aidan",
"Jason",
"Julian",
"Wyatt",
"Charles",
"Luis",
"Carter",
"Juan",
"Chase",
"Diego"

];

DWPE_TableFactory_Class.prototype.companies=
[
"Acme Inc",
"Arrow Ltd.",
"Featherweight Industries",
"XYZ Corp.",
"Greene & Greene",
"T. Moser & Sons",
"Stickley Co."
];

DWPE_TableFactory_Class.prototype.street=
[
"Foster Road",
"Dempsey Avenue",
"Kingston Highway",
"Rileyville Road",
"Hanover Avenue",
"Dale St."
];

DWPE_TableFactory_Class.prototype.city=
[
"Burlingame",
"Manchester",
"Ithaca",
"Arlington",
"Redwood Shores",
"Princeton"
];

DWPE_TableFactory_Class.prototype.state=
[
"MA",
"NY",
"CA",
"NJ",
"TX",
"FL"
];

DWPE_TableFactory_Class.prototype.getRandomInteger=function(low,high)
{
	if(high)
		return parseInt(Math.random()*(high-low))+low;
	else
		return parseInt(Math.random()*low);
		
	
}


DWPE_TableFactory_Class.prototype.month_names=new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec");
DWPE_TableFactory_Class.prototype.currency_codes=new Array("USD", "CNY", "CAD", "AUD", "GBP", "JPY", "EUR");

DWPE_TableFactory_Class.prototype.getRandomDate=function(low,high)
{
	var d=new Date();
	var newtimems=d.getTime()+(this.getRandomInteger(low,high)*24*60*60*1000);
		d.setTime(newtimems);

		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		return this.month_names[curr_month]+ " " +curr_date + ", " + curr_year;

}

DWPE_TableFactory_Class.prototype.getRandomTime=function()
{
	var d=new Date();
	var newtimems=d.getTime()+(this.getRandomInteger(0,23)*60*this.getRandomInteger(0,59)*1000);
		d.setTime(newtimems);

		var hh = this.getRandomInteger(1,12);
		var mm = this.getRandomInteger(0,59);
			mm = (mm<10)?'0'+mm:mm;
		var meridiem = (this.getRandomInteger(0,23)>12)?"AM":"PM";
		return hh+ ":" +mm + " " + meridiem;

}

DWPE_TableFactory_Class.prototype.getRandomPersona=function()
{
	
	var o={};
	
	
		o.exchange=this.getRandomInteger(200,999);
		o.lastname=this.last_names[parseInt(Math.random()*this.last_names.length)];
		o.firstname=this.first_names[parseInt(Math.random()*this.first_names.length)];
		o.fullname=o.firstname+" "+o.lastname;
		o.phone1="("+o.exchange+") "+this.getRandomInteger(200,999)+"-"+this.getRandomInteger(1000,9999);
		o.phone2="("+o.exchange+") "+this.getRandomInteger(200,999)+"-"+this.getRandomInteger(1000,9999);
		o.company=this.companies[parseInt(Math.random()*this.companies.length)];
		o.email=o.firstname+"."+o.lastname+"@"+o.company.replace(/[ \\.]/gi,"")+".com";
		o.street=this.street[parseInt(Math.random()*this.street.length)];
		o.address=this.getRandomInteger(999)+" "+o.street;
		o.city=this.city[parseInt(Math.random()*this.city.length)];
		o.state=this.state[parseInt(Math.random()*this.state.length)];
		o.zip=this.getRandomInteger(10000,99999)+"";
		o.empty="";
		o.currency=this.getRandomInteger(200,9999)+"."+this.getRandomInteger(0,99);
		o.currency=parseFloat(o.currency).toFixed(2);
		o.currencycode=this.currency_codes[parseInt(Math.random()*this.currency_codes.length)];
		o.status=DWPE_Utilities.getRandomStatusIconMarkup();
		o.past=this.getRandomDate(-1000,-1);
		o.future=this.getRandomDate(1,1000);
		o.int100=this.getRandomInteger(0,100);
		o.int100_100=this.getRandomInteger(-100,100);
		
		
		return o;
	
	
}


DWPE_TableFactory_Class.assignTableHeaderRowspan=function(node,rowspan)
{
	node.rowspan=(node.items && node.items.length==0)?rowspan:1;     //we take 1 row if we have children, otherwise we take up the remaining rows
	if(node.items)
	{
		var k_len=node.items.length;
		for(var k=0;k<k_len;k++)
		{
			DWPE_TableFactory_Class.assignTableHeaderRowspan(node.items[k],rowspan-1);
		}
	}


}


DWPE_TableFactory_Class.prototype.makeColumnValue=function(type,value)
{
	switch(type)
	{
		case 'text':
			return value;
		case 'link':
			return "<a href='javascript:void(0)'>"+value+"</a>";
		case 'spinbox':
		case 'checkbox':
		case 'radiogroup':
		case 'textbox':
		case 'textarea':
		case 'singleselectchoicelist':
		case 'multiselectlistbox':
		case 'multiselectchoicelist':
			
			var args=DWPE_FormFactory.getDefaultArgsListForType(type);
				args.help="";
				args.items=new Array();
				args.items.push({"label":value,"value":value,"checked":"1"})
				args.label=value;
				args.text=value;
			return DWPE_FormFactory.generateMarkup(args);
	}

}


DWPE_TableFactory_Class.prototype.toggleQBE=function()
{
	var $context=DWPE_Utilities.getContext();
	$context.closest('ux.dwpe-table').find("TR.qbe").toggleClass('show');
}

DWPE_TableFactory_Class.prototype.deleteRow=function()
{
	var $context=DWPE_Utilities.getContext();
	var $ux=$context.closest('ux.dwpe-table');
	
	
	//delete selected rows and clear the rows selected status
	$ux.find("table.table-body TR.selected").remove();
	DWPE_TableFactory.updateRowsSelected($ux);
}


DWPE_TableFactory_Class.prototype.updateRowsSelected=function($ux)
{
	
		var num_rows_selected=0;
		
		
		$ux.find("table.table-body TR").each(
			function(){if($(this).hasClass('selected')) num_rows_selected++;}
		)
		
			
		var rows_msg=(num_rows_selected==0)?"&nbsp;":"Rows Selected &nbsp;&nbsp;&nbsp;"+num_rows_selected;
		
		$ux.find('TD.rows-selected').html(rows_msg);
			
}

DWPE_TableFactory_Class.prototype.makeColumnVisibilityMenuItems=function()
{
	var $context=DWPE_Utilities.getContext(); 
	var $ux=$context.closest('ux.dwpe-table');
	var html="";
	
	var $columns=$ux.find("DIV.column");
		$columns.each(
		
			function()
			{		
				var $column=$(this);
				var menu_item=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");
					menu_item.label=$column.text();
					menu_item.item_type='toggle';
					menu_item.selected=($column.parent().hasClass('hide'))?'':'on';
					menu_item.cmd="javascript::DWPE_TableFactory.toggleColumn('"+$column.attr('col')+"')"
					
					html+=DWPE_WindowFactory.generateMenuItemMarkup(menu_item);
			}
		)
	
	$context.html(html);
	
	
}

DWPE_TableFactory_Class.prototype.showAllColumns=function()
{
	
	var $context=DWPE_Utilities.getContext(); 
	
		//update the column toggle menu items to 'on'
		$context.closest('ul').find('LI.toggle').addClass('on');
	
	var $ux=$context.closest('ux.dwpe-table');
		
		
		var col_ids=new Array();
		
		
		$ux.find("DIV.column").each(
		
			function()
			{
				var $div=$(this);
				var value=$div.attr('col');
				
				if(value)
					col_ids.push(value);
			}
		);
		
		
		$(col_ids).each(
		
		function()
		{
			$ux.find("DIV.col"+this).each(
			
				function()
				{
					var $div=$(this);
					var $parent=$div.closest("TH,TD");
						$parent.removeClass('hide');
					
				});
		});
		
		
}
DWPE_TableFactory_Class.prototype.toggleColumn=function(col_id)
{
	var $context=DWPE_Utilities.getContext(); 
	var	$ux=$context.closest('ux.dwpe-table');
		
		//read state of toggle menu item to determine which state to toggle column to
		var state=$context.hasClass('on')?1:0;
		$ux.find("DIV.col"+col_id).each(
		
			function()
			{
				var $div=$(this);
				var $parent=$div.closest("TH,TD");
					
				if(state)
					$parent.removeClass('hide');
				else
					$parent.addClass('hide');

			}
		
		)
	
}



/*this function stores default definitions for each type
 and returns them in JSON format */
DWPE_TableFactory_Class.prototype.getDefaultArgsListForType=function(type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();
	
	switch(type)
	{	
	
				
		case 'column':	
		
			return {	"_class":"DWPE_TableFactory_Class",
						"type":"column",
						"label":"Column",
						"value":"fullname",
						"key":"",
						"item_type":"normal",
						"width":"100",
						"sort":"not",
						"align":"left",
						"format":"text",
						"visibility":" "
						
					};
						
			break;	
		
		
		case 'column-item':	
		
			return '{ "label":"Column" , "value":"fullname" , "key":"" , "item_type":"normal" , "width":"100" , "sort":"not" , "align":"left" , "format":"text" , "visibility":" ", items:[]}';
						
			break;	
		default:
			return {};
				
				
	}
	


}



/*this function stores default property sheet definitions for each type
 and returns them in JSON format */
DWPE_TableFactory_Class.prototype.getPropertySheetFields=function(_type)
{

	switch(_type)
	{	
		
		case 'column':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_TableFactory"},
						{type:"hidden",id:"_type",name:"Type",value:"column"},
						
						
						{type:"text",id:"label",name:"Column&nbsp;Name",value:"Column Title"},
						{type:"chooser",id:"visible",name:"Visibility",value:" =Visible&hide=Hidden"},
						{type:"chooser",id:"format",name:"Format",value:"text=Plain Text&link=Link&textbox=Text Field&textarea=Textarea&checkbox=Checkbox Group&radiogroup=Radio Group&singleselectchoicelist=Single-Select Choice List&multiselectchoicelist=Multi-Select Choice List&multiselectlistbox=Multi-Select List Box&spinbox=Spinbox"},
						{type:"chooser",id:"value",name:"Generated&nbsp;Value",value:"empty=Empty&fullname=Full Name&lastname=Last Name&firstname=First Name&company=Company&email=Email&phone1=Work Phone&phone2=Mobile Phone&address=Address&city=City&state=State&zip=Postal Code&currency=Currency&currencycode=Currency Code&status=Status Icon&past=Past Date&future=Future Date&int100=Integer [0 to 100]&int100_100=Integer [-100 to 100]"},
						{type:"chooser",id:"sort",name:"Sort",value:"not=Not Sortable&none=Not Sorted&asc=Sorted Ascending&desc=Sorted Descending"},
						
						
						{type:"chooser",id:"align",name:"Alignment",value:"left=Start&center=Center&right=End"},
						{type:"text",id:"width",name:"Width",value:"100",help:'(pixels values only)'}
						
						
						
						
						
						
						
						
					
						
					];
			break;
	
				
		default:
			return [];	
			break;		
	}
	


}
