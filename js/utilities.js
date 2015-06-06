(function () {
var raw = [
  { "hour":"Hour 1", "time":"00:00 - 01:00", "price":20.03, "result":145.4, "-500.00":173.4, "-60.10":173.4, "-60.00":173.4, "0.00":173.4, "0.10":145.4, "18.00":145.4, "18.10":145.4, "31.00":145.4, "31.10":-45.4, "32.00":-45.4, "32.10":-310.2, "33.00":-310.2, "33.10":-310.2, "36.00":-310.2, "36.10":-333.2, "39.00":-333.2, "39.10":-333.2, "53.00":-333.2, "53.10":-760.2, "3000.00":-760.2 },
  { "hour":"Hour 2", "time":"01:00 - 02:00", "price":20.48, "result":139.5, "-500.00":174.4, "-60.10":174.4, "-60.00":173.2, "0.00":173.2, "0.10":139.5, "18.00":139.5, "18.10":139.5, "31.00":139.5, "31.10":-51.1, "32.00":-51.1, "32.10":-310.3, "33.00":-310.3, "33.10":-310.3, "36.00":-310.3, "36.10":-333.3, "39.00":-333.3, "39.10":-333.3, "53.00":-333.3, "53.10":-760.3, "3000.00":-760.3 },
  { "hour":"Hour 3", "time":"02:00 - 03:00", "price":20.09, "result":22.2, "-500.00":148.7, "-60.10":148.7, "-60.00":44.9, "0.00":44.9, "0.10":22.2, "18.00":22.2, "18.10":22.2, "31.00":22.2, "31.10":-168.2, "32.00":-168.2, "32.10":-280.9, "33.00":-280.9, "33.10":-280.9, "36.00":-280.9, "36.10":-303.9, "39.00":-303.9, "39.10":-303.9, "53.00":-303.9, "53.10":-730.9, "3000.00":-730.9 },
  { "hour":"Hour 4", "time":"03:00 - 04:00", "price":18.84, "result":12.4, "-500.00":146.7, "-60.10":146.7, "-60.00":33.5, "0.00":33.5, "0.10":12.4, "18.00":12.4, "18.10":12.4, "31.00":12.4, "31.10":-178.1, "32.00":-178.1, "32.10":-278.4, "33.00":-278.4, "33.10":-278.4, "36.00":-278.4, "36.10":-301.4, "39.00":-301.4, "39.10":-301.4, "53.00":-301.4, "53.10":-728.4, "3000.00":-728.4 },
  { "hour":"Hour 5", "time":"04:00 - 05:00", "price":20.74, "result":100.4, "-500.00":174.9, "-60.10":174.9, "-60.00":124.5, "0.00":124.5, "0.10":100.4, "18.00":100.4, "18.10":100.4, "31.00":100.4, "31.10":-90.6, "32.00":-90.6, "32.10":-273.7, "33.00":-273.7, "33.10":-273.7, "36.00":-273.7, "36.10":-296.7, "39.00":-296.7, "39.10":-296.7, "53.00":-296.7, "53.10":-723.7, "3000.00":-723.7 },
  { "hour":"Hour 6", "time":"05:00 - 06:00", "price":28.49, "result":123.8, "-500.00":174.4, "-60.10":174.4, "-60.00":137.9, "0.00":137.9, "0.10":123.8, "18.00":123.8, "18.10":123.8, "31.00":123.8, "31.10":-67.2, "32.00":-67.2, "32.10":-269.4, "33.00":-269.4, "33.10":-269.4, "36.00":-269.4, "36.10":-292.4, "39.00":-292.4, "39.10":-292.4, "53.00":-292.4, "53.10":-719.4, "3000.00":-719.4 },
  { "hour":"Hour 7", "time":"06:00 - 07:00", "price":32.45, "result":-57.7, "-500.00":210.0, "-60.10":210.0, "-60.00":210.0, "0.00":210.0, "0.10":201.8, "18.00":201.8, "18.10":201.8, "31.00":201.8, "31.10":-23.2, "32.00":-23.2, "32.10":-261.2, "33.00":-261.2, "33.10":-261.2, "36.00":-261.2, "36.10":-261.2, "39.00":-261.2, "39.10":-291.2, "53.00":-291.2, "53.10":-718.2, "3000.00":-718.2 },
  { "hour":"Hour 8", "time":"07:00 - 08:00", "price":35.85, "result":-165.5, "-500.00":354.0, "-60.10":354.0, "-60.00":304.0, "0.00":304.0, "0.10":298.2, "18.00":298.2, "18.10":298.2, "31.00":298.2, "31.10":73.2, "32.00":73.2, "32.10":-165.5, "33.00":-165.5, "33.10":-165.5, "36.00":-165.5, "36.10":-165.5, "39.00":-165.5, "39.10":-195.5, "53.00":-195.5, "53.10":-555.5, "3000.00":-555.5 },
  { "hour":"Hour 9", "time":"08:00 - 09:00", "price":35.50, "result":-169.5, "-500.00":346.7, "-60.10":346.7, "-60.00":296.7, "0.00":296.7, "0.10":294.2, "18.00":294.2, "18.10":294.2, "31.00":294.2, "31.10":69.2, "32.00":69.2, "32.10":-169.5, "33.00":-169.5, "33.10":-169.5, "36.00":-169.5, "36.10":-169.5, "39.00":-169.5, "39.10":-199.5, "53.00":-199.5, "53.10":-559.5, "3000.00":-559.5 },
  { "hour":"Hour 10", "time":"09:00 - 10:00", "price":34.92, "result":-169.2, "-500.00":356.2, "-60.10":356.2, "-60.00":306.2, "0.00":306.2, "0.10":302.0, "18.00":302.0, "18.10":294.5, "31.00":294.5, "31.10":69.5, "32.00":69.5, "32.10":-169.2, "33.00":-169.2, "33.10":-169.2, "36.00":-169.2, "36.10":-169.2, "39.00":-169.2, "39.10":-199.2, "53.00":-199.2, "53.10":-559.2, "3000.00":-559.2 },
  { "hour":"Hour 11", "time":"10:00 - 11:00", "price":34.69, "result":-201.5, "-500.00":353.5, "-60.10":353.5, "-60.00":303.5, "0.00":303.5, "0.10":296.9, "18.00":296.9, "18.10":262.2, "31.00":262.2, "31.10":37.2, "32.00":37.2, "32.10":-201.5, "33.00":-201.5, "33.10":-201.5, "36.00":-201.5, "36.10":-201.5, "39.00":-201.5, "39.10":-231.5, "53.00":-231.5, "53.10":-591.5, "3000.00":-591.5 },
  { "hour":"Hour 12", "time":"11:00 - 12:00", "price":34.10, "result":-234.4, "-500.00":319.0, "-60.10":319.0, "-60.00":269.0, "0.00":269.0, "0.10":264.4, "18.00":264.4, "18.10":229.3, "31.00":229.3, "31.10":4.3, "32.00":4.3, "32.10":-234.4, "33.00":-234.4, "33.10":-234.4, "36.00":-234.4, "36.10":-234.4, "39.00":-234.4, "39.10":-264.4, "53.00":-264.4, "53.10":-624.4, "3000.00":-624.4 },
  { "hour":"Hour 13", "time":"12:00 - 13:00", "price":34.82, "result":-258.6, "-500.00":290.1, "-60.10":290.1, "-60.00":240.1, "0.00":240.1, "0.10":236.3, "18.00":236.3, "18.10":205.1, "31.00":205.1, "31.10":14.1, "32.00":14.1, "32.10":-258.6, "33.00":-258.6, "33.10":-258.6, "36.00":-258.6, "36.10":-281.6, "39.00":-281.6, "39.10":-281.6, "53.00":-281.6, "53.10":-641.6, "3000.00":-641.6 },
  { "hour":"Hour 14", "time":"13:00 - 14:00", "price":34.84, "result":-284.4, "-500.00":262.2, "-60.10":262.2, "-60.00":212.2, "0.00":212.2, "0.10":208.5, "18.00":208.5, "18.10":179.3, "31.00":179.3, "31.10":-11.7, "32.00":-11.7, "32.10":-284.4, "33.00":-284.4, "33.10":-284.4, "36.00":-284.4, "36.10":-307.4, "39.00":-307.4, "39.10":-307.4, "53.00":-307.4, "53.10":-667.4, "3000.00":-667.4 },
  { "hour":"Hour 15", "time":"14:00 - 15:00", "price":34.77, "result":-295.9, "-500.00":247.3, "-60.10":247.3, "-60.00":197.3, "0.00":197.3, "0.10":196.8, "18.00":196.8, "18.10":167.8, "31.00":167.8, "31.10":-23.2, "32.00":-23.2, "32.10":-295.9, "33.00":-295.9, "33.10":-295.9, "36.00":-295.9, "36.10":-318.9, "39.00":-318.9, "39.10":-318.9, "53.00":-318.9, "53.10":-678.9, "3000.00":-678.9 },
  { "hour":"Hour 16", "time":"15:00 - 16:00", "price":33.46, "result":-366.4, "-500.00":169.6, "-60.10":169.6, "-60.00":119.6, "0.00":119.6, "0.10":118.9, "18.00":118.9, "18.10":89.9, "31.00":89.9, "31.10":-135.1, "32.00":-135.1, "32.10":-366.4, "33.00":-366.4, "33.10":-366.4, "36.00":-366.4, "36.10":-366.4, "39.00":-366.4, "39.10":-396.4, "53.00":-396.4, "53.10":-756.4, "3000.00":-756.4 },
  { "hour":"Hour 17", "time":"16:00 - 17:00", "price":33.29, "result":-340.4, "-500.00":203.3, "-60.10":203.3, "-60.00":153.3, "0.00":153.3, "0.10":152.3, "18.00":152.3, "18.10":123.3, "31.00":123.3, "31.10":-101.7, "32.00":-101.7, "32.10":-340.4, "33.00":-340.4, "33.10":-340.4, "36.00":-340.4, "36.10":-340.4, "39.00":-340.4, "39.10":-370.4, "53.00":-370.4, "53.10":-730.4, "3000.00":-730.4 },
  { "hour":"Hour 18", "time":"17:00 - 18:00", "price":33.50, "result":-337.4, "-500.00":206.2, "-60.10":206.2, "-60.00":156.2, "0.00":156.2, "0.10":155.3, "18.00":155.3, "18.10":126.3, "31.00":126.3, "31.10":-98.7, "32.00":-98.7, "32.10":-337.4, "33.00":-337.4, "33.10":-337.4, "36.00":-337.4, "36.10":-337.4, "39.00":-337.4, "39.10":-367.4, "53.00":-367.4, "53.10":-727.4, "3000.00":-727.4 },
  { "hour":"Hour 19", "time":"18:00 - 19:00", "price":33.72, "result":-270.1, "-500.00":275.4, "-60.10":275.4, "-60.00":225.4, "0.00":225.4, "0.10":223.8, "18.00":223.8, "18.10":193.6, "31.00":193.6, "31.10":2.6, "32.00":2.6, "32.10":-270.1, "33.00":-270.1, "33.10":-270.1, "36.00":-270.1, "36.10":-293.1, "39.00":-293.1, "39.10":-293.1, "53.00":-293.1, "53.10":-653.1, "3000.00":-653.1 },
  { "hour":"Hour 20", "time":"19:00 - 20:00", "price":32.96, "result":-189.4, "-500.00":361.4, "-60.10":361.4, "-60.00":311.4, "0.00":311.4, "0.10":309.4, "18.00":309.4, "18.10":274.3, "31.00":274.3, "31.10":49.3, "32.00":49.3, "32.10":-189.4, "33.00":-189.4, "33.10":-189.4, "36.00":-189.4, "36.10":-189.4, "39.00":-189.4, "39.10":-219.4, "53.00":-219.4, "53.10":-579.4, "3000.00":-579.4 },
  { "hour":"Hour 21", "time":"20:00 - 21:00", "price":32.54, "result":-143.6, "-500.00":364.0, "-60.10":364.0, "-60.00":314.0, "0.00":314.0, "0.10":311.0, "18.00":311.0, "18.10":283.5, "31.00":283.5, "31.10":58.5, "32.00":58.5, "32.10":-180.2, "33.00":-180.2, "33.10":-180.2, "36.00":-180.2, "36.10":-180.2, "39.00":-180.2, "39.10":-210.2, "53.00":-210.2, "53.10":-570.2, "3000.00":-570.2 },
  { "hour":"Hour 22", "time":"21:00 - 22:00", "price":32.50, "result":-85.3, "-500.00":330.2, "-60.10":330.2, "-60.00":280.2, "0.00":280.2, "0.10":276.5, "18.00":276.5, "18.10":276.3, "31.00":276.3, "31.10":51.3, "32.00":51.3, "32.10":-187.4, "33.00":-187.4, "33.10":-187.4, "36.00":-187.4, "36.10":-187.4, "39.00":-187.4, "39.10":-217.4, "53.00":-217.4, "53.10":-577.4, "3000.00":-577.4 },
  { "hour":"Hour 23", "time":"22:00 - 23:00", "price":31.93, "result":42.1, "-500.00":236.7, "-60.10":236.7, "-60.00":236.7, "0.00":236.7, "0.10":233.1, "18.00":233.1, "18.10":233.1, "31.00":233.1, "31.10":42.1, "32.00":42.1, "32.10":-230.6, "33.00":-230.6, "33.10":-230.6, "36.00":-230.6, "36.10":-253.6, "39.00":-253.6, "39.10":-253.6, "53.00":-253.6, "53.10":-680.6, "3000.00":-680.6 },
  { "hour":"Hour 24", "time":"23:00 - 00:00", "price":29.49, "result":148.8, "-500.00":151.2, "-60.10":151.2, "-60.00":151.2, "0.00":151.2, "0.10":148.8, "18.00":148.8, "18.10":148.8, "31.00":148.8, "31.10":-76.2, "32.00":-76.2, "32.10":-76.2, "33.00":-76.2, "33.10":-312.6, "36.00":-312.6, "36.10":-312.6, "39.00":-312.6, "39.10":-342.6, "53.00":-342.6, "53.10":-769.6, "3000.00":-769.6 }
];

var steps = [];
for (var property in raw[0]) {
  if (raw[0].hasOwnProperty(property) && !isNaN(+property)) {
    steps.push(property);
  }
}
steps.sort(function(a,b) {
  return (+a) - (+b);
});

var table = d3.select("#hourly-order-table")
              .append("div")
              .attr("class", "table");

// header row
var row = table.append("div")
              .attr("class", "row");
row.append("div")
  .attr("class", "hour cell");
row.append("div")
  .attr("class", "time cell");
steps.forEach(function(d, i) {
  row.append("div")
    .attr("class", function() {
      var classes = ["price-step", "cell"];
      if (i === 0) {
        classes.push("min");
      } else if (i === (steps.length - 1)) {
        classes.push("max");
      }
      return classes.join(" ");
    })
    .text(d)
    .append("span")
    .attr("class","units")
    .text("EUR");
});

var chartWidth = 1000, chartHeight = 30;
var x = d3.scale.linear()
          .range([0, chartWidth])
          .domain([-500,3000]);
var y = d3.scale.linear()
          .range([chartHeight,0])
          .domain([-790,370]);
var line = d3.svg.line()
              .x(function(d) { return x(d.step); })
              .y(function(d) { return y(d.vol); });

// hourly rows
var data;
raw.forEach(function(step, i) {
  data = [];
  row = table.append("div")
            .attr("class", "row");
  row.append("div")
    .attr("class", "hour cell")
    .text(step.hour);
  row.append("div")
    .attr("class", "time cell")
    .text(step.time);
  steps.forEach(function(d,j) {
    // numbers
    row.append("div")
      .attr("class", function() {
        var classes = ["price-step","cell"];
        if (j === 0) {
          classes.push("min");
        } else if (j === (steps.length - 1)) {
          classes.push("max");
        }
        return classes.join(" ");
      })
      .text(function() {
        return step[d].toFixed(1);
      })
      .append("span")
      .attr("class","units")
      .text("MW");

    // set up data for chart
    data.push({ step: +d, vol: +step[d] });
  });

  // chart
  var chart = row.append("div")
              .attr("class", "curve cell")
              .append("svg")
              .attr("viewBox", "0 0 " + chartWidth + " " + chartHeight);
  chart.append("line")
      .attr("class", "origin")
      .attr("x1", 0)
      .attr("x2", chartWidth)
      .attr("y1", y(0))
      .attr("y2", y(0));
  chart.append("line")
      .attr("class", "origin")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y1", 0)
      .attr("y2", chartHeight);
  chart.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
  chart.append("line")
      .attr("class", "price")
      .attr("x1", x(+step.price))
      .attr("x2", x(+step.price))
      .attr("y1", 0)
      .attr("y2", chartHeight);
});

})();
