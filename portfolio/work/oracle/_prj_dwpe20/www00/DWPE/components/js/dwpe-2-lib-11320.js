/* DWPE 2 Build 11320 */

jQuery.extend(jQuery.expr[':'],{dwpe:function(a){return(a.nodeName.toUpperCase().indexOf('UX')>-1)?true:false;}});function DWPE_Base_Class()
{var _this=this;this._class="DWPE_Base_Class";this.parent=null;this.markup="";this.properties={};function privateMethod()
{_this.log("private method called!");}
this.log=function(str)
{if(console)console.log(str);else alert(str);}
this.privilegedMethod=function()
{this.log("priveleged method called!");this.log("privileged method calling private method...");privateMethod();}
return this;}
DWPE_Base_Class.prototype.publicMethod=function()
{this.log("public method called!");this.log("public method calling privileged method...");this.privilegedMethod();}
DWPE_Base_Class.prototype.overrideMe=function()
{this.log("I haven't been overwritten yet!");}
DWPE_Base_Class.prototype.getID=function()
{return"ux"+new Date().getTime();}
DWPE_Base_Class.prototype.setProperties=function(args)
{this.properties={};for(var argName in args)
{this.properties[argName]=args[argName];}}
DWPE_Base_Class.prototype.update=function()
{this.label="This is a test";this.markup="<li class='DWPE_Base'>"+this.label+"</li>";}
DWPE_Base_Class.prototype.render=function()
{this.update();this.parent.html(this.markup);}
DWPE_Base_Class.prototype.destroy=function()
{this.container.remove();}
DWPE_Base_Class.prototype.defineDWPE_Properties=function()
{this.properties["_class"]=0;this.properties["label"]=0;}
DWPE_Base_Class.prototype.serialize=function()
{var args={};for(var propName in this.properties)
{args[propName]=this.properties[propName];}
return DWPE_Base_Class.stringifyJSON(args,0);}
DWPE_Base_Class.getArgsAsString=function(args)
{return"<!--args:"+DWPE_Base_Class.encodeJSONString(args)+"-->";}
var attrib_name_lookup={};attrib_name_lookup["a1"]="state";attrib_name_lookup["b1"]="required";attrib_name_lookup["c1"]="label";attrib_name_lookup["d1"]="value";attrib_name_lookup["e1"]="icon";attrib_name_lookup["f1"]="tooltip";attrib_name_lookup["g1"]="command";attrib_name_lookup["h1"]="itemtype";attrib_name_lookup["i1"]="selected";attrib_name_lookup["j1"]="help";attrib_name_lookup["k1"]="items";attrib_name_lookup["l1"]="buttontype";var attrib_code_lookup={};attrib_code_lookup["state"]="a1";attrib_code_lookup["required"]="b1";attrib_code_lookup["label"]="c1";attrib_code_lookup["value"]="d1";attrib_code_lookup["icon"]="e1";attrib_code_lookup["tooltip"]="f1";attrib_code_lookup["command"]="g1";attrib_code_lookup["itemtype"]="h1";attrib_code_lookup["selected"]="i1";attrib_code_lookup["help"]="j1";attrib_code_lookup["items"]="k1";attrib_code_lookup["buttontype"]="l1";DWPE_Base_Class.decodeJSONString=function(args_string)
{for(var code in attrib_name_lookup)
{var re=RegExp(code+":","gi");args_string=args_string.replace(re,"'"+attrib_name_lookup[code]+"':");}
eval("var args="+args_string);return args;}
DWPE_Base_Class.encodeJSONString=function(args)
{var str="{";var quote="'";var delim="";for(var propName in args)
{var obj=args[propName];if(propName=="_class")continue;if(propName=="type")continue;if(propName=="items"&&obj.length==0)continue;propName=(attrib_code_lookup[propName])?attrib_code_lookup[propName]:quote+propName+quote;if(obj==null){continue;}
switch(typeof obj)
{case"object":var localDelim="";var localStr=propName+':[';for(var i=0;i<obj.length;i++)
{localStr+=localDelim+DWPE_Base_Class.encodeJSONString(obj[i]);localDelim=",";}
localStr+="]";str+=delim+localStr;break;case"number":str+=delim+propName+':'+obj;break;case"string":default:obj=obj.replace(/\'/g,"\\'");str+=delim+propName+':'+quote+obj+quote;break;}
delim=",";}
str+="}";return str;}
DWPE_Base_Class.stringifyJSON=function(args,depth,single_line,compact)
{var tab="\t";var newline="\r\n";var quote='"';if(single_line)
{tab="";newline="";}
if(compact)
{quote="'";}
var str="";var indent="";for(i=0;i<depth;i++){indent+=tab;}
str+=indent+"{"+newline;var delim="";for(var propName in args)
{var obj=args[propName];if(compact)
{if(propName=="_class")continue;if(propName=="type")continue;if(propName=="items"&&obj.length==0)continue;}
switch(typeof obj)
{case"object":if(obj==null)continue;var localDelim=tab;var localStr=indent+tab+quote+propName+quote+':['+newline;for(var index in obj)
{localStr+=localDelim+indent+""+DWPE_Base_Class.stringifyJSON(obj[index],depth+1,single_line,compact);localDelim=","+newline+tab;}
localStr+=newline+indent+"]";str+=delim+localStr;break;case"number":str+=delim+indent+tab+quote+propName+quote+':'+obj;break;case"string":default:obj=obj.replace(/\'/g,"\\'");str+=delim+indent+tab+quote+propName+quote+':'+quote+obj+quote;break;}
delim=","+newline;}
str+=newline+indent+tab+"}";return str;}
DWPE_Base_Class.prototype.make=function(params)
{var args;if(typeof(params)=="object")
{args=params;}
else
{args=JSON.parse(params);}
var call="new "+args._class+"()";var o=eval(call);o.setProperties(args);return o;}
DWPE_Base_Class.prototype.getMarkup=function()
{this.update();return this.markup;}
var DWPE=new DWPE_Base_Class();;DWPE_BaseFactory_Class.prototype=new DWPE_Base_Class();DWPE_BaseFactory_Class.constructor=DWPE_BaseFactory_Class;DWPE_BaseFactory_Class.prototype._super=DWPE_Base_Class.prototype;function DWPE_BaseFactory_Class()
{this._class="DWPE_BaseFactory_Class";return this;}
DWPE_BaseFactory=new DWPE_BaseFactory_Class();DWPE_BaseFactory_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_BaseFactory_Class.prototype.make=function($ux)
{}
DWPE_BaseFactory_Class.prototype.getRootClass=function(class_string)
{var _class=class_string.toLowerCase();_class=_class.split(" ");_class=_class[0];return _class;}
DWPE_BaseFactory_Class.prototype.getDefaultArgsListForType=function(type)
{}
DWPE_BaseFactory_Class.prototype.getPropertySheetFields=function(_type)
{}
DWPE_BaseFactory_Class.prototype.initEditableObjectList=function(listName)
{var $list=$("#"+listName);if($list.attr("initialized")==1)return;$list.change(function(event)
{var $select=$(this);var $option=$($select.attr("options")[$select.attr("selectedIndex")]);var args=$option.data("obj");DWPE_BaseFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);for(var argName in args)
{$("#item__"+argName).val(args[argName]);}});$('<p align="right" id="addRemoveListItems">'+'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_BaseFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_BaseFactory_Class.removeSelectedListItem(\''+listName+'\')">'+'</p>').insertAfter($list);$list.attr("initialized",1);}
DWPE_BaseFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{var args=DWPE_BaseFactory.getPropertySheetFields(type);var markup="";markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';if(args.length==0)
markup+="<tr><td>No property sheet exists for this item type.</td></tr>";else
{for(var argName in args)
{var arg=args[argName];markup+="<tr>";switch(arg.type)
{case'select':markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+
arg.value+'</select></td>';break;case'chooser':var options=arg.value.split("&");markup+="<td class='label'>"+arg.name+"</td>";markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";for(var i in options)
{var option=options[i].split("=");markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";}
markup+='</select></td>';break;case'hidden':markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';break;case'text':default:markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';break;}
markup+="</tr>";}}
markup+="</table>";$("#"+listName+"-property-sheet").html(markup).show("slide");$("#"+listName+"-selected-item-properties :input").keyup(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}}).change(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}})}
DWPE_BaseFactory_Class.removeSelectedListItem=function(listID)
{var $list=$("#"+listID);var i=$list.attr("selectedIndex");var len=$list.attr("options").length;if(len==0)
return;$($list.attr("options")[i]).remove();if(len-1<=0)
return;i=(i-1<0)?0:i-1;$list.attr("selectedIndex",i);$list.change();}
DWPE_BaseFactory_Class.addListItem=function(listID)
{var $list=$("#"+listID);var $option=$("<option></option>");var args=DWPE_BaseFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));$option.text(args.label);$option.data("obj",args);$list.append($option);};DWPE_Utilities={};DWPE_Utilities.performCommand=function($item,cmd)
{if(DWPE_Utilities.isDisabled($item))return;if(cmd)
{var action=cmd.split("::");var param=action[1];switch(action[0].toLowerCase())
{case"js":try{$(document).data('context',$item);eval(param);}
catch(e){alert("error in command format");}
break;case"dialog":try{$(document).data('context',$item);DWPE_WindowFactory.open($item,param);}
catch(e){alert("error loading dialog");}
break;case"new":try
{window.open('',action[1],'');}catch(e){alert("error loading content in new window")}
break;case"open":default:try
{document.location=action[1];}catch(e){alert("error loading content in current window")}
break;}}}
DWPE_Utilities.performAction=function(o)
{$callee=$(o)
if($callee.attr("cmd").indexOf("js::")==0)
DWPE_Utilities.exec($callee);else
DWPE_Utilities.loadURL($callee);}
DWPE_Utilities.loadURL=function(o)
{var $callee=$(o);if(DWPE_Utilities.isDisabled($callee))return;var url=$callee.attr("cmd").split("::")[1];document.location=url;}
DWPE_Utilities.exec=function(o)
{var $callee=$(o);if(DWPE_Utilities.isDisabled($callee))return;var cmd=$callee.attr("cmd").split("::")[1];try{$(document).data('context',$callee);eval(cmd);}
catch(e){alert("error in command format");}}
DWPE_Utilities.getContext=function()
{return $(document).data('context');}
DWPE_Utilities.isDisabled=function(o)
{var $btn=$(o);if($btn.hasClass('Button_Disabled')||$btn.hasClass('Disabled')||$btn.hasClass('disabled'))
return true;else
return false;}
DWPE_Utilities.getUniqueId=function()
{return'ux'+new Date().getTime();}
DWPE_Utilities.scrollbarWidth=null;DWPE_Utilities.getScrollbarWidth=function()
{if(DWPE_Utilities.scrollbarWidth==null)
{var div=$('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');$('body').append(div);var w1=$('div',div).innerWidth();div.css('overflow-y','scroll');var w2=$('div',div).innerWidth();$(div).remove();DWPE_Utilities.scrollbarWidth=(w1-w2);}
return DWPE_Utilities.scrollbarWidth;}
DWPE_Utilities.isObjectContainedByID=function($object,parentID)
{if(!parentID)return true;var $parent=$($object.parent());while($parent.attr('id')!=parentID&&$parent.attr('tag')!='body')
{$parent=$($parent.parent());}
if($parent.attr('id')==parentID||$parent.attr('tag')=='body')
return true;else
return false;}
DWPE_Utilities.format=function(type,value)
{var fv;switch(type)
{case'usd':var num=isNaN(value)||value===''||value===null?0.00:value;num=parseFloat(num).toFixed(2);for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)
{num=num.substring(0,num.length-(4*i+3))+','+
num.substring(num.length-(4*i+3));}
num=num.replace(/,\./gi,'.');fv="$"+num+"";break;default:fv=value;break;}
return fv;}
DWPE_Utilities.icons={};DWPE_Utilities.icons["blank"]={index:0,tooltip:""};DWPE_Utilities.icons["confirm"]={index:1,tooltip:""};DWPE_Utilities.icons["error"]={index:2,tooltip:""};DWPE_Utilities.icons["info"]={index:3,tooltip:""};DWPE_Utilities.icons["warning"]={index:4,tooltip:""};DWPE_Utilities.icons["duplicate"]={index:5,tooltip:"Duplicate"};DWPE_Utilities.icons["indent"]={index:6,tooltip:"Indent"};DWPE_Utilities.icons["unindent"]={index:7,tooltip:"Outdent"};DWPE_Utilities.icons["search"]={index:8,tooltip:"Search"};DWPE_Utilities.icons["go"]={index:8,tooltip:"Search"};DWPE_Utilities.icons["moveleft"]={index:9,tooltip:"Remove selected items from list"};DWPE_Utilities.icons["previous"]={index:9,tooltip:"Show the previous page"};DWPE_Utilities.icons["moveright"]={index:10,tooltip:"Move selected items to other list"};DWPE_Utilities.icons["next"]={index:10,tooltip:"Show the next page"};DWPE_Utilities.icons["moveleftall"]={index:11,tooltip:"Remove all items from list"};DWPE_Utilities.icons["moverightall"]={index:12,tooltip:"Move all items to other list"};DWPE_Utilities.icons["movebottom"]={index:13,tooltip:"Move selected items to bottom of list"};DWPE_Utilities.icons["movetop"]={index:14,tooltip:"Move selected items to top of list"};DWPE_Utilities.icons["movedown"]={index:15,tooltip:"Move selected items down one in list"};DWPE_Utilities.icons["moveup"]={index:16,tooltip:"Move selected items up one in list"};DWPE_Utilities.icons["create"]={index:17,tooltip:""};DWPE_Utilities.icons["freezecolumn"]={index:18,tooltip:"Freeze Column"};DWPE_Utilities.icons["unfreezecolumn"]={index:19,tooltip:"Unfreeze Column"};DWPE_Utilities.icons["wrap"]={index:20,tooltip:"Wrap Text"};DWPE_Utilities.icons["detach"]={index:21,tooltip:"Detach Table"};DWPE_Utilities.icons["add"]={index:22,tooltip:"Add"};DWPE_Utilities.icons["addrow"]={index:22,tooltip:"Add Row"};DWPE_Utilities.icons["addnode"]={index:22,tooltip:"Add Node"};DWPE_Utilities.icons["addmany"]={index:33,tooltip:"Select and Add"};DWPE_Utilities.icons["delete"]={index:23,tooltip:"Delete"};DWPE_Utilities.icons["remove"]={index:23,tooltip:"Remove"};DWPE_Utilities.icons["edit"]={index:24,tooltip:"Edit"};DWPE_Utilities.icons["exportexcel"]={index:25,tooltip:"Export to Excel"};DWPE_Utilities.icons["folder"]={index:26,tooltip:""};DWPE_Utilities.icons["go-up"]={index:27,tooltip:"Go Up"};DWPE_Utilities.icons["go-to-top"]={index:28,tooltip:"Go to Top"};DWPE_Utilities.icons["file"]={index:29,tooltip:""};DWPE_Utilities.icons["show-as-top"]={index:30,tooltip:"Show as Top"};DWPE_Utilities.icons["hierselector"]={index:31,tooltip:"Show Hierarchy"};DWPE_Utilities.icons["qbe"]={index:32,tooltip:"Query by Example"};DWPE_Utilities.icons["lov"]={index:34,tooltip:"Choose..."};DWPE_Utilities.icons["keyflex"]={index:35,tooltip:""};DWPE_Utilities.icons["details"]={index:36,tooltip:""};DWPE_Utilities.icons["date"]={index:37,tooltip:"Select Date"};DWPE_Utilities.icons["refresh"]={index:38,tooltip:"Refresh"};DWPE_Utilities.icons["uap"]={index:39,tooltip:""};DWPE_Utilities.icons["closetab"]={index:252,tooltip:"Close"};DWPE_Utilities.icons["choicelist"]={index:253,tooltip:""};DWPE_Utilities.icons["help"]={index:254,tooltip:"Help"};DWPE_Utilities.icons["person"]={index:255,tooltip:""};DWPE_Utilities.icons["expanded-node"]={index:189,tooltip:"",grid:9};DWPE_Utilities.icons["collapsed-node"]={index:190,tooltip:"",grid:9};DWPE_Utilities.icons["term-def"]={index:132,tooltip:"%DEFINITION%",grid:12};DWPE_Utilities.icons["updated-value"]={index:133,tooltip:"Updated Value",grid:12};DWPE_Utilities.icons["status-ok"]={index:134,tooltip:"Ok status",grid:12};DWPE_Utilities.icons["status-pending"]={index:135,tooltip:"Pending status",grid:12};DWPE_Utilities.icons["status-error"]={index:136,tooltip:"Error status",grid:12};DWPE_Utilities.icons["status-locked"]={index:137,tooltip:"Locked status",grid:12};DWPE_Utilities.icons["status-not-started"]={index:138,tooltip:"Not Started status",grid:12};DWPE_Utilities.icons["status-unlocked"]={index:139,tooltip:"Unlocked status",grid:12};DWPE_Utilities.icons["status-warn"]={index:140,tooltip:"Warning status",grid:12};DWPE_Utilities.icons["prev-item"]={index:141,tooltip:"Previous Item",grid:12};DWPE_Utilities.icons["next-item"]={index:142,tooltip:"Next Item",grid:12};DWPE_Utilities.icons["requires-one"]={index:144,tooltip:"At least one is required",grid:12};DWPE_Utilities.icons["required"]={index:145,tooltip:"Required",grid:12};DWPE_Utilities.icons["not-required"]={index:999,tooltip:"",grid:0};DWPE_Utilities.getIcon=function(iconName)
{var icon;try{icon=DWPE_Utilities.icons[iconName.toLowerCase()];}catch(e){icon={index:0};}
var iconID=icon.index;var x=((iconId%32)*-16);var y=(parseInt(iconId/32)*-16);return x+"px "+y+"px";}
DWPE_Utilities.getIconNameByIndex=function(iconIndex)
{var iconIndex;var iconName=null;for(var _name in DWPE_Utilities.icons)
{var icon=DWPE_Utilities.icons[_name];if(icon.index==iconIndex)
{iconName=_name;break;}}
return(iconName)?iconName:"blank";}
DWPE_Utilities.getRandomIcon=function()
{var n=1+parseInt(Math.random()*36);var i=0;for(var argName in DWPE_Utilities.icons)
{if(n==i++)return argName;}
return'blank';}
DWPE_Utilities.getRandomStatusIconMarkup=function()
{var n=134+parseInt(Math.random()*7);var i=0;var icon_name='blank'
for(var argName in DWPE_Utilities.icons)
{if(n==DWPE_Utilities.icons[argName].index)
{icon_name=argName;break;}}
return DWPE_Utilities.getIconMarkup(icon_name);}
DWPE_Utilities.getIconMarkup=function(iconName,extension,override_tooltip)
{var icon=null;var iconId="";var style="";extension=(!extension)?"":extension;try{icon=DWPE_Utilities.icons[iconName.toLowerCase()];iconId=" ico-"+iconName;}
catch(e)
{iconId="";}
if(icon==null)
{iconId="";return"<div class='icons "+iconId+" "+extension+"' style='background-image:url("+iconName+")'></div>";}
else
{var tooltip=(override_tooltip&&override_tooltip.length>0)?"":icon.tooltip;var markup="<div class='icons "+iconId+" "+extension+"' ";if(icon.tooltip.length>0)
markup+=" title='"+tooltip+"' ";markup+="></div>";return markup;}}
DWPE_Utilities.showWaitIcon=function($callee)
{var $wait=$("<div class='wait'></div");var L=$callee.offset().left-$callee.parent().offset().left;var T=$callee.offset().top-$callee.parent().offset().top;$wait.css({top:T,left:L,"z-index":DWPE_WindowFactory.getNextZ()});$callee.parent().append($wait);return $wait;}
DWPE_Utilities.makeJavascriptSafe=function(str)
{return str.replace(/'/g,'"');}
DWPE_Utilities.getSampleContent=function(length)
{switch(length)
{case'confirmation-dialog':return"The request was canceled.";break;case'error-dialog':var str='<div><b>Messages for this page are listed below.</b></div>'+'<table>'+'<tr valign="top">'+' <td rowspan="2"><a href="javascript:;">Field&nbsp;Name&nbsp;1</a></td>'+'<td>'+DWPE_Utilities.getIconMarkup('error')+'</td>'+'<td>Text describing the <span style="color:  red; font-weight: bold;">error</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+'</tr>'+'<tr valign="top">'+'<td>'+DWPE_Utilities.getIconMarkup('warning')+'</td>'+'<td>Text describing the <span style="color:  rgb(255, 204, 51); font-weight: bold;">warning</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+'</tr>'+'<tr valign="top">'+'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;2</a></td>'+'<td>'+DWPE_Utilities.getIconMarkup('warning')+'</td>'+'<td>Text describing the <span style="color:   rgb(255, 204, 51); font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+'</tr>'+'<tr valign="top">'+'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;3</a></td>'+'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+'<td>Text describing the <span style="color:   blue; font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+'</tr>'+'</table>';return str;break;case'warning-dialog':var str='You have not saved your changes. If you leave this page, then your changes will be lost. Do you want to continue?';return str;break;case'info-dialog':var str='<div><b>Messages for this page are listed below.</b></div>'+'<table>'+'<tr valign="top">'+' <td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;1</a></td>'+'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+'<td>Text describing the <span style="color: blue; font-weight: bold;">warning</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+'</tr>'+'<tr valign="top">'+'<td rowspan="1"><a href="javascript:;">Field&nbsp;Name&nbsp;2</a></td>'+'<td>'+DWPE_Utilities.getIconMarkup('info')+'</td>'+'<td>Text describing the <span style="color:  blue; font-weight: bold;">info</span> in detail.  If it&apos;s going to wrap it would look like this.</td>'+'</tr>'+'</table>';return str;break;case'long':var str="";for(var i=0;i<6;i++)
{str+=DWPE_Utilities.getLoremIpsum();}
return str;break;case'medium':var str="";for(var i=0;i<3;i++)
{str+=DWPE_Utilities.getLoremIpsum();}
return str;break;case'short':default:return DWPE_Utilities.getLoremIpsum();break;}}
DWPE_Utilities.getLoremIpsum=function()
{return'<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem illo inventore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>';}
DWPE_Utilities.triggerResize=function()
{$(window).trigger('resize');}
DWPE_Utilities.componentResizeThrottle=null;DWPE_Utilities.triggerComponentResize=function()
{if(DWPE_Utilities.componentResizeThrottle==null)
{DWPE_Utilities.componentResizeThrottle=setTimeout
(function()
{$(window).trigger('dwpe-component-resize');DWPE_Utilities.componentResizeThrottle=null;},250);}};function DWPE_ObjectFactory_Class()
{this.queue=new Array();this.timer=null;this.performanceMonitoringOn=false;}
var DWPE_ObjectFactory=new DWPE_ObjectFactory_Class();DWPE_ObjectFactory_Class.prototype.add=function(work_items)
{this.queue=work_items;this.qty=this.queue.length;this.processQueue();}
DWPE_ObjectFactory_Class.prototype.processFragment=function($fragment)
{this.add($fragment.find(":dwpe"));}
DWPE_ObjectFactory_Class.prototype.processPage=function()
{this.add($(":dwpe"));}
DWPE_ObjectFactory_Class.prototype.processQueue=function()
{this.queue.each(function()
{var $parent=$(this);var _class=$parent.attr("class").toLowerCase();_class=_class.split(" ");_class=_class[0];switch(_class)
{case'dwpe-radiogroup':case'dwpe-checkbox':case'dwpe-prompt':case'dwpe-textarea':case'dwpe-textbox':case'dwpe-fileupload':case'dwpe-link':break;case'dwpe-table':DWPE_TableFactory.make($parent);break;case'dwpe-tree':DWPE_TreeFactory.make($parent);break;case'dwpe-menu':DWPE_WindowFactory.make($parent);break;case'dwpe-singleselectchoicelist':case'dwpe-spinbox':case'dwpe-multiselectchoicelist':case'dwpe-multiselectlistbox':case'dwpe-datetimepicker':case'dwpe-lov':DWPE_FormFactory.make($parent);break;case'dwpe-horizontal-splitter':case'dwpe-vertical-splitter':case'dwpe-accordion':case'dwpe-tabset':case'dwpe-trainset':case'dwpe-header':case'dwpe-subheader':case'dwpe-subsubheader':DWPE_PanelFactory.make($parent);break;case'dwpe-carousel':DWPE_Carousel.make($parent);break;case'dwpe-toolbar':DWPE_Toolbar.make($parent);break;case'dwpe-button':case'dwpe-overflow-btn':case'dwpe-toolbar-resize':break;case'dwpe-window-container':DWPE_WindowFactory.make($parent);break;default:var args=ux_data[$parent.attr("id")];var obj=DWPE.make(args);obj.parent=$parent;obj.render();break;}})
clearInterval(this.timer);if(this.performanceMonitoringOn==true)this.postPerformanceMonitoringResults();setTimeout(function(){DWPE_Utilities.triggerResize()},100);}
DWPE_ObjectFactory_Class.prototype.startPerformanceMonitoring=function()
{this.performanceMonitoringOn=true;performanceMonitorBusy=true;this.start=new Date().getTime();}
DWPE_ObjectFactory_Class.prototype.postPerformanceMonitoringResults=function()
{this.end=new Date().getTime();var elapsed=this.end-this.start;storeData(elapsed,this.qty);var msg="<p>Time to make "+this.qty+" object(s) was "+elapsed+" ms</p>";$("#time-to-execute").append(msg);this.performanceMonitoringOn=true;performanceMonitorBusy=false;var json_string=$("#metadata").val();if(json_string.length==0)return;updatePropertySettings(json_string);}
var lapsedTimes=new Array();var quants=new Array();var performanceMonitorBusy=false;var performanceTests=[10,20,30,40,50];var performanceTestStep=0;var performanceMonitor;var performanceMonitorMessages="";function runPerformanceTest()
{$(":input").each(function(i)
{$(this).attr("disabled","disabled");})
$("#time-to-execute").empty();performanceTestStep=0;performanceMonitorMessages="";performanceMonitor=setInterval(_performTest,1000);}
function _performTest()
{if(performanceTestStep<performanceTests.length)
{if(performanceMonitorBusy==false)
{$("#preview").empty();$("#qty").val(performanceTests[performanceTestStep++]);commitToPreview();}}
else
{$(":input").each(function(i)
{$(this).removeAttr("disabled");});$("#qty").val(1);makeChart();clearInterval(performanceMonitor);}}
function storeData(t,q)
{lapsedTimes.push(t);quants.push(q);}
function makeChart()
{var quantities=quants.join(",");var values=lapsedTimes.join(",");$("#performance-chart").html("<img src='http://chart.apis.google.com/chart?chs=200x125&cht=lc&chds=0,3000&chco=0077CC&chd=t:"+values+"'/>");};function DWPE_Window_Class()
{this.zCount=999;this.windows=new Array();this.groups={};this.precedingGroup=null;this.mostRecentGroup=null;this.shadowWidth=16;this.shadowHeight=16;return this;}
var DWPE_Window=new DWPE_Window_Class();DWPE_Window_Class.prototype.addWindow=function(_callee,id,_type,_group)
{var callee=(!_callee)?$("body"):_callee;var type=(!_type)?"menu":_type;var group=(_group==null)?this.mostRecentGroup:_group;var windowWidth=$(window).width();var windowHeight=$(document).height();var $mask=this.makeModalMask(group,$('body'),callee);var location=callee.offset();var z=$mask.attr("zCount");var w;switch(type)
{case'dialog':case'overflow-menu':w=$(DWPE_Window_Class.addShadowFrame(id,"<ul id='"+id+"-body' class='DWPE_window_overflow'></ul>"));w.css({'zIndex':z++,'left':location.left+callee.width(),'top':location.top});break;case'menu':default:w=$(DWPE_Window_Class.addShadowFrame(id,"<ul id='"+id+"-body' class='DWPE_Window_Body Menu'></ul>"));w.css({'zIndex':z++,'left':location.left,'top':location.top+callee.height()});break;}
$mask.append(w);this.groups[group].push(w);$mask.attr("zCount",z);return w;}
DWPE_Window_Class.prototype.makeModalMask=function(group,$parent,callee)
{var $mask;if(!this.groups[group])
{this.groups[group]=new Array();$mask=$("<div class='mask'></div>");$parent.append($mask);this.groups[group].push($mask);$mask.data("callee",callee);var maskHeight=$(document).height();var maskWidth=$(window).width();$mask.css({'z-index':DWPE_WindowFactory.getNextZ(),'top':0,'left':0,'width':maskWidth,'height':maskHeight});$mask.click(function(){DWPE_Window.closeWindowGroup(group);});$mask.attr("zCount",0);this.precedingGroup=this.mostRecentGroup;this.mostRecentGroup=group;}
else
{$mask=this.groups[group][0];}
return $mask;}
DWPE_Window_Class.addShadowFrame=function(id,body)
{var frame="<div class='DWPE_window'>"+body+"</div>";return frame;}
DWPE_Window_Class.prototype.closeWindowGroup=function(group)
{var win=this.groups[group];if(!win)return;this.mostRecentGroup=win.precedingGroup|"window";var mask=win[0];if(mask&&mask.data("callee"))
{mask.data("callee").trigger("cleanup");}
while(win.length>0)
{var w=win.pop();w.detach();}
this.groups[group]=null;}
DWPE_Window_Class.prototype.removeWindow=function()
{var w=this.windows.pop();w.remove();this.zCount--;}
DWPE_Window_Class.prototype.removeAllWindows=function()
{while(this.windows.length>0)
{this.removeWindow();}}
DWPE_Window_Class.anchorTo=function(pos,$object,$window)
{var location=$object.offset();var windowWidth=$(window).width();var windowHeight=$(window).height();var left=0,top=0;var shadowWidth=shadowHeight=16;switch(pos)
{case'tr':default:var left=location.left+$object.width();if(left+$window.width()>windowWidth*.9)
left=location.left-$window.width()+shadowWidth;var top=location.top;if(top+$window.height()>windowHeight*.9)
top=location.top+$object.height()-$window.height()+shadowHeight;break;}
$window.css({'left':left,'top':top});};DWPE_ButtonFactory_Class.prototype=new DWPE_Base_Class();DWPE_ButtonFactory_Class.constructor=DWPE_ButtonFactory_Class;DWPE_ButtonFactory_Class.prototype._super=DWPE_Base_Class.prototype;function DWPE_ButtonFactory_Class()
{this._class="DWPE_ButtonFactory_Class";return this;}
DWPE_ButtonFactory=new DWPE_ButtonFactory_Class();DWPE_ButtonFactory_Class.prototype.formatString=function(str)
{if(str)
str=str.replace(/ /g,"&nbsp;").replace(/_(.)/g,"<u>$1</u>");return str;}
DWPE_ButtonFactory_Class.prototype.makeClickableRegion=function(content,render_style)
{var newline="\r\n";tab="\t";var tag=(render_style&&render_style=="toolbar-item")?"li":"ux";var className=this.buttonClass;if(this.properties.state=="0")
className+=" Button_Disabled";else if(this.properties.state=="2")
className+=" Button_Active";var markup="\n<"+tag+" class='"+className+"' ";if(this.properties.tooltip)
markup+=" title='"+this.properties.tooltip+"' ";if(this.properties.command)
markup+=" cmd='"+DWPE_Utilities.makeJavascriptSafe(this.properties.command)+"'";markup+=">";markup+=content;if(!render_style||render_style=="command-button")
markup+=DWPE_Base_Class.getArgsAsString(this.properties);markup+="</"+tag+">";return markup;}
DWPE_ButtonFactory_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_ButtonFactory_Class.prototype.make=function(args,render_style)
{this.properties={};for(var argName in args)
{this.properties[argName]=args[argName];}
switch(args.type)
{case'TextButton':return this.generateTextButtonMarkup(args,render_style);break;case'InlineSelector':return this.generateInlineSelectorButtonMarkup(args,render_style);break;case'RadioButtonGroup':return this.generateRadioButtonGroupMarkup(args,render_style);break;case'IconicButton':return this.generateIconicButtonMarkup(args,render_style);break;case'IconicTextButton':return this.generateIconicTextButtonMarkup(args,render_style);break;case'ToggleButton':return this.generateToggleButtonMarkup(args,render_style);break;case'ToolbarSeparator':return this.generateToolbarSeparatorMarkup(args,render_style);break;default:args.label=this.formatString(args.label+" [could not resolve button type]");return this.generateTextButtonMarkup(args,render_style);break;}}
DWPE_ButtonFactory_Class.prototype.setDefaultValue=function(name,value)
{if(!this.properties[name])this.properties[name]=value;}
DWPE_ButtonFactory_Class.prototype.generateToggleButtonMarkup=function(args,render_style)
{var item={}
item.label=this.formatString(args.label);item.command=args.command;item.tooltip=args.tooltip;item.icon=args.icon;args.items=[];args.items.push(item);var tag=(render_style&&render_style=="toolbar-item")?"li":"ux";var _className="dwpe-button ToggleButton";_className+=(this.properties.state==0)?" Button_Disabled":"";var markup="\n<"+tag+" class='"+_className+"' style='padding:0px;margin:0px;' >"+"<ul>";var props=args;var button_style=props.button_style;var _class="DWPE_ButtonFactory_Class";var state=(props.state!=null)?props.state:"1";var selected=parseInt(props.selected);for(var index in props.items)
{var item=props.items[index];item.type=button_style;item._class=_class;item.state=state;markup+=this.make(item,"toolbar-item");}
markup+="</ul>";if(!render_style||render_style=="command-button")
markup+=DWPE_Base_Class.getArgsAsString(args);markup+="</"+tag+">";return markup;}
DWPE_ButtonFactory_Class.prototype.generateRadioButtonGroupMarkup=function(args,render_style)
{var tag=(render_style&&render_style=="toolbar-item")?"li":"ux";var _className="dwpe-button RadioButtonGroup";_className+=(this.properties.state==0)?" Button_Disabled":"";var markup="\n<"+tag+" class='"+_className+"' style='padding:0px;margin:0px;' >"+"<ul>";var props=args;var button_style=props.button_style;var _class="DWPE_ButtonFactory_Class";var state=(props.state!=null)?props.state:"1";var selected=parseInt(props.selected);for(var index in props.items)
{var item=props.items[index];item.type=button_style;item._class=_class;item.state=state;markup+=this.make(item,"toolbar-item");}
markup+="</ul>";if(!render_style||render_style=="command-button")
markup+=DWPE_Base_Class.getArgsAsString(args);markup+="</"+tag+">";return markup;}
DWPE_ButtonFactory_Class.prototype.generateInlineSelectorButtonMarkup=function(args,render_style)
{this.setDefaultValue("url","");this.setDefaultValue("target","");this.buttonClass="InlineSelectorInner";var split=(args.command&&args.command.length>0)?"Split":"";var outer_class="";var label="<span class='label'>"+this.formatString(args.label)+"</span>";var icon=DWPE_Utilities.getIconMarkup(args.icon,"",args.tooltip);switch(args.button_style)
{case"IconicTextButton":outer_class+="dwpe-button InlineSelector"+split+" IconicButton ";break;case"IconicButton":outer_class+="dwpe-button InlineSelector"+split+" IconicButton ";label="";break;case"TextButton":default:outer_class+="dwpe-button InlineSelector"+split;icon="";break;}
var tag=(render_style&&render_style=="toolbar-item")?"li":"ux";outer_class+=(args.state=="0")?" Button_Disabled":"";var markup="";markup+="\n<"+tag+" class='"+outer_class+"' ";if(args.command)
markup+=" cmd='"+DWPE_Utilities.makeJavascriptSafe(args.command)+"'";if(args.tooltip)
markup+=" title='"+args.tooltip+"'";markup+=">";markup+=icon+label+"<span class='arw'>&nbsp;</span>";if(args.items)
{markup+="<ul class='inline-selector-menu'>";for(var i=0;i<args.items.length;i++)
{var item=args.items[i];item.item_type="normal";markup+=DWPE_WindowFactory.generateMenuItemMarkup(item,0);}
markup+="</ul>";}
if(!render_style||render_style=="command-button")
markup+=DWPE_Base_Class.getArgsAsString(args);markup+="</"+tag+">";return markup;}
DWPE_ButtonFactory_Class.prototype.generateTextButtonMarkup=function(args,render_style)
{this.properties=args;this.buttonClass="dwpe-button textbutton";var markup=this.makeClickableRegion(this.formatString(args.label),render_style);return markup;}
DWPE_ButtonFactory_Class.prototype.generateIconicButtonMarkup=function(args,render_style)
{this.properties=args;this.buttonClass="dwpe-button IconicButton";var markup=this.makeClickableRegion(DWPE_Utilities.getIconMarkup(args.icon,"",args.tooltip),render_style);return markup;}
DWPE_ButtonFactory_Class.prototype.generateIconicTextButtonMarkup=function(args,render_style)
{this.properties=args;this.buttonClass="dwpe-button IconicTextButton";var content=DWPE_Utilities.getIconMarkup(this.properties.icon,"",args.tooltip)+' <span>'+this.formatString(args.label)+'</span>';var markup=this.makeClickableRegion(content,render_style);return markup;}
DWPE_ButtonFactory_Class.prototype.generateToolbarSeparatorMarkup=function(args,render_style)
{var tag=(render_style&&render_style=="toolbar-item")?"li":"ux";return"\n<"+tag+" class='dwpe-button Separator'><span></span></"+tag+">";}
DWPE_ButtonFactory_Class.prototype.getDefaultArgsListForType=function(type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();var icons=new Array();icons[0]=DWPE_Utilities.getRandomIcon();icons[1]=DWPE_Utilities.getRandomIcon();icons[2]=DWPE_Utilities.getRandomIcon();switch(type)
{case'MenuButton':case 100:return{"_class":"DWPE_ButtonFactory_Class","type":"MenuButton","label":"MenuButton","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","command":"","icon":"add"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","command":"","icon":"edit"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","command":"","icon":"delete"}]};break;case'ToggleButton':case 6:return{"_class":"DWPE_ButtonFactory_Class","type":"ToggleButton","button_style":"IconicTextButton","label":"Toggle Button","icon":"add","command":"","tooltip":""};case'ToolbarSeparator':case 5:return{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"};break;case'InlineSelector':case 4:return{"_class":"DWPE_ButtonFactory_Class","type":"InlineSelector","label":"Inline Selector","tooltip":"Inline Selector","command":"","icon":"add"};break;case'InlineSelectorSplit':case 4:return{"_class":"DWPE_ButtonFactory_Class","type":"InlineSelector","button_style":"5","label":"Inline Selector Split","command":"","icon":"add","state":"1"};break;case'RadioButtonGroup':case 3:return{"_class":"DWPE_ButtonFactory_Class","type":"RadioButtonGroup","button_style":"IconicButton","label":"Radio Button Group","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","command":"js::alert('add')","icon":"add","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","command":"js::alert('edit')","icon":"edit","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","command":"js::alert('delete')","icon":"delete","tooltip":"Radio Button Group"}]};break;case'IconicTextButton':case 2:return{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic Text Button","icon":"add","command":"","tooltip":""};break;case'IconicButton':case 1:return{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button","icon":"add","command":"","tooltip":""};break;case'toolbar-item':return'{ "label":"Item","state":"1","itemtype":"TextButton","command":"","icon":"","tooltip":"","button_style":"TextButton","items":[]}';break;case'TextButton':case 0:default:return{"_class":"DWPE_ButtonFactory_Class","type":"TextButton","label":"Text Button","command":"","tooltip":""};break;}}
DWPE_ButtonFactory_Class.prototype.getPropertySheetFields=function(_type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(_type)
{case'MenuButton':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_ButtonFactory"},{type:"hidden",id:"type",name:"type",value:"MenuButton"},{type:"text",id:"label",name:"Label",value:""},{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},{type:"text",id:"icon",name:"Icon",value:""}];break;case'IconicTextButton':case'IconicButton':case'TextButton':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_ButtonFactory"},{type:"hidden",id:"type",name:"type",value:_type},{type:"text",id:"label",name:"Label",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},{type:"text",id:"icon",name:"Icon",value:""}];break;case'IconicTextButton-form':case'IconicButton-form':case'TextButton-form':return[{type:"chooser",id:"type",name:"Type",value:"TextButton=Text Button&IconicButton=Iconic Button&IconicTextButton=Iconic Text Button"},{type:"text",id:"label",name:"Label",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},{type:"text",id:"icon",name:"Icon",value:""}];break;case'InlineSelector':case'ToggleButton':case'ToolbarSeparator':case'RadioButtonGroup':default:return[];break;}}
DWPE_ButtonFactory_Class.prototype.initEditableObjectList=function(listName)
{var $list=$("#"+listName);if($list.attr("initialized")==1)return;$list.change(function(event)
{var $select=$(this);var $option=$($select.attr("options")[$select.attr("selectedIndex")]);var args=$option.data("obj");DWPE_ButtonFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);for(var argName in args)
{$("#item__"+argName).val(args[argName]);}});$('<p align="right" id="addRemoveListItems">'+'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="addListItem(\''+listName+'\')">&nbsp;&nbsp;'+'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="removeSelectedListItem(\''+listName+'\')">'+'</p>').insertAfter($list);$list.attr("initialized",1);}
DWPE_ButtonFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{var args=DWPE_ButtonFactory.getPropertySheetFields(type);var markup="";markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';if(args.length==0)
markup+="<tr><td>No property sheet exists for this item type.</td></tr>";else
{for(var argName in args)
{var arg=args[argName];markup+="<tr>";switch(arg.type)
{case'select':markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+
arg.value+'</select></td>';break;case'hidden':markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';break;case'text':default:markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';break;}
markup+="</tr>";}}
markup+="</table>";$("#"+listName+"-property-sheet").html(markup).show("slide");$("#"+listName+"-selected-item-properties :input").keyup(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}})};DWPE_Toolbar_Class.prototype=new DWPE_Base_Class();DWPE_Toolbar_Class.constructor=DWPE_Toolbar_Class;DWPE_Toolbar_Class.prototype._super=DWPE_Base_Class.prototype;function DWPE_Toolbar_Class()
{this.id=this.getID();this._class="DWPE_Toolbar_Class";this.label="DWPE_Toolbar";this.width="100%";this.alignment="L";this.items=new Array();$(".dwpe-link").live('mousedown',function(event)
{var $item=$(this);if(DWPE_Utilities.isDisabled($item))return;var cmd=$item.attr('cmd');DWPE_Utilities.performCommand($item,cmd);return false;});$(".dwpe-button").live('mousedown',function(event)
{var $item=$(this);if(DWPE_Utilities.isDisabled($item))return;var cmd=$item.attr('cmd');var parent_btn=$item.closest('.dwpe-button.RadioButtonGroup,.dwpe-button.ToggleButton')
if(parent_btn)
{DWPE_Toolbar_Class.toggle(event,parent_btn[0]);}
if($item.hasClass('InlineSelector')||$item.hasClass('InlineSelectorSplit'))
{var cancel_cmd=DWPE_Toolbar_Class.showInlineSelectorMenu(event,$item[0]);if(cancel_cmd)cmd=null;}
DWPE_Utilities.performCommand($item,cmd);return false;});return this;}
DWPE_Toolbar=new DWPE_Toolbar_Class()
DWPE_Toolbar_Class.prototype.update=function()
{var markup="<ux:toolbars class='dwpe-toolbar'>";markup+="<ul>";var len=this.properties.items.length;for(var index=0;index<len;index++)
{var myItemArgs=this.properties.items[index];markup+=DWPE_ButtonFactory.make(myItemArgs,"toolbar-item");}
markup+="<li class='dwpe-overflow-btn aft'></li>";markup+="</ul>";var resizable=(this.properties.resizable=="0")?" style='display:none' ":"";markup+="<div class='dwpe-toolbar-resize' "+resizable+" ></div>";markup+="</ux:toolbars>";this.markup=markup;}
DWPE_Toolbar_Class.prototype.render=function()
{this._super.render.call(this);var $ux=this.parent;$ux.attr('id',DWPE_Utilities.getUniqueId());$ux.addClass("dwpe-toolbar");var w=(this.properties.width)?this.properties.width:"100%";$ux.data('size',w);var $overflow_btn=$ux.find("UX.dwpe-overflow-btn.aft:first");$overflow_btn.click(function(e)
{DWPE_Toolbar_Class.handleOverflowClick($ux);});if(this.properties.resizable=="1")
{$resizer=$ux.find(".dwpe-toolbar-resize:first");$resizer.draggable({axis:'x',start:function(event,ui){},stop:function(event,ui)
{var delta=ui.position.left;var newWidth=$ux.width()+delta;$ux.data("size",newWidth+"px");ui.helper.css({"left":"0px","top":"0px"});DWPE_Toolbar_Class.manageToolbarOverflow($ux);}});}
$(window).bind('dwpe-component-resize',function(e,parentID)
{DWPE_Toolbar_Class.manageToolbarOverflow($ux);});DWPE_Toolbar_Class.manageToolbarOverflow($ux);}
DWPE_Toolbar_Class.prototype.generateMarkup=function(args)
{var markup="<ux:toolbars class='dwpe-toolbar'>";markup+="<ul>";var len=args.items.length;for(var index=0;index<len;index++)
{var myItemArgs=args.items[index];if(myItemArgs["itemtype"])
myItemArgs.type=myItemArgs.itemtype;markup+=DWPE_ButtonFactory.make(myItemArgs,"toolbar-item");}
markup+="<li class='dwpe-overflow-btn aft'></li>";markup+="\n</ul>";var resizable=(args.resizable=="0")?" style='display:none' ":"";markup+="\n<div class='dwpe-toolbar-resize' "+resizable+" ></div>";markup+="\n"+DWPE_Base_Class.getArgsAsString(args);markup+="</ux:toolbars>";return markup;}
DWPE_Toolbar_Class.prototype.make=function($ux)
{$ux.attr('id',DWPE_Utilities.getUniqueId());var w=($ux.attr("width"))?$ux.attr("width"):"100%";$ux.data('size',w);var $overflow_btn=$ux.find("LI.dwpe-overflow-btn.aft:first");$overflow_btn.click(function(e)
{DWPE_Toolbar_Class.handleOverflowClick($ux);});if(this.properties.resizable=="1")
{$resizer=$ux.find(".dwpe-toolbar-resize:first");$resizer.draggable({axis:'x',start:function(event,ui){},stop:function(event,ui)
{var delta=ui.position.left;var newWidth=$ux.width()+delta;$ux.data("size",newWidth+"px");ui.helper.css({"left":"0px","top":"0px"});DWPE_Toolbar_Class.manageToolbarOverflow($ux);}});}
$(window).bind('dwpe-component-resize',function(e,parentID)
{DWPE_Toolbar_Class.manageToolbarOverflow($ux);});DWPE_Toolbar_Class.manageToolbarOverflow($ux);}
DWPE_Toolbar_Class.manageToolbarOverflow=function($ux)
{DWPE_Window.closeWindowGroup($ux.attr('id')+"-overflow");var $overflow_btn=$ux.find(">UL>LI.dwpe-overflow-btn.aft:first");$overflow_btn.show();var pW=$ux.parent().width();var size=$ux.data('size');size=(size)?size:"100%";if(size.indexOf('%')>-1)
{size=(parseInt(size)/100)*pW;}
else
{size=parseInt(size);}
$ux.width(size);var $buttons=$ux.find(">UL>LI.dwpe-button");$buttons.hide();var w=0;w+=$overflow_btn.outerWidth(true);w+=2;var overflown=false;$buttons.each(function(i)
{var $button=$(this);$button.show();w+=$button.outerWidth(true);if(w>size)
{$button.hide();overflown=true;}});if(overflown==false)
{$overflow_btn.hide();}}
DWPE_Toolbar_Class.handleOverflowClick=function($ux)
{var $overflow_btn=$ux.find("LI.dwpe-overflow-btn.aft:first");var menu_id=$ux.attr('id')+"-overflow";var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);var $menu_body=$("#"+menu_id+"-body");$ux.find(">UL>LI.dwpe-button:hidden").each
(function()
{var $button=$(this);var $c=$button.clone(true);if($c.hasClass("Separator")==false)
{$c.show();$c.css('display','block');}
$menu_body.append($c);});$overflow_btn.addClass("active");DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);$overflow_btn.bind("cleanup",function(e)
{$ux.find(">UL>LI.dwpe-button:hidden").each
(function(j)
{$(this).remove();});$toolbar_body=$ux.find(">UL");$menu_body.find(">LI").each
(function(j)
{var $o=$(this);$o.hide();$toolbar_body.append($o);});$overflow_btn.removeClass("active");$toolbar_body.append($overflow_btn);});}
DWPE_Toolbar_Class.toggle=function(event,_group)
{var group=$(_group);if(DWPE_Utilities.isDisabled(group))return;var target=$(event.originalTarget);if(target.tagName!="LI")
{target=target.closest("UX,LI");}
group.find("LI").each(function(i)
{var $o=$(this);if($o[0]==target[0])$o.toggleClass("Button_Active");else $o.removeClass("Button_Active");})}
DWPE_Toolbar_Class.showInlineSelectorMenu=function(event,callee)
{var $e=$(event);if(DWPE_Utilities.isDisabled(callee))return;var $callee=$(callee);var drop_down_width=17;if($callee.hasClass("InlineSelectorSplit")&&$(event.originalTarget).hasClass("arw")||$callee.hasClass("InlineSelector"))
{event.stopPropagation();var menu_id=$callee.attr("id")+"-menu";var group=null;var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);var $overflowMenuBody=$("#"+menu_id+"-body");$overflowMenuBody.html($callee.find(".inline-selector-menu").html());$overflowMenuBody.css("min-width",$callee.width())
return true;}
return false;};DWPE_PanelFactory_Class.prototype=new DWPE_Base_Class();DWPE_PanelFactory_Class.constructor=DWPE_PanelFactory_Class;DWPE_PanelFactory_Class.prototype._super=DWPE_Base_Class.prototype;function DWPE_PanelFactory_Class()
{this._class="DWPE_PanelFactory_Class";return this;}
DWPE_PanelFactory=new DWPE_PanelFactory_Class();DWPE_PanelFactory_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_PanelFactory_Class.prototype.setDefaultValue=function(name,value)
{if(!this.properties[name])this.properties[name]=value;}
DWPE_PanelFactory_Class.prototype.make=function($ux)
{var _class=$ux.attr("class").toLowerCase();_class=_class.split(" ");_class=_class[0];switch(_class)
{case"dwpe-tabset":case"dwpe-tabset top":case"dwpe-tabset both":case"dwpe-tabset bottom":this.initializeTabset($ux);break;case"dwpe-trainset":this.initializeTrainset($ux);break;case"dwpe-horizontal-splitter":case"dwpe-vertical-splitter":this.initializeSplitter($ux);break;case"dwpe-accordion":this.initializeAccordion($ux);break;case"dwpe-header":this.initializePageheader($ux);break;case"dwpe-subheader":this.initializeSubheader($ux);break;case"dwpe-subsubheader":this.initializeSubsubheader($ux);break;}}
DWPE_PanelFactory_Class.prototype.getDefaultArgsListForType=function(type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(type)
{case'TabPanel':return{"_class":"DWPE_PanelFactory_Class","type":"TabPanel","label":"Tab "+i,"icon":'none',"closureButton":null,"content":"inline"};break;case'TrainPanel':return{"_class":"DWPE_PanelFactory_Class","type":"TrainPanel","label":"Step "+i,"icon":'none',"closureButton":null,"content":"inline"};break;case'SplitterPanel':return{"_class":"DWPE_PanelFactory_Class","type":"SplitterPanel","label":"New Pane "+i,"size":"100px","state":"1","toggle":"one","content":"inline"};break;case'PageHeader':return{"_class":"DWPE_PanelFactory_Class","type":"pageheader","label":"Page Header","helptext":"Static help text","content":"inline","toolbar":"none","header":"yes","choicelist":"choicelist-no"};break;case'SubHeader':return{"_class":"DWPE_PanelFactory_Class","type":"subheader","label":"Page Sub-Header","helptext":"Static help text","content":"inline","toolbar":"sample-toolbar-short","header":"yes","disclosure":"show","choicelist":"choicelist-no"};break;case'SubsubHeader':return{"_class":"DWPE_PanelFactory_Class","type":"subsubheader","label":"Page Sub-subheader","helptext":"Static help text","content":"inline","toolbar":"sample-toolbar-short","choicelist":"choicelist-no","disclosure":"show"};break;case'AccordionPanel':return{"_class":"DWPE_PanelFactory_Class","type":"AccordionPanel","label":"Accordion Pane "+i,"size":"1","icon":"","state":"1","content":"inline","toolbar":"none"};break;case'AccordionPanel2':return{"_class":"DWPE_PanelFactory_Class","type":"AccordionPanel","label":"Accordion Pane "+i,"size":"1","icon":"","state":"1","content":"inline","toolbar":"sample-toolbar-long"};break;default:return{};}}
DWPE_PanelFactory_Class.prototype.getPropertySheetFields=function(_type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(_type)
{case'TabPanel':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},{type:"hidden",id:"type",name:"type",value:_type},{type:"text",id:"label",name:"Tab&nbsp;Title",value:""},{type:"text",id:"icon",name:"Icon",value:""},{type:"chooser",id:"state",name:"State",value:"1=Enabled&0=Disabled"},{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"}];case'TrainPanel':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},{type:"hidden",id:"type",name:"type",value:_type},{type:"text",id:"label",name:"Stop&nbsp;Name",value:""},{type:"text",id:"icon",name:"Icon",value:""},{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"},{type:"chooser",id:"sequential_override",name:"Sequential Override",value:"0=No&1=Yes"},{type:"text",id:"tooltip",name:"Tooltip",value:""}];case'SplitterPanel':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},{type:"hidden",id:"type",name:"type",value:_type},{type:"text",id:"label",name:"Pane&nbsp;Title",value:""},{type:"text",id:"size",name:"Size",value:"100px"},{type:"text",id:"state",name:"State",value:"1"},{type:"chooser",id:"toggle",name:"Toggle",value:"one=Applies to First Pane&two=Applies to Second Pane"},{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"}];break;case'AccordionPanel':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},{type:"hidden",id:"type",name:"type",value:_type},{type:"text",id:"label",name:"Pane&nbsp;Title",value:""},{type:"text",id:"icon",name:"Icon",value:""},{type:"text",id:"size",name:"Size",value:""},{type:"chooser",id:"state",name:"State",value:"1=Expanded&0=Collapsed"},{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"},{type:"chooser",id:"toolbar",name:"Toolbar",value:"none=None&sample-toolbar-short=Short Toolbar&sample-toolbar-long=Long Toolbar"}];break;default:return[];break;}}
DWPE_PanelFactory_Class.prototype.initEditableObjectList=function(listName)
{var $list=$("#"+listName);if($list.attr("initialized")==1)return;$list.change(function(event)
{var $select=$(this);var $option=$($select.attr("options")[$select.attr("selectedIndex")]);var args=$option.data("obj");DWPE_PanelFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);for(var argName in args)
{$("#item__"+argName).val(args[argName]);}});$('<p align="right" id="addRemoveListItems">'+'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_PanelFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_PanelFactory_Class.removeSelectedListItem(\''+listName+'\')">'+'</p>').insertAfter($list);$list.attr("initialized",1);}
DWPE_PanelFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{var args=DWPE_PanelFactory.getPropertySheetFields(type);var markup="";markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';if(args.length==0)
markup+="<tr><td>No property sheet exists for this item type.</td></tr>";else
{for(var argName in args)
{var arg=args[argName];markup+="<tr>";switch(arg.type)
{case'select':markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+
arg.value+'</select></td>';break;case'chooser':var options=arg.value.split("&");markup+="<td class='label'>"+arg.name+"</td>";markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";for(var i in options)
{var option=options[i].split("=");markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";}
markup+='</select></td>';break;case'hidden':markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';break;case'text':default:markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';break;}
markup+="</tr>";}}
markup+="</table>";$("#"+listName+"-property-sheet").html(markup).show("slide");$("#"+listName+"-selected-item-properties :input").keyup(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}}).change(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}})}
DWPE_PanelFactory_Class.removeSelectedListItem=function(listID)
{var $list=$("#"+listID);var i=$list.attr("selectedIndex");var len=$list.attr("options").length;if(len==0)
return;$($list.attr("options")[i]).remove();if(len-1<=0)
return;i=(i-1<0)?0:i-1;$list.attr("selectedIndex",i);$list.change();}
DWPE_PanelFactory_Class.addListItem=function(listID)
{var $list=$("#"+listID);var $option=$("<option></option>");var args=DWPE_PanelFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));$option.text(args.label);$option.data("obj",args);$list.append($option);};DWPE_PanelFactory_Class.prototype.generateAccordionMarkup=function(args)
{var markup="";markup+='<ux class="dwpe-accordion">\r\n';markup+="\r\n";for(var i in args.items)
{var item=args.items[i];var state="";if(item.state=="0")
state=' class="collapsed" ';markup+='\t<h3 '+state+' size="'+item.size+'">';if(item.icon.length>0)
{markup+=DWPE_Utilities.getIconMarkup(item.icon);}
markup+="<span class='title'>"+item.label+"</span>";if(item.toolbar.length>0&&item.toolbar!="none")
markup+="<ux class='dwpe-toolbar' data='"+item.toolbar+"'/>";markup+='</h3>\r\n';if(item.content===undefined||item.content=="inline")
{markup+='\t<div>';markup+=DWPE_Utilities.getSampleContent('short');}
else
markup+='\t<div content="'+item.content+'">';markup+='</div>\r\n';markup+="\r\n";}
markup+="\r\n";markup+='</ux>';return markup;}
DWPE_PanelFactory_Class.prototype.initializeAccordion=function($ux)
{var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();$ux.attr("id",id);var num_panes=0;$ux.find(">h3").each(function(i)
{var $h3=$(this);num_panes++;$h3.attr("panel",id+"-"+num_panes++);$h3.addClass("dwpe-accordion-header");var $disc=$("<span class='dwpe-accordion-disclosure'></span>");if($h3.hasClass('collapsed'))
$disc.addClass('collapsed')
var $layout=$("<div class='dwpe-accordion-header-container'><div class='left'></div><div class='right'></div></div>");$layout.find("DIV.left").append($disc).append($h3.find(">SPAN"));var $toolbar=$h3.find(">ux");if($toolbar&&$toolbar.length>0)
{$layout.find("DIV.right").append($toolbar);$layout.find("DIV.left").css('overflow','hidden');}
$h3.append($layout);var $panel=$h3.next();var content=$panel.attr("content");if($panel.attr("content")&&content!="inline")
{$panel.replaceWith("<iframe class='dwpe-accordion-panel' src='"+content+"'  frameborder='0' width='100%' allowtransparency='false'/>");$panel=$h3.next();}
if($h3.hasClass("expanded"))
$panel.addClass("expanded");$panel.addClass("dwpe-accordion-panel");$panel.attr("id",id+'-'+i);$panel.data("panel_index",i);$disc.click(function()
{if($disc.hasClass('collapsed'))
{$disc.removeClass("collapsed");$h3.removeClass("collapsed");$panel.removeClass("collapsed");}
else
{$disc.addClass("collapsed");$h3.addClass("collapsed");$panel.addClass("collapsed");}
DWPE_PanelFactory.manageAccordionPanels($ux,$panel);});});$(window).resize(function(){DWPE_PanelFactory.manageAccordionPanels($ux,null);});}
DWPE_PanelFactory.manageAccordionPanels=function($ux,$p)
{var h=$ux.parent().height();var avail_h=h;$ux.height(h-1);var panels=new Array();var size_count=0;var min_panel_height=40;$ux.find(">h3").each(function(pane_num)
{var $h3=$(this);var headerH=$h3.outerHeight(true);avail_h-=(headerH);var $panel=$h3.next();var x={};x.header=$h3;x.panel=$panel;x.size=$h3.attr("size");x.expanded=!$h3.hasClass("collapsed");if(x.expanded==true)
size_count+=parseInt(x.size);var oldBlockState=x.panel.css("display");var oldH=x.panel.height();x.panel.height(0);x.panel.css('display','block');x.has=x.panel.outerHeight(true);if(x.panel.find(">IFRAME:first-child").length>0)
x.wants=x.panel.find(">IFRAME:first-child").height();else
{x.wants=x.panel.attr("scrollHeight");}
x.wants=(x.wants<min_panel_height)?min_panel_height:x.wants;x.mustHave=(x.size==0)?x.wants:min_panel_height;x.panel.height(oldH);x.panel.css("display",oldBlockState);x.visited=0;panels[pane_num]=x;});if($p)
{var panel_index=$p.data("panel_index");var panel=panels[panel_index];if(panel.size==0)
{panel.wants=panel.mustHave;if(panel.expanded==false)
{panel.finalHeight=0;}
else if(avail_h>=panel.wants)
{panel.finalHeight=panel.wants;avail_h-=panel.wants;}
else if(panel.wants>avail_h&&avail_h>panel.mustHave)
{panel.finalHeight=avail_h;avail_h=0;}
else
{panel.finalHeight=0;panel.state=0;}
panel.visited=1;}}
$(panels).each(function()
{if(this.visited==1)return;if(this.size!=0)return;if(this.expanded==false)
{this.finalHeight=0;}
else if(avail_h>=this.wants)
{avail_h-=this.wants;this.finalHeight=this.wants;}
else if(this.wants>avail_h&&avail_h>this.mustHave)
{this.finalHeight=avail_h;avail_h=0;}
else
{this.finalHeight=0;this.state=0;}
this.visited=1;});var px_per_flex_unit=parseInt(avail_h/size_count);var num_panels=panels.length;$(panels).each(function(i)
{if(this.visited==1)return;if(this.size==0)return;if(this.expanded==false)
{this.finalHeight=0;}
else
{this.finalHeight=this.size*px_per_flex_unit;avail_h-=this.finalHeight;}
this.visited=1;});var last_open_panel=-1;$(panels).each(function(i)
{if(this.expanded==true)last_open_panel=i;});if(last_open_panel>-1)
{panels[last_open_panel].finalHeight+=avail_h;avail_h=0;}
var d=500;$(panels).each(function(i)
{var $disclosure=this.header.find("span.dwpe-accordion-disclosure:first-child");var _this=this;var $p=this.panel;if(this.expanded==false)
{$disclosure.addClass("collapsed");this.header.find("DIV.right>UX.dwpe-toolbar").css('visibility','hidden');$p.animate({'height':this.finalHeight},d,function(){$p.hide()});}
else
{$disclosure.removeClass('collapsed');this.header.find("DIV.right>UX.dwpe-toolbar").css('visibility','visible');$p.show();$p.animate({'height':this.finalHeight},d);}});};DWPE_PanelFactory_Class.prototype.generateSplitterMarkup=function(args)
{var markup="";markup+='<ux class="dwpe-'+args.orientation+'-splitter">\r\n';markup+="\r\n";for(var i in args.items)
{var item=args.items[i];markup+='\t<div class="split-panel"';markup+=' size="'+item.size+'" ';if(item.state!="1")
markup+=' state="'+item.state+'"';if(item.toggle!="one")
markup+=' toggle="'+item.toggle+'"';if(item.content&&item.content!="inline")
markup+=' content="'+item.content+'"';markup+='>';if(!item.content||item.content=="inline")
{markup+="<h3>"+item.label+"</h3>";markup+=DWPE_Utilities.getSampleContent('short');}
markup+='\t</div>\r\n';markup+="\r\n";}
markup+="\r\n";markup+='</ux>';return markup;}
DWPE_PanelFactory_Class.prototype.initializeSplitter=function($ux)
{var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();$ux.attr("id",id);var horizontal=$ux.hasClass("dwpe-horizontal-splitter");var orientation=(horizontal)?"horizontal":"vertical";var axis=(horizontal)?"x":"y";var sizeName=(horizontal)?"width":"height";var edgeName=(horizontal)?"left":"top";var splitters=new Array();var i=0;$panels=$ux.find(">DIV.split-panel");$panels.each(function()
{var tmp;var $panel_one=$(this);var $panel_two=$panel_one.next();tmp=$panel_one.attr("state");tmp=(tmp=="0")?"0":"1";$panel_one.data("state",tmp);tmp=$panel_two.attr("state");tmp=(tmp=="0")?"0":"1";$panel_two.data("state",tmp);tmp=$panel_one.attr("size");tmp=(tmp)?tmp:"200";$panel_one.data("size",tmp);tmp=$panel_two.attr("size");tmp=(tmp)?tmp:"200";$panel_two.data("size",tmp);tmp=$panel_one.attr("toggle");tmp=(tmp=="two")?tmp:"one";$panel_one.data("toggle",tmp);if($panel_one.attr("content")&&$panel_one.attr("content")!="inline")
{$panel_one=$panel_one.append("<iframe width='100%' height='100%' src='"+$panel_one.attr("content")+"' frameborder='0' allowtransparency='false'></iframe>")}
if($panel_two.length>0)
{var toggle_pane=$panel_one.data("toggle");var state=orientation;if(toggle_pane=="one")
state+=($panel_one.data("state")=="0")?"-expand":"-collapse";else
state+=($panel_two.data("state")=="0")?"-expand":"-collapse";state+="-"+toggle_pane;var $splitter=$("<div class='"+orientation+"-split-bar "+state+"'><div class='panel-expander'></div></div>");var $expander=$splitter.find(".panel-expander");$panel_one.after($splitter);$splitter.mouseover(function(){$(this).addClass("split-hover");});$splitter.mouseout(function(){$(this).removeClass("split-hover");});var splitPos;$splitter.draggable({"axis":axis,zIndex:1,addClasses:false,iframeFix:true,cancel:".expander",start:function()
{var $handle=$(this);$handle.css("z-index",999999);$expander.hide();splitPos=$splitter.css(edgeName);},drag:function(event,ui)
{},stop:function(event,ui)
{var movedBy=(horizontal)?ui.position.left:ui.position.top;var s1=(horizontal)?$panel_one.width():$panel_one.height();var s2=(horizontal)?$panel_two.width():$panel_two.height();if($panel_one.data("toggle")=="one")
{if(s1+movedBy<=15)
{$splitter.removeClass(orientation+'-collapse-one');$splitter.addClass(orientation+'-expand-one');movedBy=-s1;$panel_one.addClass('split-panel-collapsed');$panel_one.data("state","0");}
else
{if(s1+movedBy>s1+s2)
movedBy=s2;$splitter.removeClass(orientation+'-expand-one');$splitter.addClass(orientation+'-collapse-one');$panel_one.removeClass('split-panel-collapsed');$panel_one.data("state","1");}}
else
{if(s2-movedBy<=15)
{$splitter.removeClass(orientation+'-collapse-two');$splitter.addClass(orientation+'-expand-two');movedBy=s2;$panel_two.data("state","0");$panel_two.addClass('split-panel-collapsed');}
else
{if(-movedBy>s1)
{movedBy=-s1;}
$splitter.removeClass(orientation+'-expand-two');$splitter.addClass(orientation+'-collapse-two');$panel_two.removeClass('split-panel-collapsed');$panel_two.data("state","1");}}
var panel_one_size=s1+movedBy;var panel_two_size=s2-movedBy;$panel_one.data("oldSize",panel_one_size);$panel_two.data("oldSize",panel_two_size);$panel_one.data("size",panel_one_size+"px");$panel_two.data("size",panel_two_size+"px");if(horizontal)
{$panel_one.width(panel_one_size);$panel_two.width(panel_two_size);}
else
{$panel_one.height(panel_one_size);$panel_two.height(panel_two_size);}
$splitter.css(edgeName,splitPos);$expander.show();DWPE_Utilities.triggerComponentResize();}});$expander.click(function(event,ui)
{var d=250;event.preventDefault();event.stopPropagation();DWPE_Utilities.triggerResize();var s1=(horizontal)?$panel_one.outerWidth(true):$panel_one.outerHeight(true);var s2=(horizontal)?$panel_two.outerWidth(true):$panel_two.outerHeight(true);var panel_one_args={};var panel_two_args={};if($panel_one.data("toggle")=="one")
{if($panel_one.data("state")=="1")
{$panel_one.data("oldSize",s1);$panel_one.data("state","0");panel_one_args[sizeName]="0px";panel_two_args[sizeName]=(s1+s2)+"px";$splitter.removeClass(orientation+'-collapse-one');$splitter.addClass(orientation+'-expand-one');$panel_one.addClass('split-panel-collapsed');}
else
{s1=$panel_one.data("oldSize");$panel_one.data("state","1");panel_one_args[sizeName]=s1+"px";panel_two_args[sizeName]=(s2-s1)+"px";$splitter.removeClass(orientation+'-expand-one');$splitter.addClass(orientation+'-collapse-one');$panel_one.removeClass('split-panel-collapsed');}}
else
{if($panel_two.data("state")=="1")
{$panel_two.data("oldSize",s2);$panel_two.data("state","0");panel_two_args[sizeName]="0px";panel_one_args[sizeName]=(s1+s2)+"px";$splitter.removeClass(orientation+'-collapse-two');$splitter.addClass(orientation+'-expand-two');$panel_two.addClass('split-panel-collapsed');}
else
{s2=$panel_two.data("oldSize");$panel_two.data("state","1");panel_two_args[sizeName]=s2+"px";panel_one_args[sizeName]=(s1-s2)+"px";$splitter.removeClass(orientation+'-expand-two');$splitter.addClass(orientation+'-collapse-two');$panel_two.removeClass('split-panel-collapsed');}}
$panel_one.animate(panel_one_args,d);$panel_two.animate(panel_two_args,d,DWPE_Utilities.triggerResize);});}});$(window).bind('resize',function()
{var d=250;var fixed=[];var relative=[];var horizontal=$ux.hasClass("dwpe-horizontal-splitter");var stretchTo;$ux.parent().css("overflow","hidden");var ww=$ux.parent().width();var hh=$ux.parent().height();if(horizontal)
{ww-=4;}
else
{hh-=4;}
$ux.width(ww);$ux.height(hh);var avail_size;if(horizontal)
{avail_size=ww;stretchTo=hh;}
else
{avail_size=hh;stretchTo=ww;}
var total_size=avail_size;$panels.each(function()
{var $panel=$(this);var w=$panel.data("size")+"";if(w.indexOf("%")>-1)
{relative.push($panel);$panel.data("sizing","relative");}
else
{fixed.push($panel)
$panel.data("sizing","fixed");}});$ux.find(">DIV."+orientation+"-split-bar").each
(function()
{var $s=$(this);if(horizontal)
{avail_size-=$s.outerWidth(true);$s.height(stretchTo);}
else
{avail_size-=$s.outerHeight(true);$s.width(stretchTo);}});$(fixed).each
(function()
{var $panel=$(this);var state=$panel.data("state");var s=0;if(state=="1")
{s=parseInt($panel.data("size"));}
if(horizontal)
{$panel.width(s);s=$panel.outerWidth(true);$panel.height(stretchTo);}
else
{$panel.height(s);s=$panel.outerHeight(true);$panel.width(stretchTo);}
avail_size-=s;});var total_size_for_relative=avail_size;$(relative).each
(function()
{var $panel=$(this);var state=$panel.data("state");var s=0;if(state=="1")
{s=$panel.data("size");s=parseInt(s)/100;s=parseInt(total_size_for_relative*s);}
if(horizontal)
{$panel.width(s);s=$panel.outerWidth(true);$panel.height(stretchTo);}
else
{$panel.height(s);s=$panel.outerHeight(true);$panel.width(stretchTo);}
avail_size-=s;});var $last_panel=null;$panels.each(function()
{var $panel=$(this);var state=$panel.data("state");if(state=="1")
$last_panel=$panel;});if($last_panel)
{if(horizontal)
{var s=$last_panel.outerWidth()+avail_size;$last_panel.width(s);}
else
{var s=$last_panel.outerHeight()+avail_size;$last_panel.height(s);}}});DWPE_Utilities.triggerResize();};DWPE_PanelFactory.generateTabsetMarkup=function(args)
{var markup="";markup+='<ux class="dwpe-tabset '+args.tab_style+' '+args.allow_tab_close+'" height="'+args.height+'">\r\n';markup+=DWPE_PanelFactory_Class.generateTabMarkup(args);if(args.toolbar.length>0&&args.toolbar!="none")
markup+="\t<ux class='dwpe-toolbar' data='"+args.toolbar+"'/>\r\n";markup+=DWPE_PanelFactory_Class.generateTabPanelMarkup(args);markup+="</ux>\r\n";return markup;}
DWPE_PanelFactory_Class.generateTabMarkup=function(args)
{markup="";markup+=" <ul class='dwpe-tabs'>\r\n";for(var i in args.items)
{var item=args.items[i];var disabled=(item.state=='0')?"class='disabled'":"";markup+="\t\t\<li "+disabled+">";if(item.icon.length>0&&item.icon!='none')
markup+=DWPE_Utilities.getIconMarkup(item.icon)+" ";markup+=item.label;markup+="</li>\r\n";}
markup+=" </ul>\r\n";return markup;}
DWPE_PanelFactory_Class.generateTabPanelMarkup=function(args)
{markup="";markup+="\t<div class='dwpe-tab-panels'>\r\n";for(var i in args.items)
{var item=args.items[i];if(item.content=="inline")
{markup+="\t\t<div>\r\n<h3>"+
item.label+"</h3>"+DWPE_Utilities.getSampleContent('medium ')+"\r\n\t\t</div>\r\n";}else{markup+="\t\t<div content='"+item.content+"'></div>\r\n";}}
markup+="\t</div>\r\n";return markup;}
DWPE_PanelFactory_Class.prototype.initializeTabset=function($ux)
{var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();$ux.attr("id",id);var size="100%";$ux.data('size',size);var default_tab=$ux.attr("default_tab");default_tab=(default_tab)?default_tab:0;$ux.data("current-tab",-1);$ux.data('allow-tab-close',$ux.hasClass('allow-tab-close'));var $container=$("<div class='tabs-container'>"+"<div class='left'></div>"+"<div class='right'></div>"+"</div>");var $tabs=$ux.find(">UL.dwpe-tabs:first");$container.find(">DIV.left").append($tabs);var $toolbar=$ux.find(">UX.dwpe-toolbar");if($toolbar&&$toolbar.length>0)
{$container.find(">DIV.right").append($toolbar);}
else
{$container.find(">DIV.right").width("1%");$container.find(">DIV.left").width("99%");}
var $tabs=$container.find('UL.dwpe-tabs>LI');$tabs.each(function(i)
{var $tab=$(this);$tab.addClass("dwpe-tab normal");$tab.attr('id',id+"-tab-"+i);$tab.data('index',i);$tab.click(function(){DWPE_PanelFactory_Class.showTabPanel($ux,i);});})
$ux.data('num-of-tabs',$tabs.length);if($ux.hasClass('bottom'))
{$container.addClass('bottom');$ux.append($container);$container.find(">DIV.right").css('visibility','hidden');var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});}
else if($ux.hasClass('both'))
{$container.addClass('top');$ux.prepend($container);var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});var $bottom=$container.clone(true);$bottom.removeClass('top');$bottom.addClass('bottom');$ux.append($bottom);$bottom.find(">DIV.right").css('visibility','hidden');var $overflow_btn_fore2=$bottom.find('LI.fore');var $overflow_btn_aft2=$bottom.find('LI.aft');$overflow_btn_fore2.unbind();$overflow_btn_aft2.unbind();$overflow_btn_fore2.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore2);});$overflow_btn_aft2.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft2);});$bottom.find('UL.dwpe-tabs>LI').each(function()
{var $tab=$(this);var id=$tab.attr('id');id+='-btm'
$tab.attr('id',id);});}
else
{$ux.addClass('top');$container.addClass('top');$ux.prepend($container);var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');$container.find('>DIV.left>UL.dwpe-tabs').prepend($overflow_btn_fore);var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');$container.find('>DIV.left>UL.dwpe-tabs').append($overflow_btn_aft);$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_fore);});$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTabOverflowClick($ux,$overflow_btn_aft);});}
$ux.data('first-tab',0);$ux.data('last-tab',$tabs.length-1);var $tab_panels=$ux.find('>DIV.dwpe-tab-panels>DIV');$tab_panels.each(function(i)
{var $tab_panel=$(this);$tab_panel.attr('id',id+"-tabpanel-"+i).css('height',$ux.attr('height'));if(i==default_tab)
{}});DWPE_PanelFactory_Class.showTabPanel($ux,default_tab);$(window).bind('resize',function(e,parentID){DWPE_PanelFactory_Class.manageTabOverflow($ux);})
DWPE_PanelFactory_Class.manageTabOverflow($ux);}
DWPE_PanelFactory_Class.closeTabPanel=function($ux)
{var current_tab_index=$ux.data("current-tab");if(current_tab_index==null)return;var id=$ux.attr("id");var $tab_top=$("#"+id+"-tab-"+current_tab_index);var $tab_panel=$("#"+id+"-tabpanel-"+current_tab_index);var $tab_btm=$("#"+id+"-tab-"+current_tab_index+"-btm");var $tab=($tab_top.length==0)?$tab_btm:$tab_top;var old_tab_index=$tab.data('index');var $prv=$tab.prev(".dwpe-tab");var $nxt=$tab.next(".dwpe-tab");var $sibling=($nxt.length==0)?$prv:$nxt;if($sibling.length==0)return;$tab_top.remove();$tab_panel.remove();$tab_btm.remove();$ux.data('first-tab',$sibling.data('tab-index'));var count=0;$ux.find(">DIV.top LI.dwpe-tab").each(function(i){$(this).data('tab-index',i);count++});if(count==0)
$ux.find(">DIV.bottom LI.dwpe-tab").each(function(i){$(this).data('tab-index',i);count++});else
$ux.find(">DIV.bottom LI.dwpe-tab").each(function(i){$(this).data('tab-index',i);});$ux.data('num-of-tabs',count);$ux.data('first-tab',$sibling.data('tab-index'));DWPE_PanelFactory_Class.showTabPanel($ux,$sibling.data('index'));DWPE_PanelFactory_Class.manageTabOverflow($ux);}
DWPE_PanelFactory_Class.showTabPanel=function($ux,tab_index)
{var current_tab=$ux.data("current-tab");if(tab_index==current_tab)return;var id=$ux.attr("id");var $new_tab_top=$("#"+id+"-tab-"+tab_index);var $new_tab_btm=$("#"+id+"-tab-"+tab_index+"-btm");var $new_panel=$ux.find("#"+id+"-tabpanel-"+tab_index);if(DWPE_Utilities.isDisabled($new_tab_top))return;var $old_panel=$("#"+id+"-tabpanel-"+current_tab);if($old_panel.length>0)
$old_panel.find(">IFRAME").hide();if($new_panel.length>0)
{$ux.data("current-tab",tab_index);$new_tab_top.addClass('selected');$new_tab_top.removeClass('normal');$new_tab_btm.addClass('selected');$new_tab_btm.removeClass('normal');if($ux.data('allow-tab-close')==true&&$ux.data('num-of-tabs')>1)
{var $close=$(DWPE_Utilities.getIconMarkup('closetab'));$close.addClass('close');$close.click(function(e){e.stopPropagation();DWPE_PanelFactory_Class.closeTabPanel($ux);});$new_tab_top.append($close);$new_tab_btm.append($close.clone(true));}
$new_panel.show();$(window).trigger('resize');var content=$new_panel.attr('content');if(content&&$new_panel.find(">iframe").length==0)
{$new_panel.html("<iframe src='"+content+"' frameborder='0' allowtransparency='false'/>");}
$new_panel.find(">IFRAME").show();}
if(current_tab!=null)
{$old_panel.hide();var $tab_top=$("#"+id+"-tab-"+current_tab).removeClass('selected');$tab_top.addClass('normal');var $tab_btm=$("#"+id+"-tab-"+current_tab+"-btm").removeClass('selected');$tab_btm.addClass('normal');$tab_top.find('SPAN.close').remove();$tab_btm.find('SPAN.close').remove();}}
DWPE_PanelFactory_Class.manageTabOverflow=function($ux)
{DWPE_Window.closeWindowGroup("tabset-overflow");if($ux.hasClass('top'))
{DWPE_PanelFactory_Class._manageTabOverflow($ux,'top');}
else if($ux.hasClass('both'))
{DWPE_PanelFactory_Class._manageTabOverflow($ux,'top');DWPE_PanelFactory_Class._manageTabOverflow($ux,'bottom');}
else
{DWPE_PanelFactory_Class._manageTabOverflow($ux,'bottom');}}
DWPE_PanelFactory_Class._manageTabOverflow=function($ux,position)
{var selected_tab=$ux.data('current-tab');var pH=$ux.parent().innerHeight();var pSH=$ux.parent().attr("scrollHeight");var scrollbar_width=(pSH>pH)?DWPE_Utilities.getScrollbarWidth():0;var pW=$ux.parent().width()-scrollbar_width;var size=$ux.data('size');if(size==null)return;if(size.indexOf('%')>-1)
{size=(parseInt(size)/100)*pW;}
else
{size=parseInt(size);}
$ux.width(size);var avail_size=$ux.find(">DIV.tabs-container."+position+">DIV.left").width();var $overflow_fore=$ux.find(">DIV.tabs-container."+position+" LI.fore").show();var $overflow_aft=$ux.find(">DIV.tabs-container."+position+" LI.aft").show();var overflown=false;var w=$overflow_fore.outerWidth(true);w+=$overflow_aft.outerWidth(true);var first_tab=$ux.data("first-tab");var last_tab=$ux.data("last-tab");var $tabs=$ux.find(">DIV.tabs-container."+position+">DIV.left>UL.dwpe-tabs>LI.dwpe-tab");var $last=null;$tabs.hide();$tabs.each(function(i)
{if(i>=first_tab)
{var $tab=$(this);$tab.data('tab-index',i);$tab.removeClass('last');$tab.show();w+=$tab.outerWidth(true);if(w>avail_size)
{if(i!=selected_tab)
{$tab.hide();overflown=true;}}
else
{last_tab=i;$last=$tab;}}});$ux.data("first-tab",first_tab);$ux.data("last-tab",last_tab);if($last)$last.addClass('last');if(first_tab>0)
$overflow_fore.show();else
$overflow_fore.hide();if(last_tab<$tabs.length-1)
$overflow_aft.show();else
$overflow_aft.hide();}
DWPE_PanelFactory_Class.handleTabOverflowClick=function($ux,$overflow_btn)
{var type=($overflow_btn.hasClass('fore'))?"fore":"aft";var menu_id="tabset-overflow";var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);var $menu_body=$("#"+menu_id+"-body");var first_tab=$ux.data("first-tab");var last_tab=$ux.data("last-tab");$ux.find("UL.dwpe-tabs:first>LI.dwpe-tab:hidden").each
(function()
{var $tab=$(this);var tab_index=$tab.data("tab-index");if(type=='fore'&&tab_index>first_tab)return;else if(type=='aft'&&tab_index<last_tab)return;var $c=$tab.clone(true);$c.show();$c.css('display','block');$menu_body.append($c);$c.find("span.icons").remove();if($c.hasClass('disabled')==false)
{$c.click(function()
{$ux.data("first-tab",$tab.data('tab-index'));DWPE_PanelFactory_Class.manageTabOverflow($ux);});}});$overflow_btn.addClass("active");DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);$overflow_btn.bind("cleanup",function(e)
{$overflow_btn.removeClass('active');});};ux_data={};ux_data["sample-toolbar-short"]={"_class":"DWPE_Toolbar_Class","width":"100%","resizable":"0","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"moveleft","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"moveright","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"add","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"edit","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"delete","tooltip":"Iconic Button"}]};ux_data["table-toolbar"]={"_class":"DWPE_Toolbar_Class","width":"100%","resizable":"0","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"add","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"edit","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_TableFactory.deleteRow()","target":"_javascript","iconId":"delete","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"ToggleButton","button_style":"IconicButton","label":"Toggle QBE","url":"DWPE_TableFactory.toggleQBE()","target":"_javascript","selected":"1","iconId":"qbe","tooltip":""}]};ux_data["sample-toolbar-medium"]={"_class":"DWPE_Toolbar_Class","width":"100%","resizable":"0","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"moveright","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"wrap","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"go-to-top","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"RadioButtonGroup","button_style":"IconicButton","label":"Radio Button Group","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","iconId":"add","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","url":"#","target":"_self","iconId":"edit","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","url":"#","target":"_self","iconId":"delete","tooltip":"Radio Button Group"}]},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"TextButton","label":"Text Button ","url":"#","iconId":"duplicate","target":"_self","tooltip":"Text Button"},{"_class":"DWPE_ButtonFactory_Class","type":"InlineSelector","button_style":"0","label":"Inline Selector","tooltip":"Inline Selector","url":"#","target":"_self","iconId":"freezecolumn"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"ToggleButton","button_style":"IconicTextButton","label":"Toggle Button","url":"#","target":"_self","iconId":"warning","tooltip":"Toggle Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic TB","url":"#","target":"_self","iconId":"delete","tooltip":"Iconic Text Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic TB","url":"#","target":"_self","iconId":"movetop","tooltip":"Iconic Text Button"}]};ux_data["sample-toolbar-long"]={"_class":"DWPE_Toolbar_Class","width":"100%","resizable":"0","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"moveright","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"wrap","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"go-to-top","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"RadioButtonGroup","button_style":"IconicButton","label":"Radio Button Group","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","iconId":"add","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","url":"#","target":"_self","iconId":"edit","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","url":"#","target":"_self","iconId":"delete","tooltip":"Radio Button Group"}]},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"TextButton","label":"Text Button ","url":"#","iconId":"duplicate","target":"_self","tooltip":"Text Button"},{"_class":"DWPE_ButtonFactory_Class","type":"InlineSelector","button_style":"1","label":"In. Sel. Split","tooltip":"Inline Selector Split","url":"#","target":"_self","iconId":"freezecolumn"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"ToggleButton","button_style":"IconicTextButton","label":"Toggle Button","url":"#","target":"_self","iconId":"warning","tooltip":"Toggle Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic TB","url":"#","target":"_self","iconId":"delete","tooltip":"Iconic Text Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic TB","url":"#","target":"_self","iconId":"movetop","tooltip":"Iconic Text Button"}]};ux_data["sample-tree-context-menu-short"]={"_class":"DWPE_WindowFactory_Class","type":"contextmenu","items":[{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Expand","key":"","cmd":"javascript::DWPE_Tree.expand(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))","item_type":"normal","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Collapse","key":"","cmd":"javascript::DWPE_Tree.collapse(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))","item_type":"normal","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Expand All Below","key":"","cmd":"javascript::DWPE_Tree.expandAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))","item_type":"normal","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Collapse All Below","key":"","cmd":"javascript::DWPE_Tree.collapseAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))","item_type":"normal","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Expand All","key":"","cmd":"javascript::DWPE_Tree.expandAll(DWPE_Tree.getTree($(this)))","item_type":"normal","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Collapse All","key":"","cmd":"javascript::DWPE_Tree.collapseAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))","item_type":"normal","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"----------","key":"","item_type":"separator","items":[]},{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Show as Top","cmd":"javascript::DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree($(this))))","key":"","item_type":"normal","items":[]}]};ux_data["sample-tree-toolbar-short"]={"_class":"DWPE_Toolbar_Class","width":"100%","resizable":"0","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_Tree.goUp(DWPE_Tree.getTree(this));","target":"_javascript","iconId":"go-up","tooltip":"Go Up"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_Tree.goToTop(DWPE_Tree.getTree(this));","target":"_javascript","iconId":"go-to-top","tooltip":"Go to Top"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree(this)));","target":"_javascript","iconId":"show-as-top","tooltip":"Show as Top"}]};ux_data["sample-tree-toolbar-long"]={"_class":"DWPE_Toolbar_Class","width":"100%","resizable":"0","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_Tree.goUp(DWPE_Tree.getTree(this));","target":"_javascript","iconId":"go-up","tooltip":"Go Up"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_Tree.goToTop(DWPE_Tree.getTree(this));","target":"_javascript","iconId":"go-to-top","tooltip":"Go to Top"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree(this)));","target":"_javascript","iconId":"show-as-top","tooltip":"Show as Top"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"moveright","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"wrap","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button ","url":"#","target":"_self","iconId":"go-to-top","tooltip":"Iconic Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"RadioButtonGroup","button_style":"IconicButton","label":"Radio Button Group","items":[{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","iconId":"add","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","url":"#","target":"_self","iconId":"edit","tooltip":"Radio Button Group"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","url":"#","target":"_self","iconId":"delete","tooltip":"Radio Button Group"}]},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"TextButton","label":"Text Button ","url":"#","iconId":"duplicate","target":"_self","tooltip":"Text Button"},{"_class":"DWPE_ButtonFactory_Class","type":"InlineSelector","button_style":"1","label":"In. Sel. Split","tooltip":"Inline Selector Split","url":"#","target":"_self","iconId":"freezecolumn"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"ToggleButton","button_style":"IconicTextButton","label":"Toggle Button","url":"#","target":"_self","iconId":"warning","tooltip":"Toggle Button"},{"_class":"DWPE_ButtonFactory_Class","type":"ToolbarSeparator","label":"Toolbar Separator"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic TB","url":"#","target":"_self","iconId":"delete","tooltip":"Iconic Text Button"},{"_class":"DWPE_ButtonFactory_Class","type":"IconicTextButton","label":"Iconic TB","url":"#","target":"_self","iconId":"movetop","tooltip":"Iconic Text Button"}]};;DWPE_PanelFactory_Class.prototype.generatePageheaderMarkup=function(args)
{var currentTime=new Date()
var month=currentTime.getMonth()+1
var day=currentTime.getDate()
var year=currentTime.getFullYear()
var markup="";markup+='<ux id="'+this.getID()+'" class="dwpe-header">';if(args.icon)
markup+='\r\t\t'+DWPE_Utilities.getIconMarkup(args.icon);markup+='\r\t\t<div class="dwpe-pageheader-label">\r\t\t\t'+args.label+'\r\t\t</div>';if(args.choicelist=="choicelist-yes")
markup+='\r\t\t<span class="choicelist"></span>';if(args.toolbar.length>0&&args.toolbar!="none")
markup+="\r\t\t<ux class='dwpe-toolbar' data='"+args.toolbar+"'/>";markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top' width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();markup+='\r\t\t</div>';markup+='</ux>';return markup;}
DWPE_PanelFactory_Class.prototype.initializePageheader=function($ux)
{var markup="";markup+='<span class="dwpe-header-title"></span>';var $title=$ux.find('>DIV.dwpe-pageheader-label');markup+=$title.text();markup+='<span class="after-header-title"></span>';$title.html(markup);var markup2="";var $choice=$ux.find('SPAN.choicelist');if($choice&&$choice.length>0)
markup2+='<span title="Content Switcher" class="choice-list"></span>';markup2+='<span title="Definition text">'+DWPE_Utilities.getIconMarkup("help")+'</span>';$title.append(markup2);var $icon=$ux.find('>SPAN.icons');if($icon&&$icon.length>0)
$title.prepend($icon);var $container=$("<div class='title-container'>"+"<div class='left'></div>"+"<div class='right'></div>"+"</div>");$container.find(">DIV.left").append($title);var $toolbar=$ux.find(">UX.dwpe-toolbar");if($toolbar&&$toolbar.length>0)
{$container.find(">DIV.right").append($toolbar);}
else
{$container.find(">DIV.right").width("1%");$container.find(">DIV.left").width("99%");}
$ux.prepend($container);$title.find('>SPAN.choice-list').click(function()
{var $callee=$(this);var menu_id=$callee.attr("id")+"-menu";var group=null;var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);var $overflowMenuBody=$("#"+menu_id+"-body");$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");});};DWPE_PanelFactory_Class.prototype.generateSubheaderMarkup=function(args)
{var currentTime=new Date()
var month=currentTime.getMonth()+1
var day=currentTime.getDate()
var year=currentTime.getFullYear()
var markup="";markup+='<ux id="'+this.getID()+'" class="dwpe-subheader '+args.disclosure+' '+args.choicelist+' dwpe-subheader-indent">';var icon_name=args.icon;if(args.icon&&icon_name=="person")
markup+='\r\t\t'+DWPE_Utilities.getIconMarkup(args.icon);markup+='\r\t\t<div class="dwpe-subheader-label">\r\t\t\t'+args.label+'\r\t\t</div>';if(args.choicelist=="choicelist-yes")
markup+='\r\t\t<span class="choicelist"></span>';if(args.toolbar.length>0&&args.toolbar!="none")
markup+="\r\t\t<ux class='dwpe-toolbar' data='"+args.toolbar+"'/>";markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top' width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();markup+='\r\t\t</div>';markup+='</ux>';return markup;}
DWPE_PanelFactory_Class.prototype.initializeSubheader=function($ux)
{var markup="";var state=($ux.hasClass('expanded'))?"expanded":"collapsed";markup+='<span title="Expand/Collapse Subheader" class="dwpe-header-disclosure '+state+'"></span>';markup+='<span class="dwpe-header-title"></span>';var $title=$ux.find('>DIV.dwpe-subheader-label');markup+=$title.text();markup+='<span class="after-header-title"></span>';$title.html(markup);var markup2="";var $choice=$ux.find('SPAN.choicelist');if($choice&&$choice.length>0)
markup2+='<span title="Content Switcher" class="choice-list"></span>';markup2+='<span title="Definition text">'+DWPE_Utilities.getIconMarkup("help")+'</span>';$title.append(markup2);var $disc=$ux.find('.dwpe-header-disclosure');var $icon=$ux.find('>SPAN.icons');if($icon&&$icon.length>0){$icon.insertAfter($disc);}
var $container=$("<div class='title-container'>"+"<div class='left'></div>"+"<div class='right'></div>"+"</div>");$container.find(">DIV.left").append($title);var $toolbar=$ux.find(">UX.dwpe-toolbar");if($toolbar&&$toolbar.length>0)
{$container.find(">DIV.right").append($toolbar);}
else
{$container.find(">DIV.right").width("1%");$container.find(">DIV.left").width("99%");}
$ux.prepend($container);$title.find('>SPAN.choice-list').click(function()
{var $callee=$(this);var menu_id=$callee.attr("id")+"-menu";var group=null;var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);var $overflowMenuBody=$("#"+menu_id+"-body");$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");});var $panel=$ux.find('>DIV.header-panel');if(state=="collapsed")
{$panel.hide();}
else
{$panel.show();}
$disc.click(function(event,ui)
{var $disc=$(this);if($disc.hasClass('expanded'))
{$disc.removeClass('expanded');$disc.addClass('collapsed');$panel.slideUp(500);}
else
{$disc.removeClass('collapsed');$disc.addClass('expanded');$panel.slideDown(500);}});};DWPE_PanelFactory_Class.prototype.generateSubsubheaderMarkup=function(args)
{var currentTime=new Date()
var month=currentTime.getMonth()+1
var day=currentTime.getDate()
var year=currentTime.getFullYear()
var markup="";markup+='<ux id="'+this.getID()+'" class="dwpe-subsubheader '+args.disclosure+' '+args.choicelist+' dwpe-subheader-indent">';markup+='\r\t\t<div class="dwpe-subsubheader-label">\r\t\t\t'+args.label+'\r\t\t</div>';if(args.choicelist=="choicelist-yes")
markup+='\r\t\t<span class="choicelist"></span>';if(args.toolbar.length>0&&args.toolbar!="none")
markup+="\r\t\t<ux class='dwpe-toolbar' data='"+args.toolbar+"'/>";markup+="\r\t\t<table width='100%' cellpadding='0'  cellspacing='0' >\r\t\t\t<tr>\r\t\t\t\t<td valign='top'  width='70%'>\r\t\t\t\t\t<span class='dwpe-header-help-text'>\r\t\t\t\t\t\t"+args.helptext+"\r\t\t\t\t\t</span>\r\t\t\t\t</td>\r\t\t\t\t<td valign='top'>\r\t\t\t\t\t<span class='header-task-stamp-prompt'>Last Updated:  "+"<span class='header-task-stamp-text'>"+month+"-"+day+"-"+year+"</span></span>\r\t\t\t\t</td>\r\t\t\t</tr>\r\t\t</table>";markup+='\r\t\t<div class="header-panel" content="'+args.content+'">';markup+='\r\t\t\t'+DWPE_Utilities.getLoremIpsum();markup+='\r\t\t</div>';markup+='</ux>';return markup;}
DWPE_PanelFactory_Class.prototype.initializeSubsubheader=function($ux)
{var markup="";var state=($ux.hasClass('expanded'))?"expanded":"collapsed";markup+='<span title="Expand/Collapse Subheader" class="dwpe-header-disclosure '+state+'"></span>';var $title=$ux.find('>DIV.dwpe-subsubheader-label');markup+=$title.text();markup+='<span class="after-header-title"></span>';$title.html(markup);var markup2="";var $choice=$ux.find('SPAN.choicelist');if($choice&&$choice.length>0)
markup2+='<span title="Content Switcher" class="choice-list"></span>';markup2+='<span title="Definition text">'+DWPE_Utilities.getIconMarkup("help")+'</span>';$title.append(markup2);var $disc=$ux.find('.dwpe-header-disclosure');var $container=$("<div class='title-container'>"+"<div class='left'></div>"+"<div class='right'></div>"+"</div>");$container.find(">DIV.left").append($title);var $toolbar=$ux.find(">UX.dwpe-toolbar");if($toolbar&&$toolbar.length>0)
{$container.find(">DIV.right").append($toolbar);}
else
{$container.find(">DIV.right").width("1%");$container.find(">DIV.left").width("99%");}
$ux.prepend($container);$title.find('>SPAN.choice-list').click(function()
{var $callee=$(this);var menu_id=$callee.attr("id")+"-menu";var group=null;var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);var $overflowMenuBody=$("#"+menu_id+"-body");$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li>");});var $panel=$ux.find('>DIV.header-panel');if(state=="collapsed")
{$panel.hide();}
else
{$panel.show();}
$disc.click(function(event,ui)
{var $disc=$(this);if($disc.hasClass('expanded'))
{$disc.removeClass('expanded');$disc.addClass('collapsed');$panel.slideUp(500);}
else
{$disc.removeClass('collapsed');$disc.addClass('expanded');$panel.slideDown(500);}});};DWPE_FormFactory_Class.prototype=new DWPE_Base_Class();DWPE_FormFactory_Class.constructor=DWPE_FormFactory_Class;DWPE_FormFactory_Class.prototype._super=DWPE_Base_Class.prototype;function DWPE_FormFactory_Class()
{this._class="DWPE_FormFactory_Class";$(':input,a,ux,select').live('blur',function()
{var $ux;var $fld=$(this);var value=$fld.val();var notes=new Array();if($fld.data('note-window'))
{$fld.data('note-window').remove();$fld.removeData('note-window');}
if($fld[0].tagName.toLowerCase()=='input'&&($fld[0].type.toLowerCase()=='radio'||$fld[0].type.toLowerCase()=='checkbox'))
{$ux=$fld.closest("ux");if($ux.data("note-window"))
{$ux.data('note-window').remove();$ux.removeData('note-window');}}
if($fld.hasClass('number')&&(isNaN(value)||value.length==0))
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a number','This field requires a numeric value.'));}
if($fld.hasClass('pos-number')&&(isNaN(value)||value.length==0||value<0))
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a positive number','This field requires a numeric value that is greater than zero.'));}
if($fld.hasClass('email')&&(value.length==0||value.indexOf("@")==-1))
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a valid email address','This field requires an email address.'));}
if($fld.hasClass('zip')&&(value.length!=5))
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a valid zip code','This field requires an zip code.'));}
if($fld.hasClass('neg-number')&&(isNaN(value)||value.length==0||value>=0))
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a negative number','This field requires a numeric value that is less than zero.'));}
if($fld.hasClass('phone')&&value.length>0)
{var error=false;var digits="0123456789";var phoneNumberDelimiters="()- ext.";var validWorldPhoneChars=phoneNumberDelimiters+"+";var minDigitsInPhoneNumber=10;var phoneNumber="";for(var i=0;i<value.length;i++)
{var c=value.charAt(i);if(validWorldPhoneChars.indexOf(c)==-1)
phoneNumber+=c;}
if(isNaN(phoneNumber))error=true;if(phoneNumber.length<minDigitsInPhoneNumber)error=true;if(error==true)
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a phone number','This field requires a phone number of the form (999) 999-9999.'));}}
if($fld.hasClass('required')&&value.length==0)
{$fld.addClass('error');notes.push(DWPE_WindowFactory.formatMessage(DWPE_Utilities.getIconMarkup('error'),'Error: You must enter a value','This field requires that a value be provided.'));}
if(notes.length>0)
{$fld.data('notes',notes.join(""));}
else
{$fld.removeClass('error');$fld.removeClass('warning');$fld.removeData('notes');}
return false;});$(":input,a,select").live('focus',function()
{var $fld=$(this);if($fld[0].tagName.toLowerCase()=='input'&&($fld[0].type.toLowerCase()=='radio'||$fld[0].type.toLowerCase()=='checkbox'))
{$fld=$fld.closest("ux");}
var notes=$fld.data('notes');var help=$fld.attr('help');var $win=null;if(notes)
{var type=$fld.hasClass('error')?'error':'';type=$fld.hasClass('warning')?'warning':type;$win=DWPE_WindowFactory.openNoteWindow($fld,type,notes);$fld.data('note-window',$win);}
else if(help)
{$win=DWPE_WindowFactory.openNoteWindow($fld,'help',DWPE_WindowFactory.formatInfieldHelp(help))
$fld.data('note-window',$win);}
else
{$fld.data('note-window',null);}
return false;});return this;}
DWPE_FormFactory=new DWPE_FormFactory_Class();DWPE_FormFactory_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_FormFactory_Class.prototype.setDefaultValue=function(name,value)
{if(!this.properties[name])this.properties[name]=value;}
DWPE_FormFactory_Class.prototype.generateMarkup=function(args)
{switch(args.type.toLowerCase())
{case'checkbox':return this.generateCheckBoxMarkup(args);break;case'textbox':return this.generateTextBoxMarkup(args);break;case'textarea':return this.generateTextAreaMarkup(args);break;case'prompt':return this.generatePromptMarkup(args);break;case'fileupload':return this.generateFileUploadMarkup(args);break;case'singleselectchoicelist':return this.generateSingleSelectChoiceListMarkup(args);break;case'spinbox':return this.generateSpinBoxMarkup(args);break;case'radiogroup':return this.generateRadioGroupMarkup(args);break;case'multiselectlistbox':return this.generateMultiSelectListBoxMarkup(args);break;case'multiselectchoicelist':return this.generateMSCLMarkup(args);break;case'datetimepicker':return this.generateDateTimePickerMarkup(args);break;case'lov':return this.generateLOVMarkup(args);break;case'link':return this.generateLinkMarkup(args);break;}}
DWPE_FormFactory_Class.prototype.make=function($ux)
{var _class=$ux.attr("class").toLowerCase();_class=_class.split(" ");_class=_class[0];switch(_class)
{case"dwpe-label":case"dwpe-textbox":case"dwpe-textarea":case"dwpe_checkbox":case"dwpe_radiogroup":case"dwpe-fileupload":break;case"dwpe-singleselectchoicelist":this.initializeSingleSelectChoiceList($ux);break;case"dwpe-spinbox":this.initializeSpinBox($ux);break;case"dwpe-multiselectlistbox":this.initializeMultiSelectListBox($ux);break;case"dwpe-multiselectchoicelist":this.initializeMSCL($ux);break;case"dwpe-datetimepicker":this.initializeDateTimePicker($ux);break;case"dwpe-lov":this.initializeLOV($ux);break;}}
DWPE_FormFactory_Class.prototype.generatePromptMarkup=function(args)
{var markup="";var definition="";if(args.definition&&args.definition.length>1)
{definition=DWPE_Utilities.getIconMarkup('term-def');definition=definition.replace(/%DEFINITION%/,args.definition);}
markup+='<ux class="dwpe-prompt '+args.state+" "+args.style+" "+args.wrap+'" >';markup+=DWPE_Utilities.getIconMarkup(args.required)+
definition+
args.label;markup+=DWPE_Base_Class.getArgsAsString(args);markup+="</ux>";return markup;}
DWPE_FormFactory_Class.prototype.generateTextBoxMarkup=function(args)
{var markup='';var help=(args.help)?' help="'+args.help+'"':"";var required=(args.required)?' required':'';markup+='<ux class="dwpe-textbox"><input class="dwpe-textbox '+args.state+' '+args.alignment+' '+required+'" value="'+args.text+'"';if(args.state=='disabled'||args.state=='read-only')markup+=' disabled="disabled" ';markup+=help;markup+='/>';markup+=DWPE_Base_Class.getArgsAsString(args);markup+='</ux>';return markup;}
DWPE_FormFactory_Class.prototype.generateSpinBoxMarkup=function(args)
{var markup='';var help=(args.help)?' help="'+args.help+'"':"";var required=(args.required)?' required':'';markup+='<ux class="dwpe-spinbox '+args.state+' '+required+'"';if(args.default_value)markup+=' current="'+args.default_value+'" ';if(args.min_value)markup+=' min="'+args.min_value+'" ';if(args.max_value)markup+=' max="'+args.max_value+'" ';if(args.increment)markup+=' increment="'+args.increment+'" ';if(args.number_length)markup+=' number_length="'+args.number_length+'" ';markup+=help+">";markup+=DWPE_Base_Class.getArgsAsString(args);markup+='</ux>\r\n';return markup;}
DWPE_FormFactory_Class.prototype.spinnerOnClick=function(objId,action)
{var $ux=$('#'+objId);if($ux.hasClass('disabled')||$ux.hasClass('read-only'))return;var curVal=parseFloat($ux.attr('current'));var minVal=parseFloat($ux.attr('min'));var maxVal=parseFloat($ux.attr('max'));var stepVal=parseFloat($ux.attr('increment'));if(action=='up')
{if(curVal<maxVal&&curVal+stepVal<=maxVal)
{curVal+=+stepVal;}}else{if(curVal>minVal&&curVal-stepVal>=minVal)
{curVal+=-stepVal;}}
$ux.attr('current',curVal)
if($ux.attr('number_length')>0&&curVal>=0)
{curVal=this.formatSpinResult($ux.attr('current').length,$ux.attr('number_length'))+parseFloat(curVal);}
precision=$ux.attr('increment').split('.');if(typeof(precision[1])!=='undefined'&&precision[1]!=null)
{var precisionLength=precision[1].length;curVal=curVal.toFixed(precisionLength);}
if(curVal<=0)
{curVal=this.formatSpinResult($ux.attr('current').length,$ux.attr('number_length'))+parseFloat(curVal);curVal=curVal+''
if($ux.attr('number_length')>=2)
{curVal='-'+curVal.replace('-','0');}}
$ux.find("input").val(curVal);}
DWPE_FormFactory_Class.prototype.formatSpinResult=function(number,number_length)
{current_len=parseFloat(number);desired_len=parseFloat(number_length);pad=desired_len-current_len;var padding='';for(var i=0;i<pad;i++)
{padding+=+'0';}
return padding;}
DWPE_FormFactory_Class.prototype.initializeSpinBox=function($ux)
{var objId=DWPE_Utilities.getUniqueId();$ux.attr('id',objId);$ux.append('<input class="number" />');$('#'+objId+' input').click(function(e){var $fld=$(this);if((e.layerX)<$fld.width()+7)
{return;}else{if(e.layerY<7)
{DWPE_FormFactory.spinnerOnClick(objId,'up')}else{DWPE_FormFactory.spinnerOnClick(objId,'down')}}});var $fld=$ux.find("input")
var curVal=$ux.attr('current');$ux.attr('id',objId);if($ux.attr('width'))$ux.find("input").css('width',$ux.attr('width'));if($ux.attr('number_length')>0)
{curVal=this.formatSpinResult($ux.attr('current').length,$ux.attr('number_length'))+curVal;}
if($ux.attr('current'))$fld.val(curVal);if($ux.attr('help'))$fld.attr('help',$ux.attr('help'));if($ux.hasClass('disabled')||$ux.hasClass('read-only'))$fld.attr('disabled','disabled');if($ux.hasClass('required'))
{$ux.find("input").addClass('required');$fld.addClass('required');};}
DWPE_FormFactory_Class.prototype.generateSingleSelectChoiceListMarkup=function(args)
{ov
var markup="";var selectedItem=""
var help=(args.help)?' help="'+args.help+'"':"";var required=(args.required)?' required':'';markup+='<ux class="dwpe-singleselectchoicelist">\r\n';markup+="\t<select class='dwpe-singleselectchoicelist "+args.state+" "+required+"'";if(args.state=="disabled"||args.state=="read-only")markup+=" disabled='disabled' ";markup+=help;markup+=">\r\n";for(var i in args.items)
{var item=args.items[i];var display_text=(item.label.toLowerCase()=="blank")?" ":item.label;markup+="\t\t<option";if(item.value)markup+=" value='"+item.value+"' ";if(item.selected=='yes')
{markup+=' selected="selected"';selectedItem=item.label;}
markup+=">"+display_text+"</option>\r\n";}
markup+="\t</select>\r\n";markup+=DWPE_Base_Class.getArgsAsString(args);markup+="</ux>\r\n";return markup;}
DWPE_FormFactory_Class.prototype.initializeSingleSelectChoiceList=function($ux)
{if($ux.find('select').hasClass('read-only'))
{$ux.html('<span class="dwpe-singleselectchoicelist read-only">'+$ux.find('select').val()+'</span>');}}
DWPE_FormFactory_Class.prototype.generateTextAreaMarkup=function(args)
{var markup="";var help=(args.help)?' help="'+args.help+'"':"";var required=(args.required)?' required':'';markup+="<ux class='dwpe-textarea'><textarea class='dwpe-textarea "+args.state+' '+required+"'";if(args.state=="disabled"||args.state=="read-only")markup+=" disabled='disabled' ";if(args.height)markup+=" style='height:"+args.height+"' ";markup+=help;markup+=">"+args.text+"</textarea>";markup+=DWPE_Base_Class.getArgsAsString(args);markup+="</ux>";return markup;}
DWPE_FormFactory_Class.prototype.generateCheckBoxMarkup=function(args)
{var markup="";var count=1;var help=(args.help)?' help="'+args.help+'" ':"";markup+='<ux class="dwpe-checkbox '+args.required+'" ';markup+=help;markup+='>';var label_indent="\r\t";if(args.wrap&&args.wrap!=0)
{markup+='\r\t<table>\r\t\t<tr valign="top">\r\t\t\t<td class="wrap" >';label_indent+="\t\t";}
for(i in args.items)
{var item=args.items[i];markup+=label_indent+'<label class="checkbox-label';if(item.boxstate=="disabled"||args.state=="disabled")
markup+=' disabled';markup+='"';if(item.tooltip)
markup+=' title="'+item.tooltip+'"';markup+='><input class="check-box '+args.state+'" type="checkbox"';if(item.value)
markup+=' value="'+item.value+'"';if(item.tooltip)
markup+=' title="'+item.tooltip+'"';if(args.state=="disabled"||args.state=="read-only"||item.boxstate=="disabled")
markup+=' disabled="disabled" ';if(item.selected=='yes')
markup+=' checked="checked"';markup+=' />';markup+=item.label+'</label><br>';if(count%args.wrap==0&&args.items.length!=count)
markup+='\r\t\t\t</td>\r\t\t\t<td class="wrap" valign="top">';count++;}
if(args.wrap&&args.wrap!=0)
markup+='\r\t\t\t</td>\r\t\t</tr>\r\t</table>';markup+=DWPE_Base_Class.getArgsAsString(args);markup+='\r</ux>';return markup;}
DWPE_FormFactory_Class.prototype.generateRadioGroupMarkup=function(args)
{var markup="";var count=1;var help=(args.help)?' help="'+args.help+'"':"";markup+='<ux class="dwpe-radiogroup '+args.required+'" ';markup+=help;markup+='>';var label_indent="\r\t";if(args.wrap&&args.wrap!=0)
{markup+='\r\t<table>\r\t\t<tr valign="top">\r\t\t\t<td class="wrap" >';label_indent+="\t\t";}
for(i in args.items)
{var item=args.items[i];markup+=label_indent+'<label class="radiogroup-label';if(item.boxstate=="disabled"||args.state=="disabled")
markup+=' disabled';markup+='"';if(item.tooltip)
markup+=' title="'+item.tooltip+'"';markup+='><input name="'+args.group+'" class="radio-group '+args.state+'" type="radio"';if(item.value)
markup+=' value="'+item.value+'"';if(item.tooltip)
markup+=' title="'+item.tooltip+'"';if(item.selected=='yes')
markup+=' checked="checked"';if(args.state=="disabled"||args.state=="read-only"||item.boxstate=="disabled")
markup+=' disabled="disabled" ';markup+=' />'+item.label+'</label><br>';if(count%args.wrap==0&&args.items.length!=count)
markup+='\r\t\t\t</td>\r\t\t\t<td class="wrap" valign="top">';count++;}
if(args.wrap&&args.wrap!=0)
markup+='\r\t\t\t</td>\r\t\t</tr>\r\t</table>';markup+=DWPE_Base_Class.getArgsAsString(args);markup+='\r</ux>';return markup;}
DWPE_FormFactory_Class.prototype.generateFileUploadMarkup=function(args)
{var markup="";var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');btn.label="Browse";var help,width;if(args.state=="disabled")
btn.state=0;markup+="<ux class='dwpe-fileupload'>";markup+="<input class='dwpe-fileupload "+args.required+' '+args.state+"' type='text'";if(args.state=="disabled"||args.state=="read-only")markup+=" disabled='disabled' ";if(args.help)
markup+=' help="'+args.help+'"';if(args.width&&args.width.length>0)
markup+=' style="width:'+args.width+'px"';markup+="/>";markup+='\r\t<span class="browse-button '+args.state+'">'+DWPE_ButtonFactory.make(btn)+'</span>';markup+=DWPE_Base_Class.getArgsAsString(args);markup+='\n</ux>';return markup;}
DWPE_FormFactory_Class.prototype.generateMultiSelectListBoxMarkup=function(args)
{var markup="";markup+='<ux class="dwpe-multiselectlistbox '+args.required+' '+args.state+'"';if(args.listboxwidth)
markup+=' style="width:'+args.listboxwidth+'"';if(args.listboxhelp)
markup+=' help="'+args.listboxhelp+'"';markup+='>';if(args.checkboxall=="all-required")
{markup+='\r\t<label class="multiselectlistbox-label';if(args.state=="disabled")
markup+=' disabled';markup+='"';if(args.selectalltooltip)
markup+=' title="'+args.selectalltooltip+'"';markup+='>';markup+='<input class="multiselect-listbox-selectall '+args.state+'" type="checkbox"';if(args.state=="disabled"||args.state=="read-only")
markup+=' disabled="disabled" ';if(args.selectalltooltip)
markup+=' title="'+args.selectalltooltip+'"';markup+='/>All</label>';markup+='\r\t<div class="multiselect-listbox multiselect-all-separator"';}
else
markup+='\r\t<div class="multiselect-listbox"';if(args.listboxheight)
markup+=' style="height:'+args.listboxheight+'"';markup+='>';for(var i in args.items)
{var item=args.items[i];switch(item.itemtype)
{case"checkbox":default:markup+='\r\t\t<label class="multiselectlistbox-label';if(item.boxstate=="disabled"||args.state=="disabled")
markup+=' disabled';markup+='"';if(item.tooltip)
markup+=' title="'+item.tooltip+'"';markup+='><input class="multiselect-listbox checkbox'+i+' '+args.state+'" type="checkbox"';if(item.value)
markup+=' value="'+item.value+'"';if(item.tooltip)
markup+=' title="'+item.tooltip+'"';if(args.state=="disabled"||args.state=="read-only"||item.boxstate=="disabled")
markup+=' disabled="disabled" ';if(item.selected=="yes")
markup+=' checked="checked"'
markup+='/>';markup+=item.label+'</label><br>';break;case"separator":markup+='\r\t\t<hr class="multiselect-separator"/>';break;}}
markup+='\r\t</div>';markup+=DWPE_Base_Class.getArgsAsString(args);markup+='\r</ux>';return markup;}
DWPE_FormFactory_Class.prototype.initializeMultiSelectListBox=function($ux)
{$('INPUT.multiselect-listbox-selectall').change(function(){$(this).closest('UX').find("INPUT.multiselect-listbox").attr('checked',$('.multiselect-listbox-selectall').is(':checked'));});$('INPUT.multiselect-listbox').change(function(){$(this).closest('UX').find('INPUT.multiselect-listbox-selectall').attr('checked','');});if($ux.hasClass('read-only'))
{var markup='';$ux.find('div input:checkbox:checked').each(function()
{markup+=$(this).parent().text()+'; ';});$ux.html(markup);}}
DWPE_FormFactory_Class.prototype.generateMSCLMarkup=function(args){var markup='';var help=(args.help)?' help="'+args.help+'"':"";markup+='<ux class="dwpe-multiselectchoicelist '
if(args.required)markup+=args.required+' ';if(args.state)markup+=args.state+' ';if(args.checkboxall)markup+='AllowCheckAll ';markup+='"';if(args.list_width)markup+=' width="'+args.list_width+'" ';if(args.list_height)markup+=' height="'+args.list_height+'" ';markup+=help;markup+='>';markup+='\r\n\t<ul>\r\n';if(args.state=='read-only'){markup+='\t<li>[no items selected]</li>\r\n';}else{for(i in args.items){var item=args.items[i];var myClass='';markup+='\t\t<li';if(item.value)markup+=' SystemValue="'+item.value+'"';if(item.tooltip)markup+=' Tooltip="'+item.tooltip+'"';if(item.selected=='yes')myClass+='checked';if(item.separator=='1')myClass+=' separator';if(item.boxstate=='0')myClass+=' disabled';if(myClass.length>0)markup+=' class="'+myClass+'"';markup+='>'+item.label+'</li>\r\n';}}
markup+=DWPE_Base_Class.getArgsAsString(args);markup+='\t</ul>\r\n</ux>'
return markup;}
DWPE_FormFactory_Class.prototype.initializeMSCL=function($ux)
{var objId=DWPE_Utilities.getUniqueId();$ux.attr('id',objId);var $menu=$("<div></div>");$ux.data("menu",$menu);$ux.append($menu);var menuMarkup='';if($ux.hasClass('AllowCheckAll'))
{menuMarkup+='<ul class="mscl-checkall"><li><label><input type="checkbox" class="mcsl-check-all" name="dwpe_mscl_'+objId+'" onclick="DWPE_FormFactory_Class.msclCheckAll(\''+objId+'\');" value="">All</label></li></ul>';}
menuMarkup+='<div class="mscl-listitems"><ul>';$ux.find("li").each
(function(index)
{var $fld=$(this);var chkID=objId+'_'+index;var value=$fld.attr('SystemValue');var tooltip=$fld.attr('Tooltip');menuMarkup+='<li ';menuMarkup+='class="'
if($fld.hasClass('separator'))menuMarkup+='separator ';if($fld.hasClass('disabled'))menuMarkup+=' disabled';menuMarkup+='" ';menuMarkup+='>'
menuMarkup+='<label'
if($fld.hasClass('disabled'))menuMarkup+=' class="disabled" ';if(tooltip)menuMarkup+=' title="'+tooltip+'" ';menuMarkup+='><input type="checkbox" name="dwpe_mscl_'+objId+'"';if($fld.hasClass('checked'))menuMarkup+=' checked ';if($fld.hasClass('disabled'))menuMarkup+=' disabled="disabled" ';(value)?menuMarkup+=' value="'+value+'"':menuMarkup+=' value="'+$fld.html()+'"';menuMarkup+='/>'+$fld.html()+'</label></li>';});menuMarkup+='</ul></div>';$menu.html(menuMarkup);$('<div></div>').append($menu);$menu.find('ul.mscl-checkall label').bind('click',function(event){event.stopPropagation();});$menu.find('div.mscl-listitems label').bind('click',function(event){event.stopPropagation();DWPE_FormFactory_Class.msclCheckBoxOnClick(objId);});var class_string=$ux.attr("class").replace(/dwpe-multiselectchoicelist/,"");var markup='<input  class="'+class_string+'" ';if($ux.attr('help'))
markup+=' help="'+$ux.attr('help')+'"';if($ux.attr('width'))
{markup+=' style="width:'+$ux.attr('width')+'"';}
markup+=' id="'+objId+'_items" />';$ux.removeAttr('help');if($ux.hasClass('read-only'))
{markup='<span class="dwpe-mscl read-only">'+$ux.find(">li").html()+'</span>';}
$ux.html(markup);$('#'+objId+'_items').keyup(function(e){$ux.data('menu').find('li').each(function(){$(this).removeClass('selected');})
$ux.data('menu').find('input:checkbox').each(function(){$(this).attr('checked',false);})
var myArray=$(this).val().split(';');$.each(myArray,function(intIndex,objValue){var listboxItems=$.trim(objValue).toLowerCase();$ux.data('menu').find("label").each(function()
{var $listItem=$(this);if(listboxItems==$listItem.text().toLowerCase())
{$listItem.find("input:checkbox").attr('checked',true);$listItem.closest("li").addClass('selected');}})})})
$('#'+objId+'_items').click(function(e){var $fld=$(this);if((e.layerX)<$fld.width()-10)return;var $ux=$fld.closest("ux.dwpe-multiselectchoicelist");var $menuContent=$ux.data("menu");var menu_id=objId+"-menu";var group=null;var menu=DWPE_Window.addWindow($ux,menu_id,"menu",null);var $menuBody=$("#"+menu_id+"-body");$menuBody.append($menuContent);$('.mscl-listitems ul li').css('width',$('#'+objId).closest("ux").width()-7);if($ux.hasClass('AllowCheckAll'))$('.mscl-listitems').css('max-height','255px');});if($ux.hasClass('disabled')||$ux.hasClass('read-only'))
$ux.find("input").attr('disabled','disabled');DWPE_FormFactory_Class.msclCheckBoxOnClick(objId);if($ux.attr('width'))$ux.css('width',$ux.attr('width'));if($ux.attr('height'))$ux.find("div.mscl-listitems").css('height',$ux.attr('height'));}
DWPE_FormFactory_Class.prototype.generateLinkMarkup=function(args){var linkLabel=(args.label)?args.label:"";var linkCommand=(args.command)?' cmd="'+args.command+'"':"";var linkTooltip=(args.tooltip)?' title="'+args.tooltip+'"':"";var markup='';markup+='<ux class="dwpe-link" '+linkCommand+' '+linkTooltip+'>'+
linkLabel+
DWPE_Base_Class.getArgsAsString(args)+'</ux>';return markup;}
DWPE_FormFactory_Class.prototype.generateLOVMarkup=function(args){var markup='';var help=(args.help)?' help="'+args.help+'"':"";var defaultValue=(args.default_value)?' DefaultValue="'+args.default_value+'"':"";var defaultStyle=(args.default_style)?' DefaultStyle="'+args.default_style+'"':"";markup+='<ux class="dwpe-lov';if(args.required)markup+=' '+args.required;if(args.state)markup+=' '+args.state;if(args.value)markup+=' '+args.value;markup+='"';markup+=defaultStyle;markup+=defaultValue;markup+=help;markup+='>';markup+='\r\n';markup+='\t'+DWPE_Base_Class.getArgsAsString(args);markup+='\r\n</ux>'
return markup;}
DWPE_FormFactory_Class.prototype.initializeLOV=function($ux)
{var objId=DWPE_Utilities.getUniqueId();$ux.attr('id',objId);$ux.append('<input />');$('#'+objId+' input').click(function(e){var $fld=$(this);if((e.layerX)<$fld.width()+7)return
alert('LOV popup has not been implemented.');});if($ux.hasClass('required'))$ux.find("input").addClass('required');if($ux.hasClass('disabled')||$ux.hasClass('read-only')){$ux.find("input").attr('disabled','disabled');}
if($ux.attr('DefaultValue'))$ux.find("input").val($ux.attr('DefaultValue'));if($ux.hasClass('read-only'))
{var readOnlyText='';if($ux.attr('DefaultStyle')=='list')
{readOnlyText=$ux.find('select').val();}else{readOnlyText=$ux.find('input').val();}
$ux.html('<span class="dwpe-lov read-only">'+readOnlyText+'</span>');return;}
if($ux.hasClass('required'))$ux.find("input").addClass('required');if($ux.attr('help'))$ux.find("input").attr('help',$ux.attr('help'));}
DWPE_FormFactory_Class.prototype.generateDateTimePickerMarkup=function(args){var markup='';var help=(args.help)?' help="'+args.help+'"':"";var timeZone=(args.time_zone)?' TimeZone="'+args.time_zone+'"':"";var displayTime=(args.display_time)?' DisplayTime="yes"':"";var defaultDate=(args.default_date)?' DefaultDate="'+args.default_date+'"':"";markup+='<ux class="dwpe-datetimepicker';if(args.required)markup+=' '+args.required;if(args.state)markup+=' '+args.state;if(args.value)markup+=' '+args.value;markup+='"';markup+=defaultDate;markup+=displayTime;markup+=timeZone;markup+=help;markup+='>';markup+='\r\n';markup+='\t'+DWPE_Base_Class.getArgsAsString(args);markup+='\r\n</ux>'
return markup;}
DWPE_FormFactory_Class.prototype.initializeDateTimePicker=function($ux)
{var objId=DWPE_Utilities.getUniqueId();$ux.attr('id',objId);$ux.append('<input/>');var defaultDate;switch($ux.attr('DefaultDate'))
{case'past':defaultDate=DWPE_TableFactory.getRandomDate(-1000,-1);break;case'today':defaultDate=DWPE_TableFactory.getRandomDate(0,0);break;case'future':defaultDate=DWPE_TableFactory.getRandomDate(1,1000);break;default:defaultDate='';}
if($ux.attr('DisplayTime'))defaultDate+=' 12:00PM';$ux.find("input").attr('value',defaultDate);if($ux.attr('TimeZone'))
{var timeZone=DWPE_FormFactory.getDateTimePickerTimeZone($ux.attr('TimeZone'));if($ux.hasClass('read-only'))
{var curVal=$ux.find("input").attr('value');$ux.find("input").attr('value',curVal+' '+timeZone);}else{$ux.find("input").css('width','75%');$ux.append('<span>'+timeZone+'</span>');}}
$('#'+objId+' input').click(function(e){var $fld=$(this);if((e.layerX)<$fld.width()+7)return;alert('Calendar popup has not been implemented.');});if($ux.hasClass('disabled')||$ux.hasClass('read-only'))
{$ux.find("input").attr('disabled','disabled');}
if($ux.hasClass('required'))$ux.find("input").addClass('required');if($ux.attr('help'))$ux.find("input").attr('help',$ux.attr('help'));}
DWPE_FormFactory_Class.prototype.getDateTimePickerTimeZone=function(tz)
{var timeZone='';switch(tz)
{case'-12':timeZone='(UTC -12:00) Eniwetok';break;case'-11':timeZone='(UTC -11:00) Samoa';break;case'-10':timeZone='(UTC -10:00) Hawaii';break;case'-9':timeZone='(UTC -9:00) Alaska';break;case'-8':timeZone='(UTC -08:00) US Pacific Time';break;case'-7':timeZone='(UTC -07:00) US Mountain Time';break;case'-6':timeZone='(UTC -06:00) US Central Time';break;case'-5':timeZone='(UTC -05:00) US Eastern Time';break;case'-4':timeZone='(UTC -04:00) US Atlantic Time';break;case'-3':timeZone='(UTC -03:00) Brazil';break;case'-2':timeZone='(UTC -02:00) Mid Atlantic';break;case'-1':timeZone='(UTC -01:00) Azores';break;case'0':timeZone='(UTC -00:00) London';break;case'+1':timeZone='(UTC +01:00) Paris';break;case'+2':timeZone='(UTC +02:00) South Africa';break;case'+3':timeZone='(UTC +03:00) Baghdad';break;case'+4':timeZone='(UTC +04:00) Abu Dhabi';break;case'+5':timeZone='(UTC +05:00) Ekaterinburg';break;case'+6':timeZone='(UTC +06:00) Almaty';break;case'+7':timeZone='(UTC +07:00) Bangkok';break;case'+8':timeZone='(UTC +08:00) Beijing';break;case'+9':timeZone='(UTC +09:00) Tokyo';break;case'+10':timeZone='(UTC +10:00) Eastern Australia';break;case'+11':timeZone='(UTC +11:00) Magadan';break;case'+12':timeZone='(UTC +12:00) Auckland*';break;default:timeZone='(UTC -08:00) US Pacific Time';}
return timeZone;}
DWPE_FormFactory_Class.msclCheckAll=function(objId)
{var $menu=$('#'+objId).closest("ux").data("menu");var checkAllStatus=$menu.find('.mcsl-check-all').is(':checked');$menu.find("div.mscl-listitems INPUT[type='checkbox']").each(function(){$(this).attr('checked',checkAllStatus);});$('#'+objId+'_items').val((checkAllStatus)?'All':'');if($('#'+objId+'_items').val())
{$menu.find('div.mscl-listitems li').addClass('selected');}else{$menu.find('div.mscl-listitems li').removeClass('selected');}}
DWPE_FormFactory_Class.msclCheckBoxOnClick=function(objId){var $ux=$('#'+objId).closest("ux").data("menu");$ux.find(".mcsl-check-all").attr('checked',false);var selectedItems='';$ux.find("li").removeClass('selected');$ux.find("INPUT:checkbox:checked").each(function(){var $fld=$(this);$fld.closest('div.mscl-listitems li').addClass('selected');selectedItems+=($fld.parent().text())+'; ';});var lastValue=selectedItems.slice(0,selectedItems.length-2);$('#'+objId+'_items').val(lastValue);$ux.data('mscl_last_value',lastValue);}
DWPE_FormFactory_Class.prototype.generateFormMarkup=function(args)
{args.rows=args.rows*1;args.columns=args.columns*1;var col_width="";if(args.prompts=="stacked")
col_width=" class='r100'";else
col_width=" class='r50'";var table_width="r"+args.columns;var states=["","error","","warning","","disabled","","read-only"];var req=["not-required","required"];var markup="<form>\r\t<table  cellpadding='0' cellspacing='0' class='dwpe-form-layout'>\r\t\t<tr>";for(var columns=0;columns<args.columns;columns++)
{markup+="\r\t\t\t<td >\r\t\t\t\t<table cellpadding='0' cellspacing='0' class='dwpe-form-layout-inner "+args.prompts+"'>";for(var rows=0;rows<args.rows;rows++)
{var component=this.getRandomArgsList();component.state=states[0];component.required=req[0];var prompt=(args.prompts=='stacked')?this.getDefaultArgsListForType('prompt-stacked'):this.getDefaultArgsListForType('prompt');prompt.label=component.type.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});prompt.required=component.required;prompt.state=component.state;markup+="\r\t\t\t\t\t<tr>";markup+="\r\t\t\t\t\t\t<td>"+this.generateMarkup(prompt)+"</td>";if(args.prompts=='stacked')
{markup+="\r\t\t\t\t\t</tr>\r\t\t\t\t\t<tr>";}
markup+="\r\t\t\t\t\t\t<td class='"+table_width+"'>"+this.generateMarkup(component)+"</td>";markup+="\r\t\t\t\t\t</tr>";}
markup+="\r\t\t\t\t</table>\r\t\t\t</td>";}
markup+="\r\t\t</tr>\r\t\</table>\r</form>";return markup;}
DWPE_FormFactory_Class.prototype.getRandomArgsList=function()
{var types=["TextArea","TextBox","singleselectchoicelist","multiselectchoicelist","spinbox","CheckBox","RadioGroup","MultiSelectListBox","LOV","DateTimePicker"];var i=parseInt(Math.random()*(types.length));return this.getDefaultArgsListForType(types[i]);}
DWPE_FormFactory_Class.prototype.getDefaultArgsListForType=function(type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(type.toLowerCase())
{case'multiselectchoicelist':return{"_class":"DWPE_FormFactory_Class","type":"multiselectchoicelist","required":"not-required","state":" ","label":"New Item","checkboxall":" ","help":"","items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"}]};break;case'multiselectchoicelist-item':return'{"label":"Item","value":"","tooltip":"","boxstate":"1","selected":"no","separator":"0"}';break;case'checkbox':return{"_class":"DWPE_FormFactory_Class","type":"checkbox","required":"not-required","state":"enabled","selecttype":"truefalse-select","label":"Sample Value","help":"","wrap":"0","items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":""},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":""},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":""}]};break;case'checkboxgroup':return{"_class":"DWPE_FormFactory_Class","type":"checkbox","required":"not-required","state":"enabled","selecttype":"truefalse-select","label":"Sample Value","help":"","wrap":"0","items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","tooltip":"","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","tooltip":"","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","tooltip":"","selected":"no"}]};break;case'checkboxgroup-item':return'{"label":"Item","value":"","tooltip":"","selected":"no"}';break;case'textbox':return{"_class":"DWPE_FormFactory_Class","type":"textbox","text":"My Text","state":" ","required":"not-required","help":""}
break;case'textarea':return{"_class":"DWPE_FormFactory_Class","type":"textarea","text":"Lorem ipsum dolor sit amet","height":"47px","state":"","required":"not-required","help":""}
break;case'spinbox':return{"_class":"DWPE_FormFactory_Class","type":"spinbox","min_value":"-5","max_value":"5","increment":"1","required":" ","help":"","default_value":"0","number_length":""}
break;case'prompt':return{"_class":"DWPE_FormFactory_Class","type":"prompt","label":"My Label","required":"not-required","state":" ","style":" ","wrap":" ","definition":" "};break;case'prompt-stacked':return{"_class":"DWPE_FormFactory_Class","type":"prompt","label":"My Label","required":"not-required","state":" ","style":"stacked","wrap":" ","definition":" "};break;case'fileupload':return{"_class":"DWPE_FormFactory_Class","type":"fileupload","required":"not-required","state":"enabled","help":""};break;case'lov':return{"_class":"DWPE_FormFactory_Class","type":"LOV","required":"not-required","state":"enabled","help":""};break;case'datetimepicker':return{"_class":"DWPE_FormFactory_Class","type":"datetimepicker","required":"not-required","state":"enabled","help":"","default_date":"future"};break;case'singleselectchoicelist':return{"_class":"DWPE_FormFactory_Class","type":"singleselectchoicelist","state":" ","required":"not-required","help":"","items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","selected":"no"}]};break;case'singleselectchoicelist-item':return'{ "label":"Item", "value":"", "selected":"no"}';break;case'radiogroup':return{"_class":"DWPE_FormFactory_Class","type":"radiogroup","required":"not-required","state":"enabled","group":"radiogroup","label":"Sample Value","help":"","wrap":"0","items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","value":"","tooltip":"","boxstate":"enabled","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","value":"","tooltip":"","boxstate":"enabled","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","value":"","tooltip":"","boxstate":"enabled","selected":"no"}]};break;case'radiogroup-item':return'{"label":"Item","value":"","tooltip":"","boxstate":"enabled","selected":"no"}';break;case'multiselectlistbox':return{"_class":"DWPE_FormFactory_Class","type":"multiselectlistbox","required":"all-notrequired","state":"enabled","label":"Sample Value","checkboxall":"required","help":"","items":[{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 1","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 2","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"},{"_class":"DWPE_FormFactory_Class","type":"Label","label":"Item 3","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"}]};break;case'multiselectlistbox-item':return'{"label":"Item","itemtype":"checkbox","value":"","tooltip":"","boxstate":"enabled","selected":"no"}';break;default:return{};break;}}
DWPE_FormFactory_Class.prototype.getPropertySheetFields=function(_type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(_type)
{case'multiselectchoicelist':return[{type:"text",id:"label",name:"Value",value:""},{type:"text",id:"value",name:"System Value",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"chooser",id:"boxstate",name:"Item State",value:'1=Enabled&0=Disabled'},{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'},{type:"chooser",id:"separator",name:"Separator Below",value:'0=No&1=Yes'}];break;case'checkbox':return[{type:"text",id:"label",name:"Value",value:""},{type:"text",id:"value",name:"System Value",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}];break;case'radiogroup':return[{type:"text",id:"label",name:"Value",value:""},{type:"text",id:"value",name:"System Value",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"chooser",id:"boxstate",name:"Item State",value:'enabled=Enabled&disabled=Disabled'},{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}];break;case'multiselectlistbox':return[{type:"chooser",id:"itemtype",name:"Item Type",value:'checkbox=Checkbox&separator=Separator'},{type:"text",id:"label",name:"Value",value:""},{type:"text",id:"value",name:"System Value",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"chooser",id:"boxstate",name:"Item State",value:'enabled=Enabled&disabled=Disabled'},{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}];break;case'singleselectchoicelist':return[{type:"text",id:"label",name:"Value",value:""},{type:"text",id:"value",name:"System Value",value:""},{type:"chooser",id:"selected",name:"Selected",value:'no=No&yes=Yes'}];break;default:return[];break;}}
DWPE_FormFactory_Class.prototype.initEditableObjectList=function(listName)
{var $list=$("#"+listName);if($list.attr("initialized")==1)return;$list.change(function(event)
{var $select=$(this);var $option=$($select.attr("options")[$select.attr("selectedIndex")]);var args=$option.data("obj");DWPE_FormFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);for(var argName in args)
{$("#item__"+argName).val(args[argName]);}});$('<p align="right" id="addRemoveListItems">'+'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_FormFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_FormFactory_Class.removeSelectedListItem(\''+listName+'\')">'+'</p>').insertAfter($list);$list.attr("initialized",1);}
DWPE_FormFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{var args=DWPE_FormFactory.getPropertySheetFields(type);var markup="";markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';if(args.length==0)
markup+="<tr><td>No property sheet exists for this item type.</td></tr>";else
{for(var argName in args)
{var arg=args[argName];markup+="<tr>";switch(arg.type)
{case'select':markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+
arg.value+'</select></td>';break;case'chooser':var options=arg.value.split("&");markup+="<td class='label'>"+arg.name+"</td>";markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";for(var i in options)
{var option=options[i].split("=");markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";}
markup+='</select></td>';break;case'hidden':markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';break;case'text':default:markup+="<td class='label'>"+arg.name+"</td>";markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';break;}
markup+="</tr>";}}
markup+="</table>";$("#"+listName+"-property-sheet").html(markup).show("slide");$("#"+listName+"-selected-item-properties :input").keyup(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}}).change(function()
{var args={};$("#"+listName+"-selected-item-properties :input").each(function()
{var $fld=$(this);var propName=$fld.attr("id").replace(/item__/,"");args[propName]=$fld.val();});var $select=$("#items");var i=$select.attr("selectedIndex");if(i>-1)
{$option=$($select.attr("options")[i]);$option.data("obj",args);$option.text(args.label);}})}
DWPE_FormFactory_Class.removeSelectedListItem=function(listID)
{var $list=$("#"+listID);var i=$list.attr("selectedIndex");var len=$list.attr("options").length;if(len==0)
return;$($list.attr("options")[i]).remove();if(len-1<=0)
return;i=(i-1<0)?0:i-1;$list.attr("selectedIndex",i);$list.change();}
DWPE_FormFactory_Class.addListItem=function(listID)
{var $list=$("#"+listID);var $option=$("<option></option>");var args=DWPE_FormFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));$option.text(args.label+' '+i);$option.data("obj",args);$list.append($option);i++;};DWPE_WindowFactory_Class.prototype=new DWPE_BaseFactory_Class();DWPE_WindowFactory_Class.constructor=DWPE_WindowFactory_Class;DWPE_WindowFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;function DWPE_WindowFactory_Class()
{this._class="DWPE_WindowFactory_Class";$(".dwpe-window-container>DIV.window>DIV.top").live('mouseover',function(){var $win_title=$(this);if(!$win_title.data("init"))
{$win_title.data("init",true);var $win_container=$win_title.closest('.dwpe-window-container');var $win;if($win_container.hasClass("modal"))
{$win=$win_container.find(">DIV.window");}
else
{$win=$win_container;}
$win.draggable({cursor:"move",containment:'parent',handle:$win_title,start:function(event,ui)
{$win_container.css('z-index',DWPE_WindowFactory.getNextZ());$(":input").trigger('blur');},stop:function()
{}});}
return false;});$(".dwpe-window-container").live('mousedown',function()
{var $win=$(this);$win.css('z-index',DWPE_WindowFactory.getNextZ());$(":input").trigger('blur');});$(".open-window").live('mouseup',function(event,ui)
{DWPE_WindowFactory.open(this,$(this).attr('url'));event.preventDefault();$(":input,a").trigger('blur');return false;});$(".close-window").live('click',function(event,ui)
{var $btn=$(this);$(":input,a").trigger('blur');var $win=$btn.closest('.dwpe-window-container');$win.remove();return false;});$(document).bind('contextmenu',function(){return false;})
$(".context-menu").live('mouseup',function(event)
{var $callee=$(this);if($callee.data('context-menu-open'))return;if(event.which===1)return true;$callee.data('context-menu-open',true);var x=event.clientX+$(document).scrollLeft();var y=event.clientY+$(document).scrollTop();var menu_url=$callee.attr('menu');if(!$callee.data('menu'))
{$.ajax({url:menu_url,cache:false,success:function(data)
{var $_callee=$callee;var $menu=DWPE_WindowFactory.initializeContextMenu(data,$callee,x,y);var handler=function(event){$menu.hide();$_callee.data('context-menu-open',false);$(this).unbind(event);};$('body').bind('mousedown',handler);}});}
else
{var $menu=$callee.data("menu");$('body').append($menu)
var handler=function(event){$menu.hide();$callee.data('context-menu-open',false);$(this).unbind(event);};$('body').bind('mouseup',handler);$menu.css({top:y,left:x,"z-index":DWPE_WindowFactory.getNextZ()});$menu.show();}
return false;});$("UX.dwpe-menu LI, UL.DWPE_Window_Body LI").live('click',function(event,ui)
{var $item=$(this);var $parent=$item.closest("UL");if($item.hasClass('disabled'))return;if($item.hasClass('radio'))
{$parent.find(">LI.radio[group='"+$item.attr('group')+"']").each
(function(i)
{var $LI=$(this);if($item[0]==$LI[0])
{$LI.addClass('on');}
else
{$LI.removeClass('on');}});}
else if($item.hasClass('toggle'))
{$item.toggleClass('on');}
else if($item.hasClass('menu-scroll'))
{var $parent=$item.closest("UL");var $items=$parent.data('menu-items');var numItems=$items.length;var first_index=$parent.data('first_index');var last_index=first_index+DWPE_WindowFactory.menuScrollThreshold;var $up=$parent.data("up");var $dwn=$parent.data("down");if($item.hasClass('up')&&first_index>0)
{first_index-=1;last_index-=1;}
else if($item.hasClass('down')&&last_index<numItems)
{first_index+=1;last_index+=1;}
$items.each(function(i)
{if(i>=first_index&&i<last_index)
$(this).show();else
$(this).hide();});if(first_index<=0)
$up.removeClass('enabled');else
$up.addClass('enabled');if(last_index>=numItems-1)
$dwn.removeClass('enabled');else
$dwn.addClass('enabled');$parent.data('first_index',first_index);return false;}
var cmd=$item.attr('cmd');if(cmd)
{var action=cmd.split("::");switch(action[0].toLowerCase())
{case"js":var command=action[1];if(DWPE_Utilities.isDisabled($item))break;try{$(document).data('context',$item);eval(command);}
catch(e){alert("error in command format");}
break;case"url":document.location=action[1];break;default:break;}}
if(!$item.hasClass("top-level-parent"))
{$parent.trigger('mouseout');$parent.closest('ux').data('show-menus',false);}
return false;});return this;}
DWPE_WindowFactory=new DWPE_WindowFactory_Class();DWPE_WindowFactory_Class.prototype.menuScrollThreshold=14;DWPE_WindowFactory_Class.prototype.openWindow=function(btn)
{var $btn=$(document).data('context');DWPE_WindowFactory.open($btn,$btn.attr('url'));event.preventDefault();$(":input,a").trigger('blur');return false;}
DWPE_WindowFactory_Class.prototype.closeWindow=function()
{var $btn=$(document).data('context');$(":input,a").trigger('blur');var $win=$btn.closest('.dwpe-window-container');$win.remove();return false;}
DWPE_WindowFactory_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_WindowFactory_Class.prototype.make=function($ux)
{var _class=this.getRootClass($ux.attr("class"));switch(_class)
{case'dwpe-menu':this.loadMenu($ux);break;case"dwpe-window-container":break;}}
DWPE_WindowFactory_Class.prototype.generateMarkup=function(args)
{switch(args.type.toLowerCase())
{case"info-dialog":return this.generateInfoDialogMarkup(args);break;case"warning-dialog":return this.generateWarningDialogMarkup(args);break;case"error-dialog":return this.generateErrorDialogMarkup(args);break;case"confirm-dialog":return this.generateConfirmationDialogMarkup(args);break;case"dialog":return this.generateDialogMarkup(args);break;case"menu":return this.generateMenuMarkup(args);break;default:return"[undefined window or menu type]";break;}}
DWPE_WindowFactory_Class.prototype.formatMessage=function(icon,summary,detail)
{return"<table><tr><td>"+icon+"</td><td><b>"+summary+"</b></td></tr><tr><td></td><td>"+detail+"</td></tr></table>";}
DWPE_WindowFactory_Class.prototype.formatInfieldHelp=function(help)
{return"<table><tr><td><b>"+help+"</b></td></tr></table>";}
DWPE_WindowFactory_Class.prototype.noteWindowTemplate=function()
{var markup="";markup+="<ux:dialogs class='dwpe-note-window-container note-anchored'>";markup+="<div class='cone left'></div>"
markup+="<div class='window note'>";markup+="<div class='middle WindowRegion'>";markup+="%CONTENT%";markup+="</div>";markup+="</div>";markup+="<div class='cone right'></div>"
markup+="</ux:dialogs>";return markup;}
DWPE_WindowFactory_Class.prototype.dialogTemplate=function()
{var markup="";markup+="<ux:dialogs class='dwpe-window-container also-resize %POSITION%  %MODE%' width='420' height='200'>";markup+="\r\t<div class='window %TYPE% %RESIZABLE%'>";markup+="\r\t<div class='top'>";markup+="\r\t\t<div class='left'>";markup+="\r\t\t\t %ICON% %TITLE%";markup+="</div>";markup+="\r\t\t<div class='right'>";markup+=DWPE_Utilities.getIconMarkup('help','');markup+="&nbsp;"
markup+=DWPE_Utilities.getIconMarkup('closetab','close-window');markup+="\r\t\t</div>";markup+="\r\t\t</div>";markup+="\r\t<div class='middle also-resize WindowRegion'>";markup+="\r\t\t\t %CONTENT%";markup+="\r\t</div>";markup+="\r\t<div class='bottom'>";markup+="\r\t\t<div class='left'>";markup+="\r\t\t</div>";markup+="\r\t\t<div class='right'>";markup+="%BUTTON-1%";markup+="%BUTTON-2%";markup+="%RESIZER%";markup+="\r\t\t</div>";markup+="\r\t</div>";markup+="\r\t</div>";markup+="\r</ux:dialogs>";return markup;}
DWPE_WindowFactory_Class.prototype.messageListTemplate=function()
{var markup="";markup+="<ux:dialogs class='dwpe-window-container also-resize %POSITION%  %MODE%'>";markup+="\r\t<div class='window %TYPE% %RESIZABLE%'>";markup+="\r\t<div class='top'>";markup+="\r\t\t<div class='left'>";markup+="\r\t\t\t %ICON% %TITLE%";markup+="</div>";markup+="\r\t\t<div class='right'>";markup+=DWPE_Utilities.getIconMarkup('closetab','close-window');markup+="\r\t\t</div>";markup+="\r\t\t</div>";markup+="\r\t<div class='middle also-resize WindowRegion'>";markup+="\r\t\t\t %CONTENT%";markup+="\r\t</div>";markup+="\r\t<div class='bottom'>";markup+="\r\t\t<div class='left'>";markup+="\r\t\t</div>";markup+="\r\t\t<div class='right'>";markup+="%BUTTON-1%";markup+="%BUTTON-2%";markup+="%RESIZER%";markup+="\r\t\t</div>";markup+="\r\t</div>";markup+="\r\t</div>";markup+="\r</ux:dialogs>";return markup;}
DWPE_WindowFactory_Class.prototype.generateDialogMarkup=function(args)
{var markup=this.dialogTemplate();markup=markup.replace('%TYPE%',args.type).replace('%RESIZABLE%',args.resizable).replace('%POSITION%',args.position).replace('%TITLE%',args.title).replace('%CONTENT%',DWPE_Utilities.getSampleContent('short')).replace('%ICON%',"").replace('%MODE%',args.mode);var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');btn.label="OK";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));btn.label="Cancel";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));if(args.resizable=="resizable")
markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");else
markup=markup.replace('%RESIZER%',"");return markup;}
DWPE_WindowFactory_Class.prototype.generateConfirmationDialogMarkup=function(args)
{var markup=this.messageListTemplate();markup=markup.replace('%TYPE%',args.type).replace('%RESIZABLE%',args.resizable).replace('%POSITION%',args.position).replace('%TITLE%',"Confirmation").replace('%CONTENT%',DWPE_Utilities.getSampleContent('confirmation-dialog')).replace('%ICON%',DWPE_Utilities.getIconMarkup('confirm')).replace('%MODE%',args.mode);var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');btn.label="OK";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));btn.label="Cancel";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-2%','');if(args.resizable=="resizable")
markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");else
markup=markup.replace('%RESIZER%',"");return markup;}
DWPE_WindowFactory_Class.prototype.generateInfoDialogMarkup=function(args)
{var markup=this.messageListTemplate();markup=markup.replace('%TYPE%',args.type).replace('%RESIZABLE%',args.resizable).replace('%POSITION%',args.position).replace('%TITLE%',"Info").replace('%CONTENT%',DWPE_Utilities.getSampleContent('info-dialog')).replace('%ICON%',DWPE_Utilities.getIconMarkup('info')).replace('%MODE%',args.mode);var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');btn.label="OK";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));btn.label="Cancel";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-2%',"");if(args.resizable=="resizable")
markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");else
markup=markup.replace('%RESIZER%',"");return markup;}
DWPE_WindowFactory_Class.prototype.generateWarningDialogMarkup=function(args)
{var markup=this.messageListTemplate();markup=markup.replace('%TYPE%',args.type).replace('%RESIZABLE%',args.resizable).replace('%POSITION%',args.position).replace('%TITLE%',"Warning").replace('%CONTENT%',DWPE_Utilities.getSampleContent('warning-dialog')).replace('%ICON%',DWPE_Utilities.getIconMarkup('warning')).replace('%MODE%',args.mode);var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');btn.label="Yes";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));btn.label="No";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-2%',DWPE_ButtonFactory.make(btn));if(args.resizable=="resizable")
markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");else
markup=markup.replace('%RESIZER%',"");return markup;}
DWPE_WindowFactory_Class.prototype.generateErrorDialogMarkup=function(args)
{var markup=this.messageListTemplate();markup=markup.replace('%TYPE%',args.type).replace('%RESIZABLE%',args.resizable).replace('%POSITION%',args.position).replace('%TITLE%',"Error").replace('%CONTENT%',DWPE_Utilities.getSampleContent('error-dialog')).replace('%ICON%',DWPE_Utilities.getIconMarkup('error')).replace('%MODE%',args.mode);var btn=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');btn.label="OK";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-1%',DWPE_ButtonFactory.make(btn));btn.label="Cancel";btn.command="js::DWPE_WindowFactory.closeWindow()";markup=markup.replace('%BUTTON-2%',"");if(args.resizable=="resizable")
markup=markup.replace('%RESIZER%',"<div class='resizer'></div>");else
markup=markup.replace('%RESIZER%',"");return markup;}
DWPE_WindowFactory_Class.prototype.generateMenuMarkup=function(args)
{var markup="";markup+='<ux class="dwpe-menu">\r\n';markup+=" <ul>\r\n";for(var i in args.items)
{var item=args.items[i];markup+=this.generateMenuItemMarkup(item,level=1);}
markup+=" </ul>\r\n";markup+="</ux>\r\n";return markup;}
DWPE_WindowFactory_Class.prototype.generateMenuItemMarkup=function(item,level)
{var markup="";var indent="";for(var c=0;c<level;c++)
{indent+="\t";}
markup+=indent+"<li";var _class=(item.item_type!="normal")?" "+item.item_type+" ":"";_class+=(item.selected)?" "+item.selected+" ":"";_class+=(item.state)?" "+item.state+" ":"";_class=(_class.length>0)?" class='"+_class+"'":"";var group=(item.group)?' group="'+item.group+'"':'';var command=(item.command)?' cmd="'+item.command+'"':'';var tooltip=(item.tooltip)?' title="'+item.tooltip+'"':'';markup+=_class+group+command+tooltip+">";switch(item.item_type)
{case'separator':markup+="<hr>"
break;default:markup+=item.label;if(item.key&&item.key.length>0)
markup+="<key>"+item.key+"</key>";break;}
if(item.items&&item.items.length>0)
{markup+="\r"+indent+"\t<ul>\r\n";for(var i in item.items)
{var child_item=item.items[i];markup+=this.generateMenuItemMarkup(child_item,level+2);}
markup+=indent+"\t</ul>\r\n"+indent;}
markup+="</li>\r\n";return markup;}
DWPE_WindowFactory_Class.prototype.z=9999;DWPE_WindowFactory_Class.prototype.getNextZ=function()
{return this.z++;}
DWPE_WindowFactory_Class.prototype.open=function(_callee,_url)
{var $callee=$(_callee);var $wait=DWPE_Utilities.showWaitIcon($callee);$.ajax({url:_url,cache:false,success:function(data)
{$wait.remove();DWPE_WindowFactory.processWindowMarkup(data,$callee);}});}
DWPE_WindowFactory_Class.prototype.openNoteWindow=function(_caller,type,content)
{var $caller=$(_caller);var note_markup=this.noteWindowTemplate();content=(!content||content.length==0)?"Note window message":content;note_markup=note_markup.replace("%CONTENT%",content);var $win=$(note_markup);$win.css('z-index',DWPE_WindowFactory.getNextZ());$("body").append($win);var L=0;var T=0;var pW=($win.parent()===$('body'))?$win.parent().width():$win.parent().outerWidth()-2;var pH=($win.parent()===$('body'))?$win.parent().height():$win.parent().outerHeight()-2;var wW=$win.width();var wH=$win.height();var caller_left=$caller.offset().left-$win.parent().offset().left;var caller_top=$caller.offset().top-$win.parent().offset().top;var x_pos="";var y_pos="";L=caller_left+$caller.width()+5;T=caller_top-wH-5;x_pos="right";y_pos="top";if(L+wW>pW&&caller_left-wW-5>0)
{x_pos="left";L=caller_left-wW+13;}
if(T<0)
{y_pos="bottom";T=caller_top+$caller.height();}
$win.addClass('cone-points-'+y_pos+'-'+x_pos);$win.css({left:L+"px",top:T+"px"});DWPE_ObjectFactory.processFragment($win);return $win;}
DWPE_WindowFactory_Class.prototype.processWindowMarkup=function(markup,$callee)
{var $win=$(markup);var w=$win.attr("width");var h=$win.attr("height");if(w)$win.find('div.window').width(w);if(h)$win.find('div.middle').height(h);$win.css('z-index',DWPE_WindowFactory.getNextZ());$("body").append($win);var L=0;var T=0;var pW=($win.parent()===$('body'))?$win.parent().width():$win.parent().outerWidth()-2;var pH=($win.parent()===$('body'))?$win.parent().height():$win.parent().outerHeight()-2;if($win.hasClass('centered')||$win.hasClass('modal'))
{L=(pW-$win.width())/2;T=(pH-$win.height())/2;}
else if($win.hasClass('anchored'))
{L=$callee.offset().left-$win.parent().offset().left;T=$callee.offset().top-$win.parent().offset().top;T+=$callee.height();if(L+$win.width()>pW)
L=L+$callee.width()-$win.width();if(T+$win.height()>pH&&T-$callee.height()-$win.height()>0)
T=T-$callee.height()-$win.height();}
var $win_box=$win.find(">DIV.window");if($win_box.hasClass('resizable')&&!$win_box.data("resize-init"))
{$win_box.data("resize-init",true);$win_box.resizable({handles:'se',minWidth:225,minHeight:175,maxWidth:pW*.6,maxHeight:pH*.6,alsoResize:$win.closest('.dwpe-window-container').find('.also-resize')});}
if($win.hasClass('modal'))
{$win.css({'width':pW,'height':pH});$win=$win.find(">DIV.window");}
$win.css({left:L+"px",top:T+"px"});$win.hide();$win.animate({height:'show',width:'show'},250);DWPE_ObjectFactory.processFragment($win);return $win;}
DWPE_WindowFactory_Class.prototype.loadMenu=function($ux)
{if($ux.hasClass('context'))return;if($ux.data('menu-initialized')==true)return;$ux.data('menu-initialized',true);var menu_url=$ux.attr('url');if(menu_url)
{$.ajax({url:menu_url,cache:false,success:function(data)
{$ux.html(data);DWPE_WindowFactory.initializeMenu($ux);}});}
else
{DWPE_WindowFactory.initializeMenu($ux);}}
DWPE_WindowFactory_Class.prototype.initializeMenu=function($ux)
{$ux.find('DIV.dynamic-content').each(function()
{DWPE_Utilities.exec(this);});var $mainmenu=$ux.find(">UL");var $headers=$mainmenu.find("UL").parent();$headers.each(function(i)
{var $_ux=$ux;var $item=$(this);if($item.hasClass('separator'))return;if($item.hasClass('disabled'))return;var $submenu=$item.find('ul:eq(0)').css({display:'block'});var $shadow=$("<div class='menu-shadow'></div>");$submenu.before($shadow);var $dim={w:$item.outerWidth(true),h:$item.outerHeight(true),submenuW:$submenu.outerWidth(true),submenuH:$submenu.outerHeight(true)};$submenu.data('timers',{});$item.data('dimensions',$dim);var isTopHeader=$item.parents("ul").length==1;$item.data('istopheader',isTopHeader);$submenu.css('top',isTopHeader?$dim.h:0);$item.addClass(isTopHeader?'top-level-parent':'second-level-parent');if(isTopHeader)
{$item.click(function()
{var $__ux=$_ux;if($_ux.data('show-menus')===undefined||$_ux.data('show-menus')==false)
{$_ux.data('show-menus',true);var handler=function(event){$__ux.data('show-menus',false);$(this).unbind(event);};$('body').bind('mousedown',handler)
$item.trigger('mouseover');}
else
{$_ux.data('show-menus',false);$item.trigger('mouseout');}});}
else
{$item.hover(function(e)
{$(this).addClass('selected');},function(e)
{$(this).removeClass('selected');});var $parent=$item.find(">UL");var $children=$parent.find(">LI");if($children.length>DWPE_WindowFactory.menuScrollThreshold)
{var $up=$("<li class='menu-scroll up'><div></div></li>");$up.insertBefore($children[0]);var $down=$("<li class='menu-scroll down enabled'><div></div></li>");$down.insertAfter($children[$children.length-1]);$children.each(function(i)
{if(i<DWPE_WindowFactory.menuScrollThreshold)
{$(this).show();}
else
{$(this).hide();}});$parent.data('first_index',0);$parent.data('menu-items',$children);$parent.data('up',$up);$parent.data('down',$down);}}
var show_delay=200;var hide_delay=200;var anim_time=0;$item.hover(function(e)
{if(!$_ux.data('show-menus'))return;var $_submenu=$submenu;var $_shadow=$shadow;$_submenu.find("LI").each(function()
{if(!$(this).attr('title'))
{$(this).attr('title',' ');}})
var $_item=$item;if($_submenu.data("menu-items"))
{$_submenu.data("menu-items").each(function(i)
{var $menu_item=$(this);if(i<DWPE_WindowFactory.menuScrollThreshold)
{$menu_item.show();}
else
{$menu_item.hide();}});}
clearTimeout($_submenu.data('timers').hidetimer);$_submenu.data('timers').showtimer=setTimeout(function()
{var dimensions=$_item.data("dimensions");var isTopHeader=$_item.data('istopheader');$_submenu.show();var menu_width=$_submenu.width();var menu_height=$_submenu.height();$_submenu.hide();var offsets=$_item.offset();var menuleft=(isTopHeader==true)?0:$_item.outerWidth();var menu_top=(isTopHeader==true)?$_item.height():$_item.position().top;if(offsets.left+menuleft+dimensions.submenuW>$(window).width())
menuleft=(isTopheader)?-dimensions.submenuW+dimensions.w:-dimensions.w;var z1=DWPE_WindowFactory.getNextZ();var z2=DWPE_WindowFactory.getNextZ();if($_submenu.queue().length<1)
{$_submenu.css({left:menuleft+"px",width:menu_width+'px',top:menu_top+"px",zIndex:z2,visibility:'visible'}).animate({width:'show',height:'show'},anim_time,function(){$shadow.css('visibility','visible');$shadow.show();});$_shadow.css({left:menuleft+"px",width:menu_width+'px',top:menu_top+"px",zIndex:z1,height:menu_height+"px"});}},show_delay);},function(e)
{var $_submenu=$submenu
var $_shadow=$shadow;clearTimeout($submenu.data('timers').showtimer)
$_submenu.data('timers').hidetimer=setTimeout
(function()
{$_submenu.animate({width:'hide',height:'hide'},anim_time);$_shadow.animate({width:'hide',height:'hide'},anim_time);},hide_delay);$_submenu.data('first_index',0);if($_submenu.data('up'))
$_submenu.data('up').removeClass('enabled');if($_submenu.data('down'))
$_submenu.data('down').addClass('enabled');})})
$ux.data('menu-initialized',true);}
DWPE_WindowFactory_Class.prototype.initializeContextMenu=function(markup,$ux,x,y)
{var $menu=$(markup);var $headers=$menu.find("LI UL").parent();$menu.css({top:y,left:x,"z-index":DWPE_WindowFactory.getNextZ()});$('body').append($menu);$headers.each(function(i)
{var $item=$(this);if($item.hasClass('separator'))return;if($item.hasClass('disabled'))return;$item.css({zIndex:DWPE_WindowFactory.getNextZ()})
var $submenu=$item.find('ul:eq(0)').css({display:'block'});var $shadow=$("<div class='menu-shadow'></div>");$submenu.before($shadow);var $dim={w:$item.outerWidth(true),h:$item.outerHeight(true),submenuW:$submenu.outerWidth(true),submenuH:$submenu.outerHeight(true)};$submenu.data('timers',{});$item.data('dimensions',$dim);$item.addClass('second-level-parent');$item.hover(function(e)
{$(this).addClass('selected');},function(e)
{$(this).removeClass('selected');});var $parent=$item.find(">UL");var $children=$parent.find(">LI");if($children.length>DWPE_WindowFactory.menuScrollThreshold)
{var $up=$("<li class='menu-scroll up'><div></div></li>");$up.insertBefore($children[0]);var $down=$("<li class='menu-scroll down enabled'><div></div></li>");$down.insertAfter($children[$children.length-1]);$children.each(function(i)
{if(i<DWPE_WindowFactory.menuScrollThreshold)
{$(this).show();}
else
{$(this).hide();}});$parent.data('first_index',0);$parent.data('menu-items',$children);$parent.data('up',$up);$parent.data('down',$down);}
var show_delay=200;var hide_delay=200;var anim_time=0;$item.hover(function(e)
{var $_submenu=$submenu;var $_shadow=$shadow;$_submenu.find("LI").each(function()
{if(!$(this).attr('title'))
{$(this).attr('title',' ');}})
var $_item=$item;if($_submenu.data("menu-items"))
{$_submenu.data("menu-items").each(function(i)
{var $menu_item=$(this);if(i<DWPE_WindowFactory.menuScrollThreshold)
{$menu_item.show();}
else
{$menu_item.hide();}});}
clearTimeout($_submenu.data('timers').hidetimer);$_submenu.data('timers').showtimer=setTimeout(function()
{var dimensions=$_item.data("dimensions");$_submenu.show();var menu_width=$_submenu.width();var menu_height=$_submenu.height();$_submenu.hide();var offsets=$_item.offset();var menuleft=$_item.outerWidth();var menu_top=0;if(offsets.left+menuleft+dimensions.submenuW>$(window).width())
menuleft=-dimensions.w;$_submenu.css({left:menuleft+"px",width:menu_width+'px',top:menu_top+"px",visibility:'visible'}).show();$shadow.css({visibility:'visible',left:menuleft+"px",width:menu_width+'px',top:menu_top+"px",height:menu_height+"px"}).show();},show_delay);},function(e)
{var $_submenu=$submenu
var $_shadow=$shadow;clearTimeout($submenu.data('timers').showtimer)
$_submenu.data('timers').hidetimer=setTimeout
(function()
{$_submenu.animate({width:'hide',height:'hide'},anim_time);$_shadow.animate({width:'hide',height:'hide'},anim_time);},hide_delay);$_submenu.data('first_index',0);$_submenu.data('up').removeClass('enabled');$_submenu.data('down').addClass('enabled');})})
$ux.data('menu',$menu);return $menu;}
DWPE_WindowFactory_Class.prototype.getDefaultArgsListForType=function(type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(type)
{case'menu-item':return{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"Menu Item "+i,"key":"","command":"","item_type":"normal"};break;case'menu-separator':return{"_class":"DWPE_WindowFactory_Class","type":"menu-item","label":"----------","key":"","item_type":"separator"};break;default:return{};}}
DWPE_WindowFactory_Class.prototype.getPropertySheetFields=function(_type)
{switch(_type)
{case'menu-item':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_WindowFactory"},{type:"hidden",id:"_type",name:"Type",value:"menu-item"},{type:"chooser",id:"item_type",name:"Type",value:"normal=Normal&radio=Radio&toggle=Toggle&separator=Separator",dynamic:"dynamic"},{type:"chooser",id:"state",name:"State",value:" =Enabled&disabled=Disabled"},{type:"text",id:"label",name:"Label",value:""},{type:"text",id:"tooltip",name:"Tooltip",value:""},{type:"text",id:"key",name:"Acc. Key",value:""},{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},{type:"text",id:"group",name:"Group&nbsp;Name",value:""},{type:"chooser",id:"selected",name:"Selected",value:" =Not Selected&on=Selected"}];break;default:return[];break;}};DWPE_TreeFactory_Class.prototype=new DWPE_BaseFactory_Class();DWPE_TreeFactory_Class.constructor=DWPE_TreeFactory_Class;DWPE_TreeFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;function DWPE_TreeFactory_Class(){this._class="DWPE_TreeFactory_Class";}
DWPE_Tree=function(){function getTree(node){return node.closest('.dwpe-tree');}
function getRoot(tree){return tree.data('root')||setRoot(tree);}
function setRoot(tree,root){if(!root||!root.length){root=tree.find('.root:first');}
tree.data('root',root);return root;}
function getLastNode(tree){return tree.data('lastNode')||setLastNode(tree);}
function setLastNode(tree,node){if(!node||!node.length){node=getRoot(tree).children('li.node:last');while(node.length&&node.children('ul.branch').length){node=node.find('>ul.branch>li.node:last');}}
tree.data('lastNode',node);return node;}
function scrollTo(node){var scrollPane=node.closest('.scrollPane');var scrollPaneTop=scrollPane.scrollTop();var scrollPaneHeight=scrollPane[0].clientHeight;var scrollPaneLeft=scrollPane.scrollLeft();var scrollPaneWidth=scrollPane[0].clientWidth;var status=node.children('.status');var icon=node.children('.icons');var label=node.children('.label');var nodeTop=label.position().top;var nodeBottom=nodeTop+label.outerHeight(true);var nodeLeft=node.is('.open, .closed')?node.position().left:status.attr('class').length?status.position().left:icon.position().left;var nodeRight=label.position().left+label.outerWidth(true);if(nodeTop<0){scrollPane.scrollTop(scrollPaneTop+nodeTop);}else if(nodeBottom>scrollPaneHeight){scrollPane.scrollTop(scrollPaneTop-scrollPaneHeight+nodeBottom);}
if(nodeLeft<0){scrollPane.scrollLeft(scrollPaneLeft+nodeLeft);}else if(nodeRight>scrollPaneWidth){scrollPane.scrollLeft(scrollPaneLeft-scrollPaneWidth+nodeRight);}}
function getFocus(tree){return tree.data('focus')||$();}
function focus(node){if(node.length){var tree=getTree(node);blur(getFocus(tree));scrollTo(node);tree.data('focus',node);}
return node.addClass('focused');}
function blur(node){if(node.length){getTree(node).removeData('focus');}
return node.removeClass('focused');}
function getSelection(tree){return tree.data('selected')||$();}
function select(nodes){if(nodes.length){var tree=getTree(nodes.first());var selected=getSelection(tree).add(nodes);tree.data('selected',selected);tree.trigger('treeselect',{added:nodes,removed:$(),selection:selected});}
return nodes.addClass('selected');}
function deselect(nodes){if(nodes.length){var tree=getTree(nodes.first());var selected=getSelection(tree).not(nodes);tree.data('selected',selected);tree.trigger('treeselect',{added:$(),removed:nodes,selection:selected});}
return nodes.removeClass('selected');}
function toggleSelection(nodes){var selected=nodes.filter('.selected');var unselected=nodes.not('.selected');var tree=getTree(nodes.first());var selected=getSelection(tree).not(selected).add(unselected)
tree.trigger('treeselect',{added:selected,removed:unselected,selection:selected});tree.data('selected',selected);return nodes.toggleClass('selected');}
function getAnchor(tree){return tree.data('anchor')||$();}
function setAnchor(node){var tree=getTree(node);clearAnchor(tree);tree.data('anchor',node);return node.first().addClass('anchor');}
function clearAnchor(tree){getAnchor(tree).removeClass('anchor');tree.removeData('anchor');return tree;}
function upArrowKey(ev,node){if(ev.ctrlKey&&ev.altKey){scrollTo($('.root .node:visible:first',ev.target));}else if(!node.length){node=$('.root .node:visible:first',ev.target);if(node.length){select(focus(node));}}else{var tree=getTree(node);if(getRoot(tree).children('.node:first')[0]!==node[0]){var prevNode=node.preceding('.node:visible');if(prevNode.length){if(tree.is('.multiselect')&&ev.shiftKey){var anchor=getAnchor(tree);if(!anchor.length){anchor=setAnchor(node);}
if(!prevNode.precedes(anchor[0])){deselect(node);}
select(prevNode);}else{clearAnchor(tree);if(!tree.is('.discontiguous')||!ev.ctrlKey){deselect(getSelection(tree));select(prevNode);}}
focus(prevNode);}}}}
function downArrowKey(ev,node){if(ev.ctrlKey&&ev.altKey){scrollTo($('.root .node:visible:last',ev.target));}else if(!node.length){node=$('.root .node:visible:first',ev.target);if(node.length){select(focus(node));}}else{var tree=getTree(node);var lastNode=getLastNode(tree)[0];var nextNode=node.following('.node:visible');if(nextNode.length&&!nextNode.follows(lastNode)){if(tree.is('.multiselect')&&ev.shiftKey){var anchor=getAnchor(tree);if(!anchor.length){anchor=setAnchor(node);}
if(!anchor.precedes(nextNode[0])){deselect(node);}
select(nextNode);}else{clearAnchor(tree);if(!tree.is('.discontiguous')||!ev.ctrlKey){deselect(getSelection(tree));select(nextNode);}}
focus(nextNode);}}}
function leftArrowKey(ev,node){if(node.is('.open')){DWPE_Tree.collapse(node);}else{upArrowKey(ev,node);}}
function rightArrowKey(ev,node){if(node.is('.closed')){DWPE_Tree.expand(node);}else{downArrowKey(ev,node);}}
function spaceKey(ev,node){if(ev.ctrlKey||ev.metaKey){var tree=getTree(node);if(!node.is('.selected')&&!tree.is('.discontiguous')){deselect(getSelection(tree));}
toggleSelection(node);}
ev.preventDefault();}
var osx=/Macintosh/.exec(navigator.userAgent);function mouseButton(ev,node){if(node.is('.selected')&&ev.which!==1&&!ev.ctrlKey){return;}
var tree=getTree(node);if(tree.is('.multiselect')&&ev.shiftKey){var anchor=getAnchor(tree);if(anchor.length||!tree.is('.discontiguous')){deselect(getSelection(tree));}
if(!anchor.length){anchor=setAnchor(getFocus(tree));}
if(!anchor.length||node[0]===anchor[0]){select(node);}else if(node.follows(anchor[0])){select(node.precedingUntil('.anchor','.node:visible').andSelf().add(anchor));}else{select(node.followingUntil('.anchor','.node:visible').andSelf().add(anchor));}
focus(node);}else if((ev.ctrlKey&&(!osx||ev.type==='contextmenu'))||!ev.ctrlKey){clearAnchor(tree);if(ev.ctrlKey){if(tree.is('.discontiguous')){toggleSelection(node);focus(node);}else if(tree.is(':not(.multiselect)')&&node.is('.selected')){deselect(node);}}else{deselect(getSelection(tree).not(node));select(node);focus(node);}}}
function hoverLabel(ev,label){var scrollPane=label.closest('.scrollPane');var scrollPaneWidth=scrollPane[0].clientWidth;var labelLeft=label.position().left;var labelRight=labelLeft+label.outerWidth(true);if(labelLeft<0||labelRight>scrollPaneWidth){label.attr('title',label.text());}}
function hoverDisclosure(ev,disclosure){var node=disclosure.parent();if(node.is('.open')){disclosure.attr('title','Collapse');}else if(node.is('.closed')){disclosure.attr('title','Expand');}else if(node.is('.loading')){disclosure.attr('title','Retrieving data');}}
function showContextMenu(ev,tree){var menuContents=$(DWPE_WindowFactory.generateMenuMarkup(ux_data['sample-tree-context-menu-short'])).addClass('context');var focus=getFocus(tree);var selected=getSelection(tree);var selectedClosed=selected.filter('.closed');var selectedOpen=selected.filter('.open');var point=(ev.type==='mouseup')?{x:ev.clientX,y:ev.clientY}:{x:focus.find('>.label').offset().left+50,y:focus.offset().top+10};if(selected.length&&selectedClosed.length&&!selectedOpen.length){menuContents.find('li:contains(Collapse)').hide();}else{menuContents.find('li:contains(Expand)').hide();if(!selectedOpen.length){menuContents.find('li:contains(Collapse)').addClass('disabled');}}
if(!selectedClosed.length&&!selected.find('.closed').length){menuContents.find('li:contains(Expand All Below)').addClass('disabled');}
if(!selectedOpen.length&&!selected.find('.open').length){menuContents.find('li:contains(Collapse All Below)').addClass('disabled');}
if(!focus.parents('.node').length){menuContents.find('li:contains(Show as Top)').addClass('disabled');}
var menu=DWPE_WindowFactory.initializeContextMenu($('<ux tabindex="0" class="dwpe-menu context"/>').append(menuContents),focus,point.x,point.y);menu.find('li[cmd]').each(function(){var menuItem=$(this);var match=/(javascript|url)::(.+)/.exec(menuItem.attr('cmd'))||[''];var fn=new Function(match[1]==='javascript'?match[2]:'window.location.href="'+match[2]+'"');$(this).click(function(){fn.apply(focus);focus.focus();return false;})
$(this).removeAttr('cmd');});menu.focus();$('body').one('mouseup',function(){menu.hide();setTimeout(function(){menu.remove();getTree(focus).focus();})});}
function clickEventHandler(ev){var span=$(this);var node=span.parent();if(span.is('.disclosure')){if(node.is('.closed')){DWPE_Tree.expand(node);}else if(node.is('.open')){DWPE_Tree.collapse(node);}}else if(span.is(':not(.status)')){mouseButton(ev,node);}}
function blurEventHandler(ev){getFocus(getTree($(this))).removeClass('focused');}
function focusEventHandler(ev){getFocus(getTree($(this))).addClass('focused');}
function eventCanceller(ev){ev.preventDefault();ev.stopImmediatePropagation();return false;}
var keys={space:32,left:37,up:38,right:39,down:40,m:77,M:109};function keyEventHandler(ev){if(ev.type==='keydown'&&ev.keyCode===keys.space){spaceKey(ev,getFocus(getTree($(this))));ev.preventDefault();}else if(($.browser.mozilla&&ev.type==='keypress')||(!$.browser.mozilla&&ev.type==='keydown')){var focus=getFocus(getTree($(this)));switch(ev.keyCode||ev.charCode){case keys.up:upArrowKey(ev,focus);break;case keys.down:downArrowKey(ev,focus);break;case keys.right:rightArrowKey(ev,focus);break;case keys.left:leftArrowKey(ev,focus);break;case keys.m:case keys.M:if(ev.ctrlKey&&ev.altKey){showContextMenu(ev,getTree($(this)));}
break;default:return;}
ev.preventDefault();}}
function hoverEventHandler(ev){var span=$(ev.target);switch(ev.type){case'mouseover':if(span.is('.label')){hoverLabel(ev,span);}else if(span.is('.disclosure')){hoverDisclosure(ev,span);}
break;case'mouseout':span.removeAttr('title');break;}}
function mouseUpEventHandler(ev){if(ev.which===3&&!ev.ctrlKey){var span=$(ev.target);if(span.is('.label, .icons')){showContextMenu(ev,getTree(span.parent()));}}}
function resizeEventHandler(ev){var tree=$(this);var actionBar=tree.find('>.actionBar');var menu=actionBar.find('>.menu');var toolbar=actionBar.find('>.toolbar');var separator=actionBar.find('>.Separator');var scrollPane=tree.find('>.scrollPane');toolbar.width(actionBar.outerWidth(true)-menu.outerWidth(true)-separator.outerWidth(true));scrollPane.height(tree.height()-actionBar.outerHeight(true));$(window).resize();}
$(function(){$.each({'click contextmenu':clickEventHandler,'hover':hoverEventHandler,'mouseup':mouseUpEventHandler},function(type,fn){$('.root .node>span').live(type,fn);});$.each({'selectstart contextmenu':eventCanceller,'keydown keypress':keyEventHandler,'blur':blurEventHandler,'focus':focusEventHandler},function(type,fn){$('.dwpe-tree .scrollPane').live(type,fn);});});function initializeTree(tree){$('#preview').css({'overflow':'hidden','maxHeight':600});$('#preview').removeData('resizable').resizable()
setRoot(tree);setLastNode(tree);tree.resize(resizeEventHandler).trigger('resize');setTimeout(function(){$('.dwpe-toolbar li[cmd]',tree).each(function(){var button=$(this);var cmd=button.attr('cmd');button.mousedown(eventCanceller).click(function(){new Function(cmd).apply(tree);tree.find('.scrollPane').focus();return false;});button.removeAttr('cmd');});$('.dwpe-menu li[cmd]',tree).each(function(){var menuItem=$(this);var match=/(javascript|url)::(.+)/.exec(menuItem.attr('cmd'));if(match){var cmd=match[2].replace(/'/g,'"')
menuItem.click(function(){new Function(match[1]==='url'?'location.href=\''+cmd+'\'':cmd).apply(tree);tree.find('.scrollPane').focus();});}
menuItem.removeAttr('cmd');});});};var xhtmlnsRegex=/ xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/;var xsltIndentTransform='<transform xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0"><output method="xml" indent="yes"/><template match="@*|node()"><copy><apply-templates select="@*|node()"/></copy></template></transform>';function prettyPrint(elem){var html;if(typeof XMLSerializer==='object'){var xslt=new XSLTProcessor();xslt.importStylesheet(new DOMParser().parseFromString(xsltIndentTransform,'text/xml'));html=new XMLSerializer().serializeToString(xslt.transformToFragment(elem[0],document));}else if(typeof XMLSerializer==='function'){html=XML(new XMLSerializer().serializeToString(elem[0])).toXMLString().replace(xhtmlnsRegex,'');}else{html=$("<div/>").append(elem).html();}
do{var oldHtml=html;html=html.replace(/\n(\t*)  /g,"\n$1\t");}while(oldHtml!==html);return html;}
$.extend(DWPE_TreeFactory_Class.prototype,{update:function(){this.markup=this.generateMarkup(this.properties);},make:function($ux){var _class=this.getRootClass($ux.attr("class"));switch(_class){case"dwpe-tree":initializeTree($ux);break;}},generateTreeNode:function(nodeData,lazy){var node=$('<li class="node"/>');var disclosure=$('<span class="disclosure"/>').appendTo(node);var status=$('<span class="status"/>').appendTo(node);if(nodeData.status){status.addClass(nodeData.status);if(nodeData.statusTooltip){status.attr('title',nodeData.statusTooltip);}}
var match=/(javascript|url)::(.+)/.exec(nodeData.command||'');var cmd='';if(match){cmd=match[2].replace(/"/g,"'");cmd=' onclick="'+(match[1]==='url'?"location.href='"+cmd+"'":cmd)+'"';}
var icon=$(nodeData.icon&&!nodeData.items.length?DWPE_Utilities.getIconMarkup(nodeData.icon):'<span class="icons"'+cmd+'/>').appendTo(node);var label=$('<span class="label"'+cmd+'/>').text(nodeData.label).appendTo(node);var self=this;if(nodeData.items&&nodeData.items.length){node.addClass(nodeData.state==='closed'?'closed':'open');var branch=$('<ul class="branch"/>').appendTo(node);$.each(nodeData.items,function(i,child){self.generateTreeNode(child,lazy).appendTo(branch);});}else if(lazy){icon.attr('class','icons');node.addClass('closed');}
return node;},generateMarkup:function(args){var treeData=args;var tree=$('<ux class="dwpe-tree"/>');if(treeData.height){tree.height(treeData.height);}
if(treeData.width){tree.width(treeData.width);}
var root=$('<ul class="root branch"/>');switch(treeData.selection){case'noncontiguousmultiselect':tree.addClass('discontiguous');case'multiselect':tree.addClass('multiselect');case'singleselect':}
if(treeData.lazy&&treeData.lazy.toLowerCase()==='true'){tree.addClass('lazy');}
var self=this;$.each(treeData.items,function(i,nodeData){self.generateTreeNode(nodeData,treeData.lazy).appendTo(root);});var actionBar=$('<ol class="actionBar"/>').appendTo(tree);var hasMenu=treeData.menu&&treeData.menu.toLowerCase()!=='none';var hasToolbar=treeData.toolbar&&treeData.toolbar.toLowerCase()!=='none';if(hasMenu){$('<li class="menu"/>').appendTo(actionBar).append('<ux class="dwpe-menu" url="'+treeData.menu+'"/>');}
if(hasMenu&&hasToolbar){$('<li class="DWPE_Button Separator" style="display: inline-block; "><span></span></li>').appendTo(actionBar);}
if(hasToolbar){$('<li class="toolbar"/>').appendTo(actionBar).append($('<ux class="dwpe-toolbar"/>').attr('data',treeData.toolbar));}
var scrollPane=$('<div tabindex="0" class="scrollPane"/>').append(root).appendTo(tree);return prettyPrint(tree);},getDefaultArgsListForType:function(type){switch(type){case'tree-item':return{"_class":"DWPE_TreeFactory_Class","type":"tree-item","label":"Tree node","state":" ","status":" ","icon":"file","items":[],"command":" "};}},getPropertySheetFields:function(type){switch(type){case'tree-item':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_TreeFactory"},{type:"hidden",id:"_type",name:"Type",value:"tree-item"},{type:"chooser",id:"state",name:"State",value:" =Enabled&open=Open&closed=Closed"},{type:"chooser",id:"status",name:"Status",value:" =None&warning=Warning"},{type:"text",id:"label",name:"Label",value:""},{type:"text",id:"icon",name:"Icon",value:"file"},{type:"text",id:"command",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"}];}},});return{expand:function(nodes){var self=this;return nodes.filter('.closed').each(function(){var node=$(this);if(node.children('.branch').length){node.removeClass('closed').addClass('open');}else{self.load(node);}}).end();},expandAll:function(tree){this.expand(tree.find('.closed'));return tree;},expandTo:function(node){this.expand(node.parents('.node'));return focus(node);},expandAllBelow:function(nodes){this.expand(nodes.find('.closed').andSelf());return nodes;},collapse:function(nodes){return nodes.filter('.open').removeClass('open').addClass('closed').end();},collapseAll:function(tree){this.collapse(tree.find('.open'));return tree;},collapseAllBelow:function(nodes){this.collapse(nodes.find('.open').andSelf());return nodes;},load:function(node){function randomInt(n){return Math.floor(n*Math.random());}
node.removeClass('closed').addClass('loading');setTimeout(function(){node.removeClass('loading');if(!!Math.round(Math.random())){node.addClass('open');var branch=$('<ul class="branch"/>');var childCount=randomInt(4)+1;var child;while(childCount--){child=$('<li class="node closed"/>').appendTo(branch);$('<span class="disclosure"/>').appendTo(child);$('<span class="status"/>').appendTo(child);$('<span class="icons"/>').appendTo(child);$('<span class="label"/>').text('Lazily evaluated node').appendTo(child);}
branch.appendTo(node);if(getLastNode(getTree(node)).precedes(child[0])){setLastNode(getTree(node),child);}}else{node.find('.icons').addClass('ico-file');}},randomInt(1000));},showAsTop:function(node){var self=this;var tree=getTree(node);var root=getRoot(tree);var scratch=root.prev('.scratch');if(!scratch.length){scratch=$('<div class="scratch"/>').insertBefore(root);}
var container=root.parent();this.goToTop(tree);if(node.parent()[0]===root[0]){return;}
var placeHolder=$('<li class="placeHolder"/>').insertBefore(node);scratch.append(root.children('li'));$('<div class="hierSelector icons i31"/>').appendTo(root).click(function(ev){var hierPanel=$('<div class="hierPanel"/>');$.each(Array.prototype.slice.call(placeHolder.parents('.node')),function(){var parent=$(this);var label=parent.find('>.label').text();var hierBranch=$('<ul class="hierBranch"/>');$('<li class="hierNode"/>').text(parent.find('>.label').text()).appendTo(hierBranch).click(function(){self.showAsTop(parent);});hierBranch.append(hierPanel.children('ul')).appendTo(hierPanel);});hierPanel.appendTo(tree);window.setTimeout(function(){tree.one('click contextmenu',function(){hierPanel.remove();});});});node.appendTo(root);setLastNode(tree);return node;},goToTop:function(tree){var root=getRoot(tree);var scratch=root.prev('.scratch');var placeHolder=scratch.find('.placeHolder');root.children('.hierSelector').remove();if(placeHolder.length){placeHolder.after(root.children('.node')).remove();scratch.children('.node').appendTo(root);}
setLastNode(tree);return tree;},goUp:function(tree){var root=getRoot(tree);var prevTop=root.find('.node:first');this.goToTop(tree);this.showAsTop(prevTop.parents('.node:first'));},getTree:function(elem){if(elem.nodeType){elem=$(elem);}
return elem.closest('.dwpe-tree');},getFocus:function(tree){return getFocus(tree);},getSelection:function(tree){return getSelection(tree);},scrollTo:function(node){return scrollTo(node);},addAfter:function(precedingNode,nodeData){var tree=getTree(precedingNode);var newNode=$(DWPE_TreeFactory.generateTreeNode(nodeData,tree.is('.lazy'))).insertAfter(precedingNode);if(getLastNode(tree).filter(precedingNode).length){setLastNode(newNode);}
return newNode;},addBefore:function(followingNode,nodeData){var tree=getTree(followingNode);return $(DWPE_TreeFactory.generateTreeNode(nodeData,tree.is('.lazy'))).insertBefore(followingNode);},addChild:function(parentNode,nodeData){var tree=getTree(parentNode);var branch=parentNode.children('.branch');if(branch.length===0){parentNode.addClass('open').find('.icons').attr('class','icons');branch=$('<ul class="branch"/>').appendTo(parentNode);}
var newNode=$(DWPE_TreeFactory.generateTreeNode(nodeData,tree.is('.lazy'))).prependTo(branch);if(getLastNode(tree).filter(parentNode).length){setLastNode(newNode);}
return newNode;},remove:function(nodes){var tree=getTree(nodes);var descendentsAndSelf=nodes.find('.node').andSelf();var needNewLastNode=false;deselect(getSelection(tree).filter(descendentsAndSelf));blur(getFocus(tree).filter(descendentsAndSelf));clearAnchor(getAnchor(tree).filter(descendentsAndSelf));if(getLastNode(tree).filter(nodes).length){needNewLastNode=true;}
var parentBranches=nodes.parent();nodes.remove();var emptyParentBranches=parentBranches.filter(':not(:has(li))');emptyParentBranches.parent('.node').removeClass('open').removeClass('closed').children('.icons').addClass('ico-file');emptyParentBranches.remove();if(needNewLastNode){setLastNode(tree);}}};}();DWPE_TreeFactory=new DWPE_TreeFactory_Class();;DWPE_TableFactory_Class.prototype=new DWPE_BaseFactory_Class();DWPE_TableFactory_Class.constructor=DWPE_TableFactory_Class;DWPE_TableFactory_Class.prototype._super=DWPE_BaseFactory_Class.prototype;function DWPE_TableFactory_Class()
{this._class="DWPE_TableFactory_Class";this.row_height=18;$("ux.dwpe-table").live('mouseover',function()
{var $ux=$(this);if(!$ux.data('initialized'))
{$ux.data('initialized',true);var $table_headers=$ux.find('>DIV.table-headers-container');var $table_body=$ux.find('>DIV.table-body-container');$table_headers.scroll
(function()
{var a=$table_headers.attr('scrollLeft');$table_body.attr('scrollLeft',a);});$table_body.scroll
(function()
{var a=$table_body.attr('scrollLeft');$table_headers.attr('scrollLeft',a);});$('TH>DIV',$table_headers).resizable
({handles:'e',helper:'col-resize-helper',minWidth:50,start:function(event,ui)
{},resize:function(event,ui)
{var $helper=$(ui.helper);var $table_body=$(this).closest('ux').find("DIV.table-body-container");var $table_header=$(this).closest('ux').find("DIV.table-headers-container");$helper.css({'height':$table_header.height()+$table_body.height(),'top':$table_header.offset().top});},stop:function(event,ui)
{var $column=$(this);var n=$column.attr('col');var w=$column.width();$column.width(w);$column.closest('th').width(w);$ux.find("div.col"+n).each
(function(event,ui)
{var $col=$(this);var $parent=$col.closest('td','th');var $fld=$("input",$col);$col.width(w);$parent.width(w);$fld.width(w);});}});}});$("ux.dwpe-table TH.sort-not , ux.dwpe-table TH.sort-none , ux.dwpe-table TH.sort-asc , ux.dwpe-table TH.sort-desc").live('mouseover mouseout',function()
{var $th=$(this);if($th.hasClass('sort-not')){return};if(!$th.data('sort-controls'))
{var $sort=$('<div class="sort"></div>');$sort.data('th',$th);var $div=$th.find('>div');$div.prepend($sort);$sort.data('col',"col"+$div.attr('col'));$th.data('sort-controls',$sort);$sort.mouseout(function(){$(this).removeClass('over asc desc')});$sort.mousemove(function(event)
{var x=event.layerX;if(x<16)
{$sort.addClass('over asc');$sort.removeClass('desc');$sort.attr('title',"Sort Ascending");}
else
{$sort.addClass('over desc');$sort.removeClass('asc');$sort.attr('title',"Sort Descending");}});$sort.click(function(event)
{var $ux=$sort.closest('ux.dwpe-table');$ux.find("th.sort-asc,th.sort-desc").each(function(){$(this).removeClass().addClass('sort-none');});var sort_dir="asc";if(event.layerX>$sort.width()/2)
{sort_dir="desc";}
$ux.find('div.'+$sort.data('col')).each(function()
{$(this).closest('th').removeClass().addClass('sort-'+sort_dir);});var col="col"+$sort.data('th').find('>div').attr('col');var rows=[];var $table_body=$sort.closest('ux').find('table.table-body>TBODY:eq(0)');$table_body.find('TR').each(function()
{var $row=$(this);if($row.hasClass('subtotal'))
{$row.hide();return;}
if($row.hasClass('grand-totals'))
{$row.hide();return;}
var row={};row.object=$row;var $column=$row.find("div."+col);row.value=$column.text();if(!row.value||row.value.length===0)
{row.value=$column.find(">span.icons").attr('title');}
if(!row.value||row.value.length===0)
{row.value=$column.find("input").val();}
var date=new Date(row.value);if(Object.prototype.toString.call(date)==="[object Date]")
{var time=date.getTime();if(!isNaN(time))
{row.value=time;}}
else if(!isNaN(row.value)&&row.value.indexOf('.')>-1)
row.value=parseFloat(row.value);else if(!isNaN(row.value)&&row.value.indexOf('.')==0)
row.value=parseInt(row.value);rows.push(row);});rows.sort(function(a,b){return a.value>b.value;});if(sort_dir=="desc")
rows.reverse();$(rows).each(function(){$table_body.append(this.object)});});}
$th.data('sort-controls').toggleClass('show');return false;});$("ux.dwpe-table.click-to-edit DIV.table-body-container>TABLE>TBODY>TR").live
('dblclick',function()
{return false;});$("ux.dwpe-table TR.qbe INPUT").live
('keydown',function(event)
{if(event.keyCode!=13)return;var $fld=$(this);var $input_divs=$fld.closest("TR.qbe").find("DIV");var query=new Array();$input_divs.each(function()
{var $div=$(this);var o={};o.id=$div.attr("col");var $fld=$div.find('input');if($fld.length>0&&$fld.val().length>0)
{o.term=$fld.val().toLowerCase();if(o.term.indexOf("*")==0)
{o.term=o.term.replace("*","");o.search="contains";}
else
{o.search="starts-with";}
query.push(o);}})
var $ux=$fld.closest('ux.dwpe-table');var rows_found=0;$("table.table-body TR:first-child").css({"visibility":"visible"})
$ux.find('table.table-body TR.subtotal').hide();$ux.find('table.table-body TR').each(function()
{var $row=$(this);if($row.hasClass('subtotal'))
{$row.hide();return;}
$row.show();$row.removeClass('selected');var matched=true;$(query).each(function()
{if(matched==false)return;var $column=$row.find('div.col'+this.id);var value=$column.text();if(!value||value.length==0)
{value=$column.find(">span.icons").attr('title');}
if(!value||value.length==0)
{value=$column.find("input").val();}
if(this.search=="starts-with")
{matched=(value.toLowerCase().indexOf(this.term)==0);}
else
{matched=(value.toLowerCase().indexOf(this.term)>-1);}});if(matched==false)
{$row.hide();}
else
{$row.show();rows_found++}});if(rows_found==0)
{$("table.table-body TR:first-child").css({'display':"table-row","visibility":"hidden"})}
DWPE_TableFactory.updateRowsSelected($ux);return false;});$("ux.dwpe-table table.table-body>TBODY>TR").live
('mouseup',function(event)
{var $row=$(this);if($row.hasClass('subtotal'))return;var $ux=$row.closest('ux.dwpe-table');var $last_active_row=$ux.data('last-active-row');var $rows=$row.closest('TBODY').find('TR');if(event.ctrlKey==true)
{$row.addClass('selected active');}
else if(event.shiftKey==true)
{$rows.each(function()
{var $myrow=$(this);if(!$myrow.hasClass('active'))
{$myrow.removeClass('selected');}})
$row.addClass('selected');if($last_active_row&&$row.attr('rowIndex')==$last_active_row.attr('rowIndex'))
return;var begin_selection=false;var end_selection=false;var state="";$rows.each(function()
{var $myrow=$(this);$myrow.removeClass('active');if($myrow.is(':hidden'))return;if($myrow.hasClass('subtotal'))return;if(begin_selection==false&&$myrow.hasClass('selected'))
{begin_selection=true;end_selection=false;}
else if(begin_selection==true&&end_selection==false&&$myrow.hasClass('selected'))
{end_selection=true;}
else if(begin_selection==true&&end_selection==true)
{$myrow.removeClass('selected');}
else if(begin_selection==false&&end_selection==false)
{$myrow.removeClass('selected');}
else if(begin_selection==true&&end_selection==false)
{$myrow.addClass('selected');}});$row.addClass('active');}
else
{$rows.removeClass('selected');$rows.removeClass('active');$row.addClass('selected active');}
DWPE_TableFactory.updateRowsSelected($ux)
$ux.data('last-active-row',$row);return false;});return this;}
DWPE_TableFactory=new DWPE_TableFactory_Class();DWPE_TableFactory_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_TableFactory_Class.prototype.make=function($ux)
{var _class=this.getRootClass($ux.attr("class"));switch(_class)
{case"dwpe-window-container":break;}}
DWPE_TableFactory_Class.prototype.generateMarkup=function(args)
{switch(args.type.toLowerCase())
{case"table-read-only":return this.generateTableMarkup(args);break;default:return"[undefined type]";break;}}
DWPE_TableFactory_Class.prototype.generateTableMarkup=function(args)
{var _args=$.extend(true,{},args);var markup="<ux class='dwpe-table "+args.mode;markup+=" "+args.row_banding;markup+=" "+args.column_banding;markup+=" "+args.grid_lines;markup+="'>";if(args.menubar.length>0&&args.menubar!="none")
markup+="\t<ux class='dwpe-menu' url='/DWPE/DWPE_SampleContent/sample_table_menu.htm'/>\r\n";if(args.toolbar.length>0&&args.toolbar!="none")
markup+="\t<ux class='dwpe-toolbar' data='"+args.toolbar+"'/>\r\n";markup+="\r<!--Column Headers-->";markup+=this.process(_args);markup+="\r<!--Rows-->";markup+="\r</ux>";return markup;}
DWPE_TableFactory_Class.prototype.process=function(tree)
{var max_depth=0;var leaf_nodes=new Array();var getTreeDepth=function(node,depth)
{node.row=depth;node.colspan=0;var len=(node.items)?node.items.length:0;for(var i=0;i<len;i++)
{var child_node=node.items[i];child_node.parent=node;getTreeDepth(child_node,depth+1);}
if(len==0)
{leaf_nodes.push(node);node.leaf=true;}
else
{node.leaf=false;}
max_depth=Math.max(depth,max_depth);}
getTreeDepth(tree,0);$(leaf_nodes).each(function(i)
{var node=this;node.col_id=i+1;var parent=node.parent;while(parent)
{parent.colspan+=1;parent=parent.parent;}});$(tree.items).each(function()
{DWPE_TableFactory.assignTableHeaderRowspan(this,max_depth,0);});var setColumnHTML=function()
{var node=this;if(node.items)
{var len=node.items.length;$(node.items).each(setColumnHTML);}
var colspan=(node.colspan>1)?" colspan='"+node.colspan+"'":"";var rowspan=(node.rowspan>1)?" rowspan='"+node.rowspan+"'":"";var align=(node.align!='left')?" "+node.align:"";var width,col_class,div_attribs,sort;if(node.leaf)
{col_class=" class='";col_class+="sort-"+node.sort;col_class+=(node.visible=="hide")?" hide":"";col_class+="'";div_attribs=" class='column"+align+" col"+node.col_id+"'";width=(node.width!=parseInt(100))?" style='width:"+node.width+"'":""}
else
{sort="";visibility=div_attribs=" class='column-group"+align+"'";col_class=" class='";col_class+=(node.visible=="hide")?" hide":"";col_class+="'";width=" style='width:100%'";}
var col_id=(node.col_id)?" col='"+node.col_id+"'":"";var div_class=" class='col"+node.col_id+" "+align+"'";var visibility=(node.visible=="hide")?" class='hide'":"";node.qbe_html="\r\t<th"+colspan+visibility+" ><div "+div_class+col_id+width+"><input/></div></th>";node.col_html="\r\t<th"+colspan+rowspan+col_class+" ><div "+col_id+width+div_attribs+">"+node.label+"</div></th>";node.row_html="\r\t<td"+colspan+visibility+" ><div "+width+div_class+align+"'>%VALUE%</div></td>";}
$(tree.items).each(setColumnHTML);var html="";var getColumnMarkup=function(node,row)
{var _row=row;if(_row==node.row)
html+=node.col_html;$(node.items).each(getColumnMarkup);}
var rows=new Array();var collectIntoRows=function()
{var node=this;var _row=row;if(!rows[_row])rows[_row]=new Array();if(_row==node.row)
{rows[_row].push(node);}
$(node.items).each(collectIntoRows)}
for(var row=1;row<=max_depth;row++)
{$(tree.items).each(collectIntoRows)}
var collectColumnHTML=function(top_node,node,row)
{top_node.rows[row]+=node.col_html;top_node.rows[row+1]="";$(node.items).each
(function()
{collectColumnHTML(top_node,this,row+1);});}
var makeColumnGroups=function()
{var top_node=this;top_node.rows=new Array();var row=0;top_node.rows[row]=top_node.col_html;top_node.rows[row+1]="";$(top_node.items).each
(function()
{collectColumnHTML(top_node,this,row+1);});}
$(tree.items).each(makeColumnGroups);var html="";html+="<div class='table-headers-container'>";html+="<table class='table-header' cellpadding='0' cellspacing='0'>";html+="<thead>";html+="<tr class='qbe "+tree.qbe+"'>";if(tree.row_header=='visible'||tree.row_header=='numbered')
{html+='<th class="row-header"><div col="0" tabindex="0">&nbsp;</div></th>';}
for(var j=0;j<leaf_nodes.length;j++)
{html+=leaf_nodes[j].qbe_html;}
html+="</tr>";for(var row=1;row<=max_depth;row++)
{var items=rows[row];html+="<tr class='columns'>";if(row==1&&(tree.row_header=='visible'||tree.row_header=='numbered'))
{html+='<th class="row-header" rowspan="'+max_depth+'"><div col="0">Row</div></th>';}
for(var j=0;j<items.length;j++)
{html+=items[j].col_html;}
html+="</tr>";}
html+="</thead>";html+="</table>";html+="</div>";html+="<div class='table-body-container' style='height:"+(tree.num_visible_rows*this.row_height)+"px'>";html+="<table class='table-body' cellpadding='0' cellspacing='0'>";html+="<tbody>";var personas=new Array();for(var row=0;row<tree.num_rows*1;row++)
{personas.push(this.getRandomPersona());}
var subtotals=new Array();var grandtotals=new Array();var unique_values=new Array();var table_data=new Array();var subtotal_row=0;var counters=new Array();for(var row=0;row<tree.num_rows*1;row++)
{var persona=personas[row];var row_data=new Array();for(var j=0;j<leaf_nodes.length;j++)
{var node=leaf_nodes[j];var value=persona[node.value];row_data.push(value);switch(node.value)
{case'currency':var n=parseFloat(value);if(counters[j]==undefined)counters[j]=0;if(grandtotals[j]==undefined)grandtotals[j]=0;var c=counters[j]+n;counters[j]=parseFloat(c);var g=grandtotals[j]+n;grandtotals[j]=parseFloat(g);break;case'int100':case'int100_100':var n=parseInt(value);counters[j]=(counters[j])?counters[j]+n:n;grandtotals[j]=(grandtotals[j])?grandtotals[j]+n:n;break;default:counters[j]="";grandtotals[j]="";break;}}
var counts=new Array();for(var i=0;i<counters.length;i++){counts.push(counters[i]);}
subtotals.push(counts);if(row>1&&row%5==0)
{for(var i=0;i<counters.length;i++){counters[i]=0}}
table_data.push(row_data);}
for(var row=0;row<tree.num_rows*1;row++)
{var row_data=table_data[row];var row_counters=subtotals[row];html+=this.makeRow(row,tree.row_header,row_data,row_counters,'row',leaf_nodes);if(tree.totaling=='sub-grand'&&(row+1)%tree.totaling_frequency==0)
{html+=this.makeRow(row,tree.row_header,row_data,row_counters,'subtotal',leaf_nodes);}}
html+="</tbody>"
html+="</table>";html+="</div>";if(tree.totaling=='grand'||tree.totaling=='sub-grand')
{html+="<div class='table-headers-container'>";html+="<table class='table-body' cellpadding='0' cellspacing='0'>";html+="<tbody>";html+="<tr class='grand-totals'>";if(tree.row_header=='visible'||tree.row_header=='numbered')
{html+='<td class="row-header"><div col="0">&nbsp;</div></td>';}
var label_applied=false;for(var j=0;j<leaf_nodes.length;j++)
{var node=leaf_nodes[j];var value;if(label_applied==false&&grandtotals[j]=="")
{label_applied=true;value="<div align='right'>Total</div>";}
else
{switch(node.value)
{case'currency':value=parseFloat(grandtotals[j]).toFixed(2);break;default:value=grandtotals[j];break;}}
html+=leaf_nodes[j].row_html.replace(/%VALUE%/,DWPE_Utilities.format(leaf_nodes[j].value,value));}
html+="</tr>";html+="</tbody>";html+="</table>";html+="</div>";}
if(tree.column_footer=='visible')
{html+="<div class='table-headers-container'>";html+="<table class='table-header' cellpadding='0' cellspacing='0'>";html+="<thead>";for(var row=1;row<=max_depth;row++)
{var items=rows[row];html+="<tr class='columns'>";if(row==1&&(tree.row_header=='visible'||tree.row_header=='numbered'))
{html+='<th class="row-header" rowspan="'+max_depth+'"><div col="0">Row</div></th>';}
for(var j=0;j<items.length;j++)
{html+=items[j].col_html;}
html+="</tr>";}
html+="</thead>";html+="</table>";html+="</div>";}
if(tree.statusbar=='visible')
{html+="<table class='table-statusbar'>";html+="<tr>";html+="<td class='rows-selected'>&nbsp;</td>";html+="<td>&nbsp;</td>";html+="<td>&nbsp;</td>";html+="</tr>";html+="</table>"}
return html;}
DWPE_TableFactory_Class.prototype.makeRow=function(row,row_header,row_data,row_counters,row_type,leaf_nodes)
{var html="";switch(row_type)
{case'subtotal':html+="\r<tr class='subtotal'>";html+='<td class="row-header"><div class="col0">&nbsp;</div></td>';break;case'row':default:html+="\r<tr>";if(row_header=='visible')
{html+='<td class="row-header"><div class="col0">&nbsp;</div></td>';}
else if(row_header=='numbered')
{html+='<td class="row-header"><div class="col0">'+(row+1)+'</div></td>';}
break;}
var label_applied=false;for(var j=0;j<leaf_nodes.length;j++)
{var node=leaf_nodes[j];var value="";switch(row_type)
{case'subtotal':if(label_applied==false&&row_counters[j]=="")
{label_applied=true;value="<div align='right'>Subtotal</div>";}
else
{switch(node.value)
{case'currency':value=parseFloat(row_counters[j]).toFixed(2);break;default:value=row_counters[j];break;}}
break;case'row':default:value=row_data[j]
break;}
value=DWPE_Utilities.format(node.value,value);html+=node.row_html.replace(/%VALUE%/,this.makeColumnValue(node.format,value));}
html+="\r</tr>";return html;}
DWPE_TableFactory_Class.prototype.last_names=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Yee","Gupta"];DWPE_TableFactory_Class.prototype.first_names=["Katelyn","Ariana","Bailey","Camilla","Kumal","Jennifer","Melanie","Gianna","Charlotte","Paige","Whitney","Autumn","Payton","Faith","Sara","Isabelle","Caroline","Mary","Zoey","Gracie","Megan","Jordan","Robert","Aaron","Brayden","Thomas","Cameron","Hunter","Austin","Adrian","Connor","Owen","Aidan","Jason","Julian","Wyatt","Charles","Luis","Carter","Juan","Chase","Diego"];DWPE_TableFactory_Class.prototype.companies=["Acme Inc","Arrow Ltd.","Featherweight Industries","XYZ Corp.","Greene & Greene","T. Moser & Sons","Stickley Co."];DWPE_TableFactory_Class.prototype.street=["Foster Road","Dempsey Avenue","Kingston Highway","Rileyville Road","Hanover Avenue","Dale St."];DWPE_TableFactory_Class.prototype.city=["Burlingame","Manchester","Ithaca","Arlington","Redwood Shores","Princeton"];DWPE_TableFactory_Class.prototype.state=["MA","NY","CA","NJ","TX","FL"];DWPE_TableFactory_Class.prototype.getRandomInteger=function(low,high)
{if(high)
return parseInt(Math.random()*(high-low))+low;else
return parseInt(Math.random()*low);}
DWPE_TableFactory_Class.prototype.month_names=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");DWPE_TableFactory_Class.prototype.currency_codes=new Array("USD","CNY","CAD","AUD","GBP","JPY","EUR");DWPE_TableFactory_Class.prototype.getRandomDate=function(low,high)
{var d=new Date();var newtimems=d.getTime()+(this.getRandomInteger(low,high)*24*60*60*1000);d.setTime(newtimems);var curr_date=d.getDate();var curr_month=d.getMonth();var curr_year=d.getFullYear();return this.month_names[curr_month]+" "+curr_date+", "+curr_year;}
DWPE_TableFactory_Class.prototype.getRandomPersona=function()
{var o={};o.exchange=this.getRandomInteger(200,999);o.lastname=this.last_names[parseInt(Math.random()*this.last_names.length)];o.firstname=this.first_names[parseInt(Math.random()*this.first_names.length)];o.fullname=o.firstname+" "+o.lastname;o.phone1="("+o.exchange+") "+this.getRandomInteger(200,999)+"-"+this.getRandomInteger(1000,9999);o.phone2="("+o.exchange+") "+this.getRandomInteger(200,999)+"-"+this.getRandomInteger(1000,9999);o.company=this.companies[parseInt(Math.random()*this.companies.length)];o.email=o.firstname+"."+o.lastname+"@"+o.company.replace(/[ \\.]/gi,"")+".com";o.street=this.street[parseInt(Math.random()*this.street.length)];o.address=this.getRandomInteger(999)+" "+o.street;o.city=this.city[parseInt(Math.random()*this.city.length)];o.state=this.state[parseInt(Math.random()*this.state.length)];o.zip=this.getRandomInteger(10000,99999)+"";o.empty="";o.currency=this.getRandomInteger(200,9999)+"."+this.getRandomInteger(0,99);o.currency=parseFloat(o.currency).toFixed(2);o.currencycode=this.currency_codes[parseInt(Math.random()*this.currency_codes.length)];o.status=DWPE_Utilities.getRandomStatusIconMarkup();o.past=this.getRandomDate(-1000,-1);o.future=this.getRandomDate(1,1000);o.int100=this.getRandomInteger(0,100);o.int100_100=this.getRandomInteger(-100,100);return o;}
DWPE_TableFactory_Class.prototype.assignTableHeaderRowspan=function(node,rowspan)
{node.rowspan=(node.items.length==0)?rowspan:1;$(node.items).each(function(){DWPE_TableFactory.assignTableHeaderRowspan(this,rowspan-1);});}
DWPE_TableFactory_Class.prototype.makeColumnValue=function(type,value)
{switch(type)
{case'text':return value;case'link':return"<a href='javascript:void(0)'>"+value+"</a>";case'spinbox':case'checkbox':case'radiogroup':case'textbox':case'textarea':case'singleselectchoicelist':case'multiselectlistbox':case'multiselectchoicelist':var args=DWPE_FormFactory.getDefaultArgsListForType(type);args.help="";args.items=new Array();args.items.push({"label":value,"value":value,"checked":"1"})
args.label=value;args.text=value;return DWPE_FormFactory.generateMarkup(args);}}
DWPE_TableFactory_Class.prototype.toggleQBE=function()
{var $context=DWPE_Utilities.getContext();$context.closest('ux.dwpe-table').find("TR.qbe").toggleClass('show');}
DWPE_TableFactory_Class.prototype.deleteRow=function()
{var $context=DWPE_Utilities.getContext();var $ux=$context.closest('ux.dwpe-table');$ux.find("table.table-body TR.selected").remove();DWPE_TableFactory.updateRowsSelected($ux);}
DWPE_TableFactory_Class.prototype.updateRowsSelected=function($ux)
{var num_rows_selected=0;$ux.find("table.table-body TR").each(function(){if($(this).hasClass('selected'))num_rows_selected++;})
var rows_msg=(num_rows_selected==0)?"&nbsp;":"Rows Selected &nbsp;&nbsp;&nbsp;"+num_rows_selected;$ux.find('TD.rows-selected').html(rows_msg);}
DWPE_TableFactory_Class.prototype.makeColumnVisibilityMenuItems=function()
{var $context=DWPE_Utilities.getContext();var $ux=$context.closest('ux.dwpe-table');var html="";var $columns=$ux.find("DIV.column");$columns.each(function()
{var $column=$(this);var menu_item=DWPE_WindowFactory.getDefaultArgsListForType("menu-item");menu_item.label=$column.text();menu_item.item_type='toggle';menu_item.selected=($column.parent().hasClass('hide'))?'':'on';menu_item.cmd="javascript::DWPE_TableFactory.toggleColumn('"+$column.attr('col')+"')"
html+=DWPE_WindowFactory.generateMenuItemMarkup(menu_item);})
$context.html(html);}
DWPE_TableFactory_Class.prototype.showAllColumns=function()
{var $context=DWPE_Utilities.getContext();$context.closest('ul').find('LI.toggle').addClass('on');var $ux=$context.closest('ux.dwpe-table');var col_ids=new Array();$ux.find("DIV.column").each(function()
{var $div=$(this);var value=$div.attr('col');if(value)
col_ids.push(value);});$(col_ids).each(function()
{$ux.find("DIV.col"+this).each(function()
{var $div=$(this);var $parent=$div.closest("TH,TD");$parent.removeClass('hide');});});}
DWPE_TableFactory_Class.prototype.toggleColumn=function(col_id)
{var $context=DWPE_Utilities.getContext();var $ux=$context.closest('ux.dwpe-table');var state=$context.hasClass('on')?1:0;$ux.find("DIV.col"+col_id).each(function()
{var $div=$(this);var $parent=$div.closest("TH,TD");if(state)
$parent.removeClass('hide');else
$parent.addClass('hide');})}
DWPE_TableFactory_Class.prototype.getDefaultArgsListForType=function(type)
{var i="";var icon=DWPE_Utilities.getRandomIcon();switch(type)
{case'column':return{"_class":"DWPE_TableFactory_Class","type":"column","label":"Column","value":"fullname","key":"","item_type":"normal","width":"100","sort":"not","align":"left","format":"text","visibility":" "};break;default:return{};}}
DWPE_TableFactory_Class.prototype.getPropertySheetFields=function(_type)
{switch(_type)
{case'column':return[{type:"hidden",id:"_class",name:"_class",value:"DWPE_TableFactory"},{type:"hidden",id:"_type",name:"Type",value:"column"},{type:"text",id:"label",name:"Column&nbsp;Name",value:"Column Title"},{type:"chooser",id:"visible",name:"Visibility",value:" =Visible&hide=Hidden"},{type:"chooser",id:"format",name:"Format",value:"text=Plain Text&link=Link&textbox=Text Field&textarea=Textarea&checkbox=Checkbox Group&radiogroup=Radio Group&singleselectchoicelist=Single-Select Choice List&multiselectchoicelist=Multi-Select Choice List&multiselectlistbox=Multi-Select List Box&spinbox=Spinbox"},{type:"chooser",id:"value",name:"Generated&nbsp;Value",value:"empty=Empty&fullname=Full Name&lastname=Last Name&firstname=First Name&company=Company&email=Email&phone1=Work Phone&phone2=Mobile Phone&address=Address&city=City&state=State&zip=Postal Code&currency=Currency&currencycode=Currency Code&status=Status Icon&past=Past Date&future=Future Date&int100=Integer [0 to 100]&int100_100=Integer [-100 to 100]"},{type:"chooser",id:"sort",name:"Sort",value:"not=Not Sortable&none=Not Sorted&asc=Sorted Ascending&desc=Sorted Descending"},{type:"chooser",id:"align",name:"Alignment",value:"left=Start&center=Center&right=End"},{type:"text",id:"width",name:"Width",value:"100",help:'(pixels values only)'}];break;default:return[];break;}};DWPE_Carousel_Class.prototype=new DWPE_Base_Class();DWPE_Carousel_Class.constructor=DWPE_Carousel_Class;DWPE_Carousel_Class.prototype._super=DWPE_Base_Class.prototype;function DWPE_Carousel_Class()
{this._class="DWPE_Carousel_Class";return this;}
DWPE_Carousel=new DWPE_Carousel_Class();DWPE_Carousel_Class.prototype.update=function()
{this.markup=this.make(this.properties);}
DWPE_Carousel_Class.prototype.setDefaultValue=function(name,value)
{if(!this.properties[name])this.properties[name]=value;}
DWPE_Carousel_Class.prototype.generateMarkup=function(args)
{switch(args.type.toLowerCase())
{case'carousel':return this.generateCarouselMarkup(args);break;default:return;break;}}
DWPE_Carousel_Class.prototype.make=function($ux)
{var _class=$ux.attr("class").toLowerCase();_class=_class.split(" ");_class=_class[0];switch(_class)
{case"dwpe-carousel":this.initializeCarousel($ux);break;}}
var currentPage=new Array();var count;var childCount=new Array();var childLabel=new Array();var childType=new Array();var childContent=new Array();var object_label=new Array();var pageContent=new Array();var contentType=new Array();DWPE_Carousel_Class.prototype.generateCarouselMarkup=function(args)
{count=args.items.length;var markup="";markup+='<ux class="dwpe-carousel '+args.carousel_state+'">';markup+='\r\t<div class="filterbar">';if(args.filterbar_menubar=="filterbar-menubar-yes")
markup+='\r\t\t<div class="menubar"></div>';if(args.filterbar_toolbar=="filterbar-toolbar-yes")
markup+='\r\t\t<ux class="dwpe-toolbar" data="sample-toolbar-long"/>';markup+='\r\t</div>';markup+='<div class="dragcontainer">';markup+='\r\t<div id="draggable_object" class="carousel-objects-container">';for(var i in args.items)
{var item=args.items[i];markup+='\r\t\t<div id="object'+i+'" class="carousel-object">';if(args.carousel_custom_toolbar=="custom-toolbar-yes")
markup+='\r\t\t\t<div class="carousel-custom-toolbar"/>';markup+='\r\t\t\t<div id="'+i+'" class="pagecontent ui-widget-content">';if(item.page_content=="img"){var url='/DWPE/components/images/carousel/object-content-'+item.page_content_image+'.png';markup+='<div class="objectimg" style="background-image:url('+url+')"/>';pageContent[i]=item.page_content_image;contentType[i]="img";}
else{var cmd=item.page_content_url;if(cmd){var action=cmd.split("::");switch(action[0].toLowerCase())
{case"javascript":markup+='<div class="objectjs"><script>'+action[1]+'</script></div>';pageContent[i]=action[1];contentType[i]="js";break;case"url":markup+='<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>';pageContent[i]=action[1];contentType[i]="url";break;default:break;}}}
markup+='</div>';if(args.carousel_navigation_bar=="navigation-bar-yes")
markup+='\r\t\t\t<div id="carnavbar'+i+'" class="carousel-navigation-bar"/>';childCount[i]=item.items.length;if(item.items[i]){markup+='\r\t\t\t\t<ul id="object'+i+'">';var k;for(var j in item.items)
{var childItem=item.items[j];childLabel[i+''+j]=childItem.label;childType[i+''+j]=childItem.page_content;if(childType[i+''+j]=="img")
childContent[i+''+j]=childItem.page_content_image;else
childContent[i+''+j]=childItem.page_content_url;markup+='\r\t\t\t\t\t<li>'+childItem.label+'</li>';}
markup+='\r\t\t\t\t</ul>';}
markup+='\r\t\t</div>';object_label[i]=item.label;}
markup+='\r\t</div>';markup+='\r\t<div class="'+args.object_alignment_horizontal+'"/>';markup+='\r\t<div class="object-title" id="objectlabel"/>';if(args.carousel_slider=="carousel-slider-yes")
{markup+='\r\t<div class="carousel-slider-hor"></div>';}
if(args.carousel_properties_container=="properties-container-yes"||args.carousel_drop_zone=="drop-zone-yes")
markup+='\r\t<div class="properties-dropzone-container">';if(args.carousel_properties_container=="properties-container-yes")
markup+='\r\t\t<div class="carousel-object-properties">'+DWPE_Utilities.getLoremIpsum()+'</div>';if(args.carousel_drop_zone=="drop-zone-yes"){markup+='\r\t\t<div id="droppable1" class="ui-widget-content carousel-drop-zone"><div class="innerBox"/><div id="dropText1" class="drop-text">Drop Zone</div></div>';markup+='\r\t\t<div id="droppable2" class="ui-widget-content carousel-drop-zone"><div class="innerBox"/><div id="dropText2" class="drop-text">Drop Zone</div></div>';markup+='\r\t\t<div id="droppable3" class="ui-widget-content carousel-drop-zone"><div class="innerBox"/><div id="dropText3" class="drop-text">Drop Zone</div></div>';}
if(args.carousel_properties_container=="properties-container-yes"||args.carousel_drop_zone=="drop-zone-yes")
markup+='\r\t</div>';markup+='</div>';markup+='\r</ux>';return markup;}
DWPE_Carousel_Class.prototype.initializeCarousel=function($ux)
{var state=$('SELECT#carousel_state').val();if(state=="enabled")
$ux.find('DIV.carousel-slider-hor').append('<div class="carousel-spin-left" title="Spin carousel to the previous item"/><div id="containment-wrapper" class="carousel-spin-bar"><div id="draggable" class="carousel-spin-marker ui-widget-content" title="Carousel spin thumb"/></div><div class="carousel-spin-right" title="Spin carousel to the next item"/>');if(state=="disabled")
$ux.find('DIV.carousel-slider-hor').append('<div class="carousel-spin-left-d" title="Spin carousel to the previous item"/><div id="containment-wrapper" class="carousel-spin-bar-d"><div id="draggable" class="carousel-spin-marker-d ui-widget-content" title="Carousel spin thumb"/></div><div class="carousel-spin-right-d" title="Spin carousel to the next item"/>');if(state=="enabled")
var spinbar_width=$('.carousel-spin-bar').width();else
var spinbar_width=$('.carousel-spin-bar-d').width();var total=Math.round((spinbar_width)/count);var halign=$('SELECT#object_alignment_horizontal').val();if(count>50)
var outof='';else
var outof=' of '+count;$ux.find('DIV.carousel-slider-hor').append('<br><br><div id="setnumber" class="object-set-number"/><br><br>');var object_setposition;if($ux.find('DIV.carousel-slider-hor'))
object_setposition=$('DIV.object-set-number').position();var focus_object=($('INPUT#focus_object_number').val())-1;for(i=0;i<count;i++){currentPage[i]=0;var totalFocusChild=childCount[i]+1;$ux.find('DIV#carnavbar'+i).append(DWPE_Utilities.getIconMarkup("previous")+'<span id="navigationbar'+i+'"><span id="navtext'+i+'"/></span>'+DWPE_Utilities.getIconMarkup("next"));document.getElementById('navtext'+i).innerHTML=" Page 1 of "+totalFocusChild+" ";}
function object_title(focus_object){document.getElementById('objectlabel').innerHTML=object_label[focus_object];}
function focus_object_fn(focus_object){$ux.find('DIV#object'+focus_object).css({"left":"40%","right":"40%","z-index":"3000","vertical-align":"middle","top":"10%","background-color":"white","display":"block"});$ux.find('UL#object'+focus_object+'>LI').css("display","none");}
$ux.find('DIV.carousel-navigation-bar').click(function(){$(this).css("opacity","1");});function periperal_right(focus_object){var j=1;for(var i=focus_object;i<focus_object+4;i++,j++){var index=2999-i;var left_indent=40+(j*10);switch(halign){case"halign-middle":var peripheral_top=10+(j*5);var peripheral_height=55-(j*10);break;case"halign-top":var peripheral_top=10;var peripheral_height=55-(j*5);break;case"halign-bottom":var peripheral_top=10+(j*5);var peripheral_height=55-peripheral_top+10;break;default:break;}
$ux.find('DIV#object'+i).next().css({"left":left_indent+"%","z-index":index,"top":peripheral_top+"%","height":peripheral_height+"%","background-color":"white","display":"block"});$ux.find('UL#object'+i+'>LI').css("display","none");}}
function peripheral_left(focus_object){var j;for(var i=focus_object,j=1;i>=0;i--,j++){var left_index=2999-j;var left_indent=40-(j*10);switch(halign){case"halign-middle":var peripheral_top=10+(j*5);var peripheral_height=55-(j*10);break;case"halign-top":var peripheral_top=10;var peripheral_height=55-(j*5);break;case"halign-bottom":var peripheral_top=10+(j*5);var peripheral_height=55-peripheral_top+10;break;default:break;}
$ux.find('DIV#object'+i).prev().css({"left":left_indent+"%","z-index":left_index,"top":peripheral_top+"%","height":peripheral_height+"%","background-color":"white","display":"block"});$ux.find('UL#object'+i+'>LI').css("display","none");}}
function focus_toolbar_navigation(id_number){for(var i=0;i<count;i++)
{if(id_number!=i)
{$ux.find('DIV#object'+i+'>DIV.carousel-custom-toolbar').css("display","none");$ux.find('DIV#object'+i+'>DIV.carousel-navigation-bar').css("display","none");}}
$ux.find('DIV#object'+id_number+'>DIV.carousel-custom-toolbar').css("display","block");$ux.find('DIV#object'+id_number+'>DIV.carousel-navigation-bar').css("display","block");}
focus_toolbar_navigation(focus_object);focus_object_fn(focus_object);periperal_right(focus_object);peripheral_left(focus_object);object_title(focus_object);total_focus=total*focus_object;if(object_setposition!=null){var set_left_focus=Math.round(object_setposition.left+total_focus);$ux.find('DIV.object-set-number').css("left",set_left_focus+"px");if(state=="enabled")
$ux.find('DIV.carousel-spin-marker').css("left",total_focus+"px");else
$ux.find('DIV.carousel-spin-marker-d').css("left",total_focus+"px");document.getElementById('setnumber').innerHTML=focus_object+1+outof;}
var $menu=$ux.find('DIV.menubar');$menu.append('<ux class="dwpe-menu"><ul><li>Object<ul><li>Object 1</li><li>Object 2</li><li>object 3</li></ul></li></ul></ux>');$ux.find('DIV.menubar>UX.dwpe-menu').click(function()
{var $callee=$(this);var menu_id=$callee.attr("id")+"-menu";var group=null;var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);var $overflowMenuBody=$("#"+menu_id+"-body");$overflowMenuBody.append("<li>Option 1</li><li>Option 2</li><li>Option 3</li>");});$ux.find('DIV.carousel-custom-toolbar').append('<ux class="dwpe-menu"><ul><li>Menu<ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul></li></ul></ux>');$ux.find('DIV.carousel-custom-toolbar>UX.dwpe-menu').click(function()
{$('DIV.carousel-custom-toolbar').css("opacity","1");var $callee=$(this);var menu_id=$callee.attr("id")+"-menu";var group=null;var menu=DWPE_Window.addWindow($callee,menu_id,"menu",null);var $overflowMenuBody=$("#"+menu_id+"-body");$overflowMenuBody.append("<li>Menu 1</li><li>Menu 2</li><li>Menu 3</li>");});var $menutool_container=$("<div class='menu-tool-container'>"+"<div class='left'></div>"+"<div class='center'></div>"+"<div class='right'></div>"+"</div>");$menutool_container.find(">DIV.left").append($menu);var $toolbar=$ux.find("UX.dwpe-toolbar");if($menu&&$menu.length>0){$menutool_container.find(">DIV.center").append($toolbar);}
else{$menutool_container.find(">DIV.left").append($toolbar);$menutool_container.find(">DIV.left").css('width','68%');$menutool_container.find(">DIV.center").css('width','0%');$menutool_container.find(">DIV.right").css('width','32%');}
$menutool_container.find(">DIV.right").append('Filter <ux class="dwpe-singleselectchoicelist"><select class="dwpe-singleselectchoicelist"><option>Attribute 1</option><option>Attribute 2</option><option>Attribute 3</option></select></ux>&nbsp;<input class="dwpe-textbox"/>&nbsp;'+DWPE_Utilities.getIconMarkup("search"));$ux.find('DIV.filterbar').append($menutool_container);if(state=="enabled"){$(function(){$("#draggable").draggable({containment:'#containment-wrapper',scroll:false,axis:'x',grid:[total,0],drag:function(event,ui){var marker_position=ui.position.left;var set_left=Math.round(object_setposition.left+marker_position);$ux.find('DIV.object-set-number').css("left",set_left+"px");var calc=Math.ceil(marker_position/total);document.getElementById('setnumber').innerHTML=calc+1+outof;focus_object_fn(calc);$ux.find('DIV#object'+calc).css("height","55%");object_title(calc);periperal_right(calc);peripheral_left(calc);focus_toolbar_navigation(calc);}});});$('DIV.carousel-object').click(function(){var id=$(this).attr('id');var id_number=id.charAt(6);var display=id_number+1;$ux.find('DIV#object'+id_number).animate({"left":"40%","right":"40%","top":"10%","height":"55%","vertical-align":"middle","display":"block"},1500).css({"background":"white","z-index":"3000"});object_title(id_number);var j=1;for(var i=id_number;i<count;i++,j++){var index=2999-i;var left_indent=40+(j*10);switch(halign){case"halign-middle":var peripheral_top=10+(j*5);var peripheral_height=55-(j*10);break;case"halign-top":var peripheral_top=10;var peripheral_height=55-(j*5);break;case"halign-bottom":var peripheral_top=10+(j*5);var peripheral_height=55-peripheral_top+10;break;default:break;}
if(peripheral_height>1)
$ux.find('DIV#object'+i).next().animate({"left":left_indent+"%","top":peripheral_top+"%","height":peripheral_height+"%","display":"block"},1500).css({"z-index":index,"background":"white"});}
j=1;for(var i=id_number;i>=0;i--,j++){var left_index=2999-j;var left_indent=40-(j*10);switch(halign){case"halign-middle":var peripheral_top=10+(j*5);var peripheral_height=55-(j*10);break;case"halign-top":var peripheral_top=10;var peripheral_height=55-(j*5);break;case"halign-bottom":var peripheral_top=10+(j*5);var peripheral_height=55-peripheral_top+10;break;default:break;}
if(peripheral_height>1)
$ux.find('DIV#object'+i).prev().animate({"left":left_indent+"%","top":peripheral_top+"%","height":peripheral_height+"%","display":"block"},1500).css({"z-index":left_index,"background":"white"});}
focus_toolbar_navigation(id_number);if(object_setposition!=null){total_focus=total*id_number;var set_left_focus=Math.round(object_setposition.left+total_focus);$ux.find('DIV.object-set-number').css("left",set_left_focus+"px");$ux.find('DIV.carousel-spin-marker').css("left",total_focus+"px");var dis=parseInt(id_number);document.getElementById('setnumber').innerHTML=dis+1+outof;}});$('DIV.carousel-spin-right').click(function(){var marker_position=$('DIV.carousel-spin-marker').position();var setnumber_position=$('DIV.object-set-number').position();var pos=marker_position.left+total;var num_pos=setnumber_position.left+total;var val=getFocusObjectNumber()+1;if(val<count){$ux.find('DIV.carousel-spin-marker').css("left",pos+"px");$ux.find('DIV.object-set-number').css("left",num_pos+"px");document.getElementById('setnumber').innerHTML=val+1+outof;focus_object_fn(val);$ux.find('DIV#object'+val).css("height","55%");object_title(val);periperal_right(val);peripheral_left(val);focus_toolbar_navigation(val);}});$('DIV.carousel-spin-left').click(function(){var marker_position=$('DIV.carousel-spin-marker').position();var setnumber_position=$('DIV.object-set-number').position();var pos=marker_position.left-total;var num_pos=setnumber_position.left-total;var val_setnum=getFocusObjectNumber()-1;if(marker_position.left>0){$ux.find('DIV.carousel-spin-marker').css("left",pos+"px");$ux.find('DIV.object-set-number').css("left",num_pos+"px");document.getElementById('setnumber').innerHTML=val_setnum+1+outof;focus_object_fn(val_setnum);$ux.find('DIV#object'+val_setnum).css("height","55%");object_title(val_setnum);periperal_right(val_setnum);peripheral_left(val_setnum);focus_toolbar_navigation(val_setnum);}});var isDrop=$('SELECT#carousel_drop_zone').val();if(isDrop=="drop-zone-yes"){$(".pagecontent").draggable({helper:'clone'});$("#droppable1").droppable({accept:'.pagecontent',drop:function(event,ui){var id=ui.draggable.attr('id');var dropID=$(this).attr('id');var isObject=$ux.find('DIV#objectDrop');if(isObject==false)
dropContentSelect(id,dropID);else{$('DIV#'+dropID+'>DIV.innerBox>DIV#objectDrop').remove();dropContentSelect(id,dropID);}}});$("#droppable2").droppable({accept:'.pagecontent',drop:function(event,ui){var id=ui.draggable.attr('id');var dropID=$(this).attr('id');var isObject=$ux.find('DIV#objectDrop');if(isObject==false)
dropContentSelect(id,dropID);else{$('DIV#'+dropID+'>DIV.innerBox>DIV#objectDrop').remove();dropContentSelect(id,dropID);}}});$("#droppable3").droppable({accept:'.pagecontent',drop:function(event,ui){var id=ui.draggable.attr('id');var dropID=$(this).attr('id');var isObject=$ux.find('DIV#objectDrop');if(isObject==false)
dropContentSelect(id,dropID);else{$('DIV#'+dropID+'>DIV.innerBox>DIV#objectDrop').remove();dropContentSelect(id,dropID);}}});}
else{$("#draggable_object").draggable("disabled");$("#droppable").droppable({disabled:true});}
function dropContentSelect(id,dropID){var num=dropID.charAt(9);switch(contentType[id])
{case"img":var url='/DWPE/components/images/carousel/object-content-'+pageContent[id]+'.png';$('#'+dropID+'>DIV.innerBox').append('<div id="objectDrop" class="dropobject" style="background-image:url('+url+')"/>');document.getElementById('dropText'+num).innerHTML=object_label[id];break;case"js":$('#'+dropID+'>DIV.innerBox').append('<div id="objectDrop" class="dropobject"><script>'+pageContent[id]+'</script></div>');document.getElementById('dropText'+num).innerHTML=object_label[id];break;case"url":$('#'+dropID+'>DIV.innerBox').append('<div id="objectDrop" class="dropobject"><object type="text/html" data="'+pageContent[id]+'"/></div>');document.getElementById('dropText'+num).innerHTML=object_label[id];break;default:break;}}
$ux.find('DIV.carousel-navigation-bar>SPAN.ico-next').click(function(){var focusObject=getFocusObjectNumber();var totalChild=childCount[focusObject]+1;if($ux.hasClass('DIV#'+focusObject+'>DIV.objectimg')==false)
$ux.find('DIV#'+focusObject).append('<div class="objectimg"/>');if((currentPage[focusObject]+1)<totalChild){var childPage=currentPage[focusObject];if(childType[focusObject+''+childPage]=="img"){$ux.find('DIV.objectjs').hide();$ux.find('DIV.objecturl').hide();$ux.find('DIV#'+focusObject+'>DIV.objectimg').show().css("background-image","url(/DWPE/components/images/carousel/object-content-"+childContent[focusObject+""+childPage]+".png)");}
else{var cmd=childContent[focusObject+''+childPage];if(cmd){var action=cmd.split("::");switch(action[0].toLowerCase())
{case"javascript":$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();$ux.find('DIV.objecturl').hide();$ux.find('DIV#'+focusObject).append('<div class="objectjs"><script>'+action[1]+'</script></div>');break;case"url":$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();$ux.find('DIV.objectjs').hide();$ux.find('DIV#'+focusObject).append('<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>');break;default:break;}}}
currentPage[focusObject]++;var num=currentPage[focusObject]+1;document.getElementById('navigationbar'+focusObject).innerHTML=" Page "+num+" of "+totalChild+" ";}});$ux.find('DIV.carousel-navigation-bar>SPAN.ico-previous').click(function(){var focusObject=getFocusObjectNumber();var totalChild=childCount[focusObject]+1;if(currentPage[focusObject]==1){var type=contentType[focusObject];if(type=="img"){$ux.find('DIV.objectjs').hide();$ux.find('DIV.objecturl').hide();$ux.find('DIV#'+focusObject+'>DIV.objectimg').show().css("background-image","url(/DWPE/components/images/carousel/object-content-"+pageContent[focusObject]+".png)");}
else{var cmd=pageContent[focusObject];if(cmd){var action=cmd.split("::");switch(action[0].toLowerCase())
{case"javascript":$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();$ux.find('DIV.objecturl').hide();$ux.find('DIV#'+focusObject).append('<div class="objectjs"><script>'+action[1]+'</script></div>');break;case"url":$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();$ux.find('DIV.objectjs').hide();$ux.find('DIV#'+focusObject).append('<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>');break;default:break;}}}}
if(currentPage[focusObject]>0){var childPage=currentPage[focusObject]-2;if(childType[focusObject+''+childPage]=="img"){$ux.find('DIV.objectjs').hide();$ux.find('DIV.objecturl').hide();$ux.find('DIV#'+focusObject+'>DIV.objectimg').show();$ux.find('DIV#'+focusObject+'>DIV.objectimg').css("background-image","url(/DWPE/components/images/carousel/object-content-"+childContent[focusObject+""+childPage]+".png)");}
else{var cmd=childContent[focusObject+''+childPage];if(cmd){var action=cmd.split("::");switch(action[0].toLowerCase())
{case"javascript":$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();$ux.find('DIV.objecturl').hide();$ux.find('DIV#'+focusObject).append('<div class="objectjs"><script>'+action[1]+'</script></div>');break;case"url":$ux.find('DIV#'+focusObject+'>DIV.objectimg').hide();$ux.find('DIV.objectjs').hide();$ux.find('DIV#'+focusObject).append('<div class="objecturl"><object id="url" type="text/html" data="'+action[1]+'" width="100%" height="100%"></object></div>');break;default:break;}}}
currentPage[focusObject]--;var num=currentPage[focusObject]+1;document.getElementById('navigationbar'+focusObject).innerHTML=" Page "+num+" of "+totalChild+" ";}});}
function getFocusObjectNumber(){for(var i=0;i<count;i++)
{if(($('DIV#object'+i).css("z-index"))==3000)
return i;}}}
DWPE_Carousel_Class.prototype.getDefaultArgsListForType=function(type)
{switch(type.toLowerCase())
{case'carousel':return{"_class":"DWPE_Carousel_Class","type":"carousel","label":"Object","filterbar_menubar":"filterbar-menubar-yes","filterbar_toolbar":"filterbar-toolbar-yes","carousel_state":"enabled","object_alignment_horizontal":"halign-middle","object_properties_container":"properties-container-yes","carousel_drop_zone":"drop-zone-yes","carousel_slider":"carousel-slider-yes","carousel_custom_toolbar":"custom-toolbar-yes","carousel_navigation_bar":"navigation-bar-yes","page_content":"img","page_content_image":"img1","items":[{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 1","value":"","type":"Content Type","page_content":"img","value":"","type":"Command","page_content_image":"img2","value":""},{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 2","value":"","type":"Content Type","page_content":"img","value":"","type":"Command","page_content_image":"img3","value":""},{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 3","value":"","type":"Content Type","page_content":"img","value":"","type":"Command","page_content_image":"img4","value":""},{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 4","value":"","type":"Content Type","page_content":"img","value":"","type":"Command","page_content_image":"img5","value":""},{"_class":"DWPE_Carousel_Class","type":"Label","label":"Page 5","value":"","type":"Content Type","page_content":"img","value":"","type":"Command","page_content_image":"img6","value":""}]};break;default:return{};break;}}
DWPE_Carousel_Class.prototype.getPropertySheetFields=function(_type)
{switch(_type)
{case'carousel':return[{type:"text",id:"label",name:"Value",value:""},{type:"chooser",id:"page_content",name:"Content Type",value:'img=Image&url=URL / Javascript'},{type:"text",id:"page_content_url",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://my.oracle.com)"},{type:"chooser",id:"page_content_image",name:"Image",value:"img1=Image 1&img2=Image 2&img3=Image 3&img4=Image 4&img5=Image 5&img6=Image 6&img7=Image 7"}];break;default:return[];break;}};DWPE_PanelFactory.generateTrainsetMarkup=function(args)
{var markup="";markup+='<ux class="dwpe-trainset';if(args.train_position)markup+=' '+args.train_position;if(args.train_state)markup+=' '+args.train_state;if(args.train_buttonbar)markup+=' '+args.train_buttonbar;if(args.cmdTrainButtonSubmit)markup+=' button-bar-submit';if(args.cmdTrainButtonFinish)markup+=' button-bar-finish';if(args.cmdTrainButtonSave)markup+=' button-bar-save';if(args.cmdTrainButtonExit)markup+=' button-bar-exit';if(args.cmdTrainButtonCancel)markup+=' button-bar-cancel';if(args.train_process)markup+=' '+args.train_process;markup+='" ';if(args.train_parent_url)markup+=' parentURL="'+args.train_parent_url+'" ';if(args.cmdTrainButtonSubmit)markup+=' onSubmit="'+args.cmdTrainButtonSubmit+'" ';if(args.cmdTrainButtonFinish)markup+=' onFinish="'+args.cmdTrainButtonFinish+'" ';if(args.cmdTrainButtonSave)markup+=' onSave="'+args.cmdTrainButtonSave+'" ';if(args.cmdTrainButtonExit)markup+=' onExit="'+args.cmdTrainButtonExit+'" ';if(args.cmdTrainButtonCancel)markup+=' onCancel="'+args.cmdTrainButtonCancel+'" ';markup+='>\r\n';markup+=DWPE_PanelFactory_Class.generateTrainMarkup(args);markup+=DWPE_PanelFactory_Class.generateTrainPanelMarkup(args);markup+="</ux>\r\n";return markup;}
DWPE_PanelFactory_Class.generateTrainMarkup=function(args)
{markup="";markup+=' <ul class="dwpe-train">\r\n';for(var i in args.items)
{var _class='';var _tooltip='';var item=args.items[i];var state=(item.state=='0')?"disabled":"";var icon=(item.icon=='none')?"":item.icon;var required=(item.required_step=='1')?"required":"";var sequential_override=(item.sequential_override=='1')?"sequential-override":"";var allow_skip=(item.allow_skip=='1')?"allow-skip":"";var tooltip=(item.tooltip)?item.tooltip:"";if(state||icon||required||sequential_override||allow_skip)
{_class=' class="';if(state)_class+=state+' ';if(icon)_class+=icon+' ';if(required)_class+=required+' ';if(sequential_override)_class+=sequential_override+' ';if(allow_skip)_class+=allow_skip;_class+='"';}
if(tooltip)
{_tooltip=' tooltip="'+tooltip+'"';}
markup+="\t\t\<li"+_class+_tooltip+">";markup+=item.label;markup+="</li>\r\n";}
markup+=" </ul>\r\n";return markup;}
DWPE_PanelFactory_Class.generateTrainPanelMarkup=function(args)
{markup="";markup+='\t<div class="dwpe-train-panels">\r\n';for(var i in args.items)
{var item=args.items[i];if(item.content=="inline")
{markup+='\t\t<div>\r\n\t\t\t<h3>'+item.label+'</h3>'+'\r\n\t\t</div>\r\n';}else{markup+="\t\t<div content='"+item.content+"'></div>\r\n";}}
markup+="\t</div>\r\n";return markup;}
DWPE_PanelFactory_Class.prototype.initializeTrainset=function($ux){var id=($ux.attr("id"))?$ux.attr("id"):DWPE_Utilities.getUniqueId();$ux.attr("id",id);var size="100%";$ux.data('size',size);var default_train=$ux.attr("default_train");default_train=(default_train)?default_train:0;$ux.data("current-train",-1);$ux.data('allow-train-close',$ux.hasClass('allow-train-close'));var $container=$("<div class='train-container'>"+"<div class='left'></div>"+"<div class='right'></div>"+"</div>");var $trains=$ux.find(">UL.dwpe-train:first");$container.find(">DIV.left").append($trains);var $toolbar=$ux.find(">UX.dwpe-toolbar");if($toolbar&&$toolbar.length>0)
{$container.find(">DIV.right").append($toolbar);}
else
{$container.find(">DIV.right").width("1%");$container.find(">DIV.left").width("99%");}
var $trains=$container.find('UL.dwpe-train>LI');var stepNumber=1;$trains.each(function(i){var $train=$(this);$train.addClass("train-stop");$train.attr('id',id+"-train-"+i);if($train.attr('tooltip')){$train.attr('title',$train.attr('tooltip'));}else{$train.attr('title','Step '+stepNumber+' of '+$trains.length);}
$train.data('index',i);$train.click(function(){DWPE_PanelFactory_Class.showTrainPanel($ux,i);});var trainStopMarkup='';trainStopMarkup+='<table><tr class="train-track">';trainStopMarkup+='<td class="track"><div><span class=""></span></div></td>';trainStopMarkup+='<td class="train-stop-icon">';if($train.hasClass('error')||$train.hasClass('warning')||$train.hasClass('complete')||$train.hasClass('information')){trainStopMarkup+='<span></span>';}
trainStopMarkup+='</td>';trainStopMarkup+='<td class="track"><div><span class=""></span></div></td>';trainStopMarkup+='</tr><tr>';trainStopMarkup+='<td colspan="3" style="text-align:center; white-space:nowrap;" cellspacing="0" cellpadding="0">'
if($train.hasClass('required'))
{trainStopMarkup+='* ';}
trainStopMarkup+=$(this).html()
trainStopMarkup+='</td></tr></table>';$train.html(trainStopMarkup);stepNumber++;})
if($ux.hasClass('button-bar')){var $buttonBar=$container.find('UL.dwpe-train');$buttonBar.attr('class','dwpe-train-button-bar');buttonBarMarkup='';buttonBarMarkup+='<li class="DWPE_Button" type="train_button_back">Back</li>';buttonBarMarkup+='<li class="DWPE_Button" type="train_button_next">Next</li>';if($ux.hasClass('button-bar-submit')){var thisCommand=$ux.attr('onSubmit');buttonBarMarkup+='<li class="DWPE_Button" type="train_button_submit" '
if(thisCommand){var cmd=thisCommand.split("::");switch(cmd[0].toLowerCase())
{case"javascript":case"js":buttonBarMarkup+='onclick="javascript:'+cmd[1]+'">';break;case"url":buttonBarMarkup+='onclick="window.location.href=\''+cmd[1]+'\'">';break;default:break;}}
buttonBarMarkup+='Submit</li>';}
if($ux.hasClass('button-bar-finish')){var thisCommand=$ux.attr('onFinish');buttonBarMarkup+='<li class="DWPE_Button" type="train_button_finish" '
if(thisCommand.indexOf("(")!=-1){buttonBarMarkup+='cmd="'+thisCommand.replace('"','\'')+'" onclick="DWPE_Utilities.exec(this);">';}else{buttonBarMarkup+='target="_self" url="'+DWPE_Utilities.makeJavascriptSafe(thisCommand)+'" onmousedown="DWPE_Utilities.loadURL(this);">';}
buttonBarMarkup+='Finish</li>';}
if($ux.hasClass('button-bar-save')){var thisCommand=$ux.attr('onSave');buttonBarMarkup+='<li class="DWPE_Button" type="train_button_save" '
if(thisCommand.indexOf("(")!=-1){buttonBarMarkup+='cmd="'+thisCommand.replace('"','\'')+'" onclick="DWPE_Utilities.exec(this);">';}else{buttonBarMarkup+='target="_self" url="'+DWPE_Utilities.makeJavascriptSafe(thisCommand)+'" onmousedown="DWPE_Utilities.loadURL(this);">';}
buttonBarMarkup+='Save</li>';}
if($ux.hasClass('button-bar-exit')){var thisCommand=$ux.attr('onExit');buttonBarMarkup+='<li class="DWPE_Button" type="train_button_exit" '
if(thisCommand.indexOf("(")!=-1){buttonBarMarkup+='cmd="'+thisCommand.replace('"','\'')+'" onclick="DWPE_Utilities.exec(this);">';}else{buttonBarMarkup+='target="_self" url="'+DWPE_Utilities.makeJavascriptSafe(thisCommand)+'" onmousedown="DWPE_Utilities.loadURL(this);">';}
buttonBarMarkup+='Exit</li>';}
if($ux.hasClass('button-bar-cancel')){var thisCommand=$ux.attr('onCancel');buttonBarMarkup+='<li class="DWPE_Button" type="train_button_cancel" '
if(thisCommand.indexOf("(")!=-1){buttonBarMarkup+='cmd="'+thisCommand.replace('"','\'')+'" onclick="DWPE_Utilities.exec(this);">';}else{buttonBarMarkup+='target="_self" url="'+DWPE_Utilities.makeJavascriptSafe(thisCommand)+'" onmousedown="DWPE_Utilities.loadURL(this);">';}
buttonBarMarkup+='Cancel</li>';}
$buttonBar.html(buttonBarMarkup);$buttonBar.find('li').click(function(){DWPE_PanelFactory_Class.trainButtonBarOnClick($ux,$(this).attr('type'))});}
$ux.data('num-of-trains',$trains.length);if($ux.hasClass('bottom')){$ux.append($container);}else{$ux.prepend($container);}
var $overflow_btn_fore=$('<li class="dwpe-overflow-btn fore"></li>');$container.find('>DIV.left>UL.dwpe-train').prepend($overflow_btn_fore);var $overflow_btn_aft=$('<li class="dwpe-overflow-btn aft"></li>');$container.find('>DIV.left>UL.dwpe-train').append($overflow_btn_aft);$overflow_btn_fore.click(function(){DWPE_PanelFactory_Class.handleTrainOverflowClick($ux,$overflow_btn_fore);});$overflow_btn_aft.click(function(){DWPE_PanelFactory_Class.handleTrainOverflowClick($ux,$overflow_btn_aft);});$ux.data('first-train',0);$ux.data('last-train',$trains.length-1);var $train_panels=$ux.find('>DIV.dwpe-train-panels>DIV');$train_panels.each(function(i){var $train_panel=$(this);$train_panel.attr('id',id+"-trainpanel-"+i).css('height',$ux.attr('height'));if(i==default_train)
{}});DWPE_PanelFactory_Class.showTrainPanel($ux,default_train);$(window).bind('resize',function(e,parentID){DWPE_PanelFactory_Class.manageTrainOverflow($ux);})
DWPE_PanelFactory_Class.manageTrainOverflow($ux);$ux.find('td.track:first div,td.track:last div').css('background-color','transparent');if($ux.attr('parentURL'))
{var parentURL=$ux.attr('parentURL');var $parent_btn_fore=$('<li class="train-parent parent-fore"></li>');$parent_btn_fore.attr('target','_self');$parent_btn_fore.attr('url',DWPE_Utilities.makeJavascriptSafe(parentURL));$container.find('UL.dwpe-train LI:first').before($parent_btn_fore);$parent_btn_fore.mousedown(function(){DWPE_Utilities.loadURL(this);});var $parent_btn_aft=$('<li class="train-parent parent-aft"></li>');$parent_btn_aft.attr('target','_self');$parent_btn_aft.attr('url',DWPE_Utilities.makeJavascriptSafe(parentURL));$container.find('UL.dwpe-train LI:last').after($parent_btn_aft);$parent_btn_aft.mousedown(function(){DWPE_Utilities.loadURL(this);});}}
DWPE_PanelFactory_Class.trainButtonBarOnClick=function($ux,buttonType){if($ux.hasClass('disabled'))return;var i=$ux.data("current-train");switch(buttonType){case'train_button_next':i++;break;case'train_button_back':i--;break;default:break;}
if(i<0||i>=$ux.data('num-of-trains'))return;DWPE_PanelFactory_Class.showTrainPanel($ux,i);}
DWPE_PanelFactory_Class.showTrainPanel=function($ux,train_index)
{var current_train=$ux.data("current-train");if(train_index==current_train)return;var id=$ux.attr("id");var $new_train=$("#"+id+"-train-"+train_index);var $new_panel=$ux.find("#"+id+"-trainpanel-"+train_index);if((train_index>(current_train+1))&&!$ux.hasClass('non-sequential'))
{if(!$new_train.prev().hasClass('visited'))
{return;}}
if($new_train.hasClass('sequential-override'))
{$ux.addClass('non-sequential');$ux.find('LI.train-stop').removeClass('disabled');}
var $old_panel=$("#"+id+"-trainpanel-"+current_train);if($old_panel.length>0)
$old_panel.find(">IFRAME").hide();if($new_panel.length>0)
{$ux.data("current-train",train_index);$new_train.addClass('selected');$new_train.removeClass('disabled');$new_train.next().removeClass('disabled');$new_panel.show();$(window).trigger('');var content=$new_panel.attr('content');if(content&&$new_panel.find(">iframe").length==0)
{$new_panel.html("<iframe src='"+content+"' frameborder='0' allowtransparency='false'/>");}
$new_panel.find(">IFRAME").show();}
if(current_train!=null)
{$old_panel.hide();var $train=$("#"+id+"-train-"+current_train).removeClass('selected');$train.addClass('visited');$train.find('SPAN.close').remove();}
if($ux.hasClass('disabled'))
{$ux.find('UL.dwpe-train>LI').unbind('click');}}
DWPE_PanelFactory_Class.manageTrainOverflow=function($ux)
{DWPE_Window.closeWindowGroup("trainset-overflow");DWPE_PanelFactory_Class._manageTrainOverflow($ux,'train-container');}
DWPE_PanelFactory_Class._manageTrainOverflow=function($ux,position)
{var selected_train=$ux.data('current-train');var pH=$ux.parent().innerHeight();var pSH=$ux.parent().attr("scrollHeight");var scrollbar_width=(pSH>pH)?DWPE_Utilities.getScrollbarWidth():0;var pW=$ux.parent().width()-scrollbar_width;var size=$ux.data('size');if(size==null)return;if(size.indexOf('%')>-1)
{size=(parseInt(size)/100)*pW;}
else
{size=parseInt(size);}
$ux.width(size);var avail_size=$ux.find(">DIV.train-container."+position+">DIV.left").width();var $overflow_fore=$ux.find(">DIV.train-container."+position+" LI.fore").show();var $overflow_aft=$ux.find(">DIV.train-container."+position+" LI.aft").show();var overflown=false;var w=$overflow_fore.outerWidth(true);w+=$overflow_aft.outerWidth(true);if($ux.attr('parentURL'))
{var $parent_fore=$ux.find(">DIV.train-container."+position+" LI.parent-fore").show();var $parent_aft=$ux.find(">DIV.train-container."+position+" LI.parent-aft").show();w+=$parent_fore.outerWidth(true);w+=$parent_aft.outerWidth(true);}
var first_train=$ux.data("first-train");var last_train=$ux.data("last-train");var $trains=$ux.find(">DIV.train-container."+position+">DIV.left>UL.dwpe-train>LI.train-stop");var $last=null;$trains.hide();$trains.each(function(i)
{if(i>=first_train)
{var $train=$(this);$train.data('train-index',i);$train.removeClass('last');$train.show();w+=$train.outerWidth(true);if(w>avail_size)
{if(i!=selected_train)
{$train.hide();overflown=true;}}
else
{last_train=i;$last=$train;}}});$ux.data("first-train",first_train);$ux.data("last-train",last_train);if($last)$last.addClass('last');if(first_train>0)
$overflow_fore.show();else
$overflow_fore.hide();if(last_train<$trains.length-1)
$overflow_aft.show();else
$overflow_aft.hide();}
DWPE_PanelFactory_Class.handleTrainOverflowClick=function($ux,$overflow_btn)
{var type=($overflow_btn.hasClass('fore'))?"fore":"aft";var menu_id="trainset-overflow";var $menu=DWPE_Window.addWindow($overflow_btn,menu_id,"overflow-menu",menu_id);var $menu_body=$("#"+menu_id+"-body");var first_train=$ux.data("first-train");var last_train=$ux.data("last-train");$ux.find("UL.dwpe-train:first>LI.train-stop:hidden").each
(function()
{var $train=$(this);var train_index=$train.data("train-index");if(type=='fore'&&train_index>first_train)return;else if(type=='aft'&&train_index<last_train)return;var $c=$train.clone(true);$c.show();$c.css('display','block');$menu_body.append($c);$c.find("span.icons").remove();if($c.hasClass('disabled')==false)
{$c.click(function()
{$ux.data("first-train",$train.data('train-index'));DWPE_PanelFactory_Class.manageTrainOverflow($ux);});}});$overflow_btn.addClass("active");DWPE_Window_Class.anchorTo('tr,',$overflow_btn,$menu);$overflow_btn.bind("cleanup",function(e)
{$overflow_btn.removeClass('active');});};$(function(){DWPE_ObjectFactory.processPage();$(window).resize(function(){DWPE_Utilities.triggerComponentResize();});$('body').css('visibility','visible');});