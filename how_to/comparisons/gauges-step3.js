/* This is the code for creating a configurable arc in a browser. */
  var pi = Math.PI;                                        //import Pi
  
  //Vis definitiions
  var innerRad = 0;
  var width = 200;
  var height = 200;
  var startAngleDeg = -90;
  var endAngleDeg = 90;
  var colorCode = "red";

  //Outer Dimensions & Positioning
  var paddingTop = 10;
  var paddingBottom = 10;
  var paddingLeft = 10;
  var paddingRight = 10;
  

//The total size of the component is calculated from its parts
  // Find the larger left/right padding
  var lrPadding = paddingLeft + paddingRight;
  var tbPadding = paddingTop + paddingBottom;
  var maxPadding = lrPadding;
  if (maxPadding < tbPadding){
    maxPadding = tbPadding;
  }
  var outerRad = (width - 2*(maxPadding))/2;

  //The offset will determine where the center of the arc shall be
  var offsetLeft = width/2;
  var offsetDown = height/2;

  //Don’t let the innerRad be greater than outer rad
  if (outerRad < innerRad){
    outerRad = innerRad;
    var warningMsg = "Warning!  The gauge arc has a negative radius.  Please decrease the inner"
    warningMsg += " radius, or increase the size of the control. Height & width (including";
    warningMsg += " subtraction for padding) must me at least twice as large as Internal Radius.!";
    alert(warningMsg);
  }
	
  var vis = d3.select("#content")                          // selects ID content 
              .append("svg")                               // appends svg element 
              .attr("width", "100%")                       // sets width to 100% 
              .attr("height", "100%");                     // sets height to 100% 
              
  var arcDef = d3.svg.arc()
                 .innerRadius(innerRad)
                 .outerRadius(outerRad)
                 .startAngle(startAngleDeg * (pi/180))     // convert from degrees to radians
                 .endAngle(endAngleDeg * (pi/180))         // convert from degrees to radians
                 
  var gaugeArc = vis.attr("width", width).attr("height", height).append("path")
                    .style("fill", colorCode)
                    .attr("transform", "translate(" + offsetLeft + "," + offsetDown + ")")
                    .attr("d", arcDef);
                    

/* Here is the same implementation in Design Studio's SDK in component.js. */
sap.designstudio.sdk.Component.subclass("com.sap.sample.scngauge.SCNGauge", function() {

	var that = this;

	this.init = function() {
		var myDiv = that.$()[0];					// added in as compared to browser D3
		
		var pi = Math.PI;							//import Pi
		
		var vis = d3.select(myDiv)					// selects myDiv 
	                .append("svg")					// appends svg element 
	                .attr("width", "100%")			// sets width to 100% 
	                .attr("height", "100%");		// sets height to 100% 
	              
		var arcDef = d3.svg.arc()
	                 .innerRadius(0)
	                 .outerRadius(70)
	                 .startAngle(45 * (pi/180))		// convert from degrees to radians
	                 .endAngle(3)
	                 
        var gaugeArc = vis.attr("width", "400").attr("height", "400").append("path")
	                      .style("fill", "red")
	                      .attr("transform", "translate(200,200)")
	                      .attr("d", arcDef);		
	};


});