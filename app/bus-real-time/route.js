import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { Promise } from 'rsvp';

export default Route.extend({
  ajax: inject('ajax'),

  model(params) {
    return Promise.all([
      this.get('ajax').request("https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=" + params["stopId"] + "&routeid=" + params["route"] + "&operator=bac")
    ]).then((res) => {
      return res[0].results;
    });
  }
});

