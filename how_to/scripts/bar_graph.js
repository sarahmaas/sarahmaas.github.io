document.addEventListener('DOMContentLoaded', createBarGraph);

function createBarGraph() {
	var width = 600;
	var height = 250;
	var data = [
	{"width":25,"height":86,"color":"red"},
	{"width":25,"height":84,"color":"red"},
	{"width":25,"height":98,"color":"red"},
	{"width":25,"height":93,"color":"red"},
	{"width":25,"height":68,"color":"red"},
	{"width":25,"height":70,"color":"red"},
	{"width":25,"height":76,"color":"red"},
	{"width":25,"height":77,"color":"red"},
	{"width":25,"height":95,"color":"red"},
	{"width":25,"height":100,"color":"red"},
	{"width":25,"height":90,"color":"red"},
	{"width":25,"height":75,"color":"red"},
	{"width":25,"height":65,"color":"red"},
	{"width":25,"height":80,"color":"red"},
	{"width":25,"height":78,"color":"red"},
	{"width":25,"height":76,"color":"red"},
	{"width":25,"height":94,"color":"red"},
	{"width":25,"height":78,"color":"red"},
	{"width":25,"height":69,"color":"red"},
	{"width":25,"height":93,"color":"red"},
	];
	
	var svg= d3.select('#bar-graph')
		.append('svg')
		.attr('width', width)
		.attr('height', height);

	svg.selectAll('rect.colorBar')
		.data(data)
		.enter()
		.append('rect')
		.attr('width', function(d,i){
			return d.width
		})
		.attr('height', function(d,i){
			return d.height*2
		})
		.attr('x', function(d,i){
			return i * (d.width+2)
		})
		.attr('y', function(d,i){
			return height - d.height*2
		})
		.attr('fill', 'white');
		
	var xScale = d3.scale.linear()
		.domain( [0, data.length] )
		.range( [0, width] ); 

	var yScale = d3.scale.linear()
		.domain( [0, d3.max(data, function(d) { return d.height; })] )
		.range( [0, height] ); 

	var xAxis = d3.svg.axis().scale(xScale)
		.orient("bottom");
	
	svg.append("g").call(xAxis); 
	
	var yAxis = d3.svg.axis().scale(yScale)
		.orient("left"); 
		
	svg.append("g").call(yAxis);
}