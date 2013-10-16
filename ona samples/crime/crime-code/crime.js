
function initialize(){
	var canvas = new Raphael('crime-types')
	var myCircle = canvas.circle(200,100,50).attr({'fill': 'purple'})
	var myRectangle = canvas.rect(200,100,200, 50).attr({'stroke-width': 5, fill: 'blue'})
	var myLittleCircle = canvas.circle(200,100,25).attr({'fill': 'red'})
	myRectangle.click(function(){
		alert("I clicked it!")
	})

	myCircle.hover(
		function(){
			this.attr({fill:'url(http://placekitten.com/100/100)', opacity:0.5})
		}, 
		function(){
			this.attr({fill:'purple', opacity:1})

		}
	).toFront()


	function makeASquare(x,y){
		return canvas.rect(x,y,20,20)
	}

	function makeASquareChart(x, y, datapoint){

		for (var i=0; i<10; i++){
			var currentSquare = makeASquare(x+ (i*25),y );
			if ( 10*i < datapoint){
				if (10*(i+1)< datapoint){
					currentSquare.attr({fill:'red'})
				} else {
					var partialSquare = canvas.rect(x+ (i*25),y,((datapoint - (10*i))*2), 20)
					.attr({'fill': 'red', 'stroke': '#000'})
				}
			}
		}
	}
	var crimeData = [
		{"crimeCategory":"AGG ASSAULT","percent":"7.09%"},
		{"crimeCategory":"AUTO THEFT","percent":"14.72%"},
		{"crimeCategory":"BURGLARY","percent":"21.26%"},
		{"crimeCategory":"HOMICIDE","percent":"0.23%"},
		{"crimeCategory":"LARCENY","percent":"49.87%"},
		{"crimeCategory":"NULL","percent":"0.02%"},
		{"crimeCategory":"RAPE","percent":"0.29%"},
		{"crimeCategory":"ROBBERY","percent":"6.45%"},
		{"crimeCategory":"OTHER","percent":"0.06%"}
	]

	$.each(crimeData, function(index, item){
		canvas.text(130, 310 + (index * 50), item.crimeCategory)
		.attr({'font-size': 18, 'text-anchor': 'start'})
		makeASquareChart(300, 300 + (index * 50), parseFloat(item.percent));
	})

}

$(initialize);