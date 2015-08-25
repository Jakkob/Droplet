import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('sugar');
	},
	setupController: function(controller, model){
    controller.set('sugars', model);
  }
});
