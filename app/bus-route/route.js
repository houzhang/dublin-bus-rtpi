import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { Promise } from 'rsvp';

export default Route.extend({
  ajax: inject('ajax'),

  model: function() {
    return Promise.all([
      this.get('ajax').request("https://data.smartdublin.ie/cgi-bin/rtpi/routelistinformation")
    ]).then((res) => {
      return res[0].results;
    });
  }
});
