for (var i ;i < 5;i = i + 1){
    
d3.select("svg")
  .append("line")
  .attr({
    "x1": 0, 
    "y1": 45+ 27*i,
    "x2": 350,
    "y2": 45+ 27*i,
    "stroke"= "black",
    "stroke-width"= 1.5>
});
}
