import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
		createUser: function() {
			var newUser = this.store.createRecord('user', {
				email: this.get('email'),
				password: this.get('password'),
				passwordConfirmation: this.get('passwordConfirmation')
			});

			var self = this;

			console.log(this.get('email'));
			console.log(this.get('password'));
			console.log(this.get('passwordConfirmation'));

			function onSuccess() {
				self.transitionToRoute('home');
			}

			function onFail() {
				console.error("Something went wrong. Account not created!");
			}

			newUser.save().then(onSuccess, onFail);
		}
	}
});
