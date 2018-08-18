import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bus-route', { path: '/' });
  this.route('bus-route-detail');
  this.route('bus-real-time');
});

export default Router;
