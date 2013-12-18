<section id="ex_css3">
<h3>CSS3 Examples</h3>
    <!--
    CSS3 Animation
    -->          
    <article>
        <h2>CSS3 Animation</h2>
        <h3>A CSS3 animated layout</h3>
        <p>This is a sample CSS3 layout with sliding panes</p>
        <h4>This is the example</h4>
        <details>
            <summary>See it</summary>
            <p><a href="uxd_v1.php" class="ext_override">Animated Web Layout</a> (Optimized for Google Chrome)</p>
        </details>
    </article>
    <article>
        <h2>HSL</h2>
        <h3>CSS3 HSL (Hue, Saturation, Light)</h3> 
        <style>
        	canvas#hslcanvas { 
	        	height: 250px; width: 99%; 
				outline: 4px solid rgba(255,255,255,.6); margin-bottom: .4em; position:relative; cursor: crosshair;
				-moz-outline-radius:3px; -webkit-outline-radius:3px; -o-outline-radius: 3px; outline-radius: 3px; 
				-moz-box-shadow: 0 1px 10px hsla(200, 5%, 10%, .5);
				-webkit-box-shadow: 0 1px 10px hsla(200, 5%, 10%, .5);
				box-shadow: 0 1px 10px hsla(200, 5%, 10%, .5); 	
		}
		</style>
       <script type="text/javascript">

            var canvas  = document.querySelector('#hslcanvas')
            alert(canvas.id);

            // First we make our pretty pretty colorpicker!
            for (x = 0; x < width; x++){
                cache[x] = [];
                for (y = 0; y < height; y++){
                    color = 'hsl(' + x    + ', ' + (100 - y) + '%, 50%)';
                    cache[x][y] = color;
                    ctx.fillStyle = color;
                    ctx.fillRect(x,y,1,1);
                }
            }    


            function grabColor(e){
                var x = (e.offsetX || e.layerX),// - parseInt(getComputedStyle(e.target, null).borderLeftWidth),
                    y = (e.offsetY || e.layerY),// - parseInt(getComputedStyle(e.target, null).borderTopWidth),
                    realX = parseInt(x * ratio, 10) % 360,
                    realY = parseInt(y * ratio, 10) % 360;

                color = cache[realX][realY];
                invert = inverty(realX, realY);
            }

            function inverty(x, y) {
                var imgData = ctx.getImageData(x, y, 1, 1),
                    px = imgData.data,  
                    r = 255-px[0],
                    b = 255-px[0+1],
                    g = 255-px[0+2];

                return 'rgb('+r+', '+g+', '+b+')';
            }

            function mousemove(e){
                grabColor(e);
                mainSty.backgroundColor = color;
                body.color = invert;
                
                setText();
            }

            function setText(){
                var newcolor = color
                    .replace('hsl', (alpha !== undefined) ? 'hsla' : 'hsl')
                    .replace(')',   (alpha !== undefined) ? ', ' + alpha + ')' : ')');

                elem.className = 'chosen';
                mainSty.backgroundColor = elem.textContent = newcolor;
                bodySty.color = invert;
            }


            function inputchange(e){
                var target = e.target;
                
                if (target.id == 'alpha'){
                    alpha = Math.floor(target.value)/100;
                    if (alpha === 1){
                        alpha = undefined;
                    }
                }
                if (target.id == 'light'){
                    var split = color.split('%');
                    split[1] = split[1].replace(/\d+/, Math.round(target.value));
                    color = split.join('%');
                }
                setText();
            }

            canvas.addEventListener('mousemove', mousemove, false);
            canvas.addEventListener('click', function(e){
                canvas.removeEventListener('mousemove', mousemove, false);
                grabColor(e);
                setText();
            }, false);


            [].forEach.call( document.querySelectorAll('input[type=range]'), function(elem, i){
                elem.addEventListener('change', inputchange, false);
            });
       </script>
        <canvas id="hslcanvas" width="360" height="100"><a href="http://noyoueatabagofdicks.com/">your browser doesnt support canvas.</a></canvas>
        
    </article>
</section>
<section>