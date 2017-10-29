<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html><head><title>Activity Tree Comparision</title>
<meta content="text/html; charset=windows-1252" http-equiv=Content-Type>
<script language=JavaScript>
// Automatically attach a listener to the window onload, to convert the trees
addEvent(window,"load",convertTrees);

// Utility function to add an event listener
function addEvent(o,e,f){
	if (o.addEventListener){ o.addEventListener(e,f,true); return true; }
	else if (o.attachEvent){ return o.attachEvent("on"+e,f); }
	else { return false; }
}

// utility function to set a global variable if it is not already set
function setDefault(name,val) {
	if (typeof(window[name])=="undefined" || window[name]==null) {
		window[name]=val;
	}
}

var addAction=false;

// Search the document for UL elements with the correct CLASS name, then process them
function convertTrees() {
	setDefault("treeClass1","mktree1");
	setDefault("treeClass","mktree");
	setDefault("nodeClosedClass","liClosed");
	setDefault("nodeOpenClass","liOpen");
	setDefault("nodeBulletClass","liBullet");
	setDefault("nodeNoBulletClass","noBullet");
	setDefault("nodeLinkClass","bullet");
	setDefault("preProcessTrees",true);
	if (preProcessTrees) {
		if (!document.createElement) { return; } // Without createElement, we can't do anything
		uls = document.getElementsByTagName("ul");
		for (var uli=0;uli<uls.length;uli++) {
			var ul=uls[uli];
			addAction=false;
			if (ul.nodeName=="UL" && (ul.className==treeClass || ul.className==treeClass1)) {
				if(ul.className==treeClass){
					addAction=true;
				}
				processList(ul);
			}
		}
	}
}

// Process a UL tag and all its children, to convert to a tree
function processList(ul) {
	if (!ul.childNodes || ul.childNodes.length==0) { return; }
	// Iterate LIs
	for (var itemi=0;itemi<ul.childNodes.length;itemi++) {
		var item = ul.childNodes[itemi];
		if (item.nodeName == "LI") {
			// Iterate things in this LI
			var subLists = false;
			for (var sitemi=0;sitemi<item.childNodes.length;sitemi++) {
				var sitem = item.childNodes[sitemi];
				if (sitem.nodeName=="UL") {
					subLists = true;
					processList(sitem);
				}
			}
			var s= document.createElement("SPAN");
			var t= '\u00A0'; // &nbsp;
			s.className = nodeLinkClass;
			if (subLists) {
				// This LI has UL's in it, so it's a +/- node
				//alert(item.childNodes[1].nodeName);
				if (item.className==null || item.className=="") {
					item.className = nodeClosedClass;
				}
				// If it's just text, make the text work as the link also
				if (item.firstChild.nodeName=="#text") {
					t = t+item.firstChild.nodeValue;
					item.removeChild(item.firstChild);
				}
				if(addAction){
					s.onclick = function () {
						this.parentNode.className = (this.parentNode.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;
						var id = this.parentNode.id.split("_");
						var tableId=1;
						if(id[2]==1)
							tableId=2;
						var ele = document.getElementById(id[0]+"_"+id[1]+"_"+tableId);
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						ele = document.getElementById(id[0]+"_"+id[1]+"_"+"3");
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						ele = document.getElementById(id[0]+"_"+id[1]+"_"+"4");
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						ele = document.getElementById(id[0]+"_"+id[1]+"_"+"5");
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						ele = document.getElementById(id[0]+"_"+id[1]+"_"+"6");
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						ele = document.getElementById(id[0]+"_"+id[1]+"_"+"7");
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						ele = document.getElementById(id[0]+"_"+id[1]+"_"+"8");
						ele.className = (ele.className==nodeOpenClass) ? nodeClosedClass : nodeOpenClass;

						return false;
					}
				}
			}
			else {
				// No sublists, so it's just a bullet node
				item.className = nodeBulletClass;
			}
			s.appendChild(document.createTextNode(t));
			
			item.insertBefore(s,item.firstChild);
		}
	}
}


///------------------------------------POP Up code -Girish--------------------------------------------------------------


var ns4=document.layers
var ie4=document.all
var ns6=document.getElementById&&!document.all

//drag drop function for NS 4////
/////////////////////////////////

var dragswitch=0
var nsx
var nsy
var nstemp

function drag_dropns(name){
if (!ns4)
return
temp=eval(name)
temp.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP)
temp.onmousedown=gons
temp.onmousemove=dragns
temp.onmouseup=stopns
}

function gons(e){
temp.captureEvents(Event.MOUSEMOVE)
nsx=e.x
nsy=e.y
}
function dragns(e){
if (dragswitch==1){
temp.moveBy(e.x-nsx,e.y-nsy)
return false
}
}

function stopns(){
temp.releaseEvents(Event.MOUSEMOVE)
}

//drag drop function for ie4+ and NS6////
/////////////////////////////////


function drag_drop(e){
if (ie4&&dragapproved){
crossobj.style.left=tempx+event.clientX-offsetx
crossobj.style.top=tempy+event.clientY-offsety
return false
}
else if (ns6&&dragapproved){
crossobj.style.left=tempx+e.clientX-offsetx+"px"
crossobj.style.top=tempy+e.clientY-offsety+"px"
return false
}
}

function initializedrag(e,divId){
//crossobj=ns6? document.getElementById(divId) : document.all.showimage
crossobj= document.getElementById(divId);
var firedobj=ns6? e.target : event.srcElement
var topelement=ns6? "html" : document.compatMode && document.compatMode!="BackCompat"? "documentElement" : "body"
while (firedobj.tagName!=topelement.toUpperCase() && firedobj.id!="dragbar"){
firedobj=ns6? firedobj.parentNode : firedobj.parentElement
}

if (firedobj.id=="dragbar"){
offsetx=ie4? event.clientX : e.clientX
offsety=ie4? event.clientY : e.clientY

tempx=parseInt(crossobj.style.left)
tempy=parseInt(crossobj.style.top)

dragapproved=true
document.onmousemove=drag_drop
}
}
document.onmouseup=new Function("dragapproved=false")

////drag drop functions end here//////

function hidebox(divId){
//crossobj=ns6? document.getElementById(divId) : document.all.showimage
crossobj= document.getElementById(divId);
if (ie4||ns6)
crossobj.style.visibility="hidden"
else if (ns4)
document.divId.visibility="hide"
}


function showDiv(obj,divId){
	
	setTableClass(divId);
	var x=getAbsolutePosition(obj).x;
	var y=getAbsolutePosition(obj).y;
	
	// Aligning the pop up in the center
	var winX = document.body.offsetWidth-20;
	var winY = document.body.offsetHeight-20;
	
	if(ns6){
		winX = window.innerWidth-16;
		winY = window.innerHeight-16;
	}
	x=winX/2-300;
	y=winY/2-150;

	//var divObj = document.getElementById(divId);
	var divObj = document.getElementById("PopUpDiv");
	divObj.style.visibility="visible";
	divObj.style.left=x;
	divObj.style.top=y;
	divObj = document.getElementById("PopUpDiv_1");
	divObj.innerHTML=divArr[divId];
}

function setTableClass(divId){
	var id= divId.split("_");

	var tableObj = document.getElementById("table_showdiv_"+id[1]+"_"+id[2]);
	if(tableObj){
		tableObj.className="table";
	}

	tableObj = document.getElementById("table_showdiv_secondTable_"+id[1]+"_"+id[2]);
	if(tableObj){
		tableObj.className="table";
	}
}

function hideDiv(divId){
	var divObj = document.getElementById(divId);
	divObj.style.visibility="hidden";
	
	
}


function getAbsolutePosition(element) {
    var r = { x: element.offsetLeft, y: element.offsetTop };
    if (element.offsetParent) {
      var tmp = getAbsolutePosition(element.offsetParent);
      r.x += tmp.x;
      r.y += tmp.y;
    }
    return r;
  };


function findPosX(obj)
  {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
  }

  function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
  }

function getPos(inputElement) {
    var coords =  new Object();
    coords.x = 0;
    coords.y = 0;
    try {
        targetElement = inputElement;
        if(targetElement.x && targetElement.y) {
            coords.x = targetElement.x;
            coords.y = targetElement.y;
        } else {
            if(targetElement.offsetParent) {
                coords.x += targetElement.offsetLeft;
                coords.y += targetElement.offsetTop;
                while(targetElement = targetElement.offsetParent) {
                    coords.x += targetElement.offsetLeft;
                    coords.y += targetElement.offsetTop;
                }
				
            } else {
                //alert(\"Could not find any reference for coordinate positioning.\");
            }
        }
        return coords;
    } catch(error) {
        //alert(error.msg);
        return coords;
    }
}
	

</script>

<style type=text/css>
@media Print, Screen    
{
UL.mktree LI {
	LIST-STYLE-TYPE: none
}
UL.mktree {
	PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; margin: 5px;
}
UL.mktree UL {
	PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN-LEFT: 10px; PADDING-TOP: 0px
}
UL.mktree LI {
	PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN-LEFT: 10px; PADDING-TOP: 0px
}
UL.mktree LI .bullet {
	PADDING-LEFT: 15px
}
UL.mktree LI.liOpen .bullet {
	BACKGROUND: url(http://localhost/global/images/ux_palette/palette_collapse.png) no-repeat left center; CURSOR: pointer; HEIGHT: 15pt
}
UL.mktree LI.liClosed .bullet {
	BACKGROUND: url(http://localhost/global/images/ux_palette/palette_expand.png) no-repeat left center; CURSOR: pointer; HEIGHT: 15pt
}
UL.mktree LI.liBullet .bullet {
	BACKGROUND: url(file:///C:/Documents%20and%20Settings/hkatla/.GanttChart/localhost/8888/images/bullet.gif) no-repeat left center; CURSOR: default; HEIGHT: 15pt
}
UL.mktree LI.liOpen UL {
	DISPLAY: block;
	margin-top: 5px;
}
UL.mktree LI.liClosed UL {
	DISPLAY: none
}
UL.mktree LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
UL.mktree LI UL LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF;
	margin-bottom: 5px;
}
UL.mktree LI UL LI UL LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
UL.mktree LI UL LI UL LI UL LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
UL.mktree1 LI {
	LIST-STYLE-TYPE: none
}
UL.mktree1 {
	PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN-LEFT: 0px; PADDING-TOP: 0px
}
UL.mktree1 UL {
	PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN-LEFT: 0px; PADDING-TOP: 0px
}
UL.mktree1 LI {
	PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN-LEFT: 0px; PADDING-TOP: 0px
}
UL.mktree1 LI .bullet {
	PADDING-LEFT: 0px
}
UL.mktree1 LI.liOpen .bullet {
	HEIGHT: 15pt
}
UL.mktree1 LI.liClosed .bullet {
	HEIGHT: 15pt
}
UL.mktree1 LI.liBullet .bullet {
	HEIGHT: 15pt
}
UL.mktree1 LI.noBullet .bullet {
	HEIGHT: 15pt
}
UL.mktree1 LI.liOpen UL {
	DISPLAY: block
}
UL.mktree1 LI.liClosed UL {
	DISPLAY: none
}
UL.mktree1 LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
UL.mktree1 LI UL LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
UL.mktree1 LI UL LI UL LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
UL.mktree1 LI UL LI UL LI UL LI {
	FONT-SIZE: 12px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, Verdana, sans-serif, MSPGothic, PMingLiU, UWKMJF
}
    }
.handCursor {
	cursor:pointer;
}

.obj_modified 
{
	font-style:italic;
	font-weight: bold;
	color: red !important;
}
.obj_removed
{
	text-decoration:line-through;
}
.obj_added
{
	font-weight: bold;
	color: red !important;
}
.table {
	BORDER-COLLAPSE: collapse;
	width: 100%;
}
.trd {
	BORDER-RIGHT: #999 1px solid; FONT-SIZE: 11px; BORDER-TOP: #999 1px solid; BORDER-LEFT: #999 1px solid; COLOR: #333333; BORDER-BOTTOM: #999 1px solid; FONT-FAMILY: Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
	vertical-align: top;
}
.label {
	FONT-WEIGHT: normal; FONT-SIZE: 11px; VERTICAL-ALIGN: top; COLOR: #666666; TEXT-ALIGN: right
}
.data {
	FONT-SIZE: 11px; VERTICAL-ALIGN: top; COLOR: #333333; FONT-FAMILY: Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF; TEXT-ALIGN: center
}
.labelbold {
	FONT-WEIGHT: bold; FONT-SIZE: 11px; VERTICAL-ALIGN: top; COLOR: #666666
}
.labelheader {
	FONT-WEIGHT: bold; FONT-SIZE: 14px; COLOR: #666666; FONT-STYLE: italic; FONT-FAMILY: Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF; TEXT-ALIGN: left; TEXT-DECORATION: underline
}
.labeltitle {
	FONT-WEIGHT: bold; FONT-SIZE: 18px; COLOR: #666666; FONT-STYLE: italic; FONT-FAMILY: Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF; TEXT-ALIGN: left; TEXT-DECORATION: underline
}
th { background-color: #f5f5f5; vertical-align:middle !important;}
li img { margin-right: 5px; }

th.th_breaker,
td.td_breaker

{
	background-color: transparent;
	border-top:1px solid #fff !important;
	border-bottom:1px solid #fff !important;
}

span.redlined {
	color: #f00;
	font-weight: normal;
	text-decoration: line-through;
}
span.redlined span {
	color: #333;
	font-weight: normal;
	text-decoration:
}
</style>

<meta name=GENERATOR content="MSHTML 6.00.6001.17509"></head>
<body alink=#00615f link=#00615f bgcolor=#ffffff vlink=#00615f>
<h2>Tree Compare<br />
Work in Progress<br />
-Anthony</h2>

<table class="table">
	<thead>
		<tr>
			<th class=trd>Server</th>
			<th class="th_breaker" width="2%">&nbsp;</th>
			<th class=trd>Gantt</th>
			<th class="trd" style="width:22px;">
				<img src="global/images/ico_view_gantt.png" />
			</th>
			<!--
			<th class=trd width="4%">Res</th>
			<th class=trd width="4%">Dep</th>
			-->
			<th class="trd"  style="width:22px;">
				<img src="global/images/ico_assign_task.png" />
			</th>
			<th class="trd" style="width:22px;">
				<img src="global/images/ico_status_attributes.png" />
			</th>
			<!--
			<th class=trd width="4%">P2</th>
			<th class=trd width="4%">P3</th>
			-->
		</tr>
	</thead>
  <tbody>
  <tr class=trd>
    <td class=trd>
      <ul id=tree_1 class=mktree>
        <li id=921_100_1 class=liOpen><img src="http://localhost/global/images/icn_obj_phase.png" align="texttop"><label id=label_921_1 
        class=handCursor onClick="showDiv(this,'showdiv_921_1')">Test 
        Program</label>
        		<ul>
          <li id=923_101_1><img src="http://localhost/global/images/icn_obj_task.png"><label id=label_923_1 class="handCursor" 
          onclick="showDiv(this,'showdiv_923_1')">Task1</label>
          
           
          <li id=1321_102_1><img 
          src="http://localhost/global/images/icn_obj_task.png"  align="texttop"><label 
          id=label_1321_1 class=handCursor 
          onclick="showDiv(this,'showdiv_1321_1')">Task2</label>
		  <li> </li>
           
          <!--
		  <li id=333><img 
          src="http://localhost/global/images/icn_obj_gate.png" align="texttop"><label id=label_923_1x class=handCursor 
          onclick="showDiv(this,'showdiv_923_1')">Task3</label>
          -->
           </li></ul></li></ul></td>
	<td class="td_breaker"></td>
    <td class=trd>
      <ul id=tree_2 class=mktree>
        <li id=921_100_2 class=liOpen><img 
        src="http://localhost/global/images/icn_obj_phase.png"  align="texttop"><label 
        id=label_921_2 class="handCursor obj_modified"
        onclick="showDiv(this,'showdiv_921_2')">Test Program</label>
        		<ul>
          <li id=923_101_2>
		  	<img src="http://localhost/global/images/icn_obj_task.png">
			<label id=label_1321_2 class="handCursor modified"><span>Task1</span></label>
          </li>
           
          <li id=1321_102_2>
				<img src="http://localhost/global/images/icn_obj_task.png" align="texttop">
			  	<label><span class="redlined"><span>Task22</span></span></label>
          </li>
           
          <li id=-10009_103_2>
		  	<img src="http://localhost/global/images/icn_obj_task.png" align="texttop">
			<label class="handCursor obj_added">Task3</label>
          </li>
		  </ul></li></ul></td>
    <td class=trd width="4%" align=middle>
      <ul id=tree_3 class=mktree1>
        <li id=921_100_3 class=liOpen><img style="VISIBILITY: hidden" 
        id=img_921_3 class=handCursor onClick="showDiv(this,'showdiv_921_3')" 
        src="http://localhost/global/images/icn_status_dot_gray.png">
        
         
        <ul>
          <li id=923_101_3><img style="VISIBILITY: hidden" id=img_923_3 
          class=handCursor onClick="showDiv(this,'showdiv_923_3')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=1321_102_3><img style="VISIBILITY: hidden" id=img_1321_3 
          class=handCursor onClick="showDiv(this,'showdiv_1321_3')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=-10009_103_3><img style="VISIBILITY: hidden" id=img_-10009_3 
          class=handCursor onClick="showDiv(this,'showdiv_-10009_3')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           </li></ul></li></ul></td>
    <!--
	<td class=trd width="4%" align=middle>
      <ul id=tree_4 class=mktree1>
        <li id=921_100_4 class=liOpen><img style="VISIBILITY: hidden" 
        id=img_921_4 class=handCursor onClick="showDiv(this,'showdiv_921_4')" 
        src="http://localhost/global/images/icn_status_dot_gray.png">
        
         
        <ul>
          <li id=923_101_4><img style="VISIBILITY: hidden" id=img_923_4 
          class=handCursor onClick="showDiv(this,'showdiv_923_4')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=1321_102_4><img style="VISIBILITY: hidden" id=img_1321_4 
          class=handCursor onClick="showDiv(this,'showdiv_1321_4')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=-10009_103_4><img style="VISIBILITY: hidden" id=img_-10009_4 
          class=handCursor onClick="showDiv(this,'showdiv_-10009_4')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           </li></ul></li></ul></td>
    <td class=trd width="4%" align=middle>
      <ul id=tree_5 class=mktree1>
        <li id=921_100_5 class=liOpen><img style="VISIBILITY: hidden" 
        id=img_921_5 class=handCursor onClick="showDiv(this,'showdiv_921_5')" 
        src="http://localhost/global/images/icn_status_dot_gray.png">
        
         
        <ul>
          <li id=923_101_5><img style="VISIBILITY: hidden" id=img_923_5 
          class=handCursor onClick="showDiv(this,'showdiv_923_5')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=1321_102_5><img style="VISIBILITY: hidden" id=img_1321_5 
          class=handCursor onClick="showDiv(this,'showdiv_1321_5')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=-10009_103_5><img style="VISIBILITY: hidden" id=img_-10009_5 
          class=handCursor onClick="showDiv(this,'showdiv_-10009_5')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           </li></ul></li></ul></td>
	-->

    <td class=trd width="4%" align=middle>
      <ul id=tree_6 class=mktree1>
        <li id=921_100_6 class=liOpen><img style="VISIBILITY: hidden" 
        id=img_921_6 class=handCursor onClick="showDiv(this,'showdiv_921_6')" 
        src="http://localhost/global/images/icn_status_dot_gray.png">
        
         
        <ul>
          <li id=923_101_6><img style="VISIBILITY: hidden" id=img_923_6 
          class=handCursor onClick="showDiv(this,'showdiv_923_6')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=1321_102_6><img style="VISIBILITY: hidden" id=img_1321_6 
          class=handCursor onClick="showDiv(this,'showdiv_1321_6')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=-10009_103_6><img style="VISIBILITY: hidden" id=img_-10009_6 
          class=handCursor onClick="showDiv(this,'showdiv_-10009_6')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           </li></ul></li></ul></td>
    <!--
	<td class=trd width="4%" align=middle>
      <ul id=tree_7 class=mktree1>
        <li id=921_100_7 class=liOpen><img style="VISIBILITY: hidden" 
        id=img_921_7 class=handCursor onClick="showDiv(this,'showdiv_921_7')" 
        src="http://localhost/global/images/icn_status_dot_gray.png">
        
         
        <ul>
          <li id=923_101_7><img style="VISIBILITY: hidden" id=img_923_7 
          class=handCursor onClick="showDiv(this,'showdiv_923_7')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=1321_102_7><img style="VISIBILITY: hidden" id=img_1321_7 
          class=handCursor onClick="showDiv(this,'showdiv_1321_7')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=-10009_103_7><img style="VISIBILITY: hidden" id=img_-10009_7 
          class=handCursor onClick="showDiv(this,'showdiv_-10009_7')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           </li></ul></li></ul></td>
   	-->	
     <td class=trd width="4%" align=middle>
      <ul id=tree_8 class=mktree1>
        <li id=921_100_8 class=liOpen><img style="VISIBILITY: hidden" 
        id=img_921_8 class=handCursor onClick="showDiv(this,'showdiv_921_8')" 
        src="http://localhost/global/images/icn_status_dot_gray.png">
        
         
        <ul>
          <li id=923_101_8><img style="VISIBILITY: hidden" id=img_923_8 
          class=handCursor onClick="showDiv(this,'showdiv_923_8')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=1321_102_8><img style="VISIBILITY: hidden" id=img_1321_8 
          class=handCursor onClick="showDiv(this,'showdiv_1321_8')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           
          <li id=-10009_103_8><img style="VISIBILITY: hidden" id=img_-10009_8 
          class=handCursor onClick="showDiv(this,'showdiv_-10009_8')" 
          src="http://localhost/global/images/icn_status_dot_gray.png">
          
           </li></ul></li></ul></td>
   
	</tr></tbody></table><br>
           &nbsp; &nbsp; 
			<p><LABLE class=data><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LABLE 
class=data>
		<script>var ele;
 ele = document.getElementById("label_-10009_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_923_1");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_921_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_921_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_1321_2");
if(ele){
ele.style.color="red";
}
 ele = document.getElementById("label_921_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_921_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_1321_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_921_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_921_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("label_1321_2");
if(ele){
ele.style.color="333";
}
 ele = document.getElementById("img_921_1");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_921_1");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_1321_1");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_921_2");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_921_2");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_1321_2");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_921_3");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_921_6");
if(ele){
ele.style.visibility="visible";
}
 ele = document.getElementById("img_1321_6");
if(ele){
ele.style.visibility="visible";
}
</script>
</p>
<div style="VISIBILITY: hidden; POSITION: absolute; OVERFLOW: visible" 
id=PopUpDiv visible="false">
<table border=0 cellspacing=0 cellpadding=2 width=600 bgcolor=#000080>
  <tbody>
  <tr>
    <td width="100%">
      <table border=0 cellspacing=0 cellpadding=0 width="100%" height=36>
        <tbody>
        <tr>
          <td style="CURSOR: pointer" id=dragbar 
          onmousedown="initializedrag(event,'PopUpDiv')" width="100%"><ILAYER 
            onselectstart="return false" width="100%"><LAYER 
            onmouseover="dragswitch=1;if (ns4) drag_dropns(PopUpDiv)" 
            onmouseout=dragswitch=0 width="100%"><font color=#ffffff 
            face=Verdana><strong><small></small></strong></font></LAYER></ILAYER></td>
          <td style="CURSOR: hand"><a 
            onclick="hidebox('PopUpDiv');return false" 
            href="file:///C:/Documents%20and%20Settings/hkatla/Local%20Settings/Temp/CompareDefaultDocument.html#"><img 
            border=0 src="Activity%20Tree%20Comparision_files/closeActivity%20Tree%20Comparision_files/greyIcon.gif" 
            width=16 height=14></a></td></tr>
        <tr>
          <td bgcolor=#ffffff width="100%" colspan=2 align=middle>
            <div style="OVERFLOW: auto; WIDTH: 100%; HEIGHT: 300px" 
            id=PopUpDiv_1></div></td></tr></tbody></table></td></tr></tbody></table></div>
<script>var divArr= new Array();divArr["showdiv_921_1"]='<p class="labeltitle obj_modified">Test Program</p><table  width="100%" border="0"><tr><td><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Delegated Owner :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" style="color:orange">12</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Schedule End Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Lock Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Lock User :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Actual Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" ></td></tr><tr><td class="label">Actual End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" >12</td><td class="data"  >12</td></tr><tr><td class="label">Percent Complete :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Template :</td><td class="data" >Active</td><td class="data"  >Active</td></tr><tr><td class="label">Parent :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name :</td><td class="data" >Test Program</td><td class="data"  >Test Program</td></tr><tr><td class="label">Number :</td><td class="data" >PGM00001</td><td class="data"  >PGM00001</td></tr><tr><td class="label">Activities Type :</td><td class="data" >Program</td><td class="data"  >Program</td></tr><tr><td class="label">Status :</td><td class="data" >In Process</td><td class="data"  >In Process</td></tr><tr><td class="label">Owner :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Description :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" >Act_Res_Type_0</td><td class="data"  >Act_Res_Type_0</td></tr><tr><td class="label">Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Root Parent :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Audit Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weight :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weighted Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Archived :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Workflow :</td><td class="data" >Default Activities</td><td class="data"  >Default Activities</td></tr><tr><td class="label">Schedule Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">StatusType :</td><td class="data" >Review</td><td class="data"  >Review</td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Cost Status :</td><td class="data" >On Budget</td><td class="data"  >On Budget</td></tr><tr><td class="label">Resource Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status Reason :</td><td class="data" >Children are On Track</td><td class="data"  >Children are On Track</td></tr><tr><td class="label">Cost Status Reason :</td><td class="data" >Children are On Budget</td><td class="data"  >Children are On Budget</td></tr><tr><td class="label">Resource Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" >Calculated</td><td class="data"  >Calculated</td></tr><tr><td class="label">Days Effort :</td><td class="data" style="color:orange">7</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" >08/06/2008</td></tr><tr><td class="label">Estimated End Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Estimated Duration :</td><td class="data" >12</td><td class="data"  >12</td></tr><tr><td class="label">Estimated Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Status Information :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">Program Type :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Region :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Division :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Product Line :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Customer :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Launch Year :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Controlled :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" style="color:orange">7</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Category 7 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 8 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 9 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 10 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" >PPM</td><td class="data"  >PPM</td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Critical :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Resources Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Locked from Program :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Assigned Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Deliverable Errors :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name/Number/Desc :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Created From Template :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Heading01 :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td></td></tr><tr><td><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange">08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" >08/06/2008</td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" style="color:orange">12</td><td class="data" style="color:orange">1</td></tr></table></td></tr><tr><td><p class="labelheader">Res</p><table id="table_showdiv_921_1" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd" >Administrator, Administrator (admin)</td><td class="trd" >&nbsp;</td><td class="trd">Program Manager</td><td class="trd">50</td><td class="trd">No</td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">50</td><td class="trd">No</td></tr></table></td></tr></table>';divArr["showdiv_923_1"]='<p class="labeltitle">Task1</p><table  width="100%" border="0"><tr><td><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Delegated Owner :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Start Date :</td><td class="data" >07/22/2008</td><td class="data"  ></td></tr><tr><td class="label">Schedule Duration :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Schedule End Date :</td><td class="data" >07/22/2008</td><td class="data"  ></td></tr><tr><td class="label">Lock Status :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Lock User :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  ></td></tr><tr><td class="label">Actual Start Date :</td><td class="data" >07/22/2008</td><td class="data"  ></td></tr><tr><td class="label">Actual End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Percent Complete :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Template :</td><td class="data" >Active</td><td class="data"  ></td></tr><tr><td class="label">Parent :</td><td class="data" >Test Program</td><td class="data"  ></td></tr><tr><td class="label">Name :</td><td class="data" >Task1</td><td class="data"  ></td></tr><tr><td class="label">Number :</td><td class="data" >T00052</td><td class="data"  ></td></tr><tr><td class="label">Activities Type :</td><td class="data" >Task</td><td class="data"  ></td></tr><tr><td class="label">Status :</td><td class="data" >In Process</td><td class="data"  ></td></tr><tr><td class="label">Owner :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  ></td></tr><tr><td class="label">Description :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" >Act_Res_Type_0</td><td class="data"  ></td></tr><tr><td class="label">Variance :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Root Parent :</td><td class="data" >Test Program</td><td class="data"  ></td></tr><tr><td class="label">Audit Score :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Weight :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Weighted Score :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Archived :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Workflow :</td><td class="data" >Default Activities</td><td class="data"  ></td></tr><tr><td class="label">Schedule Status :</td><td class="data" >On Track</td><td class="data"  ></td></tr><tr><td class="label">StatusType :</td><td class="data" >Review</td><td class="data"  ></td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Cost Status :</td><td class="data" >On Budget</td><td class="data"  ></td></tr><tr><td class="label">Resource Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Cost Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" >Fixed</td><td class="data"  ></td></tr><tr><td class="label">Days Effort :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Variance :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Status Information :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" >On Track</td><td class="data"  ></td></tr><tr><td class="label">Program Type :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Region :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Division :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Product Line :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Customer :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Launch Year :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Controlled :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Category 7 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 8 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 9 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 10 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" >PPM</td><td class="data"  ></td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Critical :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Resources Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Locked from Program :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Assigned Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Deliverable Errors :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name/Number/Desc :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Created From Template :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Heading01 :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td></td></tr><tr><td><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" >07/22/2008</td><td class="data" ></td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" >07/22/2008</td><td class="data" ></td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" >1</td><td class="data" ></td></tr></table></td></tr><tr><td><p class="labelheader">Res</p><table id="table_showdiv_923_1" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">50</td><td class="trd">No</td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td></tr></table></td></tr></table>';divArr["showdiv_1321_1"]='<p class="labeltitle">Task2</p><table  width="100%" border="0"><tr><td><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Delegated Owner :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Start Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" >1</td><td class="data"  >1</td></tr><tr><td class="label">Schedule End Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Lock Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Lock User :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Actual Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Percent Complete :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Template :</td><td class="data" >Active</td><td class="data"  >Active</td></tr><tr><td class="label">Parent :</td><td class="data" >Test Program</td><td class="data"  >Test Program</td></tr><tr><td class="label">Name :</td><td class="data" style="color:orange">Task2</td><td class="data" style="color:orange" >Task22</td></tr><tr><td class="label">Number :</td><td class="data" >T00053</td><td class="data"  >T00053</td></tr><tr><td class="label">Activities Type :</td><td class="data" >Task</td><td class="data"  >Task</td></tr><tr><td class="label">Status :</td><td class="data" >Not Started</td><td class="data"  >Not Started</td></tr><tr><td class="label">Owner :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Description :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" >Act_Res_Type_0</td><td class="data"  >Act_Res_Type_0</td></tr><tr><td class="label">Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Root Parent :</td><td class="data" >Test Program</td><td class="data"  >Test Program</td></tr><tr><td class="label">Audit Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weight :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weighted Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Archived :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Workflow :</td><td class="data" >Default Activities</td><td class="data"  >Default Activities</td></tr><tr><td class="label">Schedule Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">StatusType :</td><td class="data" >Pending</td><td class="data"  >Pending</td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Cost Status :</td><td class="data" >On Budget</td><td class="data"  >On Budget</td></tr><tr><td class="label">Resource Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Cost Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" >Fixed</td><td class="data"  >Fixed</td></tr><tr><td class="label">Days Effort :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Status Information :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">Program Type :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Region :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Division :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Product Line :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Customer :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Launch Year :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Controlled :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Category 7 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 8 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 9 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 10 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" >PPM</td><td class="data"  >PPM</td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Critical :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Resources Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Locked from Program :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Assigned Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Deliverable Errors :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name/Number/Desc :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Created From Template :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Heading01 :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td></td></tr><tr><td><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" >08/06/2008</td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" >08/06/2008</td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" >1</td><td class="data" >1</td></tr></table></td></tr><tr><td><p class="labelheader">Res</p><table id="table_showdiv_1321_1" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd" >Administrator, Administrator (admin)</td><td class="trd" >&nbsp;</td><td class="trd">Program Manager</td><td class="trd">0</td><td class="trd">No</td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">0</td><td class="trd">No</td></tr></table></td></tr></table>';divArr["showdiv_921_2"]='<p class="labeltitle">Test Program</p><table  width="100%" border="0"><tr><td><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Delegated Owner :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" style="color:orange">12</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Schedule End Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Lock Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Lock User :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Actual Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" ></td></tr><tr><td class="label">Actual End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" >12</td><td class="data"  >12</td></tr><tr><td class="label">Percent Complete :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Template :</td><td class="data" >Active</td><td class="data"  >Active</td></tr><tr><td class="label">Parent :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name :</td><td class="data" >Test Program</td><td class="data"  >Test Program</td></tr><tr><td class="label">Number :</td><td class="data" >PGM00001</td><td class="data"  >PGM00001</td></tr><tr><td class="label">Activities Type :</td><td class="data" >Program</td><td class="data"  >Program</td></tr><tr><td class="label">Status :</td><td class="data" >In Process</td><td class="data"  >In Process</td></tr><tr><td class="label">Owner :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Description :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" >Act_Res_Type_0</td><td class="data"  >Act_Res_Type_0</td></tr><tr><td class="label">Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Root Parent :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Audit Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weight :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weighted Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Archived :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Workflow :</td><td class="data" >Default Activities</td><td class="data"  >Default Activities</td></tr><tr><td class="label">Schedule Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">StatusType :</td><td class="data" >Review</td><td class="data"  >Review</td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Cost Status :</td><td class="data" >On Budget</td><td class="data"  >On Budget</td></tr><tr><td class="label">Resource Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status Reason :</td><td class="data" >Children are On Track</td><td class="data"  >Children are On Track</td></tr><tr><td class="label">Cost Status Reason :</td><td class="data" >Children are On Budget</td><td class="data"  >Children are On Budget</td></tr><tr><td class="label">Resource Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" >Calculated</td><td class="data"  >Calculated</td></tr><tr><td class="label">Days Effort :</td><td class="data" style="color:orange">7</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" >08/06/2008</td></tr><tr><td class="label">Estimated End Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Estimated Duration :</td><td class="data" >12</td><td class="data"  >12</td></tr><tr><td class="label">Estimated Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Status Information :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">Program Type :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Region :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Division :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Product Line :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Customer :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Launch Year :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Controlled :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" style="color:orange">7</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Category 7 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 8 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 9 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 10 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" >PPM</td><td class="data"  >PPM</td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Critical :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Resources Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Locked from Program :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Assigned Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Deliverable Errors :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name/Number/Desc :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Created From Template :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Heading01 :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td></td></tr><tr><td><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange">08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" >08/06/2008</td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" style="color:orange">12</td><td class="data" style="color:orange">1</td></tr></table></td></tr><tr><td><p class="labelheader">Res</p><table id="table_showdiv_921_2" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd" >Administrator, Administrator (admin)</td><td class="trd" >&nbsp;</td><td class="trd">Program Manager</td><td class="trd">50</td><td class="trd">No</td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">50</td><td class="trd">No</td></tr></table></td></tr></table>';divArr["showdiv_1321_2"]='<p class="labeltitle">Task2</p><table  width="100%" border="0"><tr><td><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Delegated Owner :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Start Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" >1</td><td class="data"  >1</td></tr><tr><td class="label">Schedule End Date :</td><td class="data" >08/06/2008</td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Lock Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Lock User :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Actual Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Percent Complete :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Template :</td><td class="data" >Active</td><td class="data"  >Active</td></tr><tr><td class="label">Parent :</td><td class="data" >Test Program</td><td class="data"  >Test Program</td></tr><tr><td class="label">Name :</td><td class="data" style="color:orange">Task2</td><td class="data" style="color:orange" >Task22</td></tr><tr><td class="label">Number :</td><td class="data" >T00053</td><td class="data"  >T00053</td></tr><tr><td class="label">Activities Type :</td><td class="data" >Task</td><td class="data"  >Task</td></tr><tr><td class="label">Status :</td><td class="data" >Not Started</td><td class="data"  >Not Started</td></tr><tr><td class="label">Owner :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Description :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" >Act_Res_Type_0</td><td class="data"  >Act_Res_Type_0</td></tr><tr><td class="label">Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Root Parent :</td><td class="data" >Test Program</td><td class="data"  >Test Program</td></tr><tr><td class="label">Audit Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weight :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Weighted Score :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Archived :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Workflow :</td><td class="data" >Default Activities</td><td class="data"  >Default Activities</td></tr><tr><td class="label">Schedule Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">StatusType :</td><td class="data" >Pending</td><td class="data"  >Pending</td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Cost Status :</td><td class="data" >On Budget</td><td class="data"  >On Budget</td></tr><tr><td class="label">Resource Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Cost Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" >Fixed</td><td class="data"  >Fixed</td></tr><tr><td class="label">Days Effort :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Variance :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Status Information :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" >On Track</td><td class="data"  >On Track</td></tr><tr><td class="label">Program Type :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Region :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Division :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Product Line :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Customer :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Launch Year :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Controlled :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Category 7 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 8 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 9 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 10 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" >PPM</td><td class="data"  >PPM</td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" >Yes</td><td class="data"  >Yes</td></tr><tr><td class="label">Critical :</td><td class="data" >No</td><td class="data"  >No</td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Resources Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Locked from Program :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  >0</td></tr><tr><td class="label">Assigned Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Deliverable Errors :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name/Number/Desc :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Created From Template :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Heading01 :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td></td></tr><tr><td><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" >08/06/2008</td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" >08/06/2008</td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" >1</td><td class="data" >1</td></tr></table></td></tr><tr><td><p class="labelheader">Res</p><table id="table_showdiv_1321_2" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd" >Administrator, Administrator (admin)</td><td class="trd" >&nbsp;</td><td class="trd">Program Manager</td><td class="trd">0</td><td class="trd">No</td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">0</td><td class="trd">No</td></tr></table></td></tr></table>';divArr["showdiv_-10009_2"]='<p class="labeltitle">Task3</p><table  width="100%" border="0"><tr><td><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Delegated Owner :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Start Date :</td><td class="data" ></td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" ></td><td class="data"  >1</td></tr><tr><td class="label">Schedule End Date :</td><td class="data" ></td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Lock Status :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Lock User :</td><td class="data" ></td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Actual Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Percent Complete :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Template :</td><td class="data" ></td><td class="data"  >Active</td></tr><tr><td class="label">Parent :</td><td class="data" ></td><td class="data"  >Test Program</td></tr><tr><td class="label">Name :</td><td class="data" ></td><td class="data"  >Task3</td></tr><tr><td class="label">Number :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Activities Type :</td><td class="data" ></td><td class="data"  >Task</td></tr><tr><td class="label">Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Owner :</td><td class="data" ></td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Description :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" ></td><td class="data"  >Act_Res_Type_0</td></tr><tr><td class="label">Variance :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Root Parent :</td><td class="data" ></td><td class="data"  >Test Program</td></tr><tr><td class="label">Audit Score :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Weight :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Weighted Score :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Archived :</td><td class="data" ></td><td class="data"  >No</td></tr><tr><td class="label">Workflow :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">StatusType :</td><td class="data" ></td><td class="data"  >Pending</td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Cost Status :</td><td class="data" ></td><td class="data"  >On Budget</td></tr><tr><td class="label">Resource Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Cost Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Resource Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Quality Status Reason :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" ></td><td class="data"  >Fixed</td></tr><tr><td class="label">Days Effort :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated End Date :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Variance :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Status Information :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" ></td><td class="data"  >On Track</td></tr><tr><td class="label">Program Type :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Region :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Division :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Product Line :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Customer :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Launch Year :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" ></td><td class="data"  >No</td></tr><tr><td class="label">Controlled :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Category 7 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 8 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 9 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Category 10 :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" ></td><td class="data"  >PPM</td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Critical :</td><td class="data" ></td><td class="data"  >No</td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Resources Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Locked from Program :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Assigned Tasks Data :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Deliverable Errors :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Name/Number/Desc :</td><td class="data" ></td><td class="data"  ></td></tr><tr><td class="label">Created From Template :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Heading01 :</td><td class="data" ></td><td class="data"  ></td></tr></table></td></tr><tr><td></td></tr><tr><td><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" ></td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" ></td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" ></td><td class="data" >1</td></tr></table></td></tr><tr><td><p class="labelheader">Res</p><table id="table_showdiv_-10009_2" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">0</td><td class="trd">No</td></tr></table></td></tr></table>';divArr["showdiv_921_3"]='<p class="labeltitle">Test Program</p><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange">08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" style="color:orange">12</td><td class="data" style="color:orange">1</td></tr></table>';divArr["showdiv_923_3"]='<p class="labeltitle">Task1</p><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" >07/22/2008</td><td class="data" ></td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" >07/22/2008</td><td class="data" ></td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" >1</td><td class="data" ></td></tr></table>';divArr["showdiv_1321_3"]='<p class="labeltitle">Task2</p><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr></table>';divArr["showdiv_-10009_3"]='<p class="labeltitle">Task3</p><p class="labelheader">Sch</p><table  width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label" align="right" nowrap>Schedule Start Date:</td><td class="data" ></td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule End Date:</td><td class="data" ></td><td class="data" >08/06/2008</td></tr><tr><td class="label" align="right" nowrap>Schedule Duration:</td><td class="data" ></td><td class="data" >1</td></tr></table>';divArr["showdiv_921_4"]='<p class="labeltitle">Test Program</p><p class="labelheader">Res</p><table id="table_showdiv_921_4" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr></table>';divArr["showdiv_923_4"]='<p class="labeltitle">Task1</p><p class="labelheader">Res</p><table id="table_showdiv_923_4" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">50</td><td class="trd">No</td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td></tr></table>';divArr["showdiv_1321_4"]='<p class="labeltitle">Task2</p><p class="labelheader">Res</p><table id="table_showdiv_1321_4" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr></table>';divArr["showdiv_-10009_4"]='<p class="labeltitle">Task3</p><p class="labelheader">Res</p><table id="table_showdiv_-10009_4" class="table" width="100%"><tr class="trd"><th align="center" class="trd"></th><th nowrap class="trd">Name</th><th nowrap class="trd">Assigned From</th><th nowrap class="trd">Roles</th><th nowrap class="trd">% Allocation</th><th nowrap class="trd">Rejected Flag</th></tr><tr class="trd" ><td class="trd">Server</td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td><td class="trd"></td></tr><tr class="trd" ><td class="trd">Gantt</td><td class="trd">Administrator, Administrator (admin)</td><td class="trd">&nbsp;</td><td class="trd">Program Manager</td><td class="trd">0</td><td class="trd">No</td></tr></table>';divArr["showdiv_921_5"]='<p class="labeltitle">Test Program</p>';divArr["showdiv_923_5"]='<p class="labeltitle">Task1</p>';divArr["showdiv_1321_5"]='<p class="labeltitle">Task2</p>';divArr["showdiv_-10009_5"]='<p class="labeltitle">Task3</p>';divArr["showdiv_921_6"]='<p class="labeltitle">Test Program</p><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Schedule Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" style="color:orange">12</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Actual Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" ></td></tr><tr><td class="label">Days Effort :</td><td class="data" style="color:orange">7</td><td class="data" style="color:orange" >1</td></tr><tr><td class="label">Estimated Start Date :</td><td class="data" style="color:orange">07/22/2008</td><td class="data" style="color:orange" >08/06/2008</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" style="color:orange">7</td><td class="data" style="color:orange" >1</td></tr></table>';divArr["showdiv_923_6"]='<p class="labeltitle">Task1</p><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Schedule Start Date :</td><td class="data" >07/22/2008</td><td class="data"  ></td></tr><tr><td class="label">Schedule Duration :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Schedule End Date :</td><td class="data" >07/22/2008</td><td class="data"  ></td></tr><tr><td class="label">Lock Status :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Lock User :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  ></td></tr><tr><td class="label">Actual Start Date :</td><td class="data" >07/22/2008</td><td class="data"  ></td></tr><tr><td class="label">Actual Duration :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Percent Complete :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Template :</td><td class="data" >Active</td><td class="data"  ></td></tr><tr><td class="label">Parent :</td><td class="data" >Test Program</td><td class="data"  ></td></tr><tr><td class="label">Name :</td><td class="data" >Task1</td><td class="data"  ></td></tr><tr><td class="label">Number :</td><td class="data" >T00052</td><td class="data"  ></td></tr><tr><td class="label">Activities Type :</td><td class="data" >Task</td><td class="data"  ></td></tr><tr><td class="label">Status :</td><td class="data" >In Process</td><td class="data"  ></td></tr><tr><td class="label">Owner :</td><td class="data" >Administrator, Administrator (admin)</td><td class="data"  ></td></tr><tr><td class="label">Resource Type :</td><td class="data" >Act_Res_Type_0</td><td class="data"  ></td></tr><tr><td class="label">Variance :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Root Parent :</td><td class="data" >Test Program</td><td class="data"  ></td></tr><tr><td class="label">Audit Score :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Weight :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Weighted Score :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Archived :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Workflow :</td><td class="data" >Default Activities</td><td class="data"  ></td></tr><tr><td class="label">Schedule Status :</td><td class="data" >On Track</td><td class="data"  ></td></tr><tr><td class="label">StatusType :</td><td class="data" >Review</td><td class="data"  ></td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Cost Status :</td><td class="data" >On Budget</td><td class="data"  ></td></tr><tr><td class="label">Duration Type :</td><td class="data" >Fixed</td><td class="data"  ></td></tr><tr><td class="label">Days Effort :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Estimated Variance :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Overall Status :</td><td class="data" >On Track</td><td class="data"  ></td></tr><tr><td class="label">Global :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Controlled :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" >1</td><td class="data"  ></td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Schedule Editor :</td><td class="data" >PPM</td><td class="data"  ></td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" >Yes</td><td class="data"  ></td></tr><tr><td class="label">Critical :</td><td class="data" >No</td><td class="data"  ></td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" >0.0 United States Dollar</td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" >0</td><td class="data"  ></td></tr></table>';divArr["showdiv_1321_6"]='<p class="labeltitle">Task2</p><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Name :</td><td class="data" style="color:orange">Task2</td><td class="data" style="color:orange" >Task22</td></tr></table>';divArr["showdiv_-10009_6"]='<p class="labeltitle">Task3</p><p class="labelheader">P1</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr><tr><td class="label">Schedule Start Date :</td><td class="data" ></td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Schedule Duration :</td><td class="data" ></td><td class="data"  >1</td></tr><tr><td class="label">Schedule End Date :</td><td class="data" ></td><td class="data"  >08/06/2008</td></tr><tr><td class="label">Lock Status :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Lock User :</td><td class="data" ></td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Percent Complete :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Template :</td><td class="data" ></td><td class="data"  >Active</td></tr><tr><td class="label">Parent :</td><td class="data" ></td><td class="data"  >Test Program</td></tr><tr><td class="label">Name :</td><td class="data" ></td><td class="data"  >Task3</td></tr><tr><td class="label">Activities Type :</td><td class="data" ></td><td class="data"  >Task</td></tr><tr><td class="label">Owner :</td><td class="data" ></td><td class="data"  >Administrator, Administrator (admin)</td></tr><tr><td class="label">Resource Type :</td><td class="data" ></td><td class="data"  >Act_Res_Type_0</td></tr><tr><td class="label">Variance :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Root Parent :</td><td class="data" ></td><td class="data"  >Test Program</td></tr><tr><td class="label">Audit Score :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Weight :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Weighted Score :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Archived :</td><td class="data" ></td><td class="data"  >No</td></tr><tr><td class="label">StatusType :</td><td class="data" ></td><td class="data"  >Pending</td></tr><tr><td class="label">Rollup Health Status :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Cost Status :</td><td class="data" ></td><td class="data"  >On Budget</td></tr><tr><td class="label">Duration Type :</td><td class="data" ></td><td class="data"  >Fixed</td></tr><tr><td class="label">Days Effort :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Variance :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Overall Status :</td><td class="data" ></td><td class="data"  >On Track</td></tr><tr><td class="label">Global :</td><td class="data" ></td><td class="data"  >No</td></tr><tr><td class="label">Actual Labor Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Labor Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Labor Cost to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Fixed Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Fixed Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Fixed Cost to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Capital Expenses :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Capital Expenses :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Capital Expenses to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Actual Time (In Days) :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Budgeted Time (In Days) :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Time to Completion :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Schedule Editor :</td><td class="data" ></td><td class="data"  >PPM</td></tr><tr><td class="label">Actual Flex Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Budgeted Flex Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Flex Cost to Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Calculate Fixed Cost - Budget :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - Actual :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Fixed Cost - EAC :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Budget :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - Actual :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Capital Cost - EAC :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Budget :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - Actual :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Calculate Flex Cost - EAC :</td><td class="data" ></td><td class="data"  >Yes</td></tr><tr><td class="label">Critical :</td><td class="data" ></td><td class="data"  >No</td></tr><tr><td class="label">Total Actual Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Budgeted Cost :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Total Estimated Cost To Completion :</td><td class="data" ></td><td class="data"  >0.0 United States Dollar</td></tr><tr><td class="label">Estimated Start Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Work Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Start Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Finish Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Estimated Duration Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Start Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Finish Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr><tr><td class="label">Actual Duration Variance Calendar Days :</td><td class="data" ></td><td class="data"  >0</td></tr></table>';divArr["showdiv_921_7"]='<p class="labeltitle">Test Program</p><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr></table>';divArr["showdiv_923_7"]='<p class="labeltitle">Task1</p><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr></table>';divArr["showdiv_1321_7"]='<p class="labeltitle">Task2</p><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr></table>';divArr["showdiv_-10009_7"]='<p class="labeltitle">Task3</p><p class="labelheader">P2</p><table width="100%" border="0"><tr><th align="center"></th><th class="labelbold" nowrap>Server</th><th class="labelbold" nowrap>Gantt</th></tr></table>';divArr["showdiv_921_8"]='<p class="labeltitle">Test Program</p>';divArr["showdiv_923_8"]='<p class="labeltitle">Task1</p>';divArr["showdiv_1321_8"]='<p class="labeltitle">Task2</p>';divArr["showdiv_-10009_8"]='<p class="labeltitle">Task3</p>';</script>
</body></html>
