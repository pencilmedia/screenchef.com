<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Empty Base Palette</title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="skins.css" />
	<link id="dcss" rel="stylesheet" type="text/css" href="#" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/ux_palette_base.js"></script>
	<script type="text/javascript" src="skins.php.js"></script>
	<style>
		.ux_palette { background-color: #fff; }
		.ux_palette_title { display:block; }
		table { width:200px }
		table#colors td { text-align:center; height: 60px; width:120px;}
		table#custom td { padding: 2px;}
		#blue1 { background-color: #003366; }
		#blue2 { background-color: #336699; }
		#blue3 { background-color: #6699cc; }
		#tan1 { background-color: #999966; }
		#tan2 { background-color: #cccc99; }
		#tan3 { background-color: #ffffcc; }
		#dark1 { background-color: #333; }
		#dark2 { background-color: #666; }
		#dark3 { background-color: #ccc; }
		.skins a { color: white; }
	</style>
 </head>
<body class="action_dialog"> 

 <div style="FONT-FAMILY: Garamond, Times, Serif; TEXT-ALIGN: center; PADDING-TOP: 20px;">
   <div id="plugin" onmousedown="HSVslide('drag','plugin',event)" style="left:205px; top:34px; z-index: 20;">
	<div id="plugCUR"></div><div id="plugHEX" onmousedown="stop=0; setTimeout('stop=1',100);">FFFFFF</div><div id="plugCLOSE" onmousedown="toggle('plugin')">X</div><br>
	<div id="SV" onmousedown="HSVslide('SVslide','plugin',event)" title="Saturation + Value">
	 <div id="SVslide" style="TOP: -4px; LEFT: -4px;"><br /></div>
	</div>
	<form id="H" onmousedown="HSVslide('Hslide','plugin',event)" title="Hue">
	 <div id="Hslide" style="TOP: -7px; LEFT: -8px;"><br /></div>
	 <div id="Hmodel"></div>
	</form>
   </div>
   <!--<div id="plugID" style="margin-top:-10px; width:100px; height:100px; margin-left: 205px; BORDER: 1px solid #333; TEXT-ALIGN: center; FONT-SiZE: 25px; BACKGROUND: #333;">&nbsp;</div>-->
 </div>

<p>&nbsp;</p>
<table id="colors">
	<tr>
		<td id="blue1" class="skins"><a href="#" class="skins" id="003366">Oracle 1</a></td>
		<td id="blue2" class="skins"><a href="#" class="skins" id="336699">Oracle 2</a></td>
		<td id="blue3" class="skins"><a href="#" class="skins" id="6699cc">Oracle 3</a></td>
	</tr>
	<tr>
		<td id="tan1" class="skins"><a href="#" class="skins" id="999966">Oracle 4</a></td>
		<td id="tan2" class="skins"><a href="#" class="skins" id="cccc99">Oracle 5</a></td>
		<td id="tan3" class="skins"><a href="#" class="skins" id="ffffcc" style="color:#333;">Oracle 6</a></td>
	</tr>
	<tr>
		<td id="dark1" class="skins"><a href="#" class="skins" id="333">Oracle 4</a></td>
		<td id="dark2" class="skins"><a href="#" class="skins" id="666">Oracle 5</a></td>
		<td id="dark3" class="skins"><a href="#" class="skins" id="ccc" style="color:#333;">Oracle 6</a></td>
	</tr>
</table>
<table id="custom">
	<tr>
		<td>Palette</td>
		<td><input id="custom_color" type="text" value="Enter Color Value" onfocus="this.value='';" /></td>
		<td><a href="#" id="cmdCustomColor">Set</a></td>
	</tr>
	<tr>
		<td>Title</td>
		<td><input id="custom_color_title" type="text" value="Enter Color Value" onfocus="this.value='';" /></td>
		<td><a href="#" id="cmdCustomColorTitle">Set</a></td>
	</tr>
</table>
<p>&nbsp;</p>
    <div id="ux_palette" class="ux_palette">
        <div id="ux_palette_top" class="ux_palette_top">
            <div id="ux_palette_header" class="ux_palette_header">
                <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
              <h4 id="ux_palette_title" class="ux_palette_title">Palette Title</h4>
                <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
          	</div>
		  <!-- Optional Top Action Bar
            <div id="ux_palette_top_action_bar" class="ux_palette_top_action_bar">
                <div class="right_column">
                	<a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
					<a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
              	</div>
                <div class="left_column">&nbsp;</div>
            </div>
            -->
        </div>

        <div id="ux_palette_main" class="ux_palette_main">
			<p>Content Goes Here...</p>
        </div>

        <div id="ux_palette_bottom" class="ux_palette_bottom">
            <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar">
                <div class="right_column">
                	<a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
					<a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
				</div>
                <div class="left_column">&nbsp;</div>
            </div>
            <div id="ux_palette_handle" class="ux_palette_handle">&nbsp;</div>
      </div>
    </div>

<script type="text/javascript">

/* DHTML Color Picker : v1.0.4 : 2008/04/17 */
/* http://www.colorjack.com/software/dhtml+color+picker.html */

function $(v,o) { return((typeof(o)=='object'?o:document).getElementById(v)); }
function $S(o) { o=$(o); if(o) return(o.style); }
function abPos(o) { var o=(typeof(o)=='object'?o:$(o)), z={X:0,Y:0}; while(o!=null) { z.X+=o.offsetLeft; z.Y+=o.offsetTop; o=o.offsetParent; }; return(z); }
function agent(v) { return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0)); }
function toggle(v) { $S(v).display=($S(v).display=='none'?'block':'none'); }
function within(v,a,z) { return((v>=a && v<=z)?true:false); }
function XY(e,v) { var z=agent('msie')?[event.clientX+document.body.scrollLeft,event.clientY+document.body.scrollTop]:[e.pageX,e.pageY]; return(z[zero(v)]); }
function zero(v) { v=parseInt(v); return(!isNaN(v)?v:0); }


/* COLOR PICKER */

var maxValue={'H':360,'S':100,'V':100}, HSV={H:360, S:100, V:100};

var slideHSV={H:360, S:100, V:100}, zINDEX=15, stop=1;

function HSVslide(d,o,e) {

	function tXY(e) { tY=XY(e,1)-ab.Y; tX=XY(e)-ab.X; }
	function mkHSV(a,b,c) { return(Math.min(a,Math.max(0,Math.ceil((parseInt(c)/b)*a)))); }
	function ckHSV(a,b) { if(within(a,0,b)) return(a); else if(a>b) return(b); else if(a<0) return('-'+oo); }
	function drag(e) { if(!stop) { if(d!='drag') tXY(e);
	
		if(d=='SVslide') { ds.left=ckHSV(tX-oo,162)+'px'; ds.top=ckHSV(tY-oo,162)+'px';

			slideHSV.S=mkHSV(100,162,ds.left); slideHSV.V=100-mkHSV(100,162,ds.top); HSVupdate();

		}
		else if(d=='Hslide') { var ck=ckHSV(tY-oo,163), r='HSV', z={};
		
			ds.top=(ck-5)+'px'; slideHSV.H=mkHSV(360,163,ck);

			for(var i in r) { i=r.substr(i,1); z[i]=(i=='H')?maxValue[i]-mkHSV(maxValue[i],163,ck):HSV[i]; }

			HSVupdate(z); $S('SV').backgroundColor='#'+color.HSV_HEX({H:HSV.H, S:100, V:100});

		}
		else if(d=='drag') { ds.left=XY(e)+oX-eX+'px'; ds.top=XY(e,1)+oY-eY+'px'; }

	}}

	if(stop) { stop=''; var ds=$S(d!='drag'?d:o);

		if(d=='drag') { var oX=parseInt(ds.left), oY=parseInt(ds.top), eX=XY(e), eY=XY(e,1); $S(o).zIndex=zINDEX++; }

		else { var ab=abPos($(o)), tX, tY, oo=(d=='Hslide')?2:4; ab.X+=10; ab.Y+=22; if(d=='SVslide') slideHSV.H=HSV.H; }

		document.onmousemove=drag; document.onmouseup=function(){ stop=1; document.onmousemove=''; document.onmouseup=''; }; drag(e);

	}
};

function HSVupdate(v) { v=color.HSV_HEX(HSV=v?v:slideHSV);

	$('plugHEX').innerHTML=v;
	$S('plugCUR').background='#'+v;
	//$S('plugID').background='#'+v;
	$S('ux_palette').background='#'+v;
	
	return(v);

};

function loadSV() { var z='';

	for(var i=165; i>=0; i--) { z+="<div style=\"BACKGROUND: #"+color.HSV_HEX({H:Math.round((360/165)*i), S:100, V:100})+";\"><br /><\/div>"; }

	$('Hmodel').innerHTML=z;
	
};


/* COLOR LIBRARY */

color={};

color.cords=function(W) {

	var W2=W/2, rad=(hsv.H/360)*(Math.PI*2), hyp=(hsv.S+(100-hsv.V))/100*(W2/2);

	$S('mCur').left=Math.round(Math.abs(Math.round(Math.sin(rad)*hyp)+W2+3))+'px';
	$S('mCur').top=Math.round(Math.abs(Math.round(Math.cos(rad)*hyp)-W2-21))+'px';

};

color.HEX=function(o) { o=Math.round(Math.min(Math.max(0,o),255));

    return("0123456789ABCDEF".charAt((o-o%16)/16)+"0123456789ABCDEF".charAt(o%16));

};

color.RGB_HEX=function(o) { var fu=color.HEX; return(fu(o.R)+fu(o.G)+fu(o.B)); };

color.HSV_RGB=function(o) {
    
    var R, G, A, B, C, S=o.S/100, V=o.V/100, H=o.H/360;

    if(S>0) { if(H>=1) H=0;

        H=6*H; F=H-Math.floor(H);
        A=Math.round(255*V*(1-S));
        B=Math.round(255*V*(1-(S*F)));
        C=Math.round(255*V*(1-(S*(1-F))));
        V=Math.round(255*V); 

        switch(Math.floor(H)) {

            case 0: R=V; G=C; B=A; break;
            case 1: R=B; G=V; B=A; break;
            case 2: R=A; G=V; B=C; break;
            case 3: R=A; G=B; B=V; break;
            case 4: R=C; G=A; B=V; break;
            case 5: R=V; G=A; B=B; break;

        }

        return({'R':R?R:0, 'G':G?G:0, 'B':B?B:0, 'A':1});

    }
    else return({'R':(V=Math.round(V*255)), 'G':V, 'B':V, 'A':1});

};

color.HSV_HEX=function(o) { return(color.RGB_HEX(color.HSV_RGB(o))); };

/* LOAD */

loadSV();

HSVupdate({H:0, S:0, V:20});

//$S('plugin').left=($('colorspy').offsetLeft+35)+'px';
//$S('plugin').top=($('colorspy').offsetTop+35)+'px';			 
$S('plugin').display='block';

	jQuery('#ux_palette').css('background-color','#fff');

</script>
</body>
</html>