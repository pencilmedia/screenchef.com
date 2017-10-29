<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Container Resize</title>
<style type="text/css">
	* 			{ margin: 0; padding: 0; }
	html		{ overflow-y: hidden; }
	p 			{ margin-bottom:5px; }
	div			{ position: fixed; width: 100%;}
	.header 	{ border-bottom: 3px solid #f5f5f5; }
	.content	{ overflow:auto; }
</style>
<script type="text/javascript">
	function $(targetId) { return document.getElementById(targetId); }

	function getWindowHeight()
	{
		var windowHeight=0;
		if (typeof(window.innerHeight)=='number') {
			windowHeight=window.innerHeight;
		}
		else {
			if (document.documentElement&& document.documentElement.clientHeight)
			{
				windowHeight= document.documentElement.clientHeight;
			} else {
				if (document.body&&document.body.clientHeight)
				{
					windowHeight=document.body.clientHeight;
				}
			}
		}
		return windowHeight;
	}
	
	function resizeActionDialog()
	{
		var windowHeight 			= getWindowHeight();
		var headerHeight 			= $("header").offsetHeight;
		$("content").style.margin 	= $("header").offsetHeight + "px 0 0 0";
		$("content").style.height 	= windowHeight - headerHeight +"px";
	}	
</script>
</head>
	<body onload="resizeActionDialog()" onresize="resizeActionDialog()">
		<div id="header" class="header">
			<h2>Fixed Position Header</h2>
			<p>This header will always be visible.</p>
		</div>
		<div id="content" class="content">
			<h2>Scrolling Div</h2>
			<p>
				IE 7 PC: passed<br/>
				FF 2 PC: passed
			</p>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum tristique ultricies nisl. Donec rutrum bibendum sapien. Nullam quis ante in sem vehicula interdum. Nam a elit sed tellus luctus condimentum. Nulla diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sagittis mauris vel justo. Praesent volutpat, mi ac consectetuer ultricies, pede nibh adipiscing lacus, non hendrerit nibh tellus vel sem. Aliquam ac sem. Ut rhoncus risus sodales nisi. Curabitur bibendum. Praesent volutpat massa eu lorem. Donec diam pede, venenatis vel, dictum in, aliquam sit amet, tellus. Cras commodo tincidunt ante. Ut iaculis, mauris congue pulvinar consequat, erat est volutpat velit, et placerat lectus dolor ac purus. Nunc est purus, faucibus aliquam, ullamcorper et, tincidunt quis, felis. Etiam ante enim, luctus vel, facilisis ut, aliquet eget, mi. Curabitur nec dui vel sem tristique ornare. Maecenas imperdiet, sapien quis fringilla laoreet.</p>
		</div>
	</body>
</html>