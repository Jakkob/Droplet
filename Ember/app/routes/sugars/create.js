import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		createSugar: function(input) {
			var test = this.store.createRecord('sugar', {
				reading: Math.round(input),
				time: new Date()
			});

			var self = this;

			
			if(test.reading !== null) {
				test.save().then(function() {
					self.transitionToRoute('home');	
				}, function() {
					console.error('Something appears to have gone wrong, data not submitted!');	
				});
			}
		}
	}
});

