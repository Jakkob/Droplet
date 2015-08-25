import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: '/'
});

Router.map(function() {
  this.route('index', { path: '/' });

  //Registration and log-in authentication routes
  this.route('register');
  this.route('login');

  this.route('sugars', { path: '/home'}, function() {
    this.route('index', { path: '/' });
    this.route('create', { path: '/create' });
    });
});

export default Router;
