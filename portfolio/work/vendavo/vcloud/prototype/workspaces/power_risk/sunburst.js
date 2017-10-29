function isEmpty(aValue) {
	if(aValue === 0){
		return false;
	}else if(aValue == undefined || aValue == null || aValue == "" || aValue.length == 0  ){
		return true;
	}else{
		return false;
	}	
}

var idCounter=1;

function idGenerator(){
	var newId="idText"+idCounter;
	idCounter=idCounter+1;
	return newId;
}
		
var t,t_parent;
var width = 1000,
   height = 1000,
   radius = Math.min(width-60, height-100) / 2,
        x = d3.scale.linear().range([0, 2 * Math.PI]),
        y = d3.scale.pow().exponent(1.3).domain([0, 1]).range([0, radius]),
  padding = 5,
 duration = 1000;

var color = d3.scale.category20();

var div = d3.select("#chart");

div.select("img").remove();

var vis = div.append("svg")
    		 .attr("width", width + padding * 2)
    		 .attr("height", height + padding * 2)
  			 .append("g")
  			 .attr("id", "container")
  			 .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
				  .sort(null)
    			  .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, d.y ? y(d.y) : d.y); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

d3.json("data.json", function(a) {
      
      var json={"name":"Pocket Margin", "size":100,
"children":[
	{"name":"Instapak Chemical","size":11.19},
	{"name":"Instapak Film","size":4.34},
	{"name":"Instapak Quick","size":1.78},
	{"name":"Automated Packaging","size":0.18},
	{"name":"Air Cellular Products","size":29.35},
	{"name":"Protective Paper Mailers","size":25.16},
	{"name":"Durable Plastic Mailers","size":0.65},
	{"name":"Inflatable Materials & Equipment","size":1.83},
	{"name":"Paper Systems","size":0.49},
	{"name":"Shrink Films","size":10.58},
	{"name":"Packaging Foam","size":7.31,
		"children":[
					{"name":"Light Weight Packaging Foam","size":7.09,
						"children":[
									{"name":"null","size":6.59,
										"children":[
													{"name":"null","size":6.59,
														"children":[
																	{"name":"Trimmed Rolls","size":3.42,
																		"children":[
																					{"name":"1/16 CA60","size":0.88},
																					{"name":"1/20 CA50","size":0.41},
																					{"name":"1/4 CA250","size":0.42,
																						"children":[
																									{"name":"Antistat Red","size":0.03},
																									{"name":"Natural","size":0.39}
																									]
																					},
																					{"name":"1/8 CA125","size":1.14,
																						"children":[
																									{"name":"Antistat Red","size":0.07},
																									{"name":"Natural","size":1.07}
																									]
																					},
																					{"name":"3/16 CA185","size":0.13},
																					{"name":"3/32 CA90","size":0.44,
																						"children":[
																									{"name":"Antistat Red","size":0.02},
																									{"name":"Natural","size":0.43}
																									]
																					}
																					]
																	},
																	{"name":"Untrimmed Rolls","size":3.09,
																		"children":[
																					{"name":"1/16 CA60","size":0.72},
																					{"name":"1/20 CA50","size":0.42},
																					{"name":"1/4 CA250","size":0.38,
																						"children":[
																									{"name":"Antistat Red","size":0.03},
																									{"name":"Natural","size":0.35}
																									]
																					},
																					{"name":"1/8 CA125","size":1.08,
																						"children":[
																									{"name":"Antistat Red","size":0.10},
																									{"name":"Natural","size":0.98}
																									]
																					},
																					{"name":"3/16 CA185","size":0.11},
																					{"name":"3/32 CA90","size":0.38,
																						"children":[
																									{"name":"Antistat Red","size":0.01},
																									{"name":"Natural","size":0.37}
																									]
																					}
																					]
																	},
																	{"name":"null","size":0.08},
																	]
													},
													{"name":"NS","size":0.50},
													]
									},
									{"name":"NS","size":0.50},
									]
					},
					{"name":"Cell Aire Laminate","size":0.22,
						"children":[
									{"name":"null","size":0.18,
										"children":[
													{"name":"Trimmed Rolls","size":0.16,
														"children":[
																	{"name":"1/16 CA60","size":0.15,
																		"children":[
																					{"name":"LF Laminates","size":0.01},
																					{"name":"LF LAM Mask","size":0.05},
																					{"name":"LF LAM QUICK XT","size":0.02},
																					{"name":"LF LAM QUICK RV","size":0.07}
																					]
																	},
																	{"name":"1/32 CA30","size":0.01},
																	{"name":"1/8 CA125","size":0.01},
																	{"name":"3/32 CA90","size":0.00}
																	]
													},
													{"name":"Pouch","size":0.00},
													{"name":"Untrimmed Roll","size":0.01}
													]
									},
									{"name":"NS","size":0.04},
									]
					},
					]
	},
	{"name":"Specialty Foam","size":5.91},
	{"name":"Inflatable Buble","size":0.66},
	{"name":"Rapid Fill Automated","size":0.11},
	{"name":"Converted Paper","size":0.47}
	]
};
	
var path = vis.data([json]).selectAll("path")
      		  .data(partition.nodes)
    		  .enter().append("path")
      		  .attr("d", arc)
      		  .style("fill", function(d) { 
				return color((d.children ? d : d.parent).name); 
			  })
	  		  .style("cursor","pointer")
      		  .style("stroke", "#fff")
			  .on("click", click)
			  .on("mouseover", mouseover)
			  .on("mouseout", mouseout);

d3.select("#container").on("mouseleave", mouseleave);

		//  var text = vis.selectAll("text").data(partition.nodes);
	 //  	 var textEnter = text.enter().append("text")
		//   .style("fill-opacity", 1)
	 //      .style("fill", function(d) {	  	
	 //        return brightness(d3.rgb(colour(d))) < 125 ? "#eee" : "#000";
	 //        })
	 //      .attr("text-anchor", function(d) {
	 //        return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
	 //        })
		// 	.attr("id", function(d) {return idGenerator();})
	 //      .attr("dy", ".25em")
	 //      .attr("transform", function(d) {
		  
		//   var multiline = d.name,
	 //            angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90,
	 //            rotate = angle;			      
	 //       return "rotate(" + rotate + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
	 //      })
		// .text(function(d) {
		// 	if( d.dx < .01){
		// 			d3.select(this).style("display","none");
		// 		}
		// 	 	return d.depth ? d.name.toLowerCase() : "";
		// 	 })
		//   .style("cursor","pointer")
	 //      .on("click", click)
		//   .on("mouseover", mouseover)
		//   .on("mouseout", mouseout);
	  
function click(d) {
  var dir;
  try {
		if (isEmpty(t)) { 
			console.log("forward");
			dir=true;
		}
		else{
			if((d.parent.name == t) || (d.parent.name == t_parent)) {
				console.log("forward");
				dir=true;
			}
			else {
				console.log("backward");
				dir=false;
			}
		}
		t=d.name,
		t_parent=d.parent.name;
	} catch (e) {
		
	}
		 		
  path.transition()
    .duration(duration)
    .attrTween("d", arcTween(d));
		   
		 //   text.transition()
	  //       .duration(duration)
			// .attrTween("transform", function(d) {
			//   var multiline = d.name;
	  //         return function() {
	  //           var angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90;
			// 	    var  rotate = angle;					
	  //           return "rotate(" + rotate + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
	  //       		  			};
	  //       			})
	  //       .attrTween("text-anchor", function(d) {
			// 	return function() {
	  //           return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
	  //         					};
	  //       			})
	  //       .style("fill-opacity", function(e) { return isParentOf(d, e) ? 1 : 1e-6; })
	  //       .each("end", function(e) {	
			// 	d3.select(this).style("display","");			
			// 	var st;
			// 		if(dir){
			// 			st=d;
			// 		}else{
			// 			st=e;
			// 		}
			// 		if (st.dx < 0.01) {
			// 			d3.select(this).style("display","none");
			// 		}else {
			// 			d3.select(this).style("display","");
			// 		}
	  //       });
			
}
	  
function mouseover(d) {
	 d3.select("#sunburst-info").text(function() { return d.name+ ": " +d.size+ "%"; });

	 d3.select(this).append("svg:title")
		 			.attr("id","title") 
	     			.text(function(d2) { return d2.name+ ": " +d2.size+ "%"; })
					;

	var sequenceArray = getAncestors(d);

	  vis.selectAll("path")
	      .filter(function(node) {
	                return (sequenceArray.indexOf(node) >= 0);
	              })
	      .style("opacity", 0.3);
}

function getAncestors(node) {
	var path = [];
	var current = node;
	while (current.parent) {
		path.unshift(current);
		current = current.parent;
	}
	return path;
}
			
function mouseout() {
	d3.select("#sunburst-info").html("");
}

function mouseleave() {
	d3.selectAll("path")
	.style("opacity", 1)
	.each("end", function() {
	      d3.select(this).on("mouseover", mouseover);
	    });
}

});
	
function arcTween(d) {
  var my = maxY(d),
      xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
      yd = d3.interpolate(y.domain(), [d.y, my]),
      yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d) {
    return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
}

function maxY(d) {
  return d.children ? Math.max.apply(Math, d.children.map(maxY)) : d.y + d.dy;
}

function isParentOf(p, c) {
  if (p === c) return true;
  if (p.children) {
    return p.children.some(function(d) {
      return isParentOf(d, c);
    });
  }
  return false;
}

function colour(d) {
  if (d.children) {
    var colours = d.children.map(colour),
        a = d3.hsl(colours[0]),
        b = d3.hsl(colours[1]);
    return d3.hsl((a.h + b.h) / 2, a.s * 1.2, a.l / 1.2);
  }
  return d.colour || "#fff";
}

function brightness(rgb) {
  return rgb.r * .299 + rgb.g * .587 + rgb.b * .114;
}