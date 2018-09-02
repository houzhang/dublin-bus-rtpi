import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { Promise } from 'rsvp';

export default Route.extend({
  ajax: inject('ajax'),

  model: function() {
    this.store.findAll('route-list-information').then(res => { res })
    return Promise.all([
      this.get('ajax').request("https://data.smartdublin.ie/cgi-bin/rtpi/routelistinformation?operator=bac")
    ]).then((res) => {
      return res[0].results;
    });
  },

  afterModel(model) {
    let controller = this.controllerFor('bus-route');
    controller.set('filteredRoute', model); 
    controller.set('searchRoute', '');
    return true; 
  }

});
