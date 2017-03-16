
for(var i=0; i<5; i=i+1){
  var num = random(20,300);
  d3.select("svg")
    .append("line")
                  .attr({
                  "x1":0,
                  "y1":75+ 30*(i-1),
                  "x2":300,
                  "y2":75+ 30*(i-1),
                  "stroke":"black",
                  "stroke-width":1.5
                 }); 
  
}
