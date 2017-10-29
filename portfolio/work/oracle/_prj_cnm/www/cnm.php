<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>CNM</title>
<link rel="stylesheet" type="text/css" href="/yui/build/reset-fonts-grids/reset-fonts-grids.css" />
<link rel="stylesheet" type="text/css" href="/yui/build/resize/assets/skins/sam/resize.css" />
<link rel="stylesheet" type="text/css" href="/yui/build/layout/assets/skins/sam/layout.css" />
<link rel="stylesheet" type="text/css" href="/yui/build/button/assets/skins/sam/button.css" />
<link rel="stylesheet" type="text/css" href="/css/skins/default/layout.css" />
<link rel="stylesheet" type="text/css" href="/css/default.css" />

<script type="text/javascript" src="/js/jquery/jquery.js"></script>
<script type="text/javascript" src="/yui/build/yahoo/yahoo-min.js"></script>
<script type="text/javascript" src="/yui/build/event/event-min.js"></script>
<script type="text/javascript" src="/yui/build/dom/dom-min.js"></script>
<script type="text/javascript" src="/yui/build/element/element-beta-min.js"></script>
<script type="text/javascript" src="/yui/build/dragdrop/dragdrop-min.js"></script>
<script type="text/javascript" src="/yui/build/resize/resize-min.js"></script>
<script type="text/javascript" src="/yui/build/animation/animation-min.js"></script>
<script type="text/javascript" src="/yui/build/layout/layout-min.js"></script>
<script type="text/javascript" src="cnm.php.js"></script>
</head>
<body class=" yui-skin-sam">
	<div id="top1">
    	<ul>
        	<li><strong>Welcome Anthony Moquette &bull;</strong></li>
        	<li><a href="#">Settings</a>
        	<li><a href="#">Help</a>
        	<li><a href="#">Logout</a>
        </ul>
        <div class="global_search">
        	<input type="text" class="search_box" />
            <button>Search</button>
       	</div>
    </div>
	<div id="bottom1"></div>
	<div id="right1">
    	<h3>Related To</h3>
        <ul>
        	<li><span>3</span>Quotes</li>
        	<li><span>15</span>Requirements</li>
        	<li><span>2</span>Ideas</li>
        	<li><span>1</span>PLM Item</li>
        </ul>
    	<h3>Similar To</h3>
        <ul>
        	<li><span>3</span>By Customer</li>
        	<li><span>12</span>By Tags</li>
        	<li><span>4</span>By Description</li>
        	<li><span>18</span>By Other</li>
        </ul>
    </div>
	<div id="left1">
    	<ul>
        	<li class="selected"><a href="#">Quotes</a></li>
        	<li><a href="#">Ideas</a></li>
        	<li><a href="#">Requirements</a></li>
        </ul>
    </div>
	<div id="center1">
    	<div class="object_header">
	    	<h2 class="object_name">QTE-NB-1000066</h2>
    		<div class="object_buttons">
        		<button>Send</button>
        		<button>Subscribe</button>
	        	<button>More</button>
    	    </div>
        </div>
        <div class="object_description"><p>Quote for ACME MFG. New rocket skates with falling lock.</p></div>
        


        <div class="container poc2">
        <form id="form_dialogs" name="form_dialogs" action="">
            <fieldset class="lt_column" style="margin-top: 20px;">
                <dl class="side_by_side_mixed2">
                    <dt><label for="ui_control_id1">Number:</label></dt>
                    <dd>
                        <input type="text" id="ui_control_id1" value="TB-NE-1000056" class="auto_number_field long_width" />
                    </dd>
                    <dt><label for="text1">Lifecycle:</label></dt>
                    <dd>
                        <input id="text1" type="text" class="long_width" />
                    </dd>
                    <dt><label for="select1">Created by:</label></dt>
                    <dd>
                        <select id="select1" class="long_width">
                            <option>Text</option>
                        </select>
                    </dd>
                    <dt><label for="text3">Updated by:</label></dt>
                    <dd>
                        <input id="text3" type="text" class="long_width" />
                    </dd>
                    <dt class="side_by_side_text2"><label for="text3">Updated by:</label></dt>
                    <dd class="side_by_side_text2">acme &bull; rocket &bull; sensor</dd>
                </dl>
            </fieldset>
            <fieldset class="rt_column" style="margin-top: 20px;">
                <dl class="side_by_side_mixed2">
                    <dt><label for="textbox3">Description:</label></dt>
                    <dd>
                        <textarea id="textbox3" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="textCounter('multiText',this,document.form_dialogs.textbox3_counter,150)" onkeyup="textCounter('multiText',this,document.form_dialogs.textbox3_counter,150)"></textarea>
                        <input readonly="readonly" type="text" id="textbox3_counter" class="counter" size="3" maxlength="3" value="150">
                    </dd>
                    <dt><label for="textg">Created on:</label></dt>
                    <dd>
                        <input id="textg" type="text" class="long_width" />
                    </dd>
                    <dt><label for="textg">Updated on:</label></dt>
                    <dd>
                        <input id="textg" type="text" class="long_width" />
                    </dd>
                </dl>
            </fieldset>
            </form>
          </div>


        
        <div style="margin-top: 20px;">
	        <ul class="tabs1">
    	    	<li class="first selected"><a href="#">Structure</a></li>
        	    <li><a href="#">Content</a></li>
            	<li><a href="#">Note</a></li>
	        </ul>
        	<ul class="tabs2">
       	    <li><a href="#">Add</a></li>
            	<li><a href="#">Remove</a></li>
            	<li><a href="#">Check-Out</a></li>
            	<li><a href="#">Check-In</a></li>
           	</ul>
        </div>
        <table class="table2">
        	<thead>
	            <tr>
    	            <th>Name</th>
        	        <th>Type</th>
            	    <th>Status</th>
                	<th>Description</th>
	                <th>Column</th>
    	        </tr>
           	</thead>
			<tbody>
	            <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
	            <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	           
                 <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>    	        </tr>	            <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>	            
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
                <tr>
    	            <td class="fc"><a href="#">Name goes here</a></td>
        	        <td><a href="#">document_name.doc</a></td>
            	    <td>Closed</td>
                	<td>Lorem ipsum dolor sit amet, </td>
	                <td>Content.</td>
    	        </tr>
          	</tbody>
        </table>
    </div>
</body>
</html>