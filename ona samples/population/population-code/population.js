var chart;

var chartData = [{"year":1960,"core":487,"innerSuburbs":326,"outerSuburbs":761},
{"year":1970,"core":497,"innerSuburbs":526,"outerSuburbs":1013},
{"year":1980,"core":425,"innerSuburbs":648,"outerSuburbs":1478},
{"year":1990,"core":394,"innerSuburbs":801,"outerSuburbs":2121},
{"year":2000,"core":416,"innerSuburbs":1066,"outerSuburbs":3067}];

var annotations = {
    1990: "The suburbs jump by more than 600,000 people -- they\'re practically exploding!",
    2000: "Inner city population is less than 1960, but not as low as it has been."
}

AmCharts.ready(function () {
    // SERIALL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "year";
    chart.plotAreaBorderAlpha = 0.2;
    chart.rotate = false;
    chart.marginTop = 50;
    
    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0.1;
    categoryAxis.axisAlpha = 0;
    categoryAxis.gridPosition = "start";
    
    // value                      
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.stackType = "regular";
    valueAxis.gridAlpha = 0.1;
    valueAxis.axisAlpha = 0;
    chart.addValueAxis(valueAxis);
    
    // GRAPHS
    // firstgraph 
    var graph = new AmCharts.AmGraph();
    graph.title = "Core";
    graph.labelText = "[[value]]";
    graph.valueField = "core";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#C72C95";
    graph.balloonText = "<b><span style='color:#C72C95'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
    chart.addGraph(graph);
    
    // second graph                              
    graph = new AmCharts.AmGraph();
    graph.title = "Inner suburbs";
    graph.labelText = "[[value]]";
    graph.valueField = "innerSuburbs";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#D8E0BD";
    graph.balloonText = "<b><span style='color:#afbb86'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
    chart.addGraph(graph);
    
    // third graph              
    graph = new AmCharts.AmGraph();
    graph.title = "Outer suburbs";
    graph.labelText = "[[value]]";
    graph.valueField = "outerSuburbs";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#B3DBD4";
    graph.balloonText = "<b><span style='color:#74bdb0'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
    chart.addGraph(graph);
    
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "right";
    legend.borderAlpha = 0.3;
    legend.horizontalGap = 10;
    legend.switchType = "v";
    chart.addLegend(legend);
    
    // WRITE
    chart.write("chartdiv");
    $.each(chart.categoryAxis.allLabels, function(index, label){
        if (annotations[$(label.node).text()]){
        label.attr({'fill': 'red', 'text-decoration': 'underline', 'cursor': 'pointer'})
        $(label.node).click(function(e){
            $('#annotation-div').html($(label.node).text() + ": " + annotations[$(label.node).text()])
        })
    }
    })
});

// Make chart 2D/3D
function setDepth() {
    if (document.getElementById("rb1").checked) {
        chart.depth3D = 0;
        chart.angle = 0;
    } else {
        chart.depth3D = 20;
        chart.angle = 30;
    }
    chart.validateNow();
}