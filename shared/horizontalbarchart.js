import * as d3 from 'd3';
import * as util from './utils';

//set up svg using margin conventions - we'll need plenty of room on the left for labels
var margin = {
    top: 0,
    right: 25,
    bottom: 15,
    left: 200
};

var MAX_LINE_SIZE = 25;

function sortData(data) {
  return data.sort(function (a, b) {
    return d3.ascending(a.value, b.value);
  })
}

function renderHorizontalBarChat(elem, unsortedData, width, height, sort) {
  if (util.isMobile()) {
    height *= 0.7;
  }
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
      // Once the labels have been created, we want to double check that
      // none of them are too long.
      .selectAll('.y .tick text') // select all the y tick texts
        .call(function(t){                
        t.each(function(d){ // for each one
            var self = d3.select(this);
            // Acquires the name of the current label being examined
            let name = self.text();
            // Check whether the label is too long and is composed of more than
            // one word.
            if (name.length > MAX_LINE_SIZE && name.split(" ").length > 1) {
                self.text(''); // clear out the current label name
                let list = name.split(" ");
                let num_lines = Math.min(1 + Math.floor(name.length/MAX_LINE_SIZE), list.length);
                let cur = 0;
                let split_name = [];
                for (let idx = 0; idx < num_lines; idx++) {
                    let str = list[cur];
                    let count = list[cur].length;
                    // Generates a subtring from the initial label that is less than the specified size
                    // or contains at most one word
                    while (cur < list.length - 1 && count + list[cur + 1].length + 1 <= MAX_LINE_SIZE) {
                        count += list[cur + 1].length + 1
                        str += " " + list[cur + 1]
                        cur += 1;
                    }
                    cur += 1;
                    split_name.push(str);
                }
                // We need to shift the label slightly to the left (-5) so it is not right next to the y axis
                self.append("tspan") // insert two tspans
                    .attr("x", -5)
                    .attr("dy", num_lines * -1)
                    .text(split_name[0]);
                for (let idx = 1; idx < num_lines; idx++) {
                    self.append("tspan") // insert two tspans
                        .attr("x", -5)
                        .attr("dy", 10)
                        .text(split_name[idx]);
                }
            }
        })
    });

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
