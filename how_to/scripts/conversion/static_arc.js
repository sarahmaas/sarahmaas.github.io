/* This is the code for creating a simple, static arc in a browser. */
  var pi = Math.PI;                             //import Pi
	
  var vis = d3.select("#content_static_arc")               // selects ID content 
              .append("svg")                    // appends svg element 
              .attr("width", "100%")            // sets width to 100% 
              .attr("height", "100%");          // sets height to 100% 
              
  var arcDef = d3.svg.arc()
                 .innerRadius(0)
                 .outerRadius(70)
                 .startAngle(45 * (pi/180))     // convert from degrees to radians
                 .endAngle(3)
                 
  var gaugeArc = vis.attr("width", "400").attr("height", "400").append("path")
                    .style("fill", "red")
                    .attr("transform", "translate(200,200)")
                    .attr("d", arcDef);