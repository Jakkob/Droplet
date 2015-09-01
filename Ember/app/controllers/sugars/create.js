import Ember from 'ember';

export default Ember.Controller.extend({
	
	//Defines the default value of 'sugar-dial'
	newReading: 80
	// _initializeKnob: function() {
	// 	var self = this;
	// 	$(".dial").knob({
	// 		min: 40,
	// 		max: 150,
	// 		angleOffset: -125,
	// 		width: '100%',
	// 		angleArc: 250,
	// 		fgColor: '#8dc63f',
	// 		rotation: 'clockwise',
	// 		fontWeight: 'medium',
	// 		value: newReading,
	// 		change: function(v) {
	// 			self.set('value', v);
	// 		}.setTimeout(500),
	// 		format: function(val) {
	// 			return val + "mg/dL";
	// 		}
	// 	});
	// }.on('didInsertElement')
});
