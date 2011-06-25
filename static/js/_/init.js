(function() {
  $(function() {
    var chart, path, xy;
    xy = d3.geo.mercator().scale(1200);
    chart = d3.select("#canvas").append("svg:svg");
    path = d3.geo.path().projection(xy);
    return d3.json("/map", function(collection) {
      return chart.selectAll("path").data(collection.features).enter().append("svg:path").attr("d", path).append("svg:title").text(function(d) {
        return d.properties.name;
      });
    });
  });
}).call(this);
