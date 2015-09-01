import Ember from 'ember';

export default Ember.Component.extend({
	_initializeKnob: function() {
		var self = this;
		$(".dial").knob({
			min: 40,
			max: 150,
			angleOffset: -125,
			width: '100%',
			angleArc: 250,
			fgColor: '#8dc63f',
			rotation: 'clockwise',
			fontWeight: 'medium',
			change: function(v) {
				self.set('value', v);
			},
			format: function(val) {
				return val + "mg/dL";
			}
		});
		$(".dial").val(this.get('value'));
	}.on('didInsertElement')
});

