import Ember from 'ember';

export default Ember.Controller.extend({
	// sortProperties: ['sugars.time'],
 //  sortAscending: true,
  data: function() {
    var sugars = this.get('sugars'); 
    var data = {
      labels: [],
      datasets: []
    };
    // var timeFrame = function() {
    // 	var oldest = moment().year(2014);
    // 	var newest = moment();

    // 	var start = function calcStart() {
    // 		var newTime = newest;
    // 		sugars.forEach(function(item) {
    // 			if('id') {
    // 				var time = item.get('time');
	
	   //  			if(time < newTime) {
	   //  				newTime = time;
	   //  			}
	   //  		}
    // 		});
    // 		console.log(newTime);
    // 		return newTime;
    // 	};
    // 	console.log(start);

    // 	var end = function calcEnd() {
    // 		var oldTime = oldest;
    // 		sugars.forEach(function(item) {
    // 			if('id') {
    // 				var time = item.get('time');
	
	   //  			if(time > oldTime) {
	   //  				oldTime = time;
	   //  			}
	   //  		}
    // 		});
    // 		console.log(oldTime);
    // 		return oldTime;
    // 	};

    // 	var calendar = [
    // 		'January',
    // 		'February',
    // 		'March',
    // 		'April',
    // 		'May',
    // 		'June',
    // 		'July',
    // 		'August',
    // 		'September',
    // 		'October',
    // 		'November',
    // 		'December'
    // 	];

    // 	function prettyDate(input) {
    // 		var month = moment(input).month();
    // 		var day = moment(input).day();
    // 		console.log(month);
    // 		console.log(day);

    // 		if(day % 10 === 1) {
    // 			day = day + "st";
    // 		} else if(day % 10 === 2) {
    // 			day = day + "nd";
    // 		} else if(day % 10 === 3) {
    // 			day = day + "rd";
    // 		} else {
    // 			day = day + "th";
    // 		}

    // 		return calendar[month] + " " + day;
    // 	}

    // 	console.log(prettyDate(start));
    // 	console.log(prettyDate(end));

    // 	return prettyDate(start) + " - " + prettyDate(end);
    // };
    var dataset = {
      // label: timeFrame,
      fillColor: "rgba(0,138,132, 0.4)",
      scaleGridLineColor :" rgba(239,239,239,.4)",
      strokeColor: "#efefef",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: []
    };
    sugars.forEach(function(item) {
      if (item.get('id')) {
        var reading = item.get('reading');
        var newTime = item.get('time');
        var hours = newTime.getHours();
        var minutes = newTime.getMinutes();
        var ratioTime = Math.round(hours + minutes / 60) + ":00";
        dataset.data.push(reading);
        data.labels.push(ratioTime);
     }
   });
   data.datasets.push(dataset);
   return data;
  }.property('sugar')
});
