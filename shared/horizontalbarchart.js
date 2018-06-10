import * as d3 from 'd3';

//set up svg using margin conventions - we'll need plenty of room on the left for labels
var margin = {
    top: 0,
    right: 25,
    bottom: 15,
    left: 200
};


function sortData(data) {
  return data.sort(function (a, b) {
    return d3.ascending(a.value, b.value);
  })
}

function renderHorizontalBarChat(elem, unsortedData, width, height, sort) {
  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  let data = unsortedData;
  if (sort) {
    data = sortData(data);
  } else {
    data = data.reverse();
  }

  // Initial chart
  var svg = elem.append("svg")
      .attr("class", 'horizontal-bar-chart')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X labels
  var x = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, function (d) {
        return d.value;
      })]);

  // Y labels
  var y = d3.scaleBand()
      .rangeRound([height, 0])
      .domain(data.map(function (d) {
          return d.name;
      }));


  //make y axis to show bar names
  var yAxis = d3.axisLeft(y)
      //no tick marks
      .tickSize(0);

  var gy = svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  var bars = svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("g")

  //append rects
  bars.append("rect")
      .attr("class", "bar")
      .attr("y", function (d) {
          return y(d.name) + y.bandwidth() / 4;
      })
      .attr("paddingTop", y.bandwidth() / 4)
      .attr("height", y.bandwidth() / 2)
      .attr("x", 1)
      .attr("width", function (d) {
          return x(d.value);
      });

  //add a value label to the right of each bar
  bars.append("text")
      .attr("class", "label")
      //y position of the label is halfway down the bar
      .attr("y", function (d) {
          return y(d.name) + y.bandwidth() / 2 + 4;
      })
      //x position is 3 pixels to the right of the bar
      .attr("x", function (d) {
          return x(d.value) + 3;
      })
      .text(function (d) {
          return d.value;
      });
}

export { renderHorizontalBarChat };
