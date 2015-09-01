import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		createSugar: function(input) {
			var test = this.store.createRecord('sugar', {
				reading: Math.round(input),
				time: new Date()
			});

			var self = this;

			function onSuccess() {
				self.transitionTo('sugars.index');
			}

			function onFail() {
				console.error('Something appears to have gone wrong, data not submitted!');	
			}

			
			if(test.reading != null) {
				test.save().then(onSuccess, onFail);
			}
		}
	}
});

