<section id="ex_html5">
    <h3>HTML5 Examples</h3>
    <!--
    HTML5 Canvas
    --> 
    <article>
        <h2>Canvas</h2>
        <h3>Canvas and JavaScript</h3>
        <p>Fun with canvas</p>
        <h4>This is the example</h4>
        
        <details open>
            <summary>See it</summary>
            <style>
                canvas { width:40em; height:10em; border:1px solid #999; }
            </style>
            <p><canvas id="myCanvas"></canvas></p>
            <script>
            $(document).ready(function(){
                
                
                function drawScene(canvas) {
                    canvas = document.getElementById("myCanvas");
                    context = canvas.getContext("2d");
                    
                    //DRAW RECTANGLE
                    context.strokeStyle = "#432";
                    context.fillStyle = "#987";
                    context.fillRect(10,10,100,100);
                    context.strokeRect(10,10,100,100);
                    
                    //DRAW CIRCLE
                    context.beginPath();
                    context.arc(150,75,30,0, Math.PI*2, true);
                    context.closePath();
                    context.strokeStyle = "#333";
                    context.fillStyle = "#e6fb56";
                    context.lineWidth = "1";
                    context.fill();
                    context.stroke();
                    
                    //var ctx, canvasWidth, canvasHeight;
                    //alert(canvas.id);
                    
                    //extendCanvasContext(context);
                    canvasWidth = parseInt(canvas.getAttribute("width"));	
                    canvasHeight = parseInt(canvas.getAttribute("height"));
                
                    drawSky();
                }
                function drawSky() {
                    context.save();
                    var gradient = context.createLinearGradient(0,0,0,canvasHeight);
                    gradientaddColorStop(0,"#999999");
                    gradientaddColorStop(1,"#e9e9e9");
                    context.fillStyle = gradient;
                    context.fillRect(0,0,canvasWidth,canvasHeight);
                    context.restore();
                    context.fillStyle = "#d5d5d5";
                }
                
                drawScene();
            });
            </script>
       </details>  
    </article>
    <!--
    HTML5 Native Drag and Drop
    --> 
    <article>
        <h2>Drag and Drop</h2>
        <h3>Native Drag and Drop</h3>
        <p>The dataTransfer property is where all the Drag n Drop fun happens. It holds the piece of data sent in a drag action. dataTransfer is set in the dragstart event and read/handled in the drop event. Calling e.dataTransfer.setData(format, data) will set the object's content to the mimetype and data payload passed as arguments.</p>
        <h4>This is the example</h4>
        
        <details open>
            <style>
                [draggable] {-moz-user-select: none; -webkit-user-select: none; user-select: none;}
                #acolumns {overflow:hidden; height:5em;padding:.5em; border:1px solid #666; cursor: move;}
                .acolumn {float:left; height:5em; width:10em; background-color:#eee; border:1px solid #ccc; margin-left: 2em;}
                .acolumn:hover {-moz-box-shadow: 1px 0px 2px 0px #d3d3d3; -webkit-box-shadow: 1px 0px 2px 0px #d3d3d3; box-shadow: 1px 0px 2px 0px #d3d3d3;}
                
                .acolumn header {margin-top:0; padding: .25em 0; text-align: center; text-transform: uppercase; }
                .acolumn header:hover {background-color: #e3e3e3; color: #ccc;}
                
                .acolumn.over {
                  border: 1px dashed #000;
                  background-color: #FCC;
                }
            
            </style>
            <summary>See it</summary>
            <div id="acolumns">
              <div class="acolumn" draggable="true"><header>Box A</header></div>
              <div class="acolumn" draggable="true"><header>Box B</header></div>
              <div class="acolumn" draggable="true"><header>Box C</header></div>
            </div>
            <script>
                (function() {
                var dragSrcEl = null;
                
                function handleDragStart(e) {
                  this.style.opacity = '0.8';  // this / e.target is the source node.
                  dragSrcEl = this;
                  e.dataTransfer.effectAllowed = 'all';
                  e.dataTransfer.setData('text/html', this.innerHTML);
                }
                
                function handleDragOver(e) {
                if (e.preventDefault) {
                    e.preventDefault(); // Necessary. Allows us to drop.
                  }
                
                  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
                
                  return false;
                }
                
                function handleDragEnter(e) {
                  // this / e.target is the current hover target.
                  this.classList.add('over');
                }
                
                function handleDragLeave(e) {
                  this.classList.remove('over');  // this / e.target is previous target element.
                }
                
                function handleDrop(e) {
                    
                    if (e.stopPropagation) {
                        e.stopPropagation();	
                    }
                    if (dragSrcEl != this) {
                        dragSrcEl.innerHTML = this.innerHTML;
                        this.innerHTML = e.dataTransfer.getData('text/html');	
                    }
                    return false;
                }
                function handleDragEnd(e) {
                    [].forEach.call(cols, function (col) {
                        col.classList.remove('over');
                    });
                }
    
                var cols = document.querySelectorAll('#acolumns .acolumn');
                [].forEach.call(cols, function(col) {
                  col.addEventListener('dragstart', handleDragStart, false);
                  col.addEventListener('dragenter', handleDragEnter, false);
                  col.addEventListener('dragover', handleDragOver, false);
                  col.addEventListener('dragleave', handleDragLeave, false);
                  col.addEventListener('drop', handleDrop, false);
                  col.addEventListener('dragend', handleDragEnd, false);
                });
                })(); 
    
            </script>
       </details>
    </article>
    
    <!--
    HTML5 Drag and Drop Desktop Files
    --> 
    <article>
        <h2>Drag and Drop Desktop Files</h2>
        <h3>Native Drag and Drop</h3>
        <p>The dataTransfer property is where all the Drag n Drop fun happens. It holds the piece of data sent in a drag action. dataTransfer is set in the dragstart event and read/handled in the drop event. Calling e.dataTransfer.setData(format, data) will set the object's content to the mimetype and data payload passed as arguments.</p>
        <h4>This is the example - (Works in Google Chrome Only for now)</h4>
        
        <details open>
            <style>
                [draggable] {-moz-user-select: none; -webkit-user-select: none; user-select: none;}
                #columns {overflow:hidden; height:5em;padding:.5em; border:1px solid #666;}
                .column {float:left; height:5em; width:10em; background-color:#eee; border:1px solid #ccc; margin-left: 2em;}
                .column:hover {-moz-box-shadow: 1px 0px 2px 0px #d3d3d3; -webkit-box-shadow: 1px 0px 2px 0px #d3d3d3; box-shadow: 1px 0px 2px 0px #d3d3d3;}
                
                .column header {background-color:#e9e9e9; margin-top:0; cursor: move; padding: .25em 0; text-align: center; text-transform: uppercase; }
                .column header:hover {background-color: #e3e3e3; color: #ccc;}
            
            </style>
            <summary>See it</summary>
            <div id="columns">
              <div class="column" draggable="true" id="c1"><header>Header A</header></div>
              <div class="column" draggable="true" id="c2"><header>Header B</header></div>
              <div class="column" draggable="true" id="c3"><header>Header C</header></div>
              <div class="column" draggable="true" id="c4"><header>Drop Zone</header></div>
            </div>
            <script>
                $('#columns .column').bind('dragstart', function(event) {
                    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'))
                });
                $('#columns .column').bind('dragover', function(event) {
                    event.preventDefault();
                });
                $('#c4').bind('drop', function(event) {
                    alert('dropped here');
                    return false;
                });
            
            </script>
       </details>
    </article>
     
    <!--
    HTML5 Local Storage
    -->  
    <article>
        <h2>Client-side Storage</h2>
        <h3>Session Storage</h3>
        <p>Client-side storage is divided into 3 methodologies:</p>
        <ol>
          <li>Session storage.</li>
          <li>Local storage</li>
          <li>Database storage</li>
        </ol>
        <h4>This is the example</h4>
        <details>
            <summary>See it</summary>
            <form>
                <p id="nameMsg">What is your username?</p>
                <input type="text" id="name_sample" value="username" />
                <p><a href="javascript:storeIt();" class="button"><span>Save Username</span></a><a href="javascript:removeIt();" class="button"><span>Delete Username</span></a></p>
            </form>
        </details>
        <script>
            $(document).ready(
                function nameVal() {
                    uname = $('#name_sample');
                    uname.focus(function(){
                        uname.val('');
                    });
                    uname.blur(function(){
                        if ( !uname.val() ) {
                            uname.val('username');
                        } else {
                            return;	
                        }
                    });
            });
            function storeIt() {
                getName = $('#name_sample').val();
                sessionStorage.setItem('userName', getName); // defining the session variable
                //alert("Your user is: " + sessionStorage.getItem('userName'));// accessing it	
                $('#nameMsg').html('Your username is ' + sessionStorage.getItem('userName'));
            }
            function removeIt() {
                $('#nameMsg').html('<span style=\'color:#f09;\'>Deleted your username: ' + sessionStorage.getItem('userName') + '</span>');
                //alert("Deleted your username: " + sessionStorage.userName); // another way of accessing the variable 
                sessionStorage.removeItem('userName');
                $("#name_sample").val("username");
            }
        </script>
    </article>
    
    <!--
    Details Element
    -->          
    <article>
        <h2>Example Dos</h2>
        <h3>HTML5 &lt;details&gt; element</h3>
        <p>
            The HTML5 &lt;details&gt; element is currently not natively supported in any browser natively supported in Chrome 12 and up. Firefox does see it and you can style it, however it has no default behaviors except display:block.
        </p>
        <h4>This is the example</h4>
        <details>
            <summary>See it</summary>
          <p>These are the details &hellip; contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </details>
        <style>
            details {display:block;border:1px solid #ccc;padding:1em 1em .5em 1em;color:#666;}
            summary {font-weight:bold;color:#333;margin-bottom:.5em;}
        </style>
    </article>
    
    <!--
    Multicolumn Layout
    -->          
    <article>
        <h2>Example Uno</h2>
        <h3>Multicolumn Layout</h3>
        <p>There is a new way to arrange text like a newspaper, in columns. It allows text  be fitted into columns, in two ways: by defining a width for each  column, or by defining a number of columns. The first would be done by column-width, the latter by column-count. To create a space between the columns, you need to specify a width for column-gap.</p>
        <h4>This is the example</h4>
        <details>
            <div class="multi-column">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean egestas blandit ipsum. Morbi nulla metus, luctus et, ullamcorper sit amet, commodo quis, nisl. Ut blandit lacus nec nibh. Phasellus eleifend enim et risus. Nam condimentum. Praesent euismod auctor dui. Nunc ut leo vel magna adipiscing tempor. Donec pretium, ligula et hendrerit faucibus, sem velit accumsan tortor, sodales tempor est ligula non velit. Nulla sagittis, odio quis porta nonummy, mauris arcu gravida odio, quis aliquam lacus elit non libero. Proin aliquam augue accumsan augue. Quisque ut eros at erat ultrices sodales. Nunc vitae ipsum. Mauris in elit in dolor imperdiet interdum. Vivamus egestas sagittis justo. Sed lorem. Sed vel neque in ipsum gravida nonummy. Nulla tempor blandit elit.</p>
            </div>
        </details>
        <style>
            .multi-column {
                padding:1em;
                column-count: 3;
                column-gap: 1.5em;
                column-rule: 1px solid #ccc;
                -moz-column-count: 3;
                -moz-column-gap: 1.5em;
                -moz-column-rule: 1px solid #ccc;
                -webkit-column-count: 3;
                -webkit-column-gap: 1.5em;
                -webkit-column-rule: 1px solid #ccc;
            }
        </style>
    </article>
</section>